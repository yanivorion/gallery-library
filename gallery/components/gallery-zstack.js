window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-zstack"] = function (React) {
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
   * Project: Galleries, Carousels & Slideshows (3/4)
   * Generated: Sep 15, 2026, 01:36 PM
   * Component Type: Gallery.ZStack
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.ZStack",
    "description": "Sticky scroll experience where cards fly forward from a stack.",
    "editorElement": {
      "selector": ".z-stack",
      "displayName": "Z-Axis Scroll Deck",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs (Comma Sep)",
          "defaultValue": "assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp",
          "group": "Content"
        },
        "cardWidth": {
          "dataType": "number",
          "displayName": "Card Width (px)",
          "defaultValue": 350,
          "group": "Layout"
        },
        "stackOffset": {
          "dataType": "number",
          "displayName": "Stack Visible Offset",
          "defaultValue": 10,
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
    const containerRef = React.useRef(null);
    const [progress, setProgress] = React.useState(0);

    // Config
    const rawImages = config?.images || '';
    const images = React.useMemo(() => rawImages.split(',').map(i => i.trim()).filter(Boolean), [rawImages]);
    const cardWidth = parseInt(config?.cardWidth || '350');
    const stackOffset = parseInt(config?.stackOffset || '10');

    // Height multiplier for scroll distance
    const scrollHeight = images.length * 400; // 400px scroll per card

    React.useEffect(() => {
      const handleScroll = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const top = rect.top; // Distance from viewport top

        // Calculate how far we are scrolled INTO the component
        // Note: In a real playground, this depends on window scroll.
        // We assume this component is tall and we track viewport position.

        // Simplified Logic: 
        // If top is 0, we are at start.
        // If top is -scrollHeight, we are at end.
        const rawProgress = -top;
        setProgress(Math.max(0, rawProgress));
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Init
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "z-stack-wrapper",
      style: {
        width: '100%',
        height: `${scrollHeight + window.innerHeight}px`,
        // Make space to scroll
        position: 'relative',
        backgroundColor: '#eeeeee'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sticky-stage",
      style: {
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px'
      }
    }, images.map((img, i) => {
      // Calculate state for this card
      // Each card occupies a 400px slot in scroll space
      const cardStart = i * 400;
      const cardEnd = cardStart + 400;
      let zIndex = images.length - i;
      let translateZ = 0;
      let opacity = 1;
      let translateY = 0;
      let rotateX = 0;
      if (progress < cardStart) {
        // Future card (waiting in stack)
        translateZ = -i * 50; // Stack depth
        translateY = i * stackOffset; // Visible stack offset
        opacity = 1 - i * 0.1; // Fade background cards slightly
      } else if (progress >= cardStart && progress < cardEnd) {
        // Active card (flying out)
        const localProgress = (progress - cardStart) / 400; // 0 to 1
        translateZ = localProgress * 500; // Fly towards camera
        opacity = 1 - localProgress; // Fade out as it gets close
        translateY = i * stackOffset - localProgress * 100; // Lift up
        rotateX = localProgress * -20; // Tilt up
      } else {
        // Past card (gone)
        opacity = 0;
        translateZ = 1000;
      }
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'absolute',
          width: `${cardWidth}px`,
          height: `${cardWidth * 1.4}px`,
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          zIndex: zIndex,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg)`,
          opacity: opacity,
          willChange: 'transform, opacity'
          // Note: No transition here, driven directly by scroll for 1:1 feel
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          opacity: opacity > 0.8 ? 1 : 0 // Hide text when flying
        }
      }, /*#__PURE__*/React.createElement("h3", {
        style: {
          margin: 0,
          fontSize: '24px'
        }
      }, "0", i + 1)));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '40px',
        opacity: progress > 100 ? 0 : 0.5,
        transition: 'opacity 0.3s'
      }
    }, "SCROLL TO EXPLORE STACK")));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};