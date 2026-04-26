# Module 3 — SEM Travel.uz uchun Moslashtirilgan Rejalar

**Analiz sanasi:** 2026-04-26  
**Status:** Module 3 uchun Adaptation Plan

---

## 📊 Module 3 Jadval: Nima Qilamiz?

| # | Task | Fayl | Vaqt | Moslashtirilgan |
|---|------|------|------|-----------------|
| **3.1** | Pipeline Architecture | `/seo/pipeline/content-pipeline.ts` | 2h | ✅ READY |
| **3.2** | Article Generator | `/seo/generator/article-generator.ts` | 3h | ✅ TRAVEL FOCUS |
| **3.3** | Copywriting Frameworks | `/seo/generator/copywriting-prompts.ts` | 2h | ✅ TRAVEL ADAPTED |
| **3.4** | SEO Audit System | `/seo/audit/seo-audit.ts` | 2h | ✅ SAME |
| **3.5** | Multilingual Translator | `/seo/translator/translator.ts` | 2h | ✅ UZ+RU+EN |
| **3.6** | Auto-Publishing | `/seo/publishing/blog-publisher.ts` | 2h | ✅ REVIEW FLOW |
| **3.7** | Admin Notifications | `/seo/notifications/notify.ts` | 1h | ✅ EMAIL+TELEGRAM |

**MODUL 3 JAMI VAQT:** 14 soat (3-4 kun)

---

## 🎯 SEM Travel.uz uchun Asosiy O'zgarishlar

### 1️⃣ Til Konfiguratsiyasi

**Content Academia dars:**
```javascript
translationLanguages: ["ru", "he"]  // EN → RU, HE
```

**SEM Travel.uz uchun:**
```javascript
// Variantlar:
// Variant A: EN + RU + UZ (3 tili)
translationLanguages: ["uz", "ru", "en"]

// Variant B: UZ + RU (2 tili) — Eng katta auditoriya
translationLanguages: ["uz", "ru"]
```

**Tavsiya:** Variant B (UZ + RU) ✅
- O'zbekiston + RU-speaking areasmda auditoriya
- Kam tokenis xarajat (2 tili qahon, 3 emas)
- Google indexing uchun optimal

### 2️⃣ Niche-Spesifik Moslashtirilgan Content

**Darsda:** Tekhnologiya kontenti (Web Development, SEO tools)

**SEM Travel.uz uchun:**

#### Turlar (Tours):
```
Keyword: "Dubai turlarini xarid qiling"
Target audience: Sayohat qilmoqchi bo'lganlar
Tone: Inspirational + Practical

Content structure:
- Destination overview (why Dubai?)
- Tour packages available
- What to pack / best time to visit
- Practical tips (visa, currency, safety)
- FAQ: Most common questions
```

#### Mehmonxona (Hotels):
```
Keyword: "Tashkent otel taqqoslash"
Target audience: Joyni qidirayotganlar
Tone: Informative + Comparative

Content structure:
- What makes a good hotel
- Price vs. luxury comparison
- Amenities checklist
- How to choose
- FAQ: Booking tips, cancellation, etc.
```

#### Viza (Visas):
```
Keyword: "Dubay vizasi olinish"
Target audience: Vizani qidirayotganlar
Tone: Official + Encouraging

Content structure:
- Visa requirements
- Application process step-by-step
- Documents needed
- Processing time & cost
- Common mistakes to avoid
- FAQ: Q&A about delays, rejections, etc.
```

#### Blog (General Travel):
```
Keyword: "Sayohat qilishdan oldin tayyorlash"
Target audience: Sayohat sevuvchilar
Tone: Friendly + Practical

Content structure:
- Why travel matters
- Pre-trip checklist
- Budget planning
- Safety tips
- FAQ: General travel advice
```

### 3️⃣ Copywriting Frameworks uchun Moslashtirilgan Prompts

**AIDA Framework — Mehmonxona uchun misol:**

```
Attention: "5-star otelning porte-cochera'da turgan mashinani ko'rish nima?"
Interest: "Oladdi, lekin Tashkent'da o'rtacha turist narx qarchasini bil?"
Desire: "Siz ham 5-yulduzli service olaniz, lekin arzonroq narxda."
Action: "Shunaqa otel qidiring — teng xil sifat, 30% arzonroq"
```

**PAS Framework — Tour Introduction uchun:**

```
Problem: "Sayohat qilmoqchi bo'lsangiz, ko'p vaqt ketadi tur topish uchun."
Agitate: "Bundan tashqari, noto'g'ri tur tanlang — butun sayohat spoil."
Solution: "Biz uchun -- 100+ tur tayyorlangan, har bir budjetga."
```

**4U Framework — Zagolovki uchun:**

```
❌ "Dubai turlarini xarid qiling"
✅ "Dubai turlarini 2026-da xarid qiling: 40% chegirma + free hotel upgrade"

❌ "Mehmonxona tanlash"
✅ "2026-da Tashkent otelini qanday tanlash kerak: price-to-quality ratio"

❌ "Viza qanday olinadi"
✅ "Dubay vizasi: 48 soat ichida olinishi mumkin (qadam-qadam)"
```

---

## 🔧 Adaptation Plan — Qanday Qilamiz?

### Task 3.1: Content Pipeline Architecture

**Qilish kerak:** 10-step konveyer qurish, SEM Travel.uz uchun optimallashtirilgan

```
1️⃣  selectKeyword()
    → Database dan kalit so'z tanlash (uz/ru)
    → searchIntent, difficulty, niche (turlar/mehmonxona/viza)

2️⃣  researchKeyword()
    → LSI keywords topish (alladi topilgan)
    → Related terms (shunga o'xshash so'zlar)

3️⃣  generateArticle()
    → Claude Sonnet (temperature: 0.8)
    → Travel-specific prompts
    → 800-1000 words
    → HTML output

4️⃣  auditSEO()
    → 100-ball sistema
    → Travel-specific metrics:
       - Destination mention (agar location-based bo'lsa)
       - Practical tips included
       - FAQ section present

5️⃣  refineContent()
    → Agar score < 65 bo'lsa, yaxshilash
    → Max 2 attempt

6️⃣  translateContent()
    → Parallel: UZ → RU
    → Claude Haiku (temperature: 0.3)
    → HTML validation

7️⃣  validateTranslations()
    → Tag count check
    → Fallback to EN agar qopol bo'lsa

8️⃣  saveToDatabase()
    → BlogPost model ga yozish
    → Status: pending_review
    → Generate slug

9️⃣  notifyAdmin()
    → Email + Telegram
    → Inline buttons: Approve / Reject / Edit

🔟 publishOnApproval()
    → Admin approve qilganda
    → Status: published
    → Site'da ko'rinish
```

### Task 3.2: Travel-Focused Article Generator

**Asosiy prompts SEM Travel.uz uchun:**

#### System Prompt uchun:
```
Siz SEO content writer bo'lib, sayohat industriyasida 10+ yil tajribaga egasiz.

VAZIFANGIZ:
- SEO-optimized blog article yozish
- O'zbek/Rus tilida
- HTML format (h2, h3, p, ul, ol, li, blockquote)
- 800-1000 words

SAYOHAT-SPESIFIK:
- Destination benefits highlight qilish (agar geography-related bo'lsa)
- Practical tips va checklists qo'shish
- Price info yoki budget planning
- Safety tips
- Best time to visit / seasonal info
- FAQ section: Actual traveler questions

FRAMEWORKS:
- Introduction: PAS (Problem-Agitate-Solution)
- Main sections: AIDA (Attention-Interest-Desire-Action)
- Headlines: 4U (Useful-Urgent-Unique-Ultra-specific)

QUALITY:
- Natural keyword placement (0.8-2.5% density)
- LSI keywords usage
- Internal links (2-3)
- At least 1 list va 1 blockquote
- Write for humans, not search engines
```

#### Article Types uchun Variations:

**Tour Articles:**
```
Focus areas:
- Destination beauty/uniqueness
- Tour itinerary
- Price breakdown
- What to pack
- Local culture tips
- FAQ: Visa, weather, group size
```

**Hotel Articles:**
```
Focus areas:
- Hotel amenities
- Room types & pricing
- Location benefits
- How to choose hotel
- Booking tips
- FAQ: Cancellation, payments, late checkout
```

**Visa Articles:**
```
Focus areas:
- Visa requirements
- Documents checklist
- Application process (step by step)
- Processing time
- Cost breakdown
- FAQ: Rejection reasons, extensions, etc.
```

### Task 3.3: Copywriting Prompts uchun SEM Travel Customization

**File:** `/seo/generator/copywriting-prompts.ts`

```typescript
export const travelCopywritingPrompts = {
  // Tour articles
  tours: {
    pas_introduction: `
      Problem: Sayohat qilmoqchi bo'lsangiz, qanday joyga borishni bilmaydi.
      Agitate: Shunaqa joyni topish qiyin — narx farq, quality farq.
      Solution: Biz uchun [DESTINATION] tur tayyorlangan — barcha budjetga.
    `,
    
    aida_section: `
      Attention: [DESTINATION] O'zbekistonning [REGION]'ida joylashgan.
      Interest: Shunaqa joy nima bilan mashhur? [UNIQUE_FEATURE]
      Desire: O'zingiz ham bunaqa joy ko'rmoqchi bo'lasiz.
      Action: Bizning [TOUR_TYPE] tur bilan borib ko'ring.
    `,
    
    faq_topics: [
      "Visa kerakmi?",
      "Qancha vaqt ketadi?",
      "Narx qancha?",
      "Eng yaxshi fasl?",
      "Oila uchun xavfsiz?",
      "Group discounts bormi?"
    ]
  },

  // Hotel articles
  hotels: {
    pas_introduction: `
      Problem: Otel tanlab olish qiyin — qaysi birini tanlash kerak?
      Agitate: Noto'g'ri otel — butun sayohat spoil.
      Solution: Otel tanlash uchun complete guide.
    `,
    
    aida_section: `
      Attention: O'rtacha tarifiya 5-star sifat olaniz?
      Interest: Shunaqa otel mavjud — price-to-quality ratio optimal.
      Desire: Siz ham shunaqa otelda yotishni xohlaysiz.
      Action: Shunday otellarni qayersiga topish kerak — vaqtni o'tkazing.
    `,
    
    faq_topics: [
      "Ota-ona uchun qanday otel?",
      "Oilalar uchun facilities?",
      "Cancellation policy nima?",
      "Late checkout mumkinmi?",
      "Breakfast included?",
      "Internet speed yaxshi?"
    ]
  }
}
```

### Task 3.4: SEO Audit System — Same (Minimal Changes)

**Tanqida:** 100-ball sistema juda universal, minimal o'zgarish kerak

Lekin SEM Travel uchun qo'shimcha metrics:

```typescript
// Additional travel-specific criteria
const travelAuditCriteria = {
  // Juz 100-ball sistema'dan:
  11: "Destination-specific keywords", // +5 ball
  12: "Practical tips/checklist present", // +5 ball
  
  // Total: 110 balls possible (top score = 100)
}
```

### Task 3.5: Multilingual Translator — UZ, RU, EN

**Qil:** Vladimir yana o'zgar

```typescript
const translationConfig = {
  supportedLanguages: ["uz", "ru", "en"],
  primaryLanguage: "en",  // Barcha article EN da generate, keyin tarjima
  
  translationTargets: {
    "uz": {
      name: "O'zbek",
      temperature: 0.3,
      preserveKeywords: ["SEM Travel", "visa", "booking"]
    },
    "ru": {
      name: "Русский",
      temperature: 0.3,
      preserveKeywords: ["SEM Travel", "виза", "бронирование"]
    }
  }
}
```

### Task 3.6: Auto-Publishing — Review Workflow

**Qil:** Xuddi dars'dagi kabi, lekin SEM Travel uchun

```typescript
// BlogPost model — already exists in Prisma schema
// statuses: pending_review → approved → published

interface BlogPostForTravel {
  // Existing
  id, slug, title, content, metaTitle, metaDescription
  
  // Travel-specific (optional)
  destination?: string       // "Dubai", "Tashkent", etc.
  category?: "tours" | "hotels" | "visas" | "blog"
  tourType?: string          // "5-day", "adventure", etc.
  priceRange?: string        // "$100-500"
  bestSeason?: string        // "Apr-Oct"
}
```

### Task 3.7: Notifications — Email + Telegram

**Qil:** Admin'ga notification yuboring

```
Telegram message misol:

📝 Yangi blog post ready!

🎯 Kalit so'z: Dubai turlarini xarid qiling
📊 SEO Score: 78/100
📍 Category: Tours
💵 Price range: $500-2000
🌍 Languages: English, O'zbek, Rus

📄 Sarlavha: "Dubai Turlarini 2026-da Xarid Qiling: 40% Chegirma"

[✅ Approve] [❌ Reject] [✏️ Edit]
```

---

## 💾 Implementation Order

### Hafta 3-4 (Module 3, Part 1):

1. **3.1** Content Pipeline → 2 soat
2. **3.2** Article Generator (travel prompts) → 3 soat
3. **3.3** Copywriting Prompts → 2 soat

**Subtotal: 7 soat**

### Hafta 4-5 (Module 3, Part 2):

4. **3.4** SEO Audit (minimal changes) → 2 soat
5. **3.5** Translator (UZ, RU, EN) → 2 soat
6. **3.6** Auto-Publishing → 2 soat
7. **3.7** Notifications → 1 soat

**Subtotal: 7 soat**

**MODUL 3 TOTAL: 14 soat (Hafta 3-5)**

---

## 🌟 SEM Travel.uz uchun Spesial Optimizations

### 1️⃣ Destination-Aware Keyword Clustering

```typescript
// Keyword'lar by destination
interface DestinationKeywords {
  destination: "Dubai", "Istanbul", "Bangkok", etc.
  niches: ["tours", "hotels", "visas"]
  keywords: Keyword[]
}

// Misol: Dubai turlarini blog'da cover qilish
// 1. "Dubai turlarini xarid qiling" (transactional)
// 2. "Dubai nma bilan mashur" (informational)
// 3. "Dubai vs Paris tour" (commercial)
```

### 2️⃣ Multi-Language Content Strategy

```
Priority:
1. UZ (primary) — 70% of target audience
2. RU (secondary) — 25% of target audience
3. EN (fallback) — 5% (SEO leverage)

Publishing order:
→ Generate in EN
→ Translate to UZ, RU (parallel)
→ Admin reviews UZ first (priority)
→ Then RU, EN
→ Publish UZ (high priority)
```

### 3️⃣ Travel-Specific SEO Optimizations

```
Additional metrics to track:
- Destination keywords (city names, region)
- Price mentions (CTR booster)
- Seasonal keywords ("best time to visit")
- Experience keywords ("luxury", "adventure", "family-friendly")
- Logistics keywords ("visa", "flights", "hotels")
```

### 4️⃣ Content Calendar for Travel

```
Pattern:
- Monday-Wednesday: Generate tours/hotels
- Thursday-Friday: SEO audit + translation
- Weekend: Admin review + publishing

Example:
Week 1: "Dubai tours" + "Istanbul hotels"
Week 2: "Thailand visa" + "Paris tour guide"
Week 3: "Maldives resorts" + "Spain travel tips"
```

---

## ✅ Checklist: Module 3 SEM Travel.uz Adaptation

- [ ] Language config: UZ, RU, EN (3 languages)
- [ ] Article generator: Travel-focused system prompts
- [ ] Copywriting frameworks: AIDA/PAS/4U adapted for tours/hotels/visas
- [ ] SEO audit: 100-point system + travel metrics
- [ ] Translator: Parallel UZ + RU translation
- [ ] Auto-publishing: Review workflow with admin approval
- [ ] Notifications: Email + Telegram with travel data
- [ ] Database schema: BlogPost model with category/destination
- [ ] Pipeline orchestration: 10-step content generation
- [ ] Error handling: Fallbacks at each step
- [ ] Logging: GenerationLog for every action

---

## 🎯 Expected Output per Article

```
Input:
- Keyword: "Dubai turlarini xarid qiling"
- Niche: tours
- Language: uz, ru, en

Output:
✅ Blog article (800-1000 words)
   - English HTML (original)
   - O'zbek HTML (translated)
   - Rus HTML (translated)

✅ Metadata:
   - Meta title (3 languages)
   - Meta description (3 languages)
   - Reading time
   - Word count

✅ SEO Data:
   - Score: 78/100
   - Keyword density: 1.8%
   - Internal links: 2
   - FAQ: 5 questions

✅ Publishing:
   - Slug: "dubai-turlarini-xarid-qiling"
   - Status: pending_review
   - Admin notification sent
   - Ready for approval

⏱️ Time to completion: ~30 seconds per article
📊 Token usage: ~5000 tokens per article
💰 Cost: ~$0.04 per article
```

---

**Tayyoqlik:** Module 3 implementation SEM Travel.uz uchun completely ready!

Keyingi qadam: **Code yozishni boshla** ✅
