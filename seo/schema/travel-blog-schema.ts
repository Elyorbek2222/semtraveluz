/**
 * Travel Blog JSON-LD Schemas
 * Generate BlogPosting, FAQPage, and travel-specific schemas
 */

// ============================================================================
// BlogPosting Schema
// ============================================================================
export interface BlogPostingSchema {
  '@context': string;
  '@type': 'BlogPosting' | 'NewsArticle';
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  mainEntityOfPage?: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export function generateBlogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  publishedAt: Date;
  updatedAt: Date;
  authorName?: string;
}): BlogPostingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: params.title,
    description: params.description,
    image: params.imageUrl || 'https://semtravel.uz/logo.png',
    datePublished: params.publishedAt.toISOString(),
    dateModified: params.updatedAt.toISOString(),
    author: {
      '@type': 'Organization',
      name: params.authorName || 'SEM Travel',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SEM Travel',
      logo: {
        '@type': 'ImageObject',
        url: 'https://semtravel.uz/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://semtravel.uz${params.url}`,
    },
  };
}

// ============================================================================
// FAQPage Schema
// ============================================================================
export interface FAQItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface FAQPageSchema {
  '@context': string;
  '@type': 'FAQPage';
  mainEntity: FAQItem[];
}

export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ============================================================================
// BreadcrumbList Schema
// ============================================================================
export interface BreadcrumbItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbItem[];
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://semtravel.uz${item.url}`,
    })),
  };
}

// ============================================================================
// Tour-Specific Schema (TouristTrip)
// ============================================================================
export interface TourSchema {
  '@context': string;
  '@type': 'TouristTrip';
  name: string;
  description: string;
  image?: string;
  duration: string;
  itinerary: Array<{
    '@type': 'Place';
    name: string;
  }>;
  offers?: {
    '@type': 'Offer';
    price?: string;
    priceCurrency?: string;
    url?: string;
  };
}

export function generateTourSchema(params: {
  name: string;
  description: string;
  imageUrl?: string;
  durationDays: number;
  destinations: string[];
  priceUSD?: number;
  bookingUrl?: string;
}): TourSchema {
  const schema: TourSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: params.name,
    description: params.description,
    image: params.imageUrl,
    duration: `P${params.durationDays}D`,
    itinerary: params.destinations.map((dest) => ({
      '@type': 'Place',
      name: dest,
    })),
  };

  if (params.priceUSD) {
    schema.offers = {
      '@type': 'Offer',
      price: `${params.priceUSD}`,
      priceCurrency: 'USD',
      url: params.bookingUrl || 'https://semtravel.uz/tours',
    };
  }

  return schema;
}

// ============================================================================
// Hotel/Accommodation Schema
// ============================================================================
export interface AccommodationSchema {
  '@context': string;
  '@type': 'LodgingBusiness';
  name: string;
  description: string;
  image?: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    addressLocality: string;
    addressCountry: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    ratingCount: number;
  };
  offers?: {
    '@type': 'Offer';
    price?: string;
    priceCurrency: string;
  };
}

export function generateAccommodationSchema(params: {
  name: string;
  description: string;
  imageUrl?: string;
  city: string;
  country: string;
  ratingValue?: number;
  ratingCount?: number;
  priceUSD?: number;
}): AccommodationSchema {
  const schema: AccommodationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: params.name,
    description: params.description,
    image: params.imageUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: params.city,
      addressCountry: params.country,
    },
  };

  if (params.ratingValue && params.ratingCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: params.ratingValue,
      ratingCount: params.ratingCount,
    };
  }

  if (params.priceUSD) {
    schema.offers = {
      '@type': 'Offer',
      price: `${params.priceUSD}`,
      priceCurrency: 'USD',
    };
  }

  return schema;
}

// ============================================================================
// Visa/Document Schema
// ============================================================================
export interface ViaSchema {
  '@context': string;
  '@type': 'Thing';
  name: string;
  description: string;
  processingTime?: string;
  cost?: {
    '@type': 'PriceSpecification';
    price: string;
    priceCurrency: string;
  };
  url?: string;
}

export function generateVisaSchema(params: {
  country: string;
  visaType: string;
  description: string;
  processingDays: number;
  costUSD?: number;
  documentUrl?: string;
}): ViaSchema {
  const schema: ViaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: `${params.visaType} for ${params.country}`,
    description: params.description,
    processingTime: `P${params.processingDays}D`,
    url: params.documentUrl,
  };

  if (params.costUSD) {
    schema.cost = {
      '@type': 'PriceSpecification',
      price: `${params.costUSD}`,
      priceCurrency: 'USD',
    };
  }

  return schema;
}

// ============================================================================
// Organization Schema (for footer)
// ============================================================================
export interface OrganizationSchema {
  '@context': string;
  '@type': 'TravelAgency' | 'LocalBusiness';
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    addressLocality: string;
    postalCode?: string;
    addressCountry: string;
  };
  contact?: {
    '@type': 'ContactPoint';
    contactType: string;
    telephone: string;
    email?: string;
  };
  sameAs?: string[];
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'SEM Travel',
    url: 'https://semtravel.uz',
    logo: 'https://semtravel.uz/logo.png',
    description: 'O\'zbekistondagi sayohat agentligi. Turlar, mehmonxonalar, viza yordam.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tashkent',
      addressCountry: 'Uzbekistan',
    },
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+998-71-200-0000',
      email: 'info@semtravel.uz',
    },
    sameAs: [
      'https://facebook.com/semtravel.uz',
      'https://instagram.com/semtravel.uz',
      'https://telegram.me/semtravel',
    ],
  };
}

// ============================================================================
// Helper: Convert Schema to JSON-LD Script Tag
// ============================================================================
export function schemaToJsonLd(schema: any): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

// ============================================================================
// Export all schemas as object
// ============================================================================
export const TravelBlogSchemas = {
  generateBlogPosting: generateBlogPostingSchema,
  generateFAQPage: generateFAQPageSchema,
  generateBreadcrumb: generateBreadcrumbSchema,
  generateTour: generateTourSchema,
  generateAccommodation: generateAccommodationSchema,
  generateVisa: generateVisaSchema,
  generateOrganization: generateOrganizationSchema,
  toJsonLd: schemaToJsonLd,
};
