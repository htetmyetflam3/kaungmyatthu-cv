import React from 'react';
import Layout from '../layout/Layout';
import '../styles/portfolio.css';

const WORK = [
  {
    href: 'case-study.html',
    kicker: 'Operation Assistant Supervisor · Stalker / 321 Ecolife',
    title: 'Running a branch with no manager above me',
    body: 'Nok branch, January 2024 to January 2025 — the only Stalker staff member on that shop floor. Attendance, daily expense, sales and stock, staff promotion recommendations and TikTok follow-up, reported straight to the sector manager on the board.',
    go: 'Read the work record →',
  },
  {
    href: 'content.html',
    kicker: 'Scripts & writing',
    title: 'Product scripts, venue stories and social copy',
    body: 'Burmese video scripts for hair-care products and for a bar, plus translation and adaptation work. The wording is on the page, in Burmese wherever the script is Burmese.',
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
    body: 'Warehouse Supervisor at NPT Group, January to November 2024, keeping stock by hand. Four months with a car-parts shop came later: their POS and shelf map.',
    go: 'Warehouse and CSM →',
  },
  {
    href: 'ai.html',
    kicker: 'Prompt engineering',
    title: 'A study of how prompting works',
    body: 'How a prompt reaches a model: the layers that negotiate an answer, why a clear request can still come back wrong, and what a good prompt can and cannot do. I wrote the chapters to understand the machinery.',
    go: 'Read the study →',
  },
  {
    href: 'projects.html',
    kicker: 'Web work',
    title: 'WordPress builds',
    body: 'Yumeyuki.info for a legal overseas-employment agency, TTS-AE.com for a company in the UAE, and Writermorphosis.com, the one I am working on now.',
    go: 'See the sites →',
  },
  {
    href: 'myangustis.html',
    kicker: 'Own project',
    title: 'Myangustis — Myanmar-language text tooling',
    body: 'A project of mine: pulling text out of documents, keeping it in order, and checking proofreads against it.',
    go: 'Myangustis →',
  },
  {
    href: 'about.html',
    kicker: 'Background',
    title: 'The years in between',
    body: 'How the warehouse, the shop and the writing fit together, and what each one taught me about stock, people and language.',
    go: 'About me →',
  },
  {
    href: 'index.html',
    kicker: 'CV',
    title: 'One-page résumé',
    body: 'Experience, education, skills and references.',
    go: 'Résumé →',
  },
];

export default function Portfolio() {
  return (
    <Layout
      active="portfolio"
      title="Kaung Myat Thu — Portfolio"
      description="Kaung Myat Thu — branch reporting at 321 Ecolife, Burmese product scripts, a car-parts stock system, WordPress sites and a manuscript on prompting."
    >
      <section className="pf-hero">
        <div className="kicker">Portfolio</div>
        <h1>Retail experience. Content writing. <em>Practical digital work.</em></h1>
        <p>I have worked shop floors, a warehouse and a content desk. What follows is the work I can actually show: the branch records from 321 Ecolife, Burmese scripts for products and a bar, a stock system built for a car-parts shop, a few websites, and a study of how prompting actually works.</p>
        <p>I am looking for marketing work where knowing the customer matters as much as the copy.</p>
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
            <h2>Eight pieces of work.</h2>
          </div>
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
