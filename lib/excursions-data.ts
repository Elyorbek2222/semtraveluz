export interface DubaiExcursion {
  id: string;
  nameUz: string;
  nameRu: string;
  descUz: string;
  descRu: string;
  image: string;
  type: "free" | "paid";
  priceUsd?: number;
  priceNote?: string;
  durationUz: string;
  durationRu: string;
  tipsUz?: string;
  tipsRu?: string;
}

export interface ExcursionFAQ {
  qUz: string;
  qRu: string;
  aUz: string;
  aRu: string;
}

export const DUBAI_FREE_EXCURSIONS: DubaiExcursion[] = [
  {
    id: "jumeirah-beach",
    nameUz: "Jumeirah Public Beach",
    nameRu: "Пляж Джумейра",
    descUz: "Dubai ning eng mashhur va toza plyaji. Kristall toza suv, qum sho'x, muhit qulay. Plyaj behisob — kimsaniyam xarid qilyotgan yo'q. Oily va oyoqda cho'kka-cho'kka sho'xlik.",
    descRu: "Самый известный пляж Дубая с кристально чистой водой и белым песком. Совершенно бесплатный пляж рядом с Бурдж-Халифой и Магалой. Идеален для семей и пар.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=70",
    type: "free",
    durationUz: "Yarım kun yoki butun kun",
    durationRu: "Полдня или целый день",
    tipsUz: "Erkaklar va ayollar uchun alohida xonalar bor. Qorning 9:00-18:00 gacha ochiq.",
    tipsRu: "Есть раздельные кабинки для переодевания. Открыт с 9:00 до 18:00.",
  },
  {
    id: "dubai-fountain",
    nameUz: "Dubai Fountain & Dubai Mall",
    nameRu: "Поющий фонтан и Dubai Mall",
    descUz: "Dunyoning eng katta va eng ko'radi shou. Har 30-40 minutda klassik muzika bilan faqir ko'rinishi. Dubai Mall ning chuqurida joylashgan, beplatfo, royxat yo'q.",
    descRu: "Самый большой фонтан в мире с потрясающим световым и музыкальным шоу. Показы каждые 30-40 минут. Полностью бесплатное зрелище из центра Dubai Mall.",
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=70",
    type: "free",
    durationUz: "1-2 soat",
    durationRu: "1-2 часа",
    tipsUz: "Kechki shou (19:00, 20:30, 22:00) eng mazali. Mall dan ko'rinish juda yaxshi.",
    tipsRu: "Вечерние шоу (19:00, 20:30, 22:00) самые красивые. Лучше смотреть из торгового центра.",
  },
  {
    id: "dubai-creek",
    nameUz: "Dubai Creek & Al Fahidi Old Town",
    nameRu: "Дубайский Крик и Старый город Аль-Фахиди",
    descUz: "Dubai ning tarixiy markazidir. Eski Dubai arkhitekturasin, musiqali kutubxonani, xorij va qiziqarli dukan-dakallarini tomosha etish. Piyoda yurish juda zavql.",
    descRu: "Историческое сердце Дубая с красивой архитектурой, музеем и традиционными лавками. Отличные виды на Крик и противоположный берег. Идеально для фотографий.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=70",
    type: "free",
    durationUz: "2-3 soat",
    durationRu: "2-3 часа",
    tipsUz: "Dubai Museum (5 AED, ~$1.5) tashrif qilsa bo'ladi. Taxsi yoki metroga qadam chuqurida.",
    tipsRu: "Рекомендуем посетить Dubai Museum (5 AED, ~$1.5). Близко к метро и такси.",
  },
  {
    id: "kite-beach",
    nameUz: "Kite Beach",
    nameRu: "Пляж Кайта",
    descUz: "Sho'xlik va sport uchun mashhur plyaj. Kiteboarding, volleyball, futbol — barcha narsani o'ynatishi mumkin. Burj Al Arab ko'rinishi juda gozal.",
    descRu: "Популярный пляж для активного отдыха и водных видов спорта. Идеален для молодежи и спортсменов. Отличный вид на Бурдж-аль-Араб.",
    image: "https://images.unsplash.com/photo-1590507014325-0e0e7b3da61e?w=800&q=70",
    type: "free",
    durationUz: "2-3 soat",
    durationRu: "2-3 часа",
    tipsUz: "Kiteboard ijarasini qilsa bo'ladi (30-50 AED/soat). Javon o'g'lar va qizlar uchun to'liq qimmatlar bor.",
    tipsRu: "Есть прокат кайтсёрфинга (30-50 AED/час). Идеально для молодежи и активных туристов.",
  },
  {
    id: "dubai-mall",
    nameUz: "Dubai Mall & Aquarium",
    nameRu: "Дубай Молл и аквариум",
    descUz: "Dunyoning eng katta savdo markazi. 1200+ do'kon, restoran, ko'rinish joylari. Reptilium, ice skating, cinema, o'yin maydoni — hammasi bir joyda. Faqat turi juda qimmat, lekin yurish bepul.",
    descRu: "Самый большой торговый центр в мире. 1200+ магазинов, ресторанов, развлечений. Посещение залов бесплатно, но это огромный шопинг-центр.",
    image: "https://images.unsplash.com/photo-1494145904049-0dca519ffb6f?w=800&q=70",
    type: "free",
    durationUz: "2-4 soat",
    durationRu: "2-4 часа",
    tipsUz: "Akvarium kirishni (30 AED, ~$8) qilsa bo'ladi. Faqat xaridni kuzatib yurish bepul.",
    tipsRu: "Вход в аквариум платный (30 AED, ~$8). Просто прогулка по торговому центру бесплатна.",
  },
  {
    id: "dubai-marina-walk",
    nameUz: "Dubai Marina Promenade",
    nameRu: "Дубайская марина и набережная",
    descUz: "Dengiz bo'yi promenadida o'tish. Qavarish kemalar, qolgan shahar ko'rinishi. Restoranlarda oralavch ovqat qilsa bo'ladi. Shumliq va odam ko'p joy.",
    descRu: "Прекрасная прогулка по набережной с парусниками и яхтами. Магазины, рестораны и кафе. Отличное место для вечерней прогулки и фотографий.",
    image: "https://images.unsplash.com/photo-1511522489480-2322e5ec2a83?w=800&q=70",
    type: "free",
    durationUz: "1-2 soat",
    durationRu: "1-2 часа",
    tipsUz: "Kechki 19:00-21:00 eng yaxshi vaqti. Katta rest ko'p joyni toping.",
    tipsRu: "Приходите вечером (19:00-21:00) для лучшего впечатления. Много кафе и ресторанов.",
  },
];

export const DUBAI_PAID_EXCURSIONS: DubaiExcursion[] = [
  {
    id: "desert-safari",
    nameUz: "Desert Safari — Cho'l Safaris",
    nameRu: "Пустынное сафари — Дюнный баш",
    descUz: "Dubai ning eng mashhur ekskursiyasi! Qum tepalarda o'tish, tuya minish, xilma-xil mashinalar (4x4, quad bikes). Qorning chamaman, Bedouin xamili, BBQ ziyofat. To'liq tan issida qaytish.",
    descRu: "Самая популярная экскурсия в Дубае! Прогулка по дюнам на внедорожниках, катание на верблюдах, катание на квадроциклах. Ужин BBQ и культурная программа. Незабываемые впечатления!",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=70",
    type: "paid",
    priceUsd: 50,
    priceNote: "kishi boshiga / с человека",
    durationUz: "6-7 soat (16:00 dan 23:00 gacha)",
    durationRu: "6-7 часов (с 16:00 до 23:00)",
    tipsUz: "Dumi odam va kichik bolalari uchun yaxshi. Tovariy transport va o'tkaztirish kiradi. Telefon va kamera olib boring!",
    tipsRu: "Идеально для семей и групп друзей. Транспортировка и ужин включены. Возьмите камеру!",
  },
  {
    id: "burj-khalifa",
    nameUz: "Burj Khalifa — 124-qavat",
    nameRu: "Бурдж-Халифа — 124-й этаж",
    descUz: "Dunyoning eng baland binosiga chiqish (828 m). Shaxarni qavarish ko'rinish, uch rasm o'z ko'ziga. Asmonda chiqish hissi ajoyib! Qorin qulay vaqtda (sabah yoki kechki) tanlang.",
    descRu: "Подняться на самое высокое здание в мире (828 м). Потрясающие виды на город, море и пустыню. Ощущение полета в небе! Лучше приходить утром или вечером.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=70",
    type: "paid",
    priceUsd: 40,
    priceNote: "kishi boshiga / с человека",
    durationUz: "2 soat",
    durationRu: "2 часа",
    tipsUz: "Biletni oldindan onlayndan qilsa o'z puli qutuladi. Kaltemadagi havoi qulay. Fotosuratni qiling! Burun qot'yuvga yo'q ko'p.",
    tipsRu: "Купите билеты онлайн заранее (дешевле). В верхней части ветренно и холодно. Обязательно сделайте фото!",
  },
  {
    id: "dhow-cruise",
    nameUz: "Dhow Cruise — Kema bo'ylab kechki ziyofat",
    nameRu: "Парусник Доу — ужин на корабле",
    descUz: "Rang-barang boshag'isi bilan Dubayskiy Krijk bo'ylab plavanie. Shamul, tandoori, BBQ ziyofat, masalalar. To'liq, sharbat va choy becharasi. Gidrosabr va tanklar joyida.",
    descRu: "Прогулка на традиционной арабской лодке по Дубайскому Крику. Ужин с блюдами разных кухонь, живая музыка, танцы. Напитки включены. Романтично и аутентично!",
    image: "https://images.unsplash.com/photo-1620447888765-b34b9b5d7be1?w=800&q=70",
    type: "paid",
    priceUsd: 30,
    priceNote: "kishi boshiga / с человека",
    durationUz: "2-3 soat (19:00 yoki 21:00 dan boshlanadi)",
    durationRu: "2-3 часа (начало в 19:00 или 21:00)",
    tipsUz: "Erkak qo'shaloq uchun juda romantik! Bilet qo'shasida suv kiradi. Xolim bo'sh tomiga chiqqaning.",
    tipsRu: "Очень романтично для молодоженов и пар! Напитки включены. Возьмите кремнийдерфер!",
  },
  {
    id: "dubai-frame",
    nameUz: "Dubai Frame",
    nameRu: "Дубайская рамка",
    descUz: "Yangi va eski Dubai ni bir joydan ko'rish. Tarixiy Dubai va hozirgi Dubai — ikkalasi bir oynadan. Tasvir juda yaxshi! Qisqa, lekin TAQQOSLANADI.",
    descRu: "Уникальная достопримечательность, где видны одновременно старый и новый Дубай. Золотые рамки, потрясающие фотографии. Небольшое здание, но очень впечатляющее.",
    image: "https://images.unsplash.com/photo-1571003123774-a7e16a0a0a72?w=800&q=70",
    type: "paid",
    priceUsd: 16,
    priceNote: "kishi boshiga / с человека",
    durationUz: "1-2 soat",
    durationRu: "1-2 часа",
    tipsUz: "Oynaning o'zida ko'p qolish zaruriy emas. Fotosurat qilish juda yaxshi. Soat qulay vaqtda kirganding.",
    tipsRu: "Можно посмотреть довольно быстро. Места отлично подходят для фотографий. Приходите в хорошую погоду!",
  },
  {
    id: "yacht-tour",
    nameUz: "Yacht Tour — Dubai Marina",
    nameRu: "Прогулка на яхте по Марине",
    descUz: "Zamonaviy yahta bo'ylab promeradi. Dubai ing eng bo'y bo'yi ko'rinishi, Palm Jumeirah, Atlantis. Shampanskalar, shrimplar, baliq, sobalar. Jonli muzika, raqs. Juda shohisht!",
    descRu: "Люкс-прогулка на частной яхте по Dubai Marina. Шампанское, морепродукты, фрукты. Лучший вид на Palm Jumeirah и Atlantis. Идеально для специальных случаев!",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=70",
    type: "paid",
    priceUsd: 70,
    priceNote: "kishi boshiga / с человека",
    durationUz: "2 soat",
    durationRu: "2 часа",
    tipsUz: "Ro'y bilan kechqurun eng yaxshi. Kuchli shamol bo'lsa, suv qo'rig'i. Tovariy-oliy kiyim tavsiyalangan!",
    tipsRu: "Закат — самое лучшее время. Опционально можно заказать свадебный пакет. Возьмите элегантную одежду!",
  },
  {
    id: "abu-dhabi-tour",
    nameUz: "Abu Dhabi — Sheikh Zayed Mosque",
    nameRu: "Абу-Даби — мечеть Шейха Зайда",
    descUz: "Dubaydan Abu Dabiga (saboqlik yo'l 2 soat). Dunyoning eng go'zal masjidlaridan biri. Oq marmar, firuza, xotira. Qo'shimcha ravishda Ferrari World yoki qigavil museum kirsangiz bo'ladi.",
    descRu: "Однодневная экскурсия в соседний Абу-Даби (2 часа езды). Посещение одной из самых красивых мечетей в мире. Белый мрамор, роскошное убранство. Опционально Ferrari World или музей.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=70",
    type: "paid",
    priceUsd: 80,
    priceNote: "kishi boshiga / с человека",
    durationUz: "Butun kun (8-10 soat)",
    durationRu: "Целый день (8-10 часов)",
    tipsUz: "Qo'p-qo'p bo'ylarni keling. Masjidga kirish uchun etiketta kerak (ayol uchun hijob, erkaklar uchun uzun shim). Transport kiradi.",
    tipsRu: "Возьмите воду и удобную обувь. Требуется скромная одежда для мечети. Трансфер включен.",
  },
];

export const DUBAI_EXCURSION_FAQS: ExcursionFAQ[] = [
  {
    qUz: "Dubayda qanday tekinga joylarga borsa bo'ladi?",
    qRu: "Какие бесплатные достопримечательности в Дубае?",
    aUz: "Jumeirah Beach, Dubai Fountain, Dubai Creek, Kite Beach, Dubai Mall (kirishni), Dubai Marina Promenade — barchi bepul! Jami 6 ta ekskursiya tekinga.",
    aRu: "Пляж Джумейра, фонтан, Крик, пляж Кайта, торговый центр и Марина — все бесплатные! Плюс есть 6 платных экскурсий для разнообразия.",
  },
  {
    qUz: "Desert Safari qancha turadi va nima kiradi?",
    qRu: "Сколько стоит пустынное сафари и что включено?",
    aUz: "$50 kishi boshiga. Kiradi: transport, dune bashing, tuya minish, BBQ ziyofat, shamoi, foto-surat. Jami 6-7 soat. Oilaviy va jamoa uchun eng mazali!",
    aRu: "$50 с человека. Включено: внедорожник, дюны, верблюды, ужин BBQ, напитки, фото. 6-7 часов. Самая популярная экскурсия!",
  },
  {
    qUz: "Burj Khalifaga bilet qancha va oldindan buyurtma kerakmi?",
    qRu: "Сколько стоит билет в Бурдж-Халифу и нужно ли заказывать заранее?",
    aUz: "$40 kishi boshiga (124-qavat). Onlayndan buyurtma berish arzonroq (10-20% chegirma). O'ylab kirish tavsiyalangan. Saboqlik bulutli bo'lsa, ko'rinish past.",
    aRu: "$40 с человека на 124-й этаж. Онлайн заказ дешевле на 10-20%. Приходите в ясный день для лучшего вида. Заказывайте заранее!",
  },
  {
    qUz: "Ekskursiyalar uchun jami qancha pul kerak?",
    qRu: "Сколько примерно нужно денег на экскурсии?",
    aUz: "Tekinga: $0. Top pullik 2-3 ta: $100-180. Agar shunga ishlasa, jami $200-250 (bilan ovqat va ijaralar). Qutulayni bulan ayti pul ketadi.",
    aRu: "Бесплатные: $0. Топ-3 платных: $100-180. Плюс еда и покупки. Примерно $200-300 на весь отпуск.",
  },
  {
    qUz: "Tekinga ekskursiyalar uchun transport qanday?",
    qRu: "Как добраться на бесплатные экскурсии?",
    aUz: "Metro, taxi (uber 20-30 AED yoki $5-8), avtobuslar. Dubai Marketing bepul harita beriladi. Google Maps istifode qilsa bo'ladi. Atraksiyonlar bir-birga yaqin.",
    aRu: "Метро, такси (Uber 20-30 AED = $5-8), автобусы. Google Maps поможет. Большинство локаций близко друг к другу. Очень удобно!",
  },
];
