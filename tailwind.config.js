import { fontScale, platformSelect } from "nativewind/theme";

const colors = require("./themes/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", '"./components/**/*.{js,jsx,ts,tsx}"'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        system: platformSelect({
          ios: "Inter",
          android: "Inter",
          default: "Inter",
        }),
      },
    },
    colors,
  },
  plugins: [],
}