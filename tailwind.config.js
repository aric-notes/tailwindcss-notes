import twPresets from '@jswork/presets-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [twPresets],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        h1: { fontWeight: '700' },
        h2: { fontWeight: '700' },
        h3: { fontWeight: '700' },
        h4: { fontWeight: '700' },
        h5: { fontWeight: '700' },
        h6: { fontWeight: '700' }
      });
    },
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    // function ({ addUtilities }) {
    //   addUtilities(
    //     (() => {
    //       let utilities = {};
    //       Array.from({ length: 100 }, (_, i) => i + 1).forEach((i) => {
    //         utilities[`.f${i}`] = { fontSize: `${i}px` };
    //       });
    //       return utilities;
    //     })(),
    //     ['responsive']
    //   );
    // },
    // add z1-10
    function ({ addUtilities }) {
      addUtilities(() => {
        let utilities = {};
        Array.from({ length: 10 }, (_, i) => i + 1).forEach((i) => {
          utilities[`.z${i}`] = { zIndex: i };
        });
        return utilities;
      });
    },
    function (pluginConfig) {
      const { addComponents } = pluginConfig;
      return addComponents({
        // last-child margin-bottom:0;
        '.mb_': {
          '> *:last-child': {
            marginBottom: 0
          }
        }
      });
    }
  ]
};
