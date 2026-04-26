# Модуль 3, Урок 6: Мультиязычный конвейер перевода

Когда статья проходит SEO-аудит, время переводить. Наша система переводит на несколько языков параллельно, сохраняя HTML-структуру и SEO-оптимизацию.

## Параллельный перевод

Вместо последовательного перевода, запускаем все переводы одновременно через `Promise.allSettled`. Если перевод на какой-то язык проваливается, используем оригинальный английский текст как fallback.

```javascript
// Вместо этого:
const ru = await translate(html, 'ru');
const he = await translate(html, 'he');

// Делай это:
const results = await Promise.allSettled([
  translate(html, 'ru'),
  translate(html, 'he')
]);
```

## Claude Haiku для перевода

Для перевода используем самую быструю и дешёвую модель — Claude Haiku:

| Параметр | Значение |
|----------|----------|
| Скорость | 3-5x быстрее Sonnet |
| Стоимость | 10x дешевле за токен |
| Качество | Отличное для перевода |
| Temperature | 0.3 (точность > креативность) |

## Системный промпт перевода

```
Переведи HTML-статью на [ЯЗЫК].

КРИТИЧЕСКИЕ ПРАВИЛА:
1. Сохрани ВСЕ HTML-теги как есть
2. Переводи только текст между тегами
3. НЕ переводи:
   - Бренды (Codearia, Claude Code, Next.js)
   - Технические термины на английском
   - Код внутри <code> и <pre>
   - URL и ссылки
4. Сохрани структуру абзацев
5. Сохрани количество элементов списков
6. Сохрани форматирование <strong> и <em>
```

## Сохранение HTML

Главный риск при переводе — **сломанный HTML**.

### Типичные проблемы:

❌ AI добавляет/удаляет теги
❌ AI переводит атрибуты
❌ AI объединяет абзацы
❌ AI переводит код

### Валидация:

Наша валидация сравнивает количество тегов до и после перевода:

```javascript
const originalTagCount = (html.match(/<[^>]+>/g) || []).length;
const translatedTagCount = (translatedHtml.match(/<[^>]+>/g) || []).length;

// Допустимое отклонение: ±2 тега (может быть добавлен/удалён какой-то тег)
if (Math.abs(originalTagCount - translatedTagCount) > 2) {
  throw new Error('HTML structure corrupted after translation');
}
```

## Формат хранения JSON

```json
{
  "en": "<h2>Article Title</h2><p>English text...</p>",
  "ru": "<h2>Заголовок статьи</h2><p>Русский текст...</p>",
  "he": "<h2>כותרת המאמר</h2><p>טקסט בעברית...</p>"
}
```

## Промпт для Claude Code

Создай функцию `translateArticle`:

```javascript
async function translateArticle({
  html,
  targetLang,  // "ru" | "he"
  keyword
}) {
  // 1. Вызывает Claude Haiku, temperature 0.3
  // 2. Включает системный промпт с правилами сохранения
  // 3. Валидирует: количество тегов совпадает (±2)
  // 4. При провале — повтор
  // 5. При повторном провале — fallback на английский
  // 6. Логирует токены и время перевода
}
```

### Реализация:

```javascript
const systemPrompt = `Переведи HTML-статью на ${langName[targetLang]}.

КРИТИЧЕСКИЕ ПРАВИЛА:
1. Сохрани ВСЕ HTML-теги как есть
2. Переводи только текст между тегами
3. НЕ переводи:
   - Бренды (Codearia, Claude, Next.js)
   - Технические термины на английском
   - Код внутри <code> и <pre>
   - URL и ссылки
4. Сохрани структуру абзацев
5. Сохрани количество элементов списков
6. Сохрани форматирование <strong> и <em>`;

const message = await client.messages.create({
  model: "claude-haiku-4-20250307",
  max_tokens: 4000,
  temperature: 0.3,
  system: systemPrompt,
  messages: [
    {
      role: "user",
      content: `Переведи эту статью:\n\n${html}`
    }
  ]
});

const translatedHtml = message.content[0].text;

// Валидация
const originalTags = (html.match(/<[^>]+>/g) || []).length;
const translatedTags = (translatedHtml.match(/<[^>]+>/g) || []).length;

if (Math.abs(originalTags - translatedTags) > 2) {
  throw new Error('HTML structure corrupted');
}

return {
  html: translatedHtml,
  tokensUsed: message.usage.output_tokens,
  language: targetLang
};
```

## Параллельный запуск

```javascript
async function translateArticleParallel(html, keyword) {
  const results = await Promise.allSettled([
    translateArticle({ html, targetLang: 'ru', keyword }),
    translateArticle({ html, targetLang: 'he', keyword })
  ]);

  const translations = {
    en: html  // оригинал
  };

  results.forEach((result, index) => {
    const lang = ['ru', 'he'][index];
    if (result.status === 'fulfilled') {
      translations[lang] = result.value.html;
      console.log(`✓ ${lang}: успешно`);
    } else {
      console.log(`⚠️ ${lang}: ошибка, используем English`);
      translations[lang] = html;  // fallback
    }
  });

  return translations;
}
```

## Совет

**Всегда валидируйте HTML после перевода.** Это одна строка кода, которая предотвращает сломанные страницы в продакшене.

## Интеграция в конвейер

```
Шаг 4: auditSEO()
  ↓
Шаг 5: refineContent() (если нужно)
  ↓
Шаг 6: translateArticle() ← ЭТОТ ШАГ (параллельный)
  ↓
Шаг 7: validateTranslations()
  ↓
Шаг 8: saveToDatabase()
```

## Главный вывод

**Мультиязычный контент — не роскошь, а множитель трафика. Каждый язык открывает новую аудиторию без дополнительного исследования ключевиков.**

### Экономика:

- 1 статья на английском → 1 аудитория
- 1 статья на EN + RU + HE → 3 аудитории одновременно
- Стоимость всего на 30-40% выше (параллельный перевод Haiku дешевый)
- Трафик увеличивается в 2.5-3x

## Чек-лист перевода

- ✅ HTML структура сохранена (±2 тега)
- ✅ Текст переведён полностью
- ✅ Теги не переведены
- ✅ Коды не переведены
- ✅ URL не переведены
- ✅ Форматирование (`<strong>`, `<em>`) сохранено
- ✅ Структура абзацев не нарушена
- ✅ Логирование токенов
