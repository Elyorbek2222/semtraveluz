# Модуль 4, Урок 2: Системы уведомлений: Email + Telegram

Когда конвейер генерирует статью в 3 ночи, вам нужно об этом знать. Два канала: стилизованный HTML-email для сводок и Telegram с инлайн-кнопками для быстрого одобрения.

## Настройка SMTP Email

Используем **Zoho Mail** для SMTP (есть бесплатный план).

### Переменные окружения:

```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=your-email@zoho.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@semtravel.uz
```

### Установка nodemailer:

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

## Стилизованный HTML Email

Уведомление включает **тёмную HTML-тему** с:

- 📝 Заголовок статьи
- 🔑 Ключевое слово
- 📊 SEO-оценка (цветной индикатор)
- 📏 Плотность ключевика
- 📄 Количество слов по языкам
- 🔗 Ссылка на превью

### Пример HTML шаблона:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Inter, sans-serif; background: #1a1a1a; color: #e0e0e0; }
      .container { max-width: 600px; margin: 0 auto; background: #262626; padding: 20px; }
      .header { border-bottom: 2px solid #0057A8; padding-bottom: 15px; }
      h1 { color: #0057A8; margin: 0; }
      .score { display: inline-block; padding: 8px 12px; border-radius: 4px; font-weight: bold; }
      .score.high { background: #4caf50; color: white; }
      .score.medium { background: #ff9800; color: white; }
      .score.low { background: #f44336; color: white; }
      .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
      .meta-item { background: #333; padding: 12px; border-radius: 4px; }
      .button { display: inline-block; background: #0057A8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>📝 Новая статья на ревью</h1>
      </div>

      <h2>{{ title }}</h2>

      <div class="meta">
        <div class="meta-item">
          <strong>🔑 Ключевик:</strong> {{ keyword }}
        </div>
        <div class="meta-item">
          <strong>📊 SEO Оценка:</strong> 
          <span class="score {{ scoreClass }}">{{ score }}/100</span>
        </div>
        <div class="meta-item">
          <strong>📏 Плотность:</strong> {{ density }}%
        </div>
        <div class="meta-item">
          <strong>📄 Слов:</strong> EN: {{ wordCount }}, RU: {{ ruWordCount }}, HE: {{ heWordCount }}
        </div>
      </div>

      <a href="{{ previewUrl }}" class="button">👁️ Превью на сайте</a>
    </div>
  </body>
</html>
```

## Telegram Bot

Создайте бота через **@BotFather** в Telegram.

### Переменные окружения:

```env
TELEGRAM_BOT_TOKEN=123456789:ABCDefGHIJKlmnoPQRStuvwxyz
TELEGRAM_CHAT_ID=-1001234567890  # ID приватного канала для ревью
TELEGRAM_PUBLIC_CHAT_ID=-1001987654321  # ID публичной группы для анонсов
```

### Инлайн-клавиатура для ревью:

```
Approve (зелёная) — одобрить статью
Reject (красная) — отклонить
Edit (жёлтая) — открыть редактирование
Preview (синяя) — предпросмотр на сайте
```

## Два канала

### Канал ревью (приватный)

✅ Только для админа  
✅ С инлайн-кнопками для одобрения/отклонения  
✅ Сообщения содержат полные данные статьи  

### Публичная группа

✅ Анонс при публикации  
✅ Упрощённое сообщение (заголовок, ссылка)  
✅ Для взаимодействия с аудиторией  

## Промпт для Claude Code

Создай системы уведомлений:

### 1. sendArticleEmail

```typescript
// seo/pipeline/notifier.ts
import nodemailer from 'nodemailer';

interface EmailPayload {
  title: string;
  keyword: string;
  seoScore: number;
  keywordDensity: number;
  wordCount: number;
  ruWordCount?: number;
  heWordCount?: number;
  previewUrl: string;
  postId: string;
}

export async function sendArticleEmail(payload: EmailPayload) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const scoreColor = payload.seoScore >= 85 ? 'green' : 
                     payload.seoScore >= 65 ? 'orange' : 'red';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Inter, sans-serif; background: #1a1a1a; color: #e0e0e0; }
          .container { max-width: 600px; margin: 0 auto; background: #262626; padding: 20px; }
          .header { border-bottom: 2px solid #0057A8; padding-bottom: 15px; }
          h1 { color: #0057A8; margin: 0; }
          .score { display: inline-block; padding: 8px 12px; border-radius: 4px; font-weight: bold; }
          .score.green { background: #4caf50; color: white; }
          .score.orange { background: #ff9800; color: white; }
          .score.red { background: #f44336; color: white; }
          .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
          .meta-item { background: #333; padding: 12px; border-radius: 4px; }
          .button { display: inline-block; background: #0057A8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📝 Новая статья на ревью</h1>
          </div>

          <h2>${payload.title}</h2>

          <div class="meta">
            <div class="meta-item">
              <strong>🔑 Ключевик:</strong> ${payload.keyword}
            </div>
            <div class="meta-item">
              <strong>📊 SEO Оценка:</strong>
              <span class="score ${scoreColor}">${payload.seoScore}/100</span>
            </div>
            <div class="meta-item">
              <strong>📏 Плотность:</strong> ${payload.keywordDensity.toFixed(2)}%
            </div>
            <div class="meta-item">
              <strong>📄 Слов:</strong> EN: ${payload.wordCount}${payload.ruWordCount ? ', RU: ' + payload.ruWordCount : ''}${payload.heWordCount ? ', HE: ' + payload.heWordCount : ''}
            </div>
          </div>

          <a href="${payload.previewUrl}" class="button">👁️ Превью на сайте</a>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `📝 Новая статья: ${payload.title}`,
      html: htmlContent
    });

    console.log(`✓ Email sent for: ${payload.title}`);
    return true;
  } catch (error) {
    console.error(`⚠️ Email failed for ${payload.title}:`, error);
    return false;  // fail silently
  }
}
```

### 2. sendTelegramReview

```typescript
// seo/pipeline/notifier.ts
interface TelegramPayload {
  postId: string;
  title: string;
  keyword: string;
  seoScore: number;
  previewUrl: string;
}

export async function sendTelegramReview(payload: TelegramPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const message = `
📝 *Новая статья на ревью*

*Заголовок:* ${payload.title}
*Ключевик:* \`${payload.keyword}\`
*SEO Оценка:* ${payload.seoScore}/100

Выберите действие:
  `.trim();

  const inlineKeyboard = {
    inline_keyboard: [
      [
        {
          text: '✅ Одобрить',
          callback_data: `approve_${payload.postId}`
        },
        {
          text: '❌ Отклонить',
          callback_data: `reject_${payload.postId}`
        }
      ],
      [
        {
          text: '✏️ Редактировать',
          callback_data: `edit_${payload.postId}`
        },
        {
          text: '👁️ Превью',
          url: payload.previewUrl
        }
      ]
    ]
  };

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
        reply_markup: inlineKeyboard
      })
    });

    if (!response.ok) throw new Error('Telegram API error');
    console.log(`✓ Telegram notification sent for: ${payload.title}`);
    return true;
  } catch (error) {
    console.error(`⚠️ Telegram failed for ${payload.title}:`, error);
    return false;  // fail silently
  }
}
```

### 3. sendPublicAnnouncement

```typescript
// seo/pipeline/notifier.ts
interface AnnouncementPayload {
  title: string;
  keyword: string;
  postUrl: string;
}

export async function sendPublicAnnouncement(payload: AnnouncementPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const publicChatId = process.env.TELEGRAM_PUBLIC_CHAT_ID;

  const message = `
🌟 *Новая статья в блоге!*

📝 ${payload.title}

🔗 [Читать полностью](${payload.postUrl})
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: publicChatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) throw new Error('Telegram API error');
    console.log(`✓ Public announcement sent for: ${payload.title}`);
    return true;
  } catch (error) {
    console.error(`⚠️ Public announcement failed:`, error);
    return false;
  }
}
```

### 4. Обработка Telegram callback_query

```typescript
// /api/telegram/webhook route
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const update = await request.json();

  // Обработка callback_query (нажатие кнопки)
  if (update.callback_query) {
    const { callback_data, from } = update.callback_query;
    const [action, postId] = callback_data.split('_');

    try {
      switch (action) {
        case 'approve':
          await prisma.blogPost.update({
            where: { id: postId },
            data: { status: 'approved' }
          });
          console.log(`✓ Post ${postId} approved by ${from.username}`);
          break;

        case 'reject':
          await prisma.blogPost.update({
            where: { id: postId },
            data: { status: 'rejected' }
          });
          console.log(`✓ Post ${postId} rejected by ${from.username}`);
          break;

        case 'edit':
          // Отправить ссылку на редактор
          await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            body: JSON.stringify({
              chat_id: from.id,
              text: `✏️ Редактирование: https://semtravel.uz/admin/blog/${postId}/edit`
            })
          });
          break;
      }

      // Подтвердить нажатие кнопки
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
        method: 'POST',
        body: JSON.stringify({
          callback_query_id: update.callback_query.id
        })
      });
    } catch (error) {
      console.error('Error processing callback:', error);
    }
  }

  return NextResponse.json({ ok: true });
}
```

## Интеграция в конвейер

```typescript
// При успешной генерации статьи:
await Promise.all([
  sendArticleEmail({
    title: article.metaTitle.en,
    keyword: research.primaryKeyword,
    seoScore: audit.totalScore,
    keywordDensity: 1.5,
    wordCount: article.wordCount,
    previewUrl: `https://semtravel.uz/admin/blog/${post.id}/preview`
  }),
  sendTelegramReview({
    postId: post.id,
    title: article.metaTitle.en,
    keyword: research.primaryKeyword,
    seoScore: audit.totalScore,
    previewUrl: `https://semtravel.uz/admin/blog/${post.id}/preview`
  })
]);

// При одобрении:
await sendPublicAnnouncement({
  title: post.title.en,
  keyword: post.keyword,
  postUrl: `https://semtravel.uz/blog/${post.slug}`
});
```

## Совет

**Telegram быстрее email для срочных действий.** Используйте его как основной канал ревью, а email — для записи (архива).

## Главный вывод

**Уведомления замыкают цикл между автоматизацией и человеческим контролем.** Система делает работу — вы принимаете решения с телефона.

### Чек-лист уведомлений

- ✅ SMTP настроен (Zoho или альтернатива)
- ✅ HTML шаблон email стилизован
- ✅ Telegram бот создан (@BotFather)
- ✅ Инлайн-кнопки работают (Approve/Reject/Edit/Preview)
- ✅ Callback_query обрабатывается
- ✅ Оба канала — fail silently
- ✅ Тёмная тема в email
- ✅ Цветные индикаторы SEO-оценки
- ✅ Публичный канал для анонсов
- ✅ Логирование всех ошибок
