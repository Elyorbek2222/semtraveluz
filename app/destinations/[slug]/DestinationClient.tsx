"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { DESTINATIONS } from "@/lib/destinations-data";
import { TOURS } from "@/lib/tours-data";
import LeadModal from "@/components/LeadModal";

export default function DestinationClient({ slug }: { slug: string }) {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const dest = DESTINATIONS[slug];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookModal, setBookModal] = useState(false);

  const tours = TOURS.filter((t) => t.country === dest.tourCountryMatch);

  // Auto-select country in Tourvisor search widget after it renders
  useEffect(() => {
    if (!dest.tvCountryName) return;
    let attempts = 0;
    const maxAttempts = 30;
    const interval = setInterval(() => {
      attempts++;
      // Tourvisor renders a select with country options inside the widget container
      const container = document.querySelector(".tv-search-form");
      if (!container) {
        if (attempts >= maxAttempts) clearInterval(interval);
        return;
      }
      const selects = container.querySelectorAll("select");
      for (const select of selects) {
        const options = Array.from(select.options);
        const match = options.find(
          (opt) => opt.text.trim().toLowerCase() === dest.tvCountryName.toLowerCase()
        );
        if (match) {
          select.value = match.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          clearInterval(interval);
          return;
        }
      }
      if (attempts >= maxAttempts) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, [dest.tvCountryName]);

  const stats = [
    {
      emoji: "💰",
      labelUz: "Narxdan",
      labelRu: "Цена от",
      value: `$${dest.priceFrom}`,
    },
    {
      emoji: "🌙",
      labelUz: "Kechalar",
      labelRu: "Ночей",
      value: dest.nightsRange,
    },
    {
      emoji: "✈️",
      labelUz: "Parvoz",
      labelRu: "Перелёт",
      value: dest.flightHours,
    },
    {
      emoji: "🗓️",
      labelUz: "Eng yaxshi vaqt",
      labelRu: "Лучший сезон",
      value: isUz ? dest.bestSeasonUz : dest.bestSeasonRu,
    },
    {
      emoji: "📋",
      labelUz: "Viza",
      labelRu: "Виза",
      value: isUz ? dest.visaUz : dest.visaRu,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 400 }}>
        <Image
          src={dest.heroImage}
          alt={dest.nameUz}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(0,40,90,0.75) 0%, rgba(0,20,50,0.65) 100%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            {dest.flag} {isUz ? "Yo'nalish" : "Направление"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 6vw, 52px)", letterSpacing: "-0.5px", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            {isUz ? (
              <>{dest.nameUz}ga tur — <span style={{ color: "#F5C518" }}>${dest.priceFrom} dan</span></>
            ) : (
              <>Туры в {dest.nameRu} — <span style={{ color: "#F5C518" }}>от ${dest.priceFrom}</span></>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, maxWidth: 520, margin: "0 auto 24px" }}>
            {isUz
              ? `Toshkentdan ${dest.nameUz}ga parvoz + mehmonxona + transfer`
              : `Из Ташкента в ${dest.nameRu}: перелёт + отель + трансфер`}
          </p>
          <button
            onClick={() => setBookModal(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-base transition-all hover:scale-105 active:scale-95"
            style={{ background: "#FF6B35", color: "#fff", boxShadow: "0 4px 20px rgba(255,107,53,0.4)" }}
          >
            📩 {isUz ? "Tur narxini bilish" : "Подобрать тур"}
          </button>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6" style={{ marginTop: -32 }}>
        <div
          className="bg-white rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-5 gap-3"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB" }}
        >
          {stats.map((s) => (
            <div key={s.labelUz} className="flex flex-col items-center text-center p-2">
              <span className="text-2xl mb-1">{s.emoji}</span>
              <span className="text-xs text-gray-400 font-medium">{isUz ? s.labelUz : s.labelRu}</span>
              <span className="text-sm font-extrabold text-gray-900 mt-0.5 leading-tight">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">

        {/* ── TOURVISOR SEARCH ── */}
        <div className="bg-white rounded-2xl p-5 mb-8" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #E5E7EB" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>
            🔍 {isUz ? `${dest.nameUz}ga tur qidirish` : `Поиск туров в ${dest.nameRu}`}
          </p>
          <div className="tv-search-form tv-moduleid-9976360" style={{ minHeight: 120 }} />
        </div>

        {/* ── TOURVISOR CALENDAR ── */}
        <div className="bg-white rounded-2xl p-5 mb-8" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #E5E7EB" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>
            📅 {isUz ? `${dest.nameUz} — narx kalendari` : `Календарь цен — ${dest.nameRu}`}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            {isUz
              ? "Har bir sana uchun eng arzon narxni toping"
              : "Найдите самую низкую цену на каждую дату вылета"}
          </p>
          <div className="tv-calendar tv-moduleid-9990310" />
        </div>

        {/* ── HIGHLIGHTS ── */}
        <div className="mb-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            {isUz ? `✨ ${dest.nameUz}da nima bor?` : `✨ Что есть в ${dest.nameRu}?`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(isUz ? dest.highlightsUz : dest.highlightsRu).map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ border: "1.5px solid #E5E7EB" }}
              >
                <span className="text-sm font-semibold text-gray-700">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── TOURS FROM THIS DESTINATION ── */}
        {tours.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-4">
              {isUz ? `✈️ ${dest.nameUz} turlari` : `✈️ Туры в ${dest.nameRu}`}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tours.map((tour) => {
                const discount = Math.round(((tour.oldPrice - tour.price) / tour.oldPrice) * 100);
                return (
                  <article
                    key={tour.id}
                    className="bg-white rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                    style={{ border: "1px solid #E5E7EB" }}
                  >
                    <div className="relative h-44">
                      <Image src={tour.image} alt={tour.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 50vw" />
                      {discount > 0 && (
                        <span className="absolute top-3 right-3 text-xs font-extrabold px-2 py-1 rounded-full" style={{ background: "#EF4444", color: "#fff" }}>
                          -{discount}%
                        </span>
                      )}
                      {tour.spotsLeft && tour.spotsLeft <= 5 && (
                        <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.7)", color: "#fff" }}>
                          ⚡ {isUz ? `${tour.spotsLeft} o'rin qoldi` : `Осталось ${tour.spotsLeft} мест`}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="text-xs text-gray-500 font-medium">{tour.destination}</span>
                        <span className="text-gray-300">·</span>
                        <Clock size={10} className="text-gray-400" />
                        <span className="text-xs text-gray-500">{tour.duration}</span>
                      </div>
                      <h3 className="font-extrabold text-gray-900 text-sm mb-2 leading-tight">{tour.title}</h3>
                      <div className="flex items-center gap-1 mb-3">
                        <Star size={11} fill="#F5C518" stroke="none" />
                        <span className="text-xs font-semibold text-gray-700">{tour.rating}</span>
                        <span className="text-xs text-gray-400">({tour.reviewCount})</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-xs text-gray-400 line-through">${tour.oldPrice}</p>
                          <p className="text-xl font-black" style={{ color: "#0057A8" }}>${tour.price}</p>
                          <p className="text-xs text-gray-400">{isUz ? "1 kishidan" : "за 1 чел."}</p>
                        </div>
                        <div className="flex flex-col gap-1.5 items-end">
                          <button
                            onClick={() => setBookModal(true)}
                            className="text-xs font-bold px-3 py-1.5 rounded-full text-white transition-all hover:opacity-90"
                            style={{ background: "#FF6B35" }}
                          >
                            {isUz ? "Bron" : "Бронь"}
                          </button>
                          <Link
                            href={`/tours/${tour.slug}`}
                            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:bg-blue-100"
                            style={{ background: "#EFF6FF", color: "#0057A8", border: "1px solid #BFDBFE" }}
                          >
                            {isUz ? "Batafsil →" : "Подробнее →"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ── ABOUT DESTINATION ── */}
        <div className="bg-white rounded-2xl p-6 mb-8" style={{ border: "1.5px solid #E5E7EB" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">
            {isUz ? `🌍 ${dest.nameUz} haqida` : `🌍 О ${dest.nameRu}`}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isUz ? dest.descUz : dest.descRu}
          </p>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            {isUz ? "❓ Ko'p so'raladigan savollar" : "❓ Часто задаваемые вопросы"}
          </h2>
          <div className="space-y-2">
            {dest.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid #E5E7EB" }}
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-gray-900 pr-3">
                    {isUz ? faq.qUz : faq.qRu}
                  </span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" />
                    : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {isUz ? faq.aUz : faq.aRu}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-6 mb-8 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <div className="text-4xl mb-3">{dest.flag}</div>
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz
              ? `${dest.nameUz}ga borishni rejalashtirmoqchimisiz?`
              : `Планируете поездку в ${dest.nameRu}?`}
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz
              ? "Menejerimiz siz uchun eng yaxshi narxdagi turni topib beradi!"
              : "Менеджер подберёт лучший тур по оптимальной цене!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setBookModal(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#FF6B35", color: "#fff" }}
            >
              📩 {isUz ? "Tur narxini bilish" : "Подобрать тур"}
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

        {/* ── ALL DESTINATIONS ── */}
        <div className="mb-8">
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">
            {isUz ? "🌍 Boshqa yo'nalishlar" : "🌍 Другие направления"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { slug: "turkiya", flag: "🇹🇷", uz: "Turkiya", ru: "Турция" },
              { slug: "dubai", flag: "🇦🇪", uz: "Dubai", ru: "Дубай" },
              { slug: "misr", flag: "🇪🇬", uz: "Misr", ru: "Египет" },
              { slug: "tailand", flag: "🇹🇭", uz: "Tailand", ru: "Таиланд" },
              { slug: "maldiv", flag: "🇲🇻", uz: "Maldiv", ru: "Мальдивы" },
              { slug: "gretsiya", flag: "🇬🇷", uz: "Gretsiya", ru: "Греция" },
            ]
              .filter((d) => d.slug !== slug)
              .map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "#EFF6FF", color: "#0057A8", border: "1.5px solid #BFDBFE" }}
                >
                  {d.flag} {isUz ? d.uz : d.ru}
                </Link>
              ))}
          </div>
        </div>

        <div className="pb-6">
          <Link href="/" className="text-sm font-medium" style={{ color: "#0057A8" }}>
            ← {isUz ? "Bosh sahifaga qaytish" : "Вернуться на главную"}
          </Link>
        </div>
      </div>

      {bookModal && (
        <LeadModal
          isUz={isUz}
          title={isUz ? `✈️ ${dest.nameUz} turi` : `✈️ Тур в ${dest.nameRu}`}
          type={isUz ? `${dest.nameUz} turi` : `Тур в ${dest.nameRu}`}
          source={`semtravel.uz/destinations/${slug}`}
          onClose={() => setBookModal(false)}
        />
      )}
    </div>
  );
}
