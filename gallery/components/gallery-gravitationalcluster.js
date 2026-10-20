window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-gravitationalcluster"] = function (React) {
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
   * Component Type: Gallery.GravitationalCluster
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.GravitationalCluster",
    "description": "A gallery where images cluster around a central gravitational point with physics-based interactions",
    "editorElement": {
      "selector": ".gravitational-cluster-gallery",
      "displayName": "Gravitational Cluster Gallery",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Image URLs",
          "defaultValue": "assets/05.webp,assets/06.webp,assets/07.webp,assets/08.webp,assets/01.webp,assets/02.webp,assets/03.webp,assets/04.webp",
          "group": "Content",
          "description": "Comma-separated image URLs (6-9 recommended)"
        },
        "containerHeight": {
          "dataType": "select",
          "displayName": "Container Height",
          "defaultValue": "600",
          "options": ["500", "550", "600", "700", "800"],
          "group": "Layout"
        },
        "centerSize": {
          "dataType": "select",
          "displayName": "Center Image Size",
          "defaultValue": "160",
          "options": ["120", "140", "160", "180", "200"],
          "group": "Layout"
        },
        "orbitRadius": {
          "dataType": "select",
          "displayName": "Orbit Radius",
          "defaultValue": "180",
          "options": ["140", "160", "180", "200", "240"],
          "group": "Layout"
        },
        "gravityStrength": {
          "dataType": "select",
          "displayName": "Gravity Strength",
          "defaultValue": "0.8",
          "options": ["0.5", "0.6", "0.8", "1.0", "1.2"],
          "group": "Animation"
        },
        "elasticity": {
          "dataType": "select",
          "displayName": "Elasticity",
          "defaultValue": "0.15",
          "options": ["0.05", "0.1", "0.15", "0.2", "0.25"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "glowColor": {
          "dataType": "color",
          "displayName": "Center Glow Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "cardBorderColor": {
          "dataType": "color",
          "displayName": "Card Border Color",
          "defaultValue": "#444444",
          "group": "Colors"
        },
        "borderRadius": {
          "dataType": "select",
          "displayName": "Border Radius",
          "defaultValue": "50",
          "options": ["8", "16", "24", "50"],
          "group": "Layout"
        },
        "enableDrag": {
          "dataType": "booleanValue",
          "displayName": "Drag to Move Center",
          "defaultValue": true,
          "group": "Animation"
        },
        "repulsionOnHover": {
          "dataType": "booleanValue",
          "displayName": "Repulsion on Hover",
          "defaultValue": true,
          "group": "Animation"
        },
        "showOrbitalPaths": {
          "dataType": "booleanValue",
          "displayName": "Show Orbital Paths",
          "defaultValue": false,
          "group": "Colors"
        },
        "cosmicBackground": {
          "dataType": "booleanValue",
          "displayName": "Cosmic Background",
          "defaultValue": true,
          "group": "Colors"
        }
      },
      "layout": {
        "resizeDirection": "horizontalAndVertical",
        "contentResizeDirection": "horizontal"
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [gravityCenter, setGravityCenter] = React.useState({
      x: 0.5,
      y: 0.5
    });
    const [positions, setPositions] = React.useState([]);
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [isInView, setIsInView] = React.useState(false);
    const containerRef = React.useRef(null);
    const animationRef = React.useRef(null);
    const images = React.useMemo(() => {
      return (config?.images || MANIFEST.editorElement.data.images.defaultValue).split(',').map(url => url.trim()).filter(Boolean);
    }, [config?.images]);
    const containerHeight = parseInt(config?.containerHeight || '600');
    const centerSize = parseInt(config?.centerSize || '160');
    const orbitRadius = parseInt(config?.orbitRadius || '180');
    const gravityStrength = parseFloat(config?.gravityStrength || '0.8');
    const elasticity = parseFloat(config?.elasticity || '0.15');
    const backgroundColor = config?.backgroundColor || '#000000';
    const glowColor = config?.glowColor || '#777777';
    const cardBorderColor = config?.cardBorderColor || '#444444';
    const borderRadius = config?.borderRadius || '50';
    const enableDrag = config?.enableDrag !== false;
    const repulsionOnHover = config?.repulsionOnHover !== false;
    const showOrbitalPaths = config?.showOrbitalPaths === true;
    const cosmicBackground = config?.cosmicBackground !== false;
    const prefersReducedMotion = React.useMemo(() => {
      return typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    }, []);

    // Initialize positions
    React.useEffect(() => {
      const seededRandom = seed => {
        const x = Math.sin(seed * 9999) * 10000;
        return x - Math.floor(x);
      };
      const initialPositions = images.slice(1).map((_, index) => {
        const angle = index / (images.length - 1) * Math.PI * 2;
        const distance = orbitRadius + seededRandom(index * 1.5) * 60;
        return {
          x: 0.5 + Math.cos(angle) * (distance / 500),
          y: 0.5 + Math.sin(angle) * (distance / 500),
          vx: 0,
          vy: 0,
          size: centerSize * (0.5 + seededRandom(index * 1.2) * 0.3),
          baseAngle: angle
        };
      });
      setPositions(initialPositions);
    }, [images.length, orbitRadius, centerSize]);

    // Intersection observer
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsInView(true);
        });
      }, {
        threshold: 0.3
      });
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);

    // Physics animation
    React.useEffect(() => {
      if (prefersReducedMotion || positions.length === 0) return;
      const animate = () => {
        setPositions(prev => prev.map((pos, index) => {
          // Calculate distance to gravity center
          const dx = gravityCenter.x - pos.x;
          const dy = gravityCenter.y - pos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Ideal distance (orbital radius)
          const idealDistance = (orbitRadius + index * 20) / 500;

          // Gravity force (pull toward ideal distance)
          const forceMagnitude = (distance - idealDistance) * gravityStrength * 0.01;
          const forceX = distance > 0 ? dx / distance * forceMagnitude : 0;
          const forceY = distance > 0 ? dy / distance * forceMagnitude : 0;

          // Repulsion from hovered item
          let repulsionX = 0;
          let repulsionY = 0;
          if (repulsionOnHover && hoveredIndex !== null && hoveredIndex !== index) {
            const hoveredPos = prev[hoveredIndex];
            if (hoveredPos) {
              const rdx = pos.x - hoveredPos.x;
              const rdy = pos.y - hoveredPos.y;
              const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
              if (rdist < 0.15 && rdist > 0) {
                const repulsion = (0.15 - rdist) * 0.005;
                repulsionX = rdx / rdist * repulsion;
                repulsionY = rdy / rdist * repulsion;
              }
            }
          }

          // Apply forces with damping
          let newVx = (pos.vx + forceX + repulsionX) * (1 - elasticity);
          let newVy = (pos.vy + forceY + repulsionY) * (1 - elasticity);

          // Clamp velocity
          const maxVel = 0.02;
          const vel = Math.sqrt(newVx * newVx + newVy * newVy);
          if (vel > maxVel) {
            newVx = newVx / vel * maxVel;
            newVy = newVy / vel * maxVel;
          }

          // Update position
          let newX = pos.x + newVx;
          let newY = pos.y + newVy;

          // Boundary constraints
          newX = Math.max(0.1, Math.min(0.9, newX));
          newY = Math.max(0.1, Math.min(0.9, newY));
          return {
            ...pos,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        }));
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }, [gravityCenter, hoveredIndex, gravityStrength, elasticity, orbitRadius, repulsionOnHover, prefersReducedMotion, positions.length]);

    // Drag handlers
    const handleMouseMove = e => {
      if (!isDragging || !enableDrag) return;
      const rect = containerRef.current.getBoundingClientRect();
      setGravityCenter({
        x: Math.max(0.2, Math.min(0.8, (e.clientX - rect.left) / rect.width)),
        y: Math.max(0.2, Math.min(0.8, (e.clientY - rect.top) / rect.height))
      });
    };
    const handleMouseUp = () => setIsDragging(false);
    React.useEffect(() => {
      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging]);
    if (images.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          color: '#777777'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '18px'
        }
      }, "No images provided")));
    }
    const borderRadiusValue = borderRadius === '50' ? '50%' : `${borderRadius}px`;
    return /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "gravitational-cluster-gallery",
      onMouseMove: handleMouseMove,
      style: {
        backgroundColor,
        height: `${containerHeight}px`,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
    }, cosmicBackground && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(ellipse at ${gravityCenter.x * 100}% ${gravityCenter.y * 100}%, ${glowColor}15 0%, transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 300ms ease-out'
      }
    }), Array.from({
      length: 50
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: `star-${i}`,
      style: {
        position: 'absolute',
        left: `${(Math.sin(i * 7.3) * 0.5 + 0.5) * 100}%`,
        top: `${(Math.cos(i * 4.7) * 0.5 + 0.5) * 100}%`,
        width: `${1 + i % 3}px`,
        height: `${1 + i % 3}px`,
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        opacity: 0.2 + i % 5 * 0.1,
        pointerEvents: 'none'
      }
    }))), showOrbitalPaths && positions.map((_, index) => /*#__PURE__*/React.createElement("div", {
      key: `orbit-${index}`,
      style: {
        position: 'absolute',
        left: `${gravityCenter.x * 100}%`,
        top: `${gravityCenter.y * 100}%`,
        width: `${(orbitRadius + index * 20) * 2}px`,
        height: `${(orbitRadius + index * 20) * 2}px`,
        marginLeft: `-${orbitRadius + index * 20}px`,
        marginTop: `-${orbitRadius + index * 20}px`,
        border: `1px solid ${cardBorderColor}40`,
        borderRadius: '50%',
        pointerEvents: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      onMouseDown: () => enableDrag && setIsDragging(true),
      style: {
        position: 'absolute',
        left: `${gravityCenter.x * 100}%`,
        top: `${gravityCenter.y * 100}%`,
        width: `${centerSize}px`,
        height: `${centerSize}px`,
        marginLeft: `-${centerSize / 2}px`,
        marginTop: `-${centerSize / 2}px`,
        borderRadius: borderRadiusValue,
        overflow: 'hidden',
        border: `2px solid ${glowColor}60`,
        cursor: enableDrag ? 'grab' : 'default',
        zIndex: 50,
        boxShadow: `0 0 40px ${glowColor}50, 0 0 80px ${glowColor}30`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'scale(1)' : 'scale(0.5)',
        transition: prefersReducedMotion ? 'none' : 'left 100ms ease-out, top 100ms ease-out, opacity 500ms ease-out, transform 500ms ease-out'
      }
    }, images[0] && /*#__PURE__*/React.createElement("img", {
      src: images[0],
      alt: "Center mass",
      draggable: false,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle, transparent 50%, ${glowColor}20 100%)`,
        pointerEvents: 'none'
      }
    })), positions.map((pos, index) => {
      const image = images[index + 1];
      if (!image) return null;
      const isHovered = hoveredIndex === index;
      const distanceToCenter = Math.sqrt(Math.pow(pos.x - gravityCenter.x, 2) + Math.pow(pos.y - gravityCenter.y, 2));
      const scale = isHovered ? 1.2 : 0.8 + (1 - distanceToCenter) * 0.4;
      const blur = distanceToCenter > 0.25 ? (distanceToCenter - 0.25) * 8 : 0;
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        style: {
          position: 'absolute',
          left: `${pos.x * 100}%`,
          top: `${pos.y * 100}%`,
          width: `${pos.size}px`,
          height: `${pos.size}px`,
          marginLeft: `-${pos.size / 2}px`,
          marginTop: `-${pos.size / 2}px`,
          borderRadius: borderRadiusValue,
          overflow: 'hidden',
          border: `1px solid ${isHovered ? glowColor : cardBorderColor}`,
          cursor: 'pointer',
          zIndex: isHovered ? 40 : Math.round((1 - distanceToCenter) * 30),
          opacity: isInView ? 0.6 + (1 - distanceToCenter) * 0.4 : 0,
          transform: `scale(${scale})`,
          filter: `blur(${blur}px)`,
          boxShadow: isHovered ? `0 0 30px ${glowColor}50, 0 8px 30px rgba(0, 0, 0, 0.4)` : `0 4px 20px rgba(0,0,0,${0.3 + distanceToCenter * 0.2})`,
          transition: prefersReducedMotion ? 'none' : `transform 200ms ease-out, 
                   filter 200ms ease-out, 
                   box-shadow 200ms ease-out, 
                   border-color 200ms ease-out,
                   opacity 500ms ease-out ${index * 50}ms`
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: image,
        alt: `Orbiting image ${index + 1}`,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }
      }));
    }));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};