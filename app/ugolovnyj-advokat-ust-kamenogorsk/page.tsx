import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Уголовный адвокат в Усть-Каменогорске – Маркабаев Ерлан Бапашевич",
  description:
    "Адвокат по уголовным делам в Усть-Каменогорске (ВКО). Более 10 лет опыта. Срочная защита 24/7. Лицензия №19007753.",
};

export default function UgolovnyAdvokatPage() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорск";
  const region = "ВКО";

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const waText = encodeURIComponent("Здравствуйте! Нужна срочная помощь по уголовному делу");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  const tgLink = "https://t.me/ai_advokat_kz_bot";

  return (
    <main className="container">
      
      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }}>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", alignItems: "flex-start" }}>
          
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 className="h1">
              Уголовный адвокат в {city}
            </h1>

            <p className="sub">
              {fullName}. Более 10 лет практики по уголовным делам. 
              Срочная защита на стадии задержания, следствия и суда.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Срочный выезд 24/7</div>
              <div className="kpi">✅ Конфиденциальность</div>
              <div className="kpi">✅ Опыт более 10 лет</div>
            </div>

            <div className="ctaRow" style={{ marginTop: 20 }}>
              <a className="btn btnPrimary" href={`tel:${phoneCall}`}>
                📞 Позвонить
              </a>

              <a className="btn btnWA" href={waLink} target="_blank" rel="noreferrer">
                💬 WhatsApp
              </a>

              <a className="btn btnTG" href={tgLink} target="_blank" rel="noreferrer">
                🤖 Telegram
              </a>
            </div>
          </div>

          <div
            style={{
              width: 300,
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
              alt="Адвокат Маркабаев Ерлан Бапашевич"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES DESCRIPTION */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Защита по уголовным делам</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Оказываю профессиональную юридическую помощь в {city} и по всей территории {region}.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Защита подозреваемых и обвиняемых</li>
          <li>Участие при задержании и допросах</li>
          <li>Обжалование меры пресечения</li>
          <li>Представительство в суде</li>
          <li>Апелляционные и кассационные жалобы</li>
        </ul>
      </section>

      {/* LICENSE */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Официальная деятельность</h2>

        <p style={{ marginTop: 15 }}>
          Лицензия на занятие адвокатской деятельностью №19007753 
          от 03.04.2019 года.
        </p>
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>

    </main>
  );
}
