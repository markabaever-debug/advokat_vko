// lib/tracking.ts

export type LeadType = "phone" | "whatsapp";

// Номер счётчика Яндекс.Метрики. 0 — не подключено (скрипт не загружается).
// [ЗАПОЛНИТЬ: номер счётчика Яндекс.Метрики]
export const YM_COUNTER_ID = 0;

declare global {
  interface Window {
    dataLayer: any[];
    ym?: (...args: any[]) => void;
    __ymLoaded?: boolean;
  }
}

const pushToDataLayer = (eventName: string) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    timestamp: Date.now(),
  });
};

export const trackLead = (type: LeadType) => {
  const eventMap: Record<LeadType, string> = {
    phone: "lead_phone_click",
    whatsapp: "lead_whatsapp_click",
  };

  pushToDataLayer(eventMap[type]);

  // Цель Яндекс.Метрики (reachGoal) — только если счётчик подключён и загружен (после согласия).
  if (typeof window !== "undefined" && typeof window.ym === "function" && YM_COUNTER_ID) {
    const goalMap: Record<LeadType, string> = { phone: "call", whatsapp: "whatsapp" };
    window.ym(YM_COUNTER_ID, "reachGoal", goalMap[type]);
  }
};

export const trackAndOpen = (type: LeadType, url: string) => {
  trackLead(type);

  setTimeout(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, 250);
};
