"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/language-context";

export default function BottomNav() {
  const pathname = usePathname();
  const { lang } = useLang();

  const items = [
    { emoji: "🏠", labelUz: "Bosh", labelRu: "Главная", href: "/" },
    { emoji: "✈️", labelUz: "Turlar", labelRu: "Туры", href: "/tours" },
    { emoji: "🏨", labelUz: "Mehmonxona", labelRu: "Отели", href: "/hotels" },
    { emoji: "🚗", labelUz: "Transfer", labelRu: "Трансфер", href: "/transfer" },
    { emoji: "👤", labelUz: "Profil", labelRu: "Профиль", href: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200"
      style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.08)", paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex justify-around items-center py-2">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const label = lang === "uz" ? item.labelUz : item.labelRu;
          return (
            <Link key={item.href} href={item.href}
              rel={item.href === "/profile" ? "nofollow" : undefined}
              className="flex flex-col items-center gap-0.5 px-2 py-1 min-w-0 flex-1">
              <span className="text-2xl leading-none">{item.emoji}</span>
              <span className="text-center leading-tight"
                style={{ fontSize: 10, fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#0057A8" : "#6B7280",
                  maxWidth: 56, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
