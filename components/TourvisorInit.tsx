"use client";

import Script from "next/script";

export default function TourvisorInit() {
  return (
    <Script
      src="https://tourvisor.ru/module/init.js"
      strategy="afterInteractive"
      onLoad={() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).tourvisor?.init?.();
      }}
    />
  );
}
