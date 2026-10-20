window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-cubegallery3d"] = function (React) {
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
   * Component Type: Gallery.CubeGallery3D
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.CubeGallery3D",
    "description": "Interactive 3D rotating cube gallery with six image faces, smooth rotation controls, and immersive spatial viewing experience using CSS 3D transforms",
    "editorElement": {
      "selector": ".cube-gallery-3d",
      "displayName": "3D Cube Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Images (JSON Array - 6 images)",
          "defaultValue": JSON.stringify([{
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            label: "Front"
          }, {
            url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
            label: "Back"
          }, {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
            label: "Right"
          }, {
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
            label: "Left"
          }, {
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
            label: "Top"
          }, {
            url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
            label: "Bottom"
          }]),
          "group": "Content",
          "description": "Array of 6 image objects for cube faces (front, back, right, left, top, bottom)"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#0F0F0F",
          "group": "Colors"
        },
        "controlsColor": {
          "dataType": "color",
          "displayName": "Controls Color",
          "defaultValue": "#FAFAFA",
          "group": "Colors"
        },
        "controlsBackground": {
          "dataType": "color",
          "displayName": "Controls Background",
          "defaultValue": "#1F1F1F",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#3B82F6",
          "group": "Colors"
        },
        "cubeSize": {
          "dataType": "number",
          "displayName": "Cube Size (px)",
          "defaultValue": 400,
          "group": "Layout"
        },
        "perspective": {
          "dataType": "number",
          "displayName": "Perspective Distance (px)",
          "defaultValue": 1000,
          "group": "Layout",
          "description": "Higher values = less dramatic 3D effect"
        },
        "showLabels": {
          "dataType": "booleanValue",
          "displayName": "Show Face Labels",
          "defaultValue": true,
          "group": "Content"
        },
        "enableAutoRotate": {
          "dataType": "booleanValue",
          "displayName": "Enable Auto Rotate",
          "defaultValue": false,
          "group": "Animation"
        },
        "autoRotateSpeed": {
          "dataType": "select",
          "displayName": "Auto Rotate Speed",
          "defaultValue": "3000",
          "options": ["2000", "3000", "4000", "5000"],
          "group": "Animation",
          "description": "Milliseconds per rotation"
        },
        "rotationDuration": {
          "dataType": "select",
          "displayName": "Rotation Duration (ms)",
          "defaultValue": "600",
          "options": ["400", "500", "600", "800"],
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
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      label: "Front"
    }, {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      label: "Back"
    }, {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      label: "Right"
    }, {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      label: "Left"
    }, {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      label: "Top"
    }, {
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
      label: "Bottom"
    }]);
    const images = typeof imagesData === 'string' ? JSON.parse(imagesData) : imagesData;
    const backgroundColor = config?.backgroundColor || "#0F0F0F";
    const controlsColor = config?.controlsColor || "#FAFAFA";
    const controlsBackground = config?.controlsBackground || "#1F1F1F";
    const accentColor = config?.accentColor || "#3B82F6";
    const cubeSize = parseInt(config?.cubeSize || "400");
    const perspective = parseInt(config?.perspective || "1000");
    const showLabels = config?.showLabels !== false;
    const enableAutoRotate = config?.enableAutoRotate === true;
    const autoRotateSpeed = parseInt(config?.autoRotateSpeed || "3000");
    const rotationDuration = parseInt(config?.rotationDuration || "600");
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);
    const [currentFace, setCurrentFace] = React.useState(0);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const duration = prefersReducedMotion ? 0 : rotationDuration;

    // Face rotation configurations
    const faceRotations = [{
      x: 0,
      y: 0,
      name: 'Front'
    },
    // Front
    {
      x: 0,
      y: 180,
      name: 'Back'
    },
    // Back
    {
      x: 0,
      y: -90,
      name: 'Right'
    },
    // Right
    {
      x: 0,
      y: 90,
      name: 'Left'
    },
    // Left
    {
      x: -90,
      y: 0,
      name: 'Top'
    },
    // Top
    {
      x: 90,
      y: 0,
      name: 'Bottom'
    } // Bottom
    ];

    // Navigate to specific face
    const goToFace = index => {
      setCurrentFace(index);
      setRotateX(faceRotations[index].x);
      setRotateY(faceRotations[index].y);
    };

    // Rotate controls
    const rotateLeft = () => {
      setRotateY(prev => prev + 90);
    };
    const rotateRight = () => {
      setRotateY(prev => prev - 90);
    };
    const rotateUp = () => {
      setRotateX(prev => prev + 90);
    };
    const rotateDown = () => {
      setRotateX(prev => prev - 90);
    };

    // Auto rotate
    React.useEffect(() => {
      if (!enableAutoRotate) return;
      const interval = setInterval(() => {
        setCurrentFace(prev => (prev + 1) % 6);
        const nextFace = (currentFace + 1) % 6;
        setRotateX(faceRotations[nextFace].x);
        setRotateY(faceRotations[nextFace].y);
      }, autoRotateSpeed);
      return () => clearInterval(interval);
    }, [enableAutoRotate, autoRotateSpeed, currentFace, faceRotations]);

    // Keyboard controls
    React.useEffect(() => {
      const handleKeyDown = e => {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            rotateLeft();
            break;
          case 'ArrowRight':
            e.preventDefault();
            rotateRight();
            break;
          case 'ArrowUp':
            e.preventDefault();
            rotateUp();
            break;
          case 'ArrowDown':
            e.preventDefault();
            rotateDown();
            break;
        }
      };
      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: "cube-gallery-3d",
      style: {
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        perspective: `${perspective}px`,
        marginBottom: '48px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${cubeSize}px`,
        height: `${cubeSize}px`,
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: prefersReducedMotion ? 'none' : `transform ${duration}ms ease-out`,
        willChange: 'transform'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: `${cubeSize}px`,
        height: `${cubeSize}px`,
        transform: `translateZ(${cubeSize / 2}px)`,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: images[0]?.url,
      alt: images[0]?.label || 'Front',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), showLabels && images[0]?.label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: controlsColor,
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '500'
      }
    }, images[0].label)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: `${cubeSize}px`,
        height: `${cubeSize}px`,
        transform: `translateZ(${-cubeSize / 2}px) rotateY(180deg)`,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: images[1]?.url,
      alt: images[1]?.label || 'Back',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), showLabels && images[1]?.label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: controlsColor,
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '500'
      }
    }, images[1].label)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: `${cubeSize}px`,
        height: `${cubeSize}px`,
        transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)`,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: images[2]?.url,
      alt: images[2]?.label || 'Right',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), showLabels && images[2]?.label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: controlsColor,
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '500'
      }
    }, images[2].label)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: `${cubeSize}px`,
        height: `${cubeSize}px`,
        transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)`,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: images[3]?.url,
      alt: images[3]?.label || 'Left',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), showLabels && images[3]?.label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: controlsColor,
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '500'
      }
    }, images[3].label)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: `${cubeSize}px`,
        height: `${cubeSize}px`,
        transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)`,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: images[4]?.url,
      alt: images[4]?.label || 'Top',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), showLabels && images[4]?.label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: controlsColor,
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '500'
      }
    }, images[4].label)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: `${cubeSize}px`,
        height: `${cubeSize}px`,
        transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)`,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: images[5]?.url,
      alt: images[5]?.label || 'Bottom',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), showLabels && images[5]?.label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: controlsColor,
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '500'
      }
    }, images[5].label)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: rotateUp,
      "aria-label": "Rotate up",
      style: {
        backgroundColor: controlsBackground,
        color: controlsColor,
        border: 'none',
        borderRadius: '6px',
        width: '48px',
        height: '48px',
        fontSize: '20px',
        cursor: 'pointer',
        transition: prefersReducedMotion ? 'none' : 'transform 200ms ease-out, box-shadow 200ms ease-out',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        outline: 'none'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "↑"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: rotateLeft,
      "aria-label": "Rotate left",
      style: {
        backgroundColor: controlsBackground,
        color: controlsColor,
        border: 'none',
        borderRadius: '6px',
        width: '48px',
        height: '48px',
        fontSize: '20px',
        cursor: 'pointer',
        transition: prefersReducedMotion ? 'none' : 'transform 200ms ease-out, box-shadow 200ms ease-out',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        outline: 'none'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "←"), /*#__PURE__*/React.createElement("button", {
      onClick: rotateRight,
      "aria-label": "Rotate right",
      style: {
        backgroundColor: controlsBackground,
        color: controlsColor,
        border: 'none',
        borderRadius: '6px',
        width: '48px',
        height: '48px',
        fontSize: '20px',
        cursor: 'pointer',
        transition: prefersReducedMotion ? 'none' : 'transform 200ms ease-out, box-shadow 200ms ease-out',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        outline: 'none'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "→")), /*#__PURE__*/React.createElement("button", {
      onClick: rotateDown,
      "aria-label": "Rotate down",
      style: {
        backgroundColor: controlsBackground,
        color: controlsColor,
        border: 'none',
        borderRadius: '6px',
        width: '48px',
        height: '48px',
        fontSize: '20px',
        cursor: 'pointer',
        transition: prefersReducedMotion ? 'none' : 'transform 200ms ease-out, box-shadow 200ms ease-out',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        outline: 'none'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, "↓")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, faceRotations.map((face, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => goToFace(index),
      "aria-label": `Go to ${face.name} face`,
      style: {
        backgroundColor: currentFace === index ? accentColor : controlsBackground,
        color: controlsColor,
        border: 'none',
        borderRadius: '6px',
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: prefersReducedMotion ? 'none' : 'all 200ms ease-out',
        boxShadow: currentFace === index ? '0 4px 12px rgba(59, 130, 246, 0.4)' : '0 2px 8px rgba(0,0,0,0.2)',
        outline: 'none'
      },
      onMouseEnter: e => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translateY(0)';
      },
      onFocus: e => {
        e.currentTarget.style.outline = `2px solid ${accentColor}`;
        e.currentTarget.style.outlineOffset = '2px';
      },
      onBlur: e => {
        e.currentTarget.style.outline = 'none';
      }
    }, face.name)))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};