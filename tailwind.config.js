import twPresets from '@jswork/presets-tailwind';
import { twTransform } from '@jswork/tgv-transformer';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [twPresets],
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    transform: twTransform
  },
  theme: {
    extend: {
      fontFamily: {
        cn: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        en: ['sans-serif'],
        num: ['sans-serif']
      }
    }
  },
  plugins: [
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
