/**
 * Telegram Webhook Handler
 * Receives button callbacks from Telegram inline keyboard
 */

import { NextRequest, NextResponse } from 'next/server';
import { BlogPublisher } from '@/seo/publishing/blog-publisher';

// ============================================================================
// Telegram Message Type
// ============================================================================
interface TelegramUpdate {
  update_id: number;
  callback_query?: {
    id: string;
    from: {
      id: number;
      username: string;
      first_name: string;
    };
    chat_instance: string;
    data: string; // approve_postId, reject_postId, edit_postId
    message?: {
      message_id: number;
      chat: {
        id: number;
      };
    };
  };
}

// ============================================================================
// POST Handler - Receive Telegram Webhooks
// ============================================================================
export async function POST(request: NextRequest) {
  try {
    const body: TelegramUpdate = await request.json();

    // Verify Telegram token in query
    const token = request.nextUrl.searchParams.get('token');
    if (token !== process.env.TELEGRAM_BOT_TOKEN) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Handle callback query (button click)
    if (body.callback_query) {
      const { id: callbackId, data, from } = body.callback_query;
      const [action, postId] = data.split('_');

      let result;
      let responseText = '';

      switch (action) {
        case 'approve':
          result = await BlogPublisher.approve(postId);
          responseText = result.success
            ? '✅ Maqola tasdiqlandi!'
            : `❌ Xato: ${result.error}`;
          break;

        case 'reject':
          result = await BlogPublisher.reject(postId);
          responseText = result.success
            ? '❌ Maqola rad etildi'
            : `❌ Xato: ${result.error}`;
          break;

        case 'edit':
          responseText = `✏️ Tahrir: https://semtravel.uz/admin/blog/${postId}/edit`;
          break;

        default:
          responseText = '❓ Noma\'lum amal';
      }

      // Acknowledge callback (remove loading indicator)
      await acknowledgeCallback(callbackId, responseText);

      // Log action
      console.log(`[TELEGRAM] ${from.username} → ${action} ${postId}`);

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[TELEGRAM WEBHOOK ERROR]', error);
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// ============================================================================
// Acknowledge Callback Query
// ============================================================================
async function acknowledgeCallback(
  callbackId: string,
  notificationText: string
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    console.warn('Telegram token not configured');
    return;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/answerCallbackQuery`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          callback_query_id: callbackId,
          text: notificationText,
          show_alert: false, // Toast notification, not alert
        }),
      }
    );

    if (!response.ok) {
      console.warn('Failed to acknowledge callback:', response.statusText);
    }
  } catch (error) {
    console.error('Callback acknowledgment error:', error);
  }
}

// ============================================================================
// GET Handler - Verify Webhook
// ============================================================================
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Telegram webhook endpoint is active',
    timestamp: new Date().toISOString(),
  });
}
