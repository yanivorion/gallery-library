window.__GALLERY_MODULES__ = window.__GALLERY_MODULES__ || {};
window.__GALLERY_MODULES__["content-rulegridshowcase"] = function (React) {
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
   * Component Type: Content.RuleGridShowcase
   * ============================================================================
   */

  /*
  */

  const MANIFEST = {
    "type": "Content.RuleGridShowcase",
    "description": "17 distinct design presets for displaying rule/heuristic data in grid/card format. Designed for Mobile Algorithm Builder - rule display.",
    "editorElement": {
      "selector": ".rule-grid-showcase",
      "displayName": "Rule Grid Showcase",
      "archetype": "container",
      "data": {
        "preset": {
          "dataType": "select",
          "displayName": "Design Preset",
          "defaultValue": "modern-cards",
          "options": ["modern-cards", "minimal-lines", "data-table", "kanban-style", "timeline-flow", "split-panel", "floating-panels", "compact-dense", "material-sheets", "notion-blocks", "terminal-cli", "dashboard-tiles", "academic-grid", "portfolio-bold", "specs-minimal", "pricing-stack", "metrics-dashboard"],
          "group": "Content",
          "description": "Select one of 17 unique visual treatments"
        },
        "ruleId": {
          "dataType": "text",
          "displayName": "Rule ID",
          "defaultValue": "A001",
          "group": "Content"
        },
        "ruleCategory": {
          "dataType": "text",
          "displayName": "Category",
          "defaultValue": "Layout",
          "group": "Content"
        },
        "ruleElement": {
          "dataType": "text",
          "displayName": "Element",
          "defaultValue": "Repeaters",
          "group": "Content"
        },
        "ruleStatus": {
          "dataType": "select",
          "displayName": "Status",
          "defaultValue": "Active",
          "options": ["Active", "Inactive", "Draft"],
          "group": "Content"
        },
        "parentContainer": {
          "dataType": "text",
          "displayName": "Parent Container",
          "defaultValue": "Section > Strip",
          "group": "Content"
        },
        "condition": {
          "dataType": "text",
          "displayName": "Condition",
          "defaultValue": "Width > 80% viewport",
          "group": "Content"
        },
        "action": {
          "dataType": "text",
          "displayName": "Action",
          "defaultValue": "Stack vertically",
          "group": "Content"
        },
        "outputWidth": {
          "dataType": "text",
          "displayName": "Output Width",
          "defaultValue": "100%",
          "group": "Content"
        },
        "outputHeight": {
          "dataType": "text",
          "displayName": "Output Height",
          "defaultValue": "auto",
          "group": "Content"
        },
        "showStepNumbers": {
          "dataType": "booleanValue",
          "displayName": "Show Step Numbers",
          "defaultValue": true,
          "group": "Content"
        },
        "showAllSteps": {
          "dataType": "booleanValue",
          "displayName": "Show All Steps",
          "defaultValue": true,
          "group": "Content",
          "description": "Show all step details or condensed view"
        },
        "primaryColor": {
          "dataType": "color",
          "displayName": "Primary/Accent Color",
          "defaultValue": "#777777",
          "group": "Colors"
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
        "textPrimary": {
          "dataType": "color",
          "displayName": "Primary Text",
          "defaultValue": "#222222",
          "group": "Colors"
        },
        "textSecondary": {
          "dataType": "color",
          "displayName": "Secondary Text",
          "defaultValue": "#777777",
          "group": "Colors"
        },
        "borderColor": {
          "dataType": "color",
          "displayName": "Border Color",
          "defaultValue": "#eeeeee",
          "group": "Colors"
        },
        "successColor": {
          "dataType": "color",
          "displayName": "Success/Active Color",
          "defaultValue": "#999999",
          "group": "Colors"
        },
        "warningColor": {
          "dataType": "color",
          "displayName": "Warning/Draft Color",
          "defaultValue": "#aaaaaa",
          "group": "Colors"
        },
        "errorColor": {
          "dataType": "color",
          "displayName": "Error/Inactive Color",
          "defaultValue": "#666666",
          "group": "Colors"
        },
        "fontFamily": {
          "dataType": "select",
          "displayName": "Font Family",
          "defaultValue": "system-ui, -apple-system, sans-serif",
          "options": ["system-ui, -apple-system, sans-serif", "'SF Pro Display', system-ui, sans-serif", "'Inter', sans-serif", "'JetBrains Mono', monospace"],
          "group": "Typography"
        },
        "fontSize": {
          "dataType": "number",
          "displayName": "Base Font Size (px)",
          "defaultValue": 14,
          "group": "Typography"
        },
        "fontWeight": {
          "dataType": "select",
          "displayName": "Body Font Weight",
          "defaultValue": "400",
          "options": ["300", "400", "500"],
          "group": "Typography"
        },
        "borderRadius": {
          "dataType": "select",
          "displayName": "Border Radius",
          "defaultValue": "8",
          "options": ["0", "4", "6", "8", "12", "16"],
          "group": "Layout"
        },
        "padding": {
          "dataType": "select",
          "displayName": "Content Padding",
          "defaultValue": "16",
          "options": ["8", "12", "16", "20", "24"],
          "group": "Layout"
        },
        "gap": {
          "dataType": "select",
          "displayName": "Element Gap",
          "defaultValue": "12",
          "options": ["8", "10", "12", "16", "20"],
          "group": "Layout"
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
    const showStepNumbers = config?.showStepNumbers !== false;
    const showAllSteps = config?.showAllSteps !== false;

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

    // Layout
    const borderRadius = parseInt(config?.borderRadius || 8);
    const padding = parseInt(config?.padding || 16);
    const gap = parseInt(config?.gap || 12);

    // State
    const [isHovered, setIsHovered] = React.useState(false);

    // Reduced motion check
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    const transition = prefersReducedMotion ? 'none' : 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';

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
      const presets = {
        // ─────────────────────────────────────────────────────────────
        // 1. MODERN CARDS
        // ─────────────────────────────────────────────────────────────
        'modern-cards': {
          card: {
            background: cardBackground,
            borderRadius: borderRadius,
            padding: padding,
            boxShadow: isHovered ? '0 8px 24px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.06)',
            border: `1px solid ${borderColor}`,
            transition,
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
          },
          header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: padding,
            paddingBottom: padding,
            borderBottom: `1px solid ${borderColor}`
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize,
            fontWeight: '500',
            color: primaryColor,
            background: `${primaryColor}10`,
            padding: '4px 10px',
            borderRadius: 4
          },
          status: {
            fontSize: fontSize - 2,
            padding: '4px 10px',
            borderRadius: 20,
            background: `${getStatusColor(ruleStatus)}15`,
            color: getStatusColor(ruleStatus),
            fontWeight: '500'
          },
          title: {
            fontSize: fontSize + 4,
            fontWeight: '500',
            color: textPrimary,
            marginBottom: 4
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            gap: gap
          },
          row: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          },
          label: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            marginTop: padding,
            paddingTop: padding,
            borderTop: `1px solid ${borderColor}`,
            display: 'flex',
            gap: padding
          },
          outputItem: {
            flex: 1,
            background: `${primaryColor}08`,
            padding: padding * 0.75,
            borderRadius: borderRadius - 2,
            textAlign: 'center'
          },
          outputLabel: {
            fontSize: fontSize - 3,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 4
          },
          outputValue: {
            fontSize: fontSize + 4,
            color: primaryColor,
            fontWeight: '500',
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 2. MINIMAL LINES
        // ─────────────────────────────────────────────────────────────
        'minimal-lines': {
          card: {
            background: cardBackground,
            padding: padding,
            borderLeft: `2px solid ${isHovered ? primaryColor : borderColor}`,
            transition
          },
          header: {
            marginBottom: padding
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize + 2,
            color: textPrimary,
            fontWeight: '400'
          },
          status: {
            fontSize: fontSize - 1,
            color: getStatusColor(ruleStatus),
            marginLeft: gap
          },
          title: {
            fontSize: fontSize + 2,
            fontWeight: '500',
            color: textPrimary,
            marginTop: 8
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary,
            marginTop: 4
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            gap: gap * 0.75
          },
          row: {
            display: 'flex',
            alignItems: 'baseline',
            gap: gap
          },
          label: {
            fontSize: fontSize - 1,
            color: textSecondary,
            minWidth: 100
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            marginTop: padding,
            paddingTop: padding,
            borderTop: `1px solid ${borderColor}`,
            display: 'flex',
            gap: padding * 2
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
        },
        // ─────────────────────────────────────────────────────────────
        // 3. DATA TABLE
        // ─────────────────────────────────────────────────────────────
        'data-table': {
          card: {
            background: cardBackground,
            border: `1px solid ${borderColor}`,
            borderRadius: borderRadius,
            overflow: 'hidden',
            transition
          },
          header: {
            display: 'grid',
            gridTemplateColumns: '80px 1fr 80px',
            background: backgroundColor,
            borderBottom: `1px solid ${borderColor}`
          },
          headerCell: {
            padding: padding * 0.75,
            borderRight: `1px solid ${borderColor}`,
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          },
          idBadge: {
            padding: padding * 0.75,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize,
            color: primaryColor,
            borderRight: `1px solid ${borderColor}`
          },
          title: {
            padding: padding * 0.75,
            fontSize: fontSize,
            color: textPrimary,
            borderRight: `1px solid ${borderColor}`
          },
          status: {
            padding: padding * 0.75,
            fontSize: fontSize - 2,
            color: getStatusColor(ruleStatus),
            textAlign: 'center'
          },
          body: {},
          row: {
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            borderBottom: `1px solid ${borderColor}`
          },
          label: {
            padding: padding * 0.75,
            fontSize: fontSize - 1,
            color: textSecondary,
            background: backgroundColor,
            borderRight: `1px solid ${borderColor}`
          },
          value: {
            padding: padding * 0.75,
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            background: `${primaryColor}08`
          },
          outputItem: {
            display: 'contents'
          },
          outputLabel: {
            padding: padding * 0.75,
            fontSize: fontSize - 1,
            color: textSecondary,
            borderRight: `1px solid ${borderColor}`
          },
          outputValue: {
            padding: padding * 0.75,
            fontSize: fontSize,
            color: primaryColor,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 4. KANBAN STYLE
        // ─────────────────────────────────────────────────────────────
        'kanban-style': {
          card: {
            background: cardBackground,
            borderRadius: borderRadius,
            padding: padding,
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
            border: isHovered ? `1px solid ${primaryColor}40` : `1px solid transparent`,
            transition
          },
          header: {
            display: 'flex',
            alignItems: 'center',
            gap: gap,
            marginBottom: padding
          },
          dragHandle: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            opacity: 0.4
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize,
            fontWeight: '500',
            color: textPrimary,
            background: backgroundColor,
            padding: '4px 8px',
            borderRadius: 4
          },
          status: {
            fontSize: fontSize - 2,
            padding: '3px 8px',
            borderRadius: 4,
            background: getStatusColor(ruleStatus),
            color: cardBackground,
            fontWeight: '500',
            marginLeft: 'auto'
          },
          title: {
            fontSize: fontSize + 2,
            fontWeight: '500',
            color: textPrimary,
            marginBottom: 4
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary
          },
          body: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginTop: padding
          },
          tag: {
            fontSize: fontSize - 2,
            padding: '4px 10px',
            borderRadius: 20,
            background: backgroundColor,
            color: textSecondary,
            border: `1px solid ${borderColor}`
          },
          outputSection: {
            marginTop: padding,
            background: `linear-gradient(135deg, ${primaryColor}08 0%, ${primaryColor}15 100%)`,
            padding: padding,
            borderRadius: borderRadius - 2,
            display: 'flex',
            gap: padding
          },
          outputItem: {
            flex: 1,
            textAlign: 'center'
          },
          outputLabel: {
            fontSize: fontSize - 3,
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
        },
        // ─────────────────────────────────────────────────────────────
        // 5. TIMELINE FLOW
        // ─────────────────────────────────────────────────────────────
        'timeline-flow': {
          card: {
            background: `linear-gradient(135deg, ${primaryColor}05 0%, ${primaryColor}10 100%)`,
            borderRadius: borderRadius,
            padding: padding * 1.5,
            border: `1px solid ${primaryColor}20`,
            transition
          },
          header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: padding
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize + 12,
            fontWeight: '300',
            color: primaryColor
          },
          status: {
            fontSize: fontSize - 2,
            padding: '4px 12px',
            borderRadius: 20,
            background: `${getStatusColor(ruleStatus)}15`,
            color: getStatusColor(ruleStatus)
          },
          title: {
            fontSize: fontSize + 4,
            fontWeight: '500',
            color: textPrimary
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary,
            marginTop: 4
          },
          body: {
            position: 'relative',
            paddingLeft: padding + 12,
            marginTop: padding
          },
          timeline: {
            position: 'absolute',
            left: 4,
            top: 0,
            bottom: 0,
            width: 2,
            background: borderColor
          },
          row: {
            position: 'relative',
            paddingBottom: padding
          },
          dot: {
            position: 'absolute',
            left: -(padding + 8),
            top: 4,
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: cardBackground,
            border: `2px solid ${borderColor}`
          },
          label: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 2
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            position: 'relative',
            paddingTop: padding
          },
          outputDot: {
            position: 'absolute',
            left: -(padding + 8),
            top: padding + 4,
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: primaryColor
          },
          outputItem: {
            display: 'inline-block',
            marginRight: padding
          },
          outputLabel: {
            fontSize: fontSize - 2,
            color: textSecondary
          },
          outputValue: {
            fontSize: fontSize + 2,
            color: primaryColor,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: '500'
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 6. SPLIT PANEL
        // ─────────────────────────────────────────────────────────────
        'split-panel': {
          card: {
            display: 'flex',
            background: cardBackground,
            borderRadius: borderRadius,
            overflow: 'hidden',
            border: `1px solid ${borderColor}`,
            transition
          },
          sidebar: {
            width: 80,
            background: textPrimary,
            padding: padding,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize + 6,
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
            padding: padding
          },
          header: {
            marginBottom: padding
          },
          title: {
            fontSize: fontSize + 2,
            fontWeight: '500',
            color: textPrimary
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary,
            marginTop: 4
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            gap: gap
          },
          row: {
            display: 'flex',
            alignItems: 'baseline',
            gap: gap
          },
          label: {
            fontSize: fontSize - 2,
            color: textSecondary,
            minWidth: 80
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            marginTop: padding,
            paddingTop: padding,
            borderTop: `1px solid ${borderColor}`,
            display: 'flex',
            gap: padding
          },
          outputItem: {},
          outputLabel: {
            fontSize: fontSize - 2,
            color: textSecondary
          },
          outputValue: {
            fontSize: fontSize + 2,
            color: primaryColor,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 7. FLOATING PANELS
        // ─────────────────────────────────────────────────────────────
        'floating-panels': {
          card: {
            background: cardBackground,
            borderRadius: borderRadius + 4,
            padding: padding * 1.25,
            boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)' : '0 10px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
            transition,
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
          },
          header: {
            display: 'flex',
            alignItems: 'center',
            gap: padding,
            marginBottom: padding,
            paddingBottom: padding,
            borderBottom: `1px solid ${borderColor}`
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize + 8,
            fontWeight: '300',
            color: primaryColor
          },
          divider: {
            width: 1,
            height: 32,
            background: borderColor
          },
          status: {
            fontSize: fontSize - 1,
            padding: '6px 14px',
            borderRadius: 8,
            background: `${getStatusColor(ruleStatus)}12`,
            color: getStatusColor(ruleStatus),
            fontWeight: '500',
            marginLeft: 'auto'
          },
          title: {
            fontSize: fontSize + 4,
            fontWeight: '500',
            color: textPrimary
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary,
            marginTop: 4
          },
          body: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: gap
          },
          stepCard: {
            background: backgroundColor,
            padding: padding,
            borderRadius: borderRadius - 2
          },
          label: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            marginBottom: 4
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            gridColumn: '1 / -1',
            background: `${primaryColor}08`,
            padding: padding,
            borderRadius: borderRadius - 2,
            display: 'flex',
            gap: padding * 2,
            marginTop: gap
          },
          outputItem: {
            flex: 1,
            textAlign: 'center'
          },
          outputLabel: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase'
          },
          outputValue: {
            fontSize: fontSize + 8,
            color: primaryColor,
            fontWeight: '500',
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            marginTop: 4
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 8. COMPACT DENSE
        // ─────────────────────────────────────────────────────────────
        'compact-dense': {
          card: {
            background: cardBackground,
            borderRadius: borderRadius,
            padding: padding * 0.75,
            border: `1px solid ${borderColor}`,
            transition
          },
          header: {
            display: 'flex',
            alignItems: 'center',
            gap: gap,
            marginBottom: gap
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize - 1,
            color: primaryColor
          },
          separator: {
            color: borderColor,
            fontSize: fontSize - 2
          },
          status: {
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: getStatusColor(ruleStatus),
            marginLeft: 'auto'
          },
          title: {
            fontSize: fontSize,
            color: textPrimary
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary
          },
          body: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: `${gap * 0.5}px ${gap}px`
          },
          row: {
            display: 'flex',
            alignItems: 'center',
            gap: 4
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
          outputSection: {
            display: 'flex',
            gap: gap,
            marginTop: gap,
            paddingTop: gap,
            borderTop: `1px solid ${borderColor}`
          },
          outputItem: {
            display: 'flex',
            alignItems: 'center',
            gap: 4
          },
          outputLabel: {
            fontSize: fontSize - 2,
            color: textSecondary
          },
          outputValue: {
            fontSize: fontSize - 1,
            color: primaryColor,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: '500'
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 9. MATERIAL SHEETS
        // ─────────────────────────────────────────────────────────────
        'material-sheets': {
          card: {
            background: cardBackground,
            boxShadow: isHovered ? '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
            transition
          },
          header: {
            display: 'flex',
            alignItems: 'center',
            gap: padding,
            padding: padding,
            borderBottom: `1px solid ${borderColor}`
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize + 2,
            fontWeight: '500',
            color: primaryColor
          },
          categoryBadge: {
            fontSize: fontSize - 1,
            color: cardBackground,
            background: textSecondary,
            padding: '4px 12px',
            borderRadius: 2
          },
          status: {
            fontSize: fontSize - 1,
            color: getStatusColor(ruleStatus),
            fontWeight: '500',
            marginLeft: 'auto'
          },
          title: {
            fontSize: fontSize + 1,
            color: textPrimary,
            padding: `0 ${padding}px`,
            marginTop: padding
          },
          body: {},
          row: {
            display: 'flex',
            alignItems: 'center',
            gap: gap,
            padding: padding
          },
          rowAlt: {
            background: `${primaryColor}05`
          },
          label: {
            fontSize: fontSize - 1,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            minWidth: 120
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            background: primaryColor,
            padding: padding,
            display: 'flex',
            alignItems: 'center',
            gap: padding
          },
          outputItem: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 8
          },
          outputLabel: {
            fontSize: fontSize - 2,
            color: `${cardBackground}70`
          },
          outputValue: {
            fontSize: fontSize + 2,
            color: cardBackground,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: '500'
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 10. NOTION BLOCKS
        // ─────────────────────────────────────────────────────────────
        'notion-blocks': {
          card: {
            background: cardBackground,
            padding: padding,
            borderRadius: borderRadius - 4,
            transition
          },
          header: {
            display: 'flex',
            alignItems: 'center',
            gap: gap,
            marginBottom: padding
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize,
            color: primaryColor,
            padding: '2px 6px',
            background: `${primaryColor}10`,
            borderRadius: 4
          },
          status: {
            fontSize: fontSize - 2,
            padding: '2px 8px',
            borderRadius: 4,
            background: `${getStatusColor(ruleStatus)}15`,
            color: getStatusColor(ruleStatus)
          },
          title: {
            fontSize: fontSize + 2,
            color: textPrimary
          },
          subtitle: {
            fontSize: fontSize - 1,
            color: textSecondary,
            marginTop: 4
          },
          body: {
            borderLeft: `2px solid ${primaryColor}30`,
            paddingLeft: padding,
            marginLeft: 4
          },
          row: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            marginBottom: gap * 0.75
          },
          bullet: {
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: borderColor,
            marginTop: 7,
            flexShrink: 0
          },
          label: {
            fontSize: fontSize - 2,
            color: textSecondary
          },
          value: {
            fontSize: fontSize,
            color: textPrimary,
            marginLeft: 6
          },
          outputSection: {
            background: `${primaryColor}08`,
            borderRadius: borderRadius - 2,
            padding: padding,
            marginTop: padding,
            borderLeft: `3px solid ${primaryColor}`
          },
          outputItem: {
            display: 'inline-block',
            marginRight: padding
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
        },
        // ─────────────────────────────────────────────────────────────
        // 11. TERMINAL CLI
        // ─────────────────────────────────────────────────────────────
        'terminal-cli': {
          card: {
            background: '#222222',
            borderRadius: borderRadius,
            overflow: 'hidden',
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            transition
          },
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
          header: {
            padding: padding
          },
          prompt: {
            color: '#999999',
            fontSize: fontSize
          },
          idBadge: {
            color: '#999999',
            fontSize: fontSize
          },
          status: {
            color: getStatusColor(ruleStatus),
            fontSize: fontSize
          },
          title: {
            color: '#ffffff',
            fontSize: fontSize,
            marginTop: 8
          },
          body: {
            padding: `0 ${padding}px`
          },
          row: {
            display: 'flex',
            gap: gap,
            padding: `${padding * 0.5}px 0`
          },
          label: {
            color: '#aaaaaa',
            fontSize: fontSize,
            minWidth: 140
          },
          value: {
            color: '#ffffff',
            fontSize: fontSize
          },
          outputSection: {
            background: '#333333',
            margin: padding,
            marginTop: padding,
            padding: padding,
            borderRadius: borderRadius - 4,
            border: '1px solid #444444'
          },
          outputHeader: {
            color: '#999999',
            fontSize: fontSize,
            marginBottom: 8
          },
          outputItem: {
            display: 'flex',
            gap: gap
          },
          outputLabel: {
            color: '#777777',
            fontSize: fontSize
          },
          outputValue: {
            color: '#999999',
            fontSize: fontSize
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 12. DASHBOARD TILES
        // ─────────────────────────────────────────────────────────────
        'dashboard-tiles': {
          card: {
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}DD 100%)`,
            borderRadius: borderRadius,
            padding: padding * 1.5,
            color: cardBackground,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
            transition
          },
          header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: padding
          },
          idSection: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          },
          idBadge: {
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: fontSize + 24,
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
          status: {
            fontSize: fontSize - 1,
            padding: '4px 12px',
            borderRadius: 20,
            background: `${cardBackground}20`,
            color: cardBackground
          },
          title: {
            fontSize: fontSize + 2,
            color: cardBackground,
            marginBottom: padding,
            paddingBottom: padding,
            borderBottom: `1px solid ${cardBackground}20`
          },
          body: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: gap
          },
          stepTile: {
            background: `${cardBackground}10`,
            padding: padding * 0.75,
            borderRadius: borderRadius - 4
          },
          label: {
            fontSize: fontSize - 2,
            color: `${cardBackground}70`,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            marginBottom: 4
          },
          value: {
            fontSize: fontSize,
            color: cardBackground
          },
          outputSection: {
            gridColumn: '1 / -1',
            background: cardBackground,
            padding: padding,
            borderRadius: borderRadius - 4,
            marginTop: gap,
            display: 'flex',
            gap: padding * 2
          },
          outputItem: {
            flex: 1,
            textAlign: 'center'
          },
          outputLabel: {
            fontSize: fontSize - 2,
            color: textSecondary,
            marginBottom: 4
          },
          outputValue: {
            fontSize: fontSize + 10,
            color: primaryColor,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: '500'
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 13. ACADEMIC GRID
        // ─────────────────────────────────────────────────────────────
        'academic-grid': {
          card: {
            background: '#eeeeee',
            padding: `${padding * 1.25}px ${padding}px`,
            borderBottom: `1px solid ${borderColor}`,
            transition
          },
          header: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 100px 1fr',
            alignItems: 'start',
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
          idSection: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          },
          idLabel: {
            fontSize: fontSize - 1,
            fontWeight: '500',
            color: textPrimary
          },
          idBadge: {
            fontSize: fontSize - 1,
            color: textSecondary,
            fontStyle: 'italic'
          },
          status: {
            fontSize: fontSize - 1,
            color: textSecondary,
            fontStyle: 'italic'
          },
          body: {
            marginTop: padding,
            display: 'flex',
            flexDirection: 'column',
            gap: gap * 0.75
          },
          row: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 100px 1fr',
            gap: padding
          },
          label: {
            fontSize: fontSize - 1,
            color: textSecondary,
            fontStyle: 'italic'
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
            marginTop: padding,
            paddingTop: padding,
            borderTop: `1px solid ${borderColor}`,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: padding
          },
          outputItem: {},
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
        },
        // ─────────────────────────────────────────────────────────────
        // 14. PORTFOLIO BOLD
        // ─────────────────────────────────────────────────────────────
        'portfolio-bold': {
          card: {
            background: cardBackground,
            padding: `${padding * 1.5}px ${padding * 2}px`,
            transition
          },
          header: {
            display: 'grid',
            gridTemplateColumns: '100px 1fr 1fr 1fr 140px',
            alignItems: 'start',
            gap: padding
          },
          column: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          },
          columnCenter: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            alignItems: 'center',
            textAlign: 'center'
          },
          columnRight: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            alignItems: 'flex-end'
          },
          label: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          },
          idBadge: {
            fontSize: fontSize + 1,
            color: textPrimary
          },
          value: {
            fontSize: fontSize + 1,
            color: textPrimary
          },
          valueMuted: {
            fontSize: fontSize + 1,
            color: textSecondary
          },
          statusBadge: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: fontSize,
            color: getStatusColor(ruleStatus),
            padding: '6px 12px',
            background: `${getStatusColor(ruleStatus)}10`,
            borderRadius: 6
          },
          body: {
            marginTop: padding,
            borderTop: `1px solid ${borderColor}`
          },
          row: {
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            alignItems: 'baseline',
            padding: `${padding}px 0`,
            borderBottom: `1px solid ${borderColor}`
          },
          stepLabel: {
            fontSize: fontSize,
            color: textSecondary
          },
          stepValue: {
            fontSize: fontSize + 1,
            color: textPrimary
          },
          outputSection: {
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            alignItems: 'baseline',
            padding: `${padding}px 0`,
            background: backgroundColor,
            margin: `0 -${padding * 2}px`,
            paddingLeft: padding * 2,
            paddingRight: padding * 2
          },
          outputItem: {
            display: 'flex',
            gap: padding * 2
          },
          outputLabel: {
            fontSize: fontSize,
            color: textSecondary
          },
          outputValueItem: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 6
          },
          outputValueLabel: {
            fontSize: fontSize,
            color: textSecondary
          },
          outputValue: {
            fontSize: fontSize + 1,
            color: primaryColor
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 15. SPECS MINIMAL
        // ─────────────────────────────────────────────────────────────
        'specs-minimal': {
          card: {
            background: cardBackground,
            border: `1px solid ${borderColor}`,
            borderRadius: borderRadius,
            overflow: 'hidden',
            transition
          },
          header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: padding,
            borderBottom: `1px solid ${borderColor}`
          },
          left: {
            display: 'flex',
            alignItems: 'center',
            gap: padding * 2
          },
          idBadge: {
            fontSize: fontSize,
            color: textPrimary
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
          title: {
            fontSize: fontSize,
            color: textPrimary
          },
          status: {
            fontSize: fontSize,
            color: getStatusColor(ruleStatus)
          },
          body: {},
          row: {
            display: 'flex',
            padding: padding,
            borderBottom: `1px solid ${borderColor}`
          },
          label: {
            fontSize: fontSize,
            color: textSecondary,
            width: '40%'
          },
          value: {
            fontSize: fontSize,
            color: textPrimary,
            width: '60%'
          },
          outputSection: {
            display: 'flex',
            padding: padding,
            background: backgroundColor
          },
          outputItem: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 6,
            marginRight: padding * 2
          },
          outputLabel: {
            fontSize: fontSize,
            color: textSecondary
          },
          outputValue: {
            fontSize: fontSize,
            color: primaryColor,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 16. PRICING STACK
        // ─────────────────────────────────────────────────────────────
        'pricing-stack': {
          card: {
            background: cardBackground,
            padding: padding,
            borderBottom: `1px solid ${borderColor}`,
            transition
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
          idLabel: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: '500'
          },
          idBadge: {
            fontSize: fontSize + 4,
            color: textPrimary
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
          body: {
            marginTop: padding * 1.5,
            display: 'flex',
            flexDirection: 'column',
            gap: padding * 1.5
          },
          row: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          },
          label: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: '500'
          },
          value: {
            fontSize: fontSize + 2,
            color: textPrimary
          },
          outputSection: {
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
            fontSize: fontSize + 14,
            color: textPrimary,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            letterSpacing: '-0.02em'
          }
        },
        // ─────────────────────────────────────────────────────────────
        // 17. METRICS DASHBOARD
        // ─────────────────────────────────────────────────────────────
        'metrics-dashboard': {
          card: {
            background: cardBackground,
            borderRadius: borderRadius,
            border: `1px solid ${borderColor}`,
            overflow: 'hidden',
            transition
          },
          header: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderBottom: `1px solid ${borderColor}`
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
          idBadge: {
            fontSize: fontSize + 16,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            letterSpacing: '-0.02em',
            color: textPrimary
          },
          statusValue: {
            fontSize: fontSize + 16,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            color: getStatusColor(ruleStatus)
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
          body: {
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
          badgeNeutral: {
            background: backgroundColor,
            color: textSecondary
          },
          metricValueSmall: {
            fontSize: fontSize + 8,
            color: textPrimary,
            fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          },
          stepsRow: {
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
          label: {
            fontSize: fontSize - 2,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 4
          },
          value: {
            fontSize: fontSize,
            color: textPrimary
          },
          outputSection: {
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
          outputLabelHeader: {
            fontSize: fontSize - 2,
            color: primaryColor,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          },
          outputRow: {
            display: 'flex',
            gap: padding * 2
          },
          outputItem: {},
          outputLabel: {
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
      };
      return presets[preset] || presets['modern-cards'];
    };
    const styles = getPresetStyles();

    // ═══════════════════════════════════════════════════════════════
    // RENDER CARD CONTENT
    // ═══════════════════════════════════════════════════════════════

    const renderCard = () => {
      const s = styles;
      switch (preset) {
        // ─────────────────────────────────────────────────────────────
        case 'modern-cards':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.title,
              marginTop: 12
            }
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory)), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'minimal-lines':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, "• ", ruleStatus), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory)), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, step.label), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "W: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "H: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'data-table':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.headerCell,
              padding: padding * 0.75,
              borderRight: `1px solid ${borderColor}`
            }
          }, "ID"), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.headerCell,
              padding: padding * 0.75,
              borderRight: `1px solid ${borderColor}`
            }
          }, "Element"), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.headerCell,
              padding: padding * 0.75
            }
          }, "Status")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '80px 1fr 80px',
              borderBottom: `1px solid ${borderColor}`
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.status
          }, ruleStatus)), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Output"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, "W: ", outputWidth, " | H: ", outputHeight)));

        // ─────────────────────────────────────────────────────────────
        case 'kanban-style':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.dragHandle
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              width: 12,
              height: 2,
              background: textSecondary,
              borderRadius: 1
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              width: 12,
              height: 2,
              background: textSecondary,
              borderRadius: 1
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              width: 12,
              height: 2,
              background: textSecondary,
              borderRadius: 1
            }
          })), /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("span", {
            key: idx,
            style: s.tag
          }, step.label))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'timeline-flow':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory)), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, /*#__PURE__*/React.createElement("div", {
            style: s.timeline
          }), steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.dot
          }), /*#__PURE__*/React.createElement("div", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("div", {
            style: s.value
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputDot
          }), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "W: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "H: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight)))));

        // ─────────────────────────────────────────────────────────────
        case 'split-panel':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.sidebar
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("div", {
            style: s.statusDot
          })), /*#__PURE__*/React.createElement("div", {
            style: s.main
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory)), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, step.label), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight)))));

        // ─────────────────────────────────────────────────────────────
        case 'floating-panels':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("div", {
            style: s.divider
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory)), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("div", {
            style: s.value
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight)))));

        // ─────────────────────────────────────────────────────────────
        case 'compact-dense':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.separator
          }, "|"), /*#__PURE__*/React.createElement("span", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.separator
          }, "|"), /*#__PURE__*/React.createElement("span", {
            style: s.subtitle
          }, ruleCategory), /*#__PURE__*/React.createElement("div", {
            style: s.status
          })), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, step.label, ":"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "W:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "H:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'material-sheets':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.categoryBadge
          }, ruleCategory), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: {
              ...s.row,
              ...(idx % 2 === 0 ? s.rowAlt : {})
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "W:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "H:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'notion-blocks':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("div", {
            style: s.bullet
          }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label, ":"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value))))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Width: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Height: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'terminal-cli':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
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
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.prompt
          }, "$ cat "), /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: {
              color: '#aaaaaa'
            }
          }, " | "), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, "[", ruleStatus, "]"), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, "# ", ruleElement)), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label, ":"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputHeader
          }, "// Output values"), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "width: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.outputItem,
              marginTop: 4
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "height: "), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'dashboard-tiles':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.idSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.idLabel
          }, "Rule ID")), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement, " · ", ruleCategory), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepTile
          }, /*#__PURE__*/React.createElement("div", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("div", {
            style: s.value
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight)))));

        // ─────────────────────────────────────────────────────────────
        case 'academic-grid':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.duration
          }, ruleCategory), /*#__PURE__*/React.createElement("div", {
            style: s.idSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idLabel
          }, "Rule ID"), /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus))), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value), /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `Step ${step.num}` : ''), /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, step.label)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Output Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Output Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'portfolio-bold':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.column
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "ID"), /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId)), /*#__PURE__*/React.createElement("div", {
            style: s.columnCenter
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "Category"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.columnCenter
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "Subject"), /*#__PURE__*/React.createElement("span", {
            style: s.valueMuted
          }, "—")), /*#__PURE__*/React.createElement("div", {
            style: s.columnCenter
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "Element"), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, ruleElement)), /*#__PURE__*/React.createElement("div", {
            style: s.columnRight
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, "Status"), /*#__PURE__*/React.createElement("span", {
            style: s.statusBadge
          }, ruleStatus))), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.stepLabel
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.stepValue
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "Output"), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputValueItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputValueLabel
          }, "W:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputValueItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputValueLabel
          }, "H:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))))));

        // ─────────────────────────────────────────────────────────────
        case 'specs-minimal':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.left
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory)), /*#__PURE__*/React.createElement("div", {
            style: s.right
          }, /*#__PURE__*/React.createElement("span", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus))), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "W:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputLabel
          }, "H:"), /*#__PURE__*/React.createElement("span", {
            style: s.outputValue
          }, outputHeight))));

        // ─────────────────────────────────────────────────────────────
        case 'pricing-stack':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.titleSection
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idLabel
          }, "Rule Element"), /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleElement)), /*#__PURE__*/React.createElement("div", {
            style: s.meta
          }, /*#__PURE__*/React.createElement("span", {
            style: s.category
          }, ruleCategory, " · ", ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus))), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.body
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.row
          }, /*#__PURE__*/React.createElement("span", {
            style: s.label
          }, showStepNumbers ? `Step ${step.num}: ` : '', step.label), /*#__PURE__*/React.createElement("span", {
            style: s.value
          }, step.value)))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
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

        // ─────────────────────────────────────────────────────────────
        case 'metrics-dashboard':
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricBox
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricLabel
          }, "Rule ID"), /*#__PURE__*/React.createElement("div", {
            style: s.idBadge
          }, ruleId)), /*#__PURE__*/React.createElement("div", {
            style: s.metricIcon
          }, "📋")), /*#__PURE__*/React.createElement("div", {
            style: s.metricBoxLast
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricContent
          }, /*#__PURE__*/React.createElement("div", {
            style: s.metricLabel
          }, "Status"), /*#__PURE__*/React.createElement("div", {
            style: s.statusValue
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: {
              ...s.metricIcon,
              borderColor: getStatusColor(ruleStatus)
            }
          }, ruleStatus === 'Active' ? '✓' : ruleStatus === 'Inactive' ? '✕' : '◐'))), /*#__PURE__*/React.createElement("div", {
            style: s.body
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
          }, "Steps"), /*#__PURE__*/React.createElement("span", {
            style: {
              ...s.badge,
              ...s.badgeNeutral
            }
          }, "4")), /*#__PURE__*/React.createElement("span", {
            style: s.metricValueSmall
          }, "Defined"))), showAllSteps && /*#__PURE__*/React.createElement("div", {
            style: s.stepsRow
          }, steps.filter(st => !st.isOutput).map((step, idx) => /*#__PURE__*/React.createElement("div", {
            key: idx,
            style: s.stepCard
          }, /*#__PURE__*/React.createElement("div", {
            style: s.label
          }, showStepNumbers ? `[${step.num}] ` : '', step.label), /*#__PURE__*/React.createElement("div", {
            style: s.value
          }, step.value))), /*#__PURE__*/React.createElement("div", {
            style: s.outputSection
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputHeader
          }, /*#__PURE__*/React.createElement("span", {
            style: s.outputBadge
          }, "OUTPUT"), /*#__PURE__*/React.createElement("span", {
            style: s.outputLabelHeader
          }, "Final Values")), /*#__PURE__*/React.createElement("div", {
            style: s.outputRow
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Width"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputWidth)), /*#__PURE__*/React.createElement("div", {
            style: s.outputItem
          }, /*#__PURE__*/React.createElement("div", {
            style: s.outputLabel
          }, "Height"), /*#__PURE__*/React.createElement("div", {
            style: s.outputValue
          }, outputHeight)))))));
        default:
          return /*#__PURE__*/React.createElement("div", {
            style: s.card
          }, /*#__PURE__*/React.createElement("div", {
            style: s.header
          }, /*#__PURE__*/React.createElement("span", {
            style: s.idBadge
          }, ruleId), /*#__PURE__*/React.createElement("span", {
            style: s.status
          }, ruleStatus)), /*#__PURE__*/React.createElement("div", {
            style: s.title
          }, ruleElement), /*#__PURE__*/React.createElement("div", {
            style: s.subtitle
          }, ruleCategory));
      }
    };

    // ═══════════════════════════════════════════════════════════════
    // MAIN RENDER
    // ═══════════════════════════════════════════════════════════════

    return /*#__PURE__*/React.createElement("div", {
      className: "rule-grid-showcase",
      style: {
        fontFamily,
        fontSize,
        fontWeight,
        color: textPrimary,
        lineHeight: 1.5,
        background: backgroundColor,
        padding: padding,
        borderRadius: borderRadius
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    }, renderCard());
  }
  return {
    MANIFEST: typeof MANIFEST !== 'undefined' ? MANIFEST : null,
    Component
  };
};