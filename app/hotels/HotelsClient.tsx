"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/language-context";
import LeadModal from "@/components/LeadModal";

const destinations = [
  {
    flag: "🇹🇷", uz: "Antalya, Turkiya", ru: "Анталья, Турция",
    priceUz: "$45 dan/kecha", priceRu: "от $45/ночь",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=70",
    tagUz: "All Inclusive", tagRu: "All Inclusive",
  },
  {
    flag: "🇦🇪", uz: "Dubai, BAA", ru: "Дубай, ОАЭ",
    priceUz: "$80 dan/kecha", priceRu: "от $80/ночь",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=70",
    tagUz: "Shahar markazi", tagRu: "Центр города",
  },
  {
    flag: "🇪🇬", uz: "Hurghada, Misr", ru: "Хургада, Египет",
    priceUz: "$35 dan/kecha", priceRu: "от $35/ночь",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=500&q=70",
    tagUz: "Plyaj + All Incl", tagRu: "Пляж + All Incl",
  },
  {
    flag: "🇹🇭", uz: "Phuket, Tailand", ru: "Пхукет, Таиланд",
    priceUz: "$50 dan/kecha", priceRu: "от $50/ночь",
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&q=70",
    tagUz: "Ekzotika", tagRu: "Экзотика",
  },
  {
    flag: "🇲🇻", uz: "Maldiv orollari", ru: "Мальдивы",
    priceUz: "$200 dan/kecha", priceRu: "от $200/ночь",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&q=70",
    tagUz: "Suv usti bungalov", tagRu: "Бунгало на воде",
  },
  {
    flag: "🇬🇷", uz: "Santorini, Gretsiya", ru: "Санторини, Греция",
    priceUz: "$90 dan/kecha", priceRu: "от $90/ночь",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&q=70",
    tagUz: "Romantik", tagRu: "Романтика",
  },
];

const hotelTypes = [
  { emoji: "🏖️", uz: "Plyaj mehmonxonalari", ru: "Пляжные отели", descUz: "Dengiz yoqasida joylashgan 4-5 yulduzli mehmonxonalar", descRu: "Отели 4-5 звёзд на первой линии моря" },
  { emoji: "🍽️", uz: "All Inclusive", ru: "Всё включено", descUz: "Cheksiz ovqat, ichimlik va animatsiya", descRu: "Безлимитное питание, напитки и анимация" },
  { emoji: "💑", uz: "Honeymoon suites", ru: "Для молодожёнов", descUz: "Maxsus dekoratsiya va romantik paketlar", descRu: "Специальное оформление и романтические пакеты" },
  { emoji: "👨‍👩‍👧", uz: "Oilaviy mehmonxonalar", ru: "Семейные отели", descUz: "Bolalar klubi va aquapark bilan", descRu: "С детским клубом и аквапарком" },
];

export default function HotelsClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)", paddingBottom: 60 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=60"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.15 }}
          sizes="100vw"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            🏨 {isUz ? "Mehmonxona bron" : "Бронирование отелей"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 5vw, 44px)" }}
          >
            {isUz ? (
              <><span style={{ color: "#F5C518" }}>Eng yaxshi mehmonxonalar</span><br />eng qulay narxda</>
            ) : (
              <><span style={{ color: "#F5C518" }}>Лучшие отели</span><br />по лучшим ценам</>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 480, margin: "0 auto 24px" }}>
            {isUz
              ? "50+ mamlakatda 100 000+ mehmonxona. Narx kafolati bilan bron qiling."
              : "100 000+ отелей в 50+ странах. Бронируйте с гарантией лучшей цены."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white"
              style={{ background: "#F5C518", color: "#1a1a2e" }}
            >
              📋 {isUz ? "Bron qilish" : "Забронировать"}
            </button>
            <a
              href="https://wa.me/998946642222"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+998712755555"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              📞 +998 71 275-55-55
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">

        {/* Hotel types */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "🏨 Mehmonxona turlari" : "🏨 Типы отелей"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hotelTypes.map((t) => (
              <div key={t.uz} className="flex gap-4 p-4 rounded-2xl bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="text-3xl flex-shrink-0">{t.emoji}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">{isUz ? t.uz : t.ru}</p>
                  <p className="text-xs text-gray-500">{isUz ? t.descUz : t.descRu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular destinations */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "🌍 Mashhur yo'nalishlar" : "🌍 Популярные направления"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.map((d) => (
              <div key={d.uz} className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="relative h-40">
                  <Image
                    src={d.image}
                    alt={isUz ? d.uz : d.ru}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: "#0057A8" }}
                  >
                    {isUz ? d.tagUz : d.tagRu}
                  </span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{d.flag} {isUz ? d.uz : d.ru}</p>
                    <p className="text-xs font-extrabold mt-0.5" style={{ color: "#0057A8" }}>
                      {isUz ? d.priceUz : d.priceRu}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                    style={{ background: "#0057A8" }}
                  >
                    {isUz ? "Bron" : "Забронировать"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why us */}
        <div className="mb-10 rounded-2xl p-6 bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">
            {isUz ? "💡 Nima uchun SEM Travel orqali bron qilish?" : "💡 Почему бронировать через SEM Travel?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { emoji: "💰", uz: "Narx kafolati", ru: "Гарантия цены", descUz: "Boshqa joyda arzonroq topsangiz — farqini qaytaramiz", descRu: "Найдёте дешевле — вернём разницу" },
              { emoji: "🔒", uz: "Xavfsiz to'lov", ru: "Безопасная оплата", descUz: "Karta yoki naqd pul orqali xavfsiz to'lov", descRu: "Безопасная оплата картой или наличными" },
              { emoji: "📞", uz: "24/7 yordam", ru: "Поддержка 24/7", descUz: "Sayohat paytida istalgan muammo — biz aloqadamiz", descRu: "При любой проблеме в поездке — мы на связи" },
              { emoji: "✅", uz: "Tasdiqlangan mehmonxonalar", ru: "Проверенные отели", descUz: "Faqat akkreditatsiyadan o'tgan mehmonxonalar", descRu: "Только аккредитованные отели" },
            ].map((item) => (
              <div key={item.uz} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{isUz ? item.uz : item.ru}</p>
                  <p className="text-xs text-gray-500">{isUz ? item.descUz : item.descRu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Mehmonxona bron qilmoqchimisiz?" : "Хотите забронировать отель?"}
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz
              ? "Menejerimiz siz uchun eng yaxshi variantni topib beradi — bepul!"
              : "Менеджер подберёт лучший вариант для вас — бесплатно!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}>
              💬 WhatsApp
            </a>
            <a href="https://t.me/semtravel" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#229ED9", color: "#fff" }}>
              ✈️ Telegram
            </a>
            <a href="tel:+998712755555"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
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

      {showModal && (
        <LeadModal
          isUz={isUz}
          title={isUz ? "🏨 Mehmonxona bron qilish" : "🏨 Бронирование отеля"}
          type="Mehmonxona bron"
          source="semtraveluz.vercel.app/hotels"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
