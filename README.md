# Kaung Myat Thu — Job Application & Portfolio

Multi-page React + Vite site — the portfolio as a job application for Happy Baby One stop baby mart (marketing-led; Digital Marketing Executive primary, Supervisor fallback).

## Pages

Three main pages:

- `index.html` — Resume: CV-style — About (1–2 lines → About), Education, Experience, Freelance, Skills, Services, References. Source of truth for the resume; the static PDF is sent separately.
- `about.html` — personal blog: one post ("About me") — the full story, years inside the body, trauma included, personal-blog region clearly stated. Later: expand to a multi-post index.
- `portfolio.html` — old single-page portfolio (kept as-is, tracked)

Detail pages:

- `case-study.html` — 321 Ecolife case study (separate from warehouse)
- `warehouse.html` — NPT warehouse supervisor + CSM car-parts shelf map / POS
- `content.html` — original writing + client-ready scripts
- `myangustis.html` — Myangustis (own development, Burmese text toolchain)
- `ai.html` — AI / prompt-engineering manuscript
- `projects.html` — freelance web-development safety net (Yumeyuki alive / TTS-AE dead / Writermorphosis current app)

Old static pages kept as-is: `cv.html` (static CV), `portfolio.html` (old single-page portfolio), `src/main.js`, `src/styles/main.css`, `src/assets/` and `public/Kaung-Myat-Thu-Portfolio.pdf`.

## Development

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build into dist/
npm run preview    # serve the production build
```

React pages share `src/layout/Layout.jsx` (topbar, footer, viewer dialog, to-top button) and reuse the same design system as the old static pages: `src/styles/main.css` (navy/teal, Myanmar font) plus Bootstrap. Each page is one HTML entry with its own Vite build chunk.

## Old static assets — kept

`cv.html`, `portfolio.html`, `src/main.js`, `src/styles/main.css`, `src/assets/` and `public/Kaung-Myat-Thu-Portfolio.pdf` are all still tracked in git. The old single-page site is unmodified.

## Build output

`vite build` emits each page as a plain static HTML file with hash-fingerprinted assets. Deployed via the Pages workflow (push to `main` + `workflow_dispatch`).

## Single portfolio PDF

`public/Kaung-Myat-Thu-Portfolio.pdf` is the old PDF built by `tools/build_pdf.py` (not a browser print-to-PDF). Rebuild it after portfolio changes (e.g. privacy edits):

```bash
pip install fpdf2 beautifulsoup4
python3 tools/build_pdf.py public/Kaung-Myat-Thu-Portfolio.pdf
```
