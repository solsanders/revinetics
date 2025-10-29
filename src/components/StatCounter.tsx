"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  from?: number;
  to: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  startOnVisible?: boolean;
};

export function StatCounter({
  from,
  to,
  durationMs = 1500,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  startOnVisible = true,
}: Props) {
  const start = from ?? 0;
  const [value, setValue] = useState<number>(start);
  const [started, setStarted] = useState<boolean>(!startOnVisible);
  const rafRef = useRef<number | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!startOnVisible) {
      setStarted(true);
      return;
    }
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { root: null, threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    const delta = to - start;
    const animate = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const e = 1 - Math.pow(1 - p, 3);
      const next = start + delta * e;
      setValue(next);
      if (p < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, start, to, durationMs]);

  const formatted = value.toFixed(decimals);
  return <span ref={spanRef} className={className}>{prefix}{formatted}{suffix}</span>;
}


