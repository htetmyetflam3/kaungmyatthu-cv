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

## Single portfolio PDF

`public/Kaung-Myat-Thu-Portfolio.pdf` is a self-designed, self-contained PDF built by `tools/build_pdf.py` (not a browser print-to-PDF). It is served as-is by GitHub Pages; the portfolio hero offers a "Download full portfolio (PDF)" button pointing at it.

Rebuild it after editing the portfolio:

```bash
pip install fpdf2 beautifulsoup4
python3 tools/build_pdf.py public/Kaung-Myat-Thu-Portfolio.pdf
```

The samples section is extracted live from `portfolio.html`, so the PDF always matches the website. Internal links (cover index) jump to sections; the links page lists every file URL.
