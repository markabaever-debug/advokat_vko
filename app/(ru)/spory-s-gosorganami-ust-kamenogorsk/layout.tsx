import type { Metadata } from "next";
import { pageAlternates, og } from "@/lib/metadata";

const SLUG = "/spory-s-gosorganami-ust-kamenogorsk";
const title = "Адвокат по спорам с госорганами в Усть-Каменогорске — Маркабаев Е.Б.";
const description =
  "Адвокат по административным искам (АППК) в Усть-Каменогорске (ВКО): обжалование решений и действий госорганов, споры о пенсиях и выплатах, споры с акиматами и департаментами. Более 10 лет юридической практики.";

export const metadata: Metadata = {
  title,
  description,
  ...og(title, description, "ru", SLUG),
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, SLUG),
};

export default function SporyGosorganamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
