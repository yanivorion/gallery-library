window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["media-diagonalcomparisonslider"] = function (React) {
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
   * Component Type: Media.DiagonalComparisonSlider
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Media.DiagonalComparisonSlider",
    "description": "Image comparison slider that splits diagonally with draggable divider",
    "editorElement": {
      "selector": ".diagonal-comparison-slider",
      "displayName": "Diagonal Comparison Slider",
      "archetype": "container",
      "data": {
        "beforeImage": {
          "dataType": "text",
          "displayName": "Before Image URL",
          "defaultValue": "assets/08.webp",
          "group": "Content"
        },
        "afterImage": {
          "dataType": "text",
          "displayName": "After Image URL",
          "defaultValue": "assets/01.webp",
          "group": "Content"
        },
        "diagonalDirection": {
          "dataType": "select",
          "displayName": "Diagonal Direction",
          "defaultValue": "top-left",
          "options": ["top-left", "top-right", "bottom-left", "bottom-right"],
          "group": "Layout"
        },
        "defaultPosition": {
          "dataType": "select",
          "displayName": "Default Position (%)",
          "defaultValue": "50",
          "options": ["25", "33", "50", "66", "75"],
          "group": "Content"
        },
        "showLabels": {
          "dataType": "booleanValue",
          "displayName": "Show Before/After Labels",
          "defaultValue": true,
          "group": "Content"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#ffffff",
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
          "defaultValue": "#555555",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#555555",
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
    const beforeImage = config?.beforeImage || 'assets/02.webp';
    const afterImage = config?.afterImage || 'assets/03.webp';
    const diagonalDirection = config?.diagonalDirection || 'top-left';
    const defaultPosition = parseInt(config?.defaultPosition || '50');
    const showLabels = config?.showLabels !== false;
    const backgroundColor = config?.backgroundColor || '#ffffff';
    const dividerColor = config?.dividerColor || '#ffffff';
    const handleColor = config?.handleColor || '#555555';
    const accentColor = config?.accentColor || '#555555';
    const [position, setPosition] = React.useState(defaultPosition);
    const [isDragging, setIsDragging] = React.useState(false);
    const containerRef = React.useRef(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const getClipPath = () => {
      const pos = position;
      switch (diagonalDirection) {
        case 'top-left':
          return `polygon(0 0, ${pos}% 0, 0 ${pos}%)`;
        case 'top-right':
          return `polygon(${100 - pos}% 0, 100% 0, 100% ${pos}%)`;
        case 'bottom-left':
          return `polygon(0 ${100 - pos}%, ${pos}% 100%, 0 100%)`;
        case 'bottom-right':
          return `polygon(100% ${100 - pos}%, 100% 100%, ${100 - pos}% 100%)`;
        default:
          return `polygon(0 0, ${pos}% 0, 0 ${pos}%)`;
      }
    };
    const getDividerPoints = () => {
      const pos = position;
      switch (diagonalDirection) {
        case 'top-left':
          return {
            x1: pos,
            y1: 0,
            x2: 0,
            y2: pos
          };
        case 'top-right':
          return {
            x1: 100 - pos,
            y1: 0,
            x2: 100,
            y2: pos
          };
        case 'bottom-left':
          return {
            x1: 0,
            y1: 100 - pos,
            x2: pos,
            y2: 100
          };
        case 'bottom-right':
          return {
            x1: 100,
            y1: 100 - pos,
            x2: 100 - pos,
            y2: 100
          };
        default:
          return {
            x1: pos,
            y1: 0,
            x2: 0,
            y2: pos
          };
      }
    };
    const handleMove = (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width * 100;
      const y = (clientY - rect.top) / rect.height * 100;
      let newPosition;
      switch (diagonalDirection) {
        case 'top-left':
          newPosition = (x + y) / 2;
          break;
        case 'top-right':
          newPosition = (100 - x + y) / 2;
          break;
        case 'bottom-left':
          newPosition = (x + (100 - y)) / 2;
          break;
        case 'bottom-right':
          newPosition = (100 - x + (100 - y)) / 2;
          break;
        default:
          newPosition = (x + y) / 2;
      }
      setPosition(Math.max(0, Math.min(100, newPosition)));
    };
    const handleMouseDown = () => {
      setIsDragging(true);
    };
    const handleMouseMove = e => {
      if (!isDragging) return;
      handleMove(e.clientX, e.clientY);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    const handleTouchMove = e => {
      if (!isDragging) return;
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };
    React.useEffect(() => {
      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleMouseUp);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('touchend', handleMouseUp);
        };
      }
    }, [isDragging]);
    const dividerPoints = getDividerPoints();
    const handleX = (dividerPoints.x1 + dividerPoints.x2) / 2;
    const handleY = (dividerPoints.y1 + dividerPoints.y2) / 2;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: '900px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      style: {
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        borderRadius: '12px',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: afterImage,
      alt: "After",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        pointerEvents: 'none',
        userSelect: 'none'
      },
      draggable: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        clipPath: getClipPath(),
        transition: isDragging ? 'none' : 'clip-path 150ms ease-out'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: beforeImage,
      alt: "Before",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        pointerEvents: 'none',
        userSelect: 'none'
      },
      draggable: false
    })), /*#__PURE__*/React.createElement("svg", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("line", {
      x1: `${dividerPoints.x1}%`,
      y1: `${dividerPoints.y1}%`,
      x2: `${dividerPoints.x2}%`,
      y2: `${dividerPoints.y2}%`,
      stroke: dividerColor,
      strokeWidth: "4",
      style: {
        filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))',
        transition: isDragging ? 'none' : 'all 150ms ease-out'
      }
    })), /*#__PURE__*/React.createElement("div", {
      onMouseDown: handleMouseDown,
      onTouchStart: e => {
        e.preventDefault();
        setIsDragging(true);
      },
      style: {
        position: 'absolute',
        left: `${handleX}%`,
        top: `${handleY}%`,
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '60px',
        backgroundColor: handleColor,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isDragging ? 'grabbing' : 'grab',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: isDragging ? 'none' : 'all 150ms ease-out, transform 200ms ease-out',
        zIndex: 10
      },
      onMouseEnter: e => {
        if (!isDragging) {
          e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '20px',
        height: '3px',
        backgroundColor: dividerColor,
        borderRadius: '2px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '20px',
        height: '3px',
        backgroundColor: dividerColor,
        borderRadius: '2px'
      }
    }))), showLabels && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '20px',
        left: diagonalDirection.includes('left') ? '20px' : 'auto',
        right: diagonalDirection.includes('right') ? '20px' : 'auto',
        padding: '8px 16px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '6px',
        backdropFilter: 'blur(8px)',
        pointerEvents: 'none'
      }
    }, "Before"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '20px',
        right: diagonalDirection.includes('left') ? '20px' : 'auto',
        left: diagonalDirection.includes('right') ? '20px' : 'auto',
        padding: '8px 16px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '6px',
        backdropFilter: 'blur(8px)',
        pointerEvents: 'none'
      }
    }, "After"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '14px',
        color: accentColor
      }
    }, "Drag the handle to compare • Direction: ", diagonalDirection.replace('-', ' to '))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};