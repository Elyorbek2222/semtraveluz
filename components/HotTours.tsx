"use client";

import Link from "next/link";
import { Flame, ArrowRight, CheckCircle } from "lucide-react";
import { useLang } from "@/lib/language-context";

const STATS = [
  { value: "50+",     emoji: "🌍", uz: "Mamlakat",      ru: "Стран" },
  { value: "30 000+", emoji: "😊", uz: "Baxtli mijoz",  ru: "Клиентов" },
  { value: "200+",    emoji: "🗺️", uz: "Tur yo'nalish", ru: "Направлений" },
  { value: "15+",     emoji: "🏆", uz: "Yil tajriba",    ru: "Лет опыта" },
];

interface HotToursProps { showAllByDefault?: boolean }

export default function HotTours({ showAllByDefault = false }: HotToursProps) {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <section className="py-16 sm:py-20" style={{ background: "#F8FAFC" }} id="hot-tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={20} style={{ color: "#FF6B35" }} />
              <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "#FF6B35" }}>
                {isUz ? "Maxsus takliflar" : "Горящие туры"}
              </span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: "clamp(22px,4vw,36px)" }}>
              {isUz ? "Issiq turlar" : "Горящие туры"}
            </h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              {isUz
                ? "Eng arzon narxlardagi eng mashhur yo'nalishlar — bugun bron qiling!"
                : "Самые популярные направления по лучшим ценам — бронируйте сегодня!"}
            </p>
          </div>
          {!showAllByDefault && (
            <Link
              href="/tours"
              className="hidden sm:flex items-center gap-1.5 text-sm font-bold hover:gap-3 transition-all flex-shrink-0"
              style={{ color: "#0057A8" }}
            >
              {isUz ? "Barchasini ko'rish" : "Все туры"} <ArrowRight size={16} />
            </Link>
          )}
        </div>

        {/* ── Tourvisor Hot Tours Widget ── */}
        <div
          className="tv-hot-tours tv-moduleid-9989885 rounded-2xl overflow-hidden"
          style={{ minHeight: 420, background: "#fff" }}
        />

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 mb-6">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="text-center bg-white rounded-2xl p-5"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}
            >
              <div className="text-3xl mb-1">{s.emoji}</div>
              <div className="text-2xl font-extrabold mb-0.5" style={{ color: "#0057A8" }}>{s.value}</div>
              <div className="text-gray-400 text-xs">{isUz ? s.uz : s.ru}</div>
            </div>
          ))}
        </div>

        {/* ── Trust signals ── */}
        <div
          className="rounded-2xl p-5 flex flex-wrap justify-center gap-x-6 gap-y-3"
          style={{ background: "rgba(0,87,168,0.05)", border: "1px solid rgba(0,87,168,0.1)" }}
        >
          {[
            { icon: <CheckCircle size={14} />, uz: "Narx kafolati",          ru: "Гарантия цены" },
            { icon: "🔒",                       uz: "Xavfsiz to'lov",         ru: "Безопасная оплата" },
            { icon: "📞",                       uz: "24/7 qo'llab-quvvatlash", ru: "Поддержка 24/7" },
            { icon: "🎫",                       uz: "Viza yordam",            ru: "Помощь с визой" },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
              <span style={{ color: "#0057A8" }}>{item.icon}</span>
              {isUz ? item.uz : item.ru}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
