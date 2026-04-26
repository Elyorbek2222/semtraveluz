/**
 * Article Generator — Claude Sonnet integration for travel content
 * Generates 800-1000 word SEO-optimized articles with metadata
 */

import Anthropic from '@anthropic-ai/sdk';
import { Article, Keyword } from '@/seo/types';

// ============================================================================
// Type Definitions
// ============================================================================
export interface GenerateArticleInput {
  keyword: string;
  niche: string; // "turlar", "mehmonxona", "viza", "blog"
  language: 'uz' | 'ru' | 'en';
  difficulty: 'easy' | 'medium' | 'hard';
  relatedTerms: string[];
  intent: string;
}

export interface ArticleMetadata {
  metaTitle: string; // 50-60 chars
  metaDescription: string; // 120-160 chars
  readingTime: number; // minutes
  faqItems: Array<{ question: string; answer: string }>;
  wordCount: number;
}

// ============================================================================
// System Prompts by Niche
// ============================================================================
const SYSTEM_PROMPTS = {
  uz: {
    turlar: `Siz o'zbek tilida sayohat bo'yicha ko'rikxona kontenti yozasiz.
Maqola tayyorlash qoidalari:
- HTML faqat: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- Yo'q: <script>, <style>, <img>, <a>, <div>, <span>
- 800-1000 so'z oralig'ida
- So'zning birinchi paragrafida kalit so'z bo'lishi shart
- 3-4 ta H2 sarlavha (har birida kalit so'z yoki uning o'zaro bog'liq variantlari)
- 5-7 ta H3 bo'lishlash
- 4-6 ta FAQ (sarilavha + javob)
- PAS framework: Muammo → Jarayoni → Yechim
- AIDA framework: Diqqat → Qiziqish → Istamo → Harakat

Maqola tuzilmasi:
1. Kirish paragrafida kalit so'z
2. Sartanas va foydaligi (H2)
3. Borilish vaqti va ob-hava (H2)
4. Joylar va ob'ektlar (H2)
5. Xavfsizlik va tujjuqhol (H2)
6. SAVOLLAR VA JAVOBLAR (FAQ H2)`,

    mehmonxona: `Siz o'zbek tilida mehmonxona bo'yicha SEO-maqola yozasiz.
Fokus: narxi, qulayliklari, joylashishi, xizmat sifati.

HTML: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em> faqat
- 800-1000 so'z
- 3-4 H2, 5-7 H3
- FAQ: 4-6 savol

Tuzilma:
1. Intro: Mehmonxona turi va afzalligi
2. Joylashuvi va erishish osonligi (H2)
3. Xonalari va obnovlash (H2)
4. Xizmatlar va qulayliklari (H2)
5. Narx va tariflar (H2)
6. FAQ (Book uchun kerakli savollar)`,

    viza: `Siz o'zbek tilida viza bo'yicha texnik-qonuniy maqola yozasiz.
Fokus: talablar, jarayoni, vaqt, xarajatlar, sherifnomalar.

HTML: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em> faqat
- 800-1000 so'z
- 3-4 H2, 5-7 H3
- FAQ: 4-6 savol

Tuzilma:
1. Intro: Viza turi va umumiy talablar
2. Zarur sherifnomalar (H2, <ul>)
3. Arizani topshirish jarayoni (H2, <ol>)
4. Qancha vaqt ketadi (H2)
5. Xarajatlar va to'lovlar (H2)
6. Eslatmalar va maslahatlar (H2)
7. FAQ`,

    blog: `Siz o'zbek tilida sayohat maslahatlar bo'yicha blog maqola yozasiz.
Fokus: sayohatchiga foydali tiplar, tajriba, joylar.

HTML: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em> faqat
- 800-1000 so'z
- 3-4 H2, 5-7 H3
- FAQ: 4-6 savol

Tuzilma:
1. Intro: Masala va nima bajarishi kerak
2. Eng yaxshi shartlar (H2)
3. Boshlanishdan oldin (H2)
4. Pakt bo'yicha maslahatlar (H2)
5. Katta xatolar va qanday chetlab o'tish (H2)
6. FAQ`,
  },

  ru: {
    turlar: `Вы пишете контент о турах на русском языке для туристического сайта.
Требования:
- HTML только: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 слов
- Ключевое слово в первом абзаце и в заголовках H2
- 3-4 заголовка H2 (с ключевым словом или его вариантами)
- 5-7 заголовков H3
- 4-6 вопросов FAQ
- PAS фреймворк
- AIDA фреймворк

Структура:
1. Вступление с ключевым словом
2. Описание тура (H2)
3. Когда ехать, климат (H2)
4. Достопримечательности (H2)
5. Безопасность и советы (H2)
6. FAQ`,

    mehmonxona: `Вы пишете о гостинице на русском языке.
Фокус: цена, удобства, расположение, качество.

HTML: только <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 слов
- 3-4 H2, 5-7 H3
- FAQ: 4-6 вопросов

Структура:
1. Введение
2. Местоположение и транспорт (H2)
3. Номера и оборудование (H2)
4. Услуги и удобства (H2)
5. Цены и тарифы (H2)
6. FAQ`,

    viza: `Вы пишете о визе на русском языке - технический и правовой контент.
Фокус: требования, процесс, время, стоимость, документы.

HTML: только <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 слов
- 3-4 H2, 5-7 H3
- FAQ: 4-6 вопросов

Структура:
1. Введение: тип визы и требования
2. Необходимые документы (H2)
3. Процесс подачи заявления (H2)
4. Как долго ждать (H2)
5. Стоимость и платежи (H2)
6. Советы (H2)
7. FAQ`,

    blog: `Вы пишете советы о путешествиях на русском для блога туристического сайта.
Фокус: полезные советы, опыт, места.

HTML: только <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 слов
- 3-4 H2, 5-7 H3
- FAQ: 4-6 вопросов

Структура:
1. Введение
2. Лучшие условия (H2)
3. Подготовка (H2)
4. Пошаговые советы (H2)
5. Типичные ошибки (H2)
6. FAQ`,
  },

  en: {
    turlar: `You write travel tour content in English for a tourism website.
Requirements:
- HTML only: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 words
- Keyword in first paragraph and multiple H2s
- 3-4 H2 headings (with keyword variants)
- 5-7 H3 subheadings
- 4-6 FAQ questions
- Use AIDA and PAS frameworks

Structure:
1. Introduction with keyword
2. Tour description (H2)
3. When to go, climate (H2)
4. Highlights and attractions (H2)
5. Safety and tips (H2)
6. FAQ`,

    mehmonxona: `You write about hotels in English.
Focus: price, amenities, location, quality.

HTML: only <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 words
- 3-4 H2, 5-7 H3
- FAQ: 4-6 questions

Structure:
1. Introduction
2. Location and access (H2)
3. Rooms and facilities (H2)
4. Services and amenities (H2)
5. Pricing and tariffs (H2)
6. FAQ`,

    viza: `You write about visas in English - technical and legal content.
Focus: requirements, process, timeline, cost, documents.

HTML: only <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 words
- 3-4 H2, 5-7 H3
- FAQ: 4-6 questions

Structure:
1. Introduction: visa type and requirements
2. Required documents (H2)
3. Application process (H2)
4. Processing time (H2)
5. Costs and fees (H2)
6. Tips (H2)
7. FAQ`,

    blog: `You write travel tips for a blog on a tourism website in English.
Focus: practical advice, experience, destinations.

HTML: only <h2>, <h3>, <p>, <ul>, <ol>, <li>, <blockquote>, <strong>, <em>
- 800-1000 words
- 3-4 H2, 5-7 H3
- FAQ: 4-6 questions

Structure:
1. Introduction
2. Best practices (H2)
3. Preparation (H2)
4. Step-by-step tips (H2)
5. Common mistakes (H2)
6. FAQ`,
  },
};

// ============================================================================
// Generate Article Function
// ============================================================================
export async function generateArticle(
  input: GenerateArticleInput
): Promise<Article> {
  const client = new Anthropic();
  const startTime = Date.now();

  // Get system prompt for this niche & language
  const systemPrompt =
    SYSTEM_PROMPTS[input.language]?.[
      input.niche as keyof typeof SYSTEM_PROMPTS['uz']
    ] ||
    SYSTEM_PROMPTS['en'][input.niche as keyof typeof SYSTEM_PROMPTS['en']] ||
    SYSTEM_PROMPTS['en']['blog'];

  // Build user prompt
  const userPrompt = buildUserPrompt(input);

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 6000,
      temperature: 0.8, // Balance creativity with consistency
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    // Extract content
    const content = response.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Claude');
    }

    const html = content.text;
    const wordCount = countWords(html);

    // Validate and adjust word count
    let finalHtml = html;
    if (wordCount > 1000) {
      finalHtml = trimArticle(finalHtml, 1000);
    } else if (wordCount < 800) {
      finalHtml = expandArticle(finalHtml, 800);
    }

    // Extract metadata
    const metadata = extractMetadata(finalHtml, input.keyword);

    const article: Article = {
      html: finalHtml,
      wordCount: countWords(finalHtml),
      metaTitle: metadata.metaTitle,
      metaDescription: metadata.metaDescription,
      language: input.language,
      links: [],
      images: [],
    };

    return article;
  } catch (error) {
    throw new Error(`Article generation failed: ${String(error)}`);
  }
}

// ============================================================================
// Build User Prompt
// ============================================================================
function buildUserPrompt(input: GenerateArticleInput): string {
  const relatedTerms =
    input.relatedTerms.length > 0
      ? `Related terms: ${input.relatedTerms.join(', ')}`
      : '';

  return `Write a comprehensive article about: "${input.keyword}"

Difficulty: ${input.difficulty}
Search Intent: ${input.intent}
Niche: ${input.niche}
${relatedTerms}

Requirements:
1. Generate valid HTML with semantic tags only
2. Include main keyword in title and multiple sections
3. Structure: introduction → 3-4 main sections → FAQ
4. 800-1000 words
5. Include 4-6 FAQ questions with answers
6. Use natural language, not robotic
7. Make it actionable and practical
8. Include specific examples or scenarios

Start with HTML content directly, no explanations or markdown.`;
}

// ============================================================================
// Count Words
// ============================================================================
export function countWords(html: string): number {
  // Remove HTML tags
  const text = html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

  // Count words
  const words = text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);

  return words.length;
}

// ============================================================================
// Trim Article
// ============================================================================
function trimArticle(html: string, targetWords: number): string {
  const paragraphs = html.split(/<\/?p>/);
  let accumulated = '';
  let wordCount = 0;

  for (let i = 0; i < paragraphs.length; i++) {
    const words = countWords(paragraphs[i]);
    if (wordCount + words > targetWords) {
      break;
    }
    accumulated += `<p>${paragraphs[i]}</p>`;
    wordCount += words;
  }

  // Ensure we have H2s and H3s at the start
  const titleMatch = html.match(/<h2[^>]*>.*?<\/h2>/);
  if (titleMatch && !accumulated.includes('<h2')) {
    accumulated = titleMatch[0] + accumulated;
  }

  return accumulated || html;
}

// ============================================================================
// Expand Article
// ============================================================================
function expandArticle(html: string, targetWords: number): string {
  // Simple expansion: just return as-is
  // In production, could call Claude again to expand specific sections
  return html;
}

// ============================================================================
// Extract Metadata
// ============================================================================
function extractMetadata(
  html: string,
  keyword: string
): ArticleMetadata {
  // Extract meta title from first h2 + keyword
  const h2Match = html.match(/<h2[^>]*>([^<]+)<\/h2>/);
  const h2Text = h2Match?.[1] || 'Article';
  const metaTitle = buildMetaTitle(h2Text, keyword);

  // Extract meta description from first paragraph
  const pMatch = html.match(/<p[^>]*>([^<]+)<\/p>/);
  const firstPara = pMatch?.[1] || '';
  const metaDescription = buildMetaDescription(firstPara);

  // Extract FAQ
  const faqItems = extractFAQ(html);

  // Calculate reading time
  const wordCount = countWords(html);
  const readingTime = Math.ceil(wordCount / 200);

  return {
    metaTitle,
    metaDescription,
    readingTime,
    faqItems,
    wordCount,
  };
}

// ============================================================================
// Build Meta Title
// ============================================================================
function buildMetaTitle(title: string, keyword: string): string {
  let metaTitle = `${title} | ${keyword}`;

  // Ensure 50-60 chars
  if (metaTitle.length > 60) {
    const titleOnly = title.substring(0, 40).trim();
    metaTitle = `${titleOnly} ${keyword}`;
  }

  if (metaTitle.length < 30) {
    metaTitle = `${title} - ${keyword}`;
  }

  return metaTitle.substring(0, 60);
}

// ============================================================================
// Build Meta Description
// ============================================================================
function buildMetaDescription(paragraph: string): string {
  let desc = paragraph
    .replace(/<[^>]+>/g, '')
    .trim()
    .substring(0, 160);

  // Pad if too short
  if (desc.length < 100) {
    desc = desc + '...';
  }

  return desc;
}

// ============================================================================
// Extract FAQ
// ============================================================================
function extractFAQ(
  html: string
): Array<{ question: string; answer: string }> {
  const faqItems: Array<{ question: string; answer: string }> = [];

  // Look for FAQ section (marked by h2 or h3 containing "FAQ" or "Questions")
  const faqSectionMatch = html.match(
    /<h[23][^>]*>\s*(?:FAQ|Questions|Savollar|Вопросы)\s*<\/h[23]>([\s\S]*?)(?=<h[23]|$)/i
  );

  if (faqSectionMatch) {
    const faqSection = faqSectionMatch[1];

    // Extract h3 + following p pairs
    const pairs = faqSection.match(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/gi);

    if (pairs) {
      pairs.forEach((pair) => {
        const qMatch = pair.match(/<h3[^>]*>([^<]+)<\/h3>/i);
        const aMatch = pair.match(/<p[^>]*>([^<]+)<\/p>/i);

        if (qMatch && aMatch) {
          faqItems.push({
            question: qMatch[1].trim(),
            answer: aMatch[1].trim(),
          });
        }
      });
    }
  }

  return faqItems.slice(0, 6);
}

// ============================================================================
// Generate From Keyword (convenience function)
// ============================================================================
export async function generateArticleFromKeyword(
  keyword: Keyword,
  relatedTerms: string[] = []
): Promise<Article> {
  return generateArticle({
    keyword: keyword.keyword,
    niche: keyword.niche,
    language: keyword.language as 'uz' | 'ru' | 'en',
    difficulty: keyword.difficulty as 'easy' | 'medium' | 'hard',
    relatedTerms,
    intent: keyword.intent,
  });
}
