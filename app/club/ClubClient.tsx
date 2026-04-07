"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useLang } from "@/lib/language-context";
import LeadModal from "@/components/LeadModal";

// ── 3D TILT CARD ──────────────────────────────────────────────────────────────
function Card3D({ children, className = "", style = {}, intensity = 18 }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -intensity;
      el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.04,1.04,1.04)`;
      el.style.boxShadow = `${-x * 1.5}px ${y * 1.5}px 40px rgba(0,0,0,0.22)`;
    });
  }, [intensity]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    el.style.boxShadow = "";
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: "relative", transformStyle: "preserve-3d", transition: "transform 0.18s ease, box-shadow 0.18s ease", willChange: "transform", ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

// ── FLIP CARD ─────────────────────────────────────────────────────────────────
function FlipCard({ front, back, accentColor }: {
  front: React.ReactNode;
  back: React.ReactNode;
  accentColor: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ perspective: "1000px", height: "100%", minHeight: 420 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        style={{
          position: "relative", width: "100%", height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          {front}
        </div>
        {/* Back */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: accentColor, borderRadius: 16,
          overflow: "hidden",
        }}>
          {back}
        </div>
      </div>
      {/* Flip hint */}
      {!flipped && (
        <div className="absolute bottom-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}>
          hover →
        </div>
      )}
    </div>
  );
}

// ── FLOATING 3D SHAPE ─────────────────────────────────────────────────────────
function FloatShape({ emoji, size, x, y, duration, delay }: {
  emoji: string; size: number; x: number; y: number; duration: number; delay: number;
}) {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${x}%`, top: `${y}%`,
        fontSize: size,
        opacity: 0.18,
        animation: `floatZ ${duration}s ease-in-out ${delay}s infinite`,
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
      }}
    >
      {emoji}
    </div>
  );
}

// ── TIER ICONS (SVG) ──────────────────────────────────────────────────────────
function ClassicIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id="cg1" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#E8D5A3"/>
          <stop offset="50%" stopColor="#C8A96E"/>
          <stop offset="100%" stopColor="#8B6B35"/>
        </radialGradient>
        <radialGradient id="cg2" cx="40%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#F5E6C0"/>
          <stop offset="100%" stopColor="#C8A96E"/>
        </radialGradient>
      </defs>
      {/* Ribbon */}
      <rect x="16" y="0" width="4" height="10" rx="1" fill="#C8A96E" opacity="0.6"/>
      <rect x="20" y="0" width="4" height="10" rx="1" fill="#A07840" opacity="0.7"/>
      {/* Medal circle */}
      <circle cx="20" cy="26" r="13" fill="url(#cg1)" stroke="#A07840" strokeWidth="1"/>
      <circle cx="20" cy="26" r="10" fill="url(#cg2)" opacity="0.6"/>
      {/* C letter */}
      <text x="20" y="31" textAnchor="middle" fontSize="11" fontWeight="900" fontFamily="serif" fill="#6B4C1E">C</text>
    </svg>
  );
}

function GoldIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id="gg1" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFE566"/>
          <stop offset="40%" stopColor="#F5C518"/>
          <stop offset="100%" stopColor="#8B6B00"/>
        </radialGradient>
        <radialGradient id="gg2" cx="35%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#FFF0A0"/>
          <stop offset="100%" stopColor="#D4A017"/>
        </radialGradient>
      </defs>
      {/* Ribbon */}
      <rect x="16" y="0" width="4" height="10" rx="1" fill="#F5C518" opacity="0.7"/>
      <rect x="20" y="0" width="4" height="10" rx="1" fill="#B8860B" opacity="0.8"/>
      {/* Medal circle outer glow */}
      <circle cx="20" cy="26" r="14" fill="#F5C518" opacity="0.2"/>
      <circle cx="20" cy="26" r="13" fill="url(#gg1)" stroke="#B8860B" strokeWidth="1"/>
      <circle cx="20" cy="26" r="10" fill="url(#gg2)" opacity="0.5"/>
      {/* Star */}
      <text x="20" y="31" textAnchor="middle" fontSize="12" fontWeight="900" fontFamily="serif" fill="#7A5500">G</text>
    </svg>
  );
}

function PlatinumIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F0F0"/>
          <stop offset="40%" stopColor="#C8C8C8"/>
          <stop offset="100%" stopColor="#888"/>
        </linearGradient>
        <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#D0D0D0" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      {/* Diamond shape */}
      <polygon points="20,3 36,16 20,38 4,16" fill="url(#pg1)" stroke="#999" strokeWidth="0.8"/>
      {/* Inner facet top */}
      <polygon points="20,3 36,16 20,16" fill="url(#pg2)" opacity="0.5"/>
      {/* Inner facet bottom */}
      <polygon points="20,38 36,16 20,16" fill="#999" opacity="0.2"/>
      <polygon points="20,38 4,16 20,16" fill="#fff" opacity="0.15"/>
      {/* Center highlight */}
      <polygon points="20,8 32,16 20,24 8,16" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

function TierIcon({ id, size = 36 }: { id: string; size?: number }) {
  if (id === "gold")     return <GoldIcon size={size} />;
  if (id === "platinum") return <PlatinumIcon size={size} />;
  return <ClassicIcon size={size} />;
}

// ── KEYFRAMES (injected once) ─────────────────────────────────────────────────
const KEYFRAMES = `
@keyframes floatZ {
  0%   { transform: translateY(0px)   rotateY(0deg)   scale(1); }
  33%  { transform: translateY(-18px) rotateY(120deg) scale(1.08); }
  66%  { transform: translateY(-8px)  rotateY(240deg) scale(0.96); }
  100% { transform: translateY(0px)   rotateY(360deg) scale(1); }
}
@keyframes shimmerCard {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(245,197,24,0); }
  50%       { box-shadow: 0 0 28px 8px rgba(245,197,24,0.35); }
}
@keyframes spinSlow {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(360deg); }
}
@keyframes slideFadeIn {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0)    scale(1); }
}
`;

// ── TIER DATA ─────────────────────────────────────────────────────────────────
const tiers = [
  {
    id: "classic", nameUz: "Classic", nameRu: "Classic",
    color: "#A07840", bg: "#FDF8F0", border: "#C8A96E", icon: "🥈",
    conditionUz: "Birinchi turdan boshlab", conditionRu: "С первого тура",
    cashbackUz: "0.5% cashback", cashbackRu: "Кэшбэк 0.5%",
    pointsRate: "0.5% cashback",
    benefits: [
      { uz: "Har turdan 0.5% — kartangizga yoziladi", ru: "0.5% с каждого тура — начисляется на карту" },
      { uz: "$30 sertifikat birinchi turdan keyin", ru: "Сертификат $30 после первого тура" },
      { uz: "Do'st tavsiya qilganda 1% bonus", ru: "Бонус 1% за приведённого друга" },
      { uz: "Telegram yopiq guruhiga kirish", ru: "Доступ в закрытый Telegram-канал" },
      { uz: "Tug'ilgan kun uchun maxsus bonus", ru: "Спецбонус на день рождения" },
    ],
  },
  {
    id: "gold", nameUz: "Gold", nameRu: "Gold",
    color: "#B8860B", bg: "#FFFBEB", border: "#FCD34D", icon: "🥇",
    conditionUz: "20 000$+ tovar aylanmasi", conditionRu: "Оборот от $20 000",
    cashbackUz: "1% cashback", cashbackRu: "Кэшбэк 1%",
    pointsRate: "1% cashback",
    benefits: [
      { uz: "Har turdan 1% — kartangizga yoziladi", ru: "1% с каждого тура — начисляется на карту" },
      { uz: "Classic barcha imtiyozlari", ru: "Все привилегии Classic" },
      { uz: "$30 sertifikat do'stlar uchun (180 kun)", ru: "Сертификат $30 для друзей (180 дней)" },
      { uz: "Bepul travel aksessuar — sovg'a", ru: "Бесплатный travel-аксессуар в подарок" },
      { uz: "Prioritet xizmat — tez navbat", ru: "Приоритетное обслуживание" },
      { uz: "Yangi yil va 8-mart bonuslari", ru: "Бонусы на Новый год и 8 марта" },
      { uz: "Partner bonuslari (go'zallik, sport)", ru: "Бонусы у партнёров (красота, фитнес)" },
    ],
  },
  {
    id: "platinum", nameUz: "Platinum", nameRu: "Platinum",
    color: "#555", bg: "#F5F5F5", border: "#B0B0B0", icon: "💎",
    conditionUz: "40 000$+ tovar aylanmasi", conditionRu: "Оборот от $40 000",
    cashbackUz: "1.5% cashback", cashbackRu: "Кэшбэк 1.5%",
    pointsRate: "1.5% cashback",
    benefits: [
      { uz: "Har turdan 1.5% — kartangizga yoziladi", ru: "1.5% с каждого тура — начисляется на карту" },
      { uz: "Gold barcha imtiyozlari", ru: "Все привилегии Gold" },
      { uz: "CIP Lounge — VIP aerport zali", ru: "CIP Lounge — VIP-зал аэропорта" },
      { uz: "Shaxsiy menejer 24/7 konsierj", ru: "Личный менеджер 24/7 консьерж" },
      { uz: "Sayohatga 3–5 ta bagaj chekilov", ru: "Обёртка 3–5 чемоданов для поездки" },
      { uz: "VIP: tez javob, maxsus takliflar", ru: "VIP: быстрый ответ, особые предложения" },
      { uz: "Yiliga sovrin qur'asi ishtirokchisi", ru: "Участник ежегодного розыгрыша призов" },
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
    name: "Jamshid R.", status: "classic", icon: "🥈",
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
  { num: "02", emoji: "💰", uz: "Cashback to'plang", ru: "Копите кэшбэк", descUz: "Har turdan 0.5–1.5% ballar kartangizga o'tadi", descRu: "0.5–1.5% с каждого тура зачисляется на карту" },
  { num: "03", emoji: "🎁", uz: "$30 sertifikat", ru: "Сертификат $30", descUz: "Birinchi turdan keyin $30 sertifikat + do'stingizga $30", descRu: "После 1-го тура сертификат $30 + $30 для друга" },
  { num: "04", emoji: "🏆", uz: "Chegirma ishlating", ru: "Используйте скидку", descUz: "3–5% chegirma, bonuslar, partner imtiyozlar", descRu: "Скидки 3–5%, бонусы, партнёрские привилегии" },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  { qUz: "SEM Club ga qanday a'zo bo'laman?", qRu: "Как вступить в SEM Club?",
    aUz: "Birinchi turingizni SEM Travel orqali sotib olganingizdan so'ng avtomatik Classic karta beriladi. Karta menejering orqali qo'lga tegadi.",
    aRu: "После первой покупки тура вы автоматически получаете карту Classic. Карта выдаётся через вашего менеджера." },
  { qUz: "Cashback qanday ishlaydi?", qRu: "Как работает кэшбэк?",
    aUz: "Har bir turdan karta darajasiga qarab 0.5–1.5% cashback sifatida ballaringizga to'planadi. Keyingi turda chegirma sifatida ishlatiladi. Jami ball + sertifikat + chegirma tur narxining 3% dan oshmasligi kerak.",
    aRu: "С каждого тура начисляется кэшбэк 0.5–1.5% в зависимости от уровня карты. Используется как скидка на следующий тур. Общая сумма баллов + сертификата + скидки не может превышать 3% от стоимости тура." },
  { qUz: "Ballar qancha muddatda amal qiladi?", qRu: "Сколько действуют баллы?",
    aUz: "Oddiy ballar — 365 kalendar kun. Qo'shimcha bonuslar (sovg'a, sertifikat) — 150–180 kun. Do'st tavsiyasi uchun ballar — 100–150 kun.",
    aRu: "Обычные баллы — 365 календарных дней. Дополнительные бонусы (подарок, сертификат) — 150–180 дней. Баллы за реферала — 100–150 дней." },
  { qUz: "$30 sertifikat nima?", qRu: "Что такое сертификат $30?",
    aUz: "Birinchi turdan keyin $30 sertifikat beriladi — keyingi tur uchun chegirma sifatida ishlatiladi. Muddati 180 kun. Do'stingiz uchun ham $30 sertifikat beriladi.",
    aRu: "После первого тура выдаётся сертификат $30 — используется как скидка на следующий тур. Срок — 180 дней. Также выдаётся $30 для вашего друга." },
  { qUz: "Do'st tavsiya qilsam qanday bonus olaman?", qRu: "Какой бонус за приведённого друга?",
    aUz: "Do'stingiz SEM Travel orqali tur sotib olsa, uning tur narxining 1% sizning kartangizga bonus sifatida o'tadi.",
    aRu: "Если ваш друг купит тур через SEM Travel, 1% от стоимости его тура зачисляется на вашу карту в виде бонуса." },
  { qUz: "Chegirma qanday hisoblanadi?", qRu: "Как рассчитывается скидка?",
    aUz: "Keyingi turlarga chegirma: 1–3 ta tur sotib olgan bo'lsangiz — 1%, 4–6 ta tur — 2%, 7 ta va undan ko'p — 3%. Gold/Platinum uchun 3–5%.",
    aRu: "Скидка на следующие туры: 1–3 купленных тура — 1%, 4–6 туров — 2%, 7 и более — 3%. Для Gold/Platinum — 3–5%." },
  { qUz: "Karta boshqa shaxsga o'tkazilishi mumkinmi?", qRu: "Можно ли передать карту другому?",
    aUz: "Yo'q. Karta shaxsiy va boshqa shaxsga o'tkazilmaydi. Cashback ballari naqd pulga almashtirilmaydi.",
    aRu: "Нет. Карта именная и не передаётся другому лицу. Кэшбэк-баллы не обналичиваются." },
  { qUz: "SEM Club haqida qo'shimcha ma'lumot olish mumkinmi?", qRu: "Где узнать подробнее о SEM Club?",
    aUz: "info@semtravel.uz manziliga yozing yoki +998 71 275-55-55 ga qo'ng'iroq qiling.",
    aRu: "Напишите на info@semtravel.uz или позвоните по номеру +998 71 275-55-55." },
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

  // Calculator logic — cashback only
  const cashbacks = [0.5, 1, 1.5];
  const cashback = Math.round(calcTour * cashbacks[calcTier] / 100);
  const tierNames = ["Classic 🥈", "Gold 🥇", "Platinum 💎"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Inject CSS keyframes */}
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001E46 0%, #0057A8 60%, #1a6fbf 100%)", paddingBottom: 80 }}>
        {/* 3D Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "600px" }}>
          <FloatShape emoji="💎" size={40} x={8}  y={15} duration={6}   delay={0}   />
          <FloatShape emoji="✈️" size={32} x={85} y={10} duration={8}   delay={1.5} />
          <FloatShape emoji="🌟" size={28} x={20} y={70} duration={7}   delay={0.8} />
          <FloatShape emoji="🏆" size={36} x={75} y={65} duration={9}   delay={2.2} />
          <FloatShape emoji="💳" size={30} x={50} y={20} duration={7.5} delay={1}   />
          <FloatShape emoji="🎁" size={26} x={92} y={45} duration={6.5} delay={3}   />
          <FloatShape emoji="💎" size={22} x={5}  y={85} duration={8.5} delay={2}   />
          {/* Static star-dots */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute rounded-full" style={{
              width: 2, height: 2,
              background: "rgba(255,255,255,0.6)",
              left: `${(i * 37 + 11) % 100}%`,
              top:  `${(i * 53 + 7)  % 100}%`,
              animation: `pulseGlow ${2 + (i % 3)}s ease-in-out ${i * 0.3}s infinite`,
            }} />
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
              {isUz ? "Birinchi turdan keyin → " : "После первого тура → "}
              <span style={{ color: "#F5C518" }}>{isUz ? "$30 sertifikat sovg'a!" : "Сертификат $30 в подарок!"}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {tiers.map((t) => (
              <div key={t.id} className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm" style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff" }}>
                <TierIcon id={t.id} size={22} /> {t.nameUz}
              </div>
            ))}
          </div>

          <button onClick={() => setModal(true)} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-base transition-all hover:scale-105 active:scale-95" style={{ background: "#FF6B35", color: "#fff", boxShadow: "0 6px 28px rgba(255,107,53,0.5)" }}>
            🎯 {isUz ? "SEM Club a'zosi bo'lish" : "Стать участником SEM Club"}
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
            <div key={i} className="text-center p-4 rounded-2xl bg-white" style={{ border: "1px solid #E5E7EB", animation: statsVisible ? `slideFadeIn 0.5s ease ${i * 0.1}s both` : "none" }}>
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

        {/* ── EARN POINTS SECTION ── */}
        <div className="mb-12 rounded-2xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
          <div className="px-6 py-4" style={{ background: "linear-gradient(135deg, #0057A8, #003F7A)" }}>
            <h2 className="text-white font-extrabold text-lg">{isUz ? "🎯 Ballar qanday to'planadi?" : "🎯 Как накапливаются баллы?"}</h2>
            <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>{isUz ? "6 ta yo'l — ko'proq ball to'plang" : "6 способов — накапливайте больше баллов"}</p>
          </div>
          <div className="bg-white p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { emoji: "✈️", uz: "Har bir tur uchun", ru: "За каждый тур", descUz: "Classic 0.5% · Gold 1% · Platinum 1.5% cashback", descRu: "Classic 0.5% · Gold 1% · Platinum 1.5% кэшбэк" },
              { emoji: "👥", uz: "Do'st tavsiya qilsangiz", ru: "За приведённого друга", descUz: "Do'stingiz tur narxining 1% siz uchun bonus", descRu: "1% от стоимости тура вашего друга — вам" },
              { emoji: "🎂", uz: "Bayramlar: ДР, Янги йил, 8-март", ru: "Праздники: ДР, Новый год, 8 марта", descUz: "Maxsus bonus ballar beriladi", descRu: "Начисляются специальные бонусные баллы" },
              { emoji: "⭐", uz: "Izoh qoldirish", ru: "За отзыв", descUz: "Matnli yoki video sharh — bonus ball", descRu: "Текстовый или видеоотзыв — бонус" },
              { emoji: "📱", uz: "Ijtimoiy tarmoqlarga obuna", ru: "Подписка на соцсети", descUz: "YouTube, Telegram, TikTok, Instagram", descRu: "YouTube, Telegram, TikTok, Instagram" },
              { emoji: "🎫", uz: "Sovg'a sertifikat", ru: "Подарочный сертификат", descUz: "Sertifikat sotib olish yoki qabul qilish", descRu: "Покупка или получение сертификата" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#F8FAFC" }}>
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{isUz ? item.uz : item.ru}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{isUz ? item.descUz : item.descRu}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Limit notice */}
          <div className="px-5 py-3 flex items-start gap-2" style={{ background: "#FFF7ED", borderTop: "1px solid #FED7AA" }}>
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-xs text-orange-800">
              {isUz
                ? "Muhim: ball + bonus + sertifikat jami tur narxining 3% dan oshmasligi kerak. Ballar naqd pulga almashtirilmaydi."
                : "Важно: сумма баллов + бонусов + сертификатов не может превышать 3% от стоимости тура. Баллы не обналичиваются."}
            </p>
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
                { icon: "🥈", uz: "Classic", ru: "Classic", condUz: "$10k–$20k", condRu: "$10k–$20k" },
                { icon: "🥇", uz: "Gold", ru: "Gold", condUz: "$20k–$40k", condRu: "$20k–$40k" },
                { icon: "💎", uz: "Platinum", ru: "Platinum", condUz: "$40k+", condRu: "$40k+" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: i === 0 ? "#FDF8F0" : i === 1 ? "#FEF9C3" : "#F0F0F0", border: `2px solid ${i === 0 ? "#C8A96E" : i === 1 ? "#FCD34D" : "#B0B0B0"}` }}>
                    {i === 0 ? <ClassicIcon size={28}/> : i === 1 ? <GoldIcon size={28}/> : <PlatinumIcon size={28}/>}
                  </div>
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
                    style={{ background: calcTier === i ? (i === 2 ? "#0057A8" : i === 1 ? "#B8860B" : "#A07840") : "#F1F5F9", color: calcTier === i ? "#fff" : "#374151" }}>
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="rounded-xl p-4 text-center bg-white" style={{ border: "1px solid #E5E7EB" }}>
              <div className="text-2xl font-extrabold" style={{ color: "#16A34A" }}>${cashback}</div>
              <div className="text-xs text-gray-500 mt-1">{isUz ? `Bu tur uchun cashback (${cashbacks[calcTier]}%)` : `Кэшбэк с этого тура (${cashbacks[calcTier]}%)`}</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: "#16A34A" }}>
              <div className="text-2xl font-extrabold text-white">${cashback * 5}</div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>{isUz ? "5 tur uchun kartangizda" : "На карте после 5 туров"}</div>
            </div>
          </div>
        </div>

        {/* ── TIER CARDS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">{isUz ? "🏆 Status darajalari" : "🏆 Уровни статуса"}</h2>
          <p className="text-sm text-gray-500 text-center mb-8">{isUz ? "Har bir daraja yangi imtiyozlar ochadi" : "Каждый уровень открывает новые привилегии"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tiers.map((tier, idx) => {
              const headerBg = idx === 2 ? "linear-gradient(135deg, #555, #888)"
                : idx === 1 ? "linear-gradient(135deg, #B8860B, #F5C518)"
                : "linear-gradient(135deg, #A07840, #C8A96E)";
              const btnBg = idx === 2 ? "#555" : idx === 1 ? "#B8860B" : "#A07840";
              const backBg = idx === 2 ? "#444" : idx === 1 ? "#92650A" : "#7A5C2E";

              const front = (
                <div className="rounded-2xl overflow-hidden h-full flex flex-col" style={{ border: `2px solid ${tier.border}`, background: tier.bg, boxShadow: idx === 2 ? "0 8px 32px rgba(0,0,0,0.2)" : "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div className="p-5 text-center" style={{ background: headerBg }}>
                    {idx === 2 && <div className="inline-block mb-2 px-3 py-0.5 rounded-full text-xs font-bold" style={{ background: "#F5C518", color: "#000" }}>{isUz ? "Eng yuqori" : "Топ статус"}</div>}
                    <div className="flex justify-center mb-2" style={{ animation: `floatZ ${5 + idx}s ease-in-out ${idx * 0.7}s infinite` }}>
                      <TierIcon id={tier.id} size={52} />
                    </div>
                    <h3 className="text-2xl font-black text-white">{tier.nameUz}</h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>{isUz ? tier.conditionUz : tier.conditionRu}</p>
                  </div>
                  <div className="px-5 py-3 flex items-center justify-center gap-2" style={{ borderBottom: `1px solid ${tier.border}`, background: "#F0FDF4" }}>
                    <span className="text-xs font-semibold text-green-700">{isUz ? "Har turdan:" : "С каждого тура:"}</span>
                    <span className="text-base font-extrabold" style={{ color: "#16A34A" }}>{isUz ? tier.cashbackUz : tier.cashbackRu}</span>
                    <span className="text-xs text-green-600">{isUz ? "→ kartangizga" : "→ на карту"}</span>
                  </div>
                  <ul className="p-5 space-y-2.5 flex-1">
                    {tier.benefits.slice(0, 5).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: tier.color }}>✓</span>
                        {isUz ? b.uz : b.ru}
                      </li>
                    ))}
                  </ul>
                  <div className="px-5 pb-5">
                    <button onClick={() => setModal(true)} className="w-full py-3 rounded-full font-bold text-sm text-white transition-opacity hover:opacity-90" style={{ background: btnBg }}>
                      {isUz ? `${tier.nameUz} olish →` : `Получить ${tier.nameRu} →`}
                    </button>
                  </div>
                </div>
              );

              const back = (
                <div className="p-6 h-full flex flex-col justify-between" style={{ borderRadius: 16 }}>
                  <div>
                    <div className="flex justify-center mb-3" style={{ animation: "spinSlow 4s linear infinite" }}>
                      <TierIcon id={tier.id} size={48} />
                    </div>
                    <h4 className="text-white font-black text-center text-lg mb-4">{tier.nameUz} — {isUz ? "barcha imtiyozlar" : "все привилегии"}</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
                          <span className="text-yellow-300 flex-shrink-0 mt-0.5">★</span>
                          {isUz ? b.uz : b.ru}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={() => setModal(true)} className="mt-4 w-full py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)" }}>
                    {isUz ? "A'zo bo'lish →" : "Вступить →"}
                  </button>
                </div>
              );

              return (
                <FlipCard key={tier.id} front={front} back={back} accentColor={backBg} />
              );
            })}
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
                  <th key={t.id} className="p-4 text-center font-extrabold" style={{ borderBottom: "1px solid #E5E7EB", color: t.color }}>
                    <div className="flex flex-col items-center gap-1"><TierIcon id={t.id} size={24}/>{t.nameUz}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { uz: "Cashback (har turdan kartaga)", ru: "Кэшбэк (с каждого тура на карту)", vals: ["0.5%", "1%", "1.5%"] },
                { uz: "$30 sertifikat (1-turdan keyin)", ru: "Сертификат $30 (после 1-го тура)", vals: ["✓", "✓", "✓"] },
                { uz: "$30 do'st uchun sertifikat", ru: "Сертификат $30 для друга", vals: ["✓", "✓", "✓"] },
                { uz: "Do'st tavsiyasi — 1% bonus", ru: "Бонус 1% за реферала", vals: ["✓", "✓", "✓"] },
                { uz: "Telegram yopiq guruh", ru: "Закрытый Telegram-канал", vals: ["✓", "✓", "✓"] },
                { uz: "Tug'ilgan kun bonusi", ru: "Бонус на день рождения", vals: ["✓", "✓", "✓"] },
                { uz: "Yangi yil / 8-mart bonus", ru: "Бонус Новый год / 8 марта", vals: ["—", "✓", "✓"] },
                { uz: "Partner bonuslari", ru: "Бонусы у партнёров", vals: ["—", "✓", "✓"] },
                { uz: "Travel aksessuar sovg'a", ru: "Travel-аксессуар в подарок", vals: ["—", "✓", "✓"] },
                { uz: "CIP Lounge (aerport)", ru: "CIP Lounge (аэропорт)", vals: ["—", "—", "✓"] },
                { uz: "Shaxsiy menejer 24/7", ru: "Личный менеджер 24/7", vals: ["—", "—", "✓"] },
                { uz: "Bagaj chekilov (3–5 ta)", ru: "Обёртка багажа (3–5 шт.)", vals: ["—", "—", "✓"] },
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
              <Card3D key={i} intensity={10} style={{ borderRadius: 16, background: "#fff", border: "1px solid #E5E7EB", padding: 20 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: t.status === "platinum" ? "#F0F0F0" : t.status === "gold" ? "#FFFBEB" : "#FDF8F0" }}>
                    <TierIcon id={t.status} size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs capitalize" style={{ color: t.status === "platinum" ? "#0057A8" : t.status === "gold" ? "#B8860B" : "#A07840" }}>{t.status}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#F5C518" }}>★</span>)}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{isUz ? t.uz : t.ru}&rdquo;</p>
              </Card3D>
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

        {/* ── 7 — CARD PREVIEW ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">{isUz ? "💳 SEM Club Kartalar" : "💳 Карты SEM Club"}</h2>
          <p className="text-sm text-gray-500 text-center mb-8">{isUz ? "A'zo bo'lganingizdan keyin kartangiz beriladi" : "Карта выдаётся после вступления в клуб"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            {/* ── Classic Card ── */}
            <Card3D style={{ borderRadius: 16, overflow: "hidden", background: "#FAF6EF", border: "1.5px solid #C8A96E", boxShadow: "0 8px 24px rgba(200,169,110,0.25)", minHeight: 180 }}>
              {/* Running shimmer */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "shimmerCard 3.5s ease-in-out 0.5s infinite",
              }} />
              {/* Decorative waves */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg viewBox="0 0 300 180" className="absolute bottom-0 left-0 w-full opacity-20" preserveAspectRatio="none">
                  <path d="M0,80 Q75,50 150,80 Q225,110 300,80 L300,180 L0,180 Z" fill="#C8A96E"/>
                  <path d="M0,110 Q75,80 150,110 Q225,140 300,110 L300,180 L0,180 Z" fill="#A07840"/>
                </svg>
              </div>
              <div className="relative z-10 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#A07840" }}>SEM TRAVEL AGENCY</p>
                    <p className="font-black text-xl mt-0.5" style={{ color: "#6B4C1E", fontStyle: "italic" }}>Classic Card</p>
                  </div>
                  <div style={{ animation: "floatZ 4s ease-in-out infinite" }}>
                    <ClassicIcon size={44} />
                  </div>
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,169,110,0.4)" }}>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs" style={{ color: "#A07840" }}>{isUz ? "Cashback" : "Кэшбэк"}</p>
                      <p className="font-extrabold text-2xl" style={{ color: "#6B4C1E" }}>0.5%</p>
                    </div>
                    <p className="text-xs font-bold" style={{ color: "#A07840" }}>1–3% {isUz ? "chegirma" : "скидка"}</p>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* ── Gold Card ── */}
            <Card3D style={{ borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg, #D4A017 0%, #F5C518 60%, #B8860B 100%)", boxShadow: "0 8px 32px rgba(212,160,23,0.45)", minHeight: 180, animation: "pulseGlow 3s ease-in-out 1s infinite" }}>
              {/* Running shimmer */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "shimmerCard 2.8s ease-in-out infinite",
              }} />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute" style={{ width: 200, height: 200, background: "rgba(255,255,255,0.1)", borderRadius: "50%", top: -60, right: -40 }} />
              </div>
              <div className="relative z-10 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/80">SEM TRAVEL AGENCY</p>
                    <p className="font-black text-xl mt-0.5 text-white" style={{ fontStyle: "italic" }}>Gold Card</p>
                  </div>
                  <div style={{ animation: "floatZ 5s ease-in-out 0.8s infinite" }}>
                    <GoldIcon size={44} />
                  </div>
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/70">{isUz ? "Cashback" : "Кэшбэк"}</p>
                      <p className="font-extrabold text-2xl text-white">1%</p>
                    </div>
                    <p className="text-xs font-bold text-white/90">3–5% {isUz ? "chegirma" : "скидка"}</p>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* ── Platinum Card ── */}
            <Card3D style={{ borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg, #E8E8E8 0%, #D0D0D0 50%, #B8B8B8 100%)", border: "1.5px solid #B0B0B0", boxShadow: "0 8px 32px rgba(0,0,0,0.18)", minHeight: 180 }}>
              {/* Running shimmer */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "shimmerCard 3.2s ease-in-out 1.2s infinite",
              }} />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute" style={{ width: 180, height: 180, background: "rgba(255,255,255,0.2)", borderRadius: "50%", top: -50, right: -30 }} />
              </div>
              <div className="relative z-10 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#666" }}>SEM TRAVEL AGENCY</p>
                    <p className="font-black text-xl mt-0.5" style={{ color: "#333", fontStyle: "italic" }}>Platinum Card</p>
                  </div>
                  <div style={{ animation: "floatZ 6s ease-in-out 1.5s infinite" }}>
                    <PlatinumIcon size={44} />
                  </div>
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }}>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs" style={{ color: "#666" }}>{isUz ? "Cashback" : "Кэшбэк"}</p>
                      <p className="font-extrabold text-2xl" style={{ color: "#222" }}>1.5%</p>
                    </div>
                    <p className="text-xs font-bold" style={{ color: "#444" }}>5% {isUz ? "chegirma" : "скидка"}</p>
                  </div>
                </div>
              </div>
            </Card3D>

          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            {isUz ? "* Namuna kartalar — sizniki personallashtirilib beriladi" : "* Образцы карт — ваша будет персонализирована"}
          </p>
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
            {isUz ? "Birinchi turingizni bron qiling → Classic karta + $30 sertifikat + 0.5% cashback" : "Забронируйте первый тур → карта Classic + сертификат $30 + кэшбэк 0.5%"}
          </p>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-bold" style={{ background: "rgba(245,197,24,0.2)", color: "#F5C518", border: "1px solid rgba(245,197,24,0.4)" }}>
            🎁 {isUz ? "Birinchi turdan $30 sertifikat + do'stingizga $30" : "$30 сертификат после 1-го тура + $30 для друга"}
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

        <div className="pb-6 flex flex-wrap items-center gap-4">
          <Link href="/" className="text-sm font-medium" style={{ color: "#0057A8" }}>
            ← {isUz ? "Bosh sahifaga qaytish" : "Вернуться на главную"}
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/club/qoidalar"
            className="text-sm font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all hover:opacity-80"
            style={{ background: "#EFF6FF", color: "#0057A8", border: "1px solid #BFDBFE" }}
          >
            📋 {isUz ? "Dastur qoidalari" : "Правила программы"}
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
