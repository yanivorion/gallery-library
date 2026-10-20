window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["portfolio-animatedbackground"] = function (React) {
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
   * Component Type: Portfolio.AnimatedBackground
   * ============================================================================
   */

  // ============================================================================
  // PORTFOLIO SYSTEM #6: ANIMATED BACKGROUND LAYER
  // ============================================================================
  // Circular orbital motion background with multiple layers at different speeds
  // Perfect for: Adding dynamic animated backgrounds to any hero section
  // ============================================================================

  const MANIFEST = {
    "type": "Portfolio.AnimatedBackground",
    "description": "Animated background with circular orbital motion. Features 6 floating elements moving at different speeds using trigonometric calculations for smooth 60fps animation.",
    "editorElement": {
      "selector": ".animated-background",
      "displayName": "Animated Background Layer",
      "archetype": "container",
      "data": {
        "ballCount": {
          "dataType": "select",
          "displayName": "Number of Elements",
          "defaultValue": "6",
          "options": ["3", "4", "5", "6", "8"],
          "group": "Settings"
        },
        "ballSize": {
          "dataType": "number",
          "displayName": "Element Size (px)",
          "defaultValue": 90,
          "group": "Settings"
        },
        "radius": {
          "dataType": "number",
          "displayName": "Orbit Radius",
          "defaultValue": 3000,
          "group": "Settings",
          "description": "Larger = wider orbits"
        },
        "baseSpeed": {
          "dataType": "number",
          "displayName": "Base Speed",
          "defaultValue": 500,
          "group": "Settings",
          "description": "Lower = faster movement"
        },
        "color1": {
          "dataType": "color",
          "displayName": "Element Color 1",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "color2": {
          "dataType": "color",
          "displayName": "Element Color 2",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "color3": {
          "dataType": "color",
          "displayName": "Element Color 3",
          "defaultValue": "#999999",
          "group": "Colors"
        },
        "useRandomColors": {
          "dataType": "booleanValue",
          "displayName": "Use Random Colors",
          "defaultValue": false,
          "group": "Colors",
          "description": "Generate random colors on load"
        },
        "opacity": {
          "dataType": "number",
          "displayName": "Element Opacity (0-100)",
          "defaultValue": 30,
          "group": "Colors"
        },
        "blur": {
          "dataType": "number",
          "displayName": "Blur Amount (px)",
          "defaultValue": 60,
          "group": "Effects"
        },
        "glowEffect": {
          "dataType": "booleanValue",
          "displayName": "Enable Glow Effect",
          "defaultValue": true,
          "group": "Effects"
        },
        "enableAnimation": {
          "dataType": "booleanValue",
          "displayName": "Enable Animation",
          "defaultValue": true,
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
    const ballCount = parseInt(config?.ballCount || "6");
    const ballSize = parseInt(config?.ballSize || "90");
    const radius = parseInt(config?.radius || "3000");
    const baseSpeed = parseInt(config?.baseSpeed || "500");
    const color1 = config?.color1 || "#777777";
    const color2 = config?.color2 || "#777777";
    const color3 = config?.color3 || "#999999";
    const useRandomColors = config?.useRandomColors === true;
    const opacity = parseInt(config?.opacity || "30");
    const blur = parseInt(config?.blur || "60");
    const glowEffect = config?.glowEffect !== false;
    const enableAnimation = config?.enableAnimation !== false;
    const [balls, setBalls] = React.useState([]);
    const [isMobile, setIsMobile] = React.useState(false);
    const animationFrameRef = React.useRef(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const shouldAnimate = enableAnimation && !prefersReducedMotion;

    // Initialize balls
    React.useEffect(() => {
      const colors = useRandomColors ? Array.from({
        length: ballCount
      }, () => ({
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
      })) : [hexToRgb(color1), hexToRgb(color2), hexToRgb(color3), hexToRgb(color1), hexToRgb(color2), hexToRgb(color3), hexToRgb(color1), hexToRgb(color2)];
      const speedMultipliers = [1.2, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2];
      const scaleMultipliers = [1.2, 1.0, 0.8, 0.6, 0.4, 0.2, 0.15, 0.1];
      const initialBalls = Array.from({
        length: ballCount
      }, (_, i) => ({
        id: i,
        color: colors[i] || colors[0],
        speedMultiplier: speedMultipliers[i] || 1.0,
        scaleMultiplier: scaleMultipliers[i] || 1.0,
        x: 0,
        y: 0
      }));
      setBalls(initialBalls);
    }, [ballCount, color1, color2, color3, useRandomColors]);

    // Check mobile
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);

    // Convert hex to RGB
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : {
        r: 59,
        g: 130,
        b: 246
      };
    }

    // Calculate position using trigonometry
    function calculatePosition(centerOffset, speed) {
      const time = Date.now() / speed;
      const x = (centerOffset + Math.cos(time) * radius) / 10;
      const y = (centerOffset + Math.sin(time) * radius) / 10;
      return {
        x,
        y
      };
    }

    // Animation loop
    React.useEffect(() => {
      if (!shouldAnimate || balls.length === 0) return;
      const animate = () => {
        setBalls(prevBalls => prevBalls.map(ball => {
          const speed = baseSpeed / ball.speedMultiplier;
          const pos = calculatePosition(0, speed);
          return {
            ...ball,
            x: pos.x * ball.scaleMultiplier,
            y: pos.y * ball.scaleMultiplier
          };
        }));
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      animate();
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [shouldAnimate, balls.length, baseSpeed, radius]);
    const currentBallSize = isMobile ? ballSize / 2 : ballSize;
    return /*#__PURE__*/React.createElement("div", {
      className: "animated-background",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }
    }, balls.map(ball => /*#__PURE__*/React.createElement("div", {
      key: ball.id,
      className: "ball",
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: `${currentBallSize}px`,
        height: `${currentBallSize}px`,
        marginLeft: `-${currentBallSize / 2}px`,
        marginTop: `-${currentBallSize / 2}px`,
        background: `rgb(${ball.color.r}, ${ball.color.g}, ${ball.color.b})`,
        opacity: opacity / 100,
        borderRadius: '50%',
        filter: `blur(${blur}px)`,
        transform: shouldAnimate ? `translate(${ball.x}px, ${ball.y}px)` : 'translate(0, 0)',
        boxShadow: glowEffect ? `0 0 ${blur * 2}px rgba(${ball.color.r}, ${ball.color.g}, ${ball.color.b}, ${opacity / 100})` : 'none',
        willChange: 'transform'
      }
    })));
  }

  // ============================================================================
  // USAGE INSTRUCTIONS:
  // 1. Copy MANIFEST object
  // 2. Copy Component function
  // 3. Paste into Wix Component Editor
  // 4. Use as background layer in hero sections
  //
  // TIPS:
  // - Lower baseSpeed = faster movement (try 300-800)
  // - Higher radius = wider orbits (try 2000-5000)
  // - Adjust opacity for subtle effect (20-40%)
  // - Use blur for soft, dreamy look (40-80px)
  // - Disable on mobile if performance issues
  // ============================================================================

  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};