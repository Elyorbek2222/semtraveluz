/**
 * Analytics Utilities
 * Calculate KPIs for the dashboard
 */

import { prisma } from '@/lib/prisma';

// ============================================================================
// Types
// ============================================================================
export interface AnalyticsPeriod {
  startDate: Date;
  endDate: Date;
  days: number;
}

export interface BlogAnalytics {
  period: AnalyticsPeriod;
  totalGenerated: number;
  totalPublished: number;
  avgSeoScore: number;
  minSeoScore: number;
  maxSeoScore: number;
  scoreDistribution: {
    excellent: number; // 85-100
    good: number; // 65-84
    needsWork: number; // 50-64
    poor: number; // <50
  };
  byStatus: {
    pending_generation: number;
    generated: number;
    pending_review: number;
    approved: number;
    published: number;
    rejected: number;
    archived: number;
  };
  byCategory: {
    [key: string]: number;
  };
  languageCount: {
    uz: number;
    ru: number;
    en: number;
  };
  avgWordCount: number;
  totalWords: number;
  translationSuccessRate: number;
  estimatedTokenCost: number;
}

export interface CronAnalytics {
  totalRuns: number;
  successfulRuns: number;
  failedRuns: number;
  successRate: number;
  lastRun?: {
    date: Date;
    status: string;
    postId?: string;
    seoScore?: number;
    duration: number;
  };
  avgDuration: number;
  totalTokensUsed: number;
  avgTokensPerRun: number;
}

// ============================================================================
// Blog Analytics
// ============================================================================
export async function getBlogAnalytics(daysBack: number = 30): Promise<BlogAnalytics> {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - daysBack);

  // Get all posts in period
  const posts = await prisma.blogPost.findMany({
    where: {
      createdAt: { gte: startDate, lte: endDate },
    },
  });

  const publishedPosts = posts.filter((p) => p.status === 'published');

  // Score distribution
  const scoreDistribution = {
    excellent: posts.filter((p) => p.seoScore >= 85).length,
    good: posts.filter((p) => p.seoScore >= 65 && p.seoScore < 85).length,
    needsWork: posts.filter((p) => p.seoScore >= 50 && p.seoScore < 65).length,
    poor: posts.filter((p) => p.seoScore < 50).length,
  };

  // By status
  const byStatus = {
    pending_generation: posts.filter((p) => p.status === 'pending_generation').length,
    generated: posts.filter((p) => p.status === 'generated').length,
    pending_review: posts.filter((p) => p.status === 'pending_review').length,
    approved: posts.filter((p) => p.status === 'approved').length,
    published: posts.filter((p) => p.status === 'published').length,
    rejected: posts.filter((p) => p.status === 'rejected').length,
    archived: posts.filter((p) => p.status === 'archived').length,
  };

  // By category
  const byCategory: { [key: string]: number } = {};
  posts.forEach((p) => {
    if (p.category) {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
    }
  });

  // Language count (all posts have en,uz,ru)
  const languageCount = {
    uz: posts.length,
    ru: posts.length,
    en: posts.length,
  };

  // Average metrics
  const avgSeoScore =
    posts.length > 0
      ? Math.round(posts.reduce((sum, p) => sum + p.seoScore, 0) / posts.length)
      : 0;

  const minSeoScore = posts.length > 0 ? Math.min(...posts.map((p) => p.seoScore)) : 0;
  const maxSeoScore = posts.length > 0 ? Math.max(...posts.map((p) => p.seoScore)) : 0;

  const totalWords = posts.reduce((sum, p) => sum + p.wordCount, 0);
  const avgWordCount = posts.length > 0 ? Math.round(totalWords / posts.length) : 0;

  // Estimate cost (Claude Haiku ~$0.00032 per 1K input tokens)
  // Average blog post: 1000 words = ~4000 tokens (4x words)
  // Haiku: $0.00032/1K tokens
  const estimatedInputTokens = posts.length * 4000;
  const estimatedOutputTokens = posts.length * 2000; // Translation + generation
  const totalEstimatedTokens = estimatedInputTokens + estimatedOutputTokens;
  const estimatedTokenCost = (totalEstimatedTokens / 1000) * 0.00032;

  // Translation success (assume 95% for now, could track actual)
  const translationSuccessRate = 0.95;

  return {
    period: {
      startDate,
      endDate,
      days: daysBack,
    },
    totalGenerated: posts.length,
    totalPublished: publishedPosts.length,
    avgSeoScore,
    minSeoScore,
    maxSeoScore,
    scoreDistribution,
    byStatus,
    byCategory,
    languageCount,
    avgWordCount,
    totalWords,
    translationSuccessRate,
    estimatedTokenCost,
  };
}

// ============================================================================
// Cron Analytics
// ============================================================================
export async function getCronAnalytics(daysBack: number = 30): Promise<CronAnalytics> {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - daysBack);

  const runs = await prisma.cronExecution.findMany({
    where: {
      createdAt: { gte: startDate, lte: endDate },
    },
    orderBy: { createdAt: 'desc' },
  });

  const successfulRuns = runs.filter((r) => r.status === 'success').length;
  const failedRuns = runs.filter((r) => r.status === 'failed').length;
  const successRate =
    runs.length > 0 ? Math.round((successfulRuns / runs.length) * 100) : 0;

  const lastRun = runs[0]
    ? {
        date: runs[0].createdAt,
        status: runs[0].status,
        postId: runs[0].postId || undefined,
        seoScore: runs[0].seoScore || undefined,
        duration: runs[0].duration || 0,
      }
    : undefined;

  const avgDuration =
    runs.length > 0
      ? Math.round(
          runs.reduce((sum, r) => sum + (r.duration || 0), 0) / runs.length
        )
      : 0;

  const totalTokensUsed = runs.reduce((sum, r) => sum + (r.tokensUsed || 0), 0);
  const avgTokensPerRun =
    runs.length > 0 ? Math.round(totalTokensUsed / runs.length) : 0;

  return {
    totalRuns: runs.length,
    successfulRuns,
    failedRuns,
    successRate,
    lastRun,
    avgDuration,
    totalTokensUsed,
    avgTokensPerRun,
  };
}

// ============================================================================
// Combined Dashboard Analytics
// ============================================================================
export async function getDashboardAnalytics(daysBack: number = 30) {
  const [blogAnalytics, cronAnalytics] = await Promise.all([
    getBlogAnalytics(daysBack),
    getCronAnalytics(daysBack),
  ]);

  return {
    period: blogAnalytics.period,
    blog: blogAnalytics,
    cron: cronAnalytics,
    lastUpdated: new Date(),
  };
}

// ============================================================================
// Helper: Format Currency
// ============================================================================
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(value);
}

// ============================================================================
// Helper: Format Duration
// ============================================================================
export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${(ms / 60000).toFixed(1)}m`;
}

// ============================================================================
// Helper: Get Score Color
// ============================================================================
export function getScoreColor(score: number): string {
  if (score >= 85) return 'bg-green-100 text-green-800';
  if (score >= 65) return 'bg-yellow-100 text-yellow-800';
  if (score >= 50) return 'bg-orange-100 text-orange-800';
  return 'bg-red-100 text-red-800';
}
