/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Quicksand', 'sans-serif'],
      'Lobster': ['Lobster Two', 'sans-serif']
    },
    extend: {
      colors: {
        'custom-pink': '#FCB4B4',
        'custom-pink2': '#FCC0B3',
        'custom-pinkFooter' : '#FDC3C3',
        'custom-pinkFuerte': '#EE426C'
      },
    },
  },
  plugins: [],
}

