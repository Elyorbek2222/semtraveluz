import type { Metadata } from "next";
import ToursClient from "./ToursClient";
import { TOURS } from "@/lib/tours-data";

export const metadata: Metadata = {
  title: "Turlar Katalogi — Toshkentdan Eng Arzon Tur Paketlar | SEM Travel",
  description:
    "SEM Travel turlar katalogi 2025: Turkiya, Dubai, Tailand, Misr, Maldiv, Gretsiya va 50+ mamlakatga tayyor tur paketlar. Parvoz + mehmonxona + transfer. Toshkentdan eng arzon narxlar.",
  keywords: [
    "turlar toshkent 2025",
    "tur paketlar o'zbekiston",
    "turkiya tur toshkent",
    "dubai tur toshkent",
    "tailand tur",
    "misr tur arzon",
    "all inclusive tur",
    "arzon turlar toshkent",
    "maldiv tur",
    "gretsiya tur",
    "горящие туры ташкент",
    "туры из ташкента 2025",
    "тур в турцию из ташкента",
    "тур в дубай из ташкента",
    "всё включено туры",
    "семейные туры из ташкента",
  ],
  alternates: { canonical: "https://semtravel.uz/tours" },
  openGraph: {
    title: "Turlar Katalogi — Toshkentdan | SEM Travel",
    description: "50+ mamlakatga tur paketlar. Parvoz + mehmonxona + transfer. Toshkentdan eng arzon narxlar.",
    url: "https://semtravel.uz/tours",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "SEM Travel — Turlar katalogi",
  "description": "Toshkentdan 50+ mamlakatga tayyor tur paketlar",
  "url": "https://semtravel.uz/tours",
  "numberOfItems": TOURS.length,
  "itemListElement": TOURS.map((tour, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://semtravel.uz/tours/${tour.slug}`,
    "name": tour.title,
    "item": {
      "@type": "TouristTrip",
      "name": tour.title,
      "url": `https://semtravel.uz/tours/${tour.slug}`,
      "touristType": tour.category,
      "offers": {
        "@type": "Offer",
        "price": tour.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
      },
    },
  })),
};

export default function ToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToursClient />
    </>
  );
}
