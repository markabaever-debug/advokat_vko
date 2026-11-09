"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ui, type Lang } from "@/lib/i18n";

type DocItem = {
  id: string;
  title: string;
  pdf: string;
  thumb: string;
};

// Сертификаты — в заданном порядке. Тема курса — дословно с сертификата, на русском
// (и в RU, и в /kz). Файлы: public/docs/<file>.pdf, миниатюры:
// public/docs/thumbs/<file>.{jpg,webp,avif}.
const CERTS: { file: string; course: string; year: string }[] = [
  { file: "cert-5", course: "Судебная практика по спорам о возмещении вреда, причинённого источником повышенной опасности", year: "2026" },
  { file: "cert-4", course: "Кастомные боты и ИИ-ассистенты для юридических задач", year: "2026" },
  { file: "cert-2", course: "Как составить иск, чтобы суд его не возвратил и удовлетворил", year: "2025" },
  { file: "cert-1", course: "Практические примеры использования искусственного интеллекта в юридической практике", year: "2025" },
  { file: "cert-7", course: "Общая характеристика противодействия отмыванию доходов/финансирования терроризма", year: "2026" },
  { file: "cert-3", course: "Общая характеристика противодействия легализации (отмыванию) доходов и финансированию терроризма", year: "2025" },
  { file: "cert-6", course: "О некоторых вопросах по налогам и другим обязательным платежам адвокатов в 2026 году. Часть 1. Налоговые обязательства адвоката. Индивидуальный подоходный налог с 1 января 2026 года (Лекция 1)", year: "2026" },
];

export const CERT_COUNT = CERTS.length; // число сертификатов (для ссылки «Ещё N …»)

// Русское склонение: 1 сертификат, 2–4 сертификата, 5+ сертификатов (с учётом 11–14).
function ruPlural(n: number, one: string, few: string, many: string) {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}

function buildDocs(lang: Lang): DocItem[] {
  const t = ui[lang];
  const certTitle = (course: string, year: string) => `${t.docTitles.cert}: «${course}» (${year})`;
  return [
    { id: "license", title: t.docTitles.license, pdf: "/docs/license.pdf", thumb: "/docs/thumbs/license.jpg" },
    { id: "insurance", title: t.docTitles.insurance, pdf: "/docs/insurance.pdf", thumb: "/docs/thumbs/insurance.jpg" },
    ...CERTS.map((c) => ({
      id: c.file,
      title: certTitle(c.course, c.year),
      pdf: `/docs/${c.file}.pdf`,
      thumb: `/docs/thumbs/${c.file}.jpg`,
    })),
  ];
}

// Галерея документов с модальным просмотром PDF (стрелки/Esc). Заголовки — по языку.
// compact=true — на главной: только лицензия и страхование + ссылка «Ещё N сертификатов».
// compact=false — на странице /dokumenty: все документы.
export function DocsGallery({ lang = "ru", compact = false }: { lang?: Lang; compact?: boolean }) {
  const t = ui[lang];
  const openWord = lang === "kk" ? "Ашу" : "Открыть";
  const allDocs = buildDocs(lang);
  const docs = compact ? allDocs.slice(0, 2) : allDocs; // что открывается в просмотрщике
  const moreCount = allDocs.length - 2;
  const moreHref = lang === "kk" ? "/kz/dokumenty" : "/dokumenty";
  const moreText = lang === "kk"
    ? `Біліктілікті арттыру туралы тағы ${moreCount} сертификат →`
    : `Ещё ${moreCount} ${ruPlural(moreCount, "сертификат", "сертификата", "сертификатов")} повышения квалификации →`;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openDoc = openIndex === null ? null : docs[openIndex];

  const goPrev = () => {
    setOpenIndex((prev) => (prev === null ? null : (prev - 1 + docs.length) % docs.length));
  };

  const goNext = () => {
    setOpenIndex((prev) => (prev === null ? null : (prev + 1) % docs.length));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    if (openIndex !== null) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  return (
    <>
      <div className={compact ? "docsCompact" : "docsGrid"}>
        {docs.map((d, idx) => {
          const base = d.thumb.replace(/\.jpg$/, "");
          return (
            <button
              key={d.id}
              type="button"
              className="docCardBtn"
              onClick={() => setOpenIndex(idx)}
              aria-label={`${openWord}: ${d.title}`}
            >
              <div className="docThumb">
                <picture>
                  <source type="image/avif" srcSet={`${base}.avif`} />
                  <source type="image/webp" srcSet={`${base}.webp`} />
                  <img src={d.thumb} alt={d.title} loading="lazy" decoding="async" />
                </picture>
              </div>
              <div className="docLabel">{d.title}</div>
            </button>
          );
        })}

        {compact && (
          <Link className="docsMoreLink" href={moreHref}>
            {moreText}
          </Link>
        )}
      </div>

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
                <div className="modalHint">{t.modalHint}</div>
              </div>

              <div className="modalActions">
                <button type="button" className="modalBtn" onClick={goPrev}>
                  {t.modalBack}
                </button>

                <div className="modalCounter">
                  {openIndex + 1}/{docs.length}
                </div>

                <button type="button" className="modalBtn" onClick={goNext}>
                  {t.modalNext}
                </button>

                <a className="modalBtn" href={openDoc.pdf} target="_blank" rel="noreferrer">
                  {t.modalOpenPdf}
                </a>

                <button
                  type="button"
                  className="modalBtn"
                  onClick={() => setOpenIndex(null)}
                >
                  {t.modalClose}
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
    </>
  );
}
