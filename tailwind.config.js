/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Dana-UltraLight": "Dana-UltraLight",
        Dana: "Dana",
        "Dana-Medium": "Dana-Medium",
        "Dana-Bold": "Dana-Bold",
      },
      scale: {
        135: "1.35",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "9rem",
        },
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
