window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-accordionfan"] = function (React) {
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
   * Component Type: Gallery.AccordionFan
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.AccordionFan",
    "description": "A fan gallery where images spread out like a hand of cards from a collapsed state",
    "editorElement": {
      "selector": ".accordion-fan-gallery",
      "displayName": "Accordion Fan Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=400&fit=crop,https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop,https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop,https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop,https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=400&fit=crop,https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop,https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop",
          "group": "Content",
          "description": "Comma-separated image URLs (5-9 recommended)"
        },
        "cardWidth": {
          "dataType": "select",
          "displayName": "Card Width",
          "defaultValue": "180",
          "options": ["140", "160", "180", "200", "220"],
          "group": "Layout"
        },
        "cardHeight": {
          "dataType": "select",
          "displayName": "Card Height",
          "defaultValue": "260",
          "options": ["200", "230", "260", "300", "340"],
          "group": "Layout"
        },
        "collapsedPeek": {
          "dataType": "select",
          "displayName": "Collapsed Peek (px)",
          "defaultValue": "20",
          "options": ["10", "15", "20", "25", "30"],
          "group": "Layout"
        },
        "fanRotation": {
          "dataType": "select",
          "displayName": "Max Fan Rotation (degrees)",
          "defaultValue": "25",
          "options": ["15", "20", "25", "30", "35"],
          "group": "Animation"
        },
        "fanSpread": {
          "dataType": "select",
          "displayName": "Fan Spread Width",
          "defaultValue": "80",
          "options": ["50", "60", "70", "80", "100"],
          "group": "Animation"
        },
        "hingePosition": {
          "dataType": "select",
          "displayName": "Hinge Position",
          "defaultValue": "bottom",
          "options": ["bottom", "center", "top"],
          "group": "Layout"
        },
        "transitionDuration": {
          "dataType": "select",
          "displayName": "Transition Duration",
          "defaultValue": "500",
          "options": ["300", "400", "500", "600", "800"],
          "group": "Animation"
        },
        "springEffect": {
          "dataType": "booleanValue",
          "displayName": "Spring Animation",
          "defaultValue": true,
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
          "defaultValue": "#FAFAF9",
          "group": "Colors"
        },
        "borderRadius": {
          "dataType": "select",
          "displayName": "Border Radius",
          "defaultValue": "12",
          "options": ["6", "8", "12", "16", "20"],
          "group": "Layout"
        },
        "expandOnHover": {
          "dataType": "booleanValue",
          "displayName": "Expand on Hover",
          "defaultValue": true,
          "group": "Animation"
        },
        "showLabels": {
          "dataType": "booleanValue",
          "displayName": "Show Card Numbers",
          "defaultValue": false,
          "group": "Content"
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
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [isInView, setIsInView] = React.useState(false);
    const containerRef = React.useRef(null);
    const images = React.useMemo(() => {
      return (config?.images || MANIFEST.editorElement.data.images.defaultValue).split(',').map(url => url.trim()).filter(Boolean);
    }, [config?.images]);
    const cardWidth = parseInt(config?.cardWidth || '180');
    const cardHeight = parseInt(config?.cardHeight || '260');
    const collapsedPeek = parseInt(config?.collapsedPeek || '20');
    const fanRotation = parseInt(config?.fanRotation || '25');
    const fanSpread = parseInt(config?.fanSpread || '80');
    const hingePosition = config?.hingePosition || 'bottom';
    const transitionDuration = parseInt(config?.transitionDuration || '500');
    const springEffect = config?.springEffect !== false;
    const backgroundColor = config?.backgroundColor || '#1C1917';
    const cardBorderColor = config?.cardBorderColor || '#FAFAF9';
    const borderRadius = parseInt(config?.borderRadius || '12');
    const expandOnHover = config?.expandOnHover !== false;
    const showLabels = config?.showLabels === true;
    const prefersReducedMotion = React.useMemo(() => {
      return typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    }, []);
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsInView(true);
        });
      }, {
        threshold: 0.3
      });
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);

    // Transform origin based on hinge position
    const getTransformOrigin = () => {
      switch (hingePosition) {
        case 'top':
          return 'center top';
        case 'center':
          return 'center center';
        default:
          return 'center bottom';
      }
    };

    // Calculate card transforms
    const getCardTransform = index => {
      const total = images.length;
      const centerIndex = (total - 1) / 2;
      const offset = index - centerIndex;
      const normalizedOffset = offset / centerIndex;
      if (selectedCard === index) {
        return {
          rotation: 0,
          translateX: 0,
          translateY: -50,
          scale: 1.15,
          zIndex: 100
        };
      }
      if (isExpanded) {
        return {
          rotation: offset * (fanRotation / centerIndex),
          translateX: offset * fanSpread,
          translateY: Math.abs(normalizedOffset) * 20,
          scale: 1,
          zIndex: total - Math.abs(offset)
        };
      }

      // Collapsed state
      return {
        rotation: offset * 2,
        translateX: offset * collapsedPeek,
        translateY: 0,
        scale: 1 - Math.abs(normalizedOffset) * 0.02,
        zIndex: total - Math.abs(offset)
      };
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
    const transitionTiming = springEffect ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-out';
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "accordion-fan-gallery",
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
      onMouseEnter: () => expandOnHover && setIsExpanded(true),
      onMouseLeave: () => {
        expandOnHover && setIsExpanded(false);
        setSelectedCard(null);
      },
      style: {
        position: 'relative',
        width: `${cardWidth + fanSpread * 2 * images.length}px`,
        height: `${cardHeight + 100}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, images.map((image, index) => {
      const transform = getCardTransform(index);
      const isSelected = selectedCard === index;
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        onClick: () => setSelectedCard(selectedCard === index ? null : index),
        style: {
          position: 'absolute',
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          border: `3px solid ${cardBorderColor}`,
          cursor: 'pointer',
          transformOrigin: getTransformOrigin(),
          opacity: prefersReducedMotion ? 1 : isInView ? 1 : 0,
          transform: prefersReducedMotion ? `translateX(${transform.translateX}px) translateY(${transform.translateY}px) rotate(${transform.rotation}deg) scale(${transform.scale})` : isInView ? `translateX(${transform.translateX}px) translateY(${transform.translateY}px) rotate(${transform.rotation}deg) scale(${transform.scale})` : `translateY(100px) rotate(0deg) scale(0.8)`,
          zIndex: transform.zIndex,
          boxShadow: isSelected ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.2)` : `0 ${4 + Math.abs(transform.rotation) * 0.5}px ${10 + Math.abs(transform.rotation)}px rgba(0,0,0,0.3)`,
          transition: prefersReducedMotion ? 'none' : `transform ${transitionDuration}ms ${transitionTiming},
                     box-shadow ${transitionDuration}ms ease-out,
                     opacity 400ms ease-out ${index * 50}ms`,
          willChange: 'transform'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: image,
        alt: `Card ${index + 1}`,
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
          background: `linear-gradient(135deg, rgba(255,255,255,${isSelected ? 0.15 : 0.08}) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)`,
          pointerEvents: 'none'
        }
      }), showLabels && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: '#FFFFFF',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600'
        }
      }, index + 1));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setIsExpanded(!isExpanded),
      "aria-label": isExpanded ? 'Collapse fan' : 'Expand fan',
      style: {
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: '500',
        color: backgroundColor,
        backgroundColor: cardBorderColor,
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        cursor: 'pointer',
        transition: 'opacity 200ms ease-out'
      },
      onMouseEnter: e => e.target.style.opacity = '0.9',
      onMouseLeave: e => e.target.style.opacity = '1'
    }, isExpanded ? 'Collapse' : 'Expand', " Fan")));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};