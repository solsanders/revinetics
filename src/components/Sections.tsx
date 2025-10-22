"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhyUs() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="text-2xl md:text-3xl font-semibold">Why SaaS founders talk to us first</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Offer-first, not ad-first",
              desc: "We re-engineer your SaaS into a premium DFY front end so paid ads fund themselves in Month 1.",
            },
            {
              title: "Simple, testable funnels",
              desc: "A lean landing page, direct CTA, and instrumentation to see payback timing—not vanity metrics.",
            },
            {
              title: "Full transparency",
              desc: "You own ad accounts, pixels, creatives, and dashboards. We build in your stack.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card-surface rounded-xl p-6 hover:glow transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-[rgba(42,127,255,0.15)] border border-[rgba(42,127,255,0.35)] flex items-center justify-center text-sm">{idx + 1}</div>
              <h3 className="mt-4 text-lg font-medium">{item.title} —</h3>
              <p className="mt-2 text-zinc-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RealProblem() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-2xl md:text-3xl font-semibold">
          The real blocker isn’t ads. It’s cash-flow math.
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-4 max-w-3xl text-zinc-300">
          Most B2B SaaS subscriptions are \$100–\$400/month while paid CAC lands at \$300–\$600+. Payback takes months, which stalls growth even when campaigns “work.” We fix timing—not just targeting—so acquisition can be cash-positive from Day 1.
        </motion.p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-surface rounded-xl p-6">
            <p className="text-sm text-zinc-400">Old: Subscription-Only (12–30 mo payback)</p>
            <div className="mt-3 h-3 w-full rounded-full bg-zinc-800">
              <div className="h-3 rounded-full bg-zinc-500" style={{ width: "85%" }} />
            </div>
          </div>
          <div className="card-surface rounded-xl p-6">
            <p className="text-sm text-zinc-400">New: With DFY Front-End (0–1 mo payback)</p>
            <div className="mt-3 h-3 w-full rounded-full bg-zinc-800">
              <div className="h-3 rounded-full" style={{ width: "12%", background: "linear-gradient(90deg, #2A7FFF, #6BA7FF)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProfitSwitch() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-2xl md:text-3xl font-semibold">
          The Fix — The Revinetics ‘Profit Switch’
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Reposition",
              desc: "Add a premium DFY front end (onboarding, integrations, data migration) priced at $2k–$5k while the subscription stays the same.",
            },
            {
              title: "Build",
              desc: "A direct-response landing page, booking flow, and paid ads that sell the outcome—not the feature list.",
            },
            {
              title: "Optimize",
              desc: "Instrumentation, weekly adjustments, and scale once CAC is covered by the upfront revenue.",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card-surface rounded-xl p-6 hover:glow transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[rgba(42,127,255,0.15)] border border-[rgba(42,127,255,0.35)] flex items-center justify-center">{idx + 1}</div>
                <h3 className="text-lg font-medium">{step.title}</h3>
              </div>
              <p className="mt-3 text-zinc-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Economics() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-2xl md:text-3xl font-semibold">
          Before vs After Economics
        </motion.h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[650px] border-separate border-spacing-y-2">
            <thead className="text-sm text-zinc-400">
              <tr>
                <th className="text-left font-medium">Metric</th>
                <th className="text-left font-medium">Old: Subscription-Only</th>
                <th className="text-left font-medium">New: With DFY Front-End</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Upfront revenue", "$0", "$2,000–$5,000"],
                ["Subscription", "$100–$400/mo", "$100–$400/mo"],
                ["Month-1 cash flow", "Negative", "Positive"],
                ["CAC payback", "12–30 months", "0–1 month"],
                ["Growth limit", "Cash on hand", "Operational capacity"],
              ].map((row, i) => (
                <tr key={i} className="card-surface rounded-xl">
                  {row.map((col, j) => (
                    <td key={j} className="px-4 py-4 first:rounded-l-xl last:rounded-r-xl">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-400">
          We don’t promise magic ROAS. We change <em>when</em> you collect revenue.
        </p>
      </div>
    </section>
  );
}

export function Deliverables() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-2xl md:text-3xl font-semibold">
          What You Get
        </motion.h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {["Offer design", "Funnel build", "Ad assets", "Tracking setup", "Launch & iterate"].map((item, idx) => (
            <li key={idx} className="card-surface rounded-xl p-4 text-center">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-zinc-400">Delivered in 7–14 days.</p>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-2xl md:text-3xl font-semibold">
          Pricing
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-surface rounded-xl p-6">
            <p>Setup: from $3,000 (one-time)</p>
            <p className="mt-2">Management: $1,500–$3,000/mo (optional)</p>
          </div>
          <div className="card-surface rounded-xl p-6">
            <p>Ad spend: paid directly by the client</p>
            <p className="mt-2">Timeline: 7–14 days to live</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQs() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-2xl md:text-3xl font-semibold">
          FAQs
        </motion.h2>
        <div className="mt-6 divide-y divide-zinc-800">
          {[
            {
              q: "Who pays for the ads?",
              a: "You do. We run everything inside your accounts so you retain full ownership and history.",
            },
            {
              q: "What if the DFY offer is heavy to fulfill?",
              a: "We scope a premium but realistic implementation—often onboarding, integrations, or data migration—and design it around your team’s capacity.",
            },
            {
              q: "How fast can we launch?",
              a: "Most builds ship in 7–14 days: offer, landing page, ads, tracking, and booking flow.",
            },
            {
              q: "Do you guarantee results?",
              a: "No guarantees. We focus on fixing unit economics so payback timing makes sense. We’ll map what needs to be true for Month‑1 cash-positivity before we start.",
            },
            {
              q: "Who owns the assets?",
              a: "You own everything: ad accounts, creatives, pixels, dashboards, and pages.",
            },
            {
              q: "Which channels do you use?",
              a: "Typically Meta, LinkedIn, and Google depending on audience and intent. We test fast and keep what compounds.",
            },
          ].map(({ q, a }, idx) => (
            <details key={idx} className="group">
              <summary className="cursor-pointer list-none py-4 flex items-center justify-between">
                <span className="text-base md:text-lg">{q}</span>
                <span className="text-zinc-400 group-open:text-accent">+</span>
              </summary>
              <div className="pb-4 text-zinc-400"><p>{a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { title: "15‑min discovery", desc: "We understand your pricing, funnel, and current payback timing." },
    { title: "45‑min strategy", desc: "We map your ‘Profit Switch’ and scope the DFY front end." },
    { title: "7–14 day build", desc: "Offer, page, ads, tracking, and launch—all in your stack." },
    { title: "Optimize & scale", desc: "Weekly iterations. Retainer optional once live." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl container-px">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="card-surface rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[rgba(42,127,255,0.15)] border border-[rgba(42,127,255,0.35)] flex items-center justify-center">{i + 1}</div>
                <div className="text-lg font-medium">{s.title}</div>
              </div>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoWeWorkWith() {
  const bullets = [
    "B2B SaaS with $10k–$200k MRR",
    "Teams of 5–50 with a working product",
    "$100–$400/mo subscription price point",
    "Paid ads currently unprofitable or slow payback",
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl container-px">
        <h2 className="text-2xl md:text-3xl font-semibold">Who we work with</h2>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {bullets.map((b, i) => (
            <li key={i} className="card-surface rounded-xl p-4">{b}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-zinc-400">If this sounds like you, we’ll map your Profit Switch on a free strategy call.</p>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl container-px">
        <div className="card-surface rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to stop bleeding cash on acquisition?</h3>
          <div className="mt-6">
            <Link href="/book" className="btn-primary glow rounded-full px-6 py-3 text-base font-medium">
              Book Your Free Strategy Call
            </Link>
          </div>
          <p className="mt-3 text-sm text-zinc-400">We’ll map your Profit Switch in 15 minutes.</p>
        </div>
      </div>
    </section>
  );
}


