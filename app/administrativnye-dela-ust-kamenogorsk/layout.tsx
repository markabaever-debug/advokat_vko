import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Адвокат по административным делам в Усть-Каменогорске — Маркабаев Е.Б.",
  description:
    "Адвокат по делам об административных правонарушениях в Усть-Каменогорске (ВКО): ДТП, лишение прав, штрафы, обжалование постановлений, защита в суде. Более 10 лет юридической практики.",
  alternates: {
    canonical: "/administrativnye-dela-ust-kamenogorsk",
  },
};

export default function AdministrativnyeDelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
