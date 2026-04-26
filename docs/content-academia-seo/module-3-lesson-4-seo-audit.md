# Модуль 3, Урок 4: SEO-аудит — 100-балльная система оценки

Каждая статья вашего конвейера проходит аудит по 100-балльной системе. Это контроль качества, гарантирующий публикацию только хорошо оптимизированного контента.

## 10 критериев оценки

Полная разбивка всех 100 баллов:

| Критерий | Баллы | Правило |
|----------|-------|---------|
| 1. Ключевик в заголовке | 10 | Title содержит ключевик |
| 2. Ключевик в первом абзаце | 10 | Первый `<p>` содержит ключевик |
| 3. Ключевик в мета-описании | 10 | Meta description содержит |
| 4. Плотность ключевика (0.8-2.5%) | 15 | Кол-во / общее кол-во слов |
| 5. H2 заголовки (3+ с ключевиком) | 15 | Минимум 3 H2, ключевик в 2+ |
| 6. Внутренние ссылки (2-3) | 10 | Ссылки на другие страницы |
| 7. Длина мета-заголовка (30-60) | 10 | Не слишком короткий/длинный |
| 8. Мета-описание (100-160 симв.) | 10 | Оптимальная длина сниппета |
| 9. Иерархия заголовков (H2→H3) | 5 | Правильная вложенность |
| 10. FAQ-секции (4-5 пунктов) | 5 | FAQ из h3 + p пар |
| **ИТОГО** | **100** | |

## Промпт для Claude Code

Создай функцию auditSEO:

```javascript
auditSEO({
  html,           // HTML статьи
  metaTitle,      // Заголовок
  metaDescription,// Описание
  keyword         // Ключевое слово
})
```

Возвращает:
```javascript
{
  totalScore,                 // 0-100
  breakdown: CriterionResult[],
  criticalIssues: string[]
}
```

## Реализуй ВСЕ 10 критериев

### a) Ключевик в title → 10 баллов
```javascript
if (metaTitle.toLowerCase().includes(keyword.toLowerCase())) {
  score += 10;
}
```

### b) Ключевик в первом `<p>` → 10 баллов
```javascript
const firstParagraph = html.match(/<p[^>]*>([^<]+)<\/p>/);
if (firstParagraph && firstParagraph[1].toLowerCase().includes(keyword.toLowerCase())) {
  score += 10;
}
```

### c) Ключевик в metaDescription → 10 баллов
```javascript
if (metaDescription.toLowerCase().includes(keyword.toLowerCase())) {
  score += 10;
}
```

### d) Плотность: 0.8-2.5% = 15, 0.5-0.8% или 2.5-3% = 10, иначе 0
```javascript
const text = html.replace(/<[^>]*>/g, '');
const wordCount = text.split(/\s+/).length;
const keywordCount = (text.match(new RegExp(keyword, 'gi')) || []).length;
const density = (keywordCount / wordCount) * 100;

if (density >= 0.8 && density <= 2.5) {
  score += 15;
} else if ((density >= 0.5 && density < 0.8) || (density > 2.5 && density <= 3)) {
  score += 10;
}
```

### e) H2: 3+ штук, ключевик в 2+ → 15 баллов
```javascript
const h2Tags = html.match(/<h2[^>]*>([^<]+)<\/h2>/g) || [];
let h2WithKeyword = 0;
h2Tags.forEach(tag => {
  if (tag.toLowerCase().includes(keyword.toLowerCase())) {
    h2WithKeyword++;
  }
});

if (h2Tags.length >= 3 && h2WithKeyword >= 2) {
  score += 15;
}
```

### f) Внутренние ссылки: 2-3 = 10, 1 = 5, 0 = 0
```javascript
const links = html.match(/<a[^>]*href="([^"]+)"[^>]*>/g) || [];
if (links.length >= 2 && links.length <= 3) {
  score += 10;
} else if (links.length === 1) {
  score += 5;
}
```

### g) Длина title: 30-60 = 10, 20-30 или 60-70 = 5
```javascript
if (metaTitle.length >= 30 && metaTitle.length <= 60) {
  score += 10;
} else if ((metaTitle.length >= 20 && metaTitle.length < 30) || 
           (metaTitle.length > 60 && metaTitle.length <= 70)) {
  score += 5;
}
```

### h) Длина metaDescription: 100-160 = 10, 80-100 или 160-180 = 5
```javascript
if (metaDescription.length >= 100 && metaDescription.length <= 160) {
  score += 10;
} else if ((metaDescription.length >= 80 && metaDescription.length < 100) ||
           (metaDescription.length > 160 && metaDescription.length <= 180)) {
  score += 5;
}
```

### i) Иерархия: H3 после H2 → 5 баллов
```javascript
const hasH2 = /<h2[^>]*>/i.test(html);
const hasH3 = /<h3[^>]*>/i.test(html);
const h3IndexAfterH2 = html.indexOf('<h3') > html.indexOf('<h2');

if (hasH2 && hasH3 && h3IndexAfterH2) {
  score += 5;
}
```

### j) FAQ: 4-5 пунктов = 5, 3 = 3, меньше = 0
```javascript
const faqSection = html.match(/<h2[^>]*>FAQ<\/h2>([\s\S]*?)(?=<h2|$)/i);
const faqQuestions = faqSection ? (faqSection[1].match(/<h3[^>]*>/g) || []).length : 0;

if (faqQuestions >= 4 && faqQuestions <= 5) {
  score += 5;
} else if (faqQuestions === 3) {
  score += 3;
}
```

## Расчёт плотности ключевика

Плотность ключевика — самая тонкая метрика.

**Алгоритм:**
1. Убрать HTML-теги
2. Посчитать общее количество слов
3. Посчитать вхождения ключевика (без учёта регистра)
4. Формула: `(вхождения × слов_в_ключе / всего_слов) × 100`

**Пример:** Статья 1000 слов, ключевик "web development" (2 слова), встречается 15 раз:
```
Плотность = (15 × 2 / 1000) × 100 = 3%
```

## Интерпретация оценки

| Диапазон | Статус | Действие |
|----------|--------|----------|
| 85-100 | Отлично | Публикуем сразу |
| 65-84 | Хорошо | Публикуем с пометками |
| 50-64 | Нужна доработка | Авто-рефайнмент |
| < 50 | Плохо | Перегенерация с нуля |

## Оптимальный порог

**Порог 65 — оптимальный:**
- ✅ Ниже — пропускает плохой контент
- ✅ Выше — слишком много перезаписей, трата токенов

## Главный вывод

**Что измеряется — то улучшается.** 100-балльная система превращает субъективное «хорошая ли статья?» в объективные автоматизируемые проверки.

## Интеграция в конвейер

```
Шаг 3: generateArticle()
  ↓
Шаг 4: auditSEO() ← ЭТОТ ШАГ
  ↓
Если score >= 65 → Дальше
Если score < 65 → Шаг 5: refineContent()
```
