/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        footerText:'#8c8c8c',
        primaryColor:'#069ce2',
        secondaryColor:'#fff',
        titleColor:'#505050',
        textColor:'#505050',
        primaryBg:'#e4eef6',
      },
    },
  },
  plugins: [],
}
