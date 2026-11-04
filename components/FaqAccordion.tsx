"use client";

import { useState } from "react";

export type FaqItem = {
  q: string;
  a: string;
};

// Раскрывающийся список «Часто задаваемые вопросы». Тексты приходят с сервера.
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faqList">
      {items.map((item, idx) => (
        <div key={idx} className="faqItem" data-open={openIndex === idx}>
          <button
            type="button"
            className="faqTrigger"
            onClick={() => setOpenIndex((i: number | null) => (i === idx ? null : idx))}
            aria-expanded={openIndex === idx}
          >
            {item.q}
            <span className="faqTriggerIcon">▼</span>
          </button>
          <div className="faqContent">
            <div className="faqContentInner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
