module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.{html,md}',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
