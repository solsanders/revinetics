import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revinetics | Profitable Ad Systems for B2B SaaS",
  description:
    "We build profitable ad systems for B2B SaaS. Turn your ads into cash-positive acquisition with done-for-you premium offer systems.",
  metadataBase: new URL("https://revinetics.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Revinetics | Profitable Ad Systems for B2B SaaS",
    description:
      "We build profitable ad systems for B2B SaaS. Turn your ads into cash-positive acquisition with done-for-you premium offer systems.",
    url: "/",
    siteName: "Revinetics",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Revinetics" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revinetics | Profitable Ad Systems for B2B SaaS",
    description:
      "We build profitable ad systems for B2B SaaS. Turn your ads into cash-positive acquisition with done-for-you premium offer systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
