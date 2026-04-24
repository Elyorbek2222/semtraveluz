"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Star, MapPin, Clock, Heart } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { DUBAI_FREE_EXCURSIONS, DUBAI_PAID_EXCURSIONS, DUBAI_EXCURSION_FAQS } from "@/lib/excursions-data";
import LeadModal from "@/components/LeadModal";

type FilterType = "all" | "free" | "paid" | "family" | "adventure";

export default function ExcursionsClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookModal, setBookModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const allExcursions = [...DUBAI_FREE_EXCURSIONS, ...DUBAI_PAID_EXCURSIONS];
  const totalFree = DUBAI_FREE_EXCURSIONS.length;
  const totalPaid = DUBAI_PAID_EXCURSIONS.length;
  const minPrice = Math.min(...DUBAI_PAID_EXCURSIONS.map(e => e.priceUsd || 0));
  const avgRating = (allExcursions.reduce((sum, e) => sum + (e.rating || 0), 0) / allExcursions.length).toFixed(1);

  const getFilteredExcursions = () => {
    let filtered = allExcursions;
    if (activeFilter === "free") filtered = DUBAI_FREE_EXCURSIONS;
    if (activeFilter === "paid") filtered = DUBAI_PAID_EXCURSIONS;
    if (activeFilter === "family") filtered = allExcursions.filter(e => e.bestFor?.includes("Oila"));
    if (activeFilter === "adventure") filtered = allExcursions.filter(e => e.bestFor?.includes("Sarguzasht"));
    return filtered;
  };

  const toggleWishlist = (id: string) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) newWishlist.delete(id);
    else newWishlist.add(id);
    setWishlist(newWishlist);
  };

  const filteredExcursions = getFilteredExcursions();

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
        {/* ── STATS BAR ── */}
        <div className="mb-8 flex flex-wrap gap-6 justify-center text-center">
          <div>
            <div className="text-2xl font-black" style={{ color: "#0057A8" }}>{totalFree + totalPaid}</div>
            <p className="text-xs text-gray-600">{isUz ? "Ekskursiya" : "Экскурсий"}</p>
          </div>
          <div>
            <div className="text-2xl font-black" style={{ color: "#10B981" }}>{totalFree}</div>
            <p className="text-xs text-gray-600">{isUz ? "Bepul" : "Бесплатные"}</p>
          </div>
          <div>
            <div className="text-2xl font-black" style={{ color: "#FF6B35" }}>${minPrice}</div>
            <p className="text-xs text-gray-600">{isUz ? "dan boshlanadi" : "от"}</p>
          </div>
          <div>
            <div className="text-2xl font-black flex items-center justify-center gap-1">
              <Star size={20} fill="#F5C518" stroke="#F5C518" />
              {avgRating}
            </div>
            <p className="text-xs text-gray-600">{isUz ? "o'rtacha" : "В среднем"}</p>
          </div>
        </div>

        {/* ── FILTER TABS ── */}
        <div className="mb-8 flex gap-2 flex-wrap justify-center">
          {[
            { key: "all" as const, label: isUz ? "Barchasi" : "Все" },
            { key: "free" as const, label: isUz ? "Bepul" : "Бесплатные" },
            { key: "paid" as const, label: isUz ? "Pullik" : "Платные" },
            { key: "family" as const, label: isUz ? "👨‍👩‍👧 Oila" : "👨‍👩‍👧 Семья" },
            { key: "adventure" as const, label: isUz ? "🏄 Sarguzasht" : "🏄 Приключение" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                activeFilter === key
                  ? "text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:border-gray-400"
              }`}
              style={activeFilter === key ? { background: "#0057A8" } : {}}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── FILTERED EXCURSIONS ── */}
        {filteredExcursions.length > 0 ? (
          <>
            {/* FREE EXCURSIONS SECTION */}
            {(activeFilter === "all" || activeFilter === "free") && DUBAI_FREE_EXCURSIONS.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                  {isUz ? "🎉 Tekinga Ekskursiyalar" : "🎉 Бесплатные экскурсии"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isUz
                    ? "Hech qanday pul sarflamay eng mashhur joylarda bo'ling."
                    : "Посетите самые известные места без затрат. Идеально для семей и туристов с бюджетом."}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DUBAI_FREE_EXCURSIONS.filter(e => {
                      if (activeFilter === "all" || activeFilter === "free") return true;
                      if (activeFilter === "family" && e.bestFor?.includes("Oila")) return true;
                      if (activeFilter === "adventure" && e.bestFor?.includes("Sarguzasht")) return true;
                      return false;
                    }).map((excursion) => (
                    <article
                      key={excursion.id}
                      className="bg-white rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 relative"
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
                        <button
                          onClick={() => toggleWishlist(excursion.id)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100 transition-all"
                        >
                          <Heart
                            size={16}
                            fill={wishlist.has(excursion.id) ? "#FF6B35" : "none"}
                            stroke={wishlist.has(excursion.id) ? "#FF6B35" : "#999"}
                          />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-extrabold text-gray-900 text-sm mb-1">{isUz ? excursion.nameUz : excursion.nameRu}</h3>
                        {excursion.highlight && (
                          <p className="text-xs font-semibold mb-2" style={{ color: "#F5C518" }}>
                            ✨ {isUz ? excursion.highlight : excursion.highlight}
                          </p>
                        )}
                        {excursion.rating && (
                          <div className="flex items-center gap-1 mb-2 text-xs">
                            <Star size={12} fill="#F5C518" stroke="#F5C518" />
                            <span className="font-semibold">{excursion.rating}</span>
                            <span className="text-gray-500">({excursion.reviewCount})</span>
                          </div>
                        )}
                        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                          {isUz ? excursion.descUz : excursion.descRu}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock size={12} className="text-gray-500" />
                          <span className="text-xs font-semibold text-gray-600">
                            {isUz ? excursion.durationUz : excursion.durationRu}
                          </span>
                        </div>
                        {excursion.bestFor && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {excursion.bestFor.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-xs px-2 py-1 rounded-full" style={{ background: "#F0F0F0", color: "#666" }}>
                                {isUz ? tag : tag.replace("Oila", "Семья").replace("Yosh turizm", "Молодежь").replace("Fotofanlar", "Фотографы").replace("Juftlik", "Пара").replace("Madaniyat sevgilar", "Культура").replace("Xaridchilar", "Шопинг").replace("Sarguzasht", "Приключение")}
                              </span>
                            ))}
                          </div>
                        )}
                        {excursion.tipsUz && (
                          <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-2 mt-2">
                            💡 {isUz ? excursion.tipsUz : excursion.tipsRu}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : null}

        {/* ── PAID EXCURSIONS SECTION ── */}
        {(activeFilter === "all" || activeFilter === "paid" || activeFilter === "family" || activeFilter === "adventure") && (
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              {isUz ? "⭐ Eng Zo'r Ekskursiyalar" : "⭐ Лучшие платные экскурсии"}
            </h2>
            <p className="text-gray-600 mb-6">
              {isUz
                ? "Dubayning eng taqqoslanuvchi va unutolmas tadbirlar."
                : "Самые захватывающие и незабываемые экскурсии в Дубае. Стоит каждого доллара!"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DUBAI_PAID_EXCURSIONS.filter(e => {
                if (activeFilter === "all" || activeFilter === "paid") return true;
                if (activeFilter === "family") return e.bestFor?.includes("Oila");
                if (activeFilter === "adventure") return e.bestFor?.includes("Sarguzasht");
                return false;
              }).map((excursion) => (
                <article
                  key={excursion.id}
                  className="bg-white rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 relative"
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
                    {excursion.rankPosition && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-white text-xs font-bold" style={{ background: "rgba(0,0,0,0.6)" }}>
                        <Star size={12} fill="#F5C518" stroke="none" />
                        #{excursion.rankPosition}
                      </div>
                    )}
                    <button
                      onClick={() => toggleWishlist(excursion.id)}
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100 transition-all"
                    >
                      <Heart
                        size={16}
                        fill={wishlist.has(excursion.id) ? "#FF6B35" : "none"}
                        stroke={wishlist.has(excursion.id) ? "#FF6B35" : "#999"}
                      />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-extrabold text-gray-900 text-sm flex-1">{isUz ? excursion.nameUz : excursion.nameRu}</h3>
                    </div>
                    {excursion.highlight && (
                      <p className="text-xs font-semibold mb-2" style={{ color: "#F5C518" }}>
                        {isUz ? excursion.highlight : excursion.highlight}
                      </p>
                    )}
                    {excursion.rating && (
                      <div className="flex items-center gap-2 mb-2 text-xs">
                        <div className="flex items-center gap-0.5">
                          <Star size={12} fill="#F5C518" stroke="#F5C518" />
                          <span className="font-semibold">{excursion.rating}</span>
                        </div>
                        <span className="text-gray-500">({excursion.reviewCount})</span>
                      </div>
                    )}
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      ${excursion.priceUsd}{" "}
                      <span style={{ color: "#9CA3AF" }}>
                        {isUz ? excursion.priceNote : excursion.priceNote?.replace("kishi boshiga", "с человека") || "per person"}
                      </span>
                    </p>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      {isUz ? excursion.descUz : excursion.descRu}
                    </p>
                    {excursion.included && excursion.included.length > 0 && (
                      <div className="mb-3 pb-3 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-700 mb-1.5">
                          {isUz ? "✓ Nima kiradi" : "✓ Что включено"}
                        </p>
                        <ul className="space-y-1">
                          {excursion.included.slice(0, 3).map((item, i) => (
                            <li key={i} className="text-xs text-gray-600">
                              • {isUz ? item : item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={12} className="text-gray-500" />
                      <span className="text-xs font-semibold text-gray-600">
                        {isUz ? excursion.durationUz : excursion.durationRu}
                      </span>
                    </div>
                    {excursion.bestFor && excursion.bestFor.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {excursion.bestFor.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-full" style={{ background: "#F0F0F0", color: "#666" }}>
                            {isUz ? tag : tag.replace("Oila", "Семья").replace("Yosh turizm", "Молодежь").replace("Fotofanlar", "Фотографы").replace("Juftlik", "Пара").replace("Madaniyat sevgilar", "Культура").replace("Xaridchilar", "Шопинг").replace("Sarguzasht", "Приключение")}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setBookModal(true)}
                        className="flex-1 text-xs font-bold px-3 py-2 rounded-full text-white transition-all hover:opacity-90"
                        style={{ background: "#FF6B35" }}
                      >
                        {isUz ? "Bron qilish" : "Забронировать"}
                      </button>
                      <a
                        href="https://wa.me/998946642222"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-xs font-bold px-3 py-2 rounded-full transition-all hover:opacity-90"
                        style={{ background: "#25D366", color: "#fff" }}
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ── FAQ ── */}
        {activeFilter === "all" && (
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
        )}

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
