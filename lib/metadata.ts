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
  verification: siteVerification(),
};

// Метатеги подтверждения прав на сайт — из переменных окружения Vercel (Settings →
// Environment Variables), читаются при сборке; после изменения нужен новый деплой.
// Пустая переменная — тег не выводится.
//   GOOGLE_SITE_VERIFICATION — Google Search Console (<meta name="google-site-verification">)
//   BING_SITE_VERIFICATION   — Bing Webmaster Tools (<meta name="msvalidate.01">)
//   YANDEX_SITE_VERIFICATION — Яндекс.Вебмастер (<meta name="yandex-verification">);
//     пока не задана — прежний код, которым сайт уже подтверждён в Яндексе.
function siteVerification(): Metadata["verification"] {
  const YANDEX_CURRENT = "f3983c7d853b2b3d";
  const env = (name: string) => process.env[name]?.trim() || undefined;
  const google = env("GOOGLE_SITE_VERIFICATION");
  const bing = env("BING_SITE_VERIFICATION");
  return {
    ...(google && { google }),
    yandex: env("YANDEX_SITE_VERIFICATION") ?? YANDEX_CURRENT,
    ...(bing && { other: { "msvalidate.01": bing } }),
  };
}

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
