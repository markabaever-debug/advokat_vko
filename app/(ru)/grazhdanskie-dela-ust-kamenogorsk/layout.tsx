import type { Metadata } from "next";
import { pageAlternates, og } from "@/lib/metadata";

const SLUG = "/grazhdanskie-dela-ust-kamenogorsk";
const title = "Адвокат по гражданским делам в Усть-Каменогорске — Маркабаев Е.Б.";
const description =
  "Адвокат по гражданским делам в Усть-Каменогорске (ВКО): взыскание долгов, семейные и наследственные споры, споры о собственности, жилищные споры, сопровождение ОСИ и КСК, представительство в суде. Более 10 лет юридической практики.";

export const metadata: Metadata = {
  title,
  description,
  ...og(title, description, "ru", SLUG),
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, SLUG),
};

export default function GrazhdanskieDelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
