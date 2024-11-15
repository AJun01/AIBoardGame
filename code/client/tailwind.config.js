/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#3a3a3a",
        mainFont: "#E2DDD5",
        mainGreen: "#ADB87F",
        darkGreen: "#7B874F",
        mainRed: "#CC686A",
        darkRed: "#A74244",
        mainBlue: "#89A4AF",
      },
      fontFamily: {
        primary: ["Concert One", "sans-serif"],
        secondary: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
