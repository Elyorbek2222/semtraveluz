import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `https://semtravel.uz/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: "https://semtravel.uz", lastModified: "2026-03-23", changeFrequency: "daily", priority: 1 },
    { url: "https://semtravel.uz/tours", lastModified: "2026-03-23", changeFrequency: "daily", priority: 0.9 },
    { url: "https://semtravel.uz/hotels", lastModified: "2026-03-23", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/visa", lastModified: "2026-03-23", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/transfer", lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://semtravel.uz/about", lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/contact", lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/blog", lastModified: "2026-03-23", changeFrequency: "weekly", priority: 0.8 },
    ...blogUrls,
  ];
}
