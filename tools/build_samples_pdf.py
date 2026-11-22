#!/usr/bin/env python3
"""Build the "Content of my own" samples PDF (Kaung Myat Thu).

One PDF holding the three original-writing samples — Carl (game-lore
adaptation), RGB (creative writing) and Combat Zone (translation) —
read from tools/samples.json (the samples no longer live on the page;
they live in the combined PDF that gets uploaded to Google Drive and
linked from the "Content of my own" section). The built PDF is NOT
committed to git.

Usage:  python3 tools/build_samples_pdf.py <out.pdf>

Dependencies (install into a local venv):  pip install fpdf2
"""
import json
import sys

from fpdf import FPDF
from fpdf.enums import XPos, YPos

with open('tools/samples.json', encoding='utf-8') as f:
    SAMPLES = json.load(f)

NAVY   = (27, 54, 93)
TEAL   = (14, 154, 167)
TEAL_BRIGHT = (94, 234, 212)
NAVY2  = (14, 31, 54)
INK    = (30, 41, 59)
MUTED  = (100, 116, 139)
LINE   = (226, 232, 241)
CARD   = (244, 246, 249)
FONT_MY = 'src/assets/fonts/PortfolioMyanmar.ttf'
OUT = sys.argv[1] if len(sys.argv) > 1 else 'samples-build/Kaung-Myat-Thu-Content-of-my-Own.pdf'


class SamplesPDF(FPDF):
    def __init__(self):
        super().__init__(format='A4')
        self.alias_nb_pages()
        for style in ['', 'B', 'I', 'BI']:
            self.add_font('my', style, FONT_MY)
        self.set_margins(18, 20, 18)
        self.set_auto_page_break(auto=True, margin=20)

    def header_band(self, label):
        self.set_draw_color(*TEAL)
        self.set_line_width(0.8)
        self.set_text_color(*TEAL)
        self.set_font('my', 'B', 7.5)
        self.set_xy(18, 13)
        self.cell(80, 5, 'KAUNG MYAT THU')
        self.set_text_color(*MUTED)
        self.set_font('my', '', 7.5)
        self.set_xy(18, 13)
        self.cell(174, 5, label, align='R')

    def footer(self):
        if self.page_no() == 1:
            return
        self.set_draw_color(*LINE)
        self.set_line_width(0.3)
        self.line(18, 288.5, 192, 288.5)
        self.set_font('my', '', 7.5)
        self.set_text_color(*MUTED)
        self.set_xy(18, 290)
        self.cell(100, 5, 'Content of my own  ·  Kaung Myat Thu')
        self.set_xy(18, 290)
        self.cell(174, 5, f'Page {self.page_no()} / {{nb}}', align='R')

    def render(self):
        self.add_page()
        self.header_band('2026')
        self.ln(2)

        # cover band
        self.set_fill_color(*NAVY2)
        self.rect(18, 20, 174, 26, 'F')
        self.set_font('my', 'B', 6.5)
        self.set_text_color(*TEAL_BRIGHT)
        self.set_xy(23, 24)
        self.cell(0, 4, 'CONTENT OF MY OWN')
        self.set_font('my', 'B', 13)
        self.set_text_color(255, 255, 255)
        self.set_xy(23, 29.5)
        self.multi_cell(168, 7, 'Three original works — Carl, RGB and Combat Zone', new_x=XPos.LEFT, new_y=YPos.NEXT)

        self.ln(36)
        self.set_font('my', '', 9.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 6,
            'Translation, adaptation and creative writing — original excerpts, in the original Burmese. '
            'Each sample in full.', new_x=XPos.LEFT, new_y=YPos.NEXT)
        self.ln(2)

        for i, s in enumerate(SAMPLES):
            tag, title = s['tag'].upper(), s['title']
            # sample header card
            y = self.get_y()
            self.set_fill_color(*NAVY)
            self.rect(18, y, 174, 16, 'F')
            self.set_font('my', 'B', 6.5)
            self.set_text_color(*TEAL_BRIGHT)
            self.set_xy(23, y + 4)
            self.cell(0, 4, f'{tag}  ·  SAMPLE {i+1}')
            self.set_font('my', 'B', 10)
            self.set_text_color(255, 255, 255)
            self.set_xy(23, y + 8.5)
            self.cell(0, 5, title)
            self.set_xy(18, y + 19.5)

            for it in s['items']:
                if it['t'] == 'h3':
                    self.set_font('my', 'B', 9.5)
                    self.set_text_color(*NAVY)
                    self.ln(2)
                    self.multi_cell(0, 6.5, it['text'], new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(1)
                    continue
                if it.get('lang') == 'my':
                    self.set_font('my', '', 9.5)
                    self.set_text_color(40, 55, 75)
                    self.multi_cell(0, 10.5, it['text'], new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(2.4)
                else:
                    self.set_font('my', 'I', 8.5)
                    self.set_text_color(83, 99, 122)
                    self.multi_cell(0, 7.5, it['text'], new_x=XPos.LEFT, new_y=YPos.NEXT)
                    self.ln(2.6)
            self.ln(4)

        self.set_draw_color(*LINE)
        self.set_line_width(0.5)
        self.line(18, self.get_y(), 192, self.get_y())
        self.ln(2)
        self.set_font('my', '', 8)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 5.5,
            'Original written by Kaung Myat Thu. Translation, adaptation and creative writing — excerpts '
            'shown in the original Burmese. Shared for reference and portfolio use.', new_x=XPos.LEFT, new_y=YPos.NEXT)

    def build(self):
        self.render()
        self.set_author('Kaung Myat Thu')
        self.set_title('Kaung Myat Thu — Content of my own')
        self.set_subject('Three original-writing samples: Carl, RGB, Combat Zone')
        self.set_creator('Kaung Myat Thu')
        self.output(OUT)
        print('PDF written to', OUT)


if __name__ == '__main__':
    SamplesPDF().build()
