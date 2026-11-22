import React from 'react';
import Layout, { SectionHead, DetailsButton } from '../layout/Layout';

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
        <h3>Hand-kept records first, then a system of my own.</h3>
        <p>Two separate engagements, not one continuous story. At <b>NPT Group</b> I was Warehouse Supervisor from 6 January to 1 November 2024, keeping the stock record by hand. The <b>car-parts shop (CSM)</b> came later as a freelance project, after the 321 role, on its own timeline.</p>
        <p>NPT had no stock system to work from, so discipline carried it. CSM needed something built, so I designed the shelf map and a working POS demo. Different problems, same subject — knowing where the stock is.</p>
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
        <div className="note-box">
          <svg viewBox="0 0 24 24"><path d="M12 9v5m0 4h.01m10-5a10 10 0 10-20 0 10 10 0 0020 0z"/></svg>
          <span>Warehouse detail is from my own records, not the company's internal systems. Signed reference letter — confirmed.</span>
        </div>
      </div>

      <div className="panel">
        <h4>CSM · car-parts shop — shelf mapping + Point of Sale <span className="muted" style={{ fontWeight: 400 }}>(freelance, after the 321 role)</span></h4>
        <p style={{ margin: '0 0 14px' }}>
          A separate freelance engagement, later than the NPT warehouse role and after my time at 321 — not part of either job. Project-based, advising an automotive-parts shop. In a densely stocked shelf
          of 100+ pieces, one row can hold 30+ similar-looking variants that fit different vehicles — a missing
          item gets assumed out of stock, a replacement arrives, the original reappears, and both keep scarce
          shelf space. I designed the master shelf map and a POS demo so staff can identify the code, find the
          position (MR-2 / SH-1 / R3), confirm the variant, replenish the same location.
        </p>
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
          <span>Working samples of the map and the POS, not the final inventory. The POS file is a portfolio demonstration built for the automotive shop — it is not the grocery-sales workbook, and intended benefits are not presented as measured savings.</span>
        </div>
      </div>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">What this demonstrates</span>Running a warehouse on hand-kept records when there was no system — and later building the shelf map and POS demo a shop needed once the work called for one.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
