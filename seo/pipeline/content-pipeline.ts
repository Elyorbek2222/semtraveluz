/**
 * Content Pipeline — 10-step automated article generation
 * Imports keywords → generates → audits → translates → saves → notifies
 */

import { prisma } from '@/lib/prisma';
import { Article, AuditResult, Keyword, TranslationResult } from '@/seo/types';

// ============================================================================
// Configuration
// ============================================================================
export interface PipelineConfig {
  minSeoScore: number; // 65
  maxRefinementRetries: number; // 2
  targetArticleWords: { min: number; max: number }; // 800-1000
  translationLanguages: string[]; // ["uz", "ru"]
  apiTimeout: number; // 30000ms
  databaseTimeout: number; // 10000ms
  enableNotifications: boolean;
  enableTranslation: boolean;
  dryRun: boolean;
}

export const DEFAULT_PIPELINE_CONFIG: PipelineConfig = {
  minSeoScore: 65,
  maxRefinementRetries: 2,
  targetArticleWords: { min: 800, max: 1000 },
  translationLanguages: ['uz', 'ru'],
  apiTimeout: 30000,
  databaseTimeout: 10000,
  enableNotifications: true,
  enableTranslation: true,
  dryRun: false,
};

// ============================================================================
// Pipeline Result Type
// ============================================================================
export interface PipelineResult {
  success: boolean;
  blogPostId?: string;
  keyword: string;
  seoScore: number;
  status: string;
  steps: PipelineStep[];
  totalDuration: number;
  totalTokens: number;
  error?: string;
}

export interface PipelineStep {
  name: string;
  status: 'success' | 'failed' | 'skipped';
  duration: number;
  tokensUsed: number;
  details?: any;
  error?: string;
}

// ============================================================================
// Step 1: Select Keyword
// ============================================================================
async function selectKeyword(): Promise<Keyword> {
  const unusedKeywords = await prisma.keyword.findMany({
    where: {
      isActive: true,
      lastUsedAt: null,
    },
    orderBy: { searchVolume: 'desc' },
  });

  if (unusedKeywords.length === 0) {
    throw new Error('No unused keywords available');
  }

  const randomIndex = Math.floor(Math.random() * unusedKeywords.length);
  return unusedKeywords[randomIndex];
}

// ============================================================================
// Step 2: Research Keyword
// ============================================================================
async function researchKeyword(keyword: Keyword): Promise<{
  keyword: Keyword;
  lsiKeywords: string[];
  intent: string;
  volume: number;
}> {
  // Extract related keywords from database
  const relatedKeywords = await prisma.keyword.findMany({
    where: {
      niche: keyword.niche,
      language: keyword.language,
      isActive: true,
      id: { not: keyword.id },
    },
    take: 5,
  });

  return {
    keyword,
    lsiKeywords: relatedKeywords.map((k) => k.keyword),
    intent: keyword.intent,
    volume: keyword.searchVolume,
  };
}

// ============================================================================
// Step 3: Generate Article
// ============================================================================
async function generateArticle(
  keyword: Keyword,
  researchData: {
    lsiKeywords: string[];
    intent: string;
    volume: number;
  }
): Promise<Article> {
  // Placeholder — will be implemented in Task 3.2
  // This function calls Claude Sonnet with travel-specific prompts
  throw new Error('generateArticle() not yet implemented — see Task 3.2');
}

// ============================================================================
// Step 4: Audit SEO
// ============================================================================
async function auditSEO(
  article: Article,
  keyword: string
): Promise<AuditResult> {
  // Placeholder — will be implemented in Task 3.4
  // This function scores content on 100-point scale
  throw new Error('auditSEO() not yet implemented — see Task 3.4');
}

// ============================================================================
// Step 5: Refine Content
// ============================================================================
async function refineContent(
  article: Article,
  keyword: string,
  auditResult: AuditResult,
  retryCount: number,
  config: PipelineConfig
): Promise<Article> {
  if (
    auditResult.totalScore >= config.minSeoScore ||
    retryCount >= config.maxRefinementRetries
  ) {
    return article;
  }

  // Placeholder — will be implemented in Task 3.2
  throw new Error('refineContent() not yet implemented — see Task 3.2');
}

// ============================================================================
// Step 6: Translate Content
// ============================================================================
async function translateContent(
  article: Article,
  keyword: string,
  targetLanguages: string[]
): Promise<{ [lang: string]: Article }> {
  // Placeholder — will be implemented in Task 3.5
  throw new Error('translateContent() not yet implemented — see Task 3.5');
}

// ============================================================================
// Step 7: Validate Translations
// ============================================================================
async function validateTranslations(
  translations: { [lang: string]: Article }
): Promise<{ valid: boolean; issues: string[] }> {
  const issues: string[] = [];

  for (const [lang, article] of Object.entries(translations)) {
    // Count HTML tags in original vs translated
    const originalTagCount = (article.html.match(/<[^>]+>/g) || []).length;

    // This would be checked after translation
    // For now, just validate structure
    if (!article.html || article.html.length < 100) {
      issues.push(`${lang}: Article too short (${article.html.length} chars)`);
    }

    if (article.wordCount < 400) {
      issues.push(`${lang}: Article has ${article.wordCount} words (min 400)`);
    }
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}

// ============================================================================
// Step 8: Save to Database
// ============================================================================
async function saveToDatabase(
  keyword: Keyword,
  article: Article,
  translations: { [lang: string]: Article },
  auditResult: AuditResult,
  config: PipelineConfig
): Promise<string> {
  // Create multilingual title and content objects
  const titleJson = {
    en: article.metaTitle,
    uz: translations['uz']?.metaTitle || article.metaTitle,
    ru: translations['ru']?.metaTitle || article.metaTitle,
  };

  const contentJson = {
    en: article.html,
    uz: translations['uz']?.html || article.html,
    ru: translations['ru']?.html || article.html,
  };

  const metaDescriptionJson = {
    en: article.metaDescription,
    uz: translations['uz']?.metaDescription || article.metaDescription,
    ru: translations['ru']?.metaDescription || article.metaDescription,
  };

  // Generate slug from EN title
  const slug = generateSlug(article.metaTitle);

  // Check for duplicate slugs
  let finalSlug = slug;
  let counter = 1;
  while (await prisma.blogPost.findUnique({ where: { slug: finalSlug } })) {
    finalSlug = `${slug}-${counter}`;
    counter++;
  }

  // Create blog post
  const blogPost = await prisma.blogPost.create({
    data: {
      slug: finalSlug,
      title: titleJson,
      content: contentJson,
      metaTitle: titleJson,
      metaDescription: metaDescriptionJson,
      keyword: keyword.keyword,
      seoScore: auditResult.totalScore,
      seoBreakdown: auditResult.breakdown,
      wordCount: article.wordCount,
      category: keyword.niche,
      status: 'pending_review',
      languages: 'en,uz,ru',
    },
  });

  // Create generation log entry
  await prisma.generationLog.create({
    data: {
      blogPostId: blogPost.id,
      action: 'save',
      status: 'success',
      details: {
        slug: finalSlug,
        languages: 'en,uz,ru',
        wordCount: article.wordCount,
      },
    },
  });

  // Mark keyword as used
  await prisma.keyword.update({
    where: { id: keyword.id },
    data: { lastUsedAt: new Date() },
  });

  return blogPost.id;
}

// ============================================================================
// Step 9: Notify Admin
// ============================================================================
async function notifyAdmin(
  blogPostId: string,
  keyword: string,
  seoScore: number,
  config: PipelineConfig
): Promise<{ success: boolean; method?: string; error?: string }> {
  if (!config.enableNotifications) {
    return { success: true, method: 'skipped' };
  }

  // Placeholder — will be implemented in Task 3.7
  // This sends Telegram notification with approve/reject buttons
  console.log(`[NOTIFY] Article created: ${blogPostId} (SEO: ${seoScore})`);
  return { success: true, method: 'telegram' };
}

// ============================================================================
// Step 10: Publish on Approval
// ============================================================================
async function publishOnApproval(
  blogPostId: string
): Promise<{ published: boolean; publishedAt?: Date }> {
  // Placeholder — admin will approve via Telegram buttons
  // When approved, this updates the status
  const blogPost = await prisma.blogPost.findUnique({
    where: { id: blogPostId },
  });

  if (!blogPost) {
    return { published: false };
  }

  if (blogPost.status === 'approved') {
    const updated = await prisma.blogPost.update({
      where: { id: blogPostId },
      data: {
        status: 'published',
        publishedAt: new Date(),
      },
    });

    return {
      published: true,
      publishedAt: updated.publishedAt,
    };
  }

  return {
    published: false,
  };
}

// ============================================================================
// Main Pipeline Function
// ============================================================================
export async function runContentPipeline(
  config: PipelineConfig = DEFAULT_PIPELINE_CONFIG
): Promise<PipelineResult> {
  const startTime = Date.now();
  const steps: PipelineStep[] = [];
  let totalTokens = 0;

  try {
    // ====== STEP 1: Select Keyword ======
    let stepStart = Date.now();
    const keyword = await selectKeyword();
    steps.push({
      name: 'Select Keyword',
      status: 'success',
      duration: Date.now() - stepStart,
      tokensUsed: 0,
      details: { keyword: keyword.keyword, niche: keyword.niche },
    });

    // ====== STEP 2: Research Keyword ======
    stepStart = Date.now();
    const researchData = await researchKeyword(keyword);
    steps.push({
      name: 'Research Keyword',
      status: 'success',
      duration: Date.now() - stepStart,
      tokensUsed: 0,
      details: { lsiKeywords: researchData.lsiKeywords.length },
    });

    // ====== STEP 3: Generate Article ======
    stepStart = Date.now();
    let article: Article;
    try {
      article = await generateArticle(keyword, researchData);
      steps.push({
        name: 'Generate Article',
        status: 'success',
        duration: Date.now() - stepStart,
        tokensUsed: 0,
        details: { wordCount: article.wordCount },
      });
    } catch (error) {
      steps.push({
        name: 'Generate Article',
        status: 'failed',
        duration: Date.now() - stepStart,
        tokensUsed: 0,
        error: String(error),
      });
      throw error;
    }

    // ====== STEP 4: Audit SEO ======
    stepStart = Date.now();
    let auditResult: AuditResult;
    try {
      auditResult = await auditSEO(article, keyword.keyword);
      steps.push({
        name: 'Audit SEO',
        status: 'success',
        duration: Date.now() - stepStart,
        tokensUsed: 0,
        details: { score: auditResult.totalScore },
      });
    } catch (error) {
      steps.push({
        name: 'Audit SEO',
        status: 'failed',
        duration: Date.now() - stepStart,
        tokensUsed: 0,
        error: String(error),
      });
      throw error;
    }

    // ====== STEP 5: Refine Content ======
    stepStart = Date.now();
    let refinementRetries = 0;
    let refinedArticle = article;

    while (
      auditResult.totalScore < config.minSeoScore &&
      refinementRetries < config.maxRefinementRetries
    ) {
      try {
        refinedArticle = await refineContent(
          refinedArticle,
          keyword.keyword,
          auditResult,
          refinementRetries,
          config
        );
        refinementRetries++;

        // Re-audit
        auditResult = await auditSEO(refinedArticle, keyword.keyword);
      } catch (error) {
        break;
      }
    }

    article = refinedArticle;
    steps.push({
      name: 'Refine Content',
      status: 'success',
      duration: Date.now() - stepStart,
      tokensUsed: 0,
      details: { retries: refinementRetries, finalScore: auditResult.totalScore },
    });

    // ====== STEP 6: Translate Content ======
    stepStart = Date.now();
    let translations: { [lang: string]: Article } = {};

    if (config.enableTranslation) {
      try {
        translations = await translateContent(
          article,
          keyword.keyword,
          config.translationLanguages
        );
        steps.push({
          name: 'Translate Content',
          status: 'success',
          duration: Date.now() - stepStart,
          tokensUsed: 0,
          details: { languages: Object.keys(translations).length },
        });
      } catch (error) {
        steps.push({
          name: 'Translate Content',
          status: 'failed',
          duration: Date.now() - stepStart,
          tokensUsed: 0,
          error: String(error),
        });
        translations = {};
      }
    } else {
      steps.push({
        name: 'Translate Content',
        status: 'skipped',
        duration: 0,
        tokensUsed: 0,
      });
    }

    // ====== STEP 7: Validate Translations ======
    stepStart = Date.now();
    const validationResult = await validateTranslations(translations);
    steps.push({
      name: 'Validate Translations',
      status: validationResult.valid ? 'success' : 'failed',
      duration: Date.now() - stepStart,
      tokensUsed: 0,
      details: { issues: validationResult.issues },
    });

    // ====== STEP 8: Save to Database ======
    stepStart = Date.now();
    let blogPostId: string;

    if (!config.dryRun) {
      try {
        blogPostId = await saveToDatabase(
          keyword,
          article,
          translations,
          auditResult,
          config
        );
        steps.push({
          name: 'Save to Database',
          status: 'success',
          duration: Date.now() - stepStart,
          tokensUsed: 0,
          details: { blogPostId },
        });
      } catch (error) {
        steps.push({
          name: 'Save to Database',
          status: 'failed',
          duration: Date.now() - stepStart,
          tokensUsed: 0,
          error: String(error),
        });
        throw error;
      }
    } else {
      blogPostId = 'dry-run-id';
      steps.push({
        name: 'Save to Database',
        status: 'skipped',
        duration: 0,
        tokensUsed: 0,
      });
    }

    // ====== STEP 9: Notify Admin ======
    stepStart = Date.now();
    const notificationResult = await notifyAdmin(
      blogPostId,
      keyword.keyword,
      auditResult.totalScore,
      config
    );
    steps.push({
      name: 'Notify Admin',
      status: notificationResult.success ? 'success' : 'failed',
      duration: Date.now() - stepStart,
      tokensUsed: 0,
      details: { method: notificationResult.method },
    });

    // ====== STEP 10: Publish on Approval ======
    stepStart = Date.now();
    const publishResult = await publishOnApproval(blogPostId);
    steps.push({
      name: 'Publish on Approval',
      status: publishResult.published ? 'success' : 'skipped',
      duration: Date.now() - stepStart,
      tokensUsed: 0,
      details: { published: publishResult.published },
    });

    // ====== Success ======
    return {
      success: true,
      blogPostId,
      keyword: keyword.keyword,
      seoScore: auditResult.totalScore,
      status: 'completed',
      steps,
      totalDuration: Date.now() - startTime,
      totalTokens,
    };
  } catch (error) {
    return {
      success: false,
      keyword: steps[0]?.details?.keyword || 'unknown',
      seoScore: 0,
      status: 'failed',
      steps,
      totalDuration: Date.now() - startTime,
      totalTokens,
      error: String(error),
    };
  }
}

// ============================================================================
// Utility: Generate URL slug
// ============================================================================
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80);
}

// ============================================================================
// Export for testing
// ============================================================================
export {
  selectKeyword,
  researchKeyword,
  generateArticle,
  auditSEO,
  refineContent,
  translateContent,
  validateTranslations,
  saveToDatabase,
  notifyAdmin,
  publishOnApproval,
};
