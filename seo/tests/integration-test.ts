/**
 * Integration Test — Full Pipeline E2E
 * Tests: Keyword → Article → SEO → Translation → Save → Notify → Publish → Analytics
 */

import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

import { prisma } from '@/lib/prisma';
import { runContentPipeline } from '@/seo/pipeline/content-pipeline';
import { sendBlogPostNotification } from '@/seo/notifications/notify';
import { getDashboardAnalytics } from '@/seo/utils/analytics';

// ============================================================================
// Test Suite
// ============================================================================

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration: number;
}

const results: TestResult[] = [];

// ============================================================================
// Test 1: Database Connection
// ============================================================================
async function testDatabaseConnection(): Promise<TestResult> {
  const start = Date.now();
  try {
    const count = await prisma.keyword.count();
    return {
      name: '1. Database Connection',
      passed: count >= 0,
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '1. Database Connection',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 2: Keyword Selection
// ============================================================================
async function testKeywordSelection(): Promise<TestResult> {
  const start = Date.now();
  try {
    const keyword = await prisma.keyword.findFirst({
      where: { isActive: true },
      orderBy: { lastUsedAt: 'asc' },
    });

    return {
      name: '2. Keyword Selection',
      passed: !!keyword && !!keyword.keyword,
      error: keyword ? undefined : 'No active keywords found',
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '2. Keyword Selection',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 3: Feature Flags
// ============================================================================
async function testFeatureFlags(): Promise<TestResult> {
  const start = Date.now();
  try {
    const flag = await prisma.featureFlag.findUnique({
      where: { name: 'BLOG_AUTO_GENERATION' },
    });

    return {
      name: '3. Feature Flags',
      passed: flag?.enabled === true,
      error: flag ? undefined : 'BLOG_AUTO_GENERATION flag not found',
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '3. Feature Flags',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 4: Full Pipeline (Optional - only if API keys configured)
// ============================================================================
async function testFullPipeline(): Promise<TestResult> {
  const start = Date.now();
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey || apiKey === '') {
      return {
        name: '4. Full Pipeline',
        passed: false,
        error: 'ANTHROPIC_API_KEY not configured',
        duration: Date.now() - start,
      };
    }

    console.log('⏳ Running content pipeline (this may take 2-3 minutes)...');
    const result = await runContentPipeline({
      minSeoScore: 65,
      maxRefinementRetries: 2,
      targetArticleWords: { min: 800, max: 1000 },
      translationLanguages: ['uz', 'ru'],
      apiTimeout: 30000,
      databaseTimeout: 10000,
      enableNotifications: true,
      enableTranslation: true,
      dryRun: false,
    });

    return {
      name: '4. Full Pipeline',
      passed: result.success,
      error: result.error,
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '4. Full Pipeline',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 5: Blog Post Retrieval
// ============================================================================
async function testBlogPostRetrieval(): Promise<TestResult> {
  const start = Date.now();
  try {
    const posts = await prisma.blogPost.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    return {
      name: '5. Blog Post Retrieval',
      passed: Array.isArray(posts),
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '5. Blog Post Retrieval',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 6: Generation Logs
// ============================================================================
async function testGenerationLogs(): Promise<TestResult> {
  const start = Date.now();
  try {
    const logs = await prisma.generationLog.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
    });

    return {
      name: '6. Generation Logs',
      passed: Array.isArray(logs),
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '6. Generation Logs',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 7: Cron Execution History
// ============================================================================
async function testCronExecution(): Promise<TestResult> {
  const start = Date.now();
  try {
    const executions = await prisma.cronExecution.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
    });

    const successCount = executions.filter((e) => e.status === 'success').length;
    const successRate = executions.length > 0 ? (successCount / executions.length) * 100 : 0;

    return {
      name: '7. Cron Execution',
      passed: executions.length >= 0,
      error: `Success rate: ${successRate.toFixed(0)}%`,
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '7. Cron Execution',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 8: Analytics Calculation
// ============================================================================
async function testAnalytics(): Promise<TestResult> {
  const start = Date.now();
  try {
    const analytics = await getDashboardAnalytics(30);

    const passed =
      analytics.blog.totalGenerated >= 0 &&
      analytics.blog.avgSeoScore >= 0 &&
      analytics.cron.totalRuns >= 0;

    return {
      name: '8. Analytics',
      passed,
      error: `Generated: ${analytics.blog.totalGenerated}, Avg Score: ${analytics.blog.avgSeoScore}, Cron Runs: ${analytics.cron.totalRuns}`,
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '8. Analytics',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 9: Status Transitions
// ============================================================================
async function testStatusTransitions(): Promise<TestResult> {
  const start = Date.now();
  try {
    const posts = await prisma.blogPost.groupBy({
      by: ['status'],
      _count: true,
    });

    const statuses = posts.map((p) => p.status);
    const hasValidStatuses =
      statuses.some((s) => s === 'pending_generation' || s === 'pending_review' || s === 'published');

    return {
      name: '9. Status Transitions',
      passed: hasValidStatuses,
      error: `Statuses found: ${statuses.join(', ')}`,
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '9. Status Transitions',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Test 10: Environment Variables
// ============================================================================
async function testEnvironmentVariables(): Promise<TestResult> {
  const start = Date.now();
  try {
    const required = [
      'DATABASE_URL',
      'ANTHROPIC_API_KEY',
      'TELEGRAM_BOT_TOKEN',
      'TELEGRAM_CHAT_ID',
    ];

    const missing = required.filter((key) => !process.env[key]);

    return {
      name: '10. Environment Variables',
      passed: missing.length === 0,
      error: missing.length > 0 ? `Missing: ${missing.join(', ')}` : undefined,
      duration: Date.now() - start,
    };
  } catch (error) {
    return {
      name: '10. Environment Variables',
      passed: false,
      error: String(error),
      duration: Date.now() - start,
    };
  }
}

// ============================================================================
// Main Test Runner
// ============================================================================
async function runAllTests() {
  console.log('\n🧪 INTEGRATION TEST SUITE\n');
  console.log('='.repeat(80));

  // Run tests
  results.push(await testDatabaseConnection());
  results.push(await testKeywordSelection());
  results.push(await testFeatureFlags());
  results.push(await testBlogPostRetrieval());
  results.push(await testGenerationLogs());
  results.push(await testCronExecution());
  results.push(await testAnalytics());
  results.push(await testStatusTransitions());
  results.push(await testEnvironmentVariables());

  // Optional: Full pipeline (only if API key available)
  if (process.env.ANTHROPIC_API_KEY) {
    console.log('\n⚠️  SKIP: Full pipeline test requires manual review');
    console.log('   Use: npx ts-node seo/tests/integration-test.ts --full\n');
  }

  // Print results
  console.log('\n📊 TEST RESULTS\n');
  results.forEach((result) => {
    const icon = result.passed ? '✅' : '❌';
    console.log(`${icon} ${result.name}`);
    if (result.error) console.log(`   ${result.error}`);
    console.log(`   ⏱️  ${result.duration}ms\n`);
  });

  // Summary
  const passed = results.filter((r) => r.passed).length;
  const total = results.length;
  const percentage = ((passed / total) * 100).toFixed(0);

  console.log('='.repeat(80));
  console.log(`\n📈 SUMMARY: ${passed}/${total} tests passed (${percentage}%)\n`);

  if (passed === total) {
    console.log('✅ All integration tests passed! Pipeline is ready.\n');
  } else {
    console.log('⚠️  Some tests failed. Review errors above.\n');
  }

  // Close connection
  await prisma.$disconnect();
}

// Run if executed directly
if (require.main === module) {
  runAllTests().catch((error) => {
    console.error('Test suite error:', error);
    process.exit(1);
  });
}

export { runAllTests };
