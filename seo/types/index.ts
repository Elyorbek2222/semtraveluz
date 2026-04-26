/**
 * SEM Travel.uz — SEO Automation Type Definitions
 * All TypeScript interfaces for the SEO pipeline
 */

// ============================================================================
// KEYWORD
// ============================================================================
export interface Keyword {
  id?: string;
  keyword: string;
  niche: string;
  language: 'uz' | 'ru' | 'en';
  searchVolume: number;
  difficulty: 'easy' | 'medium' | 'hard';
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  keywordType?: 'primary' | 'secondary' | 'lsi' | 'longtail';
  relatedKeywords?: string[];
  postCount?: number;
  isActive?: boolean;
  lastUsedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KeywordResearchResult {
  niche: string;
  language: string;
  keywords: Keyword[];
  timestamp: Date;
  tokensUsed: number;
}

// ============================================================================
// ARTICLE
// ============================================================================
export interface Article {
  html: string;
  wordCount: number;
  metaTitle: string;
  metaDescription: string;
  language: 'uz' | 'ru' | 'en';
  images?: string[];
  links?: string[];
}

export interface ArticleGenerationParams {
  keyword: string;
  difficulty: 'easy' | 'medium' | 'hard';
  niche?: string;
  language: 'uz' | 'ru' | 'en';
}

// ============================================================================
// SEO AUDIT
// ============================================================================
export interface AuditCriterion {
  criterion: string;
  maxPoints: number;
  earnedPoints: number;
  passed: boolean;
  details?: string;
}

export interface AuditResult {
  totalScore: number; // 0-100
  breakdown: AuditCriterion[];
  criticalIssues: string[];
  warnings: string[];
  recommendation: 'publish' | 'review' | 'refine' | 'reject';
  analysisDate: Date;
  timeToScore: number; // ms
}

export interface SEOMetrics {
  keywordDensity: number; // %
  h1Count: number;
  h2Count: number;
  internalLinksCount: number;
  imageCount: number;
  avgSentenceLength: number;
  avgWordLength: number;
  readabilityScore: number;
}

// ============================================================================
// TRANSLATION
// ============================================================================
export interface TranslationResult {
  language: 'uz' | 'ru' | 'en';
  html: string;
  success: boolean;
  error?: string;
  tokensUsed: number;
  duration: number; // ms
  retries: number;
}

export interface MultilingualContent {
  uz: Article;
  ru?: Article;
  en?: Article;
}

// ============================================================================
// BLOG POST
// ============================================================================
export type BlogPostStatus =
  | 'pending_generation'
  | 'generated'
  | 'pending_review'
  | 'approved'
  | 'published'
  | 'rejected'
  | 'archived';

export interface BlogPost {
  id: string;
  slug: string;
  title: {
    uz: string;
    ru?: string;
    en?: string;
  };
  content: {
    uz: string;
    ru?: string;
    en?: string;
  };
  metaTitle: {
    uz: string;
    ru?: string;
    en?: string;
  };
  metaDescription: {
    uz: string;
    ru?: string;
    en?: string;
  };
  keyword: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  lsiKeywords?: string[];
  seoScore: number; // 0-100
  seoBreakdown?: AuditCriterion[];
  status: BlogPostStatus;
  publishedAt?: Date;
  reviewedAt?: Date;
  reviewedBy?: string;
  wordCount: number;
  languages: string[]; // ["uz", "ru", "en"]
  category?: string; // "turlar", "mehmonxona", "viza", "blog"
  tags?: string[];
  imageUrl?: string;
  featureImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// GENERATION LOG
// ============================================================================
export type LogAction =
  | 'research'
  | 'generate'
  | 'audit'
  | 'refine'
  | 'translate'
  | 'save'
  | 'notify'
  | 'publish';

export type LogStatus = 'success' | 'failed' | 'skipped' | 'pending';

export interface GenerationLog {
  id: string;
  blogPostId: string;
  action: LogAction;
  status: LogStatus;
  tokensUsed: number;
  duration: number; // ms
  error?: string;
  errorDetails?: string;
  details?: Record<string, unknown>;
  createdAt: Date;
}

export interface GenerationStats {
  totalLogs: number;
  successCount: number;
  failureCount: number;
  skippedCount: number;
  totalTokensUsed: number;
  totalDuration: number;
  averageTokensPerAction: number;
  estimatedCost: number;
}

// ============================================================================
// PIPELINE
// ============================================================================
export interface PipelineStep {
  name: LogAction;
  status: LogStatus;
  startTime: Date;
  endTime?: Date;
  error?: string;
  tokensUsed?: number;
  data?: unknown;
}

export interface PipelineResult {
  postId: string;
  keyword: string;
  niche?: string;
  seoScore: number;
  languages: string[];
  status: 'success' | 'failed';
  duration: number; // ms
  tokensUsed: number;
  steps: PipelineStep[];
  error?: string;
  timestamp: Date;
}

export interface PipelineConfig {
  maxRetries: number;
  timeoutMs: number;
  autoPublish: boolean;
  notificationChannels: Array<'email' | 'telegram'>;
  languages: Array<'uz' | 'ru' | 'en'>;
}

// ============================================================================
// FEATURE FLAGS
// ============================================================================
export interface FeatureFlags {
  BLOG_AUTO_GENERATION: boolean;
  BLOG_TRANSLATION_ENABLED: boolean;
  BLOG_NOTIFICATION_ENABLED: boolean;
  BLOG_AUTO_PUBLISH: boolean;
  BLOG_MAX_ARTICLES_PER_RUN: number;
}

// ============================================================================
// API RESPONSE
// ============================================================================
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
  requestId?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// ============================================================================
// ANALYTICS
// ============================================================================
export interface DashboardMetrics {
  postsGenerated30d: number;
  avgSeoScore: number;
  refinementRate: number; // %
  estimatedCost30d: number;
  translationSuccessRate: number; // %
  commonIssues: Record<string, number>;
  lowScoringArticles: number;
  tokenUsage: {
    total: number;
    byModel: Record<string, number>;
    byAction: Record<string, number>;
  };
}

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  label?: string;
}

// ============================================================================
// CLAUDE API
// ============================================================================
export interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ClaudeResponse {
  content: Array<{
    type: 'text';
    text: string;
  }>;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

// ============================================================================
// ERROR
// ============================================================================
export class SEOError extends Error {
  constructor(
    public code: string,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'SEOError';
  }
}

export class ValidationError extends SEOError {
  constructor(message: string, details?: unknown) {
    super('VALIDATION_ERROR', message, details);
    this.name = 'ValidationError';
  }
}

export class APIError extends SEOError {
  constructor(message: string, details?: unknown) {
    super('API_ERROR', message, details);
    this.name = 'APIError';
  }
}
