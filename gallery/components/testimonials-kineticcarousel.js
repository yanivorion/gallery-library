window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["testimonials-kineticcarousel"] = function (React) {
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
   * Project: Galleries, Carousels & Slideshows (4/4)
   * Generated: Sep 15, 2026, 01:36 PM
   * Component Type: Testimonials.KineticCarousel
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Testimonials.KineticCarousel",
    "description": "Award-winning kinetic typography testimonials with elastic character animations, magnetic scroll, and fluid transitions",
    "editorElement": {
      "selector": ".kinetic-testimonials",
      "displayName": "Kinetic Testimonials",
      "archetype": "container",
      "data": {
        "testimonials": {
          "dataType": "text",
          "displayName": "Testimonials (Quote|Author|Role|Company)",
          "defaultValue": "TRANSFORMATIVE EXPERIENCE THAT EXCEEDED EVERY EXPECTATION|SARAH CHEN|CREATIVE DIRECTOR|STUDIO XYZ,ATTENTION TO DETAIL IS ABSOLUTELY REMARKABLE AND INSPIRING|MICHAEL ROSS|FOUNDER & CEO|TECH VENTURES,ELEVATED OUR BRAND TO AN ENTIRELY NEW LEVEL OF SOPHISTICATION|EMMA WATSON|HEAD OF MARKETING|GLOBAL BRANDS",
          "group": "Content"
        },
        "autoplay": {
          "dataType": "booleanValue",
          "displayName": "Autoplay",
          "defaultValue": true,
          "group": "Content"
        },
        "enableMagneticScroll": {
          "dataType": "booleanValue",
          "displayName": "Magnetic Scroll Snap",
          "defaultValue": true,
          "group": "Animation"
        },
        "enable3DRotation": {
          "dataType": "booleanValue",
          "displayName": "3D Card Rotation",
          "defaultValue": true,
          "group": "Animation"
        },
        "characterPreset": {
          "dataType": "select",
          "displayName": "Character Animation",
          "defaultValue": "elastic",
          "options": ["wave", "elastic", "spiral", "glitch", "magnetic"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#FAFAFA",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "quoteFontSize": {
          "dataType": "number",
          "displayName": "Quote Font Size (px)",
          "defaultValue": 42,
          "group": "Typography"
        },
        "fontWeight": {
          "dataType": "select",
          "displayName": "Font Weight",
          "defaultValue": "300",
          "options": ["300", "400", "500"],
          "group": "Typography"
        },
        "letterSpacing": {
          "dataType": "select",
          "displayName": "Letter Spacing",
          "defaultValue": "0.1em",
          "options": ["0.05em", "0.075em", "0.1em", "0.15em"],
          "group": "Typography"
        }
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [animatedChars, setAnimatedChars] = React.useState(new Set());
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [direction, setDirection] = React.useState(1);
    const [mousePos, setMousePos] = React.useState({
      x: 0,
      y: 0
    });
    const [cardRotation, setCardRotation] = React.useState({
      x: 0,
      y: 0
    });
    const containerRef = React.useRef(null);
    const testimonials = (config?.testimonials || MANIFEST.editorElement.data.testimonials.defaultValue).split(',').map(item => {
      const [quote, author, role, company] = item.split('|');
      return {
        quote: quote?.trim() || '',
        author: author?.trim() || '',
        role: role?.trim() || '',
        company: company?.trim() || ''
      };
    });
    const autoplay = config?.autoplay !== false;
    const enableMagneticScroll = config?.enableMagneticScroll !== false;
    const enable3DRotation = config?.enable3DRotation !== false;
    const characterPreset = config?.characterPreset || 'elastic';
    const backgroundColor = config?.backgroundColor || '#FAFAFA';
    const textColor = config?.textColor || '#000000';
    const accentColor = config?.accentColor || '#000000';
    const quoteFontSize = parseInt(config?.quoteFontSize || '42');
    const fontWeight = config?.fontWeight || '300';
    const letterSpacing = config?.letterSpacing || '0.1em';
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const hexToRgba = (hex, alpha) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Character animation
    React.useEffect(() => {
      if (prefersReducedMotion || isAnimating) return;
      const quote = testimonials[currentIndex]?.quote || '';
      const characters = quote.split('');
      setAnimatedChars(new Set());
      setIsAnimating(true);
      const staggerDelay = 2000 / characters.length;
      characters.forEach((_, charIndex) => {
        setTimeout(() => {
          setAnimatedChars(prev => {
            const newSet = new Set(prev);
            newSet.add(charIndex);
            return newSet;
          });
        }, charIndex * staggerDelay);
      });
      setTimeout(() => setIsAnimating(false), characters.length * staggerDelay + 800);
    }, [currentIndex, prefersReducedMotion]);

    // 3D card rotation
    const handleMouseMove = e => {
      if (!enable3DRotation || prefersReducedMotion) return;
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -8;
      const rotateY = (x - centerX) / centerX * 8;
      setCardRotation({
        x: rotateX,
        y: rotateY
      });
      setMousePos({
        x,
        y
      });
    };
    const handleMouseLeave = () => {
      setCardRotation({
        x: 0,
        y: 0
      });
    };
    const getCharacterTransform = (charIndex, totalChars) => {
      if (prefersReducedMotion || animatedChars.has(charIndex)) return {
        transform: 'translate(0, 0) rotate(0deg) scale(1)',
        opacity: 1
      };
      const position = charIndex / totalChars;
      const seed = charIndex * 0.1;
      switch (characterPreset) {
        case 'wave':
          return {
            transform: `translateY(${40 + Math.sin(position * Math.PI * 3) * 20}px) scale(0.8)`,
            opacity: 0
          };
        case 'elastic':
          return {
            transform: `translateY(${60}px) scale(0.6) rotate(${Math.sin(seed) * 15}deg)`,
            opacity: 0
          };
        case 'spiral':
          return {
            transform: `translate(${Math.cos(position * Math.PI * 4) * 40}px, ${Math.sin(position * Math.PI * 4) * 40}px) rotate(${position * 360}deg) scale(0.5)`,
            opacity: 0
          };
        case 'glitch':
          return {
            transform: `translate(${(Math.random() - 0.5) * 80}px, ${(Math.random() - 0.5) * 80}px) scale(${0.3 + Math.random() * 0.5})`,
            opacity: 0
          };
        case 'magnetic':
          return {
            transform: `translate(${(position - 0.5) * 100}px, ${Math.abs(position - 0.5) * 60}px) scale(0.7)`,
            opacity: 0
          };
        default:
          return {
            transform: 'translateY(40px) scale(0.8)',
            opacity: 0
          };
      }
    };
    const navigate = newDirection => {
      setDirection(newDirection);
      setCurrentIndex(prev => {
        const next = prev + newDirection;
        if (next < 0) return testimonials.length - 1;
        if (next >= testimonials.length) return 0;
        return next;
      });
    };
    const current = testimonials[currentIndex] || testimonials[0];
    const characters = (current?.quote || '').split('');
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: {
        backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        perspective: '2000px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: mousePos.y - 200,
        left: mousePos.x - 200,
        width: '400px',
        height: '400px',
        background: `radial-gradient(circle, ${hexToRgba(accentColor, 0.05)} 0%, transparent 70%)`,
        pointerEvents: 'none',
        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1000px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: prefersReducedMotion ? 'none' : `
          rotateX(${cardRotation.x}deg) 
          rotateY(${cardRotation.y}deg)
          translateZ(20px)
        `,
        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4rem 3rem',
        borderRadius: '24px',
        backdropFilter: prefersReducedMotion ? 'none' : 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: prefersReducedMotion ? 'none' : 'blur(40px) saturate(180%)',
        backgroundColor: hexToRgba(backgroundColor, 0.4),
        border: `1px solid ${hexToRgba(textColor, 0.08)}`,
        boxShadow: `
            0 20px 60px ${hexToRgba('#000000', 0.1)},
            0 0 1px ${hexToRgba(textColor, 0.1)},
            inset 0 1px 0 ${hexToRgba('#FFFFFF', 0.2)}
          `,
        marginBottom: '3rem',
        position: 'relative',
        transformStyle: 'preserve-3d'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: `${quoteFontSize}px`,
        fontWeight: fontWeight,
        color: textColor,
        letterSpacing: letterSpacing,
        textTransform: 'uppercase',
        lineHeight: 1.3,
        marginBottom: '3rem',
        position: 'relative'
      }
    }, characters.map((char, index) => {
      const charTransform = getCharacterTransform(index, characters.length);
      const isAnimated = animatedChars.has(index);
      return /*#__PURE__*/React.createElement("span", {
        key: index,
        style: {
          display: 'inline-block',
          opacity: isAnimated ? 1 : charTransform.opacity,
          transform: isAnimated ? 'translate(0, 0) rotate(0deg) scale(1)' : charTransform.transform,
          transition: prefersReducedMotion ? 'none' : `
                    all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.02}s
                  `,
          whiteSpace: 'pre',
          transformOrigin: 'center center'
        }
      }, char === ' ' ? '\u00A0' : char);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '16px',
        fontWeight: '500',
        color: textColor,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
        transition: prefersReducedMotion ? 'none' : 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s'
      }
    }, current?.author), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '13px',
        fontWeight: '300',
        color: hexToRgba(textColor, 0.6),
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
        transition: prefersReducedMotion ? 'none' : 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
      }
    }, current?.role, " ", current?.company && `• ${current.company}`))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => navigate(-1),
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: `1px solid ${hexToRgba(textColor, 0.13)}`,
        backgroundColor: hexToRgba(backgroundColor, 0.5),
        backdropFilter: prefersReducedMotion ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: prefersReducedMotion ? 'none' : 'blur(20px)',
        color: textColor,
        fontSize: '20px',
        cursor: 'pointer',
        transition: prefersReducedMotion ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: 'scale(1)'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) e.currentTarget.style.transform = 'scale(1.1)';
      },
      onMouseLeave: e => {
        if (!prefersReducedMotion) e.currentTarget.style.transform = 'scale(1)';
      }
    }, "←"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.75rem'
      }
    }, testimonials.map((_, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
      },
      style: {
        width: index === currentIndex ? '32px' : '8px',
        height: '8px',
        borderRadius: '4px',
        backgroundColor: index === currentIndex ? accentColor : hexToRgba(textColor, 0.2),
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transition: prefersReducedMotion ? 'none' : 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: () => navigate(1),
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: `1px solid ${hexToRgba(textColor, 0.13)}`,
        backgroundColor: hexToRgba(backgroundColor, 0.5),
        backdropFilter: prefersReducedMotion ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: prefersReducedMotion ? 'none' : 'blur(20px)',
        color: textColor,
        fontSize: '20px',
        cursor: 'pointer',
        transition: prefersReducedMotion ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: 'scale(1)'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) e.currentTarget.style.transform = 'scale(1.1)';
      },
      onMouseLeave: e => {
        if (!prefersReducedMotion) e.currentTarget.style.transform = 'scale(1)';
      }
    }, "→"))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};