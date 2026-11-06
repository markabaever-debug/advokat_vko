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
