// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/react-calculator/', // Update this to your repository name
  plugins: [react()]
});
