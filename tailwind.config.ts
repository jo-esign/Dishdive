import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kaushan": "var(--font-kaushan)",
        "kodchasan": "var(--font-kodchasan)",
      },
    },
  },
  plugins: [],
};
export default config;
