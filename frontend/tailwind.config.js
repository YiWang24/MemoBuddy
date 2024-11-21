/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        homeBtnBg: 'rgba(249, 248, 255, 0.75)',
        cost: 'rgb(219 234 254)',
      },
    },
  },
  plugins: [],
};
