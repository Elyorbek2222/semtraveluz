# Tourvisor Modullar

Barcha Tourvisor widget komponentlari shu papkada.

## Modul ro'yxati

| Komponent | Modul ID | Tur | Qayerda ishlatiladi |
|-----------|----------|-----|----------------------|
| `TourvisorInit.tsx` | — | Skript yuklash | `app/page.tsx` (faqat bosh sahifada) |
| `SearchForm.tsx` | `9976360` | 🔍 Qidiruv formasi | `Hero`, `destinations/[slug]` |
| `HotToursWidget.tsx` | `9989885` | 🔥 Qaynoq turlar | `HotTours`, `tours` sahifasi |
| `SearchHistory.tsx` | `9990306` | 🕐 Qidiruv tarixi | `Hero` (qidiruv ostida) |
| `TourSlider.tsx` | `9990308` | 🎠 Slider | Bosh sahifa, blog postlar |
| `TourCalendar.tsx` | `9990310` | 📅 Narx kalendari | `destinations/[slug]` |
| `MinPrices.tsx` | `9990311` | 💰 Minimal narxlar | Bosh sahifa, `tours` sahifasi |

## Yangi modul qo'shish tartibi

1. Tourvisor kabinetida modul yarating → Module ID oling
2. Shu papkada yangi `.tsx` fayl yarating
3. `components/tourvisor/README.md` ga qo'shing
4. Kerakli sahifaga import qiling

## Tourvisor kabineti

- URL: https://tourvisor.ru
- Modullar: Настройки → Модули для сайта
- CSS stillar: Настройки → Модули → Настройка CSS стилей
