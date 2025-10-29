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
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Why SaaS founders work with us
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-3 mb-12 text-center text-zinc-400"
        >
          We fix unit economics, launch fast, and keep you in full control.
        </motion.p>
        {/* Grid with persuasive points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Offer first, not ad first",
              desc: "We tune your front end so ads pay for themselves from day one, then scale what prints cash.",
            },
            {
              title: "Go live in under 7 days",
              desc: "A straight‑line build. Ads, landing page, tracking and booking flow shipped fast.",
            },
            {
              title: "Payback you can see",
              desc: "We instrument CAC, payback and funnel steps. No vanity metrics, only timing and yield.",
            },
            {
              title: "Own the system",
              desc: "You keep ad accounts, pixels, creatives, dashboards and pages. Built in your stack.",
            },
            {
              title: "Proven frameworks",
              desc: "Templates for B2B SaaS adapted to your ICP and offer, no bloated experiments.",
            },
            {
              title: "Flexible engagement",
              desc: "Launch and handoff or retain us to optimize, your choice. We keep ops light and clear.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-colors bg-white/[0.01]"
            >
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
