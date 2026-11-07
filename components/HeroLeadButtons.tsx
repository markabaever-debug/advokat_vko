"use client";

import { trackLead, trackAndOpen } from "@/lib/tracking";
import { ui, type Lang } from "@/lib/i18n";

// Кнопки «Позвонить»/«WhatsApp» в hero главной с отправкой события аналитики.
export function HeroLeadButtons({
  phoneCall,
  waLink,
  lang = "ru",
}: {
  phoneCall: string;
  waLink: string;
  lang?: Lang;
}) {
  const t = ui[lang];
  return (
    <div className="ctaRow" style={{ marginTop: 20 }}>
      <a
        className="btn btnPrimary"
        href={`tel:${phoneCall}`}
        onClick={() => trackLead("phone")}
      >
        📞 {t.call}
      </a>

      <button
        type="button"
        className="btn btnWA"
        onClick={() => trackAndOpen("whatsapp", waLink)}
      >
        💬 {t.whatsapp}
      </button>
    </div>
  );
}
