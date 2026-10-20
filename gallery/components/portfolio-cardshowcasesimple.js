window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["portfolio-cardshowcasesimple"] = function (React) {
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
   * Component Type: Portfolio.CardShowcaseSimple
   * ============================================================================
   */

  // ============================================================================
  // PORTFOLIO SYSTEM #8B: CARD SHOWCASE (SIMPLIFIED WITH MANUAL CONTROLS)
  // ============================================================================
  // Easier to test version with manual next/prev buttons
  // Perfect for: Testing card transitions before implementing scroll
  // ============================================================================

  const MANIFEST = {
    "type": "Portfolio.CardShowcaseSimple",
    "description": "Simplified card showcase with manual navigation. Perfect for testing clip-path transitions without scroll complications.",
    "editorElement": {
      "selector": ".card-showcase-simple",
      "displayName": "Card Showcase (Simple)",
      "archetype": "container",
      "data": {
        // Cards Data
        "cards": {
          "dataType": "text",
          "displayName": "Cards (JSON)",
          "defaultValue": JSON.stringify([{
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
            title: "Project Alpha"
          }, {
            image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800",
            title: "Project Beta"
          }, {
            image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800",
            title: "Project Gamma"
          }, {
            image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800",
            title: "Project Delta"
          }, {
            image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800",
            title: "Project Epsilon"
          }]),
          "group": "Content"
        },
        // UI Settings
        "characterIcon": {
          "dataType": "text",
          "displayName": "Character Icon",
          "defaultValue": "🎨",
          "group": "UI"
        },
        "showCharacterIcon": {
          "dataType": "booleanValue",
          "displayName": "Show Character Icon",
          "defaultValue": true,
          "group": "UI"
        },
        // Stage
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
        // Colors
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#EEEDED",
          "group": "Colors"
        },
        "uiBackgroundColor": {
          "dataType": "color",
          "displayName": "UI Background",
          "defaultValue": "#D9D9D9",
          "group": "Colors"
        },
        "uiBorderColor": {
          "dataType": "color",
          "displayName": "UI Border",
          "defaultValue": "#A7A7A7",
          "group": "Colors"
        },
        "stageBorderColor": {
          "dataType": "color",
          "displayName": "Stage Border",
          "defaultValue": "#C3C3C3",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#1B1B1B",
          "group": "Colors"
        },
        // Animation
        "transitionDuration": {
          "dataType": "select",
          "displayName": "Transition Duration (ms)",
          "defaultValue": "400",
          "options": ["200", "300", "400", "500", "600"],
          "group": "Animation"
        },
        "autoPlay": {
          "dataType": "booleanValue",
          "displayName": "Auto-Play Cards",
          "defaultValue": false,
          "group": "Animation"
        },
        "autoPlayInterval": {
          "dataType": "select",
          "displayName": "Auto-Play Interval (sec)",
          "defaultValue": "3",
          "options": ["2", "3", "4", "5"],
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
    const showCharacterIcon = config?.showCharacterIcon !== false;
    const stageWidth = parseInt(config?.stageWidth || "400");
    const stageHeight = parseInt(config?.stageHeight || "500");
    const backgroundColor = config?.backgroundColor || "#EEEDED";
    const uiBackgroundColor = config?.uiBackgroundColor || "#D9D9D9";
    const uiBorderColor = config?.uiBorderColor || "#A7A7A7";
    const stageBorderColor = config?.stageBorderColor || "#C3C3C3";
    const textColor = config?.textColor || "#1B1B1B";
    const transitionDuration = parseInt(config?.transitionDuration || "400");
    const autoPlay = config?.autoPlay === true;
    const autoPlayInterval = parseInt(config?.autoPlayInterval || "3") * 1000;
    const [cards, setCards] = React.useState([]);
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

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

    // Auto-play
    React.useEffect(() => {
      if (!autoPlay || cards.length === 0) return;
      const interval = setInterval(() => {
        setActiveCardIndex(prev => (prev + 1) % cards.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }, [autoPlay, cards.length, autoPlayInterval]);
    const handleNext = () => {
      setActiveCardIndex(prev => (prev + 1) % cards.length);
    };
    const handlePrev = () => {
      setActiveCardIndex(prev => (prev - 1 + cards.length) % cards.length);
    };
    const currentStageWidth = isMobile ? stageWidth * 0.75 : stageWidth;
    const currentStageHeight = isMobile ? stageHeight * 0.8 : stageHeight;
    return /*#__PURE__*/React.createElement("div", {
      className: "card-showcase-simple",
      style: {
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    }, showCharacterIcon && /*#__PURE__*/React.createElement("div", {
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
      style: {
        position: 'relative',
        width: `${currentStageWidth}px`,
        height: `${currentStageHeight}px`,
        border: `1px solid ${stageBorderColor}`
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
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: handlePrev,
      style: {
        position: 'absolute',
        left: '-60px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        backgroundColor: uiBackgroundColor,
        border: `1px solid ${uiBorderColor}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: `all ${transitionDuration}ms ease`,
        fontSize: '20px'
      },
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#FFFFFF';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = uiBackgroundColor;
      }
    }, "←"), /*#__PURE__*/React.createElement("button", {
      onClick: handleNext,
      style: {
        position: 'absolute',
        right: '-60px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        backgroundColor: uiBackgroundColor,
        border: `1px solid ${uiBorderColor}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: `all ${transitionDuration}ms ease`,
        fontSize: '20px'
      },
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#FFFFFF';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = uiBackgroundColor;
      }
    }, "→")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '11px',
        color: textColor,
        opacity: 0.4,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }
    }, "Use arrows or click"));
  }

  // ============================================================================
  // USAGE INSTRUCTIONS:
  // This is a SIMPLIFIED version for testing the card system!
  //
  // FEATURES:
  // ✅ Manual navigation (prev/next arrows)
  // ✅ Optional auto-play mode
  // ✅ Card counter display
  // ✅ Same UI design system
  // ✅ Easier to test and debug
  //
  // USE THIS VERSION IF:
  // - Scroll version isn't working
  // - You want manual control
  // - Testing card transitions
  // - Need simpler implementation
  //
  // THEN UPGRADE TO:
  // - Scroll version (portfolio-08-card-showcase.js) once working
  // ============================================================================

  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};