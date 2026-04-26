/**
 * SEO Audit System — 100-point scoring on 10 criteria
 * Analyzes articles and provides actionable recommendations
 */

import { AuditResult, AuditCriterion, SEOMetrics } from '@/seo/types';

// ============================================================================
// Type Definitions
// ============================================================================
export interface AuditInput {
  html: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
}

export type RecommendationType = 'publish' | 'review' | 'refine' | 'reject';

// ============================================================================
// Scoring Criteria
// ============================================================================
const CRITERIA = {
  KEYWORD_IN_TITLE: { name: 'Keyword in Title', maxPoints: 10 },
  KEYWORD_IN_FIRST_P: { name: 'Keyword in First Paragraph', maxPoints: 10 },
  KEYWORD_IN_META: { name: 'Keyword in Meta Description', maxPoints: 10 },
  KEYWORD_DENSITY: { name: 'Keyword Density (0.8-2.5%)', maxPoints: 15 },
  H2_HEADERS: { name: 'H2 Headers (3+, keyword in 2+)', maxPoints: 15 },
  INTERNAL_LINKS: { name: 'Internal Links (2-3)', maxPoints: 10 },
  META_TITLE_LENGTH: { name: 'Meta Title Length (30-60)', maxPoints: 10 },
  META_DESC_LENGTH: { name: 'Meta Description Length (100-160)', maxPoints: 10 },
  HEADER_HIERARCHY: { name: 'H2→H3 Hierarchy', maxPoints: 5 },
  FAQ_SECTION: { name: 'FAQ Section (4-5 questions)', maxPoints: 5 },
};

const TOTAL_POINTS = 100;

// ============================================================================
// Main Audit Function
// ============================================================================
export async function auditSEO(input: AuditInput): Promise<AuditResult> {
  const startTime = Date.now();

  // Extract metrics
  const metrics = extractMetrics(input.html, input.keyword);

  // Run all audit checks
  const breakdown: AuditCriterion[] = [];

  // 1. Keyword in Title
  breakdown.push(
    checkKeywordInTitle(input.metaTitle, input.keyword, CRITERIA.KEYWORD_IN_TITLE)
  );

  // 2. Keyword in First Paragraph
  breakdown.push(
    checkKeywordInFirstP(input.html, input.keyword, CRITERIA.KEYWORD_IN_FIRST_P)
  );

  // 3. Keyword in Meta Description
  breakdown.push(
    checkKeywordInMeta(input.metaDescription, input.keyword, CRITERIA.KEYWORD_IN_META)
  );

  // 4. Keyword Density
  breakdown.push(
    checkKeywordDensity(input.html, input.keyword, metrics, CRITERIA.KEYWORD_DENSITY)
  );

  // 5. H2 Headers
  breakdown.push(
    checkH2Headers(input.html, input.keyword, CRITERIA.H2_HEADERS)
  );

  // 6. Internal Links
  breakdown.push(
    checkInternalLinks(input.html, CRITERIA.INTERNAL_LINKS)
  );

  // 7. Meta Title Length
  breakdown.push(
    checkMetaTitleLength(input.metaTitle, CRITERIA.META_TITLE_LENGTH)
  );

  // 8. Meta Description Length
  breakdown.push(
    checkMetaDescLength(input.metaDescription, CRITERIA.META_DESC_LENGTH)
  );

  // 9. Header Hierarchy
  breakdown.push(
    checkHeaderHierarchy(input.html, CRITERIA.HEADER_HIERARCHY)
  );

  // 10. FAQ Section
  breakdown.push(
    checkFAQSection(input.html, CRITERIA.FAQ_SECTION)
  );

  // Calculate total score
  const totalScore = breakdown.reduce((sum, c) => sum + c.earnedPoints, 0);

  // Identify critical issues
  const criticalIssues = breakdown
    .filter((c) => !c.passed && c.maxPoints > 10)
    .map((c) => c.criterion);

  // Identify warnings
  const warnings = breakdown
    .filter((c) => !c.passed && c.maxPoints <= 10)
    .map((c) => c.criterion);

  // Determine recommendation
  const recommendation = interpretScore(totalScore);

  const result: AuditResult = {
    totalScore,
    breakdown,
    criticalIssues,
    warnings,
    recommendation,
    analysisDate: new Date(),
    timeToScore: Date.now() - startTime,
  };

  return result;
}

// ============================================================================
// Criterion Checks
// ============================================================================

/**
 * 1. Keyword in Title (10 points)
 */
function checkKeywordInTitle(
  title: string,
  keyword: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  const titleLower = title.toLowerCase();
  const keywordLower = keyword.toLowerCase();

  const passed = titleLower.includes(keywordLower);

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints: passed ? criteria.maxPoints : 0,
    passed,
    details: passed ? 'Keyword found in title' : 'Keyword missing from title',
  };
}

/**
 * 2. Keyword in First Paragraph (10 points)
 */
function checkKeywordInFirstP(
  html: string,
  keyword: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  const firstPMatch = html.match(/<p[^>]*>([^<]+)<\/p>/);
  const firstP = firstPMatch?.[1] || '';

  const keywordLower = keyword.toLowerCase();
  const passed = firstP.toLowerCase().includes(keywordLower);

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints: passed ? criteria.maxPoints : 0,
    passed,
    details: passed
      ? 'Keyword in first paragraph'
      : 'Keyword missing from first paragraph',
  };
}

/**
 * 3. Keyword in Meta Description (10 points)
 */
function checkKeywordInMeta(
  description: string,
  keyword: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  const descLower = description.toLowerCase();
  const keywordLower = keyword.toLowerCase();

  const passed = descLower.includes(keywordLower);

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints: passed ? criteria.maxPoints : 0,
    passed,
    details: passed
      ? 'Keyword in meta description'
      : 'Keyword missing from meta description',
  };
}

/**
 * 4. Keyword Density 0.8-2.5% (15 points)
 */
function checkKeywordDensity(
  html: string,
  keyword: string,
  metrics: SEOMetrics,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  const density = metrics.keywordDensity;
  const passed = density >= 0.8 && density <= 2.5;

  let earnedPoints = 0;
  if (density < 0.5) {
    earnedPoints = 5; // Too low
  } else if (density >= 0.8 && density <= 2.5) {
    earnedPoints = criteria.maxPoints; // Perfect
  } else if (density <= 3.5) {
    earnedPoints = 10; // Slightly high
  } else {
    earnedPoints = 3; // Way too high
  }

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints,
    passed,
    details: `Density: ${density.toFixed(2)}% (ideal: 0.8-2.5%)`,
  };
}

/**
 * 5. H2 Headers - 3+, keyword in 2+ (15 points)
 */
function checkH2Headers(
  html: string,
  keyword: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  const h2Matches = html.match(/<h2[^>]*>([^<]+)<\/h2>/gi);
  const h2Count = h2Matches?.length || 0;

  let keywordInH2 = 0;
  if (h2Matches) {
    h2Matches.forEach((h2) => {
      if (h2.toLowerCase().includes(keyword.toLowerCase())) {
        keywordInH2++;
      }
    });
  }

  const hasEnoughH2s = h2Count >= 3;
  const hasKeywordInH2s = keywordInH2 >= 2;
  const passed = hasEnoughH2s && hasKeywordInH2s;

  let earnedPoints = 0;
  if (hasEnoughH2s && hasKeywordInH2s) {
    earnedPoints = criteria.maxPoints;
  } else if (hasEnoughH2s && keywordInH2 >= 1) {
    earnedPoints = 10;
  } else if (h2Count >= 2) {
    earnedPoints = 5;
  } else {
    earnedPoints = 0;
  }

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints,
    passed,
    details: `${h2Count} H2s (need 3+), keyword in ${keywordInH2} (need 2+)`,
  };
}

/**
 * 6. Internal Links - 2-3 (10 points)
 */
function checkInternalLinks(
  html: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  // Count <a> tags (internal links)
  const linkMatches = html.match(/<a[^>]*>/gi);
  const linkCount = linkMatches?.length || 0;

  const passed = linkCount >= 2 && linkCount <= 3;
  const earnedPoints =
    linkCount >= 2 && linkCount <= 3 ? criteria.maxPoints : linkCount > 0 ? 5 : 0;

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints,
    passed,
    details: `${linkCount} links (ideal: 2-3)`,
  };
}

/**
 * 7. Meta Title Length 30-60 (10 points)
 */
function checkMetaTitleLength(
  title: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  const length = title.length;
  const passed = length >= 30 && length <= 60;

  let earnedPoints = criteria.maxPoints;
  if (length < 30) {
    earnedPoints = 5;
  } else if (length > 60) {
    earnedPoints = 7;
  }

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints: passed ? criteria.maxPoints : earnedPoints,
    passed,
    details: `Length: ${length} (ideal: 30-60)`,
  };
}

/**
 * 8. Meta Description Length 100-160 (10 points)
 */
function checkMetaDescLength(
  description: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  const length = description.length;
  const passed = length >= 100 && length <= 160;

  let earnedPoints = criteria.maxPoints;
  if (length < 100) {
    earnedPoints = 5;
  } else if (length > 160) {
    earnedPoints = 7;
  }

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints: passed ? criteria.maxPoints : earnedPoints,
    passed,
    details: `Length: ${length} (ideal: 100-160)`,
  };
}

/**
 * 9. Header Hierarchy H2→H3 (5 points)
 */
function checkHeaderHierarchy(
  html: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  // Check that H3s appear after H2s (basic hierarchy)
  const h2Exists = /<h2[^>]*>/i.test(html);
  const h3Exists = /<h3[^>]*>/i.test(html);

  const passed = h2Exists && h3Exists;

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints: passed ? criteria.maxPoints : 0,
    passed,
    details: passed ? 'H2s and H3s present' : 'Missing proper header hierarchy',
  };
}

/**
 * 10. FAQ Section 4-5 questions (5 points)
 */
function checkFAQSection(
  html: string,
  criteria: { name: string; maxPoints: number }
): AuditCriterion {
  // Look for FAQ section and count h3+p pairs
  const faqMatch = html.match(
    /<h[23][^>]*>\s*(?:FAQ|Questions|Savollar|Вопросы)\s*<\/h[23]>([\s\S]*?)(?=<h[23]|$)/i
  );

  let qCount = 0;
  if (faqMatch) {
    const faqSection = faqMatch[1];
    const pairs = faqSection.match(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/gi);
    qCount = pairs?.length || 0;
  }

  const passed = qCount >= 4 && qCount <= 5;
  const earnedPoints = qCount >= 4 ? criteria.maxPoints : qCount >= 2 ? 2 : 0;

  return {
    criterion: criteria.name,
    maxPoints: criteria.maxPoints,
    earnedPoints,
    passed,
    details: `${qCount} FAQ items (ideal: 4-5)`,
  };
}

// ============================================================================
// Extract Metrics
// ============================================================================
function extractMetrics(html: string, keyword: string): SEOMetrics {
  // Remove HTML tags to get plain text
  const text = html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

  // Count words
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  const wordCount = words.length;

  // Calculate keyword density
  const keywordRegex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, 'gi');
  const keywordMatches = text.match(keywordRegex) || [];
  const keywordDensity = wordCount > 0 ? (keywordMatches.length / wordCount) * 100 : 0;

  // Count headers
  const h1Matches = html.match(/<h1[^>]*>/gi) || [];
  const h2Matches = html.match(/<h2[^>]*>/gi) || [];

  // Count internal links
  const linkMatches = html.match(/<a[^>]*>/gi) || [];

  // Count images
  const imgMatches = html.match(/<img[^>]*>/gi) || [];

  // Calculate readability metrics
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const avgSentenceLength = wordCount > 0 ? wordCount / sentences.length : 0;
  const avgWordLength =
    wordCount > 0 ? text.length / wordCount : 0;

  // Simple readability score (higher is more readable)
  const readabilityScore = 100 - (avgSentenceLength * 2 + avgWordLength);

  return {
    keywordDensity,
    h1Count: h1Matches.length,
    h2Count: h2Matches.length,
    internalLinksCount: linkMatches.length,
    imageCount: imgMatches.length,
    avgSentenceLength,
    avgWordLength,
    readabilityScore: Math.max(0, readabilityScore),
  };
}

// ============================================================================
// Interpret Score
// ============================================================================
function interpretScore(score: number): RecommendationType {
  if (score >= 85) {
    return 'publish';
  } else if (score >= 65) {
    return 'review';
  } else if (score >= 50) {
    return 'refine';
  } else {
    return 'reject';
  }
}

// ============================================================================
// Helper: Get Recommendation Details
// ============================================================================
export function getRecommendationDetails(recommendation: RecommendationType): string {
  const details = {
    publish: 'Ready to publish — meets all SEO requirements',
    review: 'Review before publishing — minor improvements suggested',
    refine: 'Needs refinement — significant SEO issues detected',
    reject: 'Regenerate article — major SEO failures detected',
  };

  return details[recommendation] || 'Unknown recommendation';
}

// ============================================================================
// Helper: Generate Fix Suggestions
// ============================================================================
export function generateFixSuggestions(result: AuditResult): string[] {
  const suggestions: string[] = [];

  result.breakdown.forEach((criterion) => {
    if (!criterion.passed) {
      if (criterion.criterion.includes('Title')) {
        suggestions.push(
          criterion.criterion.includes('Meta')
            ? 'Adjust meta title: aim for 50-60 characters'
            : 'Add keyword to meta title'
        );
      } else if (criterion.criterion.includes('Description')) {
        suggestions.push('Adjust meta description to 120-160 characters');
      } else if (criterion.criterion.includes('Keyword Density')) {
        suggestions.push('Adjust keyword frequency: aim for 0.8-2.5%');
      } else if (criterion.criterion.includes('H2')) {
        suggestions.push('Add 3+ H2 headers with keyword variants');
      } else if (criterion.criterion.includes('Links')) {
        suggestions.push('Add 2-3 internal links to relevant pages');
      } else if (criterion.criterion.includes('Hierarchy')) {
        suggestions.push('Ensure H2 sections contain H3 subsections');
      } else if (criterion.criterion.includes('FAQ')) {
        suggestions.push('Add 4-6 FAQ questions with answers');
      }
    }
  });

  return suggestions;
}
