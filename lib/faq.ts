import fs from "node:fs";
import path from "node:path";

// Раздел «Вопросы и ответы»: тексты — content/faq/*.md (утверждены адвокатом, нормы проверены).
// Тексты НЕ редактируются в коде: здесь только разбор разметки Markdown (заголовки, абзацы,
// списки, **жирный**) в структуру для страницы и JSON-LD. Читается при сборке (страницы
// статические).

export type FaqLang = "ru" | "kk";

export type Inline = { text: string; bold: boolean }[];
export type Node =
  | { kind: "p"; lines: Inline[] }
  | { kind: "h"; text: string }
  | { kind: "ul" | "ol"; items: Inline[] };

export type FaqQuestion = {
  num: number;
  heading: string; // полностью, как в файле: «Вопрос 1. …» / «1-сұрақ. …»
  question: string; // текст вопроса без «Вопрос N.» — для JSON-LD и ссылок
  anchor: string;
  body: Node[];
};

export type FaqBlock = {
  num: number;
  title: string; // «Блок 1. Уголовные дела — вопросы и ответы»
  anchor: string;
  author: string;
  sources: { lead: string; items: string[] };
  questions: FaqQuestion[];
  closing: Node[]; // заключительная часть блока (оговорка и контакты)
};

const DIR = path.join(process.cwd(), "content", "faq");
const FILES = ["blok1_ugolovnye", "blok2_administrativnye", "blok3_semeynye", "blok4_dtp", "blok5_sud"];

export { FAQ_PATH } from "@/lib/faqPaths";

// Якоря: одинаковые номера на обоих языках, слово — на языке страницы.
export const questionAnchor = (lang: FaqLang, n: number) => (lang === "kk" ? `suraq-${n}` : `vopros-${n}`);
export const blockAnchor = (n: number) => `blok-${n}`;

function inline(text: string): Inline {
  // **жирный** → отрезки; остальной текст — без изменений
  return text.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((part) =>
    part.startsWith("**") && part.endsWith("**")
      ? { text: part.slice(2, -2), bold: true }
      : { text: part, bold: false },
  );
}

function nodes(lines: string[]): Node[] {
  const out: Node[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
    } else if (line.startsWith("### ")) {
      out.push({ kind: "h", text: line.slice(4).trim() });
      i++;
    } else if (/^- /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const re = ordered ? /^\d+\. / : /^- /;
      const items: Inline[] = [];
      while (i < lines.length && re.test(lines[i])) {
        items.push(inline(lines[i].replace(re, "")));
        i++;
      }
      out.push({ kind: ordered ? "ol" : "ul", items });
    } else {
      const para: Inline[] = [];
      while (i < lines.length && lines[i].trim() && !/^(### |- |\d+\. )/.test(lines[i])) {
        para.push(inline(lines[i]));
        i++;
      }
      out.push({ kind: "p", lines: para });
    }
  }
  return out;
}

function parse(file: string, lang: FaqLang): FaqBlock {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8").replace(/\r\n/g, "\n");
  const sections = raw.split(/\n---\n/);
  const head = sections[0].split("\n");
  const title = head.find((l) => l.startsWith("# "));
  const m = title?.match(/^# (?:Блок (\d+)\.|(\d+)-блок\.)/);
  if (!title || !m) throw new Error(`${file}: нет заголовка блока`);
  const num = Number(m[1] ?? m[2]);
  const author = head.find((l) => /^Автор/.test(l)) ?? "";
  const si = head.findIndex((l) => /^(Нормы проверены|Нормалар )/.test(l));
  if (si < 0) throw new Error(`${file}: нет строки о проверке норм`);
  const items = head.slice(si + 1).filter((l) => l.startsWith("- ")).map((l) => l.slice(2));

  const questions: FaqQuestion[] = [];
  const closing: Node[] = [];
  for (const sec of sections.slice(1)) {
    const lines = sec.split("\n");
    const qi = lines.findIndex((l) => l.startsWith("## "));
    if (qi < 0) {
      closing.push(...nodes(lines));
      continue;
    }
    const heading = lines[qi].slice(3).trim();
    const qm = heading.match(/^(?:Вопрос (\d+)\.|(\d+)-сұрақ\.)\s*(.+)$/);
    if (!qm) throw new Error(`${file}: не разобран заголовок вопроса «${heading}»`);
    const n = Number(qm[1] ?? qm[2]);
    questions.push({ num: n, heading, question: qm[3], anchor: questionAnchor(lang, n), body: nodes(lines.slice(qi + 1)) });
  }
  return {
    num,
    title: title.slice(2).trim(),
    anchor: blockAnchor(num),
    author,
    sources: { lead: head[si], items },
    questions,
    closing,
  };
}

export function loadFaq(lang: FaqLang): FaqBlock[] {
  return FILES.map((f) => parse(`faq_${f}${lang === "kk" ? "_kz" : ""}.md`, lang));
}

const plain = (s: Inline) => s.map((p) => p.text).join("");

// Ответ одним текстом для JSON-LD (без разметки Markdown, те же слова, что на странице).
export function answerText(q: FaqQuestion): string {
  return q.body
    .map((n) =>
      n.kind === "p"
        ? n.lines.map(plain).join("\n")
        : n.kind === "h"
          ? n.text
          : n.items.map((it, i) => `${n.kind === "ol" ? `${i + 1}.` : "—"} ${plain(it)}`).join("\n"),
    )
    .join("\n\n");
}
