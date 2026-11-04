import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
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
  metadataBase: new URL("https://advokatvko.vercel.app"),
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MNCSPZM6');
            `,
          }}
        />

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
              url: "https://advokatvko.vercel.app",
              image: "https://advokatvko.vercel.app/og.jpg",
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNCSPZM6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
