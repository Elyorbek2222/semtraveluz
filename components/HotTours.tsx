"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Flame, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/language-context";

const STATS_DATA = [
  { value: "50+", icon: "🌍", key: "countries" as const },
  { value: "30 000+", icon: "😊", key: "clients" as const },
  { value: "200+", icon: "🗺️", key: "tours" as const },
  { value: "15+", icon: "🏆", key: "experience" as const },
];

interface HotToursProps {
  showAllByDefault?: boolean;
}

export default function HotTours({ showAllByDefault = false }: HotToursProps) {
  const { t } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).tourvisor?.init?.();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="hot-tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={22} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                {t.hotTours.badge}
              </span>
            </div>
            <h2 className="section-title">{t.hotTours.title}</h2>
            <p className="section-subtitle">{t.hotTours.subtitle}</p>
          </div>
          {!showAllByDefault && (
            <Link
              href="/tours"
              className="flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all duration-200 text-sm flex-shrink-0"
            >
              {t.hotTours.seeAll} <ArrowRight size={18} />
            </Link>
          )}
        </div>

        {/* Tourvisor Hot Tours Widget */}
        <div className="tv-hot-tours tv-moduleid-9989885" style={{ minHeight: 400 }}></div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.key}
              className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="text-3xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-extrabold text-primary mb-0.5">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {t.hotTours.stats[stat.key]}
              </div>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="mt-8 bg-primary/5 rounded-2xl p-6 flex flex-wrap justify-center gap-6 text-sm">
          {[
            { emoji: "✅", text: t.hotTours.trust.priceGuarantee },
            { emoji: "🔒", text: t.hotTours.trust.securePay },
            { emoji: "📞", text: t.hotTours.trust.support },
            { emoji: "🎫", text: t.hotTours.trust.visa },
          ].map((item) => (
            <span key={item.text} className="text-gray-700 font-medium">
              {item.emoji} {item.text}
            </span>
          ))}
        </div>
      </div>


    </section>
  );
}
