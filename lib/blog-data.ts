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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
