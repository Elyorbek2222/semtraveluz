/**
 * Notifications Test Endpoint
 * Manual trigger for testing Telegram and Email
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  sendTelegramReview,
  sendEmailReview,
  sendBlogPostNotification,
  announcePublishedPost,
} from '@/seo/notifications/notify';

// ============================================================================
// Test Payload
// ============================================================================
const TEST_POST = {
  id: 'test-post-123',
  keyword: 'Dubai turlarini',
  seoScore: 82,
  category: 'turlar',
  title: {
    uz: "Dubai'ga 5 kunlik tur — 2025 uchun to'liq yo'riqnoma",
    ru: 'Тур в Дубай на 5 дней — Полное руководство на 2025 год',
    en: '5-Day Dubai Tour — Complete Guide for 2025',
  },
  metaDescription: {
    uz: "Dubai turida nima kutish kerak, qancha narx, qachon borish kerak. Barcha savollarning javoblari.",
    ru: 'Чего ожидать в туре в Дубай, цены, когда ехать. Ответы на все вопросы туристов.',
    en: 'What to expect in a Dubai tour, prices, when to go. Answers to all tourist questions.',
  },
  wordCount: 950,
  languages: 'en,uz,ru',
};

// ============================================================================
// GET — Show Available Tests
// ============================================================================
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Notification Test Endpoint',
    availableTests: [
      {
        endpoint: '/api/notifications/test?type=telegram',
        description: 'Send test Telegram notification',
      },
      {
        endpoint: '/api/notifications/test?type=email',
        description: 'Send test Email notification',
      },
      {
        endpoint: '/api/notifications/test?type=both',
        description: 'Send both Telegram and Email',
      },
      {
        endpoint: '/api/notifications/test?type=announce',
        description: 'Announce published post to public channel',
      },
    ],
    testPost: TEST_POST,
  });
}

// ============================================================================
// POST — Send Test Notifications
// ============================================================================
export async function POST(request: NextRequest) {
  try {
    const type = request.nextUrl.searchParams.get('type') || 'both';
    const results: any = {};

    switch (type) {
      case 'telegram':
        console.log('[TEST] Sending Telegram notification...');
        results.telegram = await sendTelegramReview(TEST_POST);
        break;

      case 'email':
        console.log('[TEST] Sending Email notification...');
        results.email = await sendEmailReview(TEST_POST);
        break;

      case 'both':
        console.log('[TEST] Sending both Telegram and Email...');
        results.notification = await sendBlogPostNotification(TEST_POST);
        break;

      case 'announce':
        console.log('[TEST] Announcing published post...');
        results.announce = await announcePublishedPost(
          TEST_POST,
          'dubai-5-day-tour'
        );
        break;

      default:
        return NextResponse.json(
          { error: `Unknown type: ${type}` },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      type,
      results,
      testPost: TEST_POST,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[TEST NOTIFICATION ERROR]', error);
    return NextResponse.json(
      {
        error: String(error),
        message: 'Notification test failed. Check server logs.',
      },
      { status: 500 }
    );
  }
}
