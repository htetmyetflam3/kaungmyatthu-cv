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
      description="Warehouse Supervisor at NPT Group (Jan – Nov 2024) and car-parts shelf-mapping + POS work — the Supervisor-fallback case."
    >
      <SectionHead
        num="02"
        kicker="Warehouse · NPT Group + CSM"
        title="Keeping stock visible — and right."
        sub="Warehouse Supervisor (NPT Group) and freelance shelf-mapping + POS for a car-parts shop."
      />

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>Discipline, not software.</h3>
        <p>Two distinct operations roles, one pattern: when the system is just a ledger and a person's memory, discipline is the asset. I registered every item every day and kept both workplaces reviewable — the warehouse floor and the car-parts shelf.</p>
        <p>Both roles run the same pattern — keeping the work visible and right where there is no software for it. That is the honest strength of a retail floor: discipline, not systems.</p>
      </div>

      <div className="panel">
        <h4>NPT Group · Warehouse Supervisor — 6 Jan 2024 → 1 Nov 2024</h4>
        <p style={{ margin: '0 0 14px' }}>
          Family-shared distributor — electronics / tools (hand tools, power tools, chainsaws, grinders) and
          raw material (nails, tape, glue, pipes, valves, bars, bathroom accessories). No software, no shelf maps
          — every item registered every day. Sign-off: co-founder letter of recommendation dated <b>08 Dec 2024</b>.
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
        <h4>CSM · car-parts shop — shelf mapping + Point of Sale</h4>
        <p style={{ margin: '0 0 14px' }}>
          Project-based freelance (~4 months), advising an automotive-parts shop. In a densely stocked shelf
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
          <a className="btn-dl btn-dark" href="https://drive.google.com/file/d/1eBNVITMSUjBNzgKOq48TjG386SGfyaJF/view" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
            Point of Sale · XLSM
          </a>
        </div>
        <div className="note-box">
          <svg viewBox="0 0 24 24"><path d="M12 9v5m0 4h.01m10-5a10 10 0 10-20 0 10 10 0 0020 0z"/></svg>
          <span>Working samples of the map and the POS, not the final inventory. Intended benefits are not presented as measured savings.</span>
        </div>
      </div>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">What this demonstrates</span>The capacity to run a warehouse and a shelf system where there is no software — and to keep a team coordinated with both the floor and the paperwork.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
