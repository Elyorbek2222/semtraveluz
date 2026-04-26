import type { Metadata } from "next";

export interface TourMetaParams {
  title: string;
  destination: string;
  duration: string;
  hotelName: string;
  hotelStars: number;
  price: number;
  oldPrice: number;
  country: string;
  slug: string;
  image: string;
}

export interface DestinationMetaParams {
  name: string;
  slug: string;
  description: string;
  visaInfo?: string;
  image: string;
}

export interface BlogMetaParams {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
  publishedDate?: string;
}

export interface StaticPageMetaParams {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}

export function generateTourMeta(tour: TourMetaParams): Metadata {
  const discount = Math.round(
    ((tour.oldPrice - tour.price) / tour.oldPrice) * 100
  );
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
    alternates: { canonical: `https://semtravel.uz/tours/${tour.slug}` },
    openGraph: {
      title,
      description,
      url: `https://semtravel.uz/tours/${tour.slug}`,
      type: "website",
      images: [{ url: tour.image, width: 700, alt: tour.title }],
    },
  };
}

export function generateDestinationMeta(
  destination: DestinationMetaParams
): Metadata {
  const title = `${destination.name} tur paketlari | SEM Travel`;
  const description = destination.description;

  return {
    title,
    description,
    keywords: [
      `${destination.name} tur`,
      `${destination.name} sayohat`,
      `${destination.name} turlariga tur`,
    ],
    alternates: {
      canonical: `https://semtravel.uz/destinations/${destination.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://semtravel.uz/destinations/${destination.slug}`,
      type: "website",
      images: [{ url: destination.image, width: 700, alt: destination.name }],
    },
  };
}

export function generateBlogMeta(blog: BlogMetaParams): Metadata {
  const title = `${blog.title} | SEM Travel Blog`;
  const keywords = ["blog", "sayohat", "nasihalar", ...blog.tags];

  return {
    title,
    description: blog.description,
    keywords,
    alternates: { canonical: `https://semtravel.uz/blog/${blog.slug}` },
    openGraph: {
      title,
      description: blog.description,
      url: `https://semtravel.uz/blog/${blog.slug}`,
      type: "article",
      images: [{ url: blog.image, width: 700, alt: blog.title }],
      publishedTime: blog.publishedDate,
    },
  };
}

export function generateStaticMeta(page: StaticPageMetaParams): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `https://semtravel.uz${page.path}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://semtravel.uz${page.path}`,
      type: "website",
    },
  };
}
