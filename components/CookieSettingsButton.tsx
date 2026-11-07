"use client";

import { ui, type Lang } from "@/lib/i18n";

// Маленькая клиентская кнопка в подвале — открывает баннер настроек cookie.
export function CookieSettingsButton({ lang = "ru" }: { lang?: Lang }) {
  return (
    <button
      type="button"
      className="footerLinkBtn"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      {ui[lang].cookieSettings}
    </button>
  );
}
