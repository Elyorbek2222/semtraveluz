"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/language-context";
import { DESTINATIONS } from "@/lib/destinations-data";
import CountdownTimer from "@/components/CountdownTimer";
import LeadModal from "@/components/LeadModal";

// Top 4 yo'nalish
const DEST_SLUGS = ["turkiya", "dubai", "misr", "tailand"];

// Deterministik "qolgan o'rinlar" — slugdan hisob, SSR/CSR mismatch yo'q
function spotsLeft(slug: string): number {
  const seeds: Record<string, number> = { turkiya: 4, dubai: 3, misr: 8, tailand: 6 };
  return seeds[slug] ?? 5;
}

function SpotsBadge({ slug }: { slug: string }) {
  const n = spotsLeft(slug);
  const color = n <= 3 ? "#EF4444" : n <= 6 ? "#F59E0B" : "#22C55E";
  const bg    = n <= 3 ? "#FEF2F2" : n <= 6 ? "#FFFBEB" : "#F0FDF4";
  return (
    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ color, background: bg }}>
      🔴 {n} {n === 1 ? "o'rin" : "o'rin"}
    </span>
  );
}

export default function SpecialOffers() {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const [modal, setModal] = useState(false);

  // Countdown — bugungi kun oxiri 23:59:59
  const endsAt = useMemo(() => {
    const d = new Date();
    d.setHours(23, 59, 59, 0);
    return d;
  }, []);

  const destinations = DEST_SLUGS.map((s) => DESTINATIONS[s]).filter(Boolean);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── FLASH PROMO BANNER ── */}
        <div
          className="rounded-2xl p-5 sm:p-6 mb-8 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FF6B35 0%, #E8500A 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.06)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-20 w-32 h-32 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.04)", transform: "translateY(40%)" }} />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-white font-black text-sm tracking-wide uppercase">
                  🔥 {isUz ? "Maxsus taklif" : "Спецпредложение"}
                </span>
                <div className="bg-white/20 rounded-full px-3 py-1">
                  <CountdownTimer endsAt={endsAt} />
                </div>
              </div>
              <h2 className="text-white font-black mb-1" style={{ fontSize: "clamp(16px, 3vw, 22px)" }}>
                🇹🇷 {isUz
                  ? "Turkiya · Antalya · 7 kecha · All Inclusive"
                  : "Турция · Анталья · 7 ночей · All Inclusive"}
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-white/60 line-through text-sm">$1 240</span>
                <span className="text-white font-black text-2xl">$890</span>
                <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  −$350 {isUz ? "chegirma" : "скидка"}
                </span>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => setModal(true)}
                className="px-5 py-3 rounded-xl font-extrabold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background: "#fff", color: "#E8500A" }}
              >
                {isUz ? "Hozir bron →" : "Бронировать →"}
              </button>
              <Link
                href="/destinations/turkiya"
                className="px-5 py-3 rounded-xl font-bold text-sm text-white"
                style={{ background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.35)" }}
              >
                {isUz ? "Batafsil" : "Подробнее"}
              </Link>
            </div>
          </div>
        </div>

        {/* ── DESTINATION CARDS ── */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-gray-900">
            ✈️ {isUz ? "Mashhur yo'nalishlar" : "Популярные направления"}
          </h2>
          <Link href="/tours" className="text-sm font-bold" style={{ color: "#0057A8" }}>
            {isUz ? "Barcha turlar →" : "Все туры →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group rounded-2xl overflow-hidden bg-white block"
              style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.13)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 160 }}>
                <Image
                  src={dest.heroImage}
                  alt={dest.nameUz}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />
                {/* Flag + name overlay */}
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-black text-lg leading-none">
                    {dest.flag} {isUz ? dest.nameUz : dest.nameRu}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-400">{isUz ? "Narxdan" : "От"}</p>
                    <p className="text-xl font-black" style={{ color: "#0057A8" }}>
                      ${dest.priceFrom.toLocaleString()}
                    </p>
                  </div>
                  <SpotsBadge slug={dest.slug} />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>🌙 {dest.nightsRange} {isUz ? "kecha" : "ночей"}</span>
                  <span>{isUz ? dest.bestSeasonUz : dest.bestSeasonRu}</span>
                </div>
                <div
                  className="mt-3 w-full py-2 rounded-xl text-center text-sm font-bold text-white transition-opacity"
                  style={{ background: "#0057A8" }}
                >
                  {isUz ? "Ko'rish →" : "Смотреть →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {modal && (
        <LeadModal
          isUz={isUz}
          title={isUz ? "🇹🇷 Turkiya — Maxsus taklif" : "🇹🇷 Турция — Спецпредложение"}
          type="Maxsus taklif bron"
          source="semtravel.uz / SpecialOffers"
          onClose={() => setModal(false)}
        />
      )}
    </section>
  );
}
