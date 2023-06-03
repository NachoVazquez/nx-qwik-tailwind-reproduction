const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}')],
  theme: {
    extend: {
      colors: {
        my: { color: '#155555' },
      },
    },
  },
  plugins: [],
};
