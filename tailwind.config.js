/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        primary: "#037EF3",
        secondary: "#0CB9C1",
        tertiary: "#7552CC",
        black: "#222222",
        white: "#F3F4F7",
        gray: "#CACCD1",
        gv: "#f85a40",
        gta: "#0cb9c1",
        gte: "#f48924",
        1986: "#8f3c2c",
        1996: "#693b3b",
        2006: "#6581b4",
        2016: "#71a1c5",
      },
    },
  },
  plugins: [],
};
