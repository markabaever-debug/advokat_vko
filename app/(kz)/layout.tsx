import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooterScripts } from "@/components/SiteFooterScripts";
import { TranslationPending } from "@/components/TranslationPending";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

// Корневой layout казахской версии (подпуть /kz). Язык — kk (SSR <html lang="kk">).
// Пока тексты русские с плашкой «перевод готовится» (TranslationPending вверху body).
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
        <TranslationPending />
        {children}
        <SiteFooterScripts />
      </body>
    </html>
  );
}
