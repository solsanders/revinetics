"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [selectedDateText, setSelectedDateText] = useState<string>("");
  const [defaultDateText, setDefaultDateText] = useState<string>("");
  const [embedUrl, setEmbedUrl] = useState<string>(
    "https://calendly.com/hello-revinetics/custom-growth-strategy-call-15-mins?hide_gdpr_banner=1&primary_color=007BFF&text_color=1a1a1a&background_color=ffffff"
  );
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const handler = (event: MessageEvent) => {
      if (typeof event.data !== "object" || !event.data) return;
      const evt = (event.data as any).event as string | undefined;
      if (!evt || !evt.startsWith("calendly.")) return;
      if (evt === "calendly.date_and_time_selected") {
        const payload: any = (event.data as any).payload || {};
        const iso: string | undefined = payload.start_time || payload.startTime || payload.start;
        if (iso) {
          const date = new Date(iso);
          const text = date.toLocaleString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          setSelectedDateText(`Selected: ${text}`);
        }
      }
    };
    window.addEventListener("message", handler);

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

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener("message", handler);
    };
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
              <div 
                className="calendly-inline-widget" 
                data-url={embedUrl}
                style={{ minWidth: "320px", height: "720px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
