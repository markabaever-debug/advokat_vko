"use client";

import { useEffect } from "react";

export type DocViewerDoc = { id: string; title: string; pdf: string; thumb: string };

// Модальный просмотрщик PDF (оверлей, стрелки, Esc). Вынесен из DocsGallery и
// подгружается динамически только при открытии документа — чтобы разметка модалки,
// iframe и обработчик клавиш не попадали в начальный клиентский бандл. Вид — без изменений.
export default function DocViewer({
  doc,
  index,
  total,
  labels,
  onPrev,
  onNext,
  onClose,
}: {
  doc: DocViewerDoc;
  index: number;
  total: number;
  labels: { hint: string; back: string; next: string; openPdf: string; close: string };
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={doc.title}
      onClick={onClose}
    >
      <div className="modalPanel" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div>
            <div className="modalTitle">{doc.title}</div>
            <div className="modalHint">{labels.hint}</div>
          </div>

          <div className="modalActions">
            <button type="button" className="modalBtn" onClick={onPrev}>
              {labels.back}
            </button>

            <div className="modalCounter">
              {index + 1}/{total}
            </div>

            <button type="button" className="modalBtn" onClick={onNext}>
              {labels.next}
            </button>

            <a className="modalBtn" href={doc.pdf} target="_blank" rel="noreferrer">
              {labels.openPdf}
            </a>

            <button type="button" className="modalBtn" onClick={onClose}>
              {labels.close}
            </button>
          </div>
        </div>

        <div className="modalBody">
          <iframe
            key={doc.pdf}
            className="modalFrame"
            src={`${doc.pdf}#view=FitH`}
            title={doc.title}
          />
        </div>
      </div>
    </div>
  );
}
