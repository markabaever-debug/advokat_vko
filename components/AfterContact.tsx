import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

// Блок «Что будет после обращения» — 3 шага.
export function AfterContact({ lang = "ru" }: { lang?: Lang }) {
  const kk = lang === "kk";
  const title = kk ? "Хабарласқаннан кейін не болады" : "Что будет после обращения";
  const steps: ReactNode[] = kk
    ? [
        "Бір сағат ішінде, көбіне одан да ертерек жауап беремін. WhatsApp-қа кез келген уақытта жаза аласыз — мүмкіндігінше тез жауап беремін.",
        "Консультация: телефон арқылы алғашқы 15 минут — тегін, толық консультация — 15 000 теңгеден бастап.",
        "Іс және құны бойынша ұсыныс — жұмыс басталғанға дейін",
      ]
    : [
        "Отвечаю в течение часа, а часто раньше. В WhatsApp можно писать в любое время — отвечу при первой возможности.",
        "Консультация: первые 15 минут по телефону — бесплатно, полная консультация — от 15 000 тенге.",
        "Предложение по делу и стоимости до начала работы",
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
