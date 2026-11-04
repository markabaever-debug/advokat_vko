import type { MetadataRoute } from "next";

const baseUrl = "https://www.markabaev.com";

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
      url: `${baseUrl}/politika-konfidencialnosti`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
