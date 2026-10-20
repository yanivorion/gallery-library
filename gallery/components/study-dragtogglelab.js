window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["study-dragtogglelab"] = function (React) {
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
   * Source study: S-002 "UI Interaction Testing: Toggle Button"
   * Component Type: Study.DragToggleLab
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Study.DragToggleLab",
    "description": "Side-by-side toggle comparison on a measuring grid: a plain CSS switch against a draggable one with rubber-band overshoot and flick release",
    "editorElement": {
      "selector": ".study-drag-toggle-lab",
      "displayName": "Drag Toggle Lab",
      "archetype": "container",
      "data": {
        "title": {
          "dataType": "text",
          "displayName": "Title",
          "defaultValue": "UI Interaction Testing: Toggle Button",
          "group": "Content"
        },
        "subtitle": {
          "dataType": "text",
          "displayName": "Subtitle",
          "defaultValue": "drag, flick, rubber-band",
          "group": "Content"
        },
        "showTitle": {
          "dataType": "booleanValue",
          "displayName": "Show Title",
          "defaultValue": true,
          "group": "Content"
        },
        "labelOne": {
          "dataType": "text",
          "displayName": "Toggle 1 Label",
          "defaultValue": "Before",
          "group": "Content"
        },
        "labelTwo": {
          "dataType": "text",
          "displayName": "Toggle 2 Label",
          "defaultValue": "After (Draggable)",
          "group": "Content"
        },
        "labelThree": {
          "dataType": "text",
          "displayName": "Toggle 3 Label",
          "defaultValue": "After (Inertia)",
          "group": "Content"
        },
        "showThird": {
          "dataType": "booleanValue",
          "displayName": "Show Third Toggle",
          "defaultValue": true,
          "group": "Content"
        },
        "showStateReadout": {
          "dataType": "booleanValue",
          "displayName": "Show State Readout",
          "defaultValue": true,
          "group": "Content"
        },
        "height": {
          "dataType": "number",
          "displayName": "Stage Height (px)",
          "defaultValue": "560",
          "group": "Layout"
        },
        "fullHeight": {
          "dataType": "booleanValue",
          "displayName": "Full Viewport Height",
          "defaultValue": false,
          "group": "Layout"
        },
        "gap": {
          "dataType": "number",
          "displayName": "Gap Between Toggles (px)",
          "defaultValue": "144",
          "group": "Layout"
        },
        "trackWidth": {
          "dataType": "number",
          "displayName": "Track Width (px)",
          "defaultValue": "96",
          "group": "Layout"
        },
        "trackHeight": {
          "dataType": "number",
          "displayName": "Track Height (px)",
          "defaultValue": "48",
          "group": "Layout"
        },
        "trackPadding": {
          "dataType": "number",
          "displayName": "Track Padding (px)",
          "defaultValue": "4",
          "group": "Layout"
        },
        "showGrid": {
          "dataType": "booleanValue",
          "displayName": "Show Measuring Grid",
          "defaultValue": true,
          "group": "Layout"
        },
        "gridSize": {
          "dataType": "number",
          "displayName": "Grid Size (px)",
          "defaultValue": "24",
          "group": "Layout"
        },
        "defaultOn": {
          "dataType": "booleanValue",
          "displayName": "Start Switched On",
          "defaultValue": false,
          "group": "Animation"
        },
        "settleDuration": {
          "dataType": "number",
          "displayName": "Settle Duration (ms)",
          "defaultValue": "450",
          "group": "Animation"
        },
        "rubberBand": {
          "dataType": "select",
          "displayName": "Rubber Band Give (px)",
          "defaultValue": "5",
          "options": ["0", "3", "5", "9", "14"],
          "group": "Animation"
        },
        "pressScale": {
          "dataType": "select",
          "displayName": "Thumb Press Scale",
          "defaultValue": "0.88",
          "options": ["1", "0.94", "0.88", "0.8"],
          "group": "Animation"
        },
        "hoverScale": {
          "dataType": "select",
          "displayName": "Thumb Hover Scale",
          "defaultValue": "1.06",
          "options": ["1", "1.03", "1.06", "1.12"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "trackOffColor": {
          "dataType": "color",
          "displayName": "Track Off",
          "defaultValue": "#cccccc",
          "group": "Colors"
        },
        "trackOnColor": {
          "dataType": "color",
          "displayName": "Track On",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "thumbColor": {
          "dataType": "color",
          "displayName": "Thumb",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "labelColor": {
          "dataType": "color",
          "displayName": "Label",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "gridColor": {
          "dataType": "color",
          "displayName": "Grid Line",
          "defaultValue": "#000000",
          "group": "Colors"
        }
      }
    }
  };
  function Component({
    config = {}
  }) {
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const title = config?.title || 'UI Interaction Testing: Toggle Button';
    const subtitle = config?.subtitle || 'drag, flick, rubber-band';
    const showTitle = config?.showTitle !== false;
    const labels = [config?.labelOne || 'Before', config?.labelTwo || 'After (Draggable)', config?.labelThree || 'After (Inertia)'];
    const showThird = config?.showThird !== false;
    const showStateReadout = config?.showStateReadout !== false;
    const height = Math.max(220, parseInt(config?.height || '560', 10));
    const fullHeight = config?.fullHeight === true;
    const gap = Math.max(16, parseInt(config?.gap || '144', 10));
    const trackWidth = Math.max(48, parseInt(config?.trackWidth || '96', 10));
    const trackHeight = Math.max(24, parseInt(config?.trackHeight || '48', 10));
    const trackPadding = Math.max(0, parseInt(config?.trackPadding || '4', 10));
    const showGrid = config?.showGrid !== false;
    const gridSize = Math.max(6, parseInt(config?.gridSize || '24', 10));
    const defaultOn = config?.defaultOn === true;
    const settleDuration = Math.max(0, parseInt(config?.settleDuration || '450', 10));
    const rubberBand = parseFloat(config?.rubberBand || '5') || 0;
    const pressScale = parseFloat(config?.pressScale || '0.88') || 0.88;
    const hoverScale = parseFloat(config?.hoverScale || '1.06') || 1;
    const backgroundColor = config?.backgroundColor || '#eeeeee';
    const trackOffColor = config?.trackOffColor || '#cccccc';
    const trackOnColor = config?.trackOnColor || '#000000';
    const thumbColor = config?.thumbColor || '#eeeeee';
    const labelColor = config?.labelColor || '#000000';
    const gridColor = config?.gridColor || '#000000';
    const sans = '"PP Neue Montreal", "Helvetica Neue", Inter, system-ui, -apple-system, sans-serif';
    const thumbSize = Math.max(8, trackHeight - trackPadding * 2);
    const travel = Math.max(1, trackWidth - trackPadding * 2 - thumbSize);
    const ease = 'cubic-bezier(.22, 1, .36, 1)';
    const gridLayer = showGrid ? 'linear-gradient(to right, ' + gridColor + '0d 1px, transparent 1px), ' + 'linear-gradient(to bottom, ' + gridColor + '0d 1px, transparent 1px)' : 'none';

    // --- one toggle -----------------------------------------------------------
    // `mode` picks the behaviour: 'plain' is a click-only CSS switch; 'drag'
    // follows the pointer with rubber-band overshoot past either end; 'inertia'
    // additionally reads flick velocity from the last 100ms of movement.
    const Toggle = ({
      mode,
      label,
      index
    }) => {
      const [on, setOn] = React.useState(defaultOn);
      const [p, setP] = React.useState(defaultOn ? 1 : 0);
      const [dragging, setDragging] = React.useState(false);
      const [hovered, setHovered] = React.useState(false);
      const [pressed, setPressed] = React.useState(false);
      const trackRef = React.useRef(null);
      const startX = React.useRef(0);
      const startP = React.useRef(0);
      const moved = React.useRef(false);
      const samples = React.useRef([]);
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
      // Past the ends the thumb keeps moving, but with sharply diminishing give.
      const resist = over => Math.sign(over) * (1 - 1 / (Math.abs(over) / 24 + 1)) * rubberBand;
      const settle = next => {
        setOn(next);
        setP(next ? 1 : 0);
      };
      const onPointerDown = e => {
        if (mode === 'plain') return;
        const el = trackRef.current;
        if (!el) return;
        el.setPointerCapture(e.pointerId);
        startX.current = e.clientX;
        startP.current = clamp01(p);
        moved.current = false;
        samples.current = [{
          x: e.clientX,
          t: e.timeStamp
        }];
        setDragging(true);
        setPressed(true);
      };
      const onPointerMove = e => {
        const el = trackRef.current;
        if (!el || !el.hasPointerCapture || !el.hasPointerCapture(e.pointerId)) return;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 3) moved.current = true;
        if (!moved.current) return;
        samples.current.push({
          x: e.clientX,
          t: e.timeStamp
        });
        samples.current = samples.current.filter(s => e.timeStamp - s.t < 100);
        const nextP = startP.current + dx / travel;
        setP(nextP);
        const nextOn = nextP > 0.5;
        if (nextOn !== on) setOn(nextOn);
      };
      const onPointerUp = e => {
        const el = trackRef.current;
        if (!el || !el.hasPointerCapture || !el.hasPointerCapture(e.pointerId)) return;
        el.releasePointerCapture(e.pointerId);
        setDragging(false);
        setPressed(false);
        if (!moved.current) {
          settle(!on);
          return;
        }
        let next = clamp01(p) > 0.5;
        if (mode === 'inertia') {
          const s = samples.current;
          if (s.length > 1) {
            const first = s[0];
            const last = s[s.length - 1];
            const dt = last.t - first.t;
            const velocity = dt > 0 ? (last.x - first.x) / dt : 0;
            if (Math.abs(velocity) > 0.35) next = velocity > 0;
          }
        }
        settle(next);
      };
      const visualP = clamp01(p);
      const overshoot = resist((p - visualP) * travel);
      const x = visualP * travel + overshoot;
      const thumbScale = pressed ? pressScale : hovered ? hoverScale : 1;
      const transition = dragging || prefersReducedMotion ? 'none' : 'transform ' + settleDuration + 'ms ' + ease;
      return /*#__PURE__*/React.createElement("figure", {
        style: {
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          margin: 0
        }
      }, /*#__PURE__*/React.createElement("label", {
        style: {
          cursor: mode === 'plain' ? 'pointer' : dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          display: 'block'
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        role: "switch",
        checked: on,
        "aria-label": label,
        onChange: () => {
          if (mode === 'plain') settle(!on);
        },
        style: {
          position: 'absolute',
          opacity: 0,
          width: 1,
          height: 1
        }
      }), /*#__PURE__*/React.createElement("span", {
        ref: trackRef,
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: onPointerUp,
        onPointerCancel: onPointerUp,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => {
          setHovered(false);
          setPressed(false);
        },
        style: {
          display: 'block',
          position: 'relative',
          width: trackWidth + 'px',
          height: trackHeight + 'px',
          padding: trackPadding + 'px',
          borderRadius: '999px',
          backgroundColor: on ? trackOnColor : trackOffColor,
          transition: prefersReducedMotion ? 'none' : 'background-color ' + (dragging ? 150 : settleDuration) + 'ms ' + ease + ', transform ' + settleDuration + 'ms ' + ease,
          transform: 'scale(' + (pressed ? 0.95 : 1) + ')',
          touchAction: 'none',
          boxSizing: 'border-box'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          width: thumbSize + 'px',
          height: thumbSize + 'px',
          borderRadius: '50%',
          backgroundColor: thumbColor,
          transform: 'translateX(' + x + 'px) scale(' + thumbScale + ')',
          transition: transition
        }
      }))), /*#__PURE__*/React.createElement("figcaption", {
        style: {
          position: 'absolute',
          top: 'calc(100% + 20px)',
          fontSize: '12px',
          fontFamily: sans,
          fontWeight: 500,
          color: labelColor,
          whiteSpace: 'nowrap',
          textAlign: 'center'
        }
      }, label, showStateReadout && /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontSize: '10px',
          opacity: 0.5,
          letterSpacing: '0.08em',
          marginTop: '4px'
        }
      }, on ? 'ON' : 'OFF', ' · ', Math.round(visualP * 100))));
    };
    const modes = showThird ? ['plain', 'drag', 'inertia'] : ['plain', 'drag'];
    return /*#__PURE__*/React.createElement("div", {
      className: "study-drag-toggle-lab",
      style: {
        position: 'relative',
        width: '100%',
        height: fullHeight ? '100svh' : height + 'px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor,
        backgroundImage: gridLayer,
        backgroundSize: gridSize + 'px ' + gridSize + 'px',
        backgroundPosition: 'calc(50% + ' + gridSize / 2 + 'px) calc(50% + ' + gridSize / 2 + 'px)',
        boxSizing: 'border-box',
        padding: '24px'
      }
    }, showTitle && /*#__PURE__*/React.createElement("h2", {
      style: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        margin: 0,
        zIndex: 1,
        color: labelColor,
        fontFamily: sans,
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: 1.35
      }
    }, title, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        opacity: 0.6
      }
    }, subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: gap + 'px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, modes.map((mode, i) => /*#__PURE__*/React.createElement(Toggle, {
      key: mode,
      mode: mode,
      label: labels[i],
      index: i
    }))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};