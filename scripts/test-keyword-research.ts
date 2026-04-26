/**
 * Task 2.4: Test Script for Keyword Research Pipeline
 * Validates Claude API integration, intent analysis, and database operations
 */

import { researchKeywords, batchResearchKeywords, getResearchSummary } from '@/seo/pipeline/keyword-research';
import { analyzeIntent, getIntentEmoji, getIntentStats } from '@/seo/utils/intent-analyzer';
import { prisma } from '@/lib/prisma';

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message: string, color: keyof typeof COLORS = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function section(title: string) {
  log('\n' + '─'.repeat(60), 'cyan');
  log(`  ${title}`, 'bright');
  log('─'.repeat(60), 'cyan');
}

async function testIntentAnalyzer() {
  section('TEST 1: Intent Analyzer');

  const testKeywords = [
    { keyword: 'Dubai turlarini xarid qiling', language: 'uz', expected: 'transactional' },
    { keyword: 'eng yaxshi mehmonxona', language: 'uz', expected: 'commercial' },
    { keyword: 'viza nima', language: 'uz', expected: 'informational' },
    { keyword: 'sem travel', language: 'uz', expected: 'navigational' },
    { keyword: 'купить тур в Дубай', language: 'ru', expected: 'transactional' },
    { keyword: 'лучшие отели', language: 'ru', expected: 'commercial' },
    { keyword: 'как получить визу', language: 'ru', expected: 'informational' },
    { keyword: 'buy tour online', language: 'en', expected: 'transactional' },
    { keyword: 'best hotels in Uzbekistan', language: 'en', expected: 'commercial' },
    { keyword: 'what is tourism', language: 'en', expected: 'informational' },
  ];

  let passed = 0;
  let failed = 0;

  testKeywords.forEach(({ keyword, language, expected }) => {
    const result = analyzeIntent(keyword, language);
    const emoji = getIntentEmoji(result);
    const status = result === expected ? '✅' : '❌';

    if (result === expected) {
      passed++;
      log(`${status} ${emoji} "${keyword}" → ${result}`, 'green');
    } else {
      failed++;
      log(`${status} "${keyword}" → ${result} (expected ${expected})`, 'red');
    }
  });

  log(`\nResults: ${passed}/${testKeywords.length} passed`, passed === testKeywords.length ? 'green' : 'yellow');
  return failed === 0;
}

async function testKeywordResearch() {
  section('TEST 2: Claude Haiku Keyword Research');

  if (!process.env.ANTHROPIC_API_KEY) {
    log('⚠️  ANTHROPIC_API_KEY not set — skipping API test', 'yellow');
    log('   Add ANTHROPIC_API_KEY to .env.local to enable this test', 'yellow');
    return true; // Don't fail, just skip
  }

  try {
    log('Researching keywords for "turlar" (tours) in Uzbek...', 'blue');
    const keywords = await researchKeywords('turlar', 5, 'uz');

    log(`✅ Got ${keywords.length} keywords from Claude Haiku`, 'green');

    keywords.forEach((kw) => {
      const emoji = getIntentEmoji(kw.intent);
      log(
        `   • ${kw.keyword} (${kw.difficulty}) ${emoji} ${kw.intent}`,
        'cyan'
      );
    });

    const summary = getResearchSummary(keywords);
    log(`\nSummary:`, 'blue');
    log(`   Primary: ${summary.primary}, Secondary: ${summary.secondary}, LSI: ${summary.lsi}`, 'cyan');
    log(`   Difficulty: Easy ${summary.easy}, Medium ${summary.medium}, Hard ${summary.hard}`, 'cyan');

    return true;
  } catch (error) {
    log(`❌ API test failed: ${error instanceof Error ? error.message : String(error)}`, 'red');
    return false;
  }
}

async function testBatchResearch() {
  section('TEST 3: Batch Keyword Research');

  if (!process.env.ANTHROPIC_API_KEY) {
    log('⚠️  ANTHROPIC_API_KEY not set — skipping', 'yellow');
    return true;
  }

  try {
    log('Researching multiple niches...', 'blue');
    const results = await batchResearchKeywords(['turlar', 'mehmonxona'], 3, 'uz');

    Object.entries(results).forEach(([niche, keywords]) => {
      log(`\n${niche}: ${keywords.length} keywords`, 'cyan');
      keywords.forEach((kw) => {
        log(`   • ${kw.keyword}`, 'cyan');
      });
    });

    return true;
  } catch (error) {
    log(`❌ Batch research failed: ${error instanceof Error ? error.message : String(error)}`, 'red');
    return false;
  }
}

async function testDatabaseOperations() {
  section('TEST 4: Database Operations');

  try {
    const keywordCount = await prisma.keyword.count();
    log(`✅ Database connected — ${keywordCount} keywords in database`, 'green');

    // Get difficulty distribution
    const difficulties = await prisma.keyword.groupBy({
      by: ['difficulty'],
      _count: true,
    });

    log(`\nDifficulty distribution:`, 'blue');
    difficulties.forEach(({ difficulty, _count }) => {
      log(`   ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}: ${_count}`, 'cyan');
    });

    // Get intent distribution
    const intents = await prisma.keyword.groupBy({
      by: ['intent'],
      _count: true,
    });

    log(`\nIntent distribution:`, 'blue');
    intents.forEach(({ intent, _count }) => {
      const emoji = intent === 'informational' ? '📚' : intent === 'commercial' ? '🔍' : intent === 'transactional' ? '💳' : '🧭';
      log(`   ${emoji} ${intent}: ${_count}`, 'cyan');
    });

    // Get language distribution
    const languages = await prisma.keyword.groupBy({
      by: ['language'],
      _count: true,
    });

    log(`\nLanguage distribution:`, 'blue');
    languages.forEach(({ language, _count }) => {
      log(`   ${language.toUpperCase()}: ${_count}`, 'cyan');
    });

    return true;
  } catch (error) {
    log(`❌ Database test failed: ${error instanceof Error ? error.message : String(error)}`, 'red');
    return false;
  }
}

async function testKeywordRetrieval() {
  section('TEST 5: Keyword Retrieval');

  try {
    // Get sample keywords by difficulty
    const easyKeywords = await prisma.keyword.findMany({
      where: { difficulty: 'easy', language: 'uz' },
      take: 3,
    });

    log(`Easy keywords (Uzbek):`, 'blue');
    easyKeywords.forEach((kw) => {
      log(`   • ${kw.keyword} (vol: ${kw.searchVolume})`, 'cyan');
    });

    // Get transactional keywords
    const transactional = await prisma.keyword.findMany({
      where: { intent: 'transactional' },
      take: 3,
    });

    log(`\nTransactional keywords:`, 'blue');
    transactional.forEach((kw) => {
      log(`   • ${kw.keyword} (${kw.language})`, 'cyan');
    });

    // Get by niche
    const tourKeywords = await prisma.keyword.findMany({
      where: { niche: 'turlar', language: 'uz' },
      take: 3,
    });

    log(`\nTour keywords (Uzbek):`, 'blue');
    tourKeywords.forEach((kw) => {
      log(`   • ${kw.keyword}`, 'cyan');
    });

    return true;
  } catch (error) {
    log(`❌ Retrieval test failed: ${error instanceof Error ? error.message : String(error)}`, 'red');
    return false;
  }
}

async function runAllTests() {
  log('\n' + '═'.repeat(60), 'bright');
  log('  KEYWORD RESEARCH PIPELINE TEST SUITE', 'bright');
  log('═'.repeat(60), 'bright');

  const results = {
    'Intent Analyzer': await testIntentAnalyzer(),
    'Claude API Integration': await testKeywordResearch(),
    'Batch Processing': await testBatchResearch(),
    'Database Operations': await testDatabaseOperations(),
    'Keyword Retrieval': await testKeywordRetrieval(),
  };

  section('TEST SUMMARY');

  const passed = Object.values(results).filter((r) => r).length;
  const total = Object.keys(results).length;

  Object.entries(results).forEach(([test, passed]) => {
    log(`${passed ? '✅' : '❌'} ${test}`, passed ? 'green' : 'red');
  });

  log(`\nTotal: ${passed}/${total} tests passed`, passed === total ? 'green' : 'yellow');

  if (passed === total) {
    log('\n🎉 All tests passed!', 'green');
  } else if (passed > 0) {
    log('\n⚠️  Some tests failed — check API key and database', 'yellow');
  } else {
    log('\n❌ Tests failed — check logs above', 'red');
  }

  await prisma.$disconnect();
  process.exit(passed === total ? 0 : 1);
}

// Run tests
runAllTests().catch((error) => {
  log(`Fatal error: ${error instanceof Error ? error.message : String(error)}`, 'red');
  process.exit(1);
});
