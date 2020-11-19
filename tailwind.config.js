const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize:{
      "40": "10rem",
    },
    columnCount: [ 1, 2, 3 ],
    columnGap: { // will fallback to 'gap' || 'gridGap' values
      // sm: '1rem',
      // md: '1.5rem',
      // lg: '2rem',
    },
    columnWidth: {
      // sm: '120px',
      // md: '240px',
      // lg: '360px',
    },
    columnRuleColor: false, // will fallback to `borderColor` values
    columnRuleWidth: false, // will fallback to `borderWidth` values
    columnRuleStyle: [
      'none', 'hidden', 'dotted', 'dashed', 'solid',
      'double', 'groove', 'ridge', 'inset', 'outset',
    ],
    columnFill: [ 'auto', 'balance', 'balance-all' ],
    columnSpan: [ 'none', 'all' ],
    extend: {
      
      height: (theme) => ({
        "vh-10": "10vh",
        "vh-15": "15vh",
        "vh-70": "70vh",
        "80": "20rem",
        "96": "24rem",
      }),
      screens: {
        "2xl": "1400px",
      },
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        
        "helpmate-100": "#e9f7f7",
        "helpmate-200": "#a9e0e0",
        "helpmate-300": "#7dd1d1",
        "helpmate-400": "#52c1c1",
        "helpmate-500": "#27b2b2",
        "helpmate-600": "#1f8e8e",
        "helpmate-700": "#176b6b",
        "helpmate-800": "#104747",
        "helpmate-900": "#082424",
        "primary":{

        },
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
  variants: {
    columnCount: ['responsive'],
    columnGap: ['responsive'],
    columnWidth: ['responsive'],
    columnRuleColor: ['responsive'],
    columnRuleWidth: ['responsive'],
    columnRuleStyle: ['responsive'],
    columnFill: ['responsive'],
    columnSpan: ['responsive'],
  },
  plugins: [require('tailwindcss-multi-column')(),],
};
