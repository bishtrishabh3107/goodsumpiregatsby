module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    extend: {},
  },
  variants: {
    display: ["group-hover"],
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
        "2xl": { min: "1441px", max: "3000px" },
      },
    },
  },
  plugins: [],
}
