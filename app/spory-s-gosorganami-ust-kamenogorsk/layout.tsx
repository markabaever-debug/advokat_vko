import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Адвокат по спорам с госорганами в Усть-Каменогорске — Маркабаев Е.Б.",
  description:
    "Адвокат по административным искам (АППК) в Усть-Каменогорске (ВКО): обжалование решений и действий госорганов, споры о пенсиях и выплатах, споры с акиматами и департаментами. Более 10 лет юридической практики.",
  alternates: {
    canonical: "/spory-s-gosorganami-ust-kamenogorsk",
  },
};

export default function SporyGosorganamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
