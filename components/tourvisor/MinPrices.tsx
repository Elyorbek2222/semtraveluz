"use client";

import { useLang } from "@/lib/language-context";

export default function MinPrices() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            💰 {isUz ? "Yo'nalishlar bo'yicha minimal narxlar" : "Минимальные цены по направлениям"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {isUz
              ? "Toshkentdan — narxlar har kuni yangilanadi"
              : "Из Ташкента — цены обновляются ежедневно"}
          </p>
        </div>
        <div className="tv-min-price tv-moduleid-9990311" />
      </div>
    </section>
  );
}
