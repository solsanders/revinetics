export function ValueSection() {
  const items = [
    {
      title: "Offer-first positioning",
      desc: "We shape a premium, done-for-you front end so your ads pay for themselves from Day 1.",
    },
    {
      title: "Simple, testable funnel",
      desc: "Lean page, direct CTA, and instrumentation that shows what prints cash.",
    },
    {
      title: "Hands-on launch",
      desc: "We produce assets, set up tracking, and ship a live system in 7–14 days.",
    },
    {
      title: "Scale with clarity",
      desc: "We iterate only on what improves payback timing and capacity—not vanity metrics.",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl container-px">
        <h2 className="text-2xl md:text-3xl font-semibold">Value you’ll get</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="card-surface rounded-xl p-6">
              <div className="text-lg font-medium">{i.title}</div>
              <p className="mt-2 text-zinc-300">{i.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-400">No hype or guarantees—just a clear path to cash-positive acquisition.</p>
      </div>
    </section>
  );
}


