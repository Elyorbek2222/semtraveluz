# Модуль 2, Урок 2: Создаём агента исследования ключевых слов

Теперь, когда вы понимаете типы ключевых слов и поисковые намерения, давайте создадим AI-агента, который автоматизирует исследование ключевых слов.

## Что делает агент

По заданной теме и категории агент возвращает структурированные данные:

```json
{
  "primaryKeyword": "SEO automation tools",
  "secondaryKeywords": [
    "automated SEO software",
    "AI SEO tools",
    "SEO automation platform"
  ],
  "lsiKeywords": [
    "search engine optimization",
    "organic traffic generation",
    "keyword optimization",
    "technical SEO"
  ],
  "longTailKeywords": [
    "how to automate SEO with AI",
    "best SEO automation tools 2026",
    "affordable SEO automation software",
    "SEO automation for small business"
  ],
  "searchIntent": "commercial",
  "suggestedHeadings": [
    "What Are SEO Automation Tools?",
    "Top 10 SEO Automation Platforms",
    "How to Choose SEO Tools",
    "Free vs Paid SEO Automation"
  ],
  "competitorAngle": "Фокус на реальных кейсах и ROI"
}
```

## Создаём агента с Claude Code

Используйте Claude Code CLI для автоматизации:

```bash
claude
```

Затем дайте команду:

```
Создай Node.js скрипт keyword-researcher.js, который:
1. Использует @anthropic-ai/sdk для вызова Claude API
2. Принимает тему и категорию как аргументы
3. Имеет системный промпт SEO-эксперта
4. Возвращает JSON: primaryKeyword, secondaryKeywords[], lsiKeywords[], 
   longTailKeywords[], searchIntent, suggestedHeadings[], competitorAngle
5. Использует temperature 0.5 и модель claude-haiku
6. Включает обработку ошибок и валидацию JSON
7. Красиво выводит результат
```

## Системный промпт

```
You are an expert SEO keyword researcher with 10+ years of experience.
Given a topic and category, generate comprehensive keyword research data.

Requirements:
- Always return valid JSON
- Focus on keywords with commercial or informational intent
- Include 5-7 secondary keywords
- Include 5-8 LSI keywords
- Include 4-5 long-tail keywords
- Suggest 4-5 H2 headings
- Analyze competitor angle based on the topic

Return ONLY valid JSON, no additional text.
```

## Ключевые настройки API

### Temperature: 0.5
- **Назначение:** Баланс консистентности и разнообразия
- **Почему 0.5?**
  - `0.0` — только правильный ответ (скучно)
  - `0.5` — разнообразие + стабильность (оптимально)
  - `1.0` — очень творческий (может быть шумным)

### Модель: claude-haiku
- **Почему haiku?**
  - ✅ Быстрая (50-100ms ответ)
  - ✅ Экономичная ($0.00080 за 1K tokens input)
  - ✅ Достаточно умная для SEO-задач
  - ❌ Не для сложного анализа (используйте sonnet/opus)

### Max Tokens: 1024
- **Достаточно для:**
  - Основного ключевого слова
  - 5-7 вторичных
  - 5-8 LSI
  - 4-5 длиннохвостых
  - 4-5 заголовков
  - Угла конкуренции

## Структура скрипта

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function researchKeywords(topic, category) {
  const systemPrompt = `You are an expert SEO keyword researcher...`;
  
  const userPrompt = `Topic: ${topic}
Category: ${category}

Generate comprehensive keyword research data in JSON format.`;

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    temperature: 0.5,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  // Парсируем JSON из ответа
  const responseText = message.content[0].text;
  const keywordData = JSON.parse(responseText);
  
  return keywordData;
}

// Запуск
const topic = process.argv[2];
const category = process.argv[3];

if (!topic || !category) {
  console.error("Usage: node keyword-researcher.js <topic> <category>");
  process.exit(1);
}

researchKeywords(topic, category)
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.error("Error:", error.message);
    process.exit(1);
  });
```

## Тестирование агента

### Пример 1: Web Development
```bash
node keyword-researcher.js "web development" "technology"
```

**Ожидаемый результат:**
```json
{
  "primaryKeyword": "web development",
  "secondaryKeywords": [
    "full-stack web development",
    "modern web development tools",
    "responsive web design"
  ],
  "lsiKeywords": [
    "HTML CSS JavaScript",
    "web frameworks",
    "frontend development",
    "backend development"
  ],
  "longTailKeywords": [
    "how to learn web development 2026",
    "best web development languages",
    "web development for beginners"
  ],
  "searchIntent": "informational",
  "suggestedHeadings": [
    "What is Web Development?",
    "Best Web Development Tools",
    "Web Development Learning Path"
  ],
  "competitorAngle": "Focus on practical tutorials and real projects"
}
```

### Пример 2: Healthy Food
```bash
node keyword-researcher.js "healthy meal prep" "food"
```

## Сохранение результатов

**Совет:** Сохраняйте результаты в JSON-файлы для создания базы ключевых слов:

```javascript
import fs from "fs";

// После получения результатов
const timestamp = new Date().toISOString().split("T")[0];
const filename = `keywords/${topic}-${timestamp}.json`;

fs.mkdirSync("keywords", { recursive: true });
fs.writeFileSync(filename, JSON.stringify(keywordData, null, 2));
console.log(`Saved to ${filename}`);
```

## Расширения для агента

После базовой функциональности добавьте:

### 1. Batch Processing
```bash
Добавь поддержку обработки нескольких тем из JSON-файла
node keyword-researcher.js --file topics.json
```

### 2. Search Volume (если доступно)
```
Добавь примерный объём поиска для каждого ключевого слова
(опционально: интеграция с Serpstat API)
```

### 3. Competitiveness Score
```
Добавь оценку сложности ранжирования (1-100)
Низкая конкуренция = лучше для новых сайтов
```

### 4. Semantic Clustering
```
Группируй ключевые слова по семантическому смыслу
Помощь при структурировании контентной стратегии
```

## Pipeline интеграция

Этот агент будет **Шагом 2** в нашем 10-шаговом конвейере:

```
Шаг 1: Выбор темы
    ↓
Шаг 2: ИССЛЕДОВАНИЕ КЛЮЧЕВЫХ СЛОВ ← Этот агент
    ↓
Шаг 3: Генерация статьи
    ↓
Шаг 4: SEO-аудит
    ↓
... и так далее
```

## Оптимизация затрат

| Модель | Цена (1K tokens) | Скорость | Когда использовать |
|--------|-----------------|----------|-------------------|
| **Haiku** | $0.00080 | 50-100ms | ✅ SEO-исследование, генерация |
| Sonnet | $0.003 | 100-200ms | ⚠️ Сложный анализ, переводы |
| Opus | $0.015 | 200-500ms | ❌ Редко нужна для SEO |

Для исследования 100 тем:
- **Haiku:** $0.08 (дешево!)
- **Sonnet:** $0.30
- **Opus:** $1.50

**Haiku идеален для SEO-автоматизации.**

## Главный вывод

**AI-исследователь ключевых слов не устаёт и может обработать 100 тем за время, которое человек тратит на одну.**

Этот агент:
- ✅ Работает 24/7
- ✅ Никогда не ошибается с структурой JSON
- ✅ Учитывает поисковое намерение
- ✅ Готов для интеграции в конвейер
- ✅ Экономичен ($0.00080 за исследование)

Далее: Генерация контента на основе этих ключевых слов!
