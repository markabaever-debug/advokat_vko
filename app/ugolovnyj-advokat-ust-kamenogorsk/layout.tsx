import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Уголовный адвокат в Усть-Каменогорске – Маркабаев Ерлан Бапашевич",
  description:
    "Адвокат по уголовным делам в Усть-Каменогорске (ВКО). Более 10 лет юридической практики, адвокат с 2019 года. Срочная защита. Лицензия №19007753.",
  alternates: {
    canonical: "/ugolovnyj-advokat-ust-kamenogorsk",
  },
};

export default function UgolovnyAdvokatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
