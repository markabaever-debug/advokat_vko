"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type DocItem = {
  id: string;
  title: string;
  pdf: string;
  thumb: string;
};

declare global {
  interface Window {
    dataLayer: any[];
  }
}

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

  // ===============================
  // TRACKING LAYER (архитектурно правильно)
  // ===============================

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
      });
    }
  };

  const trackAndRedirect = (eventName: string, url: string) => {
    trackEvent(eventName);

    // Даём GTM 300мс на отправку
    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  };

  const handlePhoneClick = () => {
    trackEvent("lead_phone_click");
  };

  const handleWhatsAppClick = () => {
    trackAndRedirect("lead_whatsapp_click", waLink);
  };

  const handleTelegramClick = () => {
    trackAndRedirect("lead_telegram_click", tgLink);
  };

  // ===============================

  const docs: DocItem[] = useMemo(
    () => [
      {
        id: "license",
        title: "Лицензия на занятие адвокатской деятельностью",
        pdf: "/docs/license.pdf",
        thumb: "/docs/thumbs/license.jpg",
      },
      {
        id: "insurance",
        title: "Страхование адвокатской деятельности",
        pdf: "/docs/insurance.pdf",
        thumb: "/docs/thumbs/insurance.jpg",
      },
      {
        id: "cert1",
        title: "Повышение квалификации (1)",
        pdf: "/docs/cert-1.pdf",
        thumb: "/docs/thumbs/cert-1.jpg",
      },
      {
        id: "cert2",
        title: "Повышение квалификации (2)",
        pdf: "/docs/cert-2.pdf",
        thumb: "/docs/thumbs/cert-2.jpg",
      },
      {
        id: "cert3",
        title: "Повышение квалификации (3)",
        pdf: "/docs/cert-3.pdf",
        thumb: "/docs/thumbs/cert-3.jpg",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openDoc = openIndex === null ? null : docs[openIndex];

  const goPrev = () => {
    if (openIndex === null) return;
    setOpenIndex((prev) =>
      prev === null ? null : (prev - 1 + docs.length) % docs.length
    );
  };

  const goNext = () => {
    if (openIndex === null) return;
    setOpenIndex((prev) =>
      prev === null ? null : (prev + 1) % docs.length
    );
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    if (openIndex !== null)
      window.addEventListener("keydown", onKeyDown);

    return () =>
      window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

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
          <button className="btn btnTG" onClick={handleTelegramClick}>
            Telegram
          </button>
          <button className="btn btnWA" onClick={handleWhatsAppClick}>
            WhatsApp
          </button>
        </div>
      </header>

      <section className="panel" style={{ marginTop: 20 }}>
        <div style={{ display: "flex", gap: 30, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 className="h1">{shortName}</h1>

            <p className="sub">
              Адвокат, {city} ({region}). Гражданские и уголовные дела. Судебная защита,
              документы, консультация онлайн и очно.
            </p>

            <div className="ctaRow" style={{ marginTop: 20 }}>
              <a
                className="btn btnPrimary"
                href={`tel:${phoneCall}`}
                onClick={handlePhoneClick}
              >
                📞 Позвонить
              </a>

              <button className="btn btnWA" onClick={handleWhatsAppClick}>
                💬 WhatsApp
              </button>

              <button className="btn btnTG" onClick={handleTelegramClick}>
                🤖 Telegram
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
