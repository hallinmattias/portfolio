const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: (theme) => ({
        "screen-2/3": "66vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        80: "20rem",
        96: "24rem",
      }),
      screens: {
        "2xl": "1400px",
      },
      colors: {
        "helpmate-100": "#e9f7f7",
        "helpmate-200": "#a9e0e0",
        "helpmate-300": "#7dd1d1",
        "helpmate-400": "#52c1c1",
        "helpmate-500": "#27b2b2",
        "helpmate-600": "#1f8e8e",
        "helpmate-700": "#176b6b",
        "helpmate-800": "#104747",
        "helpmate-900": "#082424",
        "body": "#32332E",
        "accent-1": "#333",
        "primary": "#729BA9",
        "primary-dark": "#3A5864",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
