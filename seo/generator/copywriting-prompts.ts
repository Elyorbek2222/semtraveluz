/**
 * Copywriting Frameworks — PAS, AIDA, 4U for travel content
 * Configuration for each niche: tours, hotels, visas, blog
 */

// ============================================================================
// Types
// ============================================================================
export type Niche = 'turlar' | 'mehmonxona' | 'viza' | 'blog';
export type Framework = 'PAS' | 'AIDA' | '4U';
export type Language = 'uz' | 'ru' | 'en';

export interface CopywritingFramework {
  name: Framework;
  steps: string[];
  example: string;
}

export interface NicheFrameworks {
  niche: Niche;
  pas: CopywritingFramework;
  aida: CopywritingFramework;
  fourU: CopywritingFramework;
  faqTopics: string[];
  keywords: string[];
}

export interface AllFrameworks {
  [key: string]: NicheFrameworks;
}

// ============================================================================
// TOURS FRAMEWORKS
// ============================================================================
const TOURS_FRAMEWORKS: NicheFrameworks = {
  niche: 'turlar',
  pas: {
    name: 'PAS',
    steps: [
      'Problem: Holiday plans ruined by bad destinations',
      'Agitate: Time passes, bucket list gets emptier',
      'Solution: Perfect tour that ticks all boxes',
    ],
    example: `Problem: You want an unforgettable vacation but research takes weeks.
Agitate: Every year passes, your bucket list gets longer, and life gets busier.
Solution: [Tour Name] includes everything in 5 days — visa help, hotels, local guides, safety.`,
  },
  aida: {
    name: 'AIDA',
    steps: [
      'Attention: Hook with amazing statistic or experience',
      'Interest: Share destination benefits',
      'Desire: Paint picture of perfect trip',
      'Action: Clear CTA for booking',
    ],
    example: `Attention: "Climb Kilimanjaro in 5 days — only 2,000 people do it yearly"
Interest: "Expert guides, altitude acclimatization, all meals included"
Desire: "Imagine watching sunrise from 19,341 feet with lifetime friends"
Action: "Book now - only 5 spots left for September"`,
  },
  fourU: {
    name: '4U',
    steps: [
      'Useful: Promise real benefit or experience',
      'Urgent: Create time-limited appeal (spots, season)',
      'Unique: Highlight what competitors don\'t offer',
      'Ultra-specific: Include numbers, timeframes, proof',
    ],
    example: `"7-Day Northern Lights Tour — Just 8 Spots Left, Arctic Season Ends March 31"
✓ Useful: Guarantees sightings or 50% refund
✓ Urgent: "Season ends March 31"
✓ Unique: "100% refund guarantee (only we offer it)"
✓ Ultra-specific: "7 days, $2,999, 8 spots, 95% guest satisfaction"`,
  },
  faqTopics: [
    'How long is the tour?',
    'Do I need a visa for this destination?',
    'What is the best season to visit?',
    'What is included and what do I need to pay extra for?',
    'Is travel insurance required?',
    'Can I join a group or book a private tour?',
    'What happens if I get sick during the tour?',
    'Are meals included?',
  ],
  keywords: [
    'budget tours',
    'luxury tours',
    'group tours',
    'private tours',
    'guided tours',
    'adventure tours',
    'cultural tours',
  ],
};

// ============================================================================
// HOTELS FRAMEWORKS
// ============================================================================
const HOTELS_FRAMEWORKS: NicheFrameworks = {
  niche: 'mehmonxona',
  pas: {
    name: 'PAS',
    steps: [
      'Problem: Overpriced hotels with poor service',
      'Agitate: Waste money on bad stays, bad reviews ruin trips',
      'Solution: Affordable, clean, excellent service',
    ],
    example: `Problem: Hotels claim luxury but deliver mediocrity.
Agitate: You waste $200+ per night on bad experiences.
Solution: [Hotel Name] offers 4-star comfort at 3-star prices — 1000+ 5-star reviews prove it.`,
  },
  aida: {
    name: 'AIDA',
    steps: [
      'Attention: Lead with best room or location feature',
      'Interest: Detail amenities and services',
      'Desire: Evoke feeling of relaxation and comfort',
      'Action: Show booking links and special offers',
    ],
    example: `Attention: "Ocean-view suites with private balconies in the heart of Dubai"
Interest: "Free WiFi, 24-hour room service, spa, fitness center, 3 restaurants"
Desire: "Wake to waves crashing, sunset cocktails on your balcony, chef-prepared breakfast"
Action: "Book direct and save 20% — 3-day minimum stay offer ends Friday"`,
  },
  fourU: {
    name: '4U',
    steps: [
      'Useful: Specific room or service benefit',
      'Urgent: Time-limited discounts or availability',
      'Unique: What sets this hotel apart',
      'Ultra-specific: Star rating, price, unique amenities',
    ],
    example: `"5-Star Beachfront Hotel — $89/Night This Week, Free Airport Transfer"
✓ Useful: "Free daily breakfast ($25 value), beach club access"
✓ Urgent: "Weekend rate ends Sunday — $89 becomes $199"
✓ Unique: "Only hotel with private beach access in this area"
✓ Ultra-specific: "5 stars (4.8/5 from 2,300 reviews), $89/night, free transfer, beachfront"`,
  },
  faqTopics: [
    'What amenities are included?',
    'Is WiFi free or paid?',
    'Do rooms have air conditioning?',
    'Is parking available?',
    'What is the breakfast policy?',
    'Can I cancel my booking?',
    'Are pets allowed?',
    'What is your cancellation policy?',
  ],
  keywords: [
    'budget hotels',
    'luxury hotels',
    'beachfront hotels',
    'city center hotels',
    'family hotels',
    'business hotels',
  ],
};

// ============================================================================
// VISAS FRAMEWORKS
// ============================================================================
const VISAS_FRAMEWORKS: NicheFrameworks = {
  niche: 'viza',
  pas: {
    name: 'PAS',
    steps: [
      'Problem: Visa application is confusing, expensive, risky',
      'Agitate: Mistakes lead to rejections, lost time, lost money',
      'Solution: Clear, step-by-step guide with expert support',
    ],
    example: `Problem: Visa requirements change, documents get rejected, you miss your trip.
Agitate: Your $500 visa fee is wasted. Your vacation is cancelled.
Solution: Our complete guide shows exactly what documents you need, how to apply, common mistakes — so you get approved first time.`,
  },
  aida: {
    name: 'AIDA',
    steps: [
      'Attention: Lead with processing time or approval rate',
      'Interest: List all requirements clearly',
      'Desire: Emphasize peace of mind and smooth process',
      'Action: Link to application or step-by-step guide',
    ],
    example: `Attention: "Turkey E-Visa Approved in 2 Hours — No Appointment Needed"
Interest: "Just 4 documents: passport, passport photo, proof of funds, return flight"
Desire: "Get approved while sipping your morning coffee — apply at midnight, have approval by noon"
Action: "Start your application here — costs $20, takes 5 minutes"`,
  },
  fourU: {
    name: '4U',
    steps: [
      'Useful: Clear processing time or success rate',
      'Urgent: Visa validity window or season information',
      'Unique: Guarantees or support you offer',
      'Ultra-specific: Cost, time, success rate, number of forms',
    ],
    example: `"Japan Visa — 99% Approval Rate, 10 Days, 3 Simple Documents"
✓ Useful: "Or your money back (99% of applicants approved)"
✓ Urgent: "Processing slower May-August — apply now for summer trips"
✓ Unique: "Only guide with consulate-verified document checklist"
✓ Ultra-specific: "¥7,500, 10 days, 99% success, 3 documents, step-by-step video"`,
  },
  faqTopics: [
    'What documents do I need?',
    'How long does the visa take?',
    'How much does a visa cost?',
    'How long is the visa valid?',
    'Can I renew my visa?',
    'What if my visa is rejected?',
    'Do children need separate visas?',
    'Can I apply online or must I visit the consulate?',
  ],
  keywords: [
    'tourist visa',
    'business visa',
    'student visa',
    'work visa',
    'visa requirements',
    'visa cost',
    'visa processing time',
  ],
};

// ============================================================================
// BLOG FRAMEWORKS
// ============================================================================
const BLOG_FRAMEWORKS: NicheFrameworks = {
  niche: 'blog',
  pas: {
    name: 'PAS',
    steps: [
      'Problem: Travel plans go wrong due to lack of knowledge',
      'Agitate: Bad experiences cost money, time, stress',
      'Solution: Practical tips from experienced travelers',
    ],
    example: `Problem: First time traveling alone feels overwhelming and risky.
Agitate: Bad planning leads to lost money, missed flights, unsafe areas.
Solution: 10 solo travel tips learned from 50+ solo trips — skip the mistakes we made.`,
  },
  aida: {
    name: 'AIDA',
    steps: [
      'Attention: Start with surprising tip or common mistake',
      'Interest: Share personal story or relatable scenario',
      'Desire: Show how reader benefits from this knowledge',
      'Action: Encourage sharing, saving, or subscribing',
    ],
    example: `Attention: "The #1 packing mistake (we did it too) costs travelers $300 in extra fees"
Interest: "When we arrived in Bangkok with a 40kg suitcase, we learned the hard way."
Desire: "Here's the packing list that keeps us under 7kg for 2-week trips"
Action: "Save this checklist, share with a travel buddy, get 5 more tips in our newsletter"`,
  },
  fourU: {
    name: '4U',
    steps: [
      'Useful: Specific, actionable advice',
      'Urgent: Seasonal tips or time-sensitive info',
      'Unique: Personal experience or unique perspective',
      'Ultra-specific: Numbers, amounts, results',
    ],
    example: `"Save $2,000 on Flights — 5 Booking Tricks Airlines Don't Want You to Know"
✓ Useful: "Specific dates and times that are always cheapest"
✓ Urgent: "Summer flights book up by April — use this now"
✓ Unique: "We tested 500+ flights over 2 years to find these"
✓ Ultra-specific: "$2,000 saved, 5 tricks, tested on 500 flights, works year-round"`,
  },
  faqTopics: [
    'How do I prepare for my first trip?',
    'What is the best luggage for travel?',
    'How do I stay safe while traveling?',
    'How much should I budget per day?',
    'What vaccinations do I need?',
    'How do I find cheap flights?',
    'What insurance do I need?',
    'How do I book accommodations safely?',
  ],
  keywords: [
    'travel tips',
    'packing tips',
    'budget travel',
    'travel planning',
    'solo travel',
    'travel safety',
    'travel guides',
  ],
};

// ============================================================================
// All Frameworks Map
// ============================================================================
export const ALL_FRAMEWORKS: AllFrameworks = {
  turlar: TOURS_FRAMEWORKS,
  mehmonxona: HOTELS_FRAMEWORKS,
  viza: VISAS_FRAMEWORKS,
  blog: BLOG_FRAMEWORKS,
};

// ============================================================================
// Get Framework Prompt
// ============================================================================
export function getFrameworkPrompt(
  niche: Niche,
  framework: Framework,
  language: Language = 'uz'
): string {
  const niches = ALL_FRAMEWORKS[niche];
  if (!niches) {
    throw new Error(`Unknown niche: ${niche}`);
  }

  let fw: CopywritingFramework;
  if (framework === 'PAS') {
    fw = niches.pas;
  } else if (framework === 'AIDA') {
    fw = niches.aida;
  } else if (framework === '4U') {
    fw = niches.fourU;
  } else {
    throw new Error(`Unknown framework: ${framework}`);
  }

  return buildPromptText(fw, language);
}

// ============================================================================
// Build Prompt Text
// ============================================================================
function buildPromptText(fw: CopywritingFramework, language: Language): string {
  const titles = {
    uz: {
      PAS: 'PAS Ramy (Muammo-Jarayoni-Yechim)',
      AIDA: 'AIDA Ramy (Diqqat-Qiziqish-Istamo-Harakat)',
      '4U': '4U Ramy (Foydali-Shoshqoq-Noyob-Juda ma\'lum)',
    },
    ru: {
      PAS: 'Framework PAS (Проблема-Возбуждение-Решение)',
      AIDA: 'Framework AIDA (Внимание-Интерес-Желание-Действие)',
      '4U': 'Framework 4U (Полезно-Срочно-Уникально-Суперспецифично)',
    },
    en: {
      PAS: 'PAS Framework (Problem-Agitate-Solution)',
      AIDA: 'AIDA Framework (Attention-Interest-Desire-Action)',
      '4U': '4U Framework (Useful-Urgent-Unique-Ultra-specific)',
    },
  };

  const stepsLabel = {
    uz: 'Bosqichlar',
    ru: 'Шаги',
    en: 'Steps',
  };

  const exampleLabel = {
    uz: 'Namuna',
    ru: 'Пример',
    en: 'Example',
  };

  const title = titles[language]?.[fw.name as Framework] || fw.name;
  const label1 = stepsLabel[language] || 'Steps';
  const label2 = exampleLabel[language] || 'Example';

  return `## ${title}

### ${label1}:
${fw.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

### ${label2}:
${fw.example}`;
}

// ============================================================================
// Get FAQ Topics for Niche
// ============================================================================
export function getFAQTopics(niche: Niche): string[] {
  const frameworks = ALL_FRAMEWORKS[niche];
  return frameworks?.faqTopics || [];
}

// ============================================================================
// Get Keywords for Niche
// ============================================================================
export function getKeywordsForNiche(niche: Niche): string[] {
  const frameworks = ALL_FRAMEWORKS[niche];
  return frameworks?.keywords || [];
}

// ============================================================================
// Get All Frameworks for Niche
// ============================================================================
export function getFrameworksForNiche(niche: Niche): NicheFrameworks | null {
  return ALL_FRAMEWORKS[niche] || null;
}

// ============================================================================
// Build Complete Copywriting Brief
// ============================================================================
export interface CopywritingBrief {
  niche: Niche;
  frameworks: string;
  faqTopics: string[];
  keywords: string[];
  tips: string[];
}

export function buildCopywritingBrief(
  niche: Niche,
  language: Language = 'uz'
): CopywritingBrief {
  const frameworks = getFrameworksForNiche(niche);
  if (!frameworks) {
    throw new Error(`Unknown niche: ${niche}`);
  }

  const tips: { [key in Language]: string[] } = {
    uz: [
      '1. Birinchi paragrafda kalit so\'zni joylashtiring',
      '2. Sarlavhalarni (H2, H3) soda va aniq qiling',
      '3. Ro\'yxatlarni (<ul>, <ol>) ishlating tushunish uchun',
      '4. FAQ bo\'limiga 4-6 ta savol qo\'shing',
      '5. So\'z santixsini 0.8-2.5% da tutib qo\'ying',
    ],
    ru: [
      '1. Поместите ключевое слово в первый абзац',
      '2. Заголовки (H2, H3) должны быть простыми и понятными',
      '3. Используйте списки (<ul>, <ol>) для читаемости',
      '4. Добавьте 4-6 вопросов в раздел FAQ',
      '5. Поддерживайте плотность ключевых слов 0,8-2,5%',
    ],
    en: [
      '1. Place keyword in the first paragraph',
      '2. Keep headings (H2, H3) simple and clear',
      '3. Use lists (<ul>, <ol>) for readability',
      '4. Add 4-6 questions to FAQ section',
      '5. Maintain keyword density 0.8-2.5%',
    ],
  };

  const frameworkTexts = [
    getFrameworkPrompt(niche, 'PAS', language),
    getFrameworkPrompt(niche, 'AIDA', language),
    getFrameworkPrompt(niche, '4U', language),
  ].join('\n\n');

  return {
    niche,
    frameworks: frameworkTexts,
    faqTopics: frameworks.faqTopics,
    keywords: frameworks.keywords,
    tips: tips[language] || tips['en'],
  };
}
