import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Multi-page React build. The entry HTML lives in site/ so the repo root stays
// clear; `root: 'site'` makes Vite treat that folder as the web root, so every
// page still comes out at the top of dist/ (about.html, not site/about.html).
const pages = [
  'index', 'warehouse', 'work-record', 'content', 'myangustis',
  'ai', 'projects', 'about', 'portfolio',
];
const here = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  root: 'site',
  base: './',
  publicDir: here('./public'),
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    fs: { allow: [here('..')] },   // dev server must read src/ and public/, which sit above root
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    outDir: here('./dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p, here('./site/' + p + '.html')])),
    },
  },
});
