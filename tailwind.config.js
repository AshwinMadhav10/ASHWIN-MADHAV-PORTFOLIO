/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F7F7",
        paper: "#FFFFFF",
        ink: "#111111",
        "ink-soft": "#2B3031",
        muted: "#5F696B",
        line: "#D9E2E4",
        cobalt: "#7DA2A9",
        green: "#668F96",
        coral: "#111111",
        gold: "#B6CCD1",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 22px 70px rgba(17, 17, 17, 0.10)",
        crisp: "0 1px 0 rgba(17, 17, 17, 0.08)",
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(rgba(125, 162, 169, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 162, 169, 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
