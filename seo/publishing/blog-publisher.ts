/**
 * Blog Publisher — Save articles with review workflow
 * Auto-generates slugs, manages status transitions, logs operations
 */

import { prisma } from '@/lib/prisma';

// ============================================================================
// Types
// ============================================================================
export type BlogStatus =
  | 'pending_generation'
  | 'generated'
  | 'pending_review'
  | 'approved'
  | 'published'
  | 'rejected'
  | 'archived';

export interface BlogPostInput {
  title: { uz: string; ru: string; en: string };
  content: { uz: string; ru: string; en: string };
  metaTitle: { uz: string; ru: string; en: string };
  metaDescription: { uz: string; ru: string; en: string };
  keyword: string;
  seoScore: number;
  seoBreakdown?: any;
  wordCount: number;
  category?: string; // "turlar", "mehmonxona", "viza", "blog"
  tags?: string[];
  imageUrl?: string;
}

export interface BlogPublishResult {
  success: boolean;
  blogPostId?: string;
  slug?: string;
  status?: string;
  error?: string;
}

export interface StatusUpdateResult {
  success: boolean;
  postId: string;
  oldStatus: string;
  newStatus: string;
  publishedAt?: Date;
  error?: string;
}

// ============================================================================
// Slug Generation
// ============================================================================
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Remove accents and special chars
    .replace(/[^\w\s-]/g, '')
    // Replace spaces with hyphens
    .replace(/[\s_]+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '')
    // Limit length
    .substring(0, 80);
}

// ============================================================================
// Check Slug Uniqueness
// ============================================================================
async function findUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (await prisma.blogPost.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

// ============================================================================
// Save Blog Post
// ============================================================================
export async function saveBlogPost(
  input: BlogPostInput,
  status: BlogStatus = 'pending_review'
): Promise<BlogPublishResult> {
  try {
    // Generate slug from EN title
    const baseSlug = generateSlug(input.metaTitle.en);
    const slug = await findUniqueSlug(baseSlug);

    // Create blog post
    const blogPost = await prisma.blogPost.create({
      data: {
        slug,
        title: input.title,
        content: input.content,
        metaTitle: input.metaTitle,
        metaDescription: input.metaDescription,
        keyword: input.keyword,
        seoScore: input.seoScore,
        seoBreakdown: input.seoBreakdown,
        wordCount: input.wordCount,
        category: input.category,
        tags: input.tags ? JSON.stringify(input.tags) : null,
        imageUrl: input.imageUrl,
        status,
        languages: 'en,uz,ru',
      },
    });

    // Create generation log
    await prisma.generationLog.create({
      data: {
        blogPostId: blogPost.id,
        action: 'save',
        status: 'success',
        details: {
          slug,
          category: input.category,
          seoScore: input.seoScore,
        },
      },
    });

    return {
      success: true,
      blogPostId: blogPost.id,
      slug: blogPost.slug,
      status: blogPost.status,
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to save blog post: ${String(error)}`,
    };
  }
}

// ============================================================================
// Save with Retry
// ============================================================================
export async function saveBlogPostWithRetry(
  input: BlogPostInput,
  maxRetries: number = 3
): Promise<BlogPublishResult> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await saveBlogPost(input);

      if (result.success) {
        return result;
      }

      lastError = new Error(result.error);
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
    }

    if (attempt < maxRetries) {
      // Exponential backoff
      const delay = Math.pow(2, attempt) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  return {
    success: false,
    error: `Failed after ${maxRetries + 1} attempts: ${lastError?.message}`,
  };
}

// ============================================================================
// Update Post Status
// ============================================================================
export async function updatePostStatus(
  postId: string,
  newStatus: BlogStatus
): Promise<StatusUpdateResult> {
  try {
    // Get current post
    const post = await prisma.blogPost.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return {
        success: false,
        postId,
        oldStatus: 'unknown',
        newStatus,
        error: 'Blog post not found',
      };
    }

    // Validate status transition
    const validTransition = isValidTransition(
      post.status as BlogStatus,
      newStatus
    );

    if (!validTransition) {
      return {
        success: false,
        postId,
        oldStatus: post.status,
        newStatus,
        error: `Invalid transition: ${post.status} → ${newStatus}`,
      };
    }

    // Update status
    const updateData: any = { status: newStatus };

    // Set publishedAt when publishing
    if (newStatus === 'published') {
      updateData.publishedAt = new Date();
    }

    const updated = await prisma.blogPost.update({
      where: { id: postId },
      data: updateData,
    });

    // Log status change
    await prisma.generationLog.create({
      data: {
        blogPostId: postId,
        action: 'publish',
        status: 'success',
        details: {
          oldStatus: post.status,
          newStatus,
          timestamp: new Date().toISOString(),
        },
      },
    });

    return {
      success: true,
      postId,
      oldStatus: post.status,
      newStatus,
      publishedAt: updated.publishedAt,
    };
  } catch (error) {
    return {
      success: false,
      postId,
      oldStatus: 'unknown',
      newStatus,
      error: `Failed to update status: ${String(error)}`,
    };
  }
}

// ============================================================================
// Approve Post
// ============================================================================
export async function approvePost(postId: string): Promise<StatusUpdateResult> {
  return updatePostStatus(postId, 'approved');
}

// ============================================================================
// Reject Post
// ============================================================================
export async function rejectPost(postId: string): Promise<StatusUpdateResult> {
  return updatePostStatus(postId, 'rejected');
}

// ============================================================================
// Publish Post
// ============================================================================
export async function publishPost(postId: string): Promise<StatusUpdateResult> {
  return updatePostStatus(postId, 'published');
}

// ============================================================================
// Archive Post
// ============================================================================
export async function archivePost(postId: string): Promise<StatusUpdateResult> {
  return updatePostStatus(postId, 'archived');
}

// ============================================================================
// Status Transition Validation
// ============================================================================
function isValidTransition(from: BlogStatus, to: BlogStatus): boolean {
  const validTransitions: { [key in BlogStatus]: BlogStatus[] } = {
    pending_generation: ['generated', 'pending_review', 'rejected'],
    generated: ['pending_review', 'rejected'],
    pending_review: ['approved', 'rejected'],
    approved: ['published', 'rejected'],
    published: ['archived', 'rejected'],
    rejected: ['pending_generation', 'archived'],
    archived: ['pending_generation'],
  };

  return validTransitions[from]?.includes(to) || false;
}

// ============================================================================
// Get Post by ID
// ============================================================================
export async function getPostById(postId: string) {
  try {
    return await prisma.blogPost.findUnique({
      where: { id: postId },
      include: {
        logs: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });
  } catch (error) {
    console.error(`Failed to get post ${postId}:`, error);
    return null;
  }
}

// ============================================================================
// Get Posts by Status
// ============================================================================
export async function getPostsByStatus(status: BlogStatus, limit: number = 10) {
  try {
    return await prisma.blogPost.findMany({
      where: { status },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  } catch (error) {
    console.error(`Failed to get posts with status ${status}:`, error);
    return [];
  }
}

// ============================================================================
// Get Posts Pending Review
// ============================================================================
export async function getPostsPendingReview(limit: number = 10) {
  return getPostsByStatus('pending_review', limit);
}

// ============================================================================
// Get Posts Approved
// ============================================================================
export async function getPostsApproved(limit: number = 10) {
  return getPostsByStatus('approved', limit);
}

// ============================================================================
// Get Posts Published
// ============================================================================
export async function getPostsPublished(limit: number = 100) {
  return getPostsByStatus('published', limit);
}

// ============================================================================
// Get Latest Posts
// ============================================================================
export async function getLatestPosts(
  status?: BlogStatus,
  limit: number = 10
) {
  try {
    return await prisma.blogPost.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  } catch (error) {
    console.error('Failed to get latest posts:', error);
    return [];
  }
}

// ============================================================================
// Count Posts by Status
// ============================================================================
export async function countPostsByStatus(): Promise<{
  [key in BlogStatus]?: number;
}> {
  try {
    const statuses: BlogStatus[] = [
      'pending_generation',
      'generated',
      'pending_review',
      'approved',
      'published',
      'rejected',
      'archived',
    ];

    const counts: { [key in BlogStatus]?: number } = {};

    for (const status of statuses) {
      const count = await prisma.blogPost.count({ where: { status } });
      if (count > 0) {
        counts[status] = count;
      }
    }

    return counts;
  } catch (error) {
    console.error('Failed to count posts by status:', error);
    return {};
  }
}

// ============================================================================
// Get Post Analytics
// ============================================================================
export async function getPostAnalytics(days: number = 30) {
  try {
    const since = new Date();
    since.setDate(since.getDate() - days);

    const posts = await prisma.blogPost.findMany({
      where: {
        createdAt: { gte: since },
      },
    });

    const stats = {
      totalGenerated: posts.length,
      avgSeoScore:
        posts.length > 0
          ? Math.round(
              posts.reduce((sum, p) => sum + p.seoScore, 0) / posts.length
            )
          : 0,
      byStatus: {} as { [key: string]: number },
      byCategory: {} as { [key: string]: number },
      byLanguage: {} as { [key: string]: number },
    };

    // By status
    posts.forEach((p) => {
      stats.byStatus[p.status] = (stats.byStatus[p.status] || 0) + 1;
    });

    // By category
    posts.forEach((p) => {
      if (p.category) {
        stats.byCategory[p.category] = (stats.byCategory[p.category] || 0) + 1;
      }
    });

    // By language (all posts have en,uz,ru)
    stats.byLanguage = {
      en: posts.length,
      uz: posts.length,
      ru: posts.length,
    };

    return stats;
  } catch (error) {
    console.error('Failed to get post analytics:', error);
    return null;
  }
}

// ============================================================================
// Delete Post (Archive Alternative)
// ============================================================================
export async function deletePost(postId: string): Promise<boolean> {
  try {
    await prisma.blogPost.update({
      where: { id: postId },
      data: { status: 'archived' },
    });

    await prisma.generationLog.create({
      data: {
        blogPostId: postId,
        action: 'publish',
        status: 'success',
        details: { action: 'archived' },
      },
    });

    return true;
  } catch (error) {
    console.error(`Failed to delete post ${postId}:`, error);
    return false;
  }
}

// ============================================================================
// Export all as a publisher service
// ============================================================================
export const BlogPublisher = {
  save: saveBlogPost,
  saveWithRetry: saveBlogPostWithRetry,
  updateStatus: updatePostStatus,
  approve: approvePost,
  reject: rejectPost,
  publish: publishPost,
  archive: archivePost,
  getById: getPostById,
  getByStatus: getPostsByStatus,
  getPendingReview: getPostsPendingReview,
  getApproved: getPostsApproved,
  getPublished: getPostsPublished,
  getLatest: getLatestPosts,
  countByStatus: countPostsByStatus,
  getAnalytics: getPostAnalytics,
  delete: deletePost,
};
