"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Move the preloaded iframe into the visible container
    const preloadedIframe = document.getElementById('calendly-preload-iframe') as HTMLIFrameElement;
    
    if (preloadedIframe && containerRef.current) {
      const clonedIframe = preloadedIframe.cloneNode(true) as HTMLIFrameElement;
      clonedIframe.id = 'calendly-visible-book';
      clonedIframe.style.width = '100%';
      clonedIframe.style.height = '720px';
      clonedIframe.style.border = '0';
      
      containerRef.current.appendChild(clonedIframe);
      setIsLoaded(true);
    }
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
    </main>
  );
}
