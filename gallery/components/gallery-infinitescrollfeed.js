window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-infinitescrollfeed"] = function (React) {
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
   * Component Type: Gallery.InfiniteScrollFeed
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.InfiniteScrollFeed",
    "description": "Social media-style infinite scroll image feed with automatic content loading, skeleton placeholders, and smooth entry animations for endless browsing experience",
    "editorElement": {
      "selector": ".infinite-scroll-feed",
      "displayName": "Infinite Scroll Feed",
      "archetype": "container",
      "data": {
        "images": {
          "dataType": "text",
          "displayName": "Images (JSON Array)",
          "defaultValue": JSON.stringify([{
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            caption: "Mountain Vista",
            author: "Alex Chen",
            date: "2 hours ago"
          }, {
            url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
            caption: "Forest Path",
            author: "Maria Garcia",
            date: "4 hours ago"
          }, {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
            caption: "Desert Sunset",
            author: "James Wilson",
            date: "6 hours ago"
          }, {
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
            caption: "Misty Valley",
            author: "Sarah Kim",
            date: "8 hours ago"
          }, {
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
            caption: "Wild Trail",
            author: "David Brown",
            date: "10 hours ago"
          }, {
            url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
            caption: "Alpine Lake",
            author: "Emma Davis",
            date: "12 hours ago"
          }, {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            caption: "Ocean Waves",
            author: "Michael Lee",
            date: "14 hours ago"
          }, {
            url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
            caption: "Starry Night",
            author: "Lisa Wang",
            date: "16 hours ago"
          }]),
          "group": "Content",
          "description": "Array of image objects with url, caption, author, and date"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#FAFBFC",
          "group": "Colors"
        },
        "cardBackground": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#FFFFFF",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#1F2937",
          "group": "Colors"
        },
        "metaTextColor": {
          "dataType": "color",
          "displayName": "Meta Text Color",
          "defaultValue": "#6B7280",
          "group": "Colors"
        },
        "skeletonColor": {
          "dataType": "color",
          "displayName": "Skeleton Color",
          "defaultValue": "#E5E7EB",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#3B82F6",
          "group": "Colors"
        },
        "maxWidth": {
          "dataType": "number",
          "displayName": "Feed Max Width (px)",
          "defaultValue": 700,
          "group": "Layout"
        },
        "itemGap": {
          "dataType": "number",
          "displayName": "Item Gap (px)",
          "defaultValue": 32,
          "group": "Layout"
        },
        "borderRadius": {
          "dataType": "number",
          "displayName": "Border Radius (px)",
          "defaultValue": 8,
          "group": "Layout"
        },
        "itemsPerLoad": {
          "dataType": "number",
          "displayName": "Items Per Load",
          "defaultValue": 3,
          "group": "Content",
          "description": "Number of items to load each time"
        },
        "loadThreshold": {
          "dataType": "number",
          "displayName": "Load Threshold (px)",
          "defaultValue": 400,
          "group": "Animation",
          "description": "Distance from bottom to trigger loading"
        },
        "showMetadata": {
          "dataType": "booleanValue",
          "displayName": "Show Author/Date",
          "defaultValue": true,
          "group": "Content"
        },
        "entryAnimationDuration": {
          "dataType": "select",
          "displayName": "Entry Animation Duration (ms)",
          "defaultValue": "400",
          "options": ["300", "400", "500", "600"],
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
      caption: "Mountain Vista",
      author: "Alex Chen",
      date: "2 hours ago"
    }, {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      caption: "Forest Path",
      author: "Maria Garcia",
      date: "4 hours ago"
    }, {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      caption: "Desert Sunset",
      author: "James Wilson",
      date: "6 hours ago"
    }, {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      caption: "Misty Valley",
      author: "Sarah Kim",
      date: "8 hours ago"
    }, {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      caption: "Wild Trail",
      author: "David Brown",
      date: "10 hours ago"
    }, {
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
      caption: "Alpine Lake",
      author: "Emma Davis",
      date: "12 hours ago"
    }, {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      caption: "Ocean Waves",
      author: "Michael Lee",
      date: "14 hours ago"
    }, {
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
      caption: "Starry Night",
      author: "Lisa Wang",
      date: "16 hours ago"
    }]);
    const allImages = typeof imagesData === 'string' ? JSON.parse(imagesData) : imagesData;
    const backgroundColor = config?.backgroundColor || "#FAFBFC";
    const cardBackground = config?.cardBackground || "#FFFFFF";
    const textColor = config?.textColor || "#1F2937";
    const metaTextColor = config?.metaTextColor || "#6B7280";
    const skeletonColor = config?.skeletonColor || "#E5E7EB";
    const accentColor = config?.accentColor || "#3B82F6";
    const maxWidth = parseInt(config?.maxWidth || "700");
    const itemGap = parseInt(config?.itemGap || "32");
    const borderRadius = parseInt(config?.borderRadius || "8");
    const itemsPerLoad = parseInt(config?.itemsPerLoad || "3");
    const loadThreshold = parseInt(config?.loadThreshold || "400");
    const showMetadata = config?.showMetadata !== false;
    const entryAnimationDuration = parseInt(config?.entryAnimationDuration || "400");
    const [displayedItems, setDisplayedItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);
    const [visibleItems, setVisibleItems] = React.useState({});
    const loaderRef = React.useRef(null);
    const itemRefs = React.useRef([]);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    // Load initial items
    React.useEffect(() => {
      loadMoreItems();
    }, []);

    // Load more items function
    const loadMoreItems = () => {
      if (isLoading || !hasMore) return;
      setIsLoading(true);

      // Simulate network delay
      setTimeout(() => {
        const currentLength = displayedItems.length;
        const nextItems = allImages.slice(currentLength, currentLength + itemsPerLoad);
        if (nextItems.length === 0) {
          setHasMore(false);
          setIsLoading(false);
          return;
        }
        setDisplayedItems(prev => [...prev, ...nextItems]);
        setIsLoading(false);

        // Check if we've loaded all items
        if (currentLength + nextItems.length >= allImages.length) {
          setHasMore(false);
        }
      }, 800); // Simulate loading delay
    };

    // Intersection Observer for infinite scroll
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !isLoading) {
          loadMoreItems();
        }
      }, {
        threshold: 0.1,
        rootMargin: `${loadThreshold}px`
      });
      if (loaderRef.current) {
        observer.observe(loaderRef.current);
      }
      return () => observer.disconnect();
    }, [hasMore, isLoading, displayedItems.length]);

    // Intersection Observer for fade-in animations
    React.useEffect(() => {
      const observers = itemRefs.current.map((ref, index) => {
        if (!ref) return null;
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => ({
                ...prev,
                [index]: true
              }));
            }
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
    }, [displayedItems.length]);

    // Skeleton loader component
    const SkeletonLoader = () => /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: cardBackground,
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.03)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        aspectRatio: '4/3',
        backgroundColor: skeletonColor,
        animation: prefersReducedMotion ? 'none' : 'pulse 1500ms ease-in-out infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '70%',
        height: '20px',
        backgroundColor: skeletonColor,
        borderRadius: '4px',
        marginBottom: '12px',
        animation: prefersReducedMotion ? 'none' : 'pulse 1500ms ease-in-out infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '40%',
        height: '14px',
        backgroundColor: skeletonColor,
        borderRadius: '4px',
        animation: prefersReducedMotion ? 'none' : 'pulse 1500ms ease-in-out infinite'
      }
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "infinite-scroll-feed",
      style: {
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        padding: '48px 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: `${maxWidth}px`,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: `${itemGap}px`
      }
    }, displayedItems.map((item, index) => {
      const isVisible = visibleItems[index];
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        ref: el => itemRefs.current[index] = el,
        style: {
          backgroundColor: cardBackground,
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.03)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible && !prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
          transition: prefersReducedMotion ? 'none' : `opacity ${entryAnimationDuration}ms ease-out, transform ${entryAnimationDuration}ms ease-out`
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: item.url,
        alt: item.caption || '',
        loading: "lazy",
        style: {
          width: '100%',
          aspectRatio: '4/3',
          objectFit: 'cover',
          display: 'block'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '20px'
        }
      }, showMetadata && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '12px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: accentColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: '500'
        }
      }, item.author?.charAt(0) || 'U'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '14px',
          fontWeight: '500',
          color: textColor,
          marginBottom: '2px'
        }
      }, item.author || 'Unknown'), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '12px',
          color: metaTextColor
        }
      }, item.date || 'Just now'))), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: '16px',
          fontWeight: '400',
          color: textColor,
          lineHeight: 1.5
        }
      }, item.caption)));
    }), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, Array.from({
      length: itemsPerLoad
    }).map((_, index) => /*#__PURE__*/React.createElement(SkeletonLoader, {
      key: `skeleton-${index}`
    }))), /*#__PURE__*/React.createElement("div", {
      ref: loaderRef,
      style: {
        height: '20px'
      }
    }), !hasMore && displayedItems.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '40px 20px',
        color: metaTextColor,
        fontSize: '14px',
        fontWeight: '400'
      }
    }, "You've reached the end of the feed")));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};