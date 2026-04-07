import type { Metadata } from "next";
import ClubClient from "./ClubClient";

export const metadata: Metadata = {
  title: "SEM Club — Loyallik Dasturi | Bonus va Imtiyozlar",
  description:
    "SEM Club a'zosi bo'ling va har bir turdan bonuslar to'plang. Silver, Gold, Platinum statuslar — eksklyuziv chegirmalar, CIP lounge, 5★ mehmonxona sovg'alari. SEM Travel loyalty dasturi.",
  keywords: [
    "sem club",
    "sem travel loyalty",
    "sayohat bonuslari",
    "loyalty karta toshkent",
    "tur chegirmalari",
    "sem travel a'zolik",
    "бонусная программа SEM Travel",
    "скидки на туры ташкент",
    "loyalty card uzbekistan",
  ],
  alternates: { canonical: "https://semtravel.uz/club" },
  openGraph: {
    title: "SEM Club — Loyalty Dasturi | SEM Travel",
    description:
      "Har bir turdan bonuslar to'plang. Silver, Gold, Platinum — eksklyuziv imtiyozlar va sovg'alar.",
    url: "https://semtravel.uz/club",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function ClubPage() {
  return <ClubClient />;
}
