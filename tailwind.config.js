/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.html", "./content/*.html"],
  theme: {
    extend: {
      colors: {
        'nike-tan': '#f5f5f5',
        'nike-hover-link': '#757575',
      }
    },
  },
  plugins: [],
}

