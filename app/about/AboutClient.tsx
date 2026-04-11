"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/language-context";

const stats = [
  { num: "2011", emoji: "📅", uz: "Tashkil topgan", ru: "Год основания" },
  { num: "15+", emoji: "🏆", uz: "Yil tajriba", ru: "Лет опыта" },
  { num: "30 000+", emoji: "😊", uz: "Mamnun mijoz", ru: "Довольных клиентов" },
  { num: "50+", emoji: "🌍", uz: "Mamlakat", ru: "Стран" },
];

const values = [
  {
    emoji: "🤝",
    uz: "Ishonchlilik",
    ru: "Надёжность",
    descUz: "15 yillik tajriba va 30 000+ mamnun mijoz bizning eng yaxshi tavsiyanomadir.",
    descRu: "15 лет опыта и 30 000+ довольных клиентов — лучшая рекомендация для нас.",
  },
  {
    emoji: "💰",
    uz: "Narx kafolati",
    ru: "Гарантия цены",
    descUz: "Boshqa agentlikda arzonroq topsangiz, farqini qaytaramiz. Bu bizning va'damiz.",
    descRu: "Найдёте дешевле — вернём разницу. Это наше обещание.",
  },
  {
    emoji: "📞",
    uz: "24/7 Yordam",
    ru: "Поддержка 24/7",
    descUz: "Sayohat paytida muammo chiqsa, tungi soat 3 da ham chaqiravering — javob beramiz.",
    descRu: "Если в поездке возникнет проблема — звоните в любое время, мы ответим.",
  },
  {
    emoji: "⚡",
    uz: "Tez xizmat",
    ru: "Быстрое оформление",
    descUz: "Tur va viza rasmiylashtirish — minimal hujjatlar bilan tez va oson.",
    descRu: "Оформление тура и визы — быстро и просто, с минимумом документов.",
  },
];

const team = [
  { name: "Sardorbek Orifjonov", nameRu: "Сардорбек Орифжонов", roleUz: "Asoschi", roleRu: "Основатель", emoji: "👨‍💼" },
  { name: "Elyorbek Orifjonov", nameRu: "Эльёрбек Орифжонов", roleUz: "Direktor", roleRu: "Директор", emoji: "👨‍💼" },
  { name: "Davronbek Rakhmonov", nameRu: "Давронбек Рахмонов", roleUz: "Tur menejeri", roleRu: "Менеджер по турам", emoji: "🧑‍💼" },
  { name: "Begzod Akmalov", nameRu: "Бегзод Акмалов", roleUz: "Avia menejeri", roleRu: "Авиа менеджер", emoji: "🧑‍💼" },
  { name: "Abdurakhim Fayzullaev", nameRu: "Абдурахим Файзуллаев", roleUz: "Viza menejeri", roleRu: "Визовый менеджер", emoji: "🧑‍💼" },
];

const milestones = [
  { year: "2011", uz: "SEM Travel tashkil topdi", ru: "Основание SEM Travel" },
  { year: "2014", uz: "1 000 ta mamnun mijoz", ru: "1 000 довольных клиентов" },
  { year: "2017", uz: "20 ga yaqin mamlakat yo'nalishlari", ru: "Направления в 20+ стран" },
  { year: "2019", uz: "Online bron xizmatini yo'lga qo'ydik", ru: "Запуск онлайн-бронирования" },
  { year: "2022", uz: "30+ mamlakatga viza xizmati", ru: "Визы в 30+ стран" },
  { year: "2025", uz: "30 000+ mamnun mijoz", ru: "30 000+ довольных клиентов" },
];

export default function AboutClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)",
          paddingBottom: 60,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1200&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            🏢 {isUz ? "Biz haqimizda" : "О нас"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-4"
            style={{ fontSize: "clamp(24px, 5vw, 44px)" }}
          >
            {isUz ? (
              <>
                SEM Travel —{" "}
                <span style={{ color: "#F5C518" }}>ishonchli sayohat sherigingiz</span>
              </>
            ) : (
              <>
                SEM Travel —{" "}
                <span style={{ color: "#F5C518" }}>ваш надёжный партнёр</span>
              </>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            {isUz
              ? "2011 yildan beri o'zbekistonliklarni dunyo bo'ylab olib boramiz"
              : "С 2011 года помогаем узбекистанцам путешествовать по всему миру"}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {stats.map((s) => (
            <div
              key={s.num}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white"
              style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
            >
              <span className="text-2xl mb-1">{s.emoji}</span>
              <span className="text-xl font-black" style={{ color: "#0057A8" }}>{s.num}</span>
              <span className="text-xs text-gray-500 mt-0.5">{isUz ? s.uz : s.ru}</span>
            </div>
          ))}
        </div>

        {/* ── QUICK CTA ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Link
            href="/tours"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white"
            style={{ background: "#0057A8" }}
          >
            ✈️ {isUz ? "Turlarni ko'rish" : "Смотреть туры"}
          </Link>
          <a
            href="https://wa.me/998946642222"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white"
            style={{ background: "#25D366" }}
          >
            💬 {isUz ? "WhatsApp maslahat" : "Консультация WhatsApp"}
          </a>
          <a
            href="tel:+998712755555"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm"
            style={{ background: "#F3F4F6", color: "#374151" }}
          >
            📞 +998 71 275-55-55
          </a>
        </div>

        {/* ── WHO WE ARE ── */}
        <div
          className="rounded-2xl p-6 mb-10 bg-white"
          style={{ border: "1.5px solid #E5E7EB" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "#EFF6FF" }}
            >
              <Image
                src="/logo-color.png"
                alt="SEM Travel logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-extrabold text-gray-900">
              {isUz ? "Biz kimiz?" : "Кто мы?"}
            </h2>
          </div>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
            {isUz ? (
              <>
                <p>
                  <strong>SEM Travel</strong> — 2011 yildan beri O'zbekistonda faoliyat
                  yuritayotgan litsenziyalangan sayohat agentligi. Biz Toshkentda 2 ta ofis —
                  Uchtepa va Olmazar tumanlarida joylashganmiz. 50+ mamlakatga tur paketlar,
                  viza yordam, mehmonxona bron va aviabilet xizmatlarini ko'rsatamiz.
                </p>
                <p>
                  15 yillik tajribamiz davomida <strong>30 000 dan ortiq</strong> mijozimizga
                  xizmat qildik. Bizning asosiy maqsadimiz — har bir mijozga sifatli, arzon va
                  xavfsiz sayohat tajribasini taqdim etish.
                </p>
                <p>
                  Biz Tourvisor tizimi orqali eng yangi va arzon tur takliflarini real vaqtda
                  ko'rsatamiz. Barcha mehmonxona va aviabiletlar akkreditatsiyadan o'tgan
                  operatorlar orqali bronlanadi.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>SEM Travel</strong> — лицензированное туристическое агентство в
                  Узбекистане, работающее с 2011 года. У нас 2 офиса в Ташкенте —
                  Учтепинский и Алмазарский районы. Предоставляем услуги по турпакетам
                  в 50+ странах, помощи с визами, бронированию отелей и авиабилетов.
                </p>
                <p>
                  За 15 лет работы мы обслужили более <strong>30 000 клиентов</strong>.
                  Наша главная цель — предоставить каждому качественный, доступный и
                  безопасный опыт путешествий.
                </p>
                <p>
                  Мы используем систему Tourvisor для отображения актуальных и выгодных
                  туров в реальном времени. Все отели и авиабилеты бронируются через
                  аккредитованных операторов.
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── VALUES ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "💎 Bizning qadriyatlar" : "💎 Наши ценности"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.uz}
                className="p-4 rounded-2xl bg-white"
                style={{ border: "1.5px solid #E5E7EB" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{v.emoji}</span>
                  <span className="font-bold text-gray-900">{isUz ? v.uz : v.ru}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isUz ? v.descUz : v.descRu}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MILESTONES ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "📅 Bizning tariximiz" : "📅 Наша история"}
          </h2>
          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-0.5"
              style={{ background: "#DBEAFE" }}
            />
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-4 relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 relative z-10"
                    style={{ background: i === milestones.length - 1 ? "#FF6B35" : "#0057A8" }}
                  >
                    {m.year.slice(-2)}
                  </div>
                  <div
                    className="flex-1 p-3 rounded-xl bg-white"
                    style={{ border: "1px solid #E5E7EB", marginTop: 4 }}
                  >
                    <span className="text-xs font-bold" style={{ color: "#0057A8" }}>
                      {m.year}
                    </span>
                    <p className="text-sm text-gray-700 font-medium mt-0.5">
                      {isUz ? m.uz : m.ru}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TEAM ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "👥 Bizning jamoa" : "👥 Наша команда"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white"
                style={{ border: "1.5px solid #E5E7EB" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-3"
                  style={{ background: "#EFF6FF" }}
                >
                  {member.emoji}
                </div>
                <span className="text-sm font-bold text-gray-900 leading-tight">
                  {isUz ? member.name : member.nameRu}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  {isUz ? member.roleUz : member.roleRu}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ADDRESS ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            {isUz ? "📍 Bizni toping" : "📍 Как нас найти"}
          </h2>

          {/* Umumiy kontakt */}
          <div className="rounded-2xl p-4 mb-4 bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <div className="flex gap-3">
                  <a href="tel:+998712755555" className="font-semibold" style={{ color: "#0057A8" }}>+998 71 275-55-55</a>
                  <a href="tel:+998946642222" className="font-semibold" style={{ color: "#0057A8" }}>+998 94 664-22-22</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:semtraveluz@mail.ru" className="font-semibold" style={{ color: "#0057A8" }}>semtraveluz@mail.ru</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Ofis 1 — Uchtepa */}
            <div className="rounded-2xl p-4 bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "#0057A8" }}>
                  {isUz ? "1-ofis" : "Офис 1"}
                </span>
                <span className="text-sm font-bold text-gray-700">Uchtepa</span>
              </div>
              <div className="space-y-1.5 text-sm mb-3">
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <p className="text-gray-600">
                    {isUz ? "Uchtepa tumani, Katta Xirmontepa, 12B" : "Учтепинский р-н, Катта Хирмонтепа, 12Б"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <p className="text-gray-600">{isUz ? "Har kuni: 8:00 – 20:00" : "Ежедневно: 8:00 – 20:00"}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ height: 160 }}>
                <iframe
                  src="https://maps.google.com/maps?q=41.2885182,69.1719742&z=17&output=embed"
                  width="100%" height="160" style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SEM Travel — Ofis 1 Uchtepa"
                />
              </div>
              <a href="https://maps.google.com/maps?q=41.2885182,69.1719742" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs font-bold" style={{ color: "#0057A8" }}>
                🗺 {isUz ? "Google Mapsda ochish →" : "Открыть в Google Maps →"}
              </a>
            </div>

            {/* Ofis 2 — Olmazar */}
            <div className="rounded-2xl p-4 bg-white" style={{ border: "1.5px solid #E5E7EB" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "#FF6B35" }}>
                  {isUz ? "2-ofis" : "Офис 2"}
                </span>
                <span className="text-sm font-bold text-gray-700">Olmazar</span>
              </div>
              <div className="space-y-1.5 text-sm mb-3">
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <p className="text-gray-600">
                    {isUz ? "Olmazar tumani, Toshkent" : "Алмазарский район, Ташкент"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <p className="text-gray-600">{isUz ? "Har kuni: 9:00 – 18:00" : "Ежедневно: 9:00 – 18:00"}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ height: 160 }}>
                <iframe
                  src="https://maps.google.com/maps?q=41.348022,69.253153&z=17&output=embed"
                  width="100%" height="160" style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SEM Travel — Ofis 2 Olmazar"
                />
              </div>
              <a href="https://maps.google.com/maps?q=41.348022,69.253153" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs font-bold" style={{ color: "#0057A8" }}>
                🗺 {isUz ? "Google Mapsda ochish →" : "Открыть в Google Maps →"}
              </a>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-6 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}
        >
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Birinchi sayohatingizni biz bilan boshlang" : "Начните первое путешествие с нами"}
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
            {isUz
              ? "Tur narxini bilib, hoziroq bron qiling!"
              : "Узнайте цену тура и забронируйте прямо сейчас!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#FF6B35", color: "#fff" }}
            >
              ✈️ {isUz ? "Turlarni ko'rish" : "Смотреть туры"}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              📞 {isUz ? "Bog'lanish" : "Контакты"}
            </Link>
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
