import React from 'react';
import Layout, { SectionHead, DetailsButton } from '../layout/Layout';

const NPT_LETTER_ID = '1QdqLp4riClyC4h7HTQwxoch-Bj31Fa2D';
const driveView = (id) => `https://drive.google.com/file/d/${id}/view`;
const driveDl = (id) => `https://drive.google.com/uc?export=download&id=${id}`;
const driveImg = (id, w = 1400) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;

const NPT_POINTS = [
  'Easily learns new skills and work methods',
  'Has proper systems of record-keeping',
  'Understands product categories and market knowledge',
  'Has marketing & graphic ability — online ads and product images',
  'Strong coordination with internal and external teams',
  'Strong character and abstains from drugs',
  'Good communicator — effective in negotiation to serve the business',
];

export default function Warehouse() {
  return (
    <Layout
      active="warehouse"
      title="Warehouse & logistics — Kaung Myat Thu"
      description="Warehouse Supervisor at NPT Group (6 Jan – 1 Nov 2024) and a later freelance shelf-mapping and POS project for a car-parts shop."
    >
      <SectionHead
        num="02"
        kicker="Warehouse · NPT Group + freelance CSM"
        title="Keeping stock visible — and right."
        sub="Two separate engagements, on different timelines: Warehouse Supervisor at NPT Group (2024), and later a freelance shelf-map and POS project for a car-parts shop (CSM)."
      />

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>One employment role, one separate freelance project.</h3>
        <p><b>NPT Group</b> was a job: Warehouse Supervisor, <b>6 January – 1 November 2024</b>. <b>CSM</b> was a separate freelance project of roughly four months, with no confirmed dates — so none are given, and it is not placed inside the NPT timeline.</p>
        <p>They involve the same subject (stock), not the same workflow. At NPT I kept the inventory record by hand. For CSM I set up an EPOS/stock system and designed a shelf-location map, then handed it over.</p>
      </div>

      <div className="panel">
        <h4>NPT Group · Warehouse Supervisor — 6 Jan 2024 → 1 Nov 2024</h4>
        <p style={{ margin: '0 0 14px' }}>
          Family-shared distributor — electronics / tools (hand tools, power tools, chainsaws, grinders) and
          raw material (nails, tape, glue, pipes, valves, bars, bathroom accessories). There was no stock system
          in place, so every item was registered by hand every day. Sign-off: co-founder letter of recommendation dated <b>08 Dec 2024</b>.
        </p>
        <ul className="ai-reader-list" style={{ margin: '0 0 14px' }}>
          {NPT_POINTS.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <figure style={{ margin: '18px 0 0' }}>
          <a href={driveView(NPT_LETTER_ID)} target="_blank" rel="noopener">
            <img
              src={driveImg(NPT_LETTER_ID, 1400)}
              alt="NPT Group reference letter"
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid #dbe3ec', display: 'block' }}
            />
          </a>
          <figcaption className="muted" style={{ fontSize: '.8rem', margin: '8px 0 0' }}>NPT Group reference letter — the co-founder letter of recommendation dated 08 Dec 2024. <a href={driveView(NPT_LETTER_ID)} target="_blank" rel="noopener">Open full size ↗</a></figcaption>
        </figure>
        <div className="note-box">
          <svg viewBox="0 0 24 24"><path d="M12 9v5m0 4h.01m10-5a10 10 0 10-20 0 10 10 0 0020 0z"/></svg>
          <span>Warehouse detail is from my own records, not the company's internal systems. No NPT stock list survives; the reference letter above is the supporting document for this role.</span>
        </div>
      </div>

      <div className="panel">
        <h4>CSM · car-parts shop — shelf mapping + EPOS <span className="muted" style={{ fontWeight: 400 }}>(separate freelance project, roughly four months)</span></h4>
        <p style={{ margin: '0 0 14px' }}>
          A separate freelance project, roughly four months. Exact dates are not confirmed, so none are given and it is
          not placed inside the NPT timeline. In a densely stocked shelf of 100+ pieces, one row can hold 30+ similar
          variants that fit different vehicles — a missing item gets assumed out of stock and duplicate stock arrives.
          I set up the EPOS/stock system and designed the shelf-location map (MR-2 / SH-1 / R3, brand variants), then
          handed it over; staff performed the physical counts.
        </p>
        <ul className="ai-reader-list" style={{ margin: '0 0 14px' }}>
          <li>The surviving files are partial working samples, not the final inventory.</li>
          <li>The portfolio POS demo uses fictional stock, prices and test sales — it is separate from actual operational records.</li>
          <li>Intended benefits are not presented as measured savings.</li>
        </ul>
        <div className="dl-row">
          <a className="btn-dl btn-dark" href="https://drive.google.com/file/d/10XOAv-I7ROVnqFqA8jomVxnuDPe1q93F/view" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
            CSM shelf-map master · XLSX
          </a>
          <a className="btn-dl btn-dark" href="https://drive.google.com/file/d/1gvdPV9ZSIcRrEmkzuLp4Lqzx6WXwnt1D/view" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
            Point of Sale — automotive portfolio demo · XLSM
          </a>
        </div>
        <div className="note-box">
          <svg viewBox="0 0 24 24"><path d="M12 9v5m0 4h.01m10-5a10 10 0 10-20 0 10 10 0 0020 0z"/></svg>
          <span>The POS file is a portfolio demonstration built for the automotive shop (fictional stock, prices and test sales) — it is not the grocery-sales workbook.</span>
        </div>
      </div>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">What this demonstrates</span>Running a warehouse on hand-kept records — and, in a separate freelance project, setting up an EPOS/stock system and shelf-location map and handing it over.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
