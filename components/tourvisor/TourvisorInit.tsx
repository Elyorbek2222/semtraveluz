"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/language-context";

function formatUzsPrice(text: string): string {
  return text.replace(/(\d[\d\s]{4,})/g, (match) => {
    const num = parseInt(match.replace(/\s/g, ""), 10);
    if (isNaN(num) || num < 1_000_000) return match;
    const mln = num / 1_000_000;
    const formatted = mln % 1 === 0 ? mln.toFixed(0) : mln.toFixed(1);
    return `${formatted} mln`;
  });
}

function patchTourvisorPrices() {
  const selectors = [
    ".tv-price",
    ".tv-tour-price",
    ".tv-price-value",
    ".tv-cost",
    '[class*="price"]',
    '[class*="Price"]',
    '[class*="cost"]',
  ];
  document.querySelectorAll<HTMLElement>(selectors.join(",")).forEach((el) => {
    if (el.children.length > 0) return;
    const original = el.textContent || "";
    const patched = formatUzsPrice(original);
    if (patched !== original) el.textContent = patched;
  });
}

// Feedback button text by language
const FEEDBACK_TEXT: Record<string, string> = {
  uz: "Tur narxini bilish",
  ru: "Подобрать тур",
  en: "Find a tour",
};

function patchFeedbackButton(lang: string) {
  const text = FEEDBACK_TEXT[lang] || FEEDBACK_TEXT["ru"];
  const selectors = [
    ".tv-feedback-btn",
    ".tv-feedback button",
    ".tv-callback-btn",
    '[class*="feedback"] button',
    '[class*="callback"] button',
  ];
  for (const sel of selectors) {
    document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
      if (el.children.length === 0) el.textContent = text;
    });
  }
}

export default function TourvisorInit() {
  const { lang } = useLang();
  // ref — Script onLoad closure ichida ham yangi tilni ko'rish uchun
  const langRef = useRef(lang);

  useEffect(() => {
    langRef.current = lang;

    // Feedback tugmasi matnini yangilash
    patchFeedbackButton(lang);

    // Tourvisor JS API orqali tilni o'zgartirish (agar qo'llab-quvvatlasa)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tv = (window as any).tourvisor;
    if (tv?.setLanguage) {
      tv.setLanguage(lang);
    }
  }, [lang]);

  return (
    <Script
      src="https://tourvisor.ru/module/init.js"
      strategy="lazyOnload"
      onLoad={() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).tourvisor?.init?.();

        // Widget yuklanganidan keyin patch qilish (500ms yetarli)
        setTimeout(() => {
          patchTourvisorPrices();
          patchFeedbackButton(langRef.current);
        }, 500);

        // Dinamik content uchun kuzatuvchi — 300ms debounce bilan
        // Faqat Tourvisor widget container larini kuzat, document.body emas (INP optimization)
        let debounceTimer: ReturnType<typeof setTimeout>;
        const observer = new MutationObserver(() => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(patchTourvisorPrices, 300);
        });
        const tvContainer = document.querySelector(
          "[class*='tv-hot-tours'], [class*='tv-search'], [class*='tv-history'], [class*='tv-image-slider'], [class*='tv-min-price']"
        );
        if (tvContainer) {
          observer.observe(tvContainer, { childList: true, subtree: true });
        }
      }}
    />
  );
}
