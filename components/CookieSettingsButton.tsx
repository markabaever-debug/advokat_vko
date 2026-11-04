"use client";

// Маленькая клиентская кнопка в подвале — открывает баннер настроек cookie.
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footerLinkBtn"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      Настройки cookie
    </button>
  );
}
