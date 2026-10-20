window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-story-liquidfill"] = function (React) {
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
   * Component Type: Story.LiquidFill
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Story.LiquidFill",
    "description": "Six-act fill sequence: the word is drawn as an outline, a stream pours in, the level rises, sloshes, drains and leaves the outline empty",
    "editorElement": {
      "selector": ".story-liquid-fill",
      "displayName": "Story — Liquid Fill",
      "archetype": "container",
      "data": {
        "text": {
          "dataType": "text",
          "displayName": "Text",
          "defaultValue": "FLUID",
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
          "defaultValue": "Liquid Fill",
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
        "showLevelReadout": {
          "dataType": "booleanValue",
          "displayName": "Show Level Readout",
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
          "defaultValue": "0.78",
          "options": ["0.45", "0.6", "0.78", "0.9"],
          "group": "Layout"
        },
        "outlineWidth": {
          "dataType": "select",
          "displayName": "Outline Width",
          "defaultValue": "1.5",
          "options": ["1", "1.5", "2.5", "4"],
          "group": "Layout"
        },
        "speed": {
          "dataType": "select",
          "displayName": "Playback Speed",
          "defaultValue": "1",
          "options": ["0.5", "0.75", "1", "1.5", "2"],
          "group": "Animation"
        },
        "waveHeight": {
          "dataType": "select",
          "displayName": "Surface Wave Height",
          "defaultValue": "1",
          "options": ["0", "0.5", "1", "2", "3"],
          "group": "Animation"
        },
        "waveSpeed": {
          "dataType": "select",
          "displayName": "Surface Wave Speed",
          "defaultValue": "1",
          "options": ["0.4", "1", "1.8", "3"],
          "group": "Animation"
        },
        "showDroplets": {
          "dataType": "booleanValue",
          "displayName": "Show Droplets",
          "defaultValue": true,
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "outlineColor": {
          "dataType": "color",
          "displayName": "Outline",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "liquidColor": {
          "dataType": "color",
          "displayName": "Liquid",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "streamColor": {
          "dataType": "color",
          "displayName": "Pouring Stream",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title",
          "defaultValue": "#111111",
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
      name: 'OUTLINE'
    });
    const [level, setLevel] = React.useState(0);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const maxLength = Math.max(1, parseInt(config?.maxLength || '12', 10));
    const initialText = (config?.text || 'FLUID').slice(0, maxLength) || 'FLUID';
    const [textInput, setTextInput] = React.useState(initialText);
    React.useEffect(() => {
      setTextInput(initialText);
    }, [initialText]);
    const text = textInput.trim().length ? textInput : initialText;
    const showTextInput = config?.showTextInput !== false;
    const inputLabel = config?.inputLabel || 'TEXT';
    const title = config?.title || 'Liquid Fill';
    const subtitle = config?.subtitle || 'six acts';
    const showTitle = config?.showTitle !== false;
    const showActReadout = config?.showActReadout !== false;
    const showLevelReadout = config?.showLevelReadout !== false;
    const height = Math.max(240, parseInt(config?.height || '620', 10));
    const fullHeight = config?.fullHeight === true;
    const textScale = parseFloat(config?.textScale || '0.78') || 0.78;
    const outlineWidth = parseFloat(config?.outlineWidth || '1.5') || 1.5;
    const speed = parseFloat(config?.speed || '1') || 1;
    const waveHeight = parseFloat(config?.waveHeight || '1') || 0;
    const waveSpeed = parseFloat(config?.waveSpeed || '1') || 1;
    const showDroplets = config?.showDroplets !== false;
    const backgroundColor = config?.backgroundColor || '#eeeeee';
    const outlineColor = config?.outlineColor || '#000000';
    const liquidColor = config?.liquidColor || '#000000';
    const streamColor = config?.streamColor || '#000000';
    const titleColor = config?.titleColor || '#111111';
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
      let box = {
        top: 0,
        bottom: 1,
        left: 0,
        right: 1
      };
      let maskCanvas = null;
      let layerCanvas = null;
      let droplets = [];
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
      const easeOut = v => 1 - Math.pow(1 - v, 3);
      const easeInOut = v => v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;
      const build = () => {
        if (w < 4 || h < 4) return;
        ctx.font = '700 100px ' + fontStack;
        const run = ctx.measureText(text).width || 1;
        fontPx = Math.max(12, Math.min(w * textScale / (run / 100), h * 0.52));
        ctx.font = '700 ' + fontPx + 'px ' + fontStack;
        const m = ctx.measureText(text);
        const width = m.width || fontPx;
        const asc = m.actualBoundingBoxAscent || fontPx * 0.72;
        const desc = m.actualBoundingBoxDescent || fontPx * 0.02;
        box = {
          left: w / 2 - width / 2,
          right: w / 2 + width / 2,
          top: h / 2 - asc,
          bottom: h / 2 + desc
        };

        // The mask is the filled word; the layer is where liquid gets painted
        // and then cut down to the word's silhouette.
        maskCanvas = document.createElement('canvas');
        maskCanvas.width = Math.round(w);
        maskCanvas.height = Math.round(h);
        const mctx = maskCanvas.getContext('2d');
        if (mctx) {
          mctx.font = '700 ' + fontPx + 'px ' + fontStack;
          mctx.textAlign = 'center';
          mctx.textBaseline = 'alphabetic';
          mctx.fillStyle = '#ffffff';
          mctx.fillText(text, w / 2, h / 2);
        }
        layerCanvas = document.createElement('canvas');
        layerCanvas.width = Math.round(w);
        layerCanvas.height = Math.round(h);
        droplets = [];
        for (let i = 0; i < 26; i++) {
          droplets.push({
            x: (Math.random() - 0.5) * fontPx * 0.5,
            delay: Math.random(),
            size: 1 + Math.random() * 2.4,
            sway: (Math.random() - 0.5) * 2
          });
        }
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
      const drawOutline = alpha => {
        if (alpha <= 0.01) return;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = outlineColor;
        ctx.lineWidth = outlineWidth;
        ctx.font = '700 ' + fontPx + 'px ' + fontStack;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.strokeText(text, w / 2, h / 2);
        ctx.globalAlpha = 1;
      };

      // Paint liquid up to `fillRatio` of the word's height, with a wavy surface,
      // then mask it to the glyph silhouette.
      const drawLiquid = (fillRatio, ts, amp) => {
        if (!maskCanvas || !layerCanvas || fillRatio <= 0.001) return;
        const lctx = layerCanvas.getContext('2d');
        if (!lctx) return;
        lctx.setTransform(1, 0, 0, 1, 0, 0);
        lctx.clearRect(0, 0, layerCanvas.width, layerCanvas.height);
        const boxH = box.bottom - box.top;
        const surfaceY = box.bottom - boxH * clamp01(fillRatio);
        const t = ts / 1000 * waveSpeed;
        const amplitude = fontPx * 0.035 * waveHeight * amp;
        lctx.fillStyle = liquidColor;
        lctx.beginPath();
        lctx.moveTo(0, layerCanvas.height);
        lctx.lineTo(0, surfaceY);
        const stepPx = 6;
        for (let x = 0; x <= layerCanvas.width; x += stepPx) {
          const y = surfaceY + Math.sin(x * 0.016 + t * 2.1) * amplitude + Math.sin(x * 0.037 - t * 1.4) * amplitude * 0.5;
          lctx.lineTo(x, y);
        }
        lctx.lineTo(layerCanvas.width, layerCanvas.height);
        lctx.closePath();
        lctx.fill();
        lctx.globalCompositeOperation = 'destination-in';
        lctx.drawImage(maskCanvas, 0, 0);
        lctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(layerCanvas, 0, 0, w, h);
      };
      const drawStream = (progress, ts) => {
        const topY = 0;
        const headY = box.top + (box.bottom - box.top) * 0.2;
        const reach = topY + (headY - topY) * easeOut(progress);
        ctx.strokeStyle = streamColor;
        ctx.lineWidth = Math.max(2, fontPx * 0.028);
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.moveTo(w / 2, topY);
        const t = ts / 1000;
        for (let y = topY; y <= reach; y += 8) {
          ctx.lineTo(w / 2 + Math.sin(y * 0.05 + t * 6) * 1.8, y);
        }
        ctx.stroke();
        if (showDroplets) {
          ctx.fillStyle = streamColor;
          for (const d of droplets) {
            const local = (progress * 1.6 + d.delay) % 1;
            const y = topY + local * (headY - topY);
            if (y > reach) continue;
            ctx.globalAlpha = 0.5 * (1 - local);
            ctx.beginPath();
            ctx.arc(w / 2 + d.x + Math.sin(t * 3 + d.delay * 9) * d.sway * 4, y, d.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.globalAlpha = 1;
      };

      // --- the six acts -------------------------------------------------------
      const acts = [{
        name: 'OUTLINE',
        d: 1200,
        level: () => 0,
        draw: p => {
          drawOutline(easeOut(p));
        }
      }, {
        name: 'POUR',
        d: 1300,
        level: () => 0,
        draw: (p, ts) => {
          drawOutline(1);
          drawStream(p, ts);
        }
      }, {
        name: 'FILL',
        d: 2200,
        level: p => easeInOut(p),
        draw: (p, ts) => {
          drawOutline(1);
          drawStream(1, ts);
          drawLiquid(easeInOut(p), ts, 1);
        }
      }, {
        name: 'SLOSH',
        d: 1800,
        level: () => 1,
        draw: (p, ts) => {
          drawOutline(1);
          drawLiquid(1 - Math.sin(p * Math.PI * 2) * 0.03, ts, 1 + Math.sin(p * Math.PI) * 2);
        }
      }, {
        name: 'DRAIN',
        d: 1800,
        level: p => 1 - easeInOut(p),
        draw: (p, ts) => {
          drawOutline(1);
          drawLiquid(1 - easeInOut(p), ts, 1);
        }
      }, {
        name: 'EMPTY',
        d: 1000,
        level: () => 0,
        draw: p => {
          drawOutline(1 - easeOut(p) * 0.65);
        }
      }];
      const total = acts.reduce((s, a) => s + a.d, 0);
      let origin = 0;
      let lastAct = -1;
      let lastLevel = -1;
      const frame = ts => {
        if (!origin) origin = ts;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        let local = prefersReducedMotion ? 4000 : (ts - origin) * speed % total;
        for (let i = 0; i < acts.length; i++) {
          if (local < acts[i].d) {
            const p = local / acts[i].d;
            if (i !== lastAct) {
              lastAct = i;
              setAct({
                index: i,
                total: acts.length,
                name: acts[i].name
              });
            }
            const lv = Math.round(acts[i].level(p) * 100);
            if (lv !== lastLevel) {
              lastLevel = lv;
              setLevel(lv);
            }
            acts[i].draw(p, ts);
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
    }, [text, fontStack, textScale, outlineWidth, speed, waveHeight, waveSpeed, showDroplets, backgroundColor, outlineColor, liquidColor, streamColor, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "story-liquid-fill",
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
    }, 'ACT ' + (act.index + 1) + ' / ' + act.total + ' — ' + act.name), showLevelReadout && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: '24px',
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
    }, 'LEVEL ' + String(level).padStart(3, '0')), showTextInput && /*#__PURE__*/React.createElement("label", {
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