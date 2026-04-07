"use client";

import Link from "next/link";
import { useLang } from "@/lib/language-context";
import type { BlogPost } from "@/lib/blog-data";

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const result: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      result.push(
        <h2 key={key++} className="text-xl font-extrabold text-gray-900 mt-8 mb-3">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      result.push(
        <p key={key++} className="font-bold text-gray-900 my-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      result.push(
        <li key={key++} className="ml-5 list-disc text-gray-700 text-sm leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
        </li>
      );
    } else if (line.startsWith("|") && line.includes("|")) {
      if (!line.includes("---")) {
        const cells = line.split("|").filter((c) => c.trim());
        const isHeader = lines[i + 1]?.includes("---");
        result.push(
          <tr key={key++} className={isHeader ? "bg-primary/10" : "border-t border-gray-100"}>
            {cells.map((cell, ci) =>
              isHeader ? (
                <th key={ci} className="px-3 py-2 text-left text-xs font-bold text-gray-700">
                  {cell.trim()}
                </th>
              ) : (
                <td key={ci} className="px-3 py-2 text-sm text-gray-700">
                  {cell.trim()}
                </td>
              )
            )}
          </tr>
        );
        if (isHeader) i++;
      }
    } else if (line.startsWith("---")) {
      result.push(<hr key={key++} className="my-6 border-gray-200" />);
    } else if (line.trim()) {
      result.push(
        <p key={key++} className="text-gray-700 text-sm leading-relaxed my-2"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
        />
      );
    }
  }

  // Wrap table rows
  const finalResult: React.ReactNode[] = [];
  let tableRows: React.ReactNode[] = [];
  result.forEach((node, idx) => {
    if ((node as React.ReactElement)?.type === "tr") {
      tableRows.push(node);
      if (idx === result.length - 1 || (result[idx + 1] as React.ReactElement)?.type !== "tr") {
        finalResult.push(
          <div key={`table-${idx}`} className="overflow-x-auto my-4">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-left">
              <tbody>{tableRows}</tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
    } else {
      finalResult.push(node);
    }
  });

  return finalResult;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const { lang } = useLang();
  const isUz = lang === "uz";

  const title = isUz ? post.titleUz : post.titleRu;
  const content = isUz ? post.contentUz : post.contentRu;
  const tags = isUz ? post.tagsUz : post.tagsRu;
  const category = isUz ? post.categoryUz : post.categoryRu;
  const readTime = isUz ? post.readTimeUz : post.readTimeRu;

  const formattedDate = new Date(post.date).toLocaleDateString(
    isUz ? "uz-UZ" : "ru-RU",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
          <img
            src={post.image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,30,70,0.65)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-12">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "#0057A8", color: "#fff" }}
              >
                {category}
              </span>
              <span className="text-white/60 text-xs">{formattedDate}</span>
              <span className="text-white/60 text-xs">· ⏱ {readTime}</span>
            </div>
            <h1
              className="text-white font-black leading-tight"
              style={{ fontSize: "clamp(22px, 4vw, 38px)" }}
            >
              {title}
            </h1>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
            {renderMarkdown(content)}
          </div>

          {/* INLINE DESTINATION CTA */}
          <div className="rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "#F0F7FF", border: "1.5px solid #BFDBFE" }}>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-0.5">
                {isUz
                  ? `${tags[0]} ga tur bron qilmoqchimisiz?`
                  : `Хотите забронировать тур в ${tags[0]}?`}
              </p>
              <p className="text-xs text-gray-500">
                {isUz ? "SEM Travel — eng arzon narxlar kafolati" : "SEM Travel — гарантия лучшей цены"}
              </p>
            </div>
            <a
              href="/tours"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white"
              style={{ background: "#0057A8" }}
            >
              {isUz ? "Turlarni ko'rish →" : "Смотреть туры →"}
            </a>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: "#E0F2FE", color: "#0369A1" }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-6 mb-8 text-center"
            style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
          >
            <p className="text-white font-extrabold text-lg mb-1">
              {isUz ? "Tur bron qilmoqchimisiz?" : "Хотите забронировать тур?"}
            </p>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
              {isUz ? "Tur narxini bilib oling — 15 daqiqada javob!" : "Подберём тур — ответим за 15 минут!"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
                style={{ background: "#25D366", color: "#fff" }}>
                💬 WhatsApp
              </a>
              <a href="https://t.me/semtravel" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
                style={{ background: "#229ED9", color: "#fff" }}>
                ✈️ Telegram
              </a>
              <a href="tel:+998712755555"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}>
                📞 +998 71 275-55-55
              </a>
            </div>
          </div>

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm pb-6" style={{ color: "#6B7280" }}>
            <Link href="/" style={{ color: "#0057A8" }}>{isUz ? "Bosh sahifa" : "Главная"}</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#0057A8" }}>Blog</Link>
            <span>/</span>
            <span className="truncate">{title}</span>
          </div>
        </div>
      </div>
    </>
  );
}
