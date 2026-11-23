# Kaung Myat Thu — Résumé

This repo is my résumé and portfolio, published on GitHub Pages.

- Résumé → https://htetmyetflam3.github.io/kaungmyatthu-cv/
- CV → https://htetmyetflam3.github.io/kaungmyatthu-cv/
- Portfolio → https://htetmyetflam3.github.io/kaungmyatthu-cv/portfolio.html
- 321 work record → https://htetmyetflam3.github.io/kaungmyatthu-cv/work-record.html

## Running it locally

```bash
npm install
npm run dev        # http://localhost:5173 — reads src/, reloads on save
npm run build      # writes dist/
npm run preview    # serves dist/ exactly as Pages will
```

`npm run dev` and `npm run preview` load `tools/net-shim.cjs` first. Some
containers refuse the system call Node uses to list network interfaces, so
`os.networkInterfaces()` throws `Unknown system error 13` and Vite dies while
printing its banner. The shim hands Vite an empty list instead, which only
costs the "Network:" line.

No server, no Vite:

```bash
npm run build && cd dist && python3 -m http.server 8080
```

Opening `dist/index.html` straight off the disk will not work — the pages are
ES modules, and browsers block module scripts on `file://`.
