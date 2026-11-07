// Подписи общих компонентов на двух языках. Переводы — строго по docs/glossary-ru-kz.md
// (сверено адвокатом 06.11.2026). Тексты страниц переведены прямо в их файлах
// (app/(ru)/… — русские, app/(kz)/… — казахские); здесь — только повторяющиеся элементы
// интерфейса, которые живут внутри общих компонентов.
export type Lang = "ru" | "kk";

type Strings = {
  call: string;
  whatsapp: string;
  writeWhatsapp: string;
  home: string;
  cookieBefore: string;
  cookieLink: string;
  cookieAfter: string;
  cookieDialog: string;
  accept: string;
  decline: string;
  cookieSettings: string;
  docsHint: string;
  docTitles: { license: string; insurance: string; cert: string };
  modalHint: string;
  modalBack: string;
  modalNext: string;
  modalOpenPdf: string;
  modalClose: string;
};

export const ui: Record<Lang, Strings> = {
  ru: {
    call: "Позвонить",
    whatsapp: "WhatsApp",
    writeWhatsapp: "Написать в WhatsApp",
    home: "На главную",
    cookieBefore:
      "Сайт может использовать файлы cookie и сервисы аналитики Google (серверы за рубежом) для подсчёта посещений. Подробнее — в ",
    cookieLink: "политике конфиденциальности",
    cookieAfter: ".",
    cookieDialog: "Уведомление об аналитике и файлах cookie",
    accept: "Принять",
    decline: "Отклонить",
    cookieSettings: "Настройки cookie",
    docsHint:
      "Нажмите на документ для просмотра. В окне просмотра: ← → (листание), Esc (закрыть).",
    docTitles: {
      license: "Лицензия на занятие адвокатской деятельностью",
      insurance: "Страхование адвокатской деятельности",
      cert: "Повышение квалификации",
    },
    modalHint: "← → листать • Esc закрыть",
    modalBack: "← Назад",
    modalNext: "Вперёд →",
    modalOpenPdf: "Открыть PDF",
    modalClose: "✕ Закрыть",
  },
  kk: {
    call: "Қоңырау шалу",
    whatsapp: "WhatsApp",
    writeWhatsapp: "WhatsApp-қа жазу",
    home: "Басты бетке",
    cookieBefore:
      "Сайт келушілерді санау үшін cookie файлдарын және Google аналитика қызметтерін (серверлер шетелде) пайдалануы мүмкін. Толығырақ — ",
    cookieLink: "құпиялылық саясатында",
    cookieAfter: ".",
    cookieDialog: "Аналитика және cookie файлдары туралы хабарлама",
    accept: "Қабылдау",
    decline: "Бас тарту",
    cookieSettings: "cookie баптаулары",
    docsHint:
      "Құжатты қарау үшін оны басыңыз. Қарау терезесінде: ← → (парақтау), Esc (жабу).",
    docTitles: {
      license: "Адвокаттық қызметпен айналысуға лицензия",
      insurance: "Адвокаттық қызметті сақтандыру",
      cert: "Біліктілікті арттыру",
    },
    modalHint: "← → парақтау • Esc жабу",
    modalBack: "← Артқа",
    modalNext: "Алға →",
    modalOpenPdf: "PDF ашу",
    modalClose: "✕ Жабу",
  },
};
