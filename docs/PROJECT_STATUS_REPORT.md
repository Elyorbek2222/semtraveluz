# SEM Travel.uz — Loyiha Holati Reporti

**Sana:** 2026-04-26  
**Status:** 40% tayyor, 60% qoldi  

---

## ✅ TAYYOR BO'LGANLAR (Modul 1-2 asoslar)

### 1️⃣ Papka Tuzilmasi
```
/seo
├── /config          ✅ seo.config.ts (kalit sozlamalar)
├── /schema          ✅ tour, org, breadcrumb, faq (JSON-LD)
├── /audit           ✅ crawler, report-generator, run-audit
├── /utils           ✅ meta-tags.ts (metadata generator)
├── /sitemap         ⭕ empty
├── /templates       ⭕ empty
└── /pipeline        ❌ YOQ (kerak!)
```

**Status:** 40% ✅

### 2️⃣ Dependencies (NPM paketlar)
```json
✅ axios               — HTTP requests
✅ cheerio             — HTML parsing
✅ @types/cheerio      — TypeScript types
✅ ts-node             — TypeScript execution
✅ tsx                 — TS runner
❌ @prisma/client      — MISSING! (kerak)
❌ nodemailer          — MISSING! (kerak)
```

**Status:** 5/7 (71%) ✅

### 3️⃣ Configuration Files
```
✅ /seo/config/seo.config.ts
   - site.name, site.url, site.language
   - branding colors
   - openGraph config
   - social links
   - siteLinks (tours, destinations, visa, about, contact)

❌ /prisma/schema.prisma              — MISSING!
❌ .env.local updates                 — Partial (kerak: API keys)
```

**Status:** 50% ✅

### 4️⃣ Schema Factories (JSON-LD)
```
✅ /seo/schema/tour-schema.ts
   - generateTourSchema(tour) → TouristTrip + Offer
   - 200+ lines

✅ /seo/schema/org-schema.ts
   - generateOrgSchema() → TravelAgency + LocalBusiness
   - 150+ lines

✅ /seo/schema/breadcrumb-schema.ts
   - generateBreadcrumbSchema(items[])
   - generateTourBreadcrumb(tour)

✅ /seo/schema/faq-schema.ts
   - generateFaqSchema(faqs[])
```

**Status:** 100% ✅ (4/4 fayl)

### 5️⃣ Meta-tags Utilities
```
✅ /seo/utils/meta-tags.ts
   - generateTourMeta(tour) → Metadata
   - generateDestinationMeta(dest)
   - generateBlogMeta(post)
   - generateStaticPageMeta(page)
```

**Status:** 100% ✅

### 6️⃣ Site Auditor (Texnik SEO)
```
✅ /seo/audit/site-crawler.ts
   - Axios + Cheerio crawler
   - 165 lines
   - Crawl all URLs (tours, destinations, blog, static)
   - Extract: title, description, canonical, h1, schema, hreflangs, OG

✅ /seo/audit/report-generator.ts
   - Analyze crawler output
   - Check: missing title/desc, duplicates, canonical, schema, hreflangs
   - 205 lines

✅ /seo/audit/run-audit.ts
   - CLI runner
   - 53 lines

✅ package.json script
   - "seo:audit": "tsx seo/audit/run-audit.ts"
```

**Status:** 100% ✅ (3/3 fayl)

### 7️⃣ Static Data Files
```
✅ /lib/tours-data.ts         — 8 tur + 23k lines
✅ /lib/destinations-data.ts  — Joy ro'yxati + 35k lines
✅ /lib/excursions-data.ts    — Ekskursiyalar + 29k lines
✅ /lib/blog-data.ts          — Blog postlari + 189k lines
```

**Status:** 100% ✅ (4/4 fayl)

### 8️⃣ Sitemap va Robots
```
✅ /app/sitemap.ts
✅ /app/robots.ts
✅ /app/layout.tsx (hreflang dastlabki qoʻllanilgan)
```

**Status:** 100% ✅

---

## ❌ QOLGAN ISHLAR (Modul 2-4 asoslar)

### ⚡ PRIORITY 1 — FORIYDUR (Hafta 1-2)

#### 1. Prisma + Database
```
❌ npm install @prisma/client
❌ npx prisma init
❌ /prisma/schema.prisma
   - BlogPost model (slug, title:JSON, content:JSON, keyword, seoScore, status, logs)
   - GenerationLog model (action, status, tokensUsed, duration, error, details:JSON)
   - Keyword model (keyword, niche, intent, searchVolume, difficulty, language)

❌ npx prisma migrate dev --name init
❌ DATABASE_URL setup (.env.local)
```

**Tahmini vaqt:** 2 soat  
**Relevantlik:** JUDA MUHIM

#### 2. API Keys (Environment Variables)
```
⚠️ .env.local UPDATE:
   ✅ ANTHROPIC_API_KEY              — allaqachon bor? Tekshir
   ❌ DATABASE_URL=file:./dev.db     — KERAK
   ❌ SMTP_HOST=smtp.zoho.com        — KERAK (Email)
   ❌ SMTP_USER=...                  — KERAK
   ❌ SMTP_PASS=...                  — KERAK
   ❌ TELEGRAM_BOT_TOKEN=...         — KERAK
   ❌ TELEGRAM_CHAT_ID=...           — KERAK
   ❌ CRON_SECRET=...                — KERAK
```

**Tahmini vaqt:** 1 soat  
**Relevantlik:** FORIYDUR

### ⚡ PRIORITY 2 — MODUL 2 (Hafta 3-4)

#### 3. Kalit So'zlar Konveyeri
```
❌ /seo/pipeline/keyword-research.ts
   - researchKeywords(niche: string) → Keyword[]
   - Claude Haiku API call
   - Temperature 0.5
   - Return: keyword, searchVolume, difficulty

❌ /seo/types/index.ts
   - Keyword interface
   - Article interface
   - AuditResult interface
   - TranslationResult interface
   - PipelineResult interface
```

**Tahmini vaqt:** 3-4 soat  
**Relevantlik:** MUHIM

#### 4. Kalit So'zlar Bazasi
```
❌ Prisma Keyword model (allaqachon schema'da)
❌ Seed script (222 kalit so'zni qo'shish)
   - 160 O'zbekcha
   - 45 Ruscha
   - 17 Inglizcha
```

**Tahmini vaqt:** 2 soat

### ⚡ PRIORITY 3 — MODUL 3 (Hafta 5-8)

#### 5. Maqola Konveyeri
```
❌ /seo/pipeline/article-generator.ts
   - generateArticle(keyword, difficulty)
   - Claude Sonnet API
   - PAS intro + AIDA bo'limlar + 4U sarlavha
   - 800-1000 so'z, semantic HTML
   - Return: html, wordCount, metaTitle, metaDescription

❌ /seo/pipeline/seo-auditor.ts
   - auditSEO(html, metaTitle, metaDescription, keyword)
   - 10 mezon, 100 ball
   - Return: totalScore, breakdown[], criticalIssues, recommendation

❌ /seo/pipeline/translator.ts
   - translateArticle(html, language)
   - Claude Haiku
   - HTML preservation (±2 tags)
   - Fallback: 2 urinish keyin English

❌ /seo/pipeline/publisher.ts
   - Prisma BlogPost create
   - Status workflow

❌ /seo/pipeline/orchestrator.ts
   - runFullPipeline(niche)
   - 7 bosqich (research → generate → audit → refine → translate → validate → save)
```

**Tahmini vaqt:** 20-24 soat  
**Relevantlik:** ASOSIY KONVEYER

### ⚡ PRIORITY 4 — MODUL 4 (Hafta 9-12)

#### 6. Bildirishnomalar (Email + Telegram)
```
❌ npm install nodemailer @types/nodemailer
❌ /seo/pipeline/notifier.ts
   - sendArticleEmail(payload) — HTML dark theme
   - sendTelegramReview(payload) — inline buttons (Approve/Reject/Edit/Preview)
   - sendPublicAnnouncement(payload) — Public channel elon
   - Callback handler (/api/telegram/webhook)
```

**Tahmini vaqt:** 6-8 soat

#### 7. CRON Jadvallashtirish
```
❌ /vercel.json
   - "schedule": "0 8 * * 1,4"  (Dushanba/Chumasi 8:00 UTC)

❌ /api/cron/generate-blog
   - CRON_SECRET check
   - Feature flag check
   - runFullPipeline() call
   - Error handling + logging
```

**Tahmini vaqt:** 4-5 soat

#### 8. Analytics Dashboard
```
❌ /admin/analytics/page.tsx
   - KPI cards (Posts, Avg SEO Score, Refinement Rate, Cost)
   - Trends (Low Scoring, Translation Success, Errors)
   - GenerationLog queries

❌ Analytics functions:
   - getAverageSeoScore(days)
   - getRefinementRate(days)
   - getCommonIssues(days)
   - getTranslationSuccessRate(days)
   - calculateArticleCost(logs)
```

**Tahmini vaqt:** 8-10 soat

#### 9. Production Deployment
```
❌ Vercel bog'lash (GitHub integration)
❌ PostgreSQL setup (Neon yoki Vercel Postgres)
❌ Environment variables o'rnatish (Vercel dashboard)
❌ Prisma migratsiya: npx prisma migrate deploy
❌ Export fallback: /scripts/export-blog.ts
```

**Tahmini vaqt:** 6-8 soat

---

## 📊 COMPLETION STATISTICS

### Modul bo'yicha:
| Modul | Darslik | Kod Status | Foiz |
|-------|---------|-----------|------|
| **1** | 6 ta | 4/6 ✅ | 67% |
| **2** | 6 ta | 0/6 ❌ | 0% |
| **3** | 7 ta | 0/7 ❌ | 0% |
| **4** | 6 ta | 0/6 ❌ | 0% |
| **JAMI** | 25 ta | 4/25 | **16%** |

### By Category:
| Kategoriya | Status |
|-----------|--------|
| **Infrastructure** (Prisma, Config, ENV) | 30% ✅ |
| **Data Models** (Schema, Meta-tags) | 100% ✅ |
| **Auditing** (Crawler, Report) | 100% ✅ |
| **Pipeline** (Keyword→Article→Audit→Translate) | 0% ❌ |
| **Notifications** (Email, Telegram) | 0% ❌ |
| **Scheduling** (CRON, Feature Flags) | 0% ❌ |
| **Analytics** (Dashboard, Monitoring) | 0% ❌ |
| **Deployment** (Vercel, PostgreSQL) | 0% ❌ |

---

## 🎯 KEYINGI QADAMLAR (Ish rejasi)

### **Hafta 1-2: Asoslar**
```
[ ] 1. Prisma install + schema create
[ ] 2. .env.local yangilash (API keys)
[ ] 3. Database migration
[ ] 4. Test Prisma Studio
```

### **Hafta 3-4: Kalit So'zlar**
```
[ ] 1. /seo/types/index.ts — interface'lar
[ ] 2. keyword-research.ts — Claude Haiku call
[ ] 3. Seed kalit so'zlar (222)
[ ] 4. Test: researchKeywords("turlar") → 10 kalit so'z
```

### **Hafta 5-8: Konveyer**
```
[ ] 1. article-generator.ts — Claude Sonnet
[ ] 2. seo-auditor.ts — 100 ball mezonlar
[ ] 3. translator.ts — Claude Haiku
[ ] 4. publisher.ts — Prisma create
[ ] 5. orchestrator.ts — Full pipeline
[ ] 6. Test: runFullPipeline("turlar") ishga tushadi
```

### **Hafta 9-12: Production**
```
[ ] 1. notifier.ts — Email + Telegram
[ ] 2. vercel.json + /api/cron
[ ] 3. /admin/analytics dashboard
[ ] 4. PostgreSQL setup
[ ] 5. Vercel deployment
[ ] 6. GSC bog'lash
```

---

## 💡 TAFSIYA

**Bugungi bosqich:**
1. ✅ Checklist jadvallarini o'qish (tayyor)
2. ⭕ **Hafta 1 ishlarini boshlash:** Prisma + ENV keys
3. ⭕ Har hafta 1 modul tugatlash

**Xavfsizlik:**
- Hamma API key'lar `.env.local`'da (GitHub'a push qilma!)
- `.gitignore` tekshir: `node_modules/`, `.env.local`, `*.db`

**Test:**
```bash
# Prisma ready?
npx prisma studio

# SEO audit ready?
npm run seo:audit
```

---

**Ready to start?** Qaysi bo'lim bilan boshlash xohlaysiz? 👇
