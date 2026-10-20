window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-imagering"] = function (React) {
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
   * Component Type: Gallery.ImageRing
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.ImageRing",
    "description": "WebGL-inspired image ring gallery with scroll rotation, RGB shift, film grain, and vignette effects",
    "editorElement": {
      "selector": ".image-ring-gallery",
      "displayName": "Image Ring Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp,assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp",
          "group": "Content",
          "description": "Comma-separated image URLs"
        },
        "ringRadius": {
          "dataType": "select",
          "displayName": "Ring Radius",
          "defaultValue": "500",
          "options": ["350", "400", "450", "500", "550", "600", "700"],
          "group": "Layout"
        },
        "imageWidth": {
          "dataType": "select",
          "displayName": "Image Width (px)",
          "defaultValue": "280",
          "options": ["180", "220", "250", "280", "320", "360"],
          "group": "Layout"
        },
        "imageHeight": {
          "dataType": "select",
          "displayName": "Image Height (px)",
          "defaultValue": "180",
          "options": ["120", "150", "180", "200", "240"],
          "group": "Layout"
        },
        "rotateSpeed": {
          "dataType": "select",
          "displayName": "Scroll Rotate Speed",
          "defaultValue": "0.15",
          "options": ["0.05", "0.1", "0.15", "0.2", "0.3"],
          "group": "Animation"
        },
        "autoRotate": {
          "dataType": "booleanValue",
          "displayName": "Auto Rotate",
          "defaultValue": "false",
          "group": "Animation"
        },
        "autoRotateSpeed": {
          "dataType": "select",
          "displayName": "Auto Rotate Speed",
          "defaultValue": "0.2",
          "options": ["0.1", "0.15", "0.2", "0.3", "0.5"],
          "group": "Animation"
        },
        "enableInertia": {
          "dataType": "booleanValue",
          "displayName": "Enable Inertia",
          "defaultValue": "true",
          "group": "Animation"
        },
        "friction": {
          "dataType": "select",
          "displayName": "Inertia Friction",
          "defaultValue": "0.95",
          "options": ["0.90", "0.93", "0.95", "0.97", "0.98"],
          "group": "Animation"
        },
        "showRGBShift": {
          "dataType": "booleanValue",
          "displayName": "RGB Shift Effect",
          "defaultValue": "true",
          "group": "Effects"
        },
        "rgbShiftIntensity": {
          "dataType": "select",
          "displayName": "RGB Shift Intensity",
          "defaultValue": "3",
          "options": ["1", "2", "3", "4", "5", "6"],
          "group": "Effects"
        },
        "showGrain": {
          "dataType": "booleanValue",
          "displayName": "Film Grain Effect",
          "defaultValue": "true",
          "group": "Effects"
        },
        "grainOpacity": {
          "dataType": "select",
          "displayName": "Grain Opacity",
          "defaultValue": "0.15",
          "options": ["0.05", "0.1", "0.15", "0.2", "0.3"],
          "group": "Effects"
        },
        "showVignette": {
          "dataType": "booleanValue",
          "displayName": "Vignette Effect",
          "defaultValue": "true",
          "group": "Effects"
        },
        "vignetteIntensity": {
          "dataType": "select",
          "displayName": "Vignette Intensity",
          "defaultValue": "0.6",
          "options": ["0.3", "0.4", "0.5", "0.6", "0.7", "0.8"],
          "group": "Effects"
        },
        "showLines": {
          "dataType": "booleanValue",
          "displayName": "Show Guide Lines",
          "defaultValue": "true",
          "group": "Effects"
        },
        "lineColor": {
          "dataType": "color",
          "displayName": "Line Color",
          "defaultValue": "rgba(255, 255, 255, 0.15)",
          "group": "Colors"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "imageBorderRadius": {
          "dataType": "select",
          "displayName": "Image Border Radius",
          "defaultValue": "8",
          "options": ["0", "4", "8", "12", "16", "24"],
          "group": "Layout"
        },
        "perspective": {
          "dataType": "select",
          "displayName": "Perspective",
          "defaultValue": "1200",
          "options": ["800", "1000", "1200", "1500", "2000"],
          "group": "Layout"
        },
        "tiltAngle": {
          "dataType": "select",
          "displayName": "Ring Tilt Angle",
          "defaultValue": "5",
          "options": ["0", "5", "10", "15", "20"],
          "group": "Layout"
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
    // State
    const [rotation, setRotation] = React.useState(0);
    const [velocity, setVelocity] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [grainSeed, setGrainSeed] = React.useState(0);
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [isEntered, setIsEntered] = React.useState(false);

    // Refs
    const containerRef = React.useRef(null);
    const dragStartX = React.useRef(0);
    const rotationStart = React.useRef(0);
    const lastX = React.useRef(0);
    const lastTime = React.useRef(0);
    const animationFrame = React.useRef(null);
    const autoRotateFrame = React.useRef(null);
    const grainFrame = React.useRef(null);

    // Parse images
    const images = React.useMemo(() => {
      return (config?.images || '').split(',').map(url => url.trim()).filter(Boolean);
    }, [config?.images]);

    // Config values
    const ringRadius = parseInt(config?.ringRadius || '500');
    const imageWidth = parseInt(config?.imageWidth || '280');
    const imageHeight = parseInt(config?.imageHeight || '180');
    const rotateSpeed = parseFloat(config?.rotateSpeed || '0.15');
    const autoRotate = config?.autoRotate === true;
    const autoRotateSpeed = parseFloat(config?.autoRotateSpeed || '0.2');
    const enableInertia = config?.enableInertia !== false;
    const friction = parseFloat(config?.friction || '0.95');
    const showRGBShift = config?.showRGBShift !== false;
    const rgbShiftIntensity = parseInt(config?.rgbShiftIntensity || '3');
    const showGrain = config?.showGrain !== false;
    const grainOpacity = parseFloat(config?.grainOpacity || '0.15');
    const showVignette = config?.showVignette !== false;
    const vignetteIntensity = parseFloat(config?.vignetteIntensity || '0.6');
    const showLines = config?.showLines !== false;
    const lineColor = config?.lineColor || 'rgba(255, 255, 255, 0.15)';
    const backgroundColor = config?.backgroundColor || '#111111';
    const imageBorderRadius = parseInt(config?.imageBorderRadius || '8');
    const perspective = parseInt(config?.perspective || '1200');
    const tiltAngle = parseInt(config?.tiltAngle || '5');
    const prefersReducedMotion = React.useMemo(() => {
      return typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    }, []);

    // Unique ID for this instance
    const uniqueId = React.useMemo(() => {
      return `ring-${Math.random().toString(36).substr(2, 9)}`;
    }, []);

    // Entrance animation
    React.useEffect(() => {
      const timer = setTimeout(() => setIsEntered(true), 100);
      return () => clearTimeout(timer);
    }, []);

    // Film grain animation
    React.useEffect(() => {
      if (!showGrain || prefersReducedMotion) return;
      const animateGrain = () => {
        setGrainSeed(Math.random());
        grainFrame.current = requestAnimationFrame(animateGrain);
      };
      grainFrame.current = requestAnimationFrame(animateGrain);
      return () => {
        if (grainFrame.current) {
          cancelAnimationFrame(grainFrame.current);
        }
      };
    }, [showGrain, prefersReducedMotion]);

    // Inertia animation
    React.useEffect(() => {
      if (!enableInertia || isDragging || prefersReducedMotion) return;
      if (Math.abs(velocity) < 0.01) return;
      const animate = () => {
        setVelocity(v => v * friction);
        setRotation(r => r + velocity);
        if (Math.abs(velocity) > 0.01) {
          animationFrame.current = requestAnimationFrame(animate);
        }
      };
      animationFrame.current = requestAnimationFrame(animate);
      return () => {
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
      };
    }, [velocity, isDragging, enableInertia, friction, prefersReducedMotion]);

    // Auto rotation
    React.useEffect(() => {
      if (!autoRotate || isDragging || prefersReducedMotion) {
        if (autoRotateFrame.current) {
          cancelAnimationFrame(autoRotateFrame.current);
        }
        return;
      }
      const animate = () => {
        setRotation(r => r + autoRotateSpeed);
        autoRotateFrame.current = requestAnimationFrame(animate);
      };
      autoRotateFrame.current = requestAnimationFrame(animate);
      return () => {
        if (autoRotateFrame.current) {
          cancelAnimationFrame(autoRotateFrame.current);
        }
      };
    }, [autoRotate, autoRotateSpeed, isDragging, prefersReducedMotion]);

    // Wheel handler
    const handleWheel = e => {
      e.preventDefault();
      const delta = e.deltaY * rotateSpeed;
      setRotation(r => r + delta);
      setVelocity(delta * 0.5);
    };

    // Mouse/Touch drag handlers
    const handlePointerDown = e => {
      setIsDragging(true);
      setVelocity(0);
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      dragStartX.current = clientX;
      rotationStart.current = rotation;
      lastX.current = clientX;
      lastTime.current = Date.now();
    };
    const handlePointerMove = e => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - dragStartX.current;
      setRotation(rotationStart.current + deltaX * rotateSpeed);

      // Calculate velocity for inertia
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        setVelocity((clientX - lastX.current) / dt * 5);
      }
      lastX.current = clientX;
      lastTime.current = now;
    };
    const handlePointerUp = () => {
      setIsDragging(false);
    };

    // Calculate image positions on the ring
    const getImageStyle = (index, total) => {
      const angle = index / total * 360 + rotation;
      const angleRad = angle * (Math.PI / 180);
      const x = Math.sin(angleRad) * ringRadius;
      const z = Math.cos(angleRad) * ringRadius;

      // Calculate opacity based on z position (front = more visible)
      const normalizedZ = (z + ringRadius) / (ringRadius * 2);
      const opacity = 0.4 + normalizedZ * 0.6;
      const scale = 0.7 + normalizedZ * 0.3;
      return {
        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${angle}deg)`,
        opacity: opacity,
        scale: scale,
        zIndex: Math.round(normalizedZ * 100)
      };
    };

    // RGB shift effect styles
    const getRGBShiftStyle = isHovered => {
      if (!showRGBShift || !isHovered) return {};
      return {
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'inherit',
          transform: `translateX(${rgbShiftIntensity}px)`,
          opacity: 0.5,
          mixBlendMode: 'screen',
          filter: 'hue-rotate(120deg)'
        }
      };
    };

    // Empty state
    if (images.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '600px',
          color: '#666666',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '18px',
          marginBottom: '8px'
        }
      }, "No images provided"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px',
          opacity: 0.7
        }
      }, "Add comma-separated image URLs")));
    }
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "image-ring-gallery",
      style: {
        position: 'relative',
        width: '100%',
        height: '600px',
        backgroundColor: backgroundColor,
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none'
      },
      onWheel: handleWheel,
      onMouseDown: handlePointerDown,
      onMouseMove: handlePointerMove,
      onMouseUp: handlePointerUp,
      onMouseLeave: handlePointerUp,
      onTouchStart: handlePointerDown,
      onTouchMove: handlePointerMove,
      onTouchEnd: handlePointerUp
    }, showLines && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
        opacity: isEntered ? 1 : 0,
        transition: 'opacity 1s ease-out 0.5s'
      }
    }, [...Array(5)].map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        top: `${20 + i * 15}%`,
        left: 0,
        right: 0,
        height: '1px',
        background: `linear-gradient(90deg, transparent 0%, ${lineColor} 20%, ${lineColor} 80%, transparent 100%)`,
        transform: `translateZ(${-100 + i * 50}px)`,
        opacity: 0.5 + i * 0.1
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        perspective: perspective + 'px',
        perspectiveOrigin: '50% 50%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `translateZ(${-ringRadius}px) rotateX(${tiltAngle}deg)`,
        transition: isEntered ? 'none' : 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: isEntered ? 1 : 0
      }
    }, images.map((url, index) => {
      const style = getImageStyle(index, images.length);
      const isHovered = hoveredIndex === index;
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: -imageHeight / 2,
          marginLeft: -imageWidth / 2,
          width: imageWidth + 'px',
          height: imageHeight + 'px',
          transform: style.transform,
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          opacity: style.opacity,
          zIndex: style.zIndex,
          transition: isDragging ? 'none' : 'opacity 0.3s ease',
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: imageBorderRadius + 'px',
          overflow: 'hidden',
          boxShadow: isHovered ? '0 0 40px rgba(255, 255, 255, 0.2), 0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.5)',
          transform: `scale(${isHovered ? 1.05 : 1})`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: url,
        alt: `Gallery image ${index + 1}`,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          backfaceVisibility: 'hidden'
        },
        draggable: false
      }), showRGBShift && isHovered && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateX(${rgbShiftIntensity}px)`,
          opacity: 0.5,
          mixBlendMode: 'screen',
          filter: 'hue-rotate(90deg) saturate(2)'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateX(-${rgbShiftIntensity}px)`,
          opacity: 0.5,
          mixBlendMode: 'screen',
          filter: 'hue-rotate(-90deg) saturate(2)'
        }
      }))));
    }))), showGrain && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 50,
        opacity: grainOpacity,
        mixBlendMode: 'overlay'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: "100%",
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: `grain-${uniqueId}`
    }, /*#__PURE__*/React.createElement("feTurbulence", {
      type: "fractalNoise",
      baseFrequency: "0.8",
      numOctaves: "4",
      seed: Math.floor(grainSeed * 100),
      stitchTiles: "stitch"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      type: "saturate",
      values: "0"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "100%",
      height: "100%",
      filter: `url(#grain-${uniqueId})`
    }))), showVignette && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 40,
        background: `radial-gradient(ellipse at center, transparent 0%, transparent ${(1 - vignetteIntensity) * 100}%, ${backgroundColor} 100%)`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 45,
        background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)',
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero-dom",
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 60,
        opacity: isEntered ? 1 : 0,
        transition: 'opacity 1s ease-out 1s'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(32px, 6vw, 72px)',
        fontWeight: 300,
        color: 'white',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        margin: 0,
        textShadow: '0 0 40px rgba(0, 0, 0, 0.8)',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, "Image Ring"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'clamp(12px, 1.5vw, 16px)',
        color: 'rgba(255, 255, 255, 0.6)',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        marginTop: '16px',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, "Scroll or drag to explore")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        gap: '12px',
        zIndex: 60
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        fontSize: '11px',
        color: 'rgba(255, 255, 255, 0.6)',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        backdropFilter: 'blur(4px)'
      }
    }, images.length, " images")), /*#__PURE__*/React.createElement("style", null, `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};