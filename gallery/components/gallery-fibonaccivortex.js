window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-fibonaccivortex"] = function (React) {
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
   * Project: Galleries, Carousels & Slideshows (1/4)
   * Generated: Sep 15, 2026, 01:36 PM
   * Component Type: Gallery.FibonacciVortex
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.FibonacciVortex",
    "description": "3D tunnel using Golden Angle spacing for a hypnotic spiral effect.",
    "editorElement": {
      "selector": ".vortex-gallery",
      "displayName": "Fibonacci Vortex",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs (Comma Sep)",
          "defaultValue": "assets/01.webp,assets/02.webp,assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp",
          "group": "Content"
        },
        "spread": {
          "dataType": "number",
          "displayName": "Spiral Spread",
          "defaultValue": 40,
          "group": "Layout"
        },
        "depthSpacing": {
          "dataType": "number",
          "displayName": "Z-Depth Spacing",
          "defaultValue": 200,
          "group": "Layout"
        },
        "fogColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#000000",
          "group": "Colors"
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
    const containerRef = React.useRef(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const targetScroll = React.useRef(0);
    const currentScroll = React.useRef(0);
    const requestRef = React.useRef();

    // Safe Config
    const rawImages = config?.images || '';
    const imageList = React.useMemo(() => {
      const list = rawImages.split(',').map(i => i.trim()).filter(Boolean);
      // Duplicate to ensure enough items for the spiral effect
      return [...list, ...list, ...list, ...list].slice(0, 50);
    }, [rawImages]);
    const spread = parseFloat(config?.spread || '40'); // X/Y spread
    const depthSpacing = parseFloat(config?.depthSpacing || '200'); // Z distance per item
    const fogColor = config?.fogColor || '#000000';

    // Math Constants
    const GOLDEN_ANGLE = 137.508; // Degrees

    // Animation Loop
    React.useEffect(() => {
      const animate = () => {
        // Smooth lerp
        currentScroll.current += (targetScroll.current - currentScroll.current) * 0.08;
        setScrollProgress(currentScroll.current);
        requestRef.current = requestAnimationFrame(animate);
      };
      animate();
      return () => cancelAnimationFrame(requestRef.current);
    }, []);

    // Scroll Handler
    React.useEffect(() => {
      const handleWheel = e => {
        e.preventDefault();
        targetScroll.current += e.deltaY;
        // Clamp start
        if (targetScroll.current < 0) targetScroll.current = 0;
        // Clamp end (stop before running out of items)
        const maxScroll = imageList.length * depthSpacing + 500;
        if (targetScroll.current > maxScroll) targetScroll.current = maxScroll;
      };
      const el = containerRef.current;
      if (el) el.addEventListener('wheel', handleWheel, {
        passive: false
      });
      return () => el && el.removeEventListener('wheel', handleWheel);
    }, [imageList.length, depthSpacing]);
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "vortex-container",
      style: {
        width: '100%',
        height: '100%',
        minHeight: '600px',
        backgroundColor: fogColor,
        overflow: 'hidden',
        position: 'relative',
        perspective: '800px',
        cursor: 'ns-resize'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: `translateZ(${scrollProgress}px) rotateZ(${scrollProgress * 0.1}deg)` // Twist as we fly
      }
    }, imageList.map((url, i) => {
      // Phyllotaxis Formula
      const theta = i * GOLDEN_ANGLE * (Math.PI / 180);
      const r = spread * Math.sqrt(i); // Radius grows with index
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const z = -i * depthSpacing; // Stack backwards

      // Visibility Culling
      const relativeZ = z + scrollProgress;
      if (relativeZ > 500 || relativeZ < -1500) return null;
      const opacity = Math.max(0, Math.min(1, (relativeZ + 1000) / 800));
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'absolute',
          width: '200px',
          height: '200px',
          left: '-100px',
          top: '-100px',
          transform: `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${i * GOLDEN_ANGLE}deg)`,
          opacity: opacity,
          willChange: 'transform, opacity'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '50%',
          // Circular nodes
          boxShadow: `0 0 15px ${fogColor}`,
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255, 255, 255, 0.5)',
        textTransform: 'uppercase',
        fontSize: '12px',
        letterSpacing: '2px',
        pointerEvents: 'none'
      }
    }, "Scroll to Dive"));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};