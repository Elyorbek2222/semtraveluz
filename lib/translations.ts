export type Lang = "uz" | "ru";

export interface Translations {
  nav: {
    tours: string;
    destinations: string;
    visa: string;
    hotels: string;
    about: string;
    contact: string;
    bookNow: string;
    phone: string;
  };
  hero: {
    badge: string;
    heading1: string;
    heading2: string;
    sub: string;
    tabTours: string;
    tabHotels: string;
    tabVisa: string;
    searchWhere: string;
    searchDate: string;
    searchPeople: string;
    searchBtn: string;
    popular: string;
    trust: {
      clients: string;
      years: string;
      countries: string;
      support: string;
    };
  };
  hotTours: {
    badge: string;
    title: string;
    subtitle: string;
    seeAll: string;
    found: string;
    limited: string;
    clearFilters: string;
    notFound: string;
    showMore: string;
    viewGrid: string;
    viewList: string;
    categories: {
      all: string;
      beach: string;
      allInclusive: string;
      culture: string;
      adventure: string;
      family: string;
      couple: string;
    };
    sort: {
      label: string;
      popular: string;
      priceAsc: string;
      priceDesc: string;
      rating: string;
      discount: string;
    };
    budget: {
      label: string;
      all: string;
      under500: string;
      from500to1000: string;
      from1000to1500: string;
      over1500: string;
    };
    stats: {
      countries: string;
      clients: string;
      tours: string;
      experience: string;
    };
    trust: {
      priceGuarantee: string;
      securePay: string;
      support: string;
      visa: string;
    };
  };
  tourCard: {
    book: string;
    perPerson: string;
    watching: string;
    spotsLeft: string;
    dealEnds: string;
    badges: {
      travelersChoice: string;
      hot: string;
      sale: string;
      new: string;
      bestValue: string;
    };
    includes: {
      flight: string;
      hotel: string;
      meals: string;
      transfer: string;
      guide: string;
      insurance: string;
    };
  };
  booking: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    tour: string;
    date: string;
    people: string;
    comment: string;
    commentPlaceholder: string;
    submit: string;
    whatsapp: string;
    close: string;
    success: string;
    successSub: string;
    errors: {
      name: string;
      phone: string;
    };
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      city: string;
      tour: string;
      text: string;
    }>;
  };
  about: {
    heroBadge: string;
    heroTitle: string;
    heroSub: string;
    whoTitle: string;
    whoText: string;
    teamTitle: string;
    valuesTitle: string;
    values: Array<{ title: string; text: string }>;
    team: Array<{ name: string; role: string }>;
    ctaTitle: string;
    ctaBtn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    orContact: string;
    infoTitle: string;
    address: string;
    hours: string;
    email: string;
    success: string;
  };
  visa: {
    heroBadge: string;
    heroTitle: string;
    heroSub: string;
    typesTitle: string;
    processTitle: string;
    processSteps: Array<{ title: string; desc: string }>;
    docsTitle: string;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
    difficulty: { easy: string; medium: string; hard: string };
    days: string;
    from: string;
    faqTitle: string;
  };
  footer: {
    description: string;
    linksTitle: string;
    contactTitle: string;
    rights: string;
    address: string;
    hours: string;
  };
  common: {
    backToTours: string;
    notFound: string;
    loading: string;
    nights: string;
    days: string;
    from: string;
    person: string;
    stars: string;
    home: string;
    tours: string;
    readMore: string;
    close: string;
  };
}

export const translations: Record<Lang, Translations> = {
  uz: {
    nav: {
      tours: "Turlar",
      destinations: "Yo'nalishlar",
      visa: "Viza",
      hotels: "Mehmonxona",
      about: "Haqimizda",
      contact: "Bog'lanish",
      bookNow: "Bron qilish",
      phone: "+998 71 275-55-55",
    },
    hero: {
      badge: "15 yildan ortiq tajriba",
      heading1: "Orzu sayohatingizni",
      heading2: "biz bilan amalga oshiring",
      sub: "50+ mamlakatga tur paketlar, viza yordam, mehmonxona va aviabilet. Ishonchli — arzon — qulay.",
      tabTours: "Turlar",
      tabHotels: "Mehmonxona",
      tabVisa: "Viza",
      searchWhere: "Qayerga borasiz?",
      searchDate: "Sana",
      searchPeople: "Necha kishi",
      searchBtn: "Qidirish",
      popular: "Mashhur yo'nalishlar:",
      trust: {
        clients: "30 000+ mamnun mijoz",
        years: "15 yil tajriba",
        countries: "50+ mamlakat",
        support: "24/7 yordam",
      },
    },
    hotTours: {
      badge: "🔥 Maxsus takliflar",
      title: "Issiq turlar",
      subtitle: "Eng arzon narxlardagi eng mashhur yo'nalishlar — bugun bron qiling!",
      seeAll: "Barchasini ko'rish →",
      found: "ta tur topildi",
      limited: "⚡ Ba'zi takliflar cheklangan vaqtgacha!",
      clearFilters: "Filtrlarni tozalash",
      notFound: "Bu filtr bo'yicha turlar topilmadi.",
      showMore: "Yana {n} ta tur ko'rish",
      viewGrid: "Grid",
      viewList: "Ro'yxat",
      categories: {
        all: "Barchasi",
        beach: "Plyaj",
        allInclusive: "All Inclusive",
        culture: "Madaniy",
        adventure: "Sarguzasht",
        family: "Oilaviy",
        couple: "Juftlik",
      },
      sort: {
        label: "Saralash:",
        popular: "Mashhurlik",
        priceAsc: "Arzon ↑",
        priceDesc: "Qimmat ↓",
        rating: "Reyting",
        discount: "Chegirma",
      },
      budget: {
        label: "Byudjet:",
        all: "Barchasi",
        under500: "$500 gacha",
        from500to1000: "$500–$1000",
        from1000to1500: "$1000–$1500",
        over1500: "$1500+",
      },
      stats: {
        countries: "Mamlakat",
        clients: "Mamnun mijozlar",
        tours: "Tur paketlar",
        experience: "Tajriba",
      },
      trust: {
        priceGuarantee: "Narx kafolati — boshqajoyi arzonroq bo'lsa qaytaramiz",
        securePay: "100% xavfsiz to'lov",
        support: "24/7 mijozlarga xizmat",
        visa: "Viza yordami",
      },
    },
    tourCard: {
      book: "Bron qilish",
      perPerson: "kishi boshiga",
      watching: "kishi ko'rmoqda",
      spotsLeft: "Faqat {n} o'rin!",
      dealEnds: "Taklif tugadi:",
      badges: {
        travelersChoice: "Mijozlar tanlovi",
        hot: "Issiq taklif",
        sale: "Chegirma",
        new: "Yangi",
        bestValue: "Eng arzon",
      },
      includes: {
        flight: "Parvoz",
        hotel: "Mehmonxona",
        meals: "Ovqat",
        transfer: "Transfer",
        guide: "Gid",
        insurance: "Sug'urta",
      },
    },
    booking: {
      title: "Tur bron qilish",
      subtitle: "Telegramga so'rov yuboring — 15 daqiqada javob beramiz",
      name: "Ismingiz",
      namePlaceholder: "To'liq ism",
      phone: "Telefon raqam",
      phonePlaceholder: "+998 90 123-45-67",
      tour: "Tur nomi",
      date: "Jo'nash sanasi",
      people: "Kishilar soni",
      comment: "Qo'shimcha izoh",
      commentPlaceholder: "Savollar yoki maxsus talablar...",
      submit: "📩 Telegramga yuborish",
      whatsapp: "💬 WhatsApp orqali",
      close: "Yopish",
      success: "So'rovingiz yuborildi!",
      successSub: "Tez orada menejerimiz siz bilan bog'lanadi.",
      errors: {
        name: "Ism kamida 2 ta harf bo'lishi kerak",
        phone: "To'g'ri telefon raqam kiriting",
      },
    },
    testimonials: {
      badge: "Mijozlarimiz",
      title: "Ular biz haqimizda nima deyishadi",
      subtitle: "30 000+ mamnun sayohatchi bizga ishonadi",
      items: [
        {
          name: "Dilnoza Yusupova",
          city: "Toshkent",
          tour: "Antalya All Inclusive",
          text: "SEM Travel bilan Antalyaga borishimiz ajoyib bo'ldi! Hamma narsa o'z vaqtida, mehmonxona zo'r edi. Keyingi safar ham albatta shu agentlik orqali boramiz!",
        },
        {
          name: "Bobur Xasanov",
          city: "Samarqand",
          tour: "Dubai City Tour",
          text: "Dubayga visa ham, tur ham shu yerdan oldik. Hammasi 3 kun ichida hal bo'ldi. Narxlari boshqalarga qaraganda ancha arzon. Tavsiya qilaman!",
        },
        {
          name: "Malika Rahimova",
          city: "Farg'ona",
          tour: "Tailand Phuket",
          text: "Birinchi marta chet elga chiqishim edi, juda qo'rqardim. Lekin SEM Travel menejerlari hamma narsani tushuntirdi. Tailand go'zal, albatta qaytaman!",
        },
        {
          name: "Jasur Mirzayev",
          city: "Toshkent",
          tour: "Misr Hurghada",
          text: "Oilamiz bilan Misrga bordik, 2 ta farzandimiz ham bor edi. Hamma narsa mukammal uyushtirildi. Bolalar juda xursand bo'lishdi. Rahmat SEM Travel!",
        },
        {
          name: "Sarvinoz Toshmatova",
          city: "Namangan",
          tour: "Maldives Premium",
          text: "To'yimizni Maldivda o'tkazdik — orzuimiz ro'yobga chiqdi! SEM Travel bizga maxsus honeymoon paket yasab berdi. Hayotimizdagi eng yaxshi sayohat!",
        },
      ],
    },
    about: {
      heroBadge: "Biz haqimizda",
      heroTitle: "SEM Travel — ishonchli sayohat sherigingiz",
      heroSub: "2011 yildan beri o'zbekistonliklarni dunyo bo'ylab olib boramiz",
      whoTitle: "Biz kimiz?",
      whoText:
        "SEM Travel — 2011 yildan beri O'zbekistonda faoliyat yuritayotgan litsenziyalangan sayohat agentligi. Biz 50+ mamlakatga tur paketlar, viza yordam, mehmonxona bron va aviabilet xizmatlarini ko'rsatamiz. 15 yillik tajribamiz davomida 30 000 dan ortiq mijozimizga xizmat qildik va ularning ishonchini qozonishga muvaffaq bo'ldik. Bizning asosiy maqsadimiz — har bir mijozga sifatli va arzon sayohat tajribasini taqdim etish.",
      teamTitle: "Bizning jamoa",
      valuesTitle: "Bizning qadriyatlar",
      values: [
        {
          title: "Ishonchlilik",
          text: "15 yillik tajriba va 30 000+ mamnun mijoz — bu bizning eng yaxshi tavsiyanomadir.",
        },
        {
          title: "Narx kafolati",
          text: "Boshqa agentlikda arzonroq topsangiz, farqini qaytaramiz. Bu bizning va'damiz.",
        },
        {
          title: "24/7 Yordam",
          text: "Sayohat paytida muammo chiqsa, tungi soat 3 da ham chaqiravering — javob beramiz.",
        },
      ],
      team: [
        { name: "Sherzod Ergashev", role: "Bosh direktor" },
        { name: "Munira Qodirov", role: "Tur menejeri" },
        { name: "Eldor Nazarov", role: "Viza bo'limi" },
        { name: "Gulnora Xoliqova", role: "Mijozlar bilan ishlash" },
      ],
      ctaTitle: "Birinchi sayohatingizni biz bilan boshlang",
      ctaBtn: "Bepul maslahat olish",
    },
    contact: {
      title: "Bog'lanish",
      subtitle: "Savollaringiz bormi? Biz har doim yordam berishga tayyormiz",
      formTitle: "Xabar yuborish",
      name: "Ismingiz",
      namePlaceholder: "To'liq ism",
      phone: "Telefon",
      phonePlaceholder: "+998 90 123-45-67",
      message: "Xabaringiz",
      messagePlaceholder: "Savol yoki murojaat...",
      submit: "📩 Telegramga yuborish",
      orContact: "Yoki to'g'ridan-to'g'ri bog'laning:",
      infoTitle: "Aloqa ma'lumotlari",
      address: "Toshkent, Olmazor, Kattahirmontepa 12a/1, Park City J-K",
      hours: "Dush–Shan: 9:00 – 19:00",
      email: "semtraveluz@mail.ru",
      success: "Xabaringiz yuborildi! Tez orada bog'lanamiz.",
    },
    visa: {
      heroBadge: "Viza xizmatlari",
      heroTitle: "Viza olishda professional yordam",
      heroSub:
        "Hujjatlarni tayyorlash, ariza topshirish va kuzatib borish — biz hamma narsani hal qilamiz",
      typesTitle: "Qaysi mamlakatga viza olishingiz mumkin?",
      processTitle: "Qanday ishlaydi?",
      processSteps: [
        {
          title: "Maslahat",
          desc: "Biz siz bilan bog'lanib, kerakli viza turi va hujjatlar ro'yxatini tushuntiramiz",
        },
        {
          title: "Hujjatlar",
          desc: "Zarur hujjatlarni tayyorlashda yordam beramiz va tekshirib chiqamiz",
        },
        {
          title: "Topshirish",
          desc: "Arjani o'z vaqtida va to'g'ri topshiramiz, elchixona bilan muloqot qilamiz",
        },
        {
          title: "Viza tayyor!",
          desc: "Viza tayyor bo'lganda sizga xabar beramiz va hujjatlarni topshiramiz",
        },
      ],
      docsTitle: "Kerakli hujjatlar",
      ctaTitle: "Viza masalasida yordam kerakmi?",
      ctaSub: "Bepul maslahat uchun hoziroq murojaat qiling",
      ctaBtn: "Bepul maslahat olish",
      difficulty: { easy: "Oson", medium: "O'rtacha", hard: "Qiyin" },
      days: "kun",
      from: "dan boshlab",
      faqTitle: "Ko'p so'raladigan savollar",
    },
    footer: {
      description:
        "O'zbekistondagi eng ishonchli sayohat agentligi. 2011 yildan beri 30 000+ mijozga xizmat qilganmiz.",
      linksTitle: "Foydali havolalar",
      contactTitle: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
      address: "Toshkent, Olmazor, Kattahirmontepa 12a/1",
      hours: "Dush–Shan: 9:00–19:00",
    },
    common: {
      backToTours: "← Turlarga qaytish",
      notFound: "Sahifa topilmadi",
      loading: "Yuklanmoqda...",
      nights: "kecha",
      days: "kun",
      from: "dan",
      person: "kishi",
      stars: "yulduz",
      home: "Bosh sahifa",
      tours: "Turlar",
      readMore: "Batafsil",
      close: "Yopish",
    },
  },

  ru: {
    nav: {
      tours: "Туры",
      destinations: "Направления",
      visa: "Виза",
      hotels: "Отели",
      about: "О нас",
      contact: "Контакты",
      bookNow: "Забронировать",
      phone: "+998 71 275-55-55",
    },
    hero: {
      badge: "Более 15 лет опыта",
      heading1: "Путешествие мечты",
      heading2: "вместе с нами",
      sub: "Туры в 50+ стран, помощь с визой, отели и авиабилеты. Надёжно — дёшево — удобно.",
      tabTours: "Туры",
      tabHotels: "Отели",
      tabVisa: "Виза",
      searchWhere: "Куда хотите поехать?",
      searchDate: "Дата",
      searchPeople: "Кол-во человек",
      searchBtn: "Поиск",
      popular: "Популярные направления:",
      trust: {
        clients: "30 000+ довольных клиентов",
        years: "15 лет опыта",
        countries: "50+ стран",
        support: "Поддержка 24/7",
      },
    },
    hotTours: {
      badge: "🔥 Горящие предложения",
      title: "Горящие туры",
      subtitle: "Самые популярные направления по лучшим ценам — бронируйте сегодня!",
      seeAll: "Смотреть все →",
      found: "тур(ов) найдено",
      limited: "⚡ Некоторые предложения ограничены по времени!",
      clearFilters: "Сбросить фильтры",
      notFound: "Туры по этому фильтру не найдены.",
      showMore: "Показать ещё {n} туров",
      viewGrid: "Сетка",
      viewList: "Список",
      categories: {
        all: "Все",
        beach: "Пляж",
        allInclusive: "Всё включено",
        culture: "Культура",
        adventure: "Приключения",
        family: "Семейный",
        couple: "Для двоих",
      },
      sort: {
        label: "Сортировка:",
        popular: "Популярность",
        priceAsc: "Цена ↑",
        priceDesc: "Цена ↓",
        rating: "Рейтинг",
        discount: "Скидка",
      },
      budget: {
        label: "Бюджет:",
        all: "Любой",
        under500: "до $500",
        from500to1000: "$500–$1000",
        from1000to1500: "$1000–$1500",
        over1500: "от $1500",
      },
      stats: {
        countries: "Стран",
        clients: "Довольных клиентов",
        tours: "Турпакетов",
        experience: "Лет опыта",
      },
      trust: {
        priceGuarantee: "Гарантия цены — найдёте дешевле, вернём разницу",
        securePay: "100% безопасная оплата",
        support: "Поддержка клиентов 24/7",
        visa: "Помощь с визой",
      },
    },
    tourCard: {
      book: "Забронировать",
      perPerson: "с человека",
      watching: "смотрит(ят)",
      spotsLeft: "Осталось {n} мест!",
      dealEnds: "Акция истекает:",
      badges: {
        travelersChoice: "Выбор путешественников",
        hot: "Горящий тур",
        sale: "Скидка",
        new: "Новый",
        bestValue: "Лучшая цена",
      },
      includes: {
        flight: "Перелёт",
        hotel: "Отель",
        meals: "Питание",
        transfer: "Трансфер",
        guide: "Гид",
        insurance: "Страховка",
      },
    },
    booking: {
      title: "Бронирование тура",
      subtitle: "Отправьте заявку в Telegram — ответим за 15 минут",
      name: "Ваше имя",
      namePlaceholder: "Полное имя",
      phone: "Номер телефона",
      phonePlaceholder: "+998 90 123-45-67",
      tour: "Название тура",
      date: "Дата вылета",
      people: "Количество человек",
      comment: "Дополнительный комментарий",
      commentPlaceholder: "Вопросы или особые пожелания...",
      submit: "📩 Отправить в Telegram",
      whatsapp: "💬 Через WhatsApp",
      close: "Закрыть",
      success: "Заявка отправлена!",
      successSub: "Наш менеджер свяжется с вами в ближайшее время.",
      errors: {
        name: "Имя должно содержать минимум 2 символа",
        phone: "Введите корректный номер телефона",
      },
    },
    testimonials: {
      badge: "Отзывы клиентов",
      title: "Что говорят о нас",
      subtitle: "Более 30 000 довольных путешественников доверяют нам",
      items: [
        {
          name: "Дилноза Юсупова",
          city: "Ташкент",
          tour: "Анталья All Inclusive",
          text: "Отдых в Анталье с SEM Travel прошёл великолепно! Всё было вовремя, отель отличный. В следующий раз снова обратимся к ним!",
        },
        {
          name: "Бобур Хасанов",
          city: "Самарканд",
          tour: "Дубай City Tour",
          text: "Визу и тур в Дубай оформили здесь. Всё решилось за 3 дня. Цены намного ниже, чем в других агентствах. Рекомендую!",
        },
        {
          name: "Малика Рахимова",
          city: "Фергана",
          tour: "Таиланд Пхукет",
          text: "Первый раз ехала за границу, очень волновалась. Но менеджеры SEM Travel всё объяснили. Таиланд — это сказка, обязательно вернусь!",
        },
        {
          name: "Жасур Мирзаев",
          city: "Ташкент",
          tour: "Египет Хургада",
          text: "Ездили всей семьёй в Египет, у нас двое детей. Всё было организовано идеально. Дети были в восторге. Спасибо SEM Travel!",
        },
        {
          name: "Сарвиноз Тошматова",
          city: "Наманган",
          tour: "Мальдивы Premium",
          text: "Провели свадебное путешествие на Мальдивах — мечта сбылась! SEM Travel сделали для нас специальный honeymoon пакет. Лучшее путешествие в жизни!",
        },
      ],
    },
    about: {
      heroBadge: "О нас",
      heroTitle: "SEM Travel — ваш надёжный партнёр в путешествиях",
      heroSub: "С 2011 года помогаем узбекистанцам путешествовать по всему миру",
      whoTitle: "Кто мы?",
      whoText:
        "SEM Travel — лицензированное туристическое агентство в Узбекистане, работающее с 2011 года. Мы предоставляем услуги по турпакетам в 50+ странах, помощи с визами, бронированию отелей и авиабилетов. За 15 лет работы мы обслужили более 30 000 клиентов и завоевали их доверие. Наша главная цель — предоставить каждому клиенту качественный и доступный опыт путешествий.",
      teamTitle: "Наша команда",
      valuesTitle: "Наши ценности",
      values: [
        {
          title: "Надёжность",
          text: "15 лет опыта и 30 000+ довольных клиентов — это наша лучшая рекомендация.",
        },
        {
          title: "Гарантия цены",
          text: "Найдёте дешевле в другом агентстве — вернём разницу. Это наше обещание.",
        },
        {
          title: "Поддержка 24/7",
          text: "Если во время поездки возникнет проблема, звоните в 3 ночи — мы ответим.",
        },
      ],
      team: [
        { name: "Шерзод Эргашев", role: "Генеральный директор" },
        { name: "Мунира Кодирова", role: "Менеджер по турам" },
        { name: "Элдор Назаров", role: "Визовый отдел" },
        { name: "Гулнора Холикова", role: "Работа с клиентами" },
      ],
      ctaTitle: "Начните своё первое путешествие с нами",
      ctaBtn: "Получить бесплатную консультацию",
    },
    contact: {
      title: "Контакты",
      subtitle: "Есть вопросы? Мы всегда готовы помочь",
      formTitle: "Отправить сообщение",
      name: "Ваше имя",
      namePlaceholder: "Полное имя",
      phone: "Телефон",
      phonePlaceholder: "+998 90 123-45-67",
      message: "Сообщение",
      messagePlaceholder: "Вопрос или обращение...",
      submit: "📩 Отправить в Telegram",
      orContact: "Или свяжитесь напрямую:",
      infoTitle: "Контактная информация",
      address: "Ташкент, Олмазор, Каттахирмонтепа 12а/1, Park City J-K",
      hours: "Пн–Сб: 9:00 – 19:00",
      email: "semtraveluz@mail.ru",
      success: "Сообщение отправлено! Скоро свяжемся с вами.",
    },
    visa: {
      heroBadge: "Визовые услуги",
      heroTitle: "Профессиональная помощь с визой",
      heroSub:
        "Подготовка документов, подача заявки и сопровождение — мы решаем всё за вас",
      typesTitle: "В какие страны вы можете получить визу?",
      processTitle: "Как это работает?",
      processSteps: [
        {
          title: "Консультация",
          desc: "Мы свяжемся с вами и объясним тип визы и список необходимых документов",
        },
        {
          title: "Документы",
          desc: "Поможем подготовить и проверить все необходимые документы",
        },
        {
          title: "Подача",
          desc: "Подадим заявку вовремя и правильно, общаемся с посольством за вас",
        },
        {
          title: "Виза готова!",
          desc: "Когда виза будет готова, сообщим вам и передадим документы",
        },
      ],
      docsTitle: "Необходимые документы",
      ctaTitle: "Нужна помощь с визой?",
      ctaSub: "Обратитесь прямо сейчас для бесплатной консультации",
      ctaBtn: "Получить бесплатную консультацию",
      difficulty: { easy: "Легко", medium: "Средне", hard: "Сложно" },
      days: "дней",
      from: "от",
      faqTitle: "Часто задаваемые вопросы",
    },
    footer: {
      description:
        "Самое надёжное туристическое агентство в Узбекистане. С 2011 года обслужили 30 000+ клиентов.",
      linksTitle: "Полезные ссылки",
      contactTitle: "Контакты",
      rights: "Все права защищены.",
      address: "Ташкент, Олмазор, Каттахирмонтепа 12а/1",
      hours: "Пн–Сб: 9:00–19:00",
    },
    common: {
      backToTours: "← Назад к турам",
      notFound: "Страница не найдена",
      loading: "Загрузка...",
      nights: "ночей",
      days: "дней",
      from: "от",
      person: "чел.",
      stars: "звёзд",
      home: "Главная",
      tours: "Туры",
      readMore: "Подробнее",
      close: "Закрыть",
    },
  },
};
