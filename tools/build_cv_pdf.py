"""Build public/Kaung-Myat-Thu-CV.pdf — the one-page-per-section resume PDF.

English-only, core fonts, no external assets. Run: python tools/build_cv_pdf.py
"""
from fpdf import FPDF
from fpdf.enums import XPos, YPos

OUT = 'public/Kaung-Myat-Thu-CV.pdf'
FONT = 'src/assets/fonts/PortfolioMyanmar.ttf'
NAVY = (15, 45, 74)
TEAL = (11, 121, 131)
INK = (40, 55, 75)
MUTED = (110, 125, 145)
LINE = (219, 227, 236)


class CV(FPDF):
    def footer(self):
        self.set_y(-16)
        self.set_draw_color(*LINE)
        self.line(20, self.get_y(), 190, self.get_y())
        self.set_font('my', '', 7)


class Resume:
    def __init__(self):
        self.pdf = CV(orientation='P', unit='mm', format='A4')
        self.pdf.set_auto_page_break(auto=True, margin=18)
        self.pdf.set_margins(20, 16, 20)
        for style in ('', 'B', 'I'):
            self.pdf.add_font('my', style, FONT)

    def heading(self, text):
        self.pdf.ln(3)
        self.pdf.set_font('my', 'B', 9)
        self.pdf.set_text_color(*TEAL)
        self.pdf.cell(0, 6, text.upper(), new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        y = self.pdf.get_y()
        self.pdf.set_draw_color(*LINE)
        self.pdf.line(20, y + 1, 190, y + 1)
        self.pdf.ln(3.5)
        self.pdf.set_text_color(*INK)

    def role(self, title, period, lines):
        self.pdf.set_font('my', 'B', 10.5)
        self.pdf.set_text_color(*NAVY)
        self.pdf.cell(130, 5.5, title)
        self.pdf.set_font('my', '', 8.5)
        self.pdf.set_text_color(*MUTED)
        self.pdf.cell(0, 5.5, period, align='R', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.pdf.set_font('my', '', 9)
        self.pdf.set_text_color(*INK)
        for line in lines:
            self.pdf.set_x(22)
            self.pdf.multi_cell(166, 4.8, '\u2022  ' + line, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.pdf.ln(1.5)

    def build(self):
        p = self.pdf
        p.add_page()

        # header
        p.set_font('my', 'B', 22)
        p.set_text_color(*NAVY)
        p.cell(0, 10, 'Kaung Myat Thu', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        p.set_font('my', '', 10)
        p.set_text_color(*TEAL)
        p.cell(0, 6, 'Assistant Supervisor  ·  content writing  ·  practical digital work',
               new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        p.set_font('my', '', 8.5)
        p.set_text_color(*MUTED)
        p.cell(0, 5, 'North Okkalapa, Yangon  ·  +959 955 400 017  ·  htetmyet157@gmail.com',
               new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        p.cell(0, 5, 'Portfolio: htetmyetflam3.github.io/kaungmyatthu-cv/',
               new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        p.set_draw_color(*LINE)
        p.ln(2)
        p.line(20, p.get_y(), 190, p.get_y())

        self.heading('About')
        p.set_font('my', '', 9.5)
        p.set_text_color(*INK)
        p.multi_cell(0, 5.2,
            'I bring experience in retail operations, staff coordination, reporting and content writing. My work has '
            'included branch administration, TikTok support, Burmese-language scripts and practical spreadsheet '
            'workflows. I am interested in marketing opportunities that connect customer understanding with clear '
            'communication and organised delivery.',
            new_x=XPos.LMARGIN, new_y=YPos.NEXT)

        self.heading('Experience')
        self.role('Assistant Supervisor — 321 Ecolife (Stalker Company Limited), Nok Branch', 'Jan 2024 – Jan 2025', [
            'Ran the Nok branch as its only internal staff member, with no shop supervisor or manager in place — '
            'manager-level responsibility: attendance, daily expense, '
            'sales and stock records, staff coverage, and promotion and incentive recommendations.',
            'Coordinated with voiceover and editing teams for content delivery, and reported social-media '
            'performance back to the branch.',
            'Kept TikTok performance visible month after month — 157,000 · 187,375 · 298,104 month-end followers '
            '(Oct to Dec, +89.9%).',
        ])
        self.role('Warehouse Supervisor — NPT Group', 'January – November 2024', [
            'Project-based warehouse and logistics operations; kept the stock record by hand where no system existed.',
            'Signed reference letter on file; available on request.',
        ])
        self.role('Senior Logistic Officer — NGO (C.D.A)', '2021 – 2022', [
            'Warehouse and transport operations for project areas.',
        ])

        self.heading('Freelance work')
        self.role('Web Developer — WordPress', 'current', [
            'Yumeyuki.info (Myanmar legal overseas employment agency) · TTS-AE.com (UAE company project) · '
            'Writermorphosis.com (current build).',
        ])
        self.role('Shelf mapping & EPOS — car-parts shop (CSM)', 'roughly four months', [
            'Separate freelance project; exact dates not confirmed.',
            'Set up the EPOS/stock system and designed the shelf-location map, then handed it over; '
            'staff performed the physical counts.',
        ])
        self.role('Content Writer — Country BAR (North-Dagon)', '2020', [
            'Articles and lifestyle / marketing posts; kept brand consistency with the marketing team.',
        ])
        self.role('Script Writer (Part-Time) — Program.base', '2021 – 2022', [
            'Burmese scripts for travel, infotainment and educational content.',
            'Adapted media translations for Canal+ Myanmar (Alice Adventure), 2022 – 2023.',
        ])
        self.role('Translator (Freelance)', '2022 – 2023', [
            'English to Burmese literary and digital content; U.S. (Texas) life insurance policies into Burmese.',
        ])

        p.add_page()
        self.heading('Education')
        self.role('B.A. English', '2019', ['English language and literature.'])
        self.role('Hmaw Bi Technology University', '2012 – 2015', ['Civil Engineering (third year).'])
        self.role('KMD Institute', '2015', ['Practical A+ & Basic Network Engineering.'])

        self.heading('Certification')
        self.role('Conversion Optimization Certification Exam — Skillshop', '30 Nov 2025', [
            'Issued 30 November 2025 · expires 30 November 2026 · certificate ID 167907950.',
            'Verify: skillshop.credential.net/b20838ac-849b-4194-9437-c52f49d9ff46',
        ])

        self.heading('Skills')
        for label, text in [
            ('Content', 'Burmese-language scripts, product and venue copy, social-content support.'),
            ('Operations', 'Staff coordination, sales checks, reporting and stock-workflow documentation.'),
            ('Tools and projects', 'Excel-based working records, EPOS setup, selected web projects and '
                                   'AI-assisted workflows.'),
        ]:
            p.set_font('my', 'B', 9)
            p.set_text_color(*NAVY)
            p.cell(32, 5, label, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            p.set_xy(52, p.get_y() - 5)
            p.set_font('my', '', 9)
            p.set_text_color(*INK)
            p.multi_cell(138, 5, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            p.ln(1.5)

        self.heading('References')
        p.set_font('my', '', 9.5)
        p.set_text_color(*INK)
        p.multi_cell(0, 5.2,
            'Reference letter available on request. Selected work, the 321 case study and script samples are on the '
            'portfolio: htetmyetflam3.github.io/kaungmyatthu-cv/portfolio.html',
            new_x=XPos.LMARGIN, new_y=YPos.NEXT)

        p.set_author('Kaung Myat Thu')
        p.set_title('Kaung Myat Thu — CV')
        p.output(OUT)
        print('CV PDF written to', OUT, '·', p.pages_count if hasattr(p, 'pages_count') else '', 'pages')


if __name__ == '__main__':
    Resume().build()
