"use client";

type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: AnalyticsParams,
    ) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(
  eventName: string,
  params?: AnalyticsParams,
): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);
  window.clarity?.("event", eventName);
}
