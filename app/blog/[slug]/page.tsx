import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/lib/blog-data";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.titleUz,
    description: post.descUz,
    keywords: [
      ...post.tagsUz,
      ...post.tagsRu,
      "sem travel",
      "sayohat agentligi toshkent",
      "туристическое агентство ташкент",
    ],
    alternates: {
      canonical: `https://semtravel.uz/blog/${slug}`,
      languages: {
        "uz": `https://semtravel.uz/blog/${slug}`,
        "ru": `https://semtravel.uz/blog/${slug}`,
        "x-default": `https://semtravel.uz/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.titleUz,
      description: post.descUz,
      url: `https://semtravel.uz/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 800, height: 500, alt: post.titleUz }],
      locale: "uz_UZ",
      alternateLocale: ["ru_RU"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const postUrl = `https://semtravel.uz/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleUz,
    alternativeHeadline: post.titleRu,
    description: post.descUz,
    abstract: post.descRu,
    url: postUrl,
    image: post.image,
    inLanguage: ["uz", "ru"],
    datePublished: post.date,
    dateModified: post.date,
    keywords: [...post.tagsUz, ...post.tagsRu].join(", "),
    author: {
      "@type": "Organization",
      name: "SEM Travel",
      url: "https://semtravel.uz",
    },
    publisher: {
      "@type": "Organization",
      name: "SEM Travel",
      logo: {
        "@type": "ImageObject",
        url: "https://semtravel.uz/logo-color.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://semtravel.uz" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://semtravel.uz/blog" },
      { "@type": "ListItem", position: 3, name: post.titleUz, item: postUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
