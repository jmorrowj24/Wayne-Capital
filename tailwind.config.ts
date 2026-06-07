import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // True-dark canvas + surfaces. Fixed hex — these are the structure.
        ink: "#0A0A0C",
        surface: {
          DEFAULT: "#0E0E12",
          raised: "#141419",
        },
        // Text scale.
        fg: "#FAFAFA",
        muted: "#9A9AA6",
        dim: "#5A5A66",
        // The ONE electric accent. Driven by --accent (RGB channels) in
        // globals.css, so the whole site re-themes from a single line.
        // <alpha-value> enables text-accent, border-accent/20, bg-accent/10, etc.
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        // Big bold display headlines.
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Body copy.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Small uppercase labels / eyebrows / stats — the "tech" signal.
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.24em",
      },
      maxWidth: {
        wrap: "1280px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Infinite marquee — track is duplicated, so -50% loops seamlessly.
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Slow drifting aurora blob in the hero.
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(6%, -4%, 0) scale(1.12)" },
          "66%": { transform: "translate3d(-5%, 5%, 0) scale(0.94)" },
        },
        // Live "Active" status dot.
        "accent-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.85s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 1.1s ease forwards",
        marquee: "marquee 32s linear infinite",
        "aurora-drift": "aurora-drift 22s ease-in-out infinite",
        "accent-pulse": "accent-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
