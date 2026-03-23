import type { Metadata } from "next";
import ToursClient from "./ToursClient";

export const metadata: Metadata = {
  title: "Turlar Katalogi — Toshkentdan Eng Arzon Tur Paketlar",
  description:
    "SEM Travel turlar katalogi: Turkiya, Dubai, Tailand, Misr, Maldiv va 50+ mamlakatga tayyor tur paketlar. Parvoz + mehmonxona + transfer. Toshkentdan eng arzon narxlar.",
  keywords: [
    "turlar toshkent",
    "tur paketlar o'zbekiston",
    "turkiya tur",
    "dubai tur",
    "tailand tur",
    "misr tur",
    "all inclusive tur",
    "arzon turlar",
    "горящие туры ташкент",
    "туры из ташкента",
    "тур в турцию",
    "тур в дубай",
  ],
  alternates: { canonical: "https://semtravel.uz/tours" },
  openGraph: {
    title: "Turlar Katalogi | SEM Travel",
    description: "50+ mamlakatga tur paketlar. Toshkentdan eng arzon narxlar.",
    url: "https://semtravel.uz/tours",
    type: "website",
  },
};

export default function ToursPage() {
  return <ToursClient />;
}
