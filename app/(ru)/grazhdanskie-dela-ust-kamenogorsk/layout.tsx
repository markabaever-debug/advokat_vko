import type { Metadata } from "next";
import { pageAlternates } from "@/lib/metadata";

const SLUG = "/grazhdanskie-dela-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Адвокат по гражданским делам в Усть-Каменогорске — Маркабаев Е.Б.",
  description:
    "Адвокат по гражданским делам в Усть-Каменогорске (ВКО): взыскание долгов, семейные и наследственные споры, споры о собственности, жилищные споры, сопровождение ОСИ и КСК, представительство в суде. Более 10 лет юридической практики.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, SLUG),
};

export default function GrazhdanskieDelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
