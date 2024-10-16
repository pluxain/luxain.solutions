/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    colors: {
      danger: {
        accent: colors.red[300],
        DEFAULT: colors.red[500],
        solid: colors.red[50],
      },
      info: {
        accent: colors.cyan[300],
        DEFAULT: colors.cyan[500],
        solid: colors.cyan[50],
      },
      primary: {
        accent: colors.blue[300],
        DEFAULT: colors.blue[500],
        solid: colors.blue[50],
      },
      success: {
        accent: colors.green[300],
        DEFAULT: colors.green[500],
        solid: colors.green[50],
      },
      warning: {
        accent: colors.orange[300],
        DEFAULT: colors.orange[500],
        solid: colors.orange[50],
      },
    },
    extend: {},
  },
  plugins: [],
};
