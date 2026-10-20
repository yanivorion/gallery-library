window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-parallaxscrollgallery"] = function (React) {
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
   * Component Type: Gallery.ParallaxScrollGallery
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.ParallaxScrollGallery",
    "description": "Immersive parallax scrolling photo gallery with multi-speed depth layers, creating cinematic storytelling through scroll-driven motion and sophisticated spatial composition",
    "editorElement": {
      "selector": ".parallax-scroll-gallery",
      "displayName": "Parallax Scroll Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Images (JSON Array)",
          "defaultValue": JSON.stringify([{
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
            caption: "Mountain Vista",
            speed: 0.5,
            align: "left"
          }, {
            url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
            caption: "Forest Path",
            speed: 0.8,
            align: "right"
          }, {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
            caption: "Desert Sunset",
            speed: 0.3,
            align: "center"
          }, {
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200",
            caption: "Misty Valley",
            speed: 0.7,
            align: "left"
          }, {
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
            caption: "Wild Trail",
            speed: 0.4,
            align: "right"
          }, {
            url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200",
            caption: "Alpine Lake",
            speed: 0.6,
            align: "center"
          }]),
          "group": "Content",
          "description": "Array of image objects with url, caption, speed (0.1-1.0), and align (left/center/right)"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#FAFBFC",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#1F2937",
          "group": "Colors"
        },
        "overlayColor": {
          "dataType": "color",
          "displayName": "Caption Overlay Color",
          "defaultValue": "#F3F4F6",
          "group": "Colors"
        },
        "showCaptions": {
          "dataType": "booleanValue",
          "displayName": "Show Captions",
          "defaultValue": true,
          "group": "Content"
        },
        "imageMaxWidth": {
          "dataType": "number",
          "displayName": "Image Max Width (px)",
          "defaultValue": 800,
          "group": "Layout"
        },
        "sectionHeight": {
          "dataType": "select",
          "displayName": "Section Height",
          "defaultValue": "100vh",
          "options": ["80vh", "100vh", "120vh"],
          "group": "Layout",
          "description": "Height of each image section"
        },
        "imageScale": {
          "dataType": "select",
          "displayName": "Image Scale",
          "defaultValue": "1",
          "options": ["0.8", "0.9", "1", "1.1"],
          "group": "Layout"
        },
        "borderRadius": {
          "dataType": "number",
          "displayName": "Border Radius (px)",
          "defaultValue": 8,
          "group": "Layout"
        },
        "parallaxIntensity": {
          "dataType": "select",
          "displayName": "Parallax Intensity",
          "defaultValue": "1",
          "options": ["0.5", "0.75", "1", "1.5"],
          "group": "Animation",
          "description": "Multiplier for parallax speed (1 = normal)"
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
    const imagesData = config?.images || JSON.stringify([{
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
      caption: "Mountain Vista",
      speed: 0.5,
      align: "left"
    }, {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
      caption: "Forest Path",
      speed: 0.8,
      align: "right"
    }, {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
      caption: "Desert Sunset",
      speed: 0.3,
      align: "center"
    }, {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200",
      caption: "Misty Valley",
      speed: 0.7,
      align: "left"
    }, {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
      caption: "Wild Trail",
      speed: 0.4,
      align: "right"
    }, {
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200",
      caption: "Alpine Lake",
      speed: 0.6,
      align: "center"
    }]);
    const images = typeof imagesData === 'string' ? JSON.parse(imagesData) : imagesData;
    const backgroundColor = config?.backgroundColor || "#FAFBFC";
    const textColor = config?.textColor || "#1F2937";
    const overlayColor = config?.overlayColor || "#F3F4F6";
    const showCaptions = config?.showCaptions !== false;
    const imageMaxWidth = parseInt(config?.imageMaxWidth || "800");
    const sectionHeight = config?.sectionHeight || "100vh";
    const imageScale = parseFloat(config?.imageScale || "1");
    const borderRadius = parseInt(config?.borderRadius || "8");
    const parallaxIntensity = parseFloat(config?.parallaxIntensity || "1");
    const [scrollY, setScrollY] = React.useState(0);
    const [visibleItems, setVisibleItems] = React.useState({});
    const itemRefs = React.useRef([]);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    // Track scroll position
    React.useEffect(() => {
      if (prefersReducedMotion) return;
      let rafId;
      const handleScroll = () => {
        rafId = requestAnimationFrame(() => {
          setScrollY(window.scrollY);
        });
      };
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll, {
          passive: true
        });
        handleScroll(); // Initial call

        return () => {
          window.removeEventListener('scroll', handleScroll);
          if (rafId) cancelAnimationFrame(rafId);
        };
      }
    }, [prefersReducedMotion]);

    // Intersection Observer for fade-in
    React.useEffect(() => {
      const observers = itemRefs.current.map((ref, index) => {
        if (!ref) return null;
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            setVisibleItems(prev => ({
              ...prev,
              [index]: entry.isIntersecting
            }));
          });
        }, {
          threshold: 0.2
        });
        observer.observe(ref);
        return observer;
      });
      return () => {
        observers.forEach(observer => observer?.disconnect());
      };
    }, [images.length]);

    // Calculate parallax offset
    const getParallaxOffset = (index, speed) => {
      if (prefersReducedMotion) return 0;
      const element = itemRefs.current[index];
      if (!element) return 0;
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = elementCenter - viewportCenter;

      // Apply speed multiplier and intensity
      return distance * (1 - speed) * parallaxIntensity * -0.3;
    };

    // Get alignment styles
    const getAlignmentStyles = align => {
      switch (align) {
        case 'left':
          return {
            justifyContent: 'flex-start',
            paddingLeft: '10%'
          };
        case 'right':
          return {
            justifyContent: 'flex-end',
            paddingRight: '10%'
          };
        case 'center':
        default:
          return {
            justifyContent: 'center'
          };
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "parallax-scroll-gallery",
      style: {
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    }, images.map((image, index) => {
      const parallaxOffset = getParallaxOffset(index, image.speed || 0.5);
      const isVisible = visibleItems[index];
      const alignmentStyles = getAlignmentStyles(image.align || 'center');
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        ref: el => itemRefs.current[index] = el,
        style: {
          minHeight: sectionHeight,
          display: 'flex',
          alignItems: 'center',
          ...alignmentStyles,
          padding: '40px 20px',
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: `${imageMaxWidth}px`,
          width: '100%',
          transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset}px) scale(${imageScale})`,
          opacity: isVisible ? 1 : 0,
          transition: prefersReducedMotion ? 'none' : 'opacity 600ms ease-out',
          willChange: prefersReducedMotion ? 'auto' : 'transform',
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: image.url,
        alt: image.caption || '',
        style: {
          width: '100%',
          height: 'auto',
          display: 'block'
        }
      }), showCaptions && image.caption && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: overlayColor,
          padding: '20px',
          transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset * 0.3}px)`,
          willChange: prefersReducedMotion ? 'auto' : 'transform'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          color: textColor,
          fontSize: '18px',
          fontWeight: '400',
          letterSpacing: '0.01em'
        }
      }, image.caption)))));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '50vh'
      }
    }));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};