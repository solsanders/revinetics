"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trusted } from "@/components/Trusted";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <Hero />
      <Trusted />
      <WhyUs />
      <Process />
      <FinalCTA />
      
      <footer className="py-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl container-px text-center text-sm text-zinc-600">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a href="mailto:hello@revinetics.com" className="hover:text-accent transition">
              hello@revinetics.com
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-accent transition">Terms</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-accent transition">Privacy</a>
          </div>
          <div className="mt-4">© 2025 Revinetics</div>
        </div>
      </footer>
    </main>
  );
}
