import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: { absolute: "Haqimizda — SEM Travel Toshkent | 2011 Yildan Beri" },
  description:
    "SEM Travel — 2011 yildan beri O'zbekistonda faoliyat ko'rsatayotgan litsenziyalangan sayohat agentligi. 15 yillik tajriba, 30 000+ mamnun mijoz, 50+ mamlakat. Toshkent, Olmazor.",
  keywords: [
    "SEM Travel haqida",
    "sayohat agentligi toshkent",
    "litsenziyalangan tur agentlik",
    "о SEM Travel",
    "туристическое агентство ташкент",
  ],
  alternates: { canonical: "https://semtravel.uz/about" },
  openGraph: {
    title: "Haqimizda | SEM Travel",
    description: "2011 yildan beri 30 000+ mijozga xizmat. Toshkentdagi ishonchli sayohat agentligi.",
    url: "https://semtravel.uz/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
