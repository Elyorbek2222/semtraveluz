export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateTourBreadcrumb(
  tourTitle: string,
  tourSlug: string
): Record<string, unknown> {
  return generateBreadcrumbSchema([
    {
      name: "Bosh sahifa",
      url: "https://semtravel.uz",
      position: 1,
    },
    {
      name: "Turlar",
      url: "https://semtravel.uz/tours",
      position: 2,
    },
    {
      name: tourTitle,
      url: `https://semtravel.uz/tours/${tourSlug}`,
      position: 3,
    },
  ]);
}

export function generateDestinationBreadcrumb(
  destinationName: string,
  destinationSlug: string
): Record<string, unknown> {
  return generateBreadcrumbSchema([
    {
      name: "Bosh sahifa",
      url: "https://semtravel.uz",
      position: 1,
    },
    {
      name: "Sayohat joylari",
      url: "https://semtravel.uz/destinations",
      position: 2,
    },
    {
      name: destinationName,
      url: `https://semtravel.uz/destinations/${destinationSlug}`,
      position: 3,
    },
  ]);
}
