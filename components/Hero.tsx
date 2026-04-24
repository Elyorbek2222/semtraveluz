"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/language-context";

const destinations = [
  { slug: "turkiya", flag: "🇹🇷", uz: "Turkiya",  ru: "Турция",   priceFrom: 620 },
  { slug: "dubai",   flag: "🇦🇪", uz: "Dubai",    ru: "Дубай",    priceFrom: 1100 },
  { slug: "misr",    flag: "🇪🇬", uz: "Misr",     ru: "Египет",   priceFrom: 790 },
  { slug: "tailand", flag: "🇹🇭", uz: "Tailand",  ru: "Таиланд",  priceFrom: 1290 },
  { slug: "maldiv",  flag: "🇲🇻", uz: "Maldiv",   ru: "Мальдивы", priceFrom: 2800 },
  { slug: "gretsiya",flag: "🇬🇷", uz: "Gretsiya", ru: "Греция",   priceFrom: 1650 },
];

export default function Hero() {
  const { t, lang } = useLang();
  const isUz = lang === "uz";

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 420, background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)", paddingBottom: 80 }}>
        {/* Background image overlay */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.18 }}
          sizes="100vw"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}>
            🔥 {t.hero.badge}
          </div>

          {/* H1 */}
          <h1 className="text-white font-black leading-tight mb-3" style={{ fontSize: "clamp(28px, 5vw, 52px)", letterSpacing: "-0.5px" }}>
            {t.hero.heading1}<br />
            <span style={{ color: "#F5C518" }}>{t.hero.heading2}</span>
          </h1>

          <p className="mb-6" style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, lineHeight: 1.65, maxWidth: 520 }}>
            {t.hero.sub}
          </p>

          {/* Popular destinations — clickable */}
          <div className="flex flex-wrap gap-2 items-center">
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{t.hero.popular}</span>
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group flex items-center gap-1.5 text-sm font-semibold text-white px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                <span>{dest.flag}</span>
                <span>{isUz ? dest.uz : dest.ru}</span>
                <span className="text-xs opacity-70" style={{ color: "#F5C518" }}>${dest.priceFrom}+</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOATING SEARCH CARD ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6" style={{ marginTop: -60 }}>
        <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.14)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>
            {lang === "uz" ? "🔍 Tur qidirish" : "🔍 Поиск туров"}
          </p>
          {/* Tourvisor Search Widget */}
          <div className="tv-search-form tv-moduleid-9976360" style={{ minHeight: 120 }}></div>
          {/* Tourvisor Search History */}
          <div className="tv-history tv-moduleid-9990306 mt-2" style={{ minHeight: 40 }}></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-8">
        <ChevronDown size={24} className="animate-bounce" style={{ color: "#9CA3AF" }} />
      </div>

    </>
  );
}
