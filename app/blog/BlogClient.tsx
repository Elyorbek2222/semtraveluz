"use client";

import Link from "next/link";
import { useLang } from "@/lib/language-context";

const blogPosts = [
  {
    id: 1,
    slug: "dubai-sayohati-maslahatlari",
    emoji: "🇦🇪",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=70",
    categoryUz: "Maslahatlar",
    categoryRu: "Советы",
    titleUz: "Dubai sayohati: bilishingiz kerak bo'lgan 10 ta maslahat",
    titleRu: "Путешествие в Дубай: 10 советов, которые нужно знать",
    descUz:
      "Dubai — hashamatli mehmonxonalar, baland binolar va ajoyib pludaj dam olishi bilan dunyodagi eng mashhur turistik shaharlardan biri. Bu maqolada Dubai sayohati uchun eng muhim maslahatlar berilgan.",
    descRu:
      "Дубай — один из самых популярных туристических городов мира с роскошными отелями, небоскрёбами и пляжным отдыхом. В этой статье вы найдёте главные советы для поездки в Дубай.",
    date: "2026-03-10",
    readTimeUz: "5 daqiqa",
    readTimeRu: "5 минут",
    author: "SEM Travel",
  },
  {
    id: 2,
    slug: "turkey-viza-qollanma",
    emoji: "🇹🇷",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=70",
    categoryUz: "Viza",
    categoryRu: "Виза",
    titleUz: "Turkiyaga viza: qanday olish mumkin? To'liq qo'llanma 2026",
    titleRu: "Виза в Турцию: как получить? Полное руководство 2026",
    descUz:
      "O'zbekiston fuqarolari uchun Turkiyaga viza olish jarayoni: kerakli hujjatlar, ariza topshirish tartibi, muddat va narxlar. Hammasi bir maqolada.",
    descRu:
      "Процесс получения визы в Турцию для граждан Узбекистана: необходимые документы, порядок подачи заявки, сроки и стоимость. Всё в одной статье.",
    date: "2026-03-01",
    readTimeUz: "7 daqiqa",
    readTimeRu: "7 минут",
    author: "SEM Travel",
  },
  {
    id: 3,
    slug: "maldives-yoki-tailand",
    emoji: "🏝️",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=70",
    categoryUz: "Yo'nalishlar",
    categoryRu: "Направления",
    titleUz: "Maldiv orollari yoki Tailand: qayerga borishni tanlash kerak?",
    titleRu: "Мальдивы или Таиланд: куда лучше поехать?",
    descUz:
      "Ikki mashhur dam olish yo'nalishi — Maldiv orollari va Tailandni narx, tabiiy sharoit, xizmat va dam olish turlari bo'yicha qiyoslaymiz. Siz uchun qaysi biri mos?",
    descRu:
      "Сравниваем два популярных направления для отдыха — Мальдивы и Таиланд по цене, природным условиям, сервису и видам отдыха. Что подходит именно вам?",
    date: "2026-02-20",
    readTimeUz: "6 daqiqa",
    readTimeRu: "6 минут",
    author: "SEM Travel",
  },
];

function formatDate(dateStr: string, lang: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === "uz" ? "uz-UZ" : "ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(160deg, #0057A8 0%, #003F7A 100%)",
          paddingBottom: 80,
        }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
          >
            📝 {isUz ? "SEM Travel Blog" : "Блог SEM Travel"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(26px, 5vw, 46px)" }}
          >
            {isUz
              ? "Sayohat bo'yicha maqolalar"
              : "Статьи о путешествиях"}
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 15,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            {isUz
              ? "Maslahatlari, qo'llanmalar va eng yaxshi yo'nalishlar haqida foydali maqolalar"
              : "Полезные статьи с советами, инструкциями и лучшими направлениями для путешествий"}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">

        {/* PLACEHOLDER BANNER */}
        <div
          className="rounded-2xl p-4 mb-8 flex items-center gap-3"
          style={{ background: "#FFF8E1", border: "1.5px solid #F5C518" }}
        >
          <span style={{ fontSize: 22 }}>🚧</span>
          <p className="text-sm font-medium" style={{ color: "#7A5C00" }}>
            {isUz
              ? "Blog hozircha ishlab chiqilmoqda. Tez orada to'liq maqolalar chiqadi!"
              : "Блог сейчас в разработке. Полные статьи скоро появятся!"}
          </p>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={isUz ? post.titleUz : post.titleRu}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "#0057A8", color: "#fff" }}
                >
                  {isUz ? post.categoryUz : post.categoryRu}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <div
                  className="flex items-center gap-3 text-xs mb-3"
                  style={{ color: "#94A3B8" }}
                >
                  <span>{formatDate(post.date, lang)}</span>
                  <span>·</span>
                  <span>
                    ⏱ {isUz ? post.readTimeUz : post.readTimeRu}
                  </span>
                </div>

                <h2
                  className="font-extrabold text-gray-900 leading-snug mb-2"
                  style={{ fontSize: 15 }}
                >
                  {isUz ? post.titleUz : post.titleRu}
                </h2>

                <p
                  className="text-sm text-gray-500 leading-relaxed flex-1 mb-4"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {isUz ? post.descUz : post.descRu}
                </p>

                <span
                  className="inline-flex items-center gap-1 text-sm font-bold"
                  style={{ color: "#0057A8" }}
                >
                  {isUz ? "Tez kunda →" : "Скоро →"}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* SEO MATN BLOKI */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
        >
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">
            {isUz
              ? "SEM Travel blog — sayohat ixlosmandlari uchun"
              : "Блог SEM Travel — для любителей путешествий"}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isUz
              ? "SEM Travel blogida O'zbekistondan xorijiy mamlakatlarga sayohat qilmoqchi bo'lgan turistlar uchun foydali maqolalar, maslahatlar va yo'llanmalar joylashtiriladi. Viza rasmiylashtiruv, aviabilet, mehmonxona tanlash va sayohat rejalashtirish bo'yicha batafsil qo'llanmalarni topasiz."
              : "В блоге SEM Travel публикуются полезные статьи, советы и руководства для туристов, желающих путешествовать из Узбекистана за рубеж. Здесь вы найдёте подробные инструкции по оформлению визы, выбору авиабилетов, отелей и планированию поездки."}
          </p>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 mb-10 text-center"
          style={{
            background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)",
          }}
        >
          <h3 className="text-white font-extrabold text-lg mb-2">
            {isUz ? "Savollaringiz bormi?" : "Есть вопросы?"}
          </h3>
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {isUz
              ? "Mutaxassislarimiz bepul maslahat beradi!"
              : "Наши специалисты дадут бесплатную консультацию!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/998946642222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp
            </a>
            <a
              href="https://t.me/semtravel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
              style={{ background: "#229ED9", color: "#fff" }}
            >
              ✈️ Telegram
            </a>
            <a
              href="tel:+998712755555"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              📞 +998 71 275-55-55
            </a>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="pb-6">
          <Link
            href="/"
            className="text-sm font-medium"
            style={{ color: "#0057A8" }}
          >
            ← {isUz ? "Bosh sahifaga qaytish" : "Вернуться на главную"}
          </Link>
        </div>
      </div>
    </div>
  );
}
