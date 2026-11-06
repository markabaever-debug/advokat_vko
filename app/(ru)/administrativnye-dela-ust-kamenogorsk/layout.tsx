import type { Metadata } from "next";
import { pageAlternates } from "@/lib/metadata";

const SLUG = "/administrativnye-dela-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Адвокат по административным делам в Усть-Каменогорске — Маркабаев Е.Б.",
  description:
    "Адвокат по делам об административных правонарушениях в Усть-Каменогорске (ВКО): ДТП, лишение прав, штрафы, обжалование постановлений, защита в суде. Более 10 лет юридической практики.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, SLUG),
};

export default function AdministrativnyeDelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
