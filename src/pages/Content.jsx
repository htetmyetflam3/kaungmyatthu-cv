import React from 'react';
import Layout, { SectionHead, DetailsButton, ZoomFigure } from '../layout/Layout';

const SCRIPTS = [
  {
    kind: 'Programme script · 2022–2023',
    title: 'Canal+ Myanmar · Alice',
    body: 'Two Burmese segments written for the Alice programme. One is on the robots built to work underwater — the autonomous kind against the ROV, down to Stanford’s Ocean One. The other is on the robots you can buy yourself. Both are written to be spoken by Alice, in her voice, to the show’s audience.',
  },
  {
    kind: 'Script · DOCX',
    title: 'IMB3 · Rebonding script',
    body: 'A rebonding system for thick hair that curls and resists straightening. A 50–60 second Burmese reel, one talent, six scenes from the client sitting in the chair to the salon hero shot.',
    href: 'https://drive.google.com/file/d/1HkV70oH4de5Q7CB6M0TbvlSc-0fCZKEz/view',
  },
  {
    kind: 'Script · DOCX',
    title: 'IMB1 · Leave-in conditioner',
    body: 'A two-phase leave-in conditioner, for moisture. A 45-second script with one talent and a Burmese voiceover.',
    href: 'https://drive.google.com/file/d/1uh-ZL2w9SlO8I97ThPEwokKKPGsBw-VA/view',
  },
  {
    kind: 'Script · DOCX',
    title: 'IMB2 · Salon-quality home hair care',
    body: 'A scalp and hair solution, written as salon care taken home. A 55–60 second Burmese voiceover script.',
    href: 'https://drive.google.com/file/d/1aNmsMVi89BviE6aRM59Aptb9wZ1oZi96/view',
  },
  {
    kind: 'Script · DOCX',
    title: 'Echo Vibe · Full script',
    body: 'Four friends leaving work and working out where to meet. The full reel — four scenes and an outro, with the dialogue, the camera directions and the audio cues.',
    href: 'https://drive.google.com/file/d/1VZDnBgFtuVXeNgMC2tQ2sr0zSv033WdG/view',
  },
  {
    kind: 'PDF',
    title: 'Echo Vibe · Script (with title)',
    body: 'The same reel script as a PDF with a title page, so the shoot team and the presenter can hold one copy.',
    href: 'https://drive.google.com/file/d/12jsQB682IqyOk9PQvZ3PNDNSb8-e5yb8/view',
  },
];

export default function Content() {
  return (
    <Layout
      active="content"
      title="Content & scripts — Kaung Myat Thu"
      description="Burmese writing I have done — product scripts, venue stories and voiceover copy for brand videos."
    >
      <SectionHead
        num="03"
        kicker="Content · Selected writing + scripts"
        title="Writing and client-ready scripts."
        sub="Translation, adaptation and creative writing — plus shoot-ready Burmese voiceover scripts."
      />

      <div className="overview-card">
        <div className="overview-kicker">Overview</div>
        <h3>Three pieces, three different kinds of constraint.</h3>
        <p>Writing looks like one skill from the outside. It is not; what changes from one job to the next is how much invention the job allows. <b>If I Die in a Combat Zone, Box Me Up and Ship Me Home</b> is the strictest of the three: Tim O&rsquo;Brien&rsquo;s memoir in Burmese, where I could not add a thought of my own, only find the Burmese that carries his. An English excerpt sits beside it, so the two can be compared. <b>Carl</b> is the middle case — Invoker&rsquo;s game lore, adapted, so the world already existed and I had to rebuild the voice inside it. <b>RGB</b> is the loosest: mine from the first word, a piece about a test of colour, with nothing to answer to but itself.</p>
        <p>Read together they are the same writer under three rules: one that forbids invention, one that reshapes something given, one that permits everything. All three are in one PDF.</p>
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

      <section className="sec" id="scripts-text" style={{ scrollMarginTop: 90 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">01</span> The scripts</div>
            <h2>မိတ်ဆက် · ဇာတ်ကွက် အလိုက်</h2>
          </div>
          <p className="sub">The scripts as I wrote them — Burmese where the script is Burmese, English where the copy is on-screen.</p>
        </div>

        <div className="panel" lang="my">
          <h4>IMB3 — Labbell Professional Vitalist Extra Strong Rebonding System</h4>
          <p className="muted" style={{ fontSize: '.85rem', margin: '4px 0 12px' }}>
            Reel Duration: ~၅၀–၆၀ စက္ကန့် · Cast: Talent 1 ယောက် (Stylist / Salon Creator ပုံစံ)
          </p>

          <p style={{ margin: '0 0 6px' }}><b>Production Note</b></p>
          <ul style={{ paddingLeft: 20, lineHeight: 1.7, margin: 0 }}>
            <li>Talent ကို နေ့စဉ်ယောက်သုံးပြီး အမေးအဖြေ ပြုပြင်ထားပါတယ်။ ဒါဒီလို Presentation ပုံစံက ပိုပြီး Lively ဖြစ်တယ်လို့ ထီပုံစံသွားတာဖြစ်ပါတယ်။</li>
            <li>Scene တွေနဲ့ ရိုက်ကင်းနေရာ (Location/Visual) တွေကိုလည်း လက်ရှိရိုက်ကင်းနိုင်တဲ့ အခြေအနေ မူတည်ပြီး အသင်ပြောသော ပြောင်းလဲနိုင်ပါတယ်။</li>
            <li>Script ထဲမှာ ဖော်ပြထားတဲ့ အသုံးပြုနည်းနဲ့ အသင့်သင့်လမ်းညွှန်ချက်တွေကို Script ရေးရုံသာမက ဖန်တီးထားတာမဟုတ်ဘဲ Product အကြောင်း ကိုယ်တိုင်သေချာ Research လုပ်ပြီး ရရှိထားတဲ့ Product Knowledge အစစ်အမှန်ပေါ် အခြေခံရေးသားထားတာဖြစ်ပါတယ်။ ဒါကြောင့် ဒီ Guide တွေကို စိတ်ချလက်ချ ယုံကြည်စွာ ကိုးကားအသုံးပြုနိုင်ပြီး အသေးစိတ်အချက်အလက် (Full Document) လိုအပ်ပါက ကျွန်တော့်ဆီ တောင်းယူနိုင်ပါသည်။</li>
          </ul>

          <p style={{ margin: '16px 0 6px' }}><b>Title:</b> ဆံသားကောက်၊ ထူပြီး ဖြောင့်ရခက်တဲ့ ဆံကေသာတွေအတွက် Labbell Professional Vitalist Extra Strong Rebonding System</p>
          <p style={{ margin: '0 0 6px' }}><b>Key Message:</b> ဆံသားထူပြီး အကောက်ကောင်းလို့ သာမန်ဖြောင့်ဆေးတွေနဲ့ မဖြောင့်ဖြစ်တဲ့ ဆံပင်တွေကို အမျိုးတမ်းဖြောင့်ဆင်းလှပစေမယ့် Germany နည်းပညာသုံး Two-Step Salon System (Cream No.1 နဲ့ Cream No.2) ဖြင့်ကောင်းမိတ်ဆက်ပေးရန်။ AHA Fruit Active နဲ့ UV Protection ပါဝင်ပြီး Professional Salon သုံးအတွက် အထူးသင့်တော်တဲ့ ဖော်မြူလာဖြစ်ပါတယ်။</p>
          <p style={{ margin: '0 0 6px' }}><b>Tone · Talent:</b> သူငယ်ချင်းအချင်းချင်း ပြောသလို ရင်းရင်းနှီးနှီး နွေးနွေးထွေးထွေး</p>
          <p style={{ margin: '0 0 12px' }}><b>Tone · Voice-over:</b> ကျော်ငြာသံ ကျယ်ကျယ်ပြတ်ပြတ် ယုံကြည်မှုရှိရှိ (Scene 1 Hook အတွက် — ခပ်သွက်သွက် ဖမ်းစားတဲ့ လေသံ / Upbeat and catchy tone)</p>

          <p style={{ margin: '0 0 4px' }}><b>Scene 1</b></p>
          <p style={{ margin: '0 0 4px' }}><b>Scene Description</b><br/>Talent က ဆံပင်ကောက်ပြီး ထူနေတဲ့ model/client တစ်ယောက်ရဲ့ ဆံသားကို ဘီးနဲ့ ဖြီးပြီး ကြည့်ရင်း တသတ်နေပြီး ဖြောင့်ရခက်နေတဲ့ ပုံကို ပြမယ်။ ပြီးရင် Labbell Vitalist Extra Strong Rebonding Cream No.1 နဲ့ No.2 (1000ml) ဘူးကြီးနှစ်ဘူးကို Salon မှာ ခမ်းခမ်းနားနား စပြမယ်။</p>
          <p style={{ margin: '0 0 4px' }}><b>Talent</b><br/>“ဆံသားက ထူပြီး အကောက်လည်းကောင်းလို့ ဘယ်လိုဖြောင့်ဖြောင့် မဖြောင့်ဖြစ်နေတဲ့သူတွေအတွက် Labbell Professional Vitalist Extra Strong Rebonding System ရောက်လာပါပြီ။”</p>
          <p style={{ margin: '0 0 4px' }}><b>Voice-over</b><br/>“Extra Strong ဆိုတဲ့အတိုင်း ဖြောင့်ရခက်တဲ့ ဆံသားတွေအတွက် Germany က Two-Step Salon System ပါနော်!”</p>
          <p style={{ margin: '0 0 12px' }}><b>Text Overlay</b><br/>EXTRA STRONG REBONDING SYSTEM<br/>FOR STUBBORN &amp; RESISTANT HAIR</p>

          <p style={{ margin: '0 0 4px' }}><b>Scene 2</b></p>
          <p style={{ margin: '0 0 4px' }}><b>Scene Description</b><br/>ဘူးနှစ်ဘူးကို close-up ရိုက်ပြမယ်။ ပြီးတော့ AHA Fruit Active နဲ့ UV Protection ပါဝင်ပုံ၊ Cream No.1 နဲ့ No.2 က တွဲဖက်ညီညီ အလုပ်လုပ်ပုံကို graphic/text နဲ့ ရှင်းရှင်းလင်းလင်း ဖြတ်ပြမယ်။</p>
          <p style={{ margin: '0 0 4px' }}><b>Talent</b><br/>“ဒီကောင်းလေးက ရိုးရိုး rebonding cream မဟုတ်ဘဲ AHA Fruit Active နဲ့ UV Protection ပါဝင်လို့ ဆံသားကို ညီညာဖြောင့်ဆင်းစေပြီး ၄၈ နာရီအတွင်း UV ကောင်းပျက်စီးတာကိုလည်း ကာကွယ်ပေးတယ်။”</p>
          <p style={{ margin: '0 0 4px' }}><b>Voice-over</b><br/>“Cream No.1 နဲ့ Neutralizing Cream No.2 ကို တစ်တွဲတည်းနှိပ်ထုတ်ထားတာကြောင့် အဖြောင့်အပိုဒ်နဲ့ ဆံသားပြတ်ထွက်တာမျိုး လျှော့ချပေးပါတယ်။”</p>
          <p style={{ margin: '0 0 12px' }}><b>Text Overlay</b><br/>AHA FRUIT ACTIVE · UV PROTECTION<br/>SYNCED TWO-STEP FORMULA (1000ml)</p>

          <p style={{ margin: '0 0 4px' }}><b>Scene 3</b></p>
          <p style={{ margin: '0 0 4px' }}><b>Scene Description</b><br/>ဆံပင်ကို လေးပိုင်းခွဲပြီး ဦးရေပြားနဲ့ 1 cm ခြားပြီး Cream No.1 သုတ်လိမ်းပြမယ်။ ပြီးရင် virgin hair ဆိုရင် ၂၀ မိနစ် heat နဲ့ ထားပြီး cream ထပ်လိမ်းတာ၊ ၁၀ မိနစ် ထပ်ထားတာနဲ့ ဆံပင်မျှင်တစ်ခုရဲ့ ဆွဲကြည့်ပြီး 1.5 ဆ လောက် ဆန့်ထွက်လာတာကို close-up ရိုက်ပြမယ်။ (Chemically processed hair ဆိုရင် heat မသုံးဘဲ ၁၅–၂၀ မိနစ်ထားတာကိုလည်း text/cut လေး ထည့်ပြမယ်။)</p>
          <p style={{ margin: '0 0 12px' }}><b>Text Overlay</b><br/>APPLY 1CM FROM SCALP<br/>VIRGIN: 20m HEAT + REAPPLY + 10m NO HEAT<br/>COLOR/PERM: 15–20m NO HEAT</p>

          <p style={{ margin: '0 0 4px' }}><b>Scene 6</b></p>
          <p style={{ margin: '0 0 4px' }}><b>Scene Description</b><br/>Salon မှာ ဖြောင့်ဆင်းတောက်ပနေတဲ့ ဆံပင် shot နဲ့ Labbell Vitalist Extra Strong Rebonding System No.1 &amp; No.2 ဘူးနှစ်ဘူးကို hero shot ရိုက်ပြမယ်။ Talent က ဘူးနှစ်ဘူးကို ကိုင်ပြီး ကောင်မရာကို ယုံကြည်မှုရှိရှိ ပြုံးပြမယ်။</p>
          <p style={{ margin: '0 0 4px' }}><b>Talent</b><br/>“သင်မှာ အဖြောင့်ကြမ်းတဲ့ ဆံပင်တွေ ကိုင်ရတဲ့ Stylist တွေအတွက် ယုံကြည်စိတ်ချရတဲ့ လက်စွဲတစ်ခု ဖြစ်စေမှာပါ။”</p>
          <p style={{ margin: '0 0 4px' }}><b>Voice-over</b><br/>“Labbell Vitalist Extra Strong Rebonding System နဲ့ ဖြောင့်ဆင်းတောက်ပတဲ့ result ကို ရယူဖို့ အခုပဲ Page ကို ဆက်သွယ်ယူလိုက်တော့နော်!”</p>
          <p style={{ margin: 0 }}><b>Text Overlay</b><br/>LABBELL PROFESSIONAL<br/>VITALIST EXTRA STRONG REBONDING SYSTEM<br/>PROFESSIONAL SALON USE ONLY</p>
        </div>

        <div className="panel" lang="my" style={{ marginTop: 18 }}>
          <h4>Echo Vibe — ရုံးဆင်းချိန် ဘယ်မှာဆုံကြမလဲ?</h4>
          <p className="muted" style={{ fontSize: '.85rem', margin: '4px 0 12px' }}>Video 1 · ၇၅–၈၀ စက္ကန့် · Vertical Reel</p>
          <p style={{ margin: '0 0 4px' }}>တူညီသော script ကို ရိုးရှင်းသောပုံစံနှစ်မျိုးဖြင့် တင်ပြထားသည်။ Style 1 — Scene အလိုက် ရိုးရိုးစာပိုဒ်။</p>

          <p style={{ margin: '12px 0 4px' }}><b>Scene ၁ (၀:၀၀–၀:၂၀)</b></p>
          <p style={{ margin: '0 0 4px' }}>ရုံးခန်း — Static / Medium shot။ နာရီကို ချိတ်ပြီ။ A နာရီကြားတွင် Laptop ပိတ်၊ ပစ္စည်းသိမ်း။ ဖုန်းဝင်လာလို့ စားပွဲမှာ ထိုင်လျက် ကိုင်း။</p>
          <p style={{ margin: '0 0 4px' }}>B (ဖုန်းထဲမှ): ဟေ့၊ ရုံးဆင်းပြီလား။ ဒီနေ့ ဘယ်မှာဆုံကြမလဲ?</p>
          <p style={{ margin: '0 0 4px' }}>စားပွဲမှ လွတ်သည်။ A အတွေးများနှင့် ပင်ပန်းစွာ သက်ပြင်းချ။</p>
          <p style={{ margin: '0 0 4px' }}>A: အင်းး၊ ဆင်းတော့မယ်။ ဒီနေ့တော့ မောလိုက်တာကွာ။</p>
          <p style={{ margin: '0 0 4px' }}>A ခဏစဉ်းစားပြီး ခေါင်းခေါင်းရယ်ပြီး ပြုံးကြည့်ရင်း ဆက်ပြောသည်။ B ကို ပြုံးပြီး ရယ်မောစွာ စနောက်ပြောဆို။</p>
          <p style={{ margin: '0 0 4px' }}>B: မောနေလည်း လာခဲ့ပါကွာ၊ ခုထိ လိုင် အမောပြေသွားမှာ။</p>
          <p style={{ margin: '0 0 4px' }}>ရုံးစားပွဲရှိ A သို့ ပြန်ဖြတ်။ A ခေါင်းခေါင်း၊ ခေါင်းတို့ံတို့ံရယ်ပြီး ဆင်းခွဲပေးဖို့ ကြိုးစား။</p>
          <p style={{ margin: '0 0 4px' }}>A: အင်း၊ ငါလည်း လာမယ်ကွာ။ ဒါဆို ခုပဲ ထွက်ခဲ့မယ်နော်။</p>
          <p style={{ margin: '0 0 4px' }}>B သို့ ပြန်ဖြတ်။ B တခြားသော သူငယ်ချင်းများကို ခေါ်ထားပြီးဖြစ်၍ ပြုံးလိုက်။</p>
          <p style={{ margin: '0 0 4px' }}>B: အဝေးကြီးမဟုတ်ပါဘူး။ အဆင်ပြေတဲ့ နေရာလေးပါ။ လာ၊ C တို့ D တို့ကိုလည်း ခေါ်ထားပြီးပြီ။ A အရင်ကဲ့သို့ ဟုတ်ကဲ့၊ ပြုံးကြည့်ပြီး ဆက်မဆိုင်။ C တို့ D တို့ကို လည်း ခေါ်ထားပြီးပြီ။</p>

          <p style={{ margin: '12px 0 4px' }}><b>Scene ၂ (၀:၂၀–၀:၃၆)</b></p>
          <p style={{ margin: '0 0 4px' }}>Dagon Centre အနီး C သို့ ဖြတ်။ C ဆိုင်သွားဖို့ ပြင်ဆင်ရင်း Group Call တွင် ဝင်မည်။</p>
          <p style={{ margin: '0 0 4px' }}>C (ဖုန်းထဲမှ): ဟေ့၊ ငါ Dagon Centre နားရောက်နေပြီ။ ဆိုင်က ဘယ်နားမှာလဲ?</p>
          <p style={{ margin: '0 0 4px' }}>ဆိုင်သို့ သွားဖို့ပြင်နေသော B သို့ ဖြတ်။ B ဆိုင်တည်နေရာ ရှင်းပြ။</p>
          <p style={{ margin: '0 0 4px' }}>B (ဖုန်းထဲမှ): Echo Vibe လေ၊ လျှောက်တန်းနားနားနေတာလမ်းမှာ။ လျှောက်တန်းကနေ ငါးမိနစ်ပဲ။</p>
          <p style={{ margin: '0 0 4px' }}>ရုံးဆင်းပြီး ရုံးနှင့်နီးကရောင်း သို D သို့ ဖြတ်။ D ဆိုင်နားရောက်ခွါနီး ပြုံးပြီး ဖုန်းပြောနေ။ ထို့နောက် ဖုန်းချ။</p>
          <p style={{ margin: '0 0 4px' }}>D (ဖုန်းထဲမှ): ငါလည်း Times City ဘက်ကလာနေတာ၊ ဆိုင်နားတော်ငြေ ရောက်တော့မယ်။</p>

          <p style={{ margin: '12px 0 4px' }}><b>Scene ၃ (၀:၃၆–၀:၅၂)</b></p>
          <p style={{ margin: '0 0 4px' }}>ဆိုင်အပြင်ဘက် — Wide to Medium။ ညနေဆည်းဆာ၊ ဆိုင်းဘုတ်နှင့် မျက်နှာစာ ထင်ရှားစွာ ပြ။ D ၁–၂ မိနစ်စောရောက်ပြီး တစ်ယောက်တည်း မဝင်ဘဲ ဖုန်းကြည့်။ အားလုံး နှုတ်ဆက်ကြ၊ A ရယ်ပြီး ပြန်ဖြေရင်း။</p>
          <p style={{ margin: '0 0 4px' }}>D: ဟေ့၊ ဒီမှာ! ငါတော့ ဆောင်နေတာ ကြာပြီ။</p>
          <p style={{ margin: '0 0 4px' }}>အတွင်းပိုင်း — နောက်ခံတွင်း ဆိုင်းဘုတ်။ အားလုံး နှုတ်ဆက်ကြ၊ A ရယ်ပြီး ပြန်ဖြေရင်း။</p>
          <p style={{ margin: '0 0 4px' }}>A: ရုံးကထွက်ပြီး သူတို့နဲ့ လမ်းမှာဆုံလို့ အတူလာတာ။</p>
          <p style={{ margin: '0 0 4px' }}>အဖွဲ့လိုက် နောက်ကနေ လိုက်ရိုက်ကြ။ — Follow shot။ B က A ပခုံးပုတ် စနောက်။ အားလုံးရယ်ပြီး အတူဝင်သွား။</p>
          <p style={{ margin: '0 0 4px' }}>B: ကဲ၊ အထဲဝင်ကြမယ်။ ဒီနေ့ A ထကာခံမှာနော်!</p>

          <p style={{ margin: '12px 0 4px' }}><b>Scene ၄ (၀:၅၂–၁:၀၃)</b></p>
          <p style={{ margin: '0 0 4px' }}>အဝင် — Medium shot။ သူငယ်ချင်းလေးယောက် တံခါးနှင့်ဖွင့်ဝင်လာ။ Wide gimbal slide — ထိုင်ခုံများ၊ နောက်ခံသော မီးရောင်နှင့် အပြင်၏အဆင်း။ သူငယ်ချင်းများ ပြုံးရယ်စွာ နေရာယူ။ Medium slide — ဘားကောင်တာတစ်လျှောက်၊ ပုလင်းများနှင့် မီးရောင်။ Bartender အနှစ်သက်နှင့် ဖျော်ရည် ထည့်ပေးစဉ်။ Close-up slide — စားပွဲပေါ်မှ အေးမြသော Drinks နှင့် အမြှုပ်များ။ စားပွဲပေါ် အတင်းချိ</p>
          <p style={{ margin: '0 0 4px' }}>D: ဟုတ်တယ်၊ ရုံးဆင်းရင် ဒီမှာပဲ ပုံမှန်ဆုံကြမယ်။</p>
          <p style={{ margin: '0 0 4px' }}>Audio: ဆိုင်အတွင်းပိုင်း အသံ + BGM · Visual: Medium to tight close-up — စားပွဲအလယ်သို့ ဖြည်းဖြည်းတိုးကပ်။ Action: B ခွက်အရင်မြှောက်။ A၊ C၊ D တို့ပါ မြှောက်ပြီး အလယ်မှာ ခွက်ချင်း တိုက်။ မျက်နှာများနှင့် ခွက်တိုက်ခြင်းကို slow motion။</p>
          <p style={{ margin: '0 0 4px' }}>B၊ အားလုံး: ကဲ၊ သူငယ်ချင်းတွေအတွက်!</p>
          <p style={{ margin: '0 0 4px' }}>အားလုံး — Cheers!</p>
          <p style={{ margin: '0 0 4px' }}>Audio: ဖန်ခွက်တိုက်သံ SFX၊ ရယ်မောသံ၊ မြူးကြွသော BGM မြင့်တက်။</p>

          <p style={{ margin: '12px 0 4px' }}><b>OUTRO — ၁:၁၇–၁:၂၀</b></p>
          <p style={{ margin: '0 0 4px' }}>Visual: Slow-motion ဝါးထားသော Cheers မြင်ကွင်းပေါ် စာသားနှင့် Echo Vibe logo တင်။ Action: နောက်ဆုံး ၃ စက္ကန့်။ Audio: Outro BGM · On screen: ECHO VIBE</p>
          <p style={{ margin: '0 0 4px' }}>ရုံးဆင်းချိန်တိုင်း ဆုံတွေ့ရာနေရာ (Your After-Work Hangout Spot)</p>
          <p style={{ margin: '0 0 4px' }}>လျှော့ချင်းအနီး · နားနေတာလမ်း</p>
          <p style={{ margin: 0 }}>ညနေခင်းသင်တန်းတွေ Drinks များ · ပျော်ရွင်စရာ အချိန်များ · သူငယ်ချင်းတွေနှင့်အတူ</p>
        </div>
      </section>

      <div className="row g-3 files">
        {SCRIPTS.map((s) => (
          <div key={s.title} className="col-md-6 col-lg-4">
            <div className="file-card">
              <div className="f-top"><span className="file-kind">{s.kind}</span></div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              {s.href && (
                <a className="btn-dl" href={s.href} target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
                  Download
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="sec" id="kept" style={{ scrollMarginTop: 90 }}>
        <div className="sec-head">
          <div>
            <div className="sec-kicker"><span className="num">02</span> Kept</div>
            <h2>Two pieces that survived.</h2>
          </div>
          <p className="sub">Two files out of everything I wrote in those years. The rest I deleted as it was written.</p>
        </div>

        <div className="row g-3 files">
          <div className="col-md-6">
            <div className="file-card">
              <div className="f-top"><span className="file-kind">Essay · Burmese</span></div>
              <h4>False Promise</h4>
              <p>A boy brings his report card home. His father promised him whatever he wants for a top-ten rank, and the promise keeps sliding to the next exam — bicycle, football, next year. The concept came from a friend, and the credit for the idea is theirs. The title is Oracle’s spell in Dota 2.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="file-card">
              <div className="f-top"><span className="file-kind">Essay · Burmese</span></div>
              <h4>RGB</h4>
              <p>Someone walking the road they always walk meets a person by chance, and is handed a set of colour plates. It is the loosest of the three pieces in the PDF — nothing to answer to but itself.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="dl-row" style={{ marginTop: 20 }}>
        <DetailsButton href="index.html">← Back to home</DetailsButton>
      </div>
    </Layout>
  );
}
