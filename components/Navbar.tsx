"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Globe, User, LogIn } from "lucide-react";
import clsx from "clsx";
import { useLang } from "@/lib/language-context";
import type { Lang } from "@/lib/translations";

const PHONE1 = "+998 71 275-55-55";
const PHONE2 = "+998 94 664-22-22";

const languages: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cabinetOpen, setCabinetOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const cabinetRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.tours, href: "/tours" },
    { label: t.nav.visa, href: "/visa" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  // Close cabinet dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cabinetRef.current && !cabinetRef.current.contains(e.target as Node)) {
        setCabinetOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/logo-color.png" alt="SEM Travel" width={140} height={48}
              className="h-11 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
              <Globe size={13} className="text-gray-500" />
              {languages.map((l) => (
                <button key={l.code} onClick={() => setLang(l.code)}
                  className={clsx("text-xs font-semibold px-2 py-0.5 rounded-full transition-colors",
                    lang === l.code ? "bg-primary text-white" : "text-gray-500 hover:text-gray-800")}>
                  {l.label}
                </button>
              ))}
            </div>

            {/* Phones */}
            <div className="flex flex-col items-end gap-0.5">
              <a href={`tel:${PHONE1.replace(/\s|-/g, "")}`}
                className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-primary transition-colors">
                <Phone size={13} /> {PHONE1}
              </a>
              <a href={`tel:${PHONE2.replace(/\s|-/g, "")}`}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors">
                <Phone size={11} /> {PHONE2}
              </a>
            </div>

            {/* U-ON Личный кабинет */}
            <div className="relative" ref={cabinetRef}>
              <button
                onClick={() => setCabinetOpen(!cabinetOpen)}
                className={clsx(
                  "flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all",
                  cabinetOpen
                    ? "bg-primary text-white border-primary"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                )}>
                <User size={15} />
                {lang === "uz" ? "Kabinet" : "Кабинет"}
              </button>

              {/* Dropdown */}
              {cabinetOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  <div className="bg-primary px-4 py-3">
                    <p className="text-white font-bold text-sm">
                      {lang === "uz" ? "Shaxsiy kabinet" : "Личный кабинет"}
                    </p>
                    <p className="text-white/70 text-xs mt-0.5">
                      {lang === "uz" ? "Turistning sahifasi" : "Кабинет туриста"}
                    </p>
                  </div>
                  <div className="p-1">
                    <iframe
                      src="https://semtravel.u-on.ru/api/enter.php"
                      style={{ border: 0 }}
                      width="100%"
                      height="220px"
                      title="U-ON Личный кабинет"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile burger */}
          <button className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="block py-2.5 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}

          {/* Mobile cabinet link */}
          <a href="https://semtravel.u-on.ru/api/enter.php" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-3 rounded-lg text-primary font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => setMobileOpen(false)}>
            <LogIn size={16} />
            {lang === "uz" ? "Shaxsiy kabinet" : "Личный кабинет"}
          </a>

          {/* Mobile language */}
          <div className="flex items-center gap-2 px-3 py-2">
            <Globe size={14} className="text-gray-500" />
            {languages.map((l) => (
              <button key={l.code} onClick={() => setLang(l.code)}
                className={clsx("text-xs font-semibold px-3 py-1 rounded-full transition-colors",
                  lang === l.code ? "bg-primary text-white" : "bg-gray-100 text-gray-600")}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a href={`tel:${PHONE1.replace(/\s|-/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 px-3">
              <Phone size={14} /> {PHONE1}
            </a>
            <a href={`tel:${PHONE2.replace(/\s|-/g, "")}`}
              className="flex items-center gap-2 text-sm text-gray-500 px-3">
              <Phone size={13} /> {PHONE2}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
