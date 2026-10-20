# Gallery Library

97 React gallery, carousel and slideshow components from four Wix custom-element packs — every one
compiled with Babel, mounted in its own iframe against React 18.3.1, left to settle for 2.2 seconds
and photographed before it was listed.

**Live:** https://yanivorion.github.io/gallery-library/
**Live library:** https://yanivorion.github.io/gallery-library/gallery/

## What's here

| Path | What it is |
|---|---|
| `index.html` | The showcase page (built from `index.src.html` by `build.py`) |
| `gallery/` | The interactive library: 97 live previews, filters, per-component detail and JSX source |
| `wall/` | 97 captured frames at 480px, used by the showcase wall |
| `img/` | Stills of the library UI used in the showcase |

## The run

Each component was taken from its pack JSON as raw JSX, transformed with Babel standalone and mounted
into a blank iframe holding React 18.3.1 and nothing else. The runner waited 2.2 seconds, scrolled once
to trigger reveal animations, returned to the top and captured a 1440px frame.

| | |
|---|---|
| Components | 97 across 19 families (Gallery 51, Media 13, Portfolio 9) |
| Editable props | 1,344 — select 404, color 398, text 244, boolean 182, number 115 |
| Result | 92 clean · 5 with console warnings · 0 failed |
| Render | median 905 ms, max 1,382 ms, 3,499 DOM nodes in total |
| Source | 1.46 MB of JSX, held as plain text next to the index |

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
