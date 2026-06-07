import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060C18",
          900: "#0A1322",
          800: "#0F1C30",
          700: "#15273F",
          600: "#1D344F",
        },
        slate: {
          line: "#1E2D42",
          muted: "#8A99AE",
          soft: "#B7C2D0",
        },
        gold: {
          DEFAULT: "#C5A572",
          light: "#D8BE8C",
          dim: "#9C8458",
        },
        ivory: "#F6F4EF",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        wrap: "1240px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 1.2s ease forwards",
        "line-grow": "line-grow 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
