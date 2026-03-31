"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackAnalyticsEvent } from "@/lib/analytics";

const SCROLL_BOTTOM_THRESHOLD = 99;

function toSnakeCase(value: string): string {
  return value
    .replace(/([A-Z])/g, "_$1")
    .replace(/^_/, "")
    .toLowerCase();
}

function parseDatasetValue(value: string): string | number | boolean {
  if (value === "true") return true;
  if (value === "false") return false;

  const parsedNumber = Number(value);
  if (!Number.isNaN(parsedNumber) && value.trim() !== "") {
    return parsedNumber;
  }

  return value;
}

function getDataParams(target: HTMLElement): Record<string, string | number | boolean> {
  const params: Record<string, string | number | boolean> = {};

  Object.entries(target.dataset).forEach(([key, value]) => {
    if (!key.startsWith("analyticsParam") || !value) return;

    const suffix = key.slice("analyticsParam".length);
    if (!suffix) return;

    params[toSnakeCase(suffix)] = parseDatasetValue(value);
  });

  return params;
}

function getClickPayload(
  target: HTMLElement,
  pathname: string,
): Record<string, string | number | boolean> {
  const payload: Record<string, string | number | boolean> = {
    path: pathname,
    ...getDataParams(target),
  };

  if (target.dataset.analyticsProjectSlug) {
    payload.project_slug = target.dataset.analyticsProjectSlug;
  }

  if (target.dataset.analyticsHref) {
    payload.href = target.dataset.analyticsHref;
  }

  return payload;
}

export default function AnalyticsEvents() {
  const pathname = usePathname();
  const scroll50Sent = useRef(false);
  const scroll100Sent = useRef(false);

  useEffect(() => {
    if (!pathname.startsWith("/projects/")) return;

    const slug = pathname.split("/").filter(Boolean)[1];
    if (!slug) return;

    trackAnalyticsEvent("view_project", {
      project_slug: slug,
      path: pathname,
      page_type: "project_case",
    });
  }, [pathname]);

  useEffect(() => {
    scroll50Sent.current = false;
    scroll100Sent.current = false;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const maxScroll = root.scrollHeight - root.clientHeight;
      if (maxScroll <= 0) return;

      const scrolledPercent = (window.scrollY / maxScroll) * 100;

      if (!scroll50Sent.current && scrolledPercent >= 50) {
        scroll50Sent.current = true;
        trackAnalyticsEvent("scroll_50", {
          path: pathname,
          scroll_depth_percent: 50,
          page_type: pathname.startsWith("/projects/") ? "project_case" : "landing",
        });
      }

      if (!scroll100Sent.current && scrolledPercent >= SCROLL_BOTTOM_THRESHOLD) {
        scroll100Sent.current = true;
        trackAnalyticsEvent("scroll_100", {
          path: pathname,
          scroll_depth_percent: 100,
          page_type: pathname.startsWith("/projects/") ? "project_case" : "landing",
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const tracked = target.closest<HTMLElement>("[data-analytics-event]");
      const eventName = tracked?.dataset.analyticsEvent;
      if (!tracked || !eventName) return;

      trackAnalyticsEvent(eventName, getClickPayload(tracked, pathname));
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const tracked = target.closest<HTMLElement>("[data-analytics-hover-event]");
      const eventName = tracked?.dataset.analyticsHoverEvent;
      if (!tracked || !eventName) return;

      const related = event.relatedTarget;
      if (related instanceof Node && tracked.contains(related)) return;

      trackAnalyticsEvent(eventName, getClickPayload(tracked, pathname));
    };

    document.addEventListener("click", onClick);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [pathname]);

  return null;
}
