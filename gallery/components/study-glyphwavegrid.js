window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-glyphwavegrid"] = function (React) {
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
   * Source study: S-004 "Eight Animation" (alternative — grid stage)
   * Component Type: Study.GlyphWaveGrid
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Study.GlyphWaveGrid",
    "description": "A wall of one repeated glyph with a wave travelling through it, scaling and turning each cell, and ripples under the pointer",
    "editorElement": {
      "selector": ".study-glyph-wave-grid",
      "displayName": "Glyph Wave Grid",
      "archetype": "container",
      "data": {
        "glyph": {
          "dataType": "text",
          "displayName": "Glyph / Word",
          "defaultValue": "8",
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
          "defaultValue": "GLYPH",
          "group": "Content"
        },
        "inputPlaceholder": {
          "dataType": "text",
          "displayName": "Input Placeholder",
          "defaultValue": "type here",
          "group": "Content"
        },
        "maxLength": {
          "dataType": "number",
          "displayName": "Max Characters",
          "defaultValue": "6",
          "group": "Content"
        },
        "title": {
          "dataType": "text",
          "displayName": "Title",
          "defaultValue": "Glyph Wave Grid",
          "group": "Content"
        },
        "subtitle": {
          "dataType": "text",
          "displayName": "Subtitle",
          "defaultValue": "repetition and interference",
          "group": "Content"
        },
        "showTitle": {
          "dataType": "booleanValue",
          "displayName": "Show Title",
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
          "displayName": "Columns",
          "defaultValue": "14",
          "options": ["6", "10", "14", "20", "28"],
          "group": "Layout"
        },
        "cellScale": {
          "dataType": "select",
          "displayName": "Glyph Fill",
          "defaultValue": "0.7",
          "options": ["0.4", "0.55", "0.7", "0.85", "1"],
          "group": "Layout"
        },
        "waveMode": {
          "dataType": "select",
          "displayName": "Wave Shape",
          "defaultValue": "diagonal",
          "options": ["diagonal", "radial", "horizontal", "vertical", "spiral"],
          "group": "Animation"
        },
        "waveSpeed": {
          "dataType": "select",
          "displayName": "Wave Speed",
          "defaultValue": "1",
          "options": ["0.3", "0.6", "1", "1.8", "2.8"],
          "group": "Animation"
        },
        "waveLength": {
          "dataType": "select",
          "displayName": "Wave Length",
          "defaultValue": "2.4",
          "options": ["1.2", "1.8", "2.4", "3.6", "5"],
          "group": "Animation"
        },
        "scaleAmount": {
          "dataType": "select",
          "displayName": "Scale Response",
          "defaultValue": "0.55",
          "options": ["0", "0.3", "0.55", "0.8", "1"],
          "group": "Animation"
        },
        "rotateAmount": {
          "dataType": "select",
          "displayName": "Rotation Response",
          "defaultValue": "0.35",
          "options": ["0", "0.2", "0.35", "0.7", "1.2"],
          "group": "Animation"
        },
        "fadeAmount": {
          "dataType": "select",
          "displayName": "Fade Response",
          "defaultValue": "0.7",
          "options": ["0", "0.35", "0.7", "1"],
          "group": "Animation"
        },
        "pointerRipple": {
          "dataType": "booleanValue",
          "displayName": "Pointer Ripple",
          "defaultValue": true,
          "group": "Animation"
        },
        "pointerRadius": {
          "dataType": "number",
          "displayName": "Pointer Radius (px)",
          "defaultValue": "180",
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "glyphColor": {
          "dataType": "color",
          "displayName": "Glyph",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "peakColor": {
          "dataType": "color",
          "displayName": "Wave Peak",
          "defaultValue": "#111111",
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
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const maxLength = Math.max(1, parseInt(config?.maxLength || '6', 10));
    const initialGlyph = (config?.glyph || '8').slice(0, maxLength) || '8';
    const [glyphInput, setGlyphInput] = React.useState(initialGlyph);
    React.useEffect(() => {
      setGlyphInput(initialGlyph);
    }, [initialGlyph]);
    const glyph = glyphInput.trim().length ? glyphInput : initialGlyph;
    const showTextInput = config?.showTextInput !== false;
    const inputLabel = config?.inputLabel || 'GLYPH';
    const inputPlaceholder = config?.inputPlaceholder || 'type here';
    const title = config?.title || 'Glyph Wave Grid';
    const subtitle = config?.subtitle || 'repetition and interference';
    const showTitle = config?.showTitle !== false;
    const height = Math.max(240, parseInt(config?.height || '620', 10));
    const fullHeight = config?.fullHeight === true;
    const columns = Math.max(3, parseInt(config?.columns || '14', 10));
    const cellScale = parseFloat(config?.cellScale || '0.7') || 0.7;
    const waveMode = config?.waveMode || 'diagonal';
    const waveSpeed = parseFloat(config?.waveSpeed || '1') || 1;
    const waveLength = parseFloat(config?.waveLength || '2.4') || 2.4;
    const scaleAmount = parseFloat(config?.scaleAmount || '0.55') || 0;
    const rotateAmount = parseFloat(config?.rotateAmount || '0.35') || 0;
    const fadeAmount = parseFloat(config?.fadeAmount || '0.7') || 0;
    const pointerRipple = config?.pointerRipple !== false;
    const pointerRadius = Math.max(0, parseInt(config?.pointerRadius || '180', 10));
    const backgroundColor = config?.backgroundColor || '#eeeeee';
    const glyphColor = config?.glyphColor || '#111111';
    const peakColor = config?.peakColor || '#111111';
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
      let step = 0;
      let cols = 0;
      let rows = 0;
      let ox = 0;
      let oy = 0;
      let metrics = null;
      const pointer = {
        x: -9999,
        y: -9999,
        active: false
      };
      const parseHex = hex => {
        const s = String(hex || '#111111').replace('#', '');
        const f = s.length === 3 ? s.split('').map(c => c + c).join('') : s;
        return [parseInt(f.slice(0, 2), 16) || 0, parseInt(f.slice(2, 4), 16) || 0, parseInt(f.slice(4, 6), 16) || 0];
      };
      const base = parseHex(glyphColor);
      const peak = parseHex(peakColor);
      const measure = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = host.clientWidth || 1;
        h = host.clientHeight || 1;
        canvas.width = Math.max(1, Math.round(w * dpr));
        canvas.height = Math.max(1, Math.round(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cols = Math.max(2, Math.round(w <= 640 ? columns * 0.6 : columns));
        step = w / cols;
        rows = Math.ceil(h / step) + 1;
        ox = step / 2;
        oy = (h - (rows - 1) * step) / 2;
        metrics = null;
      };
      const ensureMetrics = () => {
        if (metrics) return;
        ctx.font = '100px ' + fontStack;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        const m = ctx.measureText(glyph);
        const asc = m.actualBoundingBoxAscent || 72;
        const desc = m.actualBoundingBoxDescent || 0;
        metrics = {
          h: (asc + desc) / 100,
          cy: (asc - desc) / 200,
          w: (m.width || 60) / 100
        };
      };

      // The wave value at a cell, 0..1, per the selected shape.
      const waveAt = (cx, cy, t) => {
        const nx = cx / Math.max(w, 1);
        const ny = cy / Math.max(h, 1);
        let phase;
        if (waveMode === 'radial') {
          phase = Math.hypot(nx - 0.5, ny - 0.5) * 2;
        } else if (waveMode === 'horizontal') {
          phase = nx;
        } else if (waveMode === 'vertical') {
          phase = ny;
        } else if (waveMode === 'spiral') {
          const a = Math.atan2(ny - 0.5, nx - 0.5) / (Math.PI * 2) + 0.5;
          phase = a + Math.hypot(nx - 0.5, ny - 0.5) * 1.4;
        } else {
          phase = (nx + ny) * 0.5;
        }
        return (Math.sin((phase * waveLength - t * waveSpeed) * Math.PI * 2) + 1) / 2;
      };
      const onPointerMove = e => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
        pointer.active = true;
      };
      const onPointerLeave = () => {
        pointer.active = false;
        pointer.x = -9999;
        pointer.y = -9999;
      };
      measure();
      let ro = null;
      if (typeof ResizeObserver !== 'undefined') {
        ro = new ResizeObserver(measure);
        ro.observe(host);
      } else {
        window.addEventListener('resize', measure);
      }
      canvas.addEventListener('pointermove', onPointerMove);
      canvas.addEventListener('pointerleave', onPointerLeave);
      const frame = ts => {
        ensureMetrics();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        const t = prefersReducedMotion ? 0.25 : ts / 1000;
        const cellSize = step * cellScale;
        let px = cellSize / (metrics.h || 1);
        const runWidth = px * metrics.w;
        if (runWidth > step * 0.95) px *= step * 0.95 / runWidth;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const cx = ox + c * step;
            const cy = oy + r * step;
            let v = waveAt(cx, cy, t);

            // A pointer ripple adds a local bump on top of the travelling wave.
            if (pointerRipple && pointer.active && pointerRadius > 0) {
              const d = Math.hypot(cx - pointer.x, cy - pointer.y);
              if (d < pointerRadius) {
                const fall = 1 - d / pointerRadius;
                v = Math.min(1, v + fall * fall * 0.9);
              }
            }
            const scale = 1 + (v - 0.5) * 2 * scaleAmount * 0.5;
            const rot = (v - 0.5) * 2 * rotateAmount;
            const alpha = fadeAmount > 0 ? 0.18 + (1 - fadeAmount) * 0.4 + v * fadeAmount * 0.82 : 1;
            const cr = Math.round(base[0] + (peak[0] - base[0]) * v);
            const cg = Math.round(base[1] + (peak[1] - base[1]) * v);
            const cb = Math.round(base[2] + (peak[2] - base[2]) * v);
            const size = px * scale;
            if (size < 1 || alpha < 0.01) continue;
            ctx.save();
            ctx.globalAlpha = Math.min(1, alpha);
            ctx.translate(cx, cy);
            if (rot) ctx.rotate(rot);
            ctx.font = size + 'px ' + fontStack;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.fillStyle = 'rgb(' + cr + ',' + cg + ',' + cb + ')';
            ctx.fillText(glyph, 0, size * metrics.cy);
            ctx.restore();
          }
        }
        ctx.globalAlpha = 1;
        rafRef.current = requestAnimationFrame(frame);
      };
      const start = () => {
        rafRef.current = requestAnimationFrame(frame);
      };
      if (document.fonts && document.fonts.load) {
        document.fonts.load('100px ' + fontStack, glyph).then(start, start);
      } else {
        start();
      }
      return () => {
        cancelAnimationFrame(rafRef.current);
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerleave', onPointerLeave);
        if (ro) ro.disconnect();else window.removeEventListener('resize', measure);
      };
    }, [glyph, fontStack, columns, cellScale, waveMode, waveSpeed, waveLength, scaleAmount, rotateAmount, fadeAmount, pointerRipple, pointerRadius, backgroundColor, glyphColor, peakColor, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "study-glyph-wave-grid",
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
      "aria-label": title,
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        touchAction: 'none'
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
    }, subtitle)), showTextInput && /*#__PURE__*/React.createElement("label", {
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
        opacity: 0.55,
        whiteSpace: 'nowrap'
      }
    }, inputLabel), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: glyphInput,
      maxLength: maxLength,
      placeholder: inputPlaceholder,
      onChange: e => setGlyphInput(e.target.value),
      "aria-label": inputLabel,
      style: {
        width: Math.min(200, Math.max(72, maxLength * 15)) + 'px',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        color: titleColor,
        fontFamily: sans,
        fontSize: '13px',
        letterSpacing: '0.02em',
        padding: 0
      }
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};