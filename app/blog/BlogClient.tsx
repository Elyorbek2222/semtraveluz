"use client";

import Link from "next/link";
import { useLang } from "@/lib/language-context";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section
        style={{ background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)", paddingBottom: 80 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=60')",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15,
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
            📝 {isUz ? "SEM Travel Blog" : "Блог SEM Travel"}
          </div>
          <h1 className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(26px, 5vw, 46px)" }}>
            {isUz ? "Sayohat bo'yicha maqolalar" : "Статьи о путешествиях"}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 520, margin: "0 auto" }}>
            {isUz
              ? "Maslahatlar, qo'llanmalar va eng yaxshi yo'nalishlar haqida foydali maqolalar"
              : "Полезные статьи с советами, инструкциями и лучшими направлениями для путешествий"}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={isUz ? post.titleUz : post.titleRu}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "#0057A8", color: "#fff" }}>
                  {isUz ? post.categoryUz : post.categoryRu}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "#94A3B8" }}>
                  <span>{new Date(post.date).toLocaleDateString(isUz ? "uz-UZ" : "ru-RU", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span>·</span>
                  <span>⏱ {isUz ? post.readTimeUz : post.readTimeRu}</span>
                </div>
                <h2 className="font-extrabold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors"
                  style={{ fontSize: 15 }}>
                  {isUz ? post.titleUz : post.titleRu}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4 line-clamp-3">
                  {isUz ? post.descUz : post.descRu}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all"
                  style={{ color: "#0057A8" }}>
                  {isUz ? "O'qish →" : "Читать →"}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">
            {isUz ? "SEM Travel blog — sayohat ixlosmandlari uchun" : "Блог SEM Travel — для любителей путешествий"}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isUz
              ? "SEM Travel blogida O'zbekistondan xorijiy mamlakatlarga sayohat qilmoqchi bo'lgan turistlar uchun foydali maqolalar, maslahatlar va yo'llanmalar joylashtiriladi."
              : "В блоге SEM Travel публикуются полезные статьи для туристов из Узбекистана. Инструкции по оформлению визы, выбору авиабилетов, отелей и планированию поездки."}
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}>
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Tur bron qilmoqchimisiz?" : "Хотите забронировать тур?"}
          </h3>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz ? "Menejerimiz siz uchun eng yaxshi turni topib beradi!" : "Менеджер подберёт лучший тур специально для вас!"}
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

        <div className="pb-6">
          <Link href="/" className="text-sm font-medium" style={{ color: "#0057A8" }}>
            ← {isUz ? "Bosh sahifaga qaytish" : "Вернуться на главную"}
          </Link>
        </div>
      </div>
    </div>
  );
}
