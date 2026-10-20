window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-story-gridsweep"] = function (React) {
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
   * Component Type: Story.GridSweep
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Story.GridSweep",
    "description": "Five-act shutter sequence: a tile grid covers the stage, a sweep flips each tile open to uncover the word beneath, it holds, then the tiles close again",
    "editorElement": {
      "selector": ".story-grid-sweep",
      "displayName": "Story — Grid Sweep",
      "archetype": "container",
      "data": {
        "text": {
          "dataType": "text",
          "displayName": "Text",
          "defaultValue": "REVEAL",
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
          "defaultValue": "Grid Sweep",
          "group": "Content"
        },
        "subtitle": {
          "dataType": "text",
          "displayName": "Subtitle",
          "defaultValue": "five acts",
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
        "columns": {
          "dataType": "select",
          "displayName": "Tile Columns",
          "defaultValue": "18",
          "options": ["8", "12", "18", "26", "36"],
          "group": "Layout"
        },
        "textScale": {
          "dataType": "select",
          "displayName": "Text Size",
          "defaultValue": "0.8",
          "options": ["0.5", "0.65", "0.8", "0.92"],
          "group": "Layout"
        },
        "tileGap": {
          "dataType": "select",
          "displayName": "Tile Gap (px)",
          "defaultValue": "1",
          "options": ["0", "1", "2", "4"],
          "group": "Layout"
        },
        "sweepMode": {
          "dataType": "select",
          "displayName": "Sweep Direction",
          "defaultValue": "diagonal",
          "options": ["diagonal", "left", "right", "radial", "random"],
          "group": "Animation"
        },
        "flipAxis": {
          "dataType": "select",
          "displayName": "Flip Axis",
          "defaultValue": "vertical",
          "options": ["vertical", "horizontal", "scale"],
          "group": "Animation"
        },
        "speed": {
          "dataType": "select",
          "displayName": "Playback Speed",
          "defaultValue": "1",
          "options": ["0.5", "0.75", "1", "1.5", "2"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "tileColor": {
          "dataType": "color",
          "displayName": "Tile",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "tileEdgeColor": {
          "dataType": "color",
          "displayName": "Tile Edge (flipping)",
          "defaultValue": "#666666",
          "group": "Colors"
        },
        "textColorMain": {
          "dataType": "color",
          "displayName": "Revealed Text",
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
      total: 5,
      name: 'COVER'
    });
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const maxLength = Math.max(1, parseInt(config?.maxLength || '12', 10));
    const initialText = (config?.text || 'REVEAL').slice(0, maxLength) || 'REVEAL';
    const [textInput, setTextInput] = React.useState(initialText);
    React.useEffect(() => {
      setTextInput(initialText);
    }, [initialText]);
    const text = textInput.trim().length ? textInput : initialText;
    const showTextInput = config?.showTextInput !== false;
    const inputLabel = config?.inputLabel || 'TEXT';
    const title = config?.title || 'Grid Sweep';
    const subtitle = config?.subtitle || 'five acts';
    const showTitle = config?.showTitle !== false;
    const showActReadout = config?.showActReadout !== false;
    const height = Math.max(240, parseInt(config?.height || '620', 10));
    const fullHeight = config?.fullHeight === true;
    const columns = Math.max(4, parseInt(config?.columns || '18', 10));
    const textScale = parseFloat(config?.textScale || '0.8') || 0.8;
    const tileGap = Math.max(0, parseInt(config?.tileGap || '1', 10));
    const sweepMode = config?.sweepMode || 'diagonal';
    const flipAxis = config?.flipAxis || 'vertical';
    const speed = parseFloat(config?.speed || '1') || 1;
    const backgroundColor = config?.backgroundColor || '#eeeeee';
    const tileColor = config?.tileColor || '#000000';
    const tileEdgeColor = config?.tileEdgeColor || '#666666';
    const textColorMain = config?.textColorMain || '#000000';
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
      let cols = columns;
      let rows = 1;
      let tile = 10;
      let wordCanvas = null;
      let order = [];
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
      const easeInOut = v => v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;
      const easeOut = v => 1 - Math.pow(1 - v, 3);
      const build = () => {
        if (w < 4 || h < 4) return;
        cols = Math.max(3, Math.round(w <= 640 ? columns * 0.6 : columns));
        tile = w / cols;
        rows = Math.ceil(h / tile);
        wordCanvas = document.createElement('canvas');
        wordCanvas.width = Math.round(w);
        wordCanvas.height = Math.round(h);
        const wctx = wordCanvas.getContext('2d');
        if (wctx) {
          let fontPx = Math.round(h * 0.42);
          wctx.textAlign = 'center';
          wctx.textBaseline = 'middle';
          wctx.font = '700 ' + fontPx + 'px ' + fontStack;
          const run = wctx.measureText(text).width || 1;
          fontPx = Math.max(10, Math.min(fontPx * (w * textScale / run), h * 0.6));
          wctx.font = '700 ' + Math.round(fontPx) + 'px ' + fontStack;
          wctx.fillStyle = textColorMain;
          wctx.fillText(text, w / 2, h / 2);
        }

        // Each tile gets a 0..1 position in the sweep, by the chosen direction.
        order = [];
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            let k;
            if (sweepMode === 'left') k = c / Math.max(1, cols - 1);else if (sweepMode === 'right') k = 1 - c / Math.max(1, cols - 1);else if (sweepMode === 'radial') {
              k = Math.hypot(c / cols - 0.5, r / Math.max(1, rows) - 0.5) * 1.6;
            } else if (sweepMode === 'random') k = Math.random();else k = (c / Math.max(1, cols - 1) + r / Math.max(1, rows - 1)) / 2;
            order.push(clamp01(k));
          }
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

      // openness 0 = tile fully covers its cell; 1 = cell fully uncovered.
      const drawTiles = (opennessFor, coverAlpha) => {
        if (wordCanvas) ctx.drawImage(wordCanvas, 0, 0, w, h);
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            const open = clamp01(opennessFor(order[i], i));
            if (open >= 1) continue;
            const x = c * tile;
            const y = r * tile;
            const tw = tile - tileGap;
            const th = tile - tileGap;
            const shut = 1 - open;
            ctx.globalAlpha = coverAlpha;
            // Mid-flip the tile reads as an edge, so it lightens as it turns.
            ctx.fillStyle = open > 0.04 && open < 0.96 ? tileEdgeColor : tileColor;
            if (flipAxis === 'horizontal') {
              const dw = tw * shut;
              ctx.fillRect(x + (tw - dw) / 2, y, dw, th);
            } else if (flipAxis === 'scale') {
              const dw = tw * shut;
              const dh = th * shut;
              ctx.fillRect(x + (tw - dw) / 2, y + (th - dh) / 2, dw, dh);
            } else {
              const dh = th * shut;
              ctx.fillRect(x, y + (th - dh) / 2, tw, dh);
            }
          }
        }
        ctx.globalAlpha = 1;
      };

      // --- the five acts ------------------------------------------------------
      const acts = [{
        name: 'COVER',
        d: 1100,
        draw: p => {
          drawTiles(() => 0, easeOut(p));
        }
      }, {
        name: 'SWEEP',
        d: 1900,
        draw: p => {
          const front = easeInOut(p) * 1.25 - 0.12;
          drawTiles(k => (front - k) / 0.14, 1);
        }
      }, {
        name: 'REVEAL',
        d: 1300,
        draw: () => {
          drawTiles(() => 1, 1);
        }
      }, {
        name: 'HOLD',
        d: 1000,
        draw: () => {
          drawTiles(() => 1, 1);
        }
      }, {
        name: 'CLOSE',
        d: 1700,
        draw: p => {
          const front = easeInOut(p) * 1.25 - 0.12;
          drawTiles(k => 1 - (front - (1 - k)) / 0.14, 1);
        }
      }];
      const total = acts.reduce((s, a) => s + a.d, 0);
      let origin = 0;
      let lastAct = -1;
      const frame = ts => {
        if (!origin) origin = ts;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        let local = prefersReducedMotion ? 3600 : (ts - origin) * speed % total;
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
    }, [text, fontStack, columns, textScale, tileGap, sweepMode, flipAxis, speed, backgroundColor, tileColor, tileEdgeColor, textColorMain, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "story-grid-sweep",
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
        pointerEvents: 'none',
        mixBlendMode: 'difference'
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
        opacity: 0.75,
        mixBlendMode: 'difference',
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
        background: backgroundColor + 'ee',
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