import Link from "next/link";
import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { Fillme } from "@/components/Fillme";
import { CallButton } from "@/components/CallButton";

// Блок «Что у вас случилось?» — 6 крупных кнопок-карточек, ведут на подходящую
// существующую страницу (уголовная / административная / АППК). Казахские тексты —
// по глоссарию; где термина нет (УДО) — [ҚАЗ — ЗАПОЛНИТЬ].
type Card = { icon: string; ru: string; kk: ReactNode; slug: string };

const CARDS: Card[] = [
  { icon: "🚨", ru: "Задержан близкий человек", kk: "Жақын адам ұстап алынды", slug: "ugolovnyj-advokat-ust-kamenogorsk" },
  { icon: "📝", ru: "Вызвали на допрос", kk: "Жауап алуға шақырды", slug: "ugolovnyj-advokat-ust-kamenogorsk" },
  { icon: "⚖️", ru: "Возбуждено уголовное дело", kk: "Қылмыстық іс қозғалды", slug: "ugolovnyj-advokat-ust-kamenogorsk" },
  { icon: "🔓", ru: "УДО и замена наказания", kk: <Fillme lang="kk">УДО и замена наказания</Fillme>, slug: "ugolovnyj-advokat-ust-kamenogorsk" },
  { icon: "🚗", ru: "Лишают водительских прав", kk: "Көлік құралдарын басқару құқығынан айыру", slug: "administrativnye-dela-ust-kamenogorsk" },
  { icon: "🏛", ru: "Спор с госорганом", kk: "Мемлекеттік органмен дау", slug: "spory-s-gosorganami-ust-kamenogorsk" },
];

export function WhatHappened({ lang = "ru", phoneCall }: { lang?: Lang; phoneCall: string }) {
  const kk = lang === "kk";
  const base = kk ? "/kz" : "";
  const title = kk ? "Сізде не болды?" : "Что у вас случилось?";
  const note = kk
    ? "Егер жақыныңыз ұсталып алынса — бірден қоңырау шалыңыз, қазір не істеу керегін түсіндіремін."
    : "Если задержан ваш близкий — звоните сразу, объясню, что делать прямо сейчас.";

  return (
    <section className="panel" style={{ marginTop: 30 }}>
      <h2 className="h2">{title}</h2>
      <div className="troubleGrid">
        {CARDS.map((c, i) => (
          <Link key={i} href={`${base}/${c.slug}`} className="troubleCard">
            <span className="troubleIcon" aria-hidden="true">{c.icon}</span>
            <span className="troubleLabel">{kk ? c.kk : c.ru}</span>
            <span className="troubleArrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
      <div className="troubleCall">
        <p className="troubleCallText">{note}</p>
        <CallButton phoneCall={phoneCall} lang={lang} className="btn btnPrimary troubleCallBtn" />
      </div>
    </section>
  );
}
