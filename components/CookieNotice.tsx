"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-notice-accepted";

export function CookieNotice() {
  // По умолчанию скрыто, чтобы при включённом согласии не мелькало при загрузке.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") setVisible(true);
    } catch {
      // приватный режим / доступ к хранилищу запрещён — показываем уведомление
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // не удалось сохранить — просто закрываем на эту сессию
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookieNotice" role="dialog" aria-label="Уведомление об аналитике и cookie">
      <div className="cookieNoticeText">
        Сайт использует файлы cookie и сервис аналитики Google Tag Manager для
        подсчёта посещений. Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
        <Link href="/politika-konfidencialnosti">политикой конфиденциальности</Link>.
      </div>
      <button type="button" className="btn btnPrimary cookieNoticeBtn" onClick={accept}>
        Понятно
      </button>
    </div>
  );
}
