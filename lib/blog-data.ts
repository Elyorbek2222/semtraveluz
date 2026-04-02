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
  {
    id: 5,
    slug: "misr-hurghada-sayohati",
    emoji: "🇪🇬",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=70",
    categoryUz: "Yo'nalishlar",
    categoryRu: "Направления",
    titleUz: "Misr Hurghada: 2026-yilgi to'liq sayohat qo'llanmasi",
    titleRu: "Египет Хургада: полный путеводитель 2026 года",
    descUz: "Hurghada — Misrning eng mashhur kurort shahri. Qizil dengiz, marjonlar, All Inclusive mehmonxonalar va arzon narxlar haqida to'liq ma'lumot.",
    descRu: "Хургада — самый популярный курорт Египта. Красное море, кораллы, All Inclusive отели и доступные цены — всё в одном гиде.",
    date: "2026-03-20",
    readTimeUz: "6 daqiqa",
    readTimeRu: "6 минут",
    author: "SEM Travel",
    tagsUz: ["Misr", "Hurghada", "All Inclusive", "Plyaj"],
    tagsRu: ["Египет", "Хургада", "All Inclusive", "Пляж"],
    contentUz: `Hurghada — Misrning Qizil dengiz sohilidagi eng mashhur kurort shahar. Toshkentdan charter reyslar mavjud va narxlar juda qulay.

## Nima uchun Hurghada?

- **Yil bo'yi issiq** — qishda ham +22–28°C
- **Kristal toza Qizil dengiz** — eng zo'r suv osti dunyosi
- **All Inclusive mehmonxonalar** — juda qulaylik
- **Arzon narxlar** — Turkiyaga qaraganda arzonroq

## Qachon borish kerak?

**Eng yaxshi vaqt:** Oktyabr–Aprel (harorat +22–28°C)
Iyun–Avgust da harorat +38°C ga yetadi — qiyin bo'ladi.

## Mehmonxona tanlash

| Toifa | Narx/tun | Tavsiya |
|---|---|---|
| 3 yulduz | $40–70 | Arzon budget |
| 4 yulduz | $80–130 | Optimal tanlov |
| 5 yulduz | $150–300 | Premium dam olish |

**Eng zo'r rayon:** Sahl Hasheesh, Makadi Bay — tinch va chiroyli.

## Nima ko'rish kerak?

- **Qizil dengizda sho'ng'ish (snorkeling/diving)** — majburiy!
- **Luxor ekskursiyasi** — Fir'avn qabrlari, 4 soatlik yo'l
- **Cairo/Giza ekskursiyasi** — Misr piramidalari (1 kun)
- **Sinai yarim oroli** — Sharm el-Sheikh, Dahab

## Hurghada dan Luxor

Luxor ga borish — Misrga kelgan har bir sayyoh uchun majburiy. Hurghada dan:
- **Avtobus** — $15–20, 4 soat
- **Samolyot** — $50–80, 45 daqiqa
- **Ekskursiya** — $60–100 (transport + gid + kirish)

## Ovqatlanish

All Inclusive mehmonxonada ovqat bepul. Tashqarida:
- **Shawarma** — $2–3
- **Baliq restorani** — $15–25
- **O'zbek taomi** — Hurghada da ham topiladi!

## Viza

Misr ga kirishda aeroportda **viza olinadi:**
- Narxi: **$25** (AQSh dollari)
- Pasport + $25 — va viza tayyor!

## Transport

- **Aeroportdan mehmonxonaga** — transfer tur narxiga kiradi
- **Taksida** — narxni oldindan kelishing
- **Minibuss** — $0.5–2

**SEM Travel Hurghada turlariga bron qilish:** +998 71 275-55-55`,
    contentRu: `Хургада — самый популярный курортный город Египта на побережье Красного моря. Из Ташкента есть чартерные рейсы по очень доступным ценам.

## Почему Хургада?

- **Тепло круглый год** — даже зимой +22–28°C
- **Кристально чистое Красное море** — лучший подводный мир
- **Отели All Inclusive** — максимальное удобство
- **Доступные цены** — дешевле, чем в Турции

## Когда ехать?

**Лучшее время:** Октябрь–Апрель (температура +22–28°C)
В июне-августе жара достигает +38°C.

## Выбор отеля

| Категория | Цена/ночь | Рекомендация |
|---|---|---|
| 3 звезды | $40–70 | Бюджетный вариант |
| 4 звезды | $80–130 | Оптимальный выбор |
| 5 звёзд | $150–300 | Премиум отдых |

**Лучший район:** Сахл Хашиш, Макади Бэй — тихо и красиво.

## Что посмотреть?

- **Снорклинг/дайвинг** — обязательно!
- **Экскурсия в Луксор** — гробницы фараонов, 4 часа езды
- **Каир/Гиза** — пирамиды Египта (1 день)
- **Синайский полуостров** — Шарм-эль-Шейх, Дахаб

## Из Хургады в Луксор

Луксор — обязательная программа для каждого туриста в Египте:
- **Автобус** — $15–20, 4 часа
- **Самолёт** — $50–80, 45 минут
- **Экскурсия** — $60–100 (транспорт + гид + вход)

## Питание

В отеле All Inclusive еда бесплатно. В городе:
- **Шаурма** — $2–3
- **Рыбный ресторан** — $15–25

## Виза

Виза оформляется **прямо в аэропорту:**
- Стоимость: **$25** (доллары США)
- Паспорт + $25 — и виза готова!

**Забронировать тур в Хургаду через SEM Travel:** +998 71 275-55-55`,
  },
  {
    id: 6,
    slug: "gruziya-tbilisi-batumi",
    emoji: "🇬🇪",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=70",
    categoryUz: "Yo'nalishlar",
    categoryRu: "Направления",
    titleUz: "Gruziya: Tbilisi va Batumi — vizasiz sayohat qo'llanmasi",
    titleRu: "Грузия: Тбилиси и Батуми — гид для путешествия без визы",
    descUz: "Gruziya — O'zbekistondan eng yaqin va arzon xorijiy yo'nalish. Vizasiz, ajoyib oshxona, tog'lar va dengiz — barchasi bir mamlakatda.",
    descRu: "Грузия — ближайшее и доступное зарубежное направление из Узбекистана. Без визы, отличная кухня, горы и море — всё в одной стране.",
    date: "2026-03-18",
    readTimeUz: "5 daqiqa",
    readTimeRu: "5 минут",
    author: "SEM Travel",
    tagsUz: ["Gruziya", "Tbilisi", "Batumi", "Vizasiz"],
    tagsRu: ["Грузия", "Тбилиси", "Батуми", "Без визы"],
    contentUz: `Gruziya — Kavkaz tog'lari, qadimiy shaharlar, ajoyib sharoblar va mehribon xalq. Eng yaxshi tomoni — vizasiz va juda arzon!

## Nima uchun Gruziya?

- **Vizasiz** — O'zbekiston fuqarolari uchun 365 kungacha
- **Arzon** — $300–450 ga 5 kun ajoyib dam olish
- **Yaqin** — Toshkentdan 2–3 soat parvoz
- **Xavfsiz** — Yevropa darajasidagi xavfsizlik

## Tbilisi — poytaxt shahri

Tbilisi — 1500 yillik tarixga ega shahar. Ko'rish kerak:

- **Eski shahar (Metekhi)** — tarixiy ko'chalar, hammomlar
- **Narikala qal'asi** — tepalikdan shahar manzarasi
- **Rustaveli ko'chasi** — asosiy savdo ko'chasi
- **Mtatsminda park** — telefon simida tog'ga chiqish
- **Sulphur hammomlar** — Tbilisining brendi

**O'rtacha xarajat:** 2 kishiga 3 kun — $150–200 (mehmonxona + ovqat)

## Batumi — Qora dengiz shahri

Batumi — zamonaviy arxitektura, kazinolar va dengiz. May–Oktyabr eng yaxshi vaqt.

- **Batumi Boulevard** — dengiz bo'yidagi 7 km sayr yo'li
- **Ali va Nino haykali** — romantik monument
- **Adjara qishloqlari** — tog' va tabiat
- **Sarpi (Turkiya chegarasi)** — xarid qilish uchun

## Narxlar

| | Tbilisi | Batumi |
|---|---|---|
| Mehmonxona (3★) | $30–50/tun | $40–70/tun |
| Tushlik | $5–10 | $8–15 |
| Taksi (10 km) | $3–5 | $4–6 |
| Muzey kirish | $2–5 | $2–5 |

## Gruziya oshxonasi

Gruziya oshxonasini tatib ko'rmasangiz — hech narsani ko'rmadingiz!
- **Xinkali** (go'shtli xamirturush) — $0.3/dona
- **Xachapuri** (pishloqli non) — $3–5
- **Churchxela** — yong'oqli uzum shirinligi
- **Gruziya sharob** — dunyodagi eng qadimiy

## Toshkentdan Tbilisiga qanday borish?

- **To'g'ridan-to'g'ri reys** — Uzbekistan Airways, ~2.5 soat
- **Narx:** $150–250 (borib-qaytish)

**SEM Travel Gruziya turlarini bron qilish:** +998 71 275-55-55`,
    contentRu: `Грузия — Кавказские горы, древние города, изумительные вина и дружелюбные люди. Главное — без визы и очень дёшево!

## Почему Грузия?

- **Без визы** — для граждан Узбекистана до 365 дней
- **Дёшево** — отличный отдых за $300–450 на 5 дней
- **Близко** — 2–3 часа перелёта из Ташкента
- **Безопасно** — безопасность европейского уровня

## Тбилиси — столица

Тбилиси — город с 1500-летней историей. Что посмотреть:

- **Старый город (Метехи)** — исторические улочки, бани
- **Крепость Нарикала** — панорама города с высоты
- **Проспект Руставели** — главная торговая улица
- **Парк Мтацминда** — подъём на гору по канатной дороге
- **Серные бани** — бренд Тбилиси

**Средние расходы:** 2 человека, 3 дня — $150–200 (отель + еда)

## Батуми — город на Чёрном море

Батуми — современная архитектура, казино и море. Лучшее время — май–октябрь.

- **Батумский бульвар** — 7 км набережной
- **Статуя Али и Нино** — романтический монумент
- **Сёла Аджарии** — горы и природа
- **Сарпи (граница с Турцией)** — за покупками

## Цены

| | Тбилиси | Батуми |
|---|---|---|
| Отель (3★) | $30–50/ночь | $40–70/ночь |
| Обед | $5–10 | $8–15 |
| Такси (10 км) | $3–5 | $4–6 |
| Музей | $2–5 | $2–5 |

## Грузинская кухня

Грузинская кухня — одна из лучших в мире!
- **Хинкали** — $0.3/штука
- **Хачапури** — $3–5
- **Чурчхела** — сладость из орехов и винограда
- **Грузинское вино** — древнейшее в мире

## Как добраться из Ташкента?

- **Прямой рейс** — Uzbekistan Airways, ~2.5 часа
- **Стоимость:** $150–250 (туда-обратно)

**Забронировать тур в Грузию через SEM Travel:** +998 71 275-55-55`,
  },
  {
    id: 7,
    slug: "tailand-phuket-qollanma",
    emoji: "🇹🇭",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=70",
    categoryUz: "Yo'nalishlar",
    categoryRu: "Направления",
    titleUz: "Tailand Phuket: to'liq qo'llanma — plyajlar, narxlar, maslahatlar",
    titleRu: "Таиланд Пхукет: полный гид — пляжи, цены, советы",
    descUz: "Phuket — Tailandning eng mashhur oroli. Oq qumli plyajlar, tropik tabiat, mazali taom va vizasiz kirish — barchasi bu maqolada.",
    descRu: "Пхукет — самый известный остров Таиланда. Белые пляжи, тропическая природа, вкусная еда и въезд без визы — всё в этом гиде.",
    date: "2026-03-22",
    readTimeUz: "7 daqiqa",
    readTimeRu: "7 минут",
    author: "SEM Travel",
    tagsUz: ["Tailand", "Phuket", "Plyaj", "Vizasiz"],
    tagsRu: ["Таиланд", "Пхукет", "Пляж", "Без визы"],
    contentUz: `Phuket — Tailandning Andaman dengizidagi eng mashhur oroli. Har yili 10 million dan ortiq sayyoh tashrif buyuradi. Nima uchun bu qadar mashhur?

## Viza

O'zbekiston fuqarolari Tailandga **vizasiz** kiradi — 30 kunlik muddatga. Faqat pasport va qaytish bileti bo'lsa yetarli.

## Qachon borish kerak?

- **Noyabr–Aprel** (quruq mavsum) — **eng yaxshi vaqt**, dengiz tinch, havo ochiq
- **May–Oktyabr** (yomg'ir mavsum) — arzonroq, lekin yomg'ir ko'p

## Phuket plyajlari

| Plyaj | Xususiyat | Narx |
|---|---|---|
| Patong Beach | Eng gavjum, nightlife | Bepul |
| Kata Beach | Serfing, oilaviy | Bepul |
| Karon Beach | Tinch, keng | Bepul |
| Maya Bay | Izolyatsiya, film qahramonlari | Bepul |
| Freedom Beach | Maxfiy, go'zal | Bepul |

## Nima ko'rish kerak?

- **Phi Phi orollari** — bir kunlik sayohat, $30–50
- **Big Buddha** — ulkan Budda haykali, bepul
- **Old Phuket Town** — Portugalliya uslubidagi binolar
- **Phang Nga Bay** — James Bond oroli
- **Elephant sanctuary** — fillarga g'amxo'rlik

## Mehmonxonalar

- **3 yulduz:** $40–70/tun (Patong)
- **4 yulduz:** $80–150/tun (Kata, Karon)
- **5 yulduz:** $200–500/tun (Surin, Bang Tao)

**Maslahat:** Patong — ya'ni nightlife uchun. Kata/Karon — oilaviy va romantikiligi bilan zo'r.

## Taom

Tailand oshxonasi — dunyodagi eng zo'r 5 ta orasida!
- **Pad Thai** (qovurilgan guruch noodles) — $2–3
- **Tom Yum** (achchiq-nordon sho'rva) — $3–5
- **Som Tam** (papaya salati) — $2
- **Mango Sticky Rice** — $2
- **Street food** — $1–3 ga to'q ovqat

## Transport

- **Tuk-tuk** — qalin sayyohlik, $3–10
- **Skuter ijarasi** — $8–15/kun (eng qulay)
- **Grab (Uber analog)** — arzon va qulay

## Toshkentdan Phukketga qanday borish?

To'g'ridan-to'g'ri reys yo'q, 1–2 to'xtash (Bangkok, Kuala Lumpur, Dubai).
- **Narx:** $400–600 (borib-qaytish)
- **Vaqt:** 9–14 soat

**SEM Travel Tailand turlarini bron qilish:** +998 71 275-55-55`,
    contentRu: `Пхукет — самый известный остров Таиланда в Андаманском море. Более 10 миллионов туристов ежегодно. Почему так популярен?

## Виза

Граждане Узбекистана въезжают в Таиланд **без визы** — на 30 дней. Нужен только паспорт и обратный билет.

## Когда ехать?

- **Ноябрь–Апрель** (сухой сезон) — **лучшее время**, море спокойное, небо чистое
- **Май–Октябрь** (сезон дождей) — дешевле, но много дождей

## Пляжи Пхукета

| Пляж | Особенность | Вход |
|---|---|---|
| Patong Beach | Самый оживлённый, ночная жизнь | Бесплатно |
| Kata Beach | Сёрфинг, семейный | Бесплатно |
| Karon Beach | Тихий, широкий | Бесплатно |
| Maya Bay | Уединённый, из фильма | Бесплатно |
| Freedom Beach | Секретный, красивый | Бесплатно |

## Что посмотреть?

- **Острова Пхи-Пхи** — однодневная поездка, $30–50
- **Большой Будда** — огромная статуя, бесплатно
- **Старый Пхукет-таун** — португальская архитектура
- **Залив Пханг Нга** — остров Джеймса Бонда
- **Elephant Sanctuary** — общение со слонами

## Отели

- **3 звезды:** $40–70/ночь (Патонг)
- **4 звезды:** $80–150/ночь (Ката, Карон)
- **5 звёзд:** $200–500/ночь (Сурин, Банг Тао)

**Совет:** Патонг — для ночной жизни. Ката/Карон — лучше для семей и романтики.

## Еда

Тайская кухня — в топ-5 лучших в мире!
- **Пад Тай** — $2–3
- **Том Ям** — $3–5
- **Сом Там** — $2
- **Манго со Sticky Rice** — $2
- **Street food** — сытно за $1–3

## Транспорт

- **Тук-тук** — туристический, $3–10
- **Аренда скутера** — $8–15/день (удобнее всего)
- **Grab (аналог Uber)** — дёшево и удобно

## Как добраться из Ташкента?

Прямых рейсов нет, 1–2 пересадки (Бангкок, Куала-Лумпур, Дубай).
- **Цена:** $400–600 (туда-обратно)
- **Время:** 9–14 часов

**Забронировать тур в Таиланд через SEM Travel:** +998 71 275-55-55`,
  },
  {
    id: 8,
    slug: "yangi-yil-xorijda",
    emoji: "🎆",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=70",
    categoryUz: "Maslahatlar",
    categoryRu: "Советы",
    titleUz: "Yangi yilni xorijda kutib olish: top 5 yo'nalish Toshkentdan",
    titleRu: "Встретить Новый год за рубежом: топ 5 направлений из Ташкента",
    descUz: "2026-2027 yangi yilini xorijda kutib olmoqchimisiz? Mana eng mashhur 5 ta yo'nalish, narxlar va maslahatlar.",
    descRu: "Хотите встретить Новый 2026-2027 год за рубежом? Топ-5 направлений, цены и советы для незабываемого праздника.",
    date: "2026-03-24",
    readTimeUz: "5 daqiqa",
    readTimeRu: "5 минут",
    author: "SEM Travel",
    tagsUz: ["Yangi yil", "Xorijda", "Dam olish", "Top yo'nalishlar"],
    tagsRu: ["Новый год", "За рубежом", "Отдых", "Топ направления"],
    contentUz: `Yangi yilni xorijda kutib olish — eng yaxshi qo'shma sovg'a! Lekin bron qilishni kech qolmang — yangi yil turlari oktabrda tugab ketadi.

## 1. Dubai — hashamat va salut

**Narx:** $900–1,400/kishi (5 kun)
**Nima uchun:** Dunyodagi eng katta yangi yil salutlaridan biri Burj Khalifa tepasida. Fantastik manzara.

- Burj Khalifa yangi yil salugi — top darajali
- Dubai Mall — ulkan bayram dekoratsiyalari
- Atlantis New Year party
- Desert safari

**Eslatma:** Dubai dekabr-yanvarda +22°C — ideal ob-havo.

## 2. Istanbul — ikki dunyoning ko'prigi

**Narx:** $600–900/kishi (5 kun)
**Nima uchun:** Yevropa va Osiyo orasidagi shahar. Boğaziçi ko'prigida yangi yil — unutilmas tajriba.

- Taksim maydoni bayram
- Boğaziçi bo'yida salut
- Galata minorasi
- Kapali Charshi — xarid

## 3. Tbilisi — romantik va arzon

**Narx:** $350–500/kishi (5 kun)
**Nima uchun:** Gruziya yangi yilni (Ded Moroz bilan!) juda katta nishonlaydi. Arzon va juda kayfiyatli.

- Rustaveli ko'chasi bayram
- Ko'chada bepul konsertlar
- Gruziya sharob va ovqat
- Qor bo'lishi mumkin — romantik!

## 4. Tailand (Phuket/Bangkok)

**Narx:** $800–1,100/kishi (7 kun)
**Nima uchun:** Issiq dengiz, plyajda yangi yil — noyob tajriba. Bangkok'da ulkan show.

- Plyajda yangi yil saluti
- Full Moon party
- Bangkok Countdown
- +28°C dengizda suzish

## 5. Bali, Indoneziya

**Narx:** $900–1,200/kishi (7 kun)
**Nima uchun:** Bali yangi yilni «Nyepi» bayramida o'zgacha nishonlaydi. Tropik jannat.

- Ubud ziyofatlari
- Kuta plyajida salut
- Spa va relax
- Vizasiz kirish

---

## Muhim eslatma!

Yangi yil turlari **3–4 oy oldin** sotiladi. Oktabr-noyabrda bron qilmasangiz, narxlar 2 barobarga ko'tariladi yoki joy qolmaydi.

**Hoziroq bron qiling:** +998 71 275-55-55 | WhatsApp +998 94 664-22-22`,
    contentRu: `Встретить Новый год за рубежом — лучший подарок себе! Но не затягивайте с бронированием — новогодние туры раскупают ещё в октябре.

## 1. Дубай — роскошь и салют

**Цена:** $900–1400/чел (5 дней)
**Почему:** Один из крупнейших новогодних салютов в мире — у Бурдж Халифа. Незабываемо.

- Салют у Бурдж Халифа — топ уровень
- Dubai Mall — грандиозные украшения
- Новогодняя вечеринка Atlantis
- Сафари в пустыне

**Примечание:** В декабре-январе +22°C — идеальная погода.

## 2. Стамбул — мост двух миров

**Цена:** $600–900/чел (5 дней)
**Почему:** Город между Европой и Азией. Новый год на берегу Босфора — незабываемо.

- Праздник на площади Таксим
- Салют у Босфора
- Галатская башня
- Гранд Базар — шопинг

## 3. Тбилиси — романтично и дёшево

**Цена:** $350–500/чел (5 дней)
**Почему:** Грузия отмечает Новый год с Дедом Морозом очень масштабно. Дёшево и атмосферно.

- Праздник на проспекте Руставели
- Бесплатные концерты на улицах
- Грузинское вино и еда
- Возможен снег — романтика!

## 4. Таиланд (Пхукет/Бангкок)

**Цена:** $800–1100/чел (7 дней)
**Почему:** Тёплое море, Новый год на пляже — уникальный опыт. В Бангкоке — огромное шоу.

- Салют на пляже
- Full Moon party
- Bangkok Countdown
- Купаться при +28°C

## 5. Бали, Индонезия

**Цена:** $900–1200/чел (7 дней)
**Почему:** Бали отмечает Новый год по-особому — «Ньепи». Тропический рай.

- Праздники в Убуде
- Салют на пляже Кута
- СПА и релакс
- Въезд без визы

---

## Важно!

Новогодние туры **раскупают за 3–4 месяца**. Если не забронировать в октябре-ноябре, цены вырастут вдвое или мест не будет.

**Бронируйте сейчас:** +998 71 275-55-55 | WhatsApp +998 94 664-22-22`,
  },
  {
    id: 9,
    slug: "oilaviy-sayohat-qayerga",
    emoji: "👨‍👩‍👧‍👦",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=70",
    categoryUz: "Maslahatlar",
    categoryRu: "Советы",
    titleUz: "Oilaviy sayohat: bolalar bilan qayerga borish kerak? Top 5 yo'nalish",
    titleRu: "Семейный отдых: куда поехать с детьми? Топ-5 направлений",
    descUz: "Bolalar bilan sayohat qilish haqida o'ylayapsizmi? Mana oilaviy sayohat uchun eng mos 5 ta yo'nalish — xavfsiz, qiziqarli va arzon.",
    descRu: "Думаете о путешествии с детьми? Вот 5 лучших направлений для семейного отдыха — безопасных, интересных и доступных.",
    date: "2026-03-19",
    readTimeUz: "6 daqiqa",
    readTimeRu: "6 минут",
    author: "SEM Travel",
    tagsUz: ["Oilaviy", "Bolalar bilan", "Sayohat", "Maslahat"],
    tagsRu: ["Семейный", "С детьми", "Путешествие", "Советы"],
    contentUz: `Bolalar bilan sayohat qilish — alohida mas'uliyat. To'g'ri joy tanlash muhim: xavfsiz, qiziqarli, qulay va bolalarga mos.

## 1. Turkiya (Antalya) — eng yaxshi tanlov

**Nima uchun oilaviy?**
- All Inclusive — bolalar ovqati haqida bosh qotirmaysiz
- Suv parklari (Aquapark) — bolalar uchun jannat
- Qumli plyajlar — kichik bolalar uchun ideal
- Ko'plab 5 yulduzli oilaviy mehmonxonalar

**Tavsiya:** Barut Hotels, Rixos, Maxx Royal — bolalar uchun alohida klublari bor.

**Narx:** $600–900/kishi (7 kun, All Inclusive)

## 2. Dubai — bolalar uchun attraksionlar

**Nima uchun oilaviy?**
- Dubai Mall ichida muzqaymoq trekki
- Dubai Frame
- Legoland, Motiongate, Bollywood Parks
- Atlantis Aquaventure Waterpark
- Dubai Safari Park

**Kamchilik:** Qimmatroq — $1,200–1,800/kishi

## 3. Gruziya — tabiat va madaniyat

**Nima uchun oilaviy?**
- Tbilisi hayvonot bog'i
- Vake park
- Mtatsminda tog' va karusel
- Gudauri (qishda ski kurort)
- Arzon va xavfsiz

**Narx:** $350–500/kishi (5 kun)

## 4. Tailand — tropik sarguzasht

**Nima uchun oilaviy?**
- Fillar bilan uchrashuv
- Tropik tabiat
- Nong Nooch Botanical Garden
- Dream World amusement park
- Plajlar va kristal dengiz

**Narx:** $700–1,000/kishi (7 kun)

## 5. Misr — tarix va dengiz

**Nima uchun oilaviy?**
- Fir'avn piramidalari — bolalar uchun hayratlanarli
- Qizil dengiz (snorkeling)
- Luxor va Karnak ibodatxonalari
- Hurghada Sealarium (suv osti dunyosi)

**Narx:** $550–800/kishi (7 kun)

---

## Bolalar bilan sayohat uchun maslahatlar

1. **Erta bron qiling** — oilaviy nomerlari tez tugaydi
2. **All Inclusive tanlang** — oziq-ovqat muammosi yo'q
3. **Transfer qo'shing** — aeroport charchoqni kamaytiradi
4. **Sug'urta majburiy** — bolalar uchun tibbiy sug'urta albatta
5. **Qora kunlar fondi** — rejalashtirilmagan xarajatlar uchun +20%

**Oilaviy tur bron qilish:** +998 71 275-55-55`,
    contentRu: `Путешествие с детьми — особая ответственность. Важно выбрать правильное место: безопасное, интересное, комфортное и подходящее для детей.

## 1. Турция (Анталья) — лучший выбор

**Почему семейный?**
- All Inclusive — не думаете о детском питании
- Аквапарки — рай для детей
- Песчаные пляжи — идеально для малышей
- Много 5-звёздочных семейных отелей

**Рекомендуем:** Barut Hotels, Rixos, Maxx Royal — отдельные детские клубы.

**Цена:** $600–900/чел (7 дней, All Inclusive)

## 2. Дубай — аттракционы для детей

**Почему семейный?**
- Каток в Dubai Mall
- Dubai Frame
- Legoland, Motiongate, Bollywood Parks
- Atlantis Aquaventure Waterpark
- Dubai Safari Park

**Минус:** Дороже — $1200–1800/чел

## 3. Грузия — природа и культура

**Почему семейный?**
- Тбилисский зоопарк
- Парк Ваке
- Гора Мтацминда и карусели
- Гудаури (горнолыжный курорт зимой)
- Дёшево и безопасно

**Цена:** $350–500/чел (5 дней)

## 4. Таиланд — тропические приключения

**Почему семейный?**
- Общение со слонами
- Тропическая природа
- Nong Nooch Botanical Garden
- Dream World
- Пляжи и кристальное море

**Цена:** $700–1000/чел (7 дней)

## 5. Египет — история и море

**Почему семейный?**
- Пирамиды — дети в восторге
- Красное море (снорклинг)
- Луксор и храм Карнак
- Sealarium в Хургаде

**Цена:** $550–800/чел (7 дней)

---

## Советы для путешествия с детьми

1. **Бронируйте заранее** — семейные номера раскупают быстро
2. **Выбирайте All Inclusive** — нет проблем с едой
3. **Добавьте трансфер** — уменьшает усталость от аэропорта
4. **Страховка обязательна** — медицинская страховка для детей
5. **Резервный фонд** — +20% на непредвиденные расходы

**Забронировать семейный тур:** +998 71 275-55-55`,
  },
  {
    id: 10,
    slug: "schengen-viza-olish",
    emoji: "🇪🇺",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=70",
    categoryUz: "Viza",
    categoryRu: "Виза",
    titleUz: "Schengen vizasi: O'zbekistondan qanday olish mumkin? 2026 qo'llanma",
    titleRu: "Шенгенская виза: как получить из Узбекистана? Руководство 2026",
    descUz: "Yevropa Shengen zonasiga viza olish — ko'pchilik uchun murakkab jarayon. Bu qo'llanmada hamma narsa sodda tushuntirilgan: hujjatlar, muddatlar, narxlar.",
    descRu: "Шенгенская виза — сложный процесс для многих. В этом руководстве всё объяснено просто: документы, сроки, стоимость и советы.",
    date: "2026-03-21",
    readTimeUz: "8 daqiqa",
    readTimeRu: "8 минут",
    author: "SEM Travel",
    tagsUz: ["Schengen", "Yevropa", "Viza", "Hujjatlar"],
    tagsRu: ["Шенген", "Европа", "Виза", "Документы"],
    contentUz: `Schengen vizasi — Yevropaning 27 mamlakatiga kirish imkonini beradi: Germaniya, Fransiya, Italiya, Ispaniya va boshqalar. Bir viza bilan 27 mamlakatni kezishingiz mumkin!

## Shengen zonasi mamlakatlari

Avstriya, Belgiya, Chexiya, Daniya, Estoniya, Finlandiya, Fransiya, Germaniya, Gretsiya, Vengriya, Islandiya, Italiya, Latviya, Liechtenstein, Litva, Lyuksemburg, Malta, Niderlandiya, Norvegiya, Polsha, Portugaliya, Slovakiya, Sloveniya, Ispaniya, Shvetsiya, Shveytsariya, Xorvatiya.

## Viza turlari

| Tur | Muddati | Uchun |
|---|---|---|
| C vizasi (turист) | 90 kun/180 kun | Sayohat, turizm |
| Bir martalik | 1 kirish | Birinchi bor boruvchilar |
| Ko'p martalik | Bir necha kirish | Tajribali sayyohlar |

## Kerakli hujjatlar

### Majburiy:
1. **Pasport** — 6 oydan ortiq amal qilish muddati, 2 ta bo'sh bet
2. **Ilgari pasport** (agar bo'lsa) — vizalar tarixini ko'rsatish uchun
3. **Ariza shakli** — konsullik saytidan yuklab olish
4. **Fotosurat** — 3.5×4.5 sm, oq fon, 6 oy ichida olingan (2 ta)
5. **Tibbiy sug'urta** — kamida €30,000 qoplamasi bor

### Moliyaviy hujjatlar:
6. **Bank ko'chirmasi** — 3 oylik, yetarli mablag' (kuniga €100 tavsiya etiladi)
7. **Ish joyi ma'lumotnomasi** — lavozim, maosh, ish joyi
8. **Soliq deklaratsiyasi** yoki **daromad hujjati**

### Sayohat hujjatlari:
9. **Mehmonxona bronlash** — barcha tunlar uchun
10. **Aviabilet bronlash** — borib-qaytish
11. **Sayohat dasturi** (itinerary)

### Qo'shimcha (talab qilinishi mumkin):
12. **Nikoh guvohnomasi** (oila bilan borganda)
13. **Bolaning tug'ilganlik guvohnomasi**
14. **Kutib oluvchi shaxsning taklifi** (do'stnikida qolganda)

## Narxlar

- **Konsullik to'lovi:** €90 (kattalar), €45 (6–12 yosh), bepul (6 yoshgacha)
- **Servis to'lovi:** €30–50 (viza markaziga)
- **Sug'urta:** $20–40
- **Jami:** €140–180 taxminan

## Muddatlar

- **Ariza topshirish:** Sayohatdan kamida 15 kun oldin (3 oy oldin ham bo'ladi)
- **Ko'rib chiqiladi:** 10–15 ish kuni (ba'zan 1 oy)
- **Toshkent VFS Global markazi** — buyurtma qilish: vfsglobal.com

## Qaysi mamlakat konsulligiga murojaat qilish?

**Birinchi kirish qoidasi:** Eng ko'p vaqt o'tkazadigan mamlakatning konsulligiga murojaat qilish kerak.

**Masalan:** 10 kun Italiyada, 3 kun Fransiyada → Italiya konsulligi.

## SEM Travel viza xizmati

SEM Travel Schengen viza olishda to'liq yordam beradi:
- Hujjatlar ro'yxatini tayyorlash
- Ariza to'ldirish
- VFS Global uchun buyurtma
- Hujjatlarni tekshirish va to'g'rilash
- Rad etilish ehtimolini minimallash

**Murojaat:** +998 71 275-55-55`,
    contentRu: `Шенгенская виза открывает 27 стран Европы: Германия, Франция, Италия, Испания и другие. Одна виза — 27 стран!

## Страны Шенгенской зоны

Австрия, Бельгия, Чехия, Дания, Эстония, Финляндия, Франция, Германия, Греция, Венгрия, Исландия, Италия, Латвия, Лихтенштейн, Литва, Люксембург, Мальта, Нидерланды, Норвегия, Польша, Португалия, Словакия, Словения, Испания, Швеция, Швейцария, Хорватия.

## Типы виз

| Тип | Срок | Для кого |
|---|---|---|
| Виза C (турист) | 90 дней/180 дней | Туризм, путешествия |
| Однократная | 1 въезд | Первый раз |
| Многократная | Несколько въездов | Опытные путешественники |

## Необходимые документы

### Обязательные:
1. **Загранпаспорт** — срок действия 6+ месяцев, 2 чистых страницы
2. **Старый загранпаспорт** (если есть) — для истории виз
3. **Анкета** — скачать с сайта консульства
4. **Фото** — 3.5×4.5 см, белый фон, сделано 6 месяцев назад (2 штуки)
5. **Медицинская страховка** — покрытие не менее €30 000

### Финансовые документы:
6. **Выписка из банка** — за 3 месяца, достаточный баланс (рекомендуется €100/день)
7. **Справка с работы** — должность, зарплата, место работы
8. **Налоговая декларация** или **документ о доходах**

### Документы о поездке:
9. **Бронирование отеля** — на все ночи
10. **Бронирование авиабилетов** — туда-обратно
11. **Маршрут поездки** (itinerary)

### Дополнительные (могут потребоваться):
12. **Свидетельство о браке** (при поездке с семьёй)
13. **Свидетельство о рождении ребёнка**
14. **Приглашение от принимающего лица** (при проживании у друзей)

## Стоимость

- **Консульский сбор:** €90 (взрослые), €45 (6–12 лет), бесплатно (до 6 лет)
- **Сервисный сбор VFS:** €30–50
- **Страховка:** $20–40
- **Итого:** примерно €140–180

## Сроки

- **Подача заявки:** минимум за 15 дней до поездки (можно за 3 месяца)
- **Рассмотрение:** 10–15 рабочих дней (иногда до 1 месяца)
- **VFS Global в Ташкенте** — запись: vfsglobal.com

## В консульство какой страны обращаться?

**Правило первого въезда:** нужно обращаться в консульство страны, где вы проведёте больше всего времени.

**Например:** 10 дней в Италии, 3 дня во Франции → консульство Италии.

## Помощь с визой от SEM Travel

SEM Travel оказывает полную помощь в получении Шенгенской визы:
- Подготовка пакета документов
- Заполнение анкеты
- Запись в VFS Global
- Проверка и исправление документов
- Минимизация риска отказа

**Обращайтесь:** +998 71 275-55-55`,
  },
  {
    id: 11,
    slug: "issiq-kol-2026",
    emoji: "🌊",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=70",
    categoryUz: "Qirgiziston turu",
    categoryRu: "Тур в Кыргызстан",
    titleUz: "Issiq-Ko'l 2026 — Narxlar, Mehmonxonalar va Sanalar | SEM Travel",
    titleRu: "Иссык-Куль 2026 — Цены, Отели и Даты вылета | SEM Travel",
    descUz: "Toshkentdan Issiq-Ko'lga 2026 yil yozida tur: 7 kecha $400 dan, 10 kecha $530 dan. Aviaparvoz, transfer va mehmonxona kiritilgan. Sanalar, narxlar va bron qilish.",
    descRu: "Тур на Иссык-Куль из Ташкента лето 2026: 7 ночей от $400, 10 ночей от $530. Авиаперелёт, трансфер и отель включены. Даты заезда, цены и бронирование.",
    date: "2026-03-26",
    readTimeUz: "4 daqiqa",
    readTimeRu: "4 минуты",
    author: "SEM Travel",
    tagsUz: ["Issiq-Ko'l", "Qirgiziston", "Yoz ta'tili 2026", "Plyaj turi", "Toshkentdan"],
    tagsRu: ["Иссык-Куль", "Кыргызстан", "Летний отдых 2026", "Пляжный тур", "Из Ташкента"],
    contentUz: `Issiq-Ko'l — Markaziy Osiyoning eng yirik ko'li va O'zbekistonliklarning sevimli yozgi dam olish manzili. Dengiz sathidan 1606 m balandlikda joylashgan bu ko'l toza havo, kristall suv va ajoyib tog' manzaralari bilan mashhur. **Viza shart emas** — O'zbekiston fuqarolari Qirgizistonga vizasiz kiradi.

## Issiq-Ko'l nima uchun mashhur?

- **Toza ekologiya** — sanoat korxonalari yo'q, havo va suv toza
- **Mineralga boy suv** — dengiz suvi kabi tuz tarkibiga ega, davolovchi xususiyatlar
- **Tog' va plyaj** — bir joyda tog' manzarasi va plyaj dam olishi
- **Arzon narx** — Turkiya yoki Dubayga qaraganda ancha tejamkor
- **Yaqin masofada** — Toshkentdan 1.5 soatlik uchish

---

## 7 Kecha / 8 Kun — Narxlar va Sanalar

**2026 yil yoz sanalari:**

| Sanalar | |
|---|---|
| 27.06.2026 | 04.07.2026 |
| 04.07.2026 | 11.07.2026 |
| 11.07.2026 | 18.07.2026 |
| 18.07.2026 | 25.07.2026 |
| 25.07.2026 | 01.08.2026 |

**Mehmonxonalar va narxlar (1 kishiga, joylashtirish bilan):**

| Mehmonxona | Turi | Narx |
|---|---|---|
| 🏡 La Marina | Mehmonxona | **$400** |
| 🏨 Tri Koroni | Mehmonxona | **$560** |
| 🏨 Avrora Plyus | Mehmonxona | **$579** |
| 🏥 Qirg'iz Dengizi | Sanatoriy | **$580** |
| 🏖 Oltin Qumlar | Pansionat | **$580** |
| 🏖 Vavilon | Pansionat | **$584** |
| 🏝 Ayan Resort | Pansionat | **$588** |
| 🏖 Oltun-Qum | Pansionat | **$599** |

---

## 10 Kecha / 11 Kun — Narxlar va Sanalar

**2026 yil yoz sanalari:**

| Sanalar | |
|---|---|
| 30.06.2026 | 10.07.2026 |
| 07.07.2026 | 17.07.2026 |
| 14.07.2026 | 24.07.2026 |
| 21.07.2026 | 31.07.2026 |
| 28.07.2026 | 07.08.2026 |

**Mehmonxonalar va narxlar:**

| Mehmonxona | Turi | Narx |
|---|---|---|
| 🏡 La Marina | Mehmonxona | **$530** |
| 🏨 Tri Koroni | Mehmonxona | **$680** |
| 🏖 Vavilon | Pansionat | **$699** |
| 🏥 Qirg'iz Dengizi | Sanatoriy | **$740** |
| 🏖 Oltun-Qum | Pansionat | **$750** |

---

## Turga nima kiradi?

- ✈️ **Aviaparvoz** — Toshkent – Issiq-Ko'l – Toshkent (to'g'ridan-to'g'ri reys)
- 🚌 **Transfer** — aeroport → mehmonxona → aeroport
- 🏨 **Turar joy** — tanlangan mehmonxonada

---

## Tez-tez so'raladigan savollar

## Issiq-Ko'lga viza kerakmi?

Yo'q. O'zbekiston fuqarolari Qirgizistonga **vizasiz** kiradi. Faqat pasport kerak (kamida 6 oy amal qilishi kerak).

## Issiq-Ko'lga eng arzon tur qancha turadi?

2026 yilda Toshkentdan Issiq-Ko'lga **7 kechalik tur $400 dan** boshlanadi (La Marina mehmonxonasi, aviaparvoz va transfer bilan). 10 kechalik tur esa **$530 dan** boshlanadi.

## Qaysi mehmonxona eng yaxshi?

- **Arzon va qulay:** La Marina ($400/7 kecha)
- **O'rta narx:** Tri Koroni, Avrora Plyus ($560–579/7 kecha)
- **Davolovchi:** Qirg'iz Dengizi sanatoriysi ($580/7 kecha)
- **Plyaj uchun:** Vavilon, Oltun-Qum pansionatlari

## Issiq-Ko'lga qachon borish kerak?

Eng yaxshi vaqt — **iyun oxiri — avgust boshi**. Suv harorati +22–24°C ga yetadi. Aynan shu davr uchun biz sanalarni taklif qilyapmiz.

## Bolalar bilan borsa bo'ladimi?

Ha, Issiq-Ko'l oilaviy dam olish uchun juda mos. Ko'lning sayoz qirg'og'i, toza havo va tinch muhit bolalar uchun xavfsiz.

---

**Hoziroq bron qiling — joy soni cheklangan!** SEM Travel orqali bron qilishda barcha tashvishlarni biz hal qilamiz.`,
    contentRu: `Иссык-Куль — крупнейшее озеро Центральной Азии и любимое место летнего отдыха узбекистанцев. Расположенное на высоте 1606 м над уровнем моря, оно привлекает чистым воздухом, кристальной водой и живописными горными пейзажами. **Виза не нужна** — граждане Узбекистана въезжают в Кыргызстан без визы.

## Почему Иссык-Куль?

- **Чистая экология** — нет промышленных предприятий, воздух и вода чистые
- **Минерализованная вода** — схожа по составу с морской, обладает лечебными свойствами
- **Горы и пляж** — горные пейзажи и пляжный отдых в одном месте
- **Доступные цены** — значительно дешевле Турции или Дубая
- **Близко** — 1.5 часа лёта из Ташкента

---

## 7 ночей / 8 дней — Цены и Даты

**Даты заезда, лето 2026:**

| Заезд | Выезд |
|---|---|
| 27.06.2026 | 04.07.2026 |
| 04.07.2026 | 11.07.2026 |
| 11.07.2026 | 18.07.2026 |
| 18.07.2026 | 25.07.2026 |
| 25.07.2026 | 01.08.2026 |

**Отели и цены (на 1 человека, с размещением):**

| Отель | Тип | Цена |
|---|---|---|
| 🏡 La Marina | Гостевой дом | **$400** |
| 🏨 Три Короны | Отель | **$560** |
| 🏨 Аврора Плюс | Отель | **$579** |
| 🏥 Кыргызское Взморье | Санаторий | **$580** |
| 🏖 Золотые Пески | Пансионат | **$580** |
| 🏖 Вавилон | Пансионат | **$584** |
| 🏝 Аян Резорт | Пансионат | **$588** |
| 🏖 Алтын-Кум | Пансионат | **$599** |

---

## 10 ночей / 11 дней — Цены и Даты

**Даты заезда, лето 2026:**

| Заезд | Выезд |
|---|---|
| 30.06.2026 | 10.07.2026 |
| 07.07.2026 | 17.07.2026 |
| 14.07.2026 | 24.07.2026 |
| 21.07.2026 | 31.07.2026 |
| 28.07.2026 | 07.08.2026 |

**Отели и цены:**

| Отель | Тип | Цена |
|---|---|---|
| 🏡 La Marina | Гостевой дом | **$530** |
| 🏨 Три Короны | Отель | **$680** |
| 🏖 Вавилон | Пансионат | **$699** |
| 🏥 Кыргызское Взморье | Санаторий | **$740** |
| 🏖 Алтын-Кум | Пансионат | **$750** |

---

## Что входит в тур?

- ✈️ **Авиаперелёт** — Ташкент – Иссык-Куль – Ташкент (прямой рейс)
- 🚌 **Трансфер** — аэропорт → отель → аэропорт
- 🏨 **Проживание** — в выбранном отеле

---

## Часто задаваемые вопросы

## Нужна ли виза на Иссык-Куль?

Нет. Граждане Узбекистана въезжают в Кыргызстан **без визы**. Нужен только загранпаспорт (срок действия не менее 6 месяцев).

## Сколько стоит самый дешёвый тур на Иссык-Куль из Ташкента?

В 2026 году тур на **7 ночей начинается от $400** (гостевой дом La Marina, с авиаперелётом и трансфером). Тур на **10 ночей — от $530**.

## Какой отель выбрать?

- **Бюджетный вариант:** La Marina ($400/7 ночей)
- **Средний ценовой сегмент:** Три Короны, Аврора Плюс ($560–579/7 ночей)
- **Лечебный отдых:** Санаторий Кыргызское Взморье ($580/7 ночей)
- **Пляжный отдых:** Вавилон, Алтын-Кум пансионаты

## Когда лучше ехать на Иссык-Куль?

Лучшее время — **конец июня — начало августа**. Температура воды достигает +22–24°C. Именно на эти даты предлагаем туры.

## Можно ли ехать с детьми?

Да, Иссык-Куль отлично подходит для семейного отдыха. Пологий берег, чистый воздух и спокойная обстановка — идеально для детей.

---

**Бронируйте сейчас — количество мест ограничено!** При бронировании через SEM Travel мы берём на себя все хлопоты.`,
  },
  {
    id: 12,
    slug: "tbilisi-trabzon-batumi-2026",
    emoji: "🔔",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=70",
    categoryUz: "Gruziya va Turkiya turi",
    categoryRu: "Тур Грузия и Турция",
    titleUz: "Tbilisi + Trabzon + Batumi 2026 — Qora dengiz bo'ylab sayohat | SEM Travel",
    titleRu: "Тбилиси + Трабзон + Батуми 2026 — Путешествие по Чёрному морю | SEM Travel",
    descUz: "Toshkentdan Tbilisi–Trabzon–Batumi turi 2026: ikkita davlat, uchta shahar, $849 dan. Barcha ekskursiyalar narxga kiritilgan. Iyun-iyul sanalari va bron qilish.",
    descRu: "Тур Тбилиси–Трабзон–Батуми из Ташкента 2026: две страны, три города, от $849. Все экскурсии включены. Даты вылета июнь-июль и бронирование.",
    date: "2026-03-26",
    readTimeUz: "4 daqiqa",
    readTimeRu: "4 минуты",
    author: "SEM Travel",
    tagsUz: ["Gruziya", "Turkiya", "Tbilisi", "Batumi", "Trabzon", "Qora dengiz", "2026"],
    tagsRu: ["Грузия", "Турция", "Тбилиси", "Батуми", "Трабзон", "Чёрное море", "2026"],
    contentUz: `Tbilisi, Trabzon va Batumi — uchta ajoyib shahar, ikkita davlat va Qora dengiz bo'ylab unutilmas sayohat. Bu tur bir necha yo'nalishni birlashtirib, eng ko'p taassurot beradi. Gruziya va Turkiyaga **viza shart emas** — O'zbekiston fuqarolari uchun.

## Tur haqida

- **Mamlakat:** Gruziya + Turkiya
- **Shaharlar:** Tbilisi → Trabzon → Batumi
- **Davomiylik:** 7 kecha / 8 kun
- **Narx:** **$849 dan** (1 kishiga, barcha ekskursiyalar bilan)
- **Barcha ekskursiyalar narxga kiritilgan — qo'shimcha to'lovsiz!**

---

## Uchish sanalari

| Jo'nash | Qaytish |
|---|---|
| 11.06.2026 | 18.06.2026 |
| 18.06.2026 | 25.06.2026 |
| 25.06.2026 | 02.07.2026 |

---

## Mehmonxonalar

| Shahar | Mehmonxona |
|---|---|
| 🏛 Tbilisi | Gallery Palace |
| 🌊 Batumi | La Quinta by Wyndham Batumi |
| 🏙 Trabzon | Best Western Plus Trabzon |

---

## Dasturga kiritilgan ekskursiyalar

- 🏛 **Tbilisi ekskursiyasi** — shahar bo'ylab sayohat (5–6 soat)
- ⛪️ **Mtsxeta ekskursiyasi** — Gruziyaning qadimiy poytaxti
- 🕍 **Svetitskhoveli sobori va Jvari monastiri** — UNESCO merosi
- 🌆 **Batumi kechki sayohati** — dengiz bo'yi va shahar chiroqlari
- 🏞 **Sumela monastiri** — Trabzon yaqinidagi qoyaga o'yilgan monastir
- 🌊 **Uzungöl ko'li** — tog' ko'li va Turkiyaning eng mashhur tabiiy joyi
- 🌿 **Batumi botanika bog'i** — 2000 dan ortiq o'simlik turi
- 🏰 **Goniya qal'asi** — antik davr qal'asi, Batumi yaqinida

---

## Tez-tez so'raladigan savollar

## Tbilisi–Trabzon–Batumi turiga viza kerakmi?

Yo'q. O'zbekiston fuqarolari Gruziya va Turkiyaga **vizasiz** kiradi. Faqat amal qilish muddati kamida 6 oy bo'lgan xalqaro pasport kerak.

## Bu tur qancha turadi?

Narx **$849 dan** boshlanadi (1 kishi uchun). Narxga aviaparvoz, mehmonxona va **barcha ekskursiyalar** kiritilgan — qo'shimcha to'lov yo'q.

## Qaysi ekskursiyalar kiritilgan?

Jami 8 ta ekskursiya: Tbilisi shahar turı, Mtsxeta, Svetitskhoveli sobori, Batumi kechki sayohati, Sumela monastiri, Uzungöl ko'li, Botanika bog'i va Goniya qal'asi. **Barchasi narxga kiritilgan.**

## Eng yaxshi vaqt qachon?

Iyun–iyul oylarida Qora dengiz bo'yida ob-havo ideal: +25–28°C, dengiz ham iliq. Aynan shu sanalar uchun turlar mavjud.

---

**Hoziroq bron qiling — joy soni cheklangan!** SEM Travel orqali bron qilishda barcha tashvishlarni biz hal qilamiz.`,
    contentRu: `Тбилиси, Трабзон и Батуми — три прекрасных города, две страны и незабываемое путешествие вдоль Чёрного моря. Этот тур объединяет несколько направлений и дарит максимум впечатлений. **Виза не нужна** — граждане Узбекистана въезжают в Грузию и Турцию без визы.

## О туре

- **Страны:** Грузия + Турция
- **Города:** Тбилиси → Трабзон → Батуми
- **Продолжительность:** 7 ночей / 8 дней
- **Цена:** **от $849** (на 1 человека, все экскурсии включены)
- **Все экскурсии включены в стоимость — без доплат!**

---

## Даты вылета

| Вылет | Возвращение |
|---|---|
| 11.06.2026 | 18.06.2026 |
| 18.06.2026 | 25.06.2026 |
| 25.06.2026 | 02.07.2026 |

---

## Отели по программе тура

| Город | Отель |
|---|---|
| 🏛 Тбилиси | Gallery Palace |
| 🌊 Батуми | La Quinta by Wyndham Batumi |
| 🏙 Трабзон | Best Western Plus Trabzon |

---

## Экскурсии по программе

- 🏛 **Обзорная экскурсия по Тбилиси** — по городу (5–6 часов)
- ⛪️ **Экскурсия в Мцхету** — древняя столица Грузии
- 🕍 **Собор Светицховели и монастырь Джвари** — объект ЮНЕСКО
- 🌆 **Вечерняя прогулка по Батуми** — набережная и огни города
- 🏞 **Монастырь Сумела** — монастырь в скале близ Трабзона
- 🌊 **Озеро Узунгёль** — горное озеро, одно из красивейших мест Турции
- 🌿 **Ботанический сад Батуми** — более 2000 видов растений
- 🏰 **Крепость Гонио** — античная крепость близ Батуми

---

## Часто задаваемые вопросы

## Нужна ли виза для тура Тбилиси–Трабзон–Батуми?

Нет. Граждане Узбекистана въезжают в Грузию и Турцию **без визы**. Необходим только загранпаспорт со сроком действия не менее 6 месяцев.

## Сколько стоит тур Тбилиси–Трабзон–Батуми?

Цена начинается **от $849 на человека**. В стоимость включены авиаперелёт, проживание в отелях и **все экскурсии по программе** — без доплат.

## Какие экскурсии включены?

Всего 8 экскурсий: обзорная по Тбилиси, Мцхета, Светицховели и Джвари, вечерний Батуми, монастырь Сумела, озеро Узунгёль, Ботанический сад и крепость Гонио. **Все включены в цену.**

## Когда лучше ехать?

Июнь–июль — идеальное время для Черноморского побережья: +25–28°C, море тёплое. Именно на эти даты и предлагаются туры.

---

**Бронируйте сейчас — количество мест ограничено!** При бронировании через SEM Travel мы берём на себя все хлопоты.`,
  },
  {
    id: 13,
    slug: "turkiya-mo-jizalari-2026",
    emoji: "🇹🇷",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=70",
    categoryUz: "Turkiya ekskursiya turi",
    categoryRu: "Экскурсионный тур Турция",
    titleUz: "Turkiya Mo'jizalari 2026 — Istanbul, Kappadokiya, Pamukkale | SEM Travel",
    titleRu: "Чудеса Турции 2026 — Стамбул, Каппадокия, Памуккале | SEM Travel",
    descUz: "Toshkentdan Turkiya bo'ylab ekskursiya turi 2026: Istanbul–Kappadokiya–Pamukkale. May oyidan $732 dan. Aviaparvoz, mehmonxona, ovqat, sug'urta va ekskursiyalar kiritilgan.",
    descRu: "Экскурсионный тур по Турции из Ташкента 2026: Стамбул–Каппадокия–Памуккале. С мая от $732. Авиаперелёт, отель, питание, страховка и экскурсии включены.",
    date: "2026-03-26",
    readTimeUz: "4 daqiqa",
    readTimeRu: "4 минуты",
    author: "SEM Travel",
    tagsUz: ["Turkiya", "Istanbul", "Kappadokiya", "Pamukkale", "Ekskursiya turi", "2026", "Erta bron"],
    tagsRu: ["Турция", "Стамбул", "Каппадокия", "Памуккале", "Экскурсионный тур", "2026", "Раннее бронирование"],
    contentUz: `Turkiya Mo'jizalari — O'zbekistonliklarning eng ommabop Turkiya ekskursiya turi. Bir safarda Istanbul, Kappadokiya va Pamukkale — Turkiyaning eng go'zal shaharlarini ziyorat qilasiz. **Majburiy qo'shimcha to'lovlarsiz!**

## Tur haqida

- **Marshrut:** Istanbul → Kappadokiya → Ko'nya (o'tish) → Pamukkale → Bursa (o'tish)
- **Davomiylik:** 7 kecha / 8 kun
- **Uchish:** Toshkentdan har shanba
- **Aviakompaniya:** Centrum Air
- **Transport:** Mercedes qulay avtobuslar
- **Gidlar:** Rus tilida so'zlashuvchi tarixchi gidlar

---

## Narxlar (erta bron)

| Oy | Narx (1 kishiga) |
|---|---|
| May 2026 | **$732 dan** |
| Iyun 2026 | **$754 dan** |
| Iyul 2026 | **$765 dan** |
| Avgust 2026 | **$765 dan** |

*Narx 2 kishilik xonada yashash uchun. Nashriyot paytidagi narx.*

---

## Marshrut va tunashlar

| Shahar | Tunashlar |
|---|---|
| 🌆 Istanbul (1-qism) | 2 kecha |
| 🌋 Kappadokiya | 2 kecha |
| 🌊 Pamukkale | 2 kecha |
| 🌆 Istanbul (2-qism) | 1 kecha |

---

## Turga nima kiradi?

- ✈️ **Aviaparvoz** — Toshkent–Istanbul–Toshkent (Centrum Air)
- 🚌 **Transfer** — barcha marshrut bo'ylab
- 🍰 **Ovqatlanish** — Istanbul (BB: nonushta), boshqa shaharlarda HB (nonushta + kechki ovqat)
- 🏨 **Turar joy** — barcha shaharlarda
- 🧬 **Tibbiy sug'urta**
- 🕌 **Ko'rik ekskursiyalar**

✨ **Majburiy qo'shimcha to'lovlar yo'q!**

---

## Ko'riladigan joylar

**Istanbul:**
- Sulaymoniya majmui va Moviy masjid
- Ayasofya
- Topkapi saroyi
- Bozorlar — Grand Bazaar, Misr bozori

**Kappadokiya:**
- Göreme milliy bog'i
- Yeraltı shahri (Derinkuyu yoki Kaymaklı)
- Uçhisar qal'asi
- Ixtiyoriy: Havo sharida uchish 🎈

**Pamukkale:**
- Oq travertin havuzlari (Pamukkale — "paxta qal'asi")
- Hierapolis antik shahri
- Kleopatra havuzi

---

## Tez-tez so'raladigan savollar

## Turkiya Mo'jizalari turiga viza kerakmi?

Yo'q. O'zbekiston fuqarolari Turkiyaga **vizasiz** kiradi. Faqat xalqaro pasport kerak (kamida 6 oy amal qilishi kerak).

## Bu turda qancha shaharni ko'rsa bo'ladi?

Bitta safarda **5 shahar**: Istanbul (2 marta), Kappadokiya, Ko'nya va Pamukkale. Shuningdek, Bursa orqali o'tiladi.

## Narxga nima kiritilgan?

Aviaparvoz, barcha shaharlarda mehmonxona, nonushta va kechki ovqat (Istanbul da faqat nonushta), tibbiy sug'urta, transfer va ko'rik ekskursiyalar. **Majburiy qo'shimcha to'lov yo'q.**

## Qachon bron qilish kerak?

Bu **erta bron** taklifi. Joy soni cheklangan — qancha erta bron qilsangiz, narx shuncha qulay.

---

**Hoziroq bron qiling** — har shanba uchish mavjud. SEM Travel orqali bron qilishda barcha hujjatlarni biz tayyorlaymiz.`,
    contentRu: `Чудеса Турции — самый популярный экскурсионный тур по Турции среди узбекистанцев. За одну поездку вы посетите Стамбул, Каппадокию и Памуккале — самые красивые места Турции. **Без обязательных доплат!**

## О туре

- **Маршрут:** Стамбул → Каппадокия → Конья (проездом) → Памуккале → Бурса (проездом)
- **Продолжительность:** 7 ночей / 8 дней
- **Вылет:** из Ташкента каждую субботу
- **Авиакомпания:** Centrum Air
- **Транспорт:** комфортабельные автобусы Mercedes
- **Гиды:** русскоязычные гиды-историки

---

## Цены (раннее бронирование)

| Месяц | Цена (на 1 человека) |
|---|---|
| Май 2026 | **от $732** |
| Июнь 2026 | **от $754** |
| Июль 2026 | **от $765** |
| Август 2026 | **от $765** |

*Стоимость указана на 1 человека при двухместном размещении. Актуально на момент публикации.*

---

## Маршрут и ночёвки

| Город | Ночей |
|---|---|
| 🌆 Стамбул (1-я часть) | 2 ночи |
| 🌋 Каппадокия | 2 ночи |
| 🌊 Памуккале | 2 ночи |
| 🌆 Стамбул (2-я часть) | 1 ночь |

---

## Что входит в тур?

- ✈️ **Авиаперелёт** — Ташкент–Стамбул–Ташкент (Centrum Air)
- 🚌 **Трансферы** — по всему маршруту
- 🍰 **Питание** — HB (завтрак + ужин) во всех городах, BB (только завтрак) в Стамбуле
- 🏨 **Проживание** — во всех городах
- 🧬 **Медицинская страховка**
- 🕌 **Обзорные экскурсии**

✨ **Без обязательных доплат!**

---

## Что вы увидите

**Стамбул:**
- Мечеть Сулеймание и Голубая мечеть
- Айя-София
- Дворец Топкапы
- Гранд-базар и Египетский базар

**Каппадокия:**
- Национальный парк Гёреме
- Подземный город (Деринкую или Каймаклы)
- Крепость Учхисар
- Опционально: полёт на воздушном шаре 🎈

**Памуккале:**
- Белоснежные травертиновые бассейны (Памуккале — «хлопковый замок»)
- Античный город Иераполис
- Бассейн Клеопатры

---

## Часто задаваемые вопросы

## Нужна ли виза для тура «Чудеса Турции»?

Нет. Граждане Узбекистана въезжают в Турцию **без визы**. Нужен только загранпаспорт со сроком действия не менее 6 месяцев.

## Сколько городов можно посетить за одну поездку?

За одну поездку вы увидите **5 городов**: Стамбул (2 раза), Каппадокию, Конью и Памуккале. Также проезжаете через Бурсу.

## Что включено в стоимость?

Авиаперелёт, проживание во всех городах, питание (завтрак+ужин, в Стамбуле только завтрак), медицинская страховка, трансферы и обзорные экскурсии. **Обязательных доплат нет.**

## Когда лучше бронировать?

Это предложение **раннего бронирования**. Количество мест ограничено — чем раньше бронируете, тем выгоднее цена.

---

**Бронируйте сейчас** — вылеты каждую субботу. При бронировании через SEM Travel все документы оформляем мы.`,
  },
  {
    id: 14,
    slug: "gruziya-mo-jizalari-2026",
    emoji: "🇬🇪",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
    categoryUz: "Gruziya turi",
    categoryRu: "Тур в Грузию",
    titleUz: "Gruziya Mo'jizalari 2026 — Tbilisi va Batumi | Erta bron $629 | SEM Travel",
    titleRu: "Чудеса Грузии 2026 — Тбилиси и Батуми | Раннее бронирование от $629 | SEM Travel",
    descUz: "Toshkentdan Gruziya turi 2026: Tbilisi–Batumi yoki Tbilisi–Bakuriani–Batumi, $629 dan. 3 ekskursiya sovg'a. 23 may uchish. Aviaparvoz, 4* mehmonxona, nonushta, sug'urta kiritilgan.",
    descRu: "Тур в Грузию из Ташкента 2026: Тбилиси–Батуми или Тбилиси–Бакуриани–Батуми, от $629. 3 экскурсии в подарок. Вылет 23 мая. Авиаперелёт, отель 4*, завтраки, страховка включены.",
    date: "2026-03-26",
    readTimeUz: "4 daqiqa",
    readTimeRu: "4 минуты",
    author: "SEM Travel",
    tagsUz: ["Gruziya", "Tbilisi", "Batumi", "Bakuriani", "Erta bron", "2026", "Sovg'a"],
    tagsRu: ["Грузия", "Тбилиси", "Батуми", "Бакуриани", "Раннее бронирование", "2026", "Подарок"],
    contentUz: `Gruziya — tog'lar, Qora dengiz, toza havo, boy tarix va rang-barang madaniyat bilan O'zbekistonliklarning eng sevimli sayohat manzillaridan biri. Ota-onangizga eng yaxshi sovg'a — Gruziya sayohati! **Viza shart emas.**

## Tur haqida

- **Davlat:** Gruziya 🇬🇪
- **Davomiylik:** 6 kecha / 7 kun
- **Uchish sanasi:** 23 may 2026 (bahor-yoz erta bron)
- **Narx:** **$629 dan** (1 kishi, 2 kishilik xona)
- **3 ta ekskursiya sovg'a!**

---

## Marshrut variantlari

| Variant | Marshrut | Narx |
|---|---|---|
| 🌷 1-variant | Tbilisi–Batumi (3+3 kecha) | **$629** |
| 🌷 2-variant | Tbilisi–Bakuriani–Batumi (2+2+2 kecha) | **$629** |

---

## Sovg'a ekskursiyalar 🎁

- 📍 **Tbilisi ko'rik sayohati** — shaharning eng mashhur joylari
- 📍 **Borjomi bog'iga tashrif** — mineral suv va tabiat
- 📍 **Batumi ko'rik sayohati** — Qora dengiz qirg'og'i va shahar

---

## Turga nima kiradi?

- ✈️ **Aviaparvoz** — Toshkent–Tbilisi (borishda), Batumi–Toshkent (qaytishda)
- 🚌 **Transfer** — barcha marshrut bo'ylab
- 🏨 **Turar joy** — 4 yulduzli mehmonxonalar
- 🍳 **Ovqatlanish** — nonushta asosida
- 🧬 **Tibbiy sug'urta**
- 🎁 **3 ta ko'rik ekskursiya**

*Narx 2 kishilik xonada 1 kishiga. Nashriyot paytidagi narx.*

---

## Nima uchun Gruziya?

- **Toza havo** — Kavkaz tog'larining sog'lom iqlimi
- **Qora dengiz** — Batumida ajoyib plyaj dam olishi
- **Boy tarix** — qadimiy cherkovlar, qal'alar, eski shahar
- **Mazali oshxona** — xinkali, xachapuri, gruzin sharoblari
- **Yaqin va arzon** — Toshkentdan 3 soat, narxlar qulay

---

## Tez-tez so'raladigan savollar

## Gruziyaga viza kerakmi?

Yo'q. O'zbekiston fuqarolari Gruziyaga **vizasiz** kiradi. Faqat xalqaro pasport kerak (kamida 6 oy amal qilishi kerak).

## Gruziya turi qancha turadi?

**$629 dan** boshlanadi (1 kishi, 2 kishilik xonada). Narxga aviaparvoz, 4* mehmonxona, nonushta, sug'urta va 3 ta ekskursiya kiritilgan.

## Qaysi marshrut yaxshiroq — Tbilisi–Batumi yoki Tbilisi–Bakuriani–Batumi?

- **Tbilisi–Batumi** — dengiz va shahar sevuvchilar uchun (3+3 kecha)
- **Tbilisi–Bakuriani–Batumi** — tog' va tabiat sevuvchilar uchun (2+2+2 kecha), Bakurianida ski-kurort va tabiat go'zalligi

## Qachon bron qilish kerak?

Bu **erta bron** taklifi. Joy soni cheklangan. Qancha erta bron qilsangiz, joy kafolatlangan.

---

**23 may uchishi — hoziroq bron qiling!** Ota-onangizga, oilangizga yoki juftligingizga eng yaxshi sovg'a. SEM Travel orqali bron qilishda barcha tashvishlarni biz hal qilamiz.`,
    contentRu: `Грузия — горы, Чёрное море, свежий воздух, богатая история и колоритная культура. Это лучшее направление для отдыха и самый тёплый подарок родителям! **Виза не нужна.**

## О туре

- **Страна:** Грузия 🇬🇪
- **Продолжительность:** 6 ночей / 7 дней
- **Дата вылета:** 23 мая 2026 (раннее бронирование весна-лето)
- **Цена:** **от $629** (на 1 человека, при двухместном размещении)
- **3 экскурсии в подарок!**

---

## Варианты маршрута

| Вариант | Маршрут | Цена |
|---|---|---|
| 🌷 Вариант 1 | Тбилиси–Батуми (3+3 ночи) | **$629** |
| 🌷 Вариант 2 | Тбилиси–Бакуриани–Батуми (2+2+2 ночи) | **$629** |

---

## Экскурсии в подарок 🎁

- 📍 **Обзорная экскурсия по Тбилиси** — главные достопримечательности города
- 📍 **Заезд в парк Боржоми** — минеральная вода и природа
- 📍 **Обзорная экскурсия по Батуми** — черноморское побережье и город

---

## Что входит в стоимость?

- ✈️ **Авиаперелёт** — Ташкент–Тбилиси (туда), Батуми–Ташкент (обратно)
- 🚌 **Трансферы** — по всему маршруту
- 🏨 **Проживание** — отели 4 звезды
- 🍳 **Питание** — на базе завтраков
- 🧬 **Медицинская страховка**
- 🎁 **3 обзорные экскурсии**

*Стоимость указана за 1 человека при двухместном размещении. Актуально на момент публикации.*

---

## Почему Грузия?

- **Свежий воздух** — горный климат Кавказа
- **Чёрное море** — пляжный отдых в Батуми
- **Богатая история** — древние церкви, крепости, старый город
- **Вкусная кухня** — хинкали, хачапури, грузинские вина
- **Близко и доступно** — 3 часа из Ташкента, цены приятные

---

## Часто задаваемые вопросы

## Нужна ли виза в Грузию?

Нет. Граждане Узбекистана въезжают в Грузию **без визы**. Нужен только загранпаспорт со сроком действия не менее 6 месяцев.

## Сколько стоит тур в Грузию?

Цена начинается **от $629 на человека** (при двухместном размещении). В стоимость включены авиаперелёт, отель 4*, завтраки, страховка и 3 экскурсии.

## Какой маршрут выбрать — Тбилиси–Батуми или Тбилиси–Бакуриани–Батуми?

- **Тбилиси–Батуми** — для любителей моря и городского отдыха (3+3 ночи)
- **Тбилиси–Бакуриани–Батуми** — для любителей гор и природы (2+2+2 ночи), Бакуриани — горнолыжный курорт с красивой природой

## Когда нужно бронировать?

Это предложение **раннего бронирования**. Количество мест ограничено — чем раньше бронируете, тем гарантированнее место.

---

**Вылет 23 мая — бронируйте прямо сейчас!** Лучший подарок родителям, семье или второй половинке. При бронировании через SEM Travel все хлопоты берём на себя.`,
  },
  {
    id: 15,
    slug: "xitoy-biznes-tur-2026",
    emoji: "🚀",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=70",
    categoryUz: "Biznes Trip",
    categoryRu: "Бизнес-тур",
    titleUz: "Xitoyga 8 Kunlik Biznes Safari — Chengdu, Zhangjiajie, Guangzhou | Asoschilar Club × SEM Travel",
    titleRu: "Бизнес-сафари в Китай 8 дней — Чэнду, Чжанцзяцзе, Гуанчжоу | Asoschilar Club × SEM Travel",
    descUz: "24 aprel – 2 may 2026: Xitoyga eksklyuziv biznes safari. Standart $2500, Biznes $2750. Club a'zolariga $150 chegirma. Canton Fair, zavodlar, Avatar tog'lari. Joy soni cheklangan.",
    descRu: "24 апреля – 2 мая 2026: эксклюзивный бизнес-сафари в Китай. Стандарт $2500, Бизнес $2750. Скидка $150 для членов клуба. Canton Fair, заводы, горы Аватар. Мест мало.",
    date: "2026-03-26",
    readTimeUz: "5 daqiqa",
    readTimeRu: "5 минут",
    author: "SEM Travel",
    tagsUz: ["Biznes Trip", "Xitoy", "Canton Fair", "Guangzhou", "Zhangjiajie", "Asoschilar Club", "Import", "2026"],
    tagsRu: ["Бизнес-тур", "Китай", "Canton Fair", "Гуанчжоу", "Чжанцзяцзе", "Asoschilar Club", "Импорт", "2026"],
    contentUz: `Biznesingizni kengaytirmoqchimisiz? **Bu safar — xarajat emas, imkoniyat.** Bitta to'g'ri kontakt butun biznesingizni o'zgartirishi mumkin.

**Asoschilar Club × SEM Travel** — faqat tadbirkorlar va biznes egalari uchun eksklyuziv guruh safari.

**24 aprel – 2 may 2026** | Toshkent → Chengdu → Zhangjiajie → Guangzhou → Toshkent

---

## Nega bu safari muhim?

- 🤝 **To'g'ridan-to'g'ri kontakt** — vositachilarsiz ishlab chiqaruvchilar bilan ishlash
- 📦 **Yangi mahsulotlar** — trend tovarlarni birinchi bo'lib topish
- 💰 **Narxlar o'rganish** — to'g'ridan-to'g'ri kelishuv = yuqori marja
- 🌐 **Global aloqalar** — xalqaro hamkorlar va yangi imkoniyatlar

---

## Marshrut: Chengdu → Zhangjiajie → Guangzhou

| Shahar | Dastur |
|---|---|
| 🏙 **Chengdu** | Boshlanish, Panda bog'i, zamonaviy shahar, madaniyat |
| 🏔 **Zhangjiajie** | Avatar tog'lari, shisha ko'priklar, Tianmen tog'i — WOW tajriba |
| 🏭 **Guangzhou** | Asosiy biznes: Canton Fair, zavodlarga tashrif, B2B uchrashuvlar |

---

## Haftalik dastur (24.04 – 02.05)

| Kun | Dastur |
|---|---|
| 1-kun | Xalqaro parvoz, transfer, mehmonxonaga joylashish |
| 2-kun | Chengdu shahri + madaniyat + moslashish |
| 3-kun | Tezkor poyezd — Zhangjiajie tomonga yo'l |
| 4-kun | **Zhangjiajie: WOW** — Avatar tog'lari, shisha ko'priklar |
| 5-kun | **Tabiat & tajriba** — Glass bridge, Tianmen tog'i |
| 6-kun | Guangzhouga o'tish — poyezd + joylashish |
| 7-kun | **Asosiy biznes** — Canton Fair + zavodlarga tashrif |
| 8-kun | Yakun & qaytish — natijalar, kontaktlar, aeroport |
| +3 kun | **Biznes format** — Canton Fair davom, supplier uchrashuvlar |

---

## Canton Fair — nima bu?

**Canton Fair** — Xitoyning eng yirik xalqaro savdo ko'rgazmasi. Minglab supplierlar, real shartnomalar imkoniyati. Quyidagi sohalarda ishlaydigan tadbirkorlar uchun juda muhim:

- 🧸 Bolalar o'yinchoqlari va ona-bola tovarlari
- 👗 Moda va kiyim-kechak
- 🛏 Uy tekstili (postil, adyol, sochiq)
- 📎 Kanselariya tovarlar
- 💊 Sog'liq va sayohatga oid tovarlar

---

## Kimlar bilan borasiz?

- 👥 **Yopiq biznes guruh** — faqat tadbirkorlar va biznes egalari
- 🤝 **Networking** — yangi hamkorlar va real aloqalar
- 🧠 **Mastermind** — tajriba almashish va g'oyalar
- 💬 **Real muhokama** — biznes muammolar va yechimlar

**Bu safari — sizni o'sishga majbur qiladigan muhit.**

---

## Qaysi format siz uchun?

| | Standart | Biznes |
|---|---|---|
| **Maqsad** | "Tanishish uchun" | "Pul ishlash uchun" |
| Canton Fair | ✅ | ✅ |
| Bozorni tushunish | ✅ | ✅ |
| Supplier uchrashuvlar | — | ✅ |
| Zavodlarga chiqish | — | ✅ |
| Chuqur ko'rgazma | — | ✅ |
| Networking & kelishuvlar | — | ✅ |
| **Narx** | **$2,500** | **$2,750** |

🎁 **Asoschilar Club a'zolariga $150 chegirma!**

---

## Paketga nima kiradi?

- ✔ **Aviachiptalar** — Toshkent–Xitoy–Toshkent
- ✔ **4★ mehmonxonalar** — qulay lokatsiya, sifatli xonalar
- ✔ **Nonushta** barcha shaharlarda
- ✔ **Barcha transfer** — tashkil etilgan
- ✔ **Tarjimon va to'liq hamrohlik**
- ✔ **Ko'rgazmalarga kirish** — Canton Fair va boshqalar

---

## Tez-tez so'raladigan savollar

## Xitoyga viza kerakmi?

Ha. O'zbekiston fuqarolari Xitoyga **viza kerak**. SEM Travel viza rasmiylashtirish jarayonida to'liq yordam beradi.

## Standart va Biznes format qanday farq qiladi?

**Standart ($2500)** — bozorni ko'rish, Canton Fair, umumiy tushuncha olish. **Biznes ($2750)** — supplierlar bilan uchrashuvlar, zavodlarga chiqish, chuqur ko'rgazma ishi, networking va real kelishuvlar. Soha egalari uchun Biznes format tavsiya etiladi.

## Asoschilar Club a'zolari uchun chegirma bormi?

Ha — **$150 chegirma** Asoschilar Club a'zolari uchun. Bu chegirma faqat bugun qaror qilganlar uchun.

## Joy soni qancha?

**Joy soni cheklangan** — eksklyuziv yopiq guruh. Erta murojaat qiling.

---

⚠️ **Bu tur hamma uchun emas. Faqat qaror qiladiganlar uchun.**

Bron qilish uchun murojaat qiling:
**Telegram:** @abduqodir_jabboraliyev
**Tel:** +998 99 033 99 38`,
    contentRu: `Думаете о расширении бизнеса? **Этот тур — не расходы, это инвестиция.** Один правильный контакт может полностью изменить ваш бизнес.

**Asoschilar Club × SEM Travel** — эксклюзивный групповой бизнес-тур только для предпринимателей и владельцев бизнеса.

**24 апреля – 2 мая 2026** | Ташкент → Чэнду → Чжанцзяцзе → Гуанчжоу → Ташкент

---

## Почему этот тур важен?

- 🤝 **Прямые контакты** — работа с производителями без посредников
- 📦 **Новые продукты** — первыми находить трендовые товары
- 💰 **Изучение цен** — прямой договор = высокая маржа
- 🌐 **Глобальные связи** — международные партнёры и новые возможности

---

## Маршрут: Чэнду → Чжанцзяцзе → Гуанчжоу

| Город | Программа |
|---|---|
| 🏙 **Чэнду** | Старт, Парк панд, современный город, адаптация |
| 🏔 **Чжанцзяцзе** | Горы Аватар, стеклянные мосты, гора Тяньмэнь — WOW опыт |
| 🏭 **Гуанчжоу** | Основной бизнес: Canton Fair, посещение заводов, B2B-встречи |

---

## Недельная программа (24.04 – 02.05)

| День | Программа |
|---|---|
| День 1 | Международный перелёт, трансфер, заселение в отель |
| День 2 | Знакомство с Чэнду — город + культура + адаптация |
| День 3 | Скоростной поезд — в сторону Чжанцзяцзе |
| День 4 | **Чжанцзяцзе: WOW** — горы Аватар, стеклянные мосты |
| День 5 | **Природа & опыт** — Glass bridge, гора Тяньмэнь |
| День 6 | Переезд в Гуанчжоу — поезд + заселение |
| День 7 | **Основной бизнес** — Canton Fair + посещение заводов |
| День 8 | Итоги & возвращение — контакты, результаты, аэропорт |
| +3 дня | **Бизнес-формат** — Canton Fair продолжение, встречи с поставщиками |

---

## Canton Fair — что это?

**Canton Fair** — крупнейшая международная торговая ярмарка Китая. Тысячи поставщиков, реальные возможности для заключения контрактов. Особенно важно для предпринимателей в сферах:

- 🧸 Детские игрушки и товары для мам
- 👗 Мода и одежда
- 🛏 Домашний текстиль (постельное, одеяла, полотенца)
- 📎 Канцелярские товары
- 💊 Товары для здоровья и путешествий

---

## С кем вы едете?

- 👥 **Закрытая бизнес-группа** — только предприниматели и владельцы бизнеса
- 🤝 **Нетворкинг** — новые партнёры и реальные связи
- 🧠 **Мастермайнд** — обмен опытом и идеями
- 💬 **Реальные обсуждения** — бизнес-проблемы и решения

**Этот тур — среда, которая заставляет расти.**

---

## Какой формат подходит вам?

| | Стандарт | Бизнес |
|---|---|---|
| **Цель** | "Познакомиться" | "Зарабатывать" |
| Canton Fair | ✅ | ✅ |
| Понимание рынка | ✅ | ✅ |
| Встречи с поставщиками | — | ✅ |
| Посещение заводов | — | ✅ |
| Глубокая работа на выставке | — | ✅ |
| Нетворкинг & договоры | — | ✅ |
| **Цена** | **$2 500** | **$2 750** |

🎁 **Скидка $150 для членов Asoschilar Club!**

---

## Что входит в пакет?

- ✔ **Авиабилеты** — Ташкент–Китай–Ташкент
- ✔ **Отели 4★** — удобное расположение, качественные номера
- ✔ **Завтраки** во всех городах
- ✔ **Все трансферы** — полностью организованы
- ✔ **Переводчик и полное сопровождение**
- ✔ **Вход на выставки** — Canton Fair и другие

---

## Часто задаваемые вопросы

## Нужна ли виза в Китай?

Да. Гражданам Узбекистана **необходима виза** для въезда в Китай. SEM Travel оказывает полное содействие в оформлении.

## В чём разница между Стандарт и Бизнес форматом?

**Стандарт ($2500)** — ознакомление с рынком, Canton Fair, общее понимание. **Бизнес ($2750)** — встречи с поставщиками, посещение заводов, глубокая работа на выставке, нетворкинг и реальные сделки. Для владельцев бизнеса рекомендуется формат Бизнес.

## Есть ли скидка для членов Asoschilar Club?

Да — **скидка $150** для членов Asoschilar Club. Скидка действует только для тех, кто принимает решение сегодня.

## Сколько мест в группе?

**Количество мест ограничено** — закрытая эксклюзивная группа. Обращайтесь заблаговременно.

---

⚠️ **Этот тур не для всех. Только для тех, кто принимает решения.**

Для бронирования обращайтесь:
**Telegram:** @abduqodir_jabboraliyev
**Тел:** +998 99 033 99 38`,
  },
  {
    id: 17,
    slug: "antalya-tur-narxi-2026",
    emoji: "🏖️",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=70",
    categoryUz: "Plyaj dam olishi",
    categoryRu: "Пляжный отдых",
    titleUz: "Toshkentdan Antalyaga tur 2026: narxlar, eng yaxshi vaqt va maslahatlar",
    titleRu: "Тур из Ташкента в Анталью 2026: цены, лучшее время и советы",
    descUz: "Antalya — O'zbekistondan eng ko'p boriladigan plyaj yo'nalishi. Tur narxi, viza tartibi, eng yaxshi mehmonxonalar va qachon borish kerakligi haqida to'liq ma'lumot.",
    descRu: "Анталья — самое популярное пляжное направление из Узбекистана. Полная информация о ценах на туры, визовом режиме, лучших отелях и оптимальном времени поездки.",
    date: "2026-03-26",
    readTimeUz: "7 daqiqa",
    readTimeRu: "7 минут",
    author: "SEM Travel",
    tagsUz: ["Antalya", "Turkiya", "Plyaj", "All Inclusive"],
    tagsRu: ["Анталья", "Турция", "Пляж", "All Inclusive"],
    contentUz: `Antalya — Turkiyaning janubida joylashgan, O'zbekistondan eng ko'p sariladigan plyaj shahri. Har yili 500 000 dan ortiq O'zbek sayyohi Antalyani tanlaydi. Nima uchun? Arzon narxlar, All Inclusive mehmonxonalar, kristall toza dengiz va Toshkentdan to'g'ridan-to'g'ri reyslar.

Bu maqolada Antalyaga tur haqida bilib olishingiz kerak bo'lgan hamma narsani — narxlardan tortib qaysi mehmonxona afzalroq ekanigacha — aniq va to'liq yozamiz.

## Antalyaga qachon borish kerak?

Antalya iqlimi O'zbek sayyohlariga juda qulay — yil davomida deyarli har qachon borish mumkin. Lekin **eng qulay davr — may oyidan oktabrgacha**.

| Oy | Dengiz harorati | Havo harorati | Tavsiya |
|---|---|---|---|
| Aprel | +18°C | +22°C | Ekskursiyalar uchun ideal |
| May–Iyun | +22–24°C | +28–32°C | Plyaj va ekskursiya |
| Iyul–Avgust | +28°C | +36–40°C | Plyaj (issiq) |
| Sentabr–Oktabr | +26°C | +28–32°C | **Eng yaxshi davr** |
| Noyabr–Mart | +16°C | +15°C | Ekskursiya, shahar aylash |

**Tavsiya:** Sentabr-oktabr — narxlar pasayadi, dengiz iliq, odamlar kamroq. Bu O'zbek oilalari uchun ideal vaqt.

## Antalyaga tur narxi 2026

Antalyaga tur narxi bir qancha omillarga bog'liq: uchish muddati, mehmonxona toifasi, oziqlanish turi (All Inclusive yoki yo'q) va bronlash muddati.

| Tur turi | Davomiyligi | Narx (2 kishi) | Nima kiradi |
|---|---|---|---|
| Iqtisodiy | 7 kecha | $600–800 | 3* otель, AI, perelёt |
| O'rtacha | 7 kecha | $900–1 200 | 4* otель, AI, perelёt |
| Premium | 7 kecha | $1 400–2 000 | 5* otель, AI, perelёt |
| Bolali oila (4 kishi) | 10 kecha | $1 800–2 800 | 4* otель, AI, perelёt |

**Muhim:** Erta bronlash (3–4 oy oldin) **15–25% arzonroq** tushadi. SEM Travel da hozir bron qilsangiz, narx qaytarilmaydi.

## O'zbekiston fuqarolari uchun Turkiya vizasi

O'zbekiston fuqarolari Turkiyaga **viza kerak emas** — 30 kungacha vizasiz kirish mumkin. Bu Antalyani eng qulay yo'nalishlardan biriga aylantiradi.

**Kerakli hujjatlar:**
- Xalqaro pasport (kamida 6 oy amal qilish muddati)
- Qaytish bileti
- Mehmonxona bronlash tasdiqnomasi

Viza yo'qligi = qo'shimcha xarajat yo'q, vaqt tejaladi.

---

## Antalyaning qaysi rayonlari yaxshiroq?

Antalya bir shahar emas — bu bir necha kurort rayonlari birlashmasi. Har birining o'z xarakteri bor.

**Kemer** — oilaviy dam olish, tinch tabiat, tozalik. Narxlar o'rtacha.

**Lara va Kundu** — ulkan 5 yulduzli mehmonxonalar, All Inclusive, katta plyajlar. Hashamat izlaydiganlarga.

**Side** — tarix va plyaj uyg'unligi. Antik shahar xarobalari, Aspendos teatri yaqin. Ekskursiya ishqibozlariga.

**Alanya** — yoshlar uchun, gechalik hayot, arzon narxlar. Ko'proq yosh juftliklar boradi.

**Belek** — golf kurortlari, oilaviy 5 yulduzli mehmonxonalar. Bir oz qimmatroq.

## Antalyada nima ko'rish kerak?

Antalya faqat plyaj emas — bu boy tarixi va ajoyib tabiati bor shahar.

**Albatta borish kerak:**
- **Düden şelalesi (Düden sharsharasi)** — shaharga 14 km, bepul kirish
- **Kemer milliy parki** — Toroslar tog'lari, qoyalar, o'rmon
- **Aspendos teatri** — 2 000 yillik Rim teatri, hamon kontsertlar o'tkaziladi
- **Antalya shahar markazi (Kaleiçi)** — qadimiy shahar, muzeylar, restoranlar
- **Pamukkale** — oq terrасalar, Hierapolis xarobalari (1 kunlik ekskursiya)

**Ekskursiya narxlari taxminan:**
- Pamukkale: $40–60/kishi
- Jeep safari: $35–50/kishi
- Kemada dengiz sayr: $20–30/kishi
- Aspendos teatri: $10/kishi (kirish)

---

## Qaysi mehmonxonani tanlash kerak?

**3 yulduz — arzon, lekin yetarli:**
- Rixos Downtown Antalya — shahar markazida
- Club Lyda Hotel — Kemer, plyaj yaqin

**4 yulduz — eng mashhur tanlov:**
- Selectum Family Resort Side — bolali oilalar uchun ideal
- Granada Luxury Belek — sport va faollik
- Delphin Botanik — Alanya, katta hovuz

**5 yulduz — hashamat:**
- Rixos Premium Belek — ulkan territory, hamma narsa sifatli
- Maxx Royal Belek — golf, spa, VIP xizmat
- Titanic Mardan Palace — Lara, dunyodagi eng ulkan hovuzlardan biri

**SEM Travel maslahat:** 4 yulduzli All Inclusive mehmonxona — narx va sifat nisbati bo'yicha eng to'g'ri tanlov O'zbek oilasi uchun.

## Toshkentdan Antalyaga parvoz

Toshkentdan Antalyaga to'g'ridan-to'g'ri reyslar mavjud. Parvoz muddati: **4–4.5 soat**.

| Aviakompaniya | Parvoz turi | Taxminiy narx |
|---|---|---|
| Uzbekistan Airways | To'g'ri | $180–280 |
| Pegasus Airlines | 1 ta tranzit | $150–220 |
| Turkish Airlines | 1 ta tranzit (Istanbul) | $200–350 |
| FlyDubai / Air Arabia | 1–2 tranzit | $130–200 |

**Maslahat:** SEM Travel tur bron qilganda aviabilet ham paketga kiradi — alohida izlab vaqt sarflamaysiz.

---

## Antalyada qancha pul kerak?

Tur narxidan tashqari, qo'l ostida pul qolishi kerak. Taxminiy hisob:

| Xarajat turi | Taxminiy summa (7 kun, 2 kishi) |
|---|---|
| Kichik xaridlar, suvenirlar | $100–150 |
| Ekskursiyalar (2–3 ta) | $150–250 |
| Restoran va cafe (tashqarida) | $80–120 |
| Transport (taksi, avtobus) | $30–50 |
| **Jami qo'shimcha xarajat** | **$360–570** |

All Inclusive mehmonxonada ovqat, ichimlik, sport aktivliklari kiradi — shuning uchun qo'shimcha xarajat sezilarli kamayadi.

## Ko'p so'raladigan savollar

**Antalyaga bolalar bilan borsa bo'ladimi?**
Ha, Antalya bolali oilalar uchun juda qulay. Ko'plab mehmonxonalarda bolalar klubi, sayoz hovuz, mini-disk bor. 2–10 yoshli bolalar uchun ko'plab mehmonxonalar bepul yoki 50% chegirma beradi.

**All Inclusive nima o'z ichiga oladi?**
Odatda 3 mahal ovqat (buffet shaklida), alkogolsiz ichimliklar, mahalliy alkogol, snack-bar (oradagi yeguliklar), plyaj soyaboni va kursi kiradi. Premium mehmonxonalarda sport, ekskursiya va spa ham AI ga kirishi mumkin.

**Antalyada pul almashtirish kerakmi?**
Turkiya lirasi (TRY) — mahalliy valyuta. Ko'plab joylarda dollar va evro qabul qilinadi, lekin lira ko'proq qulay. Mehmonxona yaqinidagi ATM da pul olish yaxshiroq (kurs yaxshi).

**SEM Travel orqali bron qilsam qanday afzalliklar bor?**
Narx kafolati, hujjat ko'magi (mehmonxona tasdiqnomalari), parvoz vaqtlarini kuzatib borish va Toshkentdan qaytguncha 24/7 aloqa. Muammoli vaziyatda to'g'ridan-to'g'ri SEM Travel menejeringizga murojaat qilasiz.

**Antalyaga qachon bron qilsam arzonroq?**
3–4 oy oldin bron qilish (early booking) eng arzon narxni beradi. Yozgi muvsim uchun fevral-mart da bron qilish tavsiya etiladi. Oxirgi daqiqa turlar ham arzon bo'ladi, lekin tanlash imkoniyati cheklangan.

---

Antalya — O'zbek sayyohlari uchun eng qulay xorijiy yo'nalishlardan biri: viza yo'q, parvoz qisqa, All Inclusive mehmonxonalar ko'p, narxlar hamyonbop. SEM Travel bu yo'nalishda 7 yildan ortiq tajribaga ega — bepul maslahat uchun bugun bog'laning.`,
    contentRu: `Анталья — курортный город на юге Турции, самое популярное пляжное направление из Узбекистана. Каждый год туда едут более 500 000 узбекских туристов. Причины просты: доступные цены, отели All Inclusive, чистейшее море и прямые рейсы из Ташкента.

В этом материале — всё, что нужно знать о туре в Анталью: цены, визовый режим, лучшие отели и когда лучше ехать.

## Когда лучше ехать в Анталью?

Климат Антальи хорошо подходит для узбекских туристов. Лучший период — с мая по октябрь.

| Месяц | Море | Воздух | Рекомендация |
|---|---|---|---|
| Апрель | +18°C | +22°C | Экскурсии, прогулки |
| Май–Июнь | +22–24°C | +28–32°C | Пляж + экскурсии |
| Июль–Август | +28°C | +36–40°C | Пляж (очень жарко) |
| Сентябрь–Октябрь | +26°C | +28–32°C | **Лучший вариант** |
| Ноябрь–Март | +16°C | +15°C | Экскурсии, город |

**Совет:** Сентябрь-октябрь — море тёплое, цены ниже, людей меньше. Идеально для семейного отдыха.

## Цены на туры в Анталью 2026

| Тип тура | Длительность | Цена (2 чел.) | Что включено |
|---|---|---|---|
| Эконом | 7 ночей | $600–800 | 3*, AI, перелёт |
| Средний | 7 ночей | $900–1 200 | 4*, AI, перелёт |
| Премиум | 7 ночей | $1 400–2 000 | 5*, AI, перелёт |
| Семья (4 чел.) | 10 ночей | $1 800–2 800 | 4*, AI, перелёт |

**Важно:** Раннее бронирование (за 3–4 месяца) даёт скидку 15–25%.

## Нужна ли виза?

Гражданам Узбекистана **виза в Турцию не нужна** — можно находиться до 30 дней без визы. Это делает Анталью одним из самых удобных направлений.

**Необходимые документы:**
- Загранпаспорт (не менее 6 месяцев до окончания)
- Обратный билет
- Подтверждение бронирования отеля

---

## Какой район Антальи выбрать?

**Кемер** — тихий отдых, природа, семьи с детьми. Средние цены.

**Лара и Кунду** — огромные 5-звёздочные отели, All Inclusive, большие пляжи. Для тех, кто ищет комфорт.

**Сиде** — история + пляж. Античные руины, театр Аспендос рядом. Для любителей экскурсий.

**Алания** — молодёжь, ночная жизнь, доступные цены.

**Белек** — гольф-курорты, семейные 5-звёздочные отели. Немного дороже.

## Что посмотреть в Анталье?

**Обязательно:**
- **Водопад Дюден** — 14 км от города, вход бесплатный
- **Национальный парк Кемер** — горы Торос, скалы, леса
- **Театр Аспендос** — 2000-летний римский амфитеатр
- **Старый город Калеичи** — исторический центр, музеи, рестораны
- **Памуккале** — белые травертины, руины Иераполя (экскурсия на 1 день)

**Цены на экскурсии:**
- Памуккале: $40–60/чел.
- Джип-сафари: $35–50/чел.
- Морская прогулка на яхте: $20–30/чел.

---

## Какой отель выбрать?

**3 звезды — бюджетно:**
- Rixos Downtown Antalya — центр города
- Club Lyda Hotel — Кемер, рядом с пляжем

**4 звезды — оптимальный выбор:**
- Selectum Family Resort Side — идеально для семей с детьми
- Granada Luxury Belek — спорт и активность
- Delphin Botanik — Алания, большой бассейн

**5 звёзд — роскошь:**
- Rixos Premium Belek — огромная территория, всё высококачественно
- Maxx Royal Belek — гольф, спа, VIP-сервис
- Titanic Mardan Palace — Лара, один из крупнейших бассейнов мира

**Совет SEM Travel:** 4-звёздочный All Inclusive — лучшее соотношение цены и качества для узбекских семей.

## Перелёт из Ташкента в Анталью

Прямые рейсы из Ташкента в Анталью: время в пути **4–4.5 часа**.

| Авиакомпания | Тип рейса | Примерная цена |
|---|---|---|
| Uzbekistan Airways | Прямой | $180–280 |
| Pegasus Airlines | 1 пересадка | $150–220 |
| Turkish Airlines | Через Стамбул | $200–350 |
| FlyDubai / Air Arabia | 1–2 пересадки | $130–200 |

При бронировании тура через SEM Travel перелёт включён в пакет.

---

## Сколько денег брать с собой?

| Статья расходов | Примерная сумма (7 дней, 2 чел.) |
|---|---|
| Покупки, сувениры | $100–150 |
| Экскурсии (2–3 шт.) | $150–250 |
| Рестораны вне отеля | $80–120 |
| Транспорт | $30–50 |
| **Итого дополнительно** | **$360–570** |

В отеле All Inclusive питание, напитки и спорт уже включены — дополнительные расходы значительно меньше.

## Часто задаваемые вопросы

**Можно ли ехать с детьми?**
Да, Анталья очень удобна для семей с детьми. В большинстве отелей есть детские клубы, мелководные бассейны, мини-диско. Дети 2–10 лет часто размещаются бесплатно или со скидкой 50%.

**Что входит в All Inclusive?**
Обычно: 3-разовое питание (шведский стол), безалкогольные напитки, местный алкоголь, снек-бар, шезлонги на пляже. В премиум-отелях — также спорт, экскурсии и спа.

**Нужно ли менять деньги?**
Местная валюта — турецкая лира (TRY). Во многих местах принимают доллары и евро, но лира удобнее. Лучше снимать в банкомате рядом с отелем.

**Какие преимущества при бронировании через SEM Travel?**
Гарантия цены, помощь с документами, контроль рейсов и поддержка 24/7 от Ташкента до возвращения домой. При любой проблеме — звоните напрямую вашему менеджеру.

**Когда выгоднее всего бронировать?**
За 3–4 месяца (раннее бронирование) — самые низкие цены. Для летнего сезона бронируйте в феврале-марте. Туры в последний момент тоже бывают дешёвыми, но выбор ограничен.

---

Анталья — одно из самых удобных зарубежных направлений для узбекских туристов: без визы, короткий перелёт, множество отелей All Inclusive и доступные цены. SEM Travel работает по этому направлению более 7 лет. Звоните — бесплатно проконсультируем и подберём лучший вариант.`,
  },
  // ── POST 18 ── Maldives pamyatka ──────────────────────────────────────────
  {
    id: 18,
    slug: "maldiv-orollari-pamyatka-2026",
    emoji: "🏝️",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=70",
    categoryUz: "Pamyatka",
    categoryRu: "Памятка",
    titleUz: "Maldiv orollari: to'liq sayohat pamyatkasi 2026 — nima bilish kerak?",
    titleRu: "Мальдивы: полная памятка путешественника 2026 — всё, что нужно знать",
    descUz: "Maldiv orollariga borish uchun viza, parvoz, narxlar, eng yaxshi orollar va amaliy maslahatlar. O'zbek sayyohlari uchun to'liq qo'llanma.",
    descRu: "Виза на Мальдивы, перелёт, цены, лучшие острова и практические советы для туристов из Узбекистана. Полное руководство 2026.",
    date: "2026-03-18",
    readTimeUz: "8 daqiqa",
    readTimeRu: "8 минут",
    author: "SEM Travel",
    tagsUz: ["Maldiv", "Balmoq", "Asal oyi", "Plyaj", "Pamyatka"],
    tagsRu: ["Мальдивы", "Медовый месяц", "Пляж", "Памятка", "Острова"],
    contentUz: `Maldiv orollari — Hind okeanidagi jannat. 1,200 dan ortiq oroldan iborat bu davlat dunyo bo'ylab romanik sayohat va hashamatli dam olish uchun birinchi tanlov hisoblanadi. Lekin Maldivga borish O'zbek sayyohlari uchun qimmat va murakkab ko'rinadi — aslida esa bunday emas.

Bu pamyatkada hamma narsani bilib olasiz: qancha pul kerak, qachon borish kerak, qaysi orolni tanlash kerak va qanday tejash mumkin.

## Maldivga viza kerakmi? O'zbekiston fuqarolari uchun

**Qulay xabar:** O'zbekiston fuqarolari uchun Maldivga viza kerak emas. Aeroportda 30 kunlik "on arrival" viza bepul beriladi. Faqat kerakli hujjatlar:
- Pasport (6 oydan ortiq amal qilish muddati)
- Qaytish bileti
- Mehmonxona bron tasdiqnomasi
- Zaxirada pul ($50/kun ko'rsatiladi)

## Qachon borish kerak? Ob-havo va mavsumlar

| Davr | Ob-havo | Tavsiya |
|---|---|---|
| Yanvar–Aprel | ☀️ Quruq, +28–30°C | **Eng yaxshi vaqt** |
| May–Iyun | 🌦 Yomg'ir boshlanadi | O'rtacha |
| Iyul–Avgust | 🌧 Yomg'irli mavsim | Arzon, lekin yomg'ir ko'p |
| Sentyabr–Oktyabr | 🌧 Yomg'irli | Eng arzon |
| Noyabr–Dekabr | ☀️ Quruq mavsim boshlanadi | Yaxshi |

**Maslahat:** Yanvar-mart — eng qulay, lekin eng qimmat. Arzon bron qilish uchun 3–4 oy oldin buyurtma bering.

## Maldivdagi orollar: qaysinisini tanlash kerak?

Maldivda ikkita turdagi orollar bor:

**1. Resort orollari (private island)**
- Butun orol bitta mehmonxonaga tegishli
- Over-water bungalow (suvdagi villa) — Maldiv ramzi
- Narx: $300–$1,500+/tun
- Misol: Soneva Jani, Gili Lankanfushi, Coco Bodu Hithi

**2. Lokal orollar (guesthouse orollari)**
- Mahalliy aholi yashaydigan orollar
- Guest house va boutique mehmonxonalar
- Narx: $80–$200/tun
- Mashhur: Maafushi, Thulusdhoo, Dhigurah

**O'rtacha byudjet uchun tavsiya:** Lokal orol + kunlik ekskursiyalar = resort tajribasi, lekin 3–4 marta arzon.

## Toshkentdan Maldivga qanday borish mumkin?

To'g'ridan-to'g'ri reys yo'q. Tranzit orqali boriladi:

| Marshrut | Aviakompaniya | Parvoz muddati | Taxminiy narx |
|---|---|---|---|
| TAS → DXB → MLE | Emirates / flydubai | 8–10 soat | $500–800 |
| TAS → DOH → MLE | Qatar Airways | 9–11 soat | $550–850 |
| TAS → IST → MLE | Turkish Airlines | 11–14 soat | $480–750 |
| TAS → KUL → MLE | AirAsia / Malaysia | 12–16 soat | $400–650 |

**Male aeroporti (MLE)** — Maldiv poytaxtidagi asosiy aeroport. U yerdan orolga:
- **Speedboat** — 30–90 daqiqa, $15–50
- **Seaplane** — 15–45 daqiqa, $150–400 (resort orollar uchun)
- **Ferry** — 1–3 soat, $2–10 (lokal orollar uchun)

## Maldiv turi qancha turadi? Narxlar 2026

| Tur turi | 7 tun, 2 kishi | Nima kiradi |
|---|---|---|
| Lokal orol (budget) | $1,200–1,800 | Parvoz + guesthouse |
| Lokal orol (o'rta) | $1,800–2,800 | Parvoz + boutique mehmonxona |
| Resort orol (3-4*) | $2,500–4,500 | Parvoz + resort |
| Resort orol (5*) | $5,000–10,000+ | Parvoz + over-water villa |

**Eslatma:** Maldivda ovqat alohida va qimmat. Budget hisobda kun boshiga $30–60 qo'shing.

## Maldivda nima qilish mumkin? Eng yaxshi faoliyatlar

- **Snorkeling** — marjon riflari, baliqlar, toshbaqalar (bepul yoki $15–30)
- **Scuba diving** — litsenziyali drayving markazi ($80–150/dive)
- **Dolphin watching** — kechki kemaga chiqish ($25–40)
- **Sandbank picnic** — qumsol orolga ekskursiya ($50–80)
- **Biolumin beach** — kechasi porlaydi (mavsumga qarab)
- **Whale shark snorkeling** — Ari Atoll, dünyo tajirib ($100–150)

## Maldiv uchun amaliy lifehaklar

- **Kredit karta** olib boring — yirik to'lovlar uchun (Visa/Mastercard hamma joyda)
- **USD** olib boring — lokal orollar ko'pincha kesh qabul qiladi
- **Quyoshdan himoya kremi** — SPF 50+ majburiy, marjonlarni himoya qiluvchi (reef-safe) kiriting
- **Suv osti kamerasi** — GoPro yoki waterproof chexol bilan telefon
- **Qisqa yubka/futbolka** — lokal orollarda masjid yonida va shahar ko'chalarida yoping
- **Early booking** — 3–4 oy oldin bron qilsangiz 20–30% tejaysiz
- **Shoulder season** (aprel-may, noyabr) — ob-havo yaxshi, lekin narx past

## Ko'p so'raladigan savollar (FAQ)

**Maldivda halol ovqat bormi?**
Ha. Maldiv 100% musulmon davlat. Lokal orollarda barcha ovqat halol. Resort orollarda alkogol bor, lekin lokal orollarda yo'q.

**Maldivga yolg'iz borsa bo'ladimi?**
Ha, solo travel ham juda mashhur. Maafushi va Thulusdhoo orollarida yolg'iz sayohatchilar uchun arzon guesthouserlar ko'p.

**Maldivda internet bormi?**
Ha, aksariyat mehmonxonalarda Wi-Fi bor. Lokal SIM karta (Dhiraagu yoki Ooredoo) sotib olsa bo'ladi, 10 GB ≈ $15.

**Maldivda qanday valyuta ishlatiladi?**
Rasmiy valyuta — Maldiv Rufiyaa (MVR). Lekin USD hamma joyda qabul qilinadi. Kurs: $1 ≈ 15.4 MVR.

**Maldiv boshqa orollardan nimasi bilan farq qiladi?**
Maldiv — dunyodagi eng past relyefli davlat (o'rtacha 1.5 m). Over-water bungalow, shaffof dengiz va marjon riflari — bu faqat Maldivda shunday.

---

Maldiv — umrida bir marta borish shart bo'lgan joy. SEM Travel bu yo'nalishda narxlarni maxsus kelishib, eng yaxshi orollar va mehmonxonalarni tavsiya qilib beradi. Bepul maslahat uchun: **+998 71 275-55-55**.`,
    contentRu: `Мальдивы — рай в Индийском океане. Более 1 200 островов, кристально чистое море и самые живописные закаты на планете. Для туристов из Узбекистана Мальдивы кажутся недостижимо дорогими — но это миф. При правильном планировании тур обходится дешевле, чем кажется.

В этой памятке — всё необходимое: виза, перелёт, цены, выбор острова и лайфхаки для экономии.

## Нужна ли виза на Мальдивы гражданам Узбекистана?

**Хорошая новость:** виза не нужна. При прилёте выдаётся бесплатная виза на 30 дней (on arrival). Нужно только:
- Загранпаспорт (действует более 6 месяцев)
- Обратный билет
- Подтверждение бронирования отеля
- Наличие средств ($50/день)

## Когда лучше лететь на Мальдивы?

| Период | Погода | Рекомендация |
|---|---|---|
| Январь–Апрель | ☀️ Сухо, +28–30°C | **Лучшее время** |
| Май–Июнь | 🌦 Начинаются дожди | Приемлемо |
| Июль–Август | 🌧 Сезон дождей | Дёшево, но дождливо |
| Сентябрь–Октябрь | 🌧 Дождливо | Самые низкие цены |
| Ноябрь–Декабрь | ☀️ Начало сухого сезона | Хорошо |

**Совет:** Январь-март — идеально, но дорого. Бронируйте за 3–4 месяца для скидок 20–30%.

## Какой остров выбрать?

**Резортные острова (private island)**
- Весь остров — один отель
- Over-water bungalow — символ Мальдив
- Цена: $300–1 500+/ночь
- Примеры: Soneva Jani, Coco Bodu Hithi

**Локальные острова (guesthouse)**
- Жилые острова с гестхаусами
- Цена: $80–200/ночь
- Популярные: Maafushi, Thulusdhoo, Dhigurah

**Для среднего бюджета:** Локальный остров + дневные экскурсии = впечатления как на резорте, но в 3–4 раза дешевле.

## Как добраться из Ташкента на Мальдивы?

Прямых рейсов нет. Летят с пересадкой:

| Маршрут | Авиакомпания | Время в пути | Цена |
|---|---|---|---|
| TAS → DXB → MLE | Emirates / flydubai | 8–10 часов | $500–800 |
| TAS → DOH → MLE | Qatar Airways | 9–11 часов | $550–850 |
| TAS → IST → MLE | Turkish Airlines | 11–14 часов | $480–750 |
| TAS → KUL → MLE | AirAsia | 12–16 часов | $400–650 |

Из аэропорта Мале до острова:
- **Спидбот** — 30–90 мин, $15–50
- **Гидроплан** — 15–45 мин, $150–400 (для резортов)
- **Паром** — 1–3 часа, $2–10 (для локальных островов)

## Цены на туры на Мальдивы 2026

| Тип тура | 7 ночей, 2 чел. | Что входит |
|---|---|---|
| Локальный остров (бюджет) | $1 200–1 800 | Перелёт + гестхаус |
| Локальный остров (средний) | $1 800–2 800 | Перелёт + бутик-отель |
| Резорт (3–4 звезды) | $2 500–4 500 | Перелёт + резорт |
| Резорт (5 звёзд) | $5 000–10 000+ | Перелёт + villa на воде |

## Чем заняться на Мальдивах?

- **Снорклинг** — кораллы, рыбы, черепахи ($0–30)
- **Дайвинг** — $80–150/погружение
- **Наблюдение за дельфинами** — $25–40
- **Пикник на песчаной отмели** — $50–80
- **Биолюминесцентный пляж** — ночное свечение (сезонно)
- **Снорклинг с китовыми акулами** — Ари Атолл ($100–150)

## Лайфхаки для туристов на Мальдивах

- Берите **USD наличными** — на локальных островах карты не везде принимают
- Крем от солнца **SPF 50+ reef-safe** — обязателен (обычный вредит кораллам)
- **Waterproof чехол** для телефона или GoPro — пригодится каждый день
- На локальных островах у мечетей **одевайтесь скромно**
- **Ранее бронирование** за 3–4 месяца даёт скидку 20–30%
- **Апрель–май и ноябрь** — погода хорошая, цены ниже высокого сезона

## Часто задаваемые вопросы

**Есть ли халяльная еда на Мальдивах?**
Да. Мальдивы — 100% мусульманская страна. На локальных островах вся еда халяльная. На резортных островах есть алкоголь, на локальных — нет.

**Можно ли поехать на Мальдивы в одиночку?**
Да, соло-путешествия очень популярны. На Maafushi и Thulusdhoo много доступных гестхаусов для одиночных туристов.

**Есть ли интернет на Мальдивах?**
Да, Wi-Fi почти везде. Местная SIM-карта (Dhiraagu или Ooredoo) — 10 GB ≈ $15.

**Чем Мальдивы отличаются от других курортов?**
Мальдивы — самая низкая страна в мире (средняя высота 1,5 м), вилы на воде, кристально прозрачное море и нетронутые коралловые рифы — этого нет нигде в таком масштабе.

---

Мальдивы — место, которое нужно посетить хотя бы раз в жизни. SEM Travel поможет подобрать лучший остров по вашему бюджету и организует всё — от перелёта до трансфера на острове. Звоните: **+998 71 275-55-55**.`,
  },

  // ── POST 19 ── Bali guide ──────────────────────────────────────────────────
  {
    id: 19,
    slug: "bali-indoneziya-sayohati-qollanma",
    emoji: "🌴",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=70",
    categoryUz: "Pamyatka",
    categoryRu: "Памятка",
    titleUz: "Bali sayohati: O'zbek sayyohlari uchun to'liq qo'llanma 2026",
    titleRu: "Бали: полный путеводитель для туристов из Узбекистана 2026",
    descUz: "Bali ga qanday borish, viza, narxlar, eng yaxshi rayonlar va amaliy lifehaklar. Arzon va mazali Bali sayohati uchun hamma narsani bilib oling.",
    descRu: "Как добраться до Бали, виза, цены, лучшие районы и практические лайфхаки. Всё для доступного и незабываемого путешествия на Бали.",
    date: "2026-03-22",
    readTimeUz: "9 daqiqa",
    readTimeRu: "9 минут",
    author: "SEM Travel",
    tagsUz: ["Bali", "Indoneziya", "Plyaj", "Madaniyat", "Budget sayohat"],
    tagsRu: ["Бали", "Индонезия", "Пляж", "Культура", "Бюджетное путешествие"],
    contentUz: `Bali — Indoneziyaning eng mashhur orollaridan biri, dunyo bo'ylab sayohatchilarning sevimli manzili. Guruh gijja-gijja ma'badlar, terras sholi dalalari, chiroyli plyajlar va jonli geceleri bilan Bali har xil turist uchun biror narsa taklif qiladi. O'zbekistondan borish mumkinmi? Albatta — va bu siz o'ylagandan arzonroq.

## Balida viza: O'zbekiston fuqarolari uchun

O'zbekiston fuqarolari uchun Bali ga (Indoneziya) **viza on arrival** bor — aeroportda olasiz:
- **Narx:** $35 (30 kunlik)
- **Uzaytirish mumkin:** +30 kun uchun $35 to'lov
- **Zarur hujjatlar:** Pasport, qaytish bileti, mehmonxona bron

**Visa Free variant:** 2024 yildan Indoneziya ba'zi yo'nalishlar uchun viza bekor qilgan — lekin O'zbekiston uchun hali on arrival ($35) kerak.

## Toshkentdan Baliga qanday borish?

To'g'ridan-to'g'ri reys yo'q. Tranzit orqali:

| Marshrut | Umumiy vaqt | Taxminiy narx |
|---|---|---|
| TAS → KUL → DPS (Kuala Lumpur orqali) | 10–13 soat | $350–550 |
| TAS → SIN → DPS (Singapur orqali) | 11–14 soat | $400–600 |
| TAS → DXB → DPS (Dubai orqali) | 12–16 soat | $450–700 |
| TAS → BKK → DPS (Bangkok orqali) | 11–15 soat | $380–580 |

**Eng arzon marshrut:** Kuala Lumpur orqali (AirAsia yoki Malaysia Airlines). Ko'pincha tranzitda Kuala Lumpur da 1 kecha qolib ketish foydali — Petronas minoralarini ko'rib, Bali ga dam olgan holda ketasiz.

## Bali rayonlari: qayerda turishni tanlash kerak?

**Seminyak / Kuta** — plyaj, tungi hayot, do'konlar
- Kim uchun: yoshlar, dam olish maqsadida
- Narx: $30–150/tun

**Ubud** — tabiat, madaniyat, meditatsiya
- Kim uchun: madaniyat va tabiat sevadiganlar
- Narx: $20–80/tun

**Canggu** — surf, digital nomadlar, cafe madaniyati
- Kim uchun: faol yoshlar, surferlar
- Narx: $25–100/tun

**Nusa Dua** — hashamat, xavfsiz plyaj, oilaviy
- Kim uchun: oilalar, hashamat tarafdorlari
- Narx: $80–300/tun

**Amed / Candidasa** — tinch, snorkeling, diving
- Kim uchun: tabiat va suv osti sevadiganlar
- Narx: $15–60/tun

## Balida nima ko'rish kerak?

**Majburiy joylar:**
- **Tanah Lot** — dengizda suzayotgan ma'bad (kirish $3)
- **Tirta Gangga** — suv saroyi, terras hovuzlar (kirish $2)
- **Tegallalang rice terrace** — sholi terrasi (Ubud yaqinida, bepul)
- **Uluwatu ma'badi** — qoya ustidagi ma'bad, kechki Kecak raqsi ($10–15)
- **Lempuyang ma'badi** — "Jannatga eshik" — mashhur foto joyi (bepul, ammo yurishingiz kerak)
- **Jatiluwih UNESCO terrace** — eng ulkan sholi terrasalari
- **Kintamani vulkani** — Batur vulkani va ko'l manzarasi

**Plyajlar:**
- Seminyak — sunset plyaj
- Nusa Dua — tozalik va xavfsizlik
- Balangan — surferlar uchun
- Padang Padang — Eat Pray Love filmi joyi

## Bali da narxlar qanday?

| Xarajat | Taxminiy narx |
|---|---|
| Budget mehmonxona (villa/hostel) | $15–30/tun |
| O'rtacha mehmonxona (private pool villa) | $50–120/tun |
| 5 yulduzli resort | $150–500+/tun |
| Tushlik (lokal warung) | $2–5 |
| Tushlik (turist restoran) | $8–20 |
| Scooter ijarasi | $5–8/kun |
| Massaj (1 soat) | $8–15 |
| Manikur/pedikur | $5–10 |

## Bali lifehaklar — real sayyohlardan maslahatlar

- **Scooter** — Balidagi eng qulay transport. Xalqaro haydovchilik guvohnomasi bilan ijaraga oling ($5–8/kun)
- **Lokal warung** da ovqatlaning — mazali, halol, arzon. $2–5 ga to'yib yeyish mumkin
- **Oldindan bron qiling** — xususiy hovuzli villalar $50–80 ga boradi, lekin oldindan bron kerak
- **Quyosh chiqishida Batur vulkaniga** chiqing — tog' boshida quyosh chiqishini ko'rish (guide bilan $20–30)
- **Uluwatu kechasida Kecak raqsi** — majburiy tajriba ($10–15, oldindan chipta oling)
- **Narx savdolashadi** — do'konlarda va taksilarda hamma narxni savdolashtirib olish mumkin
- **Rainy season (oktyabr-mart)** — 30–40% arzon, lekin tushlik vaqtida yomg'ir bo'lishi mumkin
- **Bali belly** — lokal suvdan saqlanib, faqat butilkadagi suv iching
- **Sarong** (kiyim) olib boring — ma'badlarga kirish uchun yopishingiz shart
- **Pertamina** yoqilg'i stantsiyasida yonilg'i oling, ko'chadan sotilgan yonilg'i qimmatroq

## Ko'p so'raladigan savollar

**Baliga bolalar bilan borsa bo'ladimi?**
Ha, Bali oilaviy sayohat uchun ajoyib. Nusa Dua — bolalar uchun eng xavfsiz va qulay rayon. Ko'plab mehmonxonalarda bolalar klubi va sayoz hovuz bor.

**Balidagi ovqat halolmi?**
Indoneziyaning 87% i musulmon. Balidagi hindularning orolida halol belgisini qidiring — lokal warunglarning aksariyatida halol taom bor. Halol restoran ilovasi (HalalTrip) yordamida topish mumkin.

**Balida dollar yoki lokal valyuta?**
Rasmiy valyuta — Indoneziya Rupiyasi (IDR). $1 ≈ 16,000 IDR. Aeroportda emas, shahardagi money changer larda kurs yaxshiroq. Kredit karta katta joylarda qabul qilinadi.

**Bali va Tailand: qaysi biri yaxshiroq?**
Ikkisi ham ajoyib, lekin maqsad farq qiladi. Bali — madaniyat, tabiat, ma'badlar uchun. Tailand — tungi hayot, massaj, arzon food uchun. Oila uchun Bali, yoshlar uchun ikkalasi ham.

---

Bali — hayotda bir marta borish shart bo'lgan joy. SEM Travel Toshkentdan Baliga to'liq paket turlarni tashkil qiladi. Bepul maslahat: **+998 71 275-55-55**.`,
    contentRu: `Бали — самый известный остров Индонезии и одно из главных туристических направлений мира. Храмы, рисовые террасы, серфинг, спа и роскошные виллы с частным бассейном по цене московской квартиры — всё это Бали. Для туристов из Узбекистана Бали становится всё популярнее. И правильно: туры доступны, а впечатления — на всю жизнь.

## Нужна ли виза на Бали гражданам Узбекистана?

Да, нужна. Но оформляется она прямо в аэропорту:
- **Visa on Arrival (VOA):** $35 за 30 дней
- **Продление:** ещё $35 за +30 дней
- **Документы:** загранпаспорт, обратный билет, бронь отеля

## Как добраться из Ташкента на Бали?

| Маршрут | Общее время | Цена |
|---|---|---|
| TAS → KUL → DPS | 10–13 часов | $350–550 |
| TAS → SIN → DPS | 11–14 часов | $400–600 |
| TAS → DXB → DPS | 12–16 часов | $450–700 |
| TAS → BKK → DPS | 11–15 часов | $380–580 |

**Самый дешёвый вариант:** через Куала-Лумпур (AirAsia / Malaysia Airlines). Можно сделать стоп-овер в КЛ на день и посмотреть башни Петронас.

## Районы Бали: где остановиться?

**Семиньяк / Кута** — пляж, ночная жизнь, шопинг
- Для кого: молодёжь, отдых
- Цена: $30–150/ночь

**Убуд** — природа, культура, медитация
- Для кого: любители культуры и природы
- Цена: $20–80/ночь

**Чангу** — сёрф, digital nomads, кафе-культура
- Для кого: активная молодёжь, сёрферы
- Цена: $25–100/ночь

**Нуса Дуа** — роскошь, безопасный пляж, семейный отдых
- Для кого: семьи, любители комфорта
- Цена: $80–300/ночь

## Что обязательно посмотреть на Бали?

- **Танах Лот** — храм на скале в океане ($3)
- **Тирта Гангга** — водный дворец с прудами ($2)
- **Рисовые террасы Тегаллаланг** — Убуд, бесплатно
- **Улувату** — храм на утёсе + вечерний танец Кечак ($10–15)
- **Ворота в рай (Lempuyang)** — культовое фото
- **Вулкан Батур** — рассвет на вершине (с гидом $20–30)

## Цены на Бали

| Расход | Примерная цена |
|---|---|
| Бюджетный отель/гостевой дом | $15–30/ночь |
| Вилла с бассейном (средний класс) | $50–120/ночь |
| Обед в местном варунге | $2–5 |
| Обед в туристическом ресторане | $8–20 |
| Аренда скутера | $5–8/день |
| Массаж (1 час) | $8–15 |

## Лайфхаки для Бали

- **Скутер** — самый удобный транспорт. Аренда $5–8/день с международными правами
- **Варунги** — местные кафе: вкусно, дёшево, сытно за $2–5
- **Торгуйтесь** — в магазинах и такси цены снижаются в 1,5–2 раза
- **Восход на вулкане Батур** — незабываемо, стартуйте в 3:30 ночи
- **Рисовый сезон (октябрь–март)** — на 30–40% дешевле, но бывают ливни
- **Сароng** — кусок ткани, обязателен при входе в храмы
- **Не пейте водопроводную воду** — только бутилированная
- **Карта Google Maps** отлично работает — скачайте офлайн

## Часто задаваемые вопросы

**Можно ли ехать на Бали с детьми?**
Да, Нуса Дуа — идеальный район для семей. Чистые пляжи, безопасно, много отелей с детскими клубами.

**Есть ли халяльная еда на Бали?**
Да. Ищите значок халяль (HalalTrip помогает найти). В местных варунгах чаще всего халяльная еда — Индонезия на 87% мусульманская страна, хотя Бали — индуистский остров.

**Какую валюту брать на Бали?**
Рупия (IDR). $1 ≈ 16 000 IDR. Меняйте в городе, не в аэропорту — курс лучше. Карты принимают в крупных местах.

---

Бали — место, куда хочется вернуться. SEM Travel организует туры на Бали из Ташкента с полным пакетом услуг. Звоните бесплатно: **+998 71 275-55-55**.`,
  },

  // ── POST 20 ── Greece guide ────────────────────────────────────────────────
  {
    id: 20,
    slug: "gretsiya-sayohati-pamyatka-2026",
    emoji: "🇬🇷",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=70",
    categoryUz: "Pamyatka",
    categoryRu: "Памятка",
    titleUz: "Gretsiya sayohati pamyatkasi 2026: Santorini, Afina, viza va narxlar",
    titleRu: "Путешествие в Грецию 2026: Санторини, Афины, виза и цены — памятка туриста",
    descUz: "Gretsiya uchun Schengen vizasi qanday olinadi, qaysi orollarni ko'rish kerak, Santorini vs Mykonos, narxlar va lifehaklar. O'zbek sayyohlari uchun.",
    descRu: "Шенгенская виза для Греции, какие острова посетить, Санторини vs Миконос, цены и лайфхаки. Всё для туристов из Узбекистана.",
    date: "2026-03-25",
    readTimeUz: "8 daqiqa",
    readTimeRu: "8 минут",
    author: "SEM Travel",
    tagsUz: ["Gretsiya", "Santorini", "Schengen viza", "Afina", "Plyaj"],
    tagsRu: ["Греция", "Санторини", "Шенген", "Афины", "Острова"],
    contentUz: `Gretsiya — Evropaning eng go'zal sayohat manzillaridan biri. Oq-ko'k uylar, qadimiy tarix, mazali taom va tiniq dengiz — bularning hammasi bir joyda. O'zbekistondan borishda Schengen vizasi kerak bo'ladi, lekin u qo'rqinchli emas — SEM Travel bu jarayonni osonlashtiradi.

## Gretsiyaga Schengen vizasi qanday olinadi?

Gretsiya Schengen hududi. O'zbekiston fuqarolari uchun Gretsiya vizasi kerak:

**Zarur hujjatlar:**
- Pasport + nusxasi (oxirgi 10 yilgi pasportlar)
- 2 ta fotosurat (35x45 mm)
- Bank hisobi (so'nggi 3 oylik, kamida $1,000–1,500 qoldiq)
- Mehmonxona bron tasdiqnomasi
- Qaytish bileti
- Sug'urta polisi (kamida €30,000)
- Ish joyi ma'lumotnomasi (yoki tadbirkorlik hujjati)

**Gretsiya vizasi narxi:** €80 (≈ $88)
**Ko'rib chiqish muddati:** 5–15 ish kuni
**Gretsiya elchixonasi:** Toshkent, Nukus ko'chasi 53

**SEM Travel maslahat:** Gretsiya – eng ko'p viza beradigan Schengen davlatlardan biri. Birinchi Schengen vizangiz uchun Gretsiyani tanlash qulay.

## Qachon borish kerak?

| Oy | Ob-havo | Xarakteristika |
|---|---|---|
| Aprel–May | +20–25°C | Gullagan tabiat, kam turist |
| Iyun–Avgust | +28–35°C | Dengiz mavsumi, ko'p turist |
| Sentyabr–Oktyabr | +22–28°C | **Eng yaxshi vaqt** — iliq, ozroq turist |
| Noyabr–Mart | +10–15°C | Ekskursiyalar uchun, plyaj emas |

**Tavsiya:** Sentyabr–oktyabr — dengiz hali iliq, narxlar past, odamlar kamroq. Ideal!

## Gretsiyaning eng yaxshi orollari: qaysinisini tanlash?

**Santorini** — dunyodagi eng romantic joy
- Oia qishlog'i, sunseti, volcano view
- Kim uchun: juftliklar, asal oyi
- Narx: qimmat ($150–400+/tun)
- Kamchilik: juda ko'p turist, tor yo'llar

**Mykonos** — tungi hayot va plyaj
- Kim uchun: yoshlar, party lovers
- Narx: qimmat ($120–350+/tun)
- Mashhur: Paradise Beach, Little Venice

**Krit** — eng yirik orol, tarix va plyaj
- Kim uchun: oilalar, madaniyat sevadiganlar
- Narx: o'rtacha ($60–150/tun)
- Ko'rish: Knossos saroyi, Samaria jar

**Rodos** — tarix va plyaj kombinatsiyasi
- Kim uchun: har xil turist uchun
- Narx: o'rtacha ($50–120/tun)

**Korfu** — yashil orol, romantika
- Kim uchun: tabiat, tinchlik
- Narx: o'rtacha ($50–100/tun)

**Zakynthos** — Navagio plyaji (Shipwreck Beach)
- Dunyo bo'ylab eng mashhur plyajlardan biri
- Kim uchun: dengiz va tabiat sevadiganlar

## Afina: majburiy ko'riladigan joylar

- **Akropol** — qadimiy Afina qal'asi (kirish €20)
- **Partenon ma'badi** — 2,500 yillik
- **Plaka** — tarixiy mahalla, restoran va do'konlar
- **Monastiraki** — bozor va flemarket
- **Akropol muzeyi** — qadimiy artefaktlar (€10)
- **Kapnikarea cherkov** — shahar markazida qadimiy cherkov

**Afina — Santorini marshrutı tavsiya:** 2–3 kun Afina + 3–4 kun Santorini = ideal Gretsiya sayohati.

## Gretsiya tur narxlari 2026

| Tur turi | 7 tun, 2 kishi | Nima kiradi |
|---|---|---|
| Budget (Krit/Rodos) | $1,200–1,800 | Parvoz + 3* mehmonxona |
| O'rtacha (Santorini) | $2,000–3,000 | Parvoz + 4* mehmonxona |
| Hashamat | $3,500–6,000+ | Parvoz + 5* cave hotel |

## Gretsiya amaliy lifehaklar

- **Ferri** — orollar orasida ferri kemada sayohat — arzon va ajoyib tajriba ($20–60)
- **Greek salad, gyros, souvlaki** — mahalliy taom, arzon ($3–8) va mazali
- **Supermarket** — mahalliy Lidl yoki AB Vassilopoulos dan oziq-ovqat arzonroq
- **Sunrise Oia** da — Santorini sunsetini ko'rish uchun kamida 1 soat oldin boring (odamlar juda ko'p)
- **ATV/Quad bike** — orollarda tabiat ko'rish uchun ($30–50/kun)
- **Ferri ni oldindan bron qiling** — yozda joylar tezda tugaydi
- **Tap water** — Afina va ko'p shaharlarda ichish mumkin (chiroyli suv)
- **Sunscreen** — quyosh kuchli, SPF 50 olib boring

## Ko'p so'raladigan savollar

**Gretsiyaga birinchi marta boruvchilar uchun qaysi orol eng yaxshi?**
Krit — eng yaxshi birinchi tanlov: katta orol, ko'p plyaj, tarix, arzon narxlar va Afinadan to'g'ridan-to'g'ri reys.

**Santorini vs Mykonos: qaysi biri yaxshi?**
Santorini — romantika, manzara, juftlik uchun. Mykonos — tungi hayot, plyaj klublari, yoshlar uchun. Oila uchun Krit yoki Rodos.

**Gretsiyada kredit karta qabul qilinadimi?**
Ha, hamma joyda. Lekin kichik adachalarda va mahalliy bazorlarda kesh ham saqlang.

**Gretsiyadan Schengen bilan boshqa davlatlarga o'tsa bo'ladimi?**
Ha. Gretsiya Schengen vizasi barcha 27 ta Schengen davlatiga kirish imkonini beradi.

---

Gretsiya — Evropa sayohatini boshlamoqchi bo'lganlar uchun ideal tanlov. SEM Travel Schengen viza yordami va Gretsiya turlarini tashkil qiladi. Bog'laning: **+998 71 275-55-55**.`,
    contentRu: `Греция — одно из самых живописных направлений Европы. Белые домики на фоне синего неба, руины античных храмов, свежая морская рыба и прозрачное Эгейское море — Греция притягивает туристов со всего мира. Из Узбекистана нужна шенгенская виза, но это не так страшно, как кажется.

## Как получить визу в Грецию (Шенген)?

Греция входит в Шенгенскую зону. Нужна Шенгенская виза:

**Необходимые документы:**
- Загранпаспорт + копия
- 2 фото 35×45 мм
- Выписка из банка (остаток от $1 000–1 500)
- Бронь отеля + обратный билет
- Страховой полис (мин. €30 000)
- Справка с места работы / документы ИП

**Стоимость визы:** €80 (~$88)
**Срок рассмотрения:** 5–15 рабочих дней

**Совет SEM Travel:** Греция — одна из самых лояльных стран по выдаче шенгенских виз. Если вы оформляете шенген впервые — выбирайте Грецию.

## Когда лучше ехать в Грецию?

| Месяц | Погода | Характеристика |
|---|---|---|
| Апрель–Май | +20–25°C | Цветущая природа, мало туристов |
| Июнь–Август | +28–35°C | Пляжный сезон, много туристов |
| Сентябрь–Октябрь | +22–28°C | **Лучшее время** — тепло, дешевле |
| Ноябрь–Март | +10–15°C | Экскурсии, не для пляжа |

## Греческие острова: какой выбрать?

**Санторини** — самое романтичное место на земле
- Деревня Ойя, закаты, вид на вулкан
- Для кого: пары, медовый месяц
- Цена: дорого ($150–400+/ночь)

**Миконос** — ночная жизнь и пляж
- Для кого: молодёжь, вечеринки
- Цена: дорого ($120–350+/ночь)

**Крит** — крупнейший остров, история и пляжи
- Для кого: семьи, любители истории
- Цена: доступно ($60–150/ночь)

**Родос** — история + пляж
- Для кого: все категории туристов
- Цена: доступно ($50–120/ночь)

**Закинф** — пляж Навагио (Shipwreck Beach)
- Один из самых фотографируемых пляжей мира

## Афины: что обязательно посмотреть

- **Акрополь** — главная достопримечательность Греции (€20)
- **Парфенон** — 2 500-летний храм
- **Плака** — исторический квартал, рестораны, магазины
- **Монастираки** — рынок и блошиный рынок
- **Музей Акрополя** (€10)

**Рекомендуемый маршрут:** 2–3 дня Афины + 3–4 дня Санторини = идеальная Греция.

## Цены на туры в Грецию 2026

| Тип тура | 7 ночей, 2 чел. | Что включено |
|---|---|---|
| Эконом (Крит/Родос) | $1 200–1 800 | Перелёт + 3* отель |
| Средний (Санторини) | $2 000–3 000 | Перелёт + 4* отель |
| Люкс | $3 500–6 000+ | Перелёт + пещерный отель |

## Лайфхаки для Греции

- **Паромы** между островами — дёшево и красиво ($20–60), бронируйте заранее
- **Гирос и сувлаки** — уличная еда за $3–5, очень вкусно
- **Супермаркет Lidl** — продукты дешевле, чем в туристических местах
- **Закат в Ойе** — приходите за час, мест мало, людей очень много
- **ATV/квадроцикл** — отличный способ исследовать острова ($30–50/день)

## Часто задаваемые вопросы

**Какой остров лучше для первого раза?**
Крит — самый большой выбор пляжей, истории и цен. Прямые рейсы из Афин, всё доступно.

**Санторини или Миконос?**
Санторини — романтика, закаты, пары. Миконос — вечеринки, клубы, молодёжь.

**Шенген Греции действует в других странах?**
Да — во всех 27 странах Шенгенской зоны.

---

Греция — идеальное направление для первого европейского путешествия. SEM Travel поможет с визой и организует тур. Звоните: **+998 71 275-55-55**.`,
  },

  // ── POST 21 ── Thailand lifehacks ─────────────────────────────────────────
  {
    id: 21,
    slug: "tailand-lifehaklar-va-maslahatlar",
    emoji: "🇹🇭",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=70",
    categoryUz: "Lifehaklar",
    categoryRu: "Лайфхаки",
    titleUz: "Tailand lifehaklar: real sayyohlardan 20 ta maslahat — pul tejash va xatolardan qochish",
    titleRu: "Лайфхаки Таиланда: 20 советов от реальных туристов — экономия и ошибки, которых стоит избежать",
    descUz: "Tailandda qanday tejash, qanday xatolardan qochish, eng arzon va yaxshi joylar, transport, ovqat va xavfsizlik bo'yicha real maslahatlar.",
    descRu: "Как сэкономить в Таиланде, каких ошибок избежать, лучшие бюджетные места, транспорт, еда и безопасность — реальные советы от опытных туристов.",
    date: "2026-03-28",
    readTimeUz: "7 daqiqa",
    readTimeRu: "7 минут",
    author: "SEM Travel",
    tagsUz: ["Tailand", "Lifehaklar", "Budget sayohat", "Phuket", "Bangkok"],
    tagsRu: ["Таиланд", "Лайфхаки", "Бюджет", "Пхукет", "Бангкок"],
    contentUz: `Tailand — Janubi-Sharqiy Osiyoning eng mashhur turistik davlati. Arzon narxlar, ajoyib taom, go'zal plyajlar va do'stona xalq — bularning hammasi Tailandni sevimli manzilga aylantiradi. Lekin birinchi marta boruvchilar ko'plab xatolarga yo'l qo'yadi. Bu maqolada real sayyohlardan 20 ta hayotiy maslahat.

## Viza: O'zbekiston fuqarolari uchun Tailand

O'zbekiston fuqarolari uchun Tailandga **viza on arrival (VOA)** mavjud:
- Narxi: **2,000 baht** (≈ $55)
- Muddati: 15 kun
- Uzaytirish: yana 7–15 kun mumkin (+500 baht)

**Yaxshiroq variant — Thailand e-Visa:**
- Online ariza: $35 (30 kun)
- tailande-visa.go.th saytida
- Ko'rib chiqish: 3–5 ish kuni

## 20 ta Tailand lifehaki

**Pul va narxlar:**

**1. Baht faqat Tailandda almashtiring**
Toshkentda baht topish qiyin va kurs yomon. Toshkentdan USD/EUR olib, Tailandda Super Rich yoki kasiyolarda almashtiring. $1 ≈ 34–35 THB.

**2. ATM komissiyasi — 220 baht**
Tailanddagi barcha ATM chet el kartalaridan 220 baht oladi. Bir marta ko'p pul oling — 5,000–10,000 baht bir marta.

**3. Tuk-tuk dagi firib**
Tuk-tuk haydovchisi sizi "bepul" yoki "arzon" ekskursiyaga olib borsa — bu trap. Mehmonxonadan to'g'ri taksi buyurtma qiling yoki Grab ilovasini ishlating.

**4. Grab — Tailandning Uberi**
Grab ilovasida taksi narxi oldindan ko'rsatiladi, savdolashish shart emas. Bangkok da metro + Grab = eng tejamkor transport.

**Ovqat va ichimliklar:**

**5. Lokal bozor va street food**
Tailand street food — dunyodagi eng mazali va arzonilaridan. Pad Thai: 50–80 baht ($1.5–2.5). Som Tam, green curry, mango rice — barchasi 60–120 baht.

**6. 7-Eleven — hayotni qutqaradi**
Har ko'chada bor. Gaz puli to'lash, arzon ovqat, ichimlik, SIM karta — hammasi bir joyda. Sandvich 45–60 baht.

**7. "Halal food" belgi qidiring**
Muslim belt deb ataladigan janubiy provinsiyalarda (Krabi, Ko Lanta, Pattaya) ko'plab halol restoran bor. Google Maps da "halal" deb qidiring.

**8. Mango sticky rice — majburiy**
Tailandning milliy tatlisi: mango + shirin guruch + kokos suti. Bozorda 80–120 baht.

**Plyaj va orollar:**

**9. Phuket vs Koh Samui vs Krabi**
- **Phuket** — katta, ko'p variant, tungi hayot
- **Koh Samui** — hashamat va ya oila uchun
- **Krabi** — qoyali tabiat, backpacker, arzon
- **Koh Lanta** — tinch, halol ovqat ko'p, oila uchun
- **Koh Tao** — diving uchun eng mashhur

**10. Longtail qayig'i — orollar orasida**
Airport boat/ferry ga qaraganda longtail boat arzonroq va tezroq. 150–300 baht.

**11. Snorkeling set — o'zing olib bor**
Orolda ijaraga berish $5–10/kun. 5+ kunlik safar bo'lsa — Bangkokda Chatuchak bozoridan arzonroq sotib oling.

**Transport:**

**12. Bangkok da BTS Skytrain**
Bangkok da trafik dahshatli. BTS Skytrain (metro) — eng tez va arzon. Kunlik pass: 150 baht. Ko'plab markaziy joylar metro bilan bog'liq.

**13. Overnight train / bus**
Bangkok → Chiang Mai overnight train: 700–1,200 baht (vs samolyot 1,500–2,500 baht). Uhlash + transport = ikki narx tejash.

**14. Scooter ijarasi — Phuket da**
Yaxshi haydovchilik guvohnomasi bilan scooter ijarasi: 200–300 baht/kun. Orollarni erkin ko'rish uchun ideal.

**Ko'riladigan joylar:**

**15. Wat Pho va Wat Arun — ertalab boring**
Bangkokdagi ma'badlar ertalab 7–9 da kam turist bo'ladi. Tushda esa odamdan turolmaysiz.

**16. Tiger Kingdom — yo'q turing**
Ba'zi turistik joylar hayvonlarga nisbatan shafqatsiz. Tiger Kingdom, fil yurishi (ankus bilan) — axloqiy jihatdan muammoli. Elephant Nature Park — etik variant.

**17. Floating market — qaysin biri haqiqiy?**
Damnoen Saduak — turist uchun, qimmat. Amphawa — kechqurun, mahalliy, autentik.

**Sog'liq va xavfsizlik:**

**18. Tailand belly — ehtiyot bo'ling**
Ko'cha muzini iste'mol qilmang. Muz brendini tekshiring (plastik sumkali muz xavfli). Gut flora uchun probiotik olib boring.

**19. Sug'urta — majburiy**
Tailandda dori-darmon va kasalxona narxlari chet elliklar uchun qimmat. Sug'urta $30–50 ga sayohat sug'urtasi oling.

**20. Quyosh — kuchli**
Aprel-may — harorat +38–40°C. Namlik ham yuqori. SPF 50+, quyosh shlyapasi, suv ko'p iching. Issiqlik urishi real xavf.

## Ko'p so'raladigan savollar

**Tailandda qancha pul kerak?**
Budget sayohatchi: $40–60/kun (mehmonxona + ovqat + transport). O'rtacha: $80–120/kun. Hashamat: $200+/kun.

**Tailand va Bali: qaysi biri yaxshi?**
Tailand — street food, madaniyat, arzon transport, tungi hayot. Bali — tabiat, ma'badlar, villa bilan basseyn, tinchlik. Birinchi sayohat uchun Tailand ko'proq ko'rinadigan joy beradi.

**Tailandda necha kun bo'lish kerak?**
Minimal: 10 kun (Bangkok 3 kun + orol 7 kun). Ideal: 14–21 kun — Bangkok + Chiang Mai + orol.

**Phuket vs Krabi: qaysi biri?**
Phuket — qulay, ko'p variant, hashamat ham bor. Krabi — tabiat, plyaj go'zalligi, arzon. Birinchi marta — Phuket.

---

Tailand — har safar yangi tajriba beradigan davlat. SEM Travel Toshkentdan Tailandga turlar tashkil qiladi. Bepul maslahat: **+998 71 275-55-55**.`,
    contentRu: `Таиланд — самое посещаемое туристическое направление Юго-Восточной Азии. Дешёвая уличная еда, прекрасные пляжи, древние храмы и дружелюбные люди — всё это делает Таиланд любимым местом отдыха миллионов. Но первый раз туристы часто совершают одни и те же ошибки. Вот 20 реальных лайфхаков от опытных путешественников.

## Виза: для граждан Узбекистана

**Visa on Arrival (VOA):**
- Стоимость: 2 000 батов (~$55)
- Срок: 15 дней

**Thailand e-Visa (лучше):**
- $35, онлайн, 30 дней
- Оформить на сайте thailande-visa.go.th за 3–5 дней

## 20 лайфхаков для Таиланда

**Деньги:**

**1. Меняйте в Таиланде, не в Узбекистане**
Везите доллары/евро, меняйте в Super Rich или в кассах обмена. $1 ≈ 34–35 THB — лучший курс.

**2. ATM берёт 220 батов комиссию**
Снимайте реже и больше — 5 000–10 000 батов за раз. Карта плюс кэш — оптимально.

**3. Grab вместо тук-тука**
Grab (местный Uber) показывает цену до поездки. Избегайте тук-тукеров с "бесплатными экскурсиями" — это ловушка.

**Еда:**

**4. Стрит-фуд — лучшая еда Таиланда**
Пад Тай: 50–80 батов, Сом Там, карри — 60–120 батов. Вкуснее ресторанов и в разы дешевле.

**5. 7-Eleven — спасение**
На каждом углу. Еда, напитки, SIM-карта, оплата счетов — 24/7. Сэндвич от 45 батов.

**6. Ищите знак Halal**
На юге (Краби, Ко Ланта) много халяльных кафе. В Google Maps ищите "halal food".

**Пляжи и острова:**

**7. Пхукет vs Краби vs Ко Самуи**
- **Пхукет** — крупный, ночная жизнь, удобства
- **Краби** — скалы, природа, дешевле
- **Ко Ланта** — тихо, халяльная еда, для семей
- **Ко Тао** — лучший дайвинг

**8. Лодка-хвост вместо парома**
Longtail boat между островами — дешевле и быстрее ferry. 150–300 батов.

**Транспорт:**

**9. BTS Skytrain в Бангкоке**
Пробки в Бангкоке чудовищные. BTS (надземное метро) — быстро и дёшево. Дневной пасс: 150 батов.

**10. Ночной поезд / автобус**
Бангкок → Чиангмай на поезде: 700–1 200 батов vs самолёт 1 500–2 500. Едешь ночью — экономишь и на транспорте, и на ночлеге.

**Достопримечательности:**

**11. Храмы — идите с утра**
Ват Пхо и Ват Арун в 7–9 утра почти пусты. Днём — толпы.

**12. Floating market — Ампхава, не Дамноен Садуак**
Дамноен Садуак — для туристов, дорого. Ампхава (вечером) — аутентично и в разы интереснее.

**Здоровье и безопасность:**

**13. Страховка — обязательна**
Медицина в Таиланде для иностранцев дорогая. Страховка за $30–50 покрывает госпитализацию.

**14. Осторожно с уличным льдом**
Лёд в пакетах (заводской) — безопасен. Колотый лёд в стаканах — риск. Пробиотики в дорогу взять не лишне.

**15. Солнце — серьёзно**
Апрель–май: +38–40°C + высокая влажность. SPF 50+, головной убор, много воды. Тепловой удар — реальная угроза.

## Часто задаваемые вопросы

**Сколько денег нужно на Таиланд?**
Бюджетно: $40–60/день. Средний уровень: $80–120/день. Люкс: $200+/день.

**Таиланд или Бали — что лучше?**
Таиланд — больше разнообразия, уличная еда, ночная жизнь. Бали — природа, виллы с бассейном, медитация. Для первого раза Таиланд даёт больше впечатлений.

**Сколько дней нужно на Таиланд?**
Минимум 10 дней (Бангкок 3 дня + остров 7 дней). Идеально: 14–21 день — Бангкок + Чиангмай + острова.

---

Таиланд — страна, в которую возвращаются снова и снова. SEM Travel организует туры из Ташкента с полным сервисом. Звоните: **+998 71 275-55-55**.`,
  },

  // ── POST 22 ── Egypt Sharm el-Sheikh ──────────────────────────────────────
  {
    id: 22,
    slug: "misr-sharm-el-shayx-pamyatka-2026",
    emoji: "🇪🇬",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=70",
    categoryUz: "Pamyatka",
    categoryRu: "Памятка",
    titleUz: "Sharm el-Shayx pamyatkasi 2026: viza, narxlar, plyajlar va lifehaklar",
    titleRu: "Шарм-эль-Шейх памятка 2026: виза, цены, пляжи и лайфхаки для туристов",
    descUz: "Sharm el-Shayx ga borish uchun hamma narsani bilib oling: viza, narxlar, eng yaxshi plyajlar, diving, All Inclusive va amaliy maslahatlar.",
    descRu: "Всё о Шарм-эль-Шейхе: виза, цены, лучшие пляжи, дайвинг, All Inclusive и практические советы для туристов из Узбекистана.",
    date: "2026-04-01",
    readTimeUz: "7 daqiqa",
    readTimeRu: "7 минут",
    author: "SEM Travel",
    tagsUz: ["Misr", "Sharm el-Shayx", "Diving", "All Inclusive", "Qizil dengiz"],
    tagsRu: ["Египет", "Шарм-эль-Шейх", "Дайвинг", "Красное море", "All Inclusive"],
    contentUz: `Sharm el-Shayx — Misr yarimoroli Sinayda joylashgan dunyodagi eng mashhur kurort. Qizil dengizning dengiz ostidagi go'zalligi, All Inclusive mehmonxonalar va toshbaqalar bilan tanish dengiz — bu joy O'zbek sayyohlari orasida ham tobora mashhur bo'lmoqda.

## Misr (Sharm el-Shayx) uchun viza

O'zbekiston fuqarolari uchun Misr ga viza kerak. Lekin olish juda oson:

**Variant 1: E-Visa (online)**
- evisa.gov.eg saytida ariza
- Narx: $25 (30 kun)
- Ko'rib chiqish: 24–72 soat
- **Eng qulay variant**

**Variant 2: Viza on arrival**
- Misr aeroportida
- Narx: $25
- Muddati: 30 kun

**Variant 3: Sinay faqat (free zone)**
- Sharm el-Shayx — Sinay yarim oroli = maxsus zona
- Viza kerak emas, lekin faqat Sinayda qolish kerak
- Muddati: 15 kun bepul

**SEM Travel maslahat:** E-Visa ni oldindan oling — aeroportda navbat yo'q.

## Qachon borish kerak?

| Oy | Harorat (havo) | Dengiz | Maslahat |
|---|---|---|---|
| Yanvar–Mart | +22–26°C | +22°C | Ajoyib, kun qisqa |
| Aprel–May | +28–33°C | +24°C | **Eng yaxshi vaqt** |
| Iyun–Avgust | +36–42°C | +28°C | Juda issiq, lekin arzon |
| Sentyabr–Oktyabr | +30–35°C | +27°C | **Eng yaxshi vaqt** |
| Noyabr–Dekabr | +24–28°C | +24°C | Yaxshi |

**Tavsiya:** Oktyabr-noyabr — dengiz iliq, havo qulay, narxlar past.

## Sharm el-Shayx rayonlari

**Naama Bay** — shahar markazi
- Restoran, do'kon, tungi hayot
- Turli narx diapazoni
- Ko'pchilik turistlar bu yerda yashaydi

**Sharks Bay** — tinch, diving markazlari
- Oilaviy, diving va snorkeling uchun ideal

**Nabq Bay** — katta mehmonxonalar, mangrove o'rmonlari
- Dengizdan uzoqroq, lekin katta resort mehmonxonalar

**Ras Um Sid / Hadaba** — qoyali sohil
- Snorkeling bevosita mehmonxona oldidan

## Sharm el-Shayxda nima qilish kerak?

**Suv osti dunyosi:**
- **Snorkeling** — bevosita plyajdan (bepul yoki $10–20 ekskursiya)
- **Scuba diving** — Sharks Bay, Blue Hole (Dahab) — world class diving
- **Submarine** — Sinbad kema, dengiz ostida 1 soat ($45–60)

**Ekskursiyalar:**
- **Sinay tog'i + Muqaddas Ekaterina monastiri** — $30–50
- **Cairo va Giza piramidasi** — 1 kunlik parvoz + avtobus ($120–180)
- **Dahab** — hipster shaharchasi, Blue Hole diving ($20–30 avtobus)
- **Aqaba ko'rfazi kemasi** — Iordaniya qirg'og'i ko'rinishi ($30–40)
- **ATV safari cho'lda** — Sinay cho'li, beduin qishlog'i ($25–40)

## Sharm el-Shayx narxlari 2026

| Tur turi | 7 tun, 2 kishi | Nima kiradi |
|---|---|---|
| Budget | $700–1,000 | Parvoz + 3* AI mehmonxona |
| O'rtacha | $1,000–1,500 | Parvoz + 4* AI mehmonxona |
| Premium | $1,500–2,500 | Parvoz + 5* AI mehmonxona |

**Eslatma:** All Inclusive narxida uch mahal ovqat, ichimliklar (alkogolsiz va alkogollilar) va mehmonxona aktivliklari kiradi.

## Sharm el-Shayx lifehaklar

- **All Inclusive** tanlang — Sharmda tashqarida ovqat qimmat ($15–30/ovqat)
- **Diving paket** — 5–10 dive paketi alohida yurganingdan arzonroq (dive markazlaridan so'rang)
- **Cairo uchun flybyus** tanlang — Sharmdan Cairoga 6 soat avtobus ($15–20) vs samolyot ($80–120). Vaqtingiz bo'lsa — avtobus.
- **Non-AI mehmonxona** da 3–5 yulduz band bo'lsa — plyaj va suv uchun $5–10 to'lov kerak bo'ladi. Hisobga oling.
- **Milliy park ruxsatnomasi** — Ras Mohammed milliy parki uchun kirish $10. Snorkeling juda ajoyib.
- **Beduin choy** — tungi cho'l ekskursiyasida beduin choyxonasida choy iching — bepul tajriba
- **Kredit karta** olib boring — katta to'lovlar uchun. Kesh (dollar) ham kerak — kichik savdolar uchun.
- **Poyafzal** — plyajda toshloq joy ko'p, suv poyafzali (water shoes) oling

## Ko'p so'raladigan savollar

**Sharm el-Shayx xavfsizmi?**
Ha. Sharm el-Shayx — turistik muhofazalanganrik zona. So'nggi yillarda xavfsizlik sezilarli yaxshilangan. Millionlab turist har yili boradi.

**Sharm el-Shayx yoki Xurgada: qaysi biri yaxshi?**
Sharm — suv osti go'zalligi, diving, tinch. Xurgada — All Inclusive, katta mehmonxonalar, ko'proq animatsiya. Birinchi marta — Sharm, oilaviy animatsiya uchun — Xurgada.

**Misrda halol ovqat bormi?**
Misr 90% musulmon davlat. Barcha taom halol. Alkogolsiz variantlar hamma joyda bor.

**Toshkentdan Sharmga parvoz qancha?**
To'g'ridan-to'g'ri reys bor. Uzbekistan Airways va boshqalar. Parvoz muddati: 4–5 soat.

---

Sharm el-Shayx — Qizil dengizning eng go'zal burchagi. SEM Travel yil bo'yi Sharmga turlar tashkil qiladi. Bog'laning: **+998 71 275-55-55**.`,
    contentRu: `Шарм-эль-Шейх — один из лучших курортов мира, расположенный на полуострове Синай в Египте. Коралловые рифы Красного моря, отели All Inclusive на любой бюджет, тёплое море круглый год и экзотика Египта — всё в одном месте. Из Ташкента летят прямые рейсы.

## Виза в Египет для граждан Узбекистана

**Вариант 1: E-Visa (онлайн)**
- Сайт: evisa.gov.eg
- Стоимость: $25 (30 дней)
- Рассмотрение: 24–72 часа
- **Самый удобный вариант**

**Вариант 2: Visa on Arrival**
- В аэропорту Египта
- $25, 30 дней

**Вариант 3: Синайская зона (Free Zone)**
- Шарм-эль-Шейх находится в особой зоне Синая
- Виза не нужна, но нельзя выезжать за пределы Синая
- Срок: 15 дней бесплатно

## Когда лучше ехать в Шарм?

| Месяц | Воздух | Море | Рекомендация |
|---|---|---|---|
| Янв–Март | +22–26°C | +22°C | Хорошо |
| Апр–Май | +28–33°C | +24°C | **Отлично** |
| Июн–Авг | +36–42°C | +28°C | Очень жарко, дёшево |
| Сен–Окт | +30–35°C | +27°C | **Лучший сезон** |
| Ноя–Дек | +24–28°C | +24°C | Хорошо |

## Районы Шарм-эль-Шейха

**Naama Bay** — центр города, рестораны, шопинг
**Sharks Bay** — тихо, для дайвинга и семей
**Nabq Bay** — крупные отели, мангровые заросли
**Ras Um Sid** — скалистый берег, снорклинг прямо с берега

## Чем заняться в Шарм-эль-Шейхе?

**Подводный мир:**
- **Снорклинг** — прямо с пляжа или на лодке ($10–20)
- **Дайвинг** — Sharks Bay, Blue Hole в Дахабе — world class
- **Подводная лодка Sinbad** — час под водой ($45–60)

**Экскурсии:**
- **Гора Синай + монастырь св. Екатерины** — $30–50
- **Каир и пирамиды Гизы** — перелёт + автобус ($120–180)
- **Дахаб** — хипстерский городок, Blue Hole ($20–30 автобус)
- **ATV-сафари в пустыне** — бедуинская деревня ($25–40)

## Цены на туры в Шарм 2026

| Тип тура | 7 ночей, 2 чел. | Что включено |
|---|---|---|
| Бюджет | $700–1 000 | Перелёт + 3* AI |
| Средний | $1 000–1 500 | Перелёт + 4* AI |
| Премиум | $1 500–2 500 | Перелёт + 5* AI |

## Лайфхаки для Шарма

- **All Inclusive** — обязательно: еда вне отеля $15–30 за приём пищи
- **Дайвинг-пакет** на 5–10 погружений выгоднее, чем поодиночке
- **Каир на автобусе** — 6 часов из Шарма, $15–20 (vs самолёт $80–120)
- **Нац. парк Рас Мухаммад** — вход $10, снорклинг фантастический
- **Водная обувь** — дно часто каменистое/коралловое, обязательна
- **Кредитная карта** + немного долларов наличными

## Часто задаваемые вопросы

**Шарм-эль-Шейх безопасен?**
Да. Это туристическая зона с усиленной охраной. Миллионы туристов ежегодно.

**Шарм или Хургада — что лучше?**
Шарм — дайвинг, подводный мир, тихий отдых. Хургада — большие AI-отели, анимация. Первый раз — Шарм.

**Халяльная еда в Египте?**
Египет — 90% мусульманская страна. Вся еда халяльная, безалкогольные варианты везде.

**Сколько лететь из Ташкента?**
Прямой рейс: 4–5 часов. Uzbekistan Airways и чартерные рейсы.

---

Шарм-эль-Шейх — одно из лучших мест для подводного плавания в мире. SEM Travel организует туры в Египет круглый год. Звоните: **+998 71 275-55-55**.`,
  },

  // ── POST 23 ── Kyrgyzstan complete pamyatka ───────────────────────────────
  {
    id: 23,
    slug: "qirgiziston-tabiat-va-tog-sayr-qollanma",
    emoji: "🏔️",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=70",
    categoryUz: "Pamyatka",
    categoryRu: "Памятка",
    titleUz: "Qirg'iziston sayohati: Issiq Ko'l, tog' marshrutlari va amaliy qo'llanma 2026",
    titleRu: "Путешествие в Кыргызстан: Иссык-Куль, горные маршруты и практический гид 2026",
    descUz: "Qirg'izistonga sayohat uchun hamma narsani bilib oling: viza, Issiq Ko'l, eng yaxshi marshrutlar, narxlar va tog' sayohati uchun maslahatlar.",
    descRu: "Всё о путешествии в Кыргызстан: виза, Иссык-Куль, лучшие маршруты, цены и советы для горного туризма.",
    date: "2026-04-02",
    readTimeUz: "8 daqiqa",
    readTimeRu: "8 минут",
    author: "SEM Travel",
    tagsUz: ["Qirg'iziston", "Issiq Ko'l", "Tog' sayohati", "Bishkek", "Tabiat"],
    tagsRu: ["Кыргызстан", "Иссык-Куль", "Горный туризм", "Бишкек", "Природа"],
    contentUz: `Qirg'iziston — Markaziy Osiyoning eng go'zal tog' mamlakati. Toshkentdan 1 soatlik parvoz (yoki 8 soatlik avtomobil) masofasida joylashgan bu davlat yil sayin ko'proq O'zbek sayyohlarni o'ziga tortmoqda. Issiq Ko'l — dunyodagi ikkinchi eng katta tog' ko'li, Ala-Too tog' tizmalari, yashil vodiylar va nomadic madaniyat — bularning hammasi bir joyda.

## Qirg'izistonga viza kerakmi?

O'zbekiston fuqarolari uchun Qirg'izistonga **viza kerak emas**. CIS fuqarolari uchun viza erkin. Faqat pasport (yoki ID karta) bilan kirish mumkin.

## Toshkentdan Qirg'izistonga qanday borish?

**Parvoz orqali (Bishkekka):**
- Toshkent (TAS) → Bishkek (FRU)
- Parvoz muddati: 50–60 daqiqa
- Aviakompaniyalar: Uzbekistan Airways, Avia Traffic Company
- Narx: $50–120 (bir tomonga)

**Avtomobil/avtobus:**
- Toshkent → Bishkek: 7–9 soat yo'l
- Toshkent → Osh: 5–6 soat yo'l (Qirg'izistonga eng yaqin)
- Avtobus: 80,000–120,000 so'm (taxminan)

**Osh yoki Bishkek — qayerdan boshlash?**
- **Bishkek** — poytaxt, Issiq Ko'lga yaqin, shimoliy marshrutlar
- **Osh** — janubiy Qirg'iziston, Suleyman Too, O'zbekistonga yaqin

## Issiq Ko'l: dunyo tog' ko'li

Issiq Ko'l — dengiz sathidan 1,607 m balandlikda, 182 km uzunlikda. Dengizga chiqish imkoniyati bo'lmasa ham, bu ko'l "dengiz" degan hissiyotni beradi.

**Issiq Ko'l janubiy qirg'og'i (Karakol tomoni):**
- Tinch, kam turist, tabiat
- Karakol shahar — tog' bazasi
- Arslanbob — yong'oq o'rmonlari
- Barskoon sharsharasi va qoyon tog' yo'li

**Issiq Ko'l shimoliy qirg'og'i (Cholpon-Ata, Bosteri):**
- Ko'proq resort va mehmonxona
- Pansionat va dam olish markazlari
- O'zbek turistlar orasida mashhur
- Tun: 800–2,500 so'm (o'zbek so'mi ekvivalenti)

**Ko'l narxlari (2026 mavsumi iyun–sentyabr):**

| Xizmat | Taxminiy narx |
|---|---|
| Pansionat (kechasi) | $15–50 |
| Resort mehmonxona | $50–150 |
| Ko'lda kayak/SUP | $10–20/soat |
| Ot minish | $10–20/soat |
| Atirgul ko'rfazi ekskursiya | $15–25 |

## Bishkek: nima ko'rish kerak?

- **Ala-Too maydoni** — markaziy meydon, Manas haykali
- **Osh bozori** — eng katta bozor, milliy taomlar, hunarmandchilik
- **Dordoy bozori** — Osiyodagi eng katta kiyim bozori
- **Askar (Victory) bog'i** — dam olish uchun
- **Ala-Archa milliy parki** — shaharga 40 km, tog' sayr (kirish 150 som)

## Qirg'izistondagi eng go'zal marshrutlar

**1. Bishkek → Issiq Ko'l (3–7 kun)**
- Bishkek → Cholpon-Ata → Karakol → orqaga
- Hamma joyda kechish imkoniyati

**2. Osh → Sary-Chelek ko'li (2–3 kun)**
- UNESCO Biosfera zaxirasi
- Toshkentdan eng yaqin go'zal tabiat

**3. Karakol → Jeti-Oguz (1–2 kun)**
- Yetti Buqa qoya (Seven Bulls rocks)
- Ko'k-Jayik alpiy yaylov

**4. Song-Kol tog' ko'li (2–4 kun)**
- Dengiz sathidan 3,016 m
- Yurt (to'rvacha) da kechash
- Kochmanchi (nomad) madaniyatini his qilish

**5. Bishkek → Tokmok → Balasagun (1 kun)**
- Burana minorasi (1,000 yillik)
- Cho'l va tog' manzarasi

## Qirg'iziston uchun amaliy maslahatlar

- **USD** olib boring — Bishkek va sayyohlik joylarida dollar qabul qilinadi
- **SIM karta** — Beeline yoki O'cell, $3–5 ga 10 GB internet
- **Tog'da ob-havo** — hatto iyulda ham sovuq bo'lishi mumkin. Shim, yupqa kurtka olib boring
- **Suv** — tog' bulog'larining suvi toza, lekin shahardan tashqarida filtr yoki butilkali suv
- **Yurt tajribasi** — Song-Kol yoki Issiq Ko'l yaqinidagi yurtlarda kechash ($20–40/kishi, ovqat kiradi)
- **Ot safari** — Qirg'izistonda ot minish madaniyati kuchli. Karakol yaqinida $20–40/soat
- **Marshrut taksi** — Bishkek va orasidagi shaharchalar orasida arzon (50–200 som)
- **Oldindan bron** — iyul-avgust mavsumida joylar tez to'ladi

## Ko'p so'raladigan savollar

**Qirg'iziston va Qozog'iston: qaysi biri sayohat uchun yaxshiroq?**
Qirg'iziston — tog', tabiat, nomad madaniyati uchun. Qozog'iston — shahar (Almati, Astana), zamonaviy infratuzilma. Tabiat uchun — Qirg'iziston.

**Issiq Ko'lda qachon yaxshi?**
Iyun oxiri – sentyabr boshi — eng yaxshi mavsim. Suv harorati +22–26°C gacha ko'tariladi.

**Qirg'izistonda ovqat halolmi?**
Ha. Qirg'iziston 90%+ musulmon. Ko'chma taomlar (lagman, beshbarmaq, samsa) halol. Manty, osh, shorpa — Markaziy Osiyo taomlari.

**Qirg'izistonda qancha pul kerak?**
Bishkek va Issiq Ko'lda $40–70/kun yetarli (mehmonxona, ovqat, ekskursiya). Yurt va tog' sayr uchun $30–50/kun.

---

Qirg'iziston — yaqin, arzon va unutilmas sayohat. SEM Travel Bishkek va Issiq Ko'lga guruh va individual turlar tashkil qiladi. Bepul maslahat: **+998 71 275-55-55**.`,
    contentRu: `Кыргызстан — самая живописная горная страна Центральной Азии. В часе лёта от Ташкента вас ждут кристальный Иссык-Куль, заснеженные пики Ала-Тоо, зелёные джайлоо и кочевая культура. Кыргызстан становится всё популярнее среди узбекских туристов — и неудивительно.

## Нужна ли виза в Кыргызстан?

Гражданам Узбекистана виза не нужна. Въезд по загранпаспорту или ID-карте — бесплатно, без ограничений по сроку (туризм до 90 дней).

## Как добраться из Ташкента?

**Самолёт (Бишкек):**
- Рейс: TAS → FRU, 50–60 минут
- Авиакомпании: Uzbekistan Airways, Avia Traffic
- Цена: $50–120 (в одну сторону)

**Автомобиль/автобус:**
- Ташкент → Бишкек: 7–9 часов
- Ташкент → Ош: 5–6 часов (ближайший крупный город КР)

## Иссык-Куль: горное море

Иссык-Куль — второе по объёму горное озеро в мире (1 607 м над уровнем моря). Площадь — 6 236 км². Вода солоноватая, незамерзающая, прозрачная до 40 м.

**Южный берег (Каракол):**
- Тихо, природа, меньше туристов
- Барскоонский водопад, Джети-Огуз
- База для горных походов

**Северный берег (Чолпон-Ата, Бостери):**
- Пансионаты и курорты
- Популярен среди узбекских туристов
- Больше инфраструктуры

**Цены на Иссык-Куле (сезон июнь–сентябрь):**

| Услуга | Цена |
|---|---|
| Пансионат (ночь) | $15–50 |
| Курортный отель | $50–150 |
| Каяк/SUP | $10–20/час |
| Конная прогулка | $10–20/час |

## Что посмотреть в Бишкеке?

- **Площадь Ала-Тоо** — центр города, памятник Манасу
- **Ошский базар** — крупнейший рынок, национальные блюда
- **Дордой базар** — крупнейший вещевой рынок Азии
- **Нац. парк Ала-Арча** — 40 км от Бишкека, горные тропы (вход 150 сом)

## Лучшие маршруты по Кыргызстану

**1. Бишкек → Иссык-Куль (3–7 дней)**
Бишкек → Чолпон-Ата → Каракол → обратно

**2. Ош → Сары-Челек (2–3 дня)**
Заповедник ЮНЕСКО, ближайшая природа от Ташкента

**3. Каракол → Джети-Огуз (1–2 дня)**
Скала Семь Быков, альпийские луга

**4. Сон-Куль — горное озеро (2–4 дня)**
3 016 м над уровнем моря, ночь в юрте, кочевая жизнь

## Практические советы по Кыргызстану

- Берите **доллары** — принимают везде в туристических зонах
- **SIM-карта** Beeline/O'cell — $3–5 за 10 ГБ интернета
- **В горах** даже в июле бывает холодно — возьмите куртку
- **Ночь в юрте** на Сон-Куле или Иссык-Куле — $20–40/чел. с едой
- **Конная прогулка** — у Каракола $20–40/час, национальная традиция
- **Маршрутки** между городами — дёшево (50–200 сом)
- **Бронируйте заранее** — июль–август быстро заполняется

## Часто задаваемые вопросы

**Кыргызстан или Казахстан — куда лучше?**
Кыргызстан — горы, природа, кочевая культура, дешевле. Казахстан — города (Алматы, Астана), современная инфраструктура. За природой — Кыргызстан.

**Когда ехать на Иссык-Куль?**
Конец июня – начало сентября. Вода прогревается до +22–26°C.

**Еда в Кыргызстане халяльная?**
Да. Кыргызстан — мусульманская страна. Лагман, бешбармак, самса, манты — всё халяльное.

**Бюджет на Кыргызстан?**
$40–70/день в Бишкеке и на Иссык-Куле (отель + еда + экскурсии).

---

Кыргызстан — близко, доступно и незабываемо. SEM Travel организует групповые и индивидуальные туры в Бишкек и на Иссык-Куль. Звоните: **+998 71 275-55-55**.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
