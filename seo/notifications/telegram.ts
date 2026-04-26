/**
 * Telegram Bot Integration
 * Send notifications to admin for blog approval workflow
 */

import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const ADMIN_TELEGRAM_CHAT_ID = process.env.ADMIN_TELEGRAM_CHAT_ID || '';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

interface BlogPostNotification {
  id: string;
  slug: string;
  title: string;
  keyword: string;
  seoScore: number;
  wordCount: number;
}

/**
 * Send blog post to admin for review via Telegram
 */
export async function notifyAdminBlogPostReview(post: BlogPostNotification) {
  if (!TELEGRAM_BOT_TOKEN || !ADMIN_TELEGRAM_CHAT_ID) {
    console.warn('[TELEGRAM] Bot token or chat ID not configured');
    return false;
  }

  const message = `
📝 *Yangi Blog Post Tekshiruv Uchun*

*Sarlavha:* ${post.title}
*Kalit So'z:* ${post.keyword}
*SEO Ball:* ${post.seoScore}/100
*So'z Soni:* ${post.wordCount}

*Post ID:* \`${post.id}\`

👇 Quyidagi tugmalardan birini bosing:
`;

  try {
    const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: ADMIN_TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Tasdiqlash', callback_data: `approve_${post.id}` },
            { text: '❌ Rad Etish', callback_data: `reject_${post.id}` },
          ],
          [
            { text: '🔍 Ko\'rish', url: `https://semtravel.uz/blog/${post.slug}` },
          ],
        ],
      },
    });

    console.log('[TELEGRAM] Notification sent:', response.data.ok);
    return response.data.ok;
  } catch (error) {
    console.error('[TELEGRAM ERROR]', error);
    return false;
  }
}

/**
 * Send custom message to admin
 */
export async function sendAdminMessage(text: string, parseMode: 'Markdown' | 'HTML' = 'Markdown') {
  if (!TELEGRAM_BOT_TOKEN || !ADMIN_TELEGRAM_CHAT_ID) {
    return false;
  }

  try {
    const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: ADMIN_TELEGRAM_CHAT_ID,
      text,
      parse_mode: parseMode,
    });

    return response.data.ok;
  } catch (error) {
    console.error('[TELEGRAM ERROR]', error);
    return false;
  }
}

/**
 * Handle Telegram callback query (button clicks)
 */
export async function handleTelegramCallback(
  callbackQueryId: string,
  data: string,
  userId: number
) {
  // Parse callback data format: "approve_POST_ID" or "reject_POST_ID"
  const [action, postId] = data.split('_');

  if (!postId) {
    console.error('[TELEGRAM] Invalid callback data:', data);
    return false;
  }

  try {
    // Answer the callback query (remove loading state)
    await axios.post(`${TELEGRAM_API_URL}/answerCallbackQuery`, {
      callback_query_id: callbackQueryId,
      text: action === 'approve' ? '✅ Post tasdiqlandi' : '❌ Post rad etildi',
      show_alert: false,
    });

    // Process the action
    const result = await processApprovalAction(action, postId, userId);

    return result;
  } catch (error) {
    console.error('[TELEGRAM CALLBACK ERROR]', error);
    return false;
  }
}

/**
 * Process approval/rejection action
 */
async function processApprovalAction(action: string, postId: string, userId: number) {
  try {
    // Call our API endpoint to approve/reject
    const apiUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const response = await axios.post(
      `${apiUrl}/api/admin/blog/${postId}`,
      {
        action: action === 'approve' ? 'approve' : 'reject',
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.ADMIN_API_TOKEN}`,
        },
      }
    );

    console.log(`[TELEGRAM] Post ${action}d:`, postId);
    return response.data.success;
  } catch (error) {
    console.error('[TELEGRAM APPROVAL ERROR]', error);
    return false;
  }
}

/**
 * Verify Telegram webhook signature
 */
export function verifyTelegramSignature(
  body: string,
  signature: string
): boolean {
  // Telegram uses simple hash verification
  // In production, implement proper signature verification
  return true; // Simplified for now
}
