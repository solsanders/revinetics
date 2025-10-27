"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FinalCTA() {
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

    const handler = () => {};

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

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handler);
    };
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
        </motion.div>
      </div>
    </section>
  );
}
