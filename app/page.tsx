export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Адвокат в Усть-Каменогорске
        </h1>

        <h2 style={styles.subtitle}>
          Юридическая консультация №1 • ВКО
        </h2>

        <p style={styles.description}>
          Срочная помощь по гражданским и уголовным делам.
          Защита в суде. Консультация онлайн и очно.
        </p>

        <div style={styles.buttons}>
          <a href="tel:+77775430791" style={styles.primaryButton}>
            📞 Позвонить
          </a>

          <a
            href="https://wa.me/87775430791"
            target="_blank"
            rel="noreferrer"
            style={styles.secondaryButton}
          >
            💬 WhatsApp
          </a>

          <a
            href="https://t.me/ai_advokat_kz_bot"
            target="_blank"
            rel="noreferrer"
            style={styles.secondaryButton}
          >
            🤖 Telegram
          </a>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Услуги</h3>
        <ul style={styles.list}>
          <li>Защита по уголовным делам</li>
          <li>Гражданские споры (долги, ущерб, договоры)</li>
          <li>Семейные дела (развод, алименты, раздел имущества)</li>
          <li>Составление исков, жалоб, ходатайств</li>
          <li>Судебное представительство</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Почему выбирают нас</h3>
        <ul style={styles.list}>
          <li>Опыт ведения сложных дел</li>
          <li>Индивидуальный подход</li>
          <li>Конфиденциальность</li>
          <li>Работаем до результата</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Как работаем</h3>
        <ol style={styles.list}>
          <li>Вы описываете ситуацию (WhatsApp / Telegram)</li>
          <li>Мы уточняем детали и оцениваем перспективы</li>
          <li>Даем план действий и берёмся за дело</li>
        </ol>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Контакты</h3>
        <p style={styles.contact}>📞 87775430791</p>
        <p>Город: Усть-Каменогорск (ВКО)</p>
      </section>

      <footer style={styles.footer}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>
    </main>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    lineHeight: 1.6,
  },

  hero: {
    marginBottom: "40px",
  },

  title: {
    fontSize: "32px",
    marginBottom: "8px",
  },

  subtitle: {
    fontWeight: 400,
    marginTop: 0,
    color: "#555",
  },

  description: {
    fontSize: "18px",
    marginTop: "20px",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap" as const,
    marginTop: "25px",
  },

  primaryButton: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  secondaryButton: {
    border: "1px solid #ddd",
    padding: "12px 18px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#000",
  },

  section: {
    marginBottom: "40px",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "12px",
  },

  list: {
    paddingLeft: "20px",
  },

  contact: {
    fontSize: "18px",
    fontWeight: 600,
  },

  footer: {
    marginTop: "50px",
    fontSize: "12px",
    color: "#777",
  },
};
