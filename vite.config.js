import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the build works from any sub-path (GitHub Pages, Vercel, file-based hosting)
  base: './',
  server: {
    host: '0.0.0.0',
    allowedHosts: true, // preview/dev behind the Arena proxy
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true, // preview behind the Arena proxy
  },
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        portfolio: fileURLToPath(new URL('./portfolio.html', import.meta.url)),
      },
    },
  },
});
