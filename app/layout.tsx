import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Big bold display headlines.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Body copy.
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Small uppercase labels / eyebrows / stats — the "tech" signal.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalwayne.com"),
  title: "Wayne Capital — Buy. Build. Own.",
  description:
    "Wayne Capital is a private investment company that acquires businesses, invests in real estate, takes positions in public companies, and builds new ventures — and holds them for the long term.",
  openGraph: {
    title: "Wayne Capital — Buy. Build. Own.",
    description:
      "A private investment company that buys, builds, and owns for the long term. No funds. No flipping. No expiration date.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
