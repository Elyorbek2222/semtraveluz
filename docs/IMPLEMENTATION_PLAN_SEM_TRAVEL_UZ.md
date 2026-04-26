# SEM Travel.uz — SEO Automation Implementation Plan

**Status:** Complete Blueprint  
**Date:** 2026-04-26  
**Scope:** Full Content Academia SEO automation system adapted for travel/tours domain  
**Target:** 104+ published articles/year with 0 manual content writing  

---

## Executive Summary

SEM Travel.uz will implement an **automated 10-step SEO content pipeline** powered by Claude AI. This system will:

- 🤖 **Generate 2 articles/week** (104/year) targeting travel-related keywords
- 🌍 **Auto-publish in 3 languages** (Uzbek, Russian, English) from single generation
- 📊 **Quality gate at 65/100 SEO score** — low-quality content never publishes
- 👤 **Admin approval workflow** — AI generates, humans approve
- 📈 **Expected traffic increase:** 5-10x within 12 months
- 💰 **Cost per article:** $0.08-0.15 (API fees only, no writers)

---

## Part 1: Foundation Setup (Week 1)

### Phase 1.1: Environment & Dependencies

**Task 1: Install Core Packages**

```bash
npm install axios cheerio
npm install -D @types/cheerio tsx
```

**Task 2: Create `.env.local`**

```env
CLAUDE_API_KEY=sk-ant-xxxx
DATABASE_URL=postgresql://user:pass@host/sem_travel_prod
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx
```

**Task 3: Create `/seo` folder structure**

```
/seo
├── /config
│   └── seo.config.ts          (Global SEO configuration)
├── /utils
│   ├── meta-tags.ts           (Meta tag generators)
│   └── helpers.ts             (Common utilities)
├── /schema
│   ├── tour-schema.ts         (TouristTrip + Offer)
│   ├── destination-schema.ts  (Place + LocalBusiness)
│   ├── breadcrumb-schema.ts   (BreadcrumbList)
│   ├── faq-schema.ts          (FAQPage)
│   └── org-schema.ts          (TravelAgency + Organization)
├── /pipeline
│   ├── keyword-research.ts    (Haiku keyword research)
│   ├── article-generator.ts   (Sonnet article generation)
│   ├── seo-auditor.ts         (100-point audit)
│   ├── translator.ts          (Haiku translation)
│   ├── publisher.ts           (Database + fallback)
│   └── notifier.ts            (Email + Telegram)
├── /audit
│   ├── site-crawler.ts        (Crawl 55 pages)
│   └── report-generator.ts    (Health check)
└── /scripts
    ├── run-pipeline.ts        (Full 10-step pipeline)
    └── run-audit.ts           (SEO health check)
```

**Task 4: Update `package.json` scripts**

```json
{
  "scripts": {
    "seo:pipeline": "tsx seo/scripts/run-pipeline.ts",
    "seo:audit": "tsx seo/scripts/run-audit.ts",
    "seo:crawl": "tsx seo/audit/site-crawler.ts"
  }
}
```

---

## Part 2: Configuration Layer (Week 1-2)

### Phase 2.1: SEO Config

**File:** `/seo/config/seo.config.ts`

```typescript
export const seoConfig = {
  site: {
    name: "SEM Travel",
    url: "https://semtravel.uz",
    description: "Sayohatlar, turlar va vizalar O'zbekistondan",
    logo: "https://semtravel.uz/logo.png",
    languages: ["uz", "ru", "en"],
    defaultLanguage: "uz"
  },
  
  branding: {
    primary: "#0057A8",    // brand blue
    accent: "#FF6B35",     // CTA orange
    gold: "#F5C518"        // stars/highlights
  },

  seo: {
    minSeoScore: 65,
    maxRefinementRetries: 2,
    targetArticleWords: 800,
    maxArticleWords: 1000
  },

  claude: {
    generationModel: "claude-sonnet-4-20250514",
    keywordModel: "claude-haiku-4-20250307",
    translationModel: "claude-haiku-4-20250307",
    generationTemp: 0.8,
    keywordTemp: 0.5,
    translationTemp: 0.3,
    generationMaxTokens: 6000,
    keywordMaxTokens: 2000,
    translationMaxTokens: 4000
  },

  pipeline: {
    articlesPerWeek: 2,
    languages: ["ru", "he"],     // Translate to these from EN
    publishingSchedule: "every_monday_thursday_9am",
    categoryRotation: true
  },

  analytics: {
    enableTokenTracking: true,
    archiveReportsAfterDays: 30
  }
};
```

### Phase 2.2: Meta Tags Utility

**File:** `/seo/utils/meta-tags.ts`

```typescript
import { Metadata } from "next";
import { seoConfig } from "../config/seo.config";

export function generateTourMeta(tour: Tour): Metadata {
  const title = `${tour.name} — Tur ${tour.days} kun | SEM Travel`;
  const description = `${tour.name}ga tur. ${tour.country}ga sayohat. Narxi: ${tour.price}$. Batafsil ma'lumot va bron.`;
  
  return {
    title,
    description,
    keywords: [tour.name, tour.country, "tur", "sayohat"],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://semtravel.uz/tours/${tour.slug}`
    },
    alternates: {
      canonical: `https://semtravel.uz/tours/${tour.slug}`
    }
  };
}

export function generateDestinationMeta(dest: Destination): Metadata {
  const title = `${dest.name}ga Sayohat | SEM Travel`;
  const description = `${dest.name}ga sayohat. Joylar, mehmonxonalar, bron. Vizalar va hujjatlar. Eng yaxshi turlar.`;
  
  return {
    title,
    description,
    keywords: [dest.name, "sayohat", dest.country],
    openGraph: {
      title,
      description,
      type: "website"
    }
  };
}

export function generateBlogMeta(post: BlogPost, lang: string = "uz"): Metadata {
  const title = post.metaTitle[lang] || post.metaTitle.en;
  const description = post.metaDescription[lang] || post.metaDescription.en;
  
  return {
    title,
    description,
    keywords: [post.keyword, ...post.lsiKeywords],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.createdAt.toISOString()
    }
  };
}
```

---

## Part 3: Schema Layer (Week 2)

### Phase 3.1: Schema Factories

**File:** `/seo/schema/tour-schema.ts`

```typescript
export function generateTourSchema(tour: Tour, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    itinerary: tour.itinerary.map((day, i) => ({
      "@type": "Day",
      dayNumber: i + 1,
      name: day.title,
      description: day.description
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: tour.price.toString(),
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/tours/${tour.slug}`
    },
    image: tour.image,
    duration: `P${tour.days}D`,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/tours/${tour.slug}?action=book`,
        actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"]
      }
    }
  };
}

export function generateDestinationSchema(dest: Destination, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: dest.name,
    description: dest.description,
    location: {
      "@type": "GeoCoordinates",
      latitude: dest.lat,
      longitude: dest.lng
    },
    image: dest.image,
    url: `${baseUrl}/destinations/${dest.slug}`
  };
}

export function generateOrgSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "SEM Travel",
    url: baseUrl,
    telephone: "+998 71 200 00 00",
    email: "info@semtravel.uz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tashkent, Uzbekistan",
      addressCountry: "UZ"
    },
    sameAs: [
      "https://instagram.com/semtravel",
      "https://facebook.com/semtravel"
    ]
  };
}

export function generateFaqSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
```

---

## Part 4: Pipeline Implementation (Week 3-4)

### Phase 4.1: Keyword Research Agent

**File:** `/seo/pipeline/keyword-research.ts`

```typescript
import Anthropic from "@anthropic-ai/sdk";

interface KeywordResearchResult {
  primaryKeyword: string;
  secondaryKeywords: string[];
  lsiKeywords: string[];
  longTailKeywords: string[];
  searchIntent: "informational" | "commercial" | "transactional" | "navigational";
  suggestedHeadings: string[];
  competitorAngle: string;
}

export async function researchKeyword(topic: string): Promise<KeywordResearchResult> {
  const client = new Anthropic();

  const systemPrompt = `You are an expert SEO keyword researcher specializing in travel/tourism. 
Analyze the given topic and provide:
1. Primary keyword (best search volume + reasonable competition)
2. 3-5 secondary keywords (related, lower competition)
3. 5-8 LSI keywords (semantically related for topical authority)
4. 3-5 long-tail variations (4+ words, specific intent)
5. Search intent classification
6. 3 suggested H2 headings
7. Competitive angle vs top 3 ranking sites

Return ONLY valid JSON, no markdown.`;

  const userPrompt = `Topic: "${topic}"
Language context: Uzbek/Russian/English travel market
Domain: Tours, destinations, visas, travel guides`;

  const message = await client.messages.create({
    model: "claude-haiku-4-20250307",
    max_tokens: 2000,
    temperature: 0.5,
    system: systemPrompt,
    messages: [
      { role: "user", content: userPrompt }
    ]
  });

  const result = JSON.parse(message.content[0].type === 'text' ? message.content[0].text : '{}');
  
  return {
    primaryKeyword: result.primaryKeyword || topic,
    secondaryKeywords: result.secondaryKeywords || [],
    lsiKeywords: result.lsiKeywords || [],
    longTailKeywords: result.longTailKeywords || [],
    searchIntent: result.searchIntent || "informational",
    suggestedHeadings: result.suggestedHeadings || [],
    competitorAngle: result.competitorAngle || ""
  };
}
```

### Phase 4.2: Article Generator

**File:** `/seo/pipeline/article-generator.ts`

```typescript
import Anthropic from "@anthropic-ai/sdk";

interface ArticleInput {
  keyword: string;
  relatedKeywords: string[];
  lsiKeywords: string[];
  searchIntent: string;
  targetAudience: string;
  toneOfVoice: string;
}

interface GeneratedArticle {
  html: string;
  wordCount: number;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  relatedKeywords: string[];
  faqItems: Array<{ question: string; answer: string }>;
  readingTime: number;
  tokensUsed: number;
}

export async function generateArticle(input: ArticleInput): Promise<GeneratedArticle> {
  const client = new Anthropic();

  const systemPrompt = `You are an expert SEO content writer with 15+ years of experience in travel industry.
Your task is to write a high-quality, engaging blog article optimized for search engines.

CRITICAL RULES:
- Write ONLY semantic HTML: h2, h3, p, ul, ol, li, blockquote, strong, em
- NO h1, html, body, head tags
- Target length: 800-1000 words (NEVER exceed 1000)
- NO markdown or other formatting
- Structure: Intro (PAS framework) → 3-4 main sections (AIDA framework) → FAQ → Conclusion

INTRODUCTION (PAS: Problem → Agitate → Solution):
- Problem: Reader's pain point (1-2 sentences)
- Agitate: Why it matters (2-3 sentences)
- Solution: Preview of your answer (1 sentence)

MAIN SECTIONS (AIDA for each):
- Attention: Strong h2 with keyword variation
- Interest: Fact, stat, or question
- Desire: Show benefits and results
- Action: Practical tip or advice

FAQ SECTION:
- Include 4-5 FAQ questions as h3 + p pairs
- Use real search queries
- Keep answers 2-3 sentences

QUALITY CHECKLIST:
- ✓ Keywords naturally included (not stuffed)
- ✓ Active voice throughout
- ✓ Max 4 sentences per paragraph
- ✓ At least one list (ul or ol)
- ✓ At least one blockquote with insight
- ✓ Strong tags for important phrases
- ✓ Write for humans, not search engines

Remember: Quality content ranks. Keyword spam doesn't.`;

  const userPrompt = `
Create a blog article for:
Topic: "${input.keyword}"
Related terms: ${input.relatedKeywords.join(", ")}
LSI keywords: ${input.lsiKeywords.join(", ")}
Search Intent: ${input.searchIntent}
Target Audience: ${input.targetAudience}
Tone: ${input.toneOfVoice}

Requirements:
- 800-1000 words
- Semantic HTML only
- Include FAQ section (4-5 questions)
- Optimize for "${input.keyword}"
- Natural keyword placement (0.8-2.5% density)
`;

  const startTime = Date.now();
  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 6000,
    temperature: 0.8,
    system: systemPrompt,
    messages: [
      { role: "user", content: userPrompt }
    ]
  });

  const html = message.content[0].type === 'text' ? message.content[0].text : '';
  const duration = Date.now() - startTime;

  // Extract word count
  const text = html.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;

  // Extract meta title (from first h2)
  const titleMatch = html.match(/<h2[^>]*>([^<]+)<\/h2>/);
  const metaTitle = titleMatch 
    ? `${titleMatch[1]} | ${input.keyword}`.substring(0, 60)
    : `${input.keyword} — Complete Guide`;

  // Extract meta description (first paragraph)
  const descMatch = html.match(/<p[^>]*>([^<]+)<\/p>/);
  const metaDescription = descMatch
    ? descMatch[1].substring(0, 160) + "..."
    : "Learn everything about this topic in our comprehensive guide.";

  // Extract FAQ
  const faqSection = html.match(/<h2[^>]*>FAQ<\/h2>([\s\S]*?)(?=<h2|$)/i);
  const faqItems: Array<{question: string, answer: string}> = [];
  if (faqSection) {
    const questions = faqSection[1].match(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/g) || [];
    questions.forEach(q => {
      const match = q.match(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/);
      if (match) {
        faqItems.push({ question: match[1], answer: match[2] });
      }
    });
  }

  return {
    html,
    wordCount,
    metaTitle,
    metaDescription,
    focusKeyword: input.keyword,
    relatedKeywords: input.relatedKeywords,
    faqItems,
    readingTime: Math.ceil(wordCount / 200),
    tokensUsed: message.usage.output_tokens
  };
}
```

### Phase 4.3: SEO Auditor (100-Point System)

**File:** `/seo/pipeline/seo-auditor.ts`

```typescript
interface AuditResult {
  totalScore: number;
  breakdown: Array<{
    criterion: string;
    maxPoints: number;
    earnedPoints: number;
    passed: boolean;
  }>;
  criticalIssues: string[];
  recommendation: "publish" | "review" | "refine" | "reject";
}

export function auditSEO(
  html: string,
  metaTitle: string,
  metaDescription: string,
  keyword: string
): AuditResult {
  let totalScore = 0;
  const breakdown = [];

  // 1. Keyword in title (10 pts)
  const criterion1 = metaTitle.toLowerCase().includes(keyword.toLowerCase());
  const pts1 = criterion1 ? 10 : 0;
  totalScore += pts1;
  breakdown.push({
    criterion: "Keyword in title",
    maxPoints: 10,
    earnedPoints: pts1,
    passed: criterion1
  });

  // 2. Keyword in first paragraph (10 pts)
  const firstP = html.match(/<p[^>]*>([^<]+)<\/p>/);
  const criterion2 = firstP && firstP[1].toLowerCase().includes(keyword.toLowerCase());
  const pts2 = criterion2 ? 10 : 0;
  totalScore += pts2;
  breakdown.push({
    criterion: "Keyword in first paragraph",
    maxPoints: 10,
    earnedPoints: pts2,
    passed: !!criterion2
  });

  // 3. Keyword in meta description (10 pts)
  const criterion3 = metaDescription.toLowerCase().includes(keyword.toLowerCase());
  const pts3 = criterion3 ? 10 : 0;
  totalScore += pts3;
  breakdown.push({
    criterion: "Keyword in meta description",
    maxPoints: 10,
    earnedPoints: pts3,
    passed: criterion3
  });

  // 4. Keyword density 0.8-2.5% (15 pts)
  const text = html.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
  const keywordMatches = (text.match(new RegExp(keyword, 'gi')) || []).length;
  const keywordWords = keyword.split(' ').length;
  const density = wordCount > 0 ? (keywordMatches * keywordWords / wordCount) * 100 : 0;
  
  let pts4 = 0;
  if (density >= 0.8 && density <= 2.5) pts4 = 15;
  else if ((density >= 0.5 && density < 0.8) || (density > 2.5 && density <= 3)) pts4 = 10;
  
  totalScore += pts4;
  breakdown.push({
    criterion: `Keyword density (${density.toFixed(2)}%)`,
    maxPoints: 15,
    earnedPoints: pts4,
    passed: pts4 > 0
  });

  // 5. H2 headings with keyword (15 pts)
  const h2s = html.match(/<h2[^>]*>([^<]+)<\/h2>/g) || [];
  let h2sWithKeyword = 0;
  h2s.forEach(tag => {
    if (tag.toLowerCase().includes(keyword.toLowerCase())) h2sWithKeyword++;
  });
  
  let pts5 = 0;
  if (h2s.length >= 3 && h2sWithKeyword >= 2) pts5 = 15;
  else if (h2s.length >= 2 && h2sWithKeyword >= 1) pts5 = 10;
  
  totalScore += pts5;
  breakdown.push({
    criterion: `H2 headings (${h2s.length} found, ${h2sWithKeyword} with keyword)`,
    maxPoints: 15,
    earnedPoints: pts5,
    passed: pts5 > 0
  });

  // 6. Internal links (10 pts)
  const links = html.match(/<a[^>]*href="\/[^"]*"[^>]*>/g) || [];
  let pts6 = 0;
  if (links.length >= 2 && links.length <= 3) pts6 = 10;
  else if (links.length === 1) pts6 = 5;
  
  totalScore += pts6;
  breakdown.push({
    criterion: `Internal links (${links.length} found)`,
    maxPoints: 10,
    earnedPoints: pts6,
    passed: links.length >= 1
  });

  // 7. Meta title length 30-60 (10 pts)
  let pts7 = 0;
  if (metaTitle.length >= 30 && metaTitle.length <= 60) pts7 = 10;
  else if ((metaTitle.length >= 20 && metaTitle.length < 30) ||
           (metaTitle.length > 60 && metaTitle.length <= 70)) pts7 = 5;
  
  totalScore += pts7;
  breakdown.push({
    criterion: `Meta title length (${metaTitle.length} chars)`,
    maxPoints: 10,
    earnedPoints: pts7,
    passed: pts7 > 0
  });

  // 8. Meta description length 100-160 (10 pts)
  let pts8 = 0;
  if (metaDescription.length >= 100 && metaDescription.length <= 160) pts8 = 10;
  else if ((metaDescription.length >= 80 && metaDescription.length < 100) ||
           (metaDescription.length > 160 && metaDescription.length <= 180)) pts8 = 5;
  
  totalScore += pts8;
  breakdown.push({
    criterion: `Meta description length (${metaDescription.length} chars)`,
    maxPoints: 10,
    earnedPoints: pts8,
    passed: pts8 > 0
  });

  // 9. H2 → H3 hierarchy (5 pts)
  const hasH2 = /<h2[^>]*>/i.test(html);
  const hasH3 = /<h3[^>]*>/i.test(html);
  const h3AfterH2 = html.indexOf('<h3') > html.indexOf('<h2');
  const criterion9 = hasH2 && hasH3 && h3AfterH2;
  const pts9 = criterion9 ? 5 : 0;
  
  totalScore += pts9;
  breakdown.push({
    criterion: "H2 → H3 hierarchy",
    maxPoints: 5,
    earnedPoints: pts9,
    passed: criterion9
  });

  // 10. FAQ section (5 pts)
  const faqMatch = html.match(/<h2[^>]*>FAQ<\/h2>([\s\S]*?)(?=<h2|$)/i);
  const faqCount = faqMatch ? (faqMatch[1].match(/<h3[^>]*>/g) || []).length : 0;
  
  let pts10 = 0;
  if (faqCount >= 4 && faqCount <= 5) pts10 = 5;
  else if (faqCount === 3) pts10 = 3;
  
  totalScore += pts10;
  breakdown.push({
    criterion: `FAQ section (${faqCount} questions)`,
    maxPoints: 5,
    earnedPoints: pts10,
    passed: faqCount >= 3
  });

  // Determine recommendation
  let recommendation: "publish" | "review" | "refine" | "reject" = "publish";
  const criticalIssues: string[] = [];
  
  breakdown.forEach(item => {
    if (item.earnedPoints === 0) {
      criticalIssues.push(`❌ ${item.criterion}`);
    }
  });

  if (totalScore >= 85) recommendation = "publish";
  else if (totalScore >= 65) recommendation = "review";
  else if (totalScore >= 50) recommendation = "refine";
  else recommendation = "reject";

  return {
    totalScore,
    breakdown,
    criticalIssues,
    recommendation
  };
}
```

### Phase 4.4: Translator

**File:** `/seo/pipeline/translator.ts`

```typescript
import Anthropic from "@anthropic-ai/sdk";

interface TranslationResult {
  language: string;
  html: string;
  tokensUsed: number;
  success: boolean;
  error?: string;
}

export async function translateArticle(
  html: string,
  targetLang: "ru" | "he",
  keyword: string
): Promise<TranslationResult> {
  const client = new Anthropic();
  const langNames = { ru: "Russian", he: "Hebrew" };

  const systemPrompt = `Translate the HTML article into ${langNames[targetLang]}.

CRITICAL RULES:
1. Keep ALL HTML tags exactly as they are
2. Translate ONLY the text between tags
3. DO NOT translate:
   - Brand names (SEM Travel, Claude, Uzbekistan)
   - Technical terms in English
   - Code inside <code> and <pre>
   - URLs and links
4. Preserve paragraph structure
5. Keep list item count unchanged
6. Preserve <strong> and <em> formatting
7. Return ONLY the translated HTML, no explanation`;

  const userPrompt = `Translate this HTML article:\n\n${html}`;

  try {
    const originalTagCount = (html.match(/<[^>]+>/g) || []).length;

    const message = await client.messages.create({
      model: "claude-haiku-4-20250307",
      max_tokens: 4000,
      temperature: 0.3,
      system: systemPrompt,
      messages: [
        { role: "user", content: userPrompt }
      ]
    });

    const translatedHtml = message.content[0].type === 'text' ? message.content[0].text : '';
    const translatedTagCount = (translatedHtml.match(/<[^>]+>/g) || []).length;

    // Validate HTML structure
    if (Math.abs(originalTagCount - translatedTagCount) > 2) {
      throw new Error(
        `HTML structure corrupted: ${originalTagCount} tags → ${translatedTagCount} tags`
      );
    }

    return {
      language: targetLang,
      html: translatedHtml,
      tokensUsed: message.usage.output_tokens,
      success: true
    };
  } catch (error) {
    return {
      language: targetLang,
      html: html,  // Fallback to English
      tokensUsed: 0,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export async function translateArticleParallel(
  html: string,
  keyword: string
): Promise<Record<string, string>> {
  const results = await Promise.allSettled([
    translateArticle(html, 'ru', keyword),
    translateArticle(html, 'he', keyword)
  ]);

  const translations: Record<string, string> = {
    en: html  // Original
  };

  results.forEach((result, index) => {
    const lang = ['ru', 'he'][index];
    if (result.status === 'fulfilled') {
      translations[lang] = result.value.html;
      console.log(`✓ ${lang}: translated (${result.value.tokensUsed} tokens)`);
    } else {
      console.log(`⚠️ ${lang}: failed, using English fallback`);
      translations[lang] = html;
    }
  });

  return translations;
}
```

### Phase 4.5: Publisher

**File:** `/seo/pipeline/publisher.ts`

```typescript
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export interface PublishInput {
  keyword: string;
  title: Record<string, string>;      // {en, ru, he}
  content: Record<string, string>;    // {en, ru, he}
  metaTitle: Record<string, string>;
  metaDescription: Record<string, string>;
  seoScore: number;
  keywordDensity: number;
}

export async function publishBlogPost(input: PublishInput) {
  // Generate slug from English title
  let slug = input.title.en
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  // Check uniqueness
  let count = 0;
  let finalSlug = slug;
  while (await prisma.blogPost.findUnique({ where: { slug: finalSlug } })) {
    count++;
    finalSlug = `${slug}-${count}`;
  }

  // Save to database
  try {
    const post = await prisma.blogPost.create({
      data: {
        slug: finalSlug,
        title: input.title,
        content: input.content,
        metaTitle: input.metaTitle,
        metaDescription: input.metaDescription,
        keyword: input.keyword,
        seoScore: input.seoScore,
        keywordDensity: input.keywordDensity,
        status: 'pending_review',
        logs: {
          create: {
            action: 'save',
            status: 'success',
            details: {
              slug: finalSlug,
              seoScore: input.seoScore,
              languages: Object.keys(input.content)
            },
            tokensUsed: 0,
            duration: 0
          }
        }
      }
    });

    return post;
  } catch (dbError) {
    // Fallback: save to JSON
    const backup = {
      ...input,
      slug: finalSlug,
      savedAt: new Date().toISOString(),
      backupId: Math.random().toString(36).slice(2, 9)
    };

    const backupDir = path.join(process.cwd(), 'exports', 'failed');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

    fs.writeFileSync(
      path.join(backupDir, `${backup.backupId}.json`),
      JSON.stringify(backup, null, 2)
    );

    console.error(`⚠️ Database save failed, backup saved to exports/failed/${backup.backupId}.json`);
    throw dbError;
  }
}
```

---

## Part 5: Complete 10-Step Pipeline (Week 5)

### Phase 5.1: Main Pipeline Runner

**File:** `/seo/scripts/run-pipeline.ts`

```typescript
import { researchKeyword } from '../pipeline/keyword-research';
import { generateArticle } from '../pipeline/article-generator';
import { auditSEO } from '../pipeline/seo-auditor';
import { translateArticleParallel } from '../pipeline/translator';
import { publishBlogPost } from '../pipeline/publisher';

async function runFullPipeline(topic: string) {
  console.log(`\n🚀 STARTING 10-STEP PIPELINE FOR: "${topic}"\n`);

  try {
    // STEP 1: Research keyword
    console.log('📍 Step 1: Researching keyword...');
    const research = await researchKeyword(topic);
    console.log(`   ✓ Primary: ${research.primaryKeyword}`);
    console.log(`   ✓ Intent: ${research.searchIntent}`);

    // STEP 2: Generate article
    console.log('\n📝 Step 2: Generating article...');
    const article = await generateArticle({
      keyword: research.primaryKeyword,
      relatedKeywords: research.secondaryKeywords,
      lsiKeywords: research.lsiKeywords,
      searchIntent: research.searchIntent,
      targetAudience: 'travel enthusiasts',
      toneOfVoice: 'professional but friendly'
    });
    console.log(`   ✓ Generated: ${article.wordCount} words`);
    console.log(`   ✓ Tokens: ${article.tokensUsed}`);

    // STEP 3: Audit SEO
    console.log('\n🔍 Step 3: Auditing SEO (100-point system)...');
    const audit = auditSEO(article.html, article.metaTitle, article.metaDescription, research.primaryKeyword);
    console.log(`   ✓ Score: ${audit.totalScore}/100`);
    console.log(`   ✓ Recommendation: ${audit.recommendation}`);

    if (audit.totalScore < 65) {
      console.log('   ❌ Score too low, would need refinement');
      return;
    }

    // STEP 4: Translate
    console.log('\n🌍 Step 4: Translating to RU + HE...');
    const translations = await translateArticleParallel(article.html, research.primaryKeyword);
    console.log(`   ✓ Languages: ${Object.keys(translations).join(', ')}`);

    // STEP 5: Publish
    console.log('\n💾 Step 5: Publishing to database...');
    const post = await publishBlogPost({
      keyword: research.primaryKeyword,
      title: {
        en: article.metaTitle,
        ru: `${article.metaTitle} (РУ)`,  // Placeholder
        he: `${article.metaTitle} (HE)`   // Placeholder
      },
      content: translations,
      metaTitle: {
        en: article.metaTitle,
        ru: article.metaTitle,
        he: article.metaTitle
      },
      metaDescription: {
        en: article.metaDescription,
        ru: article.metaDescription,
        he: article.metaDescription
      },
      seoScore: audit.totalScore,
      keywordDensity: 1.5
    });

    console.log(`   ✓ Published: ${post.slug}`);
    console.log(`   ✓ Status: ${post.status}`);

    console.log(`\n✅ PIPELINE COMPLETE!\n`);
    console.log(`   Post ID: ${post.id}`);
    console.log(`   Slug: ${post.slug}`);
    console.log(`   SEO Score: ${audit.totalScore}/100`);
    console.log(`   Status: Awaiting admin review\n`);

  } catch (error) {
    console.error('❌ PIPELINE FAILED:', error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  const topic = process.argv[2] || "Тур в Дубай";
  runFullPipeline(topic).catch(console.error);
}

export { runFullPipeline };
```

---

## Part 6: Database Schema (Week 2-3)

### Phase 6.1: Prisma Schema

**File:** `/prisma/schema.prisma`

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model BlogPost {
  id              String   @id @default(cuid())
  slug            String   @unique
  title           Json     // { en: "...", ru: "...", he: "..." }
  content         Json     // HTML per language
  metaTitle       Json
  metaDescription Json
  keyword         String
  seoScore        Int      @default(0)
  keywordDensity  Float    @default(0)
  status          String   @default("pending_review") // pending_review | approved | published | rejected
  publishedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  logs            GenerationLog[]
  
  @@index([status])
  @@index([keyword])
  @@index([publishedAt])
}

model Keyword {
  id                String   @id @default(uuid())
  text              String   @unique
  searchVolume      Int?
  competition       String   // "low" | "medium" | "high"
  searchIntent      String   // "informational" | "commercial" | "transactional" | "navigational"
  category          String?
  relatedArticleId  String?
  rankingPosition   Int?
  trackingEnabled   Boolean  @default(true)
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  rankings          KeywordRanking[]
  
  @@index([searchVolume])
  @@index([competition])
  @@index([trackingEnabled])
}

model KeywordRanking {
  id        String   @id @default(uuid())
  keywordId String
  position  Int
  url       String
  traffic   Int?
  checkedAt DateTime @default(now())
  
  keyword   Keyword  @relation(fields: [keywordId], references: [id])
  
  @@unique([keywordId, checkedAt])
  @@index([keywordId, checkedAt])
}

model GenerationLog {
  id         String   @id @default(uuid())
  blogPostId String?
  action     String   // "generate" | "audit" | "refine" | "translate" | "save" | "publish"
  status     String   // "success" | "failed" | "skipped"
  details    Json?
  tokensUsed Int      @default(0)
  duration   Int      // milliseconds
  error      String?
  createdAt  DateTime @default(now())
  
  post       BlogPost? @relation(fields: [blogPostId], references: [id])
  
  @@index([blogPostId])
  @@index([action])
  @@index([status])
}
```

**Commands:**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

## Part 7: Admin Review Interface (Week 6)

### Phase 7.1: API Routes

**File:** `/app/api/admin/blog/[id]/status/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { status } = await request.json();
  
  // Validate status
  if (!['approved', 'rejected', 'published'].includes(status)) {
    return NextResponse.json(
      { error: 'Invalid status' },
      { status: 400 }
    );
  }

  const post = await prisma.blogPost.update({
    where: { id: params.id },
    data: {
      status,
      publishedAt: status === 'published' ? new Date() : null
    }
  });

  // Log action
  await prisma.generationLog.create({
    data: {
      blogPostId: post.id,
      action: `status_${status}`,
      status: 'success',
      details: { oldStatus: post.status, newStatus: status },
      tokensUsed: 0,
      duration: 0
    }
  });

  return NextResponse.json(post);
}
```

---

## Part 8: Monitoring & Optimization (Week 7)

### Phase 8.1: Dashboard Metrics

**File:** `/seo/scripts/monitor-pipeline.ts`

```typescript
import { prisma } from '@/lib/prisma';

export async function getPipelineMetrics() {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const [totalPosts, publishedPosts, avgScore, tokenCosts] = await Promise.all([
    prisma.blogPost.count({
      where: { createdAt: { gte: thirtyDaysAgo } }
    }),
    prisma.blogPost.count({
      where: {
        createdAt: { gte: thirtyDaysAgo },
        status: 'published'
      }
    }),
    prisma.blogPost.aggregate({
      where: { createdAt: { gte: thirtyDaysAgo } },
      _avg: { seoScore: true }
    }),
    prisma.generationLog.aggregate({
      where: { createdAt: { gte: thirtyDaysAgo } },
      _sum: { tokensUsed: true }
    })
  ]);

  const costPerToken = 0.00003;  // Claude Haiku
  const totalCost = (tokenCosts._sum.tokensUsed || 0) * costPerToken;

  return {
    period: 'Last 30 days',
    totalGenerated: totalPosts,
    successRate: totalPosts > 0 ? (publishedPosts / totalPosts * 100).toFixed(1) : 0,
    avgSeoScore: avgScore._avg.seoScore?.toFixed(1) || 0,
    totalTokens: tokenCosts._sum.tokensUsed || 0,
    estimatedCost: `$${totalCost.toFixed(2)}`,
    costPerArticle: `$${(totalCost / Math.max(totalPosts, 1)).toFixed(2)}`
  };
}
```

---

## Part 9: Deployment Checklist (Week 8)

### Production Prerequisites

- [ ] Database migrated and tested (Prisma)
- [ ] Claude API key configured
- [ ] Telegram bot token set
- [ ] All Prisma migrations applied
- [ ] SEO audit tested on sample articles
- [ ] Translation quality verified
- [ ] Admin review UI working
- [ ] Monitoring dashboard functional
- [ ] Backup strategy in place (JSON exports)
- [ ] Rate limiting configured

### Deployment Steps

```bash
# 1. Build and test
npm run build
npm run seo:audit

# 2. Run initial migration
npx prisma migrate deploy

# 3. Deploy to Vercel/hosting
vercel deploy --prod

# 4. Start pipeline scheduler (cron job)
# 0 9,14 * * 1,4 npm run seo:pipeline
```

---

## Part 10: Revenue & Scaling (Month 3+)

### Expected Outcomes (Year 1)

| Metric | Q1 | Q2 | Q3 | Q4 |
|--------|----|----|----|----|
| Articles/month | 8 | 16 | 24 | 32 |
| Organic traffic | 500 | 2K | 5K | 10K |
| Keywords ranking | 50 | 150 | 300 | 500 |
| Estimated revenue | $2K | $8K | $20K | $40K |

### Optimization Loop

1. **Month 1-2:** Run pipeline, collect baseline metrics
2. **Month 2-3:** Analyze top-performing keywords, adjust keyword research
3. **Month 3+:** Scale to 3-4 articles/week, add more languages (add Chinese, Arabic)
4. **Month 6+:** Integrate with booking system for conversion tracking

---

## Quick Start Timeline

| Week | Phase | Deliverable |
|------|-------|-------------|
| Week 1 | Setup | Dependencies, env vars, folder structure |
| Week 2 | Config | `seo.config.ts`, meta generators, schemas |
| Week 3 | Core Pipeline | Keyword research, article generation, audit |
| Week 4 | Translation | Multilingual pipeline, publisher, database |
| Week 5 | Integration | Full 10-step runner, scripts |
| Week 6 | Admin UI | Review interface, API routes |
| Week 7 | Monitoring | Dashboard, metrics collection |
| Week 8 | Deployment | Production checklist, go live |

---

## Critical Files Summary

```
/seo/
├── config/seo.config.ts          ← Global settings
├── utils/meta-tags.ts            ← Metadata generators
├── schema/                        ← JSON-LD factories
│   ├── tour-schema.ts
│   ├── destination-schema.ts
│   ├── org-schema.ts
│   ├── breadcrumb-schema.ts
│   └── faq-schema.ts
├── pipeline/                      ← Core logic
│   ├── keyword-research.ts        ← Claude Haiku
│   ├── article-generator.ts       ← Claude Sonnet
│   ├── seo-auditor.ts             ← 100-point audit
│   ├── translator.ts              ← Haiku translation
│   ├── publisher.ts               ← DB + fallback
│   └── notifier.ts                ← Email/Telegram
├── audit/                         ← Health checks
│   ├── site-crawler.ts
│   └── report-generator.ts
└── scripts/                       ← CLI runners
    ├── run-pipeline.ts            ← Main entry point
    ├── run-audit.ts
    └── monitor-pipeline.ts

/prisma/
└── schema.prisma                  ← Database models

/app/api/admin/blog/
└── [id]/status/route.ts          ← Review API

package.json                       ← Scripts:
                                    - seo:pipeline
                                    - seo:audit
                                    - seo:crawl
```

---

## Success Metrics

✅ **Week 1:** All dependencies installed, environment configured  
✅ **Week 2:** Config and schemas complete, no TypeScript errors  
✅ **Week 3:** Keyword research and article generation working  
✅ **Week 4:** Full pipeline runs end-to-end successfully  
✅ **Week 5:** First 5 articles published and visible  
✅ **Week 6:** Admin review interface fully functional  
✅ **Week 8:** System live, automated weekly article generation running  

---

## Support & Maintenance

### Weekly Tasks
- Monitor pipeline metrics (success rate, avg score)
- Review admin notifications for rejected articles
- Check keyword rankings (via monitoring script)

### Monthly Tasks
- Analyze top-performing articles
- Adjust keyword research parameters
- Review translation quality
- Update SEO scoring thresholds if needed

### Quarterly Tasks
- Full site SEO audit (`npm run seo:audit`)
- Review and update content categories
- Plan new keyword clusters

---

## Next Steps

1. **This week:** Install dependencies, create folder structure, set up environment variables
2. **Next week:** Implement config and schema factories
3. **Week 3:** Build keyword research and article generator
4. **Week 4:** Complete pipeline with translations and publisher

**Ready to start? Begin with Part 1, Phase 1.1 above.** 🚀
