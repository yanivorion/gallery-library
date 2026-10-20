# Gallery Library

113 React gallery, carousel and slideshow components from four Wix custom-element packs, restyled
to one typeface, eight photographs and no colour — then compiled with Babel, mounted in its own
iframe against React 18.3.1, left to settle for 2.2 seconds and photographed.

**Live:** https://yanivorion.github.io/gallery-library/
**Live library:** https://yanivorion.github.io/gallery-library/gallery/

## The three rules

One script (`../restyle.py`, run against this copy) rewrote every component file, prop schema and the
library UI around them:

| | |
|---|---|
| Colour | Every hex, rgb and hsl value converted to its luminance and snapped to a 16-step grey ramp — 473 colour props among them. Two components that mix colour at runtime are overridden by name. |
| Type | Every font stack replaced with `Neue Haas Grotesk Display Pro`, falling back to Helvetica Neue then Arial. There is no free webfont for Neue Haas Grotesk, so it renders from the viewer's own system. Enum values like `"mono"` are left alone. |
| Image | Every remote photograph replaced by one of the eight files in `gallery/assets/`, cycling from a per-component offset so neighbouring cards don't open on the same picture. |

## What's here

| Path | What it is |
|---|---|
| `index.html` | The showcase page (built from `index.src.html` by `build.py`) |
| `gallery/` | The interactive library: 113 live previews, filters, per-component detail and JSX source |
| `gallery/assets/` | The eight photographs, 1600px webp |
| `wall/` | 113 captured frames at 480px, used by the showcase wall |
| `img/` | Stills of the library UI used in the showcase |

## The run

| | |
|---|---|
| Components | 113 across 21 families (Gallery 51, Media 13, Portfolio 9, Study 9) |
| Editable props | 1,716 — select 502, color 473, text 312, boolean 264, number 162 |
| Result | 108 clean · 5 with console warnings · 0 failed |
| Render | median 907 ms, max 1,020 ms, 3,866 DOM nodes in total |
| Source | 1.72 MB of JSX, held as plain text next to the index |

The five noisy components are `gallery-masonrygallery` (12 console errors),
`gallery-flipcardgallery`, `media-imagegallerylightbox`, `media-logocarouselinfinite` and
`media-polaroidphotogrid` (one each). The library shows the status on every card.

## Running it locally

Any static server works — nothing is built at request time:

```bash
python3 -m http.server 8790
```

Then open http://localhost:8790/.

## Rebuilding the showcase

Edit `index.src.html`, then:

```bash
python3 build.py
```

`build.py` inlines one `<img>` per file in `wall/` into the `{{WALL}}` placeholder and fails if any
placeholder is left unfilled.
