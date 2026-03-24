import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati",
  description: "SEM Travel veb-saytining maxfiylik siyosati va shaxsiy ma'lumotlarni himoya qilish shartlari.",
  alternates: { canonical: "https://semtraveluz.vercel.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Maxfiylik siyosati</h1>
        <p className="text-gray-400 text-sm mb-8">Oxirgi yangilanish: 24 mart 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Umumiy ma'lumot</h2>
          <p className="text-gray-600 leading-relaxed">
            SEM Travel (keyingi o'rinlarda "biz" yoki "kompaniya") sizning shaxsiy ma'lumotlaringizni
            himoya qilishga qaratilgan. Ushbu siyosat semtraveluz.vercel.app saytidan foydalanganda
            qanday ma'lumotlar to'planishi va ular qanday ishlatilishi haqida ma'lumot beradi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. To'planadigan ma'lumotlar</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Saytimizga murojaat qilganda yoki bog'lanish formasini to'ldirganda quyidagi ma'lumotlarni
            to'lashimiz mumkin:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-1 text-sm leading-relaxed">
            <li>Ism va familiya</li>
            <li>Telefon raqami</li>
            <li>Elektron pochta manzili (ixtiyoriy)</li>
            <li>Qiziqtirgan tur yoki xizmat haqida ma'lumot</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Ma'lumotlardan foydalanish</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            To'plangan ma'lumotlar faqat quyidagi maqsadlarda ishlatiladi:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-1 text-sm leading-relaxed">
            <li>Buyurtmangizni qayta ishlash va tasdiqlash</li>
            <li>Siz bilan bog'lanish va xizmat ko'rsatish</li>
            <li>Tur paketlar va maxsus takliflar haqida xabardor qilish (roziligingiz bilan)</li>
            <li>Sayt sifatini yaxshilash</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Ma'lumotlarni uchinchi shaxslarga berish</h2>
          <p className="text-gray-600 leading-relaxed">
            Shaxsiy ma'lumotlaringiz uchinchi shaxslarga sotilmaydi yoki ijaraga berilmaydi.
            Xizmatlar ko'rsatish uchun zarur bo'lgan hollarda (masalan, aviakompaniyalar, mehmonxonalar,
            viza markazlari) ma'lumotlar faqat xizmat doirasida ulashilishi mumkin.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookie fayllar</h2>
          <p className="text-gray-600 leading-relaxed">
            Saytimiz til tanlovini saqlash uchun localStorage va Vercel Analytics uchun minimal
            cookie fayllardan foydalanadi. Brauzer sozlamalarida cookie fayllarni o'chirib qo'yishingiz mumkin.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Bekor qilish siyosati</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-1 text-sm leading-relaxed">
            <li>Jo'nashdan <strong>21 kun oldin</strong> — to'liq qaytarish</li>
            <li>Jo'nashdan <strong>14 kun oldin</strong> — 50% qaytarish</li>
            <li>Jo'nashdan <strong>7 kun oldin</strong> — 25% qaytarish</li>
            <li>Jo'nashdan <strong>7 kundan kam</strong> — qaytarish yo'q</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Huquqlaringiz</h2>
          <p className="text-gray-600 leading-relaxed">
            Siz o'zingiz haqidagi ma'lumotlarni ko'rish, tahrirlash yoki o'chirish huquqiga egasiz.
            Buning uchun biz bilan bog'laning.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Bog'lanish</h2>
          <p className="text-gray-600 leading-relaxed">
            Maxfiylik siyosati bo'yicha savollar uchun:
          </p>
          <div className="mt-3 space-y-1 text-sm text-gray-600">
            <p>📧 <a href="mailto:semtraveluz@mail.ru" className="text-primary hover:underline">semtraveluz@mail.ru</a></p>
            <p>📞 <a href="tel:+998712755555" className="text-primary hover:underline">+998 71 275-55-55</a></p>
            <p>📍 Kattahirmontepa 12a/1, Park City J-K, Olmazor, Toshkent</p>
          </div>
        </section>
      </div>
    </main>
  );
}
