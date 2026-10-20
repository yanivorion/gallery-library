window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["portfolio-simpleshowcase"] = function (React) {
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
   * Component Type: Portfolio.SimpleShowcase
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Portfolio.SimpleShowcase",
    "description": "Clean portfolio showcase with scroll reveals and hover effects that actually works",
    "editorElement": {
      "selector": ".portfolio-showcase",
      "displayName": "Portfolio Showcase",
      "archetype": "container",
      "data": {
        "projects": {
          "dataType": "text",
          "displayName": "Projects (JSON)",
          "defaultValue": JSON.stringify([{
            "title": "Volta Charging",
            "category": "Product Design",
            "year": "2024",
            "image": "data:image/svg+xml,%3Csvg width='1600' height='900' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' style='stop-color:%2318181b'/%3E%3Cstop offset='1' style='stop-color:%233f3f46'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='url(%23a)'/%3E%3C/svg%3E"
          }, {
            "title": "Meta AI",
            "category": "Brand Design",
            "year": "2024",
            "image": "data:image/svg+xml,%3Csvg width='1600' height='900' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' style='stop-color:%233f3f46'/%3E%3Cstop offset='1' style='stop-color:%2352525b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='url(%23b)'/%3E%3C/svg%3E"
          }, {
            "title": "Neural Interface",
            "category": "UI/UX Design",
            "year": "2024",
            "image": "data:image/svg+xml,%3Csvg width='1600' height='900' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='c' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' style='stop-color:%2352525b'/%3E%3Cstop offset='1' style='stop-color:%2318181b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='url(%23c)'/%3E%3C/svg%3E"
          }], null, 2),
          "group": "Content"
        },
        "cardHeight": {
          "dataType": "select",
          "displayName": "Card Height (vh)",
          "defaultValue": "85",
          "options": ["70", "80", "85", "90", "100"],
          "group": "Layout"
        },
        "cardGap": {
          "dataType": "select",
          "displayName": "Card Gap (px)",
          "defaultValue": "60",
          "options": ["40", "60", "80", "100"],
          "group": "Layout"
        },
        "titleSize": {
          "dataType": "number",
          "displayName": "Title Size (px)",
          "defaultValue": 64,
          "group": "Typography"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#0a0a0a",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title Color",
          "defaultValue": "#FFFFFF",
          "group": "Colors"
        },
        "metaColor": {
          "dataType": "color",
          "displayName": "Meta Color",
          "defaultValue": "#71717A",
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
    const projectsData = config?.projects || '[]';
    const cardHeight = parseInt(config?.cardHeight || "85");
    const cardGap = parseInt(config?.cardGap || "60");
    const titleSize = parseInt(config?.titleSize || "64");
    const backgroundColor = config?.backgroundColor || "#0a0a0a";
    const titleColor = config?.titleColor || "#FFFFFF";
    const metaColor = config?.metaColor || "#71717A";
    let projects = [];
    try {
      projects = JSON.parse(projectsData);
    } catch (e) {
      projects = [{
        title: "Project Title",
        category: "Category",
        year: "2024",
        image: "data:image/svg+xml,%3Csvg width='1600' height='900' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1600' height='900' fill='%23333'/%3E%3C/svg%3E"
      }];
    }
    const [visible, setVisible] = React.useState(new Set());
    const [hovered, setHovered] = React.useState(null);
    const refs = React.useRef([]);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    React.useEffect(() => {
      if (prefersReducedMotion) {
        setVisible(new Set(projects.map((_, i) => i)));
        return;
      }
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index);
            setVisible(prev => new Set([...prev, idx]));
          }
        });
      }, {
        threshold: 0.2
      });
      refs.current.forEach(ref => {
        if (ref) observer.observe(ref);
      });
      return () => observer.disconnect();
    }, [projects.length, prefersReducedMotion]);
    return /*#__PURE__*/React.createElement("div", {
      className: "portfolio-showcase",
      style: {
        backgroundColor,
        minHeight: '100vh',
        padding: `${cardGap}px 0`
      }
    }, projects.map((project, i) => {
      const isVisible = visible.has(i);
      const isHovered = hovered === i;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        ref: el => refs.current[i] = el,
        "data-index": i,
        onMouseEnter: () => setHovered(i),
        onMouseLeave: () => setHovered(null),
        style: {
          height: `${cardHeight}vh`,
          minHeight: '500px',
          marginBottom: i < projects.length - 1 ? `${cardGap}px` : 0,
          position: 'relative',
          overflow: 'hidden',
          opacity: prefersReducedMotion ? 1 : isVisible ? 1 : 0,
          transform: prefersReducedMotion ? 'none' : isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 800ms ease-out, transform 800ms ease-out'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: project.image,
        alt: project.title,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: prefersReducedMotion ? 'none' : isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 500ms ease-out'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 'clamp(40px, 5vw, 80px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '40px'
        }
      }, /*#__PURE__*/React.createElement("h2", {
        style: {
          fontSize: `clamp(${titleSize * 0.6}px, 5vw, ${titleSize}px)`,
          fontWeight: '500',
          color: titleColor,
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.02em',
          lineHeight: 1.1
        }
      }, project.title), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: '40px',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '14px',
          fontWeight: '400',
          color: metaColor,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }
      }, project.category), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '14px',
          fontWeight: '400',
          color: metaColor,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '0.05em'
        }
      }, project.year))));
    }));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};