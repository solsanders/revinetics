"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function FinalCTA() {
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
    // Compute today's date client-side to avoid hydration mismatch
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

    // Load Calendly widget script if not already loaded, then init hidden widget
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
          (window as any).Calendly.initInlineWidget({
            url: embedUrl,
            parentElement: preloadRef.current,
          });
          (preloadRef.current as any)._inited = true;
        }
      } catch {}

      // When visible container enters viewport, move the iframe over
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || swappedRef.current) return;
            const iframe = preloadRef.current?.querySelector("iframe");
            if (iframe && visibleRef.current) {
              visibleRef.current.appendChild(iframe);
              swappedRef.current = true;
              // mark loaded when iframe loads
              if ((iframe as any).complete) {
                setIsMounted(true);
              } else {
                iframe.addEventListener("load", () => setIsMounted(true), { once: true });
              }
            } else if ((window as any).Calendly && visibleRef.current) {
              (window as any).Calendly.initInlineWidget({
                url: embedUrl,
                parentElement: visibleRef.current,
              });
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
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 cta-gradient" aria-hidden />
      <div className="mx-auto max-w-6xl container-px relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Ready to stop bleeding cash on acquisition?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 text-center max-w-2xl mx-auto">
            Pick a slot below. We'll map your Profit Switch and show you the exact numbers.
          </p>

          {/* Calendly Inline Widget with background preloading and skeleton */}
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
        </motion.div>
      </div>
    </section>
  );
}
