import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `https://semtraveluz.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: "https://semtraveluz.vercel.app", lastModified: "2026-03-23", changeFrequency: "daily", priority: 1 },
    { url: "https://semtraveluz.vercel.app/tours", lastModified: "2026-03-23", changeFrequency: "daily", priority: 0.9 },
    { url: "https://semtraveluz.vercel.app/hotels", lastModified: "2026-03-23", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtraveluz.vercel.app/visa", lastModified: "2026-03-23", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtraveluz.vercel.app/transfer", lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://semtraveluz.vercel.app/about", lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtraveluz.vercel.app/contact", lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtraveluz.vercel.app/blog", lastModified: "2026-03-23", changeFrequency: "weekly", priority: 0.8 },
    ...blogUrls,
  ];
}
