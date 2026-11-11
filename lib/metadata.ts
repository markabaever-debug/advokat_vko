import type { Metadata } from "next";

// Базовые метаданные, общие для обеих языковых версий (ru в корне, kk в /kz).
// canonical и hreflang-альтернативы задаются на каждой странице через pageAlternates.
export const baseUrl = "https://www.markabaev.com";

export const baseMetadata: Metadata = {
  title: "Адвокат Маркабаев Е.Б.",
  description:
    "Адвокат Маркабаев Е.Б.: уголовные и гражданские дела, семейные споры, документы, представительство в суде.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Адвокат Маркабаев Е.Б.",
    description:
      "Уголовные, гражданские и административные дела. Усть-Каменогорск (ВКО). Защита в суде, документы, консультация.",
    url: "/",
    siteName: "Адвокат Маркабаев Е.Б.",
    locale: "ru_RU",
    alternateLocale: "kk_KZ",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Адвокат Маркабаев Е.Б." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Адвокат Маркабаев Е.Б.",
    description: "Уголовные, гражданские и административные дела. Усть-Каменогорск (ВКО).",
    images: ["/og.jpg"],
  },
  verification: {
    yandex: "f3983c7d853b2b3d",
  },
};

// Казахская база (корневой layout /kz): те же данные, но og:locale = kk_KZ и
// казахские тексты Open Graph / Twitter. Так превью казахских страниц при пересылке
// в WhatsApp/соцсети не оказывается на русском с locale ru_RU.
export const kzBaseMetadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    title: "Адвокат Маркабаев Е.Б.",
    description:
      "Қылмыстық, азаматтық және әкімшілік істер. Өскемен (ШҚО). Сотта қорғау, құжаттар, консультация.",
    url: "/kz",
    siteName: "Адвокат Маркабаев Е.Б.",
    locale: "kk_KZ",
    alternateLocale: "ru_RU",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Адвокат Маркабаев Е.Б." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Адвокат Маркабаев Е.Б.",
    description: "Қылмыстық, азаматтық және әкімшілік істер. Өскемен (ШҚО).",
    images: ["/og.jpg"],
  },
};

// Полный Open Graph / Twitter под конкретную страницу. Важно: Next НЕ сливает openGraph
// родителя и страницы, а заменяет его целиком — поэтому возвращаем все поля (locale,
// siteName, images…), иначе страница потеряет og:image и og:locale. lang задаёт og:locale.
export function og(
  title: string,
  description: string,
  lang: "ru" | "kk" = "ru",
  path?: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const isKz = lang === "kk";
  return {
    openGraph: {
      title,
      description,
      url: path ?? (isKz ? "/kz" : "/"),
      siteName: "Адвокат Маркабаев Е.Б.",
      locale: isKz ? "kk_KZ" : "ru_RU",
      alternateLocale: isKz ? "ru_RU" : "kk_KZ",
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Адвокат Маркабаев Е.Б." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
    },
  };
}

// canonical — на свою языковую версию; hreflang ru-KZ / kk-KZ / x-default (x-default → русская).
// ruPath — русская версия (корень), kzPath — казахская (/kz…), self — canonical текущей страницы.
export function pageAlternates(ruPath: string, kzPath: string, self: string): Metadata["alternates"] {
  return {
    canonical: self,
    languages: {
      "ru-KZ": ruPath,
      "kk-KZ": kzPath,
      "x-default": ruPath,
    },
  };
}
