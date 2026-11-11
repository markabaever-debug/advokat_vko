import type { Metadata } from "next";
import { pageAlternates, og } from "@/lib/metadata";

const SLUG = "/administrativnye-dela-ust-kamenogorsk";
const title = "Адвокат по административным делам в Усть-Каменогорске — Маркабаев Е.Б.";
const description =
  "Адвокат по делам об административных правонарушениях в Усть-Каменогорске (ВКО): ДТП, лишение прав, штрафы, обжалование постановлений, защита в суде. Более 10 лет юридической практики.";

export const metadata: Metadata = {
  title,
  description,
  ...og(title, description, "ru", SLUG),
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, SLUG),
};

export default function AdministrativnyeDelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
