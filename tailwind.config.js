/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontSize: {
        xxxs: "10px",
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "32px",
      },
      fontFamily: {
        Inter: "Inter",
        Roboto: "'Roboto', sans-serif",
      },
      boxShadow: {
        sliderbtnShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
        popupBoxShadow: "0px 20px 50px 0px rgba(18, 27, 33, 0.20);",
      },
      colors: {
        primary: "#000000",
        secoundary: "#ffffff",
        textblack: "#1a1a1a",
        gray500: "#131827",
        gray5002: "#6b7280",
        gray800: "#1f2937",
        gray200: "#e5e7ev",
        gray600: "#4b5563",
        gray700: "#374151",
        rose600: "#e11d48",
        slate700: "#334155",
        rose600: "#e11d48",
        rose600: "#e11d48",
        zinc700: "#3F3F46",
        borderpeople: "#F3FBFE",
        gary400: "#BDBDBD",
        zinc100: "#808080",
        gary300: "#D1D5DB",
      },
      backgroundImage: {
        name: "url",
        linearWhite:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 72.92%);",
      },
    },
  },
  plugins: [],
};
