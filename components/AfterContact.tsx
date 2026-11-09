import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { Fillme } from "@/components/Fillme";

// Блок «Что будет после обращения» — 3 шага. Время ответа и цена/порядок консультации —
// заглушки [ЗАПОЛНИТЬ].
export function AfterContact({ lang = "ru" }: { lang?: Lang }) {
  const kk = lang === "kk";
  const title = kk ? "Хабарласқаннан кейін не болады" : "Что будет после обращения";
  const steps: ReactNode[] = kk
    ? [
        <>Жұмыс уақытында <Fillme lang="kk">жауап беру уақыты</Fillme> ішінде жауап беремін</>,
        <>Консультация: <Fillme lang="kk">баға немесе тәртіп</Fillme></>,
        <>Іс және құны бойынша ұсыныс — жұмыс басталғанға дейін</>,
      ]
    : [
        <>Отвечаю в течение <Fillme>время ответа</Fillme> в рабочее время</>,
        <>Консультация: <Fillme>цена или порядок</Fillme></>,
        <>Предложение по делу и стоимости до начала работы</>,
      ];

  return (
    <section className="panel" style={{ marginTop: 30 }}>
      <h2 className="h2">{title}</h2>
      <div className="stepsRow">
        {steps.map((s, i) => (
          <div key={i} className="stepCard">
            <span className="stepNum" aria-hidden="true">{i + 1}</span>
            <p>{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
