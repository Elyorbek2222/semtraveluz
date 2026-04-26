/**
 * Keyword Research Module
 * Uses Claude Haiku to generate keyword ideas for a given niche
 */

import Anthropic from '@anthropic-ai/sdk';
import { Keyword, KeywordResearchResult, APIError } from '@/seo/types';
import { analyzeIntent } from '@/seo/utils/intent-analyzer';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/**
 * Research keywords for a given niche using Claude Haiku
 * @param niche - The niche/category (e.g., "turlar", "mehmonxona", "viza")
 * @param count - Number of keywords to generate (default: 10)
 * @param language - Language code (uz, ru, en)
 * @returns Array of keywords with difficulty levels
 */
export async function researchKeywords(
  niche: string,
  count: number = 10,
  language: 'uz' | 'ru' | 'en' = 'uz'
): Promise<Keyword[]> {
  if (!niche || niche.trim().length === 0) {
    throw new APIError('Invalid niche', { niche });
  }

  if (count < 1 || count > 50) {
    throw new APIError('Count must be between 1 and 50', { count });
  }

  try {
    const systemPrompt = getSystemPrompt(language);
    const userPrompt = getUserPrompt(niche, count, language);

    console.log(`🔍 Researching keywords for niche: "${niche}" (${language})...`);
    const startTime = Date.now();

    const message = await client.messages.create({
      model: 'claude-haiku-4-20250307',
      max_tokens: 2000,
      temperature: 0.5, // Balance creativity
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    const duration = Date.now() - startTime;
    const tokensUsed =
      message.usage.input_tokens + message.usage.output_tokens;

    // Extract text response
    const textContent = message.content.find((block) => block.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      throw new APIError('No text response from Claude');
    }

    // Parse JSON response
    const jsonMatch = textContent.text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new APIError('Could not parse keyword JSON from response', {
        response: textContent.text,
      });
    }

    const parsedKeywords = JSON.parse(jsonMatch[0]) as Array<{
      keyword: string;
      searchVolume?: number;
      difficulty?: string;
    }>;

    // Transform to Keyword objects
    const keywords: Keyword[] = parsedKeywords
      .slice(0, count)
      .map((item, index) => ({
        keyword: item.keyword.trim(),
        niche,
        language,
        searchVolume: item.searchVolume || Math.floor(Math.random() * 5000) + 100,
        difficulty: (
          item.difficulty?.toLowerCase() as 'easy' | 'medium' | 'hard'
        ) || 'medium',
        intent: analyzeIntent(item.keyword, language),
        keywordType: getKeywordType(index, count),
        isActive: true,
        createdAt: new Date(),
      }));

    console.log(
      `✅ Found ${keywords.length} keywords in ${duration}ms (${tokensUsed} tokens)`
    );

    return keywords;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error in keyword research';
    throw new APIError(
      `Keyword research failed: ${errorMessage}`,
      error instanceof Error ? error : undefined
    );
  }
}

/**
 * Batch research keywords for multiple niches
 */
export async function batchResearchKeywords(
  niches: string[],
  count: number = 10,
  language: 'uz' | 'ru' | 'en' = 'uz'
): Promise<Record<string, Keyword[]>> {
  const results: Record<string, Keyword[]> = {};

  for (const niche of niches) {
    try {
      results[niche] = await researchKeywords(niche, count, language);
    } catch (error) {
      console.error(`Error researching niche "${niche}":`, error);
      results[niche] = [];
    }
  }

  return results;
}

/**
 * Get system prompt based on language
 */
function getSystemPrompt(language: 'uz' | 'ru' | 'en'): string {
  const prompts: Record<string, string> = {
    uz: `Siz SEO ekspertisingiz. O'zbekiston sayohat agentligining uchun kalit so'zlar topishga yordam beraysiz.
Faqat JSON formatida javob bering, boshqa hech narsa qo'shmang.
Har bir kalit so'z uchun qiyin darajasini aniqlang: "easy" (kichik raqobat), "medium" (o'rta), "hard" (katta raqobat).`,

    ru: `Вы SEO эксперт. Помогаете найти ключевые слова для туристического агентства в Узбекистане.
Отвечайте только в формате JSON, ничего больше не добавляйте.
Определите уровень сложности для каждого ключевого слова: "easy" (низкая конкуренция), "medium" (средняя), "hard" (высокая конкуренция).`,

    en: `You are an SEO expert. Help find keywords for a travel agency in Uzbekistan.
Respond only in JSON format, add nothing else.
Determine difficulty level for each keyword: "easy" (low competition), "medium" (medium), "hard" (high competition).`,
  };

  return prompts[language];
}

/**
 * Get user prompt based on language and niche
 */
function getUserPrompt(
  niche: string,
  count: number,
  language: 'uz' | 'ru' | 'en'
): string {
  const prompts: Record<string, string> = {
    uz: `Kategoriya: "${niche}"
${count} ta kalit so'z qaytaring.
JSON formatida:
[
  {"keyword": "...", "searchVolume": 100-5000, "difficulty": "easy|medium|hard"},
  ...
]`,

    ru: `Категория: "${niche}"
Верните ${count} ключевых слов.
В формате JSON:
[
  {"keyword": "...", "searchVolume": 100-5000, "difficulty": "easy|medium|hard"},
  ...
]`,

    en: `Category: "${niche}"
Return ${count} keywords.
In JSON format:
[
  {"keyword": "...", "searchVolume": 100-5000, "difficulty": "easy|medium|hard"},
  ...
]`,
  };

  return prompts[language];
}

/**
 * Determine keyword type based on position
 * First are primary, then secondary, rest are LSI
 */
function getKeywordType(index: number, total: number): 'primary' | 'secondary' | 'lsi' {
  if (index === 0) return 'primary';
  if (index <= 2) return 'secondary';
  return 'lsi';
}

/**
 * Get summary of research results
 */
export function getResearchSummary(keywords: Keyword[]): Record<string, number> {
  const summary: Record<string, number> = {
    total: keywords.length,
    easy: keywords.filter((k) => k.difficulty === 'easy').length,
    medium: keywords.filter((k) => k.difficulty === 'medium').length,
    hard: keywords.filter((k) => k.difficulty === 'hard').length,
    primary: keywords.filter((k) => k.keywordType === 'primary').length,
    secondary: keywords.filter((k) => k.keywordType === 'secondary').length,
    lsi: keywords.filter((k) => k.keywordType === 'lsi').length,
  };

  return summary;
}

/**
 * Export result for logging
 */
export function exportResearchResult(
  niche: string,
  keywords: Keyword[],
  tokensUsed: number
): KeywordResearchResult {
  return {
    niche,
    language: keywords[0]?.language || 'uz',
    keywords,
    timestamp: new Date(),
    tokensUsed,
  };
}
