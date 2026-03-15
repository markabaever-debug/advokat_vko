import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Уголовный адвокат в Усть-Каменогорске – Маркабаев Ерлан Бапашевич",
  description:
    "Адвокат по уголовным делам в Усть-Каменогорске (ВКО). Более 10 лет опыта. Срочная защита 24/7. Лицензия №19007753.",
};

export default function UgolovnyAdvokatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
