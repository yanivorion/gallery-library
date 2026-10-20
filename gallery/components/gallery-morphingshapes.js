window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-morphingshapes"] = function (React) {
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
   * Component Type: Gallery.MorphingShapes
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.MorphingShapes",
    "description": "Images transition through morphing geometric shapes using clip-path animations.",
    "editorElement": {
      "selector": ".morphing-shapes-gallery",
      "displayName": "Morphing Shapes Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop,https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop,https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=800&fit=crop,https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=800&fit=crop",
          "group": "Content"
        },
        "shapeSequence": {
          "dataType": "select",
          "displayName": "Shape Sequence",
          "defaultValue": "geometric",
          "options": ["geometric", "organic", "angular", "random"],
          "group": "Animation"
        },
        "autoPlay": {
          "dataType": "booleanValue",
          "displayName": "Auto Play",
          "defaultValue": "true",
          "group": "Animation"
        },
        "interval": {
          "dataType": "select",
          "displayName": "Interval (ms)",
          "defaultValue": "4000",
          "options": ["3000", "4000", "5000", "6000"],
          "group": "Animation"
        },
        "morphDuration": {
          "dataType": "select",
          "displayName": "Morph Duration (ms)",
          "defaultValue": "1200",
          "options": ["800", "1000", "1200", "1500", "2000"],
          "group": "Animation"
        },
        "containerHeight": {
          "dataType": "select",
          "displayName": "Container Height",
          "defaultValue": "600",
          "options": ["400", "500", "600", "700", "100vh"],
          "group": "Layout"
        },
        "showShapeOutline": {
          "dataType": "booleanValue",
          "displayName": "Show Shape Outline",
          "defaultValue": "false",
          "group": "Effects"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#0f0f1a",
          "group": "Colors"
        },
        "outlineColor": {
          "dataType": "color",
          "displayName": "Outline Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "navColor": {
          "dataType": "color",
          "displayName": "Navigation Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        }
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [shapeIndex, setShapeIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [morphProgress, setMorphProgress] = React.useState(0);
    const animationRef = React.useRef(null);
    const imagesRaw = config?.images || '';
    const shapeSequence = config?.shapeSequence || 'geometric';
    const autoPlay = config?.autoPlay !== false;
    const interval = parseInt(config?.interval || '4000');
    const morphDuration = parseInt(config?.morphDuration || '1200');
    const containerHeight = config?.containerHeight || '600';
    const showShapeOutline = config?.showShapeOutline === true;
    const backgroundColor = config?.backgroundColor || '#0f0f1a';
    const outlineColor = config?.outlineColor || '#ffffff';
    const navColor = config?.navColor || '#ffffff';
    const images = React.useMemo(() => {
      return imagesRaw.split(',').map(url => url.trim()).filter(Boolean);
    }, [imagesRaw]);
    const prefersReducedMotion = React.useMemo(() => {
      return typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    }, []);
    const shapes = React.useMemo(() => {
      const shapesets = {
        geometric: ['circle(50% at 50% 50%)', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        // diamond
        'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        // hexagon
        'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        // pentagon
        'inset(10% 10% 10% 10% round 20px)'],
        organic: ['ellipse(45% 50% at 50% 50%)', 'ellipse(50% 40% at 50% 50%)', 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)', 'circle(48% at 50% 50%)', 'ellipse(48% 45% at 50% 50%)'],
        angular: ['polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        // square
        'polygon(0% 20%, 60% 0%, 100% 20%, 100% 80%, 60% 100%, 0% 80%)', 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        // trapezoid
        'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)',
        // reverse trapezoid
        'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)' // inset square
        ],
        random: ['circle(50% at 50% 50%)', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', 'ellipse(45% 50% at 50% 50%)', 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', 'inset(5% 5% 5% 5% round 30px)']
      };
      return shapesets[shapeSequence] || shapesets.geometric;
    }, [shapeSequence]);
    const interpolateClipPath = progress => {
      // For simplicity, we'll use discrete shape transitions
      // In a full implementation, you'd interpolate polygon points
      const targetShape = shapes[shapeIndex];
      return targetShape;
    };
    const animateTransition = React.useCallback(nextIndex => {
      if (isAnimating || images.length <= 1) return;
      setIsAnimating(true);
      const startTime = performance.now();
      const duration = prefersReducedMotion ? 0 : morphDuration;
      const animate = currentTime => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing
        const eased = 1 - Math.pow(1 - progress, 3);
        setMorphProgress(eased);
        if (progress >= 0.5 && progress < 0.52) {
          setCurrentIndex(nextIndex);
          setShapeIndex((shapeIndex + 1) % shapes.length);
        }
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setMorphProgress(0);
          setIsAnimating(false);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    }, [isAnimating, images.length, morphDuration, shapeIndex, shapes.length, prefersReducedMotion]);
    React.useEffect(() => {
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }, []);
    React.useEffect(() => {
      if (!autoPlay || images.length <= 1 || prefersReducedMotion) return;
      const timer = setInterval(() => {
        animateTransition((currentIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, currentIndex, images.length, animateTransition, prefersReducedMotion]);
    const handleNav = direction => {
      const next = direction === 'next' ? (currentIndex + 1) % images.length : (currentIndex - 1 + images.length) % images.length;
      animateTransition(next);
    };
    if (images.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: containerHeight === '100vh' ? '100vh' : `${containerHeight}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
          color: 'rgba(255,255,255,0.5)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }
      }, "Add comma-separated image URLs");
    }
    const heightStyle = containerHeight === '100vh' ? '100vh' : `${containerHeight}px`;
    const currentShape = shapes[shapeIndex];
    const nextShape = shapes[(shapeIndex + 1) % shapes.length];

    // Scale down during transition
    const scale = isAnimating ? 1 - Math.sin(morphProgress * Math.PI) * 0.1 : 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "morphing-shapes-gallery",
      style: {
        position: 'relative',
        width: '100%',
        height: heightStyle,
        backgroundColor,
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '80%',
        maxWidth: '900px',
        aspectRatio: '16 / 10',
        clipPath: currentShape,
        transform: `scale(${scale})`,
        transition: prefersReducedMotion ? 'none' : `clip-path ${morphDuration}ms ease-in-out, transform ${morphDuration}ms ease-in-out`,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: images[currentIndex],
      alt: `Slide ${currentIndex + 1}`,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), showShapeOutline && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: '-2px',
        clipPath: currentShape,
        border: `2px solid ${outlineColor}`,
        pointerEvents: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        padding: '12px 20px',
        backgroundColor: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        zIndex: 10
      }
    }, shapes.map((_, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: shapeIndex === idx ? navColor : `${navColor}30`,
        transition: 'all 300ms ease'
      }
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: () => handleNav('prev'),
      disabled: isAnimating,
      "aria-label": "Previous",
      style: {
        position: 'absolute',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${navColor}30`,
        color: navColor,
        fontSize: '20px',
        cursor: isAnimating ? 'not-allowed' : 'pointer',
        opacity: isAnimating ? 0.5 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        transition: 'all 200ms ease'
      }
    }, "←"), /*#__PURE__*/React.createElement("button", {
      onClick: () => handleNav('next'),
      disabled: isAnimating,
      "aria-label": "Next",
      style: {
        position: 'absolute',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${navColor}30`,
        color: navColor,
        fontSize: '20px',
        cursor: isAnimating ? 'not-allowed' : 'pointer',
        opacity: isAnimating ? 0.5 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        transition: 'all 200ms ease'
      }
    }, "→"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10
      }
    }, images.map((_, idx) => /*#__PURE__*/React.createElement("button", {
      key: idx,
      onClick: () => !isAnimating && animateTransition(idx),
      "aria-label": `Go to slide ${idx + 1}`,
      style: {
        width: currentIndex === idx ? '28px' : '10px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: currentIndex === idx ? navColor : `${navColor}40`,
        border: 'none',
        cursor: isAnimating ? 'not-allowed' : 'pointer',
        padding: 0,
        transition: 'all 300ms ease'
      }
    }))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};