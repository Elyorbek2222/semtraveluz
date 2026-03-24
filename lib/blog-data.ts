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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
