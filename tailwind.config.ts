import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0057A8",
          light: "#1A73C8",
          dark: "#003F7A",
        },
        accent: {
          DEFAULT: "#FF6B35",
          light: "#FF8A5C",
          dark: "#E0501A",
        },
        gold: "#F5C518",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0057A8 0%, #003F7A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
