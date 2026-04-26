import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { BLOG_POSTS } from "@/lib/blog-data";
import { DESTINATION_SLUGS } from "@/lib/destinations-data";
import { TOURS } from "@/lib/tours-data";

const BUILD_DATE = new Date().toISOString();
const SITE_URL = "https://semtravel.uz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static blog posts
  const staticBlogUrls = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog posts from database (auto-generated)
  let dynamicBlogUrls: MetadataRoute.Sitemap = [];

  // Skip database queries if configured (IPv6 connectivity issues with Supabase)
  if (process.env.SKIP_BLOG_DATABASE !== "true") {
    try {
      const publishedPosts = await prisma.blogPost.findMany({
        where: { status: "published" },
        select: { slug: true, updatedAt: true },
      });

      dynamicBlogUrls = publishedPosts.map((post: any) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    } catch (error) {
      console.warn("Failed to fetch published blog posts for sitemap:", error);
    }
  }

  // Destinations
  const destinationUrls = DESTINATION_SLUGS.map((slug) => ({
    url: `${SITE_URL}/destinations/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Tours
  const tourUrls = TOURS.map((tour) => ({
    url: `${SITE_URL}/tours/${tour.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Combine all URLs
  const allUrls = [
    { url: SITE_URL, lastModified: BUILD_DATE, changeFrequency: "daily" as const, priority: 1 },
    { url: `${SITE_URL}/tours`, lastModified: BUILD_DATE, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/hotels`, lastModified: BUILD_DATE, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/visa`, lastModified: BUILD_DATE, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/lounge`, lastModified: BUILD_DATE, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/transfer`, lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/club`, lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/club/qoidalar`, lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: BUILD_DATE, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE_URL}/blog`, lastModified: BUILD_DATE, changeFrequency: "weekly" as const, priority: 0.8 },
    ...destinationUrls,
    ...tourUrls,
    ...staticBlogUrls,
    ...dynamicBlogUrls, // Add generated posts
  ];

  return allUrls;
}
