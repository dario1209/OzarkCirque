import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000500",
        paper: "#ffffe2",
        cream: "#fffcd6",
        plum: "#7e286e",
        "plum-deep": "#882660",
        aubergine: "#272034",
        gold: "#f5cf0c",
        crimson: "#db3f46",
        tangerine: "#f47a20",
        teal: "#64a7ad",
        jade: "#1d9371",
        gray: "#a6a1ae",
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-hanken)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
