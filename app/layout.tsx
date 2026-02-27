import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HG01KQMSV6"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-HG01KQMSV6');
          `}
        </Script>

        <Script id="ga-events" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              const link = e.target.closest('a');
              if (!link) return;

              const href = link.getAttribute('href') || '';

              if (href.startsWith('tel:')) {
                window.gtag('event', 'click_phone', {
                  event_category: 'engagement',
                  event_label: href
                });
              }

              if (href.includes('wa.me')) {
                window.gtag('event', 'click_whatsapp', {
                  event_category: 'engagement',
                  event_label: href
                });
              }

              if (href.includes('t.me')) {
                window.gtag('event', 'click_telegram', {
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
