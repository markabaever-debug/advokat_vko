import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Адвокат Маркабаев Е.Б.",
  description:
    "Адвокат Маркабаев Е.Б.: уголовные и гражданские дела, семейные споры, документы, представительство в суде. WhatsApp/Telegram: 87775430791.",
  metadataBase: new URL("https://advokatvko.vercel.app"),
  openGraph: {
    title: "Адвокат Маркабаев Ерлан Бапашевич",
    description:
      "Юридическая помощь по гражданским и уголовным делам. Консультация онлайн и очно.",
    url: "https://advokatvko.vercel.app",
    siteName: "Advokat VKO",
    locale: "ru_RU",
    type: "website",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Адвокат в Усть-Каменогорске — Advokat VKO",
    description:
      "Юридическая помощь по гражданским и уголовным делам. Консультация онлайн и очно.",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HG01KQMSV6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HG01KQMSV6');

            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (!target) return;

              const href = target.getAttribute('href') || '';

              if (href.startsWith('tel:')) {
                gtag('event', 'click_phone', {
                  event_category: 'engagement',
                  event_label: href
                });
              }

              if (href.includes('wa.me')) {
                gtag('event', 'click_whatsapp', {
                  event_category: 'engagement',
                  event_label: href
                });
              }

              if (href.includes('t.me')) {
                gtag('event', 'click_telegram', {
                  event_category: 'engagement',
                  event_label: href
                });
              }
            });
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
