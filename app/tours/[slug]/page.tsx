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
    alternates: { canonical: `https://semtraveluz.vercel.app/tours/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://semtraveluz.vercel.app/tours/${slug}`,
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
    description: tour.descUz ?? `${tour.destination} ga ${tour.duration} tur paketi`,
    image: tour.image,
    touristType: tour.category,
    itinerary: {
      "@type": "ItemList",
      name: tour.title,
    },
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://semtraveluz.vercel.app/tours/${slug}`,
      seller: {
        "@type": "TravelAgency",
        name: "SEM Travel",
        url: "https://semtraveluz.vercel.app",
      },
    },
    provider: {
      "@type": "TravelAgency",
      name: "SEM Travel",
      url: "https://semtraveluz.vercel.app",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviewCount,
      bestRating: 5,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://semtraveluz.vercel.app" },
      { "@type": "ListItem", position: 2, name: "Turlar", item: "https://semtraveluz.vercel.app/tours" },
      { "@type": "ListItem", position: 3, name: tour.title, item: `https://semtraveluz.vercel.app/tours/${slug}` },
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
