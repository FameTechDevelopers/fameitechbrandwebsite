const { Oswald } = require('next/font/google');

 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7502",
        pri_blue:"#020CE7",
        sec_blue: "#040A94",
        pri_black:"#1A1A1A",
        pri_purple:"#352DFA",
        pri_yellow:"#F2D119",
        pri_orange:"#FFA500",
        dark_blue: "#010246",
      },
    fontFamily: {
       custom: ['Oswald', 'sans-serif'],
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "testimonial-hover": "linear-gradient(126deg, #ff7400 0%, #fc9f57 100%)", // Add hover variant
        "pricing-gradient":"linear-gradient(126deg,#ffca59 0%, #fc9f57 50%, #ff7400 100%)"
      },
      animation: {
        fade: "fadeOut 0.5s ease-in-out",
      },
      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [],
};