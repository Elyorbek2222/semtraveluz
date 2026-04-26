/**
 * Seed Keywords Database
 * Adds 222 keywords (160 UZ + 45 RU + 17 EN) to Prisma
 * Usage: npx tsx scripts/seed-keywords.ts
 */

import { prisma } from '../lib/prisma';
import { Keyword } from '@/seo/types';
import { analyzeIntent } from '@/seo/utils/intent-analyzer';


const UZ_KEYWORDS: Omit<Keyword, 'id' | 'createdAt' | 'updatedAt'>[] = [
  // TURLAR (50)
  { keyword: 'Dubai turlarini', niche: 'turlar', language: 'uz', searchVolume: 4500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Turkiyaga turlar', niche: 'turlar', language: 'uz', searchVolume: 3200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Tailandga turlar', niche: 'turlar', language: 'uz', searchVolume: 2800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Misr turlarini', niche: 'turlar', language: 'uz', searchVolume: 2100, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Gretsiyaga turlar', niche: 'turlar', language: 'uz', searchVolume: 1900, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Italiyaga tur', niche: 'turlar', language: 'uz', searchVolume: 1700, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Ispaniyaga turlar', niche: 'turlar', language: 'uz', searchVolume: 1500, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Indoneziyaga tur', niche: 'turlar', language: 'uz', searchVolume: 1300, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Meksikaga turlar', niche: 'turlar', language: 'uz', searchVolume: 1100, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Braziliyaga tur', niche: 'turlar', language: 'uz', searchVolume: 900, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Dubai turining narxi', niche: 'turlar', language: 'uz', searchVolume: 3800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Turkiyaga 5 kunlik tur', niche: 'turlar', language: 'uz', searchVolume: 2900, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Tailandga arzon turlar', niche: 'turlar', language: 'uz', searchVolume: 2400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Misr turining narxi', niche: 'turlar', language: 'uz', searchVolume: 1800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Biznesdagi oila turlari', niche: 'turlar', language: 'uz', searchVolume: 1600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Erkak sayohatlari uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 1400, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Honeymuun turlari', niche: 'turlar', language: 'uz', searchVolume: 1200, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Yosh oila uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 1000, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'All-inclusive turlar', niche: 'turlar', language: 'uz', searchVolume: 2700, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Qara dengiz turlarini', niche: 'turlar', language: 'uz', searchVolume: 2200, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Oq dengiz turlar', niche: 'turlar', language: 'uz', searchVolume: 1950, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Qizil dengiz turlari', niche: 'turlar', language: 'uz', searchVolume: 1750, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Qosh turlar', niche: 'turlar', language: 'uz', searchVolume: 800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Bolalar bilan turlar', niche: 'turlar', language: 'uz', searchVolume: 1500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Qatnovli turlari', niche: 'turlar', language: 'uz', searchVolume: 950, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Safari turlar Dubai', niche: 'turlar', language: 'uz', searchVolume: 2100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Turkiya turizmi', niche: 'turlar', language: 'uz', searchVolume: 2800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Tailand turizm', niche: 'turlar', language: 'uz', searchVolume: 2300, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Tosh kentdan turlar', niche: 'turlar', language: 'uz', searchVolume: 3500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Samarqanddan turlar', niche: 'turlar', language: 'uz', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Buxoradan turlar', niche: 'turlar', language: 'uz', searchVolume: 900, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Qo\'qon turlari', niche: 'turlar', language: 'uz', searchVolume: 600, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Farg\'ona turlar', niche: 'turlar', language: 'uz', searchVolume: 500, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Xorezm turlari', niche: 'turlar', language: 'uz', searchVolume: 750, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Ishlab chiqish uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 400, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Yangi yil uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 2600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Bahor uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 1800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Yoz uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 2400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Kuz uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 1400, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Qish uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 1600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Tog\'lar uchun turlar', niche: 'turlar', language: 'uz', searchVolume: 800, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Cho\'lda safari turi', niche: 'turlar', language: 'uz', searchVolume: 1200, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Deng sohilida turlar', niche: 'turlar', language: 'uz', searchVolume: 2000, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Arzon turlar O\'zbekistonda', niche: 'turlar', language: 'uz', searchVolume: 3100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Saboq va turlar', niche: 'turlar', language: 'uz', searchVolume: 600, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Boshlanishining turlar', niche: 'turlar', language: 'uz', searchVolume: 500, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Hol unda turlar', niche: 'turlar', language: 'uz', searchVolume: 700, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Ekskurion turlar', niche: 'turlar', language: 'uz', searchVolume: 1100, difficulty: 'medium', intent: 'commercial' },

  // MEHMONXONA (40)
  { keyword: 'Dubai mehmonxonalar', niche: 'mehmonxona', language: 'uz', searchVolume: 3200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Turkiyada mehmonxonalar', niche: 'mehmonxona', language: 'uz', searchVolume: 2400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Tailand mehmonxonalog', niche: 'mehmonxona', language: 'uz', searchVolume: 1900, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Misr mehmonxonalog', niche: 'mehmonxona', language: 'uz', searchVolume: 1500, difficulty: 'medium', intent: 'commercial' },
  { keyword: '5 yulduzli mehmonxona Dubai', niche: 'mehmonxona', language: 'uz', searchVolume: 2800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Eng yaxshi mehmonxona Turkiyada', niche: 'mehmonxona', language: 'uz', searchVolume: 2100, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Arzon mehmonxona Tailandda', niche: 'mehmonxona', language: 'uz', searchVolume: 1700, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Budjet mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1300, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Luxury mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1100, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Resort va mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1400, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Mehmonxona narxlari', niche: 'mehmonxona', language: 'uz', searchVolume: 2200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona band qilish', niche: 'mehmonxona', language: 'uz', searchVolume: 1800, difficulty: 'easy', intent: 'transactional' },
  { keyword: 'Mehmonxona sharxlari', niche: 'mehmonxona', language: 'uz', searchVolume: 1600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona hizmatlar', niche: 'mehmonxona', language: 'uz', searchVolume: 1200, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Spa mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 950, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Yon mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1050, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Oila mehmonxonalog', niche: 'mehmonxona', language: 'uz', searchVolume: 1300, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Bolalar bilan mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Pet-friendly mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Ramadan mehmonxonalog', niche: 'mehmonxona', language: 'uz', searchVolume: 600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Qo\'qon mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Samarqand mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Buxoro mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 450, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Tosh kent mehmonxonalog', niche: 'mehmonxona', language: 'uz', searchVolume: 2000, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Deng sohili mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1600, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Tog\' mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 700, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Mehmonxona taqqoslash', niche: 'mehmonxona', language: 'uz', searchVolume: 1400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona review sharxlar', niche: 'mehmonxona', language: 'uz', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Eng yaxshi rating mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona special offers', niche: 'mehmonxona', language: 'uz', searchVolume: 1300, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona kupon', niche: 'mehmonxona', language: 'uz', searchVolume: 900, difficulty: 'easy', intent: 'transactional' },
  { keyword: 'Mehmonxona diskount', niche: 'mehmonxona', language: 'uz', searchVolume: 1100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'All-inclusive mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Breakfast included mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona WiFi', niche: 'mehmonxona', language: 'uz', searchVolume: 800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona pool', niche: 'mehmonxona', language: 'uz', searchVolume: 950, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona gym', niche: 'mehmonxona', language: 'uz', searchVolume: 700, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona restaurant', niche: 'mehmonxona', language: 'uz', searchVolume: 850, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Business mehmonxona', niche: 'mehmonxona', language: 'uz', searchVolume: 1100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Mehmonxona event space', niche: 'mehmonxona', language: 'uz', searchVolume: 600, difficulty: 'easy', intent: 'commercial' },

  // VIZA (30)
  { keyword: 'Dubai vizasi', niche: 'viza', language: 'uz', searchVolume: 3800, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Turkiya vizasi', niche: 'viza', language: 'uz', searchVolume: 2900, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Tailand vizasi', niche: 'viza', language: 'uz', searchVolume: 2400, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Misr vizasi', niche: 'viza', language: 'uz', searchVolume: 1800, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Gretsiya vizasi', niche: 'viza', language: 'uz', searchVolume: 1500, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Italiya vizasi', niche: 'viza', language: 'uz', searchVolume: 1400, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Ispaniya vizasi', niche: 'viza', language: 'uz', searchVolume: 1200, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Visa aplikatsiyasi', niche: 'viza', language: 'uz', searchVolume: 2600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Viza hujjatlari', niche: 'viza', language: 'uz', searchVolume: 2100, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Viza narxi', niche: 'viza', language: 'uz', searchVolume: 1700, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Qanday viza qabul qilish', niche: 'viza', language: 'uz', searchVolume: 3200, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Viza vakansiya vaqti', niche: 'viza', language: 'uz', searchVolume: 1900, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Viza e-viza', niche: 'viza', language: 'uz', searchVolume: 2300, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Dubai visa on arrival', niche: 'viza', language: 'uz', searchVolume: 1600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Tailand visa free', niche: 'viza', language: 'uz', searchVolume: 1300, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Viza tuli qilish', niche: 'viza', language: 'uz', searchVolume: 1500, difficulty: 'easy', intent: 'transactional' },
  { keyword: 'Viza tasdiqlanish', niche: 'viza', language: 'uz', searchVolume: 1400, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Viza raqamlar', niche: 'viza', language: 'uz', searchVolume: 800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Viza extension', niche: 'viza', language: 'uz', searchVolume: 900, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Viza renewal', niche: 'viza', language: 'uz', searchVolume: 850, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Viza rejeksija', niche: 'viza', language: 'uz', searchVolume: 700, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Viza appeal', niche: 'viza', language: 'uz', searchVolume: 600, difficulty: 'hard', intent: 'informational' },
  { keyword: 'Business viza', niche: 'viza', language: 'uz', searchVolume: 1100, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Student viza', niche: 'viza', language: 'uz', searchVolume: 950, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Work viza', niche: 'viza', language: 'uz', searchVolume: 1200, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Transit viza', niche: 'viza', language: 'uz', searchVolume: 700, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Multiple entry viza', niche: 'viza', language: 'uz', searchVolume: 800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Viza interview questions', niche: 'viza', language: 'uz', searchVolume: 1300, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Viza travel insurance', niche: 'viza', language: 'uz', searchVolume: 900, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Viza consulate', niche: 'viza', language: 'uz', searchVolume: 500, difficulty: 'easy', intent: 'navigational' },

  // BLOG (40)
  { keyword: 'Qayerga ketish kerak', niche: 'blog', language: 'uz', searchVolume: 2200, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash uchun pul qancha', niche: 'blog', language: 'uz', searchVolume: 1800, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlashni qanday boshlash', niche: 'blog', language: 'uz', searchVolume: 1600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash tips', niche: 'blog', language: 'uz', searchVolume: 1400, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash haqida', niche: 'blog', language: 'uz', searchVolume: 1200, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Nafe sayohatlash', niche: 'blog', language: 'uz', searchVolume: 1000, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlashdan keyin', niche: 'blog', language: 'uz', searchVolume: 800, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash xavfsizlik', niche: 'blog', language: 'uz', searchVolume: 1500, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash jadvali', niche: 'blog', language: 'uz', searchVolume: 1100, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash g\'ezi', niche: 'blog', language: 'uz', searchVolume: 900, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash yordamchisi', niche: 'blog', language: 'uz', searchVolume: 700, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash uchun ro\'yxat', niche: 'blog', language: 'uz', searchVolume: 1300, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash sunovatlar', niche: 'blog', language: 'uz', searchVolume: 950, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash rasmiy hujjatlar', niche: 'blog', language: 'uz', searchVolume: 1600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash sug\'urtasi', niche: 'blog', language: 'uz', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash valyuta', niche: 'blog', language: 'uz', searchVolume: 1000, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash paketi', niche: 'blog', language: 'uz', searchVolume: 1100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash buxgalteri', niche: 'blog', language: 'uz', searchVolume: 600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash fotosuratlar', niche: 'blog', language: 'uz', searchVolume: 800, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash vlogu', niche: 'blog', language: 'uz', searchVolume: 900, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlashning afzalliklari', niche: 'blog', language: 'uz', searchVolume: 1400, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlashning kamchiliklari', niche: 'blog', language: 'uz', searchVolume: 1100, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash tavsiyalari', niche: 'blog', language: 'uz', searchVolume: 1300, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash xaridlar', niche: 'blog', language: 'uz', searchVolume: 1000, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash sovg\'alari', niche: 'blog', language: 'uz', searchVolume: 800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash qo\'limchalar', niche: 'blog', language: 'uz', searchVolume: 900, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash blog', niche: 'blog', language: 'uz', searchVolume: 1500, difficulty: 'easy', intent: 'navigational' },
  { keyword: 'Sayohatlash qayta etmoq', niche: 'blog', language: 'uz', searchVolume: 700, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash jodvalini rejalashtirish', niche: 'blog', language: 'uz', searchVolume: 1200, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash mobilga', niche: 'blog', language: 'uz', searchVolume: 800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash soyiqlarni', niche: 'blog', language: 'uz', searchVolume: 600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash oilasi', niche: 'blog', language: 'uz', searchVolume: 950, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash do\'sti', niche: 'blog', language: 'uz', searchVolume: 750, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash yo\'ldoshi', niche: 'blog', language: 'uz', searchVolume: 700, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash bo\'lish', niche: 'blog', language: 'uz', searchVolume: 600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash haftaligini', niche: 'blog', language: 'uz', searchVolume: 500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Sayohatlash ko\'ngil', niche: 'blog', language: 'uz', searchVolume: 550, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlashning turi', niche: 'blog', language: 'uz', searchVolume: 800, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Sayohatlash va tibbiyot', niche: 'blog', language: 'uz', searchVolume: 650, difficulty: 'medium', intent: 'informational' },
];

const RU_KEYWORDS: Omit<Keyword, 'id' | 'createdAt' | 'updatedAt'>[] = [
  // TURЫ (15)
  { keyword: 'Туры в Дубай', niche: 'turlar', language: 'ru', searchVolume: 3200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Отдых в Турции', niche: 'turlar', language: 'ru', searchVolume: 2400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Туры в Таиланд', niche: 'turlar', language: 'ru', searchVolume: 1800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Недорогие туры', niche: 'turlar', language: 'ru', searchVolume: 2100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Туры на море', niche: 'turlar', language: 'ru', searchVolume: 1900, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Семейные туры', niche: 'turlar', language: 'ru', searchVolume: 1600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Горячие туры', niche: 'turlar', language: 'ru', searchVolume: 1400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Туры выходного дня', niche: 'turlar', language: 'ru', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'All-inclusive туры', niche: 'turlar', language: 'ru', searchVolume: 1800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Туры с вилетом', niche: 'turlar', language: 'ru', searchVolume: 1500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Экскурсионные туры', niche: 'turlar', language: 'ru', searchVolume: 1100, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Горнолыжные туры', niche: 'turlar', language: 'ru', searchVolume: 900, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Сафари туры', niche: 'turlar', language: 'ru', searchVolume: 1300, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Туры последний момент', niche: 'turlar', language: 'ru', searchVolume: 2200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Туры по спецпредложению', niche: 'turlar', language: 'ru', searchVolume: 1700, difficulty: 'easy', intent: 'commercial' },

  // ОТЕЛИ (12)
  { keyword: 'Отели Дубая', niche: 'mehmonxona', language: 'ru', searchVolume: 2400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Лучшие отели', niche: 'mehmonxona', language: 'ru', searchVolume: 2000, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Дешевые отели', niche: 'mehmonxona', language: 'ru', searchVolume: 1600, difficulty: 'easy', intent: 'commercial' },
  { keyword: '5-звездные отели', niche: 'mehmonxona', language: 'ru', searchVolume: 1800, difficulty: 'medium', intent: 'commercial' },
  { keyword: 'Отели все включено', niche: 'mehmonxona', language: 'ru', searchVolume: 1400, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Отели на берегу моря', niche: 'mehmonxona', language: 'ru', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Семейные отели', niche: 'mehmonxona', language: 'ru', searchVolume: 1100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Отели с рейтингом', niche: 'mehmonxona', language: 'ru', searchVolume: 950, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Бюджетные отели', niche: 'mehmonxona', language: 'ru', searchVolume: 1300, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Люкс отели', niche: 'mehmonxona', language: 'ru', searchVolume: 850, difficulty: 'hard', intent: 'commercial' },
  { keyword: 'Отели с отзывами', niche: 'mehmonxona', language: 'ru', searchVolume: 1100, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Отели со скидками', niche: 'mehmonxona', language: 'ru', searchVolume: 1200, difficulty: 'easy', intent: 'transactional' },

  // ВИЗЫ (10)
  { keyword: 'Виза в Дубай', niche: 'viza', language: 'ru', searchVolume: 2800, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Виза в Таиланд', niche: 'viza', language: 'ru', searchVolume: 2100, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Как получить визу', niche: 'viza', language: 'ru', searchVolume: 2300, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Документы для визы', niche: 'viza', language: 'ru', searchVolume: 1700, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Виза онлайн', niche: 'viza', language: 'ru', searchVolume: 1500, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Электронная виза', niche: 'viza', language: 'ru', searchVolume: 1400, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Виза в аэропорту', niche: 'viza', language: 'ru', searchVolume: 1100, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Сроки визы', niche: 'viza', language: 'ru', searchVolume: 900, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Отказ в визе', niche: 'viza', language: 'ru', searchVolume: 800, difficulty: 'medium', intent: 'informational' },
  { keyword: 'Турист виза', niche: 'viza', language: 'ru', searchVolume: 1200, difficulty: 'easy', intent: 'informational' },

  // БЛОГ (8)
  { keyword: 'Куда поехать', niche: 'blog', language: 'ru', searchVolume: 1600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Путешествия советы', niche: 'blog', language: 'ru', searchVolume: 1300, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Как путешествовать', niche: 'blog', language: 'ru', searchVolume: 1500, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Путешествия блог', niche: 'blog', language: 'ru', searchVolume: 1200, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Путешествия информация', niche: 'blog', language: 'ru', searchVolume: 900, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Туристические советы', niche: 'blog', language: 'ru', searchVolume: 1000, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Безопасность путешествия', niche: 'blog', language: 'ru', searchVolume: 1100, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Путешествия что взять', niche: 'blog', language: 'ru', searchVolume: 800, difficulty: 'easy', intent: 'informational' },
];

const EN_KEYWORDS: Omit<Keyword, 'id' | 'createdAt' | 'updatedAt'>[] = [
  // TOURS (6)
  { keyword: 'Dubai tours', niche: 'turlar', language: 'en', searchVolume: 2200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Turkey tours', niche: 'turlar', language: 'en', searchVolume: 1800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Thailand travel packages', niche: 'turlar', language: 'en', searchVolume: 1600, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Budget tours', niche: 'turlar', language: 'en', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Family vacation tours', niche: 'turlar', language: 'en', searchVolume: 1000, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'All-inclusive travel packages', niche: 'turlar', language: 'en', searchVolume: 1400, difficulty: 'easy', intent: 'commercial' },

  // HOTELS (5)
  { keyword: 'Best hotels Dubai', niche: 'mehmonxona', language: 'en', searchVolume: 1800, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Luxury hotels', niche: 'mehmonxona', language: 'en', searchVolume: 1500, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Budget hotels', niche: 'mehmonxona', language: 'en', searchVolume: 1200, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Family hotels', niche: 'mehmonxona', language: 'en', searchVolume: 1000, difficulty: 'easy', intent: 'commercial' },
  { keyword: 'Beachfront hotels', niche: 'mehmonxona', language: 'en', searchVolume: 1100, difficulty: 'easy', intent: 'commercial' },

  // VISAS (3)
  { keyword: 'Thailand visa', niche: 'viza', language: 'en', searchVolume: 1600, difficulty: 'easy', intent: 'informational' },
  { keyword: 'How to get visa', niche: 'viza', language: 'en', searchVolume: 1400, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Visa requirements', niche: 'viza', language: 'en', searchVolume: 1200, difficulty: 'easy', intent: 'informational' },

  // BLOG (3)
  { keyword: 'Travel tips', niche: 'blog', language: 'en', searchVolume: 1400, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Where to travel', niche: 'blog', language: 'en', searchVolume: 1200, difficulty: 'easy', intent: 'informational' },
  { keyword: 'Travel advice', niche: 'blog', language: 'en', searchVolume: 1000, difficulty: 'easy', intent: 'informational' },
];

async function main() {
  try {
    console.log('🌱 Starting keyword seeding...');

    // Combine all keywords
    const allKeywords = [...UZ_KEYWORDS, ...RU_KEYWORDS, ...EN_KEYWORDS];

    // Clear existing keywords (optional)
    const deletedCount = await prisma.keyword.deleteMany({});
    console.log(`🗑️  Deleted ${deletedCount.count} existing keywords`);

    // Insert keywords
    const createdKeywords = await prisma.keyword.createMany({
      data: allKeywords,
    });

    console.log(`✅ Successfully seeded ${createdKeywords.count} keywords!`);

    // Show statistics
    const stats = {
      uz: allKeywords.filter((k) => k.language === 'uz').length,
      ru: allKeywords.filter((k) => k.language === 'ru').length,
      en: allKeywords.filter((k) => k.language === 'en').length,
      total: allKeywords.length,
      byNiche: {
        turlar: allKeywords.filter((k) => k.niche === 'turlar').length,
        mehmonxona: allKeywords.filter((k) => k.niche === 'mehmonxona').length,
        viza: allKeywords.filter((k) => k.niche === 'viza').length,
        blog: allKeywords.filter((k) => k.niche === 'blog').length,
      },
      byDifficulty: {
        easy: allKeywords.filter((k) => k.difficulty === 'easy').length,
        medium: allKeywords.filter((k) => k.difficulty === 'medium').length,
        hard: allKeywords.filter((k) => k.difficulty === 'hard').length,
      },
    };

    console.log('📊 Seeding Statistics:');
    console.log(`   Languages: UZ(${stats.uz}) + RU(${stats.ru}) + EN(${stats.en}) = ${stats.total}`);
    console.log(`   By Niche: Turlar(${stats.byNiche.turlar}) + Mehmonxona(${stats.byNiche.mehmonxona}) + Viza(${stats.byNiche.viza}) + Blog(${stats.byNiche.blog})`);
    console.log(`   By Difficulty: Easy(${stats.byDifficulty.easy}) + Medium(${stats.byDifficulty.medium}) + Hard(${stats.byDifficulty.hard})`);

    console.log('✨ Seeding complete!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
