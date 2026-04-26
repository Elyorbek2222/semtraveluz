# Content Academia SEO Avtomatizatsiya — Checklist Jadvali

**Manbai:** Content Academia (24 darslik)  
**Loyihalar:** SEM Travel.uz  
**Maqsad:** Modul bo'yicha barcha darsliklarni SEM Travel.uz uchun qo'llash

---

## 📚 MODUL 1: ASOSLAR (6 darslik)

| # | Darslik | Mavzu | SEM Travel.uz Implementatsiyasi | Bosqich | ✅ Tugatish Belgisi |
|---|---------|-------|--------------------------------|--------|-------------------|
| 1.1 | Lesson 1 | Nima uchun SEO eng yaxshi investitsiya | Biznes modeli tayyorlash | Planning | Maqsadlar 12-oylik yoziladi |
| 1.2 | Lesson 2 | SEO fundamentallari | Google algoritmi tushunish | Research | Architecture doc yasaladi |
| 1.3 | Lesson 3 | On-page vs Off-page | Meta tags, internal links, schema | Implementation | Sitemap + Robots + hreflang |
| 1.4 | Lesson 4 | E-E-A-T signallari | Trust signals, author bio, reviews | Implementation | About Us + Contact pages |
| 1.5 | Lesson 5 | Indexing, Crawling, Ranking | robots.txt, sitemap.xml, GSC | Implementation | GSC ul qilish + Monitoring |
| 1.6 | Lesson 6 | Birinchi SEO skripti | Python/Node CLI skriptlar | Implementation | `npm run seo:audit` ishlaydi |

**Bosqich:** Hafta 1-2  
**Qaraymiz:** ✅ Completed (sitemap, robots, hreflang qo'shildi)

---

## 🔍 MODUL 2: KALIT SO'ZLAR VA NIYAT (6 darslik)

| # | Darslik | Mavzu | SEM Travel.uz Implementatsiyasi | Bosqich | ✅ Tugatish Belgisi |
|---|---------|-------|--------------------------------|--------|-------------------|
| 2.1 | Lesson 1 | Kalit so'zlar vs Niyat | 4 tur (informational, commercial, transactional, navigational) | Implementation | `researchKeywords()` yoziladi |
| 2.2 | Lesson 2 | Kalit so'zlarni topish (Google Trends, Ahrefs) | Claude Haiku API + prompt | Implementation | 200+ kalit so'z bazada |
| 2.3 | Lesson 3 | Niyat tahlili | Intent type klassifikatsiyasi | Implementation | Prisma `Keyword` modeli |
| 2.4 | Lesson 4 | Kalit so'z kesishish (LSI, long-tail) | Semantic keywords, uz-ru-en | Implementation | LSI kalit so'zlar jadvalida |
| 2.5 | Lesson 5 | Kalit so'z zichlik (density) | 0.8-2.5% optimal | Implementation | SEO auditor'da mezon |
| 2.6 | Lesson 6 | Kalit so'z baza (database) | Prisma + SQLite/PostgreSQL | Implementation | 300+ kalit so'z saqlangan |

**Bosqich:** Hafta 3-4  
**Implementatsiya:** `seo/pipeline/keyword-research.ts`

| Tur | O'zbekcha | Ruscha | Inglizcha | Jami |
|-----|----------|--------|----------|------|
| Informational | 50 | 15 | 5 | 70 |
| Commercial | 60 | 15 | 5 | 80 |
| Transactional | 40 | 10 | 5 | 55 |
| Navigational | 10 | 5 | 2 | 17 |
| **Jami** | **160** | **45** | **17** | **222** |

---

## 📝 MODUL 3: MAQOLA GENERATSIYASI (7 darslik + 1 bonus)

| # | Darslik | Mavzu | SEM Travel.uz Implementatsiyasi | Bosqich | Kod Fayli |
|---|---------|-------|--------------------------------|--------|----------|
| 3.1 | Lesson 1 | Konveyer Arxitekturasi (10 bosqich) | Full pipeline yaratish | Architecture | `seo/pipeline/orchestrator.ts` |
| 3.2 | Lesson 2 | Maqola Generatsiyasi | Claude Sonnet 4.6 + prompts | Implementation | `seo/pipeline/article-generator.ts` |
| 3.3 | Lesson 3 | Copywriting Frameworklar (PAS, AIDA, 4U) | Intro: PAS, Bo'limlar: AIDA, Sarlavha: 4U | Prompts | System prompt'da |
| 3.4 | Lesson 4 | SEO Auditor (100 ball) | 10 mezon, scoring logic | Implementation | `seo/pipeline/seo-auditor.ts` |
| 3.5 | *Missing* | *Lesson 5 yoq* | — | — | — |
| 3.6 | Lesson 6 | Tarjima (Multilingual) | Claude Haiku + HTML preservation | Implementation | `seo/pipeline/translator.ts` |
| 3.7 | Lesson 7 | Auto-Publishing | Status workflow, Prisma model | Implementation | `seo/pipeline/publisher.ts` |
| 3.8 | *Bonus* | Capstone Final Project | Full system integration + tests | Capstone | Barcha yuqorida |

**Bosqich:** Hafta 5-8

### 3.2 — Maqola Generatsiyasi Xususiyatlari

| Feature | Talablar | SEM Travel.uz |
|---------|----------|--------------|
| **Model** | Claude Sonnet 4.6 | ✅ Sonnet |
| **Temperature** | 0.8 (kreativlik) | ✅ 0.8 |
| **Max Tokens** | 6000 | ✅ 6000 |
| **Uzunlik** | 800-1000 so'z | ✅ HTML + wordCount |
| **HTML Tip** | Semantic (h2, h3, p, ul, li, blockquote, strong, em) | ✅ h1/wrapper yo'q |
| **Metaданные** | metaTitle (30-60), metaDescription (100-160) | ✅ Ikkilangu JSON |
| **Formatlar** | PAS (intro) + AIDA (bo'limlar) + 4U (sarlavha) | ✅ Template |
| **FAQ** | 4-5 ta Q&A | ✅ Maqola oxirida |

### 3.3 — Copywriting Framework Detallari

**PAS (Problem-Agitate-Solution) — Kirish**
```
Problem: "Dubaiga kelmoqchi bo'lsangiz, qaysi tur tanla?"
Agitate: "Ko'p variantlar, qiymatlar, vaqt yo'q..."
Solution: "Biz yordamchi! SEM Travel → tez, arzon, qulay"
```

**AIDA (Attention-Interest-Desire-Action) — Bo'limlar**
```
Attention: H2 sarlavha (boldface)
Interest: Nima bo'lishi haqida (qilar, ko'rar...)
Desire: Nega kerak (foydalari, savol javoblari)
Action: CTA (band qilish, xabar qoldir...)
```

**4U (Useful-Urgent-Unique-Ultra-specific) — Sarlavha**
```
Useful: Foydali ma'lumot beradi
Urgent: "2026'da", "Shuyyorgi", "Limited"
Unique: "SEM Travel'dan..." "Ekskluziv..."
Ultra-specific: Raqamlar, tariflar, shuningdek
```

### 3.4 — SEO Auditor (100 ball mezonlar)

| # | Mezon | Max | SEM Travel Tahlifi | ✅ |
|---|-------|-----|-------------------|-----|
| 1 | Kalit so'z sarlavhada | 10 | "Dubai turlarini" title'da | ✅ |
| 2 | Kalit so'z 1-paragrafda | 10 | Birinchi `<p>`'da "Dubai" | ✅ |
| 3 | Kalit so'z meta description | 10 | Meta description'da "Dubai" | ✅ |
| 4 | Kalit so'z zichlik 0.8-2.5% | 15 | (so'z_soni * 100) / umumiy_so'zlar | ✅ |
| 5 | H2 3+ kalit so'z bilan | 15 | "Dubai turining afzalliklar", "Dubai qancha turlar" | ✅ |
| 6 | Ichki linklar 2-3 | 10 | 2-3 ta `<a href="/...">` | ✅ |
| 7 | Meta title uzunligi 30-60 | 10 | 30-60 belgi | ✅ |
| 8 | Meta description 100-160 | 10 | 100-160 belgi | ✅ |
| 9 | H2→H3 ierarxiyasi | 5 | H2'dan keyin H3lar | ✅ |
| 10 | FAQ (4-5 bo'lim) | 5 | 4-5 ta Q&A block | ✅ |
| | **JAMI** | **100** | — | — |

**Score Ishchi Aholisi:**
- 85+: **Publish** ✅
- 65-84: **Review** (admin ko'radi)
- 50-64: **Refine** (takomillash)
- <50: **Reject** ❌

### 3.5 — Tarjima Xususiyatlari

| Parametr | Talablar | SEM Travel.uz |
|----------|----------|--------------|
| **Model** | Claude Haiku | ✅ Haiku |
| **Temperature** | 0.3 (aniqlik) | ✅ 0.3 |
| **Max Tokens** | 4000 | ✅ 4000 |
| **HTML Preservation** | Taglar ±2 xato | ✅ Cheerio parse |
| **Tillar** | Min 2 (EN + 1 boshqasi) | ✅ UZ→RU, UZ→EN |
| **Fallback** | 2-urinish, keyin English | ✅ Try-catch + English |
| **Validiatsiya** | JSON struktura saqlash | ✅ Prisma JSON field |

**Tarjima Soni (SEM Travel):**
```
Juma: 1 maqola O'zbekcha
Tarjimalar:
  1. Ruscha (70% rah...khona)
  2. Inglizcha (20% turlar)
```

### 3.7 — Auto-Publishing (Status Workflow)

```
pending_generation
    ↓ [Maqola yaratildi]
generated
    ↓ [Admin Telegram'da ko'radi]
pending_review
    ↓ [✅ Approve / ❌ Reject]
approved → published
    ↓ [Saytda ko'rinadi]
    ↓ [Telegram/Email: Elon]
live
```

**Status Jadval:**
| Status | Tavsif | Admin Harakati |
|--------|--------|-------|
| `pending_generation` | Hozir yaratilyapti | Kutish |
| `generated` | Tayyor, audit o'tdi | Revyu (Email + Telegram) |
| `approved` | Admin tasdiqladi | Auto-publish |
| `published` | Saytda | Ko'rish |
| `rejected` | Xato, qaytdi | Takomillash/O'chirish |
| `archived` | Kopi saqlanadi | Tarix |

---

## 💬 MODUL 4: INFRASTRUKTURA (6 darslik)

| # | Darslik | Mavzu | SEM Travel.uz Implementatsiyasi | Bosqich | Kod Fayli |
|---|---------|-------|--------------------------------|--------|----------|
| 4.1 | Lesson 1 | Texnik SEO | Crawler, schema, hreflang | Implementation | `seo/audit/site-crawler.ts` |
| 4.2 | Lesson 2 | Bildirishnomalar (Email + Telegram) | Zoho SMTP, Telegram bot API | Integration | `seo/pipeline/notifier.ts` |
| 4.3 | Lesson 3 | CRON Jadvallashtirish | Vercel cron, Feature flags | Infrastructure | `vercel.json` + `/api/cron/...` |
| 4.4 | Lesson 4 | Analytics & Monitoring | GenerationLog model, Dashboard | Dashboard | `/admin/analytics` |
| 4.5 | Lesson 5 | Production Deployment | Vercel + PostgreSQL + Fallback | Deployment | `prisma/migrations`, Vercel |
| 4.6 | Lesson 6 | Capstone Project | Barcha sistemani birlash | Final | Full integration |

**Bosqich:** Hafta 9-12

### 4.2 — Bildirishnomalar Xususiyatlari

**Email (Dark theme + HTML)**
```html
Header: 📝 Yangi maqola
Meta: Kalit so'z, Skori (rang), Zichlik, So'z soni
CTA: "Prevyu" tugmasi
Tema: #262626 background
```

**Telegram (Inline buttons)**
```
Message: *Yangi maqola*
Buttons: ✅ Approve | ❌ Reject | ✏️ Edit | 👁️ Preview
Handler: callback_query → status yangilash
```

### 4.3 — CRON Jadvallashtirish

**Vercel JSON Konfiguratsiyasi:**
```json
{
  "crons": [{
    "path": "/api/cron/generate-blog",
    "schedule": "0 8 * * 1,4"
  }]
}
```

**Jadval Variantlari:**
| Jadval | Vaqt | Chastota | SEM Travel |
|--------|------|---------|-----------|
| Konservativ | 2x/hafta (Dushanba, Chumasi) | Birma-bir | ✅ Tanlov |
| O'rta | 3x/hafta (Dushanba, Chorshanba, Chumasi) | Tezroq | ⭕ Kelajak |
| Agressiv | Har kuni | 7x/hafta | ❌ Xarajat |

**CRON API'sini tekshirish:**
```bash
curl -X POST https://semtravel.uz/api/cron/generate-blog \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### 4.4 — Analytics Dashboard Metrikalar

| Metrika | Maqsad | SEM Travel Xozira |
|---------|--------|-------------------|
| Maqolalar (30-kun) | 8+ | 0-2 (boshlash) |
| Ortacha SEO skori | 75+ | Kerak: 70+ |
| Takomillash foizi | <30% | Kerak: <40% |
| Token xarajati/maqola | <$0.10 | ~$0.04-0.05 |
| Tarjima muvaffaqiyat | >95% | Kerak: >90% |
| CTR (GSC) | >3% | 0% (yangi) |

**Dashboard Sahifasi:**
```
/admin/analytics
├── KPI Cards (4 ta):
│   ├── Posts (30d)
│   ├── Avg SEO Score
│   ├── Refinement Rate
│   └── Estimated Cost
├── Trends (3 ta):
│   ├── Low Scoring Articles
│   ├── Translation Success
│   └── Common Errors
└── GSC Integration (keyin)
```

### 4.5 — Production Deployment

**Vercel Sozlamasi:**
```env
DATABASE_URL=postgresql://...
ANTHROPIC_API_KEY=sk-ant-...
SMTP_HOST=smtp.zoho.com
SMTP_USER=admin@semtravel.uz
SMTP_PASS=...
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
CRON_SECRET=...
NEXT_PUBLIC_SITE_URL=https://semtravel.uz
```

**PostgreSQL Variantlari:**
| Variant | Narxi | Integratsiya | SEM Travel |
|---------|-------|--------------|-----------|
| Vercel Postgres | $15+/oy | ✅ Integratsiyalash | Buguncha |
| Neon | Bepul + | ⭕ Alohida | Kelajak |
| Railway | $5+/oy | ⭕ Alohida | Kelajak |

**Fallback Strategiya:**
```
Build time:
  npm run build && npm run export:blog
  ↓ /public/data/blog-posts.json

Runtime:
  try {
    db'dan o'qish
  } catch {
    JSON'dan o'qish (fallback)
  }
```

**Deployment Checklist:**
- [ ] Sitemap: ✅ `/sitemap.xml`
- [ ] Robots: ✅ `/robots.txt`
- [ ] Blog: ✅ `/blog`
- [ ] Email: ✅ Xabar yuboriladi
- [ ] Telegram: ✅ Notify ishlaydi
- [ ] CRON: ✅ Logs'da ko'rinadi
- [ ] GSC: ✅ 100+ indexed

---

## 📊 MODUL XULOSA JADVALI

| Modul | Darslik | Asosiy Chiqish | SEM Travel Fayli | Holati |
|-------|---------|-------|----------|--------|
| **1** | 6 ta | SEO fundamentallari | `seo/config/`, Meta tags | ✅ Asosiy |
| **2** | 6 ta | Kalit so'z baza (300+) | `seo/pipeline/keyword-research.ts`, `Keyword` model | ⭕ Keyingi |
| **3** | 7 ta | Maqola konveyeri | `seo/pipeline/*.ts`, `BlogPost` model | ⭕ Keyingi |
| **4** | 6 ta | Infrastruktura & Deployment | `/api/cron/`, `/admin/`, Vercel | ⭕ Keyingi |

---

## 🎯 QISQA AMAL REJASI

```
Hafta 1-2:    MODUL 1 (Prisma + Config)
Hafta 3-4:    MODUL 2 (Kalit so'zlar)
Hafta 5-8:    MODUL 3 (Konveyer)
Hafta 9-12:   MODUL 4 (Production)
```

**Har hafta:**
- 1 darslikni o'qish (Content Academia)
- 1 komponenta yaratish (SEM Travel.uz)
- 1 test ishga tushirish (Local)

---

## ✅ BARCHA DARSLIKLAR FAHRISTAN

### Modul 1
- [x] Lesson 1: Nima uchun SEO eng yaxshi investitsiya
- [x] Lesson 2: SEO fundamentallari
- [x] Lesson 3: On-page vs Off-page
- [x] Lesson 4: E-E-A-T signallari
- [x] Lesson 5: Indexing, Crawling, Ranking
- [x] Lesson 6: Birinchi SEO skripti

### Modul 2
- [x] Lesson 1: Kalit so'zlar vs Niyat
- [x] Lesson 2: Kalit so'zlarni topish
- [x] Lesson 3: Niyat tahlili
- [x] Lesson 4: Kalit so'z kesishish (LSI, long-tail)
- [x] Lesson 5: Kalit so'z zichlik
- [x] Lesson 6: Kalit so'z baza

### Modul 3
- [x] Lesson 1: Konveyer arxitekturasi (10 bosqich)
- [x] Lesson 2: Maqola generatsiyasi (Claude)
- [x] Lesson 3: Copywriting frameworklar (PAS, AIDA, 4U)
- [x] Lesson 4: SEO auditor (100 ball)
- [x] Lesson 5: *YOQ* (kursda tashlab ketilgan)
- [x] Lesson 6: Tarjima (Multilingual)
- [x] Lesson 7: Auto-publishing
- [x] *Capstone*: Final project (barcha birlash)

### Modul 4
- [x] Lesson 1: Texnik SEO (Crawler, schema)
- [x] Lesson 2: Bildirishnomalar (Email + Telegram)
- [x] Lesson 3: CRON jadvallashtirish
- [x] Lesson 4: Analytics & monitoring
- [x] Lesson 5: Production deployment
- [x] Lesson 6: Capstone (Final implementation + deployment)

**Jami: 24 darslik ✅**

---

**Status:** Barcha darsliklar Content Academia'dan o'tildi va SEM Travel.uz uchun checklist jadvalga aylantirildi! 🎉
