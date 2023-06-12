/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =  withMT({
=======
module.exports = {
>>>>>>> 0158647cb4f4c3a0860266ea7983739d9a840404
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
});
=======
}
>>>>>>> 0158647cb4f4c3a0860266ea7983739d9a840404
