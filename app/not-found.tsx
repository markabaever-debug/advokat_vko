import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена — Адвокат Маркабаев Е.Б.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="container">
      <section className="panel" style={{ marginTop: 20, textAlign: "center" }}>
        <div style={{ fontSize: 56, lineHeight: 1, marginBottom: 10 }}>⚖️</div>
        <h1 className="h1" style={{ marginBottom: 12 }}>Страница не найдена</h1>
        <p className="muted" style={{ maxWidth: 520, margin: "0 auto 24px" }}>
          Такой страницы нет или она была перемещена. Вернитесь на главную — там
          контакты, направления работы и документы адвоката.
        </p>
        <div className="ctaRow" style={{ justifyContent: "center" }}>
          <Link className="btn btnPrimary" href="/">
            На главную
          </Link>
          <Link className="btn" href="/ugolovnyj-advokat-ust-kamenogorsk">
            Уголовные дела
          </Link>
        </div>
      </section>
    </main>
  );
}
