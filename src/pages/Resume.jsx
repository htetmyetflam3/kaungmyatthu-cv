import React from 'react';
import Layout, { SectionHead } from '../layout/Layout';

const CERT_URL = 'https://skillshop.credential.net/b20838ac-849b-4194-9437-c52f49d9ff46';

const EDUCATION = [
  { school: 'Hmaw Bi Technology University', period: '2012 – 2015', line: 'Civil Engineering — failed in the third year' },
  { school: 'KMD Institute', period: '2015', line: 'Practical A+ & Basic Network Engineering' },
  { school: 'B.A. English', period: '2019', line: 'English' },
  { school: 'Conversion Optimization Certification Exam', period: '2025', line: 'Skillshop · Issued 30 November 2025 · Expires 30 November 2026 · Certificate ID 167907950', cert: true },
];

const EXPERIENCE = [
  { title: '321 Ecolife — Assistant Supervisor (Nok Branch)', period: '2024 – 2025', line: 'Ran the shop floor — frontline branch and staff administration: what sold, what customers wanted, day-to-day spend, staff coverage and incentives. Kept the TikTok performance visible month after month — 157,000 → 187,375 → 298,104 followers (Oct → Dec, +90%).', href: 'case-study.html', label: '321 case study' },
  { title: 'NPT Group — Warehouse Supervisor', period: '6 Jan – 1 Nov 2024', line: 'Handled project-based warehouse and logistics operations.', href: 'warehouse.html', label: 'Warehouse detail' },
  { title: 'NGO (C.D.A) — Senior Logistic Officer', period: '2021 – 2022', line: 'Oversaw warehouse and transport operations for project areas.', href: 'about.html', label: 'About me — full story' },
];

const FREELANCE = [
  { title: 'Web Developer — WordPress', line: 'Yumeyuki.info (alive) · TTS-AE.com (mail in use) · Writermorphosis.com (current app)', badge: 'alive / dead / current' },
  { title: 'Shelf mapping & POS build — car-parts shop (CSM)', line: 'Freelance, after the 321 role — master shelf map and a working POS demo for an automotive-parts shop.', period: '', href: 'warehouse.html' },
  { title: 'Country BAR — Content Writer (North-Dagon)', line: 'Articles and lifestyle/marketing posts; kept brand consistency with the marketing team.', period: '2020', href: 'content.html' },
  { title: 'Program.base — Script Writer (Part-Time)', line: 'Burmese scripts for travel, infotainment and educational content.', period: '2021 – 2022', href: 'content.html' },
  { title: 'Translator (Freelance)', line: 'English ↔ Burmese literary and digital content; U.S. (Texas) life insurance policies into Burmese.', period: '2022 – 2023', href: 'content.html' },
  { title: 'Canal+ Myanmar — Media Translations', line: 'Alice Adventure program — adapted media translations. Two projects — 2022 (first) and 2023 (second).', period: '2022–2023', href: 'content.html' },
];

const SKILLS = [
  { name: 'Management & Operations', pct: 90 },
  { name: 'Translation & Subtitling (Burmese ↔ English)', pct: 92 },
  { name: 'Digital Marketing & Copywriting', pct: 85 },
  { name: 'Email Marketing & Automation', pct: 80 },
  { name: 'Critical Thinking & Communication', pct: 88 },
  { name: 'Programming & WordPress (HTML · CSS · PHP · JS Basic)', pct: 75 },
];

const SERVICES = [
  { name: 'Content services', days: '2–7 days', line: 'Translation, copywriting, subtitling, transcription' },
  { name: 'Advertising & Boosting', days: '1–7 days', line: 'Targeted Facebook boosting' },
  { name: 'Branding services', days: '2–7 days', line: 'Logo & digital QR code design' },
  { name: 'Website / WordPress', days: '5–10 days', line: 'Custom WordPress blogs & portfolios' },
  { name: 'Google Play services', days: '1–3 days', line: 'App submission & developer account setup' },
];

export default function Resume() {
  return (
    <Layout
      active="resume"
      title="Kaung Myat Thu — Resume"
      description="Resume — application for Happy Baby One stop baby mart."
    >
      <section className="hero">
        <div className="hero-card">
          <img className="hero-avatar" src="avatar.png" alt="Kaung Myat Thu" />
          <div className="hero-eyebrow">Job application · Digital Marketing Executive — Happy Baby One stop baby mart</div>
          <h1>Operations discipline<em> —</em> marketing proof.</h1>
          <div className="hero-role">Web Developer &nbsp;·&nbsp; Content Writer &nbsp;·&nbsp; Translator</div>
          <div className="hero-contact">
            <a href="tel:+959955400017">+959955400017</a><span className="sep">|</span>
            <a href="mailto:htetmyet157@gmail.com">htetmyet157@gmail.com</a><span className="sep">|</span>
            <a href="mailto:kmt@devnovex.shop">kmt@devnovex.shop</a><span className="sep">|</span>
            <span>North Okkalapa</span>
          </div>
          <div className="hero-details">
            Date of Birth: June 8, 1996 &nbsp;·&nbsp; English (B2 – Upper Intermediate) &nbsp;·&nbsp; HTML · CSS · PHP · JavaScript (Basic)
          </div>
          <p className="lead">
            Freelance web developer, writer and former warehouse + operations lead.
            Built my English from Dota 2, then made it pay.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href="about.html">
              About me — personal blog
              <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </a>
            <a className="btn-ghost-hero" href="portfolio.html">Portfolio</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="overview-card">
          <div className="overview-kicker">About · 1-2 lines</div>
          <h3>About me</h3>
          <p>
            Currently working as a freelance web developer and developing <a href="https://github.com/htetmyetflam3/Myangustis" target="_blank" rel="noopener noreferrer">Myangustis</a>, a project focused on working with Myanmar-language text. The project explores ways to extract text from documents, organise it and support proofreading. Alongside my experience in <b>content writing and translation</b>, it has strengthened my attention to language, detail and problem-solving. I am a quick learner who builds skills through independent study.
          </p>
          <div className="dl-row">
            <a className="btn-dl btn-dark" href="about.html">
              Details — full story
              <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="sec-kicker"><span className="num">01</span> Education</div><h2>Education</h2></div></div>
        <div className="panel">
          {EDUCATION.map((e) => (
            <div key={e.school} style={{ marginBottom: 12 }}>
              <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
                <span style={{ fontWeight: 700, color: 'var(--navy)' }}>
                  {e.cert ? <a href={CERT_URL} target="_blank" rel="noopener">{e.school}</a> : e.school}
                </span>
                <span className="tl-period" style={{ marginLeft: 0 }}>{e.period}</span>
              </div>
              <div className="muted" style={{ fontSize: '.85rem' }}>{e.line}</div>
              {e.cert && <a href={CERT_URL} target="_blank" rel="noopener" style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--teal-2)', textDecoration: 'none', marginTop: 4, display: 'inline-block' }}>Verify credential ↗</a>}
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="sec-kicker"><span className="num">02</span> Experience</div><h2>Work experience</h2></div></div>
        <div className="panel">
          {EXPERIENCE.map((j) => (
            <div key={j.title} style={{ marginBottom: 14, borderBottom: '1px dashed var(--line)', paddingBottom: 14 }}>
              <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
                <a href={j.href} style={{ fontWeight: 700, color: 'var(--navy)', textDecoration: 'none', borderBottom: '1px solid rgba(11,121,131,.35)' }}>{j.title}</a>
                <span className="tl-period" style={{ marginLeft: 0 }}>{j.period}</span>
              </div>
              <div className="muted" style={{ fontSize: '.85rem' }}>{j.line}</div>
              <a href={j.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 6, color: 'var(--teal-2)', fontWeight: 700, fontSize: '.82rem', textDecoration: 'none' }}>
                {j.label}
                <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="sec-kicker"><span className="num">03</span> Freelance</div><h2>Freelance work</h2></div></div>
        <div className="panel">
          {FREELANCE.map((p) => (
            <div key={p.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, borderBottom: '1px dashed var(--line)', padding: '10px 0' }}>
              <div>
                <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{p.title}</span>
                <div className="muted" style={{ fontSize: '.84rem' }}>{p.line}</div>
              </div>
              {p.period && <span className="tl-period" style={{ marginLeft: 0, whiteSpace: 'nowrap' }}>{p.period}</span>}
              {p.badge && <span className="sheet-chip" style={{ margin: 0, whiteSpace: 'nowrap' }}>{p.badge}</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="sec-kicker"><span className="num">04</span> Skills</div><h2>Skills &amp; expertise</h2></div></div>
        <div className="panel">
          {SKILLS.map((s) => (
            <div key={s.name} style={{ marginBottom: 12 }}>
              <div className="d-flex justify-content-between">
                <span style={{ fontSize: '.86rem', fontWeight: 700, color: 'var(--navy)' }}>{s.name}</span>
                <span style={{ fontSize: '.86rem', color: 'var(--teal-2)', fontWeight: 700 }}>{s.pct}%</span>
              </div>
              <div className="bar-track"><div className="bar-fill" style={{ width: `${s.pct}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="sec-kicker"><span className="num">05</span> Services</div><h2>Professional services</h2></div></div>
        <div className="panel">
          <ul className="ai-reader-list" style={{ margin: 0 }}>
            {SERVICES.map((s) => (
              <li key={s.name}><span style={{ fontWeight: 700, color: 'var(--navy)' }}>{s.name}</span> <span className="sheet-chip" style={{ margin: 0 }}>{s.days}</span> <span className="muted" style={{ fontSize: '.86rem' }}>— {s.line}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="sec-kicker"><span className="num">06</span> References</div><h2>References</h2></div></div>
        <div className="panel">
          <p className="ref-on-request"><strong>Reference letter is available on request or demand.</strong></p>
          <div className="salary">
            <div className="tag">Expected Salary — monthly</div>
            <ul className="salary-list">
              <li className="salary-row"><span>Content writing</span><strong>MMK 600,000</strong></li>
              <li className="salary-row"><span>Operations <em>(depends on responsibility)</em></span><strong>MMK 700,000+</strong></li>
              <li className="salary-row"><span>Digital marketing <em>(depends on responsibility)</em></span><strong>MMK 850,000+</strong></li>
            </ul>
            <p className="mb-3">Multi-skilled, reliable, and creative professional — open to both <b>part-time and full-time</b> opportunities.</p>
            <a className="btn-ghost-light" href="mailto:htetmyet157@gmail.com,kmt@devnovex.shop?subject=Contact">Contact</a>
          </div>
        </div>
      </section>

      <div className="dl-row" style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <a className="btn-dl btn-dark" href="portfolio.html">
          See the portfolio
          <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
        </a>
      </div>
    </Layout>
  );
}
