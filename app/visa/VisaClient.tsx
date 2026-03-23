"use client";

import Link from "next/link";
import { useLang } from "@/lib/language-context";

const visaCountries = [
  {
    flag: "🇹🇷",
    uz: "Turkiya",
    ru: "Турция",
    days: { uz: "1–3 kun", ru: "1–3 дня" },
    price: { uz: "150 000 so'm", ru: "150 000 сум" },
    difficulty: "easy",
    noteUz: "E-viza, onlayn",
    noteRu: "Э-виза, онлайн",
  },
  {
    flag: "🇦🇪",
    uz: "Dubai (UAE)",
    ru: "Дубай (ОАЭ)",
    days: { uz: "3–5 kun", ru: "3–5 дней" },
    price: { uz: "500 000 so'm", ru: "500 000 сум" },
    difficulty: "easy",
    noteUz: "Oddiy ariza",
    noteRu: "Простая анкета",
  },
  {
    flag: "🇬🇷",
    uz: "Gretsiya",
    ru: "Греция",
    days: { uz: "10–15 kun", ru: "10–15 дней" },
    price: { uz: "800 000 so'm", ru: "800 000 сум" },
    difficulty: "medium",
    noteUz: "Schengen",
    noteRu: "Шенген",
  },
  {
    flag: "🇩🇪",
    uz: "Germaniya",
    ru: "Германия",
    days: { uz: "15–20 kun", ru: "15–20 дней" },
    price: { uz: "900 000 so'm", ru: "900 000 сум" },
    difficulty: "medium",
    noteUz: "Schengen",
    noteRu: "Шенген",
  },
  {
    flag: "🇺🇸",
    uz: "AQSh",
    ru: "США",
    days: { uz: "30–60 kun", ru: "30–60 дней" },
    price: { uz: "1 200 000 so'm", ru: "1 200 000 сум" },
    difficulty: "hard",
    noteUz: "Intervyu kerak",
    noteRu: "Требуется интервью",
  },
  {
    flag: "🇬🇧",
    uz: "Britaniya",
    ru: "Великобритания",
    days: { uz: "15–25 kun", ru: "15–25 дней" },
    price: { uz: "1 000 000 so'm", ru: "1 000 000 сум" },
    difficulty: "hard",
    noteUz: "Ingliz tili",
    noteRu: "Английский язык",
  },
  {
    flag: "🇹🇭",
    uz: "Tailand",
    ru: "Таиланд",
    days: { uz: "Vizasiz", ru: "Без визы" },
    price: { uz: "Bepul", ru: "Бесплатно" },
    difficulty: "easy",
    noteUz: "30 kunga vizasiz",
    noteRu: "30 дней без визы",
  },
  {
    flag: "🇪🇬",
    uz: "Misr",
    ru: "Египет",
    days: { uz: "1–2 kun", ru: "1–2 дня" },
    price: { uz: "250 000 so'm", ru: "250 000 сум" },
    difficulty: "easy",
    noteUz: "Chegara vizasi",
    noteRu: "Виза по прилёту",
  },
];

const processSteps = [
  {
    num: "01",
    emoji: "📞",
    uz: "Bepul maslahat",
    ru: "Бесплатная консультация",
    descUz: "Menejerimiz siz bilan bog'lanib, kerakli viza turi va hujjatlarni tushuntiradi",
    descRu: "Менеджер свяжется и объяснит тип визы и список документов",
  },
  {
    num: "02",
    emoji: "📄",
    uz: "Hujjatlar",
    ru: "Документы",
    descUz: "Zarur hujjatlarni tayyorlashda yordam beramiz va tekshirib chiqamiz",
    descRu: "Поможем подготовить и проверить все необходимые документы",
  },
  {
    num: "03",
    emoji: "📮",
    uz: "Ariza topshirish",
    ru: "Подача заявки",
    descUz: "Arizani o'z vaqtida va to'g'ri topshiramiz, elchixona bilan muloqot qilamiz",
    descRu: "Подадим заявку вовремя, общаемся с посольством за вас",
  },
  {
    num: "04",
    emoji: "✅",
    uz: "Viza tayyor!",
    ru: "Виза готова!",
    descUz: "Viza tayyor bo'lganda sizga xabar beramiz va hujjatlarni topshiramiz",
    descRu: "Сообщим, когда виза будет готова, и передадим документы",
  },
];

const requiredDocs = [
  { emoji: "🛂", uz: "Zaграnpasport (kamida 6 oy muddatli)", ru: "Загранпаспорт (не менее 6 мес.)" },
  { emoji: "📸", uz: "Biometrik foto (3.5×4.5 sm)", ru: "Биометрическое фото (3.5×4.5 см)" },
  { emoji: "💳", uz: "Bank hisobi ko'chirmasi", ru: "Выписка с банковского счёта" },
  { emoji: "✈️", uz: "Aviabilet bron (borish-kelish)", ru: "Бронь авиабилета (туда-обратно)" },
  { emoji: "🏨", uz: "Mehmonxona bronlovlari", ru: "Бронирование отеля" },
  { emoji: "🛡️", uz: "Sayohat sug'urtasi", ru: "Страховка путешественника" },
];

const faq = [
  {
    qUz: "Viza olish uchun qancha vaqt ketadi?",
    qRu: "Сколько времени занимает получение визы?",
    aUz: "Har bir mamlakat uchun farq qiladi. Turkiya va UAE uchun 1–3 kun, Schengen uchun 10–20 kun. Muddatli hollarda tezlashtirish mumkin.",
    aRu: "Зависит от страны. Турция и ОАЭ — 1–3 дня, Шенген — 10–20 дней. В срочных случаях возможно ускорение.",
  },
  {
    qUz: "Viza rad etilsa nima bo'ladi?",
    qRu: "Что если визу откажут?",
    aUz: "Biz hujjatlarni professional darajada tayyorlaymiz. Rad etilgan hollarda qayta ariza berishda yordam beramiz va maslahat beramiz.",
    aRu: "Мы профессионально готовим документы. В случае отказа помогаем подать повторную заявку и консультируем.",
  },
  {
    qUz: "Xizmat narxiga nima kiradi?",
    qRu: "Что входит в стоимость услуги?",
    aUz: "Maslahat, hujjatlarni tekshirish, ariza to'ldirish, topshirish va kuzatib borish. Elchixona yig'imlari alohida to'lanadi.",
    aRu: "Консультация, проверка документов, заполнение анкеты, подача и сопровождение. Консульский сбор оплачивается отдельно.",
  },
  {
    qUz: "Tezlashtirish mumkinmi?",
    qRu: "Возможно ли срочное оформление?",
    aUz: "Ha, aksariyat mamlakatlar uchun tezlashtirilgan xizmat mavjud. Qo'shimcha to'lov talab etilishi mumkin.",
    aRu: "Да, для большинства стран доступна срочная услуга. Может потребоваться доплата.",
  },
];

const difficultyColor = {
  easy: { bg: "#DCFCE7", text: "#166534", label: { uz: "Oson", ru: "Легко" } },
  medium: { bg: "#FEF9C3", text: "#854D0E", label: { uz: "O'rtacha", ru: "Средне" } },
  hard: { bg: "#FEE2E2", text: "#991B1B", label: { uz: "Qiyin", ru: "Сложно" } },
};

export default function VisaClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1E3A5F 0%, #0057A8 100%)",
          paddingBottom: 60,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=60')",
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
            🛂 {isUz ? "Viza xizmatlari" : "Визовые услуги"}
          </div>
          <h1
            className="text-white font-black leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 5vw, 44px)" }}
          >
            {isUz ? (
              <>
                Viza olishda{" "}
                <span style={{ color: "#F5C518" }}>professional yordam</span>
              </>
            ) : (
              <>
                Профессиональная{" "}
                <span style={{ color: "#F5C518" }}>помощь с визой</span>
              </>
            )}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 480, margin: "0 auto 24px" }}>
            {isUz
              ? "Hujjat tayyorlash, ariza topshirish va kuzatish — biz hamma narsani hal qilamiz"
              : "Подготовка документов, подача и сопровождение — мы решаем всё за вас"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/998946642222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 {isUz ? "WhatsApp orqali so'rash" : "Спросить в WhatsApp"}
            </a>
            <a
              href="tel:+998712755555"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
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
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">

        {/* ── COUNTRIES ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">
            {isUz ? "🌍 Qaysi mamlakatga viza?" : "🌍 Виза в какую страну?"}
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            {isUz
              ? "Eng ko'p so'raladigan mamlakatlar bo'yicha narxlar"
              : "Цены по самым популярным направлениям"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visaCountries.map((c) => {
              const diff = difficultyColor[c.difficulty as keyof typeof difficultyColor];
              return (
                <div
                  key={c.uz}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white"
                  style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}
                >
                  <span className="text-3xl">{c.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-gray-900 text-sm">
                        {isUz ? c.uz : c.ru}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: diff.bg, color: diff.text }}
                      >
                        {isUz ? diff.label.uz : diff.label.ru}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>⏱ {isUz ? c.days.uz : c.days.ru}</span>
                      <span>·</span>
                      <span>{isUz ? c.noteUz : c.noteRu}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold" style={{ color: "#0057A8" }}>
                      {isUz ? "dan" : "от"}
                    </span>
                    <div className="text-sm font-extrabold text-gray-900">
                      {isUz ? c.price.uz : c.price.ru}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            {isUz
              ? "* Narxlar agentlik xizmatlari uchun. Elchixona yig'imlari alohida."
              : "* Цены за услуги агентства. Консульский сбор оплачивается отдельно."}
          </p>
        </div>

        {/* ── PROCESS ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "⚡ Qanday ishlaydi?" : "⚡ Как это работает?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="flex gap-4 p-4 rounded-xl bg-white"
                style={{ border: "1.5px solid #E5E7EB" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: "#0057A8" }}
                >
                  {step.num}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span>{step.emoji}</span>
                    <span className="font-bold text-gray-900 text-sm">
                      {isUz ? step.uz : step.ru}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {isUz ? step.descUz : step.descRu}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── REQUIRED DOCS ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "📋 Kerakli hujjatlar" : "📋 Необходимые документы"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {requiredDocs.map((doc) => (
              <div
                key={doc.uz}
                className="flex items-center gap-3 p-3 rounded-xl bg-white"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <span className="text-xl">{doc.emoji}</span>
                <span className="text-sm text-gray-700">{isUz ? doc.uz : doc.ru}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            {isUz
              ? "* Mamlakat va viza turiga qarab ro'yxat farq qilishi mumkin"
              : "* Список может отличаться в зависимости от страны и типа визы"}
          </p>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {isUz ? "❓ Ko'p so'raladigan savollar" : "❓ Часто задаваемые вопросы"}
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white"
                style={{ border: "1.5px solid #E5E7EB" }}
              >
                <p className="font-bold text-gray-900 text-sm mb-1.5">
                  {isUz ? item.qUz : item.qRu}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isUz ? item.aUz : item.aRu}
                </p>
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
            {isUz
              ? "Hoziroq murojaat qiling — bepul maslahat beramiz!"
              : "Обратитесь прямо сейчас — консультация бесплатная!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/998946642222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp
            </a>
            <a
              href="https://t.me/semtravel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
              style={{ background: "#229ED9", color: "#fff" }}
            >
              ✈️ Telegram
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
