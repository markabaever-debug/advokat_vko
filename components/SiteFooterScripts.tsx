import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { CookieNotice } from "@/components/CookieNotice";
import { LeadTracking } from "@/components/LeadTracking";
import { type Lang } from "@/lib/i18n";

// Общий «низ» <body> для обеих языковых версий: плавающие кнопки (на компьютере),
// баннер cookie и учёт кликов по звонку/WhatsApp.
export function SiteFooterScripts({ lang = "ru" }: { lang?: Lang }) {
  return (
    <>
      <FloatingContactButtons lang={lang} />
      <CookieNotice lang={lang} />
      <LeadTracking />
    </>
  );
}
