"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Ссылка «на главную», которая ведёт на главную текущего языка: «/» на русских
// страницах и «/kz» на казахских (определяется по пути). Текст задаётся через children —
// пока русский (переведём по глоссарию).
export function HomeLink({
  className,
  ariaLabel,
  children,
}: {
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "/";
  const isKz = pathname === "/kz" || pathname.startsWith("/kz/");
  const href = isKz ? "/kz" : "/";
  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
