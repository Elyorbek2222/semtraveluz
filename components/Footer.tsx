"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, Send, Instagram } from "lucide-react";
import { useLang } from "@/lib/language-context";

const TELEGRAM_CHANNEL = "https://t.me/semtravel";
const INSTAGRAM_URL = "https://www.instagram.com/semtravel_official/";
const WHATSAPP_NUMBER = "998946642222";
const PHONE1 = "+998 71 275-55-55";
const PHONE2 = "+998 94 664-22-22";
const EMAIL = "semtraveluz@mail.ru";

export default function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { label: t.nav.tours, href: "/tours" },
    { label: t.nav.visa, href: "/visa" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/logo-white.png"
                alt="SEM Travel"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {t.footer.description}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={TELEGRAM_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Send size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.linksTitle}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE1.replace(/\s|-/g, "")}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  {PHONE1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE2.replace(/\s|-/g, "")}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  {PHONE2}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                {t.footer.address}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Clock size={15} className="mt-0.5 flex-shrink-0" />
                {t.footer.hours}
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SEM Travel. {t.footer.rights}</p>
          <p>semtravel.uz</p>
        </div>
      </div>
    </footer>
  );
}
