"use client";

import { useLang } from "@/lib/language-context";

const statsUz = [
  { num: "50", suffix: "+", label: "Mamlakatlar" },
  { num: "30", suffix: "K+", label: "Mamnun sayohatchilar" },
  { num: "15", suffix: "+", label: "Yillik tajriba" },
  { num: "98", suffix: "%", label: "Mamnunlik darajasi" },
];
const statsRu = [
  { num: "50", suffix: "+", label: "Стран" },
  { num: "30", suffix: "K+", label: "Довольных клиентов" },
  { num: "15", suffix: "+", label: "Лет опыта" },
  { num: "98", suffix: "%", label: "Уровень довольности" },
];

const whyUsUz = [
  { emoji: "✅", title: "Rasmiy litsenziya", desc: "O'zbekiston Turizm vazirligi tomonidan tasdiqlangan agentlik" },
  { emoji: "💰", title: "Eng arzon narx kafolati", desc: "Arzonroq topcangiz — farqini qaytaramiz" },
  { emoji: "🕐", title: "24/7 qo'llab-quvvatlash", desc: "Sayohat davomida har qanday muammoni hal qilamiz" },
  { emoji: "⚡", title: "Tez bron qilish", desc: "3 daqiqada bron, darhol tasdiqlov SMS" },
];
const whyUsRu = [
  { emoji: "✅", title: "Официальная лицензия", desc: "Агентство, подтверждённое Министерством туризма Узбекистана" },
  { emoji: "💰", title: "Гарантия лучшей цены", desc: "Найдёте дешевле — вернём разницу" },
  { emoji: "🕐", title: "Поддержка 24/7", desc: "Решаем любые вопросы во время путешествия" },
  { emoji: "⚡", title: "Быстрое бронирование", desc: "3 минуты на бронь, моментальное SMS-подтверждение" },
];

export default function StatsWhyUs() {
  const { lang } = useLang();
  const stats = lang === "uz" ? statsUz : statsRu;
  const whyUs = lang === "uz" ? whyUsUz : whyUsRu;

  return (
    <>
      {/* ── STATS ── */}
      <div className="mx-4 sm:mx-6 my-8 rounded-2xl p-6 max-w-5xl lg:mx-auto"
        style={{ background: "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)" }}>
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-black text-white leading-none mb-1" style={{ fontSize: 34 }}>
                {s.num}<span style={{ color: "#F5C518" }}>{s.suffix}</span>
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY US ── */}
      <section className="px-4 sm:px-6 pb-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-extrabold text-gray-900 mb-1">
          {lang === "uz" ? "Nima uchun biz?" : "Почему мы?"}
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          {lang === "uz" ? "SemTravel afzalliklari" : "Преимущества SEM Travel"}
        </p>

        <div className="flex flex-col gap-3">
          {whyUs.map((w) => (
            <div key={w.title} className="flex items-center gap-4 bg-white rounded-2xl px-4 py-3.5"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "#EFF6FF" }}>
                {w.emoji}
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">{w.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
