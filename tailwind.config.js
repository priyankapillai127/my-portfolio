/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',                                // <- enables next-themes toggle
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',               // scan everything in /src
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {},
  },
  plugins: [],
};
