"use client";

import Link from "next/link";
import { useLang } from "@/lib/language-context";

const transferTypes = [
  {
    emoji: "✈️",
    uz: "Aeroport → Mehmonxona",
    ru: "Аэропорт → Отель",
    descUz: "Toshkent Xalqaro Aeroport (TAS) dan shahar markazigacha qulay yetkazish",
    descRu: "Встреча в аэропорту Ташкента (TAS) и доставка до гостиницы",
    priceUz: "100 000 so'm dan",
    priceRu: "от 100 000 сум",
  },
  {
    emoji: "🏨",
    uz: "Mehmonxona → Aeroport",
    ru: "Отель → Аэропорт",
    descUz: "Mehmonxonangizdan aeroportga o'z vaqtida va qulay yetkazish",
    descRu: "Своевременная доставка из отеля в аэропорт",
    priceUz: "100 000 so'm dan",
    priceRu: "от 100 000 сум",
  },
  {
    emoji: "🚗",
    uz: "Shahar transferi",
    ru: "Городской трансфер",
    descUz: "Toshkent shahri ichida istalgan manzilga qulay transfer",
    descRu: "Комфортный трансфер по Ташкенту до любого адреса",
    priceUz: "80 000 so'm dan",
    priceRu: "от 80 000 сум",
  },
  {
    emoji: "👑",
    uz: "VIP Transfer",
    ru: "VIP Трансфер",
    descUz: "Mercedes, BMW yoki Lexus sinfi avtomobillar bilan premium xizmat",
    descRu: "Премиум обслуживание на автомобилях класса Mercedes, BMW или Lexus",
    priceUz: "300 000 so'm dan",
    priceRu: "от 300 000 сум",
  },
  {
    emoji: "🚌",
    uz: "Guruh transferi",
    ru: "Групповой трансфер",
    descUz: "Minivan va avtobus bilan guruhlar va korporativ mijozlar uchun",
    descRu: "Минивэн или автобус для групп и корпоративных клиентов",
    priceUz: "Narx kelishiladi",
    priceRu: "Цена по договорённости",
  },
  {
    emoji: "🏔️",
    uz: "Shaharlararo transfer",
    ru: "Межгородской трансфер",
    descUz: "Toshkent–Samarqand, Toshkent–Buxoro va boshqa yo'nalishlar",
    descRu: "Ташкент–Самарканд, Ташкент–Бухара и другие направления",
    priceUz: "Narx kelishiladi",
    priceRu: "Цена по договорённости",
  },
];

const steps = [
  { num: "1", emoji: "💬", uz: "So'rov yuboring", ru: "Оставьте заявку", descUz: "WhatsApp, Telegram yoki telefon orqali vaqt, manzil va yo'lovchilar sonini ayting", descRu: "Напишите в WhatsApp, Telegram или по телефону: время, адрес, количество пассажиров" },
  { num: "2", emoji: "✅", uz: "Tasdiqlash", ru: "Подтверждение", descUz: "Menejerimiz narxni tasdiqlab, haydovchi ma'lumotlarini yuboradi", descRu: "Менеджер подтвердит цену и пришлёт данные водителя" },
  { num: "3", emoji: "🚗", uz: "Kutib olish", ru: "Встреча", descUz: "Haydovchi belgilangan vaqtda sizni kutib oladi (aeroportda ismi bilan plaket bilan)", descRu: "Водитель встретит вас в назначенное время (в аэропорту — с табличкой с вашим именем)" },
  { num: "4", emoji: "🏁", uz: "Manzilga yetkazish", ru: "Доставка", descUz: "Qulay va xavfsiz manzilgacha yetkazish. To'lov kelgach yoki oldindan", descRu: "Комфортная и безопасная доставка до точки. Оплата по прибытии или заранее" },
];

export default function TransferClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1a1a2e 0%, #0057A8 100%)", paddingBottom: 60 }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            🚗 {isUz ? "Transfer xizmati" : "Трансфер"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 5vw, 44px)" }}
          >
            {isUz ? (
              <><span style={{ color: "#F5C518" }}>Qulay va xavfsiz</span><br />transfer xizmati</>
            ) : (
              <><span style={{ color: "#F5C518" }}>Комфортный и безопасный</span><br />трансфер</>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 480, margin: "0 auto 24px" }}>
            {isUz
              ? "Aeroport, mehmonxona, shahar — istalgan manzilga. 24/7 xizmat."
              : "Аэропорт, отель, город — до любого адреса. Сервис 24/7."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/998946642222"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 {isUz ? "Transfer buyurtma berish" : "Заказать трансфер"}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { num: "24/7", uz: "Xizmat", ru: "Сервис" },
            { num: "10+", uz: "Yil tajriba", ru: "Лет опыта" },
            { num: "100%", uz: "Vaqtida", ru: "Вовремя" },
          ].map((s) => (
            <div key={s.num} className="text-center p-4 rounded-2xl bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
              <p className="text-2xl font-black" style={{ color: "#0057A8" }}>{s.num}</p>
              <p className="text-xs text-gray-500 mt-0.5">{isUz ? s.uz : s.ru}</p>
            </div>
          ))}
        </div>

        {/* Transfer types */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "🚗 Transfer turlari" : "🚗 Виды трансфера"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {transferTypes.map((t) => (
              <div key={t.uz} className="p-4 rounded-2xl bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{isUz ? t.uz : t.ru}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">{isUz ? t.descUz : t.descRu}</p>
                    <span className="text-xs font-extrabold" style={{ color: "#0057A8" }}>
                      {isUz ? t.priceUz : t.priceRu}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "⚡ Qanday buyurtma berish?" : "⚡ Как заказать?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4 p-4 rounded-xl bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: "#0057A8" }}
                >
                  {step.num}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span>{step.emoji}</span>
                    <span className="font-bold text-gray-900 text-sm">{isUz ? step.uz : step.ru}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{isUz ? step.descUz : step.descRu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicles */}
        <div className="mb-10 rounded-2xl p-6 bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">
            {isUz ? "🚘 Avtomobil parki" : "🚘 Автопарк"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { emoji: "🚗", uz: "Standart", ru: "Стандарт", descUz: "Chevrolet, Nexia", descRu: "Chevrolet, Nexia" },
              { emoji: "🚙", uz: "Komfort", ru: "Комфорт", descUz: "Hyundai, Toyota", descRu: "Hyundai, Toyota" },
              { emoji: "👑", uz: "Premium", ru: "Премиум", descUz: "Mercedes, BMW", descRu: "Mercedes, BMW" },
              { emoji: "🚌", uz: "Minivan", ru: "Минивэн", descUz: "6-8 kishilik", descRu: "6-8 человек" },
            ].map((v) => (
              <div key={v.uz} className="text-center p-3 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <div className="text-2xl mb-1">{v.emoji}</div>
                <p className="font-bold text-gray-900 text-xs">{isUz ? v.uz : v.ru}</p>
                <p className="text-xs text-gray-500">{isUz ? v.descUz : v.descRu}</p>
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
            {isUz ? "Transfer kerakmi?" : "Нужен трансфер?"}
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz ? "Hoziroq buyurtma bering — 15 daqiqada javob!" : "Закажите сейчас — ответим за 15 минут!"}
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
    </div>
  );
}
