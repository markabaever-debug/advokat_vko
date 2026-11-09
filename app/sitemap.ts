import type { MetadataRoute } from "next";

const baseUrl = "https://www.markabaev.com";

// Русские и казахские страницы. Каждая запись несёт hreflang-альтернативы
// (ru-KZ / kk-KZ / x-default), согласованные с canonical/alternates в lib/metadata.ts.
// x-default указывает на русскую версию.
type Pair = {
  ru: string; // путь русской версии (начиная с /)
  kz: string; // путь казахской версии (начиная с /kz)
  changeFrequency: "yearly" | "monthly" | "weekly";
  priority: number;
};

const pairs: Pair[] = [
  { ru: "/", kz: "/kz", changeFrequency: "monthly", priority: 1 },
  {
    ru: "/ugolovnyj-advokat-ust-kamenogorsk",
    kz: "/kz/ugolovnyj-advokat-ust-kamenogorsk",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    ru: "/grazhdanskie-dela-ust-kamenogorsk",
    kz: "/kz/grazhdanskie-dela-ust-kamenogorsk",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    ru: "/administrativnye-dela-ust-kamenogorsk",
    kz: "/kz/administrativnye-dela-ust-kamenogorsk",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    ru: "/spory-s-gosorganami-ust-kamenogorsk",
    kz: "/kz/spory-s-gosorganami-ust-kamenogorsk",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    ru: "/dokumenty",
    kz: "/kz/dokumenty",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    ru: "/politika-konfidencialnosti",
    kz: "/kz/politika-konfidencialnosti",
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pairs.flatMap((p) => {
    const ruUrl = `${baseUrl}${p.ru}`;
    const kzUrl = `${baseUrl}${p.kz}`;
    const languages = {
      "ru-KZ": ruUrl,
      "kk-KZ": kzUrl,
      "x-default": ruUrl,
    };

    return [
      {
        url: ruUrl,
        lastModified,
        changeFrequency: p.changeFrequency,
        priority: p.priority,
        alternates: { languages },
      },
      {
        url: kzUrl,
        lastModified,
        changeFrequency: p.changeFrequency,
        priority: p.priority,
        alternates: { languages },
      },
    ];
  });
}
