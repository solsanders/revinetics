"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [selectedDateText, setSelectedDateText] = useState<string>("");
  const [defaultDateText, setDefaultDateText] = useState<string>("");
  const [embedUrl, setEmbedUrl] = useState<string>(
    "https://calendly.com/hello-revinetics/custom-growth-strategy-call-15-mins?hide_gdpr_banner=1&primary_color=007BFF&text_color=1a1a1a&background_color=ffffff"
  );
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const preloadRef = useRef<HTMLDivElement | null>(null);
  const visibleRef = useRef<HTMLDivElement | null>(null);
  const swappedRef = useRef<boolean>(false);
  useEffect(() => {
    // Compute client-side values to avoid hydration mismatches
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setDefaultDateText(
      now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })
    );
    setEmbedUrl(
      `https://calendly.com/hello-revinetics/custom-growth-strategy-call-15-mins?hide_gdpr_banner=1&primary_color=007BFF&text_color=1a1a1a&background_color=ffffff&date=${yyyy}-${mm}-${dd}`
    );
    setIsMounted(true);

    // Load Calendly script and warm up a hidden widget
    const ensureCalendly = () =>
      new Promise<void>((resolve) => {
        if ((window as any).Calendly) return resolve();
        const existing = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        ) as HTMLScriptElement | null;
        if (existing) {
          existing.addEventListener("load", () => resolve());
          return;
        }
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

    ensureCalendly().then(() => {
      try {
        if ((window as any).Calendly && preloadRef.current && !(preloadRef.current as any)._inited) {
          (window as any).Calendly.initInlineWidget({ url: embedUrl, parentElement: preloadRef.current });
          (preloadRef.current as any)._inited = true;
        }
      } catch {}

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || swappedRef.current) return;
            const iframe = preloadRef.current?.querySelector("iframe");
            if (iframe && visibleRef.current) {
              visibleRef.current.appendChild(iframe);
              swappedRef.current = true;
              if ((iframe as any).complete) {
                setIsMounted(true);
              } else {
                iframe.addEventListener("load", () => setIsMounted(true), { once: true });
              }
            } else if ((window as any).Calendly && visibleRef.current) {
              (window as any).Calendly.initInlineWidget({ url: embedUrl, parentElement: visibleRef.current });
              const newIframe = visibleRef.current.querySelector("iframe");
              if (newIframe) newIframe.addEventListener("load", () => setIsMounted(true), { once: true });
              swappedRef.current = true;
            }
            observer.disconnect();
          });
        },
        { rootMargin: "200px 0px" }
      );
      if (visibleRef.current) observer.observe(visibleRef.current);
    });
  }, []);

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* Simple back button */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-6xl h-20 flex items-center container-px">
          <Link href="/" className="text-zinc-400 hover:text-accent transition flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="mx-auto max-w-6xl container-px">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Strategy Call</h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              15 minutes. No obligations. We'll map your Profit Switch and show you the exact numbers.
            </p>
          </div>

          {/* Calendly Inline Widget with enhanced styling */}
          <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>
            {/* Glow effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-blue-500/20 to-accent/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,123,255,0.3)] border border-white/30">
              {!isMounted && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-zinc-100 to-white" />
              )}
              <div ref={visibleRef} style={{ minWidth: "320px", height: "720px", width: "100%" }} />
              {/* Hidden preload container */}
              <div ref={preloadRef} aria-hidden className="absolute -left-[99999px] top-auto w-0 h-0 overflow-hidden" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
