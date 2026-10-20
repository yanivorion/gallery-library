window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["portfolio-cardshowcasescroll"] = function (React) {
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
   * Component Type: Portfolio.CardShowcaseScroll
   * ============================================================================
   */

  // ============================================================================
  // PORTFOLIO SYSTEM #8C: CARD SHOWCASE (SCROLL - VIEWPORT METHOD)
  // ============================================================================
  // Scroll-driven cards using viewport position detection
  // Perfect for: Wix environments where standard scroll doesn't work
  // ============================================================================

  const MANIFEST = {
    "type": "Portfolio.CardShowcaseScroll",
    "description": "Scroll-driven card showcase using viewport detection. Cards reveal as you scroll through the tall container.",
    "editorElement": {
      "selector": ".card-showcase-scroll",
      "displayName": "Card Showcase (Scroll)",
      "archetype": "container",
      "data": {
        "cards": {
          "dataType": "text",
          "displayName": "Cards (JSON)",
          "defaultValue": JSON.stringify([{
            image: "assets/06.webp",
            title: "Project Alpha"
          }, {
            image: "assets/07.webp",
            title: "Project Beta"
          }, {
            image: "assets/08.webp",
            title: "Project Gamma"
          }, {
            image: "assets/01.webp",
            title: "Project Delta"
          }, {
            image: "assets/02.webp",
            title: "Project Epsilon"
          }]),
          "group": "Content"
        },
        "characterIcon": {
          "dataType": "text",
          "displayName": "Character Icon",
          "defaultValue": "🎨",
          "group": "UI"
        },
        "stageWidth": {
          "dataType": "number",
          "displayName": "Stage Width (px)",
          "defaultValue": 400,
          "group": "Stage"
        },
        "stageHeight": {
          "dataType": "number",
          "displayName": "Stage Height (px)",
          "defaultValue": 500,
          "group": "Stage"
        },
        "scrollSections": {
          "dataType": "number",
          "displayName": "Scroll Sections (per card)",
          "defaultValue": 800,
          "group": "Stage",
          "description": "Height in pixels per card (800-1200 recommended)"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "uiBackgroundColor": {
          "dataType": "color",
          "displayName": "UI Background",
          "defaultValue": "#dddddd",
          "group": "Colors"
        },
        "uiBorderColor": {
          "dataType": "color",
          "displayName": "UI Border",
          "defaultValue": "#aaaaaa",
          "group": "Colors"
        },
        "stageBorderColor": {
          "dataType": "color",
          "displayName": "Stage Border",
          "defaultValue": "#bbbbbb",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "transitionDuration": {
          "dataType": "select",
          "displayName": "Transition Duration (ms)",
          "defaultValue": "400",
          "options": ["200", "300", "400", "500", "600"],
          "group": "Animation"
        },
        "showDebug": {
          "dataType": "booleanValue",
          "displayName": "Show Debug Info",
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
    const cardsJSON = config?.cards || "[]";
    const characterIcon = config?.characterIcon || "🎨";
    const stageWidth = parseInt(config?.stageWidth || "400");
    const stageHeight = parseInt(config?.stageHeight || "500");
    const scrollSections = parseInt(config?.scrollSections || "800");
    const backgroundColor = config?.backgroundColor || "#eeeeee";
    const uiBackgroundColor = config?.uiBackgroundColor || "#dddddd";
    const uiBorderColor = config?.uiBorderColor || "#aaaaaa";
    const stageBorderColor = config?.stageBorderColor || "#bbbbbb";
    const textColor = config?.textColor || "#222222";
    const transitionDuration = parseInt(config?.transitionDuration || "400");
    const showDebug = config?.showDebug === true;
    const [cards, setCards] = React.useState([]);
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    const [scrollInfo, setScrollInfo] = React.useState({
      y: 0,
      inView: false
    });
    const [isMobile, setIsMobile] = React.useState(false);
    const containerRef = React.useRef(null);
    const stageRef = React.useRef(null);

    // Parse cards
    React.useEffect(() => {
      try {
        const parsed = JSON.parse(cardsJSON);
        setCards(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        setCards([]);
      }
    }, [cardsJSON]);

    // Check mobile
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);

    // Scroll tracking with RAF for smoothness
    React.useEffect(() => {
      if (cards.length === 0 || !stageRef.current) return;
      let ticking = false;
      const updateScroll = () => {
        if (!stageRef.current) return;
        const rect = stageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const stageCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;

        // Distance from viewport center
        const distance = stageCenter - viewportCenter;

        // Is stage in view?
        const inView = rect.top < windowHeight && rect.bottom > 0;
        setScrollInfo({
          y: Math.round(distance),
          inView: inView,
          rectTop: Math.round(rect.top),
          rectBottom: Math.round(rect.bottom),
          windowHeight: windowHeight
        });

        // Calculate active card based on scroll position
        if (inView && containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const scrollProgress = Math.max(0, -containerRect.top);
          const totalHeight = containerRef.current.offsetHeight;
          const cardIndex = Math.floor(scrollProgress / totalHeight * cards.length);
          setActiveCardIndex(Math.max(0, Math.min(cardIndex, cards.length - 1)));
        }
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      updateScroll(); // Initial

      return () => window.removeEventListener('scroll', onScroll);
    }, [cards.length]);
    const currentStageWidth = isMobile ? stageWidth * 0.75 : stageWidth;
    const currentStageHeight = isMobile ? stageHeight * 0.8 : stageHeight;
    const totalHeight = cards.length * scrollSections;
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "card-showcase-scroll",
      style: {
        position: 'relative',
        height: `${totalHeight}px`,
        backgroundColor: backgroundColor,
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, showDebug && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: '80px',
        left: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: '#bbbbbb',
        padding: '12px',
        borderRadius: '4px',
        fontSize: '11px',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        zIndex: 1000,
        lineHeight: '1.8',
        minWidth: '200px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#ffffff',
        marginBottom: '8px',
        fontWeight: 'bold'
      }
    }, "📊 SCROLL DEBUG"), /*#__PURE__*/React.createElement("div", null, "Active Card: ", activeCardIndex + 1, " / ", cards.length), /*#__PURE__*/React.createElement("div", null, "Stage Y: ", scrollInfo.y, "px"), /*#__PURE__*/React.createElement("div", null, "In View: ", scrollInfo.inView ? '✅ YES' : '❌ NO'), /*#__PURE__*/React.createElement("div", null, "Stage Top: ", scrollInfo.rectTop, "px"), /*#__PURE__*/React.createElement("div", null, "Stage Bottom: ", scrollInfo.rectBottom, "px"), /*#__PURE__*/React.createElement("div", null, "Window H: ", scrollInfo.windowHeight, "px"), /*#__PURE__*/React.createElement("div", null, "Total H: ", totalHeight, "px"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '8px',
        color: '#eeeeee'
      }
    }, scrollInfo.inView ? '↕️ SCROLL TO CHANGE CARDS' : '⬇️ SCROLL TO STAGE')), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: isMobile ? '16px' : '20px',
        left: '20px',
        width: '40px',
        height: '40px',
        backgroundColor: uiBackgroundColor,
        border: `1px solid ${uiBorderColor}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        zIndex: 100
      }
    }, characterIcon), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: isMobile ? '16px' : '20px',
        right: '20px',
        backgroundColor: uiBackgroundColor,
        border: `1px solid ${uiBorderColor}`,
        borderRadius: '4px',
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: '600',
        color: textColor,
        zIndex: 100
      }
    }, activeCardIndex + 1, " / ", cards.length), cards.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        left: '50%',
        bottom: '30px',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: isMobile ? '260px' : '300px',
        backgroundColor: uiBackgroundColor,
        border: `1px solid ${uiBorderColor}`,
        borderRadius: '4px',
        padding: '3px',
        zIndex: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        border: `1px solid ${uiBorderColor}`,
        overflow: 'hidden',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: cards[activeCardIndex]?.image || '',
      alt: "",
      style: {
        width: '110%',
        height: '110%',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: isMobile ? '13px' : '14px',
        fontWeight: '600',
        color: textColor,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, cards[activeCardIndex]?.title || 'Untitled')), /*#__PURE__*/React.createElement("div", {
      ref: stageRef,
      style: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${currentStageWidth}px`,
        height: `${currentStageHeight}px`,
        border: `1px solid ${stageBorderColor}`,
        zIndex: 50
      }
    }, cards.map((card, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        height: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        clipPath: index <= activeCardIndex ? 'inset(0%)' : 'inset(100%)',
        transition: `clip-path ${transitionDuration}ms ease`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: card.image,
      alt: card.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        right: '0',
        top: '0',
        width: '3px',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: 99
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: `${(activeCardIndex + 1) / cards.length * 100}%`,
        backgroundColor: textColor,
        transition: `height ${transitionDuration}ms ease`
      }
    })));
  }

  // ============================================================================
  // USAGE & TROUBLESHOOTING:
  //
  // THIS VERSION SHOULD WORK because it:
  // ✅ Uses requestAnimationFrame for smooth scroll tracking
  // ✅ Detects stage position relative to viewport
  // ✅ Shows comprehensive debug info
  // ✅ Has scroll progress bar
  //
  // IF STILL NOT WORKING:
  // 1. Enable "Show Debug Info"
  // 2. Scroll and watch the debug panel
  // 3. Tell me what you see:
  //    - Does "In View" change to YES?
  //    - Does "Active Card" change when scrolling?
  //    - What are the Stage Top/Bottom values?
  //
  // SETTINGS TO TRY:
  // - scrollSections: 800 (default) - try 600 or 1000
  // - Stage should be 400x500px
  // - Total height = cards × scrollSections (5 cards = 4000px)
  // ============================================================================

  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};