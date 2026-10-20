window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-floatingislands"] = function (React) {
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
   * Component Type: Gallery.FloatingIslands
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.FloatingIslands",
    "description": "A floating gallery where images hover at varied heights like suspended platforms with gentle bob animations",
    "editorElement": {
      "selector": ".floating-islands-gallery",
      "displayName": "Floating Islands Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp,assets/03.webp,assets/04.webp,assets/05.webp",
          "group": "Content",
          "description": "Comma-separated image URLs (5-8 recommended)"
        },
        "containerHeight": {
          "dataType": "select",
          "displayName": "Container Height",
          "defaultValue": "700",
          "options": ["550", "600", "700", "800", "900"],
          "group": "Layout"
        },
        "cardSizeMin": {
          "dataType": "select",
          "displayName": "Min Card Size",
          "defaultValue": "160",
          "options": ["120", "140", "160", "180"],
          "group": "Layout"
        },
        "cardSizeMax": {
          "dataType": "select",
          "displayName": "Max Card Size",
          "defaultValue": "280",
          "options": ["220", "250", "280", "320"],
          "group": "Layout"
        },
        "floatAmplitude": {
          "dataType": "select",
          "displayName": "Float Amplitude (px)",
          "defaultValue": "15",
          "options": ["8", "10", "15", "20", "25"],
          "group": "Animation"
        },
        "floatSpeed": {
          "dataType": "select",
          "displayName": "Float Speed (seconds)",
          "defaultValue": "4",
          "options": ["2", "3", "4", "5", "6"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "cardBorderColor": {
          "dataType": "color",
          "displayName": "Card Border Color",
          "defaultValue": "#444444",
          "group": "Colors"
        },
        "glowColor": {
          "dataType": "color",
          "displayName": "Glow Color",
          "defaultValue": "#999999",
          "group": "Colors"
        },
        "borderRadius": {
          "dataType": "select",
          "displayName": "Border Radius",
          "defaultValue": "20",
          "options": ["12", "16", "20", "24", "32"],
          "group": "Layout"
        },
        "enableParallax": {
          "dataType": "booleanValue",
          "displayName": "Scroll Parallax",
          "defaultValue": true,
          "group": "Animation"
        },
        "showShadows": {
          "dataType": "booleanValue",
          "displayName": "Show Floating Shadows",
          "defaultValue": true,
          "group": "Colors"
        },
        "showClouds": {
          "dataType": "booleanValue",
          "displayName": "Show Cloud Wisps",
          "defaultValue": true,
          "group": "Colors"
        },
        "hoverGlow": {
          "dataType": "booleanValue",
          "displayName": "Hover Glow Effect",
          "defaultValue": true,
          "group": "Animation"
        }
      },
      "layout": {
        "resizeDirection": "horizontalAndVertical",
        "contentResizeDirection": "horizontal"
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [time, setTime] = React.useState(0);
    const [isInView, setIsInView] = React.useState(false);
    const containerRef = React.useRef(null);
    const animationRef = React.useRef(null);
    const images = React.useMemo(() => {
      return (config?.images || MANIFEST.editorElement.data.images.defaultValue).split(',').map(url => url.trim()).filter(Boolean);
    }, [config?.images]);
    const containerHeight = parseInt(config?.containerHeight || '700');
    const cardSizeMin = parseInt(config?.cardSizeMin || '160');
    const cardSizeMax = parseInt(config?.cardSizeMax || '280');
    const floatAmplitude = parseInt(config?.floatAmplitude || '15');
    const floatSpeed = parseInt(config?.floatSpeed || '4');
    const backgroundColor = config?.backgroundColor || '#111111';
    const cardBorderColor = config?.cardBorderColor || '#444444';
    const glowColor = config?.glowColor || '#999999';
    const borderRadius = parseInt(config?.borderRadius || '20');
    const enableParallax = config?.enableParallax !== false;
    const showShadows = config?.showShadows !== false;
    const showClouds = config?.showClouds !== false;
    const hoverGlow = config?.hoverGlow !== false;
    const prefersReducedMotion = React.useMemo(() => {
      return typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    }, []);
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsInView(true);
        });
      }, {
        threshold: 0.2
      });
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);

    // Float animation
    React.useEffect(() => {
      if (prefersReducedMotion) return;
      const animate = () => {
        setTime(Date.now() / 1000);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }, [prefersReducedMotion]);

    // Generate island configurations
    const islands = React.useMemo(() => {
      const seededRandom = seed => {
        const x = Math.sin(seed * 9999) * 10000;
        return x - Math.floor(x);
      };
      return images.map((image, index) => {
        const heightLevel = seededRandom(index * 1.1);
        const sizeProgress = 1 - heightLevel * 0.4;
        const baseSize = cardSizeMin + (cardSizeMax - cardSizeMin) * sizeProgress;
        return {
          image,
          index,
          x: 0.08 + seededRandom(index * 1.2) * 0.84,
          y: 0.15 + seededRandom(index * 1.3) * 0.7,
          width: Math.round(baseSize * (0.9 + seededRandom(index * 1.4) * 0.2)),
          height: Math.round(baseSize * (0.65 + seededRandom(index * 1.5) * 0.2)),
          heightLevel,
          floatPhase: seededRandom(index * 1.6) * Math.PI * 2,
          floatSpeedMultiplier: 0.8 + seededRandom(index * 1.7) * 0.4,
          rotation: (seededRandom(index * 1.8) - 0.5) * 4
        };
      });
    }, [images, cardSizeMin, cardSizeMax]);

    // Calculate float offset
    const getFloatOffset = island => {
      if (prefersReducedMotion) return 0;
      const phase = time / floatSpeed * island.floatSpeedMultiplier + island.floatPhase;
      return Math.sin(phase) * floatAmplitude;
    };

    // Sort by height for proper layering
    const sortedIslands = React.useMemo(() => {
      return [...islands].sort((a, b) => {
        if (hoveredIndex === a.index) return 1;
        if (hoveredIndex === b.index) return -1;
        return a.heightLevel - b.heightLevel;
      });
    }, [islands, hoveredIndex]);
    if (images.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          color: '#777777'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '18px'
        }
      }, "No images provided")));
    }
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "floating-islands-gallery",
      style: {
        backgroundColor,
        height: `${containerHeight}px`,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, showClouds && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: '300px',
        height: '60px',
        top: '20%',
        left: '10%',
        background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)`,
        borderRadius: '50%',
        filter: 'blur(20px)',
        transform: `translateX(${Math.sin(time * 0.3) * 20}px)`,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: '400px',
        height: '80px',
        top: '50%',
        right: '5%',
        background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.02), transparent)`,
        borderRadius: '50%',
        filter: 'blur(25px)',
        transform: `translateX(${Math.sin(time * 0.25 + 1) * 30}px)`,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: '250px',
        height: '50px',
        top: '75%',
        left: '30%',
        background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.025), transparent)`,
        borderRadius: '50%',
        filter: 'blur(15px)',
        transform: `translateX(${Math.sin(time * 0.35 + 2) * 25}px)`,
        pointerEvents: 'none'
      }
    })), sortedIslands.map((island, renderOrder) => {
      const floatOffset = getFloatOffset(island);
      const isHovered = hoveredIndex === island.index;
      const scale = isHovered ? 1.08 : 1;
      const opacity = isHovered ? 1 : 0.7 + (1 - island.heightLevel) * 0.3;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: island.index
      }, showShadows && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: `${island.x * 100}%`,
          top: `${island.y * 100 + 10}%`,
          width: `${island.width * 0.8}px`,
          height: '20px',
          marginLeft: `-${island.width * 0.4}px`,
          background: `radial-gradient(ellipse, rgba(0,0,0,${0.2 - island.heightLevel * 0.1}) 0%, transparent 70%)`,
          borderRadius: '50%',
          transform: `translateY(${floatOffset * 0.3 + island.height * 0.5}px) scaleX(${1 - Math.abs(floatOffset) * 0.01})`,
          pointerEvents: 'none',
          opacity: isHovered ? 0.5 : 1
        }
      }), /*#__PURE__*/React.createElement("div", {
        onMouseEnter: () => setHoveredIndex(island.index),
        onMouseLeave: () => setHoveredIndex(null),
        style: {
          position: 'absolute',
          left: `${island.x * 100}%`,
          top: `${island.y * 100}%`,
          width: `${island.width}px`,
          height: `${island.height}px`,
          marginLeft: `-${island.width / 2}px`,
          marginTop: `-${island.height / 2}px`,
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          border: `1px solid ${cardBorderColor}`,
          cursor: 'pointer',
          opacity: prefersReducedMotion ? opacity : isInView ? opacity : 0,
          transform: prefersReducedMotion ? `rotate(${island.rotation}deg) scale(${scale})` : isInView ? `translateY(${floatOffset}px) rotate(${island.rotation}deg) scale(${scale})` : `translateY(50px) rotate(${island.rotation}deg) scale(0.8)`,
          zIndex: renderOrder + (isHovered ? 100 : 0),
          boxShadow: isHovered && hoverGlow ? `0 0 30px ${glowColor}40, 0 10px 40px rgba(0, 0, 0, 0.4)` : `0 ${8 + island.heightLevel * 16}px ${20 + island.heightLevel * 20}px rgba(0, 0, 0, 0.3)`,
          transition: prefersReducedMotion ? 'none' : `opacity 500ms ease-out ${island.index * 80}ms, 
                     box-shadow 300ms ease-out,
                     transform 300ms ease-out`,
          willChange: 'transform'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: island.image,
        alt: `Island ${island.index + 1}`,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }
      }), hoverGlow && isHovered && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${glowColor}15 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          borderRadius: `${borderRadius + 2}px`,
          border: `1px solid ${isHovered ? glowColor + '40' : 'rgba(255, 255, 255, 0.05)'}`,
          pointerEvents: 'none',
          transition: 'border-color 300ms ease-out'
        }
      })));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(ellipse at 50% 100%, ${glowColor}08 0%, transparent 50%)`,
        pointerEvents: 'none'
      }
    }));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};