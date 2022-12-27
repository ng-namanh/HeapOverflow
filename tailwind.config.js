/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
        spacing: {
          desktop: '100px',
          mobile: '10px',
        },
        screens: {
          xl: { max: "px" }, // desktop
          // => @media (max-width: 1279px) { ... }
    
          lg: { max: "1023px" }, // larger ipad
          // => @media (max-width: 1023px) { ... }
    
          md: { max: "767px" }, // ipad
          // => @media (max-width: 767px) { ... }
    
          sm: { max: "639px" }, // mobile
          // => @media (max-width: 639px) { ... }
        },
        fontSize: {
          base: '14px',
          md: '48px',
          lg: '64px',  
        }
    },
  },
  plugins: [],
}
