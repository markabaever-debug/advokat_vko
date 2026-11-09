import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

// Заглушка [ЗАПОЛНИТЬ: …] — ярко-жёлтая, чтобы адвокат сразу видел места для заполнения.
// В казахской версии префикс «ҚАЗ — ЗАПОЛНИТЬ» (текст ещё нужно перевести/вписать).
export function Fillme({ children, lang = "ru" }: { children: ReactNode; lang?: Lang }) {
  const prefix = lang === "kk" ? "ҚАЗ — ЗАПОЛНИТЬ" : "ЗАПОЛНИТЬ";
  return (
    <mark className="fillme">
      [{prefix}: {children}]
    </mark>
  );
}
