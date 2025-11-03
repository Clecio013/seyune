"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export interface TrackEventParams {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export function useTracking() {
  const trackEvent = useCallback((params: TrackEventParams) => {
    const { category, action, label, value } = params;

    // Google Analytics 4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // Google Tag Manager (DataLayer)
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: action,
        category: category,
        label: label,
        value: value,
      });
    }

    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_category: category,
        content_name: label,
      });
    }
  }, []);

  const trackWhatsAppClick = useCallback(
    (location: string) => {
      trackEvent({
        category: "engagement",
        action: "whatsapp_click",
        label: location,
        value: 1,
      });
    },
    [trackEvent]
  );

  const trackScheduleClick = useCallback(
    (location: string) => {
      trackEvent({
        category: "conversion",
        action: "schedule_consultation",
        label: location,
        value: 1,
      });
    },
    [trackEvent]
  );

  const trackAccordionOpen = useCallback(
    (question: string) => {
      trackEvent({
        category: "engagement",
        action: "faq_open",
        label: question,
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackWhatsAppClick,
    trackScheduleClick,
    trackAccordionOpen,
  };
}
