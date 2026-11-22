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
      <article className="blog-post">
        <header className="blog-hero">
          <span className="blog-hero-eyebrow">✦ Personal blog</span>
          <h1>About <span className="grad">me.</span></h1>
          <p className="blog-hero-sub">The full, unedited story of Kaung Myat Thu — operations, content and systems, from a third-year civil failure to the AI book.</p>
          <div className="blog-hero-meta">
            <span>North Okkalapa</span><span className="dot"></span>
            <span>Operations · Content · Systems</span><span className="dot"></span>
            <span>+959955400017</span>
          </div>
        </header>

        <div className="blog-stat-strip">
          <div className="blog-stat"><div className="blog-stat-num">157K → <span className="accent">298K</span></div><p className="blog-stat-label">Followers, 321 Ecolife (+90%)</p></div>
          <div className="blog-stat"><div className="blog-stat-num">4 <span className="accent">months</span></div><p className="blog-stat-label">CSM car-parts POS build</p></div>
          <div className="blog-stat"><div className="blog-stat-num">3 <span className="accent">careers</span></div><p className="blog-stat-label">NGO · 321 Ecolife · NPT Group</p></div>
          <div className="blog-stat"><div className="blog-stat-num">Live <span className="accent">project</span></div><p className="blog-stat-label">Myangustis — Burmese text engine</p></div>
        </div>

        <div className="blog-body">
          <p>2012 was the start. My score was high enough to apply to any university. Back then engineering university was below MU and MMU, the medical universities. I had been disqualified at MU, and at that time I did not care much about the college. So I applied to random universities by writing top down to bottom, and got civil engineering — the highest major back then (today architecture is the highest).</p>

          <p>At Hmaw Bi Technology University, civil engineering. I failed in the <b>third year</b> — as it became harder, and I played <b>Dota 2</b>. I regret it — not because I was stupid, but because I was not interested in that college. If I had gone to a computer college — which was below engineering university — I would not have failed. But I wrote the college form top down to bottom, so I did not get the computer college.</p>

          <p>A student who failed in the third year got an AGTI certificate. That system changed during my second year — even though I passed, it became a full 6-year program, not a batch like the first two years AGTI and then two years BTech. Engineering, medical college, and Marine university students who failed can continue from the failed year if they move to distance education — as an example, if I moved to distance education and took physics or chemistry, my education would start from the third year and I would only have the third and fourth years left — graduated. If I take math, I can also continue from the failed year like that. Yangon University and YUFL are language colleges, not like the science-branch colleges, and YUFL English is a higher-level English college — so they don't roll to the first year. Engineering and medical colleges don't have English as a major subject, so they roll to the first year unless they take math, physics, chemistry and IC.</p>

          <p>At first my aunt did not know. Instead of joining as a repeater in the third year, I went to KMD. Later she found out, and broke the support, so I worked some random jobs — a sales promoter, mobile sim-card selling, a move elsewhere. Then I re-rolled into the first year again. That had nothing to do with the support — I was already good in English, so I did not need to study much. Thanks to Dota 2, which is part of the reason I failed in civil.</p>

          <p>In 2015 I was at KMD Institute for Practical A+ and Basic Network Engineering. The real English never came from any certificate. It came from <span class="hl">Dota 2</span>, SEA-server IT, playing against international players.</p>

          <p>In 2020, final year before COVID, I worked at BAR, writing articles and posts for lifestyle and marketing, and collaborating with the marketing team to keep brand consistency.</p>

          <p>In 2021–2022 I was Senior Logistic Officer at the NGO, C.D.A. My aunt backed me into the job. Many people had wanted it. I stayed home for one project and went to the field with the other two, one week or two between cities.</p>

          <p>Then the rotation came. A rural state, too far, too poor, undeveloped. I quit. Not fired. I quit directly. It was not a bad job. The pay was good, the role genuine. But the gap between the role they wanted me to take and the one I was willing to take could not be bridged by any pay.</p>

          <p>The same time, I was a part-time Script Writer at Program.base, writing Burmese scripts for travel, infotainment and educational content.</p>

          <p>For eight months in 2022 there was no job. Everyone was the same. It was the coup.</p>

          <p>In 2022 I also started freelance translation work, literary and digital content.</p>

          <p>Canal+ Myanmar adapted media translations for the <i>Alice Adventure</i> program. That was the first project. It was low-paid. The second came in 2023. The third project never came back. The friend who shared it died. He joined some organization for revolution.</p>

          <p>I bought a <b>Persian cat</b> and decided to spend my life on the things I want to do. After the last project I went back home. I quit, and never joined the next one. The relation with my aunt turned bad, and home turned into the opposite of what I imagined.</p>

          <p>I met a girl. She was from a different city, and I fell in love. I did not want to stay home, so I left the cat with my aunt, who takes care of him, and I moved. Even though I had quit for the things I want to do, I needed a safety net again, and <a href="warehouse.html">NPT</a> was the place. She cheated. I went back home.</p>

          <p>In April 2024 I started at <a href="case-study.html">321 Ecolife</a> as Operations Assistant Supervisor. Shop-floor operations, staff and TikTok. Followers went from 157,000 to 187,375 to <span class="hl">298,104</span>, a <span class="hl">90% jump</span> from October to December. 321 liked my stock management. I kept the floor running, then I quit. Not for any grudge. I wanted out of the operations loop and expand into <span class="hl">coding and digital marketing</span>.</p>

          <p>From 2024 to 2025 I was the Warehouse Supervisor at <a href="warehouse.html">NPT Group</a>. Family-shared distributor. Electronics and tools, plus raw material. No software, no shelf maps, and nobody owned the stock. I registered every item every day.</p>

          <p>In that era I wrote the <a href="ai.html">AI prompt book</a>, a self-authored manuscript on how prompts shape LLM responses and how to read AI as a layered system. In 2025 I got a Conversion Optimization Certification from Skillshop, issued 30 Nov 2025 and expiring 30 Nov 2026.</p>

          <p>Everything after 321 was freelance, for survival and to help my finances. <b>Yumeyuki</b>, a Myanmar legal overseas employment agency, still alive. <b>TTS-AE</b>, built for his company. The friend works as an Airbnb co-host, and his boss gave him the portfolio-site task: a site and business mail for a bank, per their regulations. I followed his explanation as best I could. The mail is alive, and they keep using it.</p>

          <p><b>Writermorphosis</b>, a blog and book app, is intentionally down on the site. A friend helping me hire for it. He does not need it. It is for me. I am drowning in Myangustis without income and taking the risk.</p>

          <p><a href="warehouse.html">CSM</a>, the car-parts shop, was project-based, not full-time. Four months. I go when I wake up and go home whenever I want. The one rule is that they don't like extra food, so no lunch at the shop. Shelf mapping, stock lists and POS in Excel. That Excel part is the <span class="hl">best part of my life</span>.</p>

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
