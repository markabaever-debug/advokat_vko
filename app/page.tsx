export default function Home() {
  // Твои данные
  const displayNameShort = "Маркабаев Е.Б.";
  const displayNameFull = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорск";
  const region = "ВКО";

  const phoneRaw = "87775430791"; // как показываем на сайте
  const phoneE164 = "+77775430791"; // для tel:
  const waPhone = "77775430791"; // для wa.me (без 8 и без +)

  const waText = encodeURIComponent(
    "Здравствуйте! Нужна консультация адвоката? Опишите ситуацию:"
  );

  const waLink = `https://wa.me/${waPhone}?text=${waText}`;
  const tgLink = "https://t.me/ai_advokat_kz_bot";

  return (
    <main className="container">
      {/* Верхняя панель */}
      <header className="nav">
        <div className="brand">
          ⚖️ <span>{displayNameShort}</span>
          <span className="badge">
            {city} • {region}
          </span>
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

      {/* HERO */}
      <section className="hero">
        <div className="panel">
          <h1 className="h1">{displayNameShort}</h1>
          <p className="sub">
            Адвокат, {city} ({region}). Гражданские и уголовные дела. Судебная
            защита, документы, консультация онлайн и очно.
          </p>

          <div className="kpis">
            <div className="kpi">✅ Конфиденциально</div>
            <div className="kpi">✅ Срочные дела</div>
            <div className="kpi">✅ Суд / переговоры</div>
            <div className="kpi">RU • KZ</div>
          </div>

          <div className="ctaRow">
            <a className="btn btnPrimary" href={`tel:${phoneE164}`}>
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

        {/* Правая колонка */}
        <aside className="panel">
          <h3 className="h3">Быстрая консультация</h3>
          <p className="muted">Напишите в WhatsApp/Telegram:</p>
          <ol className="list">
            <li>Коротко опишите ситуацию</li>
            <li>Прикрепите документы/фото (если есть)</li>
            <li>Укажите город: {city}</li>
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
            <div>
              📍 {city} ({region})
            </div>
          </div>
        </aside>
      </section>

      {/* ОБ АДВОКАТЕ */}
      <section className="panel" style={{ marginTop: 16 }}>
        <div className="about">
          <div className="aboutText">
            <h2 className="h2">Об адвокате</h2>
            <p className="muted" style={{ marginTop: 6 }}>
              {displayNameFull}. Консультации и ведение дел: уголовные,
              гражданские, семейные споры, подготовка документов и судебное
              представительство.
            </p>

            <div className="aboutGrid" style={{ marginTop: 14 }}>
              <div className="aboutItem">
                <div className="aboutLabel">ФИО</div>
                <div className="aboutValue">{displayNameFull}</div>
              </div>
              <div className="aboutItem">
                <div className="aboutLabel">Город</div>
                <div className="aboutValue">
                  {city} ({region})
                </div>
              </div>
              <div className="aboutItem">
                <div className="aboutLabel">Телефон / WhatsApp</div>
                <div className="aboutValue">{phoneRaw}</div>
              </div>
              <div className="aboutItem">
                <div className="aboutLabel">Telegram-бот</div>
                <div className="aboutValue">t.me/ai_advokat_kz_bot</div>
              </div>
            </div>

            <h3 className="h3" style={{ marginTop: 18 }}>
              Документы и сертификаты
            </h3>
            <p className="muted">
              Загрузите файлы в папку <b>public/docs</b> и добавьте ссылки ниже.
            </p>

            <ul className="docList" style={{ marginTop: 10 }}>
              {/* Примеры (ты заменишь на свои файлы) */}
              <li>
                <a href="/docs/udostoverenie.pdf" target="_blank" rel="noreferrer">
                  Удостоверение адвоката (PDF)
                </a>
              </li>
              <li>
                <a href="/docs/strahovka.pdf" target="_blank" rel="noreferrer">
                  Страховка адвокатской деятельности (PDF)
                </a>
              </li>
              <li>
                <a href="/docs/sertifikat-kursy.pdf" target="_blank" rel="noreferrer">
                  Сертификат повышения квалификации (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Фото */}
          <div className="aboutPhoto">
            {/* Загрузи фото в public/me.jpg */}
            <img src="/me.jpg" alt={`Адвокат ${displayNameFull}`} />
            <div className="muted" style={{ marginTop: 8, fontSize: 12 }}>
              Фото: загрузите файл <b>public/me.jpg</b>
            </div>
          </div>
        </div>

        <p className="muted" style={{ marginTop: 14 }}>
          Информация на сайте носит справочный характер и не является публичной офертой.
        </p>
      </section>
    </main>
  );
}
