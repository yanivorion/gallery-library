window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["cards-horizontalscrollcarousel"] = function (React) {
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
   * Component Type: Cards.HorizontalScrollCarousel
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Cards.HorizontalScrollCarousel",
    "description": "Horizontal scrolling service cards carousel with overflow and drag support",
    "editorElement": {
      "selector": ".horizontal-scroll-carousel",
      "displayName": "Horizontal Scroll Carousel",
      "archetype": "container",
      "data": {
        "sectionLabel": {
          "dataType": "text",
          "displayName": "Section Label",
          "defaultValue": "SERVICES",
          "group": "Content"
        },
        "sectionCounter": {
          "dataType": "text",
          "displayName": "Section Counter",
          "defaultValue": "08",
          "group": "Content"
        },
        "service1Title": {
          "dataType": "text",
          "displayName": "Service 1 Title",
          "defaultValue": "Research",
          "group": "Services"
        },
        "service1Icon": {
          "dataType": "text",
          "displayName": "Service 1 Icon",
          "defaultValue": "◎",
          "group": "Services"
        },
        "service2Title": {
          "dataType": "text",
          "displayName": "Service 2 Title",
          "defaultValue": "Strategy",
          "group": "Services"
        },
        "service2Icon": {
          "dataType": "text",
          "displayName": "Service 2 Icon",
          "defaultValue": "⊕",
          "group": "Services"
        },
        "service3Title": {
          "dataType": "text",
          "displayName": "Service 3 Title",
          "defaultValue": "3D / Motion",
          "group": "Services"
        },
        "service3Icon": {
          "dataType": "text",
          "displayName": "Service 3 Icon",
          "defaultValue": "✳",
          "group": "Services"
        },
        "service4Title": {
          "dataType": "text",
          "displayName": "Service 4 Title",
          "defaultValue": "Graphic Design",
          "group": "Services"
        },
        "service4Icon": {
          "dataType": "text",
          "displayName": "Service 4 Icon",
          "defaultValue": "◈",
          "group": "Services"
        },
        "service5Title": {
          "dataType": "text",
          "displayName": "Service 5 Title",
          "defaultValue": "Illustration",
          "group": "Services"
        },
        "service5Icon": {
          "dataType": "text",
          "displayName": "Service 5 Icon",
          "defaultValue": "✎",
          "group": "Services"
        },
        "service6Title": {
          "dataType": "text",
          "displayName": "Service 6 Title",
          "defaultValue": "Development",
          "group": "Services"
        },
        "service6Icon": {
          "dataType": "text",
          "displayName": "Service 6 Icon",
          "defaultValue": "⬡",
          "group": "Services"
        },
        "service7Title": {
          "dataType": "text",
          "displayName": "Service 7 Title",
          "defaultValue": "Branding",
          "group": "Services"
        },
        "service7Icon": {
          "dataType": "text",
          "displayName": "Service 7 Icon",
          "defaultValue": "◇",
          "group": "Services"
        },
        "service8Title": {
          "dataType": "text",
          "displayName": "Service 8 Title",
          "defaultValue": "Consulting",
          "group": "Services"
        },
        "service8Icon": {
          "dataType": "text",
          "displayName": "Service 8 Icon",
          "defaultValue": "△",
          "group": "Services"
        },
        "cardWidth": {
          "dataType": "select",
          "displayName": "Card Width (px)",
          "defaultValue": "280",
          "options": ["240", "260", "280", "300", "320"],
          "group": "Layout"
        },
        "cardHeight": {
          "dataType": "select",
          "displayName": "Card Height (px)",
          "defaultValue": "360",
          "options": ["300", "320", "340", "360", "400"],
          "group": "Layout"
        },
        "cardGap": {
          "dataType": "select",
          "displayName": "Card Gap (px)",
          "defaultValue": "16",
          "options": ["12", "16", "20", "24"],
          "group": "Layout"
        },
        "showNavArrows": {
          "dataType": "booleanValue",
          "displayName": "Show Navigation Arrows",
          "defaultValue": true,
          "group": "Content"
        },
        "enableDrag": {
          "dataType": "booleanValue",
          "displayName": "Enable Drag Scroll",
          "defaultValue": true,
          "group": "Animation"
        },
        "activeCardIndex": {
          "dataType": "select",
          "displayName": "Active Card (highlighted)",
          "defaultValue": "3",
          "options": ["0", "1", "2", "3", "4", "5", "6", "7"],
          "group": "Content"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#FFFFFF",
          "group": "Colors"
        },
        "cardBackgroundColor": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#F4F4F5",
          "group": "Colors"
        },
        "activeCardBg": {
          "dataType": "color",
          "displayName": "Active Card Background",
          "defaultValue": "#E0E7FF",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title Color",
          "defaultValue": "#18181B",
          "group": "Colors"
        },
        "numberColor": {
          "dataType": "color",
          "displayName": "Number Color",
          "defaultValue": "#A1A1AA",
          "group": "Colors"
        },
        "iconColor": {
          "dataType": "color",
          "displayName": "Icon Color",
          "defaultValue": "#3F3F46",
          "group": "Colors"
        },
        "arrowColor": {
          "dataType": "color",
          "displayName": "Arrow Color",
          "defaultValue": "#71717A",
          "group": "Colors"
        },
        "labelColor": {
          "dataType": "color",
          "displayName": "Section Label Color",
          "defaultValue": "#71717A",
          "group": "Colors"
        },
        "dividerColor": {
          "dataType": "color",
          "displayName": "Divider Color",
          "defaultValue": "#E4E4E7",
          "group": "Colors"
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
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    const [hoveredCard, setHoveredCard] = React.useState(null);
    const scrollContainerRef = React.useRef(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const sectionLabel = config?.sectionLabel || 'SERVICES';
    const sectionCounter = config?.sectionCounter || '08';
    const services = [{
      title: config?.service1Title || 'Research',
      icon: config?.service1Icon || '◎'
    }, {
      title: config?.service2Title || 'Strategy',
      icon: config?.service2Icon || '⊕'
    }, {
      title: config?.service3Title || '3D / Motion',
      icon: config?.service3Icon || '✳'
    }, {
      title: config?.service4Title || 'Graphic Design',
      icon: config?.service4Icon || '◈'
    }, {
      title: config?.service5Title || 'Illustration',
      icon: config?.service5Icon || '✎'
    }, {
      title: config?.service6Title || 'Development',
      icon: config?.service6Icon || '⬡'
    }, {
      title: config?.service7Title || 'Branding',
      icon: config?.service7Icon || '◇'
    }, {
      title: config?.service8Title || 'Consulting',
      icon: config?.service8Icon || '△'
    }];
    const cardWidth = parseInt(config?.cardWidth || '280');
    const cardHeight = parseInt(config?.cardHeight || '360');
    const cardGap = parseInt(config?.cardGap || '16');
    const showNavArrows = config?.showNavArrows !== false;
    const enableDrag = config?.enableDrag !== false;
    const activeCardIndex = parseInt(config?.activeCardIndex || '3');
    const backgroundColor = config?.backgroundColor || '#FFFFFF';
    const cardBackgroundColor = config?.cardBackgroundColor || '#F4F4F5';
    const activeCardBg = config?.activeCardBg || '#E0E7FF';
    const titleColor = config?.titleColor || '#18181B';
    const numberColor = config?.numberColor || '#A1A1AA';
    const iconColor = config?.iconColor || '#3F3F46';
    const arrowColor = config?.arrowColor || '#71717A';
    const labelColor = config?.labelColor || '#71717A';
    const dividerColor = config?.dividerColor || '#E4E4E7';

    // useId must be called at the top level, never inside a useMemo callback
    const reactId = React.useId();
    const uniqueId = React.useMemo(() => reactId.replace(/:/g, ''), [reactId]);

    // Drag handlers
    const handleMouseDown = e => {
      if (!enableDrag) return;
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
    const handleMouseMove = e => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    // Touch handlers
    const handleTouchStart = e => {
      if (!enableDrag) return;
      setIsDragging(true);
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
    const handleTouchMove = e => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    // Navigation
    const scrollByAmount = direction => {
      if (!scrollContainerRef.current) return;
      const scrollAmount = (cardWidth + cardGap) * 2;
      scrollContainerRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    };
    const getCardStyle = index => {
      const isActive = index === activeCardIndex;
      const isHovered = hoveredCard === index;
      return {
        flexShrink: 0,
        width: cardWidth + 'px',
        height: cardHeight + 'px',
        backgroundColor: isActive ? activeCardBg : cardBackgroundColor,
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        cursor: enableDrag ? isDragging ? 'grabbing' : 'grab' : 'pointer',
        transform: isHovered && !isDragging ? 'translateY(-4px)' : 'translateY(0)',
        transition: prefersReducedMotion ? 'none' : 'transform 300ms ease-out, background-color 300ms ease-out',
        position: 'relative',
        userSelect: 'none'
      };
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "horizontal-scroll-carousel",
      style: {
        backgroundColor,
        padding: '60px 0',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        marginBottom: '32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        fontWeight: '500',
        color: labelColor,
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }
    }, sectionLabel), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '200px',
        height: '1px',
        backgroundColor: dividerColor
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        fontWeight: '500',
        color: labelColor,
        letterSpacing: '0.05em'
      }
    }, sectionCounter)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: scrollContainerRef,
      style: {
        display: 'flex',
        gap: cardGap + 'px',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '8px',
        paddingBottom: '8px',
        cursor: enableDrag ? isDragging ? 'grabbing' : 'grab' : 'default'
      },
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `
            .horizontal-scroll-carousel div::-webkit-scrollbar {
              display: none;
            }
          `
      }
    }), services.map((service, index) => /*#__PURE__*/React.createElement("div", {
      key: `${uniqueId}-card-${index}`,
      style: getCardStyle(index),
      onMouseEnter: () => !isDragging && setHoveredCard(index),
      onMouseLeave: () => setHoveredCard(null),
      role: "article",
      tabIndex: 0
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        fontWeight: '500',
        color: numberColor,
        letterSpacing: '0.05em'
      }
    }, String(index + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '64px',
        color: iconColor,
        lineHeight: 1,
        opacity: hoveredCard === index ? 1 : 0.8,
        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
        transition: prefersReducedMotion ? 'none' : 'all 300ms ease-out'
      }
    }, service.icon)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '18px',
        fontWeight: '500',
        color: titleColor,
        margin: '0 0 16px 0',
        letterSpacing: '-0.01em',
        textAlign: 'center'
      }
    }, service.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: arrowColor,
        fontSize: '18px',
        transition: prefersReducedMotion ? 'none' : 'all 200ms ease-out'
      },
      onMouseEnter: e => {
        e.target.style.backgroundColor = `${titleColor}10`;
        e.target.style.color = titleColor;
      },
      onMouseLeave: e => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = arrowColor;
      },
      onClick: e => e.stopPropagation(),
      "aria-label": `Learn more about ${service.title}`
    }, "↗")))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        width: '24px'
      }
    })), showNavArrows && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: () => scrollByAmount(-1),
      style: {
        position: 'absolute',
        left: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        border: `1px solid ${dividerColor}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: titleColor,
        fontSize: '18px',
        transition: prefersReducedMotion ? 'none' : 'all 200ms ease-out',
        zIndex: 10
      },
      onMouseEnter: e => {
        e.target.style.backgroundColor = cardBackgroundColor;
        e.target.style.transform = 'translateY(-50%) scale(1.05)';
      },
      onMouseLeave: e => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.transform = 'translateY(-50%) scale(1)';
      },
      "aria-label": "Scroll left"
    }, "←"), /*#__PURE__*/React.createElement("button", {
      onClick: () => scrollByAmount(1),
      style: {
        position: 'absolute',
        right: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        border: `1px solid ${dividerColor}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: titleColor,
        fontSize: '18px',
        transition: prefersReducedMotion ? 'none' : 'all 200ms ease-out',
        zIndex: 10
      },
      onMouseEnter: e => {
        e.target.style.backgroundColor = cardBackgroundColor;
        e.target.style.transform = 'translateY(-50%) scale(1.05)';
      },
      onMouseLeave: e => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.transform = 'translateY(-50%) scale(1)';
      },
      "aria-label": "Scroll right"
    }, "→")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '60px',
        background: `linear-gradient(90deg, ${backgroundColor} 0%, transparent 100%)`,
        pointerEvents: 'none',
        zIndex: 5
      },
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '60px',
        background: `linear-gradient(-90deg, ${backgroundColor} 0%, transparent 100%)`,
        pointerEvents: 'none',
        zIndex: 5
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '32px',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: labelColor,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, "←"), "Drag to explore", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, "→"))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};