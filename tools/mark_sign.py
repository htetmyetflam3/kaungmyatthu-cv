"""The sign for the Devnovex mark — a short fingerprint of the logo.

The sign is derived from the drawing only: the viewBox and every path's
fill and d attribute, whitespace collapsed, in document order. Colours
and geometry are both covered, so recolouring the mark or nudging a
curve changes the sign. Comments, metadata and id attributes are not
covered, which is what lets the stamp live inside the same file.

Take the SHA-256 of that canonical string and keep the first four bytes.
Eight hex characters is short enough to read out loud and long enough
that two different drawings will not collide by accident (2^32).

Run:  python tools/mark_sign.py            print the sign and check it
      python tools/mark_sign.py --write    stamp the sign into the SVG
"""
import hashlib
import re
import sys

SVG = 'public/logo.svg'
PREFIX = 'KMT'


def geometry(path=SVG):
    """The canonical string the sign is computed from."""
    svg = open(path, encoding='utf-8').read()
    vb = re.search(r'viewBox="([^"]+)"', svg)
    parts = ['viewBox ' + ' '.join(vb.group(1).split())] if vb else []
    for m in re.finditer(r'<path\b[^>]*>', svg):
        tag = m.group(0)
        d = re.search(r'\bd="([^"]+)"', tag)
        if not d:
            continue
        fill = re.search(r'\bfill="([^"]+)"', tag)
        parts.append(' '.join((fill.group(1) if fill else 'none').split())
                     + ' ' + ' '.join(d.group(1).split()))
    return '\n'.join(parts)


def digest(path=SVG):
    return hashlib.sha256(geometry(path).encode('utf-8')).hexdigest()


def sign(path=SVG):
    """The public sign: KMT-3F9A1C07 — 32 bits, four bytes of the digest."""
    return f'{PREFIX}-{digest(path)[:8].upper()}'


STAMP = re.compile(r'<!--\s*sign:\s*(\S+)[^>]*-->')


def stamped(path=SVG):
    m = STAMP.search(open(path, encoding='utf-8').read())
    return m.group(1) if m else None


def write(path=SVG):
    """Put the sign in the file as a comment, and keep the full digest near it.

    The comment sits inside the SVG element and is not part of the
    geometry, so stamping the file does not change the sign.
    """
    svg = open(path, encoding='utf-8').read()
    svg = STAMP.sub('', svg)
    stamp = f'<!-- sign: {sign(path)} · sha256 {digest(path)} -->'
    svg = svg.replace('<svg ', stamp + '\n<svg ', 1)
    open(path, 'w', encoding='utf-8').write(svg)
    return stamp


if __name__ == '__main__':
    if '--write' in sys.argv:
        print('stamped', write())
    print('file    ', SVG)
    print('digest  ', digest())
    print('sign    ', sign())
    have = stamped()
    if have:
        print('stamped ', have, '— matches' if have == sign() else '— DOES NOT MATCH')
        sys.exit(0 if have == sign() else 1)
    print('stamped  none')
