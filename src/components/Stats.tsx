export function Stats() {
  const items: { value: string; label: string }[] = [
    { value: "50+", label: "B2B Campaigns" },
    { value: "3.5x", label: "Average ROI" },
    { value: "1k+", label: "Demos Generated" },
  ];
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl container-px">
        <div className="grid grid-cols-3 gap-6 text-center">
          {items.map((i, idx) => (
            <div key={idx} className="card-surface rounded-xl p-6">
              <div className="text-2xl md:text-3xl font-semibold">{i.value}</div>
              <div className="mt-1 text-sm text-zinc-400">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


