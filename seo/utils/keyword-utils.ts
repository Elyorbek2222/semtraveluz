/**
 * Task 2.6: Keyword Utilities
 * Helper functions for filtering, sorting, and analyzing keywords
 */

import { prisma } from '@/lib/prisma';
import { Keyword } from '@/seo/types';
import type { SearchIntent } from './intent-analyzer';

/**
 * Get keywords by difficulty level
 */
export async function getKeywordsByDifficulty(
  difficulty: 'easy' | 'medium' | 'hard',
  language?: string
): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      difficulty,
      ...(language && { language }),
    },
    orderBy: { searchVolume: 'desc' },
  });

  return keywords as Keyword[];
}

/**
 * Get keywords by search intent
 */
export async function getKeywordsByIntent(
  intent: SearchIntent,
  language?: string
): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      intent,
      ...(language && { language }),
    },
    orderBy: { searchVolume: 'desc' },
  });

  return keywords as Keyword[];
}

/**
 * Get keywords by niche/category
 */
export async function getKeywordsByNiche(niche: string, language?: string): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      niche,
      ...(language && { language }),
    },
    orderBy: { difficulty: 'asc', searchVolume: 'desc' },
  });

  return keywords as Keyword[];
}

/**
 * Get keywords by language
 */
export async function getKeywordsByLanguage(language: string): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: { language },
    orderBy: { searchVolume: 'desc' },
  });

  return keywords as Keyword[];
}

/**
 * Get keywords that haven't been used in any blog post
 */
export async function getUnusedKeywords(limit?: number): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      NOT: {
        BlogPost: {
          some: {},
        },
      },
    },
    orderBy: [{ difficulty: 'asc' }, { searchVolume: 'desc' }],
    take: limit,
  });

  return keywords as Keyword[];
}

/**
 * Get keywords by multiple criteria
 */
export async function filterKeywords(filters: {
  difficulty?: 'easy' | 'medium' | 'hard';
  intent?: SearchIntent;
  language?: string;
  niche?: string;
  minSearchVolume?: number;
  maxSearchVolume?: number;
  limit?: number;
  unused?: boolean;
}): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      ...(filters.difficulty && { difficulty: filters.difficulty }),
      ...(filters.intent && { intent: filters.intent }),
      ...(filters.language && { language: filters.language }),
      ...(filters.niche && { niche: filters.niche }),
      ...(filters.minSearchVolume && { searchVolume: { gte: filters.minSearchVolume } }),
      ...(filters.maxSearchVolume && { searchVolume: { lte: filters.maxSearchVolume } }),
      ...(filters.unused && {
        NOT: {
          BlogPost: { some: {} },
        },
      }),
    },
    orderBy: [{ difficulty: 'asc' }, { searchVolume: 'desc' }],
    take: filters.limit,
  });

  return keywords as Keyword[];
}

/**
 * Get top keywords for a niche by search volume
 */
export async function getTopKeywordsByNiche(
  niche: string,
  language: string,
  count: number = 10
): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      niche,
      language,
    },
    orderBy: { searchVolume: 'desc' },
    take: count,
  });

  return keywords as Keyword[];
}

/**
 * Get keywords with lowest difficulty for quick wins
 */
export async function getEasyKeywords(limit: number = 10, language?: string): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      difficulty: 'easy',
      ...(language && { language }),
    },
    orderBy: { searchVolume: 'desc' },
    take: limit,
  });

  return keywords as Keyword[];
}

/**
 * Get suggested keywords for article generation
 */
export async function getKeywordSuggestionsForContent(
  niche: string,
  language: string,
  count: number = 5,
  maxDifficulty: 'easy' | 'medium' | 'hard' = 'medium'
): Promise<Keyword[]> {
  const difficultyMap = { easy: 1, medium: 2, hard: 3 };
  const allKeywords = await prisma.keyword.findMany({
    where: {
      niche,
      language,
    },
  });

  const filtered = (allKeywords as Keyword[])
    .filter((k) => difficultyMap[k.difficulty] <= difficultyMap[maxDifficulty])
    .sort((a, b) => {
      // Prioritize: easy > medium, high volume, then alphabetical
      const diffScore = difficultyMap[a.difficulty] - difficultyMap[b.difficulty];
      if (diffScore !== 0) return diffScore;
      return b.searchVolume - a.searchVolume;
    })
    .slice(0, count);

  return filtered;
}

/**
 * Get keywords by primary type (first keyword is usually the primary target)
 */
export async function getPrimaryKeywords(language?: string): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      keywordType: 'primary',
      ...(language && { language }),
    },
    orderBy: { searchVolume: 'desc' },
  });

  return keywords as Keyword[];
}

/**
 * Get LSI (Latent Semantic Indexing) keywords for semantic relevance
 */
export async function getLSIKeywords(targetKeyword: string, limit: number = 10): Promise<Keyword[]> {
  const target = await prisma.keyword.findFirst({
    where: { keyword: targetKeyword },
  });

  if (!target) return [];

  const related = await prisma.keyword.findMany({
    where: {
      niche: target.niche,
      language: target.language,
      keywordType: 'lsi',
      NOT: {
        keyword: targetKeyword,
      },
    },
    orderBy: { searchVolume: 'desc' },
    take: limit,
  });

  return related as Keyword[];
}

/**
 * Get keyword statistics across all keywords
 */
export async function getKeywordStats(): Promise<{
  total: number;
  byDifficulty: Record<string, number>;
  byIntent: Record<string, number>;
  byLanguage: Record<string, number>;
  byNiche: Record<string, number>;
  avgSearchVolume: number;
  used: number;
  unused: number;
}> {
  const total = await prisma.keyword.count();

  const byDifficulty = await prisma.keyword.groupBy({
    by: ['difficulty'],
    _count: true,
  });

  const byIntent = await prisma.keyword.groupBy({
    by: ['intent'],
    _count: true,
  });

  const byLanguage = await prisma.keyword.groupBy({
    by: ['language'],
    _count: true,
  });

  const byNiche = await prisma.keyword.groupBy({
    by: ['niche'],
    _count: true,
  });

  const avgResult = await prisma.keyword.aggregate({
    _avg: { searchVolume: true },
  });

  const allKeywords = await prisma.keyword.findMany();
  const used = (allKeywords as any[]).filter(
    (k) => (k as any).BlogPost && (k as any).BlogPost.length > 0
  ).length;
  const unused = total - used;

  return {
    total,
    byDifficulty: Object.fromEntries(byDifficulty.map((d) => [d.difficulty, d._count])),
    byIntent: Object.fromEntries(byIntent.map((d) => [d.intent, d._count])),
    byLanguage: Object.fromEntries(byLanguage.map((d) => [d.language, d._count])),
    byNiche: Object.fromEntries(byNiche.map((d) => [d.niche, d._count])),
    avgSearchVolume: Math.round(avgResult._avg.searchVolume || 0),
    used,
    unused,
  };
}

/**
 * Search for keywords matching a pattern
 */
export async function searchKeywords(
  pattern: string,
  language?: string,
  limit: number = 20
): Promise<Keyword[]> {
  const keywords = await prisma.keyword.findMany({
    where: {
      keyword: {
        contains: pattern,
        mode: 'insensitive',
      },
      ...(language && { language }),
    },
    orderBy: { searchVolume: 'desc' },
    take: limit,
  });

  return keywords as Keyword[];
}

/**
 * Get recommended keywords for content strategy
 * Returns a mix of easy, medium, and high-volume keywords
 */
export async function getContentStrategyKeywords(
  niche: string,
  language: string,
  count: number = 15
): Promise<{
  quick_wins: Keyword[];
  medium_effort: Keyword[];
  high_value: Keyword[];
}> {
  const easyCount = Math.ceil(count * 0.3);
  const mediumCount = Math.ceil(count * 0.4);
  const hardCount = count - easyCount - mediumCount;

  const [easy, medium, hard] = await Promise.all([
    getKeywordsByNiche(niche, language),
    getKeywordsByNiche(niche, language),
    getKeywordsByNiche(niche, language),
  ]);

  return {
    quick_wins: easy.filter((k) => k.difficulty === 'easy').slice(0, easyCount),
    medium_effort: medium.filter((k) => k.difficulty === 'medium').slice(0, mediumCount),
    high_value: hard
      .filter((k) => k.difficulty === 'hard')
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .slice(0, hardCount),
  };
}

/**
 * Get keyword clusters for topic mapping
 */
export async function getKeywordClusters(niche: string, language: string): Promise<
  Record<
    string,
    {
      intent: SearchIntent;
      count: number;
      avgVolume: number;
      keywords: Keyword[];
    }
  >
> {
  const keywords = (await getKeywordsByNiche(niche, language)) as Keyword[];

  const clusters: Record<
    string,
    {
      intent: SearchIntent;
      count: number;
      avgVolume: number;
      keywords: Keyword[];
    }
  > = {};

  keywords.forEach((kw) => {
    if (!clusters[kw.intent]) {
      clusters[kw.intent] = {
        intent: kw.intent,
        count: 0,
        avgVolume: 0,
        keywords: [],
      };
    }
    clusters[kw.intent].keywords.push(kw);
    clusters[kw.intent].count++;
  });

  // Calculate averages
  Object.values(clusters).forEach((cluster) => {
    const total = cluster.keywords.reduce((sum, k) => sum + k.searchVolume, 0);
    cluster.avgVolume = Math.round(total / cluster.count);
  });

  return clusters;
}
