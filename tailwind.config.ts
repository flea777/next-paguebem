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
      boxShadow: {
        custom: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        titleGray: "#4F4F4F",
        textGray: "#40423F",
        titleGreen: "#578F47",
        testimonialTitleGreen: "#367C2F",
        nameTitleGreen: "#01AB0D",
        buttonGreen: "#01AB0D",
        rectangleGreen: "#EDF5EC",
        backgroundGray: "#F6FAF5",
        paragraphBlack: "#1E1E1E"
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
