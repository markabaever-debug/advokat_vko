"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type DocItem = {
  id: string;
  title: string;
  pdf: string;
  thumb: string;
};

export default function Home() {
  const shortName = "Маркабаев Е.Б.";
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорск";
  const region = "ВКО";

  const phoneDisplay = "7775430791";
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";

  const waText = encodeURIComponent("Здравствуйте! Нужна консультация адвоката");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  const tgLink = "https://t.me/ai_advokat_kz_bot";

  const sendEvent = (eventName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName);
    }
  };

  const handleExternalClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    eventName: string
  ) => {
    e.preventDefault();

    sendEvent(eventName);

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <main className="container">
      <header className="nav">
        <div className="brand">
          ⚖️ {shortName}
          <span className="badge">
            {city} • {region}
          </span>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <a
            className="btn btnTG"
            href={tgLink}
            onClick={(e) =>
              handleExternalClick(e, tgLink, "click_telegram")
            }
          >
            Telegram
          </a>
          <a
            className="btn btnWA"
            href={waLink}
            onClick={(e) =>
              handleExternalClick(e, waLink, "click_whatsapp")
            }
          >
            WhatsApp
          </a>
        </div>

        <a
          className="btn btnPrimary"
          href={`tel:${phoneCall}`}
          onClick={() => sendEvent("click_phone")}
        >
          📞 Позвонить
        </a>
      </header>
    </main>
  );
}
