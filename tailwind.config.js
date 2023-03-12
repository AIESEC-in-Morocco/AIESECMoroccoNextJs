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
      },
    },
  },
  plugins: [],
};
