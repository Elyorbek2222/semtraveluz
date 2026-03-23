"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/lib/language-context";

const destinations = [
  { emoji: "🇹🇷", uz: "Turkiya", ru: "Турция", slug: "turkiya" },
  { emoji: "🇦🇪", uz: "Dubai", ru: "Дубай", slug: "dubai" },
  { emoji: "🇪🇬", uz: "Misr", ru: "Египет", slug: "misr" },
  { emoji: "🇹🇭", uz: "Tailand", ru: "Таиланд", slug: "tailand" },
  { emoji: "🇲🇻", uz: "Maldiv", ru: "Мальдивы", slug: "maldiv" },
  { emoji: "🇬🇷", uz: "Gretsiya", ru: "Греция", slug: "gretsiya" },
  { emoji: "🇮🇩", uz: "Bali", ru: "Бали", slug: "bali" },
  { emoji: "🇪🇸", uz: "Ispaniya", ru: "Испания", slug: "ispaniya" },
];

const tourTypes = [
  { emoji: "🏖️", uz: "Plyaj", ru: "Пляж" },
  { emoji: "🍽️", uz: "All Inclusive", ru: "Всё включено" },
  { emoji: "👨‍👩‍👧", uz: "Oilaviy", ru: "Семейный" },
  { emoji: "💑", uz: "Juftlik", ru: "Для двоих" },
];

export default function ToursClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).tourvisor?.init?.();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)",
          paddingBottom: 80,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            ✈️ {isUz ? "Turlar katalogi" : "Каталог туров"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(26px, 5vw, 46px)", letterSpacing: "-0.5px" }}
          >
            {isUz ? (
              <>
                Toshkentdan{" "}
                <span style={{ color: "#F5C518" }}>eng arzon turlar</span>
              </>
            ) : (
              <>
                Туры из Ташкента{" "}
                <span style={{ color: "#F5C518" }}>по лучшим ценам</span>
              </>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
            {isUz
              ? "50+ mamlakatga tayyor tur paketlar: parvoz + mehmonxona + transfer"
              : "Готовые турпакеты в 50+ стран: перелёт + отель + трансфер"}
          </p>
        </div>
      </section>

      {/* ── FLOATING SEARCH CARD ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6" style={{ marginTop: -60 }}>
        <div
          className="bg-white rounded-2xl p-5"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.14)" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#9CA3AF" }}
          >
            🔍 {isUz ? "Tur qidirish" : "Поиск туров"}
          </p>
          <div className="tv-search-form tv-moduleid-9976360"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        {/* ── DESTINATION FILTERS ── */}
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-700 mb-3">
            {isUz ? "🌍 Yo'nalish bo'yicha" : "🌍 По направлению"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {destinations.map((d) => (
              <button
                key={d.slug}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all active:scale-95"
                style={{
                  background: "#F3F4F6",
                  color: "#374151",
                  border: "1.5px solid #E5E7EB",
                }}
              >
                {d.emoji} {isUz ? d.uz : d.ru}
              </button>
            ))}
          </div>
        </div>

        {/* ── TOUR TYPE FILTERS ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tourTypes.map((t) => (
            <button
              key={t.uz}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all active:scale-95"
              style={{
                background: "#EFF6FF",
                color: "#0057A8",
                border: "1.5px solid #BFDBFE",
              }}
            >
              {t.emoji} {isUz ? t.uz : t.ru}
            </button>
          ))}
        </div>

        {/* ── TOURVISOR HOT TOURS WIDGET ── */}
        <div className="mb-10">
          <div className="mb-4">
            <h2 className="text-xl font-extrabold text-gray-900">
              🔥 {isUz ? "Issiq takliflar" : "Горящие туры"}
            </h2>
          </div>
          <div className="tv-hot-tours tv-moduleid-9989885"></div>
        </div>

        {/* ── TRUST SIGNALS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { emoji: "💰", uz: "Narx kafolati", ru: "Гарантия цены" },
            { emoji: "🔒", uz: "Xavfsiz to'lov", ru: "Безопасная оплата" },
            { emoji: "📞", uz: "24/7 yordam", ru: "Поддержка 24/7" },
            { emoji: "🛂", uz: "Viza yordam", ru: "Помощь с визой" },
          ].map((item) => (
            <div
              key={item.uz}
              className="flex flex-col items-center text-center p-3 rounded-xl"
              style={{ background: "#F0F9FF", border: "1px solid #BAE6FD" }}
            >
              <span className="text-2xl mb-1">{item.emoji}</span>
              <span className="text-xs font-semibold text-gray-700">
                {isUz ? item.uz : item.ru}
              </span>
            </div>
          ))}
        </div>

        {/* ── SEO TEXT BLOCK ── */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
        >
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">
            {isUz
              ? "Toshkentdan tur paketlar — SEM Travel bilan"
              : "Туры из Ташкента — с SEM Travel"}
          </h2>
          {isUz ? (
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>SEM Travel</strong> — 2011 yildan beri Toshkentdan 50+ mamlakatga tur
                paketlar taklif etayotgan ishonchli sayohat agentligi. Turkiya, Dubai, Tailand,
                Misr, Maldiv, Gretsiya va boshqa yo'nalishlarga eng arzon narxlar.
              </p>
              <p>
                Har bir tur paketi <strong>parvoz + mehmonxona + transfer</strong>ni o'z ichiga
                oladi. All Inclusive, plyaj dam olishi, oilaviy turlar va honeymoon paketlar
                mavjud.
              </p>
              <p>
                📞 Bepul maslahat uchun: <strong>+998 71 275-55-55</strong> yoki{" "}
                <strong>+998 94 664-22-22</strong>
              </p>
            </div>
          ) : (
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>SEM Travel</strong> — надёжное туристическое агентство в Ташкенте, с 2011
                года организующее туры в 50+ стран. Лучшие цены на туры в Турцию, Дубай, Таиланд,
                Египет, Мальдивы и Грецию.
              </p>
              <p>
                Каждый турпакет включает <strong>перелёт + отель + трансфер</strong>. Доступны
                туры All Inclusive, пляжный отдых, семейные туры и honeymoon пакеты.
              </p>
              <p>
                📞 Бесплатная консультация: <strong>+998 71 275-55-55</strong> или{" "}
                <strong>+998 94 664-22-22</strong>
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {[
              { uz: "Turkiya turlar", ru: "Туры в Турцию" },
              { uz: "Dubai turlar", ru: "Туры в Дубай" },
              { uz: "Tailand turlar", ru: "Туры в Таиланд" },
              { uz: "Misr turlar", ru: "Туры в Египет" },
              { uz: "All Inclusive", ru: "All Inclusive" },
              { uz: "Oilaviy turlar", ru: "Семейные туры" },
            ].map((tag) => (
              <span
                key={tag.uz}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: "#E0F2FE", color: "#0369A1" }}
              >
                {isUz ? tag.uz : tag.ru}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-6 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Tur topa olmadingizmi?" : "Не нашли подходящий тур?"}
          </h3>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz
              ? "Menejerimiz siz uchun maxsus tur topib beradi — bepul!"
              : "Наш менеджер подберёт тур специально для вас — бесплатно!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/998946642222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp
            </a>
            <a
              href="https://t.me/semtravel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ background: "#229ED9", color: "#fff" }}
            >
              ✈️ Telegram
            </a>
            <a
              href="tel:+998712755555"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              📞 +998 71 275-55-55
            </a>
          </div>
        </div>

        {/* ── BREADCRUMB / BACK ── */}
        <div className="pb-6">
          <Link href="/" className="text-sm font-medium" style={{ color: "#0057A8" }}>
            ← {isUz ? "Bosh sahifaga qaytish" : "Вернуться на главную"}
          </Link>
        </div>
      </div>
    </div>
  );
}
