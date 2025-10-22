"use client";
import { motion } from "framer-motion";

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
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-2xl" />
          
          {/* Content */}
          <div className="relative border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  &lt; 7 days
                </div>
                <p className="text-zinc-400">
                  From first call to live system. No drawn-out timelines.
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  100+
                </div>
                <p className="text-zinc-400">
                  SaaS pricing models analyzed to build this framework.
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  100%
                </div>
                <p className="text-zinc-400">
                  You own your ad accounts, pixels, and every asset we build.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
