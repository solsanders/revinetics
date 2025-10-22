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
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Reposition",
              desc: "We turn your existing offer into a premium done-for-you front end priced for instant CAC recovery.",
            },
            {
              step: "2",
              title: "Build",
              desc: "We create the funnel, ads, and tracking system designed to show payback timing, not vanity metrics.",
            },
            {
              step: "3",
              title: "Scale",
              desc: "Once your ads fund themselves, we iterate weekly and optimize for maximum front end profit.",
            },
          ].map((item, idx) => (
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
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[rgba(0,123,255,0.2)] to-[rgba(0,123,255,0.05)] border border-[rgba(0,123,255,0.3)] flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-zinc-500"
        >
          Most clients launch in under 7 days—faster than any traditional agency.
        </motion.p>
      </div>
    </section>
  );
}

