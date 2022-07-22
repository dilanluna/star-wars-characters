/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [
    react(),
    legacy(),
    checker({
      typescript: true,
    }),
    VitePWA({
      manifest: false,
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: [
          '**/*.{html,css,js,ico,png,jpe,jpeg,gif,svg,woff,woff2,eot,ttf,otf}',
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setup-tests.ts'],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].[hash].js',
        chunkFileNames: 'static/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const filePattern = '[name].[hash].[ext]';

          if (assetInfo.name.endsWith('.css')) {
            return `static/css/${filePattern}`;
          }

          if (assetInfo.name.match(/\.(png|jpe?g|gif|svg)$/i)) {
            return `static/img/${filePattern}`;
          }

          if (assetInfo.name.match(/\.(woff|woff2|eot|ttf|otf|svg)$/)) {
            return `static/fonts/${filePattern}`;
          }

          return `static/assets/${filePattern}`;
        },
      },
    },
  },
});
