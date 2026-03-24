"use client";

import { Star } from "lucide-react";
import { useLang } from "@/lib/language-context";

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-gold text-gold" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

const AVATAR_COLORS = [
  "bg-primary",
  "bg-accent",
  "bg-emerald-500",
  "bg-purple-500",
  "bg-rose-500",
];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide mb-3">
            <Star size={16} className="fill-accent" />
            {t.testimonials.badge}
          </span>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <StarRow />

              {/* Review text */}
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                {/* Avatar with initials */}
                <div
                  className={`w-10 h-10 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {item.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm truncate">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400 truncate">
                    {item.city} · {item.tour}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/5 rounded-2xl px-8 py-4">
            <div className="flex -space-x-2">
              {AVATAR_COLORS.map((color, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white ${color}`}
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-sm">30 000+ mamnun mijoz</div>
              <div className="flex items-center gap-1">
                <StarRow />
                <span className="text-xs text-gray-500">4.9 / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
