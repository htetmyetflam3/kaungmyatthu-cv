import React from 'react';
import Layout from '../layout/Layout';
import '../styles/cv.css';

export default function Cv() {
  return (
    <Layout
      bare
      active="resume"
      title="Kaung Myat Thu — CV & Résumé"
      description="CV of Kaung Myat Thu — Assistant Supervisor, content writer and web developer. Experience, education, skills, references and PDF downloads."
    >
<header className="profile-wrap">
  <img className="avatar" src="avatar.png" alt="Kaung Myat Thu" width="96" height="96" />
  <h1 className="profile-name">Kaung Myat Thu</h1>
  <div className="profile-role">Web Developer &nbsp;·&nbsp; Content Writer &nbsp;·&nbsp; Translator</div>
  <div className="profile-meta">
    <a href="tel:+959955400017">+959955400017</a><span className="sep">|</span><a className="contact-email" href="mailto:htetmyet157@gmail.com">htetmyet157@gmail.com</a><span className="sep">|</span>North Okkalapa
  </div>
  <div className="profile-meta" style={{fontSize: '.88rem'}}>
    Date of Birth: June 8, 1996 &nbsp;·&nbsp; English (B2 – Upper Intermediate) &nbsp;·&nbsp; HTML, CSS, PHP, JavaScript (Basic)
  </div>
  <div className="btn-row">
    <a href="mailto:htetmyet157@gmail.com?subject=Hire%20Me" className="btn btn-primary-navy">Hire Me</a>
    <a href="tel:+959955400017" className="btn btn-outline">Call Me</a>
    <a href="portfolio.html" className="btn btn-outline" target="_blank" rel="noopener">Portfolio</a>
    <a href="Kaung-Myat-Thu-CV.pdf" className="btn btn-primary-navy" download>Download CV (PDF)</a>
    <a href="Kaung-Myat-Thu-Portfolio.pdf" className="btn btn-outline" download>Download Portfolio PDF</a>
    <button className="btn btn-outline" onClick={() => window.print()}>Print / Save PDF</button>
  </div>
</header>

<nav className="cv-navbar" aria-label="CV sections">
  <div className="bar-inner">
    <span className="bar-label">Contents</span>
    <div className="nav-scroll" id="navScroll">
      <ul id="cvNav">
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#education">Education</a></li>
        <li><a className="nav-link" href="#experience">Experience</a></li>
        <li><a className="nav-link" href="#freelancer">Freelancer</a></li>
        <li><a className="nav-link" href="#skills">Skills</a></li>
        <li><a className="nav-link" href="#references">References</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className="col-wrap">

  <section className="cv-section" id="about">
    <div className="sec-head"><div className="kicker">01 — About</div><h2>About Me</h2></div>
    <p className="fs-5 mb-0">I bring experience in retail operations, staff coordination, reporting and content writing. My work has included branch administration, TikTok support, Burmese-language scripts and practical spreadsheet workflows. I am interested in marketing opportunities that connect customer understanding with clear communication and organised delivery.</p>
    <p style={{marginTop: '14px'}}><a href="about.html" className="cv-story-link" style={{color: '#0b7983', fontWeight: '700', textDecoration: 'none'}}>Read the full story behind the numbers →</a></p>
  </section>

  <section className="cv-section" id="education">
    <div className="sec-head"><div className="kicker">02 — Education</div><h2>Education</h2></div>
    <div className="timeline">
      <div className="timeline-item">
        <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
          <span className="job-title">Hmaw Bi Technology University</span><span className="badge-date">2012 – 2015</span>
        </div>
        <div className="job-meta">Civil Engineering (3rd Year)</div>
      </div>
      <div className="timeline-item">
        <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
          <span className="job-title">B.A. English</span><span className="badge-date">2019</span>
        </div>
        <div className="job-meta">English</div>
      </div>
      <div className="timeline-item">
        <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
          <span className="job-title">KMD Institute</span><span className="badge-date">2015</span>
        </div>
        <div className="job-meta">Practical A+ &amp; Basic Network Engineering</div>
      </div>
    </div>
    <div className="cert-card">
      <div>
        <div className="cert-card-label">Professional certification</div>
        <div className="cert-card-title">Conversion Optimization Certification Exam</div>
        <div className="cert-card-meta">Skillshop · Kaung Myat Thu</div>
        <div className="cert-card-note">Issued 30 November 2025 · Expires 30 November 2026</div>
        <div className="cert-card-note">Certificate ID: 167907950</div>
      </div>
      <a className="cert-card-link" href="https://skillshop.credential.net/b20838ac-849b-4194-9437-c52f49d9ff46" target="_blank" rel="noopener">Verify credential ↗</a>
    </div>
  </section>

  <section className="cv-section" id="experience">
    <div className="sec-head"><div className="kicker">03 — Experience</div><h2>Work Experience</h2></div>
    <div className="job">
      <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <a className="job-title job-title-link" href="case-study.html">Assistant Supervisor — 321 Ecolife (Stalker Company Limited), Nok Branch</a><span className="badge-date">Jan 2024 – Jan 2025</span>
      </div>
      <ul className="mb-0 ps-3 mt-2">
        <li>Ran the Nok branch as its only internal staff member, with no shop supervisor or manager in place — manager-level responsibility on a supervisor&rsquo;s title: attendance, daily expense, sales and stock records, staff coverage, and promotion and incentive recommendations.</li>
          <li>Reported directly to the Ecolife sector manager, a member of the five-person board, and prepared the Nok branch as it moved toward head-branch status.</li>
        <li>Coordinated with voiceover and editing teams for content delivery, and reported social-media performance back to the branch.</li>
        <li>Kept TikTok performance visible month after month — 157,000 → 187,375 → 298,104 month-end followers (Oct → Dec, +89.9%).</li>
      </ul>
      <p className="job-links"><a href="case-study.html">321 case study →</a> <span className="sep">·</span> <a href="content.html">Scripts &amp; writing →</a></p>
    </div>
    <div className="job">
      <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <a className="job-title job-title-link" href="warehouse.html">Warehouse Supervisor — NPT Group</a><span className="badge-date">January – November 2024</span>
      </div>
      <ul className="mb-0 ps-3 mt-2"><li>Handled project-based warehouse and logistics operations.</li></ul>
      <p className="job-links"><a href="warehouse.html">Warehouse &amp; CSM detail →</a></p>
    </div>
    <div className="job">
      <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <a className="job-title job-title-link" href="warehouse.html">Senior Logistic Officer — NGO (C.D.A)</a><span className="badge-date">2021 – 2022</span>
      </div>
      <ul className="mb-0 ps-3 mt-2"><li>Oversaw warehouse and transport operations for project areas.</li></ul>
      <p className="job-links"><a href="warehouse.html">Warehouse &amp; CSM detail →</a></p>
    </div>
    <p className="job-links" style={{marginTop: '16px'}}>
      <a href="case-study.html">321 case study →</a> <span className="sep">·</span>
      <a href="warehouse.html">Warehouse &amp; CSM →</a> <span className="sep">·</span>
      <a href="content.html">Scripts &amp; writing →</a> <span className="sep">·</span>
      <a href="ai.html">Prompt engineering →</a> <span className="sep">·</span>
      <a href="projects.html">Projects →</a> <span className="sep">·</span>
      <a href="about.html">About me →</a> <span className="sep">·</span>
      <a href="portfolio.html">Full portfolio (single page) →</a>
    </p>
  </section>

  <section className="cv-section" id="freelancer">
    <div className="sec-head"><div className="kicker">04 — Freelancer</div><h2>Freelance Work</h2></div>
    <div className="job">
      <div className="job-title">Web Developer</div>
      <p className="job-meta mb-2">Built and maintained multiple WordPress websites:</p>
      <ul className="mb-0 ps-3">
        <li><strong>Yumeyuki.info</strong> — Myanmar legal overseas employment agency</li>
        <li><strong>TTS-AE.com</strong> — UAE company project</li>
        <li><strong>Writermorphosis.com</strong> — current project</li>
      </ul>
      <p className="job-links"><a href="projects.html">Projects &amp; web work →</a> <span className="sep">·</span> <a href="myangustis.html">Myangustis →</a></p>
    </div>
    <div className="job">
      <div className="job-title">Shelf mapping &amp; POS build — car-parts shop (CSM)</div>
      <ul className="mb-0 ps-3 mt-2">
        <li>Separate freelance project, roughly four months — exact dates not confirmed.</li>
        <li>Set up the EPOS/stock system and designed the shelf-location map for a densely stocked automotive-parts shop, then handed it over; staff performed the physical counts.</li>
        <li>The files on hand are partial working samples; the portfolio POS demo uses fictional stock, prices and test sales.</li>
      </ul>
      <p className="job-links"><a href="warehouse.html">Warehouse &amp; CSM detail →</a></p>
    </div>
    <div className="job">
      <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <span className="job-title">Content Writer — Country BAR (North-Dagon)</span><span className="badge-date">2020</span>
      </div>
      <ul className="mb-0 ps-3 mt-2">
        <li>Wrote engaging articles and posts related to lifestyle and marketing.</li>
        <li>Collaborated with marketing team to maintain brand consistency.</li>
      </ul>
      <p className="job-links"><a href="content.html">Scripts &amp; writing →</a></p>
    </div>
    <div className="job">
      <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <span className="job-title">Script Writer (Part-Time) — Program.base</span><span className="badge-date">2021 – 2022</span>
      </div>
      <ul className="mb-0 ps-3 mt-2">
        <li>Wrote and adapted scripts in Burmese for travel, infotainment, and educational content.</li>
        <li>Adapted media translations for Canal+ Myanmar (Program: <em>Alice Adventure</em>) · 2022 – 2023</li>
      </ul>
      <p className="job-links"><a href="content.html">Scripts &amp; writing →</a> <span className="sep">·</span> <a href="ai.html">Prompt engineering →</a></p>
    </div>
    <div className="job">
      <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <span className="job-title">Translator (Freelance)</span><span className="badge-date">2022 – 2023</span>
      </div>
      <ul className="mb-0 ps-3 mt-2">
        <li>Translated and localized English ↔ Burmese literary and digital content.</li>
        <li>Translated U.S. (Texas) life insurance policies into Burmese.</li>
      </ul>
      <p className="job-links"><a href="content.html">Translation samples →</a></p>
    </div>
  </section>

  <section className="cv-section" id="skills">
    <div className="sec-head"><div className="kicker">05 — Skills</div><h2>Skills &amp; Experience</h2></div>
    <div className="skill-group">
      <div className="skill-group-label">Content</div>
      <p>Burmese-language scripts, product and venue copy, social-content support.</p>
    </div>
    <div className="skill-group">
      <div className="skill-group-label">Operations</div>
      <p>Staff coordination, sales checks, reporting and stock-workflow documentation.</p>
    </div>
    <div className="skill-group">
      <div className="skill-group-label">Tools and projects</div>
      <p>Excel-based working records, EPOS setup, selected web projects and AI-assisted workflows.</p>
    </div>
  </section>

  

  <section className="cv-section" id="references">
    <div className="sec-head"><div className="kicker">06 — References</div><h2>Reference Letters</h2></div>
    <p className="ref-on-request mb-4"><strong>Reference letter is available on request or demand.</strong></p>
    <div className="d-flex flex-wrap gap-2 mt-2">
      <a href="mailto:htetmyet157@gmail.com?subject=Contact" className="btn btn-ghost-light">Contact</a>
    </div>
  </section>

</div>


    </Layout>
  );
}
