"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Переключатель «Рус / Қаз». Сам определяет текущий язык по пути и формирует ссылку на
// парную страницу: /X ↔ /kz/X. Ставится в hero и в закреплённой полосе (StickyBar).
// Верхнюю шапку не возвращает — это компактный встроенный элемент.
export function LangSwitch() {
  const pathname = usePathname() || "/";
  const isKz = pathname === "/kz" || pathname.startsWith("/kz/");

  const ruPath = isKz ? (pathname === "/kz" ? "/" : pathname.slice(3)) : pathname;
  const kzPath = isKz ? pathname : pathname === "/" ? "/kz" : `/kz${pathname}`;

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
