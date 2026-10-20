window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["product-sliderhighlights"] = function (React) {
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
   * Component Type: Product.SliderHighlights
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Product.SliderHighlights",
    "description": "Product page with slider navigation, scrollable thumbnails, and feature highlights",
    "editorElement": {
      "selector": ".product-slider-highlights",
      "displayName": "Product Page - Slider Highlights",
      "archetype": "container",
      "data": {
        "productBrand": {
          "dataType": "text",
          "displayName": "Brand Name",
          "defaultValue": "Meridian",
          "group": "Product Info"
        },
        "productTitle": {
          "dataType": "text",
          "displayName": "Product Title",
          "defaultValue": "Special Edition DSP5200 Digital Active Loudspeaker.",
          "group": "Product Info"
        },
        "productPrice": {
          "dataType": "text",
          "displayName": "Price",
          "defaultValue": "13,731.00 NIS",
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
        "productDescription": {
          "dataType": "text",
          "displayName": "Description",
          "defaultValue": "The additional DSP device used by the Special Edition loudspeakers doubles the available processing power allowing all audio, including MQA Core streams, to be rendered at 176.4/192kHz regardless of the incoming sampling rate.",
          "group": "Product Info"
        },
        "shortDescription": {
          "dataType": "text",
          "displayName": "Short Description",
          "defaultValue": "The Special Edition DSP5200 delivers ultimate high-resolution performance from a compact loudspeaker.",
          "group": "Product Info"
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
          "defaultValue": "96",
          "group": "Product Info"
        },
        "highlight1Value": {
          "dataType": "text",
          "displayName": "Highlight 1 Value",
          "defaultValue": "3 years",
          "group": "Highlights"
        },
        "highlight1Label": {
          "dataType": "text",
          "displayName": "Highlight 1 Label",
          "defaultValue": "Free manufacturers warranty available",
          "group": "Highlights"
        },
        "highlight2Value": {
          "dataType": "text",
          "displayName": "Highlight 2 Value",
          "defaultValue": "1-5 days",
          "group": "Highlights"
        },
        "highlight2Label": {
          "dataType": "text",
          "displayName": "Highlight 2 Label",
          "defaultValue": "Delivery time, subject to availability",
          "group": "Highlights"
        },
        "relatedProductTitle": {
          "dataType": "text",
          "displayName": "Related Product Title",
          "defaultValue": "Meridian DSW.2 Digital Active Subwoofer",
          "group": "Related Products"
        },
        "relatedProductPrice": {
          "dataType": "text",
          "displayName": "Related Product Price",
          "defaultValue": "12,116.00 NIS",
          "group": "Related Products"
        },
        "accordion1Title": {
          "dataType": "text",
          "displayName": "Accordion 1 Title",
          "defaultValue": "Flexible credit available",
          "group": "Accordions"
        },
        "accordion2Title": {
          "dataType": "text",
          "displayName": "Accordion 2 Title",
          "defaultValue": "Insure your product",
          "group": "Accordions"
        },
        "accordion3Title": {
          "dataType": "text",
          "displayName": "Accordion 3 Title",
          "defaultValue": "Returning an item",
          "group": "Accordions"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "cardBackground": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#ffffff",
          "group": "Colors"
        },
        "titleColor": {
          "dataType": "color",
          "displayName": "Title Color",
          "defaultValue": "#111111",
          "group": "Colors"
        },
        "textColor": {
          "dataType": "color",
          "displayName": "Text Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Accent Color",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "borderColor": {
          "dataType": "color",
          "displayName": "Border Color",
          "defaultValue": "#eeeeee",
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
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [selectedThumbnail, setSelectedThumbnail] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);
    const [openAccordion, setOpenAccordion] = React.useState(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const productBrand = config?.productBrand || 'Meridian';
    const productTitle = config?.productTitle || 'Special Edition DSP5200 Digital Active Loudspeaker.';
    const productPrice = config?.productPrice || '13,731.00 NIS';
    const productRating = parseFloat(config?.productRating || '5.0');
    const reviewCount = config?.reviewCount || '1';
    const productDescription = config?.productDescription || 'The additional DSP device...';
    const shortDescription = config?.shortDescription || 'The Special Edition DSP5200 delivers ultimate high-resolution performance.';
    const stockStatus = config?.stockStatus || 'inStock';
    const stockCount = config?.stockCount || '96';
    const highlights = [{
      value: config?.highlight1Value || '3 years',
      label: config?.highlight1Label || 'Free manufacturers warranty'
    }, {
      value: config?.highlight2Value || '1-5 days',
      label: config?.highlight2Label || 'Delivery time'
    }];
    const relatedProduct = {
      title: config?.relatedProductTitle || 'Meridian DSW.2 Digital Active Subwoofer',
      price: config?.relatedProductPrice || '12,116.00 NIS'
    };
    const accordions = [{
      title: config?.accordion1Title || 'Flexible credit available',
      icon: '💳'
    }, {
      title: config?.accordion2Title || 'Insure your product',
      icon: '🛡️'
    }, {
      title: config?.accordion3Title || 'Returning an item',
      icon: '↩️'
    }];
    const backgroundColor = config?.backgroundColor || '#ffffff';
    const cardBackground = config?.cardBackground || '#ffffff';
    const titleColor = config?.titleColor || '#111111';
    const textColor = config?.textColor || '#777777';
    const accentColor = config?.accentColor || '#777777';
    const borderColor = config?.borderColor || '#eeeeee';
    const totalSlides = 13;
    const thumbnails = Array.from({
      length: 8
    }, (_, i) => i);
    const renderStars = rating => {
      return Array.from({
        length: 5
      }, (_, i) => /*#__PURE__*/React.createElement("span", {
        key: i,
        style: {
          color: i < rating ? accentColor : '#eeeeee',
          fontSize: '14px'
        }
      }, "★"));
    };
    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    return /*#__PURE__*/React.createElement("div", {
      className: "product-slider-highlights",
      style: {
        backgroundColor,
        padding: '40px',
        minHeight: '1000px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '13px',
        color: textColor,
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      }
    }, "Home"), /*#__PURE__*/React.createElement("span", null, "›"), /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      }
    }, "Loudspeakers"), /*#__PURE__*/React.createElement("span", null, "›"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: titleColor
      }
    }, productTitle.substring(0, 30), "...")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        maxWidth: '1200px',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        backgroundColor: cardBackground,
        borderRadius: '12px',
        aspectRatio: '4/5',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '40%',
        height: '80%',
        background: 'linear-gradient(180deg, #eeeeee 0%, #dddddd 100%)',
        borderRadius: '8px',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '20%',
        borderRadius: '50%',
        backgroundColor: '#111111'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%',
        height: '15%',
        borderRadius: '50%',
        backgroundColor: '#111111'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40%',
        height: '12%',
        borderRadius: '50%',
        backgroundColor: '#111111'
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: prevSlide,
      style: {
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        cursor: 'pointer',
        fontSize: '16px',
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, "‹"), /*#__PURE__*/React.createElement("button", {
      onClick: nextSlide,
      style: {
        position: 'absolute',
        right: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        cursor: 'pointer',
        fontSize: '16px',
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, "›"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        padding: '6px 12px',
        backgroundColor: backgroundColor,
        borderRadius: '4px',
        fontSize: '13px',
        color: textColor
      }
    }, currentSlide + 1, " / ", totalSlides)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '8px',
        scrollbarWidth: 'none'
      }
    }, thumbnails.map((_, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => {
        setSelectedThumbnail(index);
        setCurrentSlide(index);
      },
      style: {
        flexShrink: 0,
        width: '72px',
        height: '72px',
        borderRadius: '8px',
        border: selectedThumbnail === index ? `2px solid ${titleColor}` : `1px solid ${borderColor}`,
        backgroundColor: cardBackground,
        cursor: 'pointer',
        padding: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        backgroundColor: '#dddddd',
        opacity: 0.4 + index * 0.08
      }
    })))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '16px',
        color: titleColor,
        lineHeight: '1.6',
        marginTop: '24px',
        marginBottom: '24px'
      }
    }, shortDescription), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1px',
        backgroundColor: borderColor,
        borderTop: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`
      }
    }, highlights.map((highlight, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        backgroundColor,
        padding: '24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '28px',
        fontWeight: '600',
        color: titleColor,
        marginBottom: '8px'
      }
    }, highlight.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '14px',
        color: textColor,
        lineHeight: '1.4'
      }
    }, highlight.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: `1px solid ${borderColor}`,
        paddingLeft: '48px',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '14px',
        color: textColor,
        margin: '0 0 8px 0'
      }
    }, productBrand), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '32px',
        fontWeight: '600',
        color: titleColor,
        margin: '0 0 12px 0',
        lineHeight: '1.2'
      }
    }, productTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, renderStars(productRating)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        color: textColor
      }
    }, "(", reviewCount, ")")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '28px',
        fontWeight: '600',
        color: titleColor,
        marginBottom: '8px'
      }
    }, productPrice), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '13px',
        color: textColor,
        margin: '0 0 24px 0'
      }
    }, "Tax included."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '14px',
        color: textColor,
        lineHeight: '1.7',
        marginBottom: '24px'
      }
    }, productDescription), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${borderColor}`,
        borderRadius: '8px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setQuantity(Math.max(1, quantity - 1)),
      style: {
        width: '44px',
        height: '44px',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '18px',
        cursor: 'pointer',
        color: textColor
      }
    }, "−"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '32px',
        textAlign: 'center',
        fontSize: '15px',
        color: titleColor
      }
    }, quantity), /*#__PURE__*/React.createElement("button", {
      onClick: () => setQuantity(quantity + 1),
      style: {
        width: '44px',
        height: '44px',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '18px',
        cursor: 'pointer',
        color: textColor
      }
    }, "+")), /*#__PURE__*/React.createElement("button", {
      style: {
        flex: 1,
        padding: '14px 24px',
        borderRadius: '8px',
        backgroundColor: backgroundColor,
        color: titleColor,
        border: `1px solid ${borderColor}`,
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer'
      }
    }, "Add to cart")), /*#__PURE__*/React.createElement("button", {
      style: {
        width: '100%',
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: accentColor,
        color: '#ffffff',
        border: 'none',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer',
        marginBottom: '20px'
      }
    }, "Buy it now"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#999999'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        color: '#999999',
        fontWeight: '500'
      }
    }, stockCount, " in stock - Get yours today!")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '4px',
        backgroundColor: '#999999',
        borderRadius: '2px',
        marginBottom: '32px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '16px',
        fontWeight: '500',
        color: titleColor,
        margin: 0
      }
    }, "You might also need..."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        width: '28px',
        height: '28px',
        border: `1px solid ${borderColor}`,
        borderRadius: '4px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: textColor
      }
    }, "‹"), /*#__PURE__*/React.createElement("button", {
      style: {
        width: '28px',
        height: '28px',
        border: `1px solid ${borderColor}`,
        borderRadius: '4px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: textColor
      }
    }, "›"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '16px',
        padding: '16px',
        border: `1px solid ${borderColor}`,
        borderRadius: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '80px',
        height: '80px',
        backgroundColor: cardBackground,
        borderRadius: '4px',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: '14px',
        fontWeight: '500',
        color: titleColor,
        margin: '0 0 4px 0'
      }
    }, relatedProduct.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '14px',
        color: titleColor,
        margin: '0 0 8px 0'
      }
    }, relatedProduct.price), /*#__PURE__*/React.createElement("button", {
      style: {
        padding: '6px 16px',
        borderRadius: '4px',
        backgroundColor: 'transparent',
        border: `1px solid ${borderColor}`,
        fontSize: '13px',
        color: titleColor,
        cursor: 'pointer'
      }
    }, "Add to cart")))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: `1px solid ${borderColor}`
      }
    }, accordions.map((accordion, index) => /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: () => setOpenAccordion(openAccordion === index ? null : index),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0',
        background: 'none',
        border: 'none',
        borderBottom: `1px solid ${borderColor}`,
        cursor: 'pointer',
        fontSize: '14px',
        color: titleColor
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", null, accordion.icon), accordion.title), /*#__PURE__*/React.createElement("span", {
      style: {
        transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 200ms'
      }
    }, "▾"))))))));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};