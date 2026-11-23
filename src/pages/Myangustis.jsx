import React from 'react';
import Layout, { SectionHead, DetailsButton } from '../layout/Layout';

export default function Myangustis() {
  return (
    <Layout
      active="myangustis"
      title="Myangustis — Kaung Myat Thu"
      description="A project of mine — a Burmese text engine for Myanmar documents (Zawgyi / Unicode / legacy fonts), still being built."
    >
      <SectionHead
        num="04"
        kicker="Case study · Burmese text toolchain"
        title="Myangustis — a Myanmar-language text engine."
        sub="Not NLP — extraction, cleaning and proofreading for Myanmar documents."
      />

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>What the engine actually does.</h3>
        <p>Myangustis is a <b>Myanmar text engine — not NLP</b>. It takes a Myanmar document — <code>.pdf</code> or <code>.docx</code>, Zawgyi or Unicode, old legacy fonts included — and writes it back out as a clean <code>.pdf</code>, <code>.docx</code>, or <code>.txt</code>.</p>
        <p>The parser runs through three stages: take in (validate, unpack, prepare), parse (detect each page's decoding lane, clean the text, return one marked-up string per page), and write (render the output type the name asks for). The only thing an operator ever calls is <code>convert("input.pdf", "output.docx")</code>.</p>
      </div>

      <div className="panel">
        <h4>Architecture — three stages</h4>
        <table className="mini-table">
          <thead>
            <tr><th>Stage</th><th>What it does</th><th>Where it lives</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>1 · Take in</td>
              <td>Checks size, lands a temp file, prepares the file (qpdf expands/decrypts PDFs; DOCX packages are validated). Nothing is held whole in memory.</td>
              <td>@entry → @init</td>
            </tr>
            <tr>
              <td>2 · Parse</td>
              <td>Reads the prepared file, works out each page's encoding (Unicode / Zawgyi / legacy font), cleans the text, and returns one marked-up string per page (<code>&lt;h1&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>).</td>
              <td>@parse</td>
            </tr>
            <tr>
              <td>3 · Write</td>
              <td>Renders the page strings to the file type the output name asks for. Never re-opens the original.</td>
              <td>@output</td>
            </tr>
          </tbody>
        </table>
        <div className="note-box">
          <svg viewBox="0 0 24 24"><path d="M12 9v5m0 4h.01m10-5a10 10 0 10-20 0 10 10 0 0020 0z"/></svg>
          <span><strong>Built-in rules.</strong> One judgement decides each page's decoding lane, once — decoders execute, they never second-guess. The parser is woken per job and exits when idle; only 2 files convert at a time; output writing happens only after parsing returns.</span>
        </div>
      </div>

      <div className="panel">
        <h4>Discipline, not hype — test record</h4>
        <p style={{ margin: '0 0 14px' }}>Latest full run (2026-11-11 · Node 22.22.3 · clean checkout): <b>320 tests · 303 pass · 0 fail · 17 skipped</b> — per suite: site 99/99, parser 120/120 (17 skipped), engine 42/42, paths 30/30, tools 12/12.</p>
        <ul className="ai-reader-list" style={{ margin: '0 0 14px' }}>
          <li>Skipped tests are enumerated and visible — nothing silently dropped.</li>
          <li>No PDF lane is skipped: real qpdf (or the pikepdf shim) resolves to a runner in all environments.</li>
          <li>Active development — pushed 2026-11-21. Repo age does not describe the work; the codebase and test record do.</li>
        </ul>
        <div className="dl-row">
          <a className="btn-dl btn-dark" href="https://github.com/htetmyetflam3/Myangustis" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            Open the repository ↗
          </a>
        </div>
      </div>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">What this demonstrates</span>Care, range, and discipline on a hard, niche problem — building a working Burmese text toolchain end to end, with tests kept green.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
