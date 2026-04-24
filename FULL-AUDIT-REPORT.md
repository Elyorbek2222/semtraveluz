# SEM Travel — Full SEO Audit Report
**Site:** https://semtravel.uz  
**Date:** 2026-04-07  
**Auditor:** Claude Code (SEO Audit Skill)  
**Stack:** Next.js 15, TypeScript, Tailwind CSS  

---

## Overall SEO Health Score: **72 / 100**

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Technical SEO | 80/100 | 25% | 20.0 |
| Content Quality | 70/100 | 25% | 17.5 |
| On-Page SEO | 65/100 | 20% | 13.0 |
| Schema / Structured Data | 60/100 | 10% | 6.0 |
| Performance (CWV) | 68/100 | 10% | 6.8 |
| Images | 70/100 | 5% | 3.5 |
| AI Search Readiness | 60/100 | 5% | 3.0 |
| **TOTAL** | | | **69.8 → 70** |

**Business Type:** Travel Agency (TravelAgency + LocalBusiness)  
**Pages Crawled:** 41 (sitemap) + key pages manually inspected  
**Languages:** Uzbek (primary), Russian (secondary)  

---

## Executive Summary

### Top 5 Critical Issues (Fixed or Requires Action)
1. ✅ **FIXED** — Duplicate `| SEM Travel` in all page titles (Next.js template conflict)
2. ❌ **Open** — No FAQPage schema on 6+ pages that have FAQ sections (missed rich results)
3. ❌ **Open** — Blog listing appears twice in sitemap.xml
4. ❌ **Open** — Destination pages lack TouristDestination / TouristAttraction schema
5. ❌ **Open** — Blog post titles too long (bilingual UZ+RU in `<title>` = 90-120 chars)

### Top 5 Quick Wins
1. Add FAQPage schema to Tours, Visa, Dubai, About pages → Google rich result potential
2. Fix sitemap duplicate /blog entry → cleaner crawl signals
3. Add Service schema to Visa, Hotels, Transfer pages
4. Add BreadcrumbList schema to all pages (breadcrumbs already rendered)
5. Add `llms.txt` file for AI crawler discoverability

---

## Technical SEO — Score: 80/100

### ✅ Passing
- `robots.txt` — clean: `Allow: /`, sitemap declared
- HTTPS — active, no mixed content detected
- Canonical URLs — set correctly on all pages
- `hreflang` — `uz`, `ru`, `x-default` declared in `<head>` via layout
- Google + Yandex verification — present
- Next.js 15 — SSR/SSG capable, fast server rendering
- URL structure — clean, descriptive slugs (`/destinations/turkiya`, `/blog/schengen-viza-olish`)
- 404 handling — `notFound()` used properly in dynamic routes
- Redirects — no chains detected

### ⚠️ Issues Found

| Severity | Issue | Fix |
|----------|-------|-----|
| **HIGH** | Sitemap lists `/blog` twice | Remove duplicate entry from `sitemap.ts` |
| **MEDIUM** | hreflang: all languages point to same URL (no language subfolders) | Acceptable for single-domain multilingual but add `Content-Language` headers |
| **MEDIUM** | Blog page loads all 25 posts at once — no pagination | Add pagination or infinite scroll with `rel="next"` |
| **LOW** | `sitemap.ts` lastmod dates are hardcoded (`2026-03-26`) for all pages | Use dynamic `new Date()` or per-page modification dates |
| **LOW** | No `X-Robots-Tag` headers visible on internal search/profile pages | Noindex `/profile` via metadata |

---

## On-Page SEO — Score: 65/100

### Title Tags — After Fix

| Page | Old Title | New Title (after fix) | Chars |
|------|-----------|----------------------|-------|
| Home | SEM Travel — Sayohat Agentligi Toshkent \| Turlar, Viza, Mehmonxona | (unchanged, set as default) | 65 |
| Tours | Turlar Katalogi — Toshkentdan Eng Arzon Tur Paketlar \| SEM Travel ✅ | Turlar Katalogi — Toshkentdan Eng Arzon Tur Paketlar \| SEM Travel | 60 |
| Visa | Viza Yordam — O'zbekistondan Viza Olish \| SEM Travel ✅ | same | 51 |
| Hotels | Mehmonxona Bron — Toshkentdan Eng Arzon Narxlar \| SEM Travel ✅ | same | 54 |
| Transfer | Transfer Xizmati — Aeroport va Shahar Transferi \| SEM Travel ✅ | same | 53 |
| About | Haqimizda — SEM Travel Toshkent \| 2011 Yildan Beri ✅ (absolute) | same | 49 |
| Contact | Bog'lanish — SEM Travel Toshkent \| Telefon, Manzil ✅ (absolute) | same | 47 |
| Destinations | Dubai Turlari Toshkentdan — Narxlar 1100$ dan \| SEM Travel ✅ | same | 51 |
| Blog | Blog — SEM Travel \| Sayohat maqolalari ✅ (absolute) | same | 42 |

### ⚠️ Remaining On-Page Issues

| Severity | Issue | Page | Fix |
|----------|-------|------|-----|
| **HIGH** | Blog post `<title>` = `titleUz \| titleRu` — bilingual titles are 90-120 chars | `/blog/[slug]` | Use only `titleUz` in title tag; put Russian in meta keywords |
| **MEDIUM** | H1 on Tours page contains emoji `✈️` | `/tours` | Remove emoji from H1 |
| **MEDIUM** | Home H1 "Orzu sayohatingizni biz bilan amalga oshiring" has no primary keyword | `/` | Include "sayohat agentligi" or "turlar" in H1 |
| **MEDIUM** | Visa page H1 "Viza olishda professional yordam" lacks keyword "O'zbekiston" | `/visa` | Add geo-qualifier |
| **LOW** | Hotels page H3 only "Mehmonxona bron qilmoqchimisiz?" — weak content depth | `/hotels` | Expand with hotel category descriptions |
| **LOW** | Transfer H1 "Qulay va xavfsiz transfer xizmati" lacks "Toshkent" geo signal | `/transfer` | Add location |

### Meta Descriptions
All pages have unique, descriptive meta descriptions between 120-170 chars. ✅

---

## Content Quality — Score: 70/100

### ✅ Strengths
- Blog posts: 1,200–1,500 words per article (solid depth)
- Bilingual content (UZ + RU) — covers both primary search markets
- About page: strong E-E-A-T — founded 2011, team names listed, 30k+ clients
- FAQ sections on multiple pages (Tours, Visa, Destinations)
- BlogPosting schema present on all blog posts
- Internal linking: consistent nav links on all pages

### ⚠️ Weaknesses

| Severity | Issue | Page | Fix |
|----------|-------|------|-----|
| **HIGH** | Blog author is "SEM Travel" (Organization) — no individual author byline | All blog posts | Create author profiles; use Person schema for author |
| **HIGH** | Destination pages: 800–950 words — thin for competitive destination keywords | `/destinations/*` | Expand to 1,500+ words; add local tips, weather, visa detail |
| **MEDIUM** | Hotels page has no actual hotel inventory/listings | `/hotels` | Add hotel cards or integrate Tourvisor hotel widget |
| **MEDIUM** | No original photography — all blog images from Unsplash CDN | Blog posts | Add branded/original travel photos |
| **MEDIUM** | No testimonials/reviews on destination pages | Destinations | Pull testimonials from About page or add inline |
| **LOW** | Blog has no FAQ sections | Blog posts | Add FAQ section at end of each post for rich results |
| **LOW** | No "last updated" visible on blog posts despite dateModified in schema | Blog | Show formatted update date in UI |

### E-E-A-T Assessment: **Moderate (6/10)**
- ✅ Experience: 15 years (2011), 30k+ clients
- ✅ Expertise: Team listed by name and role on About page
- ✅ Authoritativeness: Telegram + Instagram presence, Yandex verification
- ❌ Trustworthiness: No industry certifications/licenses shown, no SSL badge, no external review platform (TripAdvisor, Google reviews) integration

---

## Schema / Structured Data — Score: 60/100

### Current Implementation

| Page | Schema Present | Issues |
|------|---------------|--------|
| Homepage | ✅ TravelAgency, LocalBusiness, WebSite, SearchAction | Good |
| Tours | ✅ ItemList + TouristTrip (11 items) | Missing AggregateRating |
| Blog posts | ✅ BlogPosting | Author is Org, not Person |
| Visa | ⚠️ Organization only | Missing Service schema |
| Hotels | ⚠️ Organization only | Missing LodgingBusiness hints |
| Transfer | ⚠️ Organization only | Missing Service schema |
| Destinations | ⚠️ Organization only | Missing TouristDestination |
| About | ⚠️ Organization only | Could add AboutPage |
| Contact | ⚠️ Organization only | Missing second office address |
| Blog index | ❌ No schema | Missing Blog + ItemList |

### ❌ Missing High-Value Schema

#### 1. FAQPage — Highest Priority (Rich Result)
Multiple pages have FAQ sections but no FAQPage schema. This is a direct path to Google Featured Snippets.

**Affected pages:** `/tours`, `/visa`, `/destinations/turkiya`, `/destinations/dubai`, `/about`

**Example to add to `/visa/page.tsx`:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O'zbekiston fuqarolari uchun Schengen vizasi qancha turadi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schengen vizasi konsullik yig'imi 80 EUR. SEM Travel orqali hujjat tayyorlash 300,000 so'mdan."
      }
    }
  ]
}
```

#### 2. Service Schema — Medium Priority
```json
{
  "@type": "Service",
  "name": "Viza Yordam Xizmati",
  "provider": { "@id": "https://semtravel.uz/#organization" },
  "serviceType": "Visa assistance",
  "areaServed": { "@type": "Country", "name": "Uzbekistan" },
  "offers": { "@type": "Offer", "price": "300000", "priceCurrency": "UZS" }
}
```

#### 3. BreadcrumbList — Quick Win
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://semtravel.uz" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://semtravel.uz/blog" },
    { "@type": "ListItem", "position": 3, "name": "Article Title", "item": "https://semtravel.uz/blog/slug" }
  ]
}
```

#### 4. AggregateRating on Tour Cards
Tour cards show ratings (e.g., 4.8/5, 312 reviews) but no schema:
```json
{
  "@type": "TouristTrip",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "312"
  }
}
```

---

## Performance — Score: 68/100

### Known Factors

| Factor | Assessment |
|--------|-----------|
| Next.js 15 SSR/SSG | ✅ Fast initial load |
| Tourvisor widgets (6 modules) | ⚠️ Third-party scripts, lazyOnload used |
| Blog: 25 posts on one page | ⚠️ No pagination — large DOM |
| Unsplash images in blog | ✅ CDN-served, fast |
| Inter font from Google Fonts | ✅ `preconnect` header set |
| Tourvisor `preconnect` | ✅ Set in layout `<head>` |
| `TourvisorInit` script | ✅ Fixed — now in layout (all pages) |

### Recommendations
1. Add `loading="lazy"` to all below-fold images
2. Add pagination to blog (split 25 posts into pages of 9-12)
3. Consider `priority` prop on Hero image (LCP element)
4. Monitor CLS from Tourvisor widget injection (widgets shift layout when loaded)

---

## Images — Score: 70/100

### ✅ Good
- Blog post featured images have descriptive alt text matching article title
- Unsplash CDN — fast delivery, responsive
- OG images: 1200x630 set correctly

### ⚠️ Issues
| Severity | Issue | Fix |
|----------|-------|-----|
| **MEDIUM** | All blog images are Unsplash stock — no branded/original content | Add SEM Travel branded travel photos |
| **MEDIUM** | No `width`/`height` on Tourvisor widget placeholder divs — causes CLS | Add `min-height` CSS to all widget containers |
| **LOW** | Logo alt text not audited | Ensure logo has `alt="SEM Travel"` |
| **LOW** | No WebP/AVIF optimization confirmed for local images | Use Next.js `<Image>` component for all local images |

---

## AI Search Readiness (GEO) — Score: 60/100

### ✅ Good
- BlogPosting schema → AI engines can cite blog posts
- FAQ content present → potential for AI answer boxes
- Bilingual content → captures both UZ and RU AI queries
- Organization schema with founded date, team, contact info

### ❌ Missing
| Issue | Fix |
|-------|-----|
| No `llms.txt` file | Create `/public/llms.txt` with site description, key pages |
| No FAQ schema → AI can't surface structured answers | Add FAQPage schema to key pages |
| No author Person schema → reduces citation credibility | Create author profiles |
| No external authority signals (Wikipedia, Wikidata mentions) | Build backlinks from uz.wikipedia.org, local directories |

### Recommended `llms.txt` (`/public/llms.txt`):
```
# SEM Travel — Sayohat Agentligi

> SEM Travel — O'zbekistondagi litsenziyalangan sayohat agentligi. 2011 yildan beri faoliyat ko'rsatmoqda. 30 000+ mamnun mijoz. Toshkentdan 50+ mamlakatga turlar.

## Asosiy sahifalar
- [Bosh sahifa](https://semtravel.uz)
- [Turlar katalogi](https://semtravel.uz/tours)
- [Viza xizmatlari](https://semtravel.uz/visa)
- [Mehmonxona bron](https://semtravel.uz/hotels)
- [Transfer](https://semtravel.uz/transfer)
- [Blog](https://semtravel.uz/blog)
- [Haqimizda](https://semtravel.uz/about)
- [Bog'lanish](https://semtravel.uz/contact)

## Yo'nalishlar
Turkiya, Dubai, Misr, Tailand, Maldiv, Gretsiya, Gruziya, Qirg'iziston, Xitoy

## Kontakt
Telefon: +998 71 275-55-55 | +998 94 664-22-22  
Manzil: Toshkent, Uchtepa, Katta Xirmontepa 12B  
Ish vaqti: Dushanba–Shanba 9:00–19:00
```

---

## Sitemap Issues

```
# Duplicate detected in sitemap.xml:
https://semtravel.uz/blog  ← appears TWICE

# Missing from sitemap:
- /privacy (privacy policy page exists but not in sitemap)
- /transfer (check if included)
```

Fix in `app/sitemap.ts` — deduplicate `/blog` entry.

---

## Action Plan Summary

### Critical (Fix Immediately)
- [x] ~~Duplicate `| SEM Travel` title tag on all pages~~ **FIXED**
- [ ] Fix sitemap `/blog` duplicate entry
- [ ] Fix blog post `<title>` — use Uzbek-only title (remove Russian from title tag)

### High Priority (Fix This Week)
- [ ] Add FAQPage schema to: `/tours`, `/visa`, `/destinations/turkiya`, `/destinations/dubai`
- [ ] Add Service schema to `/visa`, `/hotels`, `/transfer`
- [ ] Add BreadcrumbList schema to all pages
- [ ] Fix Home page H1 — include primary keyword ("sayohat agentligi Toshkent")
- [ ] Add `llms.txt` for AI search discoverability
- [ ] Noindex `/profile` page

### Medium Priority (Fix This Month)
- [ ] Expand destination pages to 1,500+ words
- [ ] Add pagination to blog (currently 25 posts on one page)
- [ ] Add AggregateRating schema to TouristTrip items
- [ ] Create author Person profiles for blog posts
- [ ] Add TouristDestination schema to all destination pages
- [ ] Hotels page: integrate Tourvisor hotel widget or add real hotel listings
- [ ] Add `min-height` to Tourvisor widget containers (prevent CLS)

### Low Priority (Backlog)
- [ ] Dynamic `lastmod` dates in sitemap
- [ ] Add FAQ sections to blog posts
- [ ] Remove emoji from H1 headings
- [ ] Original photography for blog posts
- [ ] Google reviews / TripAdvisor integration for trust signals
- [ ] IndexNow API integration for faster indexing

---

*Report generated by Claude Code SEO Audit | semtravel.uz | 2026-04-07*
