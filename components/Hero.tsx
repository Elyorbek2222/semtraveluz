"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/language-context";

const popularDestinationsUz = ["🇹🇷 Turkiya", "🇦🇪 Dubai", "🇪🇬 Misr", "🇹🇭 Tailand", "🇲🇻 Maldiv", "🇬🇷 Gretsiya"];
const popularDestinationsRu = ["🇹🇷 Турция", "🇦🇪 Дубай", "🇪🇬 Египет", "🇹🇭 Таиланд", "🇲🇻 Мальдивы", "🇬🇷 Греция"];

export default function Hero() {
  const { t, lang } = useLang();
  const popularDestinations = lang === "uz" ? popularDestinationsUz : popularDestinationsRu;


  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 420, background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)", paddingBottom: 80 }}>
        {/* Background image overlay */}
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=70"
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

          {/* Popular destinations */}
          <div className="flex flex-wrap gap-2">
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{t.hero.popular}</span>
            {popularDestinations.map((dest) => (
              <span key={dest} className="text-sm font-medium text-white px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
                {dest}
              </span>
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-8">
        <ChevronDown size={24} className="animate-bounce" style={{ color: "#9CA3AF" }} />
      </div>

    </>
  );
}
