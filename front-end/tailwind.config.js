const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              DEFAULT: "#1E1E1E",
              foreground: "#FFF",
            },
            primary: {
              DEFAULT: "#ffffff",
              foreground: "#000",
            },

            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
