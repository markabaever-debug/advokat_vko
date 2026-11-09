"use client";

import { trackLead } from "@/lib/tracking";
import { ui, type Lang } from "@/lib/i18n";

// Кнопка «Позвонить» с целью аналитики call (та же, что в hero/StickyBar).
export function CallButton({
  phoneCall,
  lang = "ru",
  className = "btn btnPrimary",
}: {
  phoneCall: string;
  lang?: Lang;
  className?: string;
}) {
  const t = ui[lang];
  return (
    <a className={className} href={`tel:${phoneCall}`} onClick={() => trackLead("phone")}>
      📞 {t.call}
    </a>
  );
}
