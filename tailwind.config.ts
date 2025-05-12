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
        primary: "rgba(0, 110, 255, 1)",
        tertiary: "rgba(56, 56, 56, 1)",
        bg: {
          default: "rgba(12, 12, 12, 1)",
          primary: "rgba(24, 24, 24, 1)",
          secondary: "rgba(40, 40, 40, 1)",
        },
      },
      padding: {
        layout: "20px",
      },
      spacing: {
        "1/2": "4px",
        "1": "8px",
        "2": "12px",
        "3": "16px",
        "4": "20px",
        "5": "24px",
      },
      borderRadius: {
        "1/2": "4px",
        "1": "8px",
        "2": "12px",
        "3": "16px",
        "4": "20px", 
        "5": "24px",
      },
    },
  },
  plugins: [],
};

export default config;