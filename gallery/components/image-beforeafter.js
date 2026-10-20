window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["image-beforeafter"] = function (React) {
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
   * Component Type: Image.BeforeAfter
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Image.BeforeAfter",
    "description": "Before/after slider with draggable handle and glow effects",
    "editorElement": {
      "selector": ".before-after",
      "displayName": "Before/After Slider",
      "archetype": "container",
      "data": {
        "defaultPosition": {
          "dataType": "select",
          "displayName": "Default Position",
          "defaultValue": "50",
          "options": ["25", "33", "50", "67", "75"],
          "group": "Content"
        },
        "handleSize": {
          "dataType": "select",
          "displayName": "Handle Size",
          "defaultValue": "48",
          "options": ["40", "48", "56", "64"],
          "group": "Layout"
        },
        "dividerWidth": {
          "dataType": "select",
          "displayName": "Divider Width",
          "defaultValue": "3",
          "options": ["2", "3", "4", "5"],
          "group": "Layout"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "dividerColor": {
          "dataType": "color",
          "displayName": "Divider Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "handleColor": {
          "dataType": "color",
          "displayName": "Handle Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "glowColor": {
          "dataType": "color",
          "displayName": "Glow Color",
          "defaultValue": "#444444",
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
    const [position, setPosition] = React.useState(parseInt(config?.defaultPosition || "50"));
    const [isDragging, setIsDragging] = React.useState(false);
    const [isPulsing, setIsPulsing] = React.useState(true);
    const containerRef = React.useRef(null);
    const handleSize = parseInt(config?.handleSize || "48");
    const dividerWidth = parseInt(config?.dividerWidth || "3");
    React.useEffect(() => {
      setTimeout(() => setIsPulsing(false), 2000);
    }, []);
    const handleMove = e => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(100, x / rect.width * 100));
      setPosition(percent);
    };
    React.useEffect(() => {
      if (!isDragging) return;
      const move = e => handleMove(e);
      const up = () => setIsDragging(false);
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
      return () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
      };
    }, [isDragging]);
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      style: {
        width: '100%',
        minHeight: '700px',
        backgroundColor: config?.backgroundColor || '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      },
      onMouseDown: () => setIsDragging(true),
      onDoubleClick: () => setPosition(50),
      className: "before-after"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: '1000px',
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/05.webp",
      alt: "After",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${position}%`,
        height: '100%',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/06.webp",
      alt: "Before",
      style: {
        width: '1000px',
        maxWidth: 'none',
        height: '100%',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: `${position}%`,
        top: 0,
        bottom: 0,
        width: `${dividerWidth}px`,
        backgroundColor: config?.dividerColor || '#ffffff',
        transform: 'translateX(-50%)',
        boxShadow: `0 0 20px ${config?.glowColor || '#444444'}`,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: `${position}%`,
        top: '50%',
        width: `${handleSize}px`,
        height: `${handleSize}px`,
        backgroundColor: config?.handleColor || '#ffffff',
        borderRadius: '50%',
        transform: 'translate(-50%,-50%)',
        cursor: 'grab',
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 ${dividerWidth * 2}px ${config?.glowColor || '#444444'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        color: config?.backgroundColor || '#111111',
        animation: isPulsing ? 'pulse 1.5s ease-in-out infinite' : 'none',
        zIndex: 10
      },
      onMouseDown: e => {
        e.stopPropagation();
        setIsDragging(true);
      }
    }, "⇄")), /*#__PURE__*/React.createElement("style", null, `@keyframes pulse{0%,100%{transform:translate(-50%,-50%) scale(1);}50%{transform:translate(-50%,-50%) scale(1.1);}}`));
  }
  ;
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};