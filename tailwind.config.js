/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        displayRegular: ["Poppins-Regular", "sans-serif"],
        displayBold: ["Poppins-Bold", "sans-serif"],
        displaySemibold: ["Poppins-Semibold", "sans-serif"],
      },
      colors: {
        primary: "#7f00ff",
        primaryHover: "#5900b2",
        primaryLight: "#FAF9F6",
        primaryDark: "#202020",
        primaryDarker: "#191919",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        shine: "shine 3s linear infinite",
      },
    },
  },
  plugins: [],
};
