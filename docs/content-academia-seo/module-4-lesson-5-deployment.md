# Модуль 4, Урок 5: Деплой в продакшн

Ваша система SEO-автоматизации построена и протестирована локально. Пора задеплоить в продакшн, чтобы она работала 24/7.

## Деплой на Vercel пошагово

### Шаг 1: Push в GitHub

```bash
git add .
git commit -m "feat: Add complete SEO automation pipeline"
git push origin main
```

### Шаг 2: Подключение Vercel

1. Перейти на https://vercel.com
2. Нажать "Add New..." → "Project"
3. Выбрать репозиторий GitHub
4. Vercel автоматически определит Next.js

### Шаг 3: Конфигурация билда

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm ci
```

Vercel определяет это автоматически ✅

### Шаг 4: Переменные окружения

В Vercel → Project Settings → Environment Variables добавить:

```
DATABASE_URL=postgresql://user:pass@host/db
ANTHROPIC_API_KEY=sk-ant-xxxxx
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=admin@semtravel.uz
SMTP_PASS=app-password
ADMIN_EMAIL=admin@semtravel.uz
TELEGRAM_BOT_TOKEN=123456:ABCDEFghijklmnop
TELEGRAM_CHAT_ID=-1001234567890
TELEGRAM_PUBLIC_CHAT_ID=-1001987654321
CRON_SECRET=your-super-secret-token
NEXT_PUBLIC_SITE_URL=https://semtravel.uz
```

### Шаг 5: Деплой

Нажать "Deploy" — Vercel собирает и деплоит автоматически.

```
✅ Build successful
✅ Deployment complete
📊 https://semtravel.uz
```

## PostgreSQL для продакшена

Переключаемся с SQLite на PostgreSQL.

### Варианты хостинга:

| Вариант | Плюсы | Минусы |
|---------|-------|--------|
| **Vercel Postgres** | Интегрирована с Vercel | Дороже |
| **Supabase** | Бесплатный план, PostgreSQL | Еще одна платформа |
| **Neon** | Быстрая, бесплатный план | Новый сервис |
| **Railway** | Простой UI, дешевле | Может быть медленнее |

**Рекомендация:** Vercel Postgres (интеграция) или Neon (бюджет).

### Подключение Vercel Postgres:

```bash
# 1. В Vercel Dashboard: Storage → Create Database → Postgres
# 2. Скопировать POSTGRES_URL
# 3. В .env.local:
DATABASE_URL=postgres://...vercel...
```

### Миграция Prisma для PostgreSQL:

```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"  // ← Было: "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// ... остальная схема одинакова
```

**Команды:**

```bash
# Запустить миграцию на продакшене
npx prisma migrate deploy

# Или, если миграции не существуют (первый деплой):
npx prisma migrate deploy --skip-generate
```

## Стратегия статического Fallback

Экспортируем блог как JSON при билде. Если БД недоступна — используем JSON.

### Файл экспорта:

**File:** `/scripts/export-blog.ts`

```typescript
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

export async function exportBlogToJSON() {
  try {
    console.log('📤 Exporting blog to JSON...');

    const posts = await prisma.blogPost.findMany({
      where: { status: 'published' },
      orderBy: { publishedAt: 'desc' }
    });

    const exportDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(exportDir, 'blog-posts.json'),
      JSON.stringify({
        timestamp: new Date().toISOString(),
        count: posts.length,
        posts
      }, null, 2)
    );

    console.log(`✅ Exported ${posts.length} posts to public/data/blog-posts.json`);
    return true;
  } catch (error) {
    console.error('⚠️ Export failed:', error);
    return false;
  }
}

// Запуск при билде
if (require.main === module) {
  exportBlogToJSON().then(success => {
    process.exit(success ? 0 : 1);
  });
}
```

### Интеграция в package.json:

```json
{
  "scripts": {
    "build": "next build && npm run export:blog",
    "export:blog": "ts-node scripts/export-blog.ts"
  }
}
```

### Использование fallback:

**File:** `/app/blog/[slug]/page.tsx`

```typescript
export default async function BlogPostPage({ params }) {
  let post;

  try {
    // Сначала пробуем БД
    post = await prisma.blogPost.findUnique({
      where: { slug: params.slug }
    });
  } catch (error) {
    // Fallback на JSON
    console.warn(`⚠️ Database error, loading from JSON fallback`);
    const allPosts = await fetch('/data/blog-posts.json').then(r => r.json());
    post = allPosts.posts.find(p => p.slug === params.slug);
  }

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
```

## Промпт для Claude Code

Настрой продакшн-деплой:

### 1. vercel.json

```json
{
  "buildCommand": "npm run build",
  "env": {
    "DATABASE_URL": "@database_url",
    "ANTHROPIC_API_KEY": "@anthropic_api_key",
    "CRON_SECRET": "@cron_secret"
  },
  "crons": [{
    "path": "/api/cron/generate-blog",
    "schedule": "0 8 * * 1,4"
  }]
}
```

### 2. Скрипт проверки переменных окружения

**File:** `/scripts/check-env.ts`

```typescript
export function checkEnv() {
  const required = [
    'DATABASE_URL',
    'ANTHROPIC_API_KEY',
    'ADMIN_EMAIL',
    'CRON_SECRET'
  ];

  const optional = [
    'SMTP_HOST',
    'TELEGRAM_BOT_TOKEN',
    'NEXT_PUBLIC_SITE_URL'
  ];

  console.log('🔍 Checking environment variables...\n');

  let allGood = true;

  console.log('Required:');
  required.forEach(key => {
    const value = process.env[key];
    if (!value) {
      console.log(`  ❌ ${key} - MISSING`);
      allGood = false;
    } else {
      console.log(`  ✅ ${key} - SET`);
    }
  });

  console.log('\nOptional:');
  optional.forEach(key => {
    const value = process.env[key];
    if (!value) {
      console.log(`  ⚠️ ${key} - NOT SET (some features disabled)`);
    } else {
      console.log(`  ✅ ${key} - SET`);
    }
  });

  if (!allGood) {
    console.error('\n❌ Missing required environment variables!');
    process.exit(1);
  }

  console.log('\n✅ All required variables are set!');
}

// Запуск
if (require.main === module) {
  checkEnv();
}
```

### 3. Скрипт миграции продакшена

**File:** `/scripts/migrate-production.ts`

```bash
#!/bin/bash

echo "🚀 Starting production migration..."

# 1. Проверить переменные окружения
npm run check:env

# 2. Запустить Prisma миграции
npx prisma migrate deploy

# 3. Сгенерировать Prisma client
npx prisma generate

# 4. Проверить миграции
echo "✅ Migrations completed successfully"
```

## Чеклист после деплоя

### Окружение

- [ ] Все переменные окружения установлены в Vercel
- [ ] DATABASE_URL указывает на PostgreSQL
- [ ] ANTHROPIC_API_KEY действителен
- [ ] CRON_SECRET сохранён и никому не отправлен

### База данных

- [ ] Миграция Prisma успешна (`npx prisma migrate deploy`)
- [ ] Таблицы созданы в PostgreSQL
- [ ] Можно подключиться через Prisma Studio (`npx prisma studio`)

### Функциональность

- [ ] Sitemap доступен: https://semtravel.uz/sitemap.xml
- [ ] Robots.txt доступен: https://semtravel.uz/robots.txt
- [ ] Блог работает: https://semtravel.uz/blog
- [ ] Превью статьи отображается

### Интеграции

- [ ] Telegram бот работает (отправить тестовое сообщение)
- [ ] Email отправка проверена (отправить тест)
- [ ] Google Search Console подключена

### Cron

- [ ] Cron видна в Vercel Dashboard → Functions
- [ ] Вручную протестирована:

```bash
curl -X POST https://semtravel.uz/api/cron/generate-blog \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### Мониторинг

- [ ] Vercel logs доступны для просмотра
- [ ] GenerationLog работает и записывает данные
- [ ] Analytics dashboard доступен в админ-панели

## Rollback стратегия

Если деплой сломал что-то:

```bash
# 1. В Vercel Dashboard → Deployments
# 2. Найти предыдущий успешный деплой
# 3. Нажать "Promote to Production"
```

Или откатить code:

```bash
git revert HEAD
git push origin main
# Vercel автоматически редеплоит
```

## Совет

**Сначала деплойте в preview branch.** Protestируйте cron вручную, вызвав API с CRON_SECRET.

```bash
# 1. Создать feature branch
git checkout -b feat/seo-automation

# 2. Push в GitHub
git push origin feat/seo-automation

# 3. Vercel создаст preview deployment
# 4. Протестировать все функции в preview
# 5. Если всё хорошо → merge в main
# 6. Vercel автоматически деплоит в продакшн
```

## Главный вывод

**Деплой — это когда проект переходит от «работает на моей машине» к «работает для всего мира».**

### Финальный чек-лист

- ✅ GitHub репо подключен к Vercel
- ✅ Переменные окружения установлены
- ✅ PostgreSQL БД создана
- ✅ Prisma миграции запущены
- ✅ Cron-задачи настроены
- ✅ Preview deployment тестирован
- ✅ Production deployment успешен
- ✅ Мониторинг настроен
- ✅ Rollback стратегия на месте
- ✅ Документация обновлена

## Что дальше?

```
Week 1: Вы стартуете первый cron-запуск
Week 2-4: Собираете метрики, оптимизируете промпты
Week 4+: Масштабируете (больше языков, категорий, топиков)
```

🚀 **Поздравляем! Ваша SEO-автоматизация живёт!**
