import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light, warm-neutral palette (Tesla / Jane-Street calm).
        paper: "#FFFFFF",
        cream: "#F6F5F2", // warm off-white
        ink: "#17181C", // near-black, warm
        muted: "#6B6E76",
        faint: "#9A9CA3",
        dark: "#121316", // the one dark section
        // The single accent. Monochrome ink by default — swap --accent in
        // globals.css for a quiet tone and the whole site re-themes.
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        // Wordmark logo only.
        jost: ["var(--font-jost)", "system-ui", "sans-serif"],
        // Body / UI.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Serif accents (italic display).
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.24em",
      },
      maxWidth: {
        wrap: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
