import type { Metadata } from "next";
import LoungeClient from "./LoungeClient";

const loungeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Business Lounge Xizmati",
      "alternateName": "VIP Зал аэропорта",
      "description": "O'zbekistondagi aeroportlarda premium business lounge xizmati. Wi-Fi, snacks, shower, work space.",
      "url": "https://semtravel.uz/lounge",
      "provider": {
        "@type": "TravelAgency",
        "@id": "https://semtravel.uz/#organization",
      },
      "areaServed": { "@type": "Country", "name": "Uzbekistan" },
      "serviceType": "Airport Lounge Access",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://semtravel.uz" },
        { "@type": "ListItem", "position": 2, "name": "Business Lounge", "item": "https://semtravel.uz/lounge" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Business Lounge — Aeroportda Komfort va Xizmat",
  description:
    "SEM Travel orqali aeroportda business lounge access. Premium xizmatlari, Wi-Fi, snacks, shower, work space. Tashkent, Samarkand aeroportlarida.",
  keywords: [
    "business lounge tashkent",
    "airport lounge o'zbekiston",
    "vip zal aeroport",
    "lounge access saytdegi",
    "premium xizmatlari aeroport",
    "biznes zali",
    "бизнес-залы аэропорта",
    "lounge ташкент",
  ],
  alternates: { canonical: "https://semtravel.uz/lounge" },
  openGraph: {
    title: "Business Lounge | SEM Travel",
    description: "Premium airport lounge xizmati. Komfort va xizmat bir joyda.",
    url: "https://semtravel.uz/lounge",
    type: "website",
  },
};

export default function LoungePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loungeSchema) }}
      />
      <LoungeClient />
    </>
  );
}
