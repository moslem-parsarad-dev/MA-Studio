/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
    ],
  theme: {
    extend: {
      colors: {
        darkBlueColor: "#272932",
        darkBlackColor: "#9398a5",
        bluePrimaryColor: "#1C7293",
        skyBlueColor: "#C7EEFF",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
