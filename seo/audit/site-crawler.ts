import axios from "axios";
import * as cheerio from "cheerio";
import { TOURS } from "@/lib/tours-data";
import { DESTINATION_SLUGS } from "@/lib/destinations-data";
import { BLOG_POSTS } from "@/lib/blog-data";

export interface PageAudit {
  url: string;
  title: string | null;
  description: string | null;
  canonical: string | null;
  h1: string[];
  schemaTypes: string[];
  hreflangs: string[];
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  statusCode: number;
  error?: string;
}

const BASE_URL = "https://semtravel.uz";
const SITE_PAGES = [
  "/",
  "/about",
  "/blog",
  "/club",
  "/club/qoidalar",
  "/contact",
  "/excursions/dubai",
  "/hotels",
  "/lounge",
  "/privacy",
  "/tours",
  "/transfer",
  "/visa",
];

export async function crawlSite(): Promise<PageAudit[]> {
  const urls: string[] = [...SITE_PAGES];

  // Add dynamic tour URLs
  TOURS.forEach((tour) => {
    urls.push(`/tours/${tour.slug}`);
  });

  // Add dynamic destination URLs
  DESTINATION_SLUGS.forEach((slug) => {
    urls.push(`/destinations/${slug}`);
  });

  // Add dynamic blog URLs
  BLOG_POSTS.forEach((post) => {
    urls.push(`/blog/${post.slug}`);
  });

  const results: PageAudit[] = [];

  for (const path of urls) {
    try {
      const fullUrl = `${BASE_URL}${path}`;
      const response = await axios.get(fullUrl, {
        timeout: 10000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      });

      const $ = cheerio.load(response.data);

      const title = $("title").text() || null;
      const description =
        $('meta[name="description"]').attr("content") || null;
      const canonical = $('link[rel="canonical"]').attr("href") || null;

      const h1Tags: string[] = [];
      $("h1").each((_, el) => {
        const text = $(el).text().trim();
        if (text) h1Tags.push(text);
      });

      const schemaTypes: string[] = [];
      $('script[type="application/ld+json"]').each((_, el) => {
        try {
          const json = JSON.parse($(el).html() || "{}");
          if (json["@type"]) {
            if (Array.isArray(json["@type"])) {
              schemaTypes.push(...json["@type"]);
            } else {
              schemaTypes.push(json["@type"]);
            }
          }
          if (json["@graph"]) {
            json["@graph"].forEach(
              (item: Record<string, unknown>) => {
                if (item["@type"]) {
                  if (Array.isArray(item["@type"])) {
                    schemaTypes.push(...(item["@type"] as string[]));
                  } else {
                    schemaTypes.push(item["@type"] as string);
                  }
                }
              }
            );
          }
        } catch (_) {
          // Skip malformed JSON
        }
      });

      const hreflangs: string[] = [];
      $('link[rel="alternate"]').each((_, el) => {
        const hreflang = $(el).attr("hreflang");
        if (hreflang) hreflangs.push(hreflang);
      });

      const ogTitle = $('meta[property="og:title"]').attr("content") || null;
      const ogDescription =
        $('meta[property="og:description"]').attr("content") || null;
      const ogImage =
        $('meta[property="og:image"]').attr("content") || null;

      results.push({
        url: fullUrl,
        title,
        description,
        canonical,
        h1: h1Tags,
        schemaTypes: [...new Set(schemaTypes)],
        hreflangs,
        ogTitle,
        ogDescription,
        ogImage,
        statusCode: response.status,
      });

      console.log(`✓ Crawled: ${path} (${response.status})`);
    } catch (error) {
      const errorMessage =
        error instanceof axios.AxiosError
          ? `${error.code} - ${error.message}`
          : "Unknown error";

      results.push({
        url: `${BASE_URL}${path}`,
        title: null,
        description: null,
        canonical: null,
        h1: [],
        schemaTypes: [],
        hreflangs: [],
        ogTitle: null,
        ogDescription: null,
        ogImage: null,
        statusCode: 0,
        error: errorMessage,
      });

      console.log(`✗ Failed: ${path} - ${errorMessage}`);
    }
  }

  return results;
}
