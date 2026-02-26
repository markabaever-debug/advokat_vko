"use client";

import { useEffect, useMemo, useState } from "react";

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
    setOpenIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + docs.length) % docs.length; // зацикливание
    });
  };

  const goNext = () => {
    if (openIndex === null) return;
    setOpenIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % docs.length; // зацикливание
    });
  };

  // ESC закрывает, стрелки листают
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (openIndex === null) return;

      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    if (openIndex !== null) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <a className="btn" href={tgLink} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a className="btn" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }}>
        <div
          style={{
            display: "flex",
            gap: 30,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 className="h1">{shortName}</h1>

            <p className="sub">
              Адвокат, {city} ({region}). Гражданские и уголовные дела. Судебная
              защита, документы, консультация онлайн и очно.
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

              <a className="btn" href={waLink} target="_blank" rel="noreferrer">
                💬 WhatsApp
              </a>

              <a className="btn" href={tgLink} target="_blank" rel="noreferrer">
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
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
          <div className="serviceCard">
            <h3 className="serviceCardTitle">⚖️ Уголовные дела</h3>
            <p className="serviceCardText">
              Защита и представительство по уголовным делам, участие на стадии
              следствия и суда.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">📄 Гражданские дела</h3>
            <p className="serviceCardText">
              Взыскание долгов по расписке, семейные и наследственные дела, споры
              о собственности.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">🚗 Административные дела</h3>
            <p className="serviceCardText">
              ДТП, нарушения ПДД, обжалование штрафов, защита при лишении
              водительских прав.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">🏛 Дела по АППК</h3>
            <p className="serviceCardText">
              Споры с государственными органами, оспаривание решений и действий
              должностных лиц.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Об адвокате</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          {fullName}. Консультации и ведение дел: уголовные, гражданские, семейные
          споры, подготовка процессуальных документов, представительство в суде.
        </p>

        <div style={{ marginTop: 20 }}>
          <strong>Контакты:</strong>
          <div>📞 {phoneDisplay}</div>
          <div>
            📍 {city} ({region})
          </div>
          <div>Telegram: t.me/ai_advokat_kz_bot</div>
        </div>

        <h3 style={{ marginTop: 25 }}>Документы и сертификаты</h3>
        <p className="muted" style={{ marginTop: 8 }}>
          Нажмите на документ для просмотра. В окне просмотра: ← → (листание), Esc (закрыть).
        </p>

        <div className="docsGrid">
          {docs.map((d, idx) => (
            <button
              key={d.id}
              type="button"
              className="docCardBtn"
              onClick={() => setOpenIndex(idx)}
              aria-label={`Открыть: ${d.title}`}
            >
              <div className="docThumb">
                <img src={d.thumb} alt={d.title} />
              </div>
              <div className="docLabel">{d.title}</div>
            </button>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        Информация на сайте носит справочный характер и не является публичной
        офертой.
      </footer>

      {/* MODAL */}
      {openDoc && openIndex !== null && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={openDoc.title}
          onClick={() => setOpenIndex(null)}
        >
          <div className="modalPanel" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <div>
                <div className="modalTitle">{openDoc.title}</div>
                <div className="modalHint">← → листать • Esc закрыть</div>
              </div>

              <div className="modalActions">
                <button type="button" className="modalBtn" onClick={goPrev} title="Предыдущий (←)">
                  ← Назад
                </button>

                <div className="modalCounter">
                  {openIndex + 1}/{docs.length}
                </div>

                <button type="button" className="modalBtn" onClick={goNext} title="Следующий (→)">
                  Вперёд →
                </button>

                <a
                  className="modalBtn"
                  href={openDoc.pdf}
                  target="_blank"
                  rel="noreferrer"
                  title="Открыть PDF в новой вкладке"
                >
                  Открыть PDF
                </a>

                <button
                  type="button"
                  className="modalBtn"
                  onClick={() => setOpenIndex(null)}
                  title="Закрыть (Esc)"
                >
                  ✕ Закрыть
                </button>
              </div>
            </div>

            <div className="modalBody">
              <iframe
                key={openDoc.pdf}
                className="modalFrame"
                src={`${openDoc.pdf}#view=FitH`}
                title={openDoc.title}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
