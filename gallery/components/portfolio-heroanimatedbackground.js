window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["portfolio-heroanimatedbackground"] = function (React) {
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
   * Component Type: Portfolio.HeroAnimatedBackground
   * ============================================================================
   */

  // ============================================================================
  // PORTFOLIO SYSTEM #7: HERO WITH ANIMATED BACKGROUND (COMPLETE EXAMPLE)
  // ============================================================================
  // Full hero section combining animated orbital background + content
  // Perfect for: Modern hero sections with dynamic animated backgrounds
  // ============================================================================

  const MANIFEST = {
    "type": "Portfolio.HeroAnimatedBackground",
    "description": "Complete hero section with animated circular orbital background. Combines dynamic floating elements with bilingual content, video background option, and smooth animations.",
    "editorElement": {
      "selector": ".hero-animated-background",
      "displayName": "Hero with Animated Background",
      "archetype": "container",
      "data": {
        // Content
        "titleEn": {
          "dataType": "text",
          "displayName": "Title (English)",
          "defaultValue": "Creative Portfolio",
          "group": "Content"
        },
        "titleJa": {
          "dataType": "text",
          "displayName": "Title (Japanese)",
          "defaultValue": "創造的なポートフォリオ",
          "group": "Content"
        },
        "textEn": {
          "dataType": "text",
          "displayName": "Description (English)",
          "defaultValue": "Explore 100 experimental projects featuring cutting-edge technology and creative innovation.",
          "group": "Content"
        },
        "textJa": {
          "dataType": "text",
          "displayName": "Description (Japanese)",
          "defaultValue": "最先端技術と創造的革新を特徴とする100の実験的プロジェクトを探索",
          "group": "Content"
        },
        "videoUrl": {
          "dataType": "text",
          "displayName": "Background Video URL",
          "defaultValue": "",
          "group": "Content",
          "description": "Optional: Leave empty to show only animated background"
        },
        "showJapanese": {
          "dataType": "booleanValue",
          "displayName": "Show Japanese Text",
          "defaultValue": true,
          "group": "Content"
        },
        // Background Animation
        "ballCount": {
          "dataType": "select",
          "displayName": "Animated Elements Count",
          "defaultValue": "6",
          "options": ["3", "4", "5", "6", "8"],
          "group": "Animation"
        },
        "ballSize": {
          "dataType": "number",
          "displayName": "Element Size (px)",
          "defaultValue": 120,
          "group": "Animation"
        },
        "animationSpeed": {
          "dataType": "number",
          "displayName": "Animation Speed",
          "defaultValue": 500,
          "group": "Animation",
          "description": "Lower = faster (300-800 recommended)"
        },
        "orbitRadius": {
          "dataType": "number",
          "displayName": "Orbit Size",
          "defaultValue": 3000,
          "group": "Animation"
        },
        // Colors
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "overlayColor": {
          "dataType": "color",
          "displayName": "Overlay Color",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "overlayOpacity": {
          "dataType": "number",
          "displayName": "Overlay Opacity (0-100)",
          "defaultValue": 70,
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#aaaaaa",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "ball1Color": {
          "dataType": "color",
          "displayName": "Ball Color 1",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "ball2Color": {
          "dataType": "color",
          "displayName": "Ball Color 2",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "ball3Color": {
          "dataType": "color",
          "displayName": "Ball Color 3",
          "defaultValue": "#999999",
          "group": "Colors"
        },
        // Effects
        "ballOpacity": {
          "dataType": "number",
          "displayName": "Ball Opacity (0-100)",
          "defaultValue": 25,
          "group": "Effects"
        },
        "ballBlur": {
          "dataType": "number",
          "displayName": "Ball Blur (px)",
          "defaultValue": 80,
          "group": "Effects"
        },
        "enableGlow": {
          "dataType": "booleanValue",
          "displayName": "Enable Glow Effect",
          "defaultValue": true,
          "group": "Effects"
        },
        "enableAnimation": {
          "dataType": "booleanValue",
          "displayName": "Enable Animations",
          "defaultValue": true,
          "group": "Effects"
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
    // Content config
    const titleEn = config?.titleEn || "Creative Portfolio";
    const titleJa = config?.titleJa || "創造的なポートフォリオ";
    const textEn = config?.textEn || "Explore 100 experimental projects featuring cutting-edge technology and creative innovation.";
    const textJa = config?.textJa || "最先端技術と創造的革新を特徴とする100の実験的プロジェクトを探索";
    const videoUrl = config?.videoUrl || "";
    const showJapanese = config?.showJapanese !== false;

    // Animation config
    const ballCount = parseInt(config?.ballCount || "6");
    const ballSize = parseInt(config?.ballSize || "120");
    const animationSpeed = parseInt(config?.animationSpeed || "500");
    const orbitRadius = parseInt(config?.orbitRadius || "3000");

    // Color config
    const backgroundColor = config?.backgroundColor || "#111111";
    const overlayColor = config?.overlayColor || "#000000";
    const overlayOpacity = parseInt(config?.overlayOpacity || "70");
    const titleColor = config?.titleColor || "#ffffff";
    const textColor = config?.textColor || "#aaaaaa";
    const accentColor = config?.accentColor || "#777777";
    const ball1Color = config?.ball1Color || "#777777";
    const ball2Color = config?.ball2Color || "#777777";
    const ball3Color = config?.ball3Color || "#999999";

    // Effects config
    const ballOpacity = parseInt(config?.ballOpacity || "25");
    const ballBlur = parseInt(config?.ballBlur || "80");
    const enableGlow = config?.enableGlow !== false;
    const enableAnimation = config?.enableAnimation !== false;
    const [balls, setBalls] = React.useState([]);
    const [isVisible, setIsVisible] = React.useState(false);
    const [videoLoaded, setVideoLoaded] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const animationFrameRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const shouldAnimate = enableAnimation && !prefersReducedMotion;

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

    // Initialize balls
    React.useEffect(() => {
      const colors = [hexToRgb(ball1Color), hexToRgb(ball2Color), hexToRgb(ball3Color), hexToRgb(ball1Color), hexToRgb(ball2Color), hexToRgb(ball3Color), hexToRgb(ball1Color), hexToRgb(ball2Color)];
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
    }, [ballCount, ball1Color, ball2Color, ball3Color]);

    // Check mobile
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);

    // Content entrance animation
    React.useEffect(() => {
      setTimeout(() => setIsVisible(true), 100);
    }, []);

    // Calculate position using trigonometry
    function calculatePosition(centerOffset, speed) {
      const time = Date.now() / speed;
      const x = (centerOffset + Math.cos(time) * orbitRadius) / 10;
      const y = (centerOffset + Math.sin(time) * orbitRadius) / 10;
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
          const speed = animationSpeed / ball.speedMultiplier;
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
    }, [shouldAnimate, balls.length, animationSpeed, orbitRadius]);
    const currentBallSize = isMobile ? ballSize / 2 : ballSize;
    const getAnimationStyle = (delay = 0) => {
      if (!shouldAnimate) {
        return {
          opacity: 1,
          transform: 'translateY(0)'
        };
      }
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 800ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 800ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      };
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "hero-animated-background",
      style: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        overflow: 'hidden',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }
    }, balls.map(ball => /*#__PURE__*/React.createElement("div", {
      key: ball.id,
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: `${currentBallSize}px`,
        height: `${currentBallSize}px`,
        marginLeft: `-${currentBallSize / 2}px`,
        marginTop: `-${currentBallSize / 2}px`,
        background: `rgb(${ball.color.r}, ${ball.color.g}, ${ball.color.b})`,
        opacity: ballOpacity / 100,
        borderRadius: '50%',
        filter: `blur(${ballBlur}px)`,
        transform: shouldAnimate ? `translate(${ball.x}px, ${ball.y}px)` : 'translate(0, 0)',
        boxShadow: enableGlow ? `0 0 ${ballBlur * 2}px rgba(${ball.color.r}, ${ball.color.g}, ${ball.color.b}, ${ballOpacity / 100})` : 'none',
        willChange: 'transform'
      }
    }))), videoUrl && !isMobile && /*#__PURE__*/React.createElement("video", {
      ref: videoRef,
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
      onLoadedData: () => setVideoLoaded(true),
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        objectFit: 'cover',
        zIndex: 0,
        opacity: videoLoaded ? 0.3 : 0,
        transition: 'opacity 1s ease-out'
      }
    }, /*#__PURE__*/React.createElement("source", {
      src: videoUrl,
      type: "video/mp4"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: overlayColor,
        opacity: overlayOpacity / 100,
        zIndex: 2,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        padding: 'clamp(48px, 8vw, 80px) clamp(24px, 5vw, 48px)',
        maxWidth: '1200px',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...getAnimationStyle(0),
        width: '60px',
        height: '3px',
        backgroundColor: accentColor,
        margin: '0 auto 32px auto'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        ...getAnimationStyle(200),
        fontSize: 'clamp(40px, 8vw, 96px)',
        fontWeight: '300',
        color: titleColor,
        lineHeight: '1.1',
        margin: '0 0 16px 0',
        letterSpacing: '0.02em',
        textTransform: 'uppercase'
      }
    }, titleEn), showJapanese && /*#__PURE__*/React.createElement("h2", {
      style: {
        ...getAnimationStyle(400),
        fontSize: 'clamp(20px, 4vw, 48px)',
        fontWeight: '300',
        color: titleColor,
        lineHeight: '1.3',
        margin: '0 0 40px 0',
        opacity: 0.8,
        letterSpacing: '0.1em'
      }
    }, titleJa), /*#__PURE__*/React.createElement("p", {
      style: {
        ...getAnimationStyle(600),
        fontSize: 'clamp(16px, 2.5vw, 20px)',
        fontWeight: '400',
        color: textColor,
        lineHeight: '1.7',
        margin: '0 0 12px 0',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, textEn), showJapanese && /*#__PURE__*/React.createElement("p", {
      style: {
        ...getAnimationStyle(800),
        fontSize: 'clamp(14px, 2vw, 16px)',
        fontWeight: '400',
        color: textColor,
        lineHeight: '1.7',
        margin: 0,
        opacity: 0.7,
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, textJa), /*#__PURE__*/React.createElement("div", {
      style: {
        ...getAnimationStyle(1000),
        marginTop: '64px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '1px',
        height: '40px',
        backgroundColor: accentColor,
        opacity: 0.5,
        animation: shouldAnimate ? 'scrollPulse 2s ease-in-out infinite' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: textColor,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        opacity: 0.6
      }
    }, "Scroll"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes scrollPulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(10px);
          }
        }
      `));
  }

  // ============================================================================
  // USAGE INSTRUCTIONS:
  // 1. Copy MANIFEST object
  // 2. Copy Component function
  // 3. Paste into Wix Component Editor
  // 4. Customize via properties panel
  //
  // ANIMATION TIPS:
  // - Lower animationSpeed = faster (try 300-400 for energetic feel)
  // - Higher animationSpeed = slower (try 600-800 for calm feel)
  // - Adjust ballOpacity (20-40%) for subtle background effect
  // - Use ballBlur (60-100px) for dreamy, soft look
  // - 6 balls = balanced, 8 balls = more dynamic
  //
  // PERFORMANCE:
  // - Animation uses requestAnimationFrame for 60fps
  // - GPU-accelerated transforms (translate)
  // - Automatically reduces motion for accessibility
  // - Smaller balls on mobile for better performance
  //
  // COLOR COMBINATIONS:
  // Blue Theme: #777777, #777777, #999999
  // Purple Theme: #777777, #777777, #aaaaaa
  // Green Theme: #999999, #777777, #999999
  // Warm Theme: #aaaaaa, #666666, #777777
  // ============================================================================

  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};