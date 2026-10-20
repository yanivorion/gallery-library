window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-bentogrid"] = function (React) {
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
   * Project: Galleries, Carousels & Slideshows (1/4)
   * Generated: Sep 15, 2026, 01:36 PM
   * Component Type: Gallery.BentoGrid
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.BentoGrid",
    "description": "Dynamic Bento-style portfolio grid with varied card sizes creating visual rhythm and hierarchy. Features hover effects, responsive layout, and staggered animations. Perfect for showcasing diverse project types.",
    "editorElement": {
      "selector": ".bento-grid-gallery",
      "displayName": "Bento Grid Gallery",
      "archetype": "container",
      "data": {
        "sectionTitle": {
          "dataType": "text",
          "displayName": "Section Title",
          "defaultValue": "Featured Work",
          "group": "Content"
        },
        "projects": {
          "dataType": "text",
          "displayName": "Projects (JSON Array)",
          "defaultValue": JSON.stringify([{
            "title": "Brand System",
            "category": "Identity",
            "image": "assets/07.webp",
            "size": "large"
          }, {
            "title": "Mobile App",
            "category": "Product Design",
            "image": "assets/08.webp",
            "size": "medium"
          }, {
            "title": "Web Platform",
            "category": "Development",
            "image": "assets/01.webp",
            "size": "medium"
          }, {
            "title": "Editorial",
            "category": "Art Direction",
            "image": "assets/02.webp",
            "size": "small"
          }, {
            "title": "E-commerce",
            "category": "Web Design",
            "image": "assets/03.webp",
            "size": "small"
          }]),
          "group": "Content",
          "description": "Projects with title, category, image, size (small/medium/large)"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "cardBackgroundColor": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "categoryColor": {
          "dataType": "color",
          "displayName": "Category Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "sectionTitleFontSize": {
          "dataType": "number",
          "displayName": "Section Title Font Size (px)",
          "defaultValue": 56,
          "group": "Typography"
        },
        "gap": {
          "dataType": "number",
          "displayName": "Grid Gap (px)",
          "defaultValue": 24,
          "group": "Layout"
        },
        "cardBorderRadius": {
          "dataType": "number",
          "displayName": "Card Border Radius (px)",
          "defaultValue": 12,
          "group": "Layout"
        },
        "animationDuration": {
          "dataType": "select",
          "displayName": "Animation Duration (ms)",
          "defaultValue": "400",
          "options": ["300", "400", "500", "600"],
          "group": "Animation"
        },
        "staggerDelay": {
          "dataType": "number",
          "displayName": "Stagger Delay (ms)",
          "defaultValue": 60,
          "group": "Animation"
        },
        "enableAnimation": {
          "dataType": "booleanValue",
          "displayName": "Enable Entrance Animation",
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
    const sectionTitle = config?.sectionTitle || "Featured Work";
    const backgroundColor = config?.backgroundColor || "#eeeeee";
    const cardBackgroundColor = config?.cardBackgroundColor || "#ffffff";
    const titleColor = config?.titleColor || "#111111";
    const categoryColor = config?.categoryColor || "#777777";
    const sectionTitleFontSize = parseInt(config?.sectionTitleFontSize || "56");
    const gap = parseInt(config?.gap || "24");
    const cardBorderRadius = parseInt(config?.cardBorderRadius || "12");
    const animationDuration = parseInt(config?.animationDuration || "400");
    const staggerDelay = parseInt(config?.staggerDelay || "60");
    const enableAnimation = config?.enableAnimation !== false;
    let projects = [];
    try {
      projects = JSON.parse(config?.projects || '[]');
      if (!Array.isArray(projects) || projects.length === 0) {
        projects = [{
          title: "Brand System",
          category: "Identity",
          image: "assets/04.webp",
          size: "large"
        }, {
          title: "Mobile App",
          category: "Product Design",
          image: "assets/05.webp",
          size: "medium"
        }, {
          title: "Web Platform",
          category: "Development",
          image: "assets/06.webp",
          size: "medium"
        }, {
          title: "Editorial",
          category: "Art Direction",
          image: "assets/07.webp",
          size: "small"
        }, {
          title: "E-commerce",
          category: "Web Design",
          image: "assets/08.webp",
          size: "small"
        }];
      }
    } catch (e) {
      projects = [{
        title: "Brand System",
        category: "Identity",
        image: "assets/01.webp",
        size: "large"
      }];
    }
    const [visibleItems, setVisibleItems] = React.useState([]);
    const sectionRef = React.useRef(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    React.useEffect(() => {
      if (!enableAnimation || prefersReducedMotion) {
        setVisibleItems(projects.map((_, i) => i));
        return;
      }
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, index])]);
              }, index * staggerDelay);
            });
          }
        });
      }, {
        threshold: 0.1
      });
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      return () => observer.disconnect();
    }, [enableAnimation, prefersReducedMotion, staggerDelay, projects.length]);
    const shouldAnimate = enableAnimation && !prefersReducedMotion;
    const getCardHeight = size => {
      switch (size) {
        case 'large':
          return '520px';
        case 'medium':
          return '380px';
        case 'small':
          return '280px';
        default:
          return '380px';
      }
    };
    const getCardSpan = size => {
      switch (size) {
        case 'large':
          return 'span 2';
        case 'medium':
          return 'span 1';
        case 'small':
          return 'span 1';
        default:
          return 'span 1';
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: sectionRef,
      className: "bento-grid-gallery",
      style: {
        backgroundColor: backgroundColor,
        padding: 'clamp(60px, 10vw, 100px) clamp(24px, 5vw, 80px)',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: `clamp(${sectionTitleFontSize * 0.55}px, ${sectionTitleFontSize * 0.08}vw + ${sectionTitleFontSize * 0.35}px, ${sectionTitleFontSize}px)`,
        fontWeight: '600',
        color: titleColor,
        margin: '0 0 48px 0',
        lineHeight: '1.2',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        maxWidth: '1400px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, sectionTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: `${gap}px`,
        maxWidth: '1400px',
        margin: '0 auto'
      }
    }, projects.map((project, index) => {
      const isVisible = visibleItems.includes(index);
      const cardHeight = getCardHeight(project.size);
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: {
          gridColumn: window.innerWidth > 768 ? getCardSpan(project.size) : 'span 1',
          height: cardHeight,
          backgroundColor: cardBackgroundColor,
          borderRadius: `${cardBorderRadius}px`,
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          opacity: shouldAnimate ? isVisible ? 1 : 0 : 1,
          transform: shouldAnimate ? isVisible ? 'scale(1)' : 'scale(0.95)' : 'scale(1)',
          transition: shouldAnimate ? `opacity ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out, box-shadow 300ms ease-out` : 'box-shadow 300ms ease-out',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        },
        onMouseEnter: e => {
          e.currentTarget.style.transform = 'scale(1.02) translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
        },
        onMouseLeave: e => {
          e.currentTarget.style.transform = shouldAnimate && isVisible ? 'scale(1)' : 'scale(0.95)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '70%',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: project.image,
        alt: project.title,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '24px',
          height: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '11px',
          fontWeight: '600',
          color: categoryColor,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '8px',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, project.category), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: project.size === 'large' ? '28px' : project.size === 'medium' ? '22px' : '20px',
          fontWeight: '600',
          color: titleColor,
          margin: 0,
          lineHeight: '1.3',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, project.title)));
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};