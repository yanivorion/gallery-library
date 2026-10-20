window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-generativeartgrid"] = function (React) {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
    useLayoutEffect,
    useReducer,
    useContext,
    useId,
    useTransition,
    useDeferredValue,
    useImperativeHandle,
    useSyncExternalStore,
    useDebugValue,
    Fragment,
    createElement,
    cloneElement,
    Children,
    memo,
    forwardRef,
    createContext,
    createRef,
    isValidElement,
    StrictMode,
    Suspense,
    lazy
  } = React;
  /*
   * ============================================================================
   * COMPONENT GENERATION METADATA
   * ============================================================================
   * Project: Studies after tomoyaokada.com (batch 1)
   * Source study: S-010 "Random Generative Art"
   * Component Type: Study.GenerativeArtGrid
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Study.GenerativeArtGrid",
    "description": "Seeded generative art plate: a grid of pixel tiles, each animating one of sixteen two-tone patterns, re-rolled on click",
    "editorElement": {
      "selector": ".study-generative-art-grid",
      "displayName": "Generative Art Grid",
      "archetype": "container",
      "data": {
        "title": {
          "dataType": "text",
          "displayName": "Title",
          "defaultValue": "Random Generative Art",
          "group": "Content"
        },
        "subtitle": {
          "dataType": "text",
          "displayName": "Subtitle",
          "defaultValue": "seeded plate / 16 pattern set",
          "group": "Content"
        },
        "hint": {
          "dataType": "text",
          "displayName": "Hint Text",
          "defaultValue": "click to regenerate",
          "group": "Content"
        },
        "showTitle": {
          "dataType": "booleanValue",
          "displayName": "Show Title",
          "defaultValue": true,
          "group": "Content"
        },
        "showHint": {
          "dataType": "booleanValue",
          "displayName": "Show Hint",
          "defaultValue": true,
          "group": "Content"
        },
        "showSeed": {
          "dataType": "booleanValue",
          "displayName": "Show Seed Readout",
          "defaultValue": true,
          "group": "Content"
        },
        "plateSize": {
          "dataType": "number",
          "displayName": "Plate Size (px)",
          "defaultValue": "300",
          "group": "Layout"
        },
        "tiles": {
          "dataType": "select",
          "displayName": "Tiles Per Side",
          "defaultValue": "10",
          "options": ["6", "8", "10", "12", "15"],
          "group": "Layout"
        },
        "cell": {
          "dataType": "select",
          "displayName": "Tile Resolution (px)",
          "defaultValue": "30",
          "options": ["15", "20", "30", "40"],
          "group": "Layout"
        },
        "fitToWidth": {
          "dataType": "booleanValue",
          "displayName": "Scale Plate To Container",
          "defaultValue": false,
          "group": "Layout"
        },
        "paddingY": {
          "dataType": "number",
          "displayName": "Vertical Padding (px)",
          "defaultValue": "80",
          "group": "Layout"
        },
        "animate": {
          "dataType": "booleanValue",
          "displayName": "Animate Patterns",
          "defaultValue": true,
          "group": "Animation"
        },
        "speed": {
          "dataType": "select",
          "displayName": "Animation Speed",
          "defaultValue": "1",
          "options": ["0.35", "0.6", "1", "1.6", "2.4"],
          "group": "Animation"
        },
        "autoRegenerate": {
          "dataType": "booleanValue",
          "displayName": "Auto Re-roll",
          "defaultValue": false,
          "group": "Animation"
        },
        "autoInterval": {
          "dataType": "number",
          "displayName": "Auto Re-roll Every (ms)",
          "defaultValue": "6000",
          "group": "Animation"
        },
        "seed": {
          "dataType": "number",
          "displayName": "Seed (0 = random)",
          "defaultValue": "0",
          "group": "Generation"
        },
        "harmony": {
          "dataType": "select",
          "displayName": "Colour Harmony",
          "defaultValue": "random",
          "options": ["random", "analogous", "complementary", "triadic", "split", "tight"],
          "group": "Generation"
        },
        "contrastMode": {
          "dataType": "select",
          "displayName": "Tone",
          "defaultValue": "random",
          "options": ["random", "dark", "light"],
          "group": "Generation"
        },
        "noiseScale": {
          "dataType": "select",
          "displayName": "Field Scale",
          "defaultValue": "2.4",
          "options": ["1.2", "1.8", "2.4", "3.2", "4"],
          "group": "Generation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "mutedColor": {
          "dataType": "color",
          "displayName": "Muted Text",
          "defaultValue": "#888888",
          "group": "Colors"
        },
        "plateBorderColor": {
          "dataType": "color",
          "displayName": "Plate Border",
          "defaultValue": "#dddddd",
          "group": "Colors"
        }
      }
    }
  };
  function Component({
    config = {}
  }) {
    const canvasRef = React.useRef(null);
    const rafRef = React.useRef(0);
    const tilesRef = React.useRef(null);
    const imageRef = React.useRef(null);
    const [seedLabel, setSeedLabel] = React.useState('');
    const [rollToken, setRollToken] = React.useState(0);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const title = config?.title || 'Random Generative Art';
    const subtitle = config?.subtitle || 'seeded plate / 16 pattern set';
    const hint = config?.hint || 'click to regenerate';
    const showTitle = config?.showTitle !== false;
    const showHint = config?.showHint !== false;
    const showSeed = config?.showSeed !== false;
    const tiles = Math.max(2, parseInt(config?.tiles || '10', 10));
    const cell = Math.max(6, parseInt(config?.cell || '30', 10));
    const plateSize = Math.max(80, parseInt(config?.plateSize || '300', 10));
    const fitToWidth = config?.fitToWidth === true;
    const paddingY = Math.max(0, parseInt(config?.paddingY || '80', 10));
    const animate = config?.animate !== false && !prefersReducedMotion;
    const speed = parseFloat(config?.speed || '1') || 1;
    const autoRegenerate = config?.autoRegenerate === true;
    const autoInterval = Math.max(800, parseInt(config?.autoInterval || '6000', 10));
    const seedConfig = parseInt(config?.seed || '0', 10) || 0;
    const harmony = config?.harmony || 'random';
    const contrastMode = config?.contrastMode || 'random';
    const noiseScale = parseFloat(config?.noiseScale || '2.4') || 2.4;
    const backgroundColor = config?.backgroundColor || '#eeeeee';
    const textColor = config?.textColor || '#222222';
    const mutedColor = config?.mutedColor || '#888888';
    const plateBorderColor = config?.plateBorderColor || '#dddddd';
    const resolution = tiles * cell;

    // --- generation primitives ------------------------------------------------
    // Seeded PRNG, fbm over a value-noise lattice, and the pattern bank. These
    // mirror the study: a warped noise field picks each tile's two tones, and the
    // tile then animates one pattern from the bank with its own phase and speed.
    const makeRandom = React.useCallback(seed => {
      let t = seed >>> 0;
      return () => {
        t = t + 1831565813 >>> 0;
        let a = Math.imul(t ^ t >>> 15, 1 | t);
        a = a + Math.imul(a ^ a >>> 7, 61 | a) ^ a;
        return ((a ^ a >>> 14) >>> 0) / 4294967296;
      };
    }, []);
    const hslToRgb = React.useCallback((h, s, l) => {
      if (s === 0) {
        const v = Math.round(l * 255);
        return [v, v, v];
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const chan = r => {
        r = (r % 1 + 1) % 1;
        if (r < 1 / 6) return p + (q - p) * 6 * r;
        if (r < 1 / 2) return q;
        if (r < 2 / 3) return p + (q - p) * (2 / 3 - r) * 6;
        return p;
      };
      return [chan(h + 1 / 3), chan(h), chan(h - 1 / 3)].map(v => Math.round(v * 255));
    }, []);
    const makeLattice = React.useCallback((rnd, size) => {
      const a = new Float32Array(size * size);
      for (let i = 0; i < a.length; i++) a[i] = rnd() * 2 - 1;
      return a;
    }, []);
    const sampleLattice = React.useCallback((lat, size, x, y) => {
      const xi = (Math.floor(x) % size + size) % size;
      const yi = (Math.floor(y) % size + size) % size;
      const fx = x - Math.floor(x);
      const fy = y - Math.floor(y);
      const sx = fx * fx * (3 - 2 * fx);
      const sy = fy * fy * (3 - 2 * fy);
      const x1 = (xi + 1) % size;
      const y1 = (yi + 1) % size;
      const a = lat[yi * size + xi];
      const b = lat[yi * size + x1];
      const c = lat[y1 * size + xi];
      const d = lat[y1 * size + x1];
      return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
    }, []);
    const fbm = React.useCallback((lat, size, x, y, octaves) => {
      let sum = 0;
      let amp = 0.5;
      let freq = 1;
      for (let i = 0; i < octaves; i++) {
        sum += amp * sampleLattice(lat, size, x * freq, y * freq);
        amp *= 0.5;
        freq *= 2.1;
      }
      return sum;
    }, [sampleLattice]);
    const harmonyRules = React.useMemo(() => ({
      analogous: (h, t) => (h + t * 60 - 30 + 360) % 360,
      complementary: (h, t) => (h + (t > 0.5 ? 160 + t * 30 : t * 30) + 360) % 360,
      triadic: (h, t) => (h + Math.floor(t * 3) * 120 + t % (1 / 3) * 20 + 360) % 360,
      split: (h, t) => (h + [0, 150, 210][Math.floor(t * 3)] + t * 15 + 360) % 360,
      tight: (h, t) => (h + t * 18 - 9 + 360) % 360
    }), []);

    // Sixteen two-tone tile patterns. Each takes (time, phase, speed, x, y) in
    // tile-local pixel space and returns 0 (tone A) or 1 (tone B).
    const patterns = React.useMemo(() => {
      const C = (cell - 1) / 2;
      const R = C;
      return [(t, ph, sp, x, y) => Math.abs(y - ((sp * t + ph) % 1 + 1) % 1 * (cell - 1)) < cell * 0.047 ? 1 : 0, (t, ph, sp, x) => Math.abs(x - ((sp * t + ph) % 1 + 1) % 1 * (cell - 1)) < cell * 0.047 ? 1 : 0, (t, ph, sp, x, y) => {
        const r = ((sp * t + ph) % 1 + 1) % 1 * (cell * 0.53);
        const d = Math.sqrt((x - C) * (x - C) + (y - C) * (y - C));
        return d > r - 1 && d < r + 0.8 ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const a = ((sp * t + ph) % 1 + 1) % 1 * Math.PI * 2;
        const dx = x - C;
        const dy = y - C;
        const perp = Math.abs(dx * Math.sin(a) - dy * Math.cos(a));
        const along = dx * Math.cos(a) + dy * Math.sin(a);
        return perp < cell * 0.043 && along >= -0.5 ? 1 : 0;
      }, (t, ph, sp, x, y) => Math.sin((x + y) * 0.9 - (sp * t + ph) * Math.PI * 6) > 0.1 ? 1 : 0, (t, ph, sp, x, y) => {
        const d = Math.max(Math.abs(x - C), Math.abs(y - C)) / R;
        return ((d - (sp * t + ph)) % 0.45 + 0.45) % 0.45 < 0.22 ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const a = ((sp * t + ph) % 1 + 1) % 1 * Math.PI;
        const dx = x - C;
        const dy = y - C;
        const rx = dx * Math.cos(a) - dy * Math.sin(a) + C;
        const ry = dx * Math.sin(a) + dy * Math.cos(a) + C;
        return ((Math.floor(rx) + Math.floor(ry)) % 2 + 2) % 2;
      }, (t, ph, sp, x, y) => {
        const dx = x - C;
        const dy = y - C;
        if (dx * dx + dy * dy < 0.6) return 0;
        return (Math.atan2(dy, dx) / Math.PI + 1 + (sp * t + ph) * 2) % 2 * 4 % 1 < 0.42 ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const o = ((sp * t + ph + x * 0.19) % 1 + 1) % 1 * (cell - 1);
        return Math.abs(y - o) < cell * 0.043 ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const r = (Math.sin((sp * t + ph) % 1 * Math.PI * 2) * 0.5 + 0.5) * R * 1.2;
        return (x - C) * (x - C) + (y - C) * (y - C) < r * r ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const dx = x - C;
        const dy = y - C;
        const d = Math.sqrt(dx * dx + dy * dy);
        const a = (Math.atan2(dy, dx) / (Math.PI * 2) + 1) % 1;
        return ((a + d / (R * 1.6) - (sp * t + ph)) % 1 + 1) % 1 < 0.42 ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const len = (Math.sin((sp * t + ph) % 1 * Math.PI * 2) * 0.5 + 0.5) * R;
        const hBar = Math.abs(y - C) < cell * 0.037 && Math.abs(x - C) <= len;
        const vBar = Math.abs(x - C) < cell * 0.037 && Math.abs(y - C) <= len;
        return hBar || vBar ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const dx = x - C;
        const dy = y - C;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 1 || d > R * 1.03) return 0;
        const a = Math.atan2(dy, dx);
        const s1 = Math.sin(a * 2 + (sp * t + ph) * Math.PI * 4);
        const s2 = Math.sin(a * 2 - (sp * t + ph) * Math.PI * 4 + Math.PI);
        return s1 > 0.5 || s2 > 0.5 ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const o = ((sp * t + ph) % 1 + 1) % 1 * (cell * 2) - cell;
        return x + y < o + 2 && x + y > o - 2 ? 1 : 0;
      }, (t, ph, sp, x, y) => {
        const a = (sp * t + ph) % 2;
        const px = a < 1 ? a * (cell - 1) : (2 - a) * (cell - 1);
        const b = (sp * t * 0.7 + ph * 1.3) % 2;
        const py = b < 1 ? b * (cell - 1) : (2 - b) * (cell - 1);
        return (x - px) * (x - px) + (y - py) * (y - py) < cell * 0.093 ? 1 : 0;
      }, (t, ph, sp) => Math.sin((sp * t + ph) * Math.PI * 4) > 0.3 ? 1 : 0];
    }, [cell]);

    // --- build a plate --------------------------------------------------------
    const generate = React.useCallback(seed => {
      const rnd = makeRandom(seed);
      const baseHue = rnd() * 360;
      const isDark = contrastMode === 'dark' ? true : contrastMode === 'light' ? false : rnd() > 0.42;
      const scale = noiseScale;
      const ruleNames = ['analogous', 'complementary', 'triadic', 'split', 'tight'];
      const ruleName = harmony === 'random' ? ruleNames[Math.floor(rnd() * ruleNames.length)] : harmony;
      const rule = harmonyRules[ruleName] || harmonyRules.analogous;
      const size = 64;
      const latA = makeLattice(rnd, size);
      const latB = makeLattice(rnd, size);
      const latC = makeLattice(rnd, size);
      const warpX = makeLattice(rnd, size);
      const warpY = makeLattice(rnd, size);
      const out = new Array(tiles * tiles);
      for (let row = 0; row < tiles; row++) {
        for (let col = 0; col < tiles; col++) {
          const u = col / tiles * scale;
          const v = row / tiles * scale;
          const wx = fbm(warpX, size, u, v, 3) * 0.7;
          const wy = fbm(warpY, size, u, v, 3) * 0.7;
          const su = u + wx;
          const sv = v + wy;
          const nA = (fbm(latA, size, su, sv, 4) + 1) / 2;
          const nB = (fbm(latB, size, su * 1.3 + wy, sv * 1.3 + wx, 3) + 1) / 2;
          const nC = (fbm(latC, size, su * 2, sv * 2, 3) + 1) / 2;
          const hue1 = rule(baseHue, nA);
          const hue2 = (hue1 + 22 + nB * 45) % 360;
          const sat = 0;
          const light1 = isDark ? 0.1 + nC * 0.5 : 0.44 + nC * 0.44;
          const light2 = isDark ? Math.min(0.93, light1 + 0.18 + nB * 0.14) : Math.max(0.03, light1 - 0.22 - nB * 0.14);
          const [r1, g1, b1] = hslToRgb(hue1 / 360, sat, light1);
          const [r2, g2, b2] = hslToRgb(hue2 / 360, sat * 0.86, light2);
          out[row * tiles + col] = {
            r1,
            g1,
            b1,
            r2,
            g2,
            b2,
            patternIndex: Math.floor(rnd() * patterns.length),
            phase: rnd(),
            tileSpeed: 0.25 + rnd() * 1
          };
        }
      }
      return {
        tiles: out,
        ruleName,
        isDark
      };
    }, [makeRandom, makeLattice, fbm, hslToRgb, harmonyRules, patterns, tiles, noiseScale, harmony, contrastMode]);

    // --- paint ----------------------------------------------------------------
    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return undefined;
      const ctx = canvas.getContext('2d');
      if (!ctx) return undefined;
      ctx.imageSmoothingEnabled = false;
      const image = ctx.createImageData(resolution, resolution);
      imageRef.current = image;
      const seed = seedConfig > 0 ? seedConfig >>> 0 : Math.random() * 4294967296 >>> 0;
      const plate = generate(seed);
      tilesRef.current = plate.tiles;
      setSeedLabel(String(seed).padStart(10, '0') + ' / ' + plate.ruleName);
      const data = image.data;
      const draw = timeMs => {
        const t = animate ? timeMs / 1000 * speed : 0;
        const bank = tilesRef.current;
        if (!bank) return;
        for (let row = 0; row < tiles; row++) {
          for (let col = 0; col < tiles; col++) {
            const tile = bank[row * tiles + col];
            const fn = patterns[tile.patternIndex];
            for (let y = 0; y < cell; y++) {
              const rowOffset = (row * cell + y) * resolution;
              for (let x = 0; x < cell; x++) {
                const on = fn(t, tile.phase, tile.tileSpeed, x, y);
                const idx = (rowOffset + col * cell + x) * 4;
                data[idx] = on ? tile.r2 : tile.r1;
                data[idx + 1] = on ? tile.g2 : tile.g1;
                data[idx + 2] = on ? tile.b2 : tile.b1;
                data[idx + 3] = 255;
              }
            }
          }
        }
        ctx.putImageData(image, 0, 0);
      };
      if (!animate) {
        draw(0);
        return undefined;
      }
      const loop = ts => {
        draw(ts);
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(rafRef.current);
    }, [generate, patterns, tiles, cell, resolution, animate, speed, seedConfig, rollToken]);
    React.useEffect(() => {
      if (!autoRegenerate) return undefined;
      const id = setInterval(() => setRollToken(n => n + 1), autoInterval);
      return () => clearInterval(id);
    }, [autoRegenerate, autoInterval]);
    const reroll = () => setRollToken(n => n + 1);
    const mono = '"SF Mono", ui-monospace, "Roboto Mono", Menlo, monospace';
    const sans = '"PP Neue Montreal", "Helvetica Neue", Inter, system-ui, -apple-system, sans-serif';
    return /*#__PURE__*/React.createElement("div", {
      className: "study-generative-art-grid",
      style: {
        backgroundColor,
        padding: paddingY + 'px 24px',
        minHeight: '520px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        fontFamily: sans,
        color: textColor,
        boxSizing: 'border-box'
      }
    }, showTitle && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '13px',
        fontWeight: 500,
        margin: 0,
        letterSpacing: '0.01em'
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        color: mutedColor,
        letterSpacing: '0.08em'
      }
    }, subtitle)), /*#__PURE__*/React.createElement("canvas", {
      ref: canvasRef,
      width: resolution,
      height: resolution,
      onClick: reroll,
      role: "img",
      "aria-label": title,
      style: {
        display: 'block',
        width: fitToWidth ? '100%' : plateSize + 'px',
        maxWidth: fitToWidth ? plateSize * 2 + 'px' : plateSize + 'px',
        height: 'auto',
        aspectRatio: '1 / 1',
        cursor: 'pointer',
        imageRendering: 'pixelated',
        border: '1px solid ' + plateBorderColor
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        minHeight: '28px'
      }
    }, showHint && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: reroll,
      style: {
        fontSize: '12px',
        letterSpacing: '0.05em',
        textTransform: 'lowercase',
        color: textColor,
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: sans
      }
    }, hint), showSeed && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        color: mutedColor,
        fontFamily: mono,
        letterSpacing: '0.06em'
      }
    }, seedLabel)));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};