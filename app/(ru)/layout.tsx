import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooterScripts } from "@/components/SiteFooterScripts";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

// Корневой layout русской версии (в корне сайта). Язык — ru.
// Казахская версия — отдельный корневой layout app/(kz)/layout.tsx с lang="kk".
export const metadata: Metadata = baseMetadata;

export default function RuRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StructuredData />
        {children}
        <SiteFooterScripts />
        <Analytics />
      </body>
    </html>
  );
}
