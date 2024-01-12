/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dana: "Dana",
        "Dana-Medium": "Dana-Medium",
        "Dana-Bold": "Dana-Bold",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
