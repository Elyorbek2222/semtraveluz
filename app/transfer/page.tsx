import type { Metadata } from "next";
import TransferClient from "./TransferClient";

export const metadata: Metadata = {
  title: "Transfer Xizmati — Aeroport va Shahar Transferi | SEM Travel",
  description:
    "SEM Travel transfer xizmati: aeroport-mehmonxona, shahar transferi, VIP transfer, guruh transferi. Toshkent, Samarqand va xalqaro aeroportlardan. 24/7 xizmat.",
  keywords: [
    "transfer xizmati toshkent",
    "aeroport transfer",
    "mehmonxona transfer",
    "VIP transfer toshkent",
    "трансфер ташкент аэропорт",
    "трансфер из аэропорта",
    "заказать трансфер",
  ],
  alternates: { canonical: "https://semtraveluz.vercel.app/transfer" },
  openGraph: {
    title: "Transfer Xizmati | SEM Travel",
    description: "Aeroport-mehmonxona transfer. 24/7 xizmat. Qulay narxlar.",
    url: "https://semtraveluz.vercel.app/transfer",
    type: "website",
  },
};

export default function TransferPage() {
  return <TransferClient />;
}
