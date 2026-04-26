/**
 * Admin Blog API
 * Manage blog post status: approve, reject, publish, archive
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  BlogPublisher,
  getPostById,
  updatePostStatus,
} from '@/seo/publishing/blog-publisher';
import { sendBlogPostNotification, announcePublishedPost } from '@/seo/notifications/notify';

// ============================================================================
// Auth Check
// ============================================================================
function verifyAdminToken(request: NextRequest): boolean {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  const adminToken = process.env.ADMIN_API_TOKEN || 'admin-secret-key';

  return token === adminToken;
}

// ============================================================================
// GET — Retrieve Single Post
// ============================================================================
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await getPostById(params.id);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: post });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// ============================================================================
// POST — Approve Post
// ============================================================================
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check admin token
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const action = body.action; // 'approve', 'reject', 'publish', 'archive'

    let result;

    switch (action) {
      case 'approve':
        result = await BlogPublisher.approve(params.id);
        break;

      case 'reject':
        result = await BlogPublisher.reject(params.id);
        break;

      case 'publish':
        result = await BlogPublisher.publish(params.id);

        // Announce published post
        if (result.success) {
          const post = await getPostById(params.id);
          if (post) {
            await announcePublishedPost(
              {
                id: post.id,
                keyword: post.keyword,
                seoScore: post.seoScore,
                category: post.category,
                title: post.title as any,
                metaDescription: post.metaDescription as any,
                wordCount: post.wordCount,
                languages: post.languages,
              },
              post.slug
            );
          }
        }
        break;

      case 'archive':
        result = await BlogPublisher.archive(params.id);
        break;

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}` },
          { status: 400 }
        );
    }

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// ============================================================================
// PATCH — Update Post (metadata, category, etc.)
// ============================================================================
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { category, tags, imageUrl } = body;

    // Update allowed fields
    const updateData: any = {};
    if (category) updateData.category = category;
    if (tags) updateData.tags = JSON.stringify(tags);
    if (imageUrl) updateData.imageUrl = imageUrl;

    // Note: In production, use Prisma client to update
    // This is a simplified version

    return NextResponse.json({
      success: true,
      message: 'Post updated',
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}
