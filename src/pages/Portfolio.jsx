import React from 'react';
import Layout from '../layout/Layout';
import '../styles/portfolio.css';

const WORK = [
  {
    href: 'case-study.html',
    kicker: 'Case study · 321 Ecolife',
    title: 'Branch reporting and daily coordination',
    body: 'Assistant Supervisor at the North Okkalapa branch: my own time-based daily checklist, selected workplace records, TikTok follow-up and customer feedback — with the account-level follower records kept separate from the daily entries.',
    go: 'Open the case study →',
  },
  {
    href: 'content.html',
    kicker: 'Scripts & writing',
    title: 'Product scripts, venue stories and social copy',
    body: 'Burmese product-video scripts, a story-led venue script, and translation and adaptation samples — shown as text, not as pictures of pages.',
    quote: {
      text: '“ဆံသားက ထူပြီး အကောက်လည်းကောင်းလို့ ဘယ်လိုဖြောင့်ဖြောင့် မဖြောင့်ဖြစ်နေတဲ့သူတွေအတွက် Labbell Professional Vitalist Extra Strong Rebonding System ရောက်လာပါပြီ။”',
      note: 'IMB3 script, Scene 1',
    },
    go: 'Read the scripts →',
  },
  {
    href: 'warehouse.html',
    kicker: 'Warehouse & systems',
    title: 'Stock records and a shelf-location system',
    body: 'NPT Group Warehouse Supervisor (January – November 2024), keeping the stock record by hand — and, separately, a roughly four-month freelance project for a car-parts shop where I set up an EPOS/stock system and shelf-location map.',
    go: 'Open warehouse & CSM →',
  },
  {
    href: 'ai.html',
    kicker: 'Prompt engineering',
    title: 'An unfinished manuscript on prompting',
    body: 'My own self-authored exploration of prompting, LLM behaviour and human–AI interaction. Unfinished, and presented as such.',
    go: 'Open the AI study →',
  },
  {
    href: 'projects.html',
    kicker: 'Web work',
    title: 'WordPress builds',
    body: 'Yumeyuki.info — a Myanmar legal overseas employment agency; TTS-AE.com — a UAE company project; Writermorphosis.com — the current build.',
    go: 'Open projects →',
  },
  {
    href: 'myangustis.html',
    kicker: 'Own project',
    title: 'Myangustis — Myanmar-language text tooling',
    body: 'A project of my own: extracting text from documents, organising it and supporting proofreading for Myanmar-language material.',
    go: 'Open Myangustis →',
  },
  {
    href: 'about.html',
    kicker: 'Background',
    title: 'The longer story',
    body: 'How the warehouse, branch and writing work connect — the years, the gaps and what I did in between.',
    go: 'Read about me →',
  },
  {
    href: 'index.html',
    kicker: 'CV',
    title: 'One-page résumé',
    body: 'Experience, education, skills and references — the version to send with an application.',
    go: 'Open the CV →',
  },
];

export default function Portfolio() {
  return (
    <Layout
      active="portfolio"
      title="Kaung Myat Thu — Portfolio"
      description="Selected work of Kaung Myat Thu — content scripts, social-media reporting, retail operations and systems work."
    >
      <section className="pf-hero">
        <div className="kicker">Portfolio</div>
        <h1>Retail experience. Content writing. <em>Practical digital work.</em></h1>
        <p>Selected work from retail operations, social-content coordination and script writing, alongside personal web and AI-writing projects. I am interested in marketing roles where customer understanding, clear communication and organised follow-through matter.</p>
        <p>Each card below opens the full page for that piece of work — the detail lives there, not here.</p>
        <div className="pf-ctas">
          <a className="btn-primary" href="#work">See the work</a>
          <a className="btn-ghost-hero" href="Kaung-Myat-Thu-Portfolio.pdf" download>Download full portfolio (PDF)</a>
          <a className="btn-ghost-hero" href="Kaung-Myat-Thu-CV.pdf" download>Download CV (PDF)</a>
        </div>
      </section>

      <section className="sec" id="work" style={{ scrollMarginTop: 80 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">01</span> Selected work</div>
            <h2>Eight pages, one per piece of work.</h2>
          </div>
          <p className="sub">Click a card to read the full page.</p>
        </div>

        <div className="card-grid">
          {WORK.map((w) => (
            <a className="work-card" href={w.href} key={w.title}>
              <span className="wc-kicker">{w.kicker}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
              {w.quote && (
                <p className="wc-quote" lang="my">
                  {w.quote.text} <span lang="en" style={{ color: 'var(--muted)' }}>— {w.quote.note}</span>
                </p>
              )}
              <span className="wc-go">{w.go}</span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
