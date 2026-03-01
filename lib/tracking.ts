// lib/tracking.ts

export type LeadType = "phone" | "whatsapp" | "telegram";

declare global {
  interface Window {
    datalayer: any[];
  }
}

const pushToDataLayer = (eventName: string) => {
  if (typeof window === "undefined") return;

  window.datalayer = window.datalayer || [];
  window.datalayer.push({
    event: eventName,
    timestamp: Date.now(),
  });
};

export const trackLead = (type: LeadType) => {
  const eventMap: Record<LeadType, string> = {
   phone: "click_phone",
whatsapp: "click_whatsapp",
telegram: "click_telegram",
  };

  pushToDataLayer(eventMap[type]);
};

export const trackAndOpen = (type: LeadType, url: string) => {
  trackLead(type);

  setTimeout(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, 250);
};
