export default function Home() {
  const shortName = "Маркабаев Е.Б.";
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорск";
  const region = "ВКО";

  const phoneDisplay = "7775430791";
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";

  const waText = encodeURIComponent(
    "Здравствуйте! Нужна консультация адвоката"
  );

  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  const tgLink = "https://t.me/ai_advokat_kz_bot";

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
          <a className="btn" href={tgLink} target="_blank">Telegram</a>
          <a className="btn" href={waLink} target="_blank">WhatsApp</a>
        </div>
      </header>

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }}>

        <div style={{ display: "flex", gap: 30, alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* LEFT SIDE */}
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
              <a className="btn btnPrimary" href={`tel:${phoneCall}`}>
                📞 Позвонить
              </a>

              <a className="btn" href={waLink} target="_blank">
                💬 WhatsApp
              </a>

              <a className="btn" href={tgLink} target="_blank">
                🤖 Telegram
              </a>
            </div>

          </div>

          {/* PHOTO RIGHT */}
          <div
            style={{
              width: 160,
              height: 220,
              borderRadius: 14,
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.15)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
              flexShrink: 0
            }}
          >
            <img
              src="/me.jpg"
              alt="Адвокат Маркабаев Е.Б."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="panel" style={{ marginTop: 30 }}>

        <h2 className="h2">Об адвокате</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          {fullName}. Консультации и ведение дел:
          уголовные, гражданские, семейные споры,
          подготовка процессуальных документов,
          представительство в суде.
        </p>

        <div style={{ marginTop: 20 }}>
          <strong>Контакты:</strong>
          <div>📞 {phoneDisplay}</div>
          <div>📍 {city} ({region})</div>
          <div>Telegram: t.me/ai_advokat_kz_bot</div>
        </div>

        <h3 style={{ marginTop: 25 }}>Документы и сертификаты</h3>

        <ul style={{ marginTop: 10 }}>
          <li>
            <a href="/docs/udostoverenie.pdf" target="_blank">
              Удостоверение адвоката (PDF)
            </a>
          </li>
          <li>
            <a href="/docs/strahovka.pdf" target="_blank">
              Страховка адвокатской деятельности (PDF)
            </a>
          </li>
          <li>
            <a href="/docs/sertifikat-kursy.pdf" target="_blank">
              Сертификат повышения квалификации (PDF)
            </a>
          </li>
        </ul>

      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>

    </main>
  );
}
