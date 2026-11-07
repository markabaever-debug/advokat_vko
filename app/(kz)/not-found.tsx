import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бет табылмады — Адвокат Маркабаев Е.Б.",
  robots: { index: false, follow: false },
};

export default function KzNotFound() {
  return (
    <main className="container">
      <section className="panel" style={{ marginTop: 20, textAlign: "center" }}>
        <div style={{ fontSize: 56, lineHeight: 1, marginBottom: 10 }}>⚖️</div>
        <h1 className="h1" style={{ marginBottom: 12 }}>Бет табылмады</h1>
        <p className="muted" style={{ maxWidth: 520, margin: "0 auto 24px" }}>
          Мұндай бет жоқ немесе ол ауыстырылды. Басты бетке оралыңыз — онда адвокаттың
          байланыс деректері, жұмыс бағыттары және құжаттары бар.
        </p>
        <div className="ctaRow" style={{ justifyContent: "center" }}>
          <Link className="btn btnPrimary" href="/kz">
            Басты бетке
          </Link>
          <Link className="btn" href="/kz/ugolovnyj-advokat-ust-kamenogorsk">
            Қылмыстық істер
          </Link>
        </div>
      </section>
    </main>
  );
}
