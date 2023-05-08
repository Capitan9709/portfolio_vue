/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sobre': "url('../../public/webDeveloper.png')",
      },
    },
  },
  plugins: [],
}

