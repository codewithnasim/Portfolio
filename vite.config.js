import { defineConfig } from 'vite';

export default defineConfig({
  // Specify the entry point
  build: {
    rollupOptions: {
      input: 'main.jsx'
    }
  }
});
