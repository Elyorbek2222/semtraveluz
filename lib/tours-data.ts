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
  descUz?: string;
  descRu?: string;
  highlightsUz?: string[];
  highlightsRu?: string[];
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
    descUz: "Grand Yazici Club Marmaris 5* mehmonxonasida All Inclusive dam olish. Toshkentdan to'g'ri charter parvoz, cheksiz ovqat va ichimlik, xususiy plyaj va aquapark. Bolalar klubi va tungi animatsiya bilan butun oila uchun ideal tanlov.",
    descRu: "Отдых All Inclusive в отеле Grand Yazici Club Marmaris 5*. Прямой чартерный рейс из Ташкента, безлимитное питание и напитки, собственный пляж и аквапарк. С детским клубом и вечерней анимацией — идеальный выбор для всей семьи.",
    highlightsUz: ["Cheksiz ovqat va ichimliklar (All Inclusive)", "Xususiy plyaj va katta aquapark", "To'g'ri charter parvoz Toshkentdan", "Bolalar klubi va kecha animatsiyasi", "5 ta hovuz va sport maydonlari"],
    highlightsRu: ["Безлимитное питание и напитки (All Inclusive)", "Собственный пляж и большой аквапарк", "Прямой чартер из Ташкента", "Детский клуб и вечерняя анимация", "5 бассейнов и спортивные площадки"],
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
    descUz: "Dubai — dunyoning eng hashamatli shahri. Atlantis The Palm 5* da turib Burj Khalifa, Dubai Mall, Palm Jumeirah va cho'l safarini kashf eting. Tajribali gid bilan barcha diqqatga sazovor joylarni aylanasiz.",
    descRu: "Дубай — самый роскошный город мира. Остановитесь в Atlantis The Palm 5* и откройте Бурдж-Халифу, Dubai Mall, Palm Jumeirah и сафари в пустыне. Опытный гид проведёт вас по всем достопримечательностям.",
    highlightsUz: ["Atlantis The Palm 5* da turar joy", "Burj Khalifa — dunyodagi eng baland bino", "Dubai Mall va oltin bozori", "Cho'l safarida tuya minish", "Palm Jumeirah bo'ylab shikasta sayohat"],
    highlightsRu: ["Проживание в Atlantis The Palm 5*", "Бурдж-Халифа — самое высокое здание мира", "Dubai Mall и золотой рынок", "Сафари в пустыне, верблюды", "Прогулка по Palm Jumeirah"],
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
    descUz: "Qizil dengizning eng yaxshi kurortilaridan biri — Hurghada. Steigenberger Al Dau Beach 5* da All Inclusive dam oling. Shaffof suv, rang-barang marjon riflari va snorkeling uchun ideal joy. Baliqlar dunyosini kashf eting!",
    descRu: "Хургада — один из лучших курортов Красного моря. All Inclusive отдых в Steigenberger Al Dau Beach 5*. Прозрачная вода, красочные коралловые рифы и идеальные условия для снорклинга. Откройте подводный мир!",
    highlightsUz: ["All Inclusive — cheksiz ovqat va ichimlik", "Marjon riflari yonida snorkeling", "Kristal toza Qizil dengiz suvlari", "Qayiqda ov va suv sporti", "Xususiy plyaj va hovuzlar"],
    highlightsRu: ["All Inclusive — безлимитное питание", "Снорклинг у коралловых рифов", "Кристально чистые воды Красного моря", "Рыбалка с лодки и водные виды спорта", "Собственный пляж и бассейны"],
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
    descUz: "Phuket — Tailandning eng mashhur orolida romantik dam olish. Kata Rocks Resort 5* da Andaman dengizining ajoyib manzarasini tomosha qiling. Yarim pansion, tajribali gid va suv osti dunyosining go'zalligi sizni kutmoqda.",
    descRu: "Пхукет — романтический отдых на самом известном острове Таиланда. Насладитесь потрясающими видами Андаманского моря из Kata Rocks Resort 5*. Полупансион, опытный гид и красота подводного мира ждут вас.",
    highlightsUz: ["Kata Rocks Resort 5* da ux oqshom", "Phi Phi orollariga qayiqda sayohat", "Snorkeling va scuba diving", "Tailand oshxonasi va massaj", "Gid bilan shahar ekskursiyasi"],
    highlightsRu: ["9 ночей в Kata Rocks Resort 5*", "Морская прогулка к островам Пхи-Пхи", "Снорклинг и скуба-дайвинг", "Тайская кухня и традиционный массаж", "Экскурсия по городу с гидом"],
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
    descUz: "Istanbul — sharq va g'arb tutashgan tarix shahri. Sultanahmet Palace Hotel 4* da turib Aya Sofiya, Topkapi saroyi, Qizil bozor va Bosfor bo'g'ozida kemada sayohat qiling. Tajribali gid bilan 5000 yillik tarixni kashf eting.",
    descRu: "Стамбул — город на стыке Востока и Запада. Из Sultanahmet Palace Hotel 4* посетите Айя-Софию, дворец Топкапы, Гранд-базар и совершите прогулку по Босфору. Откройте 5000-летнюю историю с опытным гидом.",
    highlightsUz: ["Aya Sofiya va Moviy masjid ziyorati", "Topkapi saroyi muzeyida ekskursiya", "Qizil bozorda savdo-sotiq", "Bosfor bo'g'ozida kema safarı", "Galata minorasi va Beyoglu ko'chasi"],
    highlightsRu: ["Посещение Айя-Софии и Голубой мечети", "Экскурсия в музей дворца Топкапы", "Шоппинг на Гранд-базаре", "Прогулка по Босфору на корабле", "Башня Галата и улица Истикляль"],
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
    descUz: "Maldiv — jannat orollarida suv usti bungalovda umrlik xotiralar. Soneva Jani Resort da shaffof suv ustida tong otiring. All Inclusive paket, maxsus suv usti restoran va snorkeling bilan bu sayohat hayotingizdagi eng go'zal tajriba bo'ladi.",
    descRu: "Мальдивы — незабываемые воспоминания в бунгало на воде на островах рая. Встречайте рассветы над прозрачным океаном в Soneva Jani Resort. All Inclusive, ресторан над водой и снорклинг — самый красивый опыт вашей жизни.",
    highlightsUz: ["Suv usti bungalovda 6 kecha turar joy", "All Inclusive — cheksiz ovqat va ichimlik", "Shaffof lagunda snorkeling va diving", "Suv usti restoran va shaxsiy sun bathing", "Maxsus honeymoon dekoratsiyasi"],
    highlightsRu: ["6 ночей в бунгало на воде", "All Inclusive — безлимитное питание", "Снорклинг и дайвинг в лагуне", "Ресторан над водой и личный пляж", "Специальное оформление для медового месяца"],
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
    descUz: "Santorini — oq uylar, ko'k gumbazlar va quyosh botishining qizil rangi. Canaves Oia Suites 5* da Egey dengiziga tutash nomzod uy/suita. Gretsiyaning eng romantik orolida orzular ta'tili sizni kutmoqda.",
    descRu: "Санторини — белые домики, синие купола и алый закат над Эгейским морем. Canaves Oia Suites 5* с видом на море. Самый романтичный остров Греции ждёт вас для отпуска вашей мечты.",
    highlightsUz: ["Oia shahrida quyosh botishi tomosha qilish", "Santorini sharob va oshxona turi", "Kaldera ko'rfazida katamaran safarı", "Qadimiy Akrotiri arxeologik qazilmalari", "Qora va qizil plyajlarda dam olish"],
    highlightsRu: ["Закат в деревне Ойя — самый красивый в мире", "Дегустация санторинских вин и местной кухни", "Морская прогулка на катамаране по кальдере", "Древние раскопки Акротири", "Чёрный и красный вулканические пляжи"],
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
    descUz: "Bali — xudolar oroli sifatida mashhur Indoneziyaning eng go'zal tabiati va ma'naviy markazi. COMO Uma Ubud 5* da shamallar orqali shaltir-shultir qiladigan terassirlangan guruch dalalari manzarasidan bahramand bo'ling. Yoga, meditatsiya va madaniy sayohat uchun ideal.",
    descRu: "Бали — самая красивая природа Индонезии и духовный центр, известный как Остров Богов. Наслаждайтесь видом на рисовые террасы из COMO Uma Ubud 5*. Идеальное место для йоги, медитации и культурного путешествия.",
    highlightsUz: ["Ubud guruch terrasi bog'larida sayr", "Hindu ibodatxonalari va marosimlar", "Kecak o'yinini tomosha qilish", "Balineziya massaj va spa muolajalari", "Kuta va Seminyak plajlarida dam olish"],
    highlightsRu: ["Прогулка по рисовым террасам Убуда", "Индуистские храмы и церемонии", "Традиционный танец Кечак", "Балийский массаж и спа-процедуры", "Отдых на пляжах Куты и Семиньяка"],
  },
];
