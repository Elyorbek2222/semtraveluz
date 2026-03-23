import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://semtravel.uz", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: "https://semtravel.uz/tours", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: "https://semtravel.uz/hotels", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/visa", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://semtravel.uz/transfer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://semtravel.uz/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://semtravel.uz/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];
}
