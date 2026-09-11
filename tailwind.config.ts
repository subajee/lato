import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff2ec",
          100: "#ffe0d1",
          200: "#ffc0a3",
          400: "#ff7a3d",
          500: "#f9531e",
          600: "#e23c0c",
          700: "#bb2f0a",
        },
        accent: {
          400: "#ffc21f",
          500: "#ffb200",
        },
        gray: {
          50: "#faf9f7",
          100: "#f3f1ee",
          200: "#e7e3de",
          300: "#d3cdc5",
          400: "#9c948a",
          500: "#6f665c",
          600: "#4d453c",
          700: "#362f28",
          800: "#241f1a",
          900: "#161210",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22, 18, 16, 0.06), 0 1px 3px rgba(22, 18, 16, 0.05)",
        hover:
          "0 12px 28px -10px rgba(226, 60, 12, 0.22), 0 6px 12px -8px rgba(22, 18, 16, 0.12)",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
