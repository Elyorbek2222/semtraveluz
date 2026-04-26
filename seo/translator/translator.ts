/**
 * Translator — Multilingual content translation (UZ, RU, EN)
 * Uses Claude Haiku for fast, accurate HTML-preserving translation
 */

import Anthropic from '@anthropic-ai/sdk';
import { TranslationResult } from '@/seo/types';

// ============================================================================
// Types
// ============================================================================
export type SupportedLanguage = 'uz' | 'ru' | 'en';

export interface TranslateInput {
  html: string;
  fromLanguage: SupportedLanguage;
  toLanguage: SupportedLanguage;
  keyword?: string;
}

export interface TranslationValidation {
  valid: boolean;
  issues: string[];
  tagCountBefore: number;
  tagCountAfter: number;
}

// ============================================================================
// Configuration
// ============================================================================
const TRANSLATION_CONFIG = {
  model: 'claude-3-5-haiku-20241022', // Fast + accurate
  temperature: 0.3, // Lower temp = more accuracy
  maxTokens: 4000,
  timeout: 60000, // 60 seconds
};

const SYSTEM_PROMPTS = {
  uz: `Siz o'zbek tiliga tarjimachi. Qoidalar:
- BARCHA HTML teglarini to'liq saqlang (<h2>, <h3>, <p>, <ul>, <ol>, <li>, vb.)
- Brend nomlarini tarjima qilmang
- Texnik atamalarni inglizcha qoldiring
- URL manzillarini saqlang
- Kod blokini o'zgartirib qo'ymang
- HTML struktura to'liq saqlangan bo'lsin
- Faqat matnni tarjima qiling, teglarni emas

Tarjima qoidalari:
- Tabii o'zbek tilida yozing
- Turizm terminlarini to'g'ri ishlating
- Nutqni tabiiy saqlang`,

  ru: `Вы переводчик на русский язык. Правила:
- СОХРАНЯЙТЕ все HTML теги точно (<h2>, <h3>, <p>, <ul>, <ol>, <li> и т.д.)
- НЕ переводите названия брендов
- Оставьте технические термины на английском
- СОХРАНЯЙТЕ URL-адреса
- Не меняйте блоки кода
- HTML структура должна быть полностью сохранена
- Переводите только текст, не теги

Правила перевода:
- Пишите естественно на русском языке
- Правильно используйте туристические термины
- Сохраняйте естественность речи`,

  en: `You are an English translator. Rules:
- PRESERVE all HTML tags exactly (<h2>, <h3>, <p>, <ul>, <ol>, <li>, etc.)
- DO NOT translate brand names
- Keep technical terms in English
- PRESERVE URLs
- Don't modify code blocks
- HTML structure must be completely preserved
- Only translate text, not tags

Translation rules:
- Write naturally in English
- Use correct tourism terminology
- Maintain natural speech patterns`,
};

// ============================================================================
// Main Translation Function
// ============================================================================
export async function translateArticle(
  input: TranslateInput
): Promise<TranslationResult> {
  // Validate input
  if (input.fromLanguage === input.toLanguage) {
    return {
      language: input.toLanguage,
      html: input.html,
      success: true,
      tokensUsed: 0,
      duration: 0,
      retries: 0,
    };
  }

  const client = new Anthropic();
  const startTime = Date.now();
  let retries = 0;
  const maxRetries = 2;

  // Validate HTML before translation
  const beforeValidation = validateHTML(input.html);

  while (retries <= maxRetries) {
    try {
      const systemPrompt = SYSTEM_PROMPTS[input.toLanguage] || SYSTEM_PROMPTS['en'];

      const userPrompt = buildTranslationPrompt(
        input.html,
        input.fromLanguage,
        input.toLanguage,
        input.keyword
      );

      const response = await client.messages.create({
        model: TRANSLATION_CONFIG.model,
        max_tokens: TRANSLATION_CONFIG.maxTokens,
        temperature: TRANSLATION_CONFIG.temperature,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userPrompt,
          },
        ],
      });

      const content = response.content[0];
      if (content.type !== 'text') {
        throw new Error('Unexpected response type from Claude');
      }

      const translatedHtml = content.text;

      // Validate translation
      const validation = validateTranslatedHTML(
        input.html,
        translatedHtml
      );

      if (!validation.valid && retries < maxRetries) {
        retries++;
        continue;
      }

      const duration = Date.now() - startTime;

      // Count tokens (approximate)
      const tokensUsed = Math.ceil(translatedHtml.length / 4);

      return {
        language: input.toLanguage,
        html: translatedHtml,
        success: validation.valid,
        error: !validation.valid ? validation.issues.join('; ') : undefined,
        tokensUsed,
        duration,
        retries,
      };
    } catch (error) {
      if (retries < maxRetries) {
        retries++;
        // Exponential backoff
        await new Promise((resolve) =>
          setTimeout(resolve, Math.pow(2, retries) * 1000)
        );
        continue;
      }

      const duration = Date.now() - startTime;

      return {
        language: input.toLanguage,
        html: input.html, // Fallback to original
        success: false,
        error: `Translation failed after ${maxRetries + 1} attempts: ${String(error)}`,
        tokensUsed: 0,
        duration,
        retries,
      };
    }
  }

  // Fallback (should not reach here)
  return {
    language: input.toLanguage,
    html: input.html,
    success: false,
    error: 'Translation failed',
    tokensUsed: 0,
    duration: Date.now() - startTime,
    retries,
  };
}

// ============================================================================
// Parallel Translation
// ============================================================================
export async function translateArticleParallel(
  html: string,
  sourceLanguage: SupportedLanguage = 'en',
  targetLanguages: SupportedLanguage[] = ['uz', 'ru']
): Promise<{ [lang: string]: TranslationResult }> {
  const results: { [lang: string]: TranslationResult } = {};

  // Include source language
  results[sourceLanguage] = {
    language: sourceLanguage,
    html,
    success: true,
    tokensUsed: 0,
    duration: 0,
    retries: 0,
  };

  // Translate to target languages in parallel
  const translations = await Promise.allSettled(
    targetLanguages.map((lang) =>
      translateArticle({
        html,
        fromLanguage: sourceLanguage,
        toLanguage: lang,
      })
    )
  );

  // Collect results
  translations.forEach((result, index) => {
    const lang = targetLanguages[index];
    if (result.status === 'fulfilled') {
      results[lang] = result.value;
    } else {
      // Fallback on failure
      results[lang] = {
        language: lang,
        html,
        success: false,
        error: `Translation failed: ${String(result.reason)}`,
        tokensUsed: 0,
        duration: 0,
        retries: 0,
      };
    }
  });

  return results;
}

// ============================================================================
// Build Translation Prompt
// ============================================================================
function buildTranslationPrompt(
  html: string,
  fromLanguage: SupportedLanguage,
  toLanguage: SupportedLanguage,
  keyword?: string
): string {
  const langNames = {
    uz: "O'zbek",
    ru: 'Русский',
    en: 'English',
  };

  const from = langNames[fromLanguage] || 'English';
  const to = langNames[toLanguage] || 'English';

  let prompt = `Translate this HTML content from ${from} to ${to}.

CRITICAL RULES:
1. PRESERVE every HTML tag exactly as is
2. ONLY translate the text content between tags
3. Do NOT change any HTML structure
4. Do NOT modify URLs, email addresses, or technical terms
5. Keep brand names unchanged

${keyword ? `6. Important keyword: "${keyword}" (or its equivalents in target language)\n` : ''}

HTML to translate:
${html}

Return ONLY the translated HTML, no explanations or markdown.`;

  return prompt;
}

// ============================================================================
// HTML Validation Before Translation
// ============================================================================
function validateHTML(html: string): TranslationValidation {
  const issues: string[] = [];
  const tagRegex = /<[^>]+>/g;
  const tags = html.match(tagRegex) || [];

  // Check for unclosed tags
  const openTags = html.match(/<[^/][^>]*>/g) || [];
  const closeTags = html.match(/<\/[^>]*>/g) || [];

  const validTags = ['h1', 'h2', 'h3', 'p', 'ul', 'ol', 'li', 'blockquote', 'strong', 'em'];
  const invalidTags = new Set<string>();

  tags.forEach((tag) => {
    const tagName = tag.match(/<\/?([a-z0-9]+)/i)?.[1]?.toLowerCase();
    if (tagName && !validTags.includes(tagName)) {
      invalidTags.add(tagName);
    }
  });

  if (invalidTags.size > 0) {
    issues.push(`Invalid tags found: ${Array.from(invalidTags).join(', ')}`);
  }

  if (openTags.length !== closeTags.length) {
    issues.push(`Tag mismatch: ${openTags.length} open, ${closeTags.length} close`);
  }

  return {
    valid: issues.length === 0,
    issues,
    tagCountBefore: tags.length,
    tagCountAfter: tags.length,
  };
}

// ============================================================================
// HTML Validation After Translation
// ============================================================================
function validateTranslatedHTML(
  original: string,
  translated: string
): TranslationValidation {
  const originalTags = original.match(/<[^>]+>/g) || [];
  const translatedTags = translated.match(/<[^>]+>/g) || [];

  const tagCountDiff = Math.abs(originalTags.length - translatedTags.length);
  const allowedDiff = 2; // Allow ±2 tag difference

  const issues: string[] = [];

  if (tagCountDiff > allowedDiff) {
    issues.push(
      `Tag count mismatch: ${originalTags.length} original vs ${translatedTags.length} translated (diff: ${tagCountDiff})`
    );
  }

  // Check for orphaned tags
  const h2Count = {
    original: (original.match(/<h2[^>]*>/gi) || []).length,
    translated: (translated.match(/<h2[^>]*>/gi) || []).length,
  };

  if (h2Count.original !== h2Count.translated) {
    issues.push(
      `H2 tag count changed: ${h2Count.original} → ${h2Count.translated}`
    );
  }

  return {
    valid: issues.length === 0,
    issues,
    tagCountBefore: originalTags.length,
    tagCountAfter: translatedTags.length,
  };
}

// ============================================================================
// Language Detection Helper
// ============================================================================
export function detectLanguage(text: string): SupportedLanguage {
  // Uzbek specific characters
  if (/[ўғқҳ]/.test(text)) {
    return 'uz';
  }

  // Russian specific characters
  if (/[яёюъщшчцаеиоу][йёь]/.test(text)) {
    return 'ru';
  }

  // Default to English
  return 'en';
}

// ============================================================================
// Translation Quality Check
// ============================================================================
export function checkTranslationQuality(
  original: string,
  translated: string,
  language: SupportedLanguage
): { quality: 'good' | 'acceptable' | 'poor'; score: number } {
  const originalLength = original.length;
  const translatedLength = translated.length;

  // Translation length should be within 80-120% of original
  const lengthRatio = translatedLength / originalLength;
  let score = 0;

  if (lengthRatio >= 0.8 && lengthRatio <= 1.2) {
    score += 40;
  } else if (lengthRatio >= 0.7 && lengthRatio <= 1.3) {
    score += 20;
  }

  // Check for common issue markers
  const issues = {
    hasHTMLTags: /<[^>]+>/.test(translated),
    hasUrls: /https?:\/\//.test(translated) === /https?:\/\//.test(original),
    hasHTMLEntities:
      /&[a-z]+;/.test(translated) === /&[a-z]+;/.test(original),
  };

  if (issues.hasHTMLTags && issues.hasUrls && issues.hasHTMLEntities) {
    score += 60;
  } else {
    score += 20;
  }

  let quality: 'good' | 'acceptable' | 'poor';
  if (score >= 80) {
    quality = 'good';
  } else if (score >= 50) {
    quality = 'acceptable';
  } else {
    quality = 'poor';
  }

  return { quality, score };
}

// ============================================================================
// Export for convenience
// ============================================================================
export async function translateFromEnglish(
  html: string,
  targetLanguages: SupportedLanguage[] = ['uz', 'ru']
): Promise<{ [lang: string]: string }> {
  const results = await translateArticleParallel(html, 'en', targetLanguages);
  const translations: { [lang: string]: string } = {};

  Object.entries(results).forEach(([lang, result]) => {
    translations[lang] = result.html;
  });

  return translations;
}
