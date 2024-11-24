/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colors inspired by the screenshot theme
        "primary-purple": "#6A5AE0",
        "primary-blue": "#4455F5",
        "light-purple": "#9E99FF",
        "background-dark": "#1E1E2E",
        "background-light": "#F8F8FF",
        "text-dark": "#2A2A35",
        "text-light": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "16px", // General rounded corners for cards and buttons
        lg: "24px",
        full: "9999px", // For circular avatars and floating buttons
      },
      boxShadow: {
        card: "0 8px 24px rgba(0, 0, 0, 0.15)", // For elevated cards
        button: "0 4px 16px rgba(106, 90, 224, 0.4)", // Button hover effect
      },
    },
  },
  plugins: [],
};
