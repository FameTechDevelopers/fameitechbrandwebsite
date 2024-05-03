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
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "testimonial-hover": "linear-gradient(180deg,#4d4d4d 25%,#0f0f0f 100%)", // Add hover variant
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