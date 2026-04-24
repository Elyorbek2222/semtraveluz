"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { sendLead } from "@/lib/send-lead";

// ── LOUNGE XIZMATLARI ──────────────────────────────────────────────────────
const loungeFeatures = [
  {
    icon: "🛋️",
    uz: "Premium Arsy-Niqob",
    ru: "Премиум кресла",
    descUz: "Comfortable seating area with ergonomic chairs and sofas",
    descRu: "Удобные кресла и диваны в просторном помещении",
  },
  {
    icon: "📶",
    uz: "Bepul Wi-Fi",
    ru: "Бесплатный Wi-Fi",
    descUz: "High-speed internet uchun tez muloqot",
    descRu: "Высокоскоростной интернет для работы и общения",
  },
  {
    icon: "🍽️",
    uz: "Snacks va Ichimliklar",
    ru: "Закуски и напитки",
    descUz: "Bepul ovqatlar, choy, kofe, meva va shurinlar",
    descRu: "Бесплатные закуски, напитки, фрукты и сладости",
  },
  {
    icon: "🚿",
    uz: "Shower va Freshing Up",
    ru: "Душ кабина",
    descUz: "Professional shower facilities uchun otsham yoki dam olish",
    descRu: "Современные душевые кабины с полотенцами",
  },
  {
    icon: "💻",
    uz: "Work Space",
    ru: "Рабочая зона",
    descUz: "Kompyuterlar, printerlar va business equipment",
    descRu: "Компьютеры, принтеры и удобные рабочие столы",
  },
  {
    icon: "🔌",
    uz: "Charging Stations",
    ru: "Зарядные станции",
    descUz: "USB va elektr rozetkalar barcha to'satlarda",
    descRu: "USB порты и электрические розетки для устройств",
  },
  {
    icon: "📰",
    uz: "Kino va O'qish",
    ru: "ТВ и чтение",
    descUz: "Gazeta, jurnal, kitoblar va LED ekranlar",
    descRu: "Газеты, журналы, книги и телевизионные каналы",
  },
  {
    icon: "🎫",
    uz: "Priority Service",
    ru: "Приоритетное обслуживание",
    descUz: "Dedicated staff uchun yordamga tayyar",
    descRu: "Личный менеджер для помощи и информации",
  },
];

// ── QOIDALAR ──────────────────────────────────────────────────────────────
const loungeRules = [
  {
    category: "📋",
    uz: "Kiritish Qoidalari",
    ru: "Правила входа",
    rules: [
      {
        uz: "Business yoki First class aviabilet",
        ru: "Билет Business или First class",
      },
      {
        uz: "Frequent Flyer Member status",
        ru: "Статус Frequent Flyer Member",
      },
      {
        uz: "Paid lounge access (24-72 soat)",
        ru: "Платный доступ в зал (24-72 часа)",
      },
      {
        uz: "Corporate membership",
        ru: "Корпоративное членство",
      },
    ],
  },
  {
    category: "⏰",
    uz: "Vaqt Cheklovi",
    ru: "Время пребывания",
    rules: [
      {
        uz: "Lounge ichida eng ko'p 5 soat vaqt qilish mumkin",
        ru: "Максимальное время пребывания — 5 часов",
      },
      {
        uz: "Boarding vaqtidan 30 minut oldin chiqishingiz kerak",
        ru: "Вы должны выйти за 30 минут до boarding",
      },
      {
        uz: "Early check-in: 3 soat oldin kiritiladi",
        ru: "Ранний вход доступен за 3 часа до вылета",
      },
    ],
  },
  {
    category: "👥",
    uz: "Shaxslar va Yodgochilar",
    ru: "Гости и багаж",
    rules: [
      {
        uz: "Boshqa shaxslar (2 gacha) taklif qilish mumkin",
        ru: "Можно пригласить до 2 гостей",
      },
      {
        uz: "Bolalar bepul kiritiladi (parents bilan)",
        ru: "Дети до 12 лет входят бесплатно",
      },
      {
        uz: "Bagaj saqlash xizmatini qo'llab-quvvatlash qilamiz",
        ru: "Услуга хранения багажа доступна",
      },
    ],
  },
  {
    category: "🚫",
    uz: "Taqiqlangan Faoliyatlar",
    ru: "Запрещено",
    rules: [
      {
        uz: "Tashvish, xumoylilik, shuv-shuvni kamaytirish",
        ru: "Громкое поведение, музыка без наушников",
      },
      {
        uz: "Smoking faqat designated areaslarda",
        ru: "Курение только в специально отведённых местах",
      },
      {
        uz: "Oilani ichiga olib kirish taqiqlan",
        ru: "Алкогольные напитки запрещены",
      },
      {
        uz: "Ovqatni lounge ichida olib chiqish yo'q",
        ru: "Еду из зала выносить нельзя",
      },
    ],
  },
];

// ── PRICING ────────────────────────────────────────────────────────────────
const pricingOptions = [
  {
    emoji: "🎫",
    uz: "24-soat Pass",
    ru: "Пас на 24 часа",
    priceUz: "50 USD",
    priceRu: "50 USD",
    benefitsUz: ["Business lounge full access", "1 guest invited", "Shower va snacks"],
    benefitsRu: ["Полный доступ в бизнес-зал", "1 гость", "Душ и закуски"],
  },
  {
    emoji: "✈️",
    uz: "72-soat Pass",
    ru: "Пас на 72 часа",
    priceUz: "120 USD",
    priceRu: "120 USD",
    benefitsUz: ["Business lounge access", "2 guests", "Full facilities"],
    benefitsRu: ["Полный доступ", "2 гостя", "Все услуги"],
    popular: true,
  },
  {
    emoji: "👑",
    uz: "Annual Membership",
    ru: "Годовое членство",
    priceUz: "600 USD",
    priceRu: "600 USD",
    benefitsUz: ["Unlimited access", "4 guests per visit", "Priority service"],
    benefitsRu: ["Неограниченный доступ", "4 гостя за раз", "Приоритет"],
  },
];

// ── TERMINALS ──────────────────────────────────────────────────────────────
const terminals = [
  {
    airport: "✈️ Tashkent International Airport (TAS)",
    location: "Terminal 3 — Gate 15",
    features: ["Premium seating", "Shower", "Work space", "Restaurant access"],
    hours: "24/7",
  },
  {
    airport: "✈️ Samarkand International Airport (SKD)",
    location: "Terminal 1 — Main Lounge",
    features: ["Comfortable seating", "Wi-Fi", "Refresh room"],
    hours: "06:00 — 21:00",
  },
];

export default function LoungeClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  const [openRule, setOpenRule] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load Highpass widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://highpass.aero/Widget/Init?apiKey=47c02e57-1c75-a608-a508-000205688bba&airportIata=TAS&BackgroundColor=%23ffffff&ButtonColor=%232934D0&InputColor=%23F8F9FD&LinkColor=%23323755&HeadingColor=%23FF6609&DefaultTextColor=%23173E67&ErrorColor=%23FF0000&ServiceDescriptionColor=%23767676&LabelColor=%23333333&ImportantColor=%23000000&HeaderTextColor=%23173E67&DescriptionTextColor=%23173E67&height=800&lang=" + (isUz ? "uz" : "ru");
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => {
      console.error("Failed to load Highpass widget");
      setScriptLoaded(false);
    };

    const container = document.getElementById("highpass-widget-container");
    if (container && !container.querySelector("script")) {
      container.appendChild(script);
    }

    return () => {
      const existing = container?.querySelector("script");
      if (existing) {
        existing.remove();
      }
    };
  }, [isUz]);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.phone) return;
    setLoading(true);
    await sendLead({
      name: form.name,
      phone: form.phone,
      type: isUz ? "Business Lounge access" : "Доступ в Business Lounge",
      source: "semtravel.uz/lounge",
    });
    setLoading(false);
    setSent(true);
    setForm({ name: "", phone: "" });
    setTimeout(() => { setSent(false); setShowForm(false); }, 3000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)", paddingBottom: 60 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=60"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.12 }}
          sizes="100vw"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            🛋️ {isUz ? "Premium Xizmatlari" : "Премиум услуги"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 5vw, 48px)" }}
          >
            {isUz ? (
              <>Business Lounge — <span style={{ color: "#F5C518" }}>Komfort va Xizmat</span></>
            ) : (
              <>Business Lounge — <span style={{ color: "#F5C518" }}>Премиум отдых</span></>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 550, margin: "0 auto 20px" }}>
            {isUz
              ? "Aeroportda premium xizmatlari: Wi-Fi, snacks, shower, work space va boshqa. Tashkent va Samarkand aeroportlarida mavjud."
              : "Премиум услуги в аэропорту: Wi-Fi, закуски, душ, рабочее место. Доступно в Ташкенте и Самарканде."}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            {[
              { num: "8+", uz: "Xizmatlari", ru: "Услуг" },
              { num: "24/7", uz: "Ochiq", ru: "Открыто" },
              { num: "2", uz: "Terminal", ru: "Аэропорта" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-1.5 text-white">
                <span className="font-extrabold text-lg" style={{ color: "#F5C518" }}>{s.num}</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{isUz ? s.uz : s.ru}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setShowForm(true); setSent(false); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: "#FF6B35", color: "#fff" }}>
            🎫 {isUz ? "Lounge access olish" : "Получить доступ"}
          </button>
        </div>
      </section>

      {/* ── BOOKING FORM MODAL ── */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
        >
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            {sent ? (
              <div className="text-center py-4">
                <div className="text-5xl mb-3">✅</div>
                <p className="font-extrabold text-gray-900 text-lg mb-1">
                  {isUz ? "So'rovingiz qabul qilindi!" : "Заявка принята!"}
                </p>
                <p className="text-sm text-gray-500">
                  {isUz ? "Menejerimiz tez orada siz bilan bog'lanadi." : "Менеджер свяжется с вами в ближайшее время."}
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg">
                      🛋️ {isUz ? "Lounge Access" : "Доступ в лаунж"}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {isUz ? "Menejerimiz siz bilan bog'lanadi" : "Менеджер свяжется с вами"}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      {isUz ? "Ismingiz" : "Ваше имя"}
                    </label>
                    <input
                      type="text"
                      placeholder={isUz ? "To'liq ism" : "Полное имя"}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      {isUz ? "Telefon raqamingiz *" : "Ваш номер телефона *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123-45-67"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{ background: "#0057A8" }}
                  >
                    {loading
                      ? (isUz ? "Yuborilmoqda..." : "Отправка...")
                      : `📩 ${isUz ? "So'rov yuborish" : "Отправить заявку"}`}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    {isUz ? "Tez javob. Spam yo'q." : "Быстрый ответ. Без спама."}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">

        {/* ── XIZMATLARI ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            ✨ {isUz ? "Premium Xizmatlari" : "Премиум услуги"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isUz ? "Barcha mumkinliklar bir joyda — sayohatni yanada qulayroq qiling" : "Все удобства в одном месте — сделайте поездку комфортнее"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loungeFeatures.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-5" style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{isUz ? feature.uz : feature.ru}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{isUz ? feature.descUz : feature.descRu}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── HIGHPASS WIDGET ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            🎫 {isUz ? "Lounge Access Booking" : "Бронирование доступа"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isUz ? "Highpass orqali tezda va oson booking qiling" : "Быстро забронируйте доступ через Highpass"}
          </p>
          <div
            id="highpass-widget-container"
            className="bg-white rounded-2xl p-6 mb-8 overflow-hidden"
            style={{ border: "1.5px solid #E5E7EB", minHeight: "850px" }}
          >
            {!scriptLoaded && (
              <div className="text-center py-12">
                <p className="text-gray-500">{isUz ? "Widget yuklanmoqda..." : "Загрузка виджета..."}</p>
              </div>
            )}
          </div>
        </div>

        {/* ── PRICING ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            💰 {isUz ? "Narxlar" : "Цены"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pricingOptions.map((plan, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 relative"
                style={{
                  border: plan.popular ? "2px solid #FF6B35" : "1.5px solid #E5E7EB",
                  background: plan.popular ? "#FFF9F5" : "#FFFFFF",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "#FF6B35" }}
                  >
                    ⭐ {isUz ? "Mashhur" : "Популярно"}
                  </div>
                )}
                <div className="text-4xl mb-3">{plan.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{isUz ? plan.uz : plan.ru}</h3>
                <div className="text-3xl font-black mb-6" style={{ color: "#0057A8" }}>
                  {isUz ? plan.priceUz : plan.priceRu}
                </div>
                <ul className="space-y-2 mb-6">
                  {(isUz ? plan.benefitsUz : plan.benefitsRu).map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} style={{ color: "#0057A8", marginTop: "2px" }} className="flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => { setShowForm(true); setSent(false); }}
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all"
                  style={{
                    background: plan.popular ? "#FF6B35" : "#0057A8",
                    color: "#fff",
                  }}
                >
                  {isUz ? "Tanlash" : "Выбрать"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── QOIDALAR ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            📋 {isUz ? "Qoidalar va Shartlar" : "Правила и условия"}
          </h2>
          <div className="space-y-3">
            {loungeRules.map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden" style={{ border: "1.5px solid #E5E7EB" }}>
                <button
                  onClick={() => setOpenRule(openRule === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{section.category}</span>
                    <span className="font-bold text-gray-900">{isUz ? section.uz : section.ru}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 text-gray-400"
                    style={{ transform: openRule === idx ? "rotate(180deg)" : "rotate(0deg)", transition: "all 0.2s" }}
                  />
                </button>

                {openRule === idx && (
                  <div className="border-t border-gray-100 px-5 py-4 space-y-3">
                    {section.rules.map((rule, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#F8FAFC" }}>
                        <Check size={18} style={{ color: "#0057A8", marginTop: "2px" }} className="flex-shrink-0" />
                        <span className="text-sm text-gray-700">{isUz ? rule.uz : rule.ru}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── TERMINALS ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            🏢 {isUz ? "Lounge Terminallari" : "Местоположение"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {terminals.map((term, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ border: "1.5px solid #E5E7EB" }}>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{term.airport}</h3>
                <p className="text-sm text-gray-500 mb-4">📍 {term.location}</p>
                <div className="space-y-2 mb-4">
                  {term.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={16} style={{ color: "#0057A8" }} />
                      {f}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 border-t pt-3" style={{ borderColor: "#E5E7EB" }}>
                  ⏰ {isUz ? "Ochiq vaqti" : "Время работы"}: {term.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-8 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <h3 className="text-white font-extrabold text-2xl mb-3">
            {isUz ? "Hoziroq Lounge Access Oling!" : "Получите доступ прямо сейчас!"}
          </h3>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "500px", margin: "0 auto" }}>
            {isUz ? "Premium xizmatlari aeroportda - Wi-Fi, snacks, shower, work space va boshqa." : "Премиум услуги в аэропорту — Wi-Fi, закуски, душ и рабочее место."}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}>
              💬 WhatsApp
            </a>
            <a href="https://t.me/semtravel" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#229ED9", color: "#fff" }}>
              ✈️ Telegram
            </a>
            <a href="tel:+998712755555"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}>
              📞 +998 71 275-55-55
            </a>
          </div>
        </div>

        {/* ── SEO CONTENT ── */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">
            🛋️ {isUz ? "Business Lounge Haqida" : "О Business Lounge"}
          </h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              {isUz
                ? "SEM Travel orqali O'zbekistondagi aeroportlarda premium business lounge xizmatlari mavjud. Business class yoki Frequent Flyer memberlar uchun ideal bo'lgan bu xizmat, sayohatni yanada qulayroq qiladi."
                : "SEM Travel предлагает доступ в премиум бизнес-залы аэропортов Узбекистана. Идеально для путешественников в Business class и членов программ лояльности."}
            </p>
            <p>
              {isUz
                ? "Lounge-larda Wi-Fi, bepul snacks, shower, work space, comfortable seating va boshqa premium xizmatlari mavjud. Tashkent va Samarkand aeroportlarida 24/7 ochiq."
                : "В залах доступны Wi-Fi, бесплатные закуски, душ, рабочее место, удобные кресла и другие премиум услуги. Открыто 24/7 в аэропортах Ташкента и Самарканда."}
            </p>
            <p>
              {isUz
                ? "24-soat, 72-soat yoki annual membership optsiyalaridan birini tanlang. Narxlar hamyoniga mos — 50 dan 600 USD gacha. SEM Travel specialist ozilarimiz sizni booking va foydalanish bo'ylab yordam beramiz."
                : "Выберите пас на 24 часа, 72 часа или годовое членство. Цены от 50 до 600 USD. Наши специалисты помогут вам забронировать и пользоваться услугой."}
            </p>
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
