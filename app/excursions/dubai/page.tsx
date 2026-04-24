import type { Metadata } from "next";
import { DUBAI_FREE_EXCURSIONS, DUBAI_PAID_EXCURSIONS, DUBAI_EXCURSION_FAQS } from "@/lib/excursions-data";
import ExcursionsClient from "./ExcursionsClient";

function buildExcursionsSchema() {
  const pageUrl = "https://semtravel.uz/excursions/dubai";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        "name": "Dubai Ekskursiyalari 2025",
        "description": "5 ta bepul va 8 ta eng yaxshi pullik Dubai ekskursiyalari. Desert Safari, Burj Khalifa, XLine Zipline, Dune Buggy va boshqalar.",
        "url": pageUrl,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            ...DUBAI_FREE_EXCURSIONS.map((ex, i) => ({
              "@type": "TouristAttraction",
              "position": i + 1,
              "@id": `${pageUrl}#${ex.id}`,
              "name": ex.nameUz,
              "description": ex.descUz,
              "image": ex.image,
              "url": pageUrl,
              "aggregateRating": ex.rating ? {
                "@type": "AggregateRating",
                "ratingValue": ex.rating,
                "ratingCount": parseInt(ex.reviewCount?.replace(/[^0-9]/g, "") || "0"),
              } : undefined,
              "priceRange": "FREE",
            })),
            ...DUBAI_PAID_EXCURSIONS.map((ex, i) => ({
              "@type": "TouristAttraction",
              "position": DUBAI_FREE_EXCURSIONS.length + i + 1,
              "@id": `${pageUrl}#${ex.id}`,
              "name": ex.nameUz,
              "description": ex.descUz,
              "image": ex.image,
              "url": pageUrl,
              "aggregateRating": ex.rating ? {
                "@type": "AggregateRating",
                "ratingValue": ex.rating,
                "ratingCount": parseInt(ex.reviewCount?.replace(/[^0-9]/g, "") || "0"),
              } : undefined,
              "priceRange": `$${ex.priceUsd}`,
            })),
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": DUBAI_EXCURSION_FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.qUz,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.aUz,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://semtravel.uz" },
          { "@type": "ListItem", "position": 2, "name": "Dubai", "item": "https://semtravel.uz/destinations/dubai" },
          { "@type": "ListItem", "position": 3, "name": "Ekskursiyalar", "item": pageUrl },
        ],
      },
    ],
  };
}

export const metadata: Metadata = {
  metadataBase: new URL("https://semtravel.uz"),
  title: "Dubai Ekskursiyalari 2025 — 5 Bepul + 8 TOP Ekskursiya | SEM Travel",
  description:
    "Dubayda 5 ta bepul ekskursiya (Jumeirah Beach, Dubai Fountain, Gold Souk) va 8 ta eng zo'r to'lovli: Desert Safari ($50), Burj Khalifa ($45), XLine Zipline ($150), Dune Buggy ($110). Barcha narxlar, reytinglar (4.6★ o'rtacha), vaqti, maslahatlar. Toshkentdan Dubai turi $522 dan.",
  keywords: [
    "dubai ekskursiyalar toshkent",
    "dubai tekinga joylari",
    "desert safari narxi",
    "burj khalifa bilet",
    "xline zipline dubai",
    "dune buggy dubai",
    "dubayda nima korish kerak",
    "dubai sayohati toshkent",
    "дубай экскурсии ташкент",
    "дубай достопримечательности",
    "сафари в дубае цена",
    "горка для катания на багги",
  ],
  alternates: {
    canonical: "https://semtravel.uz/excursions/dubai",
  },
  openGraph: {
    title: "Dubai Ekskursiyalari 2025 — 5 Bepul + 8 TOP",
    description:
      "5 ta bepul ekskursiya va 8 ta eng yaxshi pullik joylar. Desert Safari, Burj Khalifa, XLine Zipline, Dune Buggy va boshqalar.",
    url: "https://semtravel.uz/excursions/dubai",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=70",
        width: 1200,
        height: 630,
        alt: "Dubai Ekskursiyalari",
      },
    ],
  },
};

export default function ExcursionsDubaiPage() {
  const schema = buildExcursionsSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ExcursionsClient />
    </>
  );
}
