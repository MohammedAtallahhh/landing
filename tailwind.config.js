/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 4px 30px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
