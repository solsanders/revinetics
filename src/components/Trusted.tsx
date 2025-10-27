"use client";

const logosRow1 = [
  "/logos/HubSpot_Logo.svg",
  "/logos/salesforce-seeklogo.svg",
  "/logos/Slack_Technologies_Logo.svg",
  "/logos/Zendesk_logo.svg",
  "/logos/Asana_logo.svg",
  "/logos/Monday_logo.svg",
  "/logos/ActiveCampaign_logo.svg",
  "/logos/Pipedrive_Logo.svg",
];

const logosRow2 = [
  "/logos/intercom-1-logo-svg-vector.svg",
  "/logos/Marketo_logo.svg",
  "/logos/Ahrefs_id5KWlBICs_0.svg",
  "/logos/Semrush_logo.svg",
  "/logos/cognism.svg",
  "/logos/CP_Logo_Horizontal_Red.svg",
  "/logos/segment-1.svg",
  "/logos/clickup.svg",
];

export function Trusted() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl container-px">
        <p className="text-center text-sm uppercase tracking-wider text-zinc-500 mb-12">
          Systems Trusted by B2B leaders
        </p>
        
        {/* First Row - Left to Right */}
        <div className="marquee edge-fade mb-8">
          <div className="marquee-track">
            {[...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="logo-item h-8 w-auto mx-10"
              />
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="marquee edge-fade">
          <div className="marquee-track-reverse">
            {[...logosRow2, ...logosRow2, ...logosRow2, ...logosRow2].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="logo-item h-8 w-auto mx-10"
              />
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-zinc-600 max-w-2xl mx-auto">
          The world's top SaaS brands scaled using high-ticket systems like ours.
        </p>
      </div>
    </section>
  );
}
