"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

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

  // 🔥 Задержка открытия внешней ссылки (чтобы GTM успел сработать)
  const handleExternalClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 250);
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
            onClick={(e) => handleExternalClick(e, tgLink)}
          >
            Telegram
          </a>
          <a
            className="btn btnWA"
            href={waLink}
            onClick={(e) => handleExternalClick(e, waLink)}
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
              Адвокат, {city} ({region}). Гражданские и уголовные дела. Судебная защита,
              документы, консультация онлайн и очно.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Конфиденциально</div>
              <div className="kpi">✅ Срочные дела</div>
              <div className="kpi">✅ Суд / переговоры</div>
            </div>

            <div className="ctaRow" style={{ marginTop: 20 }}>
              <a className="btn btnPrimary" href={`tel:${phoneCall}`}>
                📞 Позвонить
              </a>

              <a
                className="btn btnWA"
                href={waLink}
                onClick={(e) => handleExternalClick(e, waLink)}
              >
                💬 WhatsApp
              </a>

              <a
                className="btn btnTG"
                href={tgLink}
                onClick={(e) => handleExternalClick(e, tgLink)}
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

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>
    </main>
  );
}
