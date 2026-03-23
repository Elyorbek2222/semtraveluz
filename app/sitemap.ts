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
    { url: "https://semtravel.uz", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: "https://semtravel.uz/tours", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: "https://semtravel.uz/hotels", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/visa", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/transfer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://semtravel.uz/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogUrls,
  ];
}
