# SEM Travel.uz — Bajarilgan Ishlar

## 1. Asosiy Sahifalar (Landing)
- Hero section, HotTours, TourCard, CountdownTimer komponentlari
- Navbar: sticky header, mobile menu, til almashtirish (UZ/RU)
- Footer: manzil, telefon, ijtimoiy tarmoqlar
- WhatsApp float tugmasi va AI Chat konsultant (mobile uchun BottomNav dan yuqorida joylashgan)

---

## 2. Turlar
- **`/tours`** — Turlar katalogi (filter, grid/list view, stats)
- **`/tours/[slug]`** — Har bir tur uchun alohida sahifa (8 ta tur):
  - Antalya All Inclusive
  - Dubai City & Sea
  - Hurghada Red Sea
  - Maldives Luxury
  - Bali Adventure
  - Paris & Europe
  - Istanbul Culture
  - Thailand Explorer
- Har bir tur sahifasida: hero rasm, narx, highlights, hujjatlar, bron qilish tugmasi
- JSON-LD schema: TouristTrip + BreadcrumbList

---

## 3. Viza Sahifasi (`/visa`)
- Vizasiz mamlakatlar accordion (4 guruh, 30+ mamlakat — Passport Index ma'lumotlari)
- 6 ta viza bo'limi (tab):
  - 🇪🇺 Schengen — amal qilish: 1-90 kun, narx: 3 000 000 so'm
  - 🇺🇸 AQSh (B1/B2) — amal qilish: 6 oydan 10 yilgacha, narx: 3 000 000 so'm
  - 🇬🇧 Britaniya — narx: 1 000 000 so'm
  - 🇮🇳 Hindiston e-Viza — narx: 250 000 so'm
  - 🇸🇦 Saudiya Arabistoni — 3 ta viza turi: Turist / Umrah / Biznes
  - 🇦🇺 Avstraliya — narx: 1 500 000 so'm
- Booking forma modal (ism + telefon → Telegram kanalga)
- FAQ accordion (6 ta savol)

---

## 4. Mehmonxonalar (`/hotels`)
- Hero section (Next.js Image)
- 4 ta mehmonxona turi (plyaj, all inclusive, honeymoon, oilaviy)
- 6 ta mashhur yo'nalish (Antalya, Dubai, Hurghada, Phuket, Maldiv, Santorini)
- "Nega SEM Travel orqali?" bo'limi
- Bron qilish modal forma

---

## 5. Transfer (`/transfer`)
- 6 ta transfer turi (aeroport↔mehmonxona, shahar, VIP, guruh, shaharlararo)
- Avtomobil parki (Standart, Komfort, Premium, Minivan)
- 4 bosqichli buyurtma berish yo'riqnomasi
- Buyurtma berish modal forma

---

## 6. Blog (`/blog` va `/blog/[slug]`)
- 11 ta maqola (dinamik sahifalar)
- SSG via `generateStaticParams`

---

## 7. Haqimizda (`/about`)
- Jamoa:
  - Sardorbek Orifjonov — Asoschi
  - Elyorbek Orifjonov — Direktor
  - Davronbek Rakhmonov — Tur menejeri
  - Begzod Akmalov — Avia menejeri
  - Abdurakhim Fayzullaev — Viza menejeri
- Statistika, qadriyatlar, sertifikatlar

---

## 8. Bog'lanish (`/contact`)
- To'liq forma (ism + telefon + xabar)
- Kontakt ma'lumotlari, ish vaqti
- Telegram / WhatsApp / Instagram / Email

---

## 9. Leads Tizimi (Telegram Bot)
- `/api/lead` route — Telegram Bot API ga avtomatik yuboradi
- Bot: `@semleads_bot`
- Kanal: SEM FB+IG. Leads (`-1002361188017`)
- Forma qoldiradigan barcha joylar ulangan:
  - Contact sahifasi
  - Viza modal
  - Tur detail sahifasi
  - Mehmonxonalar
  - Transfer
- `components/LeadModal.tsx` — qayta ishlatiladigan modal
- `lib/send-lead.ts` — shared fetch utility

---

## 10. Texnik SEO
- JSON-LD schema: TravelAgency + LocalBusiness + WebSite (root layout)
- Canonical URL lar: `https://semtravel.uz/...`
- Open Graph meta tags barcha sahifalarda
- `sitemap.xml` va `robots.txt`
- Vercel Analytics

---

## 11. Manzil (To'g'irlangan)
- **To'g'ri manzil** (2GIS dan): Toshkent, Uchtepa tumani, Katta Xirmontepa ko'chasi, 12B
- Yangilangan joylar: Footer, Contact sahifasi, JSON-LD schema, Privacy sahifasi

---

## 12. Tourvisor Integratsiyasi
- `components/TourvisorInit.tsx` — `"use client"` wrapper, `onLoad` callback
- Saytda ishlashi uchun: Tourvisor admin panelida `semtravel.uz` domenini qo'shish kerak

---

## Stack
- **Framework:** Next.js 15, React 19
- **Til:** TypeScript
- **Stillar:** Tailwind CSS
- **Deploy:** Vercel
- **Bot:** Telegram Bot API (`@semleads_bot`)
