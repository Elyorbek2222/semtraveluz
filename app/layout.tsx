import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import AiChat from "@/components/AiChat";
import { LangProvider } from "@/lib/language-context";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://semtravel.uz"),
  title: {
    default: "SEM Travel — Sayohat Agentligi Toshkent | Turlar, Viza, Mehmonxona",
    template: "%s | SEM Travel",
  },
  description:
    "SEM Travel — O'zbekistondagi ishonchli sayohat agentligi. 2011 yildan beri 30 000+ mijozga xizmat. Turkiya, Dubai, Tailand, Misr turlariga eng arzon narxlar. Viza yordam, mehmonxona, aviabilet.",
  keywords: [
    "sayohat agentligi toshkent",
    "tur paketlar o'zbekiston",
    "turkiya tur toshkent",
    "dubai tur",
    "tailand tur",
    "viza yordam",
    "SEM Travel",
    "туры из ташкента",
    "турагентство ташкент",
    "тур в турцию",
  ],
  authors: [{ name: "SEM Travel" }],
  creator: "SEM Travel",
  openGraph: {
    title: "SEM Travel — Sayohat Agentligi Toshkent",
    description:
      "O'zbekistondagi eng ishonchli sayohat agentligi. 50+ mamlakatga turlar, viza yordam, mehmonxona bron.",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU"],
    type: "website",
    siteName: "SEM Travel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SEM Travel — Sayohat Agentligi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEM Travel — Sayohat Agentligi Toshkent",
    description: "50+ mamlakatga turlar, viza yordam, mehmonxona bron.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://semtravel.uz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <LangProvider>
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <BottomNav />
          <AiChat />
          <Analytics />
          <Script src="https://tourvisor.ru/module/init.js" strategy="afterInteractive" />
        </LangProvider>
      </body>
    </html>
  );
}
