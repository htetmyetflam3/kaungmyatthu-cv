import React from 'react';
import Layout, { SectionHead, DetailsButton, ZoomFigure } from '../layout/Layout';
import im3 from '../assets/images/im3.png';
import echo from '../assets/images/echo.png';

const SCRIPTS = [
  {
    kind: 'Script · DOCX',
    title: 'IMB3 · Rebonding script',
    body: 'L’ABBELL Professional — Extra Strong Rebonding System · ~50–60 sec · Burmese + on-screen copy.',
    href: 'https://drive.google.com/file/d/1HkV70oH4de5Q7CB6M0TbvlSc-0fCZKEz/view',
  },
  {
    kind: 'Script · DOCX',
    title: 'IMB1 · Leave-in conditioner',
    body: 'L’ABBELL 2 Phase Moisture Leave-in Conditioner · 45 sec · Talent 1 · Burmese voiceover.',
    href: 'https://drive.google.com/file/d/1uh-ZL2w9SlO8I97ThPEwokKKPGsBw-VA/view',
  },
  {
    kind: 'Script · DOCX',
    title: 'IMB2 · Salon-quality home hair care',
    body: 'L’ABBELL Professional — Scalp & Hair Solution · 55–60 sec · Burmese voiceover.',
    href: 'https://drive.google.com/file/d/1aNmsMVi89BviE6aRM59Aptb9wZ1oZi96/view',
  },
  {
    kind: 'Script · DOCX',
    title: 'Echo Vibe · Full script',
    body: 'The complete story-led after-work reel — scenes 1–4 + outro, dialogue, camera and audio cues.',
    href: 'https://drive.google.com/file/d/1VZDnBgFtuVXeNgMC2tQ2sr0zSv033WdG/view',
  },
  {
    kind: 'PDF',
    title: 'Echo Vibe · Script (with title)',
    body: 'Story-led reel script with a titled title page — for the shoot team and presenter.',
    href: 'https://drive.google.com/file/d/12jsQB682IqyOk9PQvZ3PNDNSb8-e5yb8/view',
  },
];

export default function Content() {
  return (
    <Layout
      active="content"
      title="Content & scripts — Kaung Myat Thu"
      description="Original Burmese writing and client-ready voiceover scripts for brand videos."
    >
      <SectionHead
        num="03"
        kicker="Content · Selected writing + scripts"
        title="Writing and client-ready scripts."
        sub="Translation, adaptation and creative writing — plus shoot-ready Burmese voiceover scripts."
      />

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>Selected translation, adaptation &amp; original writing.</h3>
        <p>Writing in the original Burmese: <b>If I Die in a Combat Zone, Box Me Up and Ship Me Home</b> (Tim O'Brien) — a Burmese translation with an English excerpt; <b>Carl · game lore adaptation</b> — an invoker's story adapted from game lore; <b>RGB</b> — a creative-writing piece about a test of colour.</p>
        <p>Read together they show my range as a writer — translation, adaptation and original prose, close and plain and rhythmic. The full PDF with the three samples is the download below.</p>
        <div className="dl-row">
          <a className="btn-dl btn-dark" href="https://drive.google.com/file/d/1yc12JaJ2-mb8omqWepDsJ2mRBG7vkjVc/view" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
            Download Carl · RGB · Combat Zone · PDF
          </a>
        </div>
      </div>

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>For the client, the shoot team, and the brand.</h3>
        <p>Every script is written for a client — product videos in Burmese with on-screen copy, timing and voiceover cues. For the client, it explains what the script does and how it's used. For the shoot, it gives the actual dialogue, scene direction and audio — ready to shoot as-is.</p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <ZoomFigure
            src={im3}
            alt="IMB3 original script, page 1"
            caption={<><strong>IMB3 · Original script</strong><br/>L’ABBELL Professional — smart-start rebonding system · page 1</>}
          />
        </div>
        <div className="col-md-6">
          <ZoomFigure
            src={echo}
            alt="Echo Vibe story-led reel, page 1"
            caption={<><strong>Echo Vibe · Shooting script</strong><br/>Story-led after-work reel · Scene 1–4 (vertical)</>}
          />
        </div>
      </div>

      <div className="row g-3 files">
        {SCRIPTS.map((s) => (
          <div key={s.title} className="col-md-6 col-lg-4">
            <div className="file-card">
              <div className="f-top"><span className="file-kind">{s.kind}</span></div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              <a className="btn-dl" href={s.href} target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
