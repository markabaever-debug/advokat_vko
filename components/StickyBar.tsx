"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  phoneCall: string;
  waLink: string;
  // На подстраницах показываем ещё и кнопку «← На главную»
  showHome?: boolean;
};

// Закреплённая компактная полоса сверху. Появляется, когда hero-блок
// (элемент с data-hero) полностью ушёл за верхнюю границу экрана, и скрывается,
// когда hero снова виден. Пока полоса видна, на мобильном прячем плавающие
// кнопки (см. body[data-sticky-visible] в globals.css).
export function StickyBar({ phoneCall, waLink, showHome = false }: Props) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;

    const io = new IntersectionObserver(
      (entries) => {
        setShown(!entries[0].isIntersecting);
      },
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.dataset.stickyVisible = shown ? "true" : "false";
    return () => {
      delete document.body.dataset.stickyVisible;
    };
  }, [shown]);

  return (
    <div className="stickyBar" data-shown={shown} aria-hidden={!shown}>
      <div className="stickyBarInner">
        <div className="stickyBrand">
          <img src="/me.jpg" alt="" className="stickyAvatar" />
          <span className="stickyName">
            <span className="stickyNameFull">Маркабаев Е.Б., адвокат</span>
            <span className="stickyNameShort">Маркабаев Е.Б.</span>
          </span>
        </div>

        <div className="stickyActions">
          {showHome && (
            <Link
              href="/"
              className="btn stickyBtn stickyBtnHome"
              aria-label="На главную"
              tabIndex={shown ? 0 : -1}
            >
              <span className="stickyBtnIcon" aria-hidden>←</span>
              <span className="stickyBtnLabel">На главную</span>
            </Link>
          )}

          <a
            href={`tel:${phoneCall}`}
            className="btn btnPrimary stickyBtn"
            aria-label="Позвонить"
            tabIndex={shown ? 0 : -1}
          >
            <span className="stickyBtnIcon" aria-hidden>📞</span>
            <span className="stickyBtnLabel">Позвонить</span>
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn btnWA stickyBtn"
            aria-label="WhatsApp"
            tabIndex={shown ? 0 : -1}
          >
            <span className="stickyBtnIcon" aria-hidden>💬</span>
            <span className="stickyBtnLabel">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
