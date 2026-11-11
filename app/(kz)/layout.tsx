import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooterScripts } from "@/components/SiteFooterScripts";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

// Корневой layout казахской версии (подпуть /kz). Язык — kk (SSR <html lang="kk">).
// Страницы переведены на казахский (кроме памятки на /kz/ugolovnyj… — цитаты УПК/
// Конституции будут из официального казахского текста отдельно).
export const metadata: Metadata = baseMetadata;

export default function KzRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk">
      <body>
        <StructuredData />
        {children}
        <SiteFooterScripts lang="kk" />
        <Analytics />
      </body>
    </html>
  );
}
