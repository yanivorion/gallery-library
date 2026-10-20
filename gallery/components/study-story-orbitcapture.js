window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-story-orbitcapture"] = function (React) {
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
   * Component Type: Story.OrbitCapture
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Story.OrbitCapture",
    "description": "Six-act letter sequence: characters arrive scattered, fall into a shared orbit, are captured one at a time into their place in the word, lock, then let go",
    "editorElement": {
      "selector": ".story-orbit-capture",
      "displayName": "Story — Orbit Capture",
      "archetype": "container",
      "data": {
        "text": {
          "dataType": "text",
          "displayName": "Text",
          "defaultValue": "GRAVITY",
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
          "defaultValue": "Orbit Capture",
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
        "showOrbitGuide": {
          "dataType": "booleanValue",
          "displayName": "Show Orbit Guide",
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
        "textScale": {
          "dataType": "select",
          "displayName": "Text Size",
          "defaultValue": "0.7",
          "options": ["0.45", "0.58", "0.7", "0.84"],
          "group": "Layout"
        },
        "orbitRadius": {
          "dataType": "select",
          "displayName": "Orbit Radius",
          "defaultValue": "0.3",
          "options": ["0.2", "0.25", "0.3", "0.38"],
          "group": "Layout"
        },
        "orbitSquash": {
          "dataType": "select",
          "displayName": "Orbit Squash",
          "defaultValue": "0.45",
          "options": ["0.15", "0.3", "0.45", "0.7", "1"],
          "group": "Layout"
        },
        "speed": {
          "dataType": "select",
          "displayName": "Playback Speed",
          "defaultValue": "1",
          "options": ["0.5", "0.75", "1", "1.5", "2"],
          "group": "Animation"
        },
        "orbitSpeed": {
          "dataType": "select",
          "displayName": "Orbit Speed",
          "defaultValue": "1",
          "options": ["0.4", "0.7", "1", "1.6", "2.4"],
          "group": "Animation"
        },
        "spinLetters": {
          "dataType": "booleanValue",
          "displayName": "Spin Letters In Orbit",
          "defaultValue": true,
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "letterColor": {
          "dataType": "color",
          "displayName": "Letter",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "capturedColor": {
          "dataType": "color",
          "displayName": "Captured Letter",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "guideColor": {
          "dataType": "color",
          "displayName": "Orbit Guide",
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
      name: 'SCATTER'
    });
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const maxLength = Math.max(1, parseInt(config?.maxLength || '12', 10));
    const initialText = (config?.text || 'GRAVITY').slice(0, maxLength) || 'GRAVITY';
    const [textInput, setTextInput] = React.useState(initialText);
    React.useEffect(() => {
      setTextInput(initialText);
    }, [initialText]);
    const text = textInput.trim().length ? textInput : initialText;
    const showTextInput = config?.showTextInput !== false;
    const inputLabel = config?.inputLabel || 'TEXT';
    const title = config?.title || 'Orbit Capture';
    const subtitle = config?.subtitle || 'six acts';
    const showTitle = config?.showTitle !== false;
    const showActReadout = config?.showActReadout !== false;
    const showOrbitGuide = config?.showOrbitGuide !== false;
    const height = Math.max(240, parseInt(config?.height || '620', 10));
    const fullHeight = config?.fullHeight === true;
    const textScale = parseFloat(config?.textScale || '0.7') || 0.7;
    const orbitRadius = parseFloat(config?.orbitRadius || '0.3') || 0.3;
    const orbitSquash = parseFloat(config?.orbitSquash || '0.45') || 0.45;
    const speed = parseFloat(config?.speed || '1') || 1;
    const orbitSpeed = parseFloat(config?.orbitSpeed || '1') || 1;
    const spinLetters = config?.spinLetters !== false;
    const backgroundColor = config?.backgroundColor || '#000000';
    const letterColor = config?.letterColor || '#eeeeee';
    const capturedColor = config?.capturedColor || '#eeeeee';
    const guideColor = config?.guideColor || '#eeeeee';
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
      let fontPx = 60;
      let letters = [];
      const chars = text.split('');
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
      const easeOut = v => 1 - Math.pow(1 - v, 3);
      const easeInOut = v => v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;
      const build = () => {
        if (w < 4 || h < 4) return;
        ctx.font = '700 100px ' + fontStack;
        const run = ctx.measureText(text).width || 1;
        fontPx = Math.max(12, Math.min(w * textScale / (run / 100), h * 0.34));
        ctx.font = '700 ' + fontPx + 'px ' + fontStack;
        const widths = chars.map(c => ctx.measureText(c).width);
        const totalWidth = widths.reduce((s, v) => s + v, 0);
        let cursor = w / 2 - totalWidth / 2;
        letters = chars.map((c, i) => {
          const homeX = cursor + widths[i] / 2;
          cursor += widths[i];
          return {
            ch: c,
            homeX,
            homeY: h / 2,
            // Spread the orbit phases so letters do not clump together.
            phase: i / chars.length * Math.PI * 2,
            scatterX: Math.random() * w,
            scatterY: Math.random() * h,
            scatterRot: (Math.random() - 0.5) * 3,
            captureRank: i
          };
        });
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
      const orbitPos = (l, ts) => {
        const r = Math.min(w, h) * orbitRadius;
        const a = l.phase + ts / 1000 * orbitSpeed;
        return {
          x: w / 2 + Math.cos(a) * r,
          y: h / 2 + Math.sin(a) * r * orbitSquash,
          rot: spinLetters ? Math.sin(a) * 0.5 : 0,
          depth: (Math.sin(a) + 1) / 2
        };
      };
      const drawLetter = (ch, x, y, rot, alpha, scale, color) => {
        if (alpha <= 0.01) return;
        ctx.save();
        ctx.globalAlpha = clamp01(alpha);
        ctx.translate(x, y);
        if (rot) ctx.rotate(rot);
        if (scale && scale !== 1) ctx.scale(scale, scale);
        ctx.font = '700 ' + fontPx + 'px ' + fontStack;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = color;
        ctx.fillText(ch, 0, 0);
        ctx.restore();
      };
      const guide = alpha => {
        if (!showOrbitGuide || alpha <= 0.01) return;
        const r = Math.min(w, h) * orbitRadius;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = guideColor;
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 6]);
        ctx.beginPath();
        ctx.ellipse(w / 2, h / 2, r, r * orbitSquash, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
      };

      // --- the six acts -------------------------------------------------------
      const acts = [{
        name: 'SCATTER',
        d: 1300,
        draw: p => {
          const e = easeOut(p);
          for (const l of letters) {
            drawLetter(l.ch, l.scatterX, l.scatterY, l.scatterRot * (1 - e * 0.3), e, 0.7 + e * 0.3, letterColor);
          }
        }
      }, {
        name: 'GATHER',
        d: 1500,
        draw: (p, ts) => {
          const e = easeInOut(p);
          guide(e * 0.18);
          for (const l of letters) {
            const o = orbitPos(l, ts);
            drawLetter(l.ch, l.scatterX + (o.x - l.scatterX) * e, l.scatterY + (o.y - l.scatterY) * e, l.scatterRot * (1 - e) + o.rot * e, 1, 0.7 + 0.3 * o.depth, letterColor);
          }
        }
      }, {
        name: 'ORBIT',
        d: 1800,
        draw: (p, ts) => {
          guide(0.18);
          for (const l of letters) {
            const o = orbitPos(l, ts);
            drawLetter(l.ch, o.x, o.y, o.rot, 0.55 + o.depth * 0.45, 0.7 + 0.3 * o.depth, letterColor);
          }
        }
      }, {
        name: 'CAPTURE',
        d: 2400,
        draw: (p, ts) => {
          guide(0.18 * (1 - p));
          const n = letters.length;
          for (const l of letters) {
            const slot = l.captureRank / Math.max(1, n);
            // Each letter leaves orbit in turn and eases into its slot.
            const grab = clamp01((p - slot * 0.72) / 0.26);
            const o = orbitPos(l, ts);
            const e = easeInOut(grab);
            drawLetter(l.ch, o.x + (l.homeX - o.x) * e, o.y + (l.homeY - o.y) * e, o.rot * (1 - e), 0.55 + o.depth * 0.45 + e * 0.45, (0.7 + 0.3 * o.depth) * (1 - e) + e, e > 0.9 ? capturedColor : letterColor);
          }
        }
      }, {
        name: 'LOCK',
        d: 1200,
        draw: p => {
          const settle = (1 - easeOut(p)) * 3;
          for (const l of letters) {
            drawLetter(l.ch, l.homeX + Math.sin(l.phase * 3) * settle, l.homeY + Math.cos(l.phase * 2) * settle, 0, 1, 1, capturedColor);
          }
        }
      }, {
        name: 'RELEASE',
        d: 1500,
        draw: (p, ts) => {
          const e = easeInOut(p);
          for (const l of letters) {
            const o = orbitPos(l, ts);
            drawLetter(l.ch, l.homeX + (o.x - l.homeX) * e, l.homeY + (o.y - l.homeY) * e, o.rot * e, 1 - e * 0.85, 1 - e * 0.3, capturedColor);
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
        let local = prefersReducedMotion ? 7200 : (ts - origin) * speed % total;
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
        document.fonts.load('700 100px ' + fontStack, text).then(() => {
          build();
          start();
        }, start);
      } else {
        start();
      }
      return () => {
        cancelAnimationFrame(rafRef.current);
        if (ro) ro.disconnect();else window.removeEventListener('resize', measure);
      };
    }, [text, fontStack, textScale, orbitRadius, orbitSquash, speed, orbitSpeed, spinLetters, showOrbitGuide, backgroundColor, letterColor, capturedColor, guideColor, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "story-orbit-capture",
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