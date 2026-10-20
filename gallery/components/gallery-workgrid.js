window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-workgrid"] = function (React) {
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
   * Component Type: Gallery.WorkGrid
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.WorkGrid",
    "description": "Portfolio work gallery with clean grid layout, image-first design, and subtle hover effects. Features responsive columns and staggered entrance animations. Perfect for showcasing creative projects.",
    "editorElement": {
      "selector": ".work-grid-gallery",
      "displayName": "Work Grid Gallery",
      "archetype": "container",
      "data": {
        "sectionTitle": {
          "dataType": "text",
          "displayName": "Section Title",
          "defaultValue": "Work",
          "group": "Content"
        },
        "sectionDescription": {
          "dataType": "text",
          "displayName": "Section Description",
          "defaultValue": "Highlights of cases that we passionately built with forward-thinking clients.",
          "group": "Content"
        },
        "projects": {
          "dataType": "text",
          "displayName": "Projects (JSON Array)",
          "defaultValue": JSON.stringify([{
            "title": "Brand Identity",
            "description": "Visual identity for digital agency",
            "image": "assets/07.webp"
          }, {
            "title": "Web Experience",
            "description": "E-commerce platform redesign",
            "image": "assets/08.webp"
          }, {
            "title": "Product Design",
            "description": "Mobile app for content creators",
            "image": "assets/01.webp"
          }, {
            "title": "Art Direction",
            "description": "Campaign for lifestyle brand",
            "image": "assets/02.webp"
          }]),
          "group": "Content",
          "description": "Array of project objects with title, description, and image URL"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "descriptionColor": {
          "dataType": "color",
          "displayName": "Description Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "titleFontSize": {
          "dataType": "number",
          "displayName": "Section Title Font Size (px)",
          "defaultValue": 72,
          "group": "Typography"
        },
        "titleFontWeight": {
          "dataType": "select",
          "displayName": "Section Title Font Weight",
          "defaultValue": "600",
          "options": ["300", "400", "500", "600", "700"],
          "group": "Typography"
        },
        "columns": {
          "dataType": "select",
          "displayName": "Desktop Columns",
          "defaultValue": "2",
          "options": ["2", "3"],
          "group": "Layout",
          "description": "Number of columns on desktop"
        },
        "gap": {
          "dataType": "number",
          "displayName": "Grid Gap (px)",
          "defaultValue": 32,
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
          "defaultValue": 50,
          "group": "Animation",
          "description": "Delay between each item animation"
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
    const sectionTitle = config?.sectionTitle || "Work";
    const sectionDescription = config?.sectionDescription || "Highlights of cases that we passionately built with forward-thinking clients.";
    const backgroundColor = config?.backgroundColor || "#ffffff";
    const titleColor = config?.titleColor || "#111111";
    const descriptionColor = config?.descriptionColor || "#777777";
    const titleFontSize = parseInt(config?.titleFontSize || "72");
    const titleFontWeight = config?.titleFontWeight || "600";
    const columns = config?.columns || "2";
    const gap = parseInt(config?.gap || "32");
    const animationDuration = parseInt(config?.animationDuration || "400");
    const staggerDelay = parseInt(config?.staggerDelay || "50");
    const enableAnimation = config?.enableAnimation !== false;
    let projects = [];
    try {
      projects = JSON.parse(config?.projects || '[]');
      if (!Array.isArray(projects) || projects.length === 0) {
        projects = [{
          title: "Brand Identity",
          description: "Visual identity for digital agency",
          image: "assets/03.webp"
        }, {
          title: "Web Experience",
          description: "E-commerce platform redesign",
          image: "assets/04.webp"
        }, {
          title: "Product Design",
          description: "Mobile app for content creators",
          image: "assets/05.webp"
        }, {
          title: "Art Direction",
          description: "Campaign for lifestyle brand",
          image: "assets/06.webp"
        }];
      }
    } catch (e) {
      projects = [{
        title: "Brand Identity",
        description: "Visual identity for digital agency",
        image: "assets/07.webp"
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
    return /*#__PURE__*/React.createElement("div", {
      ref: sectionRef,
      className: "work-grid-gallery",
      style: {
        backgroundColor: backgroundColor,
        padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1400px',
        margin: '0 auto 64px auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: `clamp(${titleFontSize * 0.5}px, ${titleFontSize * 0.08}vw + ${titleFontSize * 0.3}px, ${titleFontSize}px)`,
        fontWeight: titleFontWeight,
        color: titleColor,
        margin: '0 0 24px 0',
        lineHeight: '1.1',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, sectionTitle), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '18px',
        fontWeight: '300',
        color: descriptionColor,
        margin: 0,
        maxWidth: '600px',
        lineHeight: '1.6',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, sectionDescription)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 400px), 1fr))`,
        gap: `${gap}px`,
        maxWidth: '1400px',
        margin: '0 auto'
      }
    }, projects.map((project, index) => {
      const isVisible = visibleItems.includes(index);
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: {
          opacity: shouldAnimate ? isVisible ? 1 : 0 : 1,
          transform: shouldAnimate ? isVisible ? 'translateY(0)' : 'translateY(30px)' : 'translateY(0)',
          transition: shouldAnimate ? `opacity ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out` : 'none'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          width: '100%',
          paddingBottom: '75%',
          overflow: 'hidden',
          marginBottom: '20px',
          cursor: 'pointer'
        },
        onMouseEnter: e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.02)';
        },
        onMouseLeave: e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: project.image,
        alt: project.title,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 400ms ease-out'
        }
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: '24px',
          fontWeight: '500',
          color: titleColor,
          margin: '0 0 8px 0',
          lineHeight: '1.3',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, project.title), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '16px',
          fontWeight: '300',
          color: descriptionColor,
          margin: 0,
          lineHeight: '1.5',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, project.description)));
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};