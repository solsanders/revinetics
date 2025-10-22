"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 cta-gradient" aria-hidden />
      <div className="mx-auto max-w-4xl container-px relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-surface rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to stop bleeding cash on acquisition?
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Join the SaaS founders who've turned their ads into profit engines with the Revinetics system.
          </p>
          <Link
            href="/book"
            className="btn-primary rounded-full px-10 py-5 text-lg font-semibold inline-block"
          >
            Book a Free Strategy Call
          </Link>
          <p className="mt-6 text-sm text-zinc-500">
            No credit card required. Free 15-minute consultation included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
