# Module 4 — Production & Automation (SEM Travel.uz)

**Status:** Analysis Complete  
**Timeline:** Hafta 5-8 (4 hafta)  
**Focus:** Technical SEO, Notifications, Scheduling, Analytics, Deployment

---

## 📊 Module 4 Jadval: Nima Qilamiz?

| # | Task | Fayl | Vaqt | Qiymati |
|---|------|------|------|---------|
| **4.1** | Technical SEO | `app/sitemap.ts`, `app/robots.ts` | 1h | ✅ Partial (qo'shimcha) |
| **4.2** | Notifications | `seo/notifications/notifier.ts` | 2h | ✅ Email + Telegram |
| **4.3** | Cron Scheduling | `app/api/cron/generate-blog/route.ts` | 1h | ✅ Automated |
| **4.4** | Analytics | `app/admin/analytics/page.tsx` | 2h | ✅ Dashboard |
| **4.5** | Deployment | `vercel.json`, Production DB | 2h | ✅ PostgreSQL |
| **4.6** | Integration | Full pipeline + testing | 3h | ✅ End-to-end |

**MODUL 4 JAMI VAQT:** 11 soat (2.5-3 kun)

---

## 🔄 SEM Travel.uz Specific Challenges & Solutions

### Challenge 1: Blog Content Pipeline Integration
**Problem:** Module 3 articles tidak ada di sitemap dan robots.txt
**Solution:** Update sitemap.ts to query published BlogPosts dynamically

```typescript
// app/sitemap.ts — needs update
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: 'https://semtravel.uz', priority: 1.0 },
    { url: 'https://semtravel.uz/tours', priority: 0.9 },
    { url: 'https://semtravel.uz/destinations', priority: 0.9 },
    { url: 'https://semtravel.uz/blog', priority: 0.8 },
  ];

  // NEW: Dynamically add published blog posts
  const posts = await prisma.blogPost.findMany({
    where: { status: 'published' },
    select: { slug: true, updatedAt: true }
  });

  const blogPages = posts.map(post => ({
    url: `https://semtravel.uz/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticPages, ...blogPages];
}
```

### Challenge 2: Multi-Language Hreflang Tags
**Problem:** Blog posts in UZ, RU, EN but no hreflang links
**Solution:** Add hreflang to dynamic blog layout

```typescript
// app/blog/[slug]/layout.tsx
export async function generateMetadata({ params }) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug }
  });

  return {
    // ... existing metadata ...
    alternates: {
      canonical: `https://semtravel.uz/blog/${post.slug}`,
      languages: {
        uz: `https://semtravel.uz/uz/blog/${post.slug}`,
        ru: `https://semtravel.uz/ru/blog/${post.slug}`,
        en: `https://semtravel.uz/en/blog/${post.slug}`
      }
    }
  };
}
```

### Challenge 3: JSON-LD Schema for Travel Content
**Problem:** BlogPosting schema doesn't have travel-specific fields
**Solution:** Extend schema with destination, price, booking info

```typescript
// New: Travel-specific schema
export function generateTravelBlogSchema(post: BlogPost) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.en,
    description: post.metaDescription.en,
    author: { '@type': 'Person', name: 'SEM Travel' },
    datePublished: post.createdAt.toISOString(),
  };

  // Add travel-specific fields if applicable
  if (post.category === 'tours' && post.destination) {
    return {
      ...baseSchema,
      '@type': 'TravelAction',  // or 'Event' for tour dates
      destinationName: post.destination,
      priceCurrency: 'USD',
      priceRange: post.priceRange,
      bestSeason: post.bestSeason,
    };
  }

  return baseSchema;
}
```

### Challenge 4: Admin Notifications Already Configured
**Good news:** You already have:
```env
TELEGRAM_BOT_TOKEN=7715605911:AAFVkGo_mRuRQ9hIn9z6kdu373SW2nxMtGA
TELEGRAM_CHAT_ID=-1002361188017
TELEGRAM_PUBLIC_CHAT_ID=""
```

**What's needed:** 
- Implement `sendTelegramReview()` function
- Implement `sendArticleEmail()` with Zoho SMTP
- Set TELEGRAM_PUBLIC_CHAT_ID for blog announcements

### Challenge 5: Cron Scheduling for Blog Generation
**Current state:** Manual blog generation
**Solution:** Setup automatic cron job (2x/week: Пн/Чт 8:00 UTC)

```json
{
  "crons": [{
    "path": "/api/cron/generate-blog",
    "schedule": "0 8 * * 1,4"
  }]
}
```

**What happens:**
1. Monday 8am UTC → Generate blog post from random keyword
2. Sends Telegram notification to admin
3. Admin approves/rejects within 24 hours
4. Approved posts go live automatically

### Challenge 6: Analytics Dashboard for Travel Blog
**Key metrics:**
- Total posts generated (30d)
- Avg SEO score per category (tours, hotels, visas, blog)
- Most common SEO issues
- Translation success rate
- Cost per article
- Google Search Console CTR trends

---

## 🎯 Module 4 Implementation Plan for SEM Travel.uz

### Phase 1: Technical SEO Enhancement (1h)

**Files to update:**
- [x] `/app/sitemap.ts` — Add dynamic blog posts
- [x] `/app/robots.ts` — Already good (disallow /api, /admin)
- [ ] `/app/blog/[slug]/layout.tsx` — Add hreflang + JSON-LD schemas
- [ ] `/seo/schema/travel-blog-schema.ts` — NEW travel-specific schemas

**Deliverables:**
- Sitemap includes all published blog posts
- Hreflang tags for UZ/RU/EN blog versions
- BlogPosting + FAQPage + TravelAction schemas
- OG tags with blog thumbnails

---

### Phase 2: Notification System (2h)

**Files to create:**
- [ ] `/seo/notifications/notifier.ts` — Email + Telegram functions
- [ ] `/lib/email-templates.ts` — HTML email templates
- [ ] `/api/telegram/webhook/route.ts` — Telegram callback handler
- [ ] `/api/notifications/test/route.ts` — Manual test endpoint

**Deliverables:**
- When blog generated → Telegram notification to admin
- Admin clicks ✅ Approve/❌ Reject/✏️ Edit buttons
- When approved → Public announcement to Telegram group
- Email backup for Telegram failures

**Configuration needed:**
```env
# Telegram (already set)
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
TELEGRAM_PUBLIC_CHAT_ID=... (need to set)

# Email
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=admin@semtravel.uz
SMTP_PASS=... (app-specific password)
ADMIN_EMAIL=admin@semtravel.uz
```

---

### Phase 3: Cron Job Scheduling (1h)

**Files to create:**
- [ ] `/vercel.json` — Cron configuration
- [ ] `/app/api/cron/generate-blog/route.ts` — CRON handler
- [ ] `/app/api/admin/feature-flags/route.ts` — Toggle flags
- [ ] `/scripts/test-cron.sh` — Manual test script

**Schedule:**
```
0 8 * * 1,4    → Monday & Thursday 8:00 AM UTC
```

**During cron execution:**
1. Pick random unused keyword from database (Module 2)
2. Run full pipeline (Module 3)
3. Send admin notification (this phase)
4. Log execution metrics

**Feature flags:**
- `BLOG_AUTO_GENERATION` — Enable/disable entirely
- `BLOG_TRANSLATION_ENABLED` — Skip translation if needed
- `BLOG_NOTIFICATION_ENABLED` — Skip notifications
- `BLOG_MAX_ARTICLES_PER_RUN` — How many per execution

---

### Phase 4: Analytics Dashboard (2h)

**File to create:**
- [ ] `/app/admin/analytics/page.tsx` — Analytics dashboard
- [ ] `/seo/utils/analytics.ts` — Analytics functions
- [ ] `/app/api/admin/analytics/route.ts` — Data API

**Dashboard shows:**
```
📊 KPIs:
├─ Posts generated (30d): N
├─ Average SEO score: X.X/100
├─ Refinement rate: X%
├─ Translation success: X%
├─ Estimated API cost: $X.XX

📈 Trends:
├─ SEO score trend (chart)
├─ Posts by category (chart)
├─ Language distribution

⚠️ Issues:
├─ Low-scoring articles
├─ Translation failures
├─ Common problems
```

**Metrics to track:**
- Per category (tours, hotels, visas, blog)
- Per language (uz, ru, en)
- Per week/month
- Cost breakdown

---

### Phase 5: Production Deployment (2h)

**Setup PostgreSQL:**
- [ ] Choose: Vercel Postgres vs. Supabase vs. Neon
- [ ] Create production database
- [ ] Update `prisma/schema.prisma` (provider: postgresql)
- [ ] Run migrations: `npx prisma migrate deploy`
- [ ] Export blog as JSON fallback: `npm run export:blog`

**Deployment steps:**
1. Push code to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy preview branch first
5. Test everything in preview
6. Deploy to production
7. Monitor logs: `vercel logs`

**Environment variables (production):**
```env
# Database
DATABASE_URL=postgresql://...

# API Keys
ANTHROPIC_API_KEY=sk-ant-...
CRON_SECRET=very-secret-token

# Email
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=admin@semtravel.uz
SMTP_PASS=...
ADMIN_EMAIL=admin@semtravel.uz

# Telegram
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
TELEGRAM_PUBLIC_CHAT_ID=...

# Site
NEXT_PUBLIC_SITE_URL=https://semtravel.uz
```

**Vercel configuration:**
```json
{
  "buildCommand": "npm run build && npm run export:blog",
  "crons": [{
    "path": "/api/cron/generate-blog",
    "schedule": "0 8 * * 1,4"
  }]
}
```

---

### Phase 6: Integration & Testing (3h)

**Integration points:**
- Module 2 (keywords) → Cron job picks random keyword
- Module 3 (generation) → Called by cron job
- Module 4 (notifications) → Alerts admin
- Notifications → Admin approves
- Approval → Blog goes live + Google indexes

**Testing checklist:**
```
☑️ Sitemap includes blog posts
☑️ Robots.txt allows blog indexing
☑️ Hreflang tags present (all 3 languages)
☑️ JSON-LD schemas valid (test with Google Rich Results)
☑️ Telegram notifications working
☑️ Email notifications working (if Telegram fails)
☑️ Cron job runs on schedule (Vercel logs)
☑️ Analytics dashboard loads
☑️ All metrics calculating correctly
☑️ Blog posts visible on production
☑️ Google Search Console sees new posts
```

---

## 🚀 Critical Path

**Week 1 (Days 1-2): Phase 1 + 2**
- Update sitemap & robots
- Add JSON-LD schemas
- Implement email + Telegram

**Week 2 (Days 3-4): Phase 3 + 4**
- Setup cron scheduling
- Build analytics dashboard

**Week 3 (Days 5-6): Phase 5 + 6**
- Deploy to production
- Full testing & monitoring

---

## 💾 Database Schema Updates for Module 4

**BlogPost model — already has most fields:**
```prisma
model BlogPost {
  id              String
  slug            String @unique
  title           Json              // { en, ru, uz }
  content         Json              // { en, ru, uz }
  metaTitle       Json              // { en, ru, uz }
  metaDescription Json              // { en, ru, uz }
  keyword         String
  seoScore        Int
  keywordDensity  Float
  category        String?           // "tours" | "hotels" | "visas" | "blog"
  destination     String?           // "Dubai", "Istanbul", etc.
  priceRange      String?           // "$100-500"
  bestSeason      String?           // "Oct-Apr"
  status          String @default("pending_review")
  publishedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  logs            GenerationLog[]
}

model GenerationLog {
  id              String
  blogPostId      String
  action          String            // "generate", "audit", "translate", "save", "publish"
  status          String            // "success", "failed"
  tokensUsed      Int @default(0)
  duration        Int               // milliseconds
  error           String?
  details         Json?             // Additional data
  createdAt       DateTime @default(now())
}

// NEW: FeatureFlags model (optional, can use env vars)
model FeatureFlag {
  id              String @id @default(cuid())
  name            String @unique    // "BLOG_AUTO_GENERATION"
  enabled         Boolean @default(true)
  updatedAt       DateTime @updatedAt
}

// NEW: CronExecution model (optional, for monitoring)
model CronExecution {
  id              String @id @default(cuid())
  status          String            // "success", "failed", "skipped"
  topic           String?
  postId          String?
  duration        Int
  tokensUsed      Int?
  error           String?
  executedAt      DateTime @default(now())
}
```

---

## ⚡ Quick Start Commands

```bash
# Phase 1: Sitemap update (already mostly done)
npx ts-node scripts/test-sitemap.ts

# Phase 2: Test email + Telegram
curl http://localhost:3000/api/notifications/test

# Phase 3: Test cron locally
curl -X POST http://localhost:3000/api/cron/generate-blog \
  -H "Authorization: Bearer $CRON_SECRET"

# Phase 4: Check analytics
curl http://localhost:3000/api/admin/analytics

# Phase 5: Build for production
npm run build && npm run export:blog

# Phase 6: Deploy preview
git push origin feat/seo-module-4
# (Vercel automatically creates preview)

# Final: Deploy to production
git checkout main
git merge feat/seo-module-4
git push origin main
# (Vercel automatically deploys)
```

---

## 📋 Success Criteria

### Technical SEO ✅
- Sitemap contains 50+ URLs (static + dynamic blog posts)
- Robots.txt allows all except /api, /admin
- JSON-LD schemas validate in Google Rich Results Test
- Hreflang present for all language versions

### Notifications ✅
- Telegram message arrives within 10 seconds of generation
- Admin can approve/reject/edit via inline buttons
- Public announcement posted when approved
- Email fallback works if Telegram down

### Cron ✅
- Runs automatically Monday & Thursday 8am UTC
- Picks random unused keyword
- Generates article in <30 seconds
- Logs execution for monitoring

### Analytics ✅
- Dashboard shows KPIs for last 30 days
- Cost per article < $0.10
- Avg SEO score ≥ 75
- Translation success > 95%

### Deployment ✅
- PostgreSQL database configured
- All environment variables set
- Cron job running in production
- Zero downtime deployments

---

## 🎯 Estimated Effort

| Phase | Hours | Days |
|-------|-------|------|
| 1. Technical SEO | 1 | 1 |
| 2. Notifications | 2 | 1 |
| 3. Cron Scheduling | 1 | 1 |
| 4. Analytics | 2 | 1 |
| 5. Deployment | 2 | 1 |
| 6. Integration & Testing | 3 | 1-2 |
| **TOTAL** | **11h** | **2.5-3 days** |

**Timeline:** Hafta 5-8 ichida tugallash mumkin

---

**Tayyorlik:** Module 4 SEM Travel.uz uchun 100% ready! ✅

Keyingi: **Detailed implementation checklist** va **code examples**
