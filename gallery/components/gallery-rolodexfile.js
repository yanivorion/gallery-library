window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["gallery-rolodexfile"] = function (React) {
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
   * Component Type: Gallery.RolodexFile
   * ============================================================================
   */

  const MANIFEST = {
    "type": "Gallery.RolodexFile",
    "description": "A technical illustration-style Rolodex file gallery.",
    "editorElement": {
      "selector": ".rolodex-gallery",
      "displayName": "Rolodex File Gallery",
      "archetype": "container",
      "data": {
        "fileData": {
          "dataType": "textarea",
          "displayName": "File Data (JSON)",
          "defaultValue": "[\n  { \"id\": \"010\", \"label\": \"O\", \"isDivider\": true },\n  { \"id\": \"94\", \"label\": \"oil lamp\" },\n  { \"id\": \"96\", \"label\": \"pants\" },\n  { \"id\": \"98\", \"label\": \"plant 003\" },\n  { \"id\": \"012\", \"label\": \"P\", \"isDivider\": true },\n  { \"id\": \"100\", \"label\": \"phisher\" },\n  { \"id\": \"102\", \"label\": \"pencile\" },\n  { \"id\": \"104\", \"label\": \"quiet\" },\n  { \"id\": \"005\", \"label\": \"Q\", \"isDivider\": true },\n  { \"id\": \"106\", \"label\": \"questions\" },\n  { \"id\": \"108\", \"label\": \"quit\" },\n  { \"id\": \"002\", \"label\": \"R\", \"isDivider\": true },\n  { \"id\": \"112\", \"label\": \"rum\" },\n  { \"id\": \"114\", \"label\": \"rain\" }\n]",
          "group": "Content",
          "description": "Array of objects with 'id', 'label', and optional 'isDivider'."
        },
        "bottomLabel": {
          "dataType": "text",
          "displayName": "Bottom Label",
          "defaultValue": "sam's secret files",
          "group": "Content"
        },
        "animationSpeed": {
          "dataType": "select",
          "displayName": "Animation Speed",
          "defaultValue": "fast",
          "options": ["fast", "medium", "slow"],
          "group": "Animation"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "cardColor": {
          "dataType": "color",
          "displayName": "Card Fill Color",
          "defaultValue": "#dddddd",
          "group": "Colors"
        },
        "lineColor": {
          "dataType": "color",
          "displayName": "Line/Text Color",
          "defaultValue": "#000000",
          "group": "Colors"
        },
        "accentColor": {
          "dataType": "color",
          "displayName": "Label Accent Color",
          "defaultValue": "#ffffff",
          "group": "Colors"
        }
      }
    }
  };
  function Component({
    config = {}
  }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const data = React.useMemo(() => {
      try {
        return JSON.parse(config?.fileData || '[]');
      } catch (e) {
        return [];
      }
    }, [config?.fileData]);
    const bottomLabel = config?.bottomLabel || "sam's secret files";
    const bgColor = config?.backgroundColor || '#eeeeee';
    const cardColor = config?.cardColor || '#dddddd';
    const lineColor = config?.lineColor || '#000000';
    const accentColor = config?.accentColor || '#ffffff';
    const transition = React.useMemo(() => {
      const speeds = {
        fast: '200ms',
        medium: '400ms',
        slow: '600ms'
      };
      return `all ${speeds[config?.animationSpeed || 'fast']} ease-in-out`;
    }, [config?.animationSpeed]);
    const handleCardClick = index => {
      setActiveIndex(index);
    };
    if (data.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: bgColor,
          color: lineColor,
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }, "Invalid or empty data.");
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "rolodex-gallery",
      style: {
        backgroundColor: bgColor,
        color: lineColor,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '500px',
        fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        height: '400px',
        border: `2px solid ${lineColor}`,
        backgroundColor: bgColor,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '20px',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '90%',
        height: '300px'
      }
    }, data.map((item, index) => {
      const isActive = index === activeIndex;
      const distanceFromActive = index - activeIndex;

      // Calculate stacking
      let zIndex = data.length - Math.abs(distanceFromActive);
      let translateY = distanceFromActive * -25; // 25px overlap per card
      let scale = 1 - Math.abs(distanceFromActive) * 0.02;
      if (isActive) {
        zIndex = data.length + 1;
        translateY = 20; // Pop up slightly
        scale = 1.02;
      }
      const isDivider = item.isDivider;
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        onClick: () => handleCardClick(index),
        style: {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: `translateX(-50%) translateY(${translateY}px) scale(${scale})`,
          width: isDivider ? '95%' : '90%',
          height: '200px',
          backgroundColor: cardColor,
          border: `2px solid ${lineColor}`,
          borderRadius: '8px 8px 0 0',
          zIndex: zIndex,
          transition: transition,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '40px',
          borderBottom: `2px solid ${lineColor}`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          fontWeight: 'bold',
          backgroundColor: isDivider ? lineColor : 'transparent',
          color: isDivider ? bgColor : lineColor,
          justifyContent: isDivider ? 'space-between' : 'flex-start'
        }
      }, /*#__PURE__*/React.createElement("span", null, item.id), isDivider && /*#__PURE__*/React.createElement("span", null, item.label)), !isDivider && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem'
        }
      }, item.label));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '20px',
        padding: '8px 16px',
        backgroundColor: accentColor,
        border: `2px solid ${lineColor}`,
        borderRadius: '20px',
        fontWeight: 'bold'
      }
    }, bottomLabel));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};