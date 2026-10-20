window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-story-constellation"] = function (React) {
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
   * Project: Studies after tomoyaokada.com (batch 1) — storytelling sequences
   * Structure: staged timeline, after S-004 "Eight Animation"
   * Component Type: Story.Constellation
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Story.Constellation",
    "description": "Six-act constellation sequence: stars seed, link into a web, migrate into the shape of the word, hold, then release back into drift",
    "editorElement": {
      "selector": ".story-constellation",
      "displayName": "Story — Constellation",
      "archetype": "container",
      "data": {
        "text": {
          "dataType": "text",
          "displayName": "Text",
          "defaultValue": "INDEX",
          "group": "Content"
        },
        "showTextInput": {
          "dataType": "booleanValue",
          "displayName": "Show Live Text Input",
          "defaultValue": true,
          "group": "Content"
        },
        "inputLabel": {
          "dataType": "text",
          "displayName": "Input Label",
          "defaultValue": "TEXT",
          "group": "Content"
        },
        "maxLength": {
          "dataType": "number",
          "displayName": "Max Characters",
          "defaultValue": "12",
          "group": "Content"
        },
        "title": {
          "dataType": "text",
          "displayName": "Title",
          "defaultValue": "Constellation",
          "group": "Content"
        },
        "subtitle": {
          "dataType": "text",
          "displayName": "Subtitle",
          "defaultValue": "six acts",
          "group": "Content"
        },
        "showTitle": {
          "dataType": "booleanValue",
          "displayName": "Show Title",
          "defaultValue": true,
          "group": "Content"
        },
        "showActReadout": {
          "dataType": "booleanValue",
          "displayName": "Show Act Readout",
          "defaultValue": true,
          "group": "Content"
        },
        "height": {
          "dataType": "number",
          "displayName": "Stage Height (px)",
          "defaultValue": "620",
          "group": "Layout"
        },
        "fullHeight": {
          "dataType": "booleanValue",
          "displayName": "Full Viewport Height",
          "defaultValue": false,
          "group": "Layout"
        },
        "starCount": {
          "dataType": "select",
          "displayName": "Star Count",
          "defaultValue": "520",
          "options": ["180", "260", "380", "520", "760"],
          "group": "Layout"
        },
        "textScale": {
          "dataType": "select",
          "displayName": "Text Size",
          "defaultValue": "0.72",
          "options": ["0.45", "0.6", "0.72", "0.86"],
          "group": "Layout"
        },
        "starSize": {
          "dataType": "select",
          "displayName": "Star Size",
          "defaultValue": "1.8",
          "options": ["1.2", "1.8", "2.6", "3.4"],
          "group": "Layout"
        },
        "linkDistance": {
          "dataType": "number",
          "displayName": "Link Distance (px)",
          "defaultValue": "90",
          "group": "Layout"
        },
        "speed": {
          "dataType": "select",
          "displayName": "Playback Speed",
          "defaultValue": "1",
          "options": ["0.5", "0.75", "1", "1.5", "2"],
          "group": "Animation"
        },
        "driftAmount": {
          "dataType": "select",
          "displayName": "Drift Amount",
          "defaultValue": "1",
          "options": ["0", "0.5", "1", "2"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "starColor": {
          "dataType": "color",
          "displayName": "Star",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "linkColor": {
          "dataType": "color",
          "displayName": "Link Line",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "fontFamily": {
          "dataType": "select",
          "displayName": "Font",
          "defaultValue": "grotesk",
          "options": ["grotesk", "mono", "serif"],
          "group": "Colors"
        }
      }
    }
  };
  function Component({
    config = {}
  }) {
    const hostRef = React.useRef(null);
    const canvasRef = React.useRef(null);
    const rafRef = React.useRef(0);
    const [act, setAct] = React.useState({
      index: 0,
      total: 6,
      name: 'SEED'
    });
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const maxLength = Math.max(1, parseInt(config?.maxLength || '12', 10));
    const initialText = (config?.text || 'INDEX').slice(0, maxLength) || 'INDEX';
    const [textInput, setTextInput] = React.useState(initialText);
    React.useEffect(() => {
      setTextInput(initialText);
    }, [initialText]);
    const text = textInput.trim().length ? textInput : initialText;
    const showTextInput = config?.showTextInput !== false;
    const inputLabel = config?.inputLabel || 'TEXT';
    const title = config?.title || 'Constellation';
    const subtitle = config?.subtitle || 'six acts';
    const showTitle = config?.showTitle !== false;
    const showActReadout = config?.showActReadout !== false;
    const height = Math.max(240, parseInt(config?.height || '620', 10));
    const fullHeight = config?.fullHeight === true;
    const starCount = Math.max(40, parseInt(config?.starCount || '520', 10));
    const textScale = parseFloat(config?.textScale || '0.72') || 0.72;
    const starSize = parseFloat(config?.starSize || '1.8') || 1.8;
    const linkDistance = Math.max(20, parseInt(config?.linkDistance || '90', 10));
    const speed = parseFloat(config?.speed || '1') || 1;
    const driftAmount = parseFloat(config?.driftAmount || '1') || 0;
    const backgroundColor = config?.backgroundColor || '#000000';
    const starColor = config?.starColor || '#eeeeee';
    const linkColor = config?.linkColor || '#eeeeee';
    const titleColor = config?.titleColor || '#eeeeee';
    const fontKey = config?.fontFamily || 'grotesk';
    const fontStack = React.useMemo(() => {
      if (fontKey === 'mono') return '"SF Mono", ui-monospace, "Roboto Mono", Menlo, monospace';
      if (fontKey === 'serif') return '"Times New Roman", Georgia, serif';
      return '"PP Neue Montreal", "Helvetica Neue", Inter, system-ui, -apple-system, sans-serif';
    }, [fontKey]);
    const sans = '"PP Neue Montreal", "Helvetica Neue", Inter, system-ui, -apple-system, sans-serif';
    React.useEffect(() => {
      const host = hostRef.current;
      const canvas = canvasRef.current;
      if (!host || !canvas) return undefined;
      const ctx = canvas.getContext('2d');
      if (!ctx) return undefined;
      let w = 0;
      let h = 0;
      let stars = [];
      let links = [];
      const easeOut = v => 1 - Math.pow(1 - v, 3);
      const easeInOut = v => v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;

      // Sample the word, then hand each star a home in the shape and a free
      // position in open space. Acts interpolate between the two.
      const build = () => {
        stars = [];
        links = [];
        if (w < 4 || h < 4) return;
        const off = document.createElement('canvas');
        off.width = Math.round(w);
        off.height = Math.round(h);
        const octx = off.getContext('2d');
        if (!octx) return;
        let fontPx = Math.round(h * 0.4);
        octx.textAlign = 'center';
        octx.textBaseline = 'middle';
        octx.font = '700 ' + fontPx + 'px ' + fontStack;
        const run = octx.measureText(text).width || 1;
        fontPx = Math.max(10, Math.min(fontPx * (w * textScale / run), h * 0.56));
        octx.font = '700 ' + Math.round(fontPx) + 'px ' + fontStack;
        octx.fillStyle = '#ffffff';
        octx.fillText(text, off.width / 2, off.height / 2);
        const img = octx.getImageData(0, 0, off.width, off.height).data;
        const hits = [];
        for (let y = 0; y < off.height; y += 3) {
          for (let x = 0; x < off.width; x += 3) {
            if (img[(y * off.width + x) * 4 + 3] > 128) hits.push([x, y]);
          }
        }
        for (let i = 0; i < starCount; i++) {
          const target = hits.length ? hits[Math.floor(Math.random() * hits.length)] : [w / 2, h / 2];
          stars.push({
            fx: Math.random() * w,
            fy: Math.random() * h,
            tx: target[0],
            ty: target[1],
            x: 0,
            y: 0,
            seed: Math.random() * 1000,
            delay: Math.random(),
            size: starSize * (0.6 + Math.random() * 0.8)
          });
        }

        // Precompute a link web over the free layout so LINK has something to draw.
        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const d = Math.hypot(stars[i].fx - stars[j].fx, stars[i].fy - stars[j].fy);
            if (d < linkDistance) links.push({
              a: i,
              b: j,
              d,
              order: Math.random()
            });
          }
        }
        links.sort((m, n) => m.order - n.order);
        if (links.length > 1200) links.length = 1200;
      };
      const measure = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = host.clientWidth || 1;
        h = host.clientHeight || 1;
        canvas.width = Math.max(1, Math.round(w * dpr));
        canvas.height = Math.max(1, Math.round(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        build();
      };
      measure();
      let ro = null;
      if (typeof ResizeObserver !== 'undefined') {
        ro = new ResizeObserver(measure);
        ro.observe(host);
      } else {
        window.addEventListener('resize', measure);
      }

      // Place every star for this frame: `blend` 0 = free field, 1 = word shape.
      const place = (blend, ts) => {
        const t = ts / 1000;
        for (const s of stars) {
          const e = easeInOut(clamp01(blend));
          const drift = driftAmount * (1 - e) * 6;
          s.x = s.fx + (s.tx - s.fx) * e + Math.sin(t * 0.5 + s.seed) * drift;
          s.y = s.fy + (s.ty - s.fy) * e + Math.cos(t * 0.45 + s.seed * 1.3) * drift;
        }
      };
      const drawStars = alphaFn => {
        ctx.fillStyle = starColor;
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const a = alphaFn ? alphaFn(s, i) : 1;
          if (a <= 0.01) continue;
          ctx.globalAlpha = a;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      };
      const drawLinks = (reveal, alpha) => {
        if (reveal <= 0 || alpha <= 0.01) return;
        const count = Math.floor(links.length * clamp01(reveal));
        ctx.strokeStyle = linkColor;
        ctx.lineWidth = 0.6;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        for (let i = 0; i < count; i++) {
          const l = links[i];
          const a = stars[l.a];
          const b = stars[l.b];
          if (!a || !b) continue;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
      };

      // --- the six acts -------------------------------------------------------
      const acts = [{
        name: 'SEED',
        d: 1400,
        draw: (p, ts) => {
          place(0, ts);
          drawStars(s => clamp01((easeOut(p) - s.delay * 0.7) * 4));
        }
      }, {
        name: 'LINK',
        d: 1600,
        draw: (p, ts) => {
          place(0, ts);
          drawLinks(easeOut(p), 0.3);
          drawStars(() => 1);
        }
      }, {
        name: 'FORM',
        d: 2000,
        draw: (p, ts) => {
          place(p, ts);
          drawLinks(1, 0.3 * (1 - easeOut(p) * 0.75));
          drawStars(() => 1);
        }
      }, {
        name: 'HOLD',
        d: 1300,
        draw: (p, ts) => {
          place(1, ts);
          drawLinks(1, 0.075 * (1 - p));
          drawStars(s => 0.85 + Math.sin(ts / 420 + s.seed) * 0.15);
        }
      }, {
        name: 'RELEASE',
        d: 1800,
        draw: (p, ts) => {
          place(1 - p, ts);
          drawLinks(1, easeOut(p) * 0.22);
          drawStars(() => 1);
        }
      }, {
        name: 'DRIFT',
        d: 1200,
        draw: (p, ts) => {
          place(0, ts);
          drawLinks(1 - easeOut(p), 0.22 * (1 - p));
          drawStars(s => 1 - clamp01((p - s.delay * 0.5) / 0.5) * 0.85);
        }
      }];
      const total = acts.reduce((s, a) => s + a.d, 0);
      let origin = 0;
      let lastAct = -1;
      const frame = ts => {
        if (!origin) origin = ts;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        let local = prefersReducedMotion ? 5200 : (ts - origin) * speed % total;
        for (let i = 0; i < acts.length; i++) {
          if (local < acts[i].d) {
            if (i !== lastAct) {
              lastAct = i;
              setAct({
                index: i,
                total: acts.length,
                name: acts[i].name
              });
            }
            acts[i].draw(local / acts[i].d, ts);
            break;
          }
          local -= acts[i].d;
        }
        ctx.globalAlpha = 1;
        rafRef.current = requestAnimationFrame(frame);
      };
      const start = () => {
        rafRef.current = requestAnimationFrame(frame);
      };
      if (document.fonts && document.fonts.load) {
        document.fonts.load('700 100px ' + fontStack, text).then(start, start);
      } else {
        start();
      }
      return () => {
        cancelAnimationFrame(rafRef.current);
        if (ro) ro.disconnect();else window.removeEventListener('resize', measure);
      };
    }, [text, fontStack, starCount, textScale, starSize, linkDistance, speed, driftAmount, backgroundColor, starColor, linkColor, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "story-constellation",
      ref: hostRef,
      style: {
        position: 'relative',
        width: '100%',
        height: fullHeight ? '100svh' : height + 'px',
        overflow: 'hidden',
        backgroundColor,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("canvas", {
      ref: canvasRef,
      role: "img",
      "aria-label": text,
      style: {
        display: 'block',
        width: '100%',
        height: '100%'
      }
    }), showTitle && /*#__PURE__*/React.createElement("h2", {
      style: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 2,
        margin: 0,
        color: titleColor,
        fontFamily: sans,
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: 1.35,
        pointerEvents: 'none'
      }
    }, title, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        opacity: 0.72
      }
    }, subtitle)), showActReadout && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 2,
        color: titleColor,
        fontFamily: sans,
        fontSize: '10px',
        letterSpacing: '0.08em',
        opacity: 0.55,
        fontVariantNumeric: 'tabular-nums',
        pointerEvents: 'none'
      }
    }, 'ACT ' + (act.index + 1) + ' / ' + act.total + ' — ' + act.name), showTextInput && /*#__PURE__*/React.createElement("label", {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: '24px',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 14px',
        borderRadius: '999px',
        border: '1px solid ' + titleColor + '33',
        background: backgroundColor + 'cc',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        fontFamily: sans
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        letterSpacing: '0.08em',
        color: titleColor,
        opacity: 0.55
      }
    }, inputLabel), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: textInput,
      maxLength: maxLength,
      placeholder: "type a word",
      onChange: e => setTextInput(e.target.value),
      "aria-label": inputLabel,
      style: {
        width: Math.min(240, Math.max(90, maxLength * 13)) + 'px',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        color: titleColor,
        fontFamily: sans,
        fontSize: '13px',
        padding: 0
      }
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};