// SEM Travel.uz SEO Configuration

export const seoConfig = {
  site: {
    name: "SEM Travel.uz",
    url: "https://semtravel.uz",
    language: "uz",
    defaultLanguages: ["uz", "ru", "en"],
    description: "O'zbekistondagi eng yaxshi sayohat agentligi",
    keywords: ["turlar", "mehmonxona", "viza", "o'zbekiston"],
  },

  branding: {
    primaryColor: "#0057A8",
    accentColor: "#FF6B35",
    goldColor: "#F5C518",
  },

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocales: ["ru_RU", "en_US"],
  },

  social: {
    facebook: "https://facebook.com/semtravel",
    instagram: "https://instagram.com/semtravel",
    telegram: "https://t.me/semtravel",
    whatsapp: "+998",
  },

  siteLinks: {
    tours: "/tours",
    destinations: "/destinations",
    visa: "/visa",
    about: "/about",
    contact: "/contact",
  },
};

export default seoConfig;
