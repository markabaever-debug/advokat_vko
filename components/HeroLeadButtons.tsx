"use client";

import { trackLead, trackAndOpen } from "@/lib/tracking";

// Кнопки «Позвонить»/«WhatsApp» в hero главной с отправкой события аналитики.
export function HeroLeadButtons({
  phoneCall,
  waLink,
}: {
  phoneCall: string;
  waLink: string;
}) {
  return (
    <div className="ctaRow" style={{ marginTop: 20 }}>
      <a
        className="btn btnPrimary"
        href={`tel:${phoneCall}`}
        onClick={() => trackLead("phone")}
      >
        📞 Позвонить
      </a>

      <button
        type="button"
        className="btn btnWA"
        onClick={() => trackAndOpen("whatsapp", waLink)}
      >
        💬 WhatsApp
      </button>
    </div>
  );
}
