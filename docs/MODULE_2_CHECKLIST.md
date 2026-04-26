# MODUL 2: KALIT SO'ZLA VA NIYAT — CHECKLIST

**Modul:** 2 (Hafta 2-3)  
**Darsliklar:** 6 ta (Lesson 1-6)  
**Natija:** 300+ kalit so'z bazasi  

---

## 📋 MODUL 2 JADVAL

| # | Task | Fayl | Vaqt | Status |
|---|------|------|------|--------|
| **2.1** | TypeScript Interfaces | `/seo/types/index.ts` | 1h | ⭕ |
| **2.2** | Kalit so'z izlanish funktsiyasi | `/seo/pipeline/keyword-research.ts` | 2h | ⭕ |
| **2.3** | Seed script (222 kalit so'z) | `/scripts/seed-keywords.ts` | 1.5h | ⭕ |
| **2.4** | Test kalit so'z qo'shish | `/scripts/test-keyword-research.ts` | 1h | ⭕ |
| **2.5** | Niyat tahlili funktsiyasi | `/seo/utils/intent-analyzer.ts` | 1.5h | ⭕ |
| **2.6** | Keyword database utilities | `/seo/utils/keyword-utils.ts` | 1h | ⭕ |
| | **JAMI VAQT** | | **8 soat** | |

---

## 📝 TASK DETALLARI

### 2.1️⃣ TypeScript Interfaces (`/seo/types/index.ts`)

**Qilish kerak:**
```typescript
interface Keyword {
  keyword: string;
  niche: string;
  language: 'uz' | 'ru' | 'en';
  searchVolume: number;
  difficulty: 'easy' | 'medium' | 'hard';
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  keywordType?: 'primary' | 'secondary' | 'lsi' | 'longtail';
  relatedKeywords?: string[];
}

interface Article {
  html: string;
  wordCount: number;
  metaTitle: string;
  metaDescription: string;
}

interface AuditResult {
  totalScore: number;
  breakdown: Array<{
    criterion: string;
    maxPoints: number;
    earnedPoints: number;
    passed: boolean;
  }>;
  criticalIssues: string[];
  recommendation: 'publish' | 'review' | 'refine' | 'reject';
}

// ... boshqa typlar
```

**Fayl:** `/seo/types/index.ts`  
**Yo'nalish:** Barchasi bir joyda  
**Vaqt:** 1 soat

---

### 2.2️⃣ Kalit So'z Izlanish (`/seo/pipeline/keyword-research.ts`)

**Qilish kerak:**
```typescript
export async function researchKeywords(
  niche: string,
  count: number = 10,
  language: string = 'uz'
): Promise<Keyword[]>
```

**Algoritm:**
1. Claude Haiku'ga so'rov yuborish
2. Prompt: "Generate {count} keyword ideas for niche: {niche}. Return JSON: [{keyword, searchVolume, difficulty}]"
3. Temperature: 0.5
4. Parse JSON response
5. Har bir kalit so'z uchun niyat determine qilish
6. Qaytarish: Keyword[] array

**Parametrlar:**
- `niche` — "turlar", "mehmonxona", "viza", "blog"
- `count` — default 10
- `language` — "uz", "ru", "en"

**Misol:**
```typescript
const keywords = await researchKeywords('turlar', 10, 'uz');
// → [
//   { keyword: "Dubai turlarini", difficulty: "easy", ... },
//   { keyword: "Turkiyaga arzon turlar", difficulty: "medium", ... },
//   ...
// ]
```

**Fayl:** `/seo/pipeline/keyword-research.ts`  
**Yo'nalish:** Claude API bilan  
**Vaqt:** 2 soat

---

### 2.3️⃣ Seed Script (222 Kalit So'z) (`/scripts/seed-keywords.ts`)

**Qilish kerak:**
Har bir kategoriyada kalit so'zlarni qo'shish

**Kategoriyalar va Soni:**
```
O'ZBEKCHA (uz) — 160 ta
├─ Turlar (50): "Dubai turlarini", "Turkiya turining", ...
├─ Mehmonxona (40): "Dubaida juda yaxshi mehmonxona", ...
├─ Viza (30): "Dubai vizasi", "Tailand viza qanday", ...
└─ Blog (40): "Qayerga ketish kerak", "Sayohatlashni qanday boshlash", ...

RUSCHA (ru) — 45 ta
├─ Turlar (15): "Туры в Дубай", "Отдых в Турции", ...
├─ Mehmonxona (12): "Отели Дубая", ...
├─ Viza (10): "Виза в Таиланд", ...
└─ Blog (8): "Как путешествовать", ...

INGLIZCHA (en) — 17 ta
├─ Turlar (6): "Dubai tours", "Turkey packages", ...
├─ Mehmonxona (5): "Best hotels Dubai", ...
├─ Viza (3): "Thailand visa", ...
└─ Blog (3): "Travel tips", ...
```

**Misol Kalit So'zlar:**

| Kategoriya | O'zbekcha | Difficulty | Intent |
|-----------|----------|-----------|--------|
| Turlar | "Dubai turlarini" | easy | commercial |
| Turlar | "Turkiyaga 5 kunlik tur" | medium | commercial |
| Turlar | "Tailandga bilan oila turlar" | hard | commercial |
| Mehmonxona | "Dubaida 5 yulduzli mehmonxona" | medium | commercial |
| Viza | "Tailand vizasi qanday?" | easy | informational |
| Blog | "Sayohatlash uchun pul qancha kerak?" | easy | informational |

**Fayl:** `/scripts/seed-keywords.ts`  
**Buyruq:** `npx tsx scripts/seed-keywords.ts`  
**Vaqt:** 1.5 soat

**Natija:** 
```
✅ 160 O'zbekcha kalit so'z
✅ 45 Ruscha kalit so'z
✅ 17 Inglizcha kalit so'z
✅ JAMI: 222 kalit so'z
```

---

### 2.4️⃣ Test Script (`/scripts/test-keyword-research.ts`)

**Qilish kerak:**
1. Teshua:
```typescript
const keywords = await researchKeywords('turlar', 10, 'uz');
console.log(`Found ${keywords.length} keywords`);
keywords.forEach(kw => {
  console.log(`- "${kw.keyword}" (${kw.difficulty}) - Intent: ${kw.intent}`);
});
```

2. Prisma bilan saqlash testi:
```typescript
for (const kw of keywords) {
  await prisma.keyword.create({ data: kw });
}
const count = await prisma.keyword.count();
console.log(`Total keywords in DB: ${count}`);
```

**Fayl:** `/scripts/test-keyword-research.ts`  
**Buyruq:** `npx tsx scripts/test-keyword-research.ts`  
**Vaqt:** 1 soat

**Kutilayotgan natija:**
```
✅ Found 10 keywords
✅ "Dubai turlarini" (easy) - Intent: commercial
✅ "Turkiyaga arzon turlar" (medium) - Intent: commercial
...
✅ Total keywords in DB: 222
```

---

### 2.5️⃣ Niyat Tahlili (`/seo/utils/intent-analyzer.ts`)

**Qilish kerak:**
Kalit so'zdan niyat aniqlash

```typescript
export function analyzeIntent(
  keyword: string,
  language: string = 'uz'
): 'informational' | 'commercial' | 'transactional' | 'navigational'
```

**Algoritm:**

| Niyat | Belgilari | Misol |
|-------|----------|-------|
| **Informational** | "qanday", "nima", "haqida", "sho'ruh" | "Dubai haqida", "Viza qanday?" |
| **Commercial** | "eng yaxshi", "ta'qoslash", "review", "narx" | "Eng yaxshi turlar", "Hotel comparison" |
| **Transactional** | "xarid", "band", "qo'l", "biting", "kupon" | "Dubai tur xarid", "Viza uchun arizani topshir" |
| **Navigational** | "SEM Travel", "sayt nomi", brend | "SEM Travel turlari" |

**Fayl:** `/seo/utils/intent-analyzer.ts`  
**Vaqt:** 1.5 soat

---

### 2.6️⃣ Keyword Utilities (`/seo/utils/keyword-utils.ts`)

**Qilish kerak:**
Shunga kerakli utility funktsiyal

```typescript
// Get keywords by difficulty
export async function getKeywordsByDifficulty(
  difficulty: 'easy' | 'medium' | 'hard',
  niche?: string
): Promise<Keyword[]>

// Get keywords by intent
export async function getKeywordsByIntent(
  intent: string,
  niche?: string
): Promise<Keyword[]>

// Get related keywords
export async function getRelatedKeywords(keyword: string): Promise<Keyword[]>

// Check keyword existence
export async function keywordExists(keyword: string, language: string): Promise<boolean>

// Get unused keywords (for next article generation)
export async function getUnusedKeywords(limit: number = 1): Promise<Keyword[]>
```

**Fayl:** `/seo/utils/keyword-utils.ts`  
**Vaqt:** 1 soat

---

## 🎯 MODUL 2 NATIJA

**Bazada Saqlangan:**
```
Keyword Jadvali:
├─ 160 o'zbekcha kalit so'z
├─ 45 ruscha kalit so'z
├─ 17 inglizcha kalit so'z
└─ JAMI: 222 kalit so'z

Har bir kalit so'z:
├─ keyword: "Dubai turlarini"
├─ niche: "turlar"
├─ language: "uz"
├─ difficulty: "easy" | "medium" | "hard"
├─ intent: "informational" | "commercial" | "transactional" | "navigational"
├─ searchVolume: 100-5000
└─ keywordType: "primary" | "secondary" | "lsi" | "longtail"
```

**Ishchi Funksiyalar:**
```
✅ researchKeywords(niche, count, language) → Keyword[]
✅ analyzeIntent(keyword, language) → intent
✅ getKeywordsByDifficulty(difficulty, niche) → Keyword[]
✅ getKeywordsByIntent(intent, niche) → Keyword[]
✅ getUnusedKeywords(limit) → Keyword[]
```

**Test Buyruqlari:**
```bash
npx tsx scripts/seed-keywords.ts          # 222 kalit so'z qo'shish
npx tsx scripts/test-keyword-research.ts  # Test Claude API
npx prisma studio                          # Bazani ko'rish
```

---

## 📊 MODUL 2 PROGRESS

```
2.1 Types           ████░░░░░░░░░░░░░░░░░░░░░░ 10%
2.2 Keyword Research ████░░░░░░░░░░░░░░░░░░░░░░ 10%
2.3 Seed Keywords    ████░░░░░░░░░░░░░░░░░░░░░░ 10%
2.4 Test Script      ████░░░░░░░░░░░░░░░░░░░░░░ 10%
2.5 Intent Analyzer  ████░░░░░░░░░░░░░░░░░░░░░░ 10%
2.6 Keyword Utils    ████░░░░░░░░░░░░░░░░░░░░░░ 10%

MODUL 2 JAMI: ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0% → 🚀
```

---

## ✅ TAYYORLIK

### Kerak bo'lgan narsalar:
- [x] Prisma + Database ✅ (MODUL 1 TUGATILDI)
- [x] Environment variables ✅
- [x] .env.local with ANTHROPIC_API_KEY

### ANTHROPIC_API_KEY kerak!
```
1. https://console.anthropic.com ga kiring
2. "API Keys" → "Create Key"
3. Key nusxasini qo'lga ol
4. .env.local'ga qo'sh:
   ANTHROPIC_API_KEY=sk-ant-...
```

---

## 🚀 BOSHLASH BUYRUGI

```bash
# Bugungi qilish:
1. .env.local'ni ANTHROPIC_API_KEY bilan yangilash
2. /seo/types/index.ts yaratish
3. /seo/pipeline/keyword-research.ts yaratish
4. /scripts/seed-keywords.ts yaratish
5. Test ishga tushirish
```

**Tahmini vaqt:** 8 soat (1-1.5 ish kuni)

---

**Tayyor boshlash uchun?** ✅ → **YO'Q, MODUL 1 RASMIYLASHTIR! TUGATISHGA!** 🎉
