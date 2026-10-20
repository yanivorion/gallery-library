window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["media-logocarouselinfinite"] = function (React) {
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
   * Component Type: Media.LogoCarouselInfinite
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Media.LogoCarouselInfinite",
    "description": "Logo carousel that infinitely scrolls horizontally with smooth loop animation",
    "editorElement": {
      "selector": ".logo-carousel-infinite",
      "displayName": "Logo Carousel Infinite",
      "archetype": "container",
      "data": {
        "logos": {
          "dataType": "text",
          "displayName": "Logo URLs (comma-separated)",
          "defaultValue": "assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp",
          "group": "Content"
        },
        "speed": {
          "dataType": "select",
          "displayName": "Scroll Speed",
          "defaultValue": "medium",
          "options": ["slow", "medium", "fast"],
          "group": "Animation"
        },
        "direction": {
          "dataType": "select",
          "displayName": "Scroll Direction",
          "defaultValue": "left",
          "options": ["left", "right"],
          "group": "Animation"
        },
        "pauseOnHover": {
          "dataType": "booleanValue",
          "displayName": "Pause on Hover",
          "defaultValue": true,
          "group": "Animation"
        },
        "logoHeight": {
          "dataType": "select",
          "displayName": "Logo Height",
          "defaultValue": "60",
          "options": ["40", "50", "60", "80", "100"],
          "group": "Layout"
        },
        "gap": {
          "dataType": "select",
          "displayName": "Gap Between Logos",
          "defaultValue": "60",
          "options": ["40", "50", "60", "80", "100"],
          "group": "Layout"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "logoBackground": {
          "dataType": "color",
          "displayName": "Logo Background",
          "defaultValue": "#ffffff",
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
    const logos = (config?.logos || 'assets/02.webp,assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp').split(',').map(url => url.trim());
    const speed = config?.speed || 'medium';
    const direction = config?.direction || 'left';
    const pauseOnHover = config?.pauseOnHover !== false;
    const logoHeight = parseInt(config?.logoHeight || '60');
    const gap = parseInt(config?.gap || '60');
    const backgroundColor = config?.backgroundColor || '#ffffff';
    const logoBackground = config?.logoBackground || '#ffffff';
    const accentColor = config?.accentColor || '#555555';
    const [isPaused, setIsPaused] = React.useState(false);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const speedDurations = {
      slow: 60,
      medium: 40,
      fast: 25
    };
    const duration = speedDurations[speed];
    const duplicatedLogos = [...logos, ...logos, ...logos];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '40px',
        padding: '40px 20px',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: '1400px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '24px',
        fontWeight: '500',
        color: accentColor,
        textAlign: 'center',
        marginBottom: '32px',
        letterSpacing: '-0.01em'
      }
    }, "Trusted by Leading Brands"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: `${logoHeight / 2}px 0`,
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => pauseOnHover && setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      style: {
        display: 'flex',
        gap: `${gap}px`,
        animation: prefersReducedMotion ? 'none' : `scroll-${direction} ${duration}s linear infinite`,
        animationPlayState: isPaused ? 'paused' : 'running'
      }
    }, duplicatedLogos.map((logo, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        flexShrink: 0,
        height: `${logoHeight}px`,
        minWidth: `${logoHeight * 2.5}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 24px',
        backgroundColor: logoBackground,
        borderRadius: '8px',
        transition: 'all 300ms ease-out',
        cursor: 'pointer',
        border: `1px solid ${accentColor}15`
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: logo,
      alt: `Logo ${index % logos.length + 1}`,
      style: {
        height: '100%',
        width: 'auto',
        objectFit: 'contain',
        opacity: 0.8,
        transition: 'opacity 300ms ease-out'
      },
      onMouseEnter: e => {
        e.currentTarget.style.opacity = '1';
      },
      onMouseLeave: e => {
        e.currentTarget.style.opacity = '0.8';
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '32px',
        textAlign: 'center',
        fontSize: '14px',
        color: accentColor
      }
    }, pauseOnHover && 'Hover to pause • ', "Speed: ", speed, " • Direction: ", direction === 'left' ? '→' : '←')), /*#__PURE__*/React.createElement("style", {
      jsx: true
    }, `
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};