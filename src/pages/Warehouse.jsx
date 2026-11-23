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
          <span>The warehouse records here are my own working notes from the role; the reference letter above is my supporting document from NPT.</span>
        </div>
      </div>

      <div className="panel" id="csm">
        <h4>CSM · car-parts shop — shelf-location map and EPOS <span className="muted" style={{ fontWeight: 400 }}>(freelance, roughly four months)</span></h4>
        <p style={{ margin: '0 0 12px' }}>
          CSM sells spare parts across vehicle makes: water pumps, brake pads, CV joints, brake and clutch sets, belts,
          fuel pumps, joints, ground pump and rope. The stock sits in dense shelves where one row can hold thirty or more
          near-identical variants — the same part, a different brand, a different vehicle model, sometimes only the box
          colour to tell them apart. With no location on record, a part that is physically on the shelf gets assumed out
          of stock, gets ordered again, and the duplicate arrives to sit beside the original. Giving every part an
          address, and tying that address to the till, was the job.
        </p>
        <p style={{ margin: '0 0 12px' }}>
          I built the shelf map first. Every position has a code — main rack, shelf, position: <code>MR-1-SH-1</code>,{' '}
          <code>MR-2-SH-1</code>, <code>SH-3</code> — and every part is recorded against one: category, item code, short
          name, brand, family, vehicle model, package colour, description, location and quantity, one tab per category.
          A <b>Shelf Location Index</b> lets staff search by item code, part name or brand and jump straight to the
          position, and a <b>Shelf Map Guide</b> records the code key and the picking and replenishment workflow, so the
          map can be handed to someone else and still be read.
        </p>
        <p style={{ margin: '0 0 12px' }}>
          Then the till. I set up the EPOS on the same item codes: scanning an item pulls its record and price, the sale
          writes the receipt and moves the stock line, and every item in the till list carries the shelf-map tab and row
          it came from. One code now runs from the shelf position to the sale, and from the sale back to the position.
        </p>
        <p style={{ margin: '0 0 14px' }}>
          I handed the map and the system over and walked the staff through it. The physical count was theirs to make;
          what I built is the structure that holds the count, the addresses and the sales together. Where a source label
          could not be confirmed, the map records that instead of guessing a location.
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
            Point of Sale — automotive demo · XLSM
          </a>
        </div>
        <p className="muted" style={{ fontSize: '.82rem', margin: '12px 2px 0' }}>
          The till file is the demo build of that setup: it runs on test stock and test prices, so no live shop pricing
          travels with it.
        </p>
      </div>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">What this demonstrates</span>Keeping a warehouse countable with no software — and, on a freelance project, giving a car-parts shop a shelf address for every part and a till that uses the same codes.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
