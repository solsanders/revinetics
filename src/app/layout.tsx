import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revinetics | Profitable Paid Ad Systems for B2B SaaS Companies",
  description:
    "Launch in under 7 days. We turn your B2B SaaS into a premium done-for-you front end that funds your paid ads from day one. No long payback periods, no cash flow bottlenecks.",
  metadataBase: new URL("https://revinetics.com"),
  keywords: [
    "B2B SaaS paid ads",
    "SaaS customer acquisition",
    "high-ticket SaaS offers",
    "done-for-you SaaS",
    "SaaS CAC optimization",
    "cash-positive acquisition",
    "B2B SaaS growth agency",
    "SaaS ad systems",
  ],
  authors: [{ name: "Revinetics" }],
  creator: "Revinetics",
  publisher: "Revinetics",
  icons: {
    icon: "/Revinetics_BlueGradientLogo.png",
    shortcut: "/Revinetics_BlueGradientLogo.png",
    apple: "/Revinetics_BlueGradientLogo.png",
  },
  openGraph: {
    title: "Revinetics | Profitable Paid Ad Systems for B2B SaaS",
    description:
      "Launch in under 7 days. We turn your B2B SaaS into a premium done-for-you offer that funds your paid ads from day one.",
    url: "https://revinetics.com",
    siteName: "Revinetics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Revinetics_BlueGradientLogo.png",
        width: 1200,
        height: 630,
        alt: "Revinetics - Profitable Paid Ad Systems for B2B SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revinetics | Profitable Paid Ad Systems for B2B SaaS",
    description:
      "Launch in under 7 days. Turn your B2B SaaS into a premium done-for-you offer that funds your paid ads from day one.",
    images: ["/Revinetics_BlueGradientLogo.png"],
    creator: "@revinetics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Add when you have it
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload Calendly script to prevent buffering */}
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {/* Preload Calendly iframe immediately - hidden but loading */}
        <div id="calendly-preload-container" style={{ position: "fixed", left: "-9999px", top: "0", width: "1200px", height: "720px", pointerEvents: "none", visibility: "hidden" }} />

        <Script id="calendly-preload-url" strategy="afterInteractive">{`
          (function(){
            try {
              var container = document.getElementById('calendly-preload-container');
              if (container && !container.querySelector('iframe')) {
                var now = new Date();
                var yyyy = now.getFullYear();
                var mm = String(now.getMonth() + 1).padStart(2, '0');
                var dd = String(now.getDate()).padStart(2, '0');
                var url = 'https://calendly.com/hello-revinetics/custom-growth-strategy-call-15-mins?embed_domain=' + window.location.hostname + '&embed_type=Inline&hide_gdpr_banner=1&primary_color=007BFF&text_color=1a1a1a&background_color=ffffff&date=' + yyyy + '-' + mm + '-' + dd;
                
                var iframe = document.createElement('iframe');
                iframe.id = 'calendly-preload-iframe';
                iframe.src = url;
                iframe.width = '100%';
                iframe.height = '720';
                iframe.frameBorder = '0';
                iframe.title = 'Calendly Preload';
                iframe.style.border = '0';
                
                container.appendChild(iframe);
              }
            } catch(e) {}
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
