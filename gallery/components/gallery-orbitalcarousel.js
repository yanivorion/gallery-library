window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-orbitalcarousel"] = function (React) {
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
   * Component Type: Gallery.OrbitalCarousel
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.OrbitalCarousel",
    "description": "Giant rotating circle carousel with images positioned around its circumference using CSS trigonometry. Only the bottom arc is visible, creating a dramatic orbital reveal effect.",
    "editorElement": {
      "selector": ".orbital-carousel",
      "displayName": "Orbital Carousel",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp,assets/03.webp",
          "group": "Content",
          "description": "Comma-separated image URLs"
        },
        "autoRotate": {
          "dataType": "booleanValue",
          "displayName": "Auto Rotate",
          "defaultValue": "true",
          "group": "Animation"
        },
        "rotationInterval": {
          "dataType": "select",
          "displayName": "Rotation Interval (ms)",
          "defaultValue": "3000",
          "options": ["2000", "3000", "4000", "5000", "6000"],
          "group": "Animation"
        },
        "rotationDuration": {
          "dataType": "select",
          "displayName": "Rotation Duration (ms)",
          "defaultValue": "800",
          "options": ["400", "600", "800", "1000", "1200"],
          "group": "Animation"
        },
        "rotationEasing": {
          "dataType": "select",
          "displayName": "Rotation Easing",
          "defaultValue": "cubic-bezier(0.4, 0, 0.2, 1)",
          "options": ["ease", "ease-out", "ease-in-out", "cubic-bezier(0.4, 0, 0.2, 1)", "cubic-bezier(0.34, 1.56, 0.64, 1)"],
          "group": "Animation"
        },
        "pauseOnHover": {
          "dataType": "booleanValue",
          "displayName": "Pause on Hover",
          "defaultValue": "true",
          "group": "Animation"
        },
        "circleSize": {
          "dataType": "select",
          "displayName": "Circle Size (vw)",
          "defaultValue": "195",
          "options": ["150", "175", "195", "220", "250"],
          "group": "Layout"
        },
        "circleTopOffset": {
          "dataType": "select",
          "displayName": "Circle Top Offset (%)",
          "defaultValue": "25",
          "options": ["15", "20", "25", "30", "35", "40"],
          "group": "Layout",
          "description": "How far down the circle is positioned"
        },
        "imageWidth": {
          "dataType": "select",
          "displayName": "Image Width (vw)",
          "defaultValue": "18",
          "options": ["12", "15", "18", "20", "24"],
          "group": "Layout"
        },
        "imageAspectRatio": {
          "dataType": "select",
          "displayName": "Image Aspect Ratio",
          "defaultValue": "3:4",
          "options": ["1:1", "3:4", "2:3", "9:16"],
          "group": "Layout"
        },
        "containerHeight": {
          "dataType": "select",
          "displayName": "Container Height",
          "defaultValue": "100vh",
          "options": ["60vh", "70vh", "80vh", "90vh", "100vh"],
          "group": "Layout"
        },
        "showNavigation": {
          "dataType": "booleanValue",
          "displayName": "Show Navigation",
          "defaultValue": "true",
          "group": "Content"
        },
        "showIndicators": {
          "dataType": "booleanValue",
          "displayName": "Show Indicators",
          "defaultValue": "true",
          "group": "Content"
        },
        "imageObjectFit": {
          "dataType": "select",
          "displayName": "Image Fit",
          "defaultValue": "cover",
          "options": ["cover", "contain"],
          "group": "Layout"
        },
        "imageBorderRadius": {
          "dataType": "select",
          "displayName": "Image Border Radius",
          "defaultValue": "8",
          "options": ["0", "4", "8", "12", "16", "24"],
          "group": "Layout"
        },
        "imageShadow": {
          "dataType": "select",
          "displayName": "Image Shadow",
          "defaultValue": "medium",
          "options": ["none", "subtle", "medium", "strong"],
          "group": "Effects"
        },
        "imageHoverScale": {
          "dataType": "select",
          "displayName": "Image Hover Scale",
          "defaultValue": "1.05",
          "options": ["1", "1.02", "1.05", "1.08", "1.1"],
          "group": "Effects"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "navButtonColor": {
          "dataType": "color",
          "displayName": "Navigation Button Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "navButtonBgColor": {
          "dataType": "color",
          "displayName": "Navigation Button Background",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "indicatorColor": {
          "dataType": "color",
          "displayName": "Indicator Color",
          "defaultValue": "#444444",
          "group": "Colors"
        },
        "indicatorActiveColor": {
          "dataType": "color",
          "displayName": "Active Indicator Color",
          "defaultValue": "#ffffff",
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
    const [isHovered, setIsHovered] = React.useState(false);
    const intervalRef = React.useRef(null);

    // Config with defaults
    const imagesRaw = config?.images || '';
    const autoRotate = config?.autoRotate !== false;
    const rotationInterval = parseInt(config?.rotationInterval || '3000');
    const rotationDuration = parseInt(config?.rotationDuration || '800');
    const rotationEasing = config?.rotationEasing || 'cubic-bezier(0.4, 0, 0.2, 1)';
    const pauseOnHover = config?.pauseOnHover !== false;
    const circleSize = parseFloat(config?.circleSize || '195');
    const circleTopOffset = parseFloat(config?.circleTopOffset || '25');
    const imageWidth = parseFloat(config?.imageWidth || '18');
    const imageAspectRatio = config?.imageAspectRatio || '3:4';
    const containerHeight = config?.containerHeight || '100vh';
    const showNavigation = config?.showNavigation !== false;
    const showIndicators = config?.showIndicators !== false;
    const imageObjectFit = config?.imageObjectFit || 'cover';
    const imageBorderRadius = parseInt(config?.imageBorderRadius || '8');
    const imageShadow = config?.imageShadow || 'medium';
    const imageHoverScale = parseFloat(config?.imageHoverScale || '1.05');
    const backgroundColor = config?.backgroundColor || '#111111';
    const navButtonColor = config?.navButtonColor || '#ffffff';
    const navButtonBgColor = config?.navButtonBgColor || '#111111';
    const indicatorColor = config?.indicatorColor || '#444444';
    const indicatorActiveColor = config?.indicatorActiveColor || '#ffffff';

    // Parse images
    const images = React.useMemo(() => {
      return imagesRaw.split(',').map(url => url.trim()).filter(Boolean);
    }, [imagesRaw]);
    const itemCount = images.length;

    // Calculate image height from aspect ratio
    const imageHeight = React.useMemo(() => {
      const [w, h] = imageAspectRatio.split(':').map(Number);
      return imageWidth * (h / w);
    }, [imageWidth, imageAspectRatio]);

    // Shadow configurations
    const shadowConfig = React.useMemo(() => {
      const shadows = {
        none: 'none',
        subtle: '0 4px 12px rgba(0, 0, 0, 0.15)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.3)',
        strong: '0 15px 50px rgba(0, 0, 0, 0.5)'
      };
      return shadows[imageShadow] || shadows.medium;
    }, [imageShadow]);

    // Reduced motion check
    const prefersReducedMotion = React.useMemo(() => {
      return typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    }, []);

    // Calculate rotation angle
    const rotationAngle = React.useMemo(() => {
      if (itemCount === 0) return 0;
      const step = 360 / itemCount;
      return step * currentIndex * -1;
    }, [currentIndex, itemCount]);

    // Auto-rotation
    React.useEffect(() => {
      if (!autoRotate || itemCount === 0 || prefersReducedMotion) return;
      if (isPaused || pauseOnHover && isHovered) return;
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % itemCount);
      }, rotationInterval);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [autoRotate, itemCount, rotationInterval, isPaused, isHovered, pauseOnHover, prefersReducedMotion]);
    const handlePrev = () => {
      setCurrentIndex(prev => (prev - 1 + itemCount) % itemCount);
    };
    const handleNext = () => {
      setCurrentIndex(prev => (prev + 1) % itemCount);
    };
    const handleIndicatorClick = index => {
      setCurrentIndex(index);
    };

    // Empty state
    if (images.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        className: "orbital-carousel",
        style: {
          width: '100%',
          height: containerHeight,
          backgroundColor: backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          color: 'rgba(255, 255, 255, 0.6)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          padding: '40px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '18px',
          marginBottom: '8px'
        }
      }, "No images provided"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '14px',
          opacity: 0.6
        }
      }, "Add comma-separated image URLs")));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "orbital-carousel",
      style: {
        width: '100%',
        height: containerHeight,
        backgroundColor: backgroundColor,
        overflow: 'hidden',
        position: 'relative',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        '--size': `${circleSize}vw`,
        '--img-width': `${imageWidth}vw`,
        '--img-height': `${imageHeight}vw`,
        '--radius': `calc((var(--size) - var(--img-height)) / 2)`,
        '--rotation': `${rotationAngle}deg`,
        '--items': itemCount,
        width: 'var(--size)',
        aspectRatio: '1 / 1',
        position: 'absolute',
        top: `${circleTopOffset}%`,
        left: 'calc(50% - var(--size) / 2)',
        transform: `rotate(calc(-90deg + var(--rotation)))`,
        transition: prefersReducedMotion ? 'none' : `transform ${rotationDuration}ms ${rotationEasing}`,
        willChange: 'transform'
      }
    }, images.map((imageUrl, index) => {
      // Calculate position using CSS custom properties logic
      const step = 360 / itemCount;
      const angle = step * index;
      const angleRad = angle * Math.PI / 180;

      // These match the CSS calc formulas
      // --x: calc(var(--difference) + var(--radius) + var(--radius) * cos(var(--angle)))
      // --y: calc(var(--radius) + var(--radius) * sin(var(--angle)))

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: {
          '--index': index,
          '--step': `${step}deg`,
          '--angle': `${angle}deg`,
          '--difference': `calc((var(--img-height) - var(--img-width)) / 2)`,
          '--x': `calc(var(--difference) + var(--radius) + var(--radius) * cos(${angle}deg))`,
          '--y': `calc(var(--radius) + var(--radius) * sin(${angle}deg))`,
          position: 'absolute',
          width: 'var(--img-width)',
          height: 'var(--img-height)',
          left: 'var(--x)',
          top: 'var(--y)',
          transform: `rotate(calc(${angle}deg + 90deg)) scale(var(--scale, 1))`,
          transition: prefersReducedMotion ? 'none' : 'transform 300ms ease-out, box-shadow 300ms ease-out',
          borderRadius: `${imageBorderRadius}px`,
          overflow: 'hidden',
          boxShadow: shadowConfig,
          cursor: 'pointer',
          '--scale': '1'
        },
        onMouseEnter: e => {
          if (imageHoverScale > 1) {
            e.currentTarget.style.setProperty('--scale', imageHoverScale.toString());
            e.currentTarget.style.boxShadow = shadowConfig.replace(/[\d.]+(?=\s*\))/g, m => parseFloat(m) * 1.3);
          }
        },
        onMouseLeave: e => {
          e.currentTarget.style.setProperty('--scale', '1');
          e.currentTarget.style.boxShadow = shadowConfig;
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: imageUrl,
        alt: `Gallery image ${index + 1}`,
        style: {
          width: '100%',
          height: '100%',
          objectFit: imageObjectFit,
          display: 'block',
          pointerEvents: 'none'
        },
        loading: "lazy"
      }));
    })), showNavigation && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: handlePrev,
      "aria-label": "Previous image",
      style: {
        position: 'absolute',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: navButtonBgColor,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: navButtonColor,
        fontSize: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 200ms ease',
        zIndex: 10,
        backdropFilter: 'blur(8px)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = navButtonBgColor;
        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
      }
    }, "←"), /*#__PURE__*/React.createElement("button", {
      onClick: handleNext,
      "aria-label": "Next image",
      style: {
        position: 'absolute',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: navButtonBgColor,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: navButtonColor,
        fontSize: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 200ms ease',
        zIndex: 10,
        backdropFilter: 'blur(8px)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = navButtonBgColor;
        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
      }
    }, "→")), autoRotate && showNavigation && /*#__PURE__*/React.createElement("button", {
      onClick: () => setIsPaused(!isPaused),
      "aria-label": isPaused ? 'Play' : 'Pause',
      style: {
        position: 'absolute',
        left: '50%',
        top: '24px',
        transform: 'translateX(-50%)',
        padding: '8px 16px',
        borderRadius: '24px',
        backgroundColor: navButtonBgColor,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: navButtonColor,
        fontSize: '12px',
        fontWeight: '500',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 200ms ease',
        zIndex: 10,
        backdropFilter: 'blur(8px)',
        letterSpacing: '0.05em'
      },
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = navButtonBgColor;
      }
    }, isPaused ? '▶' : '⏸', " ", isPaused ? 'Play' : 'Pause'), showIndicators && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 10,
        padding: '10px 16px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)',
        borderRadius: '24px'
      }
    }, images.map((_, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => handleIndicatorClick(index),
      "aria-label": `Go to image ${index + 1}`,
      "aria-current": currentIndex === index ? 'true' : 'false',
      style: {
        width: currentIndex === index ? '24px' : '8px',
        height: '8px',
        borderRadius: '4px',
        backgroundColor: currentIndex === index ? indicatorActiveColor : indicatorColor,
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transition: prefersReducedMotion ? 'none' : 'all 300ms ease'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        padding: '8px 14px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.8)',
        letterSpacing: '0.05em',
        zIndex: 10
      }
    }, currentIndex + 1, " / ", itemCount));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};