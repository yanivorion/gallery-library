window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-worklist"] = function (React) {
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
   * Component Type: Gallery.WorkList
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.WorkList",
    "description": "Editorial-style vertical work list with large project titles and alternating image placements. Features magazine-inspired layout, hover effects, and staggered animations. Perfect for sophisticated portfolio presentation.",
    "editorElement": {
      "selector": ".work-list-editorial",
      "displayName": "Work List Editorial",
      "archetype": "container",
      "data": {
        "sectionTitle": {
          "dataType": "text",
          "displayName": "Section Title",
          "defaultValue": "Selected Work",
          "group": "Content"
        },
        "showSectionTitle": {
          "dataType": "booleanValue",
          "displayName": "Show Section Title",
          "defaultValue": true,
          "group": "Content"
        },
        "projects": {
          "dataType": "text",
          "displayName": "Projects (JSON Array)",
          "defaultValue": JSON.stringify([{
            "title": "Urban Retreat",
            "year": "2024",
            "category": "Architecture / Branding",
            "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
          }, {
            "title": "Motion Studio",
            "year": "2024",
            "category": "Digital Experience",
            "image": "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80"
          }, {
            "title": "Kinetic Type",
            "year": "2023",
            "category": "Art Direction / Code",
            "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80"
          }]),
          "group": "Content",
          "description": "Projects with title, year, category, image"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#FFFFFF",
          "group": "Colors"
        },
        "sectionTitleColor": {
          "dataType": "color",
          "displayName": "Section Title Color",
          "defaultValue": "#171717",
          "group": "Colors"
        },
        "projectTitleColor": {
          "dataType": "color",
          "displayName": "Project Title Color",
          "defaultValue": "#171717",
          "group": "Colors"
        },
        "metadataColor": {
          "dataType": "color",
          "displayName": "Metadata Color",
          "defaultValue": "#737373",
          "group": "Colors"
        },
        "dividerColor": {
          "dataType": "color",
          "displayName": "Divider Color",
          "defaultValue": "#E5E5E5",
          "group": "Colors"
        },
        "sectionTitleFontSize": {
          "dataType": "number",
          "displayName": "Section Title Font Size (px)",
          "defaultValue": 48,
          "group": "Typography"
        },
        "projectTitleFontSize": {
          "dataType": "number",
          "displayName": "Project Title Font Size (px)",
          "defaultValue": 64,
          "group": "Typography"
        },
        "projectTitleFontWeight": {
          "dataType": "select",
          "displayName": "Project Title Font Weight",
          "defaultValue": "600",
          "options": ["500", "600", "700"],
          "group": "Typography"
        },
        "showDividers": {
          "dataType": "booleanValue",
          "displayName": "Show Dividers",
          "defaultValue": true,
          "group": "Layout"
        },
        "projectGap": {
          "dataType": "number",
          "displayName": "Gap Between Projects (px)",
          "defaultValue": 100,
          "group": "Layout"
        },
        "animationDuration": {
          "dataType": "select",
          "displayName": "Animation Duration (ms)",
          "defaultValue": "500",
          "options": ["400", "500", "600", "800"],
          "group": "Animation"
        },
        "staggerDelay": {
          "dataType": "number",
          "displayName": "Stagger Delay (ms)",
          "defaultValue": 100,
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
    const sectionTitle = config?.sectionTitle || "Selected Work";
    const showSectionTitle = config?.showSectionTitle !== false;
    const backgroundColor = config?.backgroundColor || "#FFFFFF";
    const sectionTitleColor = config?.sectionTitleColor || "#171717";
    const projectTitleColor = config?.projectTitleColor || "#171717";
    const metadataColor = config?.metadataColor || "#737373";
    const dividerColor = config?.dividerColor || "#E5E5E5";
    const sectionTitleFontSize = parseInt(config?.sectionTitleFontSize || "48");
    const projectTitleFontSize = parseInt(config?.projectTitleFontSize || "64");
    const projectTitleFontWeight = config?.projectTitleFontWeight || "600";
    const showDividers = config?.showDividers !== false;
    const projectGap = parseInt(config?.projectGap || "100");
    const animationDuration = parseInt(config?.animationDuration || "500");
    const staggerDelay = parseInt(config?.staggerDelay || "100");
    const enableAnimation = config?.enableAnimation !== false;
    let projects = [];
    try {
      projects = JSON.parse(config?.projects || '[]');
      if (!Array.isArray(projects) || projects.length === 0) {
        projects = [{
          title: "Urban Retreat",
          year: "2024",
          category: "Architecture / Branding",
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
        }, {
          title: "Motion Studio",
          year: "2024",
          category: "Digital Experience",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80"
        }, {
          title: "Kinetic Type",
          year: "2023",
          category: "Art Direction / Code",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80"
        }];
      }
    } catch (e) {
      projects = [{
        title: "Urban Retreat",
        year: "2024",
        category: "Architecture / Branding",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
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
      className: "work-list-editorial",
      style: {
        backgroundColor: backgroundColor,
        padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        width: '100%'
      }
    }, showSectionTitle && /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: `clamp(${sectionTitleFontSize * 0.6}px, ${sectionTitleFontSize * 0.08}vw + ${sectionTitleFontSize * 0.4}px, ${sectionTitleFontSize}px)`,
        fontWeight: '600',
        color: sectionTitleColor,
        margin: '0 0 80px 0',
        lineHeight: '1.2',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, sectionTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1200px',
        margin: '0 auto'
      }
    }, projects.map((project, index) => {
      const isVisible = visibleItems.includes(index);
      const isEven = index % 2 === 0;
      return /*#__PURE__*/React.createElement("div", {
        key: index
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: window.innerWidth > 768 ? 'row' : 'column',
          gap: 'clamp(32px, 6vw, 80px)',
          alignItems: 'center',
          marginBottom: showDividers && index < projects.length - 1 ? `${projectGap}px` : '0',
          paddingBottom: showDividers && index < projects.length - 1 ? `${projectGap}px` : '0',
          borderBottom: showDividers && index < projects.length - 1 ? `1px solid ${dividerColor}` : 'none',
          opacity: shouldAnimate ? isVisible ? 1 : 0 : 1,
          transform: shouldAnimate ? isVisible ? 'translateY(0)' : 'translateY(40px)' : 'translateY(0)',
          transition: shouldAnimate ? `opacity ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out` : 'none'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: window.innerWidth > 768 ? '45%' : '100%',
          order: window.innerWidth > 768 ? isEven ? 1 : 2 : 1,
          overflow: 'hidden',
          cursor: 'pointer'
        },
        onMouseEnter: e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.05)';
        },
        onMouseLeave: e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          paddingBottom: '75%',
          position: 'relative',
          overflow: 'hidden'
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
          transition: 'transform 500ms ease-out'
        }
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          width: window.innerWidth > 768 ? '55%' : '100%',
          order: window.innerWidth > 768 ? isEven ? 2 : 1 : 2
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: '16px',
          fontSize: '13px',
          fontWeight: '500',
          color: metadataColor,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '16px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }
      }, /*#__PURE__*/React.createElement("span", null, project.year), /*#__PURE__*/React.createElement("span", null, "·"), /*#__PURE__*/React.createElement("span", null, project.category)), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: `clamp(${projectTitleFontSize * 0.5}px, ${projectTitleFontSize * 0.08}vw + ${projectTitleFontSize * 0.3}px, ${projectTitleFontSize}px)`,
          fontWeight: projectTitleFontWeight,
          color: projectTitleColor,
          margin: 0,
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          cursor: 'pointer',
          position: 'relative',
          display: 'inline-block',
          transition: 'opacity 300ms ease-out'
        },
        onMouseEnter: e => {
          e.currentTarget.style.opacity = '0.6';
        },
        onMouseLeave: e => {
          e.currentTarget.style.opacity = '1';
        }
      }, project.title))));
    })));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};