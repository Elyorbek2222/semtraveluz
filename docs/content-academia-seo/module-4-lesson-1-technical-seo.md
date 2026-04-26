# Модуль 4, Урок 1: Техническое SEO: Сайтмапы, Schema и мета-теги

Качественный контент помогает ранжироваться, но техническое SEO обеспечивает индексацию. Без сайтмапов, структурированных данных и мета-тегов Google может никогда не найти ваши статьи.

## Динамическая генерация Sitemap

Сайтмап должен включать **статические страницы** и **динамические посты блога**. 

В Next.js это файл `sitemap.ts` в директории `app/`, который возвращает массив URL с приоритетами:

| Тип страницы | Приоритет |
|--------------|-----------|
| Главная | 1.0 |
| Курсы/категории | 0.9 |
| Блог-посты | 0.7 |
| Архивные посты | 0.5 |

### Пример:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://semtravel.uz',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://semtravel.uz/tours',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Динамически добавить все блог-посты
    ...blogPosts.map(post => ({
      url: `https://semtravel.uz/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  ];
}
```

## robots.txt

**Конфигурация:** разрешить всё кроме `/api/` и `/admin/`. Указать URL сайтмапа.

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: https://semtravel.uz/sitemap.xml
```

## JSON-LD структурированные данные

Для блог-статей используем два типа:

### BlogPosting

Основная информация статьи:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Тур в Дубай: полный гайд 2026",
  "description": "Подробное руководство по турам в Дубай...",
  "author": {
    "@type": "Person",
    "name": "SEM Travel"
  },
  "datePublished": "2026-04-26T10:00:00Z",
  "dateModified": "2026-04-26T14:30:00Z",
  "image": "https://semtravel.uz/images/dubai-tour.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://semtravel.uz/blog/tour-dubai"
  }
}
```

### FAQPage

Вопросы и ответы для **featured snippets** в поиске:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Сколько стоит тур в Дубай?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Цена тура в Дубай зависит от сезона и категории отеля. В среднем 1200-2000 USD."
      }
    },
    {
      "@type": "Question",
      "name": "Нужна ли виза в Дубай для узбеков?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Узбекам не требуется виза для въезда в ОАЭ на туристический срок до 30 дней."
      }
    }
  ]
}
```

## Open Graph и Twitter Cards

Для расшаривания в соцсетях каждая страница нуждается в OG-тегах и Twitter Cards:

```html
<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:title" content="Тур в Дубай: полный гайд 2026" />
<meta property="og:description" content="Подробное руководство по турам в Дубай, ценам, визам и лучшим отелям." />
<meta property="og:image" content="https://semtravel.uz/images/dubai-tour.jpg" />
<meta property="og:url" content="https://semtravel.uz/blog/tour-dubai" />
<meta property="og:site_name" content="SEM Travel" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Тур в Дубай: полный гайд 2026" />
<meta name="twitter:description" content="Подробное руководство по турам в Дубай..." />
<meta name="twitter:image" content="https://semtravel.uz/images/dubai-tour.jpg" />
<meta name="twitter:creator" content="@semtravel" />

<!-- Canonical -->
<link rel="canonical" href="https://semtravel.uz/blog/tour-dubai" />
```

## Промпт для Claude Code

Создай для Next.js блога:

### 1. Динамический sitemap.ts

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://semtravel.uz', priority: 1.0 },
    { url: 'https://semtravel.uz/tours', priority: 0.9 },
    { url: 'https://semtravel.uz/destinations', priority: 0.9 },
    { url: 'https://semtravel.uz/blog', priority: 0.8 },
    { url: 'https://semtravel.uz/about', priority: 0.6 }
  ];

  // Динамические блог-посты
  const posts = await prisma.blogPost.findMany({
    where: { status: 'published' },
    select: { slug: true, updatedAt: true }
  });

  const dynamicPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://semtravel.uz/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticPages, ...dynamicPages];
}
```

### 2. robots.ts

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/']
      }
    ],
    sitemap: 'https://semtravel.uz/sitemap.xml'
  };
}
```

### 3. Функция generateBlogMetadata

```typescript
// seo/utils/generate-blog-metadata.ts
import { Metadata } from 'next';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  content: string;
  author?: string;
  publishedAt: Date;
  image?: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  const baseUrl = 'https://semtravel.uz';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: [post.keyword],
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: postUrl,
      images: post.image ? [{ url: post.image }] : undefined,
      publishedTime: post.publishedAt.toISOString()
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined
    },
    alternates: {
      canonical: postUrl
    }
  };
}

export function generateBlogPostingSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image || 'https://semtravel.uz/default-image.jpg',
    author: {
      '@type': 'Person',
      name: post.author || 'SEM Travel'
    },
    datePublished: post.publishedAt.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://semtravel.uz/blog/${post.slug}`
    }
  };
}

export function generateFaqSchema(faqItems: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}
```

### 4. Интеграция в layout блога

```typescript
// app/blog/[slug]/layout.tsx
import { generateBlogMetadata } from '@/seo/utils/generate-blog-metadata';

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return generateBlogMetadata(post);
}

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
```

## Тестирование структурированных данных

**Google Rich Results Test:** https://search.google.com/test/rich-results

Скопируйте HTML страницы и проверьте:
- ✅ Все JSON-LD валидны
- ✅ Нет ошибок в schema
- ✅ BlogPosting распознан
- ✅ FAQPage распознан для featured snippets

## Хреflang для мультиязычного контента

Если статья доступна на нескольких языках:

```html
<link rel="alternate" hreflang="en" href="https://semtravel.uz/en/blog/tour-dubai" />
<link rel="alternate" hreflang="ru" href="https://semtravel.uz/ru/blog/tour-dubai" />
<link rel="alternate" hreflang="x-default" href="https://semtravel.uz/blog/tour-dubai" />
```

## Главный вывод

**Техническое SEO — фундамент, который делает весь контент видимым.** Без него вы строите библиотеку без адреса.

### Чек-лист технического SEO

- ✅ Динамический sitemap.xml
- ✅ robots.txt с Sitemap URL
- ✅ BlogPosting JSON-LD для статей
- ✅ FAQPage JSON-LD для Q&A
- ✅ Open Graph теги на каждой странице
- ✅ Twitter Card теги
- ✅ Canonical URLs
- ✅ Hreflang для языков
- ✅ Метаданные для социальных сетей
- ✅ Валидация через Rich Results Test

### Влияние на ранжирование

- 📊 Sitemap → быстрая индексация новых постов
- 📊 JSON-LD → featured snippets (позиция 0)
- 📊 Open Graph → CTR из соцсетей
- 📊 Canonical → избежать дубликатов контента
