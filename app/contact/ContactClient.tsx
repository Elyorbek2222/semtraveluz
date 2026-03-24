"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/language-context";

const WHATSAPP = "998946642222";
const TELEGRAM = "https://t.me/semtravel";
const PHONE1 = "+998 71 275-55-55";
const PHONE2 = "+998 94 664-22-22";
const EMAIL = "semtraveluz@mail.ru";
const INSTAGRAM = "https://www.instagram.com/semtravel_official/";

const contactMethods = [
  {
    emoji: "📞",
    uz: "Telefon",
    ru: "Телефон",
    valueUz: `${PHONE1} / ${PHONE2}`,
    valueRu: `${PHONE1} / ${PHONE2}`,
    href: `tel:+998712755555`,
    color: "#0057A8",
    bg: "#EFF6FF",
  },
  {
    emoji: "💬",
    uz: "WhatsApp",
    ru: "WhatsApp",
    valueUz: "+998 94 664-22-22",
    valueRu: "+998 94 664-22-22",
    href: `https://wa.me/${WHATSAPP}`,
    color: "#25D366",
    bg: "#F0FDF4",
    external: true,
  },
  {
    emoji: "✈️",
    uz: "Telegram",
    ru: "Telegram",
    valueUz: "@semtravel",
    valueRu: "@semtravel",
    href: TELEGRAM,
    color: "#229ED9",
    bg: "#EFF9FF",
    external: true,
  },
  {
    emoji: "📸",
    uz: "Instagram",
    ru: "Instagram",
    valueUz: "@semtravel_official",
    valueRu: "@semtravel_official",
    href: INSTAGRAM,
    color: "#E1306C",
    bg: "#FFF0F6",
    external: true,
  },
  {
    emoji: "✉️",
    uz: "Email",
    ru: "Email",
    valueUz: EMAIL,
    valueRu: EMAIL,
    href: `mailto:${EMAIL}`,
    color: "#6B7280",
    bg: "#F9FAFB",
  },
];

export default function ContactClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const text = encodeURIComponent(
      `Yangi so'rov (semtraveluz.vercel.app)\n\nIsm: ${form.name}\nTelefon: ${form.phone}\nXabar: ${form.message || "—"}`
    );
    window.open(`https://t.me/semtravel?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)",
          paddingBottom: 60,
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            📞 {isUz ? "Bog'lanish" : "Контакты"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 5vw, 42px)" }}
          >
            {isUz ? (
              <>
                Biz bilan <span style={{ color: "#F5C518" }}>bog'laning</span>
              </>
            ) : (
              <>
                Свяжитесь <span style={{ color: "#F5C518" }}>с нами</span>
              </>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15 }}>
            {isUz
              ? "Savollaringiz bormi? Biz har doim yordam berishga tayyormiz"
              : "Есть вопросы? Мы всегда готовы помочь"}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">

        {/* ── CONTACT METHODS ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "📱 To'g'ridan-to'g'ri bog'laning" : "📱 Свяжитесь напрямую"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactMethods.map((m) => (
              <a
                key={m.uz}
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white transition-transform active:scale-95 hover:-translate-y-0.5"
                style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: m.bg }}
                >
                  {m.emoji}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#9CA3AF" }}>
                    {isUz ? m.uz : m.ru}
                  </span>
                  <p className="text-sm font-bold mt-0.5" style={{ color: m.color }}>
                    {isUz ? m.valueUz : m.valueRu}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── FORM ── */}
        <div
          className="rounded-2xl p-6 mb-10 bg-white"
          style={{ border: "1.5px solid #E5E7EB" }}
        >
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "📩 Xabar yuborish" : "📩 Отправить сообщение"}
          </h2>

          {sent ? (
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: "#F0FDF4", border: "1.5px solid #BBF7D0" }}
            >
              <p className="text-lg font-bold" style={{ color: "#166534" }}>
                ✅ {isUz ? "Xabaringiz yuborildi!" : "Сообщение отправлено!"}
              </p>
              <p className="text-sm mt-1" style={{ color: "#4ADE80" }}>
                {isUz ? "Tez orada bog'lanamiz." : "Скоро свяжемся с вами."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isUz ? "Ismingiz *" : "Ваше имя *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isUz ? "To'liq ism" : "Полное имя"}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isUz ? "Telefon *" : "Телефон *"}
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
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isUz ? "Xabaringiz" : "Сообщение"}
                </label>
                <textarea
                  rows={4}
                  placeholder={isUz ? "Savol yoki murojaat..." : "Вопрос или обращение..."}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90"
                style={{ background: "#0057A8" }}
              >
                📩 {isUz ? "Telegramga yuborish" : "Отправить в Telegram"}
              </button>
            </form>
          )}
        </div>

        {/* ── OFFICE INFO ── */}
        <div
          className="rounded-2xl p-5 mb-10 bg-white"
          style={{ border: "1.5px solid #E5E7EB" }}
        >
          <h2 className="text-base font-extrabold text-gray-900 mb-4">
            {isUz ? "🏢 Ofisimiz" : "🏢 Наш офис"}
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">📍</span>
              <div>
                <p className="font-semibold text-gray-800">
                  {isUz
                    ? "Toshkent, Uchtepa tumani, Katta Xirmontepa, 12B"
                    : "Ташкент, Учтепинский район, Катта Хирмонтепа, 12Б"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">⏰</span>
              <p className="text-gray-700">
                {isUz ? "Dush–Shan: 9:00 – 19:00" : "Пн–Сб: 9:00 – 19:00"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🗓️</span>
              <p className="text-gray-500 text-xs">
                {isUz ? "Yakshanba: dam olish kuni" : "Воскресенье: выходной"}
              </p>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="mt-4 rounded-xl overflow-hidden" style={{ height: 200 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0!2d69.2085!3d41.3293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzQ1LjUiTiA2OcKwMTInMzAuNiJF!5e0!3m2!1suz!2suz!4v1!5m2!1suz!2suz"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SEM Travel ofisi"
            />
          </div>
        </div>

        {/* ── QUICK ACTIONS ── */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white"
            style={{ background: "#25D366" }}
          >
            💬 WhatsApp
          </a>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white"
            style={{ background: "#229ED9" }}
          >
            ✈️ Telegram
          </a>
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
