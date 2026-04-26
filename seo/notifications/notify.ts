/**
 * Admin Notifications — Telegram + Email for article review
 * Sends notifications with inline action buttons
 */

import nodemailer from 'nodemailer';

// ============================================================================
// Types
// ============================================================================
export interface BlogPostNotification {
  id: string;
  keyword: string;
  seoScore: number;
  category?: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  metaDescription: {
    uz: string;
    ru: string;
    en: string;
  };
  wordCount: number;
  languages: string;
}

export interface NotificationResult {
  success: boolean;
  method: 'telegram' | 'email' | 'both';
  telegramSent?: boolean;
  emailSent?: boolean;
  error?: string;
  timestamp: Date;
}

// ============================================================================
// Configuration
// ============================================================================
const TELEGRAM_CONFIG = {
  token: process.env.TELEGRAM_BOT_TOKEN || '',
  chatId: process.env.TELEGRAM_CHAT_ID || '',
  publicChatId: process.env.TELEGRAM_PUBLIC_CHAT_ID || '',
};

const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  user: process.env.SMTP_USER || 'admin@semtravel.uz',
  pass: process.env.SMTP_PASS || '',
  from: process.env.ADMIN_EMAIL || 'admin@semtravel.uz',
};

// ============================================================================
// Send Telegram Notification
// ============================================================================
export async function sendTelegramReview(
  post: BlogPostNotification
): Promise<{ success: boolean; error?: string }> {
  if (!TELEGRAM_CONFIG.token || !TELEGRAM_CONFIG.chatId) {
    return {
      success: false,
      error: 'Telegram not configured',
    };
  }

  try {
    const message = formatTelegramMessage(post);
    const markup = formatInlineKeyboard(post.id);

    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.token}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: message,
        reply_markup: markup,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Telegram error: ${String(error)}`,
    };
  }
}

// ============================================================================
// Format Telegram Message
// ============================================================================
function formatTelegramMessage(post: BlogPostNotification): string {
  const scoreColor = post.seoScore >= 75 ? '✅' : post.seoScore >= 65 ? '⚠️' : '❌';

  return `${scoreColor} <b>Yangi maqola tayyorlandi!</b>

<b>Kalit so'z:</b> ${post.keyword}
<b>SEO Ball:</b> ${post.seoScore}/100
<b>Kategoriya:</b> ${post.category || 'Blog'}
<b>Tillar:</b> ${post.languages}
<b>So'z soni:</b> ${post.wordCount}

<b>Sarlavha (EN):</b>
${post.title.en}

<b>Tavsif (EN):</b>
${post.metaDescription.en.substring(0, 100)}...

⏳ <b>Harakatlarni tanlang:</b>`;
}

// ============================================================================
// Format Inline Keyboard
// ============================================================================
function formatInlineKeyboard(
  postId: string
): {
  inline_keyboard: Array<Array<{ text: string; callback_data: string }>>;
} {
  return {
    inline_keyboard: [
      [
        {
          text: '✅ Tasdiqlash',
          callback_data: `approve_${postId}`,
        },
        {
          text: '❌ Rad etish',
          callback_data: `reject_${postId}`,
        },
      ],
      [
        {
          text: '✏️ Tahrir qilish',
          callback_data: `edit_${postId}`,
        },
      ],
    ],
  };
}

// ============================================================================
// Send Email Review
// ============================================================================
export async function sendEmailReview(
  post: BlogPostNotification,
  adminEmail?: string
): Promise<{ success: boolean; error?: string }> {
  if (!EMAIL_CONFIG.user || !EMAIL_CONFIG.pass) {
    return {
      success: false,
      error: 'Email not configured',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_CONFIG.host,
      port: EMAIL_CONFIG.port,
      secure: EMAIL_CONFIG.port === 465,
      auth: {
        user: EMAIL_CONFIG.user,
        pass: EMAIL_CONFIG.pass,
      },
    });

    const htmlContent = formatEmailHtml(post);
    const recipient = adminEmail || EMAIL_CONFIG.from;

    const info = await transporter.sendMail({
      from: EMAIL_CONFIG.from,
      to: recipient,
      subject: `Yangi maqola tayyorlandi: ${post.keyword}`,
      html: htmlContent,
      text: `Yangi maqola: ${post.keyword} (Ball: ${post.seoScore}/100)`,
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Email error: ${String(error)}`,
    };
  }
}

// ============================================================================
// Format Email HTML
// ============================================================================
function formatEmailHtml(post: BlogPostNotification): string {
  const scoreColor =
    post.seoScore >= 75
      ? '#00AA00'
      : post.seoScore >= 65
        ? '#FF9900'
        : '#CC0000';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0057A8; color: white; padding: 20px; border-radius: 5px; }
    .section { margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #0057A8; }
    .score { font-size: 24px; color: ${scoreColor}; font-weight: bold; }
    .buttons { margin-top: 20px; }
    .button {
      display: inline-block;
      padding: 10px 20px;
      margin-right: 10px;
      text-decoration: none;
      border-radius: 5px;
      color: white;
    }
    .approve { background-color: #00AA00; }
    .reject { background-color: #CC0000; }
    .edit { background-color: #FF9900; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📝 Yangi maqola tayyorlandi!</h2>
    </div>

    <div class="section">
      <h3>Kalit so'z:</h3>
      <p><strong>${post.keyword}</strong></p>
    </div>

    <div class="section">
      <h3>SEO Balli:</h3>
      <p><span class="score">${post.seoScore}/100</span></p>
    </div>

    <div class="section">
      <h3>Ma'lumotlar:</h3>
      <ul>
        <li><strong>Kategoriya:</strong> ${post.category || 'Blog'}</li>
        <li><strong>Tillar:</strong> ${post.languages}</li>
        <li><strong>So'z soni:</strong> ${post.wordCount}</li>
      </ul>
    </div>

    <div class="section">
      <h3>Sarlavha (EN):</h3>
      <p>${post.title.en}</p>
    </div>

    <div class="section">
      <h3>Tavsif (EN):</h3>
      <p>${post.metaDescription.en}</p>
    </div>

    <div class="buttons">
      <h3>Harakatlar:</h3>
      <a href="https://semtravel.uz/admin/blog/${post.id}/approve" class="button approve">✅ Tasdiqlash</a>
      <a href="https://semtravel.uz/admin/blog/${post.id}/reject" class="button reject">❌ Rad etish</a>
      <a href="https://semtravel.uz/admin/blog/${post.id}/edit" class="button edit">✏️ Tahrir qilish</a>
    </div>
  </div>
</body>
</html>`;
}

// ============================================================================
// Send Notification (Telegram + Email Fallback)
// ============================================================================
export async function sendBlogPostNotification(
  post: BlogPostNotification
): Promise<NotificationResult> {
  const timestamp = new Date();
  let telegramSent = false;
  let emailSent = false;
  let error = '';

  // Try Telegram first (faster)
  try {
    const telegramResult = await sendTelegramReview(post);
    if (telegramResult.success) {
      telegramSent = true;
    } else {
      error += `Telegram: ${telegramResult.error || 'Unknown error'}; `;
    }
  } catch (err) {
    error += `Telegram exception: ${String(err)}; `;
  }

  // Try Email as fallback
  try {
    const emailResult = await sendEmailReview(post);
    if (emailResult.success) {
      emailSent = true;
    } else {
      error += `Email: ${emailResult.error || 'Unknown error'}`;
    }
  } catch (err) {
    error += `Email exception: ${String(err)}`;
  }

  // Determine success
  const success = telegramSent || emailSent;
  const method: 'telegram' | 'email' | 'both' =
    telegramSent && emailSent ? 'both' : telegramSent ? 'telegram' : 'email';

  return {
    success,
    method,
    telegramSent,
    emailSent,
    error: error.length > 0 ? error.trim() : undefined,
    timestamp,
  };
}

// ============================================================================
// Announce Approved Post to Public Channel
// ============================================================================
export async function announcePublishedPost(
  post: BlogPostNotification,
  slug: string
): Promise<{ success: boolean; error?: string }> {
  if (!TELEGRAM_CONFIG.publicChatId || !TELEGRAM_CONFIG.token) {
    return {
      success: false,
      error: 'Public Telegram channel not configured',
    };
  }

  try {
    const message = `🚀 <b>Yangi maqola chiqdi!</b>

📝 <b>${post.keyword}</b>

${post.metaDescription.uz || post.metaDescription.en}

🔗 <a href="https://semtravel.uz/blog/${slug}">Maqolani o'qish</a>`;

    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.token}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.publicChatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Failed to announce: ${String(error)}`,
    };
  }
}

// ============================================================================
// Handle Telegram Callback
// ============================================================================
export async function handleTelegramCallback(
  callbackData: string
): Promise<{ success: boolean; action?: string; postId?: string }> {
  const [action, postId] = callbackData.split('_');

  if (!action || !postId) {
    return { success: false };
  }

  return {
    success: true,
    action,
    postId,
  };
}

// ============================================================================
// Log Notification
// ============================================================================
export async function logNotification(
  postId: string,
  result: NotificationResult
) {
  const message =
    `Notification sent via ${result.method}` +
    (result.error ? ` with error: ${result.error}` : '');

  console.log(`[NOTIFY] ${postId}: ${message}`);

  // Could also save to database for audit trail
  return {
    postId,
    method: result.method,
    success: result.success,
    timestamp: result.timestamp,
  };
}
