import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Elegant high-end serif — display / headlines.
const serif = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

// Clean neutral body.
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalwayne.com"),
  title: "Wayne Capital — Buy. Build. Own.",
  description:
    "Wayne Capital is a private investment company that acquires businesses, invests in real estate, takes positions in public companies, and builds new ventures — and holds them for the long term.",
  openGraph: {
    title: "Wayne Capital — Buy. Build. Own.",
    description:
      "A private investment company that acquires businesses, invests in real estate, takes positions in public companies, and builds new ventures — and holds them for the long term.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
