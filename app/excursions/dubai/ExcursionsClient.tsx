"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
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
              ? "Dubayda 6 ta tekinga joy va 6 ta eng zo'r ekskursiya. Barcha narxlar va maslahatlar bilan."
              : "6 бесплатных достопримечательностей и 6 лучших платных экскурсий в Дубае. Все цены и советы."}
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        {/* ── FREE EXCURSIONS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {isUz ? "🎉 6 ta Tekinga Ekskursiya" : "🎉 6 Бесплатных экскурсий"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isUz
              ? "Hech qanday pul sarflamay eng mashhur joylarda bo'ling."
              : "Посетите самые известные места без затрат. Идеально для семей и туристов с бюджетом."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DUBAI_FREE_EXCURSIONS.map((excursion) => (
              <article
                key={excursion.id}
                className="bg-white rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <div className="relative h-40">
                  <Image
                    src={excursion.image}
                    alt={isUz ? excursion.nameUz : excursion.nameRu}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-white text-xs font-bold" style={{ background: "#10B981" }}>
                    {isUz ? "BEPUL" : "БЕСПЛАТНО"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-extrabold text-gray-900 text-sm mb-2">{isUz ? excursion.nameUz : excursion.nameRu}</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {isUz ? excursion.descUz : excursion.descRu}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#F3F4F6", color: "#6B7280" }}>
                      ⏱️ {isUz ? excursion.durationUz : excursion.durationRu}
                    </span>
                  </div>
                  {excursion.tipsUz && (
                    <p className="text-xs text-gray-500 italic">
                      💡 {isUz ? excursion.tipsUz : excursion.tipsRu}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── PAID EXCURSIONS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            {isUz ? "⭐ 6 ta Eng Zo'r Ekskursiya" : "⭐ 6 лучших платных экскурсий"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isUz
              ? "Dubayning eng taqqoslanuvchi joylariga borish. Juda unutolmas tadbirlar!"
              : "Самые захватывающие и незабываемые экскурсии в Дубае. Стоит каждого доллара!"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DUBAI_PAID_EXCURSIONS.map((excursion) => (
              <article
                key={excursion.id}
                className="bg-white rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <div className="relative h-40">
                  <Image
                    src={excursion.image}
                    alt={isUz ? excursion.nameUz : excursion.nameRu}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-white text-xs font-bold" style={{ background: "#FF6B35" }}>
                    ${excursion.priceUsd}
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-white text-xs font-bold" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <Star size={12} fill="#F5C518" stroke="none" />
                    {isUz ? "TOP" : "ТОП"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-extrabold text-gray-900 text-sm mb-1">{isUz ? excursion.nameUz : excursion.nameRu}</h3>
                  <p className="text-xs text-gray-500 mb-3">
                    <span className="font-semibold text-gray-700">
                      ${excursion.priceUsd}{" "}
                      <span style={{ color: "#9CA3AF" }}>
                        {isUz ? excursion.priceNote : excursion.priceNote?.replace("kishi boshiga", "с человека")}
                      </span>
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {isUz ? excursion.descUz : excursion.descRu}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#F3F4F6", color: "#6B7280" }}>
                      ⏱️ {isUz ? excursion.durationUz : excursion.durationRu}
                    </span>
                  </div>
                  {excursion.tipsUz && (
                    <p className="text-xs text-gray-500 italic mb-3">
                      💡 {isUz ? excursion.tipsUz : excursion.tipsRu}
                    </p>
                  )}
                  <button
                    onClick={() => setBookModal(true)}
                    className="w-full text-xs font-bold px-3 py-1.5 rounded-full text-white transition-all hover:opacity-90"
                    style={{ background: "#FF6B35" }}
                  >
                    {isUz ? "Bron qilish →" : "Забронировать →"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-12">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            {isUz ? "❓ Ko'p so'raladigan savollar" : "❓ Часто задаваемые вопросы"}
          </h2>
          <div className="space-y-2">
            {DUBAI_EXCURSION_FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid #E5E7EB" }}
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-gray-900 pr-3">
                    {isUz ? faq.qUz : faq.qRu}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed">{isUz ? faq.aUz : faq.aRu}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div
          className="rounded-2xl p-6 mb-12 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <div className="text-4xl mb-3">🇦🇪</div>
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Dubai sayohatini boshla!" : "Начните свою поездку в Дубай!"}
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz
              ? "Toshkentdan $522 dan arzon tur paketlari. Parvoz + mehmonxona + nonushta + transfer + sug'urta."
              : "Туры из Ташкента от $522. Перелёт + отель + завтрак + трансфер + страховка включены!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setBookModal(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#FF6B35", color: "#fff" }}
            >
              📩 {isUz ? "Tur narxini bilish" : "Узнать цену тура"}
            </button>
            <a
              href="https://wa.me/998946642222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp
            </a>
            <a
              href="https://t.me/semtravel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              ✈️ Telegram
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
