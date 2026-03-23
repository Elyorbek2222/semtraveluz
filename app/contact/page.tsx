import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Bog'lanish — SEM Travel Toshkent | Telefon, Manzil",
  description:
    "SEM Travel bilan bog'laning: +998 71 275-55-55, +998 94 664-22-22. Manzil: Toshkent, Olmazor, Kattahirmontepa 12a/1. Ish vaqti: Dush–Shan 9:00–19:00. WhatsApp, Telegram.",
  keywords: [
    "SEM Travel telefon",
    "sayohat agentligi toshkent manzil",
    "SEM Travel kontakt",
    "контакты SEM Travel",
    "турагентство ташкент адрес",
  ],
  alternates: { canonical: "https://semtravel.uz/contact" },
  openGraph: {
    title: "Bog'lanish | SEM Travel",
    description: "Telefon, manzil, WhatsApp va Telegram orqali bog'laning.",
    url: "https://semtravel.uz/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
