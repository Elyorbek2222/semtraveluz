# Модуль 3, Урок 1: Архитектура конвейера контента

Прежде чем строить отдельные компоненты, нужно понять, как весь 10-шаговый конвейер работает вместе. Каждый шаг передаёт данные следующему, с обработкой ошибок и fallback-стратегиями на каждом этапе.

## 10-шаговый конвейер

**Полный поток от выбора темы до публикации:**

```
ШАГИ КОНВЕЙЕРА:

1️⃣  selectTopic()
    → Выбор ключевого слова из очереди

2️⃣  researchKeyword()
    → Объём поиска, сложность, связанные термины

3️⃣  generateArticle()
    → AI пишет HTML-статью (800-1000 слов)

4️⃣  auditSEO()
    → Оценка по 100-балльной системе

5️⃣  refineContent()
    → Исправление если оценка < 65 (макс. 2 попытки)

6️⃣  translateContent()
    → Параллельный перевод на RU, HE

7️⃣  validateTranslations()
    → Проверка HTML после перевода

8️⃣  saveToDatabase()
    → Сохранение BlogPost со всеми языками

9️⃣  sendEmailNotification()
    → Админ получает стилизованный email

🔟 sendTelegramReview()
    → Инлайн-кнопки: Одобрить / Отклонить / Редактировать
```

## Визуальная схема конвейера

```
┌──────────────┐
│ selectTopic  │ ← Выбор темы из базы
└──────┬───────┘
       ↓
┌──────────────────────┐
│ researchKeyword      │ ← LSI, длиннохвостые
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│ generateArticle      │ ← Claude AI генерирует
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│ auditSEO             │ ← 100-балльная оценка
└──────┬───────────────┘
       │
       ├─ Оценка >= 65? ─→ Дальше
       └─ Оценка < 65?  ─→ Refine (макс 2 раза)
              ↓
┌──────────────────────┐
│ translateContent     │ ← RU, HE параллельно
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│ validateTranslations │ ← Проверка HTML
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│ saveToDatabase       │ ← Сохранение BlogPost
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│ sendEmailNotification│ ← Email админу
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│ sendTelegramReview   │ ← Telegram инлайн-кнопки
└──────────────────────┘
       ↓
    ✅ ГОТОВО!
```

## Как шаги связаны

**Каждый шаг получает выход предыдущего и добавляет свои данные.**

Мы используем **GenerationLog** для отслеживания каждого действия:

```typescript
interface GenerationLog {
  id: string;
  blogPostId: string;
  action: string;        // "generate" | "audit" | "refine" | "translate"
  status: string;        // "success" | "failed" | "skipped"
  details: object;       // Данные шага
  tokensUsed: number;    // сколько токенов потрачено
  duration: number;      // миллисекунды
  error?: string;        // если была ошибка
  createdAt: Date;
}
```

## Пример передачи данных

### Шаг 1 → Шаг 2

```javascript
// Шаг 1: selectTopic()
const topic = {
  id: "topic-123",
  text: "web development",
  category: "technology",
  searchVolume: 2400
};

// Шаг 2: researchKeyword()
const research = {
  ...topic,  // ← Все данные шага 1
  relatedKeywords: ["full-stack", "frontend"],
  lsiKeywords: ["web dev", "coding"],
  competition: "high"
};
```

### Шаг 3 → Шаг 4

```javascript
// Шаг 3: generateArticle()
const article = {
  ...research,  // ← Все данные предыдущего
  title: "Web Development 2026: Complete Guide",
  content: "<h1>...</h1><p>...</p>",
  wordCount: 847,
  languages: { en: {...} }
};

// Шаг 4: auditSEO()
const audit = {
  ...article,  // ← Все данные предыдущего
  seoScore: 78,
  issues: [],
  status: "passed"
};
```

## Обработка ошибок

**Конвейер спроектирован устойчивым к сбоям:**

### Сценарий 1: Генерация провалилась

```
generateArticle() → ❌ FAIL
  ↓
Логируем ошибку в GenerationLog
  ↓
Пропускаем этот ключ (status: "skipped")
  ↓
Берём следующий ключ из очереди
  ↓
Продолжаем конвейер
```

### Сценарий 2: Оценка SEO слишком низкая

```
auditSEO() → Score: 48 (< 65)
  ↓
Вызываем refineContent() → Попытка 1
  ↓
auditSEO() → Score: 62 (всё ещё < 65)
  ↓
refineContent() → Попытка 2
  ↓
auditSEO() → Score: 71 ✅
  ↓
Успешно! Дальше к переводу
```

### Сценарий 3: Перевод провалился

```
translateContent() → ❌ FAIL (HTML сломан)
  ↓
Логируем ошибку
  ↓
validateTranslations() → Откат к оригиналу
  ↓
Используем только EN версию
  ↓
Сохраняем с отметкой "translationFailed"
  ↓
Админ уведомляется (нужен ручной перевод)
```

### Сценарий 4: Ошибка БД

```
saveToDatabase() → ❌ Connection timeout
  ↓
Одна повторная попытка
  ↓
Если всё ещё падает:
  - Экспортируем статью в JSON
  - Сохраняем локально
  - Алерт админу (восстановление вручную)
```

### Сценарий 5: Уведомление не ушло

```
sendEmailNotification() → ❌ SMTP error
  ↓
Логируем (не критично)
  ↓
Пытаемся через Telegram
  ↓
Статья УЖЕ сохранена! ✅
  ↓
Продолжаем работу
```

## Fallback-стратегии

### Fallback 1: AI-модель недоступна

```
❌ Claude API down
  ↓
Ждём 30 секунд
  ↓
Повторяем запрос
  ↓
Если всё ещё down:
  - Пауза конвейера
  - Алерт админу
  - Автозапуск в 09:00 на следующий день
```

### Fallback 2: Перевод сломал HTML

```
❌ HTML broken после перевода
  ↓
validateTranslations() детектирует
  ↓
Откат к оригинальному EN тексту
  ↓
Публикуем англ. версию
  ↓
Админ уведомляется (нужна доработка перевода)
```

### Fallback 3: БД недоступна

```
❌ Database offline
  ↓
Экспортируем article в JSON:
{
  "title": "...",
  "content": "...",
  "languages": {...},
  "timestamp": "2026-03-15T10:00:00Z"
}
  ↓
Сохраняем в папку: ./exports/pending/
  ↓
Manual import по восстановлении
```

### Fallback 4: Email не работает

```
❌ Email сервис down
  ↓
Отправляем через Telegram (Plan B)
  ↓
Если и Telegram down:
  - Сохраняем уведомление в БД
  - Админ видит в админ-панели
  - Повторная попытка через час
```

## Конфигурация конвейера

```javascript
const PIPELINE_CONFIG = {
  // SEO оценка
  minSeoScore: 65,
  maxRefinementRetries: 2,
  
  // Контент
  targetArticleWords: 800,
  maxArticleWords: 1000,
  
  // Языки
  translationLanguages: ["ru", "he"],
  
  // AI модели
  generationModel: "claude-sonnet",
  translationModel: "claude-haiku",
  
  // Параметры
  generationTemperature: 0.8,  // Более творческий
  translationTemperature: 0.3, // Более точный
  
  // Таймауты
  apiTimeout: 30000,           // 30 сек
  databaseTimeout: 10000,      // 10 сек
  translationTimeout: 60000,   // 60 сек
  
  // Повторы
  maxRetries: 3,
  retryDelay: 5000,            // 5 сек между попытками
  
  // Логирование
  logLevel: "info",
  archiveLogsAfterDays: 30
};
```

## GenerationLog при разных сценариях

### Успешный поток

```json
[
  {
    "action": "selectTopic",
    "status": "success",
    "duration": 120,
    "details": { "topicId": "topic-123" }
  },
  {
    "action": "researchKeyword",
    "status": "success",
    "duration": 2500,
    "tokensUsed": 450
  },
  {
    "action": "generateArticle",
    "status": "success",
    "duration": 8000,
    "tokensUsed": 3200
  },
  {
    "action": "auditSEO",
    "status": "success",
    "duration": 1500,
    "details": { "score": 78 }
  },
  {
    "action": "translateContent",
    "status": "success",
    "duration": 6000,
    "tokensUsed": 2100
  },
  {
    "action": "saveToDatabase",
    "status": "success",
    "duration": 200
  }
]
```

### Неудачный поток с восстановлением

```json
[
  {
    "action": "generateArticle",
    "status": "failed",
    "error": "API timeout",
    "duration": 30100
  },
  {
    "action": "generateArticle_retry",
    "status": "success",
    "duration": 7200,
    "attempt": 1
  },
  {
    "action": "auditSEO",
    "status": "success",
    "details": { "score": 58 }
  },
  {
    "action": "refineContent",
    "status": "success",
    "attempt": 1
  },
  {
    "action": "auditSEO",
    "status": "success",
    "details": { "score": 72 }
  }
]
```

## Мониторинг конвейера

**Метрики для отслеживания:**

```javascript
const PIPELINE_METRICS = {
  successRate: "95%",           // Процент успешных проходов
  avgDuration: "18.5 seconds",  // Среднее время
  tokensPerArticle: 5750,       // Токены на статью
  costPerArticle: "$0.045",     // API стоимость
  failureReasons: {
    "api_timeout": 5,
    "seo_refinement_failed": 2,
    "translation_error": 1
  },
  alertsGenerated: 3            // За последние 24 часа
};
```

## Главный вывод

**Совет:** Логируйте всё. Когда конвейер запустится в 3 ночи по крону, вам нужно знать, что именно произошло.

**Правило:** Хороший конвейер — не тот, что никогда не падает, а тот, что падает грациозно, логирует всё и восстанавливается автоматически.

### Чек-лист архитектуры

- ✅ Каждый шаг логируется
- ✅ Обработка ошибок на каждом уровне
- ✅ Fallback-стратегии для критичных сервисов
- ✅ Автоматическое восстановление
- ✅ Алерты для админа (email + Telegram)
- ✅ История всех операций (GenerationLog)
- ✅ Конфигурируемость всех параметров
- ✅ Мониторинг производительности
