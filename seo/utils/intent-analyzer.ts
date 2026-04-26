/**
 * Intent Analyzer
 * Determines search intent from a keyword
 */

export type SearchIntent =
  | 'informational'
  | 'commercial'
  | 'transactional'
  | 'navigational';

/**
 * Analyze search intent from keyword
 * @param keyword - The keyword to analyze
 * @param language - Language of the keyword (uz, ru, en)
 * @returns Search intent type
 */
export function analyzeIntent(keyword: string, language: string = 'uz'): SearchIntent {
  const lowerKeyword = keyword.toLowerCase().trim();

  // Transactional indicators (highest priority)
  if (
    isTransactional(lowerKeyword, language)
  ) {
    return 'transactional';
  }

  // Commercial indicators
  if (isCommercial(lowerKeyword, language)) {
    return 'commercial';
  }

  // Navigational indicators
  if (isNavigational(lowerKeyword, language)) {
    return 'navigational';
  }

  // Default to informational
  return 'informational';
}

/**
 * Check if keyword has transactional intent
 */
function isTransactional(keyword: string, language: string): boolean {
  const transactionalPatterns: Record<string, RegExp[]> = {
    uz: [
      /xarid|sotib olish|to'lash|band|biting|o'qib chiq|joylash|ariza|qurol/i,
      /narx|qancha|narxi/i,
      /kupon|skidka|chegirma|aksiya|sotishdala/i,
    ],
    ru: [
      /купить|заказать|забронировать|зарезервировать|оформить|заполнить|подать/i,
      /цена|стоимость|сколько стоит/i,
      /купон|скидка|акция|распродажа|промо/i,
      /оплата|платеж|счет/i,
    ],
    en: [
      /buy|purchase|order|book|reserve|checkout|apply|submit/i,
      /price|cost|how much|pricing/i,
      /coupon|discount|deal|offer|promotion|sale/i,
      /payment|pay|billing/i,
    ],
  };

  const patterns = transactionalPatterns[language] || transactionalPatterns.en;
  return patterns.some((pattern) => pattern.test(keyword));
}

/**
 * Check if keyword has commercial intent
 */
function isCommercial(keyword: string, language: string): boolean {
  const commercialPatterns: Record<string, RegExp[]> = {
    uz: [
      /eng yaxshi|yaxshi|best|eng|tug'|rejali|reyting/i,
      /taqqoslash|solishtirilma|versus|vs|farq/i,
      /review|sharh|fikr|bahodi|baho/i,
      /premium|exclusive|eksklyuziv|special|maxsus/i,
      /rekomendatsiya|tavsiya|tip/i,
    ],
    ru: [
      /лучший|топ|рейтинг|лучше|отличный|хороший/i,
      /сравнение|сравнить|лучше чем|vs|versus/i,
      /отзывы|отзыв|рецензия|мнение|оценка/i,
      /премиум|exclusive|эксклюзив|специальный/i,
      /рекомендация|совет|рекомендую|лучшие|популярные/i,
    ],
    en: [
      /best|top|rank|excellent|good|premium/i,
      /compare|comparison|vs|versus|better than/i,
      /review|reviews|opinion|rating|rated/i,
      /exclusive|special|recommended|top rated/i,
      /how to choose|guide|tips|tricks|hacks/i,
    ],
  };

  const patterns = commercialPatterns[language] || commercialPatterns.en;
  return patterns.some((pattern) => pattern.test(keyword));
}

/**
 * Check if keyword has navigational intent
 */
function isNavigational(keyword: string, language: string): boolean {
  const brandNames = ['sem travel', 'semtravel', 'sem-travel'];

  // Check for brand mentions
  if (brandNames.some((brand) => keyword.includes(brand))) {
    return true;
  }

  // Check for website/app names
  const navigationalPatterns: Record<string, RegExp[]> = {
    uz: [
      /sayt|veb|app|application|platforma|portal|site/i,
      /havolasi|sahifa|sahifasi/i,
    ],
    ru: [
      /сайт|веб|приложение|app|платформа|портал/i,
      /ссылка|страница|страница/i,
    ],
    en: [
      /website|web|app|application|platform|portal|site|page/i,
      /link|url|domain/i,
    ],
  };

  const patterns = navigationalPatterns[language] || navigationalPatterns.en;
  return patterns.some((pattern) => pattern.test(keyword));
}

/**
 * Get intent description for UI display
 */
export function getIntentDescription(intent: SearchIntent, language: string = 'uz'): string {
  const descriptions: Record<SearchIntent, Record<string, string>> = {
    informational: {
      uz: "O'quv maqsadi — bilish va o'rganish",
      ru: 'Информационный - ищет информацию',
      en: 'Informational - seeking information',
    },
    commercial: {
      uz: "Taqqoslash maqsadi — taqqoslay olish va qaror qabul qilish",
      ru: 'Коммерческий - сравнивает варианты',
      en: 'Commercial - comparing options',
    },
    transactional: {
      uz: "Xarid maqsadi — sotib olish va to'lash",
      ru: 'Транзакционный - готов к покупке',
      en: 'Transactional - ready to buy',
    },
    navigational: {
      uz: "Navigatsiya maqsadi — brandga o'tish",
      ru: 'Навигационный - перейти на сайт',
      en: 'Navigational - going to a website',
    },
  };

  return descriptions[intent][language] || descriptions[intent].en;
}

/**
 * Get intent emoji
 */
export function getIntentEmoji(intent: SearchIntent): string {
  const emojis: Record<SearchIntent, string> = {
    informational: '📚',
    commercial: '🔍',
    transactional: '💳',
    navigational: '🧭',
  };

  return emojis[intent];
}

/**
 * Batch analyze intents
 */
export function analyzeIntentsBatch(
  keywords: string[],
  language: string = 'uz'
): Record<string, SearchIntent> {
  const results: Record<string, SearchIntent> = {};

  keywords.forEach((keyword) => {
    results[keyword] = analyzeIntent(keyword, language);
  });

  return results;
}

/**
 * Get statistics about intents in a keyword list
 */
export function getIntentStats(
  keywords: Array<{ keyword: string; intent?: SearchIntent }>
): Record<SearchIntent, number> {
  const stats: Record<SearchIntent, number> = {
    informational: 0,
    commercial: 0,
    transactional: 0,
    navigational: 0,
  };

  keywords.forEach(({ intent }) => {
    if (intent) {
      stats[intent]++;
    }
  });

  return stats;
}
