import { geo, maps } from "@/lib/business";
import type { Lang } from "@/lib/i18n";

const BASE = "https://www.markabaev.com";
const SERVICE_ID = `${BASE}/#legalservice`;
const PERSON_ID = `${BASE}/#attorney`;

// Разметка schema.org (@graph): LegalService (адвокатский кабинет) + Person (адвокат) — в
// корневых layout обеих языковых версий, т. е. на главной, страницах направлений и остальных
// страницах. На /kz поля локализованы на казахский. Рейтинг и отзывы в разметку НЕ
// добавляются (решение по P2). sameAs — только карточка 2ГИС (lib/business).
export function StructuredData({ lang = "ru" }: { lang?: Lang }) {
  const isKz = lang === "kk";
  const city = isKz ? "Өскемен" : "Усть-Каменогорск";
  const region = isKz ? "Шығыс Қазақстан облысы" : "Восточно-Казахстанская область";

  const address = {
    "@type": "PostalAddress",
    postalCode: "070010",
    addressLocality: city,
    addressRegion: region,
    streetAddress: isKz
      ? "Борис Александров көшесі, 3-үй, 101-кеңсе"
      : "ул. Бориса Александрова, д. 3, офис 101",
    addressCountry: "KZ",
  };
  const areaServed = [
    { "@type": "City", name: city },
    { "@type": "AdministrativeArea", name: region },
  ];
  const telephone = "+7 777 543 07 91";
  const email = "advokatvko.rk@gmail.com";
  const sameAs = [maps.gis2Route];

  const legalService = {
    "@type": "LegalService",
    "@id": SERVICE_ID,
    name: "Адвокат Маркабаев Е.Б.",
    description: isKz
      ? "Өскемендегі (ШҚО) адвокат: қылмыстық, азаматтық және әкімшілік істер, сотта қорғау, құжаттар, консультация."
      : "Адвокат в Усть-Каменогорске (ВКО): уголовные, гражданские и административные дела, защита в суде, документы, консультация.",
    url: isKz ? `${BASE}/kz` : BASE,
    image: `${BASE}/og.jpg`,
    telephone,
    email,
    address,
    geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lon },
    areaServed,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
    availableLanguage: ["ru", "kk"],
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    sameAs,
  };

  const attorney = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Маркабаев Ерлан Бапашевич",
    jobTitle: "Адвокат",
    description: isKz
      ? "Шығыс Қазақстан облысының адвокаттар алқасының адвокаты"
      : "Адвокат Коллегии адвокатов Восточно-Казахстанской области",
    memberOf: {
      "@type": "Organization",
      name: isKz
        ? "Шығыс Қазақстан облысының адвокаттар алқасы"
        : "Коллегия адвокатов Восточно-Казахстанской области",
    },
    worksFor: { "@id": SERVICE_ID },
    workLocation: { "@type": "Place", address },
    address,
    telephone,
    email,
    areaServed,
    knowsLanguage: ["ru", "kk"],
    url: isKz ? `${BASE}/kz` : BASE,
    sameAs,
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [legalService, attorney],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
