"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FAQ_PATH } from "@/lib/faqPaths";

// Пары страниц с разными адресами на языках (остальные — по правилу /X ↔ /kz/X).
const PAIRS: [string, string][] = [[FAQ_PATH.ru, FAQ_PATH.kk]];

// Переключатель «Рус / Қаз». Сам определяет текущий язык по пути и формирует ссылку на
// парную страницу: /X ↔ /kz/X (или из PAIRS). Ставится в hero и в закреплённой полосе
// (StickyBar). Верхнюю шапку не возвращает — это компактный встроенный элемент.
export function LangSwitch() {
  const pathname = usePathname() || "/";
  const isKz = pathname === "/kz" || pathname.startsWith("/kz/");
  const pair = PAIRS.find(([ru, kz]) => pathname === ru || pathname === kz);

  const ruPath = pair ? pair[0] : isKz ? (pathname === "/kz" ? "/" : pathname.slice(3)) : pathname;
  const kzPath = pair ? pair[1] : isKz ? pathname : pathname === "/" ? "/kz" : `/kz${pathname}`;

  return (
    <div className="langSwitch" role="group" aria-label="Язык сайта / Сайт тілі">
      <Link
        href={ruPath}
        className={`langSwitchBtn${!isKz ? " langSwitchActive" : ""}`}
        aria-current={!isKz ? "true" : undefined}
        hrefLang="ru-KZ"
      >
        Рус
      </Link>
      <Link
        href={kzPath}
        className={`langSwitchBtn${isKz ? " langSwitchActive" : ""}`}
        aria-current={isKz ? "true" : undefined}
        hrefLang="kk-KZ"
      >
        Қаз
      </Link>
    </div>
  );
}
