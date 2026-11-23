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
        sub="Two separate engagements, on different timelines: Warehouse Supervisor at NPT Group (2024), and later a stock register, shelf map and till mock-up for a car-parts shop (CSM)."
      />

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>One employment role, one separate freelance project.</h3>
        <p><b>NPT Group</b> was a job: Warehouse Supervisor, <b>6 January – 1 November 2024</b>. <b>CSM</b> was a separate freelance project of roughly four months, with no confirmed dates — so none are given, and it is not placed inside the NPT timeline.</p>
        <p>They involve the same subject (stock), not the same workflow. At NPT I kept the inventory record by hand. At CSM there was no till system at all, so I registered the stock, gave every part a location, mapped the shop, built a till mock-up and trained the staff on it.</p>
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
          <span>The warehouse records here are my own working notes from the role; the reference letter above is my supporting document from NPT.</span>
        </div>
      </div>

      <div className="panel" id="csm">
        <h4>CSM · car-parts shop — stock register, shelf map, till mock-up <span className="muted" style={{ fontWeight: 400 }}>(freelance, about four and a half months)</span></h4>

        <p style={{ margin: '0 0 12px' }}>
          The shop had no till system of any kind. To know what was in stock you need a POS; to run a POS you need the
          stock registered — and the shop was stuck on both sides of that circle. I heard about it through a friend whose
          family knew the shop, went in to look, and stayed for what turned into four and a half months.
        </p>
        <p style={{ margin: '0 0 12px' }}>
          The job was to register every item with an ID and give each one a location, so a part could be found by code
          instead of by memory. The owners are older men, careful with what they know, and they did not want their stock
          relocated: when a customer asked for a part they needed to walk straight to it, and a map that moved their
          shelves took that away from them. So the map had to describe the shop as it stood — the relocation was
          something to earn, not to impose.
        </p>
        <p style={{ margin: '0 0 12px' }}>
          I was on a time-based arrangement, not fixed hours: no check-in, no check-out. The one rule was to tell them
          when I wasn&rsquo;t coming, so they wouldn&rsquo;t count me for lunch. That also meant the shop was never the
          same twice. Some days I arrived at ten, some days at one, and by then new stock had come in, items I had
          registered had sold, and the codes I had prepared for them no longer matched the shelf. A middle-sized
          warehouse turns over: most lines carry thirty pieces at most, and the shelf changes all day. Re-registering the
          same shelf would have eaten the project.
        </p>
        <p style={{ margin: '0 0 12px' }}>
          So I split it. They would do the ground stock count themselves once registration was complete, and I would do
          the mapping and the codes — explain it, share it, walk them through it — so that when new stock landed they
          could find where it had been placed without me re-walking the aisle. Their count and my map met in the middle.
          It was scoped at three months and took four and a half.
        </p>
        <p style={{ margin: '0 0 14px' }}>
          When the mapping was finished I built a till mock-up in Excel — item codes, scanning, receipt, the stock line
          moving on the sale — and gave the store staff a training session on it. The shop had not bought POS software
          yet; when they do, the vendor will teach their own screens. What I left behind is the register, the codes, the
          map underneath them, and a staff team that knows what a till is meant to do with all three.
        </p>

        <table className="mini-table" style={{ margin: '4px 0 16px' }}>
          <thead><tr><th>What the map holds</th><th>Sheets</th></tr></thead>
          <tbody>
            <tr><td>Shelf Map Guide, Shelf Location Index, Shelf Map Review</td><td>3</td></tr>
            <tr><td>Category stock records — water pump, brake pad, CV joint, brake/clutch, belt, fuel pump, joint, ground pump, ground rope, stock setup</td><td>11</td></tr>
            <tr><td>KMT-brand records — brake, filter, pump, oil, belt, joint, utility</td><td>7</td></tr>
            <tr><td>Shelf-map sheets, one per rack and shelf (<code>MR-1-SH-1</code>, <code>MR-1-SH-2</code>, <code>MR-2-SH-1</code>, <code>SH-3</code>)</td><td>7</td></tr>
            <tr><td>Category update records — the same categories, revised</td><td>8</td></tr>
            <tr><td>Contents</td><td>1</td></tr>
          </tbody>
        </table>

        <div className="dl-row">
          <a className="btn-dl btn-dark" href="https://drive.google.com/file/d/10XOAv-I7ROVnqFqA8jomVxnuDPe1q93F/view" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
            CSM shelf-map master · XLSX
          </a>
          <a className="btn-dl btn-dark" href="https://drive.google.com/file/d/1gvdPV9ZSIcRrEmkzuLp4Lqzx6Wxwnt1D/view" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
            Till mock-up — the one I trained the staff on · XLSM
          </a>
        </div>
        <p className="muted" style={{ fontSize: '.82rem', margin: '12px 2px 0' }}>
          The till file runs on test stock and test prices — it was built to train the staff, not to hold shop data.
        </p>
      </div>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">What this demonstrates</span>Breaking a shop out of the no-till/no-stock circle: registering the stock, mapping it without moving the owners\u2019 shelves, training the staff on a mock-up, and delivering four and a half months of work against a three-month scope.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
