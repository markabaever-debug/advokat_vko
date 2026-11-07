"use client";

import { useEffect, useState } from "react";
import { ui, type Lang } from "@/lib/i18n";

type DocItem = {
  id: string;
  title: string;
  pdf: string;
  thumb: string;
};

// Галерея документов с модальным просмотром PDF (стрелки/Esc). Заголовки — по языку.
export function DocsGallery({ lang = "ru" }: { lang?: Lang }) {
  const t = ui[lang];
  const openWord = lang === "kk" ? "Ашу" : "Открыть";
  const docs: DocItem[] = [
    { id: "license", title: t.docTitles.license, pdf: "/docs/license.pdf", thumb: "/docs/thumbs/license.jpg" },
    { id: "insurance", title: t.docTitles.insurance, pdf: "/docs/insurance.pdf", thumb: "/docs/thumbs/insurance.jpg" },
    { id: "cert1", title: `${t.docTitles.cert} (1)`, pdf: "/docs/cert-1.pdf", thumb: "/docs/thumbs/cert-1.jpg" },
    { id: "cert2", title: `${t.docTitles.cert} (2)`, pdf: "/docs/cert-2.pdf", thumb: "/docs/thumbs/cert-2.jpg" },
    { id: "cert3", title: `${t.docTitles.cert} (3)`, pdf: "/docs/cert-3.pdf", thumb: "/docs/thumbs/cert-3.jpg" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openDoc = openIndex === null ? null : docs[openIndex];

  const goPrev = () => {
    setOpenIndex((prev) =>
      prev === null ? null : (prev - 1 + docs.length) % docs.length
    );
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
      <div className="docsGrid">
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
