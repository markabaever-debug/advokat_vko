import { geo, maps } from "@/lib/business";
import type { Lang } from "@/lib/i18n";

// Разметка организации (schema.org, LegalService) — в корневых layout для обеих
// языковых версий. На /kz поля локализованы на казахский. Рейтинг и отзывы в разметку
// НЕ добавляются (решение по P2). sameAs — ссылки 2ГИС и Google Карт из lib/business.
export function StructuredData({ lang = "ru" }: { lang?: Lang }) {
  const isKz = lang === "kk";

  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.markabaev.com/#legalservice",
    name: "Адвокат Маркабаев Е.Б.",
    description: isKz
      ? "Өскемендегі (ШҚО) адвокат: қылмыстық, азаматтық және әкімшілік істер, сотта қорғау, құжаттар, консультация."
      : "Адвокат в Усть-Каменогорске (ВКО): уголовные, гражданские и административные дела, защита в суде, документы, консультация.",
    url: isKz ? "https://www.markabaev.com/kz" : "https://www.markabaev.com",
    image: "https://www.markabaev.com/og.jpg",
    telephone: "+77775430791",
    email: "advokatvko.rk@gmail.com",
    areaServed: [
      { "@type": "City", name: isKz ? "Өскемен" : "Усть-Каменогорск" },
      {
        "@type": "AdministrativeArea",
        name: isKz ? "Шығыс Қазақстан облысы" : "Восточно-Казахстанская область",
      },
    ],
    address: {
      "@type": "PostalAddress",
      postalCode: "070010",
      addressLocality: isKz ? "Өскемен" : "Усть-Каменогорск",
      addressRegion: isKz ? "ШҚО" : "ВКО",
      streetAddress: isKz
        ? "Борис Александров көшесі, 3-үй, 101-кеңсе"
        : "ул. Бориса Александрова, д. 3, офис 101",
      addressCountry: "KZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lon,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
    sameAs: [maps.gis2Route, maps.google],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
