import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Адвокат по гражданским делам в Усть-Каменогорске — Маркабаев Е.Б.",
  description:
    "Адвокат по гражданским делам в Усть-Каменогорске (ВКО): взыскание долгов, семейные и наследственные споры, споры о собственности, жилищные споры, представительство в суде. Более 10 лет юридической практики.",
  alternates: {
    canonical: "/grazhdanskie-dela-ust-kamenogorsk",
  },
};

export default function GrazhdanskieDelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
