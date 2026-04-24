"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Star, Clock } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { DUBAI_FREE_EXCURSIONS, DUBAI_PAID_EXCURSIONS, DUBAI_EXCURSION_FAQS } from "@/lib/excursions-data";
import LeadModal from "@/components/LeadModal";

export default function ExcursionsClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookModal, setBookModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=70"
          alt="Dubai"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(0,40,90,0.75) 0%, rgba(0,20,50,0.65) 100%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
          <h1
            className="text-white font-black leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 6vw, 52px)", letterSpacing: "-0.5px", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            {isUz ? (
              <>Dubai Ekskursiyalari — <span style={{ color: "#F5C518" }}>Tekinga va Pullik</span></>
            ) : (
              <>Экскурсии в Дубае — <span style={{ color: "#F5C518" }}>Бесплатные и платные</span></>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, maxWidth: 600, margin: "0 auto 24px" }}>
            {isUz
              ? "Dubayda 5 ta tekinga joy va 8 ta eng zo'r ekskursiya. Barcha narxlar, reytinglar va maslahatlar bilan."
              : "5 бесплатных мест и 8 лучших платных экскурсий в Дубае. Все цены, рейтинги и советы."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setBookModal(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-base transition-all hover:opacity-90"
              style={{ background: "#FF6B35", color: "#fff" }}
            >
              📩 {isUz ? "Dubai turi qilish" : "Забронировать тур"}
            </button>
            <Link
              href="/destinations/dubai"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-base transition-all"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              ← {isUz ? "Dubai sahifasiga" : "К странице Дубая"}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* ── FREE EXCURSIONS ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isUz ? "🎉 Tekinga Ekskursiyalar (5 ta)" : "🎉 Бесплатные экскурсии (5)"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DUBAI_FREE_EXCURSIONS.map((excursion) => (
              <article key={excursion.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative h-40 bg-gray-300">
                  <Image
                    src={excursion.image}
                    alt={isUz ? excursion.nameUz : excursion.nameRu}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 rounded bg-green-500 text-white text-xs font-bold">
                    FREE
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{isUz ? excursion.nameUz : excursion.nameRu}</h3>
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">{isUz ? excursion.descUz : excursion.descRu}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <Clock size={14} />
                    {isUz ? excursion.durationUz : excursion.durationRu}
                  </div>
                  {excursion.rating && (
                    <div className="flex items-center gap-1 text-xs mb-2">
                      <Star size={14} fill="#F5C518" stroke="#F5C518" />
                      <span className="font-semibold">{excursion.rating}</span>
                      <span className="text-gray-500">({excursion.reviewCount})</span>
                    </div>
                  )}
                  {(isUz ? excursion.tipsUz : excursion.tipsRu) && (
                    <p className="text-xs text-gray-600 italic">
                      💡 {isUz ? excursion.tipsUz?.substring(0, 70) : excursion.tipsRu?.substring(0, 70)}...
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── PAID EXCURSIONS ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isUz ? "⭐ Eng Zo'r Ekskursiyalar (8 ta)" : "⭐ Лучшие платные экскурсии (8)"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DUBAI_PAID_EXCURSIONS.map((excursion) => (
              <article key={excursion.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative h-40 bg-gray-300">
                  <Image
                    src={excursion.image}
                    alt={isUz ? excursion.nameUz : excursion.nameRu}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 rounded text-white text-xs font-bold" style={{ background: "#FF6B35" }}>
                    #{excursion.rankPosition}
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 rounded text-white text-xs font-bold" style={{ background: "#FF6B35" }}>
                    ${excursion.priceUsd}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-base">{isUz ? excursion.nameUz : excursion.nameRu}</h3>
                  <p className="text-xs text-gray-600 mb-2">{isUz ? excursion.priceNote : excursion.priceNote?.replace("kishi boshiga", "с человека")}</p>
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">{isUz ? excursion.descUz : excursion.descRu}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <Clock size={14} />
                    {isUz ? excursion.durationUz : excursion.durationRu}
                  </div>
                  {excursion.rating && (
                    <div className="flex items-center gap-1 text-xs mb-3">
                      <Star size={14} fill="#F5C518" stroke="#F5C518" />
                      <span className="font-semibold">{excursion.rating}</span>
                      <span className="text-gray-500">({excursion.reviewCount})</span>
                    </div>
                  )}
                  {excursion.included && excursion.included.length > 0 && (
                    <div className="mb-2 pb-2 border-t border-gray-100 pt-2">
                      <p className="text-xs font-semibold text-gray-700 mb-1">
                        {isUz ? "✓ Kiradi:" : "✓ Включено:"}
                      </p>
                      <ul className="text-xs text-gray-600 space-y-0.5">
                        {excursion.included.slice(0, 2).map((item, i) => (
                          <li key={i}>• {isUz ? item : item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    onClick={() => setBookModal(true)}
                    className="w-full text-xs font-bold px-3 py-2 rounded text-white transition-all hover:opacity-90"
                    style={{ background: "#FF6B35" }}
                  >
                    {isUz ? "Bron qilish" : "Забронировать"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isUz ? "❓ Ko'p so'raladigan savollar" : "❓ Часто задаваемые вопросы"}
          </h2>
          <div className="space-y-2">
            {DUBAI_EXCURSION_FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-gray-900">{isUz ? faq.qUz : faq.qRu}</span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-600">{isUz ? faq.aUz : faq.aRu}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div className="rounded-lg p-8 mb-8 text-center" style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}>
          <h3 className="text-white font-bold text-lg mb-2">
            {isUz ? "Dubai sayohatini boshla!" : "Начните свою поездку в Дубай!"}
          </h3>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.9)" }}>
            {isUz
              ? "Toshkentdan $522 dan arzon tur paketlari. Parvoz + mehmonxona + nonushta + transfer + sug'urta."
              : "Туры из Ташкента от $522. Перелёт + отель + завтрак + трансфер + страховка включены!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setBookModal(true)}
              className="inline-flex items-center justify-center px-6 py-2 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#FF6B35", color: "#fff" }}
            >
              📩 {isUz ? "Tur narxini bilish" : "Узнать цену тура"}
            </button>
            <a
              href="https://wa.me/998946642222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* ── BACK LINK ── */}
        <div className="pb-6">
          <Link href="/destinations/dubai" className="text-sm font-medium" style={{ color: "#0057A8" }}>
            ← {isUz ? "Dubai sahifasiga qaytish" : "Вернуться на страницу Дубая"}
          </Link>
        </div>
      </div>

      {bookModal && (
        <LeadModal
          isUz={isUz}
          title={isUz ? "✈️ Dubai turi" : "✈️ Тур в Дубай"}
          type={isUz ? "Dubai turi" : "Тур в Дубай"}
          source="semtravel.uz/excursions/dubai"
          onClose={() => setBookModal(false)}
        />
      )}
    </div>
  );
}
