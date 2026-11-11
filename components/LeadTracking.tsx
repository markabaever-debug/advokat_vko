"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/tracking";

// Глобальный обработчик кликов: по любой ссылке <a> с tel: отправляет в dataLayer
// событие lead_phone_click, по ссылке WhatsApp (wa.me / api.whatsapp.com) —
// lead_whatsapp_click (на эти события настроены теги GA4 и Google Ads в GTM).
// Покрывает все ссылки сразу (шапка/sticky, hero, блоки, памятка, контакты), поэтому
// отдельные onClick на ссылках не нужны — ровно одно событие на клик. WhatsApp-кнопки
// (<button>, не ссылки) обрабатываются отдельно в trackAndOpen (lib/tracking.ts).
export function LeadTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackLead("phone");
      } else if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
        trackLead("whatsapp");
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
