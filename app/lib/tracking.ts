// lib/tracking.ts

export type LeadType = "phone" | "whatsapp" | "telegram";

declare global {
  interface Window {
    dataLayer: any[];
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
    telegram: "lead_telegram_click",
  };

  pushToDataLayer(eventMap[type]);
};

export const trackAndOpen = (type: LeadType, url: string) => {
  trackLead(type);

  setTimeout(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, 250);
};
