import type { MetadataRoute } from "next";

const baseUrl = "https://www.markabaev.com";

// Пока в sitemap только русские страницы. Казахские версии (/kz, /kz/<slug>,
// /kz/politika-konfidencialnosti) существуют в структуре и связаны с русскими через
// hreflang, но в sitemap НЕ включаются до завершения перевода (сейчас на них русский
// текст с плашкой «перевод готовится»). После перевода добавить сюда парные /kz-URL.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ugolovnyj-advokat-ust-kamenogorsk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/grazhdanskie-dela-ust-kamenogorsk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/administrativnye-dela-ust-kamenogorsk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/spory-s-gosorganami-ust-kamenogorsk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/politika-konfidencialnosti`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
