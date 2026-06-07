import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black canvas + elevated surfaces. Fixed hex — the structure.
        base: "#0B0B0D",
        surface: {
          DEFAULT: "#141416",
          raised: "#1A1A1D",
        },
        // Text scale (warm off-white through to dim).
        fg: "#F5F3EE",
        muted: "#9A988F",
        dim: "#5E5C55",
        // The ONE accent — restrained warm gold. Driven by --accent (RGB
        // channels) in globals.css, so the whole site re-themes from one line.
        // <alpha-value> enables text-accent, border-accent/30, bg-accent/10, etc.
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        // Elegant high-end serif — display / headlines.
        serif: ["var(--font-serif)", "Georgia", "serif"],
        // Clean neutral body.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        wrap: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        // Calm, premium easing — no bounce.
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 1.2s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
