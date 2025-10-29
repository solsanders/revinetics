"use client";
import { useEffect, useRef, useState } from "react";

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Move the preloaded iframe into the visible container
    const preloadedIframe = document.getElementById('calendly-preload-iframe') as HTMLIFrameElement;
    
    if (preloadedIframe && containerRef.current) {
      // Clone the iframe so we can reuse it on both pages if needed
      const clonedIframe = preloadedIframe.cloneNode(true) as HTMLIFrameElement;
      clonedIframe.id = 'calendly-visible-cta';
      clonedIframe.style.width = '100%';
      clonedIframe.style.height = '720px';
      clonedIframe.style.border = '0';
      
      containerRef.current.appendChild(clonedIframe);
      setIsLoaded(true);
    }
  }, []);

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 cta-gradient" aria-hidden />
      <div className="mx-auto max-w-6xl container-px relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Ready to stop bleeding cash on acquisition?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 text-center max-w-2xl mx-auto">
            Pick a slot below. We'll map your Profit Switch and show you the exact numbers.
          </p>

          {/* Calendly Preloaded Iframe */}
          <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>
            {/* Glow effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-blue-500/20 to-accent/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,123,255,0.3)] border border-white/30">
              <div ref={containerRef} style={{ minWidth: "320px", height: "720px", width: "100%" }} />
            </div>
          </div>
      </div>
    </section>
  );
}
