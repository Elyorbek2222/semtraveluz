export interface DestinationFAQ {
  qUz: string;
  qRu: string;
  aUz: string;
  aRu: string;
}

export interface Destination {
  slug: string;
  nameUz: string;
  nameRu: string;
  flag: string;
  heroImage: string;
  priceFrom: number;
  nightsRange: string;
  visaUz: string;
  visaRu: string;
  flightHours: string;
  bestSeasonUz: string;
  bestSeasonRu: string;
  descUz: string;
  descRu: string;
  highlightsUz: string[];
  highlightsRu: string[];
  faqs: DestinationFAQ[];
  tourCountryMatch: string; // matches Tour.country
  tvCountryName: string;   // Tourvisor country name (Russian) for search widget pre-filter
  tvModuleId: string;      // Tourvisor search module ID pre-configured for this country
}

export const DESTINATIONS: Record<string, Destination> = {
  turkiya: {
    slug: "turkiya",
    nameUz: "Turkiya",
    nameRu: "Турция",
    flag: "🇹🇷",
    heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=70",
    priceFrom: 620,
    nightsRange: "4–10",
    visaUz: "Viza kerak emas",
    visaRu: "Виза не нужна",
    flightHours: "~4 soat",
    bestSeasonUz: "Aprel–Oktyabr",
    bestSeasonRu: "Апрель–Октябрь",
    descUz: "Turkiya — O'zbekistonliklar uchun eng mashhur sayohat yo'nalishi. Vizasiz kirish, to'g'ri parvozlar va All Inclusive paketlar bilan Antalya, Istanbul, Bodrum va boshqa shaharlarda dam olishingiz mumkin. SEM Travel Toshkentdan Turkiyaga eng arzon turlarni taklif qiladi.",
    descRu: "Турция — самое популярное направление для узбекистанцев. Безвизовый въезд, прямые рейсы и All Inclusive пакеты делают Анталью, Стамбул, Бодрум и другие города доступными. SEM Travel предлагает самые дешёвые туры из Ташкента в Турцию.",
    highlightsUz: [
      "✈️ Vizasiz kirish (30 kungacha)",
      "🏖️ Antalya All Inclusive — cheksiz ovqat",
      "🕌 Istanbul — tarix va madaniyat markazi",
      "🌊 O'rta dengiz plyajlari",
      "🛒 Grand Bazaar da xarid",
    ],
    highlightsRu: [
      "✈️ Безвизовый въезд (до 30 дней)",
      "🏖️ Анталья All Inclusive — безлимитное питание",
      "🕌 Стамбул — центр истории и культуры",
      "🌊 Пляжи Средиземного моря",
      "🛒 Шоппинг на Гранд-базаре",
    ],
    faqs: [
      {
        qUz: "O'zbekistonliklar Turkiyaga vizasiz bora oladimi?",
        qRu: "Могут ли узбекистанцы ехать в Турцию без визы?",
        aUz: "Ha, O'zbekiston fuqarolari Turkiyaga 30 kungacha vizasiz kirishi mumkin.",
        aRu: "Да, граждане Узбекистана могут въезжать в Турцию без визы до 30 дней.",
      },
      {
        qUz: "Toshkentdan Antalyaga to'g'ri parvoz bormi?",
        qRu: "Есть ли прямой рейс из Ташкента в Анталью?",
        aUz: "Ha, charter va muntazam parvozlar mavjud. Uchish vaqti taxminan 4 soat.",
        aRu: "Да, есть чартерные и регулярные рейсы. Время в пути около 4 часов.",
      },
      {
        qUz: "All Inclusive turda nima kiradi?",
        qRu: "Что входит в тур All Inclusive?",
        aUz: "Parvoz, mehmonxona, 3 mahal ovqat, barcha ichimliklar, transfer va sug'urta kiradi.",
        aRu: "Включён перелёт, отель, трёхразовое питание, напитки, трансфер и страховка.",
      },
      {
        qUz: "Turkiyaga qachon borish yaxshi?",
        qRu: "Когда лучше ехать в Турцию?",
        aUz: "Plyaj dam olishi uchun May–Oktyabr, Istanbul ko'rish uchun yil bo'yi qulay.",
        aRu: "Для пляжного отдыха — май–октябрь, для Стамбула — круглый год.",
      },
      {
        qUz: "Turkiya turi qancha turadi?",
        qRu: "Сколько стоит тур в Турцию?",
        aUz: "Istanbul turlari $620 dan, Antalya All Inclusive $950 dan boshlanadi. Narxga parvoz, mehmonxona va transfer kiradi.",
        aRu: "Туры в Стамбул от $620, Анталья All Inclusive от $950. В цену включены перелёт, отель и трансфер.",
      },
    ],
    tourCountryMatch: "Turkiya",
    tvCountryName: "Турция",
    tvModuleId: "9976621",
  },

  dubai: {
    slug: "dubai",
    nameUz: "Dubai",
    nameRu: "Дубай",
    flag: "🇦🇪",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=70",
    priceFrom: 1100,
    nightsRange: "5–8",
    visaUz: "Viza kerak (SEM Travel rasmiylashtiradi)",
    visaRu: "Нужна виза (оформляем)",
    flightHours: "~3 soat",
    bestSeasonUz: "Oktyabr–Aprel",
    bestSeasonRu: "Октябрь–Апрель",
    descUz: "Dubai — dunyoning eng zamonaviy va hashamatli shahri. Burj Khalifa, Palm Jumeirah, Dubai Mall va cho'l safarini bir sayohatda birlashtiring. SEM Travel Toshkentdan Dubayga barcha xizmatlarni o'z ichiga olgan tur paketlar taklif qiladi.",
    descRu: "Дубай — самый современный и роскошный город мира. Объедините в одной поездке Бурдж-Халифу, Пальм Джумейру, Dubai Mall и сафари в пустыне. SEM Travel предлагает комплексные туры из Ташкента в Дубай.",
    highlightsUz: [
      "🏙️ Burj Khalifa — dunyodagi eng baland bino",
      "🛍️ Dubai Mall — eng katta savdo markazi",
      "🌴 Palm Jumeirah orolida dam olish",
      "🐫 Cho'l safarida tuya minish",
      "💎 Oltin bozori va xarid imkoniyatlari",
    ],
    highlightsRu: [
      "🏙️ Бурдж-Халифа — самое высокое здание мира",
      "🛍️ Dubai Mall — крупнейший торговый центр",
      "🌴 Отдых на острове Пальм Джумейра",
      "🐫 Сафари в пустыне, катание на верблюдах",
      "💎 Золотой рынок и шоппинг",
    ],
    faqs: [
      {
        qUz: "O'zbekistonliklar uchun Dubai vizasi qanday olinadi?",
        qRu: "Как получить визу в Дубай для узбекистанцев?",
        aUz: "SEM Travel BAA vizasini 3–5 ish kunida rasmiylashtiradi. Pasport nusxasi va 1 ta fotosurat kerak.",
        aRu: "SEM Travel оформляет визу в ОАЭ за 3–5 рабочих дней. Нужна копия паспорта и 1 фото.",
      },
      {
        qUz: "Dubai qachon borish yaxshi?",
        qRu: "Когда лучше ехать в Дубай?",
        aUz: "Oktyabr–Aprel — havosi qulay (+25–30°C). Yoz oylarida +45°C gacha bo'ladi.",
        aRu: "Октябрь–Апрель — комфортная погода (+25–30°C). Летом температура до +45°C.",
      },
      {
        qUz: "Dubai turi qancha turadi?",
        qRu: "Сколько стоит тур в Дубай?",
        aUz: "Toshkentdan Dubai turlari $1100 dan boshlanadi (5 kecha, parvoz + mehmonxona + transfer).",
        aRu: "Туры в Дубай из Ташкента от $1100 (5 ночей, перелёт + отель + трансфер).",
      },
      {
        qUz: "Dubai da nima ko'rish kerak?",
        qRu: "Что посмотреть в Дубае?",
        aUz: "Burj Khalifa, Dubai Mall, Palm Jumeirah, Cho'l safari, Oltin bozori, Global Village.",
        aRu: "Бурдж-Халифа, Dubai Mall, Пальм Джумейра, сафари в пустыне, Золотой рынок, Global Village.",
      },
      {
        qUz: "Toshkentdan Dubayga necha soat uchish kerak?",
        qRu: "Сколько лететь из Ташкента в Дубай?",
        aUz: "Taxminan 3 soat. To'g'ri parvozlar mavjud.",
        aRu: "Около 3 часов. Есть прямые рейсы.",
      },
    ],
    tourCountryMatch: "BAA",
    tvCountryName: "ОАЭ",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Dubai uchun alohida modul yarating
  },

  misr: {
    slug: "misr",
    nameUz: "Misr",
    nameRu: "Египет",
    flag: "🇪🇬",
    heroImage: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=70",
    priceFrom: 790,
    nightsRange: "7–10",
    visaUz: "Vizasiz (arrival visa)",
    visaRu: "Виза по прилёту",
    flightHours: "~5 soat",
    bestSeasonUz: "Oktyabr–Aprel",
    bestSeasonRu: "Октябрь–Апрель",
    descUz: "Misr — Qizil dengizning eng arzon va go'zal kurortidir. Hurghada va Sharm el-Sheikh da All Inclusive dam oling, dengiz osti dunyosini kashf eting. Qo'shimcha ravishda Qohira va piramidalarni ziyorat qiling.",
    descRu: "Египет — самый доступный и красивый курорт Красного моря. Отдохните All Inclusive в Хургаде или Шарм-эль-Шейхе, откройте подводный мир. Также посетите Каир и пирамиды.",
    highlightsUz: [
      "🏖️ Hurghada — Qizil dengiz plyajlari",
      "🐠 Snorkeling va diving — marjon riflari",
      "🏛️ Qohira va Giza piramidalari",
      "🌊 Sharm el-Sheikh — eng toza dengiz",
      "🐪 Cho'l bo'yicha safari va tuyaga minish",
    ],
    highlightsRu: [
      "🏖️ Хургада — пляжи Красного моря",
      "🐠 Снорклинг и дайвинг — коралловые рифы",
      "🏛️ Каир и пирамиды Гизы",
      "🌊 Шарм-эль-Шейх — чистейшее море",
      "🐪 Сафари по пустыне и катание на верблюдах",
    ],
    faqs: [
      {
        qUz: "Misrga viza kerakmi?",
        qRu: "Нужна ли виза в Египет?",
        aUz: "Yo'q, O'zbekiston fuqarolari Misrga vizasiz kelishi mumkin — viza aeroportda olinadi (arrival visa, $25).",
        aRu: "Нет, граждане Узбекистана прилетают без визы — виза оформляется по прилёту ($25).",
      },
      {
        qUz: "Hurghada yoki Sharm el-Sheikh — qaysi biri yaxshiroq?",
        qRu: "Хургада или Шарм-эль-Шейх — что лучше?",
        aUz: "Oilalar uchun Hurghada, diving sevuvchilar uchun Sharm el-Sheikh. Hurghada arzonroq.",
        aRu: "Для семей — Хургада, для дайверов — Шарм-эль-Шейх. Хургада дешевле.",
      },
      {
        qUz: "Misr turi qancha turadi?",
        qRu: "Сколько стоит тур в Египет?",
        aUz: "Toshkentdan Misr turlari $790 dan boshlanadi (7 kecha, All Inclusive).",
        aRu: "Туры в Египет из Ташкента от $790 (7 ночей, All Inclusive).",
      },
      {
        qUz: "Misrga qachon borish yaxshi?",
        qRu: "Когда лучше ехать в Египет?",
        aUz: "Oktyabr–Aprel — qulay havo (+25–30°C). Yoz juda issiq bo'ladi (+40°C+).",
        aRu: "Октябрь–Апрель — комфортная погода (+25–30°C). Летом очень жарко (+40°C+).",
      },
      {
        qUz: "Piramidalarni ko'rish uchun qo'shimcha ekskursiya kerakmi?",
        qRu: "Нужна ли отдельная экскурсия для пирамид?",
        aUz: "Ha, Qohira ekskursiyasi qo'shimcha to'lanadi (~$60–80). SEM Travel bu xizmatni ham taklif qiladi.",
        aRu: "Да, экскурсия в Каир оплачивается отдельно (~$60–80). SEM Travel также предлагает эту услугу.",
      },
    ],
    tourCountryMatch: "Misr",
    tvCountryName: "Египет",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Misr uchun alohida modul yarating
  },

  tailand: {
    slug: "tailand",
    nameUz: "Tailand",
    nameRu: "Таиланд",
    flag: "🇹🇭",
    heroImage: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&q=70",
    priceFrom: 1290,
    nightsRange: "8–12",
    visaUz: "Vizasiz (30 kun)",
    visaRu: "Безвизовый (30 дней)",
    flightHours: "~6–7 soat",
    bestSeasonUz: "Noyabr–Aprel",
    bestSeasonRu: "Ноябрь–Апрель",
    descUz: "Tailand — ekzotik tabiat, qadimiy ibodatxonalar va mazali oshxona mamlakatdir. Phuket, Koh Samui va Pattaya plyajlarida dam oling. SEM Travel Toshkentdan Tailandga qulay va arzon tur paketlar taklif qiladi.",
    descRu: "Таиланд — страна экзотической природы, древних храмов и вкусной кухни. Отдохните на пляжах Пхукета, Ко Самуи и Паттайи. SEM Travel предлагает удобные и доступные туры из Ташкента в Таиланд.",
    highlightsUz: [
      "🏝️ Phuket — Tailandning eng mashhur oroli",
      "🛕 Buddist ibodatxonalari va ma'naviy sayohat",
      "🌊 Phi Phi orollariga qayiqda ekskursiya",
      "🥘 Tailand oshxonasi — pad thai, tom yum",
      "💆 Tailand massaji va spa muolajalari",
    ],
    highlightsRu: [
      "🏝️ Пхукет — самый известный остров Таиланда",
      "🛕 Буддийские храмы и духовное путешествие",
      "🌊 Экскурсия на острова Пхи-Пхи на лодке",
      "🥘 Тайская кухня — пад тай, том ям",
      "💆 Тайский массаж и спа-процедуры",
    ],
    faqs: [
      {
        qUz: "Tailandga viza kerakmi?",
        qRu: "Нужна ли виза в Таиланд?",
        aUz: "Yo'q, O'zbekiston fuqarolari Tailandga 30 kungacha vizasiz kirishi mumkin.",
        aRu: "Нет, граждане Узбекистана могут въезжать в Таиланд без визы до 30 дней.",
      },
      {
        qUz: "Tailand turi qancha turadi?",
        qRu: "Сколько стоит тур в Таиланд?",
        aUz: "Toshkentdan Tailand turlari $1290 dan boshlanadi (9 kecha, parvoz + mehmonxona).",
        aRu: "Туры в Таиланд из Ташкента от $1290 (9 ночей, перелёт + отель).",
      },
      {
        qUz: "Phuket yoki Pattaya — qaysi birini tanlash kerak?",
        qRu: "Пхукет или Паттайя — что выбрать?",
        aUz: "Juftliklar va oilalar uchun Phuket yaxshiroq. Tungi hayot uchun Pattaya.",
        aRu: "Для пар и семей лучше Пхукет. Для ночной жизни — Паттайя.",
      },
      {
        qUz: "Tailandga qachon borish yaxshi?",
        qRu: "Когда лучше ехать в Таиланд?",
        aUz: "Noyabr–Aprel — quruq mavsim, eng qulay havo. May–Oktyabr — yomg'ir mavsimi.",
        aRu: "Ноябрь–Апрель — сухой сезон, лучшая погода. Май–Октябрь — сезон дождей.",
      },
      {
        qUz: "Toshkentdan Phuketga necha soat?",
        qRu: "Сколько лететь из Ташкента в Пхукет?",
        aUz: "6–7 soat, odatda bir to'xtash bilan (Kuala Lumpur yoki Bangkok orqali).",
        aRu: "6–7 часов, обычно с одной пересадкой (через Куала-Лумпур или Бангкок).",
      },
    ],
    tourCountryMatch: "Tailand",
    tvCountryName: "Таиланд",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Tailand uchun alohida modul yarating
  },

  maldiv: {
    slug: "maldiv",
    nameUz: "Maldiv",
    nameRu: "Мальдивы",
    flag: "🇲🇻",
    heroImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=70",
    priceFrom: 2800,
    nightsRange: "6–10",
    visaUz: "Vizasiz (30 kun)",
    visaRu: "Безвизовый (30 дней)",
    flightHours: "~7–9 soat",
    bestSeasonUz: "Noyabr–Aprel",
    bestSeasonRu: "Ноябрь–Апрель",
    descUz: "Maldiv — jannat orollari, suv usti bungalovlar va tiniq ko'k dengiz. Orzular ta'tili uchun dunyodagi eng romantik joy. SEM Travel Toshkentdan Maldivga Premium tur paketlar taklif qiladi.",
    descRu: "Мальдивы — райские острова, бунгало на воде и кристально чистый океан. Самое романтичное место в мире для отпуска мечты. SEM Travel предлагает Premium туры из Ташкента на Мальдивы.",
    highlightsUz: [
      "🏠 Suv usti bungalovda tunash",
      "🐠 Shaffof lagunda snorkeling va diving",
      "🌅 Sunset — eng go'zal quyosh botishi",
      "💆 Spa va romantic dinner dengiz ustida",
      "🐋 Balina akulalar va toshbaqalar bilan suzish",
    ],
    highlightsRu: [
      "🏠 Ночёвка в бунгало на воде",
      "🐠 Снорклинг и дайвинг в прозрачной лагуне",
      "🌅 Закат — самый красивый в мире",
      "💆 Спа и романтический ужин над водой",
      "🐋 Плавание с китовыми акулами и черепахами",
    ],
    faqs: [
      {
        qUz: "Maldivga viza kerakmi?",
        qRu: "Нужна ли виза на Мальдивы?",
        aUz: "Yo'q, O'zbekiston fuqarolari 30 kungacha vizasiz kirishi mumkin.",
        aRu: "Нет, граждане Узбекистана могут въезжать без визы до 30 дней.",
      },
      {
        qUz: "Maldiv turi qancha turadi?",
        qRu: "Сколько стоит тур на Мальдивы?",
        aUz: "Toshkentdan Maldiv turlari $2800 dan boshlanadi (6 kecha, suv usti bungalov).",
        aRu: "Туры на Мальдивы из Ташкента от $2800 (6 ночей, бунгало на воде).",
      },
      {
        qUz: "Maldivda nima qilish mumkin?",
        qRu: "Что делать на Мальдивах?",
        aUz: "Snorkeling, diving, kajakda suzish, baliq ovlash, spa, suv usti restoran, quyosh botishini tomosha qilish.",
        aRu: "Снорклинг, дайвинг, каяк, рыбалка, спа, ресторан над водой, наблюдение за закатом.",
      },
      {
        qUz: "Maldivga qachon borish yaxshi?",
        qRu: "Когда лучше ехать на Мальдивы?",
        aUz: "Noyabr–Aprel — quruq mavsim, eng tiniq dengiz. May–Oktyabr — yomg'irli mavsim.",
        aRu: "Ноябрь–Апрель — сухой сезон, самый прозрачный океан. Май–Октябрь — сезон дождей.",
      },
      {
        qUz: "Maldiv honeymoon uchun qanday?",
        qRu: "Как Мальдивы для медового месяца?",
        aUz: "Maldiv dunyoning eng yaxshi honeymoon yo'nalishi. SEM Travel maxsus honeymoon paketlar taklif qiladi.",
        aRu: "Мальдивы — лучшее направление для медового месяца. SEM Travel предлагает специальные пакеты.",
      },
    ],
    tourCountryMatch: "Maldiv",
    tvCountryName: "Мальдивы",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Maldiv uchun alohida modul yarating
  },

  gretsiya: {
    slug: "gretsiya",
    nameUz: "Gretsiya",
    nameRu: "Греция",
    flag: "🇬🇷",
    heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=70",
    priceFrom: 1650,
    nightsRange: "6–9",
    visaUz: "Schengen viza kerak",
    visaRu: "Нужна Шенгенская виза",
    flightHours: "~6–7 soat",
    bestSeasonUz: "May–Oktyabr",
    bestSeasonRu: "Май–Октябрь",
    descUz: "Gretsiya — Santorini oq uylar, Ko'k gumbazlar va Egey dengizining moviy suvi. Tarix va go'zallik birlashtirgan bu mamlakat juftliklar va madaniyat sevuvchilar uchun ideal. SEM Travel Schengen vizasini ham rasmiylashtiradi.",
    descRu: "Греция — белые домики Санторини, синие купола и лазурь Эгейского моря. Страна, где объединились история и красота — идеально для пар и любителей культуры. SEM Travel также оформляет Шенгенскую визу.",
    highlightsUz: [
      "🏛️ Afina — Partenon va qadimiy tarix",
      "🌅 Santorini — dunyodagi eng chiroyli quyosh botishi",
      "🍷 Gretsiya sharob va taomlar",
      "⛵ Katamaran safari orollar orasida",
      "🏖️ Qora va qizil vulkanik plyajlar",
    ],
    highlightsRu: [
      "🏛️ Афины — Парфенон и древняя история",
      "🌅 Санторини — самый красивый закат в мире",
      "🍷 Греческие вина и традиционная кухня",
      "⛵ Морская прогулка на катамаране между островами",
      "🏖️ Чёрные и красные вулканические пляжи",
    ],
    faqs: [
      {
        qUz: "Gretsiyaga Schengen viza qanday olinadi?",
        qRu: "Как получить Шенгенскую визу в Грецию?",
        aUz: "SEM Travel Gretsiya Schengen vizasini rasmiylashtiradi. Pasport, bankdan ko'chirma va sug'urta kerak. 10–15 ish kuni.",
        aRu: "SEM Travel оформляет Шенгенскую визу в Грецию. Нужны паспорт, выписка из банка и страховка. 10–15 рабочих дней.",
      },
      {
        qUz: "Santorini turi qancha turadi?",
        qRu: "Сколько стоит тур в Санторини?",
        aUz: "Toshkentdan Santorini turlari $1650 dan boshlanadi (6 kecha, parvoz + mehmonxona).",
        aRu: "Туры в Санторини из Ташкента от $1650 (6 ночей, перелёт + отель).",
      },
      {
        qUz: "Gretsiyaga qachon borish yaxshi?",
        qRu: "Когда лучше ехать в Грецию?",
        aUz: "May–Oktyabr — dengiz mavsumi. Iyun–Avgust eng issiq va qimmat. May va Sentyabr eng qulay.",
        aRu: "Май–Октябрь — пляжный сезон. Июнь–Август самые жаркие и дорогие. Лучшее время — май и сентябрь.",
      },
      {
        qUz: "Santorini yoki Mykonos — qaysi biri yaxshiroq?",
        qRu: "Санторини или Миконос — что лучше?",
        aUz: "Romantik juftliklar uchun Santorini, tungi hayot va parta uchun Mykonos.",
        aRu: "Для романтических пар — Санторини, для вечеринок и ночной жизни — Миконос.",
      },
      {
        qUz: "Gretsiya turi qancha kun davom etadi?",
        qRu: "Сколько дней длится тур в Грецию?",
        aUz: "Odatda 6–9 kecha. Santorini + Afina kombinatsiyasi eng mashhuri.",
        aRu: "Обычно 6–9 ночей. Самый популярный вариант — комбинация Санторини + Афины.",
      },
    ],
    tourCountryMatch: "Gretsiya",
    tvCountryName: "Греция",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Gretsiya uchun alohida modul yarating
  },

  qirgiziston: {
    slug: "qirgiziston",
    nameUz: "Qirg'iziston",
    nameRu: "Кыргызстан",
    flag: "🇰🇬",
    heroImage: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=70",
    priceFrom: 420,
    nightsRange: "4–7",
    visaUz: "Viza kerak emas",
    visaRu: "Виза не нужна",
    flightHours: "~1 soat",
    bestSeasonUz: "Iyun–Sentyabr",
    bestSeasonRu: "Июнь–Сентябрь",
    descUz: "Qirg'iziston — O'zbekistondan eng yaqin tog' va tabiat sayohati. Issiq-Ko'l — dengiz sathidan 1 600 m balandlikda joylashgan alpina ko'li. Shaffof suv, qumli plyajlar, kanyonlar va tog' o'tloqlari. Vizasiz kirish, 1 soat parvoz — oila va sarguzasht izlovchilar uchun ideal.",
    descRu: "Кыргызстан — ближайшее горное и природное путешествие из Узбекистана. Иссык-Куль — горное озеро на высоте 1 600 м. Прозрачная вода, песчаные пляжи, каньоны и альпийские луга. Безвизовый въезд, 1 час перелёта — идеально для семей и любителей приключений.",
    highlightsUz: [
      "🏔️ Issiq-Ko'l — tog' ko'li (1 600 m)",
      "🏜️ Jeti-Oguz va Skazka kanyonlari",
      "🐎 At minish — qirg'iz an'analari",
      "🏖️ Cholpon-Ata qumli plyajlari",
      "🍖 Qirg'iz milliy taomlar (beshbarmak, kuurdak)",
    ],
    highlightsRu: [
      "🏔️ Иссык-Куль — горное озеро (1 600 м)",
      "🏜️ Каньоны Жети-Огуз и Сказка",
      "🐎 Конные прогулки — кыргызские традиции",
      "🏖️ Песчаные пляжи Чолпон-Аты",
      "🍖 Кыргызская кухня (бешбармак, куурдак)",
    ],
    faqs: [
      {
        qUz: "Qirg'izistonga viza kerakmi?",
        qRu: "Нужна ли виза в Кыргызстан?",
        aUz: "Yo'q, O'zbekiston fuqarolari Qirg'izistonga vizasiz kirishi mumkin.",
        aRu: "Нет, гражданам Узбекистана виза в Кыргызстан не нужна.",
      },
      {
        qUz: "Toshkentdan Issiq-Ko'lga qancha vaqt ketadi?",
        qRu: "Сколько времени добираться из Ташкента до Иссык-Куля?",
        aUz: "Parvoz bilan taxminan 1 soat, keyin transfer 2–3 soat. Jami 3–4 soat.",
        aRu: "Перелёт около 1 часа, затем трансфер 2–3 часа. Итого 3–4 часа.",
      },
      {
        qUz: "Issiq-Ko'lga qachon borish yaxshi?",
        qRu: "Когда лучше ехать на Иссык-Куль?",
        aUz: "Iyun–Sentyabr — plyaj mavsumi. Iyul–Avgust eng issiq. Iyun va Sentyabr esa kamroq odam va qulay havo.",
        aRu: "Июнь–Сентябрь — пляжный сезон. Июль–Август самые жаркие. Июнь и сентябрь — меньше людей и комфортная погода.",
      },
      {
        qUz: "Issiq-Ko'l turida nima ko'rish mumkin?",
        qRu: "Что можно посмотреть в туре на Иссык-Куль?",
        aUz: "Jeti-Oguz qizil qoyalari, Skazka kanyoni, Cholpon-Ata plyajlari, petroglif muzey, Karakol shahri va Ala-Archa milliy parki.",
        aRu: "Красные скалы Жети-Огуз, каньон Сказка, пляжи Чолпон-Аты, музей петроглифов, город Каракол и национальный парк Ала-Арча.",
      },
    ],
    tourCountryMatch: "Qirg'iziston",
    tvCountryName: "Кыргызстан",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Qirgiziston uchun alohida modul yarating
  },

  gruziya: {
    slug: "gruziya",
    nameUz: "Gruziya",
    nameRu: "Грузия",
    flag: "🇬🇪",
    heroImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=70",
    priceFrom: 680,
    nightsRange: "5–8",
    visaUz: "Viza kerak emas",
    visaRu: "Виза не нужна",
    flightHours: "~2.5 soat",
    bestSeasonUz: "Aprel–Oktyabr",
    bestSeasonRu: "Апрель–Октябрь",
    descUz: "Gruziya — tarix, tabiat va gastronomiyaning uyg'unligi. Tbilisi qadimiy ko'chalari, Batumining Qora dengiz plyajlari, Kazbegi tog'lari va noyob Gruziya sharoblari. Vizasiz kirish, 2.5 soat parvoz. SEM Travel Gruziyaga oila, juftlik va ekskursiya turlarini taklif qiladi.",
    descRu: "Грузия — сочетание истории, природы и гастрономии. Старинные улицы Тбилиси, черноморские пляжи Батуми, горы Казбеги и уникальные грузинские вина. Безвизовый въезд, 2.5 часа перелёта. SEM Travel предлагает семейные, романтические и экскурсионные туры в Грузию.",
    highlightsUz: [
      "🏰 Tbilisi — Narikala, Mtatsminda, oltingugurt hammomlar",
      "🏖️ Batumi — Qora dengiz plyaji va boulevard",
      "⛪ Kazbegi — Gergeti cherkovi (2 170 m)",
      "🍷 Gruziya sharob va qvevri an'analari",
      "🥟 Xinkali va xachapuri — milliy taomlar",
    ],
    highlightsRu: [
      "🏰 Тбилиси — Нарикала, Мтацминда, серные бани",
      "🏖️ Батуми — пляж Чёрного моря и бульвар",
      "⛪ Казбеги — церковь Гергети (2 170 м)",
      "🍷 Грузинское вино и традиции квеври",
      "🥟 Хинкали и хачапури — национальная кухня",
    ],
    faqs: [
      {
        qUz: "O'zbekistonliklar Gruziyaga vizasiz bora oladimi?",
        qRu: "Могут ли узбекистанцы ехать в Грузию без визы?",
        aUz: "Ha, O'zbekiston fuqarolari Gruziyaga 1 yilgacha vizasiz qolishi mumkin.",
        aRu: "Да, граждане Узбекистана могут находиться в Грузии до 1 года без визы.",
      },
      {
        qUz: "Tbilisi va Batumi — qaysi biri yaxshiroq?",
        qRu: "Тбилиси или Батуми — что лучше?",
        aUz: "Ikkalasi ham! SEM Travel ikkala shaharni birlashtirgan 7 kunlik to'liq tur taklif qiladi.",
        aRu: "Оба! SEM Travel предлагает полный 7-дневный тур, объединяющий оба города.",
      },
      {
        qUz: "Toshkentdan Gruziyaga parvoz qancha vaqt?",
        qRu: "Сколько лететь из Ташкента в Грузию?",
        aUz: "Tbilisiga taxminan 2.5 soat, Batumiga 2.5–3 soat.",
        aRu: "До Тбилиси около 2.5 часов, до Батуми 2.5–3 часа.",
      },
      {
        qUz: "Gruziya turi qancha turadi?",
        qRu: "Сколько стоит тур в Грузию?",
        aUz: "Toshkentdan Gruziya turlari $680 dan boshlanadi (6 kecha, parvoz + mehmonxona + nonushta).",
        aRu: "Туры в Грузию из Ташкента от $680 (6 ночей, перелёт + отель + завтрак).",
      },
    ],
    tourCountryMatch: "Gruziya",
    tvCountryName: "Грузия",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Gruziya uchun alohida modul yarating
  },

  xitoy: {
    slug: "xitoy",
    nameUz: "Xitoy",
    nameRu: "Китай",
    flag: "🇨🇳",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=70",
    priceFrom: 1200,
    nightsRange: "7–10",
    visaUz: "Viza kerak",
    visaRu: "Нужна виза",
    flightHours: "~5–6 soat",
    bestSeasonUz: "Mart–May, Sentyabr–Noyabr",
    bestSeasonRu: "Март–Май, Сентябрь–Ноябрь",
    descUz: "Xitoy — biznes va madaniy sayohat uchun noyob yo'nalish. Guangzhoudagi Kanton yarmarkasi, Pekindagi Buyuk Xitoy devori, Shanghai metropolisi. SEM Travel biznes visa, tarjimon va to'liq logistika xizmatlarini taklif qiladi. Ishbilarmon va savdogarlar uchun maxsus paketlar.",
    descRu: "Китай — уникальное направление для бизнеса и культурного туризма. Кантонская ярмарка в Гуанчжоу, Великая стена в Пекине, метрополис Шанхай. SEM Travel предлагает бизнес-визу, переводчика и полную логистику. Специальные пакеты для предпринимателей и торговцев.",
    highlightsUz: [
      "🏭 Guangzhou Kanton yarmarkasi (aprel, oktyabr)",
      "🏯 Pekin — Buyuk Xitoy devori va Yashmiy saroy",
      "🌆 Shanghai — Bund va Pudong ko'tarilgichlari",
      "🗣️ Biznes tarjimon (UZ/RU–ZH)",
      "📋 Biznes viza rasmiylashtirish xizmati",
    ],
    highlightsRu: [
      "🏭 Гуанчжоу — Кантонская ярмарка (апрель, октябрь)",
      "🏯 Пекин — Великая стена и Запретный город",
      "🌆 Шанхай — Бунд и смотровые площадки Пудуна",
      "🗣️ Бизнес-переводчик (UZ/RU–ZH)",
      "📋 Оформление бизнес-визы в Китай",
    ],
    faqs: [
      {
        qUz: "Xitoyga biznes viza qanday olinadi?",
        qRu: "Как получить бизнес-визу в Китай?",
        aUz: "SEM Travel biznes viza uchun barcha hujjatlarni to'playdi va rasmiylashtiruv jarayonini nazorat qiladi. Odatda 5–10 ish kuni.",
        aRu: "SEM Travel собирает все документы и контролирует процесс оформления бизнес-визы. Обычно 5–10 рабочих дней.",
      },
      {
        qUz: "Kanton yarmarkasi qachon bo'ladi?",
        qRu: "Когда проходит Кантонская ярмарка?",
        aUz: "Kanton yarmarkasi yiliga ikki marta: aprel (1–5-faza) va oktyabr (1–3-faza) oylarida bo'ladi.",
        aRu: "Кантонская ярмарка проходит дважды в год: апрель (фазы 1–5) и октябрь (фазы 1–3).",
      },
      {
        qUz: "Xitoy turida tarjimon xizmati bormi?",
        qRu: "Есть ли переводчик в туре по Китаю?",
        aUz: "Ha, SEM Travel rus va o'zbek tillaridan xitoy tiliga tarjimon xizmatini taqdim etadi.",
        aRu: "Да, SEM Travel предоставляет услуги переводчика с русского и узбекского на китайский.",
      },
      {
        qUz: "Guangzhoudan Pekinga qanday o'tish mumkin?",
        qRu: "Как добраться из Гуанчжоу в Пекин?",
        aUz: "Tezkor poyezd (2.5 soat) yoki ichki parvoz (3 soat). SEM Travel transferni to'liq tashkil qiladi.",
        aRu: "Скоростной поезд (2.5 часа) или внутренний перелёт (3 часа). SEM Travel полностью организует трансфер.",
      },
    ],
    tourCountryMatch: "Xitoy",
    tvCountryName: "Китай",
    tvModuleId: "9976360", // TODO: Tourvisor adminida Xitoy uchun alohida modul yarating
  },
};

export const DESTINATION_SLUGS = Object.keys(DESTINATIONS);
