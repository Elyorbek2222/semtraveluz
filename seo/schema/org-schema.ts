export function generateOrgSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": "https://semtravel.uz/#organization",
        name: "SEM Travel",
        url: "https://semtravel.uz",
        logo: {
          "@type": "ImageObject",
          url: "https://semtravel.uz/logo-color.png",
          width: 140,
          height: 48,
        },
        description:
          "O'zbekistondagi ishonchli sayohat agentligi. 2011 yildan beri 30 000+ mijozga xizmat. Turkiya, Dubai, Tailand, Misr turlariga eng arzon narxlar. Viza yordam, mehmonxona, aviabilet.",
        foundingDate: "2011",
        telephone: ["+998712755555", "+998946642222"],
        email: "semtraveluz@mail.ru",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Katta Xirmontepa ko'chasi, 12B",
          addressLocality: "Toshkent",
          addressRegion: "Uchtepa",
          postalCode: "100152",
          addressCountry: "UZ",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.288557,
          longitude: 69.172061,
        },
        hasMap: "https://maps.google.com/maps?q=41.288557,69.172061",
        sameAs: [
          "https://t.me/semtravel",
          "https://www.instagram.com/semtravel_official/",
        ],
        areaServed: {
          "@type": "Country",
          name: "Uzbekistan",
        },
        priceRange: "$$",
      },
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": "https://semtravel.uz/#organization-olmazar",
        name: "SEM Travel — Olmazar filiali",
        branchOf: { "@id": "https://semtravel.uz/#organization" },
        url: "https://semtravel.uz/contact",
        telephone: ["+998712755555", "+998946642222"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Toshkent",
          addressRegion: "Olmazar",
          addressCountry: "UZ",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://semtravel.uz/#website",
        url: "https://semtravel.uz",
        name: "SEM Travel",
        description:
          "O'zbekistondagi sayohat agentligi — turlar, viza, mehmonxona",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://semtravel.uz/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
