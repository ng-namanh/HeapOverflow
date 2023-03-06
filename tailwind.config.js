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
          desktop: '60px',
          mobile: '10px',
        },
        screens: {
          xxl:{ max: "1536px" }, 
          xl: { max: "1280px" }, 
          lg: { max: "1023px" },
          '@md': { min: '640px', max: '913px' },
          sm: { max: "639px" },
        },
        fontSize: {
          base: '16px',
          md: '48px',
          lg: '64px',  
        }
    },
  },
  plugins: [],
}
