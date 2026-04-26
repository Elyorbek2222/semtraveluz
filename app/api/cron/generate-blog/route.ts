/**
 * Cron Job — Automatic Blog Post Generation
 * Schedule: Monday & Thursday 8:00 AM UTC
 * Runs the full 10-step content pipeline
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { runContentPipeline, DEFAULT_PIPELINE_CONFIG } from '@/seo/pipeline/content-pipeline';
import { sendBlogPostNotification } from '@/seo/notifications/notify';

// Mark this route as dynamic (don't prerender)
export const dynamic = 'force-dynamic';

// ============================================================================
// Auth Check
// ============================================================================
function verifyCronSecret(request: NextRequest): boolean {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  const cronSecret = process.env.CRON_SECRET || 'super-secret-cron-token';

  return token === cronSecret;
}

// ============================================================================
// GET — Health Check
// ============================================================================
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'healthy',
    service: 'Blog generation cron',
    schedule: 'Monday & Thursday 8:00 AM UTC',
    nextRun: getNextCronTime(),
    timestamp: new Date().toISOString(),
  });
}

// ============================================================================
// POST — Execute Cron Job
// ============================================================================
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    // Verify Vercel cron signature (Vercel adds Authorization header)
    if (!verifyCronSecret(request)) {
      console.warn('[CRON] Unauthorized request');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check feature flag
    const flag = await prisma.featureFlag.findUnique({
      where: { name: 'BLOG_AUTO_GENERATION' },
    });

    if (flag && !flag.enabled) {
      console.log('[CRON] Blog auto-generation disabled');
      return NextResponse.json({
        success: false,
        reason: 'Feature disabled',
        timestamp: new Date().toISOString(),
      });
    }

    // Log cron execution start
    await prisma.cronExecution.create({
      data: {
        topic: 'generate-blog',
        status: 'pending',
      },
    });

    console.log('[CRON] Starting blog post generation...');

    // Run content pipeline
    const pipelineConfig = {
      ...DEFAULT_PIPELINE_CONFIG,
      enableNotifications: true,
      enableTranslation: true,
      dryRun: false,
    };

    const result = await runContentPipeline(pipelineConfig);

    // Log execution result
    await prisma.cronExecution.create({
      data: {
        topic: 'generate-blog',
        status: result.success ? 'success' : 'failed',
        postId: result.blogPostId,
        seoScore: result.seoScore,
        tokensUsed: result.totalTokens,
        duration: result.totalDuration,
        error: result.error,
        details: {
          keyword: result.keyword,
          steps: result.steps.length,
          stepDetails: result.steps.map((s) => ({
            name: s.name,
            status: s.status,
            duration: s.duration,
          })),
        },
      },
    });

    if (!result.success) {
      console.error('[CRON] Pipeline failed:', result.error);
      return NextResponse.json({
        success: false,
        error: result.error,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
      });
    }

    console.log(`[CRON] ✅ Blog post generated: ${result.blogPostId}`);
    console.log(`[CRON] Keyword: ${result.keyword}, SEO Score: ${result.seoScore}/100`);

    return NextResponse.json({
      success: true,
      blogPostId: result.blogPostId,
      keyword: result.keyword,
      seoScore: result.seoScore,
      status: result.status,
      steps: result.steps.length,
      duration: Date.now() - startTime,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[CRON ERROR]', error);

    // Log failure
    await prisma.cronExecution.create({
      data: {
        topic: 'generate-blog',
        status: 'failed',
        duration: Date.now() - startTime,
        error: String(error),
      },
    }).catch((e: any) => console.error('Failed to log cron error:', e));

    return NextResponse.json(
      {
        error: String(error),
        message: 'Cron execution failed',
        duration: Date.now() - startTime,
      },
      { status: 500 }
    );
  }
}

// ============================================================================
// Helper: Calculate Next Cron Time
// ============================================================================
function getNextCronTime(): string {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = now.getUTCDay();

  // Find next Monday (1) or Thursday (4)
  let daysUntilNextRun = 0;
  if (dayOfWeek === 1) {
    // Today is Monday
    daysUntilNextRun = now.getUTCHours() < 8 ? 0 : 3; // Wait for 8am or skip to Thursday
  } else if (dayOfWeek === 4) {
    // Today is Thursday
    daysUntilNextRun = now.getUTCHours() < 8 ? 0 : 4; // Wait for 8am or skip to Monday
  } else if (dayOfWeek < 1) {
    daysUntilNextRun = 1 - dayOfWeek; // Next Monday
  } else if (dayOfWeek < 4) {
    daysUntilNextRun = 4 - dayOfWeek; // Next Thursday
  } else {
    daysUntilNextRun = 8 - dayOfWeek; // Next Monday
  }

  const nextRun = new Date(now);
  nextRun.setUTCDate(nextRun.getUTCDate() + daysUntilNextRun);
  nextRun.setUTCHours(8, 0, 0, 0);

  return nextRun.toISOString();
}

// ============================================================================
// Manual Trigger (for testing)
// ============================================================================
export async function PUT(request: NextRequest) {
  try {
    // Optional: Verify admin token
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    const adminToken = process.env.ADMIN_API_TOKEN || 'admin-secret-key';

    if (token !== adminToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('[MANUAL TRIGGER] Starting blog generation...');

    // Run pipeline
    const result = await runContentPipeline();

    return NextResponse.json({
      success: result.success,
      blogPostId: result.blogPostId,
      keyword: result.keyword,
      seoScore: result.seoScore,
      message: result.success
        ? 'Blog post generated successfully'
        : 'Generation failed',
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}
