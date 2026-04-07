"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLang } from "@/lib/language-context";

// ── RULE SECTIONS DATA ────────────────────────────────────────────────────────
const rules = [
  {
    id: 1,
    slug: "azolik",
    icon: "🪪",
    titleUz: "A'zolik shartlari",
    titleRu: "Условия членства",
    summaryUz: "SEM Club ga kim va qanday a'zo bo'lishi mumkin",
    summaryRu: "Кто и как может стать членом SEM Club",
    group: "dastur",
    items: [
      { uz: "SEM Club dasturiga ishtirok etish bepul va ixtiyoriy.", ru: "Участие в программе SEM Club бесплатно и добровольно." },
      { uz: "A'zolik SEM Travel orqali birinchi tur sotib olingandan so'ng avtomatik boshlanadi.", ru: "Членство начинается автоматически после покупки первого тура через SEM Travel." },
      { uz: "Karta shaxsiy bo'lib, boshqa shaxsga o'tkazilmaydi va naqd pulga almashtirilmaydi.", ru: "Карта является именной, не передаётся третьим лицам и не обменивается на наличные." },
      { uz: "Bir shaxs faqat bitta SEM Club kartasiga ega bo'lishi mumkin.", ru: "Одно лицо может иметь только одну карту SEM Club." },
      { uz: "A'zo bo'lish uchun O'zbekiston fuqarosi yoki O'zbekistonda muqim yashash huquqiga ega shaxs bo'lish talab etiladi.", ru: "Для членства необходимо быть гражданином Узбекистана или иметь вид на жительство." },
    ],
  },
  {
    id: 2,
    slug: "cashback",
    icon: "💰",
    titleUz: "Cashback hisoblash qoidalari",
    titleRu: "Правила начисления кэшбэка",
    summaryUz: "Har bir turdan kartangizga qancha yoziladi",
    summaryRu: "Сколько начисляется на карту с каждого тура",
    group: "ballar",
    items: [
      { uz: "Cashback tur to'liq to'langandan va sayohat amalga oshirilgandan so'ng 7 ish kuni ichida yoziladi.", ru: "Кэшбэк начисляется в течение 7 рабочих дней после полной оплаты тура и завершения поездки." },
      { uz: "Classic status: har bir turdan 0.5% cashback.", ru: "Статус Classic: кэшбэк 0.5% с каждого тура." },
      { uz: "Gold status: har bir turdan 1% cashback.", ru: "Статус Gold: кэшбэк 1% с каждого тура." },
      { uz: "Platinum status: har bir turdan 1.5% cashback.", ru: "Статус Platinum: кэшбэк 1.5% с каждого тура." },
      { uz: "Cashback faqat SEM Travel orqali to'liq to'langan turlarga hisoblanadi. Qisman to'lovlar hisobga olinmaydi.", ru: "Кэшбэк начисляется только за туры, полностью оплаченные через SEM Travel. Частичные оплаты не учитываются." },
      { uz: "Hisoblangan cashback ballar 12 oy davomida amal qiladi. So'nggi turdan 12 oy o'tsa ballar bekor bo'ladi.", ru: "Начисленные баллы действуют 12 месяцев. Если в течение 12 месяцев нет активности — баллы аннулируются." },
    ],
  },
  {
    id: 3,
    slug: "status",
    icon: "🏆",
    titleUz: "Status darajalari",
    titleRu: "Уровни статуса",
    summaryUz: "Classic, Gold va Platinum — qanday erishiladi",
    summaryRu: "Classic, Gold и Platinum — как достичь",
    group: "dastur",
    items: [
      { uz: "🥈 Classic — birinchi turdan boshlab avtomatik beriladi. Minimal aylanma talab etilmaydi.", ru: "🥈 Classic — присваивается автоматически с первого тура. Минимальный оборот не требуется." },
      { uz: "🥇 Gold — SEM Travel orqali jami 20 000 AQSh dollari yoki undan ortiq tur sotib olinganida beriladi.", ru: "🥇 Gold — присваивается при суммарной покупке туров на $20 000 и более через SEM Travel." },
      { uz: "💎 Platinum — SEM Travel orqali jami 40 000 AQSh dollari yoki undan ortiq tur sotib olinganida beriladi.", ru: "💎 Platinum — присваивается при суммарной покупке туров на $40 000 и более через SEM Travel." },
      { uz: "Status ko'tarilgandan so'ng u doimiy bo'lib qoladi. Status pasaymaydi.", ru: "После повышения статус остаётся постоянным. Понижение статуса не предусмотрено." },
      { uz: "Status darajasi o'zgarganda menejer sizga xabar beradi va yangi karta taqdim etiladi.", ru: "При изменении статуса менеджер уведомит вас, и будет выдана новая карта." },
    ],
  },
  {
    id: 4,
    slug: "ballar",
    icon: "💳",
    titleUz: "Ballardan foydalanish",
    titleRu: "Использование накопленных баллов",
    summaryUz: "Yig'ilgan cashbackni qanday sarflash mumkin",
    summaryRu: "Как использовать накопленный кэшбэк",
    group: "ballar",
    items: [
      { uz: "Ballardan foydalanish uchun kartada kamida 50 AQSh dollari ekvivalent miqdor bo'lishi kerak.", ru: "Для использования баллов на карте должно быть не менее $50 эквивалента." },
      { uz: "Ballar keyingi tur narxidan chegirma sifatida qo'llaniladi. Faqat SEM Travel orqali band qilingan turlarda ishlatiladi.", ru: "Баллы применяются как скидка от стоимости следующего тура. Используются только для туров через SEM Travel." },
      { uz: "Bir turda foydalaniladigan cashback miqdori tur narxining 3% dan oshmasligi kerak.", ru: "Сумма кэшбэка, применяемого к одному туру, не должна превышать 3% от стоимости тура." },
      { uz: "Ballar naqd pulga almashtirilmaydi, boshqa shaxsga o'tkazilmaydi.", ru: "Баллы не обналичиваются и не передаются третьим лицам." },
      { uz: "Ballarni ishlatish uchun menejeringizga murojaat qiling.", ru: "Для использования баллов обратитесь к вашему менеджеру." },
    ],
  },
  {
    id: 5,
    slug: "sertifikat",
    icon: "🎟️",
    titleUz: "Sertifikatlar",
    titleRu: "Сертификаты",
    summaryUz: "$30 sertifikat — kim oladi va qanday ishlatiladi",
    summaryRu: "Сертификат $30 — кто получает и как использовать",
    group: "ballar",
    items: [
      { uz: "Birinchi turni sotib olgandan so'ng a'zoga 30 AQSh dollarlik sovg'a sertifikati beriladi.", ru: "После покупки первого тура участнику выдаётся подарочный сертификат на $30." },
      { uz: "Sertifikat keyingi tur narxidan chegirma sifatida qo'llaniladi. Minimal tur narxi 500 AQSh dollaridan oshishi kerak.", ru: "Сертификат применяется как скидка от стоимости следующего тура. Минимальная стоимость тура — от $500." },
      { uz: "Sertifikat berilgan kundan boshlab 180 kun davomida amal qiladi.", ru: "Сертификат действителен 180 дней с момента выдачи." },
      { uz: "Sertifikat naqd pulga almashtirilmaydi, boshqa shaxsga o'tkazilmaydi.", ru: "Сертификат не обменивается на наличные и не передаётся третьим лицам." },
      { uz: "Gold va Platinum a'zolar do'stlari uchun ham 30 dollarlik sertifikat berishadi — do'st SEM Travel orqali tur sotib olganda.", ru: "Участники Gold и Platinum могут дарить сертификат $30 другу — при условии, что друг купит тур через SEM Travel." },
    ],
  },
  {
    id: 6,
    slug: "dostlar",
    icon: "👥",
    titleUz: "Do'stlarni taklif qilish",
    titleRu: "Реферальная программа",
    summaryUz: "Do'stingiz tur olganda siz ham bonus olasiz",
    summaryRu: "Когда друг покупает тур — вы тоже получаете бонус",
    group: "taklif",
    items: [
      { uz: "A'zo o'z do'stini SEM Travel ga taklif qilsa va do'st tur sotib olsa, a'zoning kartasiga do'st turi narxining 1% yoziladi.", ru: "Если участник приведёт друга, и тот купит тур, на карту участника начисляется 1% от стоимости тура друга." },
      { uz: "Taklif bonusi bir marta beriladi (do'stning birinchi turidan). Keyingi turlardan taklif bonusi hisoblanmaydi.", ru: "Реферальный бонус начисляется однократно (с первого тура друга). За последующие туры друга бонус не начисляется." },
      { uz: "Do'stingizni taklif qilish uchun menejeringizga murojaat qiling va ismingizni ko'rsating.", ru: "Для реферала обратитесь к менеджеру и укажите ваше имя при регистрации друга." },
      { uz: "Taklif bonusi ham 12 oy davomida amal qiladi.", ru: "Реферальный бонус также действует 12 месяцев." },
    ],
  },
  {
    id: 7,
    slug: "tugash",
    icon: "🚫",
    titleUz: "A'zolikning tugashi",
    titleRu: "Прекращение членства",
    summaryUz: "Qachon va qanday sharoitlarda a'zolik bekor qilinadi",
    summaryRu: "Когда и при каких условиях членство прекращается",
    group: "taklif",
    items: [
      { uz: "A'zo istalgan vaqtda dasturdan chiqishni so'rashi mumkin. Buning uchun menejeringizga yoki semtraveluz@mail.ru ga murojaat qiling.", ru: "Участник может в любое время выйти из программы, обратившись к менеджеру или написав на semtraveluz@mail.ru." },
      { uz: "Dastur qoidalarini buzgan holda (soxta ma'lumot berish, firibgarlik) a'zolik darhol bekor qilinadi va ballar o'chiriladi.", ru: "За нарушение правил программы (ложные данные, мошенничество) членство аннулируется немедленно с обнулением баллов." },
      { uz: "A'zolik bekor qilinganda barcha yig'ilgan ballar va sertifikatlar muddatidan qat'i nazar o'chiriladi.", ru: "При аннулировании членства все накопленные баллы и сертификаты сгорают независимо от срока их действия." },
      { uz: "So'nggi turdan 24 oy o'tganda faoliyatsiz a'zolik muzlatiladi. Qayta aktivlashtirish uchun tur sotib oling.", ru: "При отсутствии активности в течение 24 месяцев членство замораживается. Для реактивации достаточно купить тур." },
    ],
  },
  {
    id: 8,
    slug: "maxfiylik",
    icon: "🔒",
    titleUz: "Maxfiylik va ma'lumotlar",
    titleRu: "Конфиденциальность и данные",
    summaryUz: "Shaxsiy ma'lumotlaringiz qanday saqlanadi",
    summaryRu: "Как хранятся ваши персональные данные",
    group: "taklif",
    items: [
      { uz: "SEM Travel a'zo shaxsiy ma'lumotlarini O'zbekiston Respublikasi qonunchiligiga muvofiq saqlaydi va himoya qiladi.", ru: "SEM Travel хранит и защищает персональные данные участников в соответствии с законодательством Республики Узбекистан." },
      { uz: "Shaxsiy ma'lumotlar uchinchi shaxslarga sotilmaydi va SEM Travel marketing uchun foydalanilishi mumkin.", ru: "Персональные данные не продаются третьим лицам; SEM Travel может использовать их в маркетинговых целях." },
      { uz: "A'zo o'z ma'lumotlarini yangilash yoki o'chirish uchun semtraveluz@mail.ru ga murojaat qilishi mumkin.", ru: "Участник может обновить или удалить свои данные, обратившись на semtraveluz@mail.ru." },
      { uz: "Maxfiylik siyosati to'liq versiyasi semtravel.uz/privacy sahifasida mavjud.", ru: "Полная версия политики конфиденциальности доступна на странице semtravel.uz/privacy." },
    ],
  },
];

// ── NAV GROUPS ────────────────────────────────────────────────────────────────
const navGroups = [
  {
    key: "dastur",
    titleUz: "Dastur haqida",
    titleRu: "О программе",
    ids: [1, 3],
  },
  {
    key: "ballar",
    titleUz: "Ballar haqida",
    titleRu: "О баллах",
    ids: [2, 4, 5],
  },
  {
    key: "taklif",
    titleUz: "Boshqa qoidalar",
    titleRu: "Прочие правила",
    ids: [6, 7, 8],
  },
];

// ── ACCORDION ITEM ────────────────────────────────────────────────────────────
function RuleCard({
  rule,
  isUz,
  open,
  onToggle,
}: {
  rule: typeof rules[0];
  isUz: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      id={`rule-${rule.slug}`}
      className="bg-white rounded-2xl overflow-hidden transition-all scroll-mt-24"
      style={{
        border: open ? "2px solid #0057A8" : "1.5px solid #E5E7EB",
        boxShadow: open ? "0 4px 24px rgba(0,87,168,0.10)" : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <button
        className="w-full flex items-center gap-4 p-5 text-left"
        onClick={onToggle}
      >
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black"
          style={{ background: open ? "#0057A8" : "#EFF6FF", color: open ? "#fff" : "#0057A8" }}
        >
          {rule.id}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-lg">{rule.icon}</span>
            <span className="font-extrabold text-gray-900 text-sm sm:text-base">
              {isUz ? rule.titleUz : rule.titleRu}
            </span>
          </div>
          <p className="text-xs text-gray-500 leading-snug">
            {isUz ? rule.summaryUz : rule.summaryRu}
          </p>
        </div>
        <div className="flex-shrink-0 ml-2" style={{ color: open ? "#0057A8" : "#9CA3AF" }}>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5" style={{ borderTop: "1px solid #E5E7EB" }}>
          <ul className="mt-4 space-y-3">
            {rule.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#0057A8", minWidth: 20 }}
                >
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {isUz ? item.uz : item.ru}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ── SIDEBAR ───────────────────────────────────────────────────────────────────
function Sidebar({
  isUz,
  activeId,
  onSelect,
}: {
  isUz: boolean;
  activeId: number;
  onSelect: (id: number, slug: string) => void;
}) {
  const [openGroups, setOpenGroups] = useState<string[]>(["dastur", "ballar", "taklif"]);
  const toggleGroup = (key: string) =>
    setOpenGroups((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  return (
    <div
      className="hidden lg:block w-64 flex-shrink-0"
    >
      <div
        className="sticky top-24 rounded-2xl overflow-hidden"
        style={{ border: "1.5px solid #E5E7EB", background: "#fff" }}
      >
        {/* Sidebar header */}
        <div className="p-4" style={{ background: "linear-gradient(135deg, #0057A8, #003F7A)" }}>
          <div className="text-white font-extrabold text-sm">💳 SEM Club</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>
            {isUz ? "Dastur qoidalari" : "Правила программы"}
          </div>
        </div>

        {/* Groups */}
        <div className="p-2">
          {navGroups.map((group) => {
            const isOpen = openGroups.includes(group.key);
            return (
              <div key={group.key} className="mb-1">
                {/* Group header */}
                <button
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors hover:bg-gray-50"
                  onClick={() => toggleGroup(group.key)}
                >
                  <span className="text-xs font-extrabold text-gray-700 uppercase tracking-wide">
                    {isUz ? group.titleUz : group.titleRu}
                  </span>
                  {isOpen ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
                </button>

                {/* Group items */}
                {isOpen && (
                  <div className="ml-2 mb-1">
                    {group.ids.map((id) => {
                      const rule = rules.find((r) => r.id === id)!;
                      const isActive = activeId === id;
                      return (
                        <button
                          key={id}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all text-sm"
                          style={{
                            background: isActive ? "#EFF6FF" : "transparent",
                            color: isActive ? "#0057A8" : "#374151",
                            fontWeight: isActive ? 700 : 500,
                            borderLeft: isActive ? "3px solid #0057A8" : "3px solid transparent",
                          }}
                          onClick={() => onSelect(id, rule.slug)}
                        >
                          <span className="flex-shrink-0 text-base">{rule.icon}</span>
                          <span className="text-xs leading-tight">
                            {isUz ? rule.titleUz : rule.titleRu}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Disclaimer link */}
          <div className="mt-2 pt-2" style={{ borderTop: "1px solid #F3F4F6" }}>
            <a
              href="#huquqiy"
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors hover:bg-gray-50"
              style={{ color: "#64748B" }}
            >
              ⚖️ {isUz ? "Huquqiy eslatma" : "Правовая оговорка"}
            </a>
          </div>
        </div>

        {/* Back to Club */}
        <div className="p-3 pt-0">
          <Link
            href="/club"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold transition-opacity hover:opacity-80"
            style={{ background: "#FF6B35", color: "#fff" }}
          >
            🏆 {isUz ? "SEM Club ga qaytish" : "В SEM Club"}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────────
export default function QoidalarClient() {
  const { lang } = useLang();
  const isUz = lang === "uz";
  const [openId, setOpenId] = useState<number | null>(1);

  const handleSelect = (id: number, slug: string) => {
    setOpenId(id);
    // Smooth scroll to section
    setTimeout(() => {
      const el = document.getElementById(`rule-${slug}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #001E46 0%, #0057A8 60%, #1a6fbf 100%)", paddingBottom: 80 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=50')",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08,
        }} />
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.03)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
            💳 SEM Club
          </div>
          <h1 className="text-white font-black leading-tight mb-4"
            style={{ fontSize: "clamp(26px, 5vw, 46px)", letterSpacing: "-0.5px" }}>
            {isUz ? "Dastur Qoidalari" : "Правила программы"}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 480, margin: "0 auto 24px" }}>
            {isUz ? "SEM Club loyalty dasturining to'liq shartlari va qoidalari" : "Полные условия и правила программы лояльности SEM Club"}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { n: "0.5–1.5%", lUz: "Cashback har turdan", lRu: "Кэшбэк с каждого тура" },
              { n: "3", lUz: "Status darajasi", lRu: "Уровня статуса" },
              { n: "$30", lUz: "Birinchi tur sovg'asi", lRu: "Подарок за первый тур" },
            ].map((s) => (
              <div key={s.n} className="text-center px-5 py-3 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="text-xl font-black text-white">{s.n}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>{isUz ? s.lUz : s.lRu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE QUICK NAV ── */}
      <div className="lg:hidden sticky top-16 z-30 bg-white shadow-sm" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <div className="flex overflow-x-auto gap-2 px-4 py-2.5 scrollbar-hide">
          {rules.map((rule) => (
            <button
              key={rule.id}
              onClick={() => handleSelect(rule.id, rule.slug)}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{
                background: openId === rule.id ? "#0057A8" : "#F1F5F9",
                color: openId === rule.id ? "#fff" : "#374151",
                whiteSpace: "nowrap",
              }}
            >
              {rule.icon} {isUz ? rule.titleUz : rule.titleRu}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN LAYOUT: SIDEBAR + CONTENT ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        <div className="flex gap-8 items-start">

          {/* ── LEFT SIDEBAR (desktop only) ── */}
          <Sidebar isUz={isUz} activeId={openId ?? 1} onSelect={handleSelect} />

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 min-w-0">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:underline" style={{ color: "#0057A8" }}>{isUz ? "Bosh sahifa" : "Главная"}</Link>
              <span>›</span>
              <Link href="/club" className="hover:underline" style={{ color: "#0057A8" }}>SEM Club</Link>
              <span>›</span>
              <span className="text-gray-700 font-semibold">{isUz ? "Qoidalar" : "Правила"}</span>
            </nav>

            {/* Intro note */}
            <div className="rounded-2xl p-5 mb-6 flex items-start gap-3"
              style={{ background: "#EFF6FF", border: "1.5px solid #BFDBFE" }}>
              <span className="text-2xl flex-shrink-0">ℹ️</span>
              <p className="text-sm text-blue-800 leading-relaxed">
                {isUz
                  ? "Ushbu qoidalar SEM Club loyalty dasturining barcha a'zolari uchun majburiy hisoblanadi. Dasturga a'zo bo'lish orqali siz ushbu qoidalarni qabul qilgan hisoblanasiz."
                  : "Настоящие правила обязательны для всех участников программы лояльности SEM Club. Вступая в программу, вы подтверждаете принятие настоящих правил."}
              </p>
            </div>

            {/* Rule cards */}
            <div className="space-y-3 mb-10">
              {rules.map((rule) => (
                <RuleCard
                  key={rule.id}
                  rule={rule}
                  isUz={isUz}
                  open={openId === rule.id}
                  onToggle={() => setOpenId(openId === rule.id ? null : rule.id)}
                />
              ))}
            </div>

            {/* Tier quick reference */}
            <div className="bg-white rounded-2xl p-6 mb-8" style={{ border: "1.5px solid #E5E7EB" }}>
              <h2 className="text-lg font-extrabold text-gray-900 mb-4">
                {isUz ? "📊 Status darajalari — qisqacha" : "📊 Уровни статуса — кратко"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: "🥈", name: "Classic", color: "#A07840", condUz: "Birinchi turdan", condRu: "С первого тура", cbUz: "0.5% cashback", cbRu: "Кэшбэк 0.5%" },
                  { icon: "🥇", name: "Gold", color: "#B8860B", condUz: "20 000$+ aylanma", condRu: "Оборот $20 000+", cbUz: "1% cashback", cbRu: "Кэшбэк 1%" },
                  { icon: "💎", name: "Platinum", color: "#555", condUz: "40 000$+ aylanma", condRu: "Оборот $40 000+", cbUz: "1.5% cashback", cbRu: "Кэшбэк 1.5%" },
                ].map((tier) => (
                  <div key={tier.name} className="rounded-xl p-4 text-center"
                    style={{ background: "#FAFAFA", border: `1.5px solid ${tier.color}33` }}>
                    <div className="text-3xl mb-2">{tier.icon}</div>
                    <div className="font-extrabold text-base mb-1" style={{ color: tier.color }}>{tier.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{isUz ? tier.condUz : tier.condRu}</div>
                    <div className="text-sm font-bold px-3 py-1 rounded-full inline-block"
                      style={{ background: "#F0FDF4", color: "#16A34A" }}>
                      {isUz ? tier.cbUz : tier.cbRu}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div id="huquqiy" className="rounded-2xl p-6 mb-8 scroll-mt-24"
              style={{ background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)", border: "2px solid #334155" }}>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl flex-shrink-0">⚖️</span>
                <div>
                  <h3 className="font-extrabold text-white text-base mb-1">
                    {isUz ? "Huquqiy eslatma" : "Правовая оговорка"}
                  </h3>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {isUz ? "Majburiy o'qing" : "Обязательно к прочтению"}
                  </p>
                </div>
              </div>

              <div className="rounded-xl p-4 mb-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-sm leading-relaxed font-semibold" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {isUz
                    ? `"SEM Travel" Mas'uliyati Cheklangan Jamiyat ushbu kampaniya va loyalty dasturi qoidalarini istalgan vaqtda oldindan xabardor qilmasdan ko'rib chiqish, o'zgartirish yoki butunlay bekor qilish huquqini o'zida saqlab qoladi.`
                    : `Общество с ограниченной ответственностью «SEM Travel» оставляет за собой право в любое время пересмотреть, изменить или полностью отменить правила данной кампании и программы лояльности без предварительного уведомления.`}
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { uz: "O'zgarishlar SEM Travel rasmiy sayti (semtravel.uz) da e'lon qilingan kundan boshlab kuchga kiradi.", ru: "Изменения вступают в силу с момента публикации на официальном сайте SEM Travel (semtravel.uz)." },
                  { uz: "Dastur to'xtatilgan taqdirda, a'zolarga 30 kun muddatda xabar beriladi va yig'ilgan ballarni ishlatish imkoniyati saqlanadi.", ru: "В случае прекращения программы участники уведомляются за 30 дней, накопленные баллы можно будет использовать в течение этого срока." },
                  { uz: "Bahsli vaziyatlarda SEM Travel qarorining yakuniy ekanligi tan olinadi.", ru: "В спорных ситуациях решение SEM Travel является окончательным." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-yellow-400 flex-shrink-0 mt-0.5 text-sm">•</span>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {isUz ? item.uz : item.ru}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {isUz ? "Qoidalar so'nggi yangilanishi: 2025-yil yanvar" : "Правила последнее обновление: январь 2025 года"}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-6 mb-8 text-center"
              style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}>
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-white font-extrabold text-lg mb-2">
                {isUz ? "SEM Club ga a'zo bo'ling!" : "Вступайте в SEM Club!"}
              </h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
                {isUz ? "Birinchi turingizdan boshlab cashback yig'ing va imtiyozlardan foydalaning." : "Начните копить кэшбэк уже с первого тура и пользуйтесь привилегиями."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/club" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:opacity-90"
                  style={{ background: "#FF6B35", color: "#fff" }}>
                  🏆 {isUz ? "SEM Club ga o'tish" : "Перейти в SEM Club"}
                </Link>
                <a href="https://wa.me/998946642222" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:opacity-90"
                  style={{ background: "#25D366", color: "#fff" }}>
                  💬 WhatsApp
                </a>
                <a href="tel:+998712755555"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}>
                  📞 +998 71 275-55-55
                </a>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="pb-6 flex flex-wrap items-center gap-4">
              <Link href="/club" className="text-sm font-medium" style={{ color: "#0057A8" }}>
                ← {isUz ? "SEM Club ga qaytish" : "Вернуться в SEM Club"}
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                {isUz ? "Bosh sahifa" : "Главная"}
              </Link>
            </div>

          </div>{/* end main content */}
        </div>{/* end flex */}
      </div>
    </div>
  );
}
