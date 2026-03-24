"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLang } from "@/lib/language-context";
import Link from "next/link";

export default function FAQ() {
  const { t, lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            <HelpCircle size={16} />
            {t.faq.badge}
          </span>
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-subtitle">{t.faq.subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 text-gray-400 transition-transform duration-200"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            {lang === "uz"
              ? "Savolingiz javobini topa olmadingizmi?"
              : "Не нашли ответ на свой вопрос?"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary text-sm"
          >
            {lang === "uz" ? "💬 Menejer bilan bog'lanish" : "💬 Связаться с менеджером"}
          </Link>
        </div>
      </div>
    </section>
  );
}
