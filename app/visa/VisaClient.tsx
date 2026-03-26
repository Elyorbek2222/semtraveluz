"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { sendLead } from "@/lib/send-lead";

// ── VIZASIZ DAVLATLAR ──────────────────────────────────────────────────────
const vizaFreeGroups = [
  {
    id: "cis",
    emoji: "🏔️",
    uz: "MDH va Yaqin qo'shnilar",
    ru: "СНГ и ближнее зарубежье",
    countries: [
      { flag: "🇬🇪", uz: "Gruziya", ru: "Грузия", daysUz: "365 kun", daysRu: "365 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇹🇷", uz: "Turkiya", ru: "Турция", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇰🇿", uz: "Qozog'iston", ru: "Казахстан", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇰🇬", uz: "Qirg'iziston", ru: "Кыргызстан", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇹🇯", uz: "Tojikiston", ru: "Таджикистан", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇦🇲", uz: "Armaniston", ru: "Армения", daysUz: "180 kun", daysRu: "180 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇧🇾", uz: "Belarus", ru: "Беларусь", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇷🇺", uz: "Rossiya", ru: "Россия", daysUz: "90 kun", daysRu: "90 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇦🇿", uz: "Ozarbayjon", ru: "Азербайджан", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇲🇩", uz: "Moldova", ru: "Молдова", daysUz: "90 kun", daysRu: "90 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
    ],
  },
  {
    id: "asia",
    emoji: "🌏",
    uz: "Osiyo va Janubi-sharqiy Osiyo",
    ru: "Азия и Юго-Восточная Азия",
    countries: [
      { flag: "🇹🇭", uz: "Tailand", ru: "Таиланд", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇲🇾", uz: "Malayziya", ru: "Малайзия", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇮🇩", uz: "Indoneziya", ru: "Индонезия", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Chegara vizasi (bepul)", typeRu: "Виза по прилёту (бесплатно)" },
      { flag: "🇲🇻", uz: "Maldiv", ru: "Мальдивы", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Chegara vizasi (bepul)", typeRu: "Виза по прилёту (бесплатно)" },
      { flag: "🇻🇳", uz: "Vyetnam", ru: "Вьетнам", daysUz: "45 kun", daysRu: "45 дней", typeUz: "E-viza (bepul)", typeRu: "Э-виза (бесплатно)" },
      { flag: "🇰🇭", uz: "Kambodja", ru: "Камбоджа", daysUz: "30 kun", daysRu: "30 дней", typeUz: "E-viza ($30)", typeRu: "Э-виза ($30)" },
      { flag: "🇱🇦", uz: "Laos", ru: "Лаос", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Chegara vizasi ($35)", typeRu: "Виза по прилёту ($35)" },
    ],
  },
  {
    id: "europe",
    emoji: "🇪🇺",
    uz: "Yevropa (vizasiz)",
    ru: "Европа (без визы)",
    countries: [
      { flag: "🇷🇸", uz: "Serbiya", ru: "Сербия", daysUz: "90 kun", daysRu: "90 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇧🇦", uz: "Bosniya va Gersegovina", ru: "Босния и Герцеговина", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇲🇪", uz: "Chernogoriya", ru: "Черногория", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇦🇱", uz: "Albaniya", ru: "Албания", daysUz: "90 kun", daysRu: "90 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
      { flag: "🇲🇰", uz: "Shimoliy Makedoniya", ru: "Северная Македония", daysUz: "90 kun", daysRu: "90 дней", typeUz: "Vizasiz", typeRu: "Без визы" },
    ],
  },
  {
    id: "other",
    emoji: "🌍",
    uz: "Boshqa mamlakatlar",
    ru: "Другие страны",
    countries: [
      { flag: "🇪🇬", uz: "Misr", ru: "Египет", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Chegara vizasi ($25)", typeRu: "Виза по прилёту ($25)" },
      { flag: "🇯🇴", uz: "Iordaniya", ru: "Иордания", daysUz: "30 kun", daysRu: "30 дней", typeUz: "Chegara vizasi ($20)", typeRu: "Виза по прилёту ($20)" },
      { flag: "🇳🇵", uz: "Nepal", ru: "Непал", daysUz: "90 kun", daysRu: "90 дней", typeUz: "Chegara vizasi ($25–100)", typeRu: "Виза по прилёту ($25–100)" },
      { flag: "🇱🇰", uz: "Shri-Lanka", ru: "Шри-Ланка", daysUz: "30 kun", daysRu: "30 дней", typeUz: "E-viza (bepul)", typeRu: "Э-виза (бесплатно)" },
      { flag: "🇰🇪", uz: "Keniya", ru: "Кения", daysUz: "90 kun", daysRu: "90 дней", typeUz: "E-viza ($32)", typeRu: "Э-виза ($32)" },
      { flag: "🇹🇿", uz: "Tanzaniya", ru: "Танзания", daysUz: "90 kun", daysRu: "90 дней", typeUz: "Chegara vizasi ($50)", typeRu: "Виза по прилёту ($50)" },
    ],
  },
];

// ── VIZA TURLARI (TABS) ────────────────────────────────────────────────────
const visaTabs = [
  {
    id: "schengen",
    flag: "🇪🇺",
    uz: "Schengen",
    ru: "Шенген",
    countriesUz: "Germaniya, Fransiya, Italiya, Ispaniya, Gretsiya, Niderlandiya, Avstriya, Belgiya, Shvetsiya, Shveytsariya, Polsha va yana 15+ Yevropa davlati",
    countriesRu: "Германия, Франция, Италия, Испания, Греция, Нидерланды, Австрия, Бельгия, Швеция, Швейцария, Польша и ещё 15+ стран Европы",
    processingUz: "15–20 ish kuni",
    processingRu: "15–20 рабочих дней",
    validityUz: "1-90 kun (so'ralgan muddatga)",
    validityRu: "1–90 дней (по запросу)",
    agencyPriceUz: "3 000 000 so'm",
    agencyPriceRu: "3 000 000 сум",
    consularFeeUz: "+ 80 Yevro (elchixona yig'imi)",
    consularFeeRu: "+ 80 евро (консульский сбор)",
    successUz: "~82%",
    successRu: "~82%",
    docsUz: ["Zaграnpasport (kamida 6 oy muddatli)", "Biometrik foto (3.5×4.5 sm)", "Bank ko'chirmasi (3 oy)", "Ish joyi ma'lumotnomasi", "Aviabilet bron (borish-kelish)", "Mehmonxona bron", "Sayohat sug'urtasi (min. 30 000 Yevro)", "Viza anketa to'ldirish"],
    docsRu: ["Загранпаспорт (не менее 6 мес.)", "Биометрическое фото (3.5×4.5 см)", "Выписка из банка (3 месяца)", "Справка с места работы", "Бронь авиабилета (туда-обратно)", "Бронирование отеля", "Медицинская страховка (мин. 30 000 €)", "Заполнение визовой анкеты"],
    tipsUz: ["Viza uchun ariza elchixona yoki Schengen vizasi markaziga topshiriladi", "Birinchi bor uchun 1 oylik viza berilishi mumkin", "Ko'p sayohat tarixi vizani olishni osonlashtiradi"],
    tipsRu: ["Заявка подаётся в посольство или визовый центр Шенгена", "Первый раз могут выдать на 1 месяц", "История поездок упрощает получение визы"],
  },
  {
    id: "usa",
    flag: "🇺🇸",
    uz: "AQSh viza",
    ru: "США — B1/B2",
    countriesUz: "Amerika Qo'shma Shtatlari — turizm (B2) va biznes (B1) uchun",
    countriesRu: "США — для туризма (B2) и бизнеса (B1)",
    processingUz: "30–90 kun (intervyu sanasiga bog'liq)",
    processingRu: "30–90 дней (зависит от даты интервью)",
    validityUz: "6 oydan 10 yilgacha (ko'p marta kirish)",
    validityRu: "от 6 месяцев до 10 лет (многократная)",
    agencyPriceUz: "3 000 000 so'm",
    agencyPriceRu: "3 000 000 сум",
    consularFeeUz: "+ $185 (elchixona yig'imi)",
    consularFeeRu: "+ $185 (консульский сбор)",
    successUz: "~65%",
    successRu: "~65%",
    docsUz: ["DS-160 onlayn anketa", "Zaграnpasport", "Biometrik foto", "Bank hisobi (kamida $5 000)", "Ish yoki o'qish tasdiqlovchi hujjat", "Ko'chmas mulk yoki o'troq hayot dalili", "Intervyuga tayyorgarlik"],
    docsRu: ["Онлайн анкета DS-160", "Загранпаспорт", "Биометрическое фото", "Банковский счёт (мин. $5 000)", "Справка с работы или учёбы", "Документы о недвижимости или привязке к стране", "Подготовка к интервью"],
    tipsUz: ["Intervyu — majburiy. Elchixonada ingliz yoki tarjimon bilan", "Kuchli moliyaviy holat va O'zbekistonga bog'liqlik vizani olishni osonlashtiradi", "Rad etilgandan so'ng 6 oy kutib qayta ariza berish mumkin"],
    tipsRu: ["Интервью обязательно. На английском или с переводчиком", "Сильная финансовая позиция и связь с Узбекистаном увеличивают шансы", "После отказа можно подать повторно через 6 месяцев"],
  },
  {
    id: "uk",
    flag: "🇬🇧",
    uz: "Britaniya viza",
    ru: "Великобритания",
    countriesUz: "Birlashgan Qirollik — Angliya, Shotlandiya, Uels, Shimoliy Irlandiya",
    countriesRu: "Великобритания — Англия, Шотландия, Уэльс, Северная Ирландия",
    processingUz: "15–25 ish kuni",
    processingRu: "15–25 рабочих дней",
    validityUz: "6 oy yoki 2–10 yil",
    validityRu: "6 месяцев или 2–10 лет",
    agencyPriceUz: "1 000 000 so'm",
    agencyPriceRu: "1 000 000 сум",
    consularFeeUz: "+ £115 (elchixona yig'imi)",
    consularFeeRu: "+ £115 (консульский сбор)",
    successUz: "~70%",
    successRu: "~70%",
    docsUz: ["Zaграnpasport + eski pasportlar", "Biometrik foto", "Bank ko'chirmasi (3–6 oy)", "Ish joyi ma'lumotnomasi va maosh", "Uy mulki yoki ijara shartnomasi", "Sayohat maqsadi tavsifi", "Mehmonxona va aviabilet bron"],
    docsRu: ["Загранпаспорт + старые паспорта", "Биометрическое фото", "Выписка из банка (3–6 месяцев)", "Справка с работы и зарплата", "Документ о жилье", "Описание цели поездки", "Бронь отеля и авиабилета"],
    tipsUz: ["UK Schengendan alohida — ikkalasini ham olish mumkin", "Viza Vizalari markazida (UKVI) topshiriladi", "Ingliz tilini bilish talab etilmaydi, lekin foydali"],
    tipsRu: ["UK — отдельно от Шенгена, можно иметь оба", "Подача через Визовый центр Великобритании (UKVI)", "Знание английского не обязательно, но полезно"],
  },
  {
    id: "india",
    flag: "🇮🇳",
    uz: "Hindiston e-Viza",
    ru: "Индия — e-Visa",
    countriesUz: "Hindiston — Dehli, Mumbai, Goa, Kerala, Agra (Toj Mahal) va boshqa",
    countriesRu: "Индия — Дели, Мумбаи, Гоа, Керала, Агра (Тадж-Махал) и другие",
    processingUz: "3–5 kun (onlayn)",
    processingRu: "3–5 дней (онлайн)",
    validityUz: "30 yoki 365 kun",
    validityRu: "30 или 365 дней",
    agencyPriceUz: "250 000 so'm",
    agencyPriceRu: "250 000 сум",
    consularFeeUz: "+ $25 (turizm e-viza)",
    consularFeeRu: "+ $25 (туристическая е-виза)",
    successUz: "~95%",
    successRu: "~95%",
    docsUz: ["Zaграnpasport (kamida 6 oy)", "Raqamli biometrik foto (JPEG)", "Kredit/debit karta (to'lov uchun)", "Qaytish bileti bron", "Mehmonxona manzili"],
    docsRu: ["Загранпаспорт (не менее 6 мес.)", "Цифровое биометрическое фото (JPEG)", "Кредитная/дебетовая карта", "Бронь обратного билета", "Адрес отеля"],
    tipsUz: ["E-viza onlayn — https://indianvisaonline.gov.in/ orqali", "Goa — O'zbekistonliklar orasida eng mashhur yo'nalish", "Visa on arrival yo'q — faqat e-viza oldindan"],
    tipsRu: ["Е-виза онлайн на https://indianvisaonline.gov.in/", "Гоа — самое популярное направление у узбекистанцев", "Visa on arrival нет — только е-виза заранее"],
  },
  {
    id: "saudi",
    flag: "🇸🇦",
    uz: "Saudiya Arabistoni",
    ru: "Саудовская Аравия",
    countriesUz: "Saudiya Arabistoni — Riyadh, Jidda, Al-Ula, Qizil dengiz kurortlari",
    countriesRu: "Саудовская Аравия — Эр-Рияд, Джидда, Аль-Ула, курорты Красного моря",
    processingUz: "1–7 kun",
    processingRu: "1–7 дней",
    validityUz: "30–90 kun",
    validityRu: "30–90 дней",
    agencyPriceUz: "300 000 so'm dan",
    agencyPriceRu: "от 300 000 сум",
    consularFeeUz: "Viza turiga qarab farq qiladi",
    consularFeeRu: "Зависит от типа визы",
    successUz: "~90%",
    successRu: "~90%",
    docsUz: ["Zaграnpasport (kamida 6 oy)", "Raqamli foto", "Kredit karta (to'lov uchun)", "Sug'urta talab etiladi"],
    docsRu: ["Загранпаспорт (не менее 6 мес.)", "Цифровое фото", "Кредитная карта (для оплаты)", "Страховка обязательна"],
    tipsUz: ["Turizm vizasi — visitSaudi.com saytida onlayn", "Umra uchun alohida diniy viza kerak (biz yordam beramiz)", "Ramadan davrida sayyohlar uchun ham viza beriladi"],
    tipsRu: ["Туристическая виза — онлайн на visitSaudi.com", "Для Умры отдельная религиозная виза (помогаем оформить)", "Виза доступна для туристов и в период Рамадана"],
    subtypes: [
      {
        emoji: "🏖️",
        uz: "Turist viza",
        ru: "Туристическая виза",
        descUz: "Onlayn (visitSaudi.com). Riyadh, Jidda, Al-Ula, Qizil dengiz kurortlari",
        descRu: "Онлайн (visitSaudi.com). Эр-Рияд, Джидда, Аль-Ула, курорты Красного моря",
        processingUz: "1–3 kun",
        processingRu: "1–3 дня",
        validityUz: "90 kun (1 yil ichida)",
        validityRu: "90 дней (в течение 1 года)",
        priceUz: "300 000 so'm + ~$80",
        priceRu: "300 000 сум + ~$80",
      },
      {
        emoji: "🕌",
        uz: "Umrah viza",
        ru: "Виза для Умры",
        descUz: "Muqaddas yerlar — Makka va Madina ziyorati uchun diniy viza. Akkreditatsiyalangan agentlik orqali",
        descRu: "Религиозная виза для посещения Мекки и Медины. Оформляется через аккредитованное агентство",
        processingUz: "3–7 kun",
        processingRu: "3–7 дней",
        validityUz: "30 kun",
        validityRu: "30 дней",
        priceUz: "Kelishiladi",
        priceRu: "По договорённости",
      },
      {
        emoji: "💼",
        uz: "Biznes viza",
        ru: "Бизнес-виза",
        descUz: "Saudiyalik kompaniya taklifi bilan ish uchrashuvlari, konferentsiyalar va shartnomalar uchun",
        descRu: "По приглашению саудовской компании: деловые встречи, конференции, переговоры",
        processingUz: "5–10 kun",
        processingRu: "5–10 дней",
        validityUz: "30–90 kun (ko'p marta)",
        validityRu: "30–90 дней (многократная)",
        priceUz: "Kelishiladi",
        priceRu: "По договорённости",
      },
    ],
  },
  {
    id: "australia",
    flag: "🇦🇺",
    uz: "Avstraliya viza",
    ru: "Австралия",
    countriesUz: "Avstraliya — Sidney, Melburn, Brisben, Perth, Qizil qoya (Uluru) va boshqa",
    countriesRu: "Австралия — Сидней, Мельбурн, Брисбен, Перт, Красная скала (Улуру) и другие",
    processingUz: "20–40 ish kuni",
    processingRu: "20–40 рабочих дней",
    validityUz: "3, 6 yoki 12 oy (ko'p marta kirish)",
    validityRu: "3, 6 или 12 месяцев (многократная)",
    agencyPriceUz: "1 500 000 so'm",
    agencyPriceRu: "1 500 000 сум",
    consularFeeUz: "+ ~145 AUD (elchixona yig'imi)",
    consularFeeRu: "+ ~145 AUD (консульский сбор)",
    successUz: "~70%",
    successRu: "~70%",
    docsUz: ["Zaграnpasport (kamida 6 oy)", "Biometrik foto", "Bank ko'chirmasi (6 oy, min. $5 000)", "Ish joyi ma'lumotnomasi va maosh", "Sayohat tarixi (boshqa mamlakatlar vizalari)", "Mehmonxona va aviabilet bron", "Savol-javob formasini to'ldirish (onlayn)"],
    docsRu: ["Загранпаспорт (не менее 6 мес.)", "Биометрическое фото", "Выписка из банка (6 мес., мин. $5 000)", "Справка с работы и зарплата", "История поездок (визы других стран)", "Бронь отеля и авиабилета", "Заполнение онлайн-анкеты"],
    tipsUz: ["Ariza 2–3 oy oldin berilishi tavsiya etiladi", "Kuchli moliyaviy holat va sayohat tarixi muhim", "Ingliz tili sertifikati (IELTS va b.) vizani osonlashtiradi", "Avstraliya vaqtida topshirilsa studentlar ham olishi mumkin"],
    tipsRu: ["Рекомендуется подавать за 2–3 месяца", "Сильная финансовая позиция и история поездок важны", "Сертификат английского (IELTS и др.) упрощает процесс", "Студенты также могут получить при своевременной подаче"],
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    qUz: "Viza olish uchun qancha vaqt ketadi?",
    qRu: "Сколько времени занимает получение визы?",
    aUz: "Har bir mamlakat uchun farq qiladi. Hindiston va Saudiya e-vizasi 3–5 kun, Dubai 3–5 kun, Schengen 15–20 kun, AQSh 30–90 kun. Muddatli hollarda tezlashtirish mumkin.",
    aRu: "Зависит от страны. Индия и Саудия е-виза — 3–5 дней, Дубай — 3–5 дней, Шенген — 15–20 дней, США — 30–90 дней. В срочных случаях возможно ускорение.",
  },
  {
    qUz: "O'zbekiston fuqarosi qancha mamlakatga vizasiz borishi mumkin?",
    qRu: "В сколько стран гражданин Узбекистана может ехать без визы?",
    aUz: "2025 yil holatiga ko'ra O'zbekiston pasporti bilan 30+ mamlakatga vizasiz yoki chegara vizasi bilan borish mumkin. Jumladan: Turkiya, Gruziya, Tailand, Malayziya, Singapur, Janubiy Koreya va boshqalar.",
    aRu: "По состоянию на 2025 год с узбекским паспортом можно въехать в 30+ стран без визы или с визой по прилёту. В том числе: Турция, Грузия, Таиланд, Малайзия, Сингапур, Южная Корея и другие.",
  },
  {
    qUz: "Viza rad etilsa nima bo'ladi?",
    qRu: "Что если визу откажут?",
    aUz: "Biz hujjatlarni professional darajada tayyorlaymiz (85–96% muvaffaqiyat). Rad etilgan hollarda qayta ariza berishda yordam beramiz va sabablarini tahlil qilamiz.",
    aRu: "Мы профессионально готовим документы (85–96% успех). В случае отказа помогаем с повторной подачей и анализируем причины.",
  },
  {
    qUz: "Xizmat narxiga nima kiradi?",
    qRu: "Что входит в стоимость услуги?",
    aUz: "Maslahat, hujjatlarni tekshirish, anketa to'ldirish, tarjima, topshirish va kuzatib borish. Elchixona yig'imlari alohida to'lanadi.",
    aRu: "Консультация, проверка документов, заполнение анкеты, перевод, подача и сопровождение. Консульский сбор оплачивается отдельно.",
  },
  {
    qUz: "Tezlashtirish mumkinmi?",
    qRu: "Возможно ли срочное оформление?",
    aUz: "Ha, aksariyat mamlakatlar uchun tezlashtirilgan xizmat mavjud. Qo'shimcha to'lov talab etilishi mumkin. Shoshilinch holat bo'lsa hoziroq bog'laning.",
    aRu: "Да, для большинства стран доступна срочная услуга. Может потребоваться доплата. Если срочно — свяжитесь прямо сейчас.",
  },
  {
    qUz: "Qaysi mamlakatlar uchun e-viza bor?",
    qRu: "Для каких стран есть е-виза?",
    aUz: "Hindiston, Saudiya Arabistoni, Shri-Lanka, Vyetnam, Keniya, Kambodja — bularni onlayn e-viza orqali olib, 3–5 kunda tayyor qilish mumkin.",
    aRu: "Индия, Саудовская Аравия, Шри-Ланка, Вьетнам, Кения, Камбоджа — эти страны предлагают е-визу онлайн, готовую за 3–5 дней.",
  },
];

export default function VisaClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("schengen");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeVisa = visaTabs.find((t) => t.id === activeTab)!;

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.phone) return;
    setLoading(true);
    await sendLead({
      name: form.name,
      phone: form.phone,
      type: `Viza: ${isUz ? activeVisa.uz : activeVisa.ru}`,
      source: "semtravel.uz/visa",
    });
    setLoading(false);
    setSent(true);
    setForm({ name: "", phone: "" });
    setTimeout(() => { setSent(false); setShowForm(false); }, 3000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1E3A5F 0%, #0057A8 100%)", paddingBottom: 60 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=60"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.12 }}
          sizes="100vw"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            🛂 {isUz ? "Viza xizmatlari — 2025" : "Визовые услуги — 2025"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 5vw, 44px)" }}
          >
            {isUz ? (
              <>Viza olishda <span style={{ color: "#F5C518" }}>professional yordam</span></>
            ) : (
              <>Профессиональная <span style={{ color: "#F5C518" }}>помощь с визой</span></>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 520, margin: "0 auto 16px" }}>
            {isUz
              ? "Schengen, AQSh, Britaniya, Hindiston, Saudiya va 40+ mamlakat uchun viza. Hujjat tayyorlash, ariza topshirish va kuzatish."
              : "Шенген, США, Великобритания, Индия, Саудия и 40+ стран. Подготовка документов, подача и сопровождение."}
          </p>
          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            {[
              { num: "40+", uz: "Mamlakat", ru: "Стран" },
              { num: "90%+", uz: "Muvaffaqiyat", ru: "Успех" },
              { num: "15+", uz: "Yil tajriba", ru: "Лет опыта" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-1.5 text-white">
                <span className="font-extrabold text-lg" style={{ color: "#F5C518" }}>{s.num}</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{isUz ? s.uz : s.ru}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}>
              💬 {isUz ? "Bepul maslahat" : "Бесплатная консультация"}
            </a>
            <a href="tel:+998712755555"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}>
              📞 +998 71 275-55-55
            </a>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM MODAL ── */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
        >
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            {sent ? (
              <div className="text-center py-4">
                <div className="text-5xl mb-3">✅</div>
                <p className="font-extrabold text-gray-900 text-lg mb-1">
                  {isUz ? "So'rovingiz qabul qilindi!" : "Заявка принята!"}
                </p>
                <p className="text-sm text-gray-500">
                  {isUz ? "Menejerimiz tez orada siz bilan bog'lanadi." : "Менеджер свяжется с вами в ближайшее время."}
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg">
                      {activeVisa.flag} {isUz ? activeVisa.uz : activeVisa.ru}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {isUz ? "Menejerimiz siz bilan bog'lanadi" : "Менеджер свяжется с вами"}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      {isUz ? "Ismingiz" : "Ваше имя"}
                    </label>
                    <input
                      type="text"
                      placeholder={isUz ? "To'liq ism" : "Полное имя"}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      {isUz ? "Telefon raqamingiz *" : "Ваш номер телефона *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123-45-67"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: "1.5px solid #E5E7EB", background: "#F9FAFB" }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{ background: "#0057A8" }}
                  >
                    {loading
                      ? (isUz ? "Yuborilmoqda..." : "Отправка...")
                      : `📩 ${isUz ? "So'rov yuborish" : "Отправить заявку"}`}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    {isUz ? "Bepul maslahat. Spam yo'q." : "Бесплатная консультация. Без спама."}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">

        {/* ── VIZASIZ DAVLATLAR ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-extrabold text-gray-900">
              🟢 {isUz ? "Vizasiz mamlakatlar 2025" : "Страны без визы 2025"}
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            {isUz
              ? "O'zbekiston pasporti bilan vizasiz, chegara vizasi yoki e-viza bilan borish mumkin bo'lgan mamlakatlar"
              : "Страны, куда можно поехать без визы, с визой по прилёту или э-визой с паспортом Узбекистана"}
          </p>

          <div className="space-y-3">
            {vizaFreeGroups.map((group) => (
              <div key={group.id} className="bg-white rounded-2xl overflow-hidden" style={{ border: "1.5px solid #E5E7EB" }}>
                <button
                  onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{group.emoji}</span>
                    <div>
                      <span className="font-bold text-gray-900 text-sm">{isUz ? group.uz : group.ru}</span>
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: "#DCFCE7", color: "#166534" }}>
                        {group.countries.length} {isUz ? "ta mamlakat" : "стран"}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-gray-400 transition-transform duration-200"
                    style={{ transform: openGroup === group.id ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {openGroup === group.id && (
                  <div className="border-t border-gray-100 px-4 pb-4 pt-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {group.countries.map((c) => (
                        <div key={c.uz} className="flex items-center gap-3 p-2.5 rounded-xl"
                          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                          <span className="text-2xl">{c.flag}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">{isUz ? c.uz : c.ru}</p>
                            <p className="text-xs text-gray-500">{isUz ? c.typeUz : c.typeRu} · {isUz ? c.daysUz : c.daysRu}</p>
                          </div>
                          <Check size={14} style={{ color: "#16A34A" }} className="flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 text-xs text-gray-400 text-center px-2">
            * {isUz
              ? "Ma'lumotlar 2025 yil uchun. Sayohatdan oldin rasmiy manbalarda tekshiring — viza qoidalari o'zgarishi mumkin."
              : "Данные актуальны на 2025 год. Проверяйте в официальных источниках перед поездкой — правила могут изменяться."}
          </div>
        </div>

        {/* ── VIZA TURLARI TABS ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            🛂 {isUz ? "Viza kerak bo'lgan mamlakatlar" : "Страны, требующие визы"}
          </h2>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-5">
            {visaTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={activeTab === tab.id
                  ? { background: "#0057A8", color: "#fff" }
                  : { background: "#F3F4F6", color: "#374151", border: "1.5px solid #E5E7EB" }}
              >
                {tab.flag} {isUz ? tab.uz : tab.ru}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="bg-white rounded-2xl p-5 sm:p-6" style={{ border: "1.5px solid #E5E7EB" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{activeVisa.flag}</span>
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">{isUz ? activeVisa.uz : activeVisa.ru}</h3>
                <p className="text-xs text-gray-500">{isUz ? activeVisa.countriesUz : activeVisa.countriesRu}</p>
              </div>
            </div>

            {/* Quick info grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                { label: isUz ? "Muddat" : "Срок", value: isUz ? activeVisa.processingUz : activeVisa.processingRu },
                { label: isUz ? "Amal qilish muddati" : "Действие", value: isUz ? activeVisa.validityUz : activeVisa.validityRu },
                { label: isUz ? "Xizmat narxi" : "Стоимость услуги", value: isUz ? activeVisa.agencyPriceUz : activeVisa.agencyPriceRu },
                { label: isUz ? "Muvaffaqiyat" : "Успешность", value: isUz ? activeVisa.successUz : activeVisa.successRu },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-xl" style={{ background: "#F0F9FF", border: "1px solid #BAE6FD" }}>
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  <p className="font-extrabold text-sm" style={{ color: "#0057A8" }}>{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-5">
              {isUz ? activeVisa.consularFeeUz : activeVisa.consularFeeRu}
            </p>

            {/* Saudi Arabia subtypes */}
            {"subtypes" in activeVisa && activeVisa.subtypes && (
              <div className="mb-5">
                <h4 className="font-bold text-gray-900 text-sm mb-3">
                  🗂️ {isUz ? "Viza turlari" : "Типы виз"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(activeVisa.subtypes as Array<{emoji: string; uz: string; ru: string; descUz: string; descRu: string; processingUz: string; processingRu: string; validityUz: string; validityRu: string; priceUz: string; priceRu: string}>).map((sub) => (
                    <div key={sub.uz} className="p-4 rounded-xl" style={{ background: "#F0F9FF", border: "1.5px solid #BAE6FD" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{sub.emoji}</span>
                        <span className="font-extrabold text-sm text-gray-900">{isUz ? sub.uz : sub.ru}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">{isUz ? sub.descUz : sub.descRu}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">{isUz ? "Muddat" : "Срок"}</span>
                          <span className="font-semibold text-gray-700">{isUz ? sub.processingUz : sub.processingRu}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">{isUz ? "Amal qilishi" : "Действие"}</span>
                          <span className="font-semibold text-gray-700">{isUz ? sub.validityUz : sub.validityRu}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">{isUz ? "Narx" : "Цена"}</span>
                          <span className="font-extrabold" style={{ color: "#0057A8" }}>{isUz ? sub.priceUz : sub.priceRu}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Documents */}
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-3">
                  📋 {isUz ? "Kerakli hujjatlar" : "Необходимые документы"}
                </h4>
                <ul className="space-y-2">
                  {(isUz ? activeVisa.docsUz : activeVisa.docsRu).map((doc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#0057A8" }} />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Tips */}
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-3">
                  💡 {isUz ? "Muhim ma'lumotlar" : "Важные советы"}
                </h4>
                <ul className="space-y-2">
                  {(isUz ? activeVisa.tipsUz : activeVisa.tipsRu).map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="flex-shrink-0 mt-0.5" style={{ color: "#F5C518" }}>★</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={() => { setShowForm(true); setSent(false); }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: "#0057A8" }}
              >
                📋 {isUz ? `${activeVisa.uz} uchun ariza qoldirish` : `Оставить заявку на ${activeVisa.ru}`}
              </button>
            </div>
          </div>
        </div>

        {/* ── JARAYON ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            ⚡ {isUz ? "Qanday ishlaydi?" : "Как это работает?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { num: "01", emoji: "📞", uz: "Bepul maslahat", ru: "Бесплатная консультация", descUz: "Menejerimiz siz bilan bog'lanib, kerakli viza turi va hujjatlarni tushuntiradi", descRu: "Менеджер свяжется и объяснит тип визы и список документов" },
              { num: "02", emoji: "📄", uz: "Hujjatlar tayyorlash", ru: "Подготовка документов", descUz: "Zarur hujjatlarni tayyorlashda yordam beramiz va tekshirib chiqamiz", descRu: "Поможем подготовить и проверить все необходимые документы" },
              { num: "03", emoji: "📮", uz: "Ariza topshirish", ru: "Подача заявки", descUz: "Arizani o'z vaqtida va to'g'ri topshiramiz, elchixona bilan muloqot qilamiz", descRu: "Подадим заявку вовремя, общаемся с посольством за вас" },
              { num: "04", emoji: "✅", uz: "Viza tayyor!", ru: "Виза готова!", descUz: "Viza tayyor bo'lganda sizga xabar beramiz va hujjatlarni topshiramiz", descRu: "Сообщим, когда виза готова, и передадим документы" },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 p-4 rounded-xl bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: "#0057A8" }}>
                  {step.num}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span>{step.emoji}</span>
                    <span className="font-bold text-gray-900 text-sm">{isUz ? step.uz : step.ru}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{isUz ? step.descUz : step.descRu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            ❓ {isUz ? "Ko'p so'raladigan savollar" : "Часто задаваемые вопросы"}
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ border: "1.5px solid #E5E7EB" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4">{isUz ? item.qUz : item.qRu}</span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-gray-400 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-5 pt-3 pb-4 text-sm text-gray-600 leading-relaxed">
                    {isUz ? item.aUz : item.aRu}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-6 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Viza masalasida yordam kerakmi?" : "Нужна помощь с визой?"}
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz ? "Hoziroq murojaat qiling — bepul maslahat beramiz!" : "Обратитесь прямо сейчас — консультация бесплатная!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}>
              💬 WhatsApp
            </a>
            <a href="https://t.me/semtravel" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#229ED9", color: "#fff" }}>
              ✈️ Telegram
            </a>
            <a href="tel:+998712755555"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}>
              📞 +998 71 275-55-55
            </a>
          </div>
        </div>

        <div className="pb-6">
          <Link href="/" className="text-sm font-medium" style={{ color: "#0057A8" }}>
            ← {isUz ? "Bosh sahifaga qaytish" : "Вернуться на главную"}
          </Link>
        </div>
      </div>
    </div>
  );
}
