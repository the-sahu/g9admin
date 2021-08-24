module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      body: ["Nunito", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
      colors: {
        primary: {
          DEFAULT: "#009746",
          50: "#D1FFE6",
          100: "#ADFFD3",
          200: "#70FFB2",
          300: "#00FD75",
          400: "#00CA5E",
          500: "#009746",
          600: "#007034",
          700: "#005C2B",
          800: "#003318",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {
      width: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
