/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  content: [],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgb(28 32 93 / 24%) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
