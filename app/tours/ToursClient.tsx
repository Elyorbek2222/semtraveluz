"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, Users } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { TOURS, type Tour, type TourCategory } from "@/lib/tours-data";
import LeadModal from "@/components/LeadModal";

// ── DESTINATION FILTER CONFIG ──────────────────────────────────────────────
const destinations = [
  { id: "turkiya",     emoji: "🇹🇷", uz: "Turkiya",     ru: "Турция",      match: (t: Tour) => t.country === "Turkiya" },
  { id: "dubai",       emoji: "🇦🇪", uz: "Dubai",       ru: "Дубай",       match: (t: Tour) => t.destination === "Dubai" },
  { id: "misr",        emoji: "🇪🇬", uz: "Misr",        ru: "Египет",      match: (t: Tour) => t.country === "Misr" },
  { id: "gruziya",     emoji: "🇬🇪", uz: "Gruziya",     ru: "Грузия",      match: (t: Tour) => t.country === "Gruziya" },
  { id: "qirgiziston", emoji: "🇰🇬", uz: "Qirg'iziston", ru: "Кыргызстан", match: (t: Tour) => t.country === "Qirg'iziston" },
  { id: "xitoy",       emoji: "🇨🇳", uz: "Xitoy",       ru: "Китай",       match: (t: Tour) => t.country === "Xitoy" },
  { id: "tailand",     emoji: "🇹🇭", uz: "Tailand",     ru: "Таиланд",     match: (t: Tour) => t.country === "Tailand" },
  { id: "maldiv",      emoji: "🇲🇻", uz: "Maldiv",      ru: "Мальдивы",    match: (t: Tour) => t.country === "Maldiv" },
  { id: "gretsiya",    emoji: "🇬🇷", uz: "Gretsiya",    ru: "Греция",      match: (t: Tour) => t.country === "Gretsiya" },
  { id: "bali",        emoji: "🇮🇩", uz: "Bali",        ru: "Бали",        match: (t: Tour) => t.destination === "Bali" },
];

// ── TOUR TYPE FILTER CONFIG ────────────────────────────────────────────────
const tourTypes: { id: TourCategory; emoji: string; uz: string; ru: string }[] = [
  { id: "beach",       emoji: "🏖️", uz: "Plyaj",        ru: "Пляж" },
  { id: "allInclusive",emoji: "🍽️", uz: "All Inclusive", ru: "Всё включено" },
  { id: "family",      emoji: "👨‍👩‍👧", uz: "Oilaviy",       ru: "Семейный" },
  { id: "couple",      emoji: "💑", uz: "Juftlik",       ru: "Для двоих" },
  { id: "culture",     emoji: "🏛️", uz: "Madaniy",       ru: "Культурный" },
  { id: "adventure",   emoji: "🧗", uz: "Sarguzasht",    ru: "Приключения" },
  { id: "biznes",      emoji: "💼", uz: "Biznes Trip",   ru: "Бизнес-тур" },
];

const BADGE_LABELS: Record<string, { uz: string; ru: string; bg: string; color: string }> = {
  travelersChoice: { uz: "Sayohatchi tanlovi", ru: "Выбор путешественников", bg: "#0057A8", color: "#fff" },
  hot:             { uz: "🔥 Issiq taklif",    ru: "🔥 Горящий тур",         bg: "#EF4444", color: "#fff" },
  sale:            { uz: "💰 Chegirma",         ru: "💰 Скидка",              bg: "#F59E0B", color: "#fff" },
  new:             { uz: "✨ Yangi",             ru: "✨ Новый",               bg: "#10B981", color: "#fff" },
  bestValue:       { uz: "⭐ Eng foydali",      ru: "⭐ Лучшая цена",         bg: "#8B5CF6", color: "#fff" },
};

function TourCard({ tour, isUz, onBook }: { tour: Tour; isUz: boolean; onBook: (t: Tour) => void }) {
  const discount = Math.round(((tour.oldPrice - tour.price) / tour.oldPrice) * 100);
  const badge = tour.badge ? BADGE_LABELS[tour.badge] : null;

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #E5E7EB" }}>
      {/* Image */}
      <div className="relative h-44">
        <Image src={tour.image} alt={tour.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
        {badge && (
          <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: badge.bg, color: badge.color }}>
            {isUz ? badge.uz : badge.ru}
          </span>
        )}
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

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-base">{tour.flag}</span>
          <span className="text-xs text-gray-500 font-medium">{tour.destination}</span>
          <span className="text-gray-300">·</span>
          <span className="flex items-center gap-0.5 text-xs text-gray-500">
            <Clock size={10} /> {tour.duration}
          </span>
        </div>

        <h3 className="font-extrabold text-gray-900 text-sm mb-1 leading-tight line-clamp-2">{tour.title}</h3>

        <div className="flex items-center gap-1 mb-3">
          <Star size={11} fill="#F5C518" stroke="none" />
          <span className="text-xs font-semibold text-gray-700">{tour.rating}</span>
          <span className="text-xs text-gray-400">({tour.reviewCount})</span>
        </div>

        {/* Included mini icons */}
        <div className="flex gap-1.5 mb-3 flex-wrap">
          {tour.included.flight && <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#EFF6FF", color: "#0057A8" }}>✈️ Parvoz</span>}
          {tour.included.hotel && <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#EFF6FF", color: "#0057A8" }}>🏨 Hotel</span>}
          {tour.included.meals.type === "allInclusive" && <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#F0FDF4", color: "#166534" }}>AI</span>}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-400 line-through">${tour.oldPrice}</p>
            <p className="text-xl font-black" style={{ color: "#0057A8" }}>${tour.price}</p>
            <p className="text-xs text-gray-400">{isUz ? "1 kishidan" : "за 1 чел."}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-end">
            <button
              onClick={() => onBook(tour)}
              className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
              style={{ background: "#F5C518", color: "#1a1a2e" }}
            >
              {isUz ? "Bron" : "Бронь"}
            </button>
            <Link
              href={`/tours/${tour.slug}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "#EFF6FF", color: "#0057A8", border: "1px solid #BFDBFE" }}
            >
              {isUz ? "Batafsil →" : "Подробнее →"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ToursClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  const [activeDestination, setActiveDestination] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<TourCategory | null>(null);
  const [bookTour, setBookTour] = useState<Tour | null>(null);

  const filteredTours = useMemo(() => {
    return TOURS.filter((t) => {
      const destOk = !activeDestination
        ? true
        : destinations.find((d) => d.id === activeDestination)?.match(t) ?? false;
      const typeOk = !activeType ? true : t.category.includes(activeType);
      return destOk && typeOk;
    });
  }, [activeDestination, activeType]);

  function toggleDestination(id: string) {
    setActiveDestination((prev) => (prev === id ? null : id));
  }

  function toggleType(id: TourCategory) {
    setActiveType((prev) => (prev === id ? null : id));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)", paddingBottom: 80 }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=60')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            ✈️ {isUz ? "Turlar katalogi — 2025" : "Каталог туров — 2025"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(26px, 5vw, 46px)", letterSpacing: "-0.5px" }}
          >
            {isUz ? (
              <>Toshkentdan <span style={{ color: "#F5C518" }}>eng arzon turlar</span></>
            ) : (
              <>Туры из Ташкента <span style={{ color: "#F5C518" }}>по лучшим ценам</span></>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 500, margin: "0 auto 20px" }}>
            {isUz
              ? "50+ mamlakatga tayyor tur paketlar: parvoz + mehmonxona + transfer"
              : "Готовые турпакеты в 50+ стран: перелёт + отель + трансфер"}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { num: "50+", uz: "Mamlakat", ru: "Стран" },
              { num: "10 000+", uz: "Mijoz", ru: "Клиентов" },
              { num: "15+", uz: "Yil tajriba", ru: "Лет опыта" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-1.5 text-white">
                <span className="font-extrabold text-lg" style={{ color: "#F5C518" }}>{s.num}</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{isUz ? s.uz : s.ru}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOATING SEARCH CARD ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6" style={{ marginTop: -60 }}>
        <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.14)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>
            🔍 {isUz ? "Tourvisor orqali tur qidirish" : "Поиск туров через Tourvisor"}
          </p>
          <div className="tv-search-form tv-moduleid-9976360" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">

        {/* ── DESTINATION FILTERS ── */}
        <div className="mb-4">
          <h2 className="text-base font-bold text-gray-700 mb-3">
            🌍 {isUz ? "Yo'nalish bo'yicha" : "По направлению"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {destinations.map((d) => {
              const active = activeDestination === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => toggleDestination(d.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all active:scale-95"
                  style={active
                    ? { background: "#0057A8", color: "#fff", border: "1.5px solid #0057A8" }
                    : { background: "#F3F4F6", color: "#374151", border: "1.5px solid #E5E7EB" }}
                >
                  {d.emoji} {isUz ? d.uz : d.ru}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── TOUR TYPE FILTERS ── */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tourTypes.map((t) => {
              const active = activeType === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => toggleType(t.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all active:scale-95"
                  style={active
                    ? { background: "#0057A8", color: "#fff", border: "1.5px solid #0057A8" }
                    : { background: "#EFF6FF", color: "#0057A8", border: "1.5px solid #BFDBFE" }}
                >
                  {t.emoji} {isUz ? t.uz : t.ru}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── OUR TOURS GRID ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-extrabold text-gray-900">
              🏆 {isUz ? "Bizning turlarimiz" : "Наши туры"}
            </h2>
            <span className="text-sm text-gray-500">
              {filteredTours.length} {isUz ? "ta tur" : "туров"}
            </span>
          </div>

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} isUz={isUz} onBook={setBookTour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-2xl bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-bold text-gray-900 mb-1">{isUz ? "Tur topilmadi" : "Туры не найдены"}</p>
              <p className="text-sm text-gray-500 mb-4">
                {isUz ? "Filtrni o'zgartiring yoki biz bilan bog'laning" : "Измените фильтр или свяжитесь с нами"}
              </p>
              <button
                onClick={() => { setActiveDestination(null); setActiveType(null); }}
                className="text-sm font-bold px-4 py-2 rounded-full text-white"
                style={{ background: "#0057A8" }}
              >
                {isUz ? "Filtrni tozalash" : "Сбросить фильтры"}
              </button>
            </div>
          )}
        </div>

        {/* ── TOURVISOR HOT TOURS WIDGET ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            🔥 {isUz ? "Tourvisor: Issiq takliflar" : "Tourvisor: Горящие туры"}
          </h2>
          <div className="tv-hot-tours tv-moduleid-9989885" />
        </div>

        {/* ── TRUST SIGNALS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { emoji: "💰", uz: "Narx kafolati", ru: "Гарантия цены" },
            { emoji: "🔒", uz: "Xavfsiz to'lov", ru: "Безопасная оплата" },
            { emoji: "📞", uz: "24/7 yordam", ru: "Поддержка 24/7" },
            { emoji: "🛂", uz: "Viza yordam", ru: "Помощь с визой" },
          ].map((item) => (
            <div key={item.uz} className="flex flex-col items-center text-center p-3 rounded-xl" style={{ background: "#F0F9FF", border: "1px solid #BAE6FD" }}>
              <span className="text-2xl mb-1">{item.emoji}</span>
              <span className="text-xs font-semibold text-gray-700">{isUz ? item.uz : item.ru}</span>
            </div>
          ))}
        </div>

        {/* ── SEO TEXT BLOCK ── */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">
            {isUz ? "Toshkentdan tur paketlar — SEM Travel bilan" : "Туры из Ташкента — с SEM Travel"}
          </h2>
          {isUz ? (
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p><strong>SEM Travel</strong> — 2011 yildan beri Toshkentdan 50+ mamlakatga tur paketlar taklif etayotgan ishonchli sayohat agentligi. Turkiya, Dubai, Tailand, Misr, Maldiv, Gretsiya va boshqa yo'nalishlarga eng arzon narxlar.</p>
              <p>Har bir tur paketi <strong>parvoz + mehmonxona + transfer</strong>ni o'z ichiga oladi. All Inclusive, plyaj dam olishi, oilaviy turlar va honeymoon paketlar mavjud.</p>
              <p>📞 Bepul maslahat: <strong>+998 71 275-55-55</strong> yoki <strong>+998 94 664-22-22</strong></p>
            </div>
          ) : (
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p><strong>SEM Travel</strong> — надёжное туристическое агентство в Ташкенте, с 2011 года организующее туры в 50+ стран.</p>
              <p>Каждый турпакет включает <strong>перелёт + отель + трансфер</strong>. Доступны туры All Inclusive, пляжный отдых, семейные туры и honeymoon пакеты.</p>
              <p>📞 Бесплатная консультация: <strong>+998 71 275-55-55</strong> или <strong>+998 94 664-22-22</strong></p>
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
              <span key={tag.uz} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#E0F2FE", color: "#0369A1" }}>
                {isUz ? tag.uz : tag.ru}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="rounded-2xl p-6 mb-10 text-center" style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}>
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Tur topa olmadingizmi?" : "Не нашли подходящий тур?"}
          </h3>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz ? "Menejerimiz siz uchun maxsus tur topib beradi — bepul!" : "Наш менеджер подберёт тур специально для вас — бесплатно!"}
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

      {/* ── BOOKING MODAL ── */}
      {bookTour && (
        <LeadModal
          isUz={isUz}
          title={`✈️ ${bookTour.title}`}
          type={`Tur: ${bookTour.title}`}
          source={`semtravel.uz/tours/${bookTour.slug}`}
          onClose={() => setBookTour(null)}
        />
      )}
    </div>
  );
}
