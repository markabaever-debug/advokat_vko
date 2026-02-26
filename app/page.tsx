export default function Home() {
  const phoneRaw = "7775430791";
  // WhatsApp требует международный формат без "8" и без "+"
  const waPhone = "77775430791";

  const waText = encodeURIComponent(
    "Здравствуйте! Нужна консультация адвоката?"
  );

  const waLink = `https://wa.me/${waPhone}?text=${waText}`;
  const tgLink = "https://t.me/ai_advokat_kz_bot";

  return (
    <main className="container">
      <header className="nav">
        <div className="brand">
          ⚖️ <span>Advokat VKO</span>
          <span className="badge">Усть-Каменогорск • ВКО</span>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn" href={tgLink} target="_blank" rel="noreferrer">
            🤖 Telegram
          </a>

          <a className="btn" href={waLink} target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="panel">
          <h1 className="h1">Адвокат в Усть-Каменогорске</h1>
          <p className="sub">
            Гражданские и уголовные дела. Судебная защита, документы,
            консультация онлайн и очно. Быстро разберём ситуацию и предложим план
            действий.
          </p>

          <div className="kpis">
            <div className="kpi">✅ Конфиденциально</div>
            <div className="kpi">✅ Срочные дела</div>
            <div className="kpi">✅ Суд / переговоры</div>
            <div className="kpi">RU • KZ</div>
          </div>

          <div className="ctaRow">
            <a className="btn btnPrimary" href={`tel:+7${phoneRaw}`}>
              📞 Позвонить
            </a>

            <a className="btn" href={waLink} target="_blank" rel="noreferrer">
              💬 Написать в WhatsApp
            </a>

            <a className="btn" href={tgLink} target="_blank" rel="noreferrer">
              🤖 Открыть Telegram-бот
            </a>
          </div>

          <div className="grid">
            <div className="card">
              <h3>Уголовные дела</h3>
              <p>
                Защита подозреваемых и обвиняемых, сопровождение на следствии,
                жалобы и ходатайства.
              </p>
            </div>

            <div className="card">
              <h3>Гражданские споры</h3>
              <p>
                Долги, ущерб, договоры, наследство, жильё. Представительство в
                суде.
              </p>
            </div>

            <div className="card">
              <h3>Семейные дела</h3>
              <p>Развод, алименты, раздел имущества, порядок общения с детьми.</p>
            </div>
          </div>
        </div>

        <aside className="panel">
          <h3 className="h3">Быстрая консультация</h3>
          <p className="muted">Напишите в WhatsApp/Telegram:</p>
          <ol className="list">
            <li>Коротко опишите ситуацию</li>
            <li>Прикрепите документы/фото (если есть)</li>
            <li>Укажите город: Усть-Каменогорск</li>
          </ol>

          <div className="ctaRow">
            <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
            <a className="btn" href={tgLink} target="_blank" rel="noreferrer">
              🤖 Telegram
            </a>
          </div>

          <div className="contacts">
            <h4>Контакты</h4>
            <div>📞 {phoneRaw}</div>
            <div>📍 Усть-Каменогорск (ВКО)</div>
          </div>
        </aside>
      </section>

      <section className="panel" style={{ marginTop: 16 }}>
        <h3 className="h3">Услуги</h3>
        <ul className="list">
          <li>Составление исков, жалоб, ходатайств</li>
          <li>Судебное представительство и сопровождение сделок</li>
          <li>Апелляция/кассация, обжалование решений</li>
          <li>Досудебные переговоры и претензии</li>
        </ul>

        <p className="muted" style={{ marginTop: 10 }}>
          Информация на сайте носит справочный характер и не является публичной
          офертой.
        </p>
      </section>
    </main>
  );
}
