"use client";
import { motion } from "framer-motion";
import { StatCounter } from "@/components/StatCounter";

export function Credibility() {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background gradient box */}
          <div className="absolute inset-0 rounded-2xl" style={{
            background: "radial-gradient(100% 120% at 0% 0%, rgba(0,123,255,0.08), transparent 60%), radial-gradient(120% 120% at 100% 0%, rgba(0,123,255,0.06), transparent 60%)"
          }} />
          
          {/* Content */}
          <div className="relative border border-white/10 rounded-2xl py-8 md:py-12 px-0 backdrop-blur-sm shadow-[0_20px_80px_-20px_rgba(0,123,255,0.25)]">
            <div className="space-y-10 md:space-y-0 md:flex md:items-stretch md:divide-x md:divide-white/10">
              <div className="flex-1 flex flex-col items-center text-center px-8 md:px-8">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] pb-1 mb-2 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  <StatCounter from={35} to={7} durationMs={3000} prefix="< " suffix=" days" startOnVisible />
                </div>
                <p className="text-zinc-500">From first call to all systems live.</p>
              </div>

              <div className="flex-1 flex flex-col items-center text-center px-8 md:px-8">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] pb-1 mb-2 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  <StatCounter from={0} to={5} durationMs={3000} suffix="×" startOnVisible />
                </div>
                <p className="text-zinc-500">Faster deployment compared to standard SaaS agency build times.</p>
              </div>

              <div className="flex-1 flex flex-col items-center text-center px-8 md:px-8">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] pb-1 mb-2 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  <StatCounter from={0} to={40} durationMs={3000} suffix="%" startOnVisible />
                </div>
                <p className="text-zinc-500">Better ad efficiency from structured testing and funnel optimization.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
