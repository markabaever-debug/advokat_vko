import type { Metadata } from "next";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { CookieNotice } from "@/components/CookieNotice";
import "./globals.css";

// Шрифты Geist не используются (в CSS — системный стек), поэтому их загрузку
// убрали: меньше блокирующих запросов и быстрее первый рендер. Внешний вид
// не меняется.

export const metadata: Metadata = {
  title: "Адвокат Маркабаев Е.Б.",
  description:
    "Адвокат Маркабаев Е.Б.: уголовные и гражданские дела, семейные споры, документы, представительство в суде.",
  metadataBase: new URL("https://www.markabaev.com"),
  alternates: {
    canonical: "/",
  },
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
};

// Выполняется до гидратации (инлайн в конце <body>, hero уже в DOM).
// Переключает html[data-hero-visible] = виден ли hero; полоса управляется этим
// атрибутом через CSS, поэтому не зависит от загрузки клиентского бандла.
const heroVisibilityScript = `
(function () {
  var root = document.documentElement;
  var hero = document.querySelector('[data-hero]');
  if (!hero) return;
  function apply(v) { root.setAttribute('data-hero-visible', v ? 'true' : 'false'); }
  try {
    var io = new IntersectionObserver(function (e) { apply(e[0].isIntersecting); }, { threshold: 0 });
    io.observe(hero);
  } catch (e) {}
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      apply(hero.getBoundingClientRect().bottom > 0);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  apply(hero.getBoundingClientRect().bottom > 0);
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Google Tag Manager загружается только после согласия — см. components/CookieNotice.tsx */}

        {/* Разметка организации (schema.org) */}
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
      </head>

      <body>
        {children}
        {/* Ранний скрипт: следит за hero и переключает html[data-hero-visible]
            ещё до гидратации React, чтобы закреплённая полоса появлялась за
            один кадр (IntersectionObserver + запасной обработчик scroll). */}
        <script dangerouslySetInnerHTML={{ __html: heroVisibilityScript }} />
        <FloatingContactButtons />
        <CookieNotice />
      </body>
    </html>
  );
}
