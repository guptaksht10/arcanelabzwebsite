// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // make sure this includes your files
  ],
  theme: {
    extend: {
      fontFamily: {
        arcane: ['ArcaneFont', 'sans-serif'], // reference the font-family you defined in CSS
      },
    },
  },
  plugins: [],
}
