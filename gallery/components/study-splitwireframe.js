window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-splitwireframe"] = function (React) {
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
   * Source study: S-003 "Realtime Split Wireframe"
   * Component Type: Study.SplitWireframe
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Study.SplitWireframe",
    "description": "One rotating mesh drawn twice — wireframe on one side, shaded on the other — divided by a draggable seam with live percentage counters",
    "editorElement": {
      "selector": ".study-split-wireframe",
      "displayName": "Split Wireframe",
      "archetype": "container",
      "data": {
        "title": {
          "dataType": "text",
          "displayName": "Title",
          "defaultValue": "Realtime Split Wireframe",
          "group": "Content"
        },
        "subtitle": {
          "dataType": "text",
          "displayName": "Subtitle",
          "defaultValue": "drag the seam",
          "group": "Content"
        },
        "showTitle": {
          "dataType": "booleanValue",
          "displayName": "Show Title",
          "defaultValue": true,
          "group": "Content"
        },
        "leftLabel": {
          "dataType": "text",
          "displayName": "Left Label",
          "defaultValue": "WIRE",
          "group": "Content"
        },
        "rightLabel": {
          "dataType": "text",
          "displayName": "Right Label",
          "defaultValue": "SHADED",
          "group": "Content"
        },
        "showControl": {
          "dataType": "booleanValue",
          "displayName": "Show Slider Control",
          "defaultValue": true,
          "group": "Content"
        },
        "height": {
          "dataType": "number",
          "displayName": "Stage Height (px)",
          "defaultValue": "640",
          "group": "Layout"
        },
        "fullHeight": {
          "dataType": "booleanValue",
          "displayName": "Full Viewport Height",
          "defaultValue": false,
          "group": "Layout"
        },
        "shape": {
          "dataType": "select",
          "displayName": "Mesh",
          "defaultValue": "torus",
          "options": ["torus", "sphere", "knot", "tube"],
          "group": "Mesh"
        },
        "segments": {
          "dataType": "select",
          "displayName": "Ring Segments",
          "defaultValue": "48",
          "options": ["20", "32", "48", "72"],
          "group": "Mesh"
        },
        "sides": {
          "dataType": "select",
          "displayName": "Tube Sides",
          "defaultValue": "18",
          "options": ["8", "12", "18", "26"],
          "group": "Mesh"
        },
        "meshScale": {
          "dataType": "select",
          "displayName": "Mesh Scale",
          "defaultValue": "1",
          "options": ["0.6", "0.8", "1", "1.3", "1.6"],
          "group": "Mesh"
        },
        "splitStart": {
          "dataType": "number",
          "displayName": "Start Split (%)",
          "defaultValue": "50",
          "group": "Mesh"
        },
        "spinX": {
          "dataType": "select",
          "displayName": "Spin X",
          "defaultValue": "0.18",
          "options": ["0", "0.1", "0.18", "0.35", "0.6"],
          "group": "Animation"
        },
        "spinY": {
          "dataType": "select",
          "displayName": "Spin Y",
          "defaultValue": "0.3",
          "options": ["0", "0.15", "0.3", "0.5", "0.9"],
          "group": "Animation"
        },
        "pointerParallax": {
          "dataType": "booleanValue",
          "displayName": "Pointer Parallax",
          "defaultValue": true,
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "wireColor": {
          "dataType": "color",
          "displayName": "Wireframe",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "shadeLight": {
          "dataType": "color",
          "displayName": "Shaded Highlight",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "shadeDark": {
          "dataType": "color",
          "displayName": "Shaded Shadow",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "seamColor": {
          "dataType": "color",
          "displayName": "Seam Line",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text",
          "defaultValue": "#eeeeee",
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
    const splitRef = React.useRef(0.5);
    const draggingRef = React.useRef(false);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const title = config?.title || 'Realtime Split Wireframe';
    const subtitle = config?.subtitle || 'drag the seam';
    const showTitle = config?.showTitle !== false;
    const leftLabel = config?.leftLabel || 'WIRE';
    const rightLabel = config?.rightLabel || 'SHADED';
    const showControl = config?.showControl !== false;
    const height = Math.max(240, parseInt(config?.height || '640', 10));
    const fullHeight = config?.fullHeight === true;
    const shape = config?.shape || 'torus';
    const segments = Math.max(8, parseInt(config?.segments || '48', 10));
    const sides = Math.max(4, parseInt(config?.sides || '18', 10));
    const meshScale = parseFloat(config?.meshScale || '1') || 1;
    const splitStart = Math.min(100, Math.max(0, parseInt(config?.splitStart || '50', 10)));
    const spinX = parseFloat(config?.spinX || '0.18') || 0;
    const spinY = parseFloat(config?.spinY || '0.3') || 0;
    const pointerParallax = config?.pointerParallax !== false;
    const backgroundColor = config?.backgroundColor || '#000000';
    const wireColor = config?.wireColor || '#eeeeee';
    const shadeLight = config?.shadeLight || '#eeeeee';
    const shadeDark = config?.shadeDark || '#222222';
    const seamColor = config?.seamColor || '#eeeeee';
    const textColor = config?.textColor || '#eeeeee';
    const sans = '"PP Neue Montreal", "Helvetica Neue", Inter, system-ui, -apple-system, sans-serif';
    const [split, setSplit] = React.useState(splitStart / 100);
    React.useEffect(() => {
      splitRef.current = split;
    }, [split]);
    React.useEffect(() => {
      setSplit(splitStart / 100);
    }, [splitStart]);
    React.useEffect(() => {
      const host = hostRef.current;
      const canvas = canvasRef.current;
      if (!host || !canvas) return undefined;
      const ctx = canvas.getContext('2d');
      if (!ctx) return undefined;
      let w = 0;
      let h = 0;
      const parallax = {
        x: 0,
        y: 0,
        tx: 0,
        ty: 0
      };
      const parseHex = hex => {
        const s = String(hex || '#ffffff').replace('#', '');
        const f = s.length === 3 ? s.split('').map(c => c + c).join('') : s;
        return [parseInt(f.slice(0, 2), 16) || 0, parseInt(f.slice(2, 4), 16) || 0, parseInt(f.slice(4, 6), 16) || 0];
      };
      const lightRGB = parseHex(shadeLight);
      const darkRGB = parseHex(shadeDark);

      // --- mesh ---------------------------------------------------------------
      // A parametric tube swept along a curve; the curve defines the shape.
      const buildMesh = () => {
        const verts = [];
        const quads = [];
        const curve = u => {
          const a = u * Math.PI * 2;
          if (shape === 'sphere') return [Math.cos(a) * 0.0001, Math.sin(a) * 0.0001, 0];
          if (shape === 'knot') {
            const p = 2;
            const q = 3;
            const r = 0.6 + 0.3 * Math.cos(q * a);
            return [r * Math.cos(p * a), r * Math.sin(p * a), 0.32 * Math.sin(q * a)];
          }
          if (shape === 'tube') return [Math.cos(a), Math.sin(a) * 0.35, Math.sin(a * 2) * 0.3];
          return [Math.cos(a), Math.sin(a), 0];
        };
        if (shape === 'sphere') {
          const rings = segments;
          const segs = sides * 2;
          for (let i = 0; i <= rings; i++) {
            const v = i / rings * Math.PI;
            for (let j = 0; j <= segs; j++) {
              const u = j / segs * Math.PI * 2;
              verts.push([Math.sin(v) * Math.cos(u), Math.cos(v), Math.sin(v) * Math.sin(u)]);
            }
          }
          for (let i = 0; i < rings; i++) {
            for (let j = 0; j < segs; j++) {
              const a = i * (segs + 1) + j;
              quads.push([a, a + 1, a + segs + 2, a + segs + 1]);
            }
          }
          return {
            verts,
            quads
          };
        }
        const tubeR = shape === 'knot' ? 0.18 : 0.34;
        for (let i = 0; i <= segments; i++) {
          const u = i / segments;
          const c = curve(u);
          const cNext = curve(u + 0.001);
          let tx = cNext[0] - c[0];
          let ty = cNext[1] - c[1];
          let tz = cNext[2] - c[2];
          const tl = Math.hypot(tx, ty, tz) || 1;
          tx /= tl;
          ty /= tl;
          tz /= tl;
          // Any vector not parallel to the tangent works as a reference up.
          let ux = 0;
          let uy = 0;
          let uz = 1;
          if (Math.abs(tz) > 0.9) {
            ux = 1;
            uz = 0;
          }
          let nx = ty * uz - tz * uy;
          let ny = tz * ux - tx * uz;
          let nz = tx * uy - ty * ux;
          const nl = Math.hypot(nx, ny, nz) || 1;
          nx /= nl;
          ny /= nl;
          nz /= nl;
          const bx = ty * nz - tz * ny;
          const by = tz * nx - tx * nz;
          const bz = tx * ny - ty * nx;
          for (let j = 0; j <= sides; j++) {
            const a = j / sides * Math.PI * 2;
            const ca = Math.cos(a) * tubeR;
            const sa = Math.sin(a) * tubeR;
            verts.push([c[0] + nx * ca + bx * sa, c[1] + ny * ca + by * sa, c[2] + nz * ca + bz * sa]);
          }
        }
        for (let i = 0; i < segments; i++) {
          for (let j = 0; j < sides; j++) {
            const a = i * (sides + 1) + j;
            quads.push([a, a + 1, a + sides + 2, a + sides + 1]);
          }
        }
        return {
          verts,
          quads
        };
      };
      let mesh = buildMesh();
      const measure = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = host.clientWidth || 1;
        h = host.clientHeight || 1;
        canvas.width = Math.max(1, Math.round(w * dpr));
        canvas.height = Math.max(1, Math.round(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      const onPointerMove = e => {
        if (!pointerParallax) return;
        const rect = canvas.getBoundingClientRect();
        parallax.tx = ((e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
        parallax.ty = ((e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
      };
      const onPointerLeave = () => {
        parallax.tx = 0;
        parallax.ty = 0;
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
      const projected = [];
      const frame = ts => {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        const t = prefersReducedMotion ? 1.2 : ts / 1000;
        parallax.x += (parallax.tx - parallax.x) * 0.06;
        parallax.y += (parallax.ty - parallax.y) * 0.06;
        const rx = t * spinX + parallax.y * 0.4;
        const ry = t * spinY + parallax.x * 0.5;
        const cosX = Math.cos(rx);
        const sinX = Math.sin(rx);
        const cosY = Math.cos(ry);
        const sinY = Math.sin(ry);
        const scale = Math.min(w, h) * 0.34 * meshScale;
        const cx = w / 2;
        const cy = h / 2;
        const camZ = 3.4;
        projected.length = 0;
        for (let i = 0; i < mesh.verts.length; i++) {
          const v = mesh.verts[i];
          // Rotate Y then X, then project with a simple perspective divide.
          const x1 = v[0] * cosY + v[2] * sinY;
          const z1 = -v[0] * sinY + v[2] * cosY;
          const y2 = v[1] * cosX - z1 * sinX;
          const z2 = v[1] * sinX + z1 * cosX;
          const depth = camZ + z2;
          const k = camZ / (depth || 0.001);
          projected.push([cx + x1 * scale * k, cy + y2 * scale * k, z2]);
        }
        const splitX = splitRef.current * w;

        // --- shaded half ------------------------------------------------------
        const faces = [];
        for (let i = 0; i < mesh.quads.length; i++) {
          const q = mesh.quads[i];
          const a = projected[q[0]];
          const b = projected[q[1]];
          const c = projected[q[2]];
          const d = projected[q[3]];
          if (!a || !b || !c || !d) continue;
          // Screen-space winding gives a cheap backface test.
          const area = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
          if (area <= 0) continue;
          faces.push({
            a,
            b,
            c,
            d,
            z: (a[2] + b[2] + c[2] + d[2]) / 4
          });
        }
        faces.sort((m, n) => n.z - m.z);
        ctx.save();
        ctx.beginPath();
        ctx.rect(splitX, 0, Math.max(0, w - splitX), h);
        ctx.clip();
        for (let i = 0; i < faces.length; i++) {
          const f = faces[i];
          const lit = Math.min(1, Math.max(0, (1.6 - f.z) / 2.6));
          const r = Math.round(darkRGB[0] + (lightRGB[0] - darkRGB[0]) * lit);
          const g = Math.round(darkRGB[1] + (lightRGB[1] - darkRGB[1]) * lit);
          const bl = Math.round(darkRGB[2] + (lightRGB[2] - darkRGB[2]) * lit);
          ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + bl + ')';
          ctx.beginPath();
          ctx.moveTo(f.a[0], f.a[1]);
          ctx.lineTo(f.b[0], f.b[1]);
          ctx.lineTo(f.c[0], f.c[1]);
          ctx.lineTo(f.d[0], f.d[1]);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();

        // --- wireframe half ---------------------------------------------------
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, Math.max(0, splitX), h);
        ctx.clip();
        ctx.strokeStyle = wireColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        for (let i = 0; i < mesh.quads.length; i++) {
          const q = mesh.quads[i];
          const a = projected[q[0]];
          const b = projected[q[1]];
          const c = projected[q[3]];
          if (!a || !b || !c) continue;
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(b[0], b[1]);
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(c[0], c[1]);
        }
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 1;

        // --- seam -------------------------------------------------------------
        if (splitX > 0 && splitX < w) {
          ctx.fillStyle = seamColor;
          ctx.globalAlpha = draggingRef.current ? 1 : 0.55;
          ctx.fillRect(Math.round(splitX), 0, 1, h);
          ctx.globalAlpha = 1;
        }
        rafRef.current = requestAnimationFrame(frame);
      };
      rafRef.current = requestAnimationFrame(frame);
      return () => {
        cancelAnimationFrame(rafRef.current);
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerleave', onPointerLeave);
        if (ro) ro.disconnect();else window.removeEventListener('resize', measure);
      };
    }, [shape, segments, sides, meshScale, spinX, spinY, pointerParallax, backgroundColor, wireColor, shadeLight, shadeDark, seamColor, prefersReducedMotion]);
    const leftPct = Math.round(split * 100);
    const rightPct = 100 - leftPct;
    return /*#__PURE__*/React.createElement("div", {
      className: "study-split-wireframe",
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
        zIndex: 1,
        margin: 0,
        color: textColor,
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
    }, subtitle)), showControl && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: '30px',
        transform: 'translateX(-50%)',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        color: textColor,
        fontFamily: sans,
        fontSize: '10px',
        letterSpacing: '0.08em',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap',
        opacity: 0.45
      }
    }, leftLabel, ' ', /*#__PURE__*/React.createElement("b", {
      style: {
        display: 'inline-block',
        minWidth: '2ch',
        fontWeight: 'inherit',
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums'
      }
    }, leftPct)), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "0",
      max: "1",
      step: "0.001",
      value: split,
      "aria-label": "Split position (double-click to reset)",
      onChange: e => setSplit(parseFloat(e.target.value)),
      onPointerDown: () => {
        draggingRef.current = true;
      },
      onPointerUp: () => {
        draggingRef.current = false;
      },
      onDoubleClick: () => setSplit(0.5),
      style: {
        width: '160px',
        height: '40px',
        cursor: 'grab',
        appearance: 'none',
        WebkitAppearance: 'none',
        background: 'linear-gradient(' + textColor + ',' + textColor + ') left center / ' + split * 100 + '% 1px no-repeat, ' + 'linear-gradient(' + textColor + '40,' + textColor + '40) center / 100% 1px no-repeat'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap',
        opacity: 0.45
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        display: 'inline-block',
        minWidth: '2ch',
        fontWeight: 'inherit',
        fontVariantNumeric: 'tabular-nums'
      }
    }, rightPct), ' ', rightLabel)));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};