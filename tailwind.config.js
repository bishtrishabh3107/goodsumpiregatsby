module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        textMain: "var(--text-main)",
        textSecondary: "var(--text-secondary)",
      },
      screens: {
        sm: { min: "100px", max: "425px" },
        md: { min: "426px", max: "768px" },
        lg: { min: "769px", max: "1024px" },
        xl: { min: "1025px", max: "1440px" },
        xxl: { min: "1441px", max: "3000px" },
      },
    },
  },
  plugins: [],
}