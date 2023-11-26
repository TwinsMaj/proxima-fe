import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
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
