window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["social-testimonialslider"] = function (React) {
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
   * Component Type: Social.TestimonialSlider
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Social.TestimonialSlider",
    "description": "Elegant testimonial slider with smooth transitions and rating display",
    "editorElement": {
      "selector": ".testimonial-slider",
      "displayName": "Testimonial Slider",
      "archetype": "container",
      "data": {
        "testimonials": {
          "dataType": "text",
          "displayName": "Testimonials (format: quote|author|role|rating, separated by ||)",
          "defaultValue": "This product transformed our workflow completely. The attention to detail is remarkable.|Sarah Chen|Product Manager, TechCorp|5||Outstanding service and support. Highly recommended for any serious business.|Michael Rodriguez|CEO, StartupHub|5||The best investment we've made this year. Results exceeded expectations.|Emily Watson|Marketing Director|4||Incredible value and exceptional quality. Our team loves using it daily.|David Kim|CTO, Innovation Labs|5",
          "group": "Content"
        },
        "autoplay": {
          "dataType": "booleanValue",
          "displayName": "Enable Autoplay",
          "defaultValue": true,
          "group": "Content"
        },
        "interval": {
          "dataType": "select",
          "displayName": "Autoplay Interval (seconds)",
          "defaultValue": "6",
          "options": ["4", "5", "6", "8", "10"],
          "group": "Content"
        },
        "showRating": {
          "dataType": "booleanValue",
          "displayName": "Show Star Rating",
          "defaultValue": true,
          "group": "Content"
        },
        "showDots": {
          "dataType": "booleanValue",
          "displayName": "Show Navigation Dots",
          "defaultValue": true,
          "group": "Content"
        },
        "quoteSize": {
          "dataType": "number",
          "displayName": "Quote Font Size (px)",
          "defaultValue": 24,
          "group": "Typography"
        },
        "authorSize": {
          "dataType": "number",
          "displayName": "Author Font Size (px)",
          "defaultValue": 18,
          "group": "Typography"
        },
        "fontWeight": {
          "dataType": "select",
          "displayName": "Quote Font Weight",
          "defaultValue": "400",
          "options": ["300", "400", "500"],
          "group": "Typography"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "cardBackground": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "quoteColor": {
          "dataType": "color",
          "displayName": "Quote Text Color",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "authorColor": {
          "dataType": "color",
          "displayName": "Author Name Color",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "roleColor": {
          "dataType": "color",
          "displayName": "Role Text Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "starColor": {
          "dataType": "color",
          "displayName": "Star Rating Color",
          "defaultValue": "#bbbbbb",
          "group": "Colors"
        },
        "dotActiveColor": {
          "dataType": "color",
          "displayName": "Active Dot Color",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "dotInactiveColor": {
          "dataType": "color",
          "displayName": "Inactive Dot Color",
          "defaultValue": "#cccccc",
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
    const testimonialsStr = config?.testimonials || "This product transformed our workflow completely.|Sarah Chen|Product Manager|5||Outstanding service and support.|Michael Rodriguez|CEO|5";
    const autoplay = config?.autoplay !== false;
    const interval = parseInt(config?.interval || "6") * 1000;
    const showRating = config?.showRating !== false;
    const showDots = config?.showDots !== false;
    const quoteSize = parseInt(config?.quoteSize || "24");
    const authorSize = parseInt(config?.authorSize || "18");
    const fontWeight = config?.fontWeight || "400";
    const backgroundColor = config?.backgroundColor || "#ffffff";
    const cardBackground = config?.cardBackground || "#ffffff";
    const quoteColor = config?.quoteColor || "#222222";
    const authorColor = config?.authorColor || "#222222";
    const roleColor = config?.roleColor || "#777777";
    const starColor = config?.starColor || "#bbbbbb";
    const dotActiveColor = config?.dotActiveColor || "#222222";
    const dotInactiveColor = config?.dotInactiveColor || "#cccccc";
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    // Parse testimonials
    const testimonials = testimonialsStr.split('||').map(item => {
      const [quote, author, role, rating] = item.split('|').map(s => s.trim());
      return {
        quote,
        author,
        role,
        rating: parseInt(rating) || 5
      };
    });
    const goToSlide = index => {
      setCurrentIndex(index);
    };
    React.useEffect(() => {
      if (!autoplay || isPaused || prefersReducedMotion) return;
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, interval);
      return () => clearInterval(timer);
    }, [autoplay, isPaused, currentIndex, interval, testimonials.length, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "testimonial-slider",
      style: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      style: {
        maxWidth: '900px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        minHeight: '400px'
      }
    }, testimonials.map((testimonial, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: cardBackground,
        borderRadius: '12px',
        padding: '3rem',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        opacity: index === currentIndex ? 1 : 0,
        transform: prefersReducedMotion ? 'none' : index === currentIndex ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: prefersReducedMotion ? 'opacity 0ms' : 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: index === currentIndex ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '3rem',
        color: dotInactiveColor,
        marginBottom: '1rem',
        lineHeight: 1,
        opacity: 0.3
      }
    }, "\""), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: `clamp(${quoteSize * 0.8}px, ${quoteSize / 16}rem + 0.5vw, ${quoteSize * 1.1}px)`,
        fontWeight,
        color: quoteColor,
        lineHeight: 1.6,
        margin: '0 0 2rem 0',
        letterSpacing: '0.01em'
      }
    }, testimonial.quote), showRating && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.25rem',
        marginBottom: '1.5rem'
      }
    }, [...Array(5)].map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontSize: '1.25rem',
        color: i < testimonial.rating ? starColor : dotInactiveColor
      }
    }, "★"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: `${authorSize}px`,
        fontWeight: '500',
        color: authorColor,
        marginBottom: '0.25rem'
      }
    }, testimonial.author), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: `${authorSize * 0.875}px`,
        fontWeight: '400',
        color: roleColor,
        letterSpacing: '0.025em'
      }
    }, testimonial.role))))), showDots && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center'
      }
    }, testimonials.map((_, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => goToSlide(index),
      "aria-label": `Go to testimonial ${index + 1}`,
      "aria-current": index === currentIndex ? "true" : "false",
      style: {
        width: index === currentIndex ? '32px' : '12px',
        height: '12px',
        borderRadius: '6px',
        backgroundColor: index === currentIndex ? dotActiveColor : dotInactiveColor,
        border: 'none',
        cursor: 'pointer',
        transition: 'all 300ms ease-out',
        padding: 0
      },
      onMouseEnter: e => {
        if (index !== currentIndex) {
          e.currentTarget.style.backgroundColor = authorColor;
        }
      },
      onMouseLeave: e => {
        if (index !== currentIndex) {
          e.currentTarget.style.backgroundColor = dotInactiveColor;
        }
      }
    })))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};