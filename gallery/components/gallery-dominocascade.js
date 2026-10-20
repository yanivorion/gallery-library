window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-dominocascade"] = function (React) {
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
   * Component Type: Gallery.DominoCascade
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.DominoCascade",
    "description": "A gallery where images are arranged like falling dominoes in a cascade sequence",
    "editorElement": {
      "selector": ".domino-cascade-gallery",
      "displayName": "Domino Cascade Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop,https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=300&fit=crop,https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200&h=300&fit=crop,https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200&h=300&fit=crop,https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=300&fit=crop,https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=300&fit=crop,https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop,https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=300&fit=crop",
          "group": "Content",
          "description": "Comma-separated image URLs (6-10 recommended)"
        },
        "cardWidth": {
          "dataType": "select",
          "displayName": "Card Width",
          "defaultValue": "120",
          "options": ["90", "100", "120", "140", "160"],
          "group": "Layout"
        },
        "cardHeight": {
          "dataType": "select",
          "displayName": "Card Height",
          "defaultValue": "180",
          "options": ["150", "160", "180", "200", "240"],
          "group": "Layout"
        },
        "maxTilt": {
          "dataType": "select",
          "displayName": "Max Tilt (degrees)",
          "defaultValue": "70",
          "options": ["45", "55", "65", "70", "80"],
          "group": "Animation"
        },
        "spacing": {
          "dataType": "select",
          "displayName": "Domino Spacing",
          "defaultValue": "40",
          "options": ["30", "35", "40", "50", "60"],
          "group": "Layout"
        },
        "cascadeDelay": {
          "dataType": "select",
          "displayName": "Cascade Delay (ms)",
          "defaultValue": "80",
          "options": ["50", "60", "80", "100", "120"],
          "group": "Animation"
        },
        "transitionDuration": {
          "dataType": "select",
          "displayName": "Fall Duration (ms)",
          "defaultValue": "400",
          "options": ["200", "300", "400", "500", "600"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#1C1917",
          "group": "Colors"
        },
        "cardBorderColor": {
          "dataType": "color",
          "displayName": "Card Border Color",
          "defaultValue": "#D6D3D1",
          "group": "Colors"
        },
        "impactColor": {
          "dataType": "color",
          "displayName": "Impact Highlight Color",
          "defaultValue": "#FEF3C7",
          "group": "Colors"
        },
        "borderRadius": {
          "dataType": "select",
          "displayName": "Border Radius",
          "defaultValue": "8",
          "options": ["4", "6", "8", "12", "16"],
          "group": "Layout"
        },
        "showResetButton": {
          "dataType": "booleanValue",
          "displayName": "Show Reset Button",
          "defaultValue": true,
          "group": "Content"
        },
        "autoTrigger": {
          "dataType": "booleanValue",
          "displayName": "Auto Trigger on View",
          "defaultValue": true,
          "group": "Animation"
        },
        "hoverCatch": {
          "dataType": "booleanValue",
          "displayName": "Catch Domino on Hover",
          "defaultValue": true,
          "group": "Animation"
        },
        "showImpactEffect": {
          "dataType": "booleanValue",
          "displayName": "Show Impact Effect",
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
    const [dominoStates, setDominoStates] = React.useState([]);
    const [hoveredDomino, setHoveredDomino] = React.useState(null);
    const [impactIndex, setImpactIndex] = React.useState(null);
    const [cascadeTriggered, setCascadeTriggered] = React.useState(false);
    const [isInView, setIsInView] = React.useState(false);
    const containerRef = React.useRef(null);
    const images = React.useMemo(() => {
      return (config?.images || MANIFEST.editorElement.data.images.defaultValue).split(',').map(url => url.trim()).filter(Boolean);
    }, [config?.images]);
    const cardWidth = parseInt(config?.cardWidth || '120');
    const cardHeight = parseInt(config?.cardHeight || '180');
    const maxTilt = parseInt(config?.maxTilt || '70');
    const spacing = parseInt(config?.spacing || '40');
    const cascadeDelay = parseInt(config?.cascadeDelay || '80');
    const transitionDuration = parseInt(config?.transitionDuration || '400');
    const backgroundColor = config?.backgroundColor || '#1C1917';
    const cardBorderColor = config?.cardBorderColor || '#D6D3D1';
    const impactColor = config?.impactColor || '#FEF3C7';
    const borderRadius = parseInt(config?.borderRadius || '8');
    const showResetButton = config?.showResetButton !== false;
    const autoTrigger = config?.autoTrigger !== false;
    const hoverCatch = config?.hoverCatch !== false;
    const showImpactEffect = config?.showImpactEffect !== false;
    const prefersReducedMotion = React.useMemo(() => {
      return typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    }, []);

    // Initialize domino states (all standing)
    React.useEffect(() => {
      setDominoStates(images.map(() => 'standing'));
    }, [images.length]);
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (autoTrigger && !cascadeTriggered && !prefersReducedMotion) {
              setTimeout(() => triggerCascade(), 500);
            }
          }
        });
      }, {
        threshold: 0.5
      });
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, [autoTrigger, cascadeTriggered, prefersReducedMotion]);

    // Trigger cascade
    const triggerCascade = () => {
      if (cascadeTriggered) return;
      setCascadeTriggered(true);
      images.forEach((_, index) => {
        setTimeout(() => {
          // Skip if domino is being hovered (caught)
          setDominoStates(prev => {
            const newStates = [...prev];
            // Only fall if not caught
            if (!(hoverCatch && hoveredDomino === index)) {
              newStates[index] = 'falling';
            }
            return newStates;
          });

          // Show impact effect
          if (showImpactEffect) {
            setImpactIndex(index);
            setTimeout(() => setImpactIndex(null), 200);
          }
        }, index * cascadeDelay);
      });
    };

    // Reset all dominoes
    const resetDominoes = () => {
      setCascadeTriggered(false);
      setDominoStates(images.map(() => 'standing'));
      setHoveredDomino(null);
      setImpactIndex(null);
    };

    // Handle hover catch
    const handleHover = index => {
      setHoveredDomino(index);
      if (hoverCatch && dominoStates[index] === 'falling') {
        // Catch the domino - make it stand
        setDominoStates(prev => {
          const newStates = [...prev];
          newStates[index] = 'standing';
          return newStates;
        });
      }
    };

    // Calculate tilt for each domino
    const getDominoTilt = index => {
      const state = dominoStates[index];
      const isHovered = hoveredDomino === index;
      if (isHovered && hoverCatch) {
        return 0; // Standing upright when caught
      }
      if (state === 'falling') {
        // Progressive tilt based on position
        const progress = index / (images.length - 1);
        return maxTilt * (0.7 + progress * 0.3);
      }
      return 0; // Standing
    };
    if (images.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          color: '#71717A'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '18px'
        }
      }, "No images provided")));
    }
    const totalWidth = images.length * spacing + cardWidth;
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "domino-cascade-gallery",
      style: {
        backgroundColor,
        minHeight: `${cardHeight + 200}px`,
        padding: '80px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: `${totalWidth}px`,
        height: `${cardHeight + 40}px`,
        perspective: '1000px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: '#44403C',
        borderRadius: '2px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }
    }), images.map((image, index) => {
      const tilt = getDominoTilt(index);
      const isHovered = hoveredDomino === index;
      const isFalling = dominoStates[index] === 'falling';
      const isImpact = impactIndex === index;
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        onMouseEnter: () => handleHover(index),
        onMouseLeave: () => setHoveredDomino(null),
        onClick: () => {
          if (!cascadeTriggered) triggerCascade();
        },
        style: {
          position: 'absolute',
          bottom: '4px',
          left: `${index * spacing}px`,
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          transformOrigin: 'bottom center',
          cursor: cascadeTriggered ? hoverCatch ? 'grab' : 'default' : 'pointer',
          opacity: prefersReducedMotion ? 1 : isInView ? 1 : 0,
          transform: prefersReducedMotion ? `rotateX(${tilt}deg) ${isHovered ? 'translateY(-5px)' : ''}` : isInView ? `rotateX(${tilt}deg) ${isHovered && !isFalling ? 'translateY(-5px)' : ''}` : `rotateX(0deg) translateY(30px) scale(0.9)`,
          zIndex: images.length - index + (isHovered ? 50 : 0),
          transition: prefersReducedMotion ? 'none' : isFalling ? `transform ${transitionDuration}ms cubic-bezier(0.55, 0.055, 0.675, 0.19)` : `transform ${transitionDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1),
                       opacity 400ms ease-out ${index * 50}ms`,
          willChange: 'transform'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          border: `3px solid ${cardBorderColor}`,
          backgroundColor: '#FAFAFA',
          boxShadow: isFalling ? `${-5 - tilt * 0.1}px ${5 + tilt * 0.2}px ${15 + tilt * 0.3}px rgba(0,0,0,0.4)` : isHovered ? `0 8px 30px rgba(0,0,0,0.3), 0 0 0 2px ${impactColor}` : '0 4px 12px rgba(0,0,0,0.2)',
          transition: 'box-shadow 200ms ease-out'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: image,
        alt: `Domino ${index + 1}`,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, 
                      rgba(255,255,255,0.15) 0%, 
                      transparent 40%, 
                      transparent 60%, 
                      rgba(0,0,0,0.1) 100%
                    )`,
          pointerEvents: 'none'
        }
      })), showImpactEffect && isImpact && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '20px',
          background: `radial-gradient(ellipse, ${impactColor}60 0%, transparent 70%)`,
          borderRadius: '50%',
          animation: 'impactPulse 200ms ease-out',
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '6px',
          height: '6px',
          backgroundColor: '#44403C',
          borderRadius: '50%',
          opacity: 0.5
        }
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }
    }, !cascadeTriggered && /*#__PURE__*/React.createElement("button", {
      onClick: triggerCascade,
      "aria-label": "Trigger cascade",
      style: {
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: '500',
        color: '#1C1917',
        backgroundColor: impactColor,
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        cursor: 'pointer',
        transition: 'transform 200ms ease-out, opacity 200ms ease-out'
      },
      onMouseEnter: e => e.target.style.transform = 'scale(1.05)',
      onMouseLeave: e => e.target.style.transform = 'scale(1)'
    }, "Push First Domino"), showResetButton && cascadeTriggered && /*#__PURE__*/React.createElement("button", {
      onClick: resetDominoes,
      "aria-label": "Reset dominoes",
      style: {
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: '500',
        color: '#FAFAFA',
        backgroundColor: '#44403C',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        cursor: 'pointer',
        transition: 'background-color 200ms ease-out'
      },
      onMouseEnter: e => e.target.style.backgroundColor = '#57534E',
      onMouseLeave: e => e.target.style.backgroundColor = '#44403C'
    }, "Reset Dominoes")), /*#__PURE__*/React.createElement("style", null, `
        @keyframes impactPulse {
          0% { transform: translateX(-50%) scale(0.5); opacity: 1; }
          100% { transform: translateX(-50%) scale(1.5); opacity: 0; }
        }
      `));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};