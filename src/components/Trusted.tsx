"use client";

const logos = [
  "/logos/HubSpot_Logo.svg",
  "/logos/Salesforce.com_logo.svg",
  "/logos/Slack_Technologies_Logo.svg",
  "/logos/Zendesk_logo.svg",
  "/logos/Asana_logo.svg",
];

export function Trusted() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <p className="text-center text-sm uppercase tracking-wider text-zinc-500 mb-10">
          Systems Trusted by B2B leaders
        </p>
        <div className="marquee edge-fade">
          <div className="marquee-track">
            {[...logos, ...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="logo-item h-8 w-auto mx-12"
              />
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-zinc-600 max-w-2xl mx-auto">
          The world's top SaaS brands scaled using high-ticket systems like ours.
        </p>
      </div>
    </section>
  );
}
