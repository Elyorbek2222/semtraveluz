"use client";

import Script from "next/script";

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
  // Price class names Tourvisor uses
  const selectors = [
    ".tv-price",
    ".tv-tour-price",
    ".tv-price-value",
    ".tv-cost",
    '[class*="price"]',
    '[class*="Price"]',
    '[class*="cost"]',
  ];
  const selector = selectors.join(",");

  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    if (el.children.length > 0) return; // skip containers, only leaf nodes
    const original = el.textContent || "";
    const patched = formatUzsPrice(original);
    if (patched !== original) el.textContent = patched;
  });
}

function observeTourvisor() {
  // Run once immediately
  patchTourvisorPrices();

  // Then watch for dynamically added content (lazy-loaded tours)
  const observer = new MutationObserver(() => {
    patchTourvisorPrices();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

export default function TourvisorInit() {
  return (
    <Script
      src="https://tourvisor.ru/module/init.js"
      strategy="lazyOnload"
      onLoad={() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).tourvisor?.init?.();
        // Start price formatter after widget loads
        setTimeout(observeTourvisor, 1500);
      }}
    />
  );
}
