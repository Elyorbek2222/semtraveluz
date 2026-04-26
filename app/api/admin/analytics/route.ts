/**
 * Admin Analytics API
 * Returns KPIs and metrics for the dashboard
 */

import { NextRequest, NextResponse } from 'next/server';
import { getDashboardAnalytics } from '@/seo/utils/analytics';

// Mark this route as dynamic (don't prerender)
export const dynamic = 'force-dynamic';

// ============================================================================
// GET — Retrieve Analytics Data
// ============================================================================
export async function GET(request: NextRequest) {
  try {
    const daysParam = request.nextUrl.searchParams.get('days');
    const days = daysParam ? parseInt(daysParam) : 30;

    // Validate days parameter
    if (isNaN(days) || days < 1 || days > 365) {
      return NextResponse.json(
        { error: 'Invalid days parameter (1-365)' },
        { status: 400 }
      );
    }

    const analytics = await getDashboardAnalytics(days);

    return NextResponse.json({
      success: true,
      data: analytics,
      cached: false,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(), // 5 min cache
    });
  } catch (error) {
    console.error('[ANALYTICS ERROR]', error);

    // Return default analytics if database is unreachable
    const defaultAnalytics = {
      blog: {
        totalGenerated: 0,
        totalPublished: 0,
        avgSeoScore: 0,
        totalWords: 0,
        avgWordCount: 0,
        scoreDistribution: {
          excellent: 0,
          good: 0,
          needsWork: 0,
          poor: 0,
        },
      },
      cron: {
        totalRuns: 0,
        successfulRuns: 0,
        failedRuns: 0,
        successRate: 0,
        avgDuration: 0,
        totalTokensUsed: 0,
      },
      period: {
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        endDate: new Date(),
      },
    };

    return NextResponse.json({
      success: true,
      data: defaultAnalytics,
      cached: false,
      offline: true,
      message: 'Database unavailable - showing default analytics',
      expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
    });
  }
}

// ============================================================================
// POST — Generate Custom Report
// ============================================================================
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { days = 30, format = 'json' } = body;

    const analytics = await getDashboardAnalytics(days);

    if (format === 'csv') {
      // Convert to CSV (simplified)
      const csv = convertToCSV(analytics);
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': 'attachment; filename="analytics.csv"',
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: analytics,
      format: 'json',
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// ============================================================================
// Helper: Convert Analytics to CSV
// ============================================================================
function convertToCSV(analytics: any): string {
  const { blog, cron, period } = analytics;

  const lines: string[] = [
    'SEM Travel Analytics Report',
    `Period: ${period.startDate.toISOString().split('T')[0]} to ${period.endDate.toISOString().split('T')[0]}`,
    '',
    'BLOG METRICS',
    `Total Generated,${blog.totalGenerated}`,
    `Total Published,${blog.totalPublished}`,
    `Average SEO Score,${blog.avgSeoScore}/100`,
    `Total Words Generated,${blog.totalWords}`,
    `Average Words Per Post,${blog.avgWordCount}`,
    '',
    'SEO SCORE DISTRIBUTION',
    `Excellent (85-100),${blog.scoreDistribution.excellent}`,
    `Good (65-84),${blog.scoreDistribution.good}`,
    `Needs Work (50-64),${blog.scoreDistribution.needsWork}`,
    `Poor (<50),${blog.scoreDistribution.poor}`,
    '',
    'CRON JOB METRICS',
    `Total Runs,${cron.totalRuns}`,
    `Successful Runs,${cron.successfulRuns}`,
    `Failed Runs,${cron.failedRuns}`,
    `Success Rate,${cron.successRate}%`,
    `Average Duration,${cron.avgDuration}ms`,
    `Total Tokens Used,${cron.totalTokensUsed}`,
  ];

  return lines.join('\n');
}
