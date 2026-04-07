import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOURS } from "@/lib/tours-data";
import TourDetailClient from "./TourDetailClient";

export function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) return {};

  const discount = Math.round(((tour.oldPrice - tour.price) / tour.oldPrice) * 100);
  const title = `${tour.title} — $${tour.price} dan | SEM Travel`;
  const description = `${tour.destination} ga ${tour.duration} tur paketi. ${tour.hotelName} ${tour.hotelStars}⭐. Parvoz + mehmonxona + transfer. ${discount}% chegirma — $${tour.oldPrice} o'rniga $${tour.price}.`;

  return {
    title,
    description,
    keywords: [
      `${tour.destination.toLowerCase()} tur`,
      `${tour.country.toLowerCase()} tur paket`,
      `${tour.destination.toLowerCase()} sayohat`,
      `${tour.hotelName}`,
      "toshkentdan tur",
      "arzon turlar o'zbekiston",
      `тур в ${tour.destination}`,
      `отдых ${tour.destination}`,
    ],
    alternates: { canonical: `https://semtravel.uz/tours/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://semtravel.uz/tours/${slug}`,
      type: "website",
      images: [{ url: tour.image, width: 700, alt: tour.title }],
    },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) notFound();

  const discount = Math.round(((tour.oldPrice - tour.price) / tour.oldPrice) * 100);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    url: `https://semtravel.uz/tours/${slug}`,
    description: tour.descUz ?? `${tour.destination} ga ${tour.duration} tur paketi`,
    image: tour.image,
    inLanguage: ["uz", "ru"],
    touristType: (Array.isArray(tour.category) ? tour.category : [tour.category])
      .map((c: string) =>
        c === "allInclusive" ? "Beach, All Inclusive" :
        c === "oilaviy" ? "Family" :
        c === "biznes" ? "Business" :
        c === "plyaj" ? "Beach" : c
      ).join(", "),
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://semtravel.uz/tours/${slug}`,
      seller: {
        "@type": "TravelAgency",
        name: "SEM Travel",
        url: "https://semtravel.uz",
      },
    },
    provider: {
      "@type": "TravelAgency",
      name: "SEM Travel",
      url: "https://semtravel.uz",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://semtravel.uz" },
      { "@type": "ListItem", position: 2, name: "Turlar", item: "https://semtravel.uz/tours" },
      { "@type": "ListItem", position: 3, name: tour.title, item: `https://semtravel.uz/tours/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TourDetailClient tour={tour} discount={discount} />
    </>
  );
}
