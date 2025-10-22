"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

export function Hero() {
  return (
    <section className="relative overflow-hidden section noise">
      <div className="absolute inset-0 grid-pattern" aria-hidden />
      <div className="hero-glow" aria-hidden />
      <div className="hero-fade" aria-hidden />
      <div className="mx-auto max-w-5xl container-px text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            We build profitable paid ad systems for B2B SaaS firms.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            We turn your SaaS into a premium, done-for-you front-end that funds
            your ads from Day 1 — so you scale without bleeding cash.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="/book"
              className="btn-primary rounded-full px-8 py-4 text-lg font-semibold"
            >
              Book a Free Strategy Call
            </Link>
            <span className="text-sm text-zinc-500">No fluff. No obligations. 15 minutes.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
