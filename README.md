# Kaung Myat Thu — CV & Portfolio

Welcome to my online CV and portfolio. Here you can learn about my experience in content writing, translation, and web development, and read samples of my work.

- CV: `index.html`
- Portfolio (Vite + Bootstrap): `portfolio.html`

View my CV: https://htetmyetflam3.github.io/kaungmyatthu-cv/

## Development

The portfolio is built with [Vite](https://vitejs.dev/) and [Bootstrap](https://getbootstrap.com/):

- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run build` — production build into `dist/` (hash-fingerprinted assets, CV page copied as-is)
- `npm run preview` — serve the production build

The CV (`index.html`) is a self-contained static page. The portfolio uses a module entry point (`src/main.js`) importing Bootstrap and a custom theme layer (`src/styles/main.css`).
