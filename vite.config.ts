import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import babel from '@rollup/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', { targets: '> 0.5%, last 2 versions, not dead' }]
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
      ]
    }),
    legacy({
      targets: ['defaults', 'ios>=12', 'ChromeAndroid >= 66'],
      additionalLegacyPolyfills: ['core-js/stable'], // 确保引入 `core-js`
      modernPolyfills: true
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  define: {
    _global: {}
  }
});
