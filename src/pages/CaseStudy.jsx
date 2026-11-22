import React from 'react';
import Layout, { SectionHead, DetailsButton } from '../layout/Layout';

const CHECKLIST_ID = '1EztkzxGGndfXrqhImbfm46UEDr5k0Njo';
const PHOTO_ID = '1XSHBpjyd76gkiF0c-Dwis8Xx0oSxuN0l';
const LETTER_ID = '1Cqm_FKQFeSKrrH5xQkIkZFm8GYzUrSoK';
const DRIVE_VIEW = (id) => `https://drive.google.com/file/d/${id}/view`;
const DRIVE_DL = (id) => `https://drive.google.com/uc?export=download&id=${id}`;
const DRIVE_IMG = (id, w = 1600) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
const WORKBOOK_ID = '1w9JDMM0OM9vBKksnJO-1iJoqpJECOq3J';
const WORKBOOK_VIEW = `https://drive.google.com/file/d/${WORKBOOK_ID}/view`;
const WORKBOOK_DL = `https://drive.google.com/uc?export=download&id=${WORKBOOK_ID}`;

export default function CaseStudy() {
  return (
    <Layout
      active="case-study"
      title="321 Ecolife · Case study — Kaung Myat Thu"
      description="Assistant Supervisor at 321 Ecolife (Nok Branch) — shop floor, staff administration and TikTok growth, 157k → 298k."
    >
      <SectionHead
        num="01"
        kicker="Case study · 321 Ecolife"
        title="321 Ecolife — keeping branch work and social-content follow-up connected"
        sub="Assistant Supervisor · North Okkalapa branch · 2024–2025"
      />

      <div className="overview-card">
        <div className="overview-kicker">Role overview</div>
        <p>My role covered frontline branch operations and staff administration as well as reporting and social-content support. I checked attendance and staff updates, followed up sales and stock records, coordinated with team leaders and cashiers, and supported TikTok work through captions, voiceover/editing coordination, posting checks and reporting.</p>
        <p>To keep recurring responsibilities from being missed, I used my own time-based daily to-do list. It connected opening checks, scheduled follow-ups and closing controls in one place.</p>
      </div>

      <section className="sec" id="daily-workflow" style={{ scrollMarginTop: 90 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">02</span> Daily workflow</div>
            <h2>My daily workflow</h2>
          </div>
          <p className="sub">A personal reminder system for a role with many small, recurring responsibilities.</p>
        </div>

        <div className="panel">
          <p>I made this checklist as a personal reminder system for a role with many small, recurring responsibilities. It helped me remember what to check, whom to follow up with and when to return to the same records during the day.</p>
          <p>The original combines staff administration, cash and sales checks, stock coordination, TikTok follow-up, reporting and closing tasks. The examples below are a readable summary; the original document is shown alongside them.</p>

          <h4 style={{ marginTop: 22 }}>Summary of my original checklist</h4>
          <table className="mini-table" style={{ marginTop: 8 }}>
            <thead><tr><th>Stage</th><th>Examples from the checklist</th></tr></thead>
            <tbody>
              <tr><td>Opening and information flow</td><td>9:00 attendance/check-in approval; 9:15 Viber attendance and updates; 9:20 generator-use checks; 9:30 bank transfer/change tasks.</td></tr>
              <tr><td>Morning content and sales checks</td><td>9:45 video captions; 10:20 team-leader discussion; 10:35 deposit-slip checks; 10:40 late-sale entry checks; 10:45 stock-team pivot follow-up; 10:50 salesperson-total/net-sale comparison.</td></tr>
              <tr><td>Posting and staff follow-up</td><td>11:00 check the scheduled 10:00 TikTok post and comment replies; closing-check follow-up with cashiers; break-book and other-floor checks.</td></tr>
              <tr><td>Reporting and afternoon coordination</td><td>12:10–1:00 personal reporting, review and notes; 2:15 check the 1:00 TikTok post/replies; 2:20 online-sale payment follow-up; 2:50 stock-order discussion and order-list checking before signing.</td></tr>
              <tr><td>End-of-day controls</td><td>4:00 sales-total and pivot checks; 4:20 captions/corrections; 4:45 daily-note review; closing, generator-log, returns and stock checks across the evening; 5:55 checkout approval.</td></tr>
            </tbody>
          </table>
          <p className="muted" style={{ fontSize: '.8rem', margin: '12px 0 0' }}>My personal working checklist, in its original Burmese/English wording and order. The timings are as I wrote them, and the generator checks sit where the power could change during the day.</p>
          <p className="muted" style={{ fontSize: '.8rem', margin: '6px 0 0' }}>The full list from the original document is reproduced below, in order.</p>

          <div style={{ marginTop: 16, border: '1px solid #dbe3ec', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px', background: '#f7f9fb', borderBottom: '1px solid #dbe3ec', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', color: '#8b96a6' }}>Daily To Do List.docx — full checklist, in order</div>
            <div style={{ maxHeight: 460, overflowY: 'auto', padding: '6px 14px' }}>
              <table className="mini-table" style={{ marginTop: 6 }}>
                <tbody>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>9:00am</td><td>Check-in approve and attendance check.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>9:15 am</td><td>Viber group attendance and update information; share what needs following up.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>9:20am</td><td>Check whether the shop is running on generator power (construction), and record generator usage.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>9:30am</td><td>Check the bank transfer / payment slips received.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>9:45</td><td>Prepare TikTok video captions.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>10:15 am</td><td>Check the morning food-offering arrangement.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>10:20am</td><td>Discuss with the team leader.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>10:30am</td><td>Check the offering / meal arrangement again.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>10:35 am</td><td>Check that the deposit-slip amount matches.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>10:40 am</td><td>Check closing and late-sale entries against the sales record.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>10:45 am</td><td>Follow up the stock team’s pivot; check it before it goes out.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>10:50 am</td><td>Assign cashiers; compare salesperson totals with net sales.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>11:00 am</td><td>Check the 10:00 TikTok video is posted; reply to comments.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>11:10 am</td><td>Follow up cashier closing.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>11:15am</td><td>Break time.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>11:20 am</td><td>Check the other floor.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>12:00 pm</td><td>Break time.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>12:10pm – 1:00pm</td><td>Personal reporting; review the previous day’s notes and write today’s note.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>1:05pm</td><td>Check shop power / generator again and record usage.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>1:10pm – 2:10pm</td><td>Lunch break.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>2:10pm</td><td>Break time; check the other floor afterwards.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>02:15 pm</td><td>Check replies on the 1:00pm TikTok video.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>2:20pm</td><td>Follow up items owed on the online-sale channel.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>2:30 pm</td><td>Follow up the stock items that were asked about.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>2:50 pm</td><td>Discuss stock ordering with the stock team; check the order list and sign it.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>3:00pm</td><td>Check the Viber group.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>4:00pm</td><td>Compare salesperson totals with net sales; check the cashier pivot before it goes out.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>4:15 pm</td><td>Break time.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>4:20 pm</td><td>Prepare video captions; check edits before posting.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>4:45pm</td><td>Review the daily note.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:00 pm</td><td>Closing check.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:05pm</td><td>Check shop power / generator and record usage.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:10pm</td><td>Surprise stock check.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:30pm</td><td>Closing check and returns.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:35 pm</td><td>Compare the cashier pivot with salesperson totals and net sales for the month.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:30pm</td><td>Check the shop floor again.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:50pm</td><td>Sign attendance; check the break book.</td></tr>
              <tr><td style={{ whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--navy)', verticalAlign: 'top' }}>5:55pm</td><td>Check-out approve.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="muted" style={{ fontSize: '.8rem', margin: '8px 0 0' }}>Reproduced the way I wrote it — same order, same timings, nothing tidied up. The generator checks appear several times because the electricity here is not on all day: it comes in shifts, and in summer it can go and come back during the day, so each check and each log entry was a separate task. The original is in Burmese and English, so each entry is summarised in English here; the untouched DOCX is below.</p>

          <div className="dl-row" style={{ marginTop: 12 }}>
            <a className="btn-dl btn-dark" href={DRIVE_VIEW(CHECKLIST_ID)} target="_blank" rel="noopener">Read full checklist</a>
            <a className="btn-dl" href={DRIVE_DL(CHECKLIST_ID)} target="_blank" rel="noopener">Download DOCX</a>
          </div>
        </div>
      </section>

      <section className="sec" id="sales-records" style={{ scrollMarginTop: 90 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">03</span> Working records</div>
            <h2>Sales records and daily checking</h2>
          </div>
        </div>

        <div className="panel">
          <p>The workbook on hand shows how branch information was recorded across payment channels, product sales, expenses and staff administration. My checklist also shows the follow-up behind the records: comparing salesperson totals with net sales, checking deposit slips and late-sale entries, and following up pivot reports with the relevant staff.</p>
          <p>These are working records, not a claim that every figure represents a result caused by my marketing work.</p>

          <table className="mini-table" style={{ marginTop: 6 }}>
            <thead><tr><th>Sheet in the workbook</th><th>Recorded range</th><th>What it shows</th></tr></thead>
            <tbody>
              <tr><td><code>daily sale </code></td><td>A1:Q10 · full sheet in the workbook</td><td>Payment channels, revenue, discount, net sales and returns. Recorded sales figures, not profit. The trailing space in the sheet name is part of the file.</td></tr>
              <tr><td>Top &amp; Bottom Sale</td><td>B2:K13</td><td>Recorded product codes, descriptions, prices and quantities, with a separate bottom-item list. Shown in source order — the rows are not a sorted ranking.</td></tr>
              <tr><td>Daily Expenses</td><td>A1:J12</td><td>Day-level branch expenses as entered.</td></tr>
            </tbody>
          </table>
          <h4 style={{ marginTop: 22 }}>December 2024 as recorded</h4>
          <table className="mini-table" style={{ marginTop: 8 }}>
            <thead><tr><th>Recorded line</th><th style={{ textAlign: 'right' }}>Amount (MMK)</th></tr></thead>
            <tbody>
              <tr><td>Sale revenue (top-line)</td><td style={{ textAlign: 'right' }}>148,356,500</td></tr>
              <tr><td>Discount</td><td style={{ textAlign: 'right' }}>1,068,495</td></tr>
              <tr><td>Net amount</td><td style={{ textAlign: 'right' }}><b>147,288,005</b></td></tr>
              <tr><td>Return amount</td><td style={{ textAlign: 'right' }}>1,081,500</td></tr>
              <tr><td>Online-channel total</td><td style={{ textAlign: 'right' }}>579,500</td></tr>
            </tbody>
          </table>
          <p className="muted" style={{ fontSize: '.8rem', margin: '10px 0 0' }}>Thirty-one daily rows, 1–31 December 2024, summed by the sheet’s own TOTAL row. These are recorded sales, discounts and returns — not profit, and not a measure of marketing performance.</p>

          <p className="muted" style={{ fontSize: '.8rem', margin: '12px 0 0' }}>Source: <code>321/321NOk/321NOK-Master-Redacted.xlsx</code>. Previews preserve the source order and blank fields; they do not establish a sales period or campaign attribution beyond what each sheet records.</p>

          <div className="dl-row" style={{ marginTop: 16 }}>
            <a className="btn-dl btn-dark" href={WORKBOOK_VIEW} target="_blank" rel="noopener">Open working workbook</a>
            <a className="btn-dl" href={WORKBOOK_DL} target="_blank" rel="noopener">Download working workbook (XLSX)</a>
          </div>
        </div>
      </section>

      <section className="sec" id="staff-admin" style={{ scrollMarginTop: 90 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">04</span> Administration</div>
            <h2>Staff and branch administration</h2>
          </div>
        </div>

        <div className="panel">
          <p>My responsibilities were not limited to stock or social media. The daily checklist includes attendance approval, team-leader communication, break records, cashier follow-ups and end-of-day checks. The workbook also retains staff movement, days-off and incentive records.</p>

          <table className="mini-table" style={{ marginTop: 6 }}>
            <thead><tr><th>Record</th><th>Range</th><th>What it holds</th></tr></thead>
            <tbody>
              <tr><td>Staff records <span className="muted">(file sheet: <code>Stuff level up</code>)</span></td><td>B2:H10</td><td>Staff roles and movement recorded at branch level.</td></tr>
              <tr><td>Days off</td><td>A1:C10</td><td>Recorded days off by staff member.</td></tr>
              <tr><td>Generator usage log</td><td>A1:G10</td><td>Start and end times, with duration derived from the two.</td></tr>
            </tbody>
          </table>

          <details className="ai-pf-details" style={{ marginTop: 16 }}>
            <summary>Additional administration records</summary>
            <div style={{ paddingTop: 10 }}>
              <p><b>Staff movement recorded in the sheet:</b> three new starters listed (my Assistant Supervisor role among them), one transfer between shop and online sale, one resignation and three terminations. The sheet’s own header line shows a total-staff figure of −20; it is reproduced as recorded, not recalculated here.</p>
              <p><b>Days off:</b> 18 staff listed across Monday to Saturday in the weekly days-off schedule.</p>
              <p><b>Generator log:</b> seven entries between 24 December 2024 and 15 January 2025, each with start and end times and a derived run time of between 1 and 8 hours.</p>
              <p className="muted" style={{ fontSize: '.85rem' }}><code>TikTok &amp; Staff Incentives</code> and <code>Incentive Sign-off</code> are retained in the same workbook. The sign-off column is not described here as proof of payment — it is a record template, not a payment confirmation.</p>
            </div>
          </details>
        </div>
      </section>

      <section className="sec" id="tiktok" style={{ scrollMarginTop: 90 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">05</span> Social content</div>
            <h2>TikTok support and account-level follower records</h2>
          </div>
        </div>

        <div className="panel">
          <p>I supported the branch’s TikTok work alongside my operations role. The checklist includes caption preparation, checking scheduled uploads and comment replies, and later corrections. My contribution also included voiceover/editing coordination and reporting.</p>
          <p>The confirmed month-end follower counts increased from 157,000 in October to 298,104 in December. These are account-level figures reflecting the wider team’s activity, not results attributed solely to me.</p>

          <table className="mini-table" style={{ marginTop: 6 }}>
            <thead><tr><th>Month</th><th style={{ textAlign: 'right' }}>Month-end followers</th></tr></thead>
            <tbody>
              <tr><td>October</td><td style={{ textAlign: 'right' }}>157,000</td></tr>
              <tr><td>November</td><td style={{ textAlign: 'right' }}>187,375</td></tr>
              <tr><td>December</td><td style={{ textAlign: 'right' }}><b>298,104</b></td></tr>
            </tbody>
          </table>
          <p className="muted" style={{ fontSize: '.8rem', margin: '12px 0 0' }}>Calculated changes — November <b>+30,375</b> · December <b>+110,729</b> · October–December <b>+141,104</b>, approximately <b>+89.9%</b>.</p>
          <p className="muted" style={{ fontSize: '.8rem', margin: '6px 0 0' }}>Source sheet: <code> follower count at the end of m</code> (B1:C6) in the redacted workbook. The sheet’s own “MONTHLY FOLLOWER GAIN” header is misleading for these cumulative values — the table above is therefore labelled “Month-end followers”. The original sheet is kept unedited.</p>

          <div className="charts-grid" style={{ marginTop: 18 }}>
      <div className="chart-card">
        <h5>Month-end followers</h5>
        <p className="chart-sub">Oct → Dec</p>
<svg viewBox="0 0 330 198" role="img" aria-label="Bar chart: month-end followers Oct to Dec — Oct 157,000, Nov 187,375, Dec 298,104" fontFamily="system-ui,-apple-system,sans-serif" ariaHidden="false">
<line x1="0" y1="170" x2="330" y2="170" stroke="#dbe3ec" strokeWidth="1.5"/>
<rect x="26.0" y="100" width="58" height="70" rx="5" fill="#9fd6d3"><title>OCT: 157,000</title></rect>
<text x="55.0" y="93" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1b365d">157,000</text>
<text x="55.0" y="188" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#475569">OCT</text>
<rect x="136.0" y="87" width="58" height="83" rx="5" fill="#74c4c0"><title>NOV: 187,375</title></rect>
<text x="165.0" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1b365d">187,375</text>
<text x="165.0" y="188" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#475569">NOV</text>
<rect x="246.0" y="38" width="58" height="132" rx="5" fill="#0b7983"><title>DEC: 298,104</title></rect>
<text x="275.0" y="31" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1b365d">298,104</text>
<text x="275.0" y="188" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#475569">DEC</text>
</svg>
      </div>
        </div>


        <details className="ai-pf-details supporting-records">
          <summary>Supporting records — December, day by day</summary>
          <div className="supporting-records-body">
            <div className="charts-grid">
      <div className="chart-card">
        <h5>December, day by day</h5>
        <p className="chart-sub">Daily follower change</p>
<svg viewBox="0 0 330 196" role="img" aria-label="Bar chart: December daily follower change, all 31 days — day 1 1,351, day 24 17,000, day 25 7,599, day 31 542" fontFamily="system-ui,-apple-system,sans-serif">
<line x1="0" y1="168" x2="330" y2="168" stroke="#dbe3ec" strokeWidth="1.5"/>
<rect x="1.8" y="158" width="7" height="10" rx="2" fill="#74c4c0"><title>Day 1 · 1,351 followers</title></rect>
<text x="5.3" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">1</text>
<rect x="12.5" y="158" width="7" height="10" rx="2" fill="#74c4c0"><title>Day 2 · 1,350 followers</title></rect>
<rect x="23.1" y="162" width="7" height="6" rx="2" fill="#74c4c0"><title>Day 3 · 789 followers</title></rect>
<rect x="33.8" y="163" width="7" height="5" rx="2" fill="#74c4c0"><title>Day 4 · 651 followers</title></rect>
<rect x="44.4" y="166" width="7" height="2" rx="2" fill="#74c4c0"><title>Day 5 · 287 followers</title></rect>
<text x="47.9" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">5</text>
<rect x="55.0" y="166" width="7" height="2" rx="2" fill="#74c4c0"><title>Day 6 · 228 followers</title></rect>
<rect x="65.7" y="166" width="7" height="2" rx="2" fill="#74c4c0"><title>Day 7 · 148 followers</title></rect>
<rect x="76.3" y="166" width="7" height="2" rx="2" fill="#74c4c0"><title>Day 8 · 261 followers</title></rect>
<rect x="87.0" y="154" width="7" height="14" rx="2" fill="#74c4c0"><title>Day 9 · 1,852 followers</title></rect>
<rect x="97.6" y="161" width="7" height="7" rx="2" fill="#74c4c0"><title>Day 10 · 880 followers</title></rect>
<text x="101.1" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">10</text>
<rect x="108.3" y="155" width="7" height="13" rx="2" fill="#74c4c0"><title>Day 11 · 1,773 followers</title></rect>
<rect x="118.9" y="163" width="7" height="5" rx="2" fill="#74c4c0"><title>Day 12 · 610 followers</title></rect>
<rect x="129.6" y="158" width="7" height="10" rx="2" fill="#74c4c0"><title>Day 13 · 1,327 followers</title></rect>
<rect x="140.2" y="162" width="7" height="6" rx="2" fill="#74c4c0"><title>Day 14 · 741 followers</title></rect>
<rect x="150.9" y="159" width="7" height="9" rx="2" fill="#74c4c0"><title>Day 15 · 1,195 followers</title></rect>
<text x="154.4" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">15</text>
<rect x="161.5" y="154" width="7" height="14" rx="2" fill="#74c4c0"><title>Day 16 · 1,821 followers</title></rect>
<rect x="172.1" y="157" width="7" height="11" rx="2" fill="#74c4c0"><title>Day 17 · 1,498 followers</title></rect>
<rect x="182.8" y="158" width="7" height="10" rx="2" fill="#74c4c0"><title>Day 18 · 1,294 followers</title></rect>
<rect x="193.4" y="159" width="7" height="9" rx="2" fill="#74c4c0"><title>Day 19 · 1,131 followers</title></rect>
<rect x="204.1" y="156" width="7" height="12" rx="2" fill="#74c4c0"><title>Day 20 · 1,628 followers</title></rect>
<text x="207.6" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">20</text>
<rect x="214.7" y="158" width="7" height="10" rx="2" fill="#74c4c0"><title>Day 21 · 1,275 followers</title></rect>
<rect x="225.4" y="158" width="7" height="10" rx="2" fill="#74c4c0"><title>Day 22 · 1,368 followers</title></rect>
<rect x="236.0" y="151" width="7" height="17" rx="2" fill="#74c4c0"><title>Day 23 · 2,238 followers</title></rect>
<rect x="246.7" y="40" width="7" height="128" rx="2" fill="#0b7983"><title>Day 24 · 17,000 followers</title></rect>
<rect x="257.3" y="111" width="7" height="57" rx="2" fill="#0e9aa7"><title>Day 25 · 7,599 followers</title></rect>
<text x="260.8" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">25</text>
<rect x="268.0" y="152" width="7" height="16" rx="2" fill="#74c4c0"><title>Day 26 · 2,115 followers</title></rect>
<rect x="278.6" y="163" width="7" height="5" rx="2" fill="#74c4c0"><title>Day 27 · 696 followers</title></rect>
<rect x="289.2" y="160" width="7" height="8" rx="2" fill="#74c4c0"><title>Day 28 · 1,086 followers</title></rect>
<rect x="299.9" y="160" width="7" height="8" rx="2" fill="#74c4c0"><title>Day 29 · 1,059 followers</title></rect>
<rect x="310.5" y="162" width="7" height="6" rx="2" fill="#74c4c0"><title>Day 30 · 798 followers</title></rect>
<text x="314.0" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">30</text>
<rect x="321.2" y="164" width="7" height="4" rx="2" fill="#74c4c0"><title>Day 31 · 542 followers</title></rect>
</svg>
      </div>
            </div>
            <p className="muted" style={{ fontSize: '.78rem', margin: '10px 2px 0' }}>Daily entries kept as recorded from the branch performance sheet. They are a separate, partial series — not a complete breakdown of the monthly total above.</p>
          </div>
        </details>

        <p className="muted" style={{ fontSize: '.8rem', margin: '16px 0 0' }}>The remaining daily entries do not reconcile with the confirmed December month-end increase of 110,729. They are shown as separate working records, not a complete daily breakdown of that increase. Any allocation table is a later calculation, not recovered daily analytics.</p>
        </div>
      </section>

      <div className="panel">
        <h4>Customer feedback</h4>
        <p>The feedback sheet preserves both service praise and requests about product availability. I show them separately so positive comments are not confused with complaints or suggestions.</p>
        <div className="row g-3 quote-row">
          <div className="quote col-md-4"><p>“Good Service”</p></div>
          <div className="quote col-md-4"><p>“Excellent service”</p></div>
          <div className="quote col-md-4"><p lang="my">“Service အရမ်းကောင်းပါတယ် ။ Size စုံစေချင်တယ်။”</p></div>
        </div>
        <p className="muted" style={{ fontSize: '.8rem', margin: '14px 0 0' }}>Praise rows from the branch feedback sheet, kept as received; the third entry is shown with its request for more sizes so the mixed meaning is preserved. The sheet’s cramped-shop complaint is not presented as praise. Phone numbers are redacted.</p>
      </div>

      <section className="sec" id="workplace" style={{ scrollMarginTop: 90 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">06</span> Workplace context</div>
            <h2>Team and reference</h2>
          </div>
        </div>

        <div className="panel">
          <figure style={{ margin: 0 }}>
            <a href={DRIVE_VIEW(PHOTO_ID)} target="_blank" rel="noopener">
              <img
                src={DRIVE_IMG(PHOTO_ID, 1600)}
                alt="Team photograph at the 321 Ecolife shop"
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
              />
            </a>
            <figcaption className="muted" style={{ fontSize: '.8rem', margin: '8px 0 0' }}>Team photograph at the 321 workplace. The shop setting, workplace clothing and lanyards provide context alongside the working records. Individual colleagues are not identified.</figcaption>
          </figure>

          <figure style={{ margin: '22px 0 0' }}>
            <a href={DRIVE_VIEW(LETTER_ID)} target="_blank" rel="noopener">
              <img
                src={DRIVE_IMG(LETTER_ID, 1200)}
                alt="Employer reference letter confirming the Assistant Supervisor role"
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid var(--line, #dbe3ec)', display: 'block' }}
              />
            </a>
            <figcaption className="muted" style={{ fontSize: '.8rem', margin: '8px 0 0' }}>Employer reference confirming my Assistant Supervisor role. <a href={DRIVE_VIEW(LETTER_ID)} target="_blank" rel="noopener">Open full size ↗</a></figcaption>
          </figure>
        </div>
      </section>

      <aside className="cert-box">
        <div>
          <div className="cert-label">Supporting certification</div>
          <div className="cert-title">Conversion Optimization Certification Exam</div>
          <div className="cert-meta">Skillshop · Kaung Myat Thu</div>
          <div className="cert-note">Issued 30 Nov 2025 · Expires 30 Nov 2026 &nbsp;·&nbsp; Certificate ID: 167907950</div>
        </div>
        <a className="cert-link" href="https://skillshop.credential.net/b20838ac-849b-4194-9437-c52f49d9ff46" target="_blank" rel="noopener">Verify credential ↗</a>
      </aside>

      <div className="takeaway">
        <span className="ti">◆</span>
        <p><span className="label">What this demonstrates</span>Operational range — frontline needs, people coordination, stock flow — plus the discipline to make activity reviewable. The value is bringing details into a form the branch can act on.</p>
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
