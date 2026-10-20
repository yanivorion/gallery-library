window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-advancedshowcasegrid"] = function (React) {
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
   * Component Type: Gallery.AdvancedShowcaseGrid
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.AdvancedShowcaseGrid",
    "description": "Award-winning product grid with 3D tilt, magnetic cursor, parallax scrolling, advanced LQIP loading, and fluid animations",
    "editorElement": {
      "selector": ".advanced-showcase-grid",
      "displayName": "Advanced Showcase Grid",
      "archetype": "container",
      "data": {
        "products": {
          "dataType": "text",
          "displayName": "Products (Title|Price|Category|Badge)",
          "defaultValue": "Minimal Chair|$299|Furniture|New,Ceramic Vase|$89|Decor|Sale,Oak Table|$699|Furniture|Featured,Wool Rug|$399|Textiles|Trending,Brass Lamp|$159|Lighting|New,Linen Pillow|$49|Textiles|Best Seller",
          "group": "Content"
        },
        "enable3DTilt": {
          "dataType": "booleanValue",
          "displayName": "3D Tilt Effect",
          "defaultValue": true,
          "group": "Animation"
        },
        "enableMagneticCursor": {
          "dataType": "booleanValue",
          "displayName": "Magnetic Cursor",
          "defaultValue": true,
          "group": "Animation"
        },
        "enableParallaxScroll": {
          "dataType": "booleanValue",
          "displayName": "Parallax Scroll",
          "defaultValue": true,
          "group": "Animation"
        },
        "enableImageZoom": {
          "dataType": "booleanValue",
          "displayName": "Image Zoom on Hover",
          "defaultValue": true,
          "group": "Animation"
        },
        "tiltIntensity": {
          "dataType": "select",
          "displayName": "Tilt Intensity",
          "defaultValue": "medium",
          "options": ["subtle", "medium", "strong", "extreme"],
          "group": "Animation"
        },
        "columns": {
          "dataType": "select",
          "displayName": "Columns (Desktop)",
          "defaultValue": "3",
          "options": ["2", "3", "4"],
          "group": "Layout"
        },
        "gap": {
          "dataType": "select",
          "displayName": "Grid Gap",
          "defaultValue": "2rem",
          "options": ["1rem", "1.5rem", "2rem", "3rem"],
          "group": "Layout"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "cardBackground": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#dddddd",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "glowColor": {
          "dataType": "color",
          "displayName": "Glow Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "titleFontSize": {
          "dataType": "number",
          "displayName": "Title Font Size (px)",
          "defaultValue": 18,
          "group": "Typography"
        },
        "fontWeight": {
          "dataType": "select",
          "displayName": "Font Weight",
          "defaultValue": "400",
          "options": ["300", "400", "500"],
          "group": "Typography"
        }
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [loadedImages, setLoadedImages] = React.useState(new Set());
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [tiltData, setTiltData] = React.useState({});
    const [cursorPos, setCursorPos] = React.useState({
      x: 0,
      y: 0
    });
    const [scrollY, setScrollY] = React.useState(0);
    const cardRefs = React.useRef([]);
    const containerRef = React.useRef(null);
    const products = (config?.products || MANIFEST.editorElement.data.products.defaultValue).split(',').map((product, i) => {
      const [title, price, category, badge] = product.split('|');
      return {
        title: title?.trim() || '',
        price: price?.trim() || '',
        category: category?.trim() || '',
        badge: badge?.trim() || '',
        lqip: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cfilter id='b${i}'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect fill='%23${['2A2A2A', '1F1F1F', '252525', '2E2E2E'][i % 4]}' width='400' height='500' filter='url(%23b${i})'/%3E%3C/svg%3E`,
        fullImage: `assets/08.webp) || 'product'}&sig=${i}`
      };
    });
    const enable3DTilt = config?.enable3DTilt !== false;
    const enableMagneticCursor = config?.enableMagneticCursor !== false;
    const enableParallaxScroll = config?.enableParallaxScroll !== false;
    const enableImageZoom = config?.enableImageZoom !== false;
    const tiltIntensity = config?.tiltIntensity || 'medium';
    const columns = parseInt(config?.columns || '3');
    const gap = config?.gap || '2rem';
    const backgroundColor = config?.backgroundColor || '#111111';
    const cardBackground = config?.cardBackground || '#222222';
    const textColor = config?.textColor || '#dddddd';
    const accentColor = config?.accentColor || '#ffffff';
    const glowColor = config?.glowColor || '#ffffff';
    const titleFontSize = parseInt(config?.titleFontSize || '18');
    const fontWeight = config?.fontWeight || '400';
    const tiltValues = {
      subtle: 5,
      medium: 10,
      strong: 15,
      extreme: 20
    };
    const tiltMax = tiltValues[tiltIntensity] || 10;
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const hexToRgba = (hex, alpha) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Scroll parallax
    React.useEffect(() => {
      if (!enableParallaxScroll || prefersReducedMotion) return;
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll, {
        passive: true
      });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [enableParallaxScroll, prefersReducedMotion]);

    // Magnetic cursor
    React.useEffect(() => {
      if (!enableMagneticCursor || prefersReducedMotion) return;
      const handleMouseMove = e => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY
        });
      };
      window.addEventListener('mousemove', handleMouseMove, {
        passive: true
      });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [enableMagneticCursor, prefersReducedMotion]);

    // 3D tilt effect
    const handleMouseMove = (e, index) => {
      if (!enable3DTilt || prefersReducedMotion) return;
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -tiltMax;
      const rotateY = (x - centerX) / centerX * tiltMax;
      setTiltData(prev => ({
        ...prev,
        [index]: {
          rotateX,
          rotateY,
          x,
          y
        }
      }));
    };
    const handleMouseLeave = index => {
      setTiltData(prev => ({
        ...prev,
        [index]: {
          rotateX: 0,
          rotateY: 0,
          x: 0,
          y: 0
        }
      }));
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      style: {
        backgroundColor,
        minHeight: '100vh',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${hexToRgba(glowColor, 0.03)} 0%, transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 0.3s ease'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: gap,
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }
    }, products.map((product, index) => {
      const tilt = tiltData[index] || {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0
      };
      const isHovered = hoveredIndex === index;

      // Parallax offset for each card
      const parallaxOffset = enableParallaxScroll ? index % 2 === 0 ? scrollY * 0.05 : scrollY * -0.03 : 0;

      // Magnetic pull towards cursor
      let magneticOffset = {
        x: 0,
        y: 0
      };
      if (enableMagneticCursor && isHovered && !prefersReducedMotion) {
        const card = cardRefs.current[index];
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;
          const distance = Math.sqrt(Math.pow(cursorPos.x - cardCenterX, 2) + Math.pow(cursorPos.y - cardCenterY, 2));
          if (distance < 200) {
            const intensity = 1 - distance / 200;
            magneticOffset.x = (cursorPos.x - cardCenterX) * 0.05 * intensity;
            magneticOffset.y = (cursorPos.y - cardCenterY) * 0.05 * intensity;
          }
        }
      }
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        ref: el => cardRefs.current[index] = el,
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => {
          setHoveredIndex(null);
          handleMouseLeave(index);
        },
        onMouseMove: e => handleMouseMove(e, index),
        style: {
          position: 'relative',
          backgroundColor: cardBackground,
          borderRadius: '8px',
          overflow: 'hidden',
          cursor: 'pointer',
          perspective: '1000px',
          transform: prefersReducedMotion ? 'none' : `
                  translateY(${parallaxOffset}px)
                  translateX(${magneticOffset.x}px)
                  translateY(${magneticOffset.y}px)
                  rotateX(${tilt.rotateX}deg)
                  rotateY(${tilt.rotateY}deg)
                  scale(${isHovered ? 1.02 : 1})
                `,
          transformStyle: 'preserve-3d',
          transition: prefersReducedMotion ? 'none' : `
                  transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                  box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)
                `,
          boxShadow: isHovered ? `
                    0 20px 60px ${hexToRgba(glowColor, 0.15)},
                    0 0 40px ${hexToRgba(glowColor, 0.1)},
                    inset 0 1px 0 ${hexToRgba('#ffffff', 0.1)}
                  ` : `0 4px 20px ${hexToRgba('#000000', 0.3)}`,
          willChange: 'transform'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          aspectRatio: '4/5',
          overflow: 'hidden',
          backgroundColor: '#111111'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: product.lqip,
        alt: "",
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: prefersReducedMotion ? 'none' : 'opacity 0.6s ease',
          opacity: loadedImages.has(index) ? 0 : 1,
          filter: 'blur(20px) saturate(120%)',
          transform: 'scale(1.1)'
        }
      }), /*#__PURE__*/React.createElement("img", {
        src: product.fullImage,
        alt: product.title,
        onLoad: () => {
          setLoadedImages(prev => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
        },
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: prefersReducedMotion ? 'none' : `
                      opacity 0.6s ease,
                      transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)
                    `,
          opacity: loadedImages.has(index) ? 1 : 0,
          transform: prefersReducedMotion ? 'none' : enableImageZoom && isHovered ? 'scale(1.08)' : 'scale(1)'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, transparent 0%, ${hexToRgba('#000000', 0.6)} 100%)`,
          opacity: isHovered ? 1 : 0,
          transition: prefersReducedMotion ? 'none' : 'opacity 0.4s ease'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(${45 + tilt.rotateY}deg, transparent 30%, ${hexToRgba('#ffffff', 0.1)} 50%, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
          transition: prefersReducedMotion ? 'none' : 'opacity 0.4s ease, background 0.2s ease',
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          border: `1px solid ${hexToRgba(textColor, isHovered ? 0.3 : 0.1)}`,
          borderRadius: '8px',
          pointerEvents: 'none',
          transition: prefersReducedMotion ? 'none' : 'border-color 0.4s ease',
          boxShadow: isHovered ? `inset 0 0 20px ${hexToRgba(glowColor, 0.1)}` : 'none'
        }
      }), product.badge && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: hexToRgba(cardBackground, 0.6),
          backdropFilter: prefersReducedMotion ? 'none' : 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: prefersReducedMotion ? 'none' : 'blur(20px) saturate(180%)',
          borderRadius: '6px',
          fontSize: '11px',
          fontWeight: '500',
          color: accentColor,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          border: `1px solid ${hexToRgba(accentColor, 0.2)}`,
          opacity: prefersReducedMotion ? 1 : isHovered ? 1 : 0,
          transform: prefersReducedMotion ? 'none' : isHovered ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
          transition: prefersReducedMotion ? 'none' : `
                      all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
                    `
        }
      }, product.badge)), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '1.5rem',
          position: 'relative',
          zIndex: 1,
          background: `linear-gradient(180deg, ${cardBackground} 0%, ${hexToRgba(cardBackground, 0.95)} 100%)`
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: `${titleFontSize}px`,
          fontWeight: '500',
          color: textColor,
          marginBottom: '0.5rem',
          letterSpacing: '-0.01em',
          transform: prefersReducedMotion ? 'none' : isHovered ? 'translateX(4px)' : 'translateX(0)',
          transition: prefersReducedMotion ? 'none' : 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
        }
      }, product.title), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: hexToRgba(textColor, 0.5),
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontSize: '11px'
        }
      }, product.category), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: '500',
          color: accentColor,
          fontSize: `${titleFontSize}px`,
          transform: prefersReducedMotion ? 'none' : isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: prefersReducedMotion ? 'none' : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          display: 'inline-block'
        }
      }, product.price))));
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};