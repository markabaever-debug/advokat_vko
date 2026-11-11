"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { Lang } from "@/lib/i18n";

// Содержимое памятки (объёмный двуязычный текст) вынесено в MemoBody и грузится
// динамически только при открытии окна — это убирает его из основного бандла и
// снижает нагрузку на гидратацию. Внешний вид и тексты не меняются.
const MemoBody = dynamic(() => import("./MemoBody"), { ssr: false });

// Плавающая кнопка «Памятка при задержании» и модальное окно с её содержимым.
// Двуязычная: lang="ru" (по умолчанию) — русский текст, lang="kk" — казахский.
export function MemoButton({
  fullName,
  phoneCall,
  waLink,
  lang = "ru",
}: {
  fullName: string;
  phoneCall: string;
  waLink: string;
  lang?: Lang;
}) {
  const [memoOpen, setMemoOpen] = useState(false);
  const isKk = lang === "kk";

  const chrome = isKk
    ? {
        floatBtn: "🚨 ҰСТАП АЛУ ЖӘНЕ ЖАУАП АЛУ КЕЗІНДЕГІ ЖАДНАМА — ДЕРЕУ ОҚЫҢЫЗ",
        openAria: "Ұстап алу және жауап алу кезіндегі жаднаманы ашу",
        title: "🚨 Ұстап алу және жауап алу кезіндегі жаднама",
        close: "✕ Жабу",
        closeAria: "Жабу",
      }
    : {
        floatBtn: "🚨 ПАМЯТКА ПРИ ЗАДЕРЖАНИИ И ДОПРОСЕ — ПРОЧИТАТЬ НЕМЕДЛЕННО",
        openAria: "Открыть памятку при задержании и допросе",
        title: "🚨 Памятка при задержании и допросе",
        close: "✕ Закрыть",
        closeAria: "Закрыть",
      };

  return (
    <>
      {/* Плавающая кнопка — Памятка при задержании */}
      <div className="memoFloatingWrap">
        <button
          type="button"
          className="memoFloatingBtn"
          onClick={() => setMemoOpen(true)}
          aria-label={chrome.openAria}
        >
          {chrome.floatBtn}
        </button>
      </div>

      {/* Модальное окно с памяткой */}
      {memoOpen && (
        <div
          className="modalOverlay"
          onClick={() => setMemoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="memo-title"
        >
          <div
            className="modalPanel memoModalPanel"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div className="modalHeader">
              <h2 id="memo-title" className="memoModalTitle">
                {chrome.title}
              </h2>
              <button
                type="button"
                className="modalBtn"
                onClick={() => setMemoOpen(false)}
                aria-label={chrome.closeAria}
              >
                {chrome.close}
              </button>
            </div>
            <div className="memoModalBody">
              <MemoBody lang={lang} fullName={fullName} phoneCall={phoneCall} waLink={waLink} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
