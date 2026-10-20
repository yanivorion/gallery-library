window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["portfolio-categoryhero"] = function (React) {
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
   * Component Type: Portfolio.CategoryHero
   * ============================================================================
   */

  // ============================================================================
  // PORTFOLIO SYSTEM #1: CATEGORY HERO WITH VIDEO BACKGROUND
  // ============================================================================
  // Full-screen hero section with video background, bilingual titles, and smooth entrance
  // Perfect for: Portfolio category pages, project showcases, creative sections
  // ============================================================================

  const MANIFEST = {
    "type": "Portfolio.CategoryHero",
    "description": "Full-screen category hero with video background, bilingual titles (EN/JA), and elegant fade-in animations. Perfect for portfolio section intros.",
    "editorElement": {
      "selector": ".portfolio-category-hero",
      "displayName": "Portfolio Category Hero",
      "archetype": "container",
      "data": {
        "titleEn": {
          "dataType": "text",
          "displayName": "Title (English)",
          "defaultValue": "Exploration",
          "group": "Content"
        },
        "titleJa": {
          "dataType": "text",
          "displayName": "Title (Japanese)",
          "defaultValue": "探求",
          "group": "Content"
        },
        "textEn": {
          "dataType": "text",
          "displayName": "Description (English)",
          "defaultValue": "20 experimental works featuring test code and strong elements of research.",
          "group": "Content"
        },
        "textJa": {
          "dataType": "text",
          "displayName": "Description (Japanese)",
          "defaultValue": "試験的なコードと研究要素を備えた20作品",
          "group": "Content"
        },
        "videoUrl": {
          "dataType": "text",
          "displayName": "Video URL",
          "defaultValue": "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4",
          "group": "Content",
          "description": "MP4 video URL for background"
        },
        "imagePc": {
          "dataType": "text",
          "displayName": "Fallback Image (Desktop)",
          "defaultValue": "",
          "group": "Content",
          "description": "Shown if video fails to load"
        },
        "imageSp": {
          "dataType": "text",
          "displayName": "Fallback Image (Mobile)",
          "defaultValue": "",
          "group": "Content"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "overlayColor": {
          "dataType": "color",
          "displayName": "Video Overlay Color",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "overlayOpacity": {
          "dataType": "number",
          "displayName": "Overlay Opacity (0-100)",
          "defaultValue": 60,
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
        "titleFontSize": {
          "dataType": "number",
          "displayName": "Title Font Size (px)",
          "defaultValue": 80,
          "group": "Typography"
        },
        "showJapanese": {
          "dataType": "booleanValue",
          "displayName": "Show Japanese Text",
          "defaultValue": true,
          "group": "Content"
        },
        "videoPlaybackSpeed": {
          "dataType": "select",
          "displayName": "Video Playback Speed",
          "defaultValue": "1",
          "options": ["0.5", "0.75", "1", "1.25", "1.5"],
          "group": "Video Settings"
        },
        "videoLoop": {
          "dataType": "booleanValue",
          "displayName": "Loop Video",
          "defaultValue": true,
          "group": "Video Settings"
        },
        "enableAnimation": {
          "dataType": "booleanValue",
          "displayName": "Enable Animations",
          "defaultValue": true,
          "group": "Animation"
        },
        "animationDuration": {
          "dataType": "select",
          "displayName": "Animation Duration (ms)",
          "defaultValue": "1000",
          "options": ["600", "800", "1000", "1200", "1500"],
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
    const titleEn = config?.titleEn || "Exploration";
    const titleJa = config?.titleJa || "探求";
    const textEn = config?.textEn || "20 experimental works featuring test code and strong elements of research.";
    const textJa = config?.textJa || "試験的なコードと研究要素を備えた20作品";
    const videoUrl = config?.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4";
    const imagePc = config?.imagePc || "";
    const imageSp = config?.imageSp || "";
    const backgroundColor = config?.backgroundColor || "#111111";
    const overlayColor = config?.overlayColor || "#000000";
    const overlayOpacity = parseInt(config?.overlayOpacity || "60");
    const titleColor = config?.titleColor || "#ffffff";
    const textColor = config?.textColor || "#aaaaaa";
    const accentColor = config?.accentColor || "#777777";
    const titleFontSize = parseInt(config?.titleFontSize || "80");
    const showJapanese = config?.showJapanese !== false;
    const videoPlaybackSpeed = parseFloat(config?.videoPlaybackSpeed || "1");
    const videoLoop = config?.videoLoop !== false;
    const enableAnimation = config?.enableAnimation !== false;
    const animationDuration = parseInt(config?.animationDuration || "1000");
    const [isVisible, setIsVisible] = React.useState(false);
    const [videoLoaded, setVideoLoaded] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const videoRef = React.useRef(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const shouldAnimate = enableAnimation && !prefersReducedMotion;
    React.useEffect(() => {
      // Check mobile
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
    React.useEffect(() => {
      if (!shouldAnimate) {
        setIsVisible(true);
        return;
      }
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }, [shouldAnimate]);
    React.useEffect(() => {
      if (videoRef.current && videoUrl) {
        videoRef.current.playbackRate = videoPlaybackSpeed;
      }
    }, [videoPlaybackSpeed, videoUrl]);
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
        transition: `opacity ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      };
    };
    const currentImage = isMobile && imageSp ? imageSp : imagePc;
    return /*#__PURE__*/React.createElement("section", {
      className: "portfolio-category-hero",
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
    }, videoUrl && !isMobile && /*#__PURE__*/React.createElement("video", {
      ref: videoRef,
      autoPlay: true,
      loop: videoLoop,
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
        opacity: videoLoaded ? 1 : 0,
        transition: `opacity ${animationDuration}ms ease-out`
      }
    }, /*#__PURE__*/React.createElement("source", {
      src: videoUrl,
      type: "video/mp4"
    })), currentImage && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
        opacity: isMobile || !videoLoaded ? 1 : 0,
        transition: 'opacity 800ms ease-out'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: overlayColor,
        opacity: overlayOpacity / 100,
        zIndex: 1,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
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
        fontSize: `clamp(${titleFontSize * 0.4}px, ${titleFontSize * 0.08}vw + ${titleFontSize * 0.3}px, ${titleFontSize}px)`,
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
        fontSize: `clamp(${titleFontSize * 0.25}px, ${titleFontSize * 0.05}vw + ${titleFontSize * 0.2}px, ${titleFontSize * 0.5}px)`,
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
  // TIPS:
  // - Use MP4 videos for best compatibility
  // - Keep videos under 10MB for performance
  // - Adjust overlay opacity for text readability
  // - Disable video on mobile for faster loading
  // ============================================================================

  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};