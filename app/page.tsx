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
              Защита и представительство по уголовным делам,
              участие на стадии следствия и суда.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">📄 Гражданские дела</h3>
            <p className="serviceCardText">
              Взыскание долгов по расписке, семейные и наследственные дела,
              споры о собственности.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">🚗 Административные дела</h3>
            <p className="serviceCardText">
              ДТП, нарушения ПДД, обжалование штрафов,
              защита при лишении водительских прав.
            </p>
          </div>

          <div className="serviceCard">
            <h3 className="serviceCardTitle">🏛 Дела по АППК</h3>
            <p className="serviceCardText">
              Споры с государственными органами,
              оспаривание решений и действий должностных лиц.
            </p>
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

        <div className="docsGrid">

          {/* Лицензия */}
          <a className="docCard" href="/docs/license.pdf" target="_blank" rel="noreferrer">
            <div className="docThumb">
              <img src="/docs/thumbs/license.jpg" alt="Лицензия на занятия адвокатской деятельностью" />
            </div>
            <div className="docLabel">Лицензия</div>
          </a>

          {/* Страховка */}
          <a className="docCard" href="/docs/insurance.pdf" target="_blank" rel="noreferrer">
            <div className="docThumb">
              <img src="/docs/thumbs/insurance.jpg" alt="Страховка адвокатской деятельности" />
            </div>
            <div className="docLabel">Страховка</div>
          </a>

          {/* Повышение квалификации 1 */}
          <a className="docCard" href="/docs/cert-1.pdf" target="_blank" rel="noreferrer">
            <div className="docThumb">
              <img src="/docs/thumbs/cert-1.jpg" alt="Повышение квалификации 1" />
            </div>
            <div className="docLabel">Повышение квалификации</div>
          </a>

          {/* Повышение квалификации 2 */}
          <a className="docCard" href="/docs/cert-2.pdf" target="_blank" rel="noreferrer">
            <div className="docThumb">
              <img src="/docs/thumbs/cert-2.jpg" alt="Повышение квалификации 2" />
            </div>
            <div className="docLabel">Повышение квалификации</div>
          </a>

          {/* Повышение квалификации 3 */}
          <a className="docCard" href="/docs/cert-3.pdf" target="_blank" rel="noreferrer">
            <div className="docThumb">
              <img src="/docs/thumbs/cert-3.jpg" alt="Повышение квалификации 3" />
            </div>
            <div className="docLabel">Повышение квалификации</div>
          </a>

        </div>

      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>

    </main>
  );
}
