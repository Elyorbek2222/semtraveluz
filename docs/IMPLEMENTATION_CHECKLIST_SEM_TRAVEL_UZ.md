# SEM Travel.uz — SEO Avtomatizatsiya Ishlanmasi (To'liq Checklist)

**Maqsad:** O'zbekistondagi SEM Travel sayohat agentligining uchun to'liq SEO avtomatizatsiya tizimini qurish.

**Turlari:** Turlar, Joylar, Viza, Blog yazmalari  
**Tillar:** O'zbek (UZ), Rus (RU), Ingliz (EN)  
**Vaqti:** 8 hafta  
**Bosh model:** Claude Sonnet 4.6 (maqolalar), Claude Haiku 4.5 (izlanish, tarjima)

---

## 📋 MODUL 1: ASOSLAR VA TAYYORGARLIK (1-hafta)

### 1.1 Loyiha Sozlamasi
- [ ] GitHub repositoriyani tayyyorlash (yangilash kerak bo'lsa)
- [ ] `.env.local` fayl yaratish:
  - [ ] `ANTHROPIC_API_KEY` — Anthropic konsolidan olish
  - [ ] `DATABASE_URL` — SQLite (dev) yoki PostgreSQL (prod)
  - [ ] `NEXT_PUBLIC_SITE_URL` — `https://semtravel.uz`
- [ ] NPM paketlarini o'rnatish:
  ```bash
  npm install @prisma/client axios cheerio nodemailer
  npm install -D prisma ts-node @types/node @types/cheerio @types/nodemailer
  ```

### 1.2 Papka Tuzilmasi
- [ ] `/seo` papkasini yaratish va subpapkalarni qo'shish:
  ```
  /seo
  ├── /config          — Konfiguratsiya fayllar
  ├── /pipeline        — Konveyer bosqichlari
  ├── /schema          — JSON-LD schema generatorlari
  ├── /audit           — Sayt auditin crawleri va reporti
  ├── /types           — TypeScript interfeyslar
  ├── /utils           — Utility funktsiyalar
  └── /scripts         — CLI skriptlar
  ```

### 1.3 Prisma Sozlamasi
- [ ] `npx prisma init` buyruğini ishga tushirish
- [ ] `prisma/schema.prisma` faylini yaratish
- [ ] `prisma/migrations` papkasini yaratish
- [ ] Lokal migratsiyani ishga tushirish: `npx prisma migrate dev --name init`

### 1.4 Asosiy Konfiguratsiya
- [ ] `/seo/config/seo.config.ts` faylini yaratish:
  - [ ] `SITE_URL`, `LANGUAGES`, `DEFAULT_LANGUAGE`
  - [ ] `MODELS` (Claude modellar va narxlari)
  - [ ] `SEO_AUDIT_CRITERIA` (10 ta mezon)
  - [ ] `TOUR_CATEGORIES` (tur toiflari)
- [ ] `/seo/types/index.ts` — barcha TypeScript interfeyslarini qo'shish

**Ishni Tugatish Belgilari:**
- ✅ `npm run dev` xatosiz ishga tushadi
- ✅ Prisma Studio: `npx prisma studio` ishga tushadi
- ✅ TypeScript xatosi yo'q: `npx tsc --noEmit`

---

## 🔍 MODUL 2: KALIT SO'Z IZLANISHI (2-3 hafta)

### 2.1 Kalit So'z Turi Klassifikatsiyasi
- [ ] **Birlamchi kalit so'zlar** — eng muhim (misol: "turlar Dubaiga")
- [ ] **Ikkinchi darajali kalit so'zlar** — tafsilotlar (misol: "Dubai turi 5 kun")
- [ ] **LSI kalit so'zlari** — semantik bog'langan (misol: "Emirates turizmi")
- [ ] **Uzun-dumali kalit so'zlar** — aniq niyat (misol: "Dubaiga raftarsam qancha sarflanadi")

### 2.2 Qidiruv Niyati Tahlili
- [ ] **Malumotiy (Informational):** Savollariga javob qabul qilish (misol: "Dubaida nima ko'rish kerak?")
- [ ] **Tijoratiy (Commercial):** Taqqoslash va tekshirish (misol: "Dubaiga eng yaxshi tur")
- [ ] **Tranzaksion (Transactional):** Xarid/band qilish (misol: "Dubai turini bugun xarid qilish")
- [ ] **Navigatsion (Navigational):** Sayt izlanishi (misol: "SEM Travel Dubai turi")

### 2.3 Kalit So'z Izlanish Funktsiyasi
- [ ] `/seo/pipeline/keyword-research.ts` faylini yaratish:
  ```typescript
  export async function researchKeywords(
    niche: string,
    intent?: string
  ): Promise<Keyword[]>
  ```
- [ ] Claude Haiku API'ga so'rov yuborish (temperature: 0.5)
- [ ] Javobni parse qilish: keyword, searchVolume, difficulty
- [ ] 10 ta ideya qaytarish (easy/medium/hard tasnifda)

### 2.4 Kalit So'zlar Bazasi (Prisma Model)
- [ ] `prisma/schema.prisma` ga `Keyword` modeli qo'shish:
  ```prisma
  model Keyword {
    id String @id @default(cuid())
    keyword String
    niche String
    intent String
    searchVolume Int
    difficulty String
    language String
    createdAt DateTime @default(now())
  }
  ```
- [ ] Migratsiya: `npx prisma migrate dev --name add_keyword`
- [ ] Tekshirish: `npx prisma studio` orqali data qo'shish

### 2.5 Kalit So'zlar Turlari (SEM Travel uchun)

**Tur Kategoriyalari:**
- [ ] "Dubaiga turlar" (bosh kalit so'z)
- [ ] "Tailandga viza" (viza kategoriya)
- [ ] "Toshkentdan arzon turlar" (naqad)
- [ ] "Erkak sayohatlari" (segmentlar)
- [ ] "Oila bilan sayohatlash" (maqsad)

**Tillar bo'yicha Izlanish:**
- [ ] O'zbekcha kalit so'zlar (80% jadval)
- [ ] Ruscha kalit so'zlar (15% jadval)
- [ ] Inglizcha kalit so'zlar (5% jadval)

**Ishni Tugatish Belgilari:**
- ✅ `researchKeywords("turlar")` → 10 ta kalit so'z qaytaradi
- ✅ Prisma`da 100+ kalit so'z saqlangan
- ✅ Har bir kalit so'zda: keyword, niche, intent, difficulty saqlangan

---

## 📝 MODUL 3: MAQOLA GENERATSIYASI VA KONVEYER (4-5 hafta)

### 3.1 Maqola Generatsiyasi Funktsiyasi
- [ ] `/seo/pipeline/article-generator.ts` faylini yaratish
- [ ] `generateArticle(keyword: string, difficulty: string)` funktsiyasi:
  - [ ] PAS franshizası (Problem-Agitate-Solution) kirish uchun
  - [ ] AIDA franshizası (Attention-Interest-Desire-Action) bo'limlar uchun
  - [ ] 4U franshizası (Useful-Urgent-Unique-Ultra-specific) sarlavhalar uchun
  - [ ] HTML chiqarish (semantic: h2, h3, p, ul, li, blockquote, strong, em)
  - [ ] Metaданные: metaTitle, metaDescription
  - [ ] So'z soni: 800-1000 so'z

### 3.2 Claude API Sozlamasi
- [ ] **Model:** `claude-sonnet-4-20250514`
- [ ] **Temperature:** 0.8 (kreativlik)
- [ ] **Max tokens:** 6000
- [ ] **System prompt:** Semantic HTML-ni talab qilish (h1 va wrapperlarsiz)

### 3.3 Maqola Struktura (SEM Travel uchun)
- [ ] **Intro (PAS):** Problem (nega Dubaiga ketish kerak), Agitate (qiyin tanlov), Solution (biz yordamchi)
- [ ] **Bo'lim 1 (Nima ko'rish kerak):** AIDA + rasmlar + linklar
- [ ] **Bo'lim 2 (Budjetlash):** AIDA + smetalar + taqqoslash
- [ ] **Bo'lim 3 (Viza/Hujjatlar):** AIDA + checklist
- [ ] **FAQ:** 4-5 ta tez-tez beriladigan savollar

### 3.4 SEO Audit Funktsiyasi (100 ball)
- [ ] `/seo/pipeline/seo-auditor.ts` faylini yaratish
- [ ] 10 ta mezon implementatsiyasi:

| Mezon | Max | Tavsif |
|-------|-----|---------|
| Kalit so'z sarlavhada | 10 | `<title>` dagi kalit so'z |
| Kalit so'z birinchi paragrafda | 10 | `<p>` dagi kalit so'z |
| Kalit so'z meta description | 10 | `<meta name="description">` |
| Kalit so'z zichlik 0.8-2.5% | 15 | Sanash va foiz hisoblash |
| H2 sarlavhalar (3+) kalit so'z bilan | 15 | H2 lar va kalit so'zlar |
| Ichki linklar (2-3) | 10 | `<a href="...">` sanash |
| Meta title uzunligi (30-60) | 10 | Belgi sanashi |
| Meta description uzunligi (100-160) | 10 | Belgi sanashi |
| H2 → H3 ierarxiyasi | 5 | Tugri tartiblash |
| FAQ (4-5 bo'lim) | 5 | FAQ-ning mavjudligi |

- [ ] Javobni qaytarish:
  ```typescript
  {
    totalScore: number;
    breakdown: Array<{
      criterion: string;
      maxPoints: number;
      earnedPoints: number;
      passed: boolean;
    }>;
    criticalIssues: string[];
    recommendation: "publish" | "review" | "refine" | "reject";
  }
  ```

### 3.5 Maqola Takomillashtirilsh
- [ ] Agar skori < 65 bo'lsa:
  - [ ] Muammo to'plami qaytarish
  - [ ] Qayta generatsiya: "Oldingi skori {score} edi. Quyidagi muammolarni tuzing: {issues}"
  - [ ] Max 2 ta urinish (keyin reject)

### 3.6 Tarjima Funktsiyasi
- [ ] `/seo/pipeline/translator.ts` faylini yaratish
- [ ] **Model:** `claude-haiku-4-20250307`
- [ ] **Temperature:** 0.3 (aniqlik)
- [ ] **Max tokens:** 4000
- [ ] HTML tuzilmani saqlash (taglarni 2 gacha xato ruxsat)
- [ ] Fallback: agar xato bo'lsa, 2-urinish, keyin inglizchaga qaytarish

### 3.7 Maqola Publisher (Auto-Publishing)
- [ ] `/seo/pipeline/publisher.ts` faylini yaratish
- [ ] **Status xillari:**
  - [ ] `pending_generation` — hozir yaratilyapti
  - [ ] `generated` — tug'ri, audit kutilmoqda
  - [ ] `approved` — admin tasdiqladi
  - [ ] `published` — saytda ko'rinadi
  - [ ] `rejected` — qaytarildi
  - [ ] `archived` — arxivda

### 3.8 Konveyer Orkestratoru
- [ ] `/seo/pipeline/orchestrator.ts` faylini yaratish
- [ ] `runFullPipeline(niche: string)` funktsiyasi:
  1. Kalit so'zlarni izlash
  2. Maqolani generatsiya qilish
  3. SEO auditini o'tkazish
  4. Kerak bo'lsa takomillashtirish
  5. Tarjima (RU, EN)
  6. Validatsiya
  7. Bazaga saqlanish
  8. Email bildirish
  9. Telegram bildirish
  10. Reklama (approved bo'lganda)

**Ishni Tugatish Belgilari:**
- ✅ Maqolalar ortacha 70+ ball oladi
- ✅ 65 balldan kam bo'lganlar takomillanadi
- ✅ HTML semantik (h1 yo'q, saqlangan)
- ✅ Tarjimalar HTML tuzilmasini saqladi
- ✅ Bazada JSON tillar saqlanadi

---

## 💬 MODUL 4: INFRASTRUKTURA VA AVTOMATIKA (6-8 hafta)

### 4.1 Texnik SEO
- [ ] `/seo/audit/site-crawler.ts` yaratish (axios + cheerio):
  - [ ] Barcha URL'larni (staticlar + turlar + bloglar) aramashta
  - [ ] HTML'ni parse qilish (Cheerio)
  - [ ] Meta taglarni chiqarish: title, description, canonical, OG
  - [ ] H1 sonini sanash
  - [ ] JSON-LD skemalarni aniqlash
  - [ ] Hreflang linklar
- [ ] `/seo/audit/report-generator.ts` — report yaratish
- [ ] `npm run seo:audit` skripti

### 4.2 Bildirishnomalar: Email
- [ ] `/seo/pipeline/notifier.ts` yaratish
- [ ] Zoho Mail SMTP sozlamasi:
  ```env
  SMTP_HOST=smtp.zoho.com
  SMTP_PORT=587
  SMTP_USER=your-email@zoho.com
  SMTP_PASS=app-password
  ADMIN_EMAIL=admin@semtravel.uz
  ```
- [ ] HTML template (tun mavzusi):
  - [ ] Maqola sarlavhasi
  - [ ] Kalit so'z
  - [ ] SEO skori (rang: yashil/sariq/qizil)
  - [ ] So'z soni
  - [ ] Prevyu linki

### 4.3 Bildirishnomalar: Telegram
- [ ] Telegram boti (@BotFather):
  ```env
  TELEGRAM_BOT_TOKEN=...
  TELEGRAM_CHAT_ID=...       # Admin revyu kanal
  TELEGRAM_PUBLIC_CHAT_ID=... # Ochiq elon kanal
  ```
- [ ] Inline tugmalar (revyu):
  - [ ] ✅ Tasdiqlash
  - [ ] ❌ Rad etish
  - [ ] ✏️ Tahrir
  - [ ] 👁️ Prevyu
- [ ] Callback handler: `/api/telegram/webhook`
- [ ] Publichnomalar elon: approved bo'lganda

### 4.4 Feature Flags
- [ ] `/api/admin/feature-flags` endpoint:
  ```env
  BLOG_AUTO_GENERATION=true
  BLOG_TRANSLATION_ENABLED=true
  BLOG_NOTIFICATION_ENABLED=true
  BLOG_MAX_ARTICLES_PER_RUN=1
  ```
- [ ] Admin paneli: flaglarni o'zgartirish (redeploy yo'q)

### 4.5 CRON Jadvallashtirish
- [ ] `vercel.json` konfiguratsiyasi:
  ```json
  {
    "crons": [{
      "path": "/api/cron/generate-blog",
      "schedule": "0 8 * * 1,4"
    }]
  }
  ```
- [ ] `/api/cron/generate-blog` endpoint:
  - [ ] CRON_SECRET tekshirish
  - [ ] Feature flag tekshirish
  - [ ] Topiklarni aylanma tanlash (kategor bo'yicha)
  - [ ] Full pipeline chaqirish
  - [ ] Natijani log qilish
  - [ ] Telegram'ga xabari

**Jadval variantlari:**
- [ ] Konservativ: Dushanba/Chumasi 8:00 UTC (2 marta/hafta)
- [ ] O'rta: Dushanba/Chorshanba/Chumasi 8:00 UTC (3 marta/hafta)
- [ ] Agressiv: Har kuni 3:00 UTC (7 marta/hafta)

### 4.6 Analytics va Monitoring
- [ ] `GenerationLog` model:
  ```prisma
  model GenerationLog {
    id String @id @default(cuid())
    blogPostId String
    action String // generate/audit/refine/translate/save/notify
    status String // success/failed/skipped
    tokensUsed Int
    duration Int // millisekundlarda
    error String?
    details Json? // qo'shimcha ma'lumot
    createdAt DateTime @default(now())
  }
  ```

- [ ] `/admin/analytics` dashboard:
  - [ ] Oxirgi 30 kun: postlar soni, ortacha skori, takomillash foizi
  - [ ] Token xarajati: $0.03-0.05 maqola uchun
  - [ ] Tarjima muvaffaqiyat: 90%+ maqsad
  - [ ] Umumiy xarajat: hafta/oy bo'yicha

- [ ] Haftalik audit:
  - [ ] SEO skori o'sib borayaptimi?
  - [ ] Takomillash foizi < 30%?
  - [ ] Token xarajati bud?
  - [ ] Tarjimalarda xato < 10%?

### 4.7 RSS Feed
- [ ] `/app/feed.xml/route.ts`:
  - [ ] Oxirgi 20 ta published post
  - [ ] Har bir post: title, link, description, pubDate
  - [ ] Language: `<language>ru</language>` (asosiy)

### 4.8 Google Search Console
- [ ] GSC'ni ul qilish: `https://semtravel.uz`
- [ ] Ownership tekshirish (DNS yoki HTML file)
- [ ] Monitoringlash:
  - [ ] Impressions (ko'rinishlar)
  - [ ] Clicks (bosmalar)
  - [ ] Average position (o'rtacha pozitsiya)
  - [ ] CTR (bosish oralig'i)

### 4.9 Production Deployment
- [ ] Vercel'ga bog'lash:
  - [ ] GitHub'dan import qilish
  - [ ] Automatic deploys
  - [ ] Environment variables (barcha SMTP, Telegram, CRON_SECRET, DATABASE_URL)

- [ ] PostgreSQL database:
  - [ ] **Variant 1:** Vercel Postgres (integratsiya)
  - [ ] **Variant 2:** Neon (arzon, bepul)
  - [ ] **Variant 3:** Railway (sodda)

- [ ] Prisma migratsiya prod:
  ```bash
  npx prisma migrate deploy
  npx prisma generate
  ```

- [ ] Fallback strategiya:
  - [ ] Build vaqtida JSON eksport: `/scripts/export-blog.ts`
  - [ ] Package.json: `"build": "next build && npm run export:blog"`
  - [ ] DB xatosi bo'lsa JSON'dan o'qish

- [ ] Deployment checklist:
  - [ ] Sitemap ishlaydi: `/sitemap.xml`
  - [ ] Robots.txt ishlaydi: `/robots.txt`
  - [ ] Blog ishlaydi: `/blog`
  - [ ] Telegram bot ishlaydi
  - [ ] Email xabari ishlaydi
  - [ ] CRON vidna logs'da ko'rinadi
  - [ ] GSC'da yangi postlar indekslanmoqda

**Ishni Tugatish Belgilari:**
- ✅ Production Vercel'da live
- ✅ PostgreSQL'dan data o'qiladi
- ✅ CRON har hafta ishlaydi
- ✅ Email va Telegram ishlaydi
- ✅ GSC'da 100+ post indekslanadi
- ✅ Analytics dashboard ishga tushadi

---

## 🎯 FINALLASHTIRILSH VA OPTIMALLASHTIRISH (8-hafta)

### 5.1 Loyiha Qayta Ko'rib Chiqish
- [ ] Barcha TypeScript xatosini tekshirish: `npx tsc --noEmit`
- [ ] Linter: `npm run lint` (agar mavjud)
- [ ] Testlarni ishga tushirish: `npm test` (agar mavjud)
- [ ] README.md yangilash:
  - [ ] Setup ko'rsatmalari
  - [ ] CLI buyruqlari
  - [ ] Environment variables
  - [ ] Deployment ko'rsatmalari

### 5.2 E-E-A-T Signallari
- [ ] Expertise: Maqola muallifi haqida ma'lumot (About Us)
- [ ] Authoritativeness: Backlinks (agar mumkin bo'lsa)
- [ ] Trustworthiness: SSL (✅ Vercel), Contact, Privacy Policy
- [ ] Experience: Real tours, actual prices, verified reviews

### 5.3 Monitoring va Optimization
- [ ] Weekly: Analytics dashboard ko'rish
- [ ] Monthly: Agar > 40% takomillashtirish bo'lsa → prompt yangilash
- [ ] Monthly: Google Search Console natijalarini tahlil qilish
- [ ] Quarterly: Token xarajatini qayta hisoblash va optimize qilish

### 5.4 Masshtablashtirish Rejasi (Bugundan keyin)
- [ ] **Oy 2-3:** Yanada ko'p tillar (Koreans, Ispaniy?)
- [ ] **Oy 3-4:** Korishnomalar turi (Mehmonxona, Avtomobil ijara)
- [ ] **Oy 4-5:** Admin panel UI (Maqolalar, Draft, Scheduling)
- [ ] **Oy 5-6:** Affiliate links (booking.com, viator.com)
- [ ] **Oy 6+:** Organic trafikdan daromad

---

## 📊 SEM TRAVEL SPECIFICS (O'z Sozlamalarimiz)

### Tur Kategoriyalari
```typescript
const TOUR_CATEGORIES = [
  "Dubaiga turlar",
  "Tailandga turlar",
  "Turkiyaga turlar",
  "Gretsiyaga turlar",
  "Vizalar",
  "Arzon turlar",
  "Pir-badar turlar",
  "Oila turlari"
];
```

### Tillar
```typescript
const LANGUAGES = ['uz', 'ru', 'en'];
const LANGUAGE_NAMES = {
  uz: "O'zbek",
  ru: "Русский",
  en: "English"
};
```

### Kalit So'zlar Yig'indisi
- **O'zbekcha:** 200+ (80%)
- **Ruscha:** 50+ (15%)
- **Inglizcha:** 20+ (5%)

### Kategoriya Aylanmasi
```
Dushanba: Dubaiga turlar
Chorshanba: Tailandga turlar
Chumasi: Turkiyaga turlar
```

### Maqola Turlar (Tur uchun)
```
- Kirish: "Nega {tur}ga ketish kerak?"
- Budjetlash: "Qancha pul kerak?"
- Viza: "Viza qanday?"
- Sog'liq: "Vaksinatsiya/Sug'urtalar?"
- FAQ: Amaliy savollar
```

---

## ✅ YAKUNIY CHECKLIST

### Kodi Sifati
- [ ] TypeScript types to'liq
- [ ] Xatolar boshqarish har safarda
- [ ] Logging konsolida
- [ ] DRY (Takrorlash yo'q)

### SEO
- [ ] Maqolalar 65+ bal oladi
- [ ] Ortacha 70+ ball
- [ ] Tarjimalar 90%+ aniq
- [ ] HTML semantik

### Production
- [ ] Vercel'da live
- [ ] PostgreSQL'da data
- [ ] CRON har hafta
- [ ] Email/Telegram ishlaydi
- [ ] GSC'da indexed

### Dokumentatsiya
- [ ] README.md to'liq
- [ ] API docs (choice)
- [ ] Architecture diagram (choice)
- [ ] GitHub repo public/private

---

## 📈 Natija Maqsadlari

**Aylar bo'yicha (12 oy):**

| Muddat | Postlar | Organic Traffic | Revenue |
|--------|---------|-----------------|---------|
| 1-oy | 8 | 0 | $0 |
| 3-oy | 24 | 100-500 | $50 |
| 6-oy | 48 | 5,000-10,000 | $500 |
| 12-oy | 96 | 50,000-100,000 | $5,000-10,000 |

**Hozirda qo'llanilgan sats:**
- Ortacha: 1 post/hafta ($30-50 token xarajat)
- Admin vaqti: 30 min/hafta (Telegram revyu)
- Tarjima vaqti: Avtomatik (10 min)

---

**Tayyor va qabul qilingan!** 🚀

Keyingi bosqich: Modul 1 & 2 ish boshlanish (Prisma, Kalit so'zlar)
