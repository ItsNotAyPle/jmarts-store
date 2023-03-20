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
      keyframes: {
        slideDown: {
          "0%":"opacity:0; transformY(-90%);",
          "100%":"opacity:1; transformY(0);"
        }
      },
      animation: {
        slideDown: 'slideDown 2s'
      }
    },
  },
  plugins: [],
}
