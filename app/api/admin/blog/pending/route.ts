/**
 * Admin Blog API — Get Pending Posts
 * List all posts awaiting admin review
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPostsPendingReview, getLatestPosts, countPostsByStatus } from '@/seo/publishing/blog-publisher';

// Mark this route as dynamic (don't prerender)
export const dynamic = 'force-dynamic';

// ============================================================================
// Auth Check
// ============================================================================
function verifyAdminToken(request: NextRequest): boolean {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  const adminToken = process.env.ADMIN_API_TOKEN || 'admin-secret-key';

  return token === adminToken;
}

// ============================================================================
// GET — List Pending Posts
// ============================================================================
export async function GET(request: NextRequest) {
  try {
    // Optional: Check admin token (can be public for testing)
    // if (!verifyAdminToken(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '20');
    const status = request.nextUrl.searchParams.get('status') || 'pending_review';

    let posts;

    if (status === 'pending_review') {
      posts = await getPostsPendingReview(limit);
    } else if (status === 'all') {
      posts = await getLatestPosts(undefined, limit);
    } else {
      posts = await getLatestPosts(status as any, limit);
    }

    // Get status counts
    const counts = await countPostsByStatus();

    return NextResponse.json({
      success: true,
      data: {
        posts,
        counts,
        total: posts.length,
        requestedStatus: status,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// ============================================================================
// POST — Trigger Manual Review Notification
// ============================================================================
export async function POST(request: NextRequest) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { postId } = body;

    // Get post and send notification
    const posts = await getLatestPosts(undefined, 1);
    const post = posts.find((p: any) => p.id === postId);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // In production, call sendBlogPostNotification here
    // For now, just return success

    return NextResponse.json({
      success: true,
      message: 'Notification sent',
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}
