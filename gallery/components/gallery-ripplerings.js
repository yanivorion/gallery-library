window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-ripplerings"] = function (React) {
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
   * Component Type: Gallery.RippleRings
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.RippleRings",
    "description": "A gallery where images are arranged in concentric rings emanating from the center like ripples",
    "editorElement": {
      "selector": ".ripple-rings-gallery",
      "displayName": "Ripple Rings Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp",
          "group": "Content",
          "description": "Comma-separated image URLs (first image is center)"
        },
        "containerSize": {
          "dataType": "select",
          "displayName": "Container Size",
          "defaultValue": "600",
          "options": ["500", "550", "600", "700", "800"],
          "group": "Layout"
        },
        "centerSize": {
          "dataType": "select",
          "displayName": "Center Image Size",
          "defaultValue": "180",
          "options": ["140", "160", "180", "200", "220"],
          "group": "Layout"
        },
        "ringSpacing": {
          "dataType": "select",
          "displayName": "Ring Spacing",
          "defaultValue": "100",
          "options": ["70", "85", "100", "120", "140"],
          "group": "Layout"
        },
        "outerImageSize": {
          "dataType": "select",
          "displayName": "Outer Image Size",
          "defaultValue": "100",
          "options": ["70", "85", "100", "120", "140"],
          "group": "Layout"
        },
        "pulseAnimation": {
          "dataType": "booleanValue",
          "displayName": "Pulse Animation",
          "defaultValue": true,
          "group": "Animation"
        },
        "pulseSpeed": {
          "dataType": "select",
          "displayName": "Pulse Speed (seconds)",
          "defaultValue": "3",
          "options": ["2", "3", "4", "5"],
          "group": "Animation"
        },
        "rotateRings": {
          "dataType": "booleanValue",
          "displayName": "Rotate Rings",
          "defaultValue": false,
          "group": "Animation"
        },
        "rotationSpeed": {
          "dataType": "select",
          "displayName": "Rotation Speed (seconds)",
          "defaultValue": "30",
          "options": ["15", "20", "30", "45", "60"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "ringColor": {
          "dataType": "color",
          "displayName": "Ring Color",
          "defaultValue": "#444444",
          "group": "Colors"
        },
        "cardBorderColor": {
          "dataType": "color",
          "displayName": "Card Border Color",
          "defaultValue": "#555555",
          "group": "Colors"
        },
        "glowColor": {
          "dataType": "color",
          "displayName": "Glow Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "showRingLines": {
          "dataType": "booleanValue",
          "displayName": "Show Ring Lines",
          "defaultValue": true,
          "group": "Colors"
        },
        "glassEffect": {
          "dataType": "booleanValue",
          "displayName": "Glass Effect on Outer",
          "defaultValue": true,
          "group": "Colors"
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
    const [hoveredRing, setHoveredRing] = React.useState(null);
    const [hoveredImage, setHoveredImage] = React.useState(null);
    const [time, setTime] = React.useState(0);
    const [isInView, setIsInView] = React.useState(false);
    const containerRef = React.useRef(null);
    const animationRef = React.useRef(null);
    const images = React.useMemo(() => {
      return (config?.images || MANIFEST.editorElement.data.images.defaultValue).split(',').map(url => url.trim()).filter(Boolean);
    }, [config?.images]);
    const containerSize = parseInt(config?.containerSize || '600');
    const centerSize = parseInt(config?.centerSize || '180');
    const ringSpacing = parseInt(config?.ringSpacing || '100');
    const outerImageSize = parseInt(config?.outerImageSize || '100');
    const pulseAnimation = config?.pulseAnimation !== false;
    const pulseSpeed = parseInt(config?.pulseSpeed || '3');
    const rotateRings = config?.rotateRings === true;
    const rotationSpeed = parseInt(config?.rotationSpeed || '30');
    const backgroundColor = config?.backgroundColor || '#111111';
    const ringColor = config?.ringColor || '#444444';
    const cardBorderColor = config?.cardBorderColor || '#555555';
    const glowColor = config?.glowColor || '#777777';
    const showRingLines = config?.showRingLines !== false;
    const glassEffect = config?.glassEffect !== false;
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

    // Animation loop
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

    // Calculate ring distribution
    const rings = React.useMemo(() => {
      if (images.length === 0) return [];
      const result = [{
        ring: 0,
        images: [images[0]],
        radius: 0,
        imageSize: centerSize
      }];
      const remaining = images.slice(1);
      let currentRing = 1;
      let imageIndex = 0;
      while (imageIndex < remaining.length) {
        const radius = currentRing * ringSpacing;
        const circumference = 2 * Math.PI * radius;
        const maxImages = Math.floor(circumference / (outerImageSize * 1.2));
        const imagesInRing = Math.min(maxImages, remaining.length - imageIndex);
        result.push({
          ring: currentRing,
          images: remaining.slice(imageIndex, imageIndex + imagesInRing),
          radius,
          imageSize: outerImageSize * (1 - currentRing * 0.1)
        });
        imageIndex += imagesInRing;
        currentRing++;
      }
      return result;
    }, [images, ringSpacing, centerSize, outerImageSize]);

    // Get pulse scale
    const getPulseScale = ringIndex => {
      if (!pulseAnimation || prefersReducedMotion) return 1;
      const phase = (time / pulseSpeed + ringIndex * 0.3) % 1;
      return 1 + Math.sin(phase * Math.PI * 2) * 0.03;
    };

    // Get rotation angle
    const getRotation = ringIndex => {
      if (!rotateRings || prefersReducedMotion) return 0;
      const direction = ringIndex % 2 === 0 ? 1 : -1;
      return time / rotationSpeed * 360 * direction % 360;
    };
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
      className: "ripple-rings-gallery",
      style: {
        backgroundColor,
        padding: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: `${containerSize}px`,
        height: `${containerSize}px`
      }
    }, showRingLines && rings.slice(1).map(ring => /*#__PURE__*/React.createElement("div", {
      key: `ring-line-${ring.ring}`,
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${ring.radius * 2}px`,
        height: `${ring.radius * 2}px`,
        marginLeft: `-${ring.radius}px`,
        marginTop: `-${ring.radius}px`,
        borderRadius: '50%',
        border: `1px solid ${ringColor}`,
        opacity: hoveredRing === ring.ring ? 0.8 : 0.3,
        transform: `scale(${getPulseScale(ring.ring)})`,
        transition: 'opacity 300ms ease-out',
        pointerEvents: 'none'
      }
    })), rings.map(ring => /*#__PURE__*/React.createElement("div", {
      key: `ring-${ring.ring}`,
      onMouseEnter: () => setHoveredRing(ring.ring),
      onMouseLeave: () => setHoveredRing(null),
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: ring.ring === 0 ? `${ring.imageSize}px` : `${ring.radius * 2}px`,
        height: ring.ring === 0 ? `${ring.imageSize}px` : `${ring.radius * 2}px`,
        marginLeft: ring.ring === 0 ? `-${ring.imageSize / 2}px` : `-${ring.radius}px`,
        marginTop: ring.ring === 0 ? `-${ring.imageSize / 2}px` : `-${ring.radius}px`,
        transform: ring.ring === 0 ? 'none' : `rotate(${getRotation(ring.ring)}deg)`,
        zIndex: rings.length - ring.ring + (hoveredRing === ring.ring ? 10 : 0)
      }
    }, ring.images.map((image, imageIndex) => {
      const isCenter = ring.ring === 0;
      const angle = isCenter ? 0 : imageIndex / ring.images.length * 360;
      const angleRad = angle * Math.PI / 180;
      const isImageHovered = hoveredImage === `${ring.ring}-${imageIndex}`;
      const x = isCenter ? 0 : Math.cos(angleRad) * ring.radius;
      const y = isCenter ? 0 : Math.sin(angleRad) * ring.radius;
      return /*#__PURE__*/React.createElement("div", {
        key: `image-${ring.ring}-${imageIndex}`,
        onMouseEnter: () => setHoveredImage(`${ring.ring}-${imageIndex}`),
        onMouseLeave: () => setHoveredImage(null),
        style: {
          position: 'absolute',
          width: `${ring.imageSize}px`,
          height: `${ring.imageSize}px`,
          left: isCenter ? 0 : `calc(50% + ${x}px)`,
          top: isCenter ? 0 : `calc(50% + ${y}px)`,
          marginLeft: isCenter ? 0 : `-${ring.imageSize / 2}px`,
          marginTop: isCenter ? 0 : `-${ring.imageSize / 2}px`,
          borderRadius: '50%',
          overflow: 'hidden',
          border: `2px solid ${isImageHovered ? glowColor : cardBorderColor}`,
          cursor: 'pointer',
          opacity: prefersReducedMotion ? 1 : isInView ? 1 : 0,
          transform: prefersReducedMotion ? `scale(${isImageHovered ? 1.15 : 1}) rotate(${-getRotation(ring.ring)}deg)` : isInView ? `scale(${isImageHovered ? 1.15 : getPulseScale(ring.ring)}) rotate(${-getRotation(ring.ring)}deg)` : `scale(0.5) rotate(0deg)`,
          boxShadow: isImageHovered ? `0 0 20px ${glowColor}60, 0 8px 30px rgba(0, 0, 0, 0.5)` : isCenter ? `0 0 30px ${glowColor}30, 0 8px 30px rgba(0, 0, 0, 0.4)` : `0 4px 15px rgba(0, 0, 0, 0.4)`,
          transition: prefersReducedMotion ? 'none' : `transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
                         opacity 500ms ease-out ${ring.ring * 100 + imageIndex * 50}ms,
                         border-color 200ms ease-out,
                         box-shadow 300ms ease-out`,
          zIndex: isImageHovered ? 100 : 1
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: image,
        alt: `Ring ${ring.ring + 1}, Image ${imageIndex + 1}`,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }
      }), glassEffect && ring.ring > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, rgba(255,255,255,${isImageHovered ? 0.15 : 0.1}) 0%, transparent 60%)`,
          pointerEvents: 'none'
        }
      }));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${centerSize * 1.5}px`,
        height: `${centerSize * 1.5}px`,
        marginLeft: `-${centerSize * 0.75}px`,
        marginTop: `-${centerSize * 0.75}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${glowColor}20 0%, transparent 70%)`,
        pointerEvents: 'none',
        opacity: pulseAnimation && !prefersReducedMotion ? 0.5 + Math.sin(time / pulseSpeed * Math.PI * 2) * 0.3 : 0.5
      }
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};