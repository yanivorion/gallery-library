window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["product-stackedgallery"] = function (React) {
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
   * Component Type: Product.StackedGallery
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Product.StackedGallery",
    "description": "Product page with large image, horizontal thumbnails, and countdown timer",
    "editorElement": {
      "selector": ".product-stacked-gallery",
      "displayName": "Product Page - Stacked Gallery",
      "archetype": "container",
      "data": {
        "productBrand": {
          "dataType": "text",
          "displayName": "Brand Name",
          "defaultValue": "Woodstock Watch Premium",
          "group": "Product Info"
        },
        "productTitle": {
          "dataType": "text",
          "displayName": "Product Title",
          "defaultValue": "Watch Generation BX",
          "group": "Product Info"
        },
        "productPrice": {
          "dataType": "text",
          "displayName": "Price",
          "defaultValue": "53,468.00 NIS",
          "group": "Product Info"
        },
        "productRating": {
          "dataType": "select",
          "displayName": "Rating",
          "defaultValue": "5.0",
          "options": ["3.0", "3.5", "4.0", "4.5", "5.0"],
          "group": "Product Info"
        },
        "reviewCount": {
          "dataType": "text",
          "displayName": "Review Count",
          "defaultValue": "1",
          "group": "Product Info"
        },
        "showCountdown": {
          "dataType": "booleanValue",
          "displayName": "Show Countdown Timer",
          "defaultValue": true,
          "group": "Sale"
        },
        "countdownHours": {
          "dataType": "text",
          "displayName": "Countdown Hours",
          "defaultValue": "11",
          "group": "Sale"
        },
        "countdownMinutes": {
          "dataType": "text",
          "displayName": "Countdown Minutes",
          "defaultValue": "13",
          "group": "Sale"
        },
        "countdownSeconds": {
          "dataType": "text",
          "displayName": "Countdown Seconds",
          "defaultValue": "32",
          "group": "Sale"
        },
        "showFreeShippingBar": {
          "dataType": "booleanValue",
          "displayName": "Show Free Shipping Progress",
          "defaultValue": true,
          "group": "Content"
        },
        "freeShippingThreshold": {
          "dataType": "text",
          "displayName": "Free Shipping Amount Remaining",
          "defaultValue": "3,230.68 NIS",
          "group": "Content"
        },
        "stockStatus": {
          "dataType": "select",
          "displayName": "Stock Status",
          "defaultValue": "inStock",
          "options": ["inStock", "lowStock", "outOfStock"],
          "group": "Product Info"
        },
        "stockCount": {
          "dataType": "text",
          "displayName": "Stock Count",
          "defaultValue": "100",
          "group": "Product Info"
        },
        "pickupLocation": {
          "dataType": "text",
          "displayName": "Pickup Location",
          "defaultValue": "Ottawa, Canada",
          "group": "Content"
        },
        "pickupTime": {
          "dataType": "text",
          "displayName": "Pickup Ready Time",
          "defaultValue": "Usually ready in 24 hours",
          "group": "Content"
        },
        "sku": {
          "dataType": "text",
          "displayName": "SKU",
          "defaultValue": "woodstock-watch-premium-deep-sea",
          "group": "Product Info"
        },
        "collections": {
          "dataType": "text",
          "displayName": "Collections (comma separated)",
          "defaultValue": "Budget-friendly, Mid-range, Stores, Watch Generation",
          "group": "Product Info"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#FFFFFF",
          "group": "Colors"
        },
        "cardBackground": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#F8FAFC",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title Color",
          "defaultValue": "#0F172A",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#64748B",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent/Button Color",
          "defaultValue": "#2563EB",
          "group": "Colors"
        },
        "borderColor": {
          "dataType": "color",
          "displayName": "Border Color",
          "defaultValue": "#E2E8F0",
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
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const productBrand = config?.productBrand || 'Woodstock Watch Premium';
    const productTitle = config?.productTitle || 'Watch Generation BX';
    const productPrice = config?.productPrice || '53,468.00 NIS';
    const productRating = parseFloat(config?.productRating || '5.0');
    const reviewCount = config?.reviewCount || '1';
    const showCountdown = config?.showCountdown !== false;
    const countdownHours = config?.countdownHours || '11';
    const countdownMinutes = config?.countdownMinutes || '13';
    const countdownSeconds = config?.countdownSeconds || '32';
    const showFreeShippingBar = config?.showFreeShippingBar !== false;
    const freeShippingThreshold = config?.freeShippingThreshold || '3,230.68 NIS';
    const stockStatus = config?.stockStatus || 'inStock';
    const stockCount = config?.stockCount || '100';
    const pickupLocation = config?.pickupLocation || 'Ottawa, Canada';
    const pickupTime = config?.pickupTime || 'Usually ready in 24 hours';
    const sku = config?.sku || 'woodstock-watch-premium-deep-sea';
    const collections = (config?.collections || 'Budget-friendly, Mid-range').split(',').map(c => c.trim());
    const backgroundColor = config?.backgroundColor || '#FFFFFF';
    const cardBackground = config?.cardBackground || '#F8FAFC';
    const titleColor = config?.titleColor || '#0F172A';
    const textColor = config?.textColor || '#64748B';
    const accentColor = config?.accentColor || '#2563EB';
    const borderColor = config?.borderColor || '#E2E8F0';
    const thumbnails = [0, 1];
    const renderStars = rating => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(/*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            color: i <= rating ? '#FBBF24' : '#E2E8F0',
            fontSize: '14px'
          }
        }, "★"));
      }
      return stars;
    };
    const getStockInfo = () => {
      switch (stockStatus) {
        case 'inStock':
          return {
            text: `${stockCount} in stock`,
            color: '#22C55E'
          };
        case 'lowStock':
          return {
            text: `Only ${stockCount} left`,
            color: '#F59E0B'
          };
        case 'outOfStock':
          return {
            text: 'Out of stock',
            color: '#EF4444'
          };
        default:
          return {
            text: 'In stock',
            color: '#22C55E'
          };
      }
    };
    const stockInfo = getStockInfo();
    return /*#__PURE__*/React.createElement("div", {
      className: "product-stacked-gallery",
      style: {
        backgroundColor,
        padding: '40px',
        minHeight: '900px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        fontSize: '13px',
        color: textColor
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      }
    }, "Home"), /*#__PURE__*/React.createElement("span", null, "›"), /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      }
    }, productBrand), /*#__PURE__*/React.createElement("span", null, "›"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: titleColor
      }
    }, productTitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        maxWidth: '1200px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        backgroundColor: cardBackground,
        borderRadius: '12px',
        aspectRatio: '1',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '80%',
        height: '80%',
        borderRadius: '50%',
        background: `linear-gradient(135deg, #374151 0%, #1F2937 50%, #111827 100%)`,
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '15%',
        left: '15%',
        right: '15%',
        bottom: '15%',
        borderRadius: '50%',
        background: 'linear-gradient(180deg, #1F2937 0%, #374151 100%)',
        border: '3px solid #6B7280'
      }
    })), /*#__PURE__*/React.createElement("button", {
      style: {
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        color: textColor
      }
    }, "⤢")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px'
      }
    }, thumbnails.map((_, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => setSelectedImage(index),
      style: {
        width: '80px',
        height: '80px',
        borderRadius: '8px',
        border: selectedImage === index ? `2px solid ${titleColor}` : `1px solid ${borderColor}`,
        backgroundColor: cardBackground,
        cursor: 'pointer',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: prefersReducedMotion ? 'none' : 'all 200ms ease-out'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        backgroundColor: '#374151',
        opacity: 0.5 + index * 0.2
      }
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '14px',
        color: textColor,
        margin: '0 0 8px 0'
      }
    }, "By ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: '500'
      }
    }, productBrand)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '32px',
        fontWeight: '600',
        color: titleColor,
        margin: 0,
        lineHeight: '1.2',
        flex: 1
      }
    }, productTitle), /*#__PURE__*/React.createElement("button", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: accentColor,
        border: 'none',
        cursor: 'pointer',
        color: '#FFFFFF',
        fontSize: '16px',
        flexShrink: 0,
        marginLeft: '16px'
      },
      "aria-label": "Share"
    }, "↗")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '2px'
      }
    }, renderStars(productRating)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        color: titleColor,
        fontWeight: '500'
      }
    }, productRating, "/5"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        color: textColor
      }
    }, "|"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        color: textColor
      }
    }, reviewCount, " review")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '28px',
        fontWeight: '600',
        color: titleColor
      }
    }, productPrice)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '13px',
        color: textColor,
        margin: '0 0 24px 0'
      }
    }, "Tax included."), showCountdown && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 20px',
        backgroundColor: cardBackground,
        borderRadius: '8px',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        fontWeight: '600',
        color: titleColor
      }
    }, "Sales end in:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '24px',
        fontWeight: '600',
        color: titleColor
      }
    }, countdownHours), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: textColor,
        textTransform: 'uppercase'
      }
    }, "Hours")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '20px',
        color: textColor
      }
    }, ":"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '24px',
        fontWeight: '600',
        color: titleColor
      }
    }, countdownMinutes), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: textColor,
        textTransform: 'uppercase'
      }
    }, "Minutes")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '20px',
        color: textColor
      }
    }, ":"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '24px',
        fontWeight: '600',
        color: titleColor
      }
    }, countdownSeconds), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: textColor,
        textTransform: 'uppercase'
      }
    }, "Seconds")))), showFreeShippingBar && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 20px',
        border: `1px solid ${borderColor}`,
        borderRadius: '8px',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        color: titleColor
      }
    }, "Spend ", /*#__PURE__*/React.createElement("strong", null, freeShippingThreshold), " more to reach ", /*#__PURE__*/React.createElement("strong", null, "Free Shipping"), "!"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: textColor
      }
    }, "0%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '4px',
        backgroundColor: borderColor,
        borderRadius: '2px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '0%',
        height: '100%',
        backgroundColor: '#22C55E'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: textColor,
        display: 'block',
        marginBottom: '8px'
      }
    }, "Quantity"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${borderColor}`,
        borderRadius: '8px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        color: titleColor,
        fontWeight: '500'
      }
    }, quantity), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        borderLeft: `1px solid ${borderColor}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setQuantity(quantity + 1),
      style: {
        width: '32px',
        height: '24px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '10px',
        color: textColor
      }
    }, "▲"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setQuantity(Math.max(1, quantity - 1)),
      style: {
        width: '32px',
        height: '24px',
        border: 'none',
        borderTop: `1px solid ${borderColor}`,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '10px',
        color: textColor
      }
    }, "▼"))), /*#__PURE__*/React.createElement("button", {
      style: {
        flex: 1,
        padding: '16px 24px',
        borderRadius: '8px',
        backgroundColor: accentColor,
        color: '#FFFFFF',
        border: 'none',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer'
      }
    }, "Add to cart"), /*#__PURE__*/React.createElement("button", {
      style: {
        flex: 1,
        padding: '16px 24px',
        borderRadius: '8px',
        backgroundColor: backgroundColor,
        color: titleColor,
        border: `1px solid ${borderColor}`,
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer'
      }
    }, "Buy it now"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: `1px solid ${borderColor}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#22C55E',
        fontSize: '16px'
      }
    }, "✓"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '14px',
        color: titleColor,
        margin: '0 0 4px 0',
        fontWeight: '500'
      }
    }, "Pickup available at ", pickupLocation), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '13px',
        color: textColor,
        margin: '0 0 4px 0'
      }
    }, pickupTime), /*#__PURE__*/React.createElement("button", {
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        fontSize: '13px',
        color: titleColor,
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    }, "View store information"))), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'none',
        border: 'none',
        padding: '12px 0',
        fontSize: '14px',
        color: textColor,
        cursor: 'pointer',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement("span", null, "⊞"), " Add to compare"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px',
        backgroundColor: cardBackground,
        borderRadius: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        marginBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '100px',
        fontSize: '13px',
        color: textColor
      }
    }, "Availability:"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: stockInfo.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: stockInfo.color
      }
    }, stockInfo.text))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        marginBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '100px',
        fontSize: '13px',
        color: textColor
      }
    }, "SKU:"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: titleColor
      }
    }, sku)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '100px',
        fontSize: '13px',
        color: textColor
      }
    }, "Collections:"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: titleColor,
        flex: 1
      }
    }, collections.join(', ')))))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};