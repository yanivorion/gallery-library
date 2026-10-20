window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-glyphscattergather"] = function (React) {
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
   * Source study: S-004 "Eight Animation" / S-005 "Five Into One" (alternative)
   * Component Type: Study.GlyphScatterGather
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Study.GlyphScatterGather",
    "description": "Live type field: particles scatter and gather into whatever word is typed, scattering again on every edit and parting around the pointer",
    "editorElement": {
      "selector": ".study-glyph-scatter-gather",
      "displayName": "Glyph Scatter Gather",
      "archetype": "container",
      "data": {
        "text": {
          "dataType": "text",
          "displayName": "Text",
          "defaultValue": "EIGHT",
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
        "inputPlaceholder": {
          "dataType": "text",
          "displayName": "Input Placeholder",
          "defaultValue": "type a word",
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
          "defaultValue": "Scatter Gather",
          "group": "Content"
        },
        "subtitle": {
          "dataType": "text",
          "displayName": "Subtitle",
          "defaultValue": "particles find the word",
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
        "density": {
          "dataType": "select",
          "displayName": "Particle Density",
          "defaultValue": "5",
          "options": ["3", "4", "5", "7", "9"],
          "group": "Layout"
        },
        "textScale": {
          "dataType": "select",
          "displayName": "Text Size",
          "defaultValue": "0.72",
          "options": ["0.45", "0.6", "0.72", "0.85", "0.95"],
          "group": "Layout"
        },
        "particleShape": {
          "dataType": "select",
          "displayName": "Particle Shape",
          "defaultValue": "dot",
          "options": ["dot", "square", "ring", "cross"],
          "group": "Layout"
        },
        "particleSize": {
          "dataType": "select",
          "displayName": "Particle Size",
          "defaultValue": "1.6",
          "options": ["1", "1.6", "2.4", "3.4"],
          "group": "Layout"
        },
        "gatherEase": {
          "dataType": "select",
          "displayName": "Gather Speed",
          "defaultValue": "0.06",
          "options": ["0.02", "0.04", "0.06", "0.1", "0.16"],
          "group": "Animation"
        },
        "jitter": {
          "dataType": "select",
          "displayName": "Idle Jitter",
          "defaultValue": "0.5",
          "options": ["0", "0.25", "0.5", "1", "1.8"],
          "group": "Animation"
        },
        "pointerRadius": {
          "dataType": "number",
          "displayName": "Pointer Push Radius (px)",
          "defaultValue": "120",
          "group": "Animation"
        },
        "pointerForce": {
          "dataType": "select",
          "displayName": "Pointer Push Force",
          "defaultValue": "1",
          "options": ["0", "0.5", "1", "2", "3.5"],
          "group": "Animation"
        },
        "autoCycle": {
          "dataType": "booleanValue",
          "displayName": "Auto Re-scatter",
          "defaultValue": false,
          "group": "Animation"
        },
        "autoInterval": {
          "dataType": "number",
          "displayName": "Re-scatter Every (ms)",
          "defaultValue": "5000",
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
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent (pointer area)",
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
    const scatterRef = React.useRef(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const maxLength = Math.max(1, parseInt(config?.maxLength || '14', 10));
    const initialText = (config?.text || 'EIGHT').slice(0, maxLength) || 'EIGHT';
    const [textInput, setTextInput] = React.useState(initialText);
    React.useEffect(() => {
      setTextInput(initialText);
    }, [initialText]);
    const text = textInput.trim().length ? textInput : initialText;
    const showTextInput = config?.showTextInput !== false;
    const inputLabel = config?.inputLabel || 'TEXT';
    const inputPlaceholder = config?.inputPlaceholder || 'type a word';
    const title = config?.title || 'Scatter Gather';
    const subtitle = config?.subtitle || 'particles find the word';
    const showTitle = config?.showTitle !== false;
    const height = Math.max(240, parseInt(config?.height || '620', 10));
    const fullHeight = config?.fullHeight === true;
    const density = Math.max(2, parseInt(config?.density || '5', 10));
    const textScale = parseFloat(config?.textScale || '0.72') || 0.72;
    const particleShape = config?.particleShape || 'dot';
    const particleSize = parseFloat(config?.particleSize || '1.6') || 1.6;
    const gatherEase = parseFloat(config?.gatherEase || '0.06') || 0.06;
    const jitter = parseFloat(config?.jitter || '0.5') || 0;
    const pointerRadius = Math.max(0, parseInt(config?.pointerRadius || '120', 10));
    const pointerForce = parseFloat(config?.pointerForce || '1') || 0;
    const autoCycle = config?.autoCycle === true;
    const autoInterval = Math.max(800, parseInt(config?.autoInterval || '5000', 10));
    const backgroundColor = config?.backgroundColor || '#000000';
    const particleColor = config?.particleColor || '#eeeeee';
    const accentColor = config?.accentColor || '#eeeeee';
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
      let dpr = 1;
      let particles = [];
      const pointer = {
        x: -9999,
        y: -9999,
        active: false
      };

      // Rasterise the current text offscreen, then take every Nth lit pixel as a
      // target. This is what lets any typed word become the destination shape.
      const buildTargets = () => {
        if (w < 4 || h < 4) return [];
        const off = document.createElement('canvas');
        off.width = Math.max(4, Math.round(w));
        off.height = Math.max(4, Math.round(h));
        const octx = off.getContext('2d');
        if (!octx) return [];
        let fontPx = Math.round(h * 0.42);
        octx.textAlign = 'center';
        octx.textBaseline = 'middle';
        octx.font = '700 ' + fontPx + 'px ' + fontStack;
        const target = w * textScale;
        const measured = octx.measureText(text).width || 1;
        fontPx = Math.max(10, Math.min(fontPx * (target / measured), h * 0.6));
        octx.font = '700 ' + Math.round(fontPx) + 'px ' + fontStack;
        octx.fillStyle = '#ffffff';
        octx.fillText(text, off.width / 2, off.height / 2);
        const img = octx.getImageData(0, 0, off.width, off.height).data;
        const pts = [];
        for (let y = 0; y < off.height; y += density) {
          for (let x = 0; x < off.width; x += density) {
            if (img[(y * off.width + x) * 4 + 3] > 128) pts.push([x, y]);
          }
        }
        return pts;
      };
      const scatter = () => {
        for (const p of particles) {
          const a = Math.random() * Math.PI * 2;
          const r = Math.max(w, h) * (0.25 + Math.random() * 0.55);
          p.x = w / 2 + Math.cos(a) * r;
          p.y = h / 2 + Math.sin(a) * r;
          p.vx = 0;
          p.vy = 0;
        }
      };
      scatterRef.current = scatter;
      const rebuild = () => {
        const pts = buildTargets();
        const next = [];
        for (let i = 0; i < pts.length; i++) {
          const prev = particles[i];
          next.push({
            tx: pts[i][0],
            ty: pts[i][1],
            x: prev ? prev.x : w / 2 + (Math.random() - 0.5) * w,
            y: prev ? prev.y : h / 2 + (Math.random() - 0.5) * h,
            vx: 0,
            vy: 0,
            seed: Math.random() * 1000,
            lag: 0.6 + Math.random() * 0.8
          });
        }
        particles = next;
        if (!prefersReducedMotion) scatter();
      };
      const measure = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = host.clientWidth || 1;
        h = host.clientHeight || 1;
        canvas.width = Math.max(1, Math.round(w * dpr));
        canvas.height = Math.max(1, Math.round(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        rebuild();
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
      const drawParticle = (x, y, size, alpha) => {
        ctx.globalAlpha = alpha;
        if (particleShape === 'square') {
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        } else if (particleShape === 'ring') {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (particleShape === 'cross') {
          ctx.beginPath();
          ctx.moveTo(x - size, y);
          ctx.lineTo(x + size, y);
          ctx.moveTo(x, y - size);
          ctx.lineTo(x, y + size);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
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
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = particleColor;
        ctx.strokeStyle = particleColor;
        ctx.lineWidth = Math.max(0.6, particleSize * 0.5);
        const t = ts / 1000;
        const r2 = pointerRadius * pointerRadius;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const ease = gatherEase * p.lag;
          let ax = (p.tx - p.x) * ease;
          let ay = (p.ty - p.y) * ease;
          if (pointer.active && pointerForce > 0) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < r2 && d2 > 0.01) {
              const d = Math.sqrt(d2);
              const push = (1 - d / pointerRadius) * pointerForce * 4;
              ax += dx / d * push;
              ay += dy / d * push;
            }
          }
          p.vx = (p.vx + ax) * 0.82;
          p.vy = (p.vy + ay) * 0.82;
          p.x += p.vx;
          p.y += p.vy;
          let jx = 0;
          let jy = 0;
          if (jitter > 0 && !prefersReducedMotion) {
            jx = Math.sin(t * 1.4 + p.seed) * jitter;
            jy = Math.cos(t * 1.7 + p.seed * 1.3) * jitter;
          }
          const dist = Math.abs(p.tx - p.x) + Math.abs(p.ty - p.y);
          const settled = 1 - Math.min(1, dist / 220);
          drawParticle(p.x + jx, p.y + jy, particleSize, 0.25 + settled * 0.75);
        }
        ctx.globalAlpha = 1;
        rafRef.current = requestAnimationFrame(frame);
      };
      rafRef.current = requestAnimationFrame(frame);
      return () => {
        cancelAnimationFrame(rafRef.current);
        scatterRef.current = null;
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerleave', onPointerLeave);
        if (ro) ro.disconnect();else window.removeEventListener('resize', measure);
      };
    }, [text, fontStack, density, textScale, particleShape, particleSize, gatherEase, jitter, pointerRadius, pointerForce, backgroundColor, particleColor, prefersReducedMotion]);
    React.useEffect(() => {
      if (!autoCycle) return undefined;
      const id = setInterval(() => {
        if (scatterRef.current) scatterRef.current();
      }, autoInterval);
      return () => clearInterval(id);
    }, [autoCycle, autoInterval]);
    return /*#__PURE__*/React.createElement("div", {
      className: "study-glyph-scatter-gather",
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
    }, subtitle)), showTextInput && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: '24px',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
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
      value: textInput,
      maxLength: maxLength,
      placeholder: inputPlaceholder,
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
        letterSpacing: '0.02em',
        padding: 0
      }
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => scatterRef.current && scatterRef.current(),
      style: {
        padding: '8px 14px',
        borderRadius: '999px',
        border: '1px solid ' + titleColor + '33',
        background: 'transparent',
        color: titleColor,
        opacity: 0.7,
        fontFamily: sans,
        fontSize: '10px',
        letterSpacing: '0.08em',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }
    }, "SCATTER")));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};