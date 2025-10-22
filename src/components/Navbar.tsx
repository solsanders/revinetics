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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Backdrop blur container */}
      <div className="border-b border-white/[0.08] bg-[rgba(10,10,10,0.85)] backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl h-20 flex items-center justify-between container-px">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/Revinetics_Logo.png" 
              alt="Revinetics" 
              className="h-8 w-auto transition-opacity group-hover:opacity-80"
            />
            <div className="text-2xl font-bold tracking-tight transition-colors group-hover:text-accent">
              Revinetics
            </div>
          </Link>

          {/* CTA Button */}
          <Link
            href="/book"
            className="btn-primary rounded-full px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-xl"
          >
            Book a Call
          </Link>
        </div>
      </div>
      
      {/* Subtle gradient line under navbar */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </nav>
  );
}
