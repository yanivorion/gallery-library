window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["commerce-linkedslider"] = function (React) {
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
   * Component Type: Commerce.LinkedSlider
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Commerce.LinkedSlider",
    "description": "Product showcase with synchronized thumbnails and time-based progress indicators.",
    "editorElement": {
      "selector": ".linked-slider",
      "displayName": "Commerce Sync Slider",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs (Comma Sep)",
          "defaultValue": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000,https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000,https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1000,https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1000",
          "group": "Content"
        },
        "slideDuration": {
          "dataType": "number",
          "displayName": "Duration (ms)",
          "defaultValue": 5000,
          "group": "Animation"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#000000",
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
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    // Config
    const rawImages = config?.images || '';
    const images = React.useMemo(() => rawImages.split(',').map(i => i.trim()).filter(Boolean), [rawImages]);
    const duration = parseInt(config?.slideDuration || '5000');
    const accent = config?.accentColor || '#000000';

    // Refs for animation
    const progressRef = React.useRef(null);
    const timerRef = React.useRef(null);
    const startTimeRef = React.useRef(Date.now());
    const remainingRef = React.useRef(duration);
    const nextSlide = React.useCallback(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
      remainingRef.current = duration; // Reset timer
    }, [images.length, duration]);

    // Timer Logic
    React.useEffect(() => {
      if (isPaused || images.length < 2) return;
      const start = Date.now();

      // Animation Frame loop for smooth progress bar
      const animateProgress = () => {
        const now = Date.now();
        const elapsed = now - start;
        const progress = Math.min(100, elapsed / remainingRef.current * 100);
        if (progressRef.current) {
          progressRef.current.style.width = `${progress}%`;
        }
        if (elapsed >= remainingRef.current) {
          nextSlide();
        } else if (!isPaused) {
          timerRef.current = requestAnimationFrame(animateProgress);
        }
      };
      timerRef.current = requestAnimationFrame(animateProgress);
      return () => cancelAnimationFrame(timerRef.current);
    }, [currentIndex, isPaused, nextSlide, images.length]); // Re-run when index changes

    // Hover Handlers
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    if (!images.length) return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20
      }
    }, "Add Images");
    return /*#__PURE__*/React.createElement("div", {
      className: "commerce-slider",
      style: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        fontFamily: 'sans-serif'
      },
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#F3F4F6',
        borderRadius: '8px',
        overflow: 'hidden'
      }
    }, images.map((img, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: i === currentIndex ? 1 : 0,
        transition: 'opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        transform: i === currentIndex ? 'scale(1)' : 'scale(1.05)',
        zIndex: i === currentIndex ? 2 : 1
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${images.length}, 1fr)`,
        gap: '12px',
        width: '100%'
      }
    }, images.map((img, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setCurrentIndex(i),
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        opacity: i === currentIndex ? 1 : 0.5,
        transition: 'opacity 300ms'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        aspectRatio: '4/3',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '2px',
        backgroundColor: '#E5E7EB',
        position: 'relative',
        borderRadius: '2px',
        overflow: 'hidden'
      }
    }, i === currentIndex && /*#__PURE__*/React.createElement("div", {
      ref: progressRef,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '0%',
        // Animated by JS
        backgroundColor: accent,
        transition: isPaused ? 'none' : 'width 16ms linear' // Smooth updates
      }
    }))))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};