import type { Metadata } from "next";
import VisaClient from "./VisaClient";

export const metadata: Metadata = {
  title: "Viza Yordam — O'zbekistondan Viza Olish | SEM Travel",
  description:
    "O'zbekiston fuqarolari uchun viza xizmatlari 2025: Schengen, AQSh, Britaniya, Hindiston, Saudiya, Dubai viza. Vizasiz mamlakatlar ro'yxati. Hujjat tayyorlash, ariza topshirish.",
  keywords: [
    "viza yordam toshkent",
    "viza olish o'zbekiston 2025",
    "schengen viza olish",
    "dubai viza o'zbekiston",
    "hindiston e-viza",
    "saudiya arabistoni viza",
    "vizasiz mamlakatlar o'zbekiston",
    "Amerika viza olish",
    "ingliya viza",
    "туристическая виза ташкент",
    "шенгенская виза узбекистан",
    "виза в дубай из узбекистана",
    "страны без визы для узбекистана",
    "виза в индию онлайн",
  ],
  alternates: { canonical: "https://semtraveluz.vercel.app/visa" },
  openGraph: {
    title: "Viza Yordam | SEM Travel",
    description: "Professional viza xizmatlari. Hujjatlar — ariza — kuzatish.",
    url: "https://semtraveluz.vercel.app/visa",
    type: "website",
  },
};

export default function VisaPage() {
  return <VisaClient />;
}
