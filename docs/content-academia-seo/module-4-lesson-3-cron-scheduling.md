# Модуль 4, Урок 3: Планирование с помощью Cron

Последний элемент автоматизации — планирование. Вместо ручного запуска конвейера, настраиваем автоматический запуск в определённые дни и время.

## Настройка Cron в Vercel

Vercel поддерживает cron-задачи через `vercel.json`.

**Расписание:** `"0 8 * * 1,4"` запускает конвейер каждый **понедельник и четверг в 8:00 UTC**.

### Формат cron:

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6, 0 = Sunday)
│ │ │ │ │
│ │ │ │ │
0 8 * * 1,4
```

**Примеры:**
```
0 8 * * 1      — Только понедельник в 8:00
0 8 * * 1-5    — Пн-Пт в 8:00 (рабочие дни)
0 8 * * 1,4    — Пн и Чт в 8:00 (дважды в неделю)
0 3 * * *      — Каждый день в 3:00
```

## Безопасность с CRON_SECRET

**Кто угодно может вызвать ваш API-эндпоинт.** `CRON_SECRET` предотвращает несанкционированное выполнение.

Проверяем заголовок `authorization` на совпадение с Bearer-токеном.

### Переменные окружения:

```env
CRON_SECRET=your-super-secret-token-12345
```

## Feature Flags

Флаги позволяют включать/выключать конвейер **без деплоя**:

| Флаг | Описание |
|------|----------|
| `BLOG_AUTO_GENERATION` | Главный выключатель |
| `BLOG_TRANSLATION_ENABLED` | Вкл/выкл перевод |
| `BLOG_NOTIFICATION_ENABLED` | Вкл/выкл уведомления |
| `BLOG_MAX_ARTICLES_PER_RUN` | Лимит статей за запуск |

## Расписание генерации

### Консервативное (2 раза/неделю)
```
0 8 * * 1,4    — Пн/Чт, время для ревью
```
- ✅ Время на ревью статей
- ✅ Низкие затраты API
- ✅ Стабильный темп

### Агрессивное (3 раза/неделю)
```
0 8 * * 1,3,5  — Пн/Ср/Пт
```
- ⚠️ Больше статей
- ⚠️ Выше затраты
- ⚠️ Больше работы для админа

### Максимальное (ежедневно)
```
0 3 * * *      — Каждый день в 3:00
```
- ❌ Максимальный выход
- ❌ Высокие затраты API
- ❌ Много работы

## Промпт для Claude Code

Создай систему cron:

### 1. vercel.json с расписанием

```json
{
  "crons": [{
    "path": "/api/cron/generate-blog",
    "schedule": "0 8 * * 1,4"
  }]
}
```

### 2. /api/cron/generate-blog

```typescript
// app/api/cron/generate-blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { runFullPipeline } from '@/seo/scripts/run-pipeline';

export async function POST(request: NextRequest) {
  // Проверка CRON_SECRET
  const authHeader = request.headers.get('authorization');
  const expectedToken = `Bearer ${process.env.CRON_SECRET}`;

  if (!authHeader || authHeader !== expectedToken) {
    console.error('❌ Unauthorized cron attempt');
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Проверка feature flag
  const featureFlags = await getFeatureFlags();
  if (!featureFlags.BLOG_AUTO_GENERATION) {
    return NextResponse.json({
      status: 'skipped',
      reason: 'BLOG_AUTO_GENERATION is disabled'
    });
  }

  try {
    console.log('🚀 Starting scheduled blog generation...');
    const startTime = Date.now();

    // Получить топик для генерации (ротация категорий)
    const topic = await selectTopicForGeneration();

    // Запустить полный конвейер
    const result = await runFullPipeline(topic);

    const duration = Date.now() - startTime;

    // Логировать результат
    await logCronExecution({
      status: 'success',
      topic,
      postId: result.postId,
      seoScore: result.seoScore,
      duration,
      tokensUsed: result.tokensUsed
    });

    return NextResponse.json({
      status: 'success',
      topic,
      postId: result.postId,
      seoScore: result.seoScore,
      duration: `${(duration / 1000).toFixed(2)}s`,
      tokensUsed: result.tokensUsed,
      message: 'Article generated and pending review'
    });

  } catch (error) {
    console.error('❌ Cron execution failed:', error);

    await logCronExecution({
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      duration: Date.now() - startTime
    });

    return NextResponse.json(
      {
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Вспомогательная функция для выбора топика
async function selectTopicForGeneration(): Promise<string> {
  // Ротация категорий: выбрать категорию с наименьшим числом постов за 30 дней
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const stats = await prisma.blogPost.groupBy({
    by: ['category'],
    where: {
      createdAt: { gte: thirtyDaysAgo }
    },
    _count: true
  });

  // Выбрать категорию с минимальным числом постов
  const minCategory = stats.reduce((min, curr) => 
    curr._count < min._count ? curr : min
  );

  // Выбрать топик из этой категории через Claude
  const topics = [
    'Тур в Дубай 2026',
    'Виза в Таиланд',
    'Дешевые туры из Ташкента',
    'Лучшие отели Турции',
    'Туризм в Узбекистане'
  ];

  return topics[Math.floor(Math.random() * topics.length)];
}

// Логирование выполнения cron
async function logCronExecution(data: any) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    ...data
  };

  console.log(`📊 Cron Log:`, logEntry);
  // Опционально: сохранить в БД или файл
}
```

### 3. /api/admin/feature-flags

```typescript
// app/api/admin/feature-flags/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAuth } from '@/lib/auth';

interface FeatureFlags {
  BLOG_AUTO_GENERATION: boolean;
  BLOG_TRANSLATION_ENABLED: boolean;
  BLOG_NOTIFICATION_ENABLED: boolean;
  BLOG_MAX_ARTICLES_PER_RUN: number;
}

// In-memory store (или используйте DB)
let featureFlags: FeatureFlags = {
  BLOG_AUTO_GENERATION: true,
  BLOG_TRANSLATION_ENABLED: true,
  BLOG_NOTIFICATION_ENABLED: true,
  BLOG_MAX_ARTICLES_PER_RUN: 1
};

export async function GET(request: NextRequest) {
  // Проверка авторизации админа
  const isAdmin = await verifyAdminAuth(request);
  if (!isAdmin) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json(featureFlags);
}

export async function POST(request: NextRequest) {
  // Проверка авторизации админа
  const isAdmin = await verifyAdminAuth(request);
  if (!isAdmin) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const updates = await request.json();

  // Обновить флаги
  featureFlags = {
    ...featureFlags,
    ...updates
  };

  console.log(`✅ Feature flags updated:`, featureFlags);

  return NextResponse.json({
    status: 'updated',
    flags: featureFlags
  });
}
```

## Переменные окружения

```env
# Cron security
CRON_SECRET=your-super-secret-token-12345

# Feature flags (можно переопределить API)
BLOG_AUTO_GENERATION=true
BLOG_TRANSLATION_ENABLED=true
BLOG_NOTIFICATION_ENABLED=true
BLOG_MAX_ARTICLES_PER_RUN=1
```

## Тестирование cron локально

```bash
# Имитировать cron-запрос
curl -X POST http://localhost:3000/api/cron/generate-blog \
  -H "Authorization: Bearer your-super-secret-token-12345"
```

## Мониторинг cron выполнения

Vercel предоставляет логи:
```bash
vercel logs
```

Или в дашборде: Vercel → Project → Functions → Cron Executions

## Совет

**Начните с двух раз в неделю (Пн/Чт).** Это даёт время на ревью статей перед следующей партией.

## Главный вывод

**Cron-задачи превращают конвейер из инструмента в машину, работающую на вас.** Настройте один раз — контент генерируется, пока вы спите.

### Чек-лист cron-планирования

- ✅ vercel.json содержит cron-конфиг
- ✅ CRON_SECRET установлена и проверяется
- ✅ Feature flags реализованы
- ✅ API /api/cron/generate-blog создан
- ✅ Обработка ошибок с логированием
- ✅ Тестирование локально (curl)
- ✅ Логи Vercel проверяются
- ✅ Расписание выбрано (консервативное: 2x/неделю)

### Безопасность

- ✅ Bearer token проверяется
- ✅ Только авторизованные requests
- ✅ Логирование попыток несанкционированного доступа
- ✅ Feature flags для контроля без деплоя
