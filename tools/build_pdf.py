#!/usr/bin/env python3
"""Build the self-designed single-PDF portfolio (Kaung Myat Thu).

Usage:  python3 tools/build_pdf.py <out.pdf>

Dependencies:  pip install fpdf2 beautifulsoup4

The samples section is read from tools/samples.json (the samples no
longer live on the page; they live in the combined samples PDF). The
built PDF lands in public/ and is served as-is by GitHub Pages.
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

SITE          = 'https://htetmyetflam3.github.io/kaungmyatthu-cv/'
PORTFOLIO_URL = SITE + 'portfolio.html'
CV_URL        = SITE
PAGES = [
    ('Full portfolio (single page)', PORTFOLIO_URL),
    ('CV / resume',                  SITE),
    ('321 work record',             SITE + 'work-record.html'),
    ('Warehouse & CSM',              SITE + 'warehouse.html'),
    ('Content & scripts',            SITE + 'content.html'),
    ('Prompt engineering',           SITE + 'ai.html'),
    ('Projects (web work)',          SITE + 'projects.html'),
    ('About me',                     SITE + 'about.html'),
    ('Myangustis',                   SITE + 'myangustis.html'),
]

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
        # Noto Sans Myanmar needs real OpenType shaping, otherwise Burmese stacks
        # render out of order and every syllable sits on a dotted circle.
        self.set_text_shaping(True)
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

        # logo mark, on a white card so it reads against the navy band
        self.set_fill_color(255, 255, 255)
        self.rect(168, 16, 24, 24, 'F', round_corners=True)
        self.image('public/logo-mark.png', x=171.5, y=19.5, w=17)

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
        chips = ['321 work record', 'NPT warehouse', 'Excel & CSM', 'Content', 'It & tech']
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
        self.set_xy(18, 178)
        self.set_font('my', 'B', 7.5)
        self.set_text_color(140, 190, 180)
        self.cell(0, 6, 'THE WORK, IN ORDER', new_x=XPos.LEFT, new_y=YPos.NEXT)
        index = [
            ('00', 'Where I have worked — every role, in order', 'sec-00x'),
            ('01', '321 Ecolife — work record & daily workflow', 'sec-01'),
            ('02', 'NPT — warehouse, item IDs, barcode labels', 'sec-02'),
            ('03', 'Excel & CSM — POS, shelf map, staff training', 'sec-03'),
            ('04', 'Video scripts for marketing', 'sec-04'),
            ('05', 'Canal+, translation & creative', 'sec-04b'),
            ('06', 'It & tech — prompt book, builds, Myangustis', 'sec-05'),
            ('07', 'Writing samples — Burmese and English', 'sec-06'),
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
            self.set_xy(18, y + 8.3)

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
        self.kicker('The work, in order')
        self.section_title('Selected work at a glance', 20)
        self.rule()
        self.set_font('my', '', 10.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 6.5,
            'The work I can show, filed the way it is filed on my own Drive: 321, NPT, the Excel and CSM work, the content '
            'folders, the tech folder, and the writing samples last.')
        self.ln(4)
        self.set_font('my', 'B', 9)
        self.set_text_color(*TEAL)
        self.cell(0, 6, 'THE SECTIONS', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1)

        # quick-glance grid card-like rows
        rows = [
            ('00', 'Where I have worked', 'Every role in order — 321, NPT, CSM, the NGO, the writing and the builds', 'page 2', 'sec-00x'),
            ('01', '321 Ecolife', 'Operation Assistant Supervisor · Nov 2024 – Jan 2025 · reporting, sales, TikTok', 'page 4', 'sec-01'),
            ('02', 'NPT warehouse', 'Item registration, the ID-is-the-barcode label sheet, the reference letter', 'page 6', 'sec-02'),
            ('03', 'Excel & CSM', 'POS from Excel, shelf map, till mock-up, six workbooks merged into one', 'page 7', 'sec-03'),
            ('04', 'Video scripts', 'IMB1 / 2 / 3 · Echo Vibe · bar daily posts — six written scripts', 'page 8', 'sec-04'),
            ('05', 'Canal+ & translation', 'Adaptation, the combat-zone translation, original pieces', 'page 9', 'sec-04b'),
            ('06', 'It & tech', 'The prompt book, the three sites, Myangustis', 'page 10', 'sec-05'),
            ('07', 'Writing samples', 'Burmese and English excerpts, read as they were written', 'page 11', 'sec-06'),
        ]
        for num, t, d, page, dest in rows:
            y = self.get_y()
            self.card_top(18, y, 174, 14, CARD, LINE)
            self.set_fill_color(*NAVY)
            self.rect(18, y, 1.4, 14, 'F')
            self.set_font('my', 'B', 9.5)
            self.set_text_color(*NAVY)
            self.set_xy(25, y + 3)
            self.cell(0, 6, f'{num}  ·  {t}', link=dest, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_font('my', '', 8.5)
            self.set_text_color(*MUTED)
            self.set_xy(25, y + 8.9)
            self.cell(140, 5, d, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_font('my', 'B', 7)
            self.set_text_color(*TEAL)
            self.set_xy(160, y + 8.9)
            self.cell(28, 5, page, align='R')
            self.set_xy(18, y + 16.6)
        self.ln(2)

        # the live pages are all listed on the index page, so the overview stays a clean eight

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
        self.cell(150, 4, 'Every link opens the live page or file.')
        self.set_xy(18, y + 46.5)

        self.kicker('WHAT I WANT NEXT')
        self.set_font('my', '', 8.6)
        self.set_text_color(*INK)
        self.multi_cell(0, 4.7,
            'I want the next job to be operations with systems in it: a store, a warehouse or a back office where '
            'the records are mine to build and the numbers are wanted straight. Retail ops and content both suit me, '
            'and longer term I want to build tools like Myangustis properly.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)

    def experience_page(self):
        self.add_page()
        self.set_link(name='sec-00x', x=18, y=277)
        self.header_band('Experience')
        self.ln(3.5)
        self.kicker('00 — Experience')
        self.section_title('Where I have worked', 19)
        self.rule()
        self.set_font('my', '', 9)
        self.set_text_color(*INK)
        self.multi_cell(0, 5.2,
            'Six years, four kinds of work: a shop floor, a warehouse, a content desk and freelance builds. '
            'Most recent first — the three at the top are the ones with detail pages in this file.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2.5)

        rows = [
            ('Operation Assistant Supervisor — 321 Ecolife (Stalker Company Limited), Nok branch',
             'Nov 2024 – Jan 2025',
             'Ran one of six shops with no shop manager above me; reported to the sector manager on the board. '
             'Attendance, daily expense, sales and stock records, staff transfer and assignment, and the branch TikTok.'),
            ('Warehouse Supervisor — NPT Group, Mawlamyine', '6 Jan – 1 Nov 2024',
             'The job I took after moving to Mawlamyine. Electronics, tools and raw materials, no stock system, so '
             'every item registered by hand every day. Co-founder’s letter of recommendation dated 08 Dec 2024.'),
            ('POS setup, shelf map, staff training — car-parts shop (CSM)', 'freelance, about 4.5 months',
             'A shop with no till. Built the import-shaped register, an ID for every part, the shelf map around '
             'shelves the owners would not move, then trained the staff on a till mock-up.'),
            ('Senior Logistic Officer — NGO (C.D.A)', '2021 – 2022',
             'Warehouse and transport operations for project areas.'),
            ('Script Writer (part-time) — Program.base', '2021 – 2022',
             'Burmese scripts for travel, infotainment and educational content; Canal+ Myanmar media adaptation '
             '(Alice Adventure) followed, 2022 – 2023.'),
            ('Content Writer — Country BAR, North Dagon', '2020',
             'Articles and lifestyle / marketing posts, kept consistent with the brand.'),
            ('Translator — freelance', '2022 – 2023',
             'English to Burmese literary and digital content, including U.S. (Texas) life insurance policies.'),
            ('WordPress builds — Yumeyuki.info, TTS-AE.com, Writermorphosis.com', 'current',
             'A legal overseas-employment agency, a UAE company project, and my own build, still going.'),
            ('Myangustis — own project', 'ongoing',
             'A Burmese segmenter and part-of-speech tagger built by rule, with the parser, scraper and proofreading workflow around it.'),
        ]
        for title, period, body_text in rows:
            y0 = self.get_y()
            self.set_font('my', 'B', 8.8)
            lines_t = self.multi_cell(140, 4.6, title, dry_run=True, output='LINES')

            self.set_font('my', '', 7.6)
            self.set_text_color(*TEAL)
            self.set_xy(160, y0)
            self.cell(32, 4.6, period, align='R')

            self.set_font('my', 'B', 8.8)
            self.set_text_color(*NAVY)
            self.set_xy(18, y0)
            for ln in lines_t:
                self.cell(140, 4.6, ln, new_x=XPos.LEFT, new_y=YPos.NEXT)

            self.set_font('my', '', 8)
            self.set_text_color(60, 74, 96)
            self.set_x(18)
            self.multi_cell(174, 4.4, body_text, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.ln(1.8)

        self.ln(1)
        self.set_draw_color(*LINE)
        self.line(18, self.get_y(), 192, self.get_y())
        self.ln(2.5)
        self.set_font('my', 'B', 7.6)
        self.set_text_color(*TEAL)
        self.cell(0, 4.4, 'EDUCATION  ·  CERTIFICATION', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.set_font('my', '', 7.8)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 4.2,
            'Hmaw Bi Technology University — civil engineering, to third year (2012 – 2015) · B.A. English (2019) · '
            'KMD Institute — practical A+ and basic network engineering (2015) · Conversion Optimization '
            'Certification, Skillshop, issued 30 Nov 2025, expires 30 Nov 2026.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)

    def case_study(self):
        self.add_page()
        self.set_link(name='sec-01', x=18, y=277)
        self.header_band('Work record')
        self.ln(3.5)
        self.kicker('01 — Work record')
        self.section_title('321 Ecolife — North Okkalapa')
        self.rule()
        self.set_font('my', 'B', 8)
        self.set_text_color(*TEAL)
        self.cell(0, 5.5, 'OPERATION ASSISTANT SUPERVISOR  ·  321 ECO LIFE, NOK BRANCH  ·  NOV 2024 – JAN 2025',
                  new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.set_font('my', '', 10)
        self.set_text_color(*INK)
        self.multi_cell(0, 6.2, 'The title was smaller than the job. Stalker had no shop supervisor and no shop manager at Nok — '
                                 'one of six 321 Ecolife shops, groomed as the head branch — so the branch\u2019s work landed on me: '
                                 'attendance and days off, staff transfer and assignment records, daily expense and cashier follow-up, '
                                 'sales and stock records, and the branch TikTok, captions to reporting. Every report went straight to the '
                                 'Ecolife sector manager on the board, with no shop manager in between.')
        self.ln(1.5)

        # stat tiles
        tiles = [('33', 'customer-feedback entries'),
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
        self.cell(0, 5, 'Recorded growth ~ +89.9%, Oct–Dec.', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(0.8)
        self.multi_cell(0, 4.2,
            'Daily-record note — December’s confirmed increase was 110,729; the remaining daily entries total 56,591 '
            'and do not reconcile with it. Both records are kept; the daily series is not a full breakdown.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
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
        self.cell(0, 6.4, 'Customer feedback', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(0.6)
        quotes = [('"Good Service"', 'my'),
                  ('"Excellent service"', 'my'),
                  ('"Service အရမ်းကောင်းပါတယ်။ Size စုံစေချင်တယ်။"', 'my')]
        for text, lang in quotes:
            self.card_top(18, self.get_y(), 174, 11.5, TEAL_SOFT, (205, 227, 225))
            self.set_fill_color(*TEAL)
            self.rect(18, self.get_y(), 1.4, 11.5, 'F')
            y = self.get_y()
            self.set_xy(25, y + 1.9)
            self.set_font('my', '', 8)
            self.set_text_color(23, 73, 79)
            self.cell(0, 4, text, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_xy(18, y + 13.2)
        self.ln(0.5)

        # reference note — the full workbook is available on request
        note_y = self.get_y()
        self.card_top(18, note_y, 174, 20, (255, 247, 236), (252, 220, 168))
        self.set_font('my', 'B', 8.5)
        self.set_text_color(180, 83, 9)
        self.set_xy(25, self.get_y() + 2.6)
        self.cell(0, 4.2, 'The full workbook', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.set_font('my', '', 7.5)
        self.set_text_color(110, 64, 10)
        self.set_xy(25, self.get_y() + 0.5)
        self.multi_cell(160, 4.0,
            'Customer phone numbers redacted. The redacted workbook is linked in this PDF’s links page.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
        # certification — one compact line so this page stays on a single page
        self.set_xy(18, note_y + 22)
        self.set_font('my', 'B', 7.2)
        self.set_text_color(*NAVY)
        label = 'Certification · '
        self.cell(self.get_string_width(label) + 0.6, 4, label)
        self.set_font('my', '', 7.2)
        self.set_text_color(*MUTED)
        self.cell(0, 4,
            'Conversion Optimization Certification Exam — Skillshop · issued 30 Nov 2025 · expires 30 Nov 2026 · ID 167907950',
            link='https://skillshop.credential.net/b20838ac-849b-4194-9437-c52f49d9ff46',
            new_x=XPos.LEFT, new_y=YPos.NEXT)

    def workflow_section(self):
        self.add_page()
        self.header_band('Daily workflow')
        self.ln(3.5)
        self.kicker('01b — Daily workflow')
        self.section_title('My daily workflow')
        self.rule()
        self.set_font('my', '', 9)
        self.set_text_color(*INK)
        self.multi_cell(0, 5.2,
            'I made this checklist as a personal reminder system for a role with many small, recurring '
            'responsibilities. It helped me remember what to check, whom to follow up with and when to return '
            'to the same records during the day.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2)
        self.multi_cell(0, 5.2,
            'The original combines staff administration, cash and sales checks, stock coordination, TikTok '
            'follow-up, reporting and closing tasks. The summary below is a readable version; the original '
            'document is linked in the index page.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(4)

        self.set_font('my', 'B', 9)
        self.set_text_color(*NAVY)
        self.cell(0, 6, 'Summary of my original checklist', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1.5)

        rows = [
            ('Opening and information flow',
             '9:00 attendance/check-in approval; 9:15 Viber attendance and updates; 9:20 generator-use '
             'checks; 9:30 bank transfer/change tasks.'),
            ('Morning content and sales checks',
             '9:45 video captions; 10:20 team-leader discussion; 10:35 deposit-slip checks; 10:40 late-sale '
             'entry checks; 10:45 stock-team pivot follow-up; 10:50 salesperson-total/net-sale comparison.'),
            ('Posting and staff follow-up',
             '11:00 check the scheduled 10:00 TikTok post and comment replies; closing-check follow-up with '
             'cashiers; break-book and other-floor checks.'),
            ('Reporting and afternoon coordination',
             '12:10–1:00 personal reporting, review and notes; 2:15 check the 1:00 TikTok post/replies; '
             '2:20 online-sale payment follow-up; 2:50 stock-order discussion and order-list checking before signing.'),
            ('End-of-day controls',
             '4:00 sales-total and pivot checks; 4:20 captions/corrections; 4:45 daily-note review; closing, '
             'generator-log, returns and stock checks across the evening; 5:55 checkout approval.'),
        ]
        for stage, detail in rows:
            y = self.get_y()
            self.set_font('my', 'B', 8.2)
            self.set_text_color(*NAVY)
            self.set_xy(18, y + 1.6)
            self.multi_cell(44, 4.4, stage, align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
            after_left = self.get_y()
            self.set_xy(64, y + 1.6)
            self.set_font('my', '', 8.2)
            self.set_text_color(*INK)
            self.multi_cell(128, 4.4, detail, align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
            after_right = self.get_y()
            self.set_y(max(after_left, after_right) + 2.2)

        self.ln(2)
        self.set_font('my', 'I', 7.6)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 4.2,
            'My personal working checklist, in its original Burmese/English wording and order. The timings are as I '
            'wrote them; the generator checks appear several times because the electricity here is not on all day — it '
            'comes in shifts, and in summer it can go and come back, so each check and log entry was a separate task. '
            'The original DOCX is linked in the index page.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(6)

        self.set_font('my', 'B', 9)
        self.set_text_color(*NAVY)
        self.cell(0, 6, 'Other records in the same workbook', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1.5)
        lines = [
            ('daily sale ', '31 daily rows, 1–31 December 2024 — sale revenue 148,356,500; discount 1,068,495; '
                            'net 147,288,005; returns 1,081,500 (MMK). Recorded sales, not profit.'),
            ('Stuff level up', 'Staff movement: three new starters, one transfer to online sale, one resignation, '
                               'three terminations.'),
            ('DAYS -OFF', 'Weekly days-off schedule covering 18 staff, Monday to Saturday.'),
            ('Generator Usage Log', 'Seven entries, 24 December 2024 – 15 January 2025, with start/end times and '
                                    'run times of 1–8 hours.'),
            ('customer feedback', '33 feedback rows; praise and product requests kept apart in this PDF.'),
        ]
        for name, detail in lines:
            y = self.get_y()
            self.set_font('my', 'B', 7.8)
            self.set_text_color(*NAVY)
            self.set_xy(18, y + 1.2)
            self.multi_cell(38, 4.2, name, align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
            left = self.get_y()
            self.set_xy(58, y + 1.2)
            self.set_font('my', '', 8)
            self.set_text_color(*INK)
            self.multi_cell(134, 4.2, detail, align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.set_y(max(left, self.get_y()) + 1.8)

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
        self.cell(0, 5, 'Scripts live in Google Drive — every file is linked from the index page at the back.', new_x=XPos.LEFT, new_y=YPos.NEXT)

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
        self.cell(0, 5, 'AUTOMOTIVE PARTS · POS SETUP + SHELF MAPPING + STAFF TRAINING', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2)
        self.set_font('my', '', 9.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 6,
            'The shop had no till. Local POS software imports from Excel, so I built the register in that shape — code, item ID, '
            'category, brand, family, model, package colour, location, quantity — after learning the parts by asking the owners how '
            'they differ. Shelves stayed where the owners wanted them; the map described the shop as it stood. Their ground count '
            'and my mapping ran as separate jobs: three months scoped, four and a half delivered. Then a till mock-up and a staff '
            'training session.')
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
        self.link_line('Till mock-up · XLSM', 'https://drive.google.com/file/d/1gvdPV9ZSIcRrEmkzuLp4Lqzx6Wxwnt1D/view')
        self.ln(4)

        # the same discipline, before the shelf map: the warehouse role
        y = self.get_y()
        self.card_top(18, y, 174, 34, CARD, LINE)
        self.set_fill_color(*NAVY)
        self.rect(18, y, 1.4, 34, 'F')
        self.set_font('my', 'B', 7)
        self.set_text_color(*TEAL)
        self.set_xy(25, y + 3)
        self.cell(0, 4, 'WAREHOUSE SUPERVISION  ·  NPT GROUP')
        self.set_font('my', 'B', 10)
        self.set_text_color(*NAVY)
        self.set_xy(25, y + 7.5)
        self.cell(0, 5, '6 Jan 2024 – 1 Nov 2024')
        self.set_font('my', '', 8)
        self.set_text_color(*MUTED)
        self.set_xy(25, y + 14)
        self.multi_cell(158, 4.4,
            'Family-shared distributor — electronics / tools and raw material. No software and no shelf maps: every '
            'item registered every day, the whole floor kept reviewable. Signed reference from the co-founder, '
            'dated 08 Dec 2024.',
            new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.set_font('my', 'B', 7.5)
        self.set_text_color(*TEAL)
        self.set_xy(25, y + 29)
        self.cell(0, 4, 'Warehouse & CSM page', link=SITE + 'warehouse.html')

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
            'I wrote the chapters on the system and held the rest back: this field moves faster than a book survives publication, so what I have learned since stays with me until it can be written without going stale. The manuscript is linked below, in my original wording.')
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
        self.section_title('Translation, adaptation & original writing', 17)
        self.rule()
        self.set_font('my', '', 9)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 5.5, 'Three pieces I keep coming back to: a combat-zone monologue I translated, a Burmese adaptation from Canal+, and an original short.', align='L')
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
                    self.multi_cell(0, 7, it['text'], align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(1)
                    continue
                if it.get('lang') == 'my':
                    self.set_font('my', '', 10)
                    self.set_text_color(40, 55, 75)
                    self.multi_cell(0, 10.5, it['text'], align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(2.2)
                else:
                    self.set_font('my', 'I', 8.5)
                    self.set_text_color(83, 99, 122)
                    self.multi_cell(0, 7.5, it['text'], align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
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
            'The live pages and the working files, in one list. Each link opens the page or the file it names.')
        self.ln(1)
        groups = [
            ('Web pages — the whole portfolio', PAGES),
            ('Content scripts', [
                ('IMB1 · Leave-in conditioner (DOCX)', 'https://drive.google.com/file/d/1uh-ZL2w9SlO8I97ThPEwokKKPGsBw-VA/view'),
                ('IMB2 · Salon-quality home hair care (DOCX)', 'https://drive.google.com/file/d/1aNmsMVi89BviE6aRM59Aptb9wZ1oZi96/view'),
                ('IMB3 · Rebonding script (DOCX)', 'https://drive.google.com/file/d/1HkV70oH4de5Q7CB6M0TbvlSc-0fCZKEz/view'),
                ('Echo Vibe · Full script (DOCX)', 'https://drive.google.com/file/d/1VZDnBgFtuVXeNgMC2tQ2sr0zSv033WdG/view'),
                ('Echo Vibe · Script with title (PDF)', 'https://drive.google.com/file/d/12jsQB682IqyOk9PQvZ3PNDNSb8-e5yb8/view'),
            ]),
            ('Systems, AI & 321 working records', [
                ('321 working workbook — redacted (XLSX)', 'https://drive.google.com/file/d/1w9JDMM0OM9vBKksnJO-1iJoqpJECOq3J/view'),
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

    # ---------- drive-folder pages ----------
    def file_rows(self, rows):
        for name, note, url in rows:
            y = self.get_y()
            if y > 250:
                self.add_page()
                y = self.get_y()
            self.set_draw_color(*LINE)
            self.set_line_width(0.2)
            self.line(18, y - 1.6, 192, y - 1.6)
            self.set_font('my', 'B', 9.4)
            self.set_text_color(*NAVY)
            self.set_xy(18, y)
            self.cell(150, 5.2, name, link=url)
            self.set_font('my', '', 8.3)
            self.set_text_color(60, 74, 96)
            self.set_xy(18, y + 5.2)
            self.multi_cell(174, 4.8, note, align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.ln(5.4)
        self.ln(2)
        self.set_font('my', 'I', 7.2)
        self.set_text_color(120, 133, 152)
        self.multi_cell(0, 4.2,
            'Each line is the name of the file as it sits on Drive.',
            align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)

    def folder_head(self, band, kicker, title, deck, tag=None, anchor=None):
        self.add_page()
        if anchor:
            self.set_link(name=anchor, x=18, y=277)
        self.header_band(band)
        self.ln(5)
        self.kicker(kicker)
        self.section_title(title, 16.5)
        self.rule()
        self.set_font('my', '', 9.2)
        self.set_text_color(*INK)
        self.multi_cell(0, 5.6, deck, align='L', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2)
        if tag:
            self.set_font('my', 'B', 7)
            self.set_text_color(*TEAL)
            self.cell(0, 4.6, tag, new_x=XPos.LEFT, new_y=YPos.NEXT)
            self.ln(1)
        self.set_font('my', 'B', 7)
        self.set_text_color(*TEAL)
        self.cell(0, 4.6, 'THE FILES', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(1.6)

    def npt_page(self):
        self.folder_head('NPT warehouse', '02 — NPT warehouse',
            'Thirty thousand parts, and not one of them labelled twice.',
            'Six January to one November 2024. Electronics, tools and raw materials, and no stock system in place when I '
            'started, so I registered every item by hand and kept registering it every day. Each item got its own ID '
            '— BP, WP, P-F — and the ID is the barcode: the same string in a barcode font renders the label. TAG is a '
            'convenience, sometimes OEM, sometimes the distributor\'s, sometimes repackaged and wrong, so the TAG never '
            'decides anything.',
            'WAREHOUSE OPERATIONS  ·  ITEM REGISTRATION  ·  BARCODE LABELS', anchor='sec-02')
        self.file_rows([
            ('Npt way -inventory.docx',
             'How stock ran at NPT, written the way I would hand it to a successor: receiving, location, counting, and '
             'why the count happens daily.',
             'https://drive.google.com/file/d/12gt0TeY9PUD9fotBlqQiN3VKM4xF6jEY/view'),
            ('way inventory-1.docx',
             'The second pass on the same method, with the barcode step spelled out end to end.',
             'https://drive.google.com/file/d/1q4xWXhL7ZxIaR5THYUmYTAsfvGOOyDgs/view'),
            ('barcode.docx',
             'The label sheet. One ID per item, the same string drawn in a barcode font — the BP, WP and P-F series.',
             'https://drive.google.com/file/d/1X__jBAT7IeVw1BStZ1v5sm5MPw2Fb2Kb/view'),
            ('Reference letter — NPT co-founder',
             'Dated 08 December 2024, on the company head. It is the closest thing to a third-party verdict on the '
             'warehouse work.',
             'https://drive.google.com/file/d/1QdqLp4riClyC4h7HTQwxoch-Bj31Fa2D/view'),
            ('Branch addresses and QR',
             'The office addresses and the code the branches scan, kept in one place so a delivery never waits on me.',
             'https://drive.google.com/file/d/1l3GRF05Z1LY__sMvfCss097ESGkDW6bl/view'),
            ('Your paragraph text (9).pdf',
             'The inventory method on one page, for the people who will not open a DOCX.',
             'https://drive.google.com/file/d/1QlecOi1c1bBX6aTpuG_9vDDHp7AtCtgz/view'),
        ])

    def excel_page(self):
        self.folder_head('Excel / CSM', '03 — Excel & CSM',
            'The shop had no till, so the till came out of Excel.',
            'A car-parts shop that had never had a point of sale. The local software imports from Excel, so I built the '
            'register in the shape it eats: code, item ID, category, brand, family, model, package colour, location, '
            'quantity. Three months scoped, four and a half delivered. The shelves stayed where the owners wanted them, '
            'the map described the shop as it actually stood, and their ground count and my mapping ran as separate '
            'jobs. It ended with a till mock-up and a training session on the staff\'s own sheets. CSM is the shop\'s own '
            'abbreviation for ချစ်စုမ.',
            'POS SETUP  ·  SHELF MAPPING  ·  STAFF TRAINING  ·  CAR PARTS', anchor='sec-03')
        self.file_rows([
            ('CSM - merged workbook.xlsx  (43 tabs)',
             'Every CSM workbook in one file: the shelf map, the registers, the ground count, the shelf-sheet layout and '
             'the POS tabs. Duplicate copies from the alternates were dropped.',
             'https://drive.google.com/file/d/1Uvm-vYhTaIyXB3U44bOQtFcOjChUdZHS/view'),
            ('CSM-Master-Shelf-Mapping.xlsx',
             'The master: 37 tabs. Contents, location index, seven category registers, the KMT sheets, the shelf sheets '
             'and the Update tabs the POS reads.',
             'https://drive.google.com/file/d/10XOAv-I7ROVnqFqA8jomVxnuDPe1q93F/view'),
            ('CSM-POS-Portfolio-Demo.xlsm',
             'The till as it ran, with Items, Sales and Ground behind it. Macro-enabled, so it stays its own file.',
             'https://drive.google.com/file/d/1gvdPV9ZSIcRrEmkzuLp4Lqzx6Wxwnt1D/view'),
            ('Point_Of_Sale.xlsm',
             'The earlier build of the same till, before the item list filled out.',
             'https://drive.google.com/file/d/1eBNVITMSUjBNzgKOq48TjG386SGfyaJF/view'),
            ('epos4excel_v1.8.1.xlsm',
             'The software the shop runs. I set up the import so its item list could come out of my sheets instead of '
             'being typed in by hand.',
             'https://drive.google.com/file/d/1xQUBBr-q7M7suxD_SrB-YXsZ2fO8cH4k/view'),
            ('GROUND.xlsx',
             'Their ground count, kept apart from my mapping on purpose — two jobs, two sets of numbers.',
             'https://drive.google.com/file/d/1e9Buwq5YusMqhR8fJxs7soOwcM66iOaW/view'),
        ])

    def content_pages(self):
        self.folder_head('Scripts', '04 — Video scripts',
            'Six scripts for shops that sell on TikTok.',
            'Written to be shot, not read: hook, beat, product truth, call to action, with the spoken line and the '
            'on-screen text kept apart so one hand can hold the phone while the other holds the bottle.',
            'VIDEO SCRIPTS  ·  TIKTOK  ·  PRODUCT REELS', anchor='sec-04')
        self.file_rows([
            ('imb-1.docx  ·  IMB1, leave-in conditioner',
             'The first reel of the set. Problem, product, proof, with the claim kept inside what the label allows.',
             'https://drive.google.com/file/d/1uh-ZL2w9SlO8I97ThPEwokKKPGsBw-VA/view'),
            ('imb2.docx  ·  IMB2, salon-quality home care',
             'Same product family, different buyer: the person doing it at home rather than the salon.',
             'https://drive.google.com/file/d/1aNmsMVi89BviE6aRM59Aptb9wZ1oZi96/view'),
            ('tiktokfriendly_commercial script  ·  IMB3, rebonding',
             'The rebonding script in the short-cut edit: every line timed to a cut.',
             'https://drive.google.com/file/d/1WiQLXaXaBS4s9FJgDTG8eK0YjnhDXxW2/view'),
            ('EchoVibe_client&tiktok_friendly.docx',
             'The client\'s version and the TikTok version of the same story, side by side so they could approve one '
             'without reading the other.',
             'https://drive.google.com/file/d/191g0xhI_cwpDsuibTViHeo1td47g8DWU/view'),
            ('echovibe_actual_script.docx',
             'What was actually shot, after the client notes and the sound check.',
             'https://drive.google.com/file/d/1VZDnBgFtuVXeNgMC2tQ2sr0zSv033WdG/view'),
            ('bardailybandpost.docx',
             'A bar account\'s daily post set — the fastest format I have written, and the one that taught me pacing.',
             'https://drive.google.com/file/d/18RpLu2JS0FOW7kMXBcTa6WVclH5XqAiR/view'),
        ])

    def content_more_pages(self):
        self.folder_head('Content', '05 — Canal+, translation, creative',
            'Adaptation is a different job from translation.',
            'Three kinds of writing that look alike on a shelf and are not. An adaptation keeps the beat and changes the '
            'culture. A translation keeps the meaning and changes nothing else. An original keeps only the idea I started '
            'with.',
            'ADAPTATION  ·  TRANSLATION  ·  ORIGINAL WRITING', anchor='sec-04b')
        self.file_rows([
            ('Copy of underwater.docx  ·  Canal+ adaptation',
             'A scene carried into Burmese without losing what the scene was doing — the dialogue had to sound like people, '
             'not like subtitles.',
             'https://drive.google.com/file/d/17fUwje1APWoVNQE8f0dE60NBx3LbozUJ/view'),
            ('Copy of ကိယ်တိုင်ဝယ်လို့ရတဲ့စက်ရုပ်.docx  ·  Canal+',
             'The Burmese script for the same block of work, kept in Burmese because that is the language it was written in.',
             'https://drive.google.com/file/d/1ImVMlhEJzMM0OiGjzybKAHvDjlTnm_wg/view'),
            ('if I die in combat zone.pdf  ·  translation',
             'A first-person piece from a combat zone, translated into Burmese with the voice left intact. This is the '
             'piece people ask about.',
             'https://drive.google.com/file/d/1yjcerZK_73Xzp4PIfg9D73paWCPsmYJj/view'),
            ('gamelore_adaptation-Carl.docx  ·  adaptation',
             'Game lore re-written for a Burmese reader who has never played it — names, jokes and stakes all moved.',
             'https://drive.google.com/file/d/1zZE5-kMOlmQjUM9dhNR8iz79tFf9okLO/view'),
            ('falsepromise  ·  original',
             'A short original piece. The one where I stopped adapting someone else\'s rhythm.',
             'https://docs.google.com/document/d/1jc2aTd6W7sVLOpVXV42COGE2GV50NlUdeP1YZqxW12Q/view'),
            ('rgb.pdf  ·  creative',
             'A colour-driven piece where the writing follows the palette rather than the other way round.',
             'https://drive.google.com/file/d/1QBxJD2KD4utrLBnypY3S5dckK4IjWBcx/view'),
        ])

    def tech_page(self):
        self.folder_head('It & tech related', '06 — It & tech',
            'The prompt book, the builds, and the tool I am making.',
            'A manuscript on how prompting actually works — layers, zones, and what happens when a model decides it knows '
            'better than the person asking. The bilingual parts are mine; the merged edition gathers them into one flow '
            'with the template set carried in from the earlier single-language copy. Around it sit the sites I keep alive '
            'and Myangustis, the Burmese segmenter and tagger I build in my spare time.',
            'PROMPT ENGINEERING  ·  WEB BUILDS  ·  MYANGUSTIS', anchor='sec-05')
        self.file_rows([
            ('Understanding Prompts in AI - merged edition.docx',
             'The merged book: chapters one to five in one flow, with the template set and the reusable skeletons inside '
             'chapter two.',
             'https://drive.google.com/file/d/18g_OL2h_AH0RPK5kVCRbw-rhdMhDs3ea/view'),
            ('Understanding Prompts in A (1).docx',
             'The single-language edition the templates came from, kept as it was for comparison.',
             'https://drive.google.com/file/d/1-88Qn-NpvON7yPux9ohRs1ezFld5MWIc/view'),
            ('Yumeyuki.info',
             'A legal overseas-employment agency: pages, forms and the Burmese copy behind them.',
             'https://yumeyuki.info'),
            ('TTS-AE.com',
             'A company site for a UAE project, built and handed over.',
             'https://tts-ae.com'),
            ('Writermorphosis.com',
             'My own build and still going: where the writing and the site work meet.',
             'https://writermorphosis.com'),
            ('Myangustis',
             'Segmentation, tagging and grammar for Burmese, written by rule — no regex tokenising, no model. The one I build '
             'because nothing off the shelf does it.',
             SITE + 'myangustis.html'),
        ])

    def build(self):
        self.cover()
        self.experience_page()
        self.overview_page()
        self.case_study()
        self.workflow_section()
        self.npt_page()
        self.excel_page()
        self.content_pages()
        self.content_more_pages()
        self.tech_page()
        self.samples_section()
        self.links_page()
        self.set_author('Kaung Myat Thu')
        self.set_title('Kaung Myat Thu — Portfolio')
        self.set_subject('Portfolio: 321 work record, scripts, systems, AI study, writing samples')
        self.set_creator('Kaung Myat Thu')
        self.output(OUT)
        print('PDF written to', OUT)

if __name__ == '__main__':
    PortfolioPDF().build()
