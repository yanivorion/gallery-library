window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-kineticsphere"] = function (React) {
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
   * Component Type: Gallery.KineticSphere
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.KineticSphere",
    "description": "Immersive 3D gallery with physics-based rotation and multiple geometric presets",
    "editorElement": {
      "selector": ".kinetic-scene",
      "displayName": "Kinetic 3D Gallery",
      "archetype": "container",
      "data": {
        "preset": {
          "dataType": "select",
          "displayName": "Geometry Layout",
          "defaultValue": "sphere",
          "options": ["sphere", "helix", "wall", "random"],
          "group": "Layout"
        },
        "radius": {
          "dataType": "number",
          "displayName": "World Radius (px)",
          "defaultValue": "800",
          "group": "Layout"
        },
        "itemSize": {
          "dataType": "number",
          "displayName": "Item Size (px)",
          "defaultValue": "200",
          "group": "Layout"
        },
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp,assets/03.webp,assets/04.webp,assets/05.webp,assets/06.webp,assets/07.webp",
          "group": "Content",
          "description": "Comma separated URLs"
        },
        "friction": {
          "dataType": "select",
          "displayName": "Inertia Friction",
          "defaultValue": "0.95",
          "options": ["0.90", "0.92", "0.95", "0.98"],
          "group": "Animation"
        },
        "autoRotateSpeed": {
          "dataType": "select",
          "displayName": "Auto Rotate Speed",
          "defaultValue": "0.05",
          "options": ["0", "0.02", "0.05", "0.1", "0.2"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "overlayColor": {
          "dataType": "color",
          "displayName": "Overlay Gradient",
          "defaultValue": "#000000",
          "group": "Colors"
        }
      },
      "layout": {
        "resizeDirection": "both",
        "contentResizeDirection": "both"
      }
    }
  };
  function Component({
    config = {}
  }) {
    // 1. Safe Config Parsing
    const radius = parseFloat(config?.radius || '800');
    const itemSize = parseFloat(config?.itemSize || '200');
    const friction = parseFloat(config?.friction || '0.95');
    const autoRotateSpeed = parseFloat(config?.autoRotateSpeed || '0.05');
    const preset = config?.preset || 'sphere';
    const bgColor = config?.backgroundColor || '#000000';
    const images = React.useMemo(() => {
      return (config?.images || '').split(',').map(url => url.trim()).filter(Boolean);
    }, [config?.images]);

    // Ensure enough duplicates for a full sphere if list is short
    const items = React.useMemo(() => {
      if (images.length === 0) return [];
      let list = [...images];
      // Duplicate list until we have at least 30 items for a good 3D effect
      while (list.length < 30) {
        list = [...list, ...images];
      }
      return list.slice(0, 100); // Cap at 100 for performance
    }, [images]);

    // 2. State Management
    const [rotation, setRotation] = React.useState({
      x: 0,
      y: 0
    });
    const [activeItem, setActiveItem] = React.useState(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [hasInteracted, setHasInteracted] = React.useState(false);

    // Refs for physics
    const velocity = React.useRef({
      x: 0,
      y: 0
    });
    const lastMouse = React.useRef({
      x: 0,
      y: 0
    });
    const rafId = React.useRef(null);
    const containerRef = React.useRef(null);

    // 3. Coordinate Systems (The Presets)
    const getItemTransform = (index, total) => {
      // Center logic
      const phi = Math.acos(-1 + 2 * index / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      switch (preset) {
        case 'helix':
          {
            const spacing = 18; // Degrees per step
            const verticalSpacing = itemSize * 0.8;
            const angle = index * spacing;
            const yPos = (index - total / 2) * verticalSpacing * 0.1;
            return `rotateY(${angle}deg) translateY(${yPos}px) translateZ(${radius}px)`;
          }
        case 'wall':
          {
            const rowLength = 6;
            const row = Math.floor(index / rowLength);
            const col = index % rowLength;
            const xAngle = (col - rowLength / 2) * 15;
            const yAngle = (row - total / rowLength / 2) * 12;
            // Curve the wall
            return `rotateY(${xAngle}deg) rotateX(${-yAngle}deg) translateZ(${radius * 1.5}px)`;
          }
        case 'random':
          {
            // Deterministic random based on index
            const r1 = Math.sin(index * 12.9898) * 43758.5453;
            const r2 = Math.cos(index * 78.233) * 43758.5453;
            const randX = (r1 - Math.floor(r1)) * 360;
            const randY = (r2 - Math.floor(r2)) * 360;
            return `rotateY(${randX}deg) rotateX(${randY}deg) translateZ(${radius}px)`;
          }
        case 'sphere':
        default:
          {
            // Fibonacci Sphere distribution
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            // LookAt center logic (simplified via rotation)
            const rotY = theta * 180 / Math.PI;
            const rotX = phi * 180 / Math.PI - 90;
            return `rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(${radius}px)`;
          }
      }
    };

    // 4. Physics Loop
    React.useEffect(() => {
      const loop = () => {
        // Auto rotation if not interacted/dragging
        if (!isDragging && activeItem === null) {
          if (!hasInteracted && autoRotateSpeed > 0) {
            velocity.current.x = autoRotateSpeed;
            velocity.current.y = autoRotateSpeed * 0.5;
          }

          // Apply velocity
          setRotation(prev => ({
            x: prev.x + velocity.current.y,
            y: prev.y + velocity.current.x
          }));

          // Friction (Decay)
          velocity.current.x *= friction;
          velocity.current.y *= friction;

          // Stop tiny movements
          if (Math.abs(velocity.current.x) < 0.001) velocity.current.x = 0;
          if (Math.abs(velocity.current.y) < 0.001) velocity.current.y = 0;
        }
        rafId.current = requestAnimationFrame(loop);
      };
      loop();
      return () => cancelAnimationFrame(rafId.current);
    }, [isDragging, activeItem, friction, autoRotateSpeed, hasInteracted]);

    // 5. Gesture Handlers
    const handlePointerDown = e => {
      if (activeItem !== null) return;
      setIsDragging(true);
      setHasInteracted(true);
      lastMouse.current = {
        x: e.clientX,
        y: e.clientY
      };
      velocity.current = {
        x: 0,
        y: 0
      };
      if (containerRef.current) containerRef.current.setPointerCapture(e.pointerId);
    };
    const handlePointerMove = e => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMouse.current.x;
      const deltaY = e.clientY - lastMouse.current.y;
      lastMouse.current = {
        x: e.clientX,
        y: e.clientY
      };

      // Update velocity based on move
      velocity.current = {
        x: deltaX * 0.15,
        // Sensitivity
        y: -deltaY * 0.15
      };
      setRotation(prev => ({
        x: prev.x - deltaY * 0.15,
        y: prev.y + deltaX * 0.15
      }));
    };
    const handlePointerUp = () => {
      setIsDragging(false);
    };

    // 6. Item Interaction
    const handleItemClick = index => {
      if (Math.abs(velocity.current.x) > 0.5 || Math.abs(velocity.current.y) > 0.5) return; // Ignore click if flinging
      setActiveItem(index);
    };
    const closeActive = e => {
      e.stopPropagation();
      setActiveItem(null);
    };

    // 7. Styles
    const uniqueId = React.useMemo(() => 'scene-' + Math.random().toString(36).substr(2, 9), []);
    if (items.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bgColor,
          color: '#666666',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, "Add images to see the 3D gallery");
    }
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "kinetic-scene",
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
      style: {
        width: '100%',
        height: '100%',
        minHeight: '600px',
        backgroundColor: bgColor,
        overflow: 'hidden',
        position: 'relative',
        touchAction: 'none',
        userSelect: 'none',
        perspective: '1200px',
        cursor: isDragging ? 'grabbing' : 'grab'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '0',
        height: '0',
        transformStyle: 'preserve-3d',
        transform: `translateZ(-${radius}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isDragging ? 'none' : 'transform 0.1s linear' // Smooth out micro-jitters
      }
    }, items.map((src, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => handleItemClick(i),
      style: {
        position: 'absolute',
        width: `${itemSize}px`,
        height: `${itemSize}px`,
        left: `-${itemSize / 2}px`,
        top: `-${itemSize / 2}px`,
        transform: getItemTransform(i, items.length),
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        // Performance
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        backgroundColor: '#111111',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        border: '1px solid #333333',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease, border-color 0.3s ease'
      },
      onMouseEnter: e => {
        if (!activeItem) {
          e.currentTarget.style.borderColor = '#ffffff';
          e.currentTarget.style.transform = 'scale(1.05)';
        }
      },
      onMouseLeave: e => {
        if (!activeItem) {
          e.currentTarget.style.borderColor = '#333333';
          e.currentTarget.style.transform = 'scale(1)';
        }
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        pointerEvents: 'none',
        opacity: 0.9
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `radial-gradient(circle at center, transparent 30%, ${config?.overlayColor || bgColor} 100%)`,
        zIndex: 10
      }
    }), /*#__PURE__*/React.createElement("div", {
      onClick: closeActive,
      style: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: activeItem !== null ? 1 : 0,
        pointerEvents: activeItem !== null ? 'auto' : 'none',
        transition: 'opacity 0.4s ease',
        zIndex: 100,
        cursor: 'zoom-out'
      }
    }, activeItem !== null && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: '90%',
        maxHeight: '90%',
        transform: activeItem !== null ? 'scale(1)' : 'scale(0.8)',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: items[activeItem],
      alt: "",
      style: {
        maxWidth: '100%',
        maxHeight: '80vh',
        borderRadius: '4px',
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '16px',
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 300,
        fontSize: '14px',
        letterSpacing: '0.05em',
        opacity: 0.8
      }
    }, "ITEM ", activeItem + 1, " / ", items.length))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255, 255, 255, 0.4)',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '12px',
        letterSpacing: '0.1em',
        pointerEvents: 'none',
        textTransform: 'uppercase',
        opacity: activeItem !== null ? 0 : 1,
        transition: 'opacity 0.3s'
      }
    }, "Drag to Explore • Click to Expand"));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};