# SEM Travel — Web Loyiha

## Loyiha haqida
O'zbekistondagi "SEM Travel" sayohat agentligining rasmiy veb-sayti.

**Stack:** Next.js 15, TypeScript, Tailwind CSS, React 19

## Dizayn tizimi
- **Primary rang:** `#0057A8` (ko'k) — brend rang
- **Accent rang:** `#FF6B35` (to'q sariq-to'q qizil) — CTA tugmalar
- **Gold:** `#F5C518` — yulduzlar, ta'kidlash
- **Font:** Inter

## Papka tuzilmasi
```
/app             — Next.js App Router sahifalar
/components      — Qayta ishlatiladigan UI komponentlar
/public          — Statik fayllar (rasmlar, logolar)
```

## Komponentlar
| Komponent          | Fayl                          | Tavsif                                                         |
|-------------------|-------------------------------|----------------------------------------------------------------|
| Navbar            | `components/Navbar.tsx`       | Sticky header, mobile menu, til (UZ/RU/EN)                     |
| Hero              | `components/Hero.tsx`         | Full-screen banner, search form (tabs: Turlar/Mehmonxona/Viza) |
| HotTours          | `components/HotTours.tsx`     | Filter tablar, saralash, grid/list view, stats, trust signals  |
| TourCard          | `components/TourCard.tsx`     | Tripadvisor uslubi: countdown, "faqat X o'rin", sharh, wishlist|
| CountdownTimer    | `components/CountdownTimer.tsx`| Real-time countdown (client component)                        |

## Ma'lumotlar
| Fayl                    | Tavsif                              |
|------------------------|--------------------------------------|
| `lib/tours-data.ts`    | 8 ta tur, Tour interfeysi, TOURS[]   |

## Utility klasslar (globals.css)
- `.btn-primary` — asosiy tugma (accent rangli, rounded-full)
- `.btn-outline` — outline tugma
- `.section-title` — bo'lim sarlavhasi
- `.section-subtitle` — bo'lim tavsifi

## Keyingi bosqichlar
- [ ] Destinations sahifasi
- [ ] Tours katalogi
- [ ] Tour detail sahifasi
- [ ] Viza sahifasi
- [ ] Haqimizda sahifasi
- [ ] Bog'lanish sahifasi
- [ ] Testimonials komponenti
- [ ] WhatsApp float tugmasi

## Ishga tushirish
```bash
npm install
npm run dev
```
