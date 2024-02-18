/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkmode: "#24272C",
        aeroblue: "#06BEE1",
        textgray: "#7F8493",
        textwhite: "#F5FBEF",
      },
    },
  },
  plugins: [],
};
