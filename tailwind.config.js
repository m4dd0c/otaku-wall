/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pop_semibold: 'Poppins_600SemiBold',
        pop_extrabold: 'Poppins_800ExtraBold',
        pop_medium: 'Poppins_500Medium',
      }
    },
  },
  plugins: [],
};
