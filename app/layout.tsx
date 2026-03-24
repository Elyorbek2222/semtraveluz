import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import AiChat from "@/components/AiChat";
import JsonLd from "@/components/JsonLd";
import { LangProvider } from "@/lib/language-context";
import TourvisorInit from "@/components/TourvisorInit";
import { Analytics } from "@vercel/analytics/next";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": "https://semtraveluz.vercel.app/#organization",
      "name": "SEM Travel",
      "url": "https://semtraveluz.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://semtraveluz.vercel.app/logo-color.png",
        "width": 140,
        "height": 48,
      },
      "description": "O'zbekistondagi ishonchli sayohat agentligi. 2011 yildan beri 30 000+ mijozga xizmat. Turkiya, Dubai, Tailand, Misr turlariga eng arzon narxlar. Viza yordam, mehmonxona, aviabilet.",
      "foundingDate": "2011",
      "telephone": ["+998712755555", "+998946642222"],
      "email": "semtraveluz@mail.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kattahirmontepa 12a/1, Park City J-K",
        "addressLocality": "Toshkent",
        "addressRegion": "Olmazor",
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
      "sameAs": [
        "https://t.me/semtravel",
        "https://www.instagram.com/semtravel_official/",
      ],
      "areaServed": { "@type": "Country", "name": "Uzbekistan" },
      "priceRange": "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://semtraveluz.vercel.app/#website",
      "url": "https://semtraveluz.vercel.app",
      "name": "SEM Travel",
      "publisher": { "@id": "https://semtraveluz.vercel.app/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://semtraveluz.vercel.app/tours?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://semtraveluz.vercel.app"),
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
    canonical: "https://semtraveluz.vercel.app",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://tourvisor.ru" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <JsonLd data={organizationSchema} />
        <LangProvider>
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <BottomNav />
          <AiChat />
          <Analytics />
          <TourvisorInit />
        </LangProvider>
      </body>
    </html>
  );
}
