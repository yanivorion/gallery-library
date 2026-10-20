window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-lightboxzoom"] = function (React) {
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
   * Component Type: Gallery.LightboxZoom
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.LightboxZoom",
    "description": "Sophisticated lightbox gallery with thumbnail grid, fullscreen image viewing, multi-level zoom capability, pan controls, and smooth navigation transitions",
    "editorElement": {
      "selector": ".lightbox-zoom-gallery",
      "displayName": "Lightbox Gallery with Zoom",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Images (JSON Array)",
          "defaultValue": JSON.stringify([{
            url: "assets/07.webp",
            thumb: "assets/08.webp",
            caption: "Mountain Vista"
          }, {
            url: "assets/01.webp",
            thumb: "assets/02.webp",
            caption: "Forest Path"
          }, {
            url: "assets/03.webp",
            thumb: "assets/04.webp",
            caption: "Desert Sunset"
          }, {
            url: "assets/05.webp",
            thumb: "assets/06.webp",
            caption: "Misty Valley"
          }, {
            url: "assets/07.webp",
            thumb: "assets/08.webp",
            caption: "Wild Trail"
          }, {
            url: "assets/01.webp",
            thumb: "assets/02.webp",
            caption: "Alpine Lake"
          }, {
            url: "assets/03.webp",
            thumb: "assets/04.webp",
            caption: "Ocean Waves"
          }, {
            url: "assets/05.webp",
            thumb: "assets/06.webp",
            caption: "Starry Night"
          }]),
          "group": "Content",
          "description": "Array of image objects with url (full-res), thumb (thumbnail), and caption"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "lightboxBackdrop": {
          "dataType": "color",
          "displayName": "Lightbox Backdrop",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "controlsColor": {
          "dataType": "color",
          "displayName": "Controls Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "thumbnailBorder": {
          "dataType": "color",
          "displayName": "Thumbnail Border",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "gridGap": {
          "dataType": "number",
          "displayName": "Grid Gap (px)",
          "defaultValue": 16,
          "group": "Layout"
        },
        "thumbnailMinWidth": {
          "dataType": "number",
          "displayName": "Thumbnail Min Width (px)",
          "defaultValue": 250,
          "group": "Layout"
        },
        "borderRadius": {
          "dataType": "number",
          "displayName": "Border Radius (px)",
          "defaultValue": 8,
          "group": "Layout"
        },
        "showCaptions": {
          "dataType": "booleanValue",
          "displayName": "Show Captions",
          "defaultValue": true,
          "group": "Content"
        },
        "showCounter": {
          "dataType": "booleanValue",
          "displayName": "Show Counter",
          "defaultValue": true,
          "group": "Content"
        },
        "maxZoomLevel": {
          "dataType": "select",
          "displayName": "Max Zoom Level",
          "defaultValue": "3",
          "options": ["2", "3", "4"],
          "group": "Animation"
        },
        "zoomDuration": {
          "dataType": "select",
          "displayName": "Zoom Duration (ms)",
          "defaultValue": "300",
          "options": ["200", "300", "400"],
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
    const imagesData = config?.images || JSON.stringify([{
      url: "assets/07.webp",
      thumb: "assets/08.webp",
      caption: "Mountain Vista"
    }, {
      url: "assets/01.webp",
      thumb: "assets/02.webp",
      caption: "Forest Path"
    }, {
      url: "assets/03.webp",
      thumb: "assets/04.webp",
      caption: "Desert Sunset"
    }, {
      url: "assets/05.webp",
      thumb: "assets/06.webp",
      caption: "Misty Valley"
    }, {
      url: "assets/07.webp",
      thumb: "assets/08.webp",
      caption: "Wild Trail"
    }, {
      url: "assets/01.webp",
      thumb: "assets/02.webp",
      caption: "Alpine Lake"
    }, {
      url: "assets/03.webp",
      thumb: "assets/04.webp",
      caption: "Ocean Waves"
    }, {
      url: "assets/05.webp",
      thumb: "assets/06.webp",
      caption: "Starry Night"
    }]);
    const images = typeof imagesData === 'string' ? JSON.parse(imagesData) : imagesData;
    const backgroundColor = config?.backgroundColor || "#ffffff";
    const lightboxBackdrop = config?.lightboxBackdrop || "#000000";
    const controlsColor = config?.controlsColor || "#ffffff";
    const accentColor = config?.accentColor || "#777777";
    const thumbnailBorder = config?.thumbnailBorder || "#eeeeee";
    const gridGap = parseInt(config?.gridGap || "16");
    const thumbnailMinWidth = parseInt(config?.thumbnailMinWidth || "250");
    const borderRadius = parseInt(config?.borderRadius || "8");
    const showCaptions = config?.showCaptions !== false;
    const showCounter = config?.showCounter !== false;
    const maxZoomLevel = parseInt(config?.maxZoomLevel || "3");
    const zoomDuration = parseInt(config?.zoomDuration || "300");
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [zoomLevel, setZoomLevel] = React.useState(1);
    const [panPosition, setPanPosition] = React.useState({
      x: 0,
      y: 0
    });
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragStart, setDragStart] = React.useState({
      x: 0,
      y: 0
    });
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const duration = prefersReducedMotion ? 0 : zoomDuration;

    // Open lightbox
    const openLightbox = index => {
      setCurrentIndex(index);
      setLightboxOpen(true);
      setZoomLevel(1);
      setPanPosition({
        x: 0,
        y: 0
      });

      // Prevent body scroll
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    };

    // Close lightbox
    const closeLightbox = () => {
      setLightboxOpen(false);
      setZoomLevel(1);
      setPanPosition({
        x: 0,
        y: 0
      });

      // Restore body scroll
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };

    // Navigation
    const goToNext = () => {
      setCurrentIndex(prev => (prev + 1) % images.length);
      setZoomLevel(1);
      setPanPosition({
        x: 0,
        y: 0
      });
    };
    const goToPrevious = () => {
      setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
      setZoomLevel(1);
      setPanPosition({
        x: 0,
        y: 0
      });
    };

    // Zoom controls
    const zoomIn = () => {
      setZoomLevel(prev => Math.min(prev + 1, maxZoomLevel));
    };
    const zoomOut = () => {
      if (zoomLevel > 1) {
        setZoomLevel(prev => prev - 1);
        if (zoomLevel === 2) {
          setPanPosition({
            x: 0,
            y: 0
          });
        }
      }
    };
    const resetZoom = () => {
      setZoomLevel(1);
      setPanPosition({
        x: 0,
        y: 0
      });
    };

    // Pan handlers
    const handleMouseDown = e => {
      if (zoomLevel > 1) {
        setIsDragging(true);
        setDragStart({
          x: e.clientX - panPosition.x,
          y: e.clientY - panPosition.y
        });
      }
    };
    const handleMouseMove = e => {
      if (isDragging && zoomLevel > 1) {
        setPanPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = e => {
        if (!lightboxOpen) return;
        switch (e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            goToPrevious();
            break;
          case 'ArrowRight':
            e.preventDefault();
            goToNext();
            break;
          case '+':
          case '=':
            e.preventDefault();
            zoomIn();
            break;
          case '-':
            e.preventDefault();
            zoomOut();
            break;
        }
      };
      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }
    }, [lightboxOpen, currentIndex, zoomLevel]);
    const currentImage = images[currentIndex];
    return /*#__PURE__*/React.createElement("div", {
      className: "lightbox-zoom-gallery",
      style: {
        backgroundColor: backgroundColor,
        padding: '48px 24px',
        minHeight: '100vh',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${thumbnailMinWidth}px, 1fr))`,
        gap: `${gridGap}px`,
        maxWidth: '1400px',
        margin: '0 auto'
      }
    }, images.map((image, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => openLightbox(index),
      "aria-label": `Open ${image.caption || `image ${index + 1}`}`,
      style: {
        aspectRatio: '4 / 3',
        border: `1px solid ${thumbnailBorder}`,
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        cursor: 'pointer',
        padding: 0,
        backgroundColor: 'transparent',
        transition: prefersReducedMotion ? 'none' : 'transform 250ms ease-out, box-shadow 250ms ease-out',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)',
        outline: 'none'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1), 0 12px 24px rgba(0, 0, 0, 0.08)';
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)';
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image.thumb || image.url,
      alt: image.caption || '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })))), lightboxOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: `${lightboxBackdrop}`,
        opacity: 0.95,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        animation: prefersReducedMotion ? 'none' : 'fadeIn 300ms ease-out'
      },
      onClick: e => {
        if (e.target === e.currentTarget) closeLightbox();
      },
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp
    }, /*#__PURE__*/React.createElement("style", null, `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 0.95; }
            }
          `), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '90vw',
        maxHeight: '90vh',
        position: 'relative',
        cursor: zoomLevel > 1 ? 'grab' : 'default'
      },
      onMouseDown: handleMouseDown
    }, /*#__PURE__*/React.createElement("img", {
      src: currentImage.url,
      alt: currentImage.caption || '',
      style: {
        maxWidth: '100%',
        maxHeight: '90vh',
        objectFit: 'contain',
        display: 'block',
        transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
        transition: prefersReducedMotion ? 'none' : `transform ${duration}ms ease-out`,
        userSelect: 'none',
        pointerEvents: 'none'
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: closeLightbox,
      "aria-label": "Close lightbox",
      style: {
        position: 'absolute',
        top: '24px',
        right: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        color: controlsColor,
        fontSize: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        transition: prefersReducedMotion ? 'none' : 'transform 200ms ease-out'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) e.currentTarget.style.transform = 'scale(1.1)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1)';
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "×"), /*#__PURE__*/React.createElement("button", {
      onClick: goToPrevious,
      "aria-label": "Previous image",
      style: {
        position: 'absolute',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        color: controlsColor,
        fontSize: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none'
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "‹"), /*#__PURE__*/React.createElement("button", {
      onClick: goToNext,
      "aria-label": "Next image",
      style: {
        position: 'absolute',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        color: controlsColor,
        fontSize: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none'
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "›"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '12px 16px',
        borderRadius: '24px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: zoomOut,
      disabled: zoomLevel === 1,
      "aria-label": "Zoom out",
      style: {
        backgroundColor: 'transparent',
        border: 'none',
        color: controlsColor,
        fontSize: '20px',
        cursor: zoomLevel === 1 ? 'not-allowed' : 'pointer',
        opacity: zoomLevel === 1 ? 0.5 : 1,
        outline: 'none',
        padding: '4px 8px'
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "−"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: controlsColor,
        fontSize: '14px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center'
      }
    }, zoomLevel, "x"), /*#__PURE__*/React.createElement("button", {
      onClick: zoomIn,
      disabled: zoomLevel === maxZoomLevel,
      "aria-label": "Zoom in",
      style: {
        backgroundColor: 'transparent',
        border: 'none',
        color: controlsColor,
        fontSize: '20px',
        cursor: zoomLevel === maxZoomLevel ? 'not-allowed' : 'pointer',
        opacity: zoomLevel === maxZoomLevel ? 0.5 : 1,
        outline: 'none',
        padding: '4px 8px'
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "+"), zoomLevel > 1 && /*#__PURE__*/React.createElement("button", {
      onClick: resetZoom,
      "aria-label": "Reset zoom",
      style: {
        backgroundColor: 'transparent',
        border: `1px solid ${controlsColor}`,
        color: controlsColor,
        fontSize: '12px',
        fontWeight: '500',
        cursor: 'pointer',
        outline: 'none',
        padding: '4px 12px',
        borderRadius: '12px',
        marginLeft: '4px'
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "Reset")), showCounter && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: controlsColor,
        fontSize: '14px',
        fontWeight: '500',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '8px 16px',
        borderRadius: '20px'
      }
    }, currentIndex + 1, " / ", images.length), showCaptions && currentImage.caption && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '90px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: controlsColor,
        fontSize: '16px',
        fontWeight: '400',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '12px 24px',
        borderRadius: '8px',
        maxWidth: '80%',
        textAlign: 'center'
      }
    }, currentImage.caption)));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};