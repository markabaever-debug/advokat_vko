import type { Metadata } from "next";
import { pageAlternates, og } from "@/lib/metadata";

const SLUG = "/ugolovnyj-advokat-ust-kamenogorsk";
const title = "Уголовный адвокат в Усть-Каменогорске – Маркабаев Ерлан Бапашевич";
const description =
  "Адвокат по уголовным делам в Усть-Каменогорске (ВКО). Более 10 лет юридической практики, адвокат с 2019 года. Срочная защита. Лицензия №19007753.";

export const metadata: Metadata = {
  title,
  description,
  ...og(title, description, "ru", SLUG),
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, SLUG),
};

export default function UgolovnyAdvokatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
