#!/usr/bin/env python3
"""Build the self-designed single-PDF portfolio (Kaung Myat Thu).

Usage:  python3 tools/build_pdf.py <out.pdf>

Dependencies:  pip install fpdf2 beautifulsoup4

The samples section is read from tools/samples.json (the samples no
longer live on the page; they live in the combined samples PDF). The
built PDF lands in public/ and is served as-is by GitHub Pages / Vercel.
"""
import html.parser
import json
import re
import sys
from fpdf import FPDF
from fpdf.enums import XPos, YPos

OUT = sys.argv[1] if len(sys.argv) > 1 else 'public/Kaung-Myat-Thu-Portfolio.pdf'
FONT_MY = 'src/assets/fonts/PortfolioMyanmar.ttf'

NAVY   = (27, 54, 93)
NAVY2  = (14, 31, 54)
TEAL   = (14, 154, 167)
TEAL_BRIGHT = (94, 234, 212)
TEAL_SOFT = (231, 243, 242)
INK    = (30, 41, 59)
MUTED  = (100, 116, 139)
LINE   = (226, 232, 241)
CARD   = (244, 246, 249)

PORTFOLIO_URL = 'https://htetmyetflam3.github.io/kaungmyatthu-cv/portfolio.html'
CV_URL        = 'https://htetmyetflam3.github.io/kaungmyatthu-cv/'

def extract_samples():
    """Pull the content of the samples data file."""
    import json

    with open('tools/samples.json', encoding='utf-8') as f:
        out = json.load(f)
    if len(out) != 3:
        raise SystemExit(f'expected 3 sample panels in tools/samples.json, found {len(out)}')
    return out


SAMPLES = extract_samples()

class PortfolioPDF(FPDF):
    def __init__(self):
        super().__init__(format='A4')
        self.alias_nb_pages()
        for style in ['', 'B', 'I', 'BI']:
            self.add_font('my', style, FONT_MY)
        self.set_margins(18, 20, 18)  # generous top margin for header band
        self.set_auto_page_break(auto=True, margin=20)

    # ---------- helpers ----------
    def footer(self):
        if self.page_no() == 1:
            return
        self.set_draw_color(*LINE)
        self.set_line_width(0.3)
        self.line(18, 288.5, 192, 288.5)
        self.set_font('my', '', 7.5)
        self.set_text_color(*MUTED)
        self.set_xy(18, 290)
        self.cell(100, 5, 'Kaung Myat Thu  ·  Portfolio')
        self.set_xy(18, 290)
        self.cell(174, 5, f'Page {self.page_no()} / {{nb}}', align='R')

    def header_band(self, label):
        self.set_draw_color(*TEAL)
        self.set_line_width(0.8)
        self.set_text_color(*TEAL)
        self.set_font('my', 'B', 7.5)
        self.set_xy(18, 13)
        self.cell(80, 5, 'PORTFOLIO')
        self.set_text_color(*MUTED)
        self.set_font('my', '', 7.5)
        self.set_xy(18, 13)
        self.cell(174, 5, label, align='R')

    def kicker(self, num_label):
        self.set_font('my', 'B', 8)
        self.set_text_color(*TEAL)
        self.cell(0, 6, num_label.upper(), new_x=XPos.LEFT, new_y=YPos.NEXT)

    def section_title(self, text, size=19):
        self.set_font('my', 'B', size)
        self.set_text_color(*NAVY)
        self.multi_cell(0, size * 0.62, text, new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2)

    def rule(self):
        y = self.get_y()
        self.set_draw_color(*TEAL)
        self.set_line_width(1.2)
        self.line(18, y, 192, y)
        self.ln(6)

    def card_top(self, x, y, w, h, fill, border=None):
        self.set_fill_color(*fill)
        if border:
            self.set_draw_color(*border)
            self.set_line_width(0.4)
            self.rect(x, y, w, h, 'DF')
        else:
            self.rect(x, y, w, h, 'F')

    def link_line(self, label, url, x=18, y=None, show_url=True):
        """Render a clickable link line (handles text + underline/URL)."""
        self.set_font('my', 'B', 8.5)
        self.set_text_color(*TEAL)
        tw = self.get_string_width(label)
        self.set_xy(x, self.get_y() if y is None else y)
        hh = 7.4
        self.cell(tw + 2, hh, label, link=url, new_x=XPos.LEFT, new_y=YPos.NEXT)
        if show_url:
            self.set_text_color(*MUTED)
            self.set_font('my', '', 7.5)
            self.cell(0, 5.5, url, new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(0.5)

    def page_num_total(self):
        pass

    # ---------- pages ----------
    def cover(self):
        self.add_page()
        # full navy background
        self.set_fill_color(*NAVY2)
        self.rect(0, 0, 210, 297, 'F')
        # subtle accent band
        self.set_fill_color(*NAVY)
        self.rect(0, 0, 210, 58, 'F')
        # teal accent line
        self.set_fill_color(*TEAL_BRIGHT)
        self.rect(0, 56, 210, 1.6, 'F')

        # kicker
        self.set_font('my', 'B', 8.5)
        self.set_text_color(*TEAL_BRIGHT)
        self.set_xy(18, 22)
        self.cell(0, 6, 'PORTFOLIO  ·  2026')

        # name
        self.set_xy(18, 88)
        self.set_font('my', 'B', 40)
        self.set_text_color(255, 255, 255)
        self.multi_cell(174, 16, 'Kaung Myat Thu', new_x=XPos.LEFT, new_y=YPos.NEXT)

        # tagline
        self.set_x(18)
        self.set_font('my', '', 13)
        self.set_text_color(210, 222, 236)
        self.multi_cell(174, 7, 'Content, retail ops & systems — one working profile.', new_x=XPos.LEFT, new_y=YPos.NEXT)

        # role chips — clickable, same destinations as the index
        chip_dests = ['sec-01', 'sec-02', 'sec-03', 'sec-04', 'sec-05']
        chips = ['Case study', 'Content scripts', 'CSM systems', 'AI study', 'Writing samples']
        x, y = 18, 150
        for ch, dest in zip(chips, chip_dests):
            self.set_font('my', 'B', 8)
            w = self.get_string_width(ch) + 10
            if x + w > 192:
                x = 18; y += 12
            d = self.get_named_destination(dest)
            self.set_fill_color(38, 66, 96)
            self.set_draw_color(94, 234, 212)
            self.set_line_width(0.4)
            self.rect(x, y, w, 8, 'FD')
            self.set_text_color(255, 255, 255)
            self.set_xy(x + 5, y + 1.4)
            self.cell(w - 10, 5, ch, link=d)
            x += w + 4

        # index of contents — clickable internal destinations
        self.set_xy(18, 190)
        self.set_font('my', 'B', 7.5)
        self.set_text_color(140, 190, 180)
        self.cell(0, 6, 'IN THIS PORTFOLIO', new_x=XPos.LEFT, new_y=YPos.NEXT)
        index = [
            ('01', 'Case study — 321 Ecolife', 'sec-01'),
            ('02', 'Content scripts & reels', 'sec-02'),
            ('03', 'CSM systems — parts shelf mapping', 'sec-03'),
            ('04', 'AI study — Understanding Prompts in AI', 'sec-04'),
            ('05', 'Writing & translation samples', 'sec-05'),
        ]
        for num, label, dest in index:
            y = self.get_y()
            d = self.get_named_destination(dest)
            self.set_xy(18, y + 0.5)
            self.set_font('my', 'B', 9)
            self.set_text_color(*TEAL_BRIGHT)
            self.cell(10, 7, num, link=d)
            self.set_xy(30, y + 0.5)
            self.set_font('my', 'B', 9.5)
            self.set_text_color(230, 238, 246)
            self.cell(150, 7, label, link=d)
            self.set_xy(18, y + 9.5)

        # footer info
        self.set_xy(18, 250)
        self.set_draw_color(255, 255, 255)
        self.set_line_width(0.25)
        self.line(18, 250, 192, 250)
        self.set_font('my', '', 9)
        self.set_text_color(200, 216, 232)
        self.set_xy(18, 256)
        self.cell(90, 6, 'North Okkalapa, Myanmar')
        self.set_font('my', 'B', 9)
        self.set_text_color(*TEAL_BRIGHT)
        self.set_xy(18, 265)
        self.cell(174, 6, 'portfolio · 2026')

        self.ln(0)

    def rounded_rect_ghost(self, x, y, w, h, radius=3):
        self.set_fill_color(38, 66, 96)
        self.set_draw_color(94, 234, 212)
        self.set_line_width(0.4)
        self.rect(x, y, w, h, 'FD')

    def overview_page(self):
        self.add_page()
        self.set_link(name='sec-00', x=18, y=277)
        self.header_band('Overview')
        self.ln(6)
        self.kicker('Things in this file')
        self.section_title('Selected work at a glance', 20)
        self.rule()
        self.set_font('my', '', 10.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 6.5,
            'Each section below is a small, reviewable body of work — with the full files downloadable from the links inside. '
            'This PDF packages the portfolio into a single keepable file: case study, scripts, systems work, AI study and writing samples.')
        self.ln(4)
        self.set_font('my', 'B', 9)
        self.set_text_color(*TEAL)
        self.cell(0, 6, 'IN THIS PORTFOLIO', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1)

        # quick-glance grid card-like rows
        rows = [
            ('01', 'Case study — 321 Ecolife', 'Operations Assistant Supervisor · 2024–2025 · reporting, followers, sales'),
            ('02', 'Content scripts', 'IMB1 / 2 / 3 — L\'ABBELL reels · Echo Vibe story-led reel'),
            ('03', 'CSM systems', 'Automotive-parts shelf mapping + POS demo'),
            ('04', 'AI study', 'Prompt engineering — author manuscript (Layers & Zones)'),
            ('05', 'Writing samples', 'Translation · adaptation · creative writing'),
        ]
        for num, t, d in rows:
            y = self.get_y()
            self.card_top(18, y, 174, 15.5, CARD, LINE)
            self.set_fill_color(*NAVY)
            self.rect(18, y, 1.4, 15.5, 'F')
            self.set_font('my', 'B', 9.5)
            self.set_text_color(*NAVY)
            self.set_xy(25, y + 3)
            self.cell(0, 6, f'{num}  ·  {t}', new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_font('my', '', 8.5)
            self.set_text_color(*MUTED)
            self.set_xy(25, y + 9.5)
            self.cell(140, 5, d, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_xy(18, y + 19)
        self.ln(2)

        # contact strip — pinned to the bottom of the page
        y = 210
        self.card_top(18, y, 174, 43, NAVY2)
        self.set_fill_color(*TEAL_BRIGHT)
        self.rect(18, y, 174, 1.6, 'F')
        self.set_font('my', 'B', 7)
        self.set_text_color(*TEAL_BRIGHT)
        self.set_xy(24, y + 6)
        self.cell(70, 4.5, 'CONTACT')
        self.set_font('my', 'B', 11)
        self.set_text_color(255, 255, 255)
        self.set_xy(24, y + 12.5)
        self.cell(100, 6, 'Kaung Myat Thu')
        self.set_font('my', '', 7.5)
        self.set_text_color(200, 216, 232)
        self.set_xy(24, y + 19.5)
        self.cell(120, 4.5, '+959955400017   ·   North Okkalapa, Myanmar')
        self.set_font('my', 'B', 8)
        self.set_text_color(*TEAL_BRIGHT)
        self.set_xy(24, y + 27)
        self.cell(70, 5, 'Portfolio (web)', link=PORTFOLIO_URL)
        self.set_xy(96, y + 27)
        self.cell(70, 5, 'CV (web)', link=CV_URL)
        self.set_font('my', '', 6.5)
        self.set_text_color(150, 170, 195)
        self.set_xy(24, y + 34)
        self.cell(150, 4, 'This PDF is a static snapshot — click these links or the ones inside to open the live materials.')

    def case_study(self):
        self.add_page()
        self.set_link(name='sec-01', x=18, y=277)
        self.header_band('Case study')
        self.ln(3.5)
        self.kicker('01 — Case study')
        self.section_title('321 Ecolife — North Okkalapa')
        self.rule()
        self.set_font('my', 'B', 8)
        self.set_text_color(*TEAL)
        self.cell(0, 5.5, 'OPERATIONS ASSISTANT SUPERVISOR  ·  2024 – 2025', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.set_font('my', '', 10)
        self.set_text_color(*INK)
        self.multi_cell(0, 6.2, 'I coordinated branch administration and stock flow alongside voiceover and editing teams, '
                                 'and maintained social-media performance records. Reporting turned raw daily records into figures the branch could actually review.')
        self.ln(1.5)

        # stat tiles
        tiles = [('33', 'customer-feedback entries in the log'),
                 ('+90%', 'recorded follower growth, Oct–Dec'),
                 ('141,104', 'additional followers, Oct–Dec')]
        w = (174 - 14) / 3
        x = 18
        y = self.get_y()
        for i, (num, label) in enumerate(tiles):
            self.card_top(x, y, w, 17.5, CARD, LINE)
            self.set_fill_color(*NAVY)
            self.rect(x, y, w, 1.4, 'F')
            self.set_font('my', 'B', 14.5)
            self.set_text_color(*NAVY)
            self.set_xy(x, y + 3.2)
            self.cell(w, 8, num, align='C')
            self.set_font('my', '', 6.0)
            self.set_text_color(*MUTED)
            self.set_xy(x + 3, y + 11.7)
            self.cell(w - 6, 5.5, label, align='C')
            x += w + 7
        self.set_xy(18, y + 21.5)

        # followers bar chart
        self.set_font('my', 'B', 10)
        self.set_text_color(*NAVY)
        self.cell(0, 7, 'Month-end followers', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1)
        bars = [('Oct', '157,000', 52.6), ('Nov', '187,375', 62.8), ('Dec', '298,104', 100)]
        for label, val, pct in bars:
            y = self.get_y() + 1
            self.set_font('my', 'B', 8)
            self.set_text_color(*NAVY)
            self.cell(14, 6, label)
            bar_x = 34
            bar_w = 174 - 14 - 20 - 14  # leave room for value
            self.set_draw_color(*LINE)
            self.rect(bar_x, y, 112, 5.5, 'D')
            self.set_fill_color(*TEAL)
            self.rect(bar_x, y, 112 * pct / 100, 5.5, 'F')
            self.set_font('my', 'B', 8)
            self.set_text_color(*INK)
            self.set_xy(150, y - 0.5)
            self.cell(40, 6, val)
            self.set_xy(18, y + 7.6)
        self.ln(1)
        self.set_font('my', 'I', 7.5)
        self.set_text_color(*MUTED)
        self.cell(0, 5, 'Source: TikTok Performance worksheet. Rounded growth ~ +90%.', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2)

        # top-sale snapshot table
        self.set_font('my', 'B', 10)
        self.set_text_color(*NAVY)
        self.cell(0, 7, 'Top-sale snapshot', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(0.5)
        rows = [
            ('ER321004', '128-05/02/01 Outlet — (Size 36 to 48)', '209'),
            ('32100863', 'Nike Air', '146'),
            ('32100142', 'Outlet', '127'),
            ('32100854', '98-16 (Kappa / Flexzone360)', '135'),
            ('32100942', 'Flash Sale', '362'),
        ]
        cols = [30, 108, 24]
        self.set_fill_color(*NAVY)
        self.set_text_color(255, 255, 255)
        self.set_font('my', 'B', 7.5)
        y = self.get_y()
        self.rect(18, y, 162, 6.6, 'F')
        self.set_xy(22, y + 1.5)
        self.cell(26, 4, 'Item code')
        self.set_xy(55, y + 1.5)
        self.cell(100, 4, 'Recorded description')
        self.set_xy(165, y + 1.5)
        self.cell(13, 4, 'Qty')
        self.set_xy(18, y + 6.6)
        self.set_font('my', '', 8)
        self.set_text_color(*INK)
        for idx, (code, desc, qty) in enumerate(rows):
            y = self.get_y()
            if idx % 2 == 1:
                self.set_fill_color(*CARD)
                self.rect(18, y, 162, 6.3, 'F')
            self.set_xy(22, y + 1.2)
            self.cell(26, 4, code)
            self.set_xy(55, y + 1.2)
            self.cell(100, 4, desc)
            self.set_xy(165, y + 1.2)
            self.cell(13, 4, qty)
            self.set_xy(18, y + 6.3)
        self.ln(2)

        # feedback quotes
        self.set_font('my', 'B', 10)
        self.set_text_color(*NAVY)
        self.cell(0, 7, 'Verbatim customer feedback · surviving log', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1)
        quotes = [('"Good Service"', 'Customer feedback · row 2', 'my'),
                  ('"Excellent service"', 'Customer feedback · row 10', 'my'),
                  ('"Service အရမ်းကောင်းပါတယ်။ Size စုံစေချင်တယ်။"', 'Positive service + size request · row 28', 'my')]
        for text, meta, lang in quotes:
            self.card_top(18, self.get_y(), 174, 13, TEAL_SOFT, (205, 227, 225))
            self.set_fill_color(*TEAL)
            self.rect(18, self.get_y(), 1.4, 13, 'F')
            y = self.get_y()
            self.set_xy(25, y + 2.6)
            self.set_font('my', '', 8)
            self.set_text_color(23, 73, 79)
            self.cell(0, 4, text, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_font('my', 'B', 6.5)
            self.set_text_color(*TEAL)
            self.set_xy(25, y + 7.6)
            self.cell(0, 4, meta)
            self.set_xy(18, y + 14.8)
        self.ln(0.5)

        # redaction note + download
        self.card_top(18, self.get_y(), 174, 17, (255, 247, 236), (252, 220, 168))
        self.set_font('my', 'B', 8.5)
        self.set_text_color(180, 83, 9)
        self.set_xy(25, self.get_y() + 2.6)
        self.cell(0, 4.2, 'Phone numbers redacted', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.set_font('my', '', 7.5)
        self.set_text_color(110, 64, 10)
        self.set_xy(25, self.get_y() + 0.5)
        self.multi_cell(160, 4.0,
            'This copy has all 33 customer phone numbers removed (values shown as \'[redacted]\'). Customer names and other workbook records are retained — not fully anonymised. Original master stays private in Drive.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.set_xy(18, self.get_y() + 19.5)
        self.link_line('Download full case study · 321NOK-Master-Redacted.xlsx (XLSX)', 'https://drive.google.com/file/d/1w9JDMM0OM9vBKksnJO-1iJoqpJECOq3J/view', show_url=False)

    def scripts_section(self):
        self.add_page()
        self.set_link(name='sec-02', x=18, y=277)
        self.header_band('Content scripts')
        self.ln(6)
        self.kicker('02 — Content scripts')
        self.section_title('Writing for the audience — and the shoot.')
        self.rule()
        self.set_font('my', '', 9)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 5.5, 'Burmese scripts, visual direction and on-screen copy for brand videos.')
        self.ln(3)

        files = [
            ('IMB3 · Rebonding script', 'Script · DOCX', "L'ABBELL Professional — Rebonding System · ~50–60 sec · Burmese + on-screen copy",
             'https://drive.google.com/file/d/1HkV70oH4de5Q7CB6M0TbvlSc-0fCZKEz/view'),
            ('IMB1 · Leave-in conditioner', 'Script · DOCX', "L'ABBELL 2 Phase Moisture Leave-in Conditioner · 45 sec · Talent 1 · Burmese voiceover",
             'https://drive.google.com/file/d/1uh-ZL2w9SlO8I97ThPEwokKKPGsBw-VA/view'),
            ('IMB2 · Salon-quality home hair care', 'Script · DOCX', "L'ABBELL Professional — Scalp & Hair Solution · 55–60 sec · Burmese voiceover",
             'https://drive.google.com/file/d/1aNmsMVi89BviE6aRM59Aptb9wZ1oZi96/view'),
            ('Echo Vibe · Full script', 'Script · DOCX', 'Complete story-led after-work reel — scenes 1–4 + outro, dialogue, camera and audio cues',
             'https://drive.google.com/file/d/1VZDnBgFtuVXeNgMC2tQ2sr0zSv033WdG/view'),
            ('Echo Vibe · Script (with title)', 'PDF', 'Story-led reel script with a titled title page — for the shoot team and presenter',
             'https://drive.google.com/file/d/12jsQB682IqyOk9PQvZ3PNDNSb8-e5yb8/view'),
        ]
        for name, kind, meta, url in files:
            y = self.get_y()
            self.card_top(18, y, 174, 21, CARD, LINE)
            self.set_font('my', 'B', 7)
            self.set_text_color(*TEAL)
            self.set_xy(22, y + 3.4)
            self.cell(0, 4, kind)
            self.set_font('my', 'B', 10.5)
            self.set_text_color(*NAVY)
            self.set_xy(22, y + 7)
            self.cell(0, 6, name, link=url, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_font('my', '', 7.6)
            self.set_text_color(*MUTED)
            self.set_xy(22, y + 12.5)
            self.cell(0, 4.5, meta)
            self.set_xy(18, y + 23.5)
        self.ln(2)
        self.set_font('my', 'I', 8)
        self.set_text_color(*MUTED)
        self.cell(0, 5, 'Scripts live in Google Drive — click any title in this PDF to open it.', new_x=XPos.LEFT, new_y=YPos.NEXT)

    def csm_section(self):
        self.add_page()
        self.set_link(name='sec-03', x=18, y=277)
        self.header_band('CSM systems')
        self.ln(6)
        self.kicker('03 — CSM systems')
        self.section_title('Finding the right part — not ordering it twice.')
        self.rule()
        self.set_font('my', 'B', 7.5)
        self.set_text_color(*TEAL)
        self.cell(0, 5, 'AUTOMOTIVE PARTS · EPOS + EXCEL SHELF MAPPING + IN-STORE POS DEMO', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2)
        self.set_font('my', '', 9.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 6,
            'In a densely stocked automotive-parts shop, one shelf row can hold 30+ variants among 100+ pieces; similar-looking parts fit different vehicles, '
            'and the same part fits many vehicles. A missing item gets assumed out of stock › replacements arrive › the original reappears › '
            'duplicates take scarce shelf space › the cycle repeats.')
        self.ln(2)

        steps = [('STEP 1', 'Identify the code', 'Look up the code in the shelf-location map.'),
                 ('STEP 2', 'Find the position', 'Main row › shelf › row in shelf (MR-2 / SH-1 / R3).'),
                 ('STEP 3', 'Confirm & replenish', 'Verify the variant, then replenish the same location.')]
        for n, t, d in steps:
            y = self.get_y()
            self.card_top(18, y, 174, 16, CARD, LINE)
            self.set_fill_color(*TEAL)
            self.rect(18, y, 1.4, 16, 'F')
            self.set_font('my', 'B', 6.5)
            self.set_text_color(*TEAL)
            self.set_xy(25, y + 2.8)
            self.cell(0, 4, n)
            self.set_font('my', 'B', 10)
            self.set_text_color(*NAVY)
            self.set_xy(38, y + 2.6)
            self.cell(140, 5, t)
            self.set_font('my', '', 8.5)
            self.set_text_color(*MUTED)
            self.set_xy(38, y + 8.2)
            self.cell(0, 4, d)
            self.set_xy(18, y + 18.5)
        self.ln(2)
        self.set_font('my', 'B', 8.5)
        self.set_text_color(*NAVY)
        self.cell(0, 6, 'Files', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1)
        self.link_line('CSM shelf-map master · XLSX', 'https://drive.google.com/file/d/10XOAv-I7ROVnqFqA8jomVxnuDPe1q93F/view')
        self.link_line('Point of Sale · XLSM', 'https://drive.google.com/file/d/1eBNVITMSUjBNzgKOq48TjG386SGfyaJF/view')

    def ai_section(self):
        self.add_page()
        self.set_link(name='sec-04', x=18, y=277)
        self.header_band('AI study')
        self.ln(6)
        self.kicker('04 — AI study')
        self.section_title('Understanding Prompts in AI — author')
        self.rule()

        # manuscript card
        y = self.get_y()
        self.card_top(18, y, 174, 46, NAVY, None)
        self.set_fill_color(*NAVY)
        self.rect(18, y, 174, 1.6, 'F')
        self.set_font('my', 'B', 6.5)
        self.set_text_color(*TEAL_BRIGHT)
        self.set_xy(23, y + 5)
        self.cell(0, 4, 'INDEPENDENT MANUSCRIPT')
        self.set_font('my', 'B', 13)
        self.set_text_color(255, 255, 255)
        self.set_xy(23, y + 10.5)
        self.multi_cell(110, 7.5, 'Beyond the wording of a prompt.')
        self.set_font('my', 'B', 8)
        self.set_text_color(210, 222, 236)
        self.set_xy(23, y + 30.5)
        self.cell(0, 5, 'Kaung Myat Thu')
        self.set_font('my', '', 7)
        self.set_text_color(160, 185, 215)
        self.set_xy(23, y + 35.5)
        self.cell(0, 4, 'A personal “Layers & Zones” framework')
        self.set_xy(18, y + 50)
        self.set_font('my', '', 9.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 6, 'Why can a clearly written prompt still produce an unexpected response?')
        self.ln(1)
        self.set_font('my', '', 8.5)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 5.5,
            'Development paused as AI evolved; the full manuscript is linked below. Excerpts are original wording, lightly excerpted — no author note or source notes included.')
        self.ln(2)

        self.set_font('my', 'B', 10)
        self.set_text_color(*NAVY)
        self.cell(0, 7, 'From the manuscript — body excerpts', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1)
        excerpts = [
            ('Prompts as tasks across AI types',
             'In LLM-based AI, the user provides instructions, questions or examples and the system generates responses dynamically. The conversation itself becomes the task. In other AI types, tasks are embedded directly into control logic. Not all AI uses prompts — prompt-based interaction is what makes LLM-based AI fundamentally different.'),
            ('AI: emergent behaviour, not magic',
             'No single component inside an AI system performs the task alone. Just like the CPU, the behavior appears purposeful because of the coordinated interaction of mathematical operations, learned parameters, sensory inputs and embedded rules — not an individual insight. Emergent behavior results solely from the structured interaction of billions of parameters.'),
            ('Prompt engineering: nudging patterns',
             'Prompt engineering influences learned patterns within the model. A well-structured prompt guides the system toward outputs aligned with those patterns — alignment may occur precisely, partially or unexpectedly, because AI behavior is probabilistic rather than deterministic.'),
        ]
        for t, p in excerpts:
            y = self.get_y()
            self.set_font('my', '', 8.5)
            lines = self.multi_cell(160, 5.2, p, output='LINES', dry_run=True)
            card_h = 6 + 4 + 2 + len(lines) * 5.2 + 3
            self.card_top(18, y, 174, 1, TEAL, None)
            self.set_fill_color(*TEAL_SOFT)
            self.rect(19.5, y + 1, 170, card_h, 'F')
            self.set_font('my', 'B', 8)
            self.set_text_color(*TEAL)
            self.set_xy(24, y + 4.5)
            self.cell(0, 4, t.upper())
            self.set_font('my', '', 8.5)
            self.set_text_color(55, 69, 92)
            self.set_xy(24, y + 9)
            for i, ln_ in enumerate(lines):
                self.cell(160, 5.2, ln_, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_xy(18, y + card_h + 5)
        self.ln(2)
        self.link_line('Download full manuscript · Understanding Prompts (DOCX)',
                      'https://drive.google.com/file/d/1gRYE5s4LfUS3DKCGbgPhP20mz122mK-h/view')

    def samples_section(self):
        self.add_page()
        self.set_link(name='sec-05', x=18, y=277)
        self.header_band('Writing samples')
        self.ln(2)
        self.kicker('05 — Writing samples')
        self.section_title('Language samples', 20)
        self.rule()
        self.set_font('my', '', 9)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 5.5, 'Translation, adaptation and creative writing — original excerpts.')
        self.ln(4)

        for i, s in enumerate(SAMPLES):
            tag, title = s['tag'].upper(), s['title']
            # sample header card
            y = self.get_y()
            self.card_top(18, y, 174, 17, NAVY, None)
            self.set_fill_color(*NAVY)
            self.set_font('my', 'B', 7)
            self.set_text_color(*TEAL_BRIGHT)
            self.set_xy(23, y + 4)
            self.cell(0, 4, f'{tag}  ·  SAMPLE {i+1}')
            self.set_font('my', 'B', 10.5)
            self.set_text_color(255, 255, 255)
            self.set_xy(23, y + 9)
            self.cell(0, 5, title)
            self.set_xy(18, y + 20.5)

            # body items
            for it in s['items']:
                if it['t'] == 'h3':
                    self.set_font('my', 'B', 10.5)
                    self.set_text_color(*NAVY)
                    self.ln(2)
                    self.multi_cell(0, 7, it['text'], new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(1)
                    continue
                if it.get('lang') == 'my':
                    self.set_font('my', '', 10)
                    self.set_text_color(40, 55, 75)
                    self.multi_cell(0, 10.5, it['text'], new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(2.2)
                else:
                    self.set_font('my', 'I', 8.5)
                    self.set_text_color(83, 99, 122)
                    self.multi_cell(0, 7.5, it['text'], new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(2.5)
            self.ln(3)

    def links_page(self):
        self.add_page()
        self.set_link(name='sec-06', x=18, y=277)
        self.header_band('Index')
        self.ln(6)
        self.kicker('Navigation')
        self.section_title('Links & contact', 20)
        self.rule()
        self.set_font('my', '', 9.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 6,
            'This PDF is a self-contained snapshot of the portfolio. Live materials live on the web and in Google Drive; every link below opens that material in a new tab.')
        self.ln(1)
        groups = [
            ('Portfolio & CV', [
                ('Portfolio (web)', PORTFOLIO_URL),
                ('CV (web)', CV_URL),
            ]),
            ('Case study', [
                ('321NOK-Master-Redacted.xlsx — 321 Ecolife case study (XLSX)',
                 'https://drive.google.com/file/d/1w9JDMM0OM9vBKksnJO-1iJoqpJECOq3J/view'),
            ]),
            ('Content scripts', [
                ('IMB1 · Leave-in conditioner (DOCX)', 'https://drive.google.com/file/d/1uh-ZL2w9SlO8I97ThPEwokKKPGsBw-VA/view'),
                ('IMB2 · Salon-quality home hair care (DOCX)', 'https://drive.google.com/file/d/1aNmsMVi89BviE6aRM59Aptb9wZ1oZi96/view'),
                ('IMB3 · Rebonding script (DOCX)', 'https://drive.google.com/file/d/1HkV70oH4de5Q7CB6M0TbvlSc-0fCZKEz/view'),
                ('Echo Vibe · Full script (DOCX)', 'https://drive.google.com/file/d/1VZDnBgFtuVXeNgMC2tQ2sr0zSv033WdG/view'),
                ('Echo Vibe · Script with title (PDF)', 'https://drive.google.com/file/d/12jsQB682IqyOk9PQvZ3PNDNSb8-e5yb8/view'),
            ]),
            ('Systems & AI', [
                ('CSM shelf-map master (XLSX)', 'https://drive.google.com/file/d/10XOAv-I7ROVnqFqA8jomVxnuDPe1q93F/view'),
                ('Point of Sale (XLSM)', 'https://drive.google.com/file/d/1eBNVITMSUjBNzgKOq48TjG386SGfyaJF/view'),
                ('Understanding Prompts · manuscript (DOCX)', 'https://drive.google.com/file/d/1gRYE5s4LfUS3DKCGbgPhP20mz122mK-h/view'),
            ]),
        ]
        for group, items in groups:
            self.set_font('my', 'B', 8)
            self.set_text_color(*TEAL)
            self.cell(0, 7, group.upper(), new_x=XPos.LEFT, new_y=YPos.NEXT)
            y = self.get_y()
            for label, url in items:
                self.set_font('my', 'B', 9)
                self.set_text_color(*NAVY)
                self.cell(0, 6.5, label, link=url, new_x=XPos.LEFT, new_y=YPos.NEXT)
                self.ln(0.5)
            self.ln(1.5)
        self.ln(2)
        self.set_fill_color(*CARD)
        self.rect(18, self.get_y(), 174, 24, 'F')
        self.set_font('my', 'B', 8.5)
        self.set_text_color(*NAVY)
        self.set_xy(24, self.get_y() + 4)
        self.cell(0, 5, 'CONTACT')
        self.set_font('my', '', 8)
        self.set_text_color(*INK)
        self.set_xy(24, self.get_y() + 9.5)
        self.cell(0, 5, '+959955400017   ·   North Okkalapa, Myanmar')
        self.ln(0)

    def build(self):
        self.cover()
        self.overview_page()
        self.case_study()
        self.scripts_section()
        self.csm_section()
        self.ai_section()
        self.samples_section()
        self.links_page()
        self.set_author('Kaung Myat Thu')
        self.set_title('Kaung Myat Thu — Portfolio')
        self.set_subject('Portfolio: case study, scripts, systems, AI study, writing samples')
        self.set_creator('Kaung Myat Thu')
        self.output(OUT)
        print('PDF written to', OUT)

if __name__ == '__main__':
    PortfolioPDF().build()
