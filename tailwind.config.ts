import type { Config } from "tailwindcss";

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        titleGray: "#4F4F4F",
        textGray: "#40423F",
        titleGreen: "#578F47",
        buttonGreen: "#01AB0D",
        darkGreen: "#2f4915",
        goldenYellow: "#FFC300",
        white: "#FFFFFF",
      },
      fontFamily: {
        spartan: ['League Spartan', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
      },
      spacing: {
        '96': '24rem',
      },
      minHeight: {
        '38rem': '38rem',
      },
      borderColor: {
        'gray-300': '#E1E8ED',
      },
      borderRadius: {
        'lg': '0.375rem',
        'md': '0.25rem',
      },
      padding: {
        '8': '2rem',
        '5': '1.25rem',
        '2': '0.5rem',
      },
      fontWeight: {
        'bold': '700',
      },
    },
  },
  plugins: [],
};

export default config;