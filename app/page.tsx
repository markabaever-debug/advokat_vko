"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer?: any[];
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

  const pushEvent = (eventName: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName });
  };

  const handleExternalClick = (
    url: string,
    eventName: string
  ) => {
    pushEvent(eventName);

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 120);
  };

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
      {/* HEADER */}
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
            onClick={() => handleExternalClick(tgLink, "click_telegram")}
          >
            Telegram
          </a>

          <a
            className="btn btnWA"
            href={waLink}
            onClick={() => handleExternalClick(waLink, "click_whatsapp")}
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }}>
        <div style={{ display: "flex", gap: 30, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 className="h1">{shortName}</h1>

            <p className="sub">
              Адвокат, {city} ({region}). Гражданские и уголовные дела.
              Судебная защита, документы, консультация онлайн и очно.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Конфиденциально</div>
              <div className="kpi">✅ Срочные дела</div>
              <div className="kpi">✅ Суд / переговоры</div>
            </div>

            <div className="ctaRow" style={{ marginTop: 20 }}>
              <a
                className="btn btnPrimary"
                href={`tel:${phoneCall}`}
                onClick={() => pushEvent("click_phone")}
              >
                📞 Позвонить
              </a>

              <a
                className="btn btnWA"
                href={waLink}
                onClick={() => handleExternalClick(waLink, "click_whatsapp")}
              >
                💬 WhatsApp
              </a>

              <a
                className="btn btnTG"
                href={tgLink}
                onClick={() => handleExternalClick(tgLink, "click_telegram")}
              >
                🤖 Telegram
              </a>
            </div>
          </div>

          <div
            style={{
              width: 160,
              height: 220,
              borderRadius: 14,
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.15)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
              flexShrink: 0,
            }}
          >
            <img
              src="/me.jpg"
              alt="Адвокат Маркабаев Е.Б."
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Основные направления</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Юридическая помощь в {city} ({region})
        </p>

        <div className="servicesGrid" style={{ marginTop: 20 }}>
          <Link href="/ugolovnyj-advokat-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">⚖️ Уголовные дела</h3>
            <p className="serviceCardText">
              Защита и представительство по уголовным делам.
            </p>
          </Link>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">📄 Гражданские дела</h3>
            <p className="serviceCardText">
              Взыскание долгов, семейные и наследственные споры.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">🚗 Административные дела</h3>
            <p className="serviceCardText">
              ДТП, обжалование штрафов, лишение прав.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">🏛 Дела по АППК</h3>
            <p className="serviceCardText">
              Споры с госорганами.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Об адвокате</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          {fullName}. Консультации и ведение дел:
          уголовные, гражданские, семейные споры.
        </p>
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>
    </main>
  );
}
