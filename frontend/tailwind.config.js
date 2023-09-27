/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xm: { min: "300px", max: "680px" },
        ssm: { min: "680px", max: "768px" },
        smd: { min: "768px", max: "1024px" },
        slg: { min: "1024px", max: "1280px" },
        sxl: { max: "1424px", min: "1280px" },
        sxxl: "1424px",
      },
    },
  },
  screen: {
    sm: "600px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  plugins: [],
};
