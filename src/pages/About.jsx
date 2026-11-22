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
      description="The full story of Kaung Myat Thu. Personal blog."
    >
      <div className="blog-notice">
        <span className="blog-flag">Personal blog</span>
        <p>
          Welcome to my blog. Here, you'll mostly find my personal stories—a space about simply being human.
        </p>
      </div>

      <article className="blog-post">
        <header className="blog-post-head">
          <h1>About me</h1>
        </header>

        <div className="blog-body">
          <p>2012 was the start. I failed the first-year exam at a random university, and I regretted it. Not because I was stupid, but because I never earned the <i>why</i> in front of it. The medical university, MU, disqualified me on the exam. So I went to KMD with the money to join as a <b>repeater in the third year</b>.</p>

          <p>My aunt knew I had failed, and that broke the support. A short run of random jobs followed. A sales promoter. Mobile sim-card selling. A move elsewhere, then re-rolled into the first year again.</p>

          <p>For the next years I was at Hmaw Bi Technology University, civil engineering. I chased the diploma to the third year and dropped it, not lost. In 2015 I was at KMD Institute for Practical A+ and Basic Network Engineering. The real English never came from any certificate. It came from <b>Dota 2</b>, SEA-server IT, playing against international players.</p>

          <p>In 2020, final year before COVID, I worked at BAR, writing articles and posts for lifestyle and marketing, and collaborating with the marketing team to keep brand consistency.</p>

          <p>In 2021–2022 I was Senior Logistic Officer at the NGO, C.D.A. My aunt backed me into the job. Many people had wanted it. I stayed home for one project and went to the field with the other two, one week or two between cities.</p>

          <p>Then the rotation came. A rural state, too far, too poor, undeveloped. I quit. Not fired. I quit directly. It was not a bad job. The pay was good, the role genuine. But the gap between the role they wanted me to take and the one I was willing to take could not be bridged by any pay.</p>

          <p>The same time, I was a part-time Script Writer at Program.base, writing Burmese scripts for travel, infotainment and educational content.</p>

          <p>For eight months in 2022 there was no job. Everyone was the same. It was the coup.</p>

          <p>In 2022 I also started freelance translation work, literary and digital content.</p>

          <p>Canal+ Myanmar adapted media translations for the <i>Alice Adventure</i> program. That was the first project. It was low-paid. The second came in 2023. The third project never came back. The friend who shared it died. He joined some organization for revolution.</p>

          <p>I bought a <b>Persian cat</b> and decided to spend my life on the things I want to do. After the last project I went back home. I quit, and never joined the next one. The relation with my aunt turned bad, and home turned into the opposite of what I imagined.</p>

          <p>I met a girl. She was from a different city, and I fell in love. I did not want to stay home, so I left the cat with my aunt, who takes care of him, and I moved. Even though I had quit for the things I want to do, I needed a safety net again, and <a href="warehouse.html">NPT</a> was the place. She cheated. I went back home.</p>

          <p>In April 2024 I started at <a href="case-study.html">321 Ecolife</a> as Operations Assistant Supervisor. Shop-floor operations, staff and TikTok. Followers went from 157,000 to 187,375 to 298,104, a 90 percent jump from October to December. 321 liked my stock management. I kept the floor running, then I quit. Not for any grudge. I wanted out of the operations loop and expand into <b>coding and digital marketing</b>.</p>

          <p>From 2024 to 2025 I was the Warehouse Supervisor at <a href="warehouse.html">NPT Group</a>. Family-shared distributor. Electronics and tools, plus raw material. No software, no shelf maps, and nobody owned the stock. I registered every item every day.</p>

          <p>In that era I wrote the <a href="ai.html">AI prompt book</a>, a self-authored manuscript on how prompts shape LLM responses and how to read AI as a layered system. In 2025 I got a Conversion Optimization Certification from Skillshop, issued 30 Nov 2025 and expiring 30 Nov 2026.</p>

          <p>Everything after 321 was freelance, for survival and to help my finances. <b>Yumeyuki</b>, a Myanmar legal overseas employment agency, still alive. <b>TTS-AE</b>, built for his company. The friend works as an Airbnb co-host, and his boss gave him the portfolio-site task: a site and business mail for a bank, per their regulations. I followed his explanation as best I could. The mail is alive, and they keep using it.</p>

          <p><b>Writermorphosis</b>, a blog and book app, is intentionally down on the site. A friend helping me hire for it. He does not need it. It is for me. I am drowning in Myangustis without income and taking the risk.</p>

          <p><a href="warehouse.html">CSM</a>, the car-parts shop, was project-based, not full-time. Four months. I go when I wake up and go home whenever I want. The one rule is that they don't like extra food, so no lunch at the shop. Shelf mapping, stock lists and POS in Excel. That Excel part is the best part of my life.</p>

          <p>Right now I am on <a href="myangustis.html">Myangustis</a>, a Burmese text engine owned from scratch. It extracts text from documents, organises it and supports proofreading. It is not NLP. Active development, pushed 2026-11-21.</p>

          <p>In November 2026 I took a short-term role, a full-time content writer for one short-term contract. I quit after four days. It was not a good fit.</p>

          <p>That is the story, as far as I know. Everything after 321 is freelance. The rest is mine.</p>
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
