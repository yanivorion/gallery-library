window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-horizontalscroll"] = function (React) {
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
   * Component Type: Gallery.HorizontalScroll
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.HorizontalScroll",
    "description": "Horizontal scrolling gallery with scale and blur based on distance from center",
    "editorElement": {
      "selector": ".horizontal-gallery",
      "displayName": "Horizontal Scroll Gallery",
      "archetype": "container",
      "data": {
        "itemWidth": {
          "dataType": "select",
          "displayName": "Item Width",
          "defaultValue": "400",
          "options": ["320", "360", "400", "440", "480"],
          "group": "Layout"
        },
        "itemHeight": {
          "dataType": "select",
          "displayName": "Item Height",
          "defaultValue": "500",
          "options": ["400", "450", "500", "550", "600"],
          "group": "Layout"
        },
        "gap": {
          "dataType": "select",
          "displayName": "Gap Between Items",
          "defaultValue": "32",
          "options": ["20", "24", "32", "40", "48"],
          "group": "Layout"
        },
        "maxBlur": {
          "dataType": "select",
          "displayName": "Max Blur Amount (px)",
          "defaultValue": "8",
          "options": ["4", "6", "8", "10", "12"],
          "group": "Animation"
        },
        "minScale": {
          "dataType": "select",
          "displayName": "Min Scale (distant items)",
          "defaultValue": "0.75",
          "options": ["0.6", "0.7", "0.75", "0.8", "0.85"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "borderColor": {
          "dataType": "color",
          "displayName": "Item Border Color",
          "defaultValue": "#444444",
          "group": "Colors"
        }
      },
      "layout": {
        "resizeDirection": "vertical",
        "contentResizeDirection": "vertical"
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragStart, setDragStart] = React.useState({
      x: 0,
      scroll: 0
    });
    const [velocity, setVelocity] = React.useState(0);
    const scrollContainerRef = React.useRef(null);
    const animationRef = React.useRef(null);
    const lastTimeRef = React.useRef(Date.now());
    const itemWidth = parseInt(config?.itemWidth || "400");
    const itemHeight = parseInt(config?.itemHeight || "500");
    const gap = parseInt(config?.gap || "32");
    const maxBlur = parseInt(config?.maxBlur || "8");
    const minScale = parseFloat(config?.minScale || "0.75");
    const backgroundColor = config?.backgroundColor || "#111111";
    const textColor = config?.textColor || "#ffffff";
    const borderColor = config?.borderColor || "#444444";
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const items = [{
      title: "Mountain Vista",
      location: "Swiss Alps",
      image: "assets/06.webp"
    }, {
      title: "Ocean Serenity",
      location: "Maldives",
      image: "assets/07.webp"
    }, {
      title: "Desert Dreams",
      location: "Sahara",
      image: "assets/08.webp"
    }, {
      title: "Urban Lights",
      location: "Tokyo",
      image: "assets/01.webp"
    }, {
      title: "Forest Path",
      location: "Redwood",
      image: "assets/02.webp"
    }, {
      title: "Arctic Aurora",
      location: "Iceland",
      image: "assets/03.webp"
    }, {
      title: "Coastal Cliffs",
      location: "Ireland",
      image: "assets/04.webp"
    }, {
      title: "Canyon Depths",
      location: "Arizona",
      image: "assets/05.webp"
    }];

    // Momentum scrolling
    React.useEffect(() => {
      if (prefersReducedMotion) return;
      const animate = () => {
        if (Math.abs(velocity) > 0.1 && !isDragging) {
          setScrollPosition(prev => {
            const container = scrollContainerRef.current;
            if (!container) return prev;
            const maxScroll = container.scrollWidth - container.clientWidth;
            const newScroll = Math.max(0, Math.min(maxScroll, prev + velocity));
            container.scrollLeft = newScroll;
            return newScroll;
          });
          setVelocity(v => v * 0.95);
        }
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }, [velocity, isDragging, prefersReducedMotion]);
    const handleScroll = e => {
      setScrollPosition(e.target.scrollLeft);
    };
    const handleMouseDown = e => {
      setIsDragging(true);
      setDragStart({
        x: e.clientX,
        scroll: scrollPosition
      });
      setVelocity(0);
      lastTimeRef.current = Date.now();
    };
    const handleMouseMove = e => {
      if (!isDragging) return;
      const delta = e.clientX - dragStart.x;
      const newScroll = dragStart.scroll - delta;
      const container = scrollContainerRef.current;
      if (container) {
        const now = Date.now();
        const dt = now - lastTimeRef.current;
        if (dt > 0) {
          setVelocity(-(newScroll - scrollPosition) / dt * 16);
        }
        lastTimeRef.current = now;
        container.scrollLeft = newScroll;
        setScrollPosition(newScroll);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    React.useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, dragStart, scrollPosition]);
    const containerStyle = {
      width: '100%',
      minHeight: '700px',
      backgroundColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      padding: '60px 0'
    };
    const scrollContainerStyle = {
      display: 'flex',
      gap: `${gap}px`,
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      cursor: isDragging ? 'grabbing' : 'grab',
      padding: '40px max(40px, calc((100vw - 1400px) / 2))',
      userSelect: 'none',
      width: '100%'
    };
    const getItemTransform = index => {
      const container = scrollContainerRef.current;
      if (!container) return {
        scale: 1,
        blur: 0,
        opacity: 1
      };
      const itemLeft = index * (itemWidth + gap);
      const containerCenter = scrollPosition + container.clientWidth / 2;
      const itemCenter = itemLeft + itemWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      const maxDistance = container.clientWidth / 2 + itemWidth;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const scale = minScale + (1 - minScale) * (1 - normalizedDistance);
      const blur = maxBlur * normalizedDistance;
      const opacity = 0.4 + 0.6 * (1 - normalizedDistance);
      return {
        scale,
        blur,
        opacity
      };
    };
    const getItemStyle = index => {
      const {
        scale,
        blur,
        opacity
      } = getItemTransform(index);
      return {
        minWidth: `${itemWidth}px`,
        height: `${itemHeight}px`,
        borderRadius: '16px',
        overflow: 'hidden',
        border: `1px solid ${borderColor}`,
        position: 'relative',
        transform: prefersReducedMotion ? 'none' : `scale(${scale})`,
        filter: prefersReducedMotion ? 'none' : `blur(${blur}px)`,
        opacity: prefersReducedMotion ? 1 : opacity,
        transition: 'transform 100ms ease-out, filter 100ms ease-out, opacity 100ms ease-out',
        willChange: 'transform, filter, opacity',
        pointerEvents: isDragging ? 'none' : 'auto'
      };
    };
    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    };
    const infoOverlayStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
      padding: '32px 20px 20px',
      color: textColor
    };
    const titleStyle = {
      fontSize: '24px',
      fontWeight: '400',
      margin: '0 0 4px 0',
      letterSpacing: '-0.01em'
    };
    const locationStyle = {
      fontSize: '14px',
      opacity: 0.7,
      margin: 0
    };
    return /*#__PURE__*/React.createElement("div", {
      style: containerStyle,
      className: "horizontal-gallery"
    }, /*#__PURE__*/React.createElement("style", null, `
        .horizontal-gallery *::-webkit-scrollbar {
          display: none;
        }
      `), /*#__PURE__*/React.createElement("div", {
      ref: scrollContainerRef,
      style: scrollContainerStyle,
      onScroll: handleScroll,
      onMouseDown: handleMouseDown
    }, items.map((item, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      style: getItemStyle(index)
    }, /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: item.title,
      style: imageStyle,
      draggable: false
    }), /*#__PURE__*/React.createElement("div", {
      style: infoOverlayStyle
    }, /*#__PURE__*/React.createElement("h3", {
      style: titleStyle
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: locationStyle
    }, item.location))))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};