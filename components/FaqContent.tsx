import Link from "next/link";
import { FAQ_PATH } from "@/lib/faqPaths";
import {
  answerText,
  loadFaq,
  type FaqBlock,
  type FaqLang,
  type Inline,
  type Node,
} from "@/lib/faq";

// Раздел «Вопросы и ответы» (/voprosy-i-otvety, /kz/suraqtar-men-zhauaptar): тексты из
// content/faq/*.md без изменений. Серверные компоненты (без "use client").

const T = {
  ru: { toc: "Содержание", top: "↑ Содержание", related: "Вопросы и ответы по теме", all: "Все вопросы и ответы →" },
  kk: { toc: "Мазмұны", top: "↑ Мазмұны", related: "Тақырып бойынша сұрақтар мен жауаптар", all: "Барлық сұрақтар мен жауаптар →" },
};

function Text({ value }: { value: Inline }) {
  return (
    <>
      {value.map((p, i) => (p.bold ? <strong key={i}>{p.text}</strong> : <span key={i}>{p.text}</span>))}
    </>
  );
}

function Body({ nodes }: { nodes: Node[] }) {
  return (
    <>
      {nodes.map((n, i) => {
        if (n.kind === "h") return <h4 key={i} className="faqH4">{n.text}</h4>;
        if (n.kind === "p")
          return (
            <p key={i} className="faqP">
              {n.lines.map((l, j) => (
                <span key={j}>
                  {j > 0 && <br />}
                  <Text value={l} />
                </span>
              ))}
            </p>
          );
        const List = n.kind === "ol" ? "ol" : "ul";
        return (
          <List key={i} className="faqList2">
            {n.items.map((it, j) => (
              <li key={j}>
                <Text value={it} />
              </li>
            ))}
          </List>
        );
      })}
    </>
  );
}

export function FaqToc({ blocks, lang }: { blocks: FaqBlock[]; lang: FaqLang }) {
  return (
    <nav id="soderzhanie" className="faqToc" aria-label={T[lang].toc}>
      <h2 className="h2">{T[lang].toc}</h2>
      <ol className="faqTocBlocks">
        {blocks.map((b) => (
          <li key={b.num}>
            <a href={`#${b.anchor}`} className="faqTocBlock">{b.title}</a>
            <ul className="faqTocQuestions">
              {b.questions.map((q) => (
                <li key={q.num}>
                  <a href={`#${q.anchor}`}>{q.heading}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqBlocks({ blocks, lang }: { blocks: FaqBlock[]; lang: FaqLang }) {
  return (
    <>
      {blocks.map((b) => (
        <section key={b.num} id={b.anchor} className="panel faqBlock" style={{ marginTop: 30 }}>
          <h2 className="h2">{b.title}</h2>
          <div className="faqSources">
            {b.author && <div>{b.author}</div>}
            <div>{b.sources.lead}</div>
            {b.sources.items.length > 0 && (
              <ul>
                {b.sources.items.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>

          {b.questions.map((q) => (
            <article key={q.num} id={q.anchor} className="faqQuestion">
              <h3 className="faqH3">
                <a href={`#${q.anchor}`} className="faqAnchor">{q.heading}</a>
              </h3>
              <Body nodes={q.body} />
            </article>
          ))}

          <div className="faqClosing">
            <Body nodes={b.closing} />
          </div>
          <a href="#soderzhanie" className="faqTop">{T[lang].top}</a>
        </section>
      ))}
    </>
  );
}

// FAQPage — все 15 вопросов страницы; ответы — тот же текст, что виден на странице.
export function FaqPageJsonLd({ blocks }: { blocks: FaqBlock[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blocks.flatMap((b) =>
      b.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: answerText(q) },
      })),
    ),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// Ссылки со страниц направлений на вопросы раздела. blocks — номера блоков (1–5);
// пустой список — только ссылка на весь раздел.
export function FaqRelatedLinks({ lang, blocks }: { lang: FaqLang; blocks: number[] }) {
  const base = FAQ_PATH[lang];
  const picked = loadFaq(lang).filter((b) => blocks.includes(b.num));
  return (
    <div className="faqRelated">
      {picked.length > 0 && (
        <>
          <h3 className="faqRelatedTitle">{T[lang].related}</h3>
          <ul>
            {picked.flatMap((b) =>
              b.questions.map((q) => (
                <li key={q.num}>
                  <Link href={`${base}#${q.anchor}`}>{q.question}</Link>
                </li>
              )),
            )}
          </ul>
        </>
      )}
      <Link href={base} className="faqRelatedAll">{T[lang].all}</Link>
    </div>
  );
}
