export type TourCategory =
  | "all"
  | "beach"
  | "culture"
  | "adventure"
  | "family"
  | "couple"
  | "allInclusive";

export type TourBadge =
  | "travelersChoice"
  | "hot"
  | "sale"
  | "new"
  | "bestValue";

export interface TourMeals {
  type: "none" | "breakfast" | "halfBoard" | "allInclusive";
  label: string;
}

export interface TourIncluded {
  flight: boolean;
  hotel: boolean;
  meals: TourMeals;
  transfer: boolean;
  guide: boolean;
  insurance: boolean;
}

export interface Tour {
  id: number;
  title: string;
  slug: string;
  destination: string;
  country: string;
  flag: string;
  category: TourCategory[];
  duration: string;
  nights: number;
  hotelName: string;
  hotelStars: number;
  departureCity: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviewCount: number;
  reviewSnippet: string;
  image: string;
  badge?: TourBadge;
  included: TourIncluded;
  spotsLeft?: number;
  viewersCount?: number;
  dealHoursLeft?: number; // hours until deal ends
}

// generates a Date object N hours from now (for countdown)
export function hoursFromNow(hours: number): Date {
  return new Date(Date.now() + hours * 3_600_000);
}

export const TOURS: Tour[] = [
  {
    id: 1,
    title: "Antalya — All Inclusive Grand Resort",
    slug: "antalya-all-inclusive",
    destination: "Antalya",
    country: "Turkiya",
    flag: "🇹🇷",
    category: ["beach", "allInclusive", "family"],
    duration: "7 kecha / 8 kun",
    nights: 7,
    hotelName: "Grand Yazici Club Marmaris",
    hotelStars: 5,
    departureCity: "Toshkent",
    price: 950,
    oldPrice: 1250,
    rating: 4.8,
    reviewCount: 312,
    reviewSnippet: "Ajoyib mehmonxona, ovqatlar zo'r, plyaj yaqin. Albatta qaytib boraman!",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80",
    badge: "travelersChoice",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "allInclusive", label: "All Inclusive" },
      transfer: true,
      guide: false,
      insurance: true,
    },
    spotsLeft: 4,
    viewersCount: 23,
    dealHoursLeft: 6,
  },
  {
    id: 2,
    title: "Dubai — Shahar va Dengiz",
    slug: "dubai-city-sea",
    destination: "Dubai",
    country: "BAA",
    flag: "🇦🇪",
    category: ["couple", "culture"],
    duration: "5 kecha / 6 kun",
    nights: 5,
    hotelName: "Atlantis The Palm",
    hotelStars: 5,
    departureCity: "Toshkent",
    price: 1100,
    oldPrice: 1450,
    rating: 4.9,
    reviewCount: 189,
    reviewSnippet: "Dubai — hayotimda ko'rgan eng chiroyli shahar. Xizmat darajasi yuqori!",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80",
    badge: "hot",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "breakfast", label: "Nonushta" },
      transfer: true,
      guide: true,
      insurance: false,
    },
    viewersCount: 41,
    spotsLeft: 8,
  },
  {
    id: 3,
    title: "Hurghada — Qizil Dengiz Gavhari",
    slug: "hurghada-red-sea",
    destination: "Hurghada",
    country: "Misr",
    flag: "🇪🇬",
    category: ["beach", "allInclusive", "family"],
    duration: "7 kecha / 8 kun",
    nights: 7,
    hotelName: "Steigenberger Al Dau Beach",
    hotelStars: 5,
    departureCity: "Toshkent",
    price: 790,
    oldPrice: 1100,
    rating: 4.7,
    reviewCount: 428,
    reviewSnippet: "Dengiz kristal toza, baliqlar go'zal. Snorkelingdan zavqlandik!",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&q=80",
    badge: "sale",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "allInclusive", label: "All Inclusive" },
      transfer: true,
      guide: false,
      insurance: true,
    },
    spotsLeft: 2,
    viewersCount: 67,
    dealHoursLeft: 3,
  },
  {
    id: 4,
    title: "Phuket — Tailand Jannat Orollari",
    slug: "phuket-paradise",
    destination: "Phuket",
    country: "Tailand",
    flag: "🇹🇭",
    category: ["beach", "couple", "adventure"],
    duration: "9 kecha / 10 kun",
    nights: 9,
    hotelName: "Kata Rocks Resort",
    hotelStars: 5,
    departureCity: "Toshkent",
    price: 1290,
    oldPrice: 1600,
    rating: 4.9,
    reviewCount: 97,
    reviewSnippet: "Eng go'zal dam olish joyi! Suv shaffof, mehmonxona mukammal.",
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=700&q=80",
    badge: "new",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "halfBoard", label: "Yarim pansion" },
      transfer: true,
      guide: true,
      insurance: false,
    },
    viewersCount: 18,
  },
  {
    id: 5,
    title: "Istanbul — Sharq va G'arb Tutashgan Shahar",
    slug: "istanbul-culture",
    destination: "Istanbul",
    country: "Turkiya",
    flag: "🇹🇷",
    category: ["culture", "couple"],
    duration: "4 kecha / 5 kun",
    nights: 4,
    hotelName: "Sultanahmet Palace Hotel",
    hotelStars: 4,
    departureCity: "Toshkent",
    price: 620,
    oldPrice: 780,
    rating: 4.6,
    reviewCount: 534,
    reviewSnippet: "Tarix va zamonaviylik ajoyib uyg'un. Bozor va muzeylar zo'r!",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=700&q=80",
    badge: "bestValue",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "breakfast", label: "Nonushta" },
      transfer: true,
      guide: true,
      insurance: false,
    },
    viewersCount: 35,
    spotsLeft: 6,
  },
  {
    id: 6,
    title: "Maldiv — Suv Usti Bungalov",
    slug: "maldives-overwater",
    destination: "Maldiv orollari",
    country: "Maldiv",
    flag: "🇲🇻",
    category: ["couple", "beach"],
    duration: "6 kecha / 7 kun",
    nights: 6,
    hotelName: "Soneva Jani Resort",
    hotelStars: 5,
    departureCity: "Toshkent",
    price: 2800,
    oldPrice: 3400,
    rating: 5.0,
    reviewCount: 56,
    reviewSnippet: "Umrda bir marta boriladigan joy. Har bir daqiqasi unutilmas!",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&q=80",
    badge: "travelersChoice",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "allInclusive", label: "All Inclusive" },
      transfer: true,
      guide: false,
      insurance: true,
    },
    viewersCount: 12,
    spotsLeft: 2,
  },
  {
    id: 7,
    title: "Gretsiya — Santorini Orolida Masal",
    slug: "santorini-greece",
    destination: "Santorini",
    country: "Gretsiya",
    flag: "🇬🇷",
    category: ["couple", "culture", "beach"],
    duration: "6 kecha / 7 kun",
    nights: 6,
    hotelName: "Canaves Oia Suites",
    hotelStars: 5,
    departureCity: "Toshkent",
    price: 1650,
    oldPrice: 2000,
    rating: 4.8,
    reviewCount: 203,
    reviewSnippet: "Oq uylar, ko'k gumbazlar va qizil quyosh botishi — surat ichida yashagandek!",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "breakfast", label: "Nonushta" },
      transfer: true,
      guide: false,
      insurance: false,
    },
    viewersCount: 29,
    dealHoursLeft: 12,
  },
  {
    id: 8,
    title: "Bali — Xudolar Oroli",
    slug: "bali-gods-island",
    destination: "Bali",
    country: "Indoneziya",
    flag: "🇮🇩",
    category: ["adventure", "culture", "couple"],
    duration: "8 kecha / 9 kun",
    nights: 8,
    hotelName: "COMO Uma Ubud",
    hotelStars: 5,
    departureCity: "Toshkent",
    price: 1450,
    oldPrice: 1800,
    rating: 4.7,
    reviewCount: 141,
    reviewSnippet: "Tabiat, madaniyat va tinchlik. Yoga va meditatsiya uchun ideal joy.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=80",
    badge: "hot",
    included: {
      flight: true,
      hotel: true,
      meals: { type: "halfBoard", label: "Yarim pansion" },
      transfer: true,
      guide: true,
      insurance: false,
    },
    viewersCount: 22,
    spotsLeft: 5,
  },
];
