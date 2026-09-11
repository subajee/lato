"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** The full display value, e.g. "4.9", "9,000+", "25+", "100%" */
  value: string;
  durationMs?: number;
};

/**
 * Animates the numeric portion of `value` from 0 up to its target when the
 * element scrolls into view. Any non-numeric prefix/suffix (+, %, commas) is
 * preserved. Respects prefers-reduced-motion.
 */
export function CountUp({ value, durationMs = 1200 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse: leading non-digits, the number (with commas/decimal), trailing rest.
    const match = value.match(/^(\D*)([\d,]*\.?\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numRaw, suffix] = match;
    const target = parseFloat(numRaw.replace(/,/g, ""));
    const decimals = numRaw.includes(".") ? numRaw.split(".")[1].length : 0;
    const useComma = numRaw.includes(",");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      const withComma = useComma
        ? Number(fixed).toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : fixed;
      return `${prefix}${withComma}${suffix}`;
    };

    // Show 0 initially so the jump-in reads.
    setDisplay(format(0));

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(format(target * eased));
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return <span ref={ref}>{display}</span>;
}
