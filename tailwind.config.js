/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0068D9",
        secondary: "#292E32",
        tertiary: "#003384",
      },
      backgroundColor: {
        primary: "#ffffff",
        secondary: "#F9F9F9",
        tertiary: "#E5F0FB",
        primaryBlue : "#0068D9",
        secondaryBlue : "#003384"
      },
    },
  },
  plugins: [],
};