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
      boxShadow: {
        custom: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        'green-linear-gradient': 'linear-gradient(107.53deg, #2D4416 23.45%, #39670B 97.14%, #5D8D2E 104.87%, #71AA37 104.87%)',
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
        paragraphBlack: "#1E1E1E",
        borderGreen: "#01AB0D",
        borderGray: "#C9C9C9",
        socialIconGreen: "#2D4416",
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
