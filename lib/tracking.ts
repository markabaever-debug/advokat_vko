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
    23 phone: "click_phone",
24 whatsapp: "click_whatsapp",
25 telegram: "click_telegram",
  };

  pushToDataLayer(eventMap[type]);
};

export const trackAndOpen = (type: LeadType, url: string) => {
  trackLead(type);

  setTimeout(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, 250);
};
