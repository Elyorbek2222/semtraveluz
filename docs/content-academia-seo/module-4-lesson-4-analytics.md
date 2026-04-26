# Модуль 4, Урок 4: Аналитика и мониторинг производительности

Конвейер без мониторинга — чёрный ящик. Нужно отслеживать производительность каждого шага, стоимость токенов и SEO-тренды.

## Модель GenerationLog

Каждый шаг конвейера создаёт запись лога с полями:

| Поле | Тип | Описание |
|------|-----|----------|
| `action` | string | generate/audit/refine/translate/save/notify |
| `status` | string | success/failed/skipped |
| `tokensUsed` | number | Токены потрачены |
| `duration` | number | Миллисекунды |
| `error` | string | Текст ошибки (если failed) |
| `details` | JSON | Дополнительные данные |
| `createdAt` | Date | Время создания |

**Пример:**

```json
{
  "id": "log-001",
  "blogPostId": "post-123",
  "action": "generate",
  "status": "success",
  "tokensUsed": 3200,
  "duration": 8000,
  "details": {
    "model": "claude-sonnet-4-20250514",
    "wordCount": 947
  },
  "createdAt": "2026-04-26T10:00:00Z"
}
```

## Анализ стоимости токенов

Отслеживайте расходы на API по каждой статье.

### Формула расчёта:

```
Total Cost = (Tokens × Cost per Token) × Quantity

Пример для Claude Sonnet:
- Input: $3 за 1M токенов
- Output: $9 за 1M токенов

Статья 1: 1200 input + 3200 output = 4400 tokens
Cost = (1200 × 3/1M) + (3200 × 9/1M) = 0.0036 + 0.0288 = $0.0324
```

### Функция расчёта:

```typescript
// seo/utils/analytics.ts
export function calculateArticleCost(logs: GenerationLog[]): number {
  const costPer1MTokens = {
    'claude-sonnet-4-20250514': { input: 3, output: 9 },
    'claude-haiku-4-20250307': { input: 0.8, output: 4 }
  };

  let totalCost = 0;

  logs.forEach(log => {
    const model = log.details?.model || 'claude-sonnet-4-20250514';
    const costs = costPer1MTokens[model] || costPer1MTokens['claude-sonnet-4-20250514'];
    
    // Упрощённый расчёт (примерный ratio input:output = 1:3)
    const inputTokens = Math.ceil(log.tokensUsed / 4);
    const outputTokens = log.tokensUsed - inputTokens;

    totalCost += (inputTokens * costs.input / 1000000);
    totalCost += (outputTokens * costs.output / 1000000);
  });

  return totalCost;
}

// Использование:
const post = await prisma.blogPost.findUnique({
  where: { id: postId },
  include: { logs: true }
});

const cost = calculateArticleCost(post.logs);
console.log(`Cost per article: $${cost.toFixed(4)}`);
```

## Тренды SEO-оценок

### 1. Средняя оценка

```typescript
export async function getAverageSeoScore(days: number = 30) {
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const result = await prisma.blogPost.aggregate({
    where: { createdAt: { gte: startDate } },
    _avg: { seoScore: true },
    _min: { seoScore: true },
    _max: { seoScore: true }
  });

  return {
    average: result._avg.seoScore?.toFixed(1),
    min: result._min.seoScore,
    max: result._max.seoScore,
    trend: 'improving' | 'stable' | 'declining'
  };
}
```

### 2. Частота доработок

```typescript
export async function getRefinementRate(days: number = 30) {
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const total = await prisma.generationLog.count({
    where: {
      action: 'generate',
      createdAt: { gte: startDate }
    }
  });

  const refined = await prisma.generationLog.count({
    where: {
      action: 'refine',
      createdAt: { gte: startDate }
    }
  });

  return {
    totalGenerated: total,
    refined,
    refinementRate: (refined / total * 100).toFixed(1) + '%'
  };
}

// Результат:
// Если > 40% статей требуют доработки → оптимизировать промпт
```

### 3. Частые проблемы

```typescript
export async function getCommonIssues(days: number = 30) {
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  // Статьи с низкой оценкой
  const lowScores = await prisma.blogPost.findMany({
    where: {
      createdAt: { gte: startDate },
      seoScore: { lt: 65 }
    },
    select: { seoScore: true }
  });

  // Логи с ошибками
  const errors = await prisma.generationLog.findMany({
    where: {
      status: 'failed',
      createdAt: { gte: startDate }
    },
    select: { action: true, error: true }
  });

  // Группировать ошибки по типам
  const errorsByAction = errors.reduce((acc, log) => {
    if (!acc[log.action]) acc[log.action] = 0;
    acc[log.action]++;
    return acc;
  }, {});

  return {
    lowScoringArticles: lowScores.length,
    errorsByAction,
    avgLowScore: (lowScores.reduce((sum, x) => sum + x.seoScore, 0) / lowScores.length).toFixed(1)
  };
}
```

### 4. Успешность перевода

```typescript
export async function getTranslationSuccessRate(days: number = 30) {
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const translationLogs = await prisma.generationLog.findMany({
    where: {
      action: 'translate',
      createdAt: { gte: startDate }
    }
  });

  const successful = translationLogs.filter(log => log.status === 'success').length;
  const total = translationLogs.length;

  return {
    successRate: (successful / total * 100).toFixed(1) + '%',
    successful,
    total,
    failed: total - successful
  };
}
```

## Dashboard Analytics

**File:** `/app/admin/analytics/page.tsx`

```typescript
export default async function AnalyticsDashboard() {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const [
    posts,
    avgScore,
    refinementRate,
    commonIssues,
    translationSuccess,
    totalLogs
  ] = await Promise.all([
    prisma.blogPost.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { id: true, seoScore: true, status: true }
    }),
    getAverageSeoScore(30),
    getRefinementRate(30),
    getCommonIssues(30),
    getTranslationSuccessRate(30),
    prisma.generationLog.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { tokensUsed: true }
    })
  ]);

  const totalTokens = totalLogs.reduce((sum, log) => sum + log.tokensUsed, 0);
  const estimatedCost = (totalTokens * 6 / 1000000).toFixed(2);  // Average cost

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">📊 Analytics Dashboard</h1>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card>
          <h3 className="font-semibold">Posts (30d)</h3>
          <p className="text-2xl">{posts.length}</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Avg SEO Score</h3>
          <p className="text-2xl">{avgScore.average}/100</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Refinement Rate</h3>
          <p className="text-2xl">{refinementRate.refinementRate}</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Estimated Cost</h3>
          <p className="text-2xl">${estimatedCost}</p>
        </Card>
      </div>

      <Card className="mb-8">
        <h2 className="font-bold mb-4">Issues & Trends</h2>
        <ul>
          <li>Low Scoring: {commonIssues.lowScoringArticles}</li>
          <li>Translation Success: {translationSuccess.successRate}</li>
          <li>Most Common Error: {Object.entries(commonIssues.errorsByAction)[0]?.[0]}</li>
        </ul>
      </Card>
    </div>
  );
}
```

## Google Search Console

Подключите GSC для мониторинга в реальном времени:

1. **Перейдите в Google Search Console**
2. **Добавьте свойство:** https://semtravel.uz
3. **Проверьте владение** (через HTML-файл или DNS)
4. **Отслеживайте:**
   - 📊 Показы (impressions)
   - 📊 Клики (clicks)
   - 📊 Позиции (average position)
   - 📊 CTR (click-through rate)

### Интеграция API GSC:

```typescript
// Это требует OAuth, детали в Google Console
// Пример запроса к Search Analytics API
const searchAnalytics = await fetch(
  'https://www.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fsemtravel.uz/searchAnalytics/query',
  {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({
      startDate: '2026-03-26',
      endDate: '2026-04-26',
      dimensions: ['query', 'page']
    })
  }
);
```

## RSS-фид

RSS позволяет распространять контент через агрегаторы.

**File:** `/app/feed.xml/route.ts`

```typescript
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.blogPost.findMany({
    where: { status: 'published' },
    orderBy: { publishedAt: 'desc' },
    take: 20,
    select: {
      slug: true,
      title: true,
      metaDescription: true,
      publishedAt: true,
      keyword: true
    }
  });

  const baseUrl = 'https://semtravel.uz';
  
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>SEM Travel Blog</title>
    <link>${baseUrl}</link>
    <description>Статьи о путешествиях и турах из Узбекистана</description>
    <language>ru</language>
    ${posts.map(post => `
    <item>
      <title>${post.title.ru || post.title.en}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${post.metaDescription.ru || post.metaDescription.en}</description>
      <pubDate>${post.publishedAt?.toUTCString()}</pubDate>
      <guid>${baseUrl}/blog/${post.slug}</guid>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(rssContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
```

## Еженедельный Audit

**Советы для проверки:**

```
📋 Чек-лист еженедельно:

☑️ Средняя SEO-оценка — растёт ли?
☑️ Частота доработок — снижается ли?
☑️ Частые проблемы — исправлены ли?
☑️ Успешность перевода — выше 90%?
☑️ Стоимость токенов — в рамках бюджета?
☑️ Google Search Console — новые позиции?
```

## Совет

**Проверяйте дашборд GenerationLog еженедельно.** Если >40% статей требуют доработки — оптимизируйте системный промпт.

## Главный вывод

**Оптимизация на основе данных — разница между конвейером, который работает, и тем, который работает блестяще.**

### Метрики для отслеживания

- ✅ Средняя SEO-оценка (цель: 75+)
- ✅ Частота доработок (цель: <30%)
- ✅ Стоимость статьи (цель: <$0.10)
- ✅ Успешность перевода (цель: >95%)
- ✅ Средний CTR в GSC (цель: >3%)
- ✅ Позиции в Google (цель: top-10 для long-tail)
- ✅ Время генерации (цель: <15s)

### Чек-лист аналитики

- ✅ GenerationLog заполняется для каждого шага
- ✅ Dashboard показывает ключевые метрики
- ✅ Еженедельный review дашборда
- ✅ Google Search Console подключена
- ✅ RSS-фид работает
- ✅ Расчёты стоимости токенов точны
- ✅ Алерты на аномалии (>50% refinement rate)
