import type { Metadata } from "next";
import QoidalarClient from "./QoidalarClient";

export const metadata: Metadata = {
  title: "SEM Club Dastur Qoidalari — Cashback va Imtiyozlar",
  description:
    "SEM Club loyalty dasturi qoidalari: cashback hisoblash, status darajalari (Classic, Gold, Platinum), sertifikatlar, do'st taklifi va a'zolik shartlari. SEM Travel — 2011 yildan ishonchli hamkor.",
  keywords: [
    "sem club qoidalar",
    "sem travel loyalty dastur",
    "cashback sayohat toshkent",
    "sem club a'zolik shartlari",
    "sayohat agentligi cashback",
    "sem travel imtiyozlar",
  ],
  alternates: { canonical: "https://semtravel.uz/club/qoidalar" },
  openGraph: {
    title: "SEM Club Dastur Qoidalari | SEM Travel",
    description:
      "SEM Club loyalty dasturi to'liq qoidalari: cashback, status darajalari, sertifikatlar va imtiyozlar.",
    url: "https://semtravel.uz/club/qoidalar",
    type: "website",
  },
};

export default function QoidalarPage() {
  return <QoidalarClient />;
}
