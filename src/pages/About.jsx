import React from 'react';
import Layout from '../layout/Layout';

const Arrow = () => (
  <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
);

export default function About() {
  return (
    <Layout
      active="about"
      title="About me — Kaung Myat Thu"
      description="The full story of Kaung Myat Thu — the first-year fail, the NGO field, the cat, the 321, and now the freelance years. Personal blog."
    >
      <div className="blog-notice">
        <span className="blog-flag">Personal blog</span>
        <p>
          The full story, in my own words — the trauma included. It is not part of the resume package.
        </p>
      </div>

      <article className="blog-post">
        <header className="blog-post-head">
          <div className="blog-eyebrow">Personal blog</div>
          <h1>About me</h1>
        </header>

        <div className="blog-body">
          <p><span className="yr">2012</span> — It started with a first-year exam I failed. I applied to a random university and regretted it — not because I was stupid, but because I never earned the <i>why</i> in front of it. MU — the medical university — disqualified me on the exam. So I went to KMD with the money to join as a <b>repeater in the third year</b>.</p>

          <p>My aunt knew I had failed. That broke the support. A short run of random jobs followed — a sales promoter, mobile sim-card selling — a move elsewhere, then re-rolled into the first year again.</p>

          <p><span className="yr">2012–2015</span> — Civil engineering at Hmaw Bi Technology University — chased the diploma to the third year and dropped it, not lost. <span className="yr">2015</span>: KMD Institute — Practical A+ &amp; Basic Network Engineering. The real English did not come from any certificate — it came from <b>Dota 2</b>: SEA-server IT, playing against international players.</p>

          <p><span className="yr">2020</span> — Final year, before COVID — <b>BAR</b> — wrote articles and posts for lifestyle and marketing; collaborated with the marketing team to keep brand consistency.</p>

          <p><span className="yr">2021–2022</span> — <b>NGO (C.D.A)</b> — Senior Logistic Officer. Backed into the job by my aunt — many people had wanted that job. Field logistics for the projects — stayed home for one, and out field the other two — one week or two between cities. Then the rotation came — a rural state — too far, too poor, undeveloped. I quit — not fired; I quit directly. It was not a bad job — the pay was good, the role genuine — but the gap between who I was asked to be there and who I was willing to be was not bridgeable by a paycheck.</p>

          <p><span className="yr">2021–2022</span> — <b>Program.base</b> — Script Writer (Part-Time) — Burmese scripts for travel, infotainment and educational content.</p>

          <p><span className="yr">2022</span> — Eight months of no job. Everyone the same — the coup.</p>

          <p><span className="yr">2022</span> — Translator (freelance) — literary and digital content.</p>

          <p><span className="yr">2022</span> — <b>Canal+ Myanmar</b> — adapted media translations for the <i>Alice Adventure</i> program. The first project. A low-paid job. <span className="yr">2023</span> — the second project — the file's upload date can't lie, and it's 2023. The third project never came back — the friend who shared it died — he joined some organization for revolution.</p>

          <p>I bought a <b>Persian cat</b> — decided to spend my life on the things I want to do. Back to Yangon after the last project; quit; never joined the next one. The relation with my aunt turned bad, and home turned into the opposite of what I imagined.</p>

          <p>I met a girl — she is from <b>Mawlamyine</b> — and fell in love. I did not want to stay in the home, so I left the cat in the home with my aunt — she takes care of him — and I moved to her city. Even though I had quit for the things I want to do, I needed a <b>safety net again</b> in Mawlamyine — <a href="warehouse.html">NPT</a>. She cheated — back to Yangon.</p>

          <p><span className="yr">Apr 2024</span> — <a href="case-study.html">321 Ecolife</a> — Operations Assistant Supervisor at the Nok Branch — 6 shops across 6 townships, two brands. Shop-floor operations, staff and TikTok: <b>157,000 → 187,375 → 298,104 followers (+90%, Oct → Dec)</b>. 321 liked my stock management — and after keeping the floor running, I quit — not for any grudge, but because I wanted out of the operations loop and expand my field into <b>coding and digital marketing</b>. That's honest: the operations handled well at 321, and this site is the application for the next step, not a grudge against the job.</p>

          <p><span className="yr">2024–2025</span> — <a href="warehouse.html">NPT Group</a> — Warehouse Supervisor — family-shared distributor, electronics/tools and raw material. No software, no shelf maps, nobody owned the stock — I registered every item every day.</p>

          <p><span className="yr">After 321</span> — in that era I wrote the <a href="ai.html">AI prompt book</a> — a self-authored manuscript on how prompts shape LLM responses and how to read AI as a layered system. <span className="yr">2025</span>: Conversion Optimization Cert — Skillshop — issued 30 Nov 2025, expires 30 Nov 2026.</p>

          <p>After 321 — everything after that is freelance — for survival, to help my finances. The <a href="projects.html">web projects</a>: <b>Yumeyuki</b> — a Myanmar legal overseas employment agency — still alive; <b>TTS-AE</b> — built it for his company: the friend works as an Airbnb co-host, and his boss gave him the portfolio-site task — site and business mail for a bank, per their regulations (as best I understood from his explanation); the mail is alive, and they keep using it; <b>Writermorphosis</b> — a blog and book app — intentionally down on the site, a friend helping me hire for it; he doesn't need it — it's for me: I'm drowning in Myangustis without income and taking risk.</p>

          <p><span className="yr">After 321</span> — <a href="warehouse.html">CSM</a> — the car-parts shop — project-based, not full-time — four months; I go when I wake up and go home whenever I want. The one rule: they don't like extra food, so no lunch at the shop. Shelf mapping, stock lists and POS in Excel — <b>the Excel part</b> — best part of my life.</p>

          <p><span className="yr">Current</span> — <a href="myangustis.html">Myangustis</a> — a Burmese text engine, owned from scratch — extract text from documents, organise it, support proofreading. Not NLP. Active development, pushed 2026-11-21.</p>

          <p><span className="yr">Nov 2026</span> — a short-term role — hired as a full-time content writer for one short-term contract. Four days in, I quit. Not a good fit — walk away.</p>

          <p>That is the story as far as I know it — the first-year exam fail, the MU, the repeater, the aunt and the random jobs, BAR before COVID, COVID, the coup, the NGO field, Canal+, the Persian cat, the move, the safety net, the 321, the car-parts shop, the Burmese-text engine. Everything after 321 is freelance. Everything above is personal — <b>this is my personal blog, not a CV.</b></p>
        </div>
      </article>

      <div className="blog-related">
        <span className="b-rel-title">This site</span>
        <div className="b-rel-links">
          <a href="index.html">Resume <Arrow /></a>
          <a href="portfolio.html">Portfolio <Arrow /></a>
        </div>
      </div>
    </Layout>
  );
}
