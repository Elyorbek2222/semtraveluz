import type { Metadata } from "next";
import ExcursionsClient from "./ExcursionsClient";

function buildExcursionsSchema() {
  const pageUrl = "https://semtravel.uz/excursions/dubai";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#excursions`,
        "name": "Dubai Ekskursiyalari",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "@id": `${pageUrl}#jumeirah-beach`,
            "name": "Jumeirah Public Beach",
            "description": "Dubai ning eng mashhur plyaji. Bepul kiresh.",
            "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=70",
            "url": pageUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "@id": `${pageUrl}#desert-safari`,
            "name": "Desert Safari",
            "description": "Cho'l safarisi, tuya minish, BBQ ziyofat. $50/kishi.",
            "image": "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=70",
            "url": pageUrl,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "@id": `${pageUrl}#burj-khalifa`,
            "name": "Burj Khalifa",
            "description": "Dunyoning eng baland binosi. 124-qavat ko'rinish. $40/kishi.",
            "image": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=70",
            "url": pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dubayda qanday tekinga joylarga borsa bo'ladi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Jumeirah Beach, Dubai Fountain, Dubai Creek, Kite Beach, Dubai Mall, Dubai Marina — barchi bepul!",
            },
          },
          {
            "@type": "Question",
            "name": "Desert Safari qancha turadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$50 kishi boshiga. Kiradi: dune bashing, tuya minish, BBQ ziyofat, foto-surat.",
            },
          },
          {
            "@type": "Question",
            "name": "Burj Khalifaga bilet qancha?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "$40 kishi boshiga (124-qavat). Onlayndan buyurtma qilsa arzonroq.",
            },
          },
        ],
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
  title: "Dubai Ekskursiyalari 2025 — Tekinga va Pullik | SEM Travel",
  description:
    "Dubayda eng yaxshi ekskursiyalar: Desert Safari, Burj Khalifa, Dhow Cruise va 6 ta tekinga joy. Narxlar, vaqt, maslahatlar. Toshkentdan Dubai turi $522 dan.",
  keywords: [
    "dubai ekskursiyalar toshkent",
    "dubai tekinga joylari",
    "desert safari narxi",
    "burj khalifa bilet",
    "dubayda nima korish kerak",
    "dubai sayohati toshkent",
    "дубай экскурсии ташкент",
    "дубай достопримечательности",
    "сафари в дубае цена",
  ],
  alternates: {
    canonical: "https://semtravel.uz/excursions/dubai",
  },
  openGraph: {
    title: "Dubai Ekskursiyalari — Tekinga va Pullik",
    description:
      "6 ta tekinga ekskursiya va 6 ta eng yaxshi pullik joylar. Desert Safari, Burj Khalifa, Yacht va boshqalar.",
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
