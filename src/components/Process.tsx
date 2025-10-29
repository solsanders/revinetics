"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Process() {
  return (
    <section className="section relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,123,255,0.02)] to-transparent" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      
      <div className="mx-auto max-w-6xl container-px relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-3 text-center text-zinc-400"
        >
          We build and launch your system in days, not months.
        </motion.p>
        
        <div className="relative mt-12">
          {/* Connecting line across steps (desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-14 h-[2px]" style={{ background: "linear-gradient(90deg, rgba(0,123,255,0), rgba(0,123,255,0.6), rgba(0,123,255,0))" }} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Audit",
              desc: "We analyze your SaaS, target market, and current funnel performance.",
            },
            {
              step: "2",
              title: "Build",
              desc: "We create your high-performing ads and landing pages designed to convert.",
            },
            {
              step: "3",
              title: "Launch",
              desc: "We deploy campaigns and go live in under 7 days.",
            },
            {
              step: "4",
              title: "Scale",
              optional: true,
              desc: "We reposition your SaaS into a premium offer and plug in trained closers to build your high-ticket sales engine.",
            },
          ].map((item: any, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative card-surface rounded-2xl p-8"
            >
              {/* Blue accent line on top */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[rgba(0,123,255,0.6)] to-transparent" />
              
              <div className="flex items-center gap-4 mb-5">
                <div className="h-12 w-12 shrink-0 aspect-square rounded-full bg-gradient-to-br from-[rgba(0,123,255,0.2)] to-[rgba(0,123,255,0.05)] border border-[rgba(0,123,255,0.3)] flex items-center justify-center text-lg font-bold leading-none neon-number">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold whitespace-nowrap flex items-center gap-2">
                  {item.title}
                  {item.optional && (
                    <span className="text-xs text-zinc-400 border border-white/10 rounded-full px-2 py-0.5 whitespace-nowrap">optional</span>
                  )}
                </h3>
              </div>
              <p className={`text-zinc-400 leading-relaxed ${idx === 3 ? "opacity-90" : ""}`}>{item.desc}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

