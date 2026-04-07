"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/language-context";
import LeadModal from "@/components/LeadModal";

// ── TIER DATA ─────────────────────────────────────────────────────────────────
const tiers = [
  {
    id: "silver", nameUz: "Silver", nameRu: "Silver",
    color: "#64748B", bg: "#F8FAFC", border: "#CBD5E1", icon: "🥈",
    conditionUz: "1-tur sotib olgandan keyin", conditionRu: "После покупки 1-го тура",
    discountUz: "3% chegirma", discountRu: "Скидка 3%",
    cashbackUz: "1% cashback", cashbackRu: "Кэшбэк 1%",
    pointsRate: "1 USD = 1 ball",
    benefits: [
      { uz: "3% chegirma barcha turlarga", ru: "Скидка 3% на все туры" },
      { uz: "1% cashback keyingi turga", ru: "Кэшбэк 1% на следующий тур" },
      { uz: "500 ball welcome bonus", ru: "500 баллов welcome-бонус" },
      { uz: "Telegram VIP guruhiga kirish", ru: "Доступ в Telegram VIP-группу" },
      { uz: "Tug'ilgan kun uchun maxsus taklif", ru: "Спецпредложение на день рождения" },
      { uz: "Haftalik eksklyuziv aksiyalar", ru: "Еженедельные эксклюзивные акции" },
    ],
  },
  {
    id: "gold", nameUz: "Gold", nameRu: "Gold",
    color: "#B8860B", bg: "#FFFBEB", border: "#FCD34D", icon: "🥇",
    conditionUz: "3 ta tur yoki 500$ ball", conditionRu: "3 тура или 500$ баллов",
    discountUz: "5% chegirma", discountRu: "Скидка 5%",
    cashbackUz: "2% cashback", cashbackRu: "Кэшбэк 2%",
    pointsRate: "1 USD = 1.5 ball",
    benefits: [
      { uz: "5% chegirma barcha turlarga", ru: "Скидка 5% на все туры" },
      { uz: "2% cashback keyingi turga", ru: "Кэшбэк 2% на следующий тур" },
      { uz: "Silver barcha imtiyozlari", ru: "Все привилегии Silver" },
      { uz: "Bepul travel yostiq yoki aksessuar", ru: "Бесплатная travel-подушка или аксессуар" },
      { uz: "Prioritet xizmat — tez navbat", ru: "Приоритетное обслуживание" },
      { uz: "Eksklyuziv Gold flash-sotuvlar", ru: "Эксклюзивные Gold-флэш-распродажи" },
      { uz: "Yil oxirida sovrin qur'asi", ru: "Розыгрыш призов в конце года" },
    ],
  },
  {
    id: "platinum", nameUz: "Platinum", nameRu: "Platinum",
    color: "#0057A8", bg: "#EFF6FF", border: "#93C5FD", icon: "💎",
    conditionUz: "7 ta tur yoki 1500$ ball", conditionRu: "7 туров или 1500$ баллов",
    discountUz: "7% chegirma", discountRu: "Скидка 7%",
    cashbackUz: "3% cashback", cashbackRu: "Кэшбэк 3%",
    pointsRate: "1 USD = 2 ball",
    benefits: [
      { uz: "7% chegirma barcha turlarga", ru: "Скидка 7% на все туры" },
      { uz: "3% cashback keyingi turga", ru: "Кэшбэк 3% на следующий тур" },
      { uz: "Gold barcha imtiyozlari", ru: "Все привилегии Gold" },
      { uz: "CIP Lounge — VIP aerport zali", ru: "CIP Lounge — VIP-зал аэропорта" },
      { uz: "5★ mehmonxonada 1 kecha sovg'a (yillik)", ru: "1 ночь в 5★ отеле в подарок (ежегодно)" },
      { uz: "Shaxsiy menejer 24/7", ru: "Персональный менеджер 24/7" },
      { uz: "Yangi yo'nalishlar — birinchi xabar", ru: "Первым узнавать о новых направлениях" },
      { uz: "Yiliga 2 marta offline networking", ru: "2 раза в год офлайн-нетворкинг" },
    ],
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Aziz T.", status: "gold", icon: "🥇",
    uz: "Gold statusim bor. Dubayga ketganimda CIP lounge uchun qo'shimcha to'lamaganimni bilmagan edim, menejer o'zi tashkillashtirib berdi. Juda qulay!",
    ru: "У меня Gold статус. Когда летел в Дубай, не знал, что CIP-зал для меня уже организован. Очень удобно!",
  },
  {
    name: "Nodira K.", status: "platinum", icon: "💎",
    uz: "Platinum bo'lgandan beri shaxsiy menejerim bor — tunda ham javob beradi. 5 yildan beri SEM Travel faqat yaxshi xotiralar bilan bog'liq.",
    ru: "С Platinum у меня есть личный менеджер — отвечает даже ночью. SEM Travel уже 5 лет — только хорошие воспоминания.",
  },
  {
    name: "Jamshid R.", status: "silver", icon: "🥈",
    uz: "Birinchi turda 500 ball welcome bonus olish juda yaxshi g'oya. Ikkinchi turga chegirma ishlatdim — real tejash sezildi.",
    ru: "500 баллов welcome-бонус при первом туре — отличная идея. Использовал скидку на второй тур — реальная экономия.",
  },
  {
    name: "Malika S.", status: "gold", icon: "🥇",
    uz: "Telegram guruhida flash-sotuv bo'ldi — Tailandga narx 30% arzonlashdi. Shu kuni bron qildim. Ajoyib!",
    ru: "В Telegram-группе была флэш-распродажа — Таиланд подешевел на 30%. В тот же день забронировала. Отлично!",
  },
];

// ── HOW IT WORKS ──────────────────────────────────────────────────────────────
const steps = [
  { num: "01", emoji: "✈️", uz: "Tur sotib oling", ru: "Купите тур", descUz: "SEM Travel orqali istalgan tur buyurtma bering", descRu: "Забронируйте любой тур через SEM Travel" },
  { num: "02", emoji: "💰", uz: "Ballar to'plang", ru: "Накапливайте баллы", descUz: "Har 1$ uchun statusga qarab 1–2 ball", descRu: "1–2 балла за каждый $1 по статусу" },
  { num: "03", emoji: "🏆", uz: "Status oling", ru: "Повышайте статус", descUz: "Silver → Gold → Platinum avtomatik", descRu: "Silver → Gold → Platinum автоматически" },
  { num: "04", emoji: "🎁", uz: "Sovrinlar oling", ru: "Получайте подарки", descUz: "Chegirma, cashback, CIP Lounge, 5★", descRu: "Скидки, кэшбэк, CIP Lounge, 5★" },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  { qUz: "SEM Club ga qanday a'zo bo'laman?", qRu: "Как вступить в SEM Club?", aUz: "Birinchi turingizni SEM Travel orqali sotib olganingizdan so'ng avtomatik Silver statusda a'zo bo'lasiz va darhol 500 ball sovg'a olasiz.", aRu: "После первой покупки тура автоматически получаете статус Silver и сразу 500 приветственных баллов." },
  { qUz: "Cashback qanday ishlaydi?", qRu: "Как работает кэшбэк?", aUz: "Har bir turdan tur narxining 1–3% cashback sifatida ballaringizga qo'shiladi. Keyingi turda chegirma sifatida ishlatiladi.", aRu: "С каждого тура 1–3% от стоимости начисляется как кэшбэк. Используется как скидка на следующий тур." },
  { qUz: "Ballar qancha muddatda amal qiladi?", qRu: "Сколько действуют баллы?", aUz: "24 oy (2 yil). Yangi tur sotib olganda muddati yangilanadi.", aRu: "24 месяца (2 года). При покупке нового тура срок обновляется." },
  { qUz: "Welcome bonus 500 ball qanday ishlatiladi?", qRu: "Как использовать 500 приветственных баллов?", aUz: "Ikkinchi turingizni bron qilayotganda menejeringizga ayting — ballaringiz chegirma sifatida yechib olinadi.", aRu: "При бронировании второго тура сообщите менеджеру — баллы будут списаны как скидка." },
  { qUz: "Platinum statusga qachon ega bo'laman?", qRu: "Когда я получу Platinum?", aUz: "7 ta tur yoki 1500$ ball to'plaganingizdan keyin avtomatik Platinum beriladi.", aRu: "После 7 туров или 1500$ баллов автоматически присваивается Platinum." },
  { qUz: "CIP Lounge qanday ishlaydi?", qRu: "Как работает CIP Lounge?", aUz: "Platinum a'zolar Toshkent aeroportida VIP zaldan foydalanadi. Tur bron qilishda menejerga xabar bering.", aRu: "Platinum-члены пользуются VIP-залом аэропорта Ташкент. Сообщите менеджеру при бронировании." },
];

// ── ANIMATED COUNTER HOOK ─────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ClubClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const [calcTour, setCalcTour] = useState(1000);
  const [calcTier, setCalcTier] = useState(1);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Intersection observer for animated counters
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const count1 = useCountUp(3000, 1800, statsVisible);
  const count2 = useCountUp(30000, 2000, statsVisible);
  const count3 = useCountUp(500, 1500, statsVisible);

  // Calculator logic
  const discounts = [3, 5, 7];
  const cashbacks = [1, 2, 3];
  const saving = Math.round(calcTour * discounts[calcTier] / 100);
  const cashback = Math.round(calcTour * cashbacks[calcTier] / 100);
  const tierNames = ["Silver 🥈", "Gold 🥇", "Platinum 💎"];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001E46 0%, #0057A8 60%, #1a6fbf 100%)", paddingBottom: 80 }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="absolute rounded-full" style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1, background: "rgba(255,255,255,0.5)", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full text-sm font-bold" style={{ background: "rgba(245,197,24,0.15)", border: "1.5px solid rgba(245,197,24,0.5)", color: "#F5C518" }}>
            💎 SEM CLUB
          </div>
          <h1 className="font-black leading-tight mb-4 text-white" style={{ fontSize: "clamp(28px, 5vw, 52px)" }}>
            {isUz ? <>Sayohat qiling — <span style={{ color: "#F5C518" }}>mukofot oling</span></> : <>Путешествуйте — <span style={{ color: "#F5C518" }}>получайте награды</span></>}
          </h1>
          <p className="mb-6 mx-auto" style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, maxWidth: 520 }}>
            {isUz ? "SEM Club — doimiy mijozlar uchun eksklyuziv imtiyozlar dasturi." : "SEM Club — эксклюзивная программа привилегий для постоянных клиентов."}
          </p>

          {/* 1 — Welcome bonus banner */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 rounded-2xl text-sm font-bold" style={{ background: "rgba(255,107,53,0.2)", border: "1.5px solid rgba(255,107,53,0.6)" }}>
            <span className="text-2xl">🎁</span>
            <span style={{ color: "#fff" }}>
              {isUz ? "Bugun a'zo bo'ling → " : "Вступайте сегодня → "}
              <span style={{ color: "#F5C518" }}>{isUz ? "500 ball sovg'a!" : "500 баллов в подарок!"}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {tiers.map((t) => (
              <div key={t.id} className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm" style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff" }}>
                {t.icon} {t.nameUz}
              </div>
            ))}
          </div>

          <button onClick={() => setModal(true)} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-base transition-all hover:scale-105 active:scale-95" style={{ background: "#FF6B35", color: "#fff", boxShadow: "0 6px 28px rgba(255,107,53,0.5)" }}>
            🎯 {isUz ? "A'zo bo'lish — 500 ball olish" : "Вступить — получить 500 баллов"}
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10">

        {/* ── 6 — ANIMATED STATS ── */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { emoji: "👥", val: statsVisible ? `${count1.toLocaleString()}+` : "0", uz: "A'zolar", ru: "Участников" },
            { emoji: "✈️", val: statsVisible ? `${count2.toLocaleString()}+` : "0", uz: "Bajarilgan turlar", ru: "Совершённых туров" },
            { emoji: "🎁", val: statsVisible ? `${count3}+` : "0", uz: "Berilgan sovrinlar", ru: "Выданных призов" },
            { emoji: "⭐", val: "4.9/5", uz: "Mijoz bahosi", ru: "Оценка клиентов" },
          ].map((s, i) => (
            <div key={i} className="text-center p-4 rounded-2xl bg-white" style={{ border: "1px solid #E5E7EB" }}>
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="font-extrabold text-gray-900 text-lg" style={{ color: "#0057A8" }}>{s.val}</div>
              <div className="text-xs text-gray-500 mt-0.5">{isUz ? s.uz : s.ru}</div>
            </div>
          ))}
        </div>

        {/* ── HOW IT WORKS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">{isUz ? "⚙️ Qanday ishlaydi?" : "⚙️ Как это работает?"}</h2>
          <p className="text-sm text-gray-500 text-center mb-8">{isUz ? "4 ta oddiy qadam" : "4 простых шага"}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center p-5 rounded-2xl bg-white" style={{ border: "1px solid #E5E7EB" }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-xs font-extrabold text-white" style={{ background: "#0057A8" }}>{s.num}</div>
                <div className="text-3xl mb-2 mt-2">{s.emoji}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{isUz ? s.uz : s.ru}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{isUz ? s.descUz : s.descRu}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3 — PROGRESS BAR ── */}
        <div className="rounded-2xl p-6 mb-12 bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-1">{isUz ? "📈 Status yo'li" : "📈 Путь к статусу"}</h2>
          <p className="text-sm text-gray-500 mb-6">{isUz ? "Har bir tur sizni yangi darajaga yaqinlashtiradi" : "Каждый тур приближает вас к новому уровню"}</p>
          <div className="relative">
            {/* Track */}
            <div className="h-3 rounded-full mb-1" style={{ background: "#E5E7EB" }}>
              <div className="h-3 rounded-full transition-all" style={{ width: "100%", background: "linear-gradient(90deg, #94A3B8 0%, #F5C518 45%, #0057A8 100%)" }} />
            </div>
            {/* Milestones */}
            <div className="flex justify-between mt-4">
              {[
                { icon: "🥈", uz: "Silver", ru: "Silver", condUz: "1-tur", condRu: "1 тур" },
                { icon: "🥇", uz: "Gold", ru: "Gold", condUz: "3-tur", condRu: "3 тура" },
                { icon: "💎", uz: "Platinum", ru: "Platinum", condUz: "7-tur", condRu: "7 туров" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: i === 0 ? "#F1F5F9" : i === 1 ? "#FEF9C3" : "#EFF6FF", border: `2px solid ${i === 0 ? "#CBD5E1" : i === 1 ? "#FCD34D" : "#93C5FD"}` }}>{m.icon}</div>
                  <span className="text-xs font-bold text-gray-700">{isUz ? m.uz : m.ru}</span>
                  <span className="text-xs text-gray-400">{isUz ? m.condUz : m.condRu}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2 — SAVINGS CALCULATOR ── */}
        <div className="rounded-2xl p-6 mb-12" style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #EFF6FF 100%)", border: "1.5px solid #BFDBFE" }}>
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">🧮 {isUz ? "Tejash kalkulyatori" : "Калькулятор экономии"}</h2>
          <p className="text-sm text-gray-500 mb-6">{isUz ? "Statusingizga qarab qancha tejashingizni hisoblang" : "Рассчитайте экономию в зависимости от вашего статуса"}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{isUz ? "Tur narxi ($)" : "Стоимость тура ($)"}</label>
              <input
                type="range" min={300} max={5000} step={100}
                value={calcTour} onChange={(e) => setCalcTour(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>$300</span><span className="font-bold text-gray-700">${calcTour.toLocaleString()}</span><span>$5000</span></div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{isUz ? "Status" : "Статус"}</label>
              <div className="flex gap-2">
                {tierNames.map((name, i) => (
                  <button key={i} onClick={() => setCalcTier(i)}
                    className="flex-1 py-2 rounded-xl text-xs font-bold transition-all"
                    style={{ background: calcTier === i ? (i === 2 ? "#0057A8" : i === 1 ? "#B8860B" : "#64748B") : "#F1F5F9", color: calcTier === i ? "#fff" : "#374151" }}>
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="rounded-xl p-4 text-center bg-white" style={{ border: "1px solid #E5E7EB" }}>
              <div className="text-2xl font-extrabold" style={{ color: "#0057A8" }}>${saving}</div>
              <div className="text-xs text-gray-500 mt-1">{isUz ? `${discounts[calcTier]}% chegirma` : `Скидка ${discounts[calcTier]}%`}</div>
            </div>
            <div className="rounded-xl p-4 text-center bg-white" style={{ border: "1px solid #E5E7EB" }}>
              <div className="text-2xl font-extrabold" style={{ color: "#16A34A" }}>${cashback}</div>
              <div className="text-xs text-gray-500 mt-1">{isUz ? `${cashbacks[calcTier]}% cashback` : `Кэшбэк ${cashbacks[calcTier]}%`}</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: "#0057A8" }}>
              <div className="text-2xl font-extrabold text-white">${saving + cashback}</div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>{isUz ? "Jami foyda" : "Итого выгода"}</div>
            </div>
          </div>
        </div>

        {/* ── TIER CARDS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">{isUz ? "🏆 Status darajalari" : "🏆 Уровни статуса"}</h2>
          <p className="text-sm text-gray-500 text-center mb-8">{isUz ? "Har bir daraja yangi imtiyozlar ochadi" : "Каждый уровень открывает новые привилегии"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tiers.map((tier, idx) => (
              <div key={tier.id} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${tier.border}`, background: tier.bg, boxShadow: idx === 2 ? "0 8px 32px rgba(0,87,168,0.18)" : "0 2px 12px rgba(0,0,0,0.06)", transform: idx === 2 ? "scale(1.02)" : "scale(1)" }}>
                <div className="p-5 text-center" style={{ background: idx === 2 ? "linear-gradient(135deg, #0057A8, #003F7A)" : idx === 1 ? "linear-gradient(135deg, #B8860B, #F5C518)" : "linear-gradient(135deg, #64748B, #94A3B8)" }}>
                  {idx === 2 && <div className="inline-block mb-2 px-3 py-0.5 rounded-full text-xs font-bold" style={{ background: "#F5C518", color: "#000" }}>{isUz ? "Eng yuqori" : "Топ статус"}</div>}
                  <div className="text-4xl mb-1">{tier.icon}</div>
                  <h3 className="text-2xl font-black text-white">{tier.nameUz}</h3>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>{isUz ? tier.conditionUz : tier.conditionRu}</p>
                </div>
                <div className="px-5 py-3 flex justify-between items-center" style={{ borderBottom: `1px solid ${tier.border}` }}>
                  <span className="text-base font-extrabold" style={{ color: tier.color }}>{isUz ? tier.discountUz : tier.discountRu}</span>
                  <span className="text-sm font-bold px-2.5 py-0.5 rounded-full" style={{ background: "#F0FDF4", color: "#16A34A" }}>{isUz ? tier.cashbackUz : tier.cashbackRu}</span>
                </div>
                <ul className="p-5 space-y-2.5">
                  {tier.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: tier.color }}>✓</span>
                      {isUz ? b.uz : b.ru}
                    </li>
                  ))}
                </ul>
                <div className="px-5 pb-5">
                  <button onClick={() => setModal(true)} className="w-full py-3 rounded-full font-bold text-sm text-white transition-opacity hover:opacity-90" style={{ background: idx === 2 ? "#0057A8" : idx === 1 ? "#B8860B" : "#64748B" }}>
                    {isUz ? `${tier.nameUz} olish →` : `Получить ${tier.nameRu} →`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COMPARISON TABLE ── */}
        <div className="mb-12 overflow-x-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">{isUz ? "📊 Imtiyozlar taqqoslash" : "📊 Сравнение привилегий"}</h2>
          <table className="w-full bg-white rounded-2xl overflow-hidden text-sm" style={{ border: "1px solid #E5E7EB", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="text-left p-4 text-gray-600 font-semibold" style={{ borderBottom: "1px solid #E5E7EB" }}>{isUz ? "Imtiyoz" : "Привилегия"}</th>
                {tiers.map((t) => (
                  <th key={t.id} className="p-4 text-center font-extrabold" style={{ borderBottom: "1px solid #E5E7EB", color: t.color }}>{t.icon} {t.nameUz}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { uz: "Chegirma", ru: "Скидка", vals: ["3%", "5%", "7%"] },
                { uz: "Cashback", ru: "Кэшбэк", vals: ["1%", "2%", "3%"] },
                { uz: "Welcome bonus", ru: "Welcome-бонус", vals: ["500 ball", "500 ball", "500 ball"] },
                { uz: "Telegram VIP guruh", ru: "Telegram VIP-группа", vals: ["✓", "✓", "✓"] },
                { uz: "Tug'ilgan kun taklifi", ru: "Предложение на ДР", vals: ["✓", "✓", "✓"] },
                { uz: "Travel aksessuar", ru: "Travel-аксессуар", vals: ["—", "✓", "✓"] },
                { uz: "Prioritet xizmat", ru: "Приоритетное обслуживание", vals: ["—", "✓", "✓"] },
                { uz: "CIP Lounge", ru: "CIP Lounge", vals: ["—", "—", "✓"] },
                { uz: "5★ mehmonxona (1 kecha)", ru: "5★ отель (1 ночь)", vals: ["—", "—", "✓"] },
                { uz: "Shaxsiy menejer 24/7", ru: "Личный менеджер 24/7", vals: ["—", "—", "✓"] },
                { uz: "Offline networking", ru: "Офлайн-нетворкинг", vals: ["—", "—", "✓"] },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#FAFAFA" : "#fff" }}>
                  <td className="p-4 text-gray-700" style={{ borderTop: "1px solid #F3F4F6" }}>{isUz ? row.uz : row.ru}</td>
                  {row.vals.map((v, j) => (
                    <td key={j} className="p-4 text-center font-bold" style={{ borderTop: "1px solid #F3F4F6", color: v === "—" ? "#D1D5DB" : v === "✓" ? "#16A34A" : tiers[j].color }}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 5 — TESTIMONIALS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">{isUz ? "💬 A'zolarimiz aytadi" : "💬 Говорят наши участники"}</h2>
          <p className="text-sm text-gray-500 text-center mb-8">{isUz ? "Haqiqiy tajribalar" : "Реальный опыт"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white" style={{ border: "1px solid #E5E7EB" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: t.status === "platinum" ? "#EFF6FF" : t.status === "gold" ? "#FFFBEB" : "#F8FAFC" }}>
                    {t.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs capitalize" style={{ color: t.status === "platinum" ? "#0057A8" : t.status === "gold" ? "#B8860B" : "#64748B" }}>{t.status}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#F5C518" }}>★</span>)}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{isUz ? t.uz : t.ru}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TELEGRAM CTA ── */}
        <div className="rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center gap-5" style={{ background: "linear-gradient(135deg, #0088CC 0%, #006699 100%)" }}>
          <div className="text-5xl flex-shrink-0">✈️</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-extrabold text-lg mb-1">{isUz ? "Telegram VIP guruhiga qo'shiling" : "Присоединяйтесь к Telegram VIP-группе"}</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              {isUz ? "Haftalik eksklyuziv aksiyalar, sovrinli o'yinlar va flash-sotuvlar." : "Еженедельные акции, розыгрыши и флэш-распродажи."}
            </p>
          </div>
          <a href="https://t.me/semtravel" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: "#fff", color: "#0088CC" }}>
            📲 {isUz ? "Guruhga kirish" : "Войти в группу"}
          </a>
        </div>

        {/* ── 7 — DIGITAL CARD PREVIEW ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">{isUz ? "💳 Digital karta" : "💳 Цифровая карта"}</h2>
          <p className="text-sm text-gray-500 text-center mb-8">{isUz ? "A'zo bo'lganingizdan keyin Telegram orqali yuboriladi" : "Отправляется в Telegram после вступления"}</p>
          <div className="max-w-sm mx-auto">
            <div className="rounded-3xl p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #001E46 0%, #0057A8 100%)", boxShadow: "0 16px 48px rgba(0,87,168,0.4)", minHeight: 200 }}>
              {/* Card shine */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full" style={{ background: "rgba(255,255,255,0.05)", transform: "translate(30%, -30%)" }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full" style={{ background: "rgba(245,197,24,0.08)", transform: "translate(-30%, 30%)" }} />
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-black text-lg">SEM CLUB</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(245,197,24,0.2)", color: "#F5C518", border: "1px solid rgba(245,197,24,0.4)" }}>💎 PLATINUM</span>
                </div>
                <div className="mb-4">
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{isUz ? "A'zo" : "Участник"}</p>
                  <p className="text-white font-bold">Ismingiz Familiyangiz</p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{isUz ? "Ballar" : "Баллы"}</p>
                    <p className="text-2xl font-extrabold" style={{ color: "#F5C518" }}>2 450</p>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "rgba(255,255,255,0.1)" }}>💎</div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">{isUz ? "* Namuna karta — sizniki personallashtirilib yuboriladi" : "* Образец карты — ваша будет персонализирована"}</p>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">{isUz ? "❓ Ko'p so'raladigan savollar" : "❓ Часто задаваемые вопросы"}</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-3 p-5 text-left">
                  <span className="font-semibold text-gray-900 text-sm">{isUz ? faq.qUz : faq.qRu}</span>
                  <span className="text-xl flex-shrink-0 transition-transform" style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
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
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">{isUz ? "SEM Club — ishonchli sayohatchilar uchun" : "SEM Club — для преданных путешественников"}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isUz ? "SEM Travel — 2011 yildan beri O'zbekistondagi eng ishonchli sayohat agentligi. 30 000+ mijoz bizga ishonadi. SEM Club loyalty dasturi — chegirmalar, cashback, eksklyuziv aksiyalar, CIP Lounge, 5★ mehmonxona sovg'alari. Toshkentdan Turkiya, Dubai, Tailand, Misr, Maldiv va 50+ mamlakatga eng arzon narxlarda turlar."
              : "SEM Travel — самое надёжное туристическое агентство Узбекистана с 2011 года. 30 000+ клиентов. SEM Club — скидки, кэшбэк, эксклюзивные акции, CIP Lounge, ночь в 5★ отеле. Туры из Ташкента в Турцию, Дубай, Таиланд, Египет, Мальдивы и 50+ стран."}
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="rounded-2xl p-8 mb-10 text-center" style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}>
          <h3 className="text-white font-extrabold text-xl mb-2">{isUz ? "Bugun SEM Club ga qo'shiling!" : "Вступайте в SEM Club сегодня!"}</h3>
          <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz ? "Birinchi turingizni bron qiling → darhol Silver status + 500 ball sovg'a" : "Забронируйте первый тур → сразу Silver статус + 500 баллов в подарок"}
          </p>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-bold" style={{ background: "rgba(245,197,24,0.2)", color: "#F5C518", border: "1px solid rgba(245,197,24,0.4)" }}>
            🎁 {isUz ? "500 ball = keyingi turda $5–15 chegirma" : "500 баллов = скидка $5–15 на следующий тур"}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setModal(true)} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: "#FF6B35", color: "#fff" }}>
              🎯 {isUz ? "A'zo bo'lish" : "Вступить в клуб"}
            </button>
            <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: "#25D366", color: "#fff" }}>
              💬 WhatsApp
            </a>
            <Link href="/tours" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}>
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
