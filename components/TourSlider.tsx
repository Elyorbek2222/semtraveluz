"use client";

import { useLang } from "@/lib/language-context";

export default function TourSlider() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              {isUz ? "✈️ Dolzarb turlar" : "✈️ Актуальные туры"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {isUz
                ? "Toshkentdan eng so'nggi takliflar — narxlar har kuni yangilanadi"
                : "Свежие предложения из Ташкента — цены обновляются ежедневно"}
            </p>
          </div>
        </div>
        <div className="tv-image-slider tv-moduleid-9990308" />
      </div>
    </section>
  );
}
