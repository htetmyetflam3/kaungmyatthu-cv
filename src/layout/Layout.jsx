import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

const NAV = [
  { href: 'index.html', label: 'Resume', key: 'resume' },
  { href: 'about.html', label: 'About me', key: 'about' },
  { href: 'portfolio.html', label: 'Portfolio', key: 'portfolio' },
];

export default function Layout({ active, title, description, children }) {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setToTop(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  useEffect(() => {
    if (!description) return;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [description]);

  return (
    <>
      <div className="accent-line" />
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="index.html">
            <span className="brand-mark">K</span>
            <span>Kaung Myat Thu<small>Resume · Portfolio</small></span>
          </a>
          <nav className="topnav" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.key} href={item.href} className={item.key === active ? 'active' : ''}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap"><section className="sec">{children}</section></main>

      <footer className="site">
        <p>© 2026 Kaung Myat Thu · North Okkalapa · <a href="tel:+959955400017">+959955400017</a></p>
        <p><a href="index.html">← Back to home</a></p>
      </footer>

      <button
        className={toTop ? 'to-top show' : 'to-top'}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</button>
    </>
  );
}

// ─── helpers shared across pages ──────────────────────────────────────────────
export function SectionHead({ num, kicker, title, sub }) {
  return (
    <div className="sec-head">
      <div>
        <div className="sec-kicker"><span className="num">{num}</span> {kicker}</div>
        <h2>{title}</h2>
      </div>
      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

export function DetailsButton({ href, children = 'Details' }) {
  return (
    <a className="btn-dl btn-dark" href={href}>
      <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
      {children}
    </a>
  );
}

// ─── zoomable figure with dialog viewer ───────────────────────────────────────
export function ZoomFigure({ src, alt, caption }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <figure className="figure">
      <button className="zoom" type="button" aria-label={`Enlarge ${alt}`} onClick={() => setOpen(true)}>
        <img src={src} alt={alt} />
      </button>
      <figcaption>{caption}</figcaption>
      {open && (
        <dialog
          id="viewer"
          open
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}
        >
          <div className="viewer-bar">
            <span className="img-cap">{alt}</span>
            <button id="close-viewer" type="button" onClick={() => setOpen(false)}>Close ×</button>
          </div>
          <div className="viewer-scroll"><img src={src} alt={alt} /></div>
        </dialog>
      )}
    </figure>
  );
}
