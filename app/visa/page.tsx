import type { Metadata } from "next";
import VisaClient from "./VisaClient";

export const metadata: Metadata = {
  title: "Viza Yordam — O'zbekistondan Viza Olish | SEM Travel",
  description:
    "SEM Travel viza xizmatlari: Turkiya, Schengen, UAE, Tailand, Misr va boshqa mamlakatlar uchun viza olishda professional yordam. Hujjat tayyorlash, ariza topshirish, tez xizmat.",
  keywords: [
    "viza yordam toshkent",
    "viza olish o'zbekiston",
    "schengen viza",
    "turkiya viza",
    "UAE viza",
    "туристическая виза ташкент",
    "помощь с визой узбекистан",
    "шенгенская виза",
  ],
  alternates: { canonical: "https://semtravel.uz/visa" },
  openGraph: {
    title: "Viza Yordam | SEM Travel",
    description: "Professional viza xizmatlari. Hujjatlar — ariza — kuzatish.",
    url: "https://semtravel.uz/visa",
    type: "website",
  },
};

export default function VisaPage() {
  return <VisaClient />;
}
