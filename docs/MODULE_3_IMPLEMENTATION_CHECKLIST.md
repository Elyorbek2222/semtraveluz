# Module 3 — Implementation Checklist (SEM Travel.uz)

**Status:** Ready to Start  
**Total Time:** 14 hours (3-4 days)  
**Language Support:** UZ, RU, EN (3 languages)  
**Focus:** Travel Content (Tours, Hotels, Visas, Blog)

---

## Task 3.1: Content Pipeline Architecture (2h)

**File:** `/seo/pipeline/content-pipeline.ts`

### Sub-tasks:

- [ ] Define PipelineConfig interface
  - [ ] minSeoScore: 65
  - [ ] maxRefinementRetries: 2
  - [ ] targetArticleWords: 800-1000
  - [ ] translationLanguages: ["uz", "ru"]
  - [ ] apiTimeout: 30000ms
  - [ ] databaseTimeout: 10000ms

- [ ] Implement 10-step pipeline function
  - [ ] 1️⃣ selectKeyword() — Query DB, pick random unused keyword
  - [ ] 2️⃣ researchKeyword() — Get LSI keywords, intent, volume
  - [ ] 3️⃣ generateArticle() — Claude Sonnet call
  - [ ] 4️⃣ auditSEO() — 100-point scoring
  - [ ] 5️⃣ refineContent() — If score < 65 (max 2 retries)
  - [ ] 6️⃣ translateContent() — Parallel UZ + RU
  - [ ] 7️⃣ validateTranslations() — HTML tag count check
  - [ ] 8️⃣ saveToDatabase() — BlogPost creation
  - [ ] 9️⃣ notifyAdmin() — Email + Telegram
  - [ ] 🔟 publishOnApproval() — Status update

- [ ] Error handling & logging
  - [ ] GenerationLog for each step
  - [ ] Retry logic with exponential backoff
  - [ ] Fallback strategies

- [ ] Tests
  - [ ] Test selectKeyword() picks valid keywords
  - [ ] Test pipeline flow end-to-end (mock API)

**Deliverable:** Fully functional 10-step pipeline with logging

---

## Task 3.2: Travel-Focused Article Generator (3h)

**File:** `/seo/generator/article-generator.ts`

### Sub-tasks:

- [ ] Create system prompt
  - [ ] Specify output: HTML only (h2, h3, p, ul, ol, li, blockquote)
  - [ ] Add travel-specific instructions:
    - [ ] Destination benefits
    - [ ] Practical tips
    - [ ] Safety info
    - [ ] Best time to visit
  - [ ] Specify word count: 800-1000
  - [ ] Include copywriting frameworks (PAS, AIDA, 4U)

- [ ] Implement generateArticle() function
  - [ ] Accept input: keyword, relatedTerms, searchIntent, toneOfVoice
  - [ ] Call Claude Sonnet (model: claude-sonnet-4-20250514)
  - [ ] Temperature: 0.8 (balance creativity)
  - [ ] Max tokens: 6000
  - [ ] Parse response

- [ ] Word count validation
  - [ ] countWords(html) function
  - [ ] If > 1000: call trimArticle()
  - [ ] If < 800: call expandArticle()

- [ ] Metadata extraction
  - [ ] extractMetaTitle() — First h2 + keyword
  - [ ] extractMetaDescription() — First paragraph, 120-160 chars
  - [ ] extractFAQ() — Parse FAQ section (h3 + p pairs)
  - [ ] calculateReadingTime() — words / 200

- [ ] Output structure
  - [ ] html: Clean HTML string
  - [ ] wordCount: number
  - [ ] metaTitle: 50-60 chars
  - [ ] metaDescription: 120-160 chars
  - [ ] faqItems: Array<{question, answer}>
  - [ ] tokensUsed: number
  - [ ] generatedAt: Date

- [ ] Error handling
  - [ ] API timeout handling
  - [ ] JSON parse failures
  - [ ] HTML validation

**Deliverable:** Fully functional article generator producing SEO-optimized travel content

---

## Task 3.3: Copywriting Frameworks Config (2h)

**File:** `/seo/generator/copywriting-prompts.ts`

### Sub-tasks:

- [ ] Create TravelCopywritingPrompts interface
  - [ ] tours: { pas, aida, faq_topics }
  - [ ] hotels: { pas, aida, faq_topics }
  - [ ] visas: { pas, aida, faq_topics }
  - [ ] blog: { pas, aida, faq_topics }

- [ ] Implement PAS framework examples
  - [ ] Tours: Problem → Agitate → Solution
  - [ ] Hotels: Problem → Agitate → Solution
  - [ ] Visas: Problem → Agitate → Solution
  - [ ] Blog: Problem → Agitate → Solution

- [ ] Implement AIDA framework examples
  - [ ] Tours: Attention → Interest → Desire → Action
  - [ ] Hotels: Attention → Interest → Desire → Action
  - [ ] Visas: Attention → Interest → Desire → Action
  - [ ] Blog: Attention → Interest → Desire → Action

- [ ] Implement 4U framework for headlines
  - [ ] Useful: Does title promise value?
  - [ ] Urgent: Does it create FOMO?
  - [ ] Unique: Does it stand out?
  - [ ] Ultra-specific: Numbers, timeframes?

- [ ] Create getFrameworkPrompt() function
  - [ ] Input: niche, framework, context
  - [ ] Output: Ready-to-use prompt string

- [ ] FAQ topics for each niche
  - [ ] Tours: 6-8 common questions
  - [ ] Hotels: 6-8 common questions
  - [ ] Visas: 6-8 common questions
  - [ ] Blog: 6-8 common questions

**Deliverable:** Complete copywriting framework library for travel content

---

## Task 3.4: SEO Audit System (2h)

**File:** `/seo/audit/seo-audit.ts`

### Sub-tasks:

- [ ] Define 100-point audit criteria
  1. [ ] Keyword in title: 10 points
  2. [ ] Keyword in first paragraph: 10 points
  3. [ ] Keyword in meta description: 10 points
  4. [ ] Keyword density (0.8-2.5%): 15 points
  5. [ ] H2 headers (3+, keyword in 2+): 15 points
  6. [ ] Internal links (2-3): 10 points
  7. [ ] Meta title length (30-60): 10 points
  8. [ ] Meta description length (100-160): 10 points
  9. [ ] H2→H3 hierarchy: 5 points
  10. [ ] FAQ section (4-5 questions): 5 points

- [ ] Implement scoring functions
  - [ ] checkKeywordInTitle()
  - [ ] checkKeywordInFirstP()
  - [ ] checkKeywordInMeta()
  - [ ] calculateKeywordDensity()
  - [ ] checkH2Headers()
  - [ ] checkInternalLinks()
  - [ ] checkMetaTitleLength()
  - [ ] checkMetaDescriptionLength()
  - [ ] checkHeaderHierarchy()
  - [ ] checkFAQSection()

- [ ] Implement auditSEO() main function
  - [ ] Input: html, metaTitle, metaDescription, keyword
  - [ ] Output: {totalScore, breakdown, criticalIssues}
  - [ ] Return type: AuditResult

- [ ] Interpretation logic
  - [ ] 85-100: Publish immediately
  - [ ] 65-84: Publish with notes
  - [ ] 50-64: Trigger auto-refinement
  - [ ] <50: Regenerate article

- [ ] Tests
  - [ ] Test each criterion independently
  - [ ] Test score calculation
  - [ ] Test interpretation logic

**Deliverable:** Working 100-point SEO audit system

---

## Task 3.5: Multilingual Translator (2h)

**File:** `/seo/translator/translator.ts`

### Sub-tasks:

- [ ] Define translation config
  - [ ] Supported languages: ["uz", "ru", "en"]
  - [ ] Primary language: "en"
  - [ ] Temperature per language: 0.3 (accuracy)
  - [ ] Max tokens: 4000

- [ ] Implement translateArticle() function
  - [ ] Input: html, targetLang, keyword
  - [ ] Create system prompt with rules:
    - [ ] Preserve ALL HTML tags
    - [ ] Don't translate brand names
    - [ ] Don't translate technical terms
    - [ ] Preserve code blocks
    - [ ] Preserve URLs
  - [ ] Call Claude Haiku
  - [ ] Validate HTML structure (tag count ±2)

- [ ] Implement HTML validation
  - [ ] Count tags before & after
  - [ ] Compare: abs(before - after) <= 2
  - [ ] If invalid: log error, fallback to EN

- [ ] Implement parallel translation
  - [ ] Function: translateArticleParallel()
  - [ ] Use Promise.allSettled()
  - [ ] Translate to UZ and RU simultaneously
  - [ ] Fallback to EN on failure

- [ ] Error handling
  - [ ] API timeout → retry
  - [ ] HTML corruption → fallback
  - [ ] Tag count mismatch → alert admin

- [ ] Tests
  - [ ] Test HTML preservation
  - [ ] Test parallel translation
  - [ ] Test fallback logic

**Deliverable:** Working translator producing valid multi-language HTML content

---

## Task 3.6: Auto-Publishing with Review (2h)

**File:** `/seo/publishing/blog-publisher.ts`

### Sub-tasks:

- [ ] Implement saveBlogPost() function
  - [ ] Input: keyword, title (JSON), content (JSON), etc.
  - [ ] Generate slug from EN title
  - [ ] Check slug uniqueness (add -2 suffix if dupe)
  - [ ] Create BlogPost record
  - [ ] Status: "pending_review"
  - [ ] Create GenerationLog entry

- [ ] Implement slug generation
  - [ ] Lowercase
  - [ ] Remove special chars
  - [ ] Replace spaces with hyphens
  - [ ] Remove leading/trailing hyphens

- [ ] Implement uniqueness check
  - [ ] Query: findUnique by slug
  - [ ] If exists: append -1, -2, etc.
  - [ ] Test until unique

- [ ] Implement retry logic
  - [ ] Function: saveBlogPostWithRetry()
  - [ ] Max retries: 3
  - [ ] Exponential backoff: 2^attempt * 1000ms
  - [ ] Fallback: save to JSON locally

- [ ] Implement status update API
  - [ ] updatePostStatus(postId, newStatus)
  - [ ] newStatus: "approved" | "rejected" | "published"
  - [ ] Set publishedAt when published
  - [ ] Log status change

- [ ] Implement status transitions
  - [ ] pending_review → approved
  - [ ] pending_review → rejected
  - [ ] approved → published

- [ ] Tests
  - [ ] Test slug generation
  - [ ] Test uniqueness checking
  - [ ] Test status transitions

**Deliverable:** Working blog publishing system with admin review workflow

---

## Task 3.7: Admin Notifications (1h)

**File:** `/seo/notifications/notify.ts`

### Sub-tasks:

- [ ] Implement Telegram notification
  - [ ] Function: sendTelegramReview()
  - [ ] Input: BlogPost data
  - [ ] Format message:
    ```
    📝 Yangi blog post ready!
    🎯 Keyword: [keyword]
    📊 SEO Score: [score]/100
    📍 Category: [category]
    💵 Price range: [price] (if tours)
    🌍 Languages: [langs]
    📄 Title: [title]
    ```
  - [ ] Add inline buttons:
    - [ ] ✅ Approve → approve_[id]
    - [ ] ❌ Reject → reject_[id]
    - [ ] ✏️ Edit → edit_[id]

- [ ] Implement Email notification
  - [ ] Function: sendEmailReview()
  - [ ] Input: BlogPost data
  - [ ] Send to ADMIN_EMAIL
  - [ ] Include HTML preview
  - [ ] Include approval link

- [ ] Implement fallback logic
  - [ ] Try Telegram first
  - [ ] If fails: try Email
  - [ ] Log both attempts
  - [ ] Don't block pipeline if both fail

- [ ] Implement button handlers
  - [ ] /approve/{postId} → updateStatus(approved)
  - [ ] /reject/{postId} → updateStatus(rejected)
  - [ ] /edit/{postId} → Open edit form

- [ ] Tests
  - [ ] Test message formatting
  - [ ] Test button callback handling
  - [ ] Test fallback logic

**Deliverable:** Working notification system with Telegram + Email + inline buttons

---

## 📋 Database & Schema Updates

- [ ] Verify BlogPost model exists (should from Module 2)
  ```prisma
  model BlogPost {
    id String @id @default(cuid())
    slug String @unique
    title Json              // { en, ru, uz }
    content Json            // { en, ru, uz }
    metaTitle Json
    metaDescription Json
    keyword String
    seoScore Int
    keywordDensity Float
    category String?        // "tours" | "hotels" | "visas" | "blog"
    destination String?     // "Dubai", "Istanbul", etc.
    status String @default("pending_review")
    publishedAt DateTime?
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    logs GenerationLog[]
  }
  ```

- [ ] Verify GenerationLog model (should exist)
  ```prisma
  model GenerationLog {
    id String @id @default(cuid())
    blogPostId String
    action String           // "generate", "audit", "refine", "translate", etc.
    status String           // "success", "failed", "skipped"
    tokensUsed Int @default(0)
    duration Int
    error String?
    details Json?
    createdAt DateTime @default(now())
  }
  ```

- [ ] Run Prisma migration if schema changed
  ```bash
  npx prisma migrate dev --name add_blog_metadata
  ```

---

## 🧪 Testing Strategy

### Unit Tests:
- [ ] Article generator produces valid HTML
- [ ] SEO audit calculates correct scores
- [ ] Translator preserves HTML structure
- [ ] Slug generation handles edge cases
- [ ] Keyword density calculation

### Integration Tests:
- [ ] Full pipeline (mock API)
- [ ] Database save & retrieval
- [ ] Notification sending
- [ ] Status updates

### Manual Testing:
- [ ] Generate sample article for "Dubai turlarini"
- [ ] Review Telegram notification
- [ ] Approve article through button
- [ ] Verify published status

---

## 📊 Success Criteria

**Each article must:**
- ✅ Generate in 30 seconds (with API timeout)
- ✅ Score >= 65 on SEO audit
- ✅ Translate to UZ + RU successfully
- ✅ Save to database with slug
- ✅ Send admin notification
- ✅ Display in admin panel for review
- ✅ Publish on approval

**Quality gates:**
- ✅ HTML valid (W3C)
- ✅ 800-1000 words
- ✅ Keyword density 0.8-2.5%
- ✅ 3+ H2 headers
- ✅ 2-3 internal links
- ✅ 4-5 FAQ questions

---

## 📁 Directory Structure After Task 3

```
/seo
├── /pipeline
│   └── content-pipeline.ts        ← Task 3.1 (10-step pipeline)
├── /generator
│   ├── article-generator.ts       ← Task 3.2 (Claude Sonnet)
│   └── copywriting-prompts.ts     ← Task 3.3 (AIDA/PAS/4U)
├── /audit
│   └── seo-audit.ts               ← Task 3.4 (100-point scoring)
├── /translator
│   └── translator.ts              ← Task 3.5 (UZ + RU)
├── /publishing
│   └── blog-publisher.ts          ← Task 3.6 (Review workflow)
└── /notifications
    └── notify.ts                  ← Task 3.7 (Email + Telegram)
```

---

## ⏱️ Time Breakdown

| Task | Files | Hours | Status |
|------|-------|-------|--------|
| 3.1 | content-pipeline.ts | 2h | ⭕ |
| 3.2 | article-generator.ts | 3h | ⭕ |
| 3.3 | copywriting-prompts.ts | 2h | ⭕ |
| 3.4 | seo-audit.ts | 2h | ⭕ |
| 3.5 | translator.ts | 2h | ⭕ |
| 3.6 | blog-publisher.ts | 2h | ⭕ |
| 3.7 | notify.ts | 1h | ⭕ |
| **TOTAL** | **7 files** | **14h** | **⭕** |

---

## 🚀 Next Steps After Module 3

**Module 4 (Hafta 5-8):**
- Task 4.1: CRON Scheduling (Automatic pipeline runs)
- Task 4.2: Analytics Dashboard (Metrics & insights)
- Task 4.3: Admin Panel UI (Blog management)
- Task 4.4: Production Deployment (Testing in staging)

**Module 5 (Hafta 9-10):**
- Task 5.1: A/B Testing (Different content styles)
- Task 5.2: Performance Optimization (Caching, indexing)
- Task 5.3: Advanced Monitoring (Alerts, metrics)

---

✅ **Ready to start Module 3 implementation!**

Keyingi qadam: **Task 3.1 dan boshla** (content-pipeline.ts)
