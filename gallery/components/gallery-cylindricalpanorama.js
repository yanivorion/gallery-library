window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-cylindricalpanorama"] = function (React) {
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
   * Component Type: Gallery.CylindricalPanorama
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.CylindricalPanorama",
    "description": "3D gallery arranging items on a rotating cylindrical plane.",
    "editorElement": {
      "selector": ".cylinder-gallery",
      "displayName": "Cylindrical Panorama",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs (Comma Sep)",
          "defaultValue": "assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp",
          "group": "Content"
        },
        "itemWidth": {
          "dataType": "number",
          "displayName": "Item Width (px)",
          "defaultValue": 400,
          "group": "Layout"
        },
        "gap": {
          "dataType": "number",
          "displayName": "Gap (px)",
          "defaultValue": 20,
          "group": "Layout"
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
    const [rotation, setRotation] = React.useState(0);
    const isDragging = React.useRef(false);
    const lastX = React.useRef(0);
    const velocity = React.useRef(0);
    const requestRef = React.useRef();

    // Config
    const rawImages = config?.images || '';
    const items = React.useMemo(() => rawImages.split(',').map(i => i.trim()).filter(Boolean), [rawImages]);
    const width = parseInt(config?.itemWidth || '400');
    const gap = parseInt(config?.gap || '20');

    // Math: Calculate Radius required to fit all items in a circle
    // Circumference = count * (width + gap)
    // Radius = Circumference / (2 * PI)
    const count = items.length;
    const radius = Math.round(count * (width + gap) / (2 * Math.PI));
    const anglePerItem = 360 / count;

    // Physics Loop
    React.useEffect(() => {
      const loop = () => {
        if (!isDragging.current && Math.abs(velocity.current) > 0.01) {
          setRotation(prev => prev + velocity.current);
          velocity.current *= 0.95; // Friction
        }
        requestRef.current = requestAnimationFrame(loop);
      };
      loop();
      return () => cancelAnimationFrame(requestRef.current);
    }, []);

    // Drag Handlers
    const handleMouseDown = e => {
      isDragging.current = true;
      lastX.current = e.clientX;
      velocity.current = 0;
    };
    const handleMouseMove = e => {
      if (!isDragging.current) return;
      const delta = e.clientX - lastX.current;
      lastX.current = e.clientX;

      // Convert px movement to degrees roughly
      const degDelta = delta / window.innerWidth * 100;
      setRotation(prev => prev + degDelta);
      velocity.current = degDelta;
    };
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "cylinder-stage",
      style: {
        width: '100%',
        height: '100%',
        minHeight: '600px',
        backgroundColor: '#111111',
        overflow: 'hidden',
        perspective: '2000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      },
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: width,
        height: Math.round(width * 1.4),
        transformStyle: 'preserve-3d',
        transform: `rotateY(${rotation}deg)`,
        transition: isDragging.current ? 'none' : 'transform 16ms linear' // Optimization
      }
    }, items.map((src, i) => {
      const theta = i * anglePerItem;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // Rotate to face center, then push out by radius
          transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
          backfaceVisibility: 'hidden',
          // Hide items when they rotate behind
          backgroundColor: '#222222',
          border: '4px solid #ffffff',
          boxSizing: 'border-box'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          pointerEvents: 'none' // Prevent dragging image ghost
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          height: '50%',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scaleY(-1)',
          opacity: 0.1,
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          pointerEvents: 'none'
        }
      }));
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};