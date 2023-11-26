import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv-safe';

if (!process.env.CI) {
  dotenv.config({
    example: '.env.example',
  });
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  const envKeys = Object.keys(process.env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(process.env[next]);

    return prev;
  }, {});

  return {
    define: {
      ...envKeys,
    },

    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve('./src'),
        },
      ],
    },
  };
});
