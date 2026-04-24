import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import AiChat from "@/components/AiChat";
import JsonLd from "@/components/JsonLd";
import { LangProvider } from "@/lib/language-context";
import { Analytics } from "@vercel/analytics/next";
import TourvisorInit from "@/components/tourvisor/TourvisorInit";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": "https://semtravel.uz/#organization",
      "name": "SEM Travel",
      "url": "https://semtravel.uz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://semtravel.uz/logo-color.png",
        "width": 140,
        "height": 48,
      },
      "description": "O'zbekistondagi ishonchli sayohat agentligi. 2011 yildan beri 30 000+ mijozga xizmat. Turkiya, Dubai, Tailand, Misr turlariga eng arzon narxlar. Viza yordam, mehmonxona, aviabilet.",
      "foundingDate": "2011",
      "telephone": ["+998712755555", "+998946642222"],
      "email": "semtraveluz@mail.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Katta Xirmontepa ko'chasi, 12B",
        "addressLocality": "Toshkent",
        "addressRegion": "Uchtepa",
        "postalCode": "100152",
        "addressCountry": "UZ",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00",
        },
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.288557,
        "longitude": 69.172061,
      },
      "hasMap": "https://maps.google.com/maps?q=41.288557,69.172061",
      "sameAs": [
        "https://t.me/semtravel",
        "https://www.instagram.com/semtravel_official/",
      ],
      "areaServed": { "@type": "Country", "name": "Uzbekistan" },
      "priceRange": "$$",
    },
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": "https://semtravel.uz/#organization-olmazar",
      "name": "SEM Travel — Olmazar filiali",
      "branchOf": { "@id": "https://semtravel.uz/#organization" },
      "url": "https://semtravel.uz/contact",
      "telephone": ["+998712755555", "+998946642222"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toshkent",
        "addressRegion": "Olmazar",
        "addressCountry": "UZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.348022,
        "longitude": 69.253153,
      },
      "hasMap": "https://maps.google.com/maps?q=41.348022,69.253153",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://semtravel.uz/#website",
      "url": "https://semtravel.uz",
      "name": "SEM Travel",
      "publisher": { "@id": "https://semtravel.uz/#organization" },
    },
  ],
};

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
  verification: {
    google: "mMSWc1Nq0MGYDv68Pg77talIvI-709BPl5tGPFmlEd4",
    yandex: "c8cff6d2eb805ab4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://tourvisor.ru" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tourvisor.ru" />
        <link rel="alternate" hrefLang="uz" href="https://semtravel.uz" />
        <link rel="alternate" hrefLang="ru" href="https://semtravel.uz" />
        <link rel="alternate" hrefLang="x-default" href="https://semtravel.uz" />
        <link rel="llms-txt" href="https://semtravel.uz/llms.txt" />
        <script dangerouslySetInnerHTML={{__html: `window.isTelegramMiniApp = !!window.Telegram?.WebApp;`}} />
      </head>
      <body className={inter.className}>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/102097944" style={{position:"absolute",left:"-9999px"}} alt="" /></div>
        </noscript>
        <JsonLd data={organizationSchema} />
        <LangProvider>
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <BottomNav />
          <AiChat />
          {/* Tourvisor feedback button — barcha sahifalarda, fixed pozitsiya */}
          <div
            className="tv-free-button tv-moduleid-9990312"
            style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 9999 }}
          />
          <TourvisorInit />
          <Analytics />
          <Script
            id="yandex-metrica"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(102097944,'init',{webvisor:false,clickmap:false,referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`,
            }}
          />
        </LangProvider>
      </body>
    </html>
  );
}
