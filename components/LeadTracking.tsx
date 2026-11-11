"use client";

import { useEffect } from "react";
import { trackGenerateLead } from "@/lib/tracking";

// Глобальный обработчик кликов: на любой ссылке <a> с tel: или WhatsApp
// (wa.me / api.whatsapp.com) отправляет в GA4 событие generate_lead с параметром
// method ("phone"/"whatsapp"). Работает на всех страницах (RU и /kz). WhatsApp-кнопки
// (не ссылки) обрабатываются отдельно в trackAndOpen (lib/tracking.ts).
export function LeadTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackGenerateLead("phone");
      } else if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
        trackGenerateLead("whatsapp");
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
