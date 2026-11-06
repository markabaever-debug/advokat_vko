// Разметка организации (schema.org) — общая для обеих языковых версий.
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Адвокат Маркабаев Е.Б.",
          description:
            "Адвокат в Усть-Каменогорске (ВКО): уголовные, гражданские и административные дела, защита в суде, документы, консультация.",
          url: "https://www.markabaev.com",
          image: "https://www.markabaev.com/og.jpg",
          telephone: "+77775430791",
          email: "advokatvko.rk@gmail.com",
          areaServed: "Усть-Каменогорск",
          address: {
            "@type": "PostalAddress",
            postalCode: "070010",
            addressLocality: "Усть-Каменогорск",
            addressRegion: "ВКО",
            streetAddress: "ул. Бориса Александрова, д. 3, офис 101",
            addressCountry: "KZ",
          },
        }),
      }}
    />
  );
}
