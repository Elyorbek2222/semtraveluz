"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Check, X, Clock, Users, Plane, Hotel, Utensils, Shield } from "lucide-react";
import { useLang } from "@/lib/language-context";
import type { Tour } from "@/lib/tours-data";

const BADGE_LABELS: Record<string, { uz: string; ru: string; color: string }> = {
  travelersChoice: { uz: "Sayohatchilar tanlovi", ru: "Выбор путешественников", color: "#0057A8" },
  hot: { uz: "Issiq taklif", ru: "Горящий тур", color: "#EF4444" },
  sale: { uz: "Chegirma", ru: "Скидка", color: "#F59E0B" },
  new: { uz: "Yangi", ru: "Новый", color: "#10B981" },
  bestValue: { uz: "Eng foydali", ru: "Лучшая цена", color: "#8B5CF6" },
};

const CATEGORY_LABELS: Record<string, { uz: string; ru: string }> = {
  beach: { uz: "Plyaj", ru: "Пляж" },
  culture: { uz: "Madaniy", ru: "Культурный" },
  adventure: { uz: "Sarguzasht", ru: "Приключения" },
  family: { uz: "Oilaviy", ru: "Семейный" },
  couple: { uz: "Juftlik", ru: "Для двоих" },
  allInclusive: { uz: "All Inclusive", ru: "Всё включено" },
};

export default function TourDetailClient({
  tour,
  discount,
}: {
  tour: Tour;
  discount: number;
}) {
  const { lang } = useLang();
  const isUz = lang === "uz";

  const title = tour.title;
  const desc = isUz ? tour.descUz : tour.descRu;
  const highlights = isUz ? tour.highlightsUz : tour.highlightsRu;
  const badge = tour.badge ? BADGE_LABELS[tour.badge] : null;

  const includedItems = [
    {
      key: "flight",
      icon: <Plane size={15} />,
      uz: "Parvoz (Toshkent → " + tour.destination + " → Toshkent)",
      ru: "Перелёт (Ташкент → " + tour.destination + " → Ташкент)",
      included: tour.included.flight,
    },
    {
      key: "hotel",
      icon: <Hotel size={15} />,
      uz: `Mehmonxona: ${tour.hotelName} ${tour.hotelStars}⭐`,
      ru: `Отель: ${tour.hotelName} ${tour.hotelStars}⭐`,
      included: tour.included.hotel,
    },
    {
      key: "meals",
      icon: <Utensils size={15} />,
      uz: `Ovqatlanish: ${tour.included.meals.label}`,
      ru: `Питание: ${tour.included.meals.label}`,
      included: tour.included.meals.type !== "none",
    },
    {
      key: "transfer",
      icon: <Plane size={15} />,
      uz: "Transfer (aeroport ↔ mehmonxona)",
      ru: "Трансфер (аэропорт ↔ отель)",
      included: tour.included.transfer,
    },
    {
      key: "guide",
      icon: <Users size={15} />,
      uz: "O'zbek tilida gid xizmati",
      ru: "Гид на русском языке",
      included: tour.included.guide,
    },
    {
      key: "insurance",
      icon: <Shield size={15} />,
      uz: "Sayohat sug'urtasi",
      ru: "Страховка путешественника",
      included: tour.included.insurance,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: 340 }}>
        <Image
          src={tour.image}
          alt={title}
          fill
          priority
          className="absolute inset-0 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,25,60,0.62)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {badge && (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: badge.color }}
              >
                {isUz ? badge.uz : badge.ru}
              </span>
            )}
            {tour.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
              >
                {isUz ? CATEGORY_LABELS[cat]?.uz : CATEGORY_LABELS[cat]?.ru}
              </span>
            ))}
          </div>

          <h1
            className="text-white font-black leading-tight mb-2"
            style={{ fontSize: "clamp(22px, 4vw, 40px)" }}
          >
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "rgba(255,255,255,0.82)" }}>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={14} fill="currentColor" style={{ color: "#F5C518" }} />
              <span style={{ color: "#F5C518" }}>{tour.rating}</span>
              <span>({tour.reviewCount} {isUz ? "sharh" : "отзывов"})</span>
            </span>
            {tour.spotsLeft && (
              <span className="font-bold" style={{ color: "#FCA5A5" }}>
                ⚡ {isUz ? `Faqat ${tour.spotsLeft} o'rin qoldi!` : `Осталось ${tour.spotsLeft} мест!`}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT COLUMN */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* Description */}
            {desc && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-extrabold text-gray-900 mb-3">
                  {isUz ? "Tur haqida" : "О туре"}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            )}

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-extrabold text-gray-900 mb-4">
                  {isUz ? "✨ Tur dasturi asosiy nuqtalar" : "✨ Основные моменты тура"}
                </h2>
                <ul className="space-y-2.5">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#0057A8" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What's included */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900 mb-4">
                {isUz ? "Turga nima kiradi?" : "Что входит в тур?"}
              </h2>
              <ul className="space-y-3">
                {includedItems.map((item) => (
                  <li key={item.key} className="flex items-start gap-3 text-sm">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: item.included ? "#DCFCE7" : "#FEE2E2",
                        color: item.included ? "#16A34A" : "#DC2626",
                      }}
                    >
                      {item.included ? <Check size={13} /> : <X size={13} />}
                    </span>
                    <span className={item.included ? "text-gray-700" : "text-gray-400 line-through"}>
                      {isUz ? item.uz : item.ru}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Review */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900 mb-4">
                {isUz ? "Mijoz sharhi" : "Отзыв клиента"}
              </h2>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(tour.rating) ? "#F5C518" : "none"}
                    stroke={i < Math.floor(tour.rating) ? "#F5C518" : "#D1D5DB"}
                  />
                ))}
                <span className="ml-1 text-sm font-semibold text-gray-700">{tour.rating}/5</span>
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed">
                &ldquo;{tour.reviewSnippet}&rdquo;
              </p>
              <p className="text-xs text-gray-400 mt-2">
                — {isUz ? "SEM Travel mijozi" : "Клиент SEM Travel"} ·{" "}
                {isUz ? `${tour.reviewCount} ta sharhdan` : `из ${tour.reviewCount} отзывов`}
              </p>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm pb-2" style={{ color: "#6B7280" }}>
              <Link href="/" style={{ color: "#0057A8" }}>{isUz ? "Bosh sahifa" : "Главная"}</Link>
              <span>/</span>
              <Link href="/tours" style={{ color: "#0057A8" }}>{isUz ? "Turlar" : "Туры"}</Link>
              <span>/</span>
              <span className="truncate">{title}</span>
            </div>
          </div>

          {/* RIGHT COLUMN — Sticky Price Card */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              {/* Price Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-black text-gray-900">${tour.price}</span>
                  <div>
                    <span className="text-sm text-gray-400 line-through block">${tour.oldPrice}</span>
                    <span
                      className="text-xs font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: "#FEF3C7", color: "#B45309" }}
                    >
                      -{discount}%
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  {isUz ? "1 kishi uchun, parvozdan" : "за 1 человека, от"}
                </p>

                <a
                  href={`https://wa.me/998946642222?text=${encodeURIComponent(
                    isUz
                      ? `Salom! ${tour.title} turi haqida ma'lumot olmoqchiman.`
                      : `Здравствуйте! Хочу узнать о туре "${tour.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm text-white mb-2"
                  style={{ background: "#25D366" }}
                >
                  💬 {isUz ? "WhatsApp orqali bron" : "Забронировать в WhatsApp"}
                </a>
                <a
                  href="https://t.me/semtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm text-white mb-2"
                  style={{ background: "#229ED9" }}
                >
                  ✈️ {isUz ? "Telegram orqali bron" : "Забронировать в Telegram"}
                </a>
                <a
                  href="tel:+998712755555"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm"
                  style={{ background: "#F3F4F6", color: "#374151" }}
                >
                  📞 +998 71 275-55-55
                </a>

                {tour.spotsLeft && (
                  <p className="text-center text-xs font-semibold mt-3" style={{ color: "#EF4444" }}>
                    ⚡ {isUz ? `Faqat ${tour.spotsLeft} o'rin qoldi!` : `Осталось всего ${tour.spotsLeft} мест!`}
                  </p>
                )}
              </div>

              {/* Trust signals */}
              <div
                className="rounded-2xl p-4 text-sm space-y-2.5"
                style={{ background: "#F0F9FF", border: "1px solid #BAE6FD" }}
              >
                {[
                  { icon: "💰", uz: "Narx kafolati — arzonroq topsangiz qaytaramiz", ru: "Гарантия цены — вернём разницу" },
                  { icon: "🔒", uz: "Xavfsiz to'lov — karta yoki naqd", ru: "Безопасная оплата — карта или наличные" },
                  { icon: "📞", uz: "24/7 yordam — hamma vaqt aloqada", ru: "Поддержка 24/7 — всегда на связи" },
                  { icon: "🛂", uz: "Viza rasmiylashtirishda yordam", ru: "Помощь с оформлением визы" },
                ].map((item) => (
                  <div key={item.uz} className="flex items-start gap-2 text-xs text-gray-600">
                    <span>{item.icon}</span>
                    <span>{isUz ? item.uz : item.ru}</span>
                  </div>
                ))}
              </div>

              {/* Back to tours */}
              <Link
                href="/tours"
                className="block text-center text-sm font-medium py-2.5 rounded-full"
                style={{ background: "#F3F4F6", color: "#374151" }}
              >
                ← {isUz ? "Barcha turlarga qaytish" : "Все туры"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
