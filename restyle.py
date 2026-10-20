#!/usr/bin/env python3
"""Restyle the published gallery: the 8 photos only, Neue Haas Grotesk, black and white.

Works on publish/ (the GitHub Pages copy); the sources next to it are left alone.

  python3 restyle.py
"""
import json
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).parent
GAL = HERE / 'publish' / 'gallery'
ASSETS = sorted(p.name for p in (GAL / 'assets').glob('*.webp'))
if not ASSETS:
    sys.exit('no assets in publish/gallery/assets — encode the photos first')

STACK = "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"

# Remote imagery the packs ship with; all of it becomes one of the local assets.
IMG_HOST = re.compile(
    r'https?://(?:[a-z0-9.-]*unsplash\.com|picsum\.photos|[a-z0-9.-]*pexels\.com|'
    r'static\.wixstatic\.com|via\.placeholder\.com|placehold\.co|loremflickr\.com)'
    r'[^"\'`\s,)\\]*'
)
IMG_EXT = re.compile(r'https?://[^"\'`\s,)\\]+\.(?:jpg|jpeg|png|webp|avif|gif)(?:\?[^"\'`\s,)\\]*)?')

HEX = re.compile(r'#([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})(?![0-9a-fA-F])')
RGB = re.compile(r'\brgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([\d.]+)\s*)?\)')
HSL = re.compile(r'\bhsla?\(\s*([\d.]+)(?:deg)?\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*([\d.]+)\s*)?\)')

# fontFamily: '…'  |  fontFamily: "…"  |  fontFamily: `…`
FONT_PROP = re.compile(r'(fontFamily\s*:\s*)(["\'`])((?:(?!\2).)*)\2')
FONT_CSS = re.compile(r'(font-family\s*:\s*)((?:"[^"\n]*"|\'[^\'\n]*\'|`[^`\n]*`|[^;}"\'`\n])+)')
# a font value worth rewriting looks like a stack, not an enum key ("grotesk", "serif")
STACKISH = re.compile(r',|sans-serif|Helvetica|Arial|system-ui|-apple-system|Georgia|Times|Courier|monospace')


def ramp(value: float) -> int:
    """Snap to a 16-step grey ramp so flat fills stay flat."""
    return max(0, min(255, round(value / 17) * 17))


def grey(r: int, g: int, b: int) -> int:
    return ramp(0.2126 * r + 0.7152 * g + 0.0722 * b)


def hex_to_grey(m: re.Match) -> str:
    h = m.group(1)
    if len(h) == 3:
        r, g, b = (int(c * 2, 16) for c in h)
        alpha = ''
    else:
        r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
        alpha = h[6:8]
    v = grey(r, g, b)
    return f'#{v:02x}{v:02x}{v:02x}{alpha}'


def rgb_to_grey(m: re.Match) -> str:
    v = grey(*(min(int(m.group(i)), 255) for i in (1, 2, 3)))
    return f'rgba({v}, {v}, {v}, {m.group(4)})' if m.group(4) is not None else f'rgb({v}, {v}, {v})'


def hsl_to_grey(m: re.Match) -> str:
    light = float(m.group(3))
    v = ramp(light * 255 / 100)
    return f'rgba({v}, {v}, {v}, {m.group(4)})' if m.group(4) is not None else f'rgb({v}, {v}, {v})'


def monochrome(text: str) -> str:
    return HSL.sub(hsl_to_grey, RGB.sub(rgb_to_grey, HEX.sub(hex_to_grey, text)))


def swap_images(text: str, counter: list, depth: str = '') -> str:
    """Each remote image becomes one of the assets, cycling, so a component that
    shows a dozen pictures still shows a dozen different pictures."""
    def pick(_m):
        name = ASSETS[counter[0] % len(ASSETS)]
        counter[0] += 1
        return f'{depth}assets/{name}'
    return IMG_EXT.sub(pick, IMG_HOST.sub(pick, text))


def swap_fonts(text: str) -> str:
    def prop(m):
        if not STACKISH.search(m.group(3)):
            return m.group(0)
        return f'{m.group(1)}"{STACK}"'

    def css(m):
        return m.group(0) if not STACKISH.search(m.group(2)) else m.group(1) + STACK
    return FONT_CSS.sub(css, FONT_PROP.sub(prop, text))


def start_at(name: str) -> int:
    """Each component starts at its own point in the ring, so the eight photos
    spread evenly across the library instead of every card opening on the first."""
    return sum(ord(c) * (i + 1) for i, c in enumerate(name)) % len(ASSETS)


def patch_code(text: str, depth: str = '', seed: str = '') -> str:
    return swap_fonts(monochrome(swap_images(text, [start_at(seed)], depth)))


def patch_value(value, counter, key=''):
    if isinstance(value, str):
        if STACKISH.search(value) and re.search(r'font', key, re.I):
            return STACK
        return monochrome(swap_images(value, counter))
    if isinstance(value, list):
        return [patch_value(v, counter, key) for v in value]
    if isinstance(value, dict):
        return {k: patch_value(v, counter, k) for k, v in value.items()}
    return value


# Components that mix their colour in code rather than writing a literal.
OVERRIDES = {
    'study-generativeartgrid': [
        ('const sat = 0.38 + nB * 0.52;', 'const sat = 0;'),
    ],
    'media-webglcarousel': [
        ("'chromaticAberration': '0.1'", "'chromaticAberration': '0.0'"),
        ('chromaticAberration: 0.1', 'chromaticAberration: 0.0'),
    ],
}


def main() -> None:
    files = sorted(p for p in (GAL / 'components').glob('*') if p.is_file())
    for p in files:
        text = patch_code(p.read_text(), seed=p.stem)
        for old, new in OVERRIDES.get(p.stem, []):
            text = text.replace(old, new)
        p.write_text(text)
    print(f'patched {len(files)} component files')

    lib = json.loads((GAL / 'library.json').read_text())
    for c in lib:
        counter = [start_at(c['slug'])]
        c['config'] = patch_value(c['config'], counter)
        c['schema'] = patch_value(c['schema'], counter)
        if c['slug'] == 'media-webglcarousel':
            c['config']['chromaticAberration'] = '0.0'
            c['schema']['chromaticAberration']['defaultValue'] = '0.0'
    blob = json.dumps(lib)
    (GAL / 'library.json').write_text(blob)
    (GAL / 'library.js').write_text('window.__GALLERY_INDEX__ = ' + blob + ';\n')
    print(f'patched library.json and library.js ({len(lib)} components)')

    for name in ('frame.html', 'index.html'):
        p = GAL / name
        p.write_text(patch_code(p.read_text()))
    print('patched frame.html and index.html')


if __name__ == '__main__':
    main()
