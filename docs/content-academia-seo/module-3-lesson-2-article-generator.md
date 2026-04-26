# Модуль 3, Урок 2: Создаём генератор статей

Генератор статей — **сердце вашего контент-конвейера**. Он берёт ключевое слово и создаёт готовую SEO-оптимизированную HTML-статью.

## Дизайн системного промпта

**Качество статей полностью зависит от системного промпта.** Вот архитектура, которую мы используем в Codearia:

```
You are an expert SEO content writer with 15+ years of experience.
Your task is to write a high-quality blog article about the given topic.

CRITICAL RULES:
- Write in HTML format using ONLY: h2, h3, p, ul, ol, li, blockquote, strong, em
- Target length: 800-1000 words (NEVER exceed 1000)
- Do NOT include h1, html, body, head tags
- Do NOT include any markdown or other formatting
- Structure: Введение → 3-4 основных раздела → Заключение
- Each section should be 150-250 words

INTRODUCTION (Use PAS Framework):
- Problem: Проблема читателя (1-2 предложения)
- Agitate: Почему это важно (2-3 предложения)
- Solution: Превью решения (1 предложение)

MAIN SECTIONS (Apply AIDA for each section):
- Attention: Сильный h2 с вариацией ключевика
- Interest: Факт, статистика или вопрос в начале
- Desire: Покажите пользу и результаты
- Action: Практический вывод или совет

FAQ SECTION:
- Всегда включайте FAQ в конце
- 3-5 вопросов как h3 + p
- Используйте реальные поисковые запросы
- Краткие ответы (2-3 предложения каждый)

QUALITY CHECKLIST:
- ✓ Include related keywords naturally (not stuffed)
- ✓ Use active voice
- ✓ Break long paragraphs into 3-4 sentences max
- ✓ Include at least one list (ul or ol)
- ✓ Include at least one blockquote with practical insight
- ✓ Use strong tags for important phrases
- ✓ Write for real people, not search engines

Remember: Quality content ranks. Keyword-stuffed garbage doesn't.
```

## Структура выходных данных

### Входные данные

```typescript
interface ArticleInput {
  keyword: string;              // "web development tools"
  relatedTerms: string[];       // ["full-stack", "frontend", "backend"]
  searchIntent: string;         // "informational" | "commercial"
  targetAudience?: string;      // "beginners" | "intermediate" | "advanced"
  toneOfVoice?: string;         // "professional" | "friendly" | "technical"
}
```

### Выходные данные

```typescript
interface GeneratedArticle {
  html: string;                 // Чистый HTML (h2, h3, p, ul, ol, li, blockquote, etc.)
  wordCount: number;            // 800-1000
  metaTitle: string;            // 50-60 символов
  metaDescription: string;      // 120-160 символов
  focusKeyword: string;
  relatedKeywords: string[];
  faqItems: FAQ[];              // Вопросы с ответами
  readingTime: number;          // минут
  tokensUsed: number;
  generatedAt: Date;
}

interface FAQ {
  question: string;
  answer: string;
}
```

## Пример генерируемого HTML

```html
<h2>Introduction to Web Development Tools</h2>

<p>Modern web development requires specialized tools. Whether you're building your first website or managing a large-scale application, the right tools can save you hours of work.</p>

<p>The problem most developers face isn't lack of tools—it's choosing from <strong>hundreds of options</strong>. Without a clear understanding of what tools solve which problems, you end up wasting time on tools that don't fit your workflow.</p>

<h2>Essential Web Development Tools Every Developer Needs</h2>

<p>The foundation of web development rests on a few critical categories of tools. Let's explore what separates professionals from beginners.</p>

<h3>Code Editors and IDEs</h3>

<p>Your code editor is where you spend 80% of your development time. Here's what matters:</p>

<ul>
<li>Syntax highlighting for your language</li>
<li>Auto-completion and intelligent code suggestions</li>
<li>Built-in terminal and Git integration</li>
<li>Extension ecosystem for customization</li>
</ul>

<blockquote>
<strong>Pro tip:</strong> The "best" editor is the one your team already uses. Learning one editor deeply beats switching between five editors constantly.
</blockquote>

<h3>Version Control Systems</h3>

<p>Git isn't optional anymore—it's essential. Version control tracks every change, enables team collaboration, and provides a safety net for your code.</p>

<h2>FAQ</h2>

<h3>What's the difference between a code editor and an IDE?</h3>
<p>A code editor (VS Code, Sublime) is lightweight and focuses on editing. An IDE (Visual Studio, IntelliJ) includes debugging, testing, and deployment tools. For most web developers, a good editor is sufficient.</p>

<h3>Do I need to pay for web development tools?</h3>
<p>Most essential tools are free or open-source. Premium tools offer advanced features, but beginners can learn everything with free options.</p>
```

## Функция generateArticle

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function generateArticle(input) {
  const {
    keyword,
    relatedTerms,
    searchIntent,
    targetAudience = "general",
    toneOfVoice = "professional"
  } = input;

  const userPrompt = `
Topic: "${keyword}"
Related terms: ${relatedTerms.join(", ")}
Search Intent: ${searchIntent}
Target Audience: ${targetAudience}
Tone: ${toneOfVoice}

Write a comprehensive blog article about this topic.
Remember: 800-1000 words, semantic HTML only, include FAQ section.
  `;

  const systemPrompt = `You are an expert SEO content writer...`; // See above

  try {
    const startTime = Date.now();

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 6000,
      temperature: 0.8,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: userPrompt
        }
      ]
    });

    const html = message.content[0].text;
    const duration = Date.now() - startTime;

    // Валидация
    const wordCount = countWords(html);
    if (wordCount > 1000) {
      console.warn(`Article exceeds 1000 words (${wordCount}). Requesting trim...`);
      // Повторный вызов с просьбой сократить
      return await trimArticle(html, keyword, relatedTerms);
    }

    if (wordCount < 800) {
      console.warn(`Article below 800 words (${wordCount}). Expanding...`);
      return await expandArticle(html, keyword, relatedTerms);
    }

    // Парсируем мета-данные из HTML
    const metaTitle = extractMetaTitle(html, keyword);
    const metaDescription = extractMetaDescription(html);
    const faqItems = extractFAQ(html);

    return {
      html,
      wordCount,
      metaTitle,
      metaDescription,
      focusKeyword: keyword,
      relatedKeywords: relatedTerms,
      faqItems,
      readingTime: Math.ceil(wordCount / 200),
      tokensUsed: message.usage.output_tokens,
      generatedAt: new Date()
    };

  } catch (error) {
    console.error("Article generation failed:", error);
    throw error;
  }
}

// Вспомогательные функции

function countWords(html) {
  const text = html.replace(/<[^>]*>/g, ""); // Remove tags
  return text.split(/\s+/).filter(w => w.length > 0).length;
}

function extractMetaTitle(html, keyword) {
  // Берём первый h2 и добавляем ключевик
  const match = html.match(/<h2[^>]*>([^<]+)<\/h2>/);
  if (match) {
    let title = match[1];
    if (!title.includes(keyword)) {
      title += ` | ${keyword}`;
    }
    return title.substring(0, 60);
  }
  return `${keyword} — Complete Guide`;
}

function extractMetaDescription(html) {
  // Берём первый параграф и сокращаем до 160 символов
  const match = html.match(/<p[^>]*>([^<]+)<\/p>/);
  if (match) {
    return match[1].substring(0, 160) + "...";
  }
  return "Learn everything about this topic in our comprehensive guide.";
}

function extractFAQ(html) {
  const faqSection = html.match(/<h2[^>]*>FAQ<\/h2>([\s\S]*?)(?=<h2|$)/i);
  if (!faqSection) return [];

  const faqContent = faqSection[1];
  const questions = faqContent.match(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/g) || [];

  return questions.map(q => {
    const match = q.match(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/);
    return {
      question: match[1],
      answer: match[2]
    };
  });
}

async function trimArticle(html, keyword, relatedTerms) {
  console.log("Trimming article to 1000 words...");
  // Повторный вызов с инструкцией сократить
  // (реализация опущена для краткости)
}

async function expandArticle(html, keyword, relatedTerms) {
  console.log("Expanding article to 800 words...");
  // Повторный вызов с инструкцией расширить
  // (реализация опущена для краткости)
}
```

## Конфигурация модели

```javascript
const ARTICLE_GENERATOR_CONFIG = {
  // Модель
  model: "claude-sonnet-4-20250514",
  
  // Параметры качества
  temperature: 0.8,              // Баланс креативности и фактичности
  max_tokens: 6000,              // Достаточно для 1000 слов
  
  // Целевые значения
  minWords: 800,
  maxWords: 1000,
  
  // Таймауты
  timeout: 60000,                // 60 сек на генерацию
  
  // Повторы при ошибке
  maxRetries: 2,
  retryDelay: 5000,
  
  // Логирование
  logTokenUsage: true,
  archiveGenerations: true
};
```

## Почему Temperature 0.8?

```
Temperature 0.0-0.3 → Скучно, повторяется
  "Web development is important. Web development helps. Web development..."

Temperature 0.5-0.7 → Безопасно, но пресно
  "Web development is essential. It helps developers work efficiently..."

Temperature 0.8 → ОПТИМАЛЬНО ✅
  "Modern web development requires the right tools. Whether you're building
   your first website or scaling to millions of users, the right tools can
   save you hours of work..."

Temperature 1.0+ → Случайно, может быть неправильно
  "Web development is like cooking spaghetti backwards while humming..."
```

## Интеграция в конвейер

Этот генератор — **Шаг 3** в 10-шаговом конвейере:

```
Шаг 1: selectTopic()
  ↓
Шаг 2: researchKeyword()
  ↓
Шаг 3: generateArticle() ← ВЫ ЗДЕСЬ
  ↓
Шаг 4: auditSEO()
  ↓
... продолжение
```

## Примеры вывода

### Статья про "Web Development"

```
✓ Сгенерировано: 947 слов
✓ Мета-title: "Web Development Tools 2026: Complete Guide"
✓ Мета-description: "Discover the best web development tools..."
✓ FAQ: 5 вопросов
✓ Reading time: 4 minutes
✓ Tokens used: 4,200
✓ Quality: Semantic HTML, well-structured
```

### Статья про "SEO Automation"

```
✓ Сгенерировано: 892 слова
✓ Мета-title: "SEO Automation: How to Scale Content 2026"
✓ Мета-description: "Learn to automate your SEO with AI..."
✓ FAQ: 4 вопроса
✓ Reading time: 4 minutes
✓ Tokens used: 3,800
```

## Главный вывод

**Совет:** Temperature 0.8 даёт достаточно креативности для вовлекающего контента, оставаясь фактически точным. Низкие значения (0.3-0.5) дают скучные повторяющиеся статьи.

**Правило:** Системный промпт — это **ДНК статьи**. Каждое слово в нём влияет на результат.

### Распределение усилий

```
80% времени → Совершенство системного промпта
  (тестирование, итерации, уточнение)

20% времени → Код вокруг генератора
  (валидация, логирование, интеграция)
```

## Чек-лист генератора

- ✅ HTML валидный (h2, h3, p, ul, ol, li, blockquote, strong, em)
- ✅ Словоёмкость 800-1000 слов
- ✅ Мета-теги (title 50-60, description 120-160)
- ✅ FAQ секция (3-5 вопросов)
- ✅ Естественное включение ключевых слов
- ✅ PAS framework в введении
- ✅ AIDA в каждом разделе
- ✅ Практические советы и примеры
- ✅ Логирование токенов и времени
- ✅ Обработка ошибок (trim/expand)
