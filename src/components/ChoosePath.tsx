"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ChoosePath() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl container-px">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Two proven systems for predictable SaaS revenue.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-4 text-center text-zinc-400 text-lg md:text-xl"
        >
          Every SaaS scales differently. Choose the model that fits your growth stage.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left card — Ads & Funnels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative group card-surface neon-card rounded-2xl p-8 hover:glow transition-all hover:-translate-y-0.5 h-full flex flex-col w-full"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,123,255,0.6)] to-transparent" />
            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase tracking-wide text-zinc-400">→ For SaaS companies scaling existing models</div>
              <div className="text-[1.6rem] md:text-[2rem] font-semibold tracking-tight">Ads & Funnels</div>
              <p className="text-zinc-400 text-[1.05rem]">
              Performance-driven acquisition systems that turn qualified traffic into trial signups or demo bookings consistently.
              </p>
              <ul className="space-y-2 text-zinc-300 text-[1.05rem]">
              {[
                "Fast launch: live campaigns in under 7 days",
                "Proven frameworks: tested across high-performing SaaS brands",
                "Scalable traffic: paid systems optimized to grow with spend",
                "Full visibility: real-time performance tracking and reporting",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <svg className="mt-1 h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>{t}</span>
                </li>
              ))}
              </ul>
            </div>
            
          </motion.div>

          {/* Right card — High-Ticket Repositioning + Sales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative group card-surface neon-card rounded-2xl p-8 hover:glow transition-all hover:-translate-y-0.5 h-full flex flex-col w-full"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,123,255,0.6)] to-transparent" />
            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase tracking-wide text-zinc-400">→ For SaaS founders ready to go high-ticket</div>
              <div className="text-[1.6rem] md:text-[2rem] font-semibold tracking-tight">High-Ticket Repositioning + Sales</div>
              <p className="text-zinc-400 text-[1.05rem]">
                We reshape your SaaS into a premium high-ticket offer and build the acquisition engine that powers it.
              </p>
              <ul className="space-y-2 text-zinc-300 text-[1.05rem]">
              {[
                "Offer redesign: reposition your SaaS for premium buyers",
                "Conversion architecture: funnels built to close enterprise clients",
                "Targeted acquisition: paid campaigns focused on decision-makers",
                "Sales integration: plug into your sales team or use Revinetics-Trained Closers",
                "CRM & reporting: included when using our in-house sales team",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <svg className="mt-1 h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>{t}</span>
                </li>
              ))}
              </ul>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}


