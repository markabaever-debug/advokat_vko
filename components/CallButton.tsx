import { ui, type Lang } from "@/lib/i18n";

// Кнопка-ссылка «Позвонить». Событие аналитики lead_phone_click отправляет глобальный
// обработчик LeadTracking по клику на любую ссылку tel: — отдельный onClick не нужен.
export function CallButton({
  phoneCall,
  lang = "ru",
  className = "btn btnPrimary",
}: {
  phoneCall: string;
  lang?: Lang;
  className?: string;
}) {
  const t = ui[lang];
  return (
    <a className={className} href={`tel:${phoneCall}`}>
      📞 {t.call}
    </a>
  );
}
