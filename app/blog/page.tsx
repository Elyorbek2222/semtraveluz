import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — SEM Travel | Sayohat bo'yicha maqolalar va maslahatlar",
  description:
    "SEM Travel blogida sayohat maslahatlari, viza rasmiylashtiruv qo'llanmalari, eng yaxshi yo'nalishlar va turistlar uchun foydali ma'lumotlarni toping.",
  keywords: [
    "sem travel blog",
    "sayohat maslahatlari",
    "viza qo'llanma",
    "turizm O'zbekiston",
    "sayohat agentligi toshkent",
    "sayohat maqolalari",
  ],
  alternates: { canonical: "https://semtravel.uz/blog" },
  openGraph: {
    title: "Blog | SEM Travel — Sayohat bo'yicha maqolalar",
    description:
      "Sayohat maslahatlari, viza rasmiylashtiruv va yo'nalishlar haqida foydali maqolalar.",
    url: "https://semtravel.uz/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
