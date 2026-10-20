window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-perspectiveticker"] = function (React) {
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
   * Project: Galleries, Carousels & Slideshows (2/4)
   * Generated: Sep 15, 2026, 01:36 PM
   * Component Type: Gallery.PerspectiveTicker
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.PerspectiveTicker",
    "description": "Cinematic video game gallery with 3D perspective ticker effect featuring continuous vertical scrolling, depth transforms, and hover interactions. Creates an immersive showcase with rotated perspective view. Perfect for video galleries, game showcases, portfolio displays, and media collections.",
    "editorElement": {
      "selector": ".perspective-ticker-gallery",
      "displayName": "Perspective Ticker Gallery",
      "archetype": "container",
      "data": {
        "galleryItems": {
          "dataType": "text",
          "displayName": "Gallery Items",
          "defaultValue": "assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp,assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp",
          "group": "Content",
          "description": "Comma-separated list of image URLs for gallery items"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors",
          "description": "Main background color"
        },
        "itemBorderColor": {
          "dataType": "color",
          "displayName": "Item Border Color",
          "defaultValue": "#333333",
          "group": "Colors",
          "description": "Border color around gallery items"
        },
        "itemHoverBorderColor": {
          "dataType": "color",
          "displayName": "Item Hover Border Color",
          "defaultValue": "#ffffff",
          "group": "Colors",
          "description": "Border color on hover"
        },
        "navigationColor": {
          "dataType": "color",
          "displayName": "Navigation Text Color",
          "defaultValue": "#ffffff",
          "group": "Colors",
          "description": "Color of prev/next navigation text"
        },
        "tickerSpeed": {
          "dataType": "select",
          "displayName": "Ticker Speed",
          "defaultValue": "30",
          "options": ["20", "30", "40", "50"],
          "group": "Animation",
          "description": "Speed of ticker animation in seconds (lower = faster)"
        },
        "perspectiveAngle": {
          "dataType": "select",
          "displayName": "Perspective Angle",
          "defaultValue": "20",
          "options": ["10", "20", "30", "40"],
          "group": "Layout",
          "description": "3D perspective rotation angle in degrees"
        },
        "itemsPerRow": {
          "dataType": "select",
          "displayName": "Items Per Row",
          "defaultValue": "3",
          "options": ["2", "3", "4", "5"],
          "group": "Layout",
          "description": "Number of items displayed per row"
        },
        "itemGap": {
          "dataType": "select",
          "displayName": "Item Gap",
          "defaultValue": "20",
          "options": ["10", "20", "30", "40"],
          "group": "Layout",
          "description": "Gap between gallery items in pixels"
        },
        "enableAutoPlay": {
          "dataType": "booleanValue",
          "displayName": "Enable Auto-Play",
          "defaultValue": true,
          "group": "Animation",
          "description": "Enable continuous ticker animation"
        },
        "pauseOnHover": {
          "dataType": "booleanValue",
          "displayName": "Pause On Hover",
          "defaultValue": true,
          "group": "Animation",
          "description": "Pause ticker animation when hovering over gallery"
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
    const galleryItemsRaw = config?.galleryItems || "assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp,assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp";
    const backgroundColor = config?.backgroundColor || "#111111";
    const itemBorderColor = config?.itemBorderColor || "#333333";
    const itemHoverBorderColor = config?.itemHoverBorderColor || "#ffffff";
    const navigationColor = config?.navigationColor || "#ffffff";
    const tickerSpeed = parseInt(config?.tickerSpeed || "30");
    const perspectiveAngle = parseInt(config?.perspectiveAngle || "20");
    const itemsPerRow = parseInt(config?.itemsPerRow || "3");
    const itemGap = parseInt(config?.itemGap || "20");
    const enableAutoPlay = config?.enableAutoPlay !== false;
    const pauseOnHover = config?.pauseOnHover !== false;
    const [isPaused, setIsPaused] = React.useState(false);
    const [items, setItems] = React.useState([]);

    // Parse gallery items
    React.useEffect(() => {
      const imageUrls = galleryItemsRaw.split(',').map(url => url.trim());
      // Duplicate items for seamless loop
      setItems([...imageUrls, ...imageUrls]);
    }, [galleryItemsRaw]);

    // Respect prefers-reduced-motion
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const handleMouseEnter = () => {
      if (pauseOnHover) setIsPaused(true);
    };
    const handleMouseLeave = () => {
      if (pauseOnHover) setIsPaused(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "perspective-ticker-gallery",
      style: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: backgroundColor,
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        padding: '40px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: '1400px',
        height: '700px',
        perspective: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
        gap: `${itemGap}px`,
        transform: `perspective(700px) rotateX(${perspectiveAngle}deg)`,
        transformStyle: 'preserve-3d',
        animation: enableAutoPlay && !prefersReducedMotion ? `ticker ${tickerSpeed}s linear infinite` : 'none',
        animationPlayState: isPaused ? 'paused' : 'running',
        width: '100%',
        maxWidth: '1200px'
      }
    }, items.map((imageUrl, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        aspectRatio: '3/4',
        borderRadius: '8px',
        overflow: 'hidden',
        border: `2px solid ${itemBorderColor}`,
        transition: 'all 0.2s ease-out',
        cursor: 'pointer',
        backgroundColor: '#222222',
        position: 'relative'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.borderColor = itemHoverBorderColor;
        e.currentTarget.style.zIndex = '10';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = itemBorderColor;
        e.currentTarget.style.zIndex = '1';
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: imageUrl,
      alt: `Gallery item ${index + 1}`,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      },
      loading: "lazy"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: navigationColor,
        fontSize: '14px',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {/* Previous logic would go here */},
      style: {
        background: 'transparent',
        border: 'none',
        color: navigationColor,
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '0.1em',
        padding: '8px 16px',
        transition: 'opacity 0.2s ease-out',
        opacity: 0.7
      },
      onMouseEnter: e => e.currentTarget.style.opacity = '1',
      onMouseLeave: e => e.currentTarget.style.opacity = '0.7',
      "aria-label": "Previous images"
    }, "← Prev"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {/* Next logic would go here */},
      style: {
        background: 'transparent',
        border: 'none',
        color: navigationColor,
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '0.1em',
        padding: '8px 16px',
        transition: 'opacity 0.2s ease-out',
        opacity: 0.7
      },
      onMouseEnter: e => e.currentTarget.style.opacity = '1',
      onMouseLeave: e => e.currentTarget.style.opacity = '0.7',
      "aria-label": "Next images"
    }, "Next →")), /*#__PURE__*/React.createElement("style", null, `
        @keyframes ticker {
          0% {
            transform: perspective(700px) rotateX(${perspectiveAngle}deg) translateY(0);
          }
          100% {
            transform: perspective(700px) rotateX(${perspectiveAngle}deg) translateY(-50%);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (max-width: 768px) {
          .perspective-ticker-gallery > div {
            height: 500px !important;
          }
        }
      `));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};