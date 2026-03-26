import type { Metadata } from "next";
import HotelsClient from "./HotelsClient";

export const metadata: Metadata = {
  title: "Mehmonxona Bron — Toshkentdan Eng Arzon Narxlar | SEM Travel",
  description:
    "SEM Travel orqali 50+ mamlakatda mehmonxona bron qiling. Turkiya, Dubai, Tailand, Misr, Gretsiya, Maldiv mehmonxonalari. Eng yaxshi narx kafolati. To'g'ridan-to'g'ri bron.",
  keywords: [
    "mehmonxona bron toshkent",
    "hotel bron o'zbekiston",
    "turkiya mehmonxona",
    "dubai hotel bron",
    "all inclusive mehmonxona",
    "5 yulduzli mehmonxona",
    "бронирование отеля ташкент",
    "отель в турции",
    "отель в дубае",
  ],
  alternates: { canonical: "https://semtravel.uz/hotels" },
  openGraph: {
    title: "Mehmonxona Bron | SEM Travel",
    description: "50+ mamlakatda mehmonxona bron. Eng yaxshi narx kafolati.",
    url: "https://semtravel.uz/hotels",
    type: "website",
  },
};

export default function HotelsPage() {
  return <HotelsClient />;
}
