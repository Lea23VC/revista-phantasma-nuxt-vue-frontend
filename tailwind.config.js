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
      },
    },
  },
  plugins: [require("daisyui")],
};
