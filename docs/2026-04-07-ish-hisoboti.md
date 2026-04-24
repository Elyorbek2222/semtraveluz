# 2026-04-07 — Kun davomida qilingan ishlar hisoboti
**Loyiha:** SEM Travel.uz  
**Sana:** 7-aprel, 2026  
**Jami commit:** 26 ta  
**O'zgartirilgan fayllar:** 42 ta | +2237 qator qo'shildi, -173 qator o'chirildi

---

## 1. Performance — Tezlashtirish
**Commit:** `54221c4` · `8a216a5`

| Nima qilindi | Natija |
|---|---|
| Logo rasmlar siqildi (`sips` buyrug'i bilan) | `logo-color.png`: 2.3 MB → 82 KB (96% kamaytirish) |
| `logo-white.png` optimizatsiya | 174 KB → 11 KB |
| `next.config.ts` da `preconnect` qo'shildi | `tourvisor.ru` ga tezroq ulanish |
| CSS animatsiyalar `will-change` bilan | Siljimaslik, GPU acceleration |

---

## 2. Yandex Metrika
**Commit:** `ed85963`  
**Fayl:** `app/layout.tsx`

- ID `102097944` bilan Yandex Metrika script qo'shildi
- `strategy="afterInteractive"` — sahifa yuklanishiga ta'sir qilmaydi
- Ko'rilishlar, qidiruvlar, click-map analitikasi yoqildi

---

## 3. LeadModal z-index muammosi
**Commit:** `d7be745`  
**Fayl:** `components/Navbar.tsx`

- Modal `<header>` ichida edi → ustida kelmaydi degan bug
- Modal `<header>` tashqarisiga chiqarildi → to'g'ri ko'rinadi

---

## 4. CTA tugmasi matnini o'zgartirish
**Commit:** `263b7e9`  
**Fayllar:** `Navbar.tsx`, `Hero.tsx` va boshqalar

- "Bepul maslahat" → **"Tur narxini bilish"** (UZ)
- "Бесплатная консультация" → **"Подобрать тур"** (RU)
- Navbar desktop + mobile, Hero, LeadModal title — barchada yangilandi

---

## 5. HotTours bo'limi qayta dizayn
**Commit:** `efa3656`  
**Fayl:** `components/HotTours.tsx`

- Tourvisor hot-tours widget `9989885` qo'shildi
- Eski statik karta-grid tozalandi
- Stats blok: "30,000+ mijoz", "12 yil", "50+ mamlakat"

---

## 6. Tourvisor widgetlar — ketma-ket qo'shildi

| Commit | Widget | Module ID | Qayerda |
|---|---|---|---|
| `c34ba82` | Search History | `9990306` | `Hero.tsx` — qidiruv ostida |
| `fb7003b` | UZS narx formatter | — | `TourvisorInit.tsx` — `7 984 710` → `7.9 mln` |
| `52f2683` | TourSlider (Slider) | `9990308` | `app/page.tsx`, blog postlar |
| `491d8b0` | TourCalendar | `9990310` | Destination sahifalar |
| `6526685` | MinPrices | `9990311` | `app/page.tsx` |
| `611486d` | FeedbackButton | `9990312` | `app/layout.tsx` — barcha sahifalar |
| `438968b` | FeedbackButton til | — | `TourvisorInit.tsx` — UZ/RU/EN auto |
| `258f4c9` | TourCatalog | `9990313` | `app/tours/page.tsx` |

**Tourvisor components papkasi:** `components/tourvisor/`  
Fayllar: `TourvisorInit.tsx`, `TourSlider.tsx`, `MinPrices.tsx`, `README.md`

---

## 7. Destination sahifalari — Tourvisor avtofiltri
**Commit:** `b13bf0d`  
**Fayl:** `app/destinations/[slug]/DestinationClient.tsx`

- Har bir destination uchun `tvCountryName` maydoni qo'shildi (`lib/destinations-data.ts`)
- Sahifa ochilganda Tourvisor qidiruv formida mamlakat **avtomatik tanlanadi**
- 300ms polling interval + 30 ta urinish mexanizmi (widget yuklangunga qadar)
- TourCalendar widget ham qo'shildi

---

## 8. Contact sahifasi — Haqiqiy koordinatalar
**Commit:** `23d76ce`  
**Fayl:** `app/contact/ContactClient.tsx`

| Ofis | Manzil | Koordinatalar |
|---|---|---|
| Ofis 1 (Uchtepa) | Katta Xirmontepa 12B | `41.288557, 69.172061` |
| Ofis 2 (Olmazar) | Olmazar tumani | `41.348022, 69.253153` |

- 2GIS orqali haqiqiy koordinatalar topildi
- `maps.google.com/maps?q=LAT,LNG&z=16&output=embed` — API keysiz iframe

---

## 9. SEM Club Loyalty sahifasi — `/club`
**Commitlar:** `44ed2d9` → `27bff87` → `07ad355` → `4b57e4b` → `3959d4d`  
**Fayllar:** `app/club/page.tsx`, `app/club/ClubClient.tsx`

### Karta darajalari (haqiqiy ma'lumotlar)
| Karta | Cashback | Chegirma | Kartalar soni |
|---|---|---|---|
| **Classic** | 0.5% | 1–3% | 200 ta (1000–1200) |
| **Gold** | 1% | 3–5% | 50 ta (200–249) |
| **Platinum** | 1.5% | 5% | 10 ta (001–010) |

### Chegirma tizimi (sotib olingan turlar soni bo'yicha)
- 1–3 tur: 1% chegirma
- 4–6 tur: 2% chegirma  
- 7+ tur: 3% chegirma

### Bonuslar
- **$30 sertifikat** — birinchi turdan keyin (180 kun)
- **$30 do'st uchun** — referal sertifikat (180 kun)
- **1% referal bonus** — do'st tur sotib olganda
- Tug'ilgan kun, Yangi yil, 8-mart bonuslari
- **Limit:** ball + bonus + sertifikat jami ≤ tur narxining 3%

### Ball muddatlari
- Oddiy ballar: 365 kun
- Qo'shimcha bonuslar: 150–180 kun
- Referal ballar: 100–150 kun

### Sahifa bo'limlari (7 ta feature)
1. **Hero** — floating 3D shaplar, $30 sertifikat banner
2. **Animated Stats** — IntersectionObserver, counter animation
3. **How it works** — 4 qadam
4. **Earn Points** — 6 ta yo'l (tur, referal, bayram, izoh, SMM, sertifikat)
5. **Progress Bar** — Classic → Gold → Platinum yo'l
6. **Savings Calculator** — slider bilan interaktiv
7. **Tier Cards** — 3D Flip card (hover → orqa tomonda barcha imtiyozlar)
8. **Comparison Table** — 15 qatorli taqqoslash
9. **Testimonials** — 4 ta sharh
10. **Telegram CTA**
11. **Card Preview** — 3 ta 3D karta
12. **FAQ** — 8 ta savol
13. **SEO block + CTA**

### 3D Animatsiyalar
| Animatsiya | Qayerda |
|---|---|
| `Card3D` — mouse tracking tilt | Card preview, testimoniallar |
| `FlipCard` — hover flip | Tier cards (front/back) |
| `shimmerCard` | Karta ustida yorug'lik o'tishi |
| `floatZ` | Hero shapes, karta ikonlari |
| `pulseGlow` | Gold karta |
| `slideFadeIn` | Stats raqamlari (scroll) |
| `spinSlow` | Flip card orqa ikonasi |

### Custom SVG ikonlar
- `ClassicIcon` — bronza medal SVG (radial gradient, C harfi)
- `GoldIcon` — oltin medal SVG (sariq gradient, G harfi, glow)
- `PlatinumIcon` — brillant/diamond SVG (ko'p qirrali, kumush)
- `TierIcon` — wrapper function

---

## 10. SEM Club Qoidalar sahifasi — `/club/qoidalar`
**Commit:** `d241e9e`  
**Fayllar:** `app/club/qoidalar/page.tsx`, `app/club/qoidalar/QoidalarClient.tsx`

- To'liq loyalty dasturi qoidalari sahifasi
- Haqiqiy shartlar: muddatlar, limitlar, transferlash taqiqi
- UZ/RU ikki tilli

---

## 11. Navbar yaxshilanishi
**Commit:** `7fb1e04`  
**Fayl:** `components/Navbar.tsx`

- Kabinet dropdown ichida "U-ON CRM tizimi" haqida eslatma qo'shildi
- Foydalanuvchi login sahifasiga borishdan oldin nima kutishini biladi

---

## 12. Sitemap yangilanishi
**Fayl:** `app/sitemap.ts`

- `/club` sahifasi qo'shildi
- `/club/qoidalar` sahifasi qo'shildi
- Tour URL-lar dinamik (`TOURS` array dan)
- Blog URL-lar dinamik (`BLOG_POSTS` array dan)

---

## Texnik statistika

| Ko'rsatkich | Qiymat |
|---|---|
| Jami commit | 26 ta |
| O'zgartirilgan fayllar | 42 ta |
| Qo'shilgan qatorlar | +2,237 |
| O'chirilgan qatorlar | -173 |
| Logo hajmi kamayishi | 2.3 MB → 82 KB (96%) |
| Yangi sahifalar | 2 ta (`/club`, `/club/qoidalar`) |
| Yangi komponentlar | 6 ta (tourvisor/ papkasi + SVG ikonlar) |
| Tourvisor widgetlar | 7 ta modul qo'shildi |

---

## Fayl tuzilmasi (yangi va o'zgartirilganlar)

```
app/
├── club/
│   ├── page.tsx               ← yangi
│   ├── ClubClient.tsx         ← yangi (926 qator)
│   └── qoidalar/
│       ├── page.tsx           ← yangi
│       └── QoidalarClient.tsx ← yangi
├── contact/ContactClient.tsx  ← 2 ofis + xarita
├── destinations/[slug]/
│   └── DestinationClient.tsx  ← avtofiltri + calendar
├── sitemap.ts                 ← /club, /qoidalar qo'shildi
└── page.tsx                   ← TourSlider + MinPrices

components/
└── tourvisor/
    ├── TourvisorInit.tsx      ← narx formatter + til auto
    ├── TourSlider.tsx         ← yangi
    ├── MinPrices.tsx          ← yangi
    └── README.md              ← modul registri

lib/
└── destinations-data.ts       ← tvCountryName maydoni

public/
├── logo-color.png             ← 2.3MB → 82KB
└── logo-white.png             ← 174KB → 11KB
```

---

*Hisobot yaratilgan: 2026-04-07*
