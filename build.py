#!/usr/bin/env python3
"""Build index.html from index.src.html by inlining the 97-image wall."""
import html
import json
import pathlib
import re

HERE = pathlib.Path(__file__).parent
names = {c['slug']: c['name'] for c in json.loads((HERE / 'gallery/library.json').read_text())}
src = (HERE / 'index.src.html').read_text()

rows = [
    f'        <img src="wall/{p.stem}.webp" alt="{html.escape(names.get(p.stem, p.stem))}"'
    f' width="480" height="300" loading="lazy">'
    for p in sorted((HERE / 'wall').glob('*.webp'))
]
out = src.replace('{{WALL}}', '\n'.join(rows))
left = re.findall(r'\{\{[^}]*\}\}', out)
assert not left, f'unfilled placeholders: {left}'

(HERE / 'index.html').write_text(out)
print(f'index.html written, {len(rows)} wall images')
