import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — SEM Travel | Sayohat maqolalari va maslahatlar | Блог о путешествиях",
  description:
    "SEM Travel blogida sayohat maslahatlari, viza qo'llanmalari va eng yaxshi yo'nalishlar. Блог о путешествиях из Узбекистана: советы, памятки, лайфхаки.",
  keywords: [
    "sem travel blog",
    "sayohat maslahatlari",
    "viza qo'llanma",
    "turizm O'zbekiston",
    "sayohat agentligi toshkent",
    "блог о путешествиях ташкент",
    "советы туристам узбекистан",
    "памятка путешественника",
    "туры из ташкента",
    "sem travel блог",
  ],
  alternates: {
    canonical: "https://semtravel.uz/blog",
    languages: {
      "uz": "https://semtravel.uz/blog",
      "ru": "https://semtravel.uz/blog",
      "x-default": "https://semtravel.uz/blog",
    },
  },
  openGraph: {
    title: "Blog | SEM Travel — Sayohat maqolalari | Блог о путешествиях",
    description:
      "Sayohat maslahatlari, viza va yo'nalishlar haqida foydali maqolalar. Советы, памятки и лайфхаки для туристов из Узбекистана.",
    url: "https://semtravel.uz/blog",
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU"],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
