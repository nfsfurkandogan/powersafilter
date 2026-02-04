"use client";

import { useEffect } from "react";

export default function PerformancePatch() {
  useEffect(() => {
    if (typeof performance === "undefined" || !performance.measure) return;
    const original = performance.measure.bind(performance);
    performance.measure = (...args: Parameters<Performance["measure"]>) => {
      try {
        return original(...args);
      } catch {
        return undefined as unknown as PerformanceMeasure;
      }
    };
    return () => {
      performance.measure = original;
    };
  }, []);

  return null;
}
