import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DESTINATIONS, DESTINATION_SLUGS } from "@/lib/destinations-data";
import DestinationClient from "./DestinationClient";

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

  const title = `${dest.nameUz} Turlari Toshkentdan — Narxlar ${dest.priceFrom}$ dan | SEM Travel`;
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
  return <DestinationClient slug={slug} />;
}
