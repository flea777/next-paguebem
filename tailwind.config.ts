import type { Config } from "tailwindcss";

const { fontFamily } = require('tailwindcss/defaultTheme')


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

      },
      fontFamily: {
        spartan: ['League Spartan', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
