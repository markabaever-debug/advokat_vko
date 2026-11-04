"use client";

import { useState } from "react";

export type Stage = {
  icon: string;
  title: string;
  text: string;
};

// Раскрывающиеся карточки «Этапы работы»: по умолчанию свёрнуты,
// клик/тап или Enter/Space раскрывает описание, повторный — сворачивает.
export function StagesAccordion({ stages }: { stages: Stage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="stagesAccordion">
      {stages.map((s, i) => {
        const isOpen = openIndex === i;
        const panelId = `stage-panel-${i}`;
        return (
          <div className="stageAccItem" data-open={isOpen} key={i}>
            <button
              type="button"
              className="stageAccTrigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((v) => (v === i ? null : i))}
            >
              <span className="stageAccNum">{i + 1}</span>
              <span className="stageAccIcon" aria-hidden>{s.icon}</span>
              <span className="stageAccTitle">{s.title}</span>
              <span className="stageAccChevron" aria-hidden>▼</span>
            </button>
            <div className="stageAccContent" id={panelId} role="region">
              <div className="stageAccContentInner">{s.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
