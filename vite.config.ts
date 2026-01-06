import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/vitejs-vite-mjq1gaza/' : '/',
  plugins: [react()],
}));
