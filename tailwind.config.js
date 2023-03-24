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
        gv: "#f85a40",
        gta: "#0cb9c1",
        gte: "#f48924",
        1986: "#71a1c5",
        1996: "#8f3c2c",
        2006: "#693b3b",
        2016: "#6581b4",
      },
    },
  },
  plugins: [],
};
