import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { StructuredData } from "@/components/StructuredData";
import { SiteFooterScripts } from "@/components/SiteFooterScripts";
import { kzBaseMetadata } from "@/lib/metadata";
import "../globals.css";

// Корневой layout казахской версии (подпуть /kz). Язык — kk (SSR <html lang="kk">).
// Метаданные — kzBaseMetadata: og:locale = kk_KZ и казахские тексты Open Graph/Twitter.
export const metadata: Metadata = kzBaseMetadata;

export default function KzRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk">
      <body>
        <StructuredData lang="kk" />
        {children}
        <SiteFooterScripts lang="kk" />
        <Analytics />
      </body>
    </html>
  );
}
