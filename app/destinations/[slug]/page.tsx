import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DESTINATIONS, DESTINATION_SLUGS } from "@/lib/destinations-data";
import DestinationClient from "./DestinationClient";

function buildDestinationSchema(slug: string) {
  const dest = DESTINATIONS[slug];
  if (!dest) return null;
  const pageUrl = `https://semtravel.uz/destinations/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "@id": `${pageUrl}#destination`,
        "name": dest.nameUz,
        "alternateName": dest.nameRu,
        "description": dest.descUz,
        "url": pageUrl,
        "image": dest.heroImage,
        "touristType": dest.highlightsUz.map((h) => ({
          "@type": "Audience",
          "audienceType": h.replace(/^[^\s]+\s/, ""),
        })),
      },
      {
        "@type": "FAQPage",
        "mainEntity": dest.faqs.map((faq) => ({
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
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://semtravel.uz" },
          { "@type": "ListItem", "position": 2, "name": "Yo'nalishlar", "item": "https://semtravel.uz/tours" },
          { "@type": "ListItem", "position": 3, "name": dest.nameUz, "item": pageUrl },
        ],
      },
    ],
  };
}

export function generateStaticParams() {
  return DESTINATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = DESTINATIONS[slug];
  if (!dest) return {};

  const title = `${dest.nameUz} Turlari Toshkentdan — Narxlar ${dest.priceFrom}$ dan`;
  const description = `Toshkentdan ${dest.nameUz}ga tur paketlar ${dest.priceFrom}$ dan. Parvoz + mehmonxona + transfer. Viza: ${dest.visaUz}. Eng yaxshi narxlar kafolati. SEM Travel — 15+ yil tajriba.`;

  return {
    title,
    description,
    keywords: [
      `${dest.nameUz.toLowerCase()} tur toshkent`,
      `${dest.nameUz.toLowerCase()} sayohat`,
      `${dest.nameRu.toLowerCase()} тур ташкент`,
      `${dest.nameUz.toLowerCase()} narxi`,
      "sem travel",
      "sayohat agentligi toshkent",
    ],
    alternates: { canonical: `https://semtravel.uz/destinations/${slug}` },
    openGraph: {
      title: `${dest.nameUz} Turlari | SEM Travel`,
      description,
      url: `https://semtravel.uz/destinations/${slug}`,
      type: "website",
      images: [{ url: dest.heroImage, width: 1200, height: 630, alt: dest.nameUz }],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!DESTINATIONS[slug]) notFound();
  const schema = buildDestinationSchema(slug);
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <DestinationClient slug={slug} />
    </>
  );
}
