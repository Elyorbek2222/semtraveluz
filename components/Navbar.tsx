"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe, User, LogIn, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useLang } from "@/lib/language-context";
import type { Lang } from "@/lib/translations";
import LeadModal from "@/components/LeadModal";

const PHONE1 = "+998 71 275-55-55";
const PHONE2 = "+998 94 664-22-22";

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "uz", label: "UZ", flag: "🇺🇿" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cabinetOpen, setCabinetOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const cabinetRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.tours,   href: "/tours",    emoji: "✈️" },
    { label: t.nav.visa,    href: "/visa",     emoji: "🛂" },
    { label: lang === "uz" ? "Mehmonxona" : "Отели", href: "/hotels", emoji: "🏨" },
    { label: t.nav.about,   href: "/about",    emoji: "ℹ️" },
    { label: t.nav.contact, href: "/contact",  emoji: "📞" },
  ];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cabinetRef.current && !cabinetRef.current.contains(e.target as Node)) {
        setCabinetOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5E7EB", boxShadow: "0 1px 12px rgba(0,0,0,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="SEM Travel — Bosh sahifa">
            <Image
              src="/logo-color.png"
              alt="SEM Travel — Sayohat Agentligi Toshkent"
              width={130}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Asosiy navigatsiya">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm font-semibold px-3 py-2 rounded-lg transition-all",
                    active
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                  style={active ? { background: "#0057A8" } : {}}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div className="hidden md:flex items-center gap-2">

            {/* Language selector */}
            <div className="flex items-center gap-0.5 rounded-full px-1 py-1" style={{ background: "#F3F4F6" }}>
              <Globe size={13} className="text-gray-400 ml-1.5 mr-0.5" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={clsx(
                    "text-xs font-bold px-2.5 py-1 rounded-full transition-all",
                    lang === l.code
                      ? "text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                  )}
                  style={lang === l.code ? { background: "#0057A8" } : {}}
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>

            {/* Phone */}
            <a
              href={`tel:${PHONE1.replace(/\s|-/g, "")}`}
              className="flex items-center gap-1.5 text-sm font-bold transition-colors"
              style={{ color: "#0057A8" }}
            >
              <Phone size={14} />
              {PHONE1}
            </a>

            {/* Free consultation CTA */}
            <button
              onClick={() => setConsultOpen(true)}
              className="flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full text-white transition-all hover:opacity-90"
              style={{ background: "#FF6B35" }}
            >
              📩 {lang === "uz" ? "Bepul maslahat" : "Консультация"}
            </button>

            {/* Cabinet button */}
            <div className="relative" ref={cabinetRef}>
              <button
                onClick={() => setCabinetOpen(!cabinetOpen)}
                className={clsx(
                  "flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full border-2 transition-all",
                  cabinetOpen
                    ? "text-white border-transparent"
                    : "border-current hover:text-white hover:border-transparent"
                )}
                style={cabinetOpen
                  ? { background: "#0057A8", color: "#fff" }
                  : { color: "#0057A8" }}
              >
                <User size={14} />
                {lang === "uz" ? "Kabinet" : "Кабинет"}
                <ChevronDown size={13} className={clsx("transition-transform", cabinetOpen && "rotate-180")} />
              </button>

              {cabinetOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15)", border: "1px solid #E5E7EB" }}>
                  <div className="px-4 py-3" style={{ background: "#0057A8" }}>
                    <p className="text-white font-bold text-sm">{lang === "uz" ? "Shaxsiy kabinet" : "Личный кабинет"}</p>
                    <p className="text-white/70 text-xs mt-0.5">{lang === "uz" ? "Buyurtmalarim va ma'lumotlarim" : "Мои заказы и данные"}</p>
                  </div>
                  <div className="p-3 space-y-2">
                    <a
                      href="https://semtravel.u-on.ru/api/enter.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-4 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{ background: "#0057A8" }}
                    >
                      <LogIn size={15} />
                      {lang === "uz" ? "Kabinetga kirish" : "Войти в кабинет"}
                    </a>
                    <div className="rounded-xl p-3" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <p className="text-xs font-semibold text-gray-500 mb-2">
                        {lang === "uz" ? "Tezkor murojaat:" : "Быстрая связь:"}
                      </p>
                      <div className="flex gap-2">
                        <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-white"
                          style={{ background: "#25D366" }}>
                          💬 WhatsApp
                        </a>
                        <a href="https://t.me/semtravel" target="_blank" rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-white"
                          style={{ background: "#229ED9" }}>
                          ✈️ Telegram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── MOBILE: bepul maslahat + burger ── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setConsultOpen(true)}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full text-white"
              style={{ background: "#FF6B35" }}
            >
              📩 {lang === "uz" ? "Maslahat" : "Консультация"}
            </button>
            <button
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menyuni yopish" : "Menyuni ochish"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white overflow-y-auto"
          style={{ borderTop: "1px solid #F3F4F6", maxHeight: "calc(100vh - 64px)" }}
        >
          <div className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-3 py-3 px-3 rounded-xl font-semibold text-sm transition-colors",
                    active ? "text-white" : "text-gray-700 hover:bg-gray-50"
                  )}
                  style={active ? { background: "#0057A8" } : {}}
                >
                  <span>{link.emoji}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="px-4 pb-4 pt-2 space-y-2" style={{ borderTop: "1px solid #F3F4F6" }}>

            {/* Phones */}
            <div className="flex gap-2">
              <a href={`tel:${PHONE1.replace(/\s|-/g, "")}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold"
                style={{ background: "#F0F7FF", color: "#0057A8" }}>
                <Phone size={14} /> {PHONE1}
              </a>
            </div>
            <a href={`tel:${PHONE2.replace(/\s|-/g, "")}`}
              className="flex items-center gap-2 py-2 px-3 rounded-xl text-sm text-gray-500"
              style={{ background: "#F9FAFB" }}>
              <Phone size={13} /> {PHONE2}
            </a>

            {/* WhatsApp + Telegram */}
            <div className="flex gap-2">
              <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: "#25D366" }}>
                💬 WhatsApp
              </a>
              <a href="https://t.me/semtravel" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: "#229ED9" }}>
                ✈️ Telegram
              </a>
            </div>

            {/* Cabinet */}
            <a
              href="https://semtravel.u-on.ru/api/enter.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 py-3 px-3 rounded-xl text-sm font-bold transition-colors hover:bg-blue-50"
              style={{ color: "#0057A8", border: "1.5px solid #BFDBFE" }}
            >
              <LogIn size={16} />
              {lang === "uz" ? "Shaxsiy kabinet" : "Личный кабинет"}
            </a>

            {/* Language */}
            <div className="flex items-center gap-2 pt-1">
              <Globe size={14} className="text-gray-400" />
              <span className="text-xs text-gray-500 font-medium">{lang === "uz" ? "Til:" : "Язык:"}</span>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={clsx(
                    "text-xs font-bold px-3 py-1 rounded-full transition-all",
                    lang === l.code ? "text-white" : "bg-gray-100 text-gray-600"
                  )}
                  style={lang === l.code ? { background: "#0057A8" } : {}}
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>

      {consultOpen && (
        <LeadModal
          isUz={lang === "uz"}
          title={lang === "uz" ? "📩 Bepul maslahat" : "📩 Бесплатная консультация"}
          type="Bepul maslahat"
          source="semtravel.uz (navbar)"
          onClose={() => setConsultOpen(false)}
        />
      )}
    </>
  );
}
