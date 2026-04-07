"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/language-context";
import LeadModal from "@/components/LeadModal";

// ── TIER DATA ────────────────────────────────────────────────────────────────
const tiers = [
  {
    id: "silver",
    nameUz: "Silver",
    nameRu: "Silver",
    color: "#94A3B8",
    bg: "#F8FAFC",
    border: "#CBD5E1",
    icon: "🥈",
    conditionUz: "1-tur sotib olgandan keyin",
    conditionRu: "После покупки 1-го тура",
    discountUz: "3% chegirma",
    discountRu: "Скидка 3%",
    pointsRate: "1 USD = 1 ball",
    benefits: [
      { uz: "3% chegirma barcha turlarga", ru: "Скидка 3% на все туры" },
      { uz: "Tug'ilgan kun uchun maxsus taklif", ru: "Спецпредложение на день рождения" },
      { uz: "Telegram VIP guruhiga kirish", ru: "Доступ в Telegram VIP-группу" },
      { uz: "Haftalik eksklyuziv aksiyalar", ru: "Еженедельные эксклюзивные акции" },
      { uz: "Bepul transfer maslahat", ru: "Бесплатная консультация по трансферу" },
    ],
  },
  {
    id: "gold",
    nameUz: "Gold",
    nameRu: "Gold",
    color: "#F5C518",
    bg: "#FFFBEB",
    border: "#FCD34D",
    icon: "🥇",
    conditionUz: "3 ta tur yoki 500$ dan ortiq ballar",
    conditionRu: "3 тура или свыше 500$ баллов",
    discountUz: "5% chegirma",
    discountRu: "Скидка 5%",
    pointsRate: "1 USD = 1.5 ball",
    benefits: [
      { uz: "5% chegirma barcha turlarga", ru: "Скидка 5% на все туры" },
      { uz: "Silver barcha imtiyozlari", ru: "Все привилегии Silver" },
      { uz: "Bepul travel yostiq yoki aksessuar", ru: "Бесплатная travel-подушка или аксессуар" },
      { uz: "Tez navbat — prioritet xizmat", ru: "Приоритетное обслуживание" },
      { uz: "Eksklyuziv Gold aksiyalar va flash-sotuv", ru: "Эксклюзивные Gold-акции и флэш-распродажи" },
      { uz: "Yil oxirida sovrin qur'asi", ru: "Розыгрыш призов в конце года" },
    ],
  },
  {
    id: "platinum",
    nameUz: "Platinum",
    nameRu: "Platinum",
    color: "#0057A8",
    bg: "#EFF6FF",
    border: "#93C5FD",
    icon: "💎",
    conditionUz: "7 ta tur yoki 1500$ dan ortiq ballar",
    conditionRu: "7 туров или свыше 1500$ баллов",
    discountUz: "7% chegirma",
    discountRu: "Скидка 7%",
    pointsRate: "1 USD = 2 ball",
    benefits: [
      { uz: "7% chegirma barcha turlarga", ru: "Скидка 7% на все туры" },
      { uz: "Gold barcha imtiyozlari", ru: "Все привилегии Gold" },
      { uz: "CIP Lounge xizmati (VIP zal)", ru: "Услуга CIP Lounge (VIP-зал аэропорта)" },
      { uz: "5★ mehmonxonada 1 kecha sovg'a (yillik)", ru: "1 ночь в 5★ отеле в подарок (ежегодно)" },
      { uz: "Shaxsiy menejer — 24/7 aloqa", ru: "Персональный менеджер — связь 24/7" },
      { uz: "Yangi yo'nalishlar uchun birinchi navbatda xabar", ru: "Первым узнавать о новых направлениях" },
      { uz: "Yiliga 2 marta offline networking nonushtasi", ru: "2 раза в год офлайн-встреча с нетворкингом" },
    ],
  },
];

// ── HOW IT WORKS ─────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    emoji: "✈️",
    uz: "Tur sotib oling",
    ru: "Купите тур",
    descUz: "SEM Travel orqali istalgan tur buyurtma bering",
    descRu: "Забронируйте любой тур через SEM Travel",
  },
  {
    num: "02",
    emoji: "💰",
    uz: "Ballar to'plang",
    ru: "Накапливайте баллы",
    descUz: "Har 1$ uchun statusingizga qarab 1–2 ball oling",
    descRu: "Получайте 1–2 балла за каждый $1 в зависимости от статуса",
  },
  {
    num: "03",
    emoji: "🏆",
    uz: "Status oling",
    ru: "Повышайте статус",
    descUz: "Silver → Gold → Platinum — har yangi darajada ko'proq imtiyoz",
    descRu: "Silver → Gold → Platinum — больше привилегий на каждом уровне",
  },
  {
    num: "04",
    emoji: "🎁",
    uz: "Sovrinlar oling",
    ru: "Получайте подарки",
    descUz: "Chegirmalar, CIP Lounge, 5★ mehmonxona va yana ko'p narsa",
    descRu: "Скидки, CIP Lounge, ночь в 5★ отеле и многое другое",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    qUz: "SEM Club ga qanday a'zo bo'laman?",
    qRu: "Как вступить в SEM Club?",
    aUz: "Birinchi turingizni SEM Travel orqali sotib olganingizdan so'ng avtomatik ravishda Silver statusda a'zo bo'lasiz. Hech qanday alohida ariza kerak emas.",
    aRu: "После первой покупки тура через SEM Travel вы автоматически становитесь членом клуба со статусом Silver. Отдельная заявка не нужна.",
  },
  {
    qUz: "Ballar qancha muddatda amal qiladi?",
    qRu: "Как долго действуют баллы?",
    aUz: "Ballar to'planganidan keyin 24 oy (2 yil) davomida amal qiladi. Yangi tur sotib olganda muddati yangilanadi.",
    aRu: "Баллы действительны 24 месяца (2 года) с момента начисления. При покупке нового тура срок обновляется.",
  },
  {
    qUz: "Ballarni naqd pulga almashtirib bo'ladimi?",
    qRu: "Можно ли обменять баллы на деньги?",
    aUz: "Yo'q, ballar naqd pulga aylanmaydi. Lekin keyingi turlarda chegirma sifatida ishlatilishi mumkin.",
    aRu: "Нет, баллы не конвертируются в деньги. Но их можно использовать как скидку при следующей поездке.",
  },
  {
    qUz: "Platinum statusga qachon ega bo'laman?",
    qRu: "Когда я получу статус Platinum?",
    aUz: "7 ta tur sotib olganingizdan yoki 1500$ dan ortiq ballar to'plaganingizdan keyin avtomatik Platinum statusi beriladi.",
    aRu: "После покупки 7 туров или накопления свыше 1500$ баллов вы автоматически получаете статус Platinum.",
  },
  {
    qUz: "CIP Lounge xizmati qanday ishlaydi?",
    qRu: "Как работает услуга CIP Lounge?",
    aUz: "Platinum a'zolar Toshkent xalqaro aeroportida VIP zaldan foydalanish imkoniyatiga ega. Tur bron qilishda menejeringizga xabar bering.",
    aRu: "Platinum-члены могут пользоваться VIP-залом в международном аэропорту Ташкента. Сообщите менеджеру при бронировании тура.",
  },
  {
    qUz: "Telegram VIP guruhida nima bo'ladi?",
    qRu: "Что происходит в Telegram VIP-группе?",
    aUz: "Haftalik eksklyuziv aksiyalar, flash-sotuv, mini-viktorinalar va sovrinli o'yinlar. Faqat SEM Club a'zolari uchun.",
    aRu: "Еженедельные эксклюзивные акции, флэш-распродажи, мини-викторины и розыгрыши призов. Только для членов SEM Club.",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ClubClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #001E46 0%, #0057A8 60%, #1a6fbf 100%)",
          paddingBottom: 80,
        }}
      >
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                background: "rgba(255,255,255,0.6)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full text-sm font-bold"
            style={{
              background: "rgba(245,197,24,0.15)",
              border: "1.5px solid rgba(245,197,24,0.5)",
              color: "#F5C518",
            }}
          >
            💎 SEM CLUB
          </div>

          <h1
            className="font-black leading-tight mb-4 text-white"
            style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
          >
            {isUz ? (
              <>Sayohat qiling —{" "}
                <span style={{ color: "#F5C518" }}>mukofot oling</span>
              </>
            ) : (
              <>Путешествуйте —{" "}
                <span style={{ color: "#F5C518" }}>получайте награды</span>
              </>
            )}
          </h1>

          <p className="mb-8 mx-auto" style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, maxWidth: 520 }}>
            {isUz
              ? "SEM Club — doimiy mijozlar uchun eksklyuziv imtiyozlar dasturi. Har bir turdan ballar to'plang, statusingizni oshiring."
              : "SEM Club — эксклюзивная программа привилегий для постоянных клиентов. Копите баллы с каждого тура, повышайте статус."}
          </p>

          {/* 3 status badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {tiers.map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm"
                style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff" }}
              >
                {t.icon} {t.nameUz}
              </div>
            ))}
          </div>

          <button
            onClick={() => setModal(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-base transition-all hover:scale-105 active:scale-95"
            style={{ background: "#FF6B35", color: "#fff", boxShadow: "0 6px 28px rgba(255,107,53,0.5)" }}
          >
            🎯 {isUz ? "A'zo bo'lish" : "Вступить в клуб"}
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10">

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { emoji: "👥", val: "3 000+", uz: "A'zolar", ru: "Участников" },
            { emoji: "✈️", val: "30 000+", uz: "Bajarilgan turlar", ru: "Совершённых туров" },
            { emoji: "🎁", val: "500+", uz: "Berilgan sovrinlar", ru: "Выданных призов" },
            { emoji: "⭐", val: "4.9/5", uz: "Mijoz bahosi", ru: "Оценка клиентов" },
          ].map((s) => (
            <div key={s.val} className="text-center p-4 rounded-2xl bg-white" style={{ border: "1px solid #E5E7EB" }}>
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="font-extrabold text-gray-900 text-lg">{s.val}</div>
              <div className="text-xs text-gray-500 mt-0.5">{isUz ? s.uz : s.ru}</div>
            </div>
          ))}
        </div>

        {/* ── HOW IT WORKS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">
            {isUz ? "⚙️ Qanday ishlaydi?" : "⚙️ Как это работает?"}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            {isUz ? "4 ta oddiy qadam" : "4 простых шага"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center p-5 rounded-2xl bg-white" style={{ border: "1px solid #E5E7EB" }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-xs font-extrabold text-white" style={{ background: "#0057A8" }}>
                  {s.num}
                </div>
                <div className="text-3xl mb-2 mt-2">{s.emoji}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{isUz ? s.uz : s.ru}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{isUz ? s.descUz : s.descRu}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TIER CARDS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">
            {isUz ? "🏆 Status darajalari" : "🏆 Уровни статуса"}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            {isUz ? "Har bir daraja yangi imtiyozlar ochadi" : "Каждый уровень открывает новые привилегии"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tiers.map((tier, idx) => (
              <div
                key={tier.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: `2px solid ${tier.border}`,
                  background: tier.bg,
                  boxShadow: idx === 2 ? "0 8px 32px rgba(0,87,168,0.18)" : "0 2px 12px rgba(0,0,0,0.06)",
                  transform: idx === 2 ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Card header */}
                <div
                  className="p-5 text-center"
                  style={{
                    background: idx === 2
                      ? "linear-gradient(135deg, #0057A8, #003F7A)"
                      : idx === 1
                      ? "linear-gradient(135deg, #B8860B, #F5C518)"
                      : "linear-gradient(135deg, #64748B, #94A3B8)",
                  }}
                >
                  {idx === 2 && (
                    <div className="inline-block mb-2 px-3 py-0.5 rounded-full text-xs font-bold" style={{ background: "#F5C518", color: "#000" }}>
                      {isUz ? "Eng yuqori" : "Топ статус"}
                    </div>
                  )}
                  <div className="text-4xl mb-1">{tier.icon}</div>
                  <h3 className="text-2xl font-black text-white">{tier.nameUz}</h3>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {isUz ? tier.conditionUz : tier.conditionRu}
                  </p>
                </div>

                {/* Discount badge */}
                <div className="px-5 py-3 text-center" style={{ borderBottom: `1px solid ${tier.border}` }}>
                  <span className="text-xl font-extrabold" style={{ color: tier.id === "platinum" ? "#0057A8" : tier.id === "gold" ? "#B8860B" : "#64748B" }}>
                    {isUz ? tier.discountUz : tier.discountRu}
                  </span>
                  <span className="block text-xs text-gray-500 mt-0.5">{tier.pointsRate}</span>
                </div>

                {/* Benefits */}
                <ul className="p-5 space-y-2.5">
                  {tier.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: tier.id === "platinum" ? "#0057A8" : tier.id === "gold" ? "#B8860B" : "#64748B" }}>✓</span>
                      {isUz ? b.uz : b.ru}
                    </li>
                  ))}
                </ul>

                <div className="px-5 pb-5">
                  <button
                    onClick={() => setModal(true)}
                    className="w-full py-3 rounded-full font-bold text-sm text-white transition-opacity hover:opacity-90"
                    style={{
                      background: idx === 2 ? "#0057A8" : idx === 1 ? "#B8860B" : "#64748B",
                    }}
                  >
                    {isUz ? `${tier.nameUz} olish →` : `Получить ${tier.nameRu} →`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COMPARISON TABLE ── */}
        <div className="mb-12 overflow-x-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
            {isUz ? "📊 Imtiyozlar taqqoslash" : "📊 Сравнение привилегий"}
          </h2>
          <table className="w-full bg-white rounded-2xl overflow-hidden text-sm" style={{ border: "1px solid #E5E7EB", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="text-left p-4 text-gray-600 font-semibold" style={{ borderBottom: "1px solid #E5E7EB" }}>
                  {isUz ? "Imtiyoz" : "Привилегия"}
                </th>
                {tiers.map((t) => (
                  <th key={t.id} className="p-4 text-center font-extrabold" style={{ borderBottom: "1px solid #E5E7EB", color: t.id === "platinum" ? "#0057A8" : t.id === "gold" ? "#B8860B" : "#64748B" }}>
                    {t.icon} {t.nameUz}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { uz: "Chegirma", ru: "Скидка", vals: ["3%", "5%", "7%"] },
                { uz: "Ball koeffitsienti", ru: "Коэффициент баллов", vals: ["×1", "×1.5", "×2"] },
                { uz: "Telegram VIP guruh", ru: "Telegram VIP-группа", vals: ["✓", "✓", "✓"] },
                { uz: "Tug'ilgan kun taklifi", ru: "Предложение ко дню рождения", vals: ["✓", "✓", "✓"] },
                { uz: "Travel aksessuar sovg'a", ru: "Подарок travel-аксессуар", vals: ["—", "✓", "✓"] },
                { uz: "Prioritet xizmat", ru: "Приоритетное обслуживание", vals: ["—", "✓", "✓"] },
                { uz: "CIP Lounge", ru: "CIP Lounge", vals: ["—", "—", "✓"] },
                { uz: "5★ mehmonxona (1 kecha)", ru: "5★ отель (1 ночь)", vals: ["—", "—", "✓"] },
                { uz: "Shaxsiy menejer 24/7", ru: "Личный менеджер 24/7", vals: ["—", "—", "✓"] },
                { uz: "Offline networking", ru: "Офлайн-нетворкинг", vals: ["—", "—", "✓"] },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#FAFAFA" : "#fff" }}>
                  <td className="p-4 text-gray-700" style={{ borderTop: "1px solid #F3F4F6" }}>
                    {isUz ? row.uz : row.ru}
                  </td>
                  {row.vals.map((v, j) => (
                    <td key={j} className="p-4 text-center font-bold" style={{
                      borderTop: "1px solid #F3F4F6",
                      color: v === "—" ? "#D1D5DB" : v === "✓" ? "#16A34A" : tiers[j].id === "platinum" ? "#0057A8" : tiers[j].id === "gold" ? "#B8860B" : "#64748B",
                    }}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── TELEGRAM CTA ── */}
        <div
          className="rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center gap-5"
          style={{ background: "linear-gradient(135deg, #0088CC 0%, #006699 100%)" }}
        >
          <div className="text-5xl flex-shrink-0">✈️</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-extrabold text-lg mb-1">
              {isUz ? "Telegram VIP guruhiga qo'shiling" : "Присоединяйтесь к Telegram VIP-группе"}
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              {isUz
                ? "Haftalik eksklyuziv aksiyalar, sovrinli o'yinlar va flash-sotuvlar. Faqat SEM Club a'zolari uchun."
                : "Еженедельные эксклюзивные акции, розыгрыши и флэш-распродажи. Только для членов SEM Club."}
            </p>
          </div>
          <a
            href="https://t.me/semtravel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
            style={{ background: "#fff", color: "#0088CC" }}
          >
            📲 {isUz ? "Guruhga kirish" : "Войти в группу"}
          </a>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
            {isUz ? "❓ Ko'p so'raladigan savollar" : "❓ Часто задаваемые вопросы"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white overflow-hidden"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm">
                    {isUz ? faq.qUz : faq.qRu}
                  </span>
                  <span className="text-xl flex-shrink-0 transition-transform" style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed" style={{ borderTop: "1px solid #F3F4F6" }}>
                    <div className="pt-3">{isUz ? faq.aUz : faq.aRu}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── SEO BLOCK ── */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">
            {isUz ? "SEM Club — ishonchli sayohatchilar uchun" : "SEM Club — для преданных путешественников"}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isUz
              ? "SEM Travel — 2011 yildan beri O'zbekistondagi eng ishonchli sayohat agentligi. 30 000+ mijoz bizga ishonadi. SEM Club loyalty dasturi orqali har bir sayohatingizdan maksimal foyda oling: chegirmalar, eksklyuziv aksiyalar, VIP xizmatlar va sovrinlar. Toshkentdan Turkiya, Dubai, Tailand, Misr, Maldiv va 50+ mamlakatga eng arzon narxlarda turlar."
              : "SEM Travel — самое надёжное туристическое агентство Узбекистана с 2011 года. 30 000+ клиентов доверяют нам. Программа лояльности SEM Club позволяет получать максимум от каждого путешествия: скидки, эксклюзивные акции, VIP-услуги и призы. Туры из Ташкента в Турцию, Дубай, Таиланд, Египет, Мальдивы и 50+ стран по лучшим ценам."}
          </p>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-8 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <h3 className="text-white font-extrabold text-xl mb-2">
            {isUz ? "Bugun SEM Club ga qo'shiling!" : "Вступайте в SEM Club сегодня!"}
          </h3>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz
              ? "Birinchi turingizni bron qiling va darhol Silver statusga ega bo'ling"
              : "Забронируйте первый тур и сразу получите статус Silver"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setModal(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#FF6B35", color: "#fff" }}
            >
              🎯 {isUz ? "A'zo bo'lish" : "Вступить в клуб"}
            </button>
            <a
              href="https://wa.me/998946642222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp
            </a>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              ✈️ {isUz ? "Turlarni ko'rish" : "Смотреть туры"}
            </Link>
          </div>
        </div>

        <div className="pb-6">
          <Link href="/" className="text-sm font-medium" style={{ color: "#0057A8" }}>
            ← {isUz ? "Bosh sahifaga qaytish" : "Вернуться на главную"}
          </Link>
        </div>
      </div>

      {modal && (
        <LeadModal
          isUz={isUz}
          title={isUz ? "💎 SEM Club — A'zo bo'lish" : "💎 SEM Club — Вступление"}
          type="SEM Club a'zolik"
          source="semtravel.uz/club"
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
}
