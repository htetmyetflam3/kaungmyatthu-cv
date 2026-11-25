import React from 'react';
import Layout, { SectionHead } from '../layout/Layout';

const PROJECTS = [
  {
    kicker: 'alive',
    title: 'Yumeyuki.info',
    body: 'Myanmar legal overseas employment agency. Still alive — and the most-used web stack of the three. I built it and I keep it running.',
    badge: 'alive',
  },
  {
    kicker: 'alive',
    title: 'TTS-AE.com',
    body: 'I built it for his company. The mail is alive — they still use it.',
    badge: 'mail in use',
  },
  {
    kicker: 'current',
    title: 'Writermorphosis.com',
    body: "A blog and book app I keep alive. A friend is helping me hire for it \u2014 he does not need it; I built it to keep myself afloat.",
    badge: 'current app',
  },
];

export default function Projects() {
  return (
    <Layout
      active=""
      title="Previous projects — Kaung Myat Thu"
      description="Three sites I built and still look after — Yumeyuki, TTS-AE and Writermorphosis."
    >
      <SectionHead
        num="04"
        kicker="Freelance · web stack"
        title="Previous web-development projects."
        sub="Three projects made for survival — Yumeyuki (alive), TTS-AE (mail in use), Writermorphosis (current app)."
      />

      {PROJECTS.map((p) => (
        <article key={p.title} className="overview-card">
          <div className="overview-kicker">{p.kicker}</div>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <div className="dl-row">
            <span className="sheet-chip">{p.badge}</span>
            {p.href && (
              <a className="btn-dl" href={p.href} target="_blank" rel="noopener noreferrer">{p.hrefLabel} <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
            )}
          </div>
        </article>
      ))}

      <div className="dl-row" style={{ marginTop: 10 }}>
        <a className="btn-dl" href="index.html">← Back to resume</a>
        <a className="btn-dl" href="portfolio.html">Portfolio</a>
      </div>
    </Layout>
  );
}
