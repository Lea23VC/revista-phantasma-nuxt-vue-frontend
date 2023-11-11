/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "libre-baskerville": "Libre Baskerville",
        roboto: "Roboto",
        "lulo-clean-one": "LuloCleanOne",
        avenir: "Avenir",
      },
      colors: {
        "phantasma-gray": "rgba(232, 230, 230, 0.75)",
        "phantasma-light-blue": "#36B5CD",
      },
    },
  },
  plugins: [require("daisyui")],
};
