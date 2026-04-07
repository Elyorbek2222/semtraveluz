import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { DESTINATION_SLUGS } from "@/lib/destinations-data";
import { TOURS } from "@/lib/tours-data";

const BUILD_DATE = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `https://semtravel.uz/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const destinationUrls = DESTINATION_SLUGS.map((slug) => ({
    url: `https://semtravel.uz/destinations/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const tourUrls = TOURS.map((tour) => ({
    url: `https://semtravel.uz/tours/${tour.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    { url: "https://semtravel.uz", lastModified: BUILD_DATE, changeFrequency: "daily", priority: 1 },
    { url: "https://semtravel.uz/tours", lastModified: BUILD_DATE, changeFrequency: "daily", priority: 0.9 },
    { url: "https://semtravel.uz/hotels", lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/visa", lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/transfer", lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://semtravel.uz/about", lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/contact", lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/club", lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: "https://semtravel.uz/privacy", lastModified: BUILD_DATE, changeFrequency: "yearly", priority: 0.3 },
    { url: "https://semtravel.uz/blog", lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.8 },
    ...destinationUrls,
    ...tourUrls,
    ...blogUrls,
  ];
}
