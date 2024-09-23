/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [{
      taskerProLight: {
        "primary": "#66a969",
        "secondary": "#a7cdbf",
        "accent": "#80b7ae",
        "neutral": "#3d4451",
        "base-100": "#f9fbf9",
      }
    }, {
      taskerProDark: {
        "primary": "#56995a",
        "secondary": "#32584a",
        "accent": "#487f76",
        "neutral": "#3d4451",
        "base-100": "#061106",
      }
    }, "winter"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "taskerProDark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

}

