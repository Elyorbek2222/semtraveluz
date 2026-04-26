# Модуль 2, Урок 6: Создаём базу данных ключевых слов

С ростом числа исследованных ключевых слов нужен структурированный способ хранения и поиска. Создадим базу данных с Prisma.

## Зачем база ключевых слов?

### 1. Избежать дубликатов
- ❌ Не исследовать одно слово дважды
- ✅ Сохранить время и деньги API

### 2. Отслеживать позиции
- Мониторинг ранжирования в поиске
- История движений (поднялось? упало?)
- Связь между позицией и трафиком

### 3. Находить возможности
- Запросы с **высоким объёмом**
- Запросы с **низкой конкуренцией**
- Комбинация = **золотая жила**

### 4. Измерять ROI
- Связь ключевых слов с трафиком
- Какие слова приносят больше всего (посетителей/денег)?
- Что писать в следующий раз?

## Структура базы данных

### Таблица: Keyword

```json
{
  "id": "kw-2026-uuid",
  "text": "web development tools",
  "searchVolume": 2400,
  "competition": "high",
  "searchIntent": "informational",
  "category": "technology",
  "relatedArticleId": "article-uuid",
  "rankingPosition": 15,
  "createdAt": "2026-03-13T10:00:00Z",
  "updatedAt": "2026-03-15T14:30:00Z"
}
```

### Таблица: KeywordRanking (история)

```json
[
  {
    "id": "ranking-001",
    "keywordId": "kw-2026-uuid",
    "position": 25,
    "url": "https://site.com/article-1",
    "checkedAt": "2026-03-01T09:00:00Z"
  },
  {
    "id": "ranking-002",
    "keywordId": "kw-2026-uuid",
    "position": 20,
    "url": "https://site.com/article-1",
    "checkedAt": "2026-03-08T09:00:00Z"
  },
  {
    "id": "ranking-003",
    "keywordId": "kw-2026-uuid",
    "position": 15,
    "url": "https://site.com/article-1",
    "checkedAt": "2026-03-15T09:00:00Z"
  }
]
```

## Prisma-схема

```prisma
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
  
  rankings KeywordRanking[]
  
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
  
  keyword Keyword @relation(fields: [keywordId], references: [id])
  
  @@unique([keywordId, checkedAt])
  @@index([keywordId, checkedAt])
}
```

## Создаём базу с Claude Code

```bash
claude
```

Затем дайте команду:

```
Создай Prisma-модели и CRUD-операции для трекинга ключевых слов:

1. Файл: schema.prisma
   - Keyword модель (id, text, searchVolume, competition, searchIntent, category, rankingPosition, etc)
   - KeywordRanking модель (история позиций)

2. Файл: keywords.js
   CRUD-операции:
   - addKeyword(text, searchVolume, competition, intent, category)
   - findKeyword(text)
   - updateRanking(keywordId, position, url)
   - getTopOpportunities() - высокий объём + низкая конкуренция + нет статьи
   - getKeywordsByCategory(category)
   - getTrackingHistory(keywordId) - история позиций

3. Скрипт импорта: import-keywords.js
   - Читает JSON файл с ключевыми словами
   - Импортирует в базу
   - Избегает дубликатов
   - Выводит статистику

4. Миграция (initialize database)
```

## CRUD Операции

### 1. Добавить ключевое слово

```javascript
async function addKeyword(text, searchVolume, competition, intent, category) {
  const keyword = await prisma.keyword.create({
    data: {
      text,
      searchVolume,
      competition,
      searchIntent: intent,
      category,
      trackingEnabled: true
    }
  });
  return keyword;
}

// Использование:
await addKeyword("web development", 2400, "high", "informational", "technology");
```

### 2. Найти ключевое слово

```javascript
async function findKeyword(text) {
  const keyword = await prisma.keyword.findUnique({
    where: { text },
    include: {
      rankings: {
        orderBy: { checkedAt: 'desc' },
        take: 10 // последние 10 проверок
      }
    }
  });
  return keyword;
}
```

### 3. Обновить позицию

```javascript
async function updateRanking(keywordId, position, url) {
  const ranking = await prisma.keywordRanking.create({
    data: {
      keywordId,
      position,
      url
    }
  });
  
  // Обновить текущую позицию в Keyword
  await prisma.keyword.update({
    where: { id: keywordId },
    data: { rankingPosition: position }
  });
  
  return ranking;
}
```

## Поиск возможностей

### Золотые возможности: Высокий объём + Низкая конкуренция

```javascript
async function getTopOpportunities() {
  const opportunities = await prisma.keyword.findMany({
    where: {
      competition: "low",
      searchVolume: { gte: 500 },
      relatedArticleId: null,
      trackingEnabled: true
    },
    orderBy: [
      { searchVolume: 'desc' },
      { competition: 'asc' }
    ],
    take: 20
  });
  return opportunities;
}

// Результат:
// [
//   { text: "tutorial web development beginners", searchVolume: 1200, competition: "low" },
//   { text: "how to learn coding free", searchVolume: 800, competition: "low" },
//   { text: "best Python courses 2026", searchVolume: 950, competition: "low" }
// ]
```

### Фильтр по категориям

```javascript
async function getKeywordsByCategory(category) {
  const keywords = await prisma.keyword.findMany({
    where: {
      category,
      trackingEnabled: true
    },
    orderBy: { searchVolume: 'desc' }
  });
  return keywords;
}
```

### История ранжирования

```javascript
async function getTrackingHistory(keywordId) {
  const rankings = await prisma.keywordRanking.findMany({
    where: { keywordId },
    orderBy: { checkedAt: 'asc' }
  });
  
  return {
    keyword: rankings[0]?.keyword,
    history: rankings.map(r => ({
      position: r.position,
      date: r.checkedAt,
      improvement: r.position < rankings[0].position ? 'up' : 'down'
    }))
  };
}

// Пример вывода:
// {
//   keyword: "web development",
//   history: [
//     { position: 45, date: "2026-03-01", improvement: "-" },
//     { position: 38, date: "2026-03-08", improvement: "up" },
//     { position: 32, date: "2026-03-15", improvement: "up" }
//   ]
// }
```

## Скрипт импорта

```javascript
// import-keywords.js
import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function importKeywords(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  let imported = 0;
  let duplicates = 0;
  let errors = 0;
  
  for (const kw of data) {
    try {
      const existing = await prisma.keyword.findUnique({
        where: { text: kw.text }
      });
      
      if (existing) {
        duplicates++;
        continue;
      }
      
      await prisma.keyword.create({
        data: {
          text: kw.text,
          searchVolume: kw.searchVolume,
          competition: kw.competition,
          searchIntent: kw.searchIntent,
          category: kw.category
        }
      });
      
      imported++;
    } catch (error) {
      console.error(`Error importing "${kw.text}":`, error.message);
      errors++;
    }
  }
  
  console.log(`
  ✅ Импорт завершён!
  ✓ Импортировано: ${imported}
  ⚠️ Дубликатов пропущено: ${duplicates}
  ❌ Ошибок: ${errors}
  `);
}

// Использование:
// node import-keywords.js keywords.json
const filePath = process.argv[2] || 'keywords.json';
importKeywords(filePath);
```

## Мониторинг ранжирования

**Автоматическая проверка позиций один раз в неделю:**

```javascript
// monitor-rankings.js
async function monitorRankings() {
  const keywords = await prisma.keyword.findMany({
    where: { trackingEnabled: true }
  });
  
  for (const kw of keywords) {
    // Проверить позицию в Google (используя SerpAPI или похожий сервис)
    const position = await checkGoogleRanking(kw.text);
    
    // Сохранить результат
    await updateRanking(kw.id, position, kw.url);
    
    console.log(`✓ ${kw.text}: ${position} позиция`);
  }
}

// Запуск один раз в неделю (через крон):
// 0 9 * * 1 node monitor-rankings.js
```

## Интеграция в конвейер

Этот модуль работает **параллельно со всеми шагами**:

```
Шаг 2: Исследование ключевых слов
  ↓
  Сохранить в БД ← БАЗА КЛЮЧЕВЫХ СЛОВ
  ↓
Шаг 2.5: Анализ конкурентов
  ↓
  Найти возможности ← БАЗА КЛЮЧЕВЫХ СЛОВ
  ↓
Шаг 3: Генерация статьи
  ↓
  Связать с статьёй ← БАЗА КЛЮЧЕВЫХ СЛОВ
  ↓
... отслеживание ранжирования
```

## Пример для SEM Travel

### Импортируемые ключевые слова:

```json
[
  {
    "text": "тур в Турцию",
    "searchVolume": 5400,
    "competition": "high",
    "searchIntent": "transactional",
    "category": "tours"
  },
  {
    "text": "дешевый тур в Турцию",
    "searchVolume": 1200,
    "competition": "medium",
    "searchIntent": "commercial",
    "category": "tours"
  },
  {
    "text": "туры в Дубай из Ташкента",
    "searchVolume": 350,
    "competition": "low",
    "searchIntent": "transactional",
    "category": "tours"
  }
]
```

### Поиск возможностей:

```
Top Opportunities for SEM Travel:

🏆 "туры в Дубай из Ташкента"
   Volume: 350 | Competition: LOW
   Status: No article yet
   Action: CREATE ✅

🏆 "виза в ОАЭ документы"
   Volume: 420 | Competition: LOW
   Status: No article yet
   Action: CREATE ✅

🏆 "бюджетные туры в Таиланд"
   Volume: 280 | Competition: LOW
   Status: No article yet
   Action: CREATE ✅
```

## Главный вывод

**База ключевых слов превращает случайное создание контента в стратегию, подкреплённую данными.**

**Совет:** Начинайте трекинг с первого дня. Даже с 5 ключевыми словами исторические данные бесценны при масштабировании.

База данных дает вам:
- ✅ Полный контроль над всеми ключевыми словами
- ✅ Автоматический мониторинг позиций
- ✅ Поиск золотых возможностей
- ✅ Измерение ROI
- ✅ Данные для принятия решений

**Результат:** Стратегический подход вместо хаоса!
