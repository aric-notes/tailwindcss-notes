/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    function ({ addUtilities }) {
      addUtilities(
        (() => {
          let utilities = {};
          Array.from({ length: 100 }, (_, i) => i + 1).forEach((i) => {
            utilities[`.f${i}`] = { fontSize: `${i}px` };
          });
          return utilities;
        })(),
        ['responsive']
      );
    },
    // add z1-10
    function ({ addUtilities }) {
      addUtilities(() => {
        let utilities = {};
        Array.from({ length: 10 }, (_, i) => i + 1).forEach((i) => {
          utilities[`.z${i}`] = { zIndex: i };
        });
        return utilities;
      });
    }
  ]
};
