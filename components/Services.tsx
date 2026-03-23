"use client";

import Link from "next/link";
import { useLang } from "@/lib/language-context";

const services = [
  {
    emoji: "✈️",
    color: "blue",
    hrefUz: "/tours",
    hrefRu: "/tours",
    titleUz: "Tayyor Paketlar",
    titleRu: "Готовые туры",
    descUz: "Parvoz + mehmonxona + transfer",
    descRu: "Перелёт + отель + трансфер",
  },
  {
    emoji: "🏨",
    color: "gold",
    hrefUz: "/hotels",
    hrefRu: "/hotels",
    titleUz: "Mehmonxona",
    titleRu: "Отели",
    descUz: "Alohida hotel bron qilish",
    descRu: "Отдельное бронирование отеля",
  },
  {
    emoji: "🚗",
    color: "green",
    hrefUz: "/transfer",
    hrefRu: "/transfer",
    titleUz: "Transfer",
    titleRu: "Трансфер",
    descUz: "Aeroport → mehmonxona yo'li",
    descRu: "Аэропорт → отель",
  },
  {
    emoji: "🗺️",
    color: "red",
    hrefUz: "/visa",
    hrefRu: "/visa",
    titleUz: "Viza Yordam",
    titleRu: "Помощь с визой",
    descUz: "Viza olishda professional yordam",
    descRu: "Профессиональная помощь с визой",
  },
];

const colorMap = {
  blue:  { border: "#DBEAFE", bg: "linear-gradient(135deg, #fff 60%, #EFF6FF)", icon: "#DBEAFE", arrow: "#0057A8" },
  gold:  { border: "#FEF3C7", bg: "linear-gradient(135deg, #fff 60%, #FFFBEB)", icon: "#FEF3C7", arrow: "#D97706" },
  green: { border: "#D1FAE5", bg: "linear-gradient(135deg, #fff 60%, #ECFDF5)", icon: "#D1FAE5", arrow: "#059669" },
  red:   { border: "#FEE2E2", bg: "linear-gradient(135deg, #fff 60%, #FEF2F2)", icon: "#FEE2E2", arrow: "#DC2626" },
};

export default function Services() {
  const { lang } = useLang();

  return (
    <section className="px-4 sm:px-6 pt-10 pb-4 max-w-5xl mx-auto">
      <h2 className="text-xl font-extrabold text-gray-900 mb-1">
        {lang === "uz" ? "Xizmatlar" : "Услуги"}
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        {lang === "uz" ? "Kerakli xizmatni tanlang" : "Выберите нужную услугу"}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {services.map((s) => {
          const c = colorMap[s.color as keyof typeof colorMap];
          return (
            <Link
              key={s.titleUz}
              href={lang === "uz" ? s.hrefUz : s.hrefRu}
              className="rounded-2xl p-4 flex flex-col gap-2 transition-transform active:scale-95 hover:-translate-y-0.5"
              style={{ border: `2px solid ${c.border}`, background: c.bg, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl" style={{ background: c.icon }}>
                {s.emoji}
              </div>
              <h3 className="font-bold text-sm text-gray-900 leading-snug">
                {lang === "uz" ? s.titleUz : s.titleRu}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {lang === "uz" ? s.descUz : s.descRu}
              </p>
              <span className="text-xs font-bold mt-1" style={{ color: c.arrow }}>
                {lang === "uz" ? "Ko'rish →" : "Смотреть →"}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
