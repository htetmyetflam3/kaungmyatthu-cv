import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Multi-page React build. Each HTML file is a separate entry; Vite builds each
// separately so GitHub Pages serves plain static files.
const pages = [
  'index.html',
  'warehouse.html',
  'case-study.html',
  'content.html',
  'myangustis.html',
  'ai.html',
  'projects.html',
  'about.html',
  'portfolio.html', // old portfolio — kept, untouched
];

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((p) => [p.replace(/\.html$/, ''), fileURLToPath(new URL('./' + p, import.meta.url))])
      ),
    },
  },
});
