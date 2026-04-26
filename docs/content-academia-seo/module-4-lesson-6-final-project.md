# Модуль 4, Урок 6: Финальный проект — Постройте свою SEO-машину

Время собрать всё воедино. В этом финальном проекте вы построите минимальную, но полноценную систему SEO-автоматизации с нуля.

## Требования

### Ядро системы (обязательные)

1. **Исследование ключевиков**
   - Принимает нишу (например, "travel", "tech", "fitness")
   - Возвращает 10 идей с оценкой сложности (easy/medium/hard)
   - Использует Claude Haiku (быстро и дёшево)

2. **Генератор статей**
   - Принимает ключевик
   - Создаёт HTML-статью 800-1000 слов
   - PAS для введения, AIDA для разделов
   - Возвращает HTML + метаданные

3. **SEO-аудитор**
   - 100-балльная система из Модуля 3
   - Все 10 критериев
   - Вернуть score + breakdown + issues

4. **Перевод**
   - На минимум 2 языка (EN + 1 другой)
   - Сохранение HTML-структуры
   - Fallback на английский при ошибке

5. **Хранение в БД**
   - Prisma + SQLite (разработка) или PostgreSQL (продакшн)
   - Модель BlogPost с JSON-полями для мультиязычности
   - Сохранение истории логов (GenerationLog)

## Архитектура проекта

```
/seo
├── /config
│   └── seo.config.ts          (Конфигурация)
├── /pipeline
│   ├── keyword-research.ts    (Шаг 1)
│   ├── article-generator.ts   (Шаг 2)
│   ├── seo-auditor.ts         (Шаг 3)
│   ├── translator.ts          (Шаг 4)
│   ├── publisher.ts           (Шаг 5)
│   └── orchestrator.ts        (Оркестратор)
├── /types
│   └── index.ts               (TypeScript типы)
└── /utils
    └── helpers.ts             (Утилиты)
```

## Промпты для Claude Code

### Промпт 1: Настройка проекта

```
Создай Next.js проект с TypeScript и Tailwind:

1. Инициализация:
   - npx create-next-app@latest seo-automation --ts --tailwind
   - npm install @prisma/client
   - npx prisma init

2. Prisma schema (prisma/schema.prisma):
   - model BlogPost { id, slug, title (JSON), content (JSON), keyword, seoScore, status, logs }
   - model GenerationLog { id, action, status, tokensUsed, duration }

3. Структура папок как выше

4. .env.local:
   - DATABASE_URL="file:./dev.db" (SQLite)
   - ANTHROPIC_API_KEY=sk-ant-xxxxx
```

### Промпт 2: Исследование ключевиков

```
Функция researchKeywords(niche: string):

1. Принимает нишу (строка)
2. Вызывает Claude Haiku через Anthropic SDK
3. Промпт: "Generate 10 keyword ideas for niche: {niche}. Return JSON: [{keyword, searchVolume, difficulty}]"
4. Temperature: 0.5 (баланс креативности)
5. Возвращает: Array<{ keyword: string, searchVolume: number, difficulty: 'easy'|'medium'|'hard' }>
6. Обработка ошибок: catch ошибку, залогировать, вернуть пустой массив
```

### Промпт 3: Генератор статей

```
Функция generateArticle(keyword: string, difficulty: string):

1. Системный промпт: [из Module 3, Lesson 2 - PAS intro, AIDA sections, semantic HTML only]
2. User промпт: "Write article about '{keyword}'. Difficulty level: {difficulty}. 800-1000 words. Include FAQ."
3. Model: claude-sonnet-4-20250514
4. Temperature: 0.8
5. Max tokens: 6000
6. Возвращает: {
     html: string
     wordCount: number
     metaTitle: string
     metaDescription: string
   }
7. Валидация: 800 < wordCount < 1000 (или ошибка)
```

### Промпт 4: SEO-аудитор

```
Функция auditSEO(html, metaTitle, metaDescription, keyword):

Реализуй все 10 критериев из Module 3, Lesson 4:
1. Keyword in title (10)
2. Keyword in first paragraph (10)
3. Keyword in meta description (10)
4. Keyword density 0.8-2.5% (15)
5. H2 headings 3+ with keyword (15)
6. Internal links 2-3 (10)
7. Meta title length 30-60 (10)
8. Meta description length 100-160 (10)
9. H2→H3 hierarchy (5)
10. FAQ 4-5 sections (5)

Возвращает: {
  totalScore: number (0-100)
  breakdown: Array<{criterion, maxPoints, earnedPoints, passed}>
  criticalIssues: string[]
  recommendation: "publish" | "review" | "refine" | "reject"
}
```

### Промпт 5: Перевод

```
Функция translateArticle(html: string, language: string):

1. Системный промпт: [из Module 4, Lesson 2 - сохранить теги, переводить только текст, не переводить коды/URL]
2. Model: claude-haiku-4-20250307
3. Temperature: 0.3
4. Max tokens: 4000
5. Валидация: количество HTML-тегов ±2 от оригинала
6. При провале: попытка 2, затем fallback на английский
7. Возвращает: {
     language: string
     html: string
     success: boolean
     error?: string
   }
```

### Промпт 6: Оркестратор (главный конвейер)

```
Функция runPipeline(niche: string):

1. Исследование:
   const keywords = await researchKeywords(niche)
   const selectedKeyword = keywords[0] // Берём первый (лучший)

2. Генерация:
   const article = await generateArticle(selectedKeyword.keyword, selectedKeyword.difficulty)

3. Аудит:
   const audit = auditSEO(article.html, article.metaTitle, article.metaDescription, selectedKeyword.keyword)

4. Доработка (если score < 65):
   if (audit.totalScore < 65) {
     // Перепросить генерацию с добавлением: "Previous score was {score}. Fix these issues: {criticalIssues}"
   }

5. Перевод:
   const translations = await Promise.all([
     translateArticle(article.html, 'ru'),
     translateArticle(article.html, 'he')
   ])

6. Сохранение:
   const post = await prisma.blogPost.create({
     data: {
       slug: generateSlug(article.metaTitle),
       title: { en: article.metaTitle, ru: ..., he: ... },
       content: { en: article.html, ru: translations[0].html, he: translations[1].html },
       keyword: selectedKeyword.keyword,
       seoScore: audit.totalScore,
       status: 'pending_review'
     }
   })

7. Возвращает: { postId, keyword, score, languages, duration }

Обработка ошибок на каждом шаге с логированием.
```

## Структура типов (TypeScript)

**File:** `/seo/types/index.ts`

```typescript
export interface Keyword {
  keyword: string;
  searchVolume: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Article {
  html: string;
  wordCount: number;
  metaTitle: string;
  metaDescription: string;
}

export interface AuditResult {
  totalScore: number;
  breakdown: Array<{
    criterion: string;
    maxPoints: number;
    earnedPoints: number;
    passed: boolean;
  }>;
  criticalIssues: string[];
  recommendation: 'publish' | 'review' | 'refine' | 'reject';
}

export interface TranslationResult {
  language: string;
  html: string;
  success: boolean;
  error?: string;
}

export interface PipelineResult {
  postId: string;
  keyword: string;
  seoScore: number;
  languages: string[];
  duration: number;
  status: 'success' | 'failed';
}
```

## Критерии оценки

### Полнота (25 баллов)

- ✅ Все 5 компонентов работают (keyword research, generation, audit, translation, storage)
- ✅ Оркестратор связывает все части
- ✅ Нет пропущенных шагов

### Качество SEO (25 баллов)

- ✅ Статьи стабильно набирают 65+ баллов
- ✅ Средняя оценка 70+
- ✅ Критические ошибки отсутствуют

### Обработка ошибок (20 баллов)

- ✅ API ошибки обработаны gracefully
- ✅ Fallback стратегии (translation fallback, retry logic)
- ✅ Логирование всех ошибок
- ✅ Система не крашится при ошибке

### Качество кода (20 баллов)

- ✅ Чистый TypeScript с правильными типами
- ✅ Функции разделены по ответственности
- ✅ DRY (не повторяются блоки кода)
- ✅ Читаемость и понятность

### Мультиязычность (10 баллов)

- ✅ Минимум 2 языка (EN + 1 другой)
- ✅ HTML-структура сохранена в переводах
- ✅ JSON-хранение поддерживает все языки
- ✅ Fallback при ошибке перевода

**Итого: 100 баллов**

## Бонусные задания (опционально)

Если интересно улучшить проект:

### 1️⃣ Email уведомления (+15 баллов)

```
Когда статья сгенерирована:
- Отправить HTML-email с результатами
- Показать SEO-оценку, язык, время генерации
- Включить ссылку на превью
```

### 2️⃣ Telegram бот (+20 баллов)

```
- @BotFather создать бота
- При генерации отправить сообщение в Telegram
- Инлайн-кнопки: ✅ Approve, ❌ Reject, 👁️ Preview
```

### 3️⃣ Дашборд (+15 баллов)

```
- Next.js страница /admin/dashboard
- Показать метрики: всего статей, средний score, стоимость токенов
- График трендов SEO-оценок
- Список последних статей со статусами
```

### 4️⃣ Cron-расписание (+20 баллов)

```
- vercel.json с расписанием (Пн/Чт в 8:00)
- API /api/cron/generate-blog
- CRON_SECRET для безопасности
- Автоматическая генерация по расписанию
```

### 5️⃣ Деплой на Vercel + PostgreSQL (±25 баллов)

```
- Vercel подключение (GitHub + auto-deploy)
- PostgreSQL (Vercel Postgres или Supabase)
- Переменные окружения
- Cron работает в продакшене
```

## Пошаговая разработка

### День 1: Фундамент

```bash
# 1. Создать проект
npx create-next-app@latest seo-automation --ts --tailwind

# 2. Установить зависимости
npm install @prisma/client
npm install -D prisma ts-node @types/node

# 3. Инициализировать Prisma
npx prisma init

# 4. Создать /seo структуру
mkdir -p seo/{config,pipeline,types,utils}
```

### День 2: Компоненты по отдельности

```
- /seo/pipeline/keyword-research.ts ✅
- /seo/pipeline/article-generator.ts ✅
- /seo/pipeline/seo-auditor.ts ✅
- /seo/pipeline/translator.ts ✅
- /seo/pipeline/publisher.ts ✅

Тест каждого:
npm test keyword-research.ts
npm test article-generator.ts
...и так далее
```

### День 3: Оркестратор + интеграция

```
- /seo/pipeline/orchestrator.ts
- Связать все компоненты
- Тест полного конвейера
```

### День 4: БД + улучшения

```
- Prisma миграция
- npm run dev
- Протестировать сохранение в БД
- Добавить обработку ошибок
```

### День 5: Бонусы + polish

```
- Email / Telegram (если интересно)
- Дашборд (если интересно)
- Финальное тестирование
- Клинап кода
```

## Совет

**Стройте каждый компонент отдельно, тестируйте, потом соединяйте.**

```typescript
// Не так:
const everything = await runPipeline(niche);  // ❌ Сложно отладить

// А так:
const keywords = await researchKeywords(niche);  // ✅ Протестировать отдельно
const article = await generateArticle(keywords[0]);  // ✅ Отдельно
const audit = await auditSEO(article.html, ...);  // ✅ Отдельно
// ... и так далее
```

## Что сделать после финального проекта?

```
✅ Проект завершён → Выложить на GitHub (с README)
✅ Задеплоить → На Vercel или другой хостинг
✅ Документировать → Как использовать, как расширять
✅ Показать → Портфолио для работодателей / клиентов
✅ Масштабировать → Добавить больше языков, автоматизацию
```

## Главный вывод

**Этот проект — ваш портфолио.** Рабочая система SEO-автоматизации демонстрирует:

- 🎯 Архитектурное мышление (5 отдельных компонентов)
- 🎯 Backend навыки (API, БД, error handling)
- 🎯 DevOps практики (деплой, мониторинг, логирование)
- 🎯 AI интеграция (Claude API, промпты)
- 🎯 Production-ready код (типизация, тесты, обработка ошибок)

**Это реальный инженерный навык, а не just another tutorial project.**

---

## Финальный чек-лист

- ✅ Все 5 компонентов реализованы
- ✅ Оркестратор связывает их
- ✅ TypeScript + правильная типизация
- ✅ Обработка ошибок на каждом шаге
- ✅ Мультиязычность (2+ языка)
- ✅ Prisma + БД (SQLite или PostgreSQL)
- ✅ Статьи стабильно 65+ баллов
- ✅ README с инструкциями
- ✅ Выложено на GitHub
- ✅ Готово к деплою

---

🎉 **Поздравляем на завершении Content Academia SEO курса!**

Вы построили не просто систему, вы построили **машину для зарабатывания трафика автоматически.**

Следующий шаг? Примените это к вашему реальному проекту и смотрите, как растёт трафик. 📈
