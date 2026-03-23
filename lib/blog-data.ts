export interface BlogPost {
  id: number;
  slug: string;
  emoji: string;
  image: string;
  categoryUz: string;
  categoryRu: string;
  titleUz: string;
  titleRu: string;
  descUz: string;
  descRu: string;
  date: string;
  readTimeUz: string;
  readTimeRu: string;
  author: string;
  contentUz: string;
  contentRu: string;
  tagsUz: string[];
  tagsRu: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "dubai-sayohati-maslahatlari",
    emoji: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=70",
    categoryUz: "Maslahatlar",
    categoryRu: "Советы",
    titleUz: "Dubai sayohati: bilishingiz kerak bo'lgan 10 ta maslahat",
    titleRu: "Путешествие в Дубай: 10 советов, которые нужно знать",
    descUz: "Dubai — hashamatli mehmonxonalar, baland binolar va ajoyib plyaj dam olishi bilan dunyodagi eng mashhur turistik shaharlardan biri. Bu maqolada Dubai sayohati uchun eng muhim maslahatlar berilgan.",
    descRu: "Дубай — один из самых популярных туристических городов мира. В этой статье вы найдёте главные советы для поездки в Дубай.",
    date: "2026-03-10",
    readTimeUz: "5 daqiqa",
    readTimeRu: "5 минут",
    author: "SEM Travel",
    tagsUz: ["Dubai", "Maslahatlar", "Vizasiz"],
    tagsRu: ["Дубай", "Советы", "Без визы"],
    contentUz: `Dubai — Birlashgan Arab Amirliklarining eng mashhur shahri bo'lib, har yili millionlab sayyohlarni o'ziga tortadi. Toshkentdan Dubai ga to'g'ridan-to'g'ri reyslar mavjud.

## 1. Viza — O'zbekiston fuqarolari uchun

O'zbekiston fuqarolari uchun Dubai ga (BAA) viza kerak. Viza olishning ikki yo'li bor:
- **Elektron viza (e-Visa)** — onlayn ariza, 3-5 ish kuni
- **Turagentlik orqali** — SEM Travel hujjatlarni to'liq o'z zimmasiga oladi

Viza narxi: **$90–120** (turiga qarab)

## 2. Qachon borish kerak?

Dubai ga borish uchun **eng qulay vaqt — oktyabrdan aprelgacha**. Bu davrda harorat +22°C dan +30°C gacha bo'ladi. Iyun-avgust oylarida harorat +45°C ga yetadi.

## 3. Nima ko'rish kerak?

- **Burj Khalifa** — dunyodagi eng baland bino (828 m)
- **Dubai Mall** — dunyodagi eng katta savdo markazi
- **Palm Jumeirah** — sun'iy palm shaklidagi orol
- **Dubai Creek** — tarixiy shahar qismi
- **Desert Safari** — cho'l safarisi (majburiy!)

## 4. Mehmonxona tanlash

Dubai da mehmonxonalar **3 toifaga** bo'linadi:
- **3 yulduz**: $60–100/tun — Deira, Bur Dubai rayonlari
- **4 yulduz**: $120–200/tun — Downtown, Business Bay
- **5 yulduz**: $250+/tun — Palm Jumeirah, Marina

## 5. Ovqatlanish

Dubai da halol taom ko'p. O'zbek taomi izlasangiz — Karama va Deira rayonlarida ko'plab O'zbek restoranlar bor. O'rtacha tushlik narxi: $10–20.

## 6. Transport

- **Dubai Metro** — arzon va qulay (tik. $1–3)
- **Taxi (Careem/Uber)** — qulay, narxi aniq
- **RTA avtobus** — eng arzon

## 7. Nima olib borish kerak?

Rasmiy kiyim va ochiq kiyimdan saqlaning jamoat joylarida. Plyajda ochiq kiyim yaxshi, lekin mol-savdo markazlarida yoping.

## 8. Pul masalasi

Dubai da asosiy valyuta **AED (Dirham)**. 1 AED ≈ 3,400 so'm. Kredit kartalar hamma joyda qabul qilinadi.

## 9. Internet va SIM karta

Aeroportda **du** yoki **Etisalat** SIM karta sotib oling: 10 GB internet $15–20. Wi-Fi ko'plab joylarda bepul.

## 10. Muhim maslahat

SEM Travel orqali Dubai ga tur buyurtma bering — **parvoz + mehmonxona + transfer + viza** hammasi bir joyda! Bepul maslahat uchun: **+998 71 275-55-55** yoki WhatsApp.`,
    contentRu: `Дубай — самый известный город Объединённых Арабских Эмиратов, ежегодно привлекающий миллионы туристов. Из Ташкента есть прямые рейсы в Дубай.

## 1. Виза для граждан Узбекистана

Гражданам Узбекистана нужна виза в ОАЭ. Два способа:
- **Электронная виза (e-Visa)** — онлайн-заявка, 3-5 рабочих дней
- **Через турагентство** — SEM Travel берёт все документы на себя

Стоимость визы: **$90–120** (зависит от типа)

## 2. Когда лучше ехать?

Лучшее время — **с октября по апрель**. Температура +22°C до +30°C. В июне-августе температура достигает +45°C.

## 3. Что посмотреть?

- **Бурдж Халифа** — самое высокое здание в мире (828 м)
- **Dubai Mall** — крупнейший торговый центр мира
- **Palm Jumeirah** — искусственный остров в форме пальмы
- **Dubai Creek** — исторический район
- **Desert Safari** — сафари в пустыне (обязательно!)

## 4. Выбор отеля

- **3 звезды**: $60–100/ночь — районы Deira, Bur Dubai
- **4 звезды**: $120–200/ночь — Downtown, Business Bay
- **5 звезд**: $250+/ночь — Palm Jumeirah, Marina

## 5. Питание

Халяльная еда везде. Узбекские рестораны — в районах Karama и Deira. Средний обед: $10–20.

## 6. Транспорт

- **Dubai Metro** — дёшево и удобно ($1–3)
- **Taxi (Careem/Uber)** — удобно, цена фиксированная
- **Автобус RTA** — самый дешёвый вариант

## 7. Дресс-код

В общественных местах избегайте слишком открытой одежды. На пляже — можно, в торговых центрах — прикрывайтесь.

## 8. Валюта

Основная валюта — **AED (Дирхам)**. 1 AED ≈ 3400 сум. Кредитные карты принимаются везде.

## 9. Интернет

В аэропорту купите SIM **du** или **Etisalat**: 10 ГБ за $15–20.

## 10. Главный совет

Закажите тур в Дубай через SEM Travel — **перелёт + отель + трансфер + виза** в одном пакете! Бесплатная консультация: **+998 71 275-55-55** или WhatsApp.`,
  },
  {
    id: 2,
    slug: "turkiya-viza-qollanma",
    emoji: "🇹🇷",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=70",
    categoryUz: "Viza",
    categoryRu: "Виза",
    titleUz: "Turkiyaga viza: qanday olish mumkin? To'liq qo'llanma 2026",
    titleRu: "Виза в Турцию: как получить? Полное руководство 2026",
    descUz: "O'zbekiston fuqarolari uchun Turkiyaga viza olish jarayoni: kerakli hujjatlar, ariza topshirish tartibi, muddat va narxlar.",
    descRu: "Процесс получения визы в Турцию для граждан Узбекистана: документы, порядок подачи, сроки и стоимость.",
    date: "2026-03-01",
    readTimeUz: "7 daqiqa",
    readTimeRu: "7 минут",
    author: "SEM Travel",
    tagsUz: ["Turkiya", "Viza", "Hujjatlar"],
    tagsRu: ["Турция", "Виза", "Документы"],
    contentUz: `O'zbekiston fuqarolari Turkiyaga borish uchun **viza kerak** (2023-yildan boshlab). Shu bilan birga, viza olish jarayoni nisbatan oson.

## Turkiya vizasi turlari

1. **e-Visa (elektron viza)** — eng qulay va tez yo'l
2. **Konsullik vizasi** — Toshkentdagi Turkiya konsulligida

## e-Visa olish tartibi

### Kerakli hujjatlar:
- Xalqaro pasport (kamida 6 oy amal qilish muddati)
- Kredit yoki debet karta (to'lov uchun)
- Elektron pochta manzili

### Narxi:
- **$50** — standart turist vizasi

### Muddati:
- Ko'rib chiqiladi: **24-48 soat**
- Vizaning amal qilish muddati: **180 kun** (30 kunlik yashash huquqi)

## Qayerdan ariza topshirish?

Rasmiy sayt: **evisa.gov.tr** — boshqa saytlarga ishonmang, ayyorlik ko'p!

## Konsullik vizasi

Agar e-Visa rad etilsa yoki ko'p marta kirish vizasi kerak bo'lsa, Turkiya konsulligiga murojaat qiling:
**Manzil:** Toshkent, Qoratosh ko'chasi, 87

### Qo'shimcha hujjatlar:
- Bank hisobi (3 oy)
- Ish joyi ma'lumotnomasi
- Mehmonxona bronlash
- Aviabilet bronlash

## SEM Travel orqali viza

SEM Travel viza rasmiylashtirish xizmatini taqdim etadi:
- Hujjatlarni tekshirib beradi
- Ariza to'ldirishda yordam beradi
- Rad etilish ehtimolini kamaytiradi

**Murojaat uchun:** +998 71 275-55-55`,
    contentRu: `Гражданам Узбекистана нужна **виза для въезда в Турцию** (с 2023 года). При этом процесс получения визы относительно простой.

## Типы виз в Турцию

1. **e-Visa (электронная виза)** — самый удобный и быстрый способ
2. **Консульская виза** — в консульстве Турции в Ташкенте

## Как получить e-Visa

### Необходимые документы:
- Загранпаспорт (срок действия не менее 6 месяцев)
- Кредитная или дебетовая карта
- Адрес электронной почты

### Стоимость:
- **$50** — стандартная туристическая виза

### Сроки:
- Рассмотрение: **24-48 часов**
- Срок действия визы: **180 дней** (право пребывания 30 дней)

## Где подавать заявку?

Официальный сайт: **evisa.gov.tr** — не доверяйте другим сайтам, мошенников много!

## Консульская виза

Если e-Visa отклонена или нужна многократная виза, обратитесь в консульство Турции:
**Адрес:** Ташкент, ул. Караташ, 87

### Дополнительные документы:
- Выписка из банка (3 месяца)
- Справка с места работы
- Бронирование отеля
- Бронирование авиабилетов

## Оформление визы через SEM Travel

SEM Travel предоставляет услуги по оформлению визы:
- Проверяет документы
- Помогает заполнить заявку
- Снижает риск отказа

**Для обращения:** +998 71 275-55-55`,
  },
  {
    id: 3,
    slug: "maldiv-yoki-tailand",
    emoji: "🏝️",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=70",
    categoryUz: "Yo'nalishlar",
    categoryRu: "Направления",
    titleUz: "Maldiv orollari yoki Tailand: qayerga borishni tanlash kerak?",
    titleRu: "Мальдивы или Таиланд: куда лучше поехать?",
    descUz: "Ikki mashhur dam olish yo'nalishi — Maldiv orollari va Tailandni narx, tabiat, xizmat va dam olish turlari bo'yicha qiyoslaymiz.",
    descRu: "Сравниваем Мальдивы и Таиланд по цене, природе, сервису и видам отдыха. Что подходит именно вам?",
    date: "2026-02-20",
    readTimeUz: "6 daqiqa",
    readTimeRu: "6 минут",
    author: "SEM Travel",
    tagsUz: ["Maldiv", "Tailand", "Qiyoslash", "Plyaj"],
    tagsRu: ["Мальдивы", "Таиланд", "Сравнение", "Пляж"],
    contentUz: `Maldiv va Tailand — ikkalasi ham tropik jannat. Lekin bu ikki yo'nalish juda farq qiladi. Qaysi biri siz uchun?

## Narx bo'yicha

| | Maldiv | Tailand |
|---|---|---|
| Parvoz (Toshkentdan) | $700–900 | $400–600 |
| Mehmonxona/tun | $200–500+ | $50–150 |
| Ovqat | $30–80/kun | $10–25/kun |
| **Jami 7 kun** | **$3,500+** | **$1,200–1,800** |

**G'olib: Tailand** — ancha arzon

## Plyaj va dengiz bo'yicha

**Maldiv:**
- Shaffof ko'k dengiz (1–5 m ko'rinish)
- Oq qumli plyajlar
- Suv usti bungalolar (iconic!)
- Katak baliqlar, toshbaqalar

**Tailand:**
- Turli xil plyajlar (Phuket, Krabi, Koh Samui)
- Qoyali tabiat (Phi Phi orollari)
- Ko'proq odamlar

**G'olib: Maldiv** — plyaj sifati bo'yicha

## Dam olish turi

**Maldiv uchun mos:**
- Honeymoon/romantik sayohat
- Suv osti sho'ng'ish (diving)
- Tinch va yolg'iz dam olish
- Hashamatli resortlar

**Tailand uchun mos:**
- Faol sayyohlar
- Madaniyat va tarix
- Street food ixlosmandlari
- Oilaviy sayohat

## Viza

- **Maldiv** — vizasiz (30 kun)
- **Tailand** — vizasiz (30 kun)

## Xulosa

- **Byudjet cheklangan** → Tailand
- **Honeymoon/romantic** → Maldiv
- **Ko'p ko'rmoqchi** → Tailand
- **Tinch dam olish** → Maldiv

**SEM Travel** ikkalasiga ham tur paket tayyorlaydi. Maslahat uchun: **+998 71 275-55-55**`,
    contentRu: `Мальдивы и Таиланд — оба тропических рая. Но эти направления очень разные. Что подходит именно вам?

## По стоимости

| | Мальдивы | Таиланд |
|---|---|---|
| Перелёт (из Ташкента) | $700–900 | $400–600 |
| Отель/ночь | $200–500+ | $50–150 |
| Питание | $30–80/день | $10–25/день |
| **Итого 7 дней** | **$3 500+** | **$1 200–1 800** |

**Победитель: Таиланд** — значительно дешевле

## По пляжу и морю

**Мальдивы:**
- Прозрачная вода (видимость 1–5 м)
- Белоснежные пляжи
- Бунгало на воде (iconic!)
- Черепахи и рыбки

**Таиланд:**
- Разнообразные пляжи (Пхукет, Краби, Самуи)
- Скалистые пейзажи (острова Пхи-Пхи)
- Больше людей

**Победитель: Мальдивы** — по качеству пляжей

## По типу отдыха

**Мальдивы подходят для:**
- Медового месяца / романтики
- Дайвинга
- Уединённого отдыха
- Люксовых курортов

**Таиланд подходит для:**
- Активных туристов
- Культуры и истории
- Любителей street food
- Семейного отдыха

## Виза

- **Мальдивы** — без визы (30 дней)
- **Таиланд** — без визы (30 дней)

## Вывод

- **Ограниченный бюджет** → Таиланд
- **Медовый месяц** → Мальдивы
- **Хочется увидеть много** → Таиланд
- **Тихий отдых** → Мальдивы

**SEM Travel** подготовит тур-пакет в оба направления. Консультация: **+998 71 275-55-55**`,
  },
  {
    id: 4,
    slug: "toshkentdan-eng-arzon-turlar",
    emoji: "✈️",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=70",
    categoryUz: "Turlar",
    categoryRu: "Туры",
    titleUz: "Toshkentdan eng arzon xorijiy turlar 2026 — top 5 yo'nalish",
    titleRu: "Самые дешёвые туры из Ташкента 2026 — топ 5 направлений",
    descUz: "Toshkentdan eng arzon narxlarda xorijga sayohat qilmoqchimisiz? Mana 2026-yilning top 5 arzon yo'nalishlari va narxlari.",
    descRu: "Хотите путешествовать за рубеж по самым низким ценам из Ташкента? Вот топ-5 самых доступных направлений 2026 года.",
    date: "2026-03-15",
    readTimeUz: "4 daqiqa",
    readTimeRu: "4 минуты",
    author: "SEM Travel",
    tagsUz: ["Arzon turlar", "Toshkent", "2026", "Top yo'nalishlar"],
    tagsRu: ["Дешёвые туры", "Ташкент", "2026", "Топ направления"],
    contentUz: `Ko'pchilik "xorijga sayohat qimmat" deb o'ylaydi. Lekin to'g'ri yo'nalishni tanlasangiz, **$500–800** ga ajoyib dam olish mumkin!

## 1. Turkiya — Antalya, Kemer ⭐ ENG MASHHUR

- **Narx:** $450–650 (7 kun, All Inclusive, 2 kishi)
- **Parvoz:** Toshkent → Antalya (to'g'ri reys, 4 soat)
- **Viza:** Kerak ($50 e-viza)
- **Eng yaxshi vaqt:** May–Oktyabr

Turkiya — O'zbekiston sayyohlari orasida №1. All Inclusive mehmonxona, dengiz, quyosh — hamma narsa bitta narxda.

## 2. Misr — Hurghada, Sharm el-Sheikh

- **Narx:** $500–750 (7 kun, All Inclusive)
- **Parvoz:** Toshkent → Hurghada (charter, 5 soat)
- **Viza:** Kerak (aeroportda $25)
- **Eng yaxshi vaqt:** Oktyabr–Aprel

Misr — issiq dengiz va ajoyib marjalar. Qishda ham +25°C!

## 3. Tailand — Phuket, Pattaya

- **Narx:** $700–900 (7 kun, mehmonxona + parvoz)
- **Parvoz:** Toshkent → Bangkok (1–2 to'xtash, 8–12 soat)
- **Viza:** Vizasiz (30 kun)
- **Eng yaxshi vaqt:** Noyabr–Aprel

Tailand — narx/sifat nisbati bo'yicha eng zo'r. Street food, tropik tabiat, madaniyat.

## 4. Dubai (BAA)

- **Narx:** $800–1,100 (5 tun, 4★ mehmonxona)
- **Parvoz:** Toshkent → Dubai (to'g'ri reys, 3.5 soat)
- **Viza:** Kerak ($90–120)
- **Eng yaxshi vaqt:** Oktyabr–Aprel

Dubai — hashamat va zamonaviylikning ramzi. Shopping, Dubai Mall, cho'l safari.

## 5. Gruziya — Tbilisi, Batumi

- **Narx:** $300–450 (5 kun)
- **Parvoz:** Toshkent → Tbilisi (2–3 soat)
- **Viza:** Vizasiz
- **Yil bo'yi borsa bo'ladi**

Gruziya — eng yaqin va arzon xorijiy yo'nalish. Ajoyib oshxona, tarix, tog'lar.

---

**Bepul maslahat va bron:** +998 71 275-55-55 | WhatsApp: +998 94 664-22-22`,
    contentRu: `Многие думают, что путешествие за рубеж стоит дорого. Но если выбрать правильное направление, можно отлично отдохнуть за **$500–800**!

## 1. Турция — Анталья, Кемер ⭐ САМОЕ ПОПУЛЯРНОЕ

- **Цена:** $450–650 (7 ночей, All Inclusive, 2 человека)
- **Перелёт:** Ташкент → Анталья (прямой рейс, 4 часа)
- **Виза:** Нужна ($50 e-виза)
- **Лучшее время:** Май–Октябрь

Турция — №1 среди туристов из Узбекистана. All Inclusive отель, море, солнце — всё в одной цене.

## 2. Египет — Хургада, Шарм-эль-Шейх

- **Цена:** $500–750 (7 ночей, All Inclusive)
- **Перелёт:** Ташкент → Хургада (чартер, 5 часов)
- **Виза:** Нужна (в аэропорту $25)
- **Лучшее время:** Октябрь–Апрель

Египет — тёплое море и отличные кораллы. Даже зимой +25°C!

## 3. Таиланд — Пхукет, Паттайя

- **Цена:** $700–900 (7 ночей, отель + перелёт)
- **Перелёт:** Ташкент → Бангкок (1–2 пересадки, 8–12 часов)
- **Виза:** Без визы (30 дней)
- **Лучшее время:** Ноябрь–Апрель

Таиланд — лучшее соотношение цены и качества. Street food, тропическая природа, культура.

## 4. Дубай (ОАЭ)

- **Цена:** $800–1 100 (5 ночей, 4★ отель)
- **Перелёт:** Ташкент → Дубай (прямой рейс, 3.5 часа)
- **Виза:** Нужна ($90–120)
- **Лучшее время:** Октябрь–Апрель

Дубай — символ роскоши. Шопинг, Dubai Mall, сафари в пустыне.

## 5. Грузия — Тбилиси, Батуми

- **Цена:** $300–450 (5 дней)
- **Перелёт:** Ташкент → Тбилиси (2–3 часа)
- **Виза:** Без визы
- **Можно ехать круглый год**

Грузия — ближайшее и доступное зарубежное направление. Отличная кухня, история, горы.

---

**Бесплатная консультация и бронирование:** +998 71 275-55-55 | WhatsApp: +998 94 664-22-22`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
