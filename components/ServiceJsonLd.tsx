// JSON-LD для страниц услуг: BreadcrumbList (Главная → страница услуги) и FAQPage
// (из того же массива вопросов, что видимо показан на странице через FaqAccordion).
// Серверный компонент (без "use client"). aggregateRating/отзывы не добавляются.
type FaqEntry = { q: string; a: string };

const BASE = "https://www.markabaev.com";

export function ServiceJsonLd({
  lang,
  slug,
  breadcrumbName,
  faq,
}: {
  lang: "ru" | "kk";
  slug: string; // путь без префикса языка, напр. "/ugolovnyj-advokat-ust-kamenogorsk"
  breadcrumbName: string; // имя текущей страницы в «хлебных крошках»
  faq: FaqEntry[];
}) {
  const isKz = lang === "kk";
  const self = isKz ? `${BASE}/kz${slug}` : `${BASE}${slug}`;
  const homeUrl = isKz ? `${BASE}/kz` : `${BASE}/`;
  const homeName = isKz ? "Басты бет" : "Главная";

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: homeUrl },
      { "@type": "ListItem", position: 2, name: breadcrumbName, item: self },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
