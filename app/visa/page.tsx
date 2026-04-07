import type { Metadata } from "next";
import VisaClient from "./VisaClient";

const visaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Viza Yordam Xizmati",
      "alternateName": "Визовая помощь из Узбекистана",
      "description": "O'zbekiston fuqarolari uchun professional viza xizmatlari: Schengen, AQSh, Britaniya, Dubai, Hindiston, Saudiya vizalari. Hujjat tayyorlash va ariza topshirish.",
      "url": "https://semtravel.uz/visa",
      "provider": {
        "@type": "TravelAgency",
        "@id": "https://semtravel.uz/#organization",
      },
      "areaServed": { "@type": "Country", "name": "Uzbekistan" },
      "serviceType": "Visa Assistance",
      "offers": [
        { "@type": "Offer", "name": "Schengen viza", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 100, "maxPrice": 180, "priceCurrency": "USD" } },
        { "@type": "Offer", "name": "Dubai (BAA) vizasi", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 60, "maxPrice": 120, "priceCurrency": "USD" } },
        { "@type": "Offer", "name": "Hindiston e-viza", "price": 25, "priceCurrency": "USD" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://semtravel.uz" },
        { "@type": "ListItem", "position": 2, "name": "Viza Yordam", "item": "https://semtravel.uz/visa" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Viza Yordam — O'zbekistondan Viza Olish",
  description:
    "O'zbekiston fuqarolari uchun viza xizmatlari 2025: Schengen, AQSh, Britaniya, Hindiston, Saudiya, Dubai viza. Vizasiz mamlakatlar ro'yxati. Hujjat tayyorlash, ariza topshirish.",
  keywords: [
    "viza yordam toshkent",
    "viza olish o'zbekiston 2025",
    "schengen viza olish",
    "dubai viza o'zbekiston",
    "hindiston e-viza",
    "saudiya arabistoni viza",
    "vizasiz mamlakatlar o'zbekiston",
    "Amerika viza olish",
    "ingliya viza",
    "туристическая виза ташкент",
    "шенгенская виза узбекистан",
    "виза в дубай из узбекистана",
    "страны без визы для узбекистана",
    "виза в индию онлайн",
  ],
  alternates: { canonical: "https://semtravel.uz/visa" },
  openGraph: {
    title: "Viza Yordam | SEM Travel",
    description: "Professional viza xizmatlari. Hujjatlar — ariza — kuzatish.",
    url: "https://semtravel.uz/visa",
    type: "website",
  },
};

export default function VisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(visaSchema) }}
      />
      <VisaClient />
    </>
  );
}
