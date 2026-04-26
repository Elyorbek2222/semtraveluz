# Модуль 3, Урок 7: Авто-публикация с ревью администратора

Финальный шаг конвейера — сохранение статьи в базу данных и настройка workflow ревью. Статьи не публикуются сразу — они ждут одобрения админа.

## Модель BlogPost

Prisma-модель для хранения:

```prisma
model BlogPost {
  id              String   @id @default(cuid())
  slug            String   @unique
  title           Json     // { en: "...", ru: "...", he: "..." }
  content         Json     // { en: "...", ru: "...", he: "..." }
  metaTitle       Json
  metaDescription Json
  keyword         String
  seoScore        Int
  keywordDensity  Float
  status          String   @default("pending_review")
  publishedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  logs            GenerationLog[]
}
```

## Workflow статусов

| Статус | Описание |
|--------|----------|
| `pending_review` | Сгенерирована, ждёт админа |
| `approved` | Админ одобрил через Telegram или дашборд |
| `published` | На сайте, видна пользователям |
| `rejected` | Отклонена |

### Диаграмма переходов:

```
generateArticle()
  ↓
[pending_review]
  ↓
Админ смотрит Telegram уведомление
  ├─ ✅ Одобрить → [approved]
  ├─ ❌ Отклонить → [rejected]
  └─ ✏️ Редактировать → [pending_review]
  ↓
[approved] → Публикуется на сайте → [published]
```

## Статический JSON-fallback

Для устойчивости экспортируем блог как статические JSON-файлы при билде. **Блог работает даже если БД временно недоступна.**

```javascript
// build-time export
// Сохраняет в /public/blog.json
const posts = await prisma.blogPost.findMany({
  where: { status: 'published' }
});

fs.writeFileSync(
  'public/blog.json',
  JSON.stringify(posts, null, 2)
);
```

## Промпт для Claude Code

Создай функцию `saveBlogPost`:

```javascript
async function saveBlogPost({
  keyword,
  title,           // { en: "...", ru: "...", he: "..." }
  content,         // { en: "...", ru: "...", he: "..." }
  metaTitle,       // { en: "...", ru: "...", he: "..." }
  metaDescription, // { en: "...", ru: "...", he: "..." }
  seoScore,
  keywordDensity
}) {
  // 1. Генерирует URL-safe slug из английского заголовка
  // 2. Проверяет уникальность slug, добавляет -2 при дублировании
  // 3. Создаёт BlogPost со статусом "pending_review"
  // 4. Создаёт GenerationLog для действия "save"
  // 5. Возвращает созданный пост с ID
  // 6. Обрабатывает ошибки БД с retry
}
```

### Реализация:

```javascript
async function saveBlogPost({
  keyword,
  title,
  content,
  metaTitle,
  metaDescription,
  seoScore,
  keywordDensity
}) {
  // Генерировать slug
  let slug = title.en
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  // Проверить уникальность
  let count = 0;
  let finalSlug = slug;
  
  while (await prisma.blogPost.findUnique({ where: { slug: finalSlug } })) {
    count++;
    finalSlug = `${slug}-${count}`;
  }

  // Создать пост
  const post = await prisma.blogPost.create({
    data: {
      slug: finalSlug,
      title,
      content,
      metaTitle,
      metaDescription,
      keyword,
      seoScore,
      keywordDensity,
      status: 'pending_review',
      logs: {
        create: {
          action: 'save',
          status: 'success',
          details: {
            slug: finalSlug,
            seoScore,
            language: Object.keys(content)
          },
          tokensUsed: 0,
          duration: 0
        }
      }
    },
    include: { logs: true }
  });

  return post;
}
```

## Обработка ошибок БД

```javascript
async function saveBlogPostWithRetry(data, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await saveBlogPost(data);
    } catch (error) {
      if (attempt === maxRetries) {
        // Fallback: сохранить в JSON
        const backup = {
          ...data,
          savedAt: new Date().toISOString(),
          backupId: generateId()
        };
        fs.writeFileSync(
          `./exports/failed/${backup.backupId}.json`,
          JSON.stringify(backup, null, 2)
        );
        
        console.error(`❌ Database failed after ${maxRetries} retries`);
        console.error(`📄 Backup saved to: exports/failed/${backup.backupId}.json`);
        
        throw error;
      }

      const delay = Math.pow(2, attempt) * 1000; // exponential backoff
      console.log(`⚠️ Attempt ${attempt} failed, retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

## Уведомление админа

После сохранения создаём уведомление:

```javascript
async function notifyAdminForReview(post) {
  const message = `
📝 Новая статья на ревью!

🎯 Ключевик: ${post.keyword}
📊 SEO Оценка: ${post.seoScore}/100
📄 Статус: ${post.status}

💬 ${post.title.ru || post.title.en}

Действия:
✅ Одобрить
❌ Отклонить
✏️ Редактировать
  `.trim();

  // Отправить в Telegram или email
  await sendTelegramMessage(message, {
    post_id: post.id,
    approve_callback: `review_approve_${post.id}`,
    reject_callback: `review_reject_${post.id}`,
    edit_callback: `review_edit_${post.id}`
  });
}
```

## API для управления статусом

```javascript
// /api/admin/blog/[id]/status
async function updatePostStatus(postId, newStatus) {
  // newStatus: "approved" | "rejected" | "published"

  const post = await prisma.blogPost.update({
    where: { id: postId },
    data: {
      status: newStatus,
      publishedAt: newStatus === 'published' ? new Date() : null
    }
  });

  // Логировать
  await prisma.generationLog.create({
    data: {
      blogPostId: postId,
      action: `status_${newStatus}`,
      status: 'success',
      details: { newStatus },
      tokensUsed: 0,
      duration: 0
    }
  });

  return post;
}
```

## Интеграция в конвейер

```
Шаг 7: validateTranslations()
  ↓
Шаг 8: saveBlogPost() ← ЭТОТ ШАГ
  ↓
[pending_review] ← Ждёт админа
  ↓
Админ: approve / reject / edit
  ↓
[published] ← На сайте
```

## Совет

**Всегда генерируйте slug из английского заголовка** — они URL-безопасны и читаемы.

**Пример slug:**
```
❌ Плохо: "blog-post-2026-03-15-001"
✅ Хорошо: "how-to-automate-seo-content-generation"
```

## Страховочная сетка

**Шаг ревью — ваша страховочная сетка.** AI генерирует контент, но человек принимает финальное решение о публикации.

### Почему это важно:

- ✅ AI может галлюцинировать факты
- ✅ AI может пропустить важные детали
- ✅ Тон голоса может не совпадать с брендом
- ✅ SEO-оценка не идеальна

**Ревью админа ловит ошибки до продакшена.**

## Чек-лист авто-публикации

- ✅ BlogPost модель создана
- ✅ Slug генерируется из EN заголовка
- ✅ Проверка уникальности slug (с суффиксом -2)
- ✅ Статус по умолчанию: pending_review
- ✅ Логирование каждого действия
- ✅ JSON-fallback при ошибке БД
- ✅ Retry с exponential backoff
- ✅ Уведомление админа (email/Telegram)
- ✅ API для изменения статуса
- ✅ История всех переходов статусов
