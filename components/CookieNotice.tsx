"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ui, type Lang } from "@/lib/i18n";
import { YM_COUNTER_ID } from "@/lib/tracking";

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

// Загружает Яндекс.Метрику один раз. Вызывается только при согласии и только если
// номер счётчика задан (YM_COUNTER_ID !== 0). Цели «call»/«whatsapp» — в lib/tracking.ts.
function loadMetrika() {
  if (typeof window === "undefined" || window.__ymLoaded || !YM_COUNTER_ID) return;
  window.__ymLoaded = true;
  window.ym = window.ym || function (...args: any[]) {
    ((window.ym as any).a = (window.ym as any).a || []).push(args);
  };
  (window.ym as any).l = Number(new Date());
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://mc.yandex.ru/metrika/tag.js";
  document.head.appendChild(s);
  window.ym(YM_COUNTER_ID, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true });
}

// Аналитика после согласия: Google Tag Manager + Яндекс.Метрика.
function loadAnalytics() {
  loadGtm();
  loadMetrika();
}

export function CookieNotice({ lang = "ru" }: { lang?: Lang }) {
  const t = ui[lang];
  const privacyHref = lang === "kk" ? "/kz/politika-konfidencialnosti" : "/politika-konfidencialnosti";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch {
      // доступ к хранилищу запрещён — считаем согласие неданным
    }

    if (choice === "granted") {
      loadAnalytics();
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
    loadAnalytics();
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
      aria-label={t.cookieDialog}
    >
      <div className="cookieNoticeText">
        {t.cookieBefore}
        <Link href={privacyHref}>{t.cookieLink}</Link>
        {t.cookieAfter}
      </div>
      <div className="cookieNoticeButtons">
        <button type="button" className="btn btnPrimary cookieNoticeBtn" onClick={accept}>
          {t.accept}
        </button>
        <button type="button" className="btn cookieNoticeBtn" onClick={decline}>
          {t.decline}
        </button>
      </div>
    </div>
  );
}
