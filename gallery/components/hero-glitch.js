window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["hero-glitch"] = function (React) {
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
   * Project: Galleries, Carousels & Slideshows (3/4)
   * Generated: Sep 15, 2026, 01:36 PM
   * Component Type: Hero.Glitch
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Hero.Glitch",
    "description": "RGB Split glitch effect.",
    "editorElement": {
      "selector": ".glitch",
      "displayName": "Glitch Slider",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "defaultValue": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1000,https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1000",
          "group": "Content"
        }
      },
      "layout": {
        "resizeDirection": "horizontalAndVertical",
        "contentResizeDirection": "vertical"
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [idx, setIdx] = React.useState(0);
    const [glitching, setGlitch] = React.useState(false);
    const images = React.useMemo(() => (config?.images || '').split(',').map(i => i.trim()).filter(Boolean), [config?.images]);
    const next = () => {
      setGlitch(true);
      setTimeout(() => setIdx(p => (p + 1) % images.length), 200);
      setTimeout(() => setGlitch(false), 500);
    };
    return /*#__PURE__*/React.createElement("div", {
      onClick: next,
      style: {
        width: '100%',
        height: '100%',
        minHeight: '600px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000'
      }
    }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes glitch-anim-1 { 0% { clip-path: inset(20% 0 80% 0); transform: translate(-5px,0); } 20% { clip-path: inset(60% 0 10% 0); transform: translate(5px,0); } 100% { clip-path: inset(10% 0 50% 0); transform: translate(-5px,0); } }
        @keyframes glitch-anim-2 { 0% { clip-path: inset(10% 0 60% 0); transform: translate(5px,0); } 20% { clip-path: inset(80% 0 5% 0); transform: translate(-5px,0); } 100% { clip-path: inset(30% 0 20% 0); transform: translate(5px,0); } }
      `), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${images[idx]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }), glitching && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${images[idx]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mixBlendMode: 'hard-light',
        animation: 'glitch-anim-1 0.3s infinite linear alternate-reverse'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${images[idx]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mixBlendMode: 'hard-light',
        animation: 'glitch-anim-2 0.3s infinite linear alternate-reverse',
        filter: 'hue-rotate(90deg)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        color: '#0F0',
        fontFamily: 'monospace'
      }
    }, "SYSTEM.GLITCH // CLICK"));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};