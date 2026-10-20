window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-story-typeshatter"] = function (React) {
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
   * Component Type: Story.TypeShatter
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Story.TypeShatter",
    "description": "Six-act type sequence: the word types itself in, holds, shatters into particles, drifts apart, reforms and settles",
    "editorElement": {
      "selector": ".story-type-shatter",
      "displayName": "Story — Type & Shatter",
      "archetype": "container",
      "data": {
        "text": {
          "dataType": "text",
          "displayName": "Text",
          "defaultValue": "NUANCE",
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
          "defaultValue": "14",
          "group": "Content"
        },
        "title": {
          "dataType": "text",
          "displayName": "Title",
          "defaultValue": "Type & Shatter",
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
        "density": {
          "dataType": "select",
          "displayName": "Particle Density",
          "defaultValue": "4",
          "options": ["3", "4", "5", "7"],
          "group": "Layout"
        },
        "textScale": {
          "dataType": "select",
          "displayName": "Text Size",
          "defaultValue": "0.74",
          "options": ["0.45", "0.6", "0.74", "0.88"],
          "group": "Layout"
        },
        "particleSize": {
          "dataType": "select",
          "displayName": "Particle Size",
          "defaultValue": "1.6",
          "options": ["1", "1.6", "2.4", "3.2"],
          "group": "Layout"
        },
        "speed": {
          "dataType": "select",
          "displayName": "Playback Speed",
          "defaultValue": "1",
          "options": ["0.5", "0.75", "1", "1.5", "2"],
          "group": "Animation"
        },
        "blastRadius": {
          "dataType": "select",
          "displayName": "Shatter Distance",
          "defaultValue": "1",
          "options": ["0.5", "1", "1.6", "2.4"],
          "group": "Animation"
        },
        "showCursor": {
          "dataType": "booleanValue",
          "displayName": "Show Typing Cursor",
          "defaultValue": true,
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "particleColor": {
          "dataType": "color",
          "displayName": "Particle",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "cursorColor": {
          "dataType": "color",
          "displayName": "Cursor",
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
      name: 'TYPE'
    });
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const maxLength = Math.max(1, parseInt(config?.maxLength || '14', 10));
    const initialText = (config?.text || 'NUANCE').slice(0, maxLength) || 'NUANCE';
    const [textInput, setTextInput] = React.useState(initialText);
    React.useEffect(() => {
      setTextInput(initialText);
    }, [initialText]);
    const text = textInput.trim().length ? textInput : initialText;
    const showTextInput = config?.showTextInput !== false;
    const inputLabel = config?.inputLabel || 'TEXT';
    const title = config?.title || 'Type & Shatter';
    const subtitle = config?.subtitle || 'six acts';
    const showTitle = config?.showTitle !== false;
    const showActReadout = config?.showActReadout !== false;
    const height = Math.max(240, parseInt(config?.height || '620', 10));
    const fullHeight = config?.fullHeight === true;
    const density = Math.max(2, parseInt(config?.density || '4', 10));
    const textScale = parseFloat(config?.textScale || '0.74') || 0.74;
    const particleSize = parseFloat(config?.particleSize || '1.6') || 1.6;
    const speed = parseFloat(config?.speed || '1') || 1;
    const blastRadius = parseFloat(config?.blastRadius || '1') || 1;
    const showCursor = config?.showCursor !== false;
    const backgroundColor = config?.backgroundColor || '#000000';
    const particleColor = config?.particleColor || '#eeeeee';
    const cursorColor = config?.cursorColor || '#eeeeee';
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
      let points = [];
      let bounds = {
        minX: 0,
        maxX: 1
      };
      const easeOut = v => 1 - Math.pow(1 - v, 3);
      const easeIn = v => v * v * v;
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;

      // Rasterise the word once; every act then moves these same points.
      const build = () => {
        points = [];
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
        const measured = octx.measureText(text).width || 1;
        fontPx = Math.max(10, Math.min(fontPx * (w * textScale / measured), h * 0.58));
        octx.font = '700 ' + Math.round(fontPx) + 'px ' + fontStack;
        octx.fillStyle = '#ffffff';
        octx.fillText(text, off.width / 2, off.height / 2);
        const img = octx.getImageData(0, 0, off.width, off.height).data;
        let minX = Infinity;
        let maxX = -Infinity;
        for (let y = 0; y < off.height; y += density) {
          for (let x = 0; x < off.width; x += density) {
            if (img[(y * off.width + x) * 4 + 3] > 128) {
              const a = Math.random() * Math.PI * 2;
              const force = (0.35 + Math.random() * 0.9) * blastRadius;
              points.push({
                x,
                y,
                bx: Math.cos(a) * force,
                by: Math.sin(a) * force - 0.25 * force,
                spin: (Math.random() - 0.5) * 6,
                seed: Math.random() * 1000,
                order: Math.random()
              });
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
            }
          }
        }
        bounds = {
          minX: minX === Infinity ? 0 : minX,
          maxX: maxX === -Infinity ? 1 : maxX
        };
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
      const dot = (x, y, size, alpha) => {
        if (alpha <= 0.01 || size <= 0.1) return;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      };

      // --- the six acts -------------------------------------------------------
      const acts = [{
        name: 'TYPE',
        d: 1500,
        draw: (p, ts) => {
          // Reveal points left to right, as if a caret were laying them down.
          const span = Math.max(1, bounds.maxX - bounds.minX);
          const caret = bounds.minX + easeOut(p) * span;
          for (const pt of points) {
            const lead = (caret - pt.x) / (span * 0.08);
            if (lead <= 0) continue;
            const a = clamp01(lead);
            dot(pt.x, pt.y, particleSize * (0.6 + a * 0.4), a);
          }
          if (showCursor) {
            const blink = Math.sin(ts / 90) > -0.4 ? 1 : 0.15;
            ctx.globalAlpha = blink;
            ctx.fillStyle = cursorColor;
            ctx.fillRect(caret + 6, h / 2 - h * 0.16, 2, h * 0.32);
            ctx.fillStyle = particleColor;
            ctx.globalAlpha = 1;
          }
        }
      }, {
        name: 'HOLD',
        d: 900,
        draw: (p, ts) => {
          for (const pt of points) dot(pt.x, pt.y, particleSize, 1);
          if (showCursor) {
            const blink = Math.sin(ts / 90) > -0.4 ? 1 : 0.15;
            ctx.globalAlpha = blink;
            ctx.fillStyle = cursorColor;
            ctx.fillRect(bounds.maxX + 6, h / 2 - h * 0.16, 2, h * 0.32);
            ctx.fillStyle = particleColor;
            ctx.globalAlpha = 1;
          }
        }
      }, {
        name: 'SHATTER',
        d: 1200,
        draw: p => {
          const e = easeOut(p);
          const reach = Math.max(w, h) * 0.55;
          for (const pt of points) {
            const d = e * (0.4 + pt.order * 0.9);
            dot(pt.x + pt.bx * reach * d, pt.y + pt.by * reach * d + d * d * h * 0.18, particleSize * (1 - e * 0.3), 1 - e * 0.55);
          }
        }
      }, {
        name: 'DRIFT',
        d: 900,
        draw: (p, ts) => {
          const reach = Math.max(w, h) * 0.55;
          for (const pt of points) {
            const d = 0.4 + pt.order * 0.9;
            const t = ts / 1000;
            dot(pt.x + pt.bx * reach * d + Math.sin(t * 0.8 + pt.seed) * 8, pt.y + pt.by * reach * d + d * d * h * 0.18 + Math.cos(t * 0.7 + pt.seed) * 8, particleSize * 0.7, 0.45 - p * 0.2);
          }
        }
      }, {
        name: 'REFORM',
        d: 1600,
        draw: p => {
          const e = easeIn(1 - p);
          const reach = Math.max(w, h) * 0.55;
          for (const pt of points) {
            const d = e * (0.4 + pt.order * 0.9);
            dot(pt.x + pt.bx * reach * d + Math.sin(pt.seed) * 8 * e, pt.y + pt.by * reach * d + d * d * h * 0.18, particleSize * (0.7 + (1 - e) * 0.3), 0.25 + (1 - e) * 0.75);
          }
        }
      }, {
        name: 'SETTLE',
        d: 800,
        draw: p => {
          const wobble = (1 - easeOut(p)) * 2.2;
          for (const pt of points) {
            dot(pt.x + Math.sin(pt.seed * 3) * wobble, pt.y + Math.cos(pt.seed * 2) * wobble, particleSize, 1);
          }
        }
      }];
      const total = acts.reduce((s, a) => s + a.d, 0);
      let origin = 0;
      let lastAct = -1;
      const frame = ts => {
        if (!origin) origin = ts;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = particleColor;
        let local = prefersReducedMotion ? 2000 : (ts - origin) * speed % total;
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
    }, [text, fontStack, density, textScale, particleSize, speed, blastRadius, showCursor, backgroundColor, particleColor, cursorColor, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "story-type-shatter",
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