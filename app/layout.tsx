import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { CookieNotice } from "@/components/CookieNotice";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingContactButtons />
        <CookieNotice />
      </body>
    </html>
  );
}
