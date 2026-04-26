/**
 * Telegram Webhook Handler
 * Receives messages and callbacks from Telegram
 */

import { NextRequest, NextResponse } from 'next/server';
import { handleTelegramCallback } from '@/seo/notifications/telegram';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const update = await request.json();

    console.log('[TELEGRAM WEBHOOK]', JSON.stringify(update, null, 2));

    // Handle callback query (button clicks)
    if (update.callback_query) {
      const { id: callbackQueryId, data, from } = update.callback_query;

      console.log(`[TELEGRAM] Callback received: ${data} from user ${from.id}`);

      const result = await handleTelegramCallback(callbackQueryId, data, from.id);

      return NextResponse.json({
        success: result,
        message: 'Callback processed',
      });
    }

    // Handle regular messages (future: for commands)
    if (update.message) {
      const { text, from } = update.message;

      console.log(`[TELEGRAM] Message from ${from.id}: ${text}`);

      // Handle /status command
      if (text === '/status') {
        return NextResponse.json({
          success: true,
          message: 'Status command received',
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Update received',
    });
  } catch (error) {
    console.error('[TELEGRAM WEBHOOK ERROR]', error);

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'Telegram webhook is active',
    endpoint: '/api/telegram/webhook',
  });
}
