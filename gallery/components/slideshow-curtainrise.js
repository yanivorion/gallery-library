window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["slideshow-curtainrise"] = function (React) {
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
   * Component Type: Slideshow.CurtainRise
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Slideshow.CurtainRise",
    "description": "Vertical fashion slider with negative-text blend modes and curtain reveal effects.",
    "editorElement": {
      "selector": ".curtain-slider",
      "displayName": "Vertical Curtain Slider",
      "archetype": "container",
      "data": {
        "slidesData": {
          "dataType": "text",
          "displayName": "Slides JSON",
          "defaultValue": "[{\"title\":\"NOCTURNE\",\"subtitle\":\"Evening Wear 2024\",\"image\":\"assets/03.webp\"},{\"title\":\"SOLSTICE\",\"subtitle\":\"Summer Edit\",\"image\":\"assets/04.webp\"},{\"title\":\"ECLIPSE\",\"subtitle\":\"Monochrome Series\",\"image\":\"assets/05.webp\"}]",
          "group": "Content"
        },
        "autoPlay": {
          "dataType": "booleanValue",
          "displayName": "Auto Play",
          "defaultValue": false,
          "group": "Animation"
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
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [prevIndex, setPrevIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const timerRef = React.useRef(null);

    // Parse Config
    const slides = React.useMemo(() => {
      try {
        return JSON.parse(config?.slidesData || '[]');
      } catch {
        return [];
      }
    }, [config?.slidesData]);
    const autoPlay = config?.autoPlay === true;

    // Animation Logic
    const handleNext = React.useCallback(() => {
      if (isAnimating || slides.length < 2) return;
      setIsAnimating(true);
      setPrevIndex(currentIndex);
      setCurrentIndex(prev => (prev + 1) % slides.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1200); // Match transition duration
    }, [currentIndex, isAnimating, slides.length]);

    // Auto Play
    React.useEffect(() => {
      if (autoPlay) {
        timerRef.current = setInterval(handleNext, 4000);
      }
      return () => clearInterval(timerRef.current);
    }, [autoPlay, handleNext]);

    // Handle Empty
    if (slides.length === 0) return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40
      }
    }, "Add slides JSON");
    return /*#__PURE__*/React.createElement("div", {
      onClick: handleNext,
      style: {
        width: '100%',
        height: '100%',
        minHeight: '600px',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none'
      }
    }, slides.map((slide, index) => {
      // Logic:
      // Current index is the one sliding UP (entering)
      // Previous index is the one stationary behind, waiting to be covered

      let zIndex = 0;
      let transform = 'translateY(100%)'; // Default: waiting below
      let transition = 'none';
      if (index === currentIndex) {
        zIndex = 2; // On top
        transform = 'translateY(0%)'; // Move to cover
        transition = isAnimating ? 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)' : 'none';
      } else if (index === prevIndex) {
        zIndex = 1; // Behind current
        transform = 'translateY(0%)'; // Stay put
      } else {
        zIndex = 0; // Hidden
      }

      // Initial Load State
      if (!isAnimating && index === currentIndex) {
        transform = 'translateY(0%)';
      }
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: zIndex,
          transform: transform,
          transition: transition,
          willChange: 'transform'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(20%) contrast(1.1)' // Editorial touch
        }
      }));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        // THE MAGIC SAUCE
        color: '#ffffff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.3em',
        marginBottom: '16px',
        opacity: isAnimating ? 0 : 1,
        transition: 'opacity 0.4s ease',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, slides[currentIndex].subtitle), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(40px, 8vw, 120px)',
        fontWeight: '400',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        margin: 0,
        lineHeight: 1,
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
        transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s'
      }
    }, slides[currentIndex].title))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        zIndex: 11,
        mixBlendMode: 'difference',
        color: '#ffffff',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '16px'
      }
    }, currentIndex + 1, " / ", slides.length), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 11,
        mixBlendMode: 'difference',
        color: '#ffffff',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }
    }, autoPlay ? 'Auto-Playing' : 'Click to Reveal'));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};