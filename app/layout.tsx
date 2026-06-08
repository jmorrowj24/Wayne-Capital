import type { Metadata, Viewport } from "next";
import { Jost, Schibsted_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

// Wordmark logo only.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-jost",
});

// Body / UI.
const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Serif accents (italic display).
const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalwayne.com"),
  title: "Wayne Capital — Where Main Street meets Wall Street",
  description:
    "Wayne Capital is a private investment firm. We bring Wall Street discipline to the established Main Street businesses that power the Midwest.",
  openGraph: {
    title: "Wayne Capital — Where Main Street meets Wall Street",
    description:
      "A private investment firm bringing Wall Street discipline to the established Main Street businesses, real estate, and operators that power the Midwest.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${sans.variable} ${serif.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
