/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.30)",
          "0 45px 65px rgba(0, 0, 0, 0.20)",
        ],
      },
      colors: {
        netflix_bg: "#141414",
        netflix_text_white_light: "#e5e5e5",
      },
      fontFamily: {
        netflix_medium_font: ["Netflix Medium", "sans-serif"],
        netflix_bold_font: ["Netflix Bold", "sans-serif"],
        netflix_bold_reg: ["Netflix Regular", "sans-serif"],
      },
      screens: {
        // sm: '480px',
        // md: '768px',
        md_new: "845px",
        // lg: '976px',
        lg_new: "1150px",
        xl_new: "2000px",
      },
    },
  },
  plugins: [],
};
