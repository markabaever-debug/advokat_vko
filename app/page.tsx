export default function Home() {
  return (
    <main className="container">
      <header className="nav">
        <div className="brand">
          ⚖️ <span>Advokat VKO</span>
          <span className="badge">Усть-Каменогорск • ВКО</span>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn" href="https://t.me/ai_advokat_kz_bot" target="_blank" rel="noreferrer">
            🤖 Telegram
          </a>
          <a className="btn" href="https://wa.me/77775430791" target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="panel">
          <h1 className="h1">Адвокат в Усть-Каменогорске</h1>
          <p className="sub">
            Гражданские и уголовные дела. Судебная защита, документы, консультация онлайн и очно.
            Быстро разберём ситуацию и предложим план действий.
          </p>

          <div className="kpis">
            <div className="kpi">✅ Конфиденциально</div>
            <div className="kpi">✅ Срочные дела</div>
            <div className="kpi">✅ Суд / переговоры</div>
            <div className="kpi">RU • KZ</div>
          </div>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="tel:+77775430791">📞 Позвонить</a>
            <a className="btn" href="https://wa.me/87775430791" target="_blank" rel="noreferrer">💬 Написать в WhatsApp</a>
            <a className="btn" href="https://t.me/ai_advokat_kz_bot" target="_blank" rel="noreferrer">➡️ Открыть Telegram-бот</a>
          </div>

          <div className="grid">
            <div className="card">
              <h3 className="cardTitle">Уголовные дела</h3>
              <p className="cardText">Защита подозреваемых и обвиняемых, сопровождение на следствии, жалобы и ходатайства.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Гражданские споры</h3>
              <p className="cardText">Долги, ущерб, договоры, наследство, жильё. Представительство в суде.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Семейные дела</h3>
              <p className="cardText">Развод, алименты, раздел имущества, порядок общения с детьми.</p>
            </div>
          </div>
        </div>

        <aside className="panel">
          <h2 className="h2">Быстрая консультация</h2>
          <p className="sub" style={{ marginBottom: 10 }}>
            Напишите в WhatsApp/Telegram:
          </p>
          <ol className="list">
            <li>Коротко опишите ситуацию</li>
            <li>Прикрепите документы/фото (если есть)</li>
            <li>Укажите город: Усть-Каменогорск</li>
          </ol>

          <div className="ctaRow" style={{ marginTop: 14 }}>
            <a className="btn btnPrimary" href="https://wa.me/87775430791" target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
            <a className="btn" href="https://t.me/ai_advokat_kz_bot" target="_blank" rel="noreferrer">
              🤖 Telegram
            </a>
          </div>

          <div className="section">
            <h3 className="h2">Контакты</h3>
            <p className="sub" style={{ margin: 0 }}>📞 87775430791</p>
            <p className="sub" style={{ marginTop: 6 }}>📍 Усть-Каменогорск (ВКО)</p>
          </div>
        </aside>
      </section>

      <section className="panel section">
        <h2 className="h2">Услуги</h2>
        <ul className="list">
          <li>Составление исков, жалоб, ходатайств</li>
          <li>Судебное представительство и сопровождение сделок</li>
          <li>Апелляция/кассация, обжалование решений</li>
          <li>Досудебные переговоры и претензии</li>
        </ul>
      </section>

      <section className="panel section faq">
        <h2 className="h2">Частые вопросы</h2>

        <details>
          <summary>Сколько стоит консультация?</summary>
          <p className="sub">Стоимость зависит от сложности. Напишите в WhatsApp/Telegram — уточним и скажем сразу.</p>
        </details>

        <details>
          <summary>Можно онлайн без визита?</summary>
          <p className="sub">Да. Можно консультацию онлайн и обмен документами через мессенджеры.</p>
        </details>

        <details>
          <summary>Берётесь за срочные дела?</summary>
          <p className="sub">Да. Если ситуация срочная — лучше сразу звонить.</p>
        </details>
      </section>

      <footer className="footer">
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>
    </main>
  );
}
