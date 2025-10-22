"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhyUs() {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl container-px">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why SaaS founders work with us
        </motion.h2>
        
        {/* Vertical list layout instead of grid */}
        <div className="space-y-6">
          {[
            {
              title: "Offer-First Strategy",
              desc: "We rebuild your offer before your ads — so payback works from Day 1.",
            },
            {
              title: "Testable Funnels",
              desc: "We measure payback speed, not vanity metrics.",
            },
            {
              title: "Full Transparency",
              desc: "You own all ad accounts, assets, and data.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex items-start gap-6 p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300 hover:bg-white/[0.01]"
            >
              {/* Checkmark icon instead of number */}
              <div className="flex-shrink-0 mt-1">
                <div className="h-6 w-6 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
