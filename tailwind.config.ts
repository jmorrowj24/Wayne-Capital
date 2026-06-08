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
        // Elegant high-end serif — display / headlines (the "Main Street" voice).
        serif: ["var(--font-serif)", "Georgia", "serif"],
        // Clean neutral body.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Monospace — the cold "Wall Street" / label voice.
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
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
        // Slow cinematic image zoom on the warm side.
        "zoom-slow": {
          "0%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.1)" },
        },
        // Hairline divider drawing in from one end.
        "draw-y": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        "draw-x": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        // Calm, premium easing — no bounce.
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 1.2s ease forwards",
        "zoom-slow": "zoom-slow 22s ease-out forwards",
        "draw-y": "draw-y 1.1s cubic-bezier(0.22,1,0.36,1) forwards",
        "draw-x": "draw-x 1.1s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
