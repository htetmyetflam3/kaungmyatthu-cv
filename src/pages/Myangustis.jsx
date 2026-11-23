import React from 'react';
import Layout, { SectionHead, DetailsButton } from '../layout/Layout';

export default function Myangustis() {
  return (
    <Layout
      active="myangustis"
      title="Myangustis — Kaung Myat Thu"
      description="My own Burmese language toolkit: segmentation and part-of-speech tagging without regex tokenising, a grammar pass with no model and no language model, and the parser, scraper and proofreading workflow built around it."
    >
      <SectionHead
        num="04"
        kicker="Case study · Burmese language tools"
        title="Myangustis — segmentation, tagging and grammar for Burmese."
        sub="Hand-written rules. No model, and no language model in the loop."
      />

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>What it is.</h3>
        <p>Myangustis is my toolkit for Burmese, built from scratch. It segments Burmese into syllables and words without regex tokenising, and tags each word with its part of speech. The grammar pass — recognising how a sentence is put together, again with no model and no language model — is what I am on now.</p>
        <p>I build it in my spare time. Freelance is what pays; this is where the spare time goes.</p>
      </div>

      <div className="panel">
        <h4>What it does</h4>
        <table className="mini-table">
          <thead>
            <tr><th>Part</th><th>What it does</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Segment</td>
              <td>Splits Burmese into syllables and words by rule — no regex tokenising.</td>
            </tr>
            <tr>
              <td>Tag</td>
              <td>Gives every word its part of speech.</td>
            </tr>
            <tr>
              <td>Grammar</td>
              <td>Recognises how a sentence is built, with hand-written rules, no model and no language model. In progress now.</td>
            </tr>
            <tr>
              <td>Parse</td>
              <td>Turns a PDF or a DOCX into readable text — Zawgyi, Unicode, legacy fonts included — with OCR for scanned pages.</td>
            </tr>
            <tr>
              <td>Scrape</td>
              <td>Collects the PDFs in the first place.</td>
            </tr>
            <tr>
              <td>Proofread</td>
              <td>An agent workflow that reads Burmese text and flags what the rules already catch.</td>
            </tr>
          </tbody>
        </table>
        <div className="note-box">
          <svg viewBox="0 0 24 24"><path d="M12 9v5m0 4h.01m10-5a10 10 0 10-20 0 10 10 0 0020 0z"/></svg>
          <span>The segmenter and the tagger already run. The grammar pass is the piece still being written.</span>
        </div>
      </div>

      <div className="panel">
        <h4>Why there is a parser and a scraper</h4>
        <p style={{ margin: '0 0 12px' }}>I have to write the grammar rules by hand, and hand-written rules need sentences to test against. My sentences were in PDFs, and I had no reliable way to turn a Burmese PDF into clean text, nor anything to fetch the PDFs with. So the scraper and the parser came first, built for the grammar work, and stayed in the project.</p>
        <p style={{ margin: 0 }}>The parser takes a PDF or a DOCX — Zawgyi, Unicode, old legacy fonts included — and returns readable text, one clean string per page. The scraper is what feeds it.</p>
      </div>

      <div className="panel">
        <h4>The corpus that came out of it</h4>
        <p style={{ margin: '0 0 12px' }}>I scraped roughly <b>10,000</b> Burmese PDFs and got clean text out of <b>3,000+</b> of them. The other <b>7,000+</b> are scans, so I added OCR to the parser for the individual books I need source text from.</p>
        <p style={{ margin: 0 }}>That clean text is a corpus of its own, and it is mine to license. Anyone who wants it for language-model work can come and ask, and we will work out the terms.</p>
      </div>

      <div className="panel">
        <h4>Proofreading, before the grammar pass is finished</h4>
        <p style={{ margin: 0 }}>I had a working segmenter and tagger in the repo while I was still writing the grammar pass, and leaving them idle was waste. So I put them to work in an agent workflow that proofreads Burmese text — it reads what is there and flags what my rules say is wrong, on the parts that already work.</p>
      </div>

      <div className="panel">
        <h4>The repository</h4>
        <p style={{ margin: '0 0 12px' }}>I keep the repo public so the work can be read and described. It is <b>not open source</b>: the licence is proprietary, and I do not grant the source code for any purpose. What the licence in the repo says is what applies.</p>
        <p className="muted" style={{ fontSize: '.8rem', margin: '0 0 14px' }}>Last clean checkout: 320 tests, 303 passing, 17 skipped, none failing.</p>
        <div className="dl-row">
          <a className="btn-dl btn-dark" href="https://github.com/htetmyetflam3/Myangustis" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            Open the repository ↗
          </a>
        </div>
      </div>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">In short</span>Rules for a language the tools treat badly, and a corpus that only exists because I needed it done properly.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to the work</DetailsButton>
      </div>
    </Layout>
  );
}
