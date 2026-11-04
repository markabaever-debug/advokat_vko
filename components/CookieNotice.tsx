"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent"; // "granted" | "denied"
const GTM_ID = "GTM-MNCSPZM6";

declare global {
  interface Window {
    __gtmLoaded?: boolean;
  }
}

// Загружает Google Tag Manager один раз. Вызывается только при согласии.
function loadGtm() {
  if (typeof window === "undefined" || window.__gtmLoaded) return;
  window.__gtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch {
      // доступ к хранилищу запрещён — считаем согласие неданным
    }

    if (choice === "granted") {
      loadGtm();
    } else if (choice !== "denied") {
      setVisible(true); // выбор ещё не сделан — показываем уведомление
    }

    // Ссылка «Настройки cookie» в подвале снова открывает уведомление
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "granted");
    } catch {
      /* не удалось сохранить — аналитика включится только на эту сессию */
    }
    loadGtm();
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "denied");
    } catch {
      /* не удалось сохранить — просто закрываем */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookieNotice"
      role="dialog"
      aria-label="Уведомление об аналитике и файлах cookie"
    >
      <div className="cookieNoticeText">
        Сайт может использовать файлы cookie и сервисы аналитики Google (серверы за
        рубежом) для подсчёта посещений. Подробнее — в{" "}
        <Link href="/politika-konfidencialnosti">политике конфиденциальности</Link>.
      </div>
      <div className="cookieNoticeButtons">
        <button type="button" className="btn btnPrimary cookieNoticeBtn" onClick={accept}>
          Принять
        </button>
        <button type="button" className="btn cookieNoticeBtn" onClick={decline}>
          Отклонить
        </button>
      </div>
    </div>
  );
}
