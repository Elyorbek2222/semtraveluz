export interface TourSchemaParams {
  title: string;
  destination: string;
  duration: string;
  hotelName: string;
  hotelStars: number;
  price: number;
  slug: string;
  image: string;
  description: string;
  category?: string[];
  descUz?: string;
}

export function generateTourSchema(tour: TourSchemaParams): Record<string, unknown> {
  const categories = tour.category || [];
  const touristType = categories
    .map((c: string) =>
      c === "allInclusive"
        ? "Beach, All Inclusive"
        : c === "oilaviy"
          ? "Family"
          : c === "biznes"
            ? "Business"
            : c === "plyaj"
              ? "Beach"
              : c
    )
    .join(", ");

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    url: `https://semtravel.uz/tours/${tour.slug}`,
    description: tour.descUz ?? tour.description,
    image: tour.image,
    inLanguage: ["uz", "ru"],
    touristType,
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://semtravel.uz/tours/${tour.slug}`,
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
}
