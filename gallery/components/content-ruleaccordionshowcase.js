window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["content-ruleaccordionshowcase"] = function (React) {
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
   * Component Type: Content.RuleAccordionShowcase
   * ============================================================================
   */

  /*
  */

  const MANIFEST = {
    "type": "Content.RuleAccordionShowcase",
    "description": "12 distinct design presets for displaying rule/heuristic data in an expandable accordion format. Designed for Mobile Algorithm Builder - rule display.",
    "editorElement": {
      "selector": ".rule-accordion-showcase",
      "displayName": "Rule Accordion Showcase",
      "archetype": "container",
      "data": {
        "preset": {
          "dataType": "select",
          "displayName": "Design Preset",
          "defaultValue": "modern-cards",
          "options": ["modern-cards", "minimal-lines", "data-table", "kanban-style", "timeline-flow", "split-panel", "floating-panels", "compact-dense", "material-sheets", "notion-blocks", "terminal-cli", "dashboard-tiles", "academic-grid", "portfolio-bold", "specs-minimal", "pricing-stack", "metrics-dashboard"],
          "group": "Content",
          "description": "Select one of 12 unique visual treatments"
        },
        "ruleId": {
          "dataType": "text",
          "displayName": "Rule ID",
          "defaultValue": "A001",
          "group": "Content",
          "description": "Rule identifier (e.g., A001, L042)"
        },
        "ruleCategory": {
          "dataType": "text",
          "displayName": "Category",
          "defaultValue": "Layout",
          "group": "Content",
          "description": "Rule classification (Layout, Typography, Behavioral)"
        },
        "ruleElement": {
          "dataType": "text",
          "displayName": "Element",
          "defaultValue": "Repeaters",
          "group": "Content",
          "description": "Target element type"
        },
        "ruleStatus": {
          "dataType": "select",
          "displayName": "Status",
          "defaultValue": "Active",
          "options": ["Active", "Inactive", "Draft"],
          "group": "Content",
          "description": "Rule status indicator"
        },
        "parentContainer": {
          "dataType": "text",
          "displayName": "Parent Container",
          "defaultValue": "Section > Strip",
          "group": "Content",
          "description": "Step 2: Parent container scope"
        },
        "condition": {
          "dataType": "text",
          "displayName": "Condition",
          "defaultValue": "Width > 80% viewport",
          "group": "Content",
          "description": "Step 4: When rule applies"
        },
        "action": {
          "dataType": "text",
          "displayName": "Action",
          "defaultValue": "Stack vertically",
          "group": "Content",
          "description": "Step 5: Transformation action"
        },
        "outputWidth": {
          "dataType": "text",
          "displayName": "Output Width",
          "defaultValue": "100%",
          "group": "Content",
          "description": "Step 6: Output width value"
        },
        "outputHeight": {
          "dataType": "text",
          "displayName": "Output Height",
          "defaultValue": "auto",
          "group": "Content",
          "description": "Step 6: Output height value"
        },
        "startExpanded": {
          "dataType": "booleanValue",
          "displayName": "Start Expanded",
          "defaultValue": false,
          "group": "Content",
          "description": "Whether accordion starts in expanded state"
        },
        "showStepNumbers": {
          "dataType": "booleanValue",
          "displayName": "Show Step Numbers",
          "defaultValue": true,
          "group": "Content",
          "description": "Display step numbers on cards"
        },
        "primaryColor": {
          "dataType": "color",
          "displayName": "Primary/Accent Color",
          "defaultValue": "#777777",
          "group": "Colors",
          "description": "Accent color for highlights and output cards"
        },
        "backgroundColor": {
          "dataType": "color",
          "displayName": "Background Color",
          "defaultValue": "#ffffff",
          "group": "Colors",
          "description": "Container background"
        },
        "cardBackground": {
          "dataType": "color",
          "displayName": "Card Background",
          "defaultValue": "#ffffff",
          "group": "Colors",
          "description": "Card and row surfaces"
        },
        "textPrimary": {
          "dataType": "color",
          "displayName": "Primary Text",
          "defaultValue": "#222222",
          "group": "Colors",
          "description": "Main text color"
        },
        "textSecondary": {
          "dataType": "color",
          "displayName": "Secondary Text",
          "defaultValue": "#777777",
          "group": "Colors",
          "description": "Labels and metadata"
        },
        "borderColor": {
          "dataType": "color",
          "displayName": "Border Color",
          "defaultValue": "#eeeeee",
          "group": "Colors",
          "description": "Borders and dividers"
        },
        "successColor": {
          "dataType": "color",
          "displayName": "Success/Active Color",
          "defaultValue": "#999999",
          "group": "Colors",
          "description": "Active status indicator"
        },
        "warningColor": {
          "dataType": "color",
          "displayName": "Warning/Draft Color",
          "defaultValue": "#aaaaaa",
          "group": "Colors",
          "description": "Draft status indicator"
        },
        "errorColor": {
          "dataType": "color",
          "displayName": "Error/Inactive Color",
          "defaultValue": "#666666",
          "group": "Colors",
          "description": "Inactive status indicator"
        },
        "fontFamily": {
          "dataType": "select",
          "displayName": "Font Family",
          "defaultValue": "system-ui, -apple-system, sans-serif",
          "options": ["system-ui, -apple-system, sans-serif", "'SF Pro Display', system-ui, sans-serif", "'Inter', sans-serif", "'JetBrains Mono', monospace"],
          "group": "Typography",
          "description": "Primary font family"
        },
        "fontSize": {
          "dataType": "number",
          "displayName": "Base Font Size (px)",
          "defaultValue": 14,
          "group": "Typography",
          "description": "Base font size for content"
        },
        "fontWeight": {
          "dataType": "select",
          "displayName": "Body Font Weight",
          "defaultValue": "400",
          "options": ["300", "400", "500"],
          "group": "Typography",
          "description": "Default text weight"
        },
        "animationDuration": {
          "dataType": "select",
          "displayName": "Animation Duration",
          "defaultValue": "300",
          "options": ["200", "250", "300", "350", "400"],
          "group": "Animation",
          "description": "Expand/collapse duration in ms"
        },
        "borderRadius": {
          "dataType": "select",
          "displayName": "Border Radius",
          "defaultValue": "8",
          "options": ["0", "4", "6", "8", "12", "16"],
          "group": "Layout",
          "description": "Corner radius in pixels"
        },
        "padding": {
          "dataType": "select",
          "displayName": "Content Padding",
          "defaultValue": "16",
          "options": ["8", "12", "16", "20", "24"],
          "group": "Layout",
          "description": "Internal padding in pixels"
        },
        "gap": {
          "dataType": "select",
          "displayName": "Element Gap",
          "defaultValue": "12",
          "options": ["8", "10", "12", "16", "20"],
          "group": "Layout",
          "description": "Gap between elements in pixels"
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
    // Safe config access with defaults
    const preset = config?.preset || 'modern-cards';
    const ruleId = config?.ruleId || 'A001';
    const ruleCategory = config?.ruleCategory || 'Layout';
    const ruleElement = config?.ruleElement || 'Repeaters';
    const ruleStatus = config?.ruleStatus || 'Active';
    const parentContainer = config?.parentContainer || 'Section > Strip';
    const condition = config?.condition || 'Width > 80% viewport';
    const action = config?.action || 'Stack vertically';
    const outputWidth = config?.outputWidth || '100%';
    const outputHeight = config?.outputHeight || 'auto';
    const startExpanded = config?.startExpanded !== false ? config?.startExpanded : false;
    const showStepNumbers = config?.showStepNumbers !== false;

    // Colors
    const primaryColor = config?.primaryColor || '#777777';
    const backgroundColor = config?.backgroundColor || '#ffffff';
    const cardBackground = config?.cardBackground || '#ffffff';
    const textPrimary = config?.textPrimary || '#222222';
    const textSecondary = config?.textSecondary || '#777777';
    const borderColor = config?.borderColor || '#eeeeee';
    const successColor = config?.successColor || '#999999';
    const warningColor = config?.warningColor || '#aaaaaa';
    const errorColor = config?.errorColor || '#666666';

    // Typography
    const fontFamily = config?.fontFamily || 'system-ui, -apple-system, sans-serif';
    const fontSize = parseInt(config?.fontSize || 14);
    const fontWeight = config?.fontWeight || '400';

    // Layout & Animation
    const animationDuration = parseInt(config?.animationDuration || 300);
    const borderRadius = parseInt(config?.borderRadius || 8);
    const padding = parseInt(config?.padding || 16);
    const gap = parseInt(config?.gap || 12);

    // State
    const [isExpanded, setIsExpanded] = React.useState(startExpanded);
    const [isHovered, setIsHovered] = React.useState(false);

    // Reduced motion check
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const duration = prefersReducedMotion ? 0 : animationDuration;

    // Status color mapping
    const getStatusColor = status => {
      switch (status) {
        case 'Active':
          return successColor;
        case 'Inactive':
          return errorColor;
        case 'Draft':
          return warningColor;
        default:
          return textSecondary;
      }
    };

    // Step data structure
    const steps = [{
      num: 2,
      label: 'PARENT CONTAINER',
      value: parentContainer
    }, {
      num: 4,
      label: 'CONDITION',
      value: condition
    }, {
      num: 5,
      label: 'ACTION',
      value: action
    }, {
      num: 6,
      label: 'OUTPUT',
      isOutput: true,
      width: outputWidth,
      height: outputHeight
    }];

    // ═══════════════════════════════════════════════════════════════
    // PRESET STYLE DEFINITIONS
    // ═══════════════════════════════════════════════════════════════

    const getPresetStyles = () => {
      const baseTransition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      const presets = {
        // ─────────────────────────────────────────────────────────────
        // 1. MODERN CARDS - Rounded card with shadow, grid metadata
        // ─────────────────────────────────────────────────────────────
        'modern-cards': {
          container: {
            background: backgroundColor,
            borderRadius: borderRadius,
            padding: padding / 2
          },
          outer: {
            row: {
              background: cardBackground,
              borderRadius: borderRadius,
              padding: `${padding}px ${padding * 1.25}px`,
              boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.05)',
              border: `1px solid ${borderColor}`,
              cursor: 'pointer',
              transition: baseTransition,
              display: 'grid',
              gridTemplateColumns: '60px 100px 1fr 80px 32px',
              alignItems: 'center',
              gap: gap
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize,
              fontWeight: '500',
              color: primaryColor
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            element: {
              fontSize: fontSize,
              color: textPrimary,
              fontWeight: '500'
            },
            status: {
              fontSize: fontSize - 2,
              padding: '4px 10px',
              borderRadius: 20,
              background: `${getStatusColor(ruleStatus)}15`,
              color: getStatusColor(ruleStatus),
              fontWeight: '500',
              textAlign: 'center'
            },
            chevron: {
              width: 20,
              height: 20,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              padding: `${padding}px 0 0`
            },
            meta: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: gap,
              marginBottom: padding,
              padding: padding,
              background: backgroundColor,
              borderRadius: borderRadius - 2
            },
            metaItem: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            metaLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            metaValue: {
              fontSize: fontSize,
              color: textPrimary,
              fontWeight: '500'
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: gap
            },
            stepCard: {
              background: cardBackground,
              border: `1px solid ${borderColor}`,
              borderRadius: borderRadius - 2,
              padding: padding,
              display: 'flex',
              alignItems: 'flex-start',
              gap: gap
            },
            stepNumber: {
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: backgroundColor,
              color: textSecondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 2,
              fontWeight: '500',
              flexShrink: 0
            },
            stepContent: {
              flex: 1
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 4
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            outputCard: {
              background: `${primaryColor}08`,
              border: `1px solid ${primaryColor}30`,
              borderRadius: borderRadius - 2,
              padding: padding
            },
            outputGrid: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: gap,
              marginTop: 8
            },
            outputItem: {
              background: cardBackground,
              padding: '8px 12px',
              borderRadius: borderRadius - 4,
              border: `1px solid ${primaryColor}20`
            },
            outputLabel: {
              fontSize: fontSize - 3,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            outputValue: {
              fontSize: fontSize + 2,
              color: primaryColor,
              fontWeight: '500',
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 2. MINIMAL LINES - Line separator only, clean aesthetic
        // ─────────────────────────────────────────────────────────────
        'minimal-lines': {
          container: {
            background: cardBackground
          },
          outer: {
            row: {
              padding: `${padding}px 0`,
              borderBottom: `1px solid ${borderColor}`,
              cursor: 'pointer',
              transition: baseTransition,
              display: 'flex',
              alignItems: 'center',
              gap: gap * 2,
              background: isHovered ? backgroundColor : 'transparent'
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize + 2,
              fontWeight: '400',
              color: textPrimary,
              minWidth: 60
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary,
              minWidth: 80
            },
            element: {
              fontSize: fontSize,
              color: textPrimary,
              flex: 1
            },
            status: {
              fontSize: fontSize - 1,
              color: getStatusColor(ruleStatus),
              fontWeight: '500'
            },
            chevron: {
              width: 16,
              height: 16,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              padding: `${padding}px 0`,
              borderLeft: `2px solid ${primaryColor}`,
              marginLeft: 30,
              paddingLeft: padding
            },
            meta: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: `${gap}px ${gap * 3}px`,
              marginBottom: padding,
              paddingBottom: padding,
              borderBottom: `1px solid ${borderColor}`
            },
            metaItem: {
              display: 'flex',
              alignItems: 'baseline',
              gap: 8
            },
            metaLabel: {
              fontSize: fontSize - 2,
              color: textSecondary
            },
            metaValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: gap
            },
            stepCard: {
              display: 'flex',
              alignItems: 'baseline',
              gap: gap,
              padding: `${gap}px 0`
            },
            stepNumber: {
              fontSize: fontSize - 2,
              color: textSecondary,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              minWidth: 24
            },
            stepContent: {
              flex: 1,
              display: 'flex',
              alignItems: 'baseline',
              gap: gap
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              minWidth: 120
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            outputCard: {
              borderLeft: `2px solid ${primaryColor}`,
              paddingLeft: padding,
              marginLeft: 24
            },
            outputGrid: {
              display: 'flex',
              gap: gap * 2
            },
            outputItem: {
              display: 'flex',
              alignItems: 'baseline',
              gap: 8
            },
            outputLabel: {
              fontSize: fontSize - 2,
              color: textSecondary
            },
            outputValue: {
              fontSize: fontSize,
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 3. DATA TABLE - Spreadsheet grid aesthetic
        // ─────────────────────────────────────────────────────────────
        'data-table': {
          container: {
            background: cardBackground,
            border: `1px solid ${borderColor}`,
            borderRadius: borderRadius,
            overflow: 'hidden'
          },
          outer: {
            row: {
              display: 'grid',
              gridTemplateColumns: '70px 100px 1fr 90px 40px',
              background: isHovered ? backgroundColor : cardBackground,
              cursor: 'pointer',
              transition: baseTransition,
              borderBottom: `1px solid ${borderColor}`
            },
            cell: {
              padding: `${padding}px`,
              borderRight: `1px solid ${borderColor}`,
              display: 'flex',
              alignItems: 'center'
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize,
              color: primaryColor,
              fontWeight: '500'
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary
            },
            element: {
              fontSize: fontSize,
              color: textPrimary
            },
            status: {
              fontSize: fontSize - 2,
              padding: '2px 8px',
              borderRadius: 4,
              background: `${getStatusColor(ruleStatus)}15`,
              color: getStatusColor(ruleStatus)
            },
            chevron: {
              width: 16,
              height: 16,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              background: backgroundColor
            },
            meta: {
              display: 'grid',
              gridTemplateColumns: '70px 100px 1fr 90px 40px',
              borderBottom: `1px solid ${borderColor}`
            },
            metaCell: {
              padding: `${padding * 0.75}px ${padding}px`,
              borderRight: `1px solid ${borderColor}`,
              fontSize: fontSize - 2,
              color: textSecondary,
              background: cardBackground
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column'
            },
            stepCard: {
              display: 'grid',
              gridTemplateColumns: '70px 100px 1fr 90px 40px',
              borderBottom: `1px solid ${borderColor}`
            },
            stepCell: {
              padding: `${padding}px`,
              borderRight: `1px solid ${borderColor}`,
              display: 'flex',
              alignItems: 'center'
            },
            stepNumber: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize - 2,
              color: textSecondary
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase'
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            outputCard: {
              background: `${primaryColor}08`
            },
            outputValue: {
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: '500'
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 4. KANBAN STYLE - Card with drag handle, tag cloud
        // ─────────────────────────────────────────────────────────────
        'kanban-style': {
          container: {
            background: backgroundColor,
            borderRadius: borderRadius,
            padding: padding / 2
          },
          outer: {
            row: {
              background: cardBackground,
              borderRadius: borderRadius,
              padding: padding,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
              transition: baseTransition,
              display: 'flex',
              alignItems: 'center',
              gap: gap,
              border: isHovered ? `1px solid ${primaryColor}40` : `1px solid transparent`
            },
            dragHandle: {
              width: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              padding: '4px 0',
              color: textSecondary,
              opacity: 0.5
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize,
              fontWeight: '500',
              color: textPrimary,
              background: backgroundColor,
              padding: '4px 8px',
              borderRadius: 4
            },
            category: {
              fontSize: fontSize - 2,
              color: cardBackground,
              background: textSecondary,
              padding: '3px 8px',
              borderRadius: 4
            },
            element: {
              fontSize: fontSize,
              color: textPrimary,
              flex: 1
            },
            status: {
              fontSize: fontSize - 2,
              padding: '4px 10px',
              borderRadius: 4,
              background: getStatusColor(ruleStatus),
              color: cardBackground,
              fontWeight: '500'
            },
            chevron: {
              width: 20,
              height: 20,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              padding: `${padding}px ${padding}px 0`
            },
            meta: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: padding
            },
            metaTag: {
              fontSize: fontSize - 2,
              padding: '4px 10px',
              borderRadius: 20,
              background: backgroundColor,
              color: textSecondary,
              border: `1px solid ${borderColor}`
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: gap
            },
            stepCard: {
              background: backgroundColor,
              borderRadius: borderRadius - 2,
              padding: padding,
              borderLeft: `3px solid ${borderColor}`
            },
            stepNumber: {
              display: 'inline-flex',
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: cardBackground,
              color: textSecondary,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 2,
              marginRight: 8,
              border: `1px solid ${borderColor}`
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.03em'
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary,
              marginTop: 6
            },
            outputCard: {
              background: `linear-gradient(135deg, ${primaryColor}08 0%, ${primaryColor}15 100%)`,
              borderRadius: borderRadius - 2,
              padding: padding,
              borderLeft: `3px solid ${primaryColor}`
            },
            outputGrid: {
              display: 'flex',
              gap: padding,
              marginTop: 8
            },
            outputItem: {
              background: cardBackground,
              padding: '8px 16px',
              borderRadius: borderRadius - 4,
              flex: 1,
              textAlign: 'center'
            },
            outputLabel: {
              fontSize: fontSize - 3,
              color: textSecondary,
              textTransform: 'uppercase'
            },
            outputValue: {
              fontSize: fontSize + 4,
              color: primaryColor,
              fontWeight: '500',
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              marginTop: 4
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 5. TIMELINE FLOW - Vertical timeline with dots
        // ─────────────────────────────────────────────────────────────
        'timeline-flow': {
          container: {
            background: cardBackground,
            borderRadius: borderRadius,
            padding: padding
          },
          outer: {
            row: {
              background: `linear-gradient(135deg, ${primaryColor}05 0%, ${primaryColor}10 100%)`,
              borderRadius: borderRadius,
              padding: padding * 1.5,
              cursor: 'pointer',
              transition: baseTransition,
              border: `1px solid ${primaryColor}20`,
              display: 'flex',
              flexDirection: 'column',
              gap: gap
            },
            header: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize + 8,
              fontWeight: '300',
              color: primaryColor
            },
            meta: {
              display: 'flex',
              alignItems: 'center',
              gap: gap
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary
            },
            element: {
              fontSize: fontSize + 2,
              color: textPrimary,
              fontWeight: '500'
            },
            status: {
              fontSize: fontSize - 2,
              padding: '4px 12px',
              borderRadius: 20,
              background: `${getStatusColor(ruleStatus)}15`,
              color: getStatusColor(ruleStatus)
            },
            chevron: {
              width: 24,
              height: 24,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: primaryColor
            }
          },
          inner: {
            container: {
              paddingTop: padding,
              paddingLeft: padding,
              position: 'relative'
            },
            timeline: {
              position: 'absolute',
              left: padding + 11,
              top: padding + 24,
              bottom: 0,
              width: 2,
              background: borderColor
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: padding
            },
            stepCard: {
              display: 'flex',
              alignItems: 'flex-start',
              gap: padding,
              position: 'relative'
            },
            stepDot: {
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: cardBackground,
              border: `2px solid ${borderColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 3,
              color: textSecondary,
              flexShrink: 0,
              zIndex: 1
            },
            stepContent: {
              flex: 1,
              background: backgroundColor,
              borderRadius: borderRadius - 2,
              padding: padding
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 4
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            outputDot: {
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: primaryColor,
              border: `2px solid ${primaryColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 3,
              color: cardBackground,
              flexShrink: 0,
              zIndex: 1
            },
            outputCard: {
              flex: 1,
              background: `${primaryColor}10`,
              borderRadius: borderRadius - 2,
              padding: padding,
              border: `1px solid ${primaryColor}30`
            },
            outputGrid: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: gap,
              marginTop: 8
            },
            outputItem: {},
            outputLabel: {
              fontSize: fontSize - 3,
              color: textSecondary,
              textTransform: 'uppercase'
            },
            outputValue: {
              fontSize: fontSize + 4,
              color: primaryColor,
              fontWeight: '500',
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 6. SPLIT PANEL - Dark sidebar + light main
        // ─────────────────────────────────────────────────────────────
        'split-panel': {
          container: {
            background: cardBackground,
            borderRadius: borderRadius,
            overflow: 'hidden',
            border: `1px solid ${borderColor}`
          },
          outer: {
            row: {
              display: 'flex',
              cursor: 'pointer',
              transition: baseTransition
            },
            sidebar: {
              width: 80,
              background: textPrimary,
              padding: padding,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize + 4,
              fontWeight: '500',
              color: cardBackground
            },
            statusDot: {
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: getStatusColor(ruleStatus)
            },
            main: {
              flex: 1,
              padding: padding,
              display: 'flex',
              alignItems: 'center',
              gap: gap * 2,
              background: isHovered ? backgroundColor : cardBackground
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary,
              minWidth: 80
            },
            element: {
              fontSize: fontSize,
              color: textPrimary,
              flex: 1,
              fontWeight: '500'
            },
            status: {
              fontSize: fontSize - 2,
              color: getStatusColor(ruleStatus)
            },
            chevron: {
              width: 20,
              height: 20,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              display: 'flex'
            },
            navSidebar: {
              width: 80,
              background: `${textPrimary}F0`,
              padding: `${padding}px 0`
            },
            navItem: {
              padding: `${padding * 0.75}px ${padding}px`,
              color: `${cardBackground}80`,
              fontSize: fontSize - 2,
              textAlign: 'center',
              cursor: 'pointer',
              borderLeft: '2px solid transparent'
            },
            navItemActive: {
              color: cardBackground,
              borderLeft: `2px solid ${primaryColor}`,
              background: `${primaryColor}20`
            },
            mainContent: {
              flex: 1,
              padding: padding,
              background: backgroundColor
            },
            meta: {
              display: 'flex',
              gap: gap * 2,
              marginBottom: padding,
              paddingBottom: padding,
              borderBottom: `1px solid ${borderColor}`
            },
            metaItem: {
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            },
            metaLabel: {
              fontSize: fontSize - 2,
              color: textSecondary
            },
            metaValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: gap
            },
            stepCard: {
              background: cardBackground,
              borderRadius: borderRadius - 2,
              padding: padding,
              display: 'flex',
              gap: gap
            },
            stepNumber: {
              width: 24,
              height: 24,
              borderRadius: 4,
              background: backgroundColor,
              color: textSecondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 2,
              flexShrink: 0
            },
            stepContent: {
              flex: 1
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              marginBottom: 2
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            outputCard: {
              background: `${primaryColor}10`,
              borderRadius: borderRadius - 2,
              padding: padding,
              border: `1px solid ${primaryColor}20`
            },
            outputGrid: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: gap,
              marginTop: 8
            },
            outputItem: {},
            outputLabel: {
              fontSize: fontSize - 3,
              color: textSecondary
            },
            outputValue: {
              fontSize: fontSize + 2,
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 7. FLOATING PANELS - Deep shadow elevation
        // ─────────────────────────────────────────────────────────────
        'floating-panels': {
          container: {
            background: backgroundColor,
            padding: padding,
            borderRadius: borderRadius
          },
          outer: {
            row: {
              background: cardBackground,
              borderRadius: borderRadius + 4,
              padding: padding * 1.25,
              boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)' : '0 10px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: baseTransition,
              display: 'flex',
              alignItems: 'center',
              gap: gap * 1.5,
              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize + 6,
              fontWeight: '300',
              color: primaryColor,
              minWidth: 70
            },
            divider: {
              width: 1,
              height: 32,
              background: borderColor
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            element: {
              fontSize: fontSize + 1,
              color: textPrimary,
              fontWeight: '500',
              flex: 1
            },
            status: {
              fontSize: fontSize - 1,
              padding: '6px 14px',
              borderRadius: 8,
              background: `${getStatusColor(ruleStatus)}12`,
              color: getStatusColor(ruleStatus),
              fontWeight: '500'
            },
            chevron: {
              width: 24,
              height: 24,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              padding: `${padding * 1.5}px 0 0`,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: padding
            },
            stepCard: {
              background: cardBackground,
              borderRadius: borderRadius,
              padding: padding,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
            },
            stepHeader: {
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 8
            },
            stepNumber: {
              width: 28,
              height: 28,
              borderRadius: 6,
              background: backgroundColor,
              color: textSecondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 2
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.03em'
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary,
              lineHeight: 1.5
            },
            outputCard: {
              gridColumn: '1 / -1',
              background: cardBackground,
              borderRadius: borderRadius,
              padding: padding,
              boxShadow: `0 4px 12px ${primaryColor}15`,
              border: `1px solid ${primaryColor}20`
            },
            outputGrid: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: padding,
              marginTop: 8
            },
            outputItem: {
              background: `${primaryColor}08`,
              padding: padding,
              borderRadius: borderRadius - 2,
              textAlign: 'center'
            },
            outputLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase'
            },
            outputValue: {
              fontSize: fontSize + 6,
              color: primaryColor,
              fontWeight: '500',
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              marginTop: 4
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 8. COMPACT DENSE - Tight single-line row
        // ─────────────────────────────────────────────────────────────
        'compact-dense': {
          container: {
            background: cardBackground,
            borderRadius: borderRadius,
            border: `1px solid ${borderColor}`,
            overflow: 'hidden'
          },
          outer: {
            row: {
              display: 'flex',
              alignItems: 'center',
              padding: `${padding * 0.75}px ${padding}px`,
              gap: gap,
              cursor: 'pointer',
              transition: baseTransition,
              background: isHovered ? backgroundColor : 'transparent',
              borderBottom: `1px solid ${borderColor}`
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize - 1,
              color: primaryColor,
              minWidth: 50
            },
            separator: {
              color: borderColor,
              fontSize: fontSize - 2
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary,
              minWidth: 60
            },
            element: {
              fontSize: fontSize - 1,
              color: textPrimary,
              flex: 1
            },
            statusDot: {
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: getStatusColor(ruleStatus)
            },
            chevron: {
              width: 14,
              height: 14,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              padding: `${padding * 0.75}px ${padding}px`,
              background: backgroundColor
            },
            inlineGroup: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: `${gap * 0.5}px ${gap * 1.5}px`
            },
            inlineItem: {
              display: 'flex',
              alignItems: 'center',
              gap: 6
            },
            label: {
              fontSize: fontSize - 2,
              color: textSecondary
            },
            value: {
              fontSize: fontSize - 1,
              color: textPrimary,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            },
            outputValue: {
              color: primaryColor,
              fontWeight: '500'
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 9. MATERIAL SHEETS - Material elevation style
        // ─────────────────────────────────────────────────────────────
        'material-sheets': {
          container: {
            background: backgroundColor
          },
          outer: {
            row: {
              background: cardBackground,
              padding: padding,
              cursor: 'pointer',
              transition: baseTransition,
              boxShadow: isHovered ? '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: gap * 1.5,
              marginBottom: 2
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize + 2,
              fontWeight: '500',
              color: primaryColor,
              minWidth: 60
            },
            category: {
              fontSize: fontSize - 1,
              color: cardBackground,
              background: textSecondary,
              padding: '4px 12px',
              borderRadius: 2
            },
            element: {
              fontSize: fontSize,
              color: textPrimary,
              flex: 1
            },
            status: {
              fontSize: fontSize - 1,
              color: getStatusColor(ruleStatus),
              fontWeight: '500'
            },
            chevron: {
              width: 20,
              height: 20,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              marginTop: 2
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            },
            stepCard: {
              display: 'flex',
              alignItems: 'center',
              gap: gap,
              padding: padding
            },
            stepBg1: {
              background: `${primaryColor}08`
            },
            stepBg2: {
              background: `${primaryColor}05`
            },
            stepNumber: {
              width: 32,
              height: 32,
              borderRadius: 2,
              background: cardBackground,
              color: textSecondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 1,
              fontWeight: '500'
            },
            stepLabel: {
              fontSize: fontSize - 1,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              minWidth: 120
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary,
              flex: 1
            },
            outputCard: {
              background: primaryColor,
              padding: padding,
              display: 'flex',
              alignItems: 'center',
              gap: gap
            },
            outputNumber: {
              width: 32,
              height: 32,
              borderRadius: 2,
              background: `${cardBackground}20`,
              color: cardBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 1,
              fontWeight: '500'
            },
            outputLabel: {
              fontSize: fontSize - 1,
              color: `${cardBackground}90`,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              minWidth: 120
            },
            outputValues: {
              display: 'flex',
              gap: padding,
              flex: 1
            },
            outputItem: {
              display: 'flex',
              alignItems: 'baseline',
              gap: 8
            },
            outputItemLabel: {
              fontSize: fontSize - 2,
              color: `${cardBackground}70`
            },
            outputValue: {
              fontSize: fontSize + 2,
              color: cardBackground,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: '500'
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 10. NOTION BLOCKS - Toggle triangle style
        // ─────────────────────────────────────────────────────────────
        'notion-blocks': {
          container: {
            background: cardBackground,
            padding: `0 ${padding}px`
          },
          outer: {
            row: {
              display: 'flex',
              alignItems: 'center',
              padding: `${padding * 0.75}px 0`,
              gap: gap,
              cursor: 'pointer',
              transition: baseTransition,
              borderRadius: borderRadius - 4,
              margin: `0 -${padding * 0.5}px`,
              paddingLeft: padding * 0.5,
              paddingRight: padding * 0.5
            },
            triangle: {
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: `6px solid ${textSecondary}`,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(90deg)',
              flexShrink: 0
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize,
              color: primaryColor,
              padding: '2px 6px',
              background: `${primaryColor}10`,
              borderRadius: 4
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary
            },
            element: {
              fontSize: fontSize,
              color: textPrimary,
              flex: 1
            },
            status: {
              fontSize: fontSize - 2,
              padding: '2px 8px',
              borderRadius: 4,
              background: `${getStatusColor(ruleStatus)}15`,
              color: getStatusColor(ruleStatus)
            }
          },
          inner: {
            container: {
              paddingLeft: 22,
              paddingBottom: padding,
              borderLeft: `2px solid ${primaryColor}30`,
              marginLeft: 4
            },
            meta: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: `${gap * 0.5}px ${gap}px`,
              marginBottom: padding,
              paddingTop: padding * 0.5
            },
            metaItem: {
              fontSize: fontSize - 1,
              color: textSecondary
            },
            metaValue: {
              color: textPrimary
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: gap * 0.75
            },
            stepCard: {
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8
            },
            stepBullet: {
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: borderColor,
              marginTop: 7,
              flexShrink: 0
            },
            stepContent: {
              flex: 1
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              display: 'inline'
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary,
              display: 'inline',
              marginLeft: 6
            },
            outputCard: {
              background: `${primaryColor}08`,
              borderRadius: borderRadius - 2,
              padding: padding,
              marginTop: gap,
              borderLeft: `3px solid ${primaryColor}`
            },
            outputBullet: {
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: primaryColor,
              marginTop: 7,
              flexShrink: 0
            },
            outputGrid: {
              display: 'flex',
              gap: padding,
              marginTop: 4
            },
            outputItem: {},
            outputLabel: {
              fontSize: fontSize - 2,
              color: textSecondary
            },
            outputValue: {
              fontSize: fontSize,
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 11. TERMINAL CLI - Dark console aesthetic
        // ─────────────────────────────────────────────────────────────
        'terminal-cli': {
          container: {
            background: '#222222',
            borderRadius: borderRadius,
            overflow: 'hidden',
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          },
          outer: {
            titleBar: {
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: `${padding * 0.75}px ${padding}px`,
              background: '#333333',
              borderBottom: '1px solid #444444'
            },
            trafficLights: {
              display: 'flex',
              gap: 6
            },
            trafficLight: {
              width: 10,
              height: 10,
              borderRadius: '50%'
            },
            row: {
              display: 'flex',
              alignItems: 'center',
              padding: `${padding}px`,
              gap: gap,
              cursor: 'pointer',
              transition: baseTransition,
              background: isHovered ? '#222222' : 'transparent'
            },
            prompt: {
              color: '#999999',
              fontSize: fontSize
            },
            command: {
              color: '#aaaaaa',
              fontSize: fontSize,
              flex: 1
            },
            id: {
              color: '#999999',
              fontSize: fontSize
            },
            category: {
              color: '#bbbbbb',
              fontSize: fontSize
            },
            element: {
              color: '#ffffff',
              fontSize: fontSize
            },
            status: {
              color: getStatusColor(ruleStatus),
              fontSize: fontSize
            },
            chevron: {
              width: 16,
              height: 16,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: '#777777'
            }
          },
          inner: {
            container: {
              padding: `0 ${padding}px ${padding}px`
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            stepCard: {
              display: 'flex',
              gap: gap,
              padding: `${padding * 0.5}px 0`
            },
            stepPrompt: {
              color: '#777777',
              fontSize: fontSize,
              minWidth: 24
            },
            stepLabel: {
              color: '#aaaaaa',
              fontSize: fontSize,
              minWidth: 140
            },
            stepValue: {
              color: '#ffffff',
              fontSize: fontSize
            },
            outputCard: {
              background: '#333333',
              borderRadius: borderRadius - 4,
              padding: padding,
              marginTop: gap,
              border: '1px solid #444444'
            },
            outputHeader: {
              color: '#999999',
              fontSize: fontSize,
              marginBottom: 8
            },
            outputGrid: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            outputItem: {
              display: 'flex',
              gap: gap
            },
            outputLabel: {
              color: '#777777',
              fontSize: fontSize,
              minWidth: 80
            },
            outputValue: {
              color: '#999999',
              fontSize: fontSize
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 12. DASHBOARD TILES - Large metric hero with 4-col tiles
        // ─────────────────────────────────────────────────────────────
        'dashboard-tiles': {
          container: {
            background: backgroundColor,
            borderRadius: borderRadius,
            padding: padding / 2
          },
          outer: {
            row: {
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}DD 100%)`,
              borderRadius: borderRadius,
              padding: padding * 1.5,
              cursor: 'pointer',
              transition: baseTransition,
              color: cardBackground,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
            },
            header: {
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between'
            },
            idSection: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            id: {
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: fontSize + 20,
              fontWeight: '300',
              color: cardBackground,
              lineHeight: 1
            },
            idLabel: {
              fontSize: fontSize - 2,
              color: `${cardBackground}80`,
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            },
            meta: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 8
            },
            status: {
              fontSize: fontSize - 1,
              padding: '4px 12px',
              borderRadius: 20,
              background: `${cardBackground}20`,
              color: cardBackground
            },
            chevron: {
              width: 24,
              height: 24,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: cardBackground
            },
            footer: {
              display: 'flex',
              alignItems: 'center',
              gap: gap * 2,
              marginTop: padding,
              paddingTop: padding,
              borderTop: `1px solid ${cardBackground}20`
            },
            footerItem: {
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            },
            footerLabel: {
              fontSize: fontSize - 2,
              color: `${cardBackground}70`,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            footerValue: {
              fontSize: fontSize,
              color: cardBackground
            }
          },
          inner: {
            container: {
              padding: `${padding}px 0 0`
            },
            tilesGrid: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: gap
            },
            tile: {
              background: cardBackground,
              borderRadius: borderRadius - 2,
              padding: padding,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
            },
            tileNumber: {
              width: 24,
              height: 24,
              borderRadius: 4,
              background: backgroundColor,
              color: textSecondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 2,
              marginBottom: 8
            },
            tileLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              marginBottom: 4
            },
            tileValue: {
              fontSize: fontSize,
              color: textPrimary,
              lineHeight: 1.4
            },
            outputTile: {
              gridColumn: '1 / -1',
              background: `linear-gradient(135deg, ${primaryColor}10 0%, ${primaryColor}05 100%)`,
              borderRadius: borderRadius - 2,
              padding: padding,
              border: `1px solid ${primaryColor}20`
            },
            outputHeader: {
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: padding
            },
            outputNumber: {
              width: 24,
              height: 24,
              borderRadius: 4,
              background: primaryColor,
              color: cardBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize - 2
            },
            outputLabel: {
              fontSize: fontSize - 2,
              color: primaryColor,
              textTransform: 'uppercase',
              letterSpacing: '0.03em'
            },
            outputGrid: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: padding
            },
            outputItem: {
              background: cardBackground,
              padding: padding,
              borderRadius: borderRadius - 4,
              textAlign: 'center'
            },
            outputItemLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              marginBottom: 4
            },
            outputValue: {
              fontSize: fontSize + 8,
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: '500'
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 13. ACADEMIC GRID - Editorial program list style
        // ─────────────────────────────────────────────────────────────
        'academic-grid': {
          container: {
            background: '#eeeeee'
          },
          outer: {
            row: {
              display: 'grid',
              gridTemplateColumns: '1.5fr 100px 1fr 140px',
              alignItems: 'start',
              padding: `${padding * 1.25}px 0`,
              borderBottom: `1px solid ${borderColor}`,
              cursor: 'pointer',
              transition: baseTransition,
              background: isHovered ? `${cardBackground}80` : 'transparent',
              gap: padding
            },
            title: {
              fontSize: fontSize + 10,
              fontWeight: '500',
              color: textPrimary,
              letterSpacing: '-0.02em'
            },
            duration: {
              fontSize: fontSize,
              color: textSecondary,
              fontStyle: 'italic'
            },
            facultySection: {
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            },
            facultyLabel: {
              fontSize: fontSize - 1,
              fontWeight: '500',
              color: textPrimary
            },
            facultyName: {
              fontSize: fontSize - 1,
              color: textSecondary,
              fontStyle: 'italic'
            },
            link: {
              fontSize: fontSize - 1,
              color: textPrimary,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4
            },
            chevron: {
              width: 16,
              height: 16,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary,
              opacity: 0
            }
          },
          inner: {
            container: {
              padding: `${padding}px 0`,
              background: cardBackground,
              marginTop: -1
            },
            grid: {
              display: 'grid',
              gridTemplateColumns: '1.5fr 100px 1fr 140px',
              gap: padding
            },
            stepCard: {
              gridColumn: '1 / -1',
              display: 'grid',
              gridTemplateColumns: '1.5fr 100px 1fr 140px',
              gap: padding,
              padding: `${padding * 0.75}px 0`,
              borderBottom: `1px solid ${borderColor}`
            },
            stepLabel: {
              fontSize: fontSize - 1,
              color: textSecondary,
              fontStyle: 'italic'
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            outputCard: {
              gridColumn: '1 / -1',
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: padding,
              padding: `${padding}px 0`,
              background: `${primaryColor}05`,
              marginTop: padding
            },
            outputLabel: {
              fontSize: fontSize - 1,
              fontWeight: '500',
              color: textPrimary
            },
            outputValue: {
              fontSize: fontSize + 4,
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 14. PORTFOLIO BOLD - Large typography with client badges
        // ─────────────────────────────────────────────────────────────
        'portfolio-bold': {
          container: {
            background: cardBackground,
            padding: `0 ${padding * 1.5}px`
          },
          outer: {
            row: {
              paddingTop: padding * 1.5,
              paddingBottom: padding * 1.5,
              borderTop: `1px solid ${borderColor}`,
              cursor: 'pointer',
              transition: baseTransition
            },
            header: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: padding
            },
            title: {
              fontSize: fontSize + 20,
              fontWeight: '500',
              color: textPrimary,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              lineHeight: 1.1
            },
            rightSection: {
              display: 'flex',
              alignItems: 'center',
              gap: padding
            },
            badge: {
              fontSize: fontSize - 1,
              color: textSecondary,
              padding: '6px 16px',
              border: `1px solid ${borderColor}`,
              borderRadius: 20,
              background: cardBackground,
              whiteSpace: 'nowrap'
            },
            chevron: {
              width: 20,
              height: 20,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              paddingBottom: padding * 1.5,
              borderBottom: `1px solid ${borderColor}`
            },
            meta: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: padding * 2,
              marginBottom: padding * 1.5
            },
            metaItem: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            metaLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            },
            metaValue: {
              fontSize: fontSize + 1,
              color: textPrimary,
              fontWeight: '400'
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: padding * 0.75
            },
            stepCard: {
              display: 'grid',
              gridTemplateColumns: '40px 160px 1fr',
              alignItems: 'baseline',
              padding: `${padding * 0.5}px 0`
            },
            stepNumber: {
              fontSize: fontSize,
              color: textSecondary,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            },
            stepLabel: {
              fontSize: fontSize - 1,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            stepValue: {
              fontSize: fontSize + 1,
              color: textPrimary,
              fontWeight: '400'
            },
            outputCard: {
              marginTop: padding * 1.5,
              paddingTop: padding * 1.5,
              borderTop: `1px solid ${borderColor}`
            },
            outputGrid: {
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 140px)',
              gap: padding * 2
            },
            outputItem: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            outputLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            },
            outputValue: {
              fontSize: fontSize + 18,
              color: primaryColor,
              fontWeight: '400',
              fontStyle: 'italic',
              letterSpacing: '-0.02em'
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 15. SPECS MINIMAL - Clean two-column technical specs
        // ─────────────────────────────────────────────────────────────
        'specs-minimal': {
          container: {
            background: cardBackground,
            border: `1px solid ${borderColor}`,
            borderRadius: borderRadius
          },
          outer: {
            row: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: `${padding}px ${padding * 1.5}px`,
              borderBottom: `1px solid ${borderColor}`,
              cursor: 'pointer',
              transition: baseTransition,
              background: isHovered ? backgroundColor : 'transparent'
            },
            left: {
              display: 'flex',
              alignItems: 'center',
              gap: padding * 2
            },
            id: {
              fontSize: fontSize,
              color: textPrimary,
              fontWeight: '400'
            },
            category: {
              fontSize: fontSize,
              color: textSecondary
            },
            right: {
              display: 'flex',
              alignItems: 'center',
              gap: padding * 2
            },
            element: {
              fontSize: fontSize,
              color: textPrimary
            },
            status: {
              fontSize: fontSize,
              color: getStatusColor(ruleStatus)
            },
            chevron: {
              width: 16,
              height: 16,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              borderBottom: `1px solid ${borderColor}`
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column'
            },
            stepCard: {
              display: 'flex',
              padding: `${padding}px ${padding * 1.5}px`,
              borderBottom: `1px solid ${borderColor}`
            },
            stepLabel: {
              fontSize: fontSize,
              color: textSecondary,
              width: '40%'
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary,
              width: '60%'
            },
            outputCard: {
              display: 'flex',
              padding: `${padding}px ${padding * 1.5}px`,
              background: backgroundColor
            },
            outputLabel: {
              fontSize: fontSize,
              color: textSecondary,
              width: '40%'
            },
            outputValues: {
              width: '60%',
              display: 'flex',
              gap: padding * 2
            },
            outputValue: {
              fontSize: fontSize,
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            },
            outputValueLabel: {
              fontSize: fontSize - 2,
              color: textSecondary
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 16. PRICING STACK - Vertical stacked metrics with labels
        // ─────────────────────────────────────────────────────────────
        'pricing-stack': {
          container: {
            background: cardBackground,
            padding: padding
          },
          outer: {
            row: {
              padding: `${padding}px 0`,
              borderBottom: `1px solid ${borderColor}`,
              cursor: 'pointer',
              transition: baseTransition
            },
            header: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            },
            titleSection: {
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            },
            label: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '500'
            },
            title: {
              fontSize: fontSize + 4,
              color: textPrimary,
              fontWeight: '400'
            },
            meta: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 4
            },
            category: {
              fontSize: fontSize - 1,
              color: textSecondary
            },
            status: {
              fontSize: fontSize - 2,
              color: getStatusColor(ruleStatus),
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            chevron: {
              width: 16,
              height: 16,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary,
              marginTop: 4
            }
          },
          inner: {
            container: {
              padding: `${padding * 1.5}px 0`
            },
            stepsContainer: {
              display: 'flex',
              flexDirection: 'column',
              gap: padding * 1.5
            },
            stepCard: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '500'
            },
            stepValue: {
              fontSize: fontSize + 2,
              color: textPrimary,
              lineHeight: 1.4
            },
            outputCard: {
              marginTop: padding,
              paddingTop: padding * 1.5,
              borderTop: `1px solid ${borderColor}`,
              display: 'flex',
              flexDirection: 'column',
              gap: padding * 1.5
            },
            outputItem: {
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            },
            outputLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '500'
            },
            outputValue: {
              fontSize: fontSize + 12,
              color: textPrimary,
              fontWeight: '400',
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              letterSpacing: '-0.02em'
            }
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 17. METRICS DASHBOARD - Large hero metrics with badges
        // ─────────────────────────────────────────────────────────────
        'metrics-dashboard': {
          container: {
            background: cardBackground,
            borderRadius: borderRadius,
            border: `1px solid ${borderColor}`,
            overflow: 'hidden'
          },
          outer: {
            row: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              borderBottom: `1px solid ${borderColor}`,
              cursor: 'pointer',
              transition: baseTransition
            },
            metricBox: {
              padding: padding * 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: padding,
              borderRight: `1px solid ${borderColor}`
            },
            metricBoxLast: {
              padding: padding * 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: padding
            },
            metricContent: {
              flex: 1
            },
            metricLabel: {
              fontSize: fontSize - 1,
              color: textSecondary,
              marginBottom: 4
            },
            metricValue: {
              fontSize: fontSize + 16,
              fontWeight: '400',
              color: textPrimary,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              letterSpacing: '-0.02em'
            },
            metricIcon: {
              width: 48,
              height: 48,
              border: `1px solid ${borderColor}`,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20
            },
            chevron: {
              width: 20,
              height: 20,
              transition: baseTransition,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: textSecondary
            }
          },
          inner: {
            container: {
              padding: padding * 1.5,
              background: backgroundColor
            },
            metricsRow: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: padding,
              marginBottom: padding * 1.5
            },
            metricCard: {
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            },
            metricHeader: {
              display: 'flex',
              alignItems: 'center',
              gap: 8
            },
            metricName: {
              fontSize: fontSize - 1,
              color: textSecondary
            },
            badge: {
              fontSize: fontSize - 3,
              padding: '2px 8px',
              borderRadius: 4,
              fontWeight: '500'
            },
            badgeUp: {
              background: `${successColor}15`,
              color: successColor
            },
            badgeDown: {
              background: `${errorColor}15`,
              color: errorColor
            },
            badgeNeutral: {
              background: backgroundColor,
              color: textSecondary
            },
            metricValueSmall: {
              fontSize: fontSize + 8,
              color: textPrimary,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            },
            metricUnit: {
              fontSize: fontSize - 1,
              color: textSecondary,
              marginLeft: 2
            },
            stepsContainer: {
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: padding,
              paddingTop: padding,
              borderTop: `1px solid ${borderColor}`
            },
            stepCard: {
              background: cardBackground,
              padding: padding,
              borderRadius: borderRadius - 2
            },
            stepLabel: {
              fontSize: fontSize - 2,
              color: textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 4
            },
            stepValue: {
              fontSize: fontSize,
              color: textPrimary
            },
            outputCard: {
              gridColumn: '1 / -1',
              background: `${primaryColor}08`,
              padding: padding,
              borderRadius: borderRadius - 2,
              border: `1px solid ${primaryColor}20`
            },
            outputHeader: {
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 8
            },
            outputBadge: {
              fontSize: fontSize - 3,
              padding: '2px 8px',
              borderRadius: 4,
              background: primaryColor,
              color: cardBackground,
              fontWeight: '500'
            },
            outputLabel: {
              fontSize: fontSize - 2,
              color: primaryColor,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            },
            outputGrid: {
              display: 'flex',
              gap: padding * 2
            },
            outputItem: {},
            outputItemLabel: {
              fontSize: fontSize - 2,
              color: textSecondary
            },
            outputValue: {
              fontSize: fontSize + 4,
              color: primaryColor,
              fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: '500'
            }
          }
        }
      };
      return presets[preset] || presets['modern-cards'];
    };
    const styles = getPresetStyles();

    // ═══════════════════════════════════════════════════════════════
    // CHEVRON SVG COMPONENT
    // ═══════════════════════════════════════════════════════════════

    const ChevronIcon = ({
      style
    }) => /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: style
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }));

    // ═══════════════════════════════════════════════════════════════
    // RENDER OUTER ROW (COLLAPSED STATE)
    // ═══════════════════════════════════════════════════════════════

    const renderOuterRow = () => {
      const s = styles.outer;
      switch (preset) {
        case 'data-table':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.cell
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.cell
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.cell
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.cell
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.cell,
              borderRight: 'none',
              justifyContent: 'center'
            }
          }, /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          })));
        case 'kanban-style':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.dragHandle
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              width: 12,
              height: 2,
              background: 'currentColor',
              borderRadius: 1
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              width: 12,
              height: 2,
              background: 'currentColor',
              borderRadius: 1
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              width: 12,
              height: 2,
              background: 'currentColor',
              borderRadius: 1
            }
          })), /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          }));
        case 'timeline-flow':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          }))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: {
              color: borderColor
            }
          }, "→"), /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement)));
        case 'split-panel':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.sidebar
          }, /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("div", {
            style: s.statusDot
          })), /*#__PURE__*/React.createElement("div", {
            style: s.main
          }, /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          })));
        case 'compact-dense':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.separator
          }, "|"), /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.separator
          }, "|"), /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.statusDot
          }), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          }));
        case 'notion-blocks':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.triangle
          }), /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus));
        case 'terminal-cli':
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            style: s.titleBar
          }, /*#__PURE__*/React.createElement("div", {
            style: s.trafficLights
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.trafficLight,
              background: '#888888'
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.trafficLight,
              background: '#bbbbbb'
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.trafficLight,
              background: '#999999'
            }
          })), /*#__PURE__*/React.createElement("span", {
            style: {
              color: '#777777',
              fontSize: fontSize - 2
            }
          }, "rule-viewer")), /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.prompt
          }, "$"), /*#__PURE__*/React.createElement("span", {
            style: s.command
          }, "cat"), /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, "[", ruleStatus, "]"), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          })));
        case 'dashboard-tiles':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.idSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.idLabel
          }, "Rule ID")), /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          }))), /*#__PURE__*/React.createElement("div", {
            style: s.footer
          }, /*#__PURE__*/React.createElement("div", {
            style: s.footerItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.footerLabel
          }, "Category"), /*#__PURE__*/React.createElement("span", {
            style: s.footerValue
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.footerItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.footerLabel
          }, "Element"), /*#__PURE__*/React.createElement("span", {
            style: s.footerValue
          }, ruleElement))));
        default:
          // modern-cards, minimal-lines, floating-panels, material-sheets
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, preset === 'floating-panels' && /*#__PURE__*/React.createElement("div", {
            style: s.divider
          }), /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), preset === 'floating-panels' && /*#__PURE__*/React.createElement("div", {
            style: s.divider
          }), /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          }));
        case 'academic-grid':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.duration
          }, ruleCategory), /*#__PURE__*/React.createElement("div", {
            style: s.facultySection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.facultyLabel
          }, "Rule ID"), /*#__PURE__*/React.createElement("span", {
            style: s.facultyName
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.facultyName
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.link
          }, "View details"), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          })));
        case 'portfolio-bold':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.rightSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.badge
          }, ruleCategory), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          }))));
        case 'specs-minimal':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.left
          }, /*#__PURE__*/React.createElement("span", {
            style: s.id
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.right
          }, /*#__PURE__*/React.createElement("span", {
            style: s.element
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          })));
        case 'pricing-stack':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.titleSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "Rule Element"), /*#__PURE__*/React.createElement("span", {
            style: s.title
          }, ruleElement)), /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory, " · ", ruleId), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          })))));
        case 'metrics-dashboard':
          return /*#__PURE__*/React.createElement("div", {
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricBox
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricLabel
          }, "Rule ID"), /*#__PURE__*/React.createElement("div", {
            style: s.metricValue
          }, ruleId)), /*#__PURE__*/React.createElement("div", {
            style: s.metricIcon
          }, "📋")), /*#__PURE__*/React.createElement("div", {
            style: s.metricBoxLast
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricLabel
          }, "Status"), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.metricValue,
              color: getStatusColor(ruleStatus)
            }
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.metricIcon,
              borderColor: getStatusColor(ruleStatus)
            }
          }, ruleStatus === 'Active' ? '✓' : ruleStatus === 'Inactive' ? '✕' : '◐'), /*#__PURE__*/React.createElement(ChevronIcon, {
            style: s.chevron
          })));
      }
    };

    // ═══════════════════════════════════════════════════════════════
    // RENDER INNER CONTENT (EXPANDED STATE)
    // ═══════════════════════════════════════════════════════════════

    const renderInnerContent = () => {
      const s = styles.inner;
      switch (preset) {
        case 'data-table':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metaCell
          }, "ID"), /*#__PURE__*/React.createElement("div", {
            style: s.metaCell
          }, "Category"), /*#__PURE__*/React.createElement("div", {
            style: s.metaCell
          }, "Element"), /*#__PURE__*/React.createElement("div", {
            style: s.metaCell
          }, "Status"), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.metaCell,
              borderRight: 'none'
            }
          })), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: {
              ...s.stepCard,
              ...(step.isOutput ? s.outputCard : {})
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepCell
          }, showStepNumbers && /*#__PURE__*/React.createElement("span", {
            style: s.stepNumber
          }, "[", step.num, "]")), /*#__PURE__*/React.createElement("div", {
            style: s.stepCell
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, step.label)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.stepCell,
              gridColumn: step.isOutput ? 'span 3' : 'span 1'
            }
          }, step.isOutput ? /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, "W: ", step.width, " | H: ", step.height) : /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value)), !step.isOutput && /*#__PURE__*/React.createElement("div", {
            style: s.stepCell
          }), !step.isOutput && /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.stepCell,
              borderRight: 'none'
            }
          })))));
        case 'timeline-flow':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.timeline
          }), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("div", {
            style: step.isOutput ? s.outputDot : s.stepDot
          }, showStepNumbers && step.num), /*#__PURE__*/React.createElement("div", {
            style: step.isOutput ? s.outputCard : s.stepContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepLabel
          }, step.label), step.isOutput ? /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.height))) : /*#__PURE__*/React.createElement("div", {
            style: s.stepValue
          }, step.value))))));
        case 'split-panel':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.navSidebar
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: {
              ...s.navItem,
              ...(idx === 0 ? s.navItemActive : {})
            }
          }, showStepNumbers ? `[${step.num}]` : step.label.slice(0, 4)))), /*#__PURE__*/React.createElement("div", {
            style: s.mainContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metaItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, "ID"), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleId)), /*#__PURE__*/React.createElement("div", {
            style: s.metaItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, "Category"), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.metaItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, "Element"), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleElement)), /*#__PURE__*/React.createElement("div", {
            style: s.metaItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, "Status"), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleStatus))), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: step.isOutput ? s.outputCard : s.stepCard
          }, showStepNumbers && /*#__PURE__*/React.createElement("div", {
            style: s.stepNumber
          }, step.num), /*#__PURE__*/React.createElement("div", {
            style: s.stepContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepLabel
          }, step.label), step.isOutput ? /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.height))) : /*#__PURE__*/React.createElement("div", {
            style: s.stepValue
          }, step.value)))))));
        case 'floating-panels':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: step.isOutput ? s.outputCard : s.stepCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepHeader
          }, showStepNumbers && /*#__PURE__*/React.createElement("div", {
            style: s.stepNumber
          }, step.num), /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, step.label)), step.isOutput ? /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.height))) : /*#__PURE__*/React.createElement("div", {
            style: s.stepValue
          }, step.value))));
        case 'compact-dense':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.inlineGroup
          }, /*#__PURE__*/React.createElement("div", {
            style: s.inlineItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "ID:"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, ruleId)), /*#__PURE__*/React.createElement("div", {
            style: s.inlineItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "Cat:"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.inlineItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "Elem:"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, ruleElement)), steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.inlineItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label.slice(0, 6), ":"), step.isOutput ? /*#__PURE__*/React.createElement("span", {
            style: {
              ...s.value,
              ...s.outputValue
            }
          }, step.width, " × ", step.height) : /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))));
        case 'material-sheets':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => step.isOutput ? /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.outputCard
          }, showStepNumbers && /*#__PURE__*/React.createElement("div", {
            style: s.outputNumber
          }, step.num), /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, step.label), /*#__PURE__*/React.createElement("div", {
            style: s.outputValues
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputItemLabel
          }, "W:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputItemLabel
          }, "H:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, step.height)))) : /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: {
              ...s.stepCard,
              ...(idx % 2 === 0 ? s.stepBg1 : s.stepBg2)
            }
          }, showStepNumbers && /*#__PURE__*/React.createElement("div", {
            style: s.stepNumber
          }, step.num), /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, step.label), /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value)))));
        case 'notion-blocks':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaItem
          }, "ID: ", /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleId)), /*#__PURE__*/React.createElement("span", {
            style: s.metaItem
          }, "Category: ", /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleCategory)), /*#__PURE__*/React.createElement("span", {
            style: s.metaItem
          }, "Element: ", /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleElement)), /*#__PURE__*/React.createElement("span", {
            style: s.metaItem
          }, "Status: ", /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleStatus))), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: step.isOutput ? s.outputCard : s.stepCard
          }, /*#__PURE__*/React.createElement("div", {
            style: step.isOutput ? s.outputBullet : s.stepBullet
          }), /*#__PURE__*/React.createElement("div", {
            style: s.stepContent
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, showStepNumbers && `[${step.num}] `, step.label, ":"), step.isOutput ? /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.height))) : /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value))))));
        case 'terminal-cli':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepPrompt
          }, showStepNumbers ? `[${step.num}]` : '>'), /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, step.label, ":"), step.isOutput ? /*#__PURE__*/React.createElement("span", {
            style: {
              ...s.stepValue,
              color: '#999999'
            }
          }, "width=", step.width, " height=", step.height) : /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputHeader
          }, "// Output values"), /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "width:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "height:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight)))));
        case 'dashboard-tiles':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.tilesGrid
          }, steps.filter(s => !s.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.tile
          }, showStepNumbers && /*#__PURE__*/React.createElement("div", {
            style: s.tileNumber
          }, step.num), /*#__PURE__*/React.createElement("div", {
            style: s.tileLabel
          }, step.label), /*#__PURE__*/React.createElement("div", {
            style: s.tileValue
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputTile
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputHeader
          }, showStepNumbers && /*#__PURE__*/React.createElement("div", {
            style: s.outputNumber
          }, "6"), /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Output")), /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItemLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItemLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight))))));
        case 'kanban-style':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaTag
          }, "ID: ", ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.metaTag
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.metaTag
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.metaTag
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: step.isOutput ? s.outputCard : s.stepCard
          }, showStepNumbers && /*#__PURE__*/React.createElement("span", {
            style: s.stepNumber
          }, step.num), /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, step.label), step.isOutput ? /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.height))) : /*#__PURE__*/React.createElement("div", {
            style: s.stepValue
          }, step.value)))));
        case 'academic-grid':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => step.isOutput ? /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.outputCard
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Output Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Output Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.height))) : /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value), /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, showStepNumbers ? `Step ${step.num}` : ''), /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, step.label), /*#__PURE__*/React.createElement("span", null)))));
        case 'portfolio-bold':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metaItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, "Rule ID"), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleId)), /*#__PURE__*/React.createElement("div", {
            style: s.metaItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, "Category"), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.metaItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, "Status"), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, ruleStatus))), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepNumber
          }, showStepNumbers ? `[${step.num}]` : ''), /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, step.label), /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight)))));
        case 'specs-minimal':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputCard
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Output"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValues
          }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
            style: s.outputValueLabel
          }, "W: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
            style: s.outputValueLabel
          }, "H: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))))));
        case 'pricing-stack':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, showStepNumbers ? `Step ${step.num}: ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Output Width"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Output Height"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))));
        case 'metrics-dashboard':
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricsRow
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricHeader
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metricName
          }, "Category"), /*#__PURE__*/React.createElement("span", {
            style: {
              ...s.badge,
              ...s.badgeNeutral
            }
          }, "info")), /*#__PURE__*/React.createElement("span", {
            style: s.metricValueSmall
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.metricCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricHeader
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metricName
          }, "Element"), /*#__PURE__*/React.createElement("span", {
            style: {
              ...s.badge,
              ...s.badgeUp
            }
          }, "↑ active")), /*#__PURE__*/React.createElement("span", {
            style: s.metricValueSmall
          }, ruleElement)), /*#__PURE__*/React.createElement("div", {
            style: s.metricCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricHeader
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metricName
          }, "Condition"), /*#__PURE__*/React.createElement("span", {
            style: {
              ...s.badge,
              ...s.badgeNeutral
            }
          }, "0%")), /*#__PURE__*/React.createElement("span", {
            style: s.metricValueSmall
          }, condition.slice(0, 15), "..."))), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepLabel
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("div", {
            style: s.stepValue
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputHeader
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputBadge
          }, "OUTPUT"), /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Final Values")), /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItemLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItemLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight))))));
        default:
          // modern-cards, minimal-lines
          return /*#__PURE__*/React.createElement("div", {
            style: s.container
          }, s.meta && /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, ['ID', 'Category', 'Element', 'Status'].map((label, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.metaItem || {}
          }, /*#__PURE__*/React.createElement("span", {
            style: s.metaLabel
          }, label), /*#__PURE__*/React.createElement("span", {
            style: s.metaValue
          }, label === 'ID' ? ruleId : label === 'Category' ? ruleCategory : label === 'Element' ? ruleElement : ruleStatus)))), /*#__PURE__*/React.createElement("div", {
            style: s.stepsContainer
          }, steps.map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: step.isOutput ? s.outputCard : s.stepCard
          }, showStepNumbers && (preset === 'minimal-lines' ? /*#__PURE__*/React.createElement("span", {
            style: s.stepNumber
          }, "[", step.num, "]") : /*#__PURE__*/React.createElement("div", {
            style: s.stepNumber
          }, step.num)), /*#__PURE__*/React.createElement("div", {
            style: s.stepContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.stepLabel
          }, step.label), step.isOutput ? /*#__PURE__*/React.createElement("div", {
            style: s.outputGrid
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.width)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, step.height))) : /*#__PURE__*/React.createElement("div", {
            style: s.stepValue
          }, step.value))))));
      }
    };

    // ═══════════════════════════════════════════════════════════════
    // MAIN RENDER
    // ═══════════════════════════════════════════════════════════════

    return /*#__PURE__*/React.createElement("div", {
      className: "rule-accordion-showcase",
      style: {
        fontFamily,
        fontSize,
        fontWeight,
        color: textPrimary,
        lineHeight: 1.5,
        ...styles.container
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setIsExpanded(!isExpanded),
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      role: "button",
      tabIndex: 0,
      "aria-expanded": isExpanded,
      "aria-label": `Rule ${ruleId}: ${ruleElement}. Click to ${isExpanded ? 'collapse' : 'expand'}`,
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }
    }, renderOuterRow()), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isExpanded ? '1fr' : '0fr',
        transition: `grid-template-rows ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, renderInnerContent())));
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};