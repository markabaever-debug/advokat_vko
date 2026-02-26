import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Адвокат в Усть-Каменогорске — юридическая консультация (ВКО)",
  description:
    "Адвокат в Усть-Каменогорске: уголовные и гражданские дела, семейные споры, документы, представительство в суде. WhatsApp/Telegram: 87775430791.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
