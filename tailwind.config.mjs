/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    backgroundColor: ({ theme }) => ({
      accent: {
        DEFAULT: theme("colors.accent.flip"),
        flip: theme("colors.accent.DEFAULT"),
      },
      primary: {
        DEFAULT: theme("colors.primary.flip"),
        flip: theme("colors.primary.DEFAULT"),
      },
      success: {
        DEFAULT: theme("colors.success.flip"),
        flip: theme("colors.success.DEFAULT"),
      },
    }),
    colors: {
      accent: {
        DEFAULT: "#4b5563",
        flip: "#f9fafb",
      },
      primary: {
        DEFAULT: "#3b82f6",
        flip: "#eff6ff",
      },
      success: {
        DEFAULT: "#22c55e",
        flip: "#f0fdf4",
      },
    },
    extend: {},
  },
  plugins: [],
};
