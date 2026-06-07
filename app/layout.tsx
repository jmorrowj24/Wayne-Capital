import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waynecapital.com"),
  title: "Wayne Capital — Buy. Build. Own.",
  description:
    "Wayne Capital is a private investment company focused on acquiring businesses, investing in real estate, building new ventures, and compounding capital for the long term.",
  openGraph: {
    title: "Wayne Capital — Buy. Build. Own.",
    description:
      "A private investment company acquiring businesses, investing in real estate, building ventures, and compounding capital for the long term.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
