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
    keywords: [...post.tagsUz, "sem travel", "sayohat agentligi toshkent"],
    alternates: { canonical: `https://semtravel.uz/blog/${slug}` },
    openGraph: {
      title: post.titleUz,
      description: post.descUz,
      url: `https://semtravel.uz/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 800, height: 500, alt: post.titleUz }],
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

  return <BlogPostClient post={post} />;
}
