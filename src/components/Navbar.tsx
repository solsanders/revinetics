"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[rgba(10,10,10,0.8)] backdrop-blur-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl h-20 flex items-center justify-between container-px">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight">Revinetics</div>
        </Link>
        <Link
          href="/book"
          className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          Book a Strategy Call
        </Link>
      </div>
    </div>
  );
}
