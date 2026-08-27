/* @ds-bundle: {"format":3,"namespace":"InDebtedDesignSystem_78ee3b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"ProgressIndicator","sourcePath":"components/feedback/ProgressIndicator.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Accordion","sourcePath":"components/surfaces/Accordion.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardHeader","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"1b89bd172255","components/core/Badge.jsx":"4ee6241c8eba","components/core/Button.jsx":"dd595df927ee","components/core/Divider.jsx":"e536e46430f7","components/core/Icon.jsx":"c22441220586","components/feedback/Alert.jsx":"cd6354a1c98d","components/feedback/Banner.jsx":"05c84abb03c7","components/feedback/ProgressIndicator.jsx":"b756802c017d","components/forms/Checkbox.jsx":"a6877ab9f3af","components/forms/Input.jsx":"f9eab7760426","components/forms/Radio.jsx":"9e0416a5f8e2","components/forms/SegmentedControl.jsx":"bbca6668e313","components/forms/Select.jsx":"8c96989e0bba","components/forms/Slider.jsx":"ce52494a69c1","components/surfaces/Accordion.jsx":"aa8ef3c37930","components/surfaces/Card.jsx":"34db3c25f57f","ui_kits/customer-portal/portal.jsx":"f1f893659078","ui_kits/marketing-site/site.jsx":"e5efeb870e02"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/core/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.InDebtedDesignSystem_78ee3b = window.InDebtedDesignSystem_78ee3b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  "2xl": 64
};
const STATUS = {
  online: "var(--success-500)",
  offline: "var(--gray-400)",
  busy: "var(--error-500)"
};

/**
 * InDebted Avatar — image, initials or placeholder, with optional status dot.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  status,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      width: px,
      height: px,
      flex: "0 0 auto"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: "50%",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "var(--gray-100)" : "var(--purple-illusion-100)",
      color: "var(--space-battle-blue-900)",
      fontFamily: "var(--font-family-primary)",
      fontWeight: "var(--font-weight-semibold)",
      fontSize: Math.round(px * 0.38),
      border: "1px solid var(--border-subtle)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?"), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: Math.max(8, px * 0.26),
      height: Math.max(8, px * 0.26),
      borderRadius: "50%",
      background: STATUS[status] || STATUS.offline,
      border: "2px solid var(--white)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  gray: {
    bg: "var(--gray-50)",
    fg: "var(--gray-700)",
    bd: "var(--gray-200)",
    dot: "var(--gray-500)"
  },
  primary: {
    bg: "var(--warm-blue-25)",
    fg: "var(--warm-blue-900)",
    bd: "var(--warm-blue-100)",
    dot: "var(--warm-blue-900)"
  },
  brand: {
    bg: "var(--tiffany-blue-100)",
    fg: "var(--endless-galaxy-900)",
    bd: "var(--tiffany-blue-300)",
    dot: "var(--endless-galaxy-900)"
  },
  success: {
    bg: "var(--success-50)",
    fg: "var(--success-700)",
    bd: "var(--success-200)",
    dot: "var(--success-600)"
  },
  warning: {
    bg: "var(--warning-50)",
    fg: "var(--warning-700)",
    bd: "var(--warning-200)",
    dot: "var(--warning-500)"
  },
  error: {
    bg: "var(--error-50)",
    fg: "var(--error-700)",
    bd: "var(--error-200)",
    dot: "var(--error-500)"
  },
  blue: {
    bg: "var(--blue-50)",
    fg: "var(--blue-700)",
    bd: "var(--blue-200)",
    dot: "var(--blue-500)"
  },
  purple: {
    bg: "var(--purple-illusion-100)",
    fg: "var(--space-battle-blue-900)",
    bd: "var(--purple-illusion-300)",
    dot: "var(--space-battle-blue-500)"
  }
};
const SIZES = {
  sm: {
    padX: 8,
    height: 20,
    font: "var(--text-xs-size)",
    gap: 4,
    dot: 6
  },
  md: {
    padX: 10,
    height: 24,
    font: "var(--text-xs-size)",
    gap: 6,
    dot: 8
  },
  lg: {
    padX: 12,
    height: 28,
    font: "var(--text-sm-size)",
    gap: 6,
    dot: 8
  }
};

/**
 * InDebted Badge — small status/category pill with optional leading dot or icon.
 */
function Badge({
  children,
  color = "gray",
  size = "md",
  dot = false,
  icon = null,
  onClose,
  ...rest
}) {
  const c = COLORS[color] || COLORS.gray;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.padX}px`,
      background: c.bg,
      color: c.fg,
      border: `1px solid ${c.bd}`,
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-family-primary)",
      fontSize: s.font,
      fontWeight: "var(--font-weight-medium)",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dot,
      height: s.dot,
      borderRadius: "50%",
      background: c.dot,
      flex: "0 0 auto"
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      display: "inline-flex"
    }
  }, icon), children, onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "transparent",
      color: c.fg,
      cursor: "pointer",
      padding: 0,
      marginLeft: 2,
      display: "inline-flex",
      opacity: 0.7,
      fontSize: 13,
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 36,
    padX: 14,
    font: "var(--text-sm-size)",
    line: "var(--text-sm-line)",
    gap: 6,
    icon: 16
  },
  md: {
    height: 40,
    padX: 16,
    font: "var(--text-sm-size)",
    line: "var(--text-sm-line)",
    gap: 8,
    icon: 18
  },
  lg: {
    height: 44,
    padX: 20,
    font: "var(--text-md-size)",
    line: "var(--text-md-line)",
    gap: 8,
    icon: 20
  },
  xl: {
    height: 48,
    padX: 24,
    font: "var(--text-md-size)",
    line: "var(--text-md-line)",
    gap: 10,
    icon: 22
  }
};
function palette(hierarchy, destructive) {
  if (destructive) {
    switch (hierarchy) {
      case "secondary":
        return {
          bg: "var(--white)",
          color: "var(--error-700)",
          border: "var(--error-300)",
          hover: "var(--error-50)"
        };
      case "tertiary":
      case "link":
        return {
          bg: "transparent",
          color: "var(--error-600)",
          border: "transparent",
          hover: "var(--error-50)"
        };
      default:
        return {
          bg: "var(--error-500)",
          color: "var(--white)",
          border: "var(--error-500)",
          hover: "var(--error-600)"
        };
    }
  }
  switch (hierarchy) {
    case "secondary":
      return {
        bg: "var(--white)",
        color: "var(--endless-galaxy-900)",
        border: "var(--gray-300)",
        hover: "var(--gray-50)"
      };
    case "tertiary":
      return {
        bg: "transparent",
        color: "var(--warm-blue-900)",
        border: "transparent",
        hover: "var(--warm-blue-25)"
      };
    case "link":
      return {
        bg: "transparent",
        color: "var(--warm-blue-900)",
        border: "transparent",
        hover: "transparent"
      };
    default:
      // primary
      return {
        bg: "var(--warm-blue-900)",
        color: "var(--white)",
        border: "var(--warm-blue-900)",
        hover: "var(--warm-blue-800)"
      };
  }
}

/**
 * InDebted Button — pill-shaped action. Primary uses Warm Blue; secondary,
 * tertiary and link hierarchies plus a destructive flag and 4 sizes.
 */
function Button({
  children,
  hierarchy = "primary",
  size = "md",
  destructive = false,
  disabled = false,
  iconLeading = null,
  iconTrailing = null,
  iconOnly = null,
  fullWidth = false,
  onClick,
  type = "button",
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const p = palette(hierarchy, destructive);
  const isLink = hierarchy === "link";
  const [hover, setHover] = React.useState(false);
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: iconOnly ? 0 : isLink ? 0 : `0 ${s.padX}px`,
    width: iconOnly ? s.height : fullWidth ? "100%" : undefined,
    fontFamily: "var(--font-family-primary)",
    fontSize: s.font,
    lineHeight: s.line,
    fontWeight: "var(--font-weight-semibold)",
    color: p.color,
    background: hover && !disabled ? p.hover : p.bg,
    border: `1px solid ${p.border}`,
    borderRadius: "var(--radius-full)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: isLink && hover && !disabled ? "underline" : "none",
    textUnderlineOffset: 3,
    transition: "background 140ms ease, color 140ms ease, box-shadow 140ms ease",
    boxShadow: hierarchy === "secondary" && !disabled ? "var(--shadow-xs)" : "none",
    whiteSpace: "nowrap",
    userSelect: "none"
  };
  const iconStyle = {
    width: s.icon,
    height: s.icon,
    display: "inline-flex",
    flex: "0 0 auto"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }, rest), iconOnly ? /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, iconOnly) : /*#__PURE__*/React.createElement(React.Fragment, null, iconLeading && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, iconLeading), children, iconTrailing && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, iconTrailing)));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** InDebted Divider — hairline rule, horizontal or vertical, optional centred label. */
function Divider({
  orientation = "horizontal",
  label,
  spacing = 16,
  ...rest
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-subtle)",
        margin: `0 ${spacing}px`
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: `${spacing}px 0`,
        color: "var(--text-tertiary)",
        fontFamily: "var(--font-family-primary)",
        fontSize: "var(--text-sm-size)"
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }), label, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: "none",
      height: 1,
      background: "var(--border-subtle)",
      margin: `${spacing}px 0`
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* InDebted icon set — outline, 24×24 grid, 2px stroke, round caps/joins,
   currentColor. Lifted from the brand-essentials product preview (Feather /
   Lucide lineage) so product glyphs match what ships. Add to PATHS as needed. */
const PATHS = {
  // navigation & chevrons
  "chevron-right": '<polyline points="9 18 15 12 9 6"/>',
  "chevron-left": '<polyline points="15 18 9 12 15 6"/>',
  "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
  "chevron-up": '<polyline points="18 15 12 9 6 15"/>',
  "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  "more-horizontal": '<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>',
  // status & feedback
  check: '<polyline points="20 6 9 17 4 12"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
  info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  "alert-circle": '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  "help-circle": '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  // people & comms
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  // money & product
  "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  // security & system
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
};
const iconNames = Object.keys(PATHS);

/**
 * InDebted Icon — outline glyph from the product icon set. 2px stroke,
 * currentColor (inherits text colour). Pass a name from `iconNames`.
 */
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const inner = PATHS[name];
  if (!inner) {
    if (typeof console !== "undefined") console.warn(`Icon: unknown name "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
Object.assign(__ds_scope, { iconNames, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  error: {
    bg: "var(--error-50)",
    bd: "var(--error-200)",
    icon: "var(--error-600)",
    title: "var(--error-800)",
    text: "var(--error-700)"
  },
  warning: {
    bg: "var(--warning-50)",
    bd: "var(--warning-200)",
    icon: "var(--warning-600)",
    title: "var(--warning-800)",
    text: "var(--warning-700)"
  },
  success: {
    bg: "var(--success-50)",
    bd: "var(--success-200)",
    icon: "var(--success-700)",
    title: "var(--success-800)",
    text: "var(--success-700)"
  },
  info: {
    bg: "var(--blue-50)",
    bd: "var(--blue-200)",
    icon: "var(--blue-600)",
    title: "var(--blue-800)",
    text: "var(--blue-700)"
  }
};
const PATHS = {
  error: "M12 8v5M12 16h.01M12 3l9 16H3l9-16z",
  warning: "M12 8v5M12 16h.01M12 3l9 16H3l9-16z",
  success: "M20 7L10 17l-5-5",
  info: "M12 11v5M12 8h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
};

/**
 * InDebted Alert — inline contextual message (payment errors, confirmations).
 */
function Alert({
  tone = "info",
  title,
  children,
  onDismiss,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      padding: 16,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-12)",
      fontFamily: "var(--font-family-primary)"
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      flex: "0 0 auto",
      marginTop: 1,
      color: t.icon
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: PATHS[tone] || PATHS.info,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      fontWeight: "var(--font-weight-bold)",
      color: t.title
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      lineHeight: "var(--text-sm-line)",
      color: t.text
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      color: t.icon,
      cursor: "pointer",
      opacity: 0.7,
      fontSize: 14,
      padding: 2,
      display: "inline-flex"
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: {
    bg: "var(--endless-galaxy-900)",
    fg: "var(--white)",
    sub: "rgba(255,255,255,0.72)",
    accent: "var(--tiffany-blue-900)"
  },
  promo: {
    bg: "var(--gradient-brand-7)",
    fg: "var(--endless-galaxy-900)",
    sub: "var(--endless-galaxy-700)",
    accent: "var(--endless-galaxy-900)"
  },
  neutral: {
    bg: "var(--surface-muted)",
    fg: "var(--text-primary)",
    sub: "var(--text-secondary)",
    accent: "var(--warm-blue-900)"
  }
};

/**
 * InDebted Banner — full-width promotional or inline announcement strip.
 */
function Banner({
  title,
  message,
  tone = "neutral",
  action,
  onDismiss,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-12)",
      fontFamily: "var(--font-family-primary)"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md-size)",
      fontWeight: "var(--font-weight-bold)"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: t.sub
    }
  }, message)), action, onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      color: t.fg,
      cursor: "pointer",
      opacity: 0.7,
      fontSize: 16,
      padding: 4,
      display: "inline-flex"
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InDebted ProgressIndicator — linear step/percentage bar used across PP setup
 * and affordability flows. Pass a 0–100 value, or step/total.
 */
function ProgressIndicator({
  value,
  step,
  total,
  showLabel = true,
  size = "md",
  ...rest
}) {
  const pct = value != null ? value : total ? Math.round(step / total * 100) : 0;
  const h = size === "sm" ? 6 : 8;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-family-primary)"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: h,
      background: "var(--gray-200)",
      borderRadius: "var(--radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(100, pct))}%`,
      height: "100%",
      background: "var(--warm-blue-900)",
      borderRadius: "var(--radius-full)",
      transition: "width 300ms ease"
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--text-secondary)",
      minWidth: 38,
      textAlign: "right"
    }
  }, step != null && total != null ? `${step}/${total}` : `${pct}%`));
}
Object.assign(__ds_scope, { ProgressIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressIndicator.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** InDebted Checkbox — square check with optional label + supporting text. */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  supportingText,
  disabled = false,
  size = "md",
  id,
  ...rest
}) {
  const box = size === "sm" ? 16 : 20;
  const inputId = id || React.useId();
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: inputId,
    style: {
      display: "flex",
      gap: 10,
      alignItems: supportingText ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-family-primary)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: box,
      height: box,
      flex: "0 0 auto",
      marginTop: supportingText ? 2 : 0,
      borderRadius: "var(--radius-4)",
      border: `1.5px solid ${on ? "var(--warm-blue-900)" : "var(--gray-300)"}`,
      background: on ? "var(--warm-blue-900)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 120ms ease, border-color 120ms ease"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: box * 0.5,
      height: 2,
      background: "var(--white)",
      borderRadius: 1
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: box * 0.66,
    height: box * 0.66,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 4.5L6.5 11.5L3 8",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), (label || supportingText) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size === "sm" ? "var(--text-sm-size)" : "var(--text-md-size)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-primary)"
    }
  }, label), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)"
    }
  }, supportingText)), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: checked,
    onChange: e => onChange && onChange(e.target.checked),
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InDebted Input — labelled text field with hint, leading icon and error state.
 */
function Input({
  label,
  hint,
  placeholder,
  value,
  onChange,
  type = "text",
  leadingIcon = null,
  trailingIcon = null,
  destructive = false,
  disabled = false,
  required = false,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = destructive ? "var(--error-500)" : focus ? "var(--warm-blue-500)" : "var(--gray-300)";
  const ring = focus ? destructive ? "0 0 0 4px var(--error-100)" : "0 0 0 4px var(--warm-blue-50)" : "none";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-family-primary)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm-size)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--error-500)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 44,
      padding: "0 14px",
      background: disabled ? "var(--gray-50)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-8)",
      boxShadow: ring,
      transition: "border-color 140ms ease, box-shadow 140ms ease",
      opacity: disabled ? 0.6 : 1
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex",
      color: "var(--text-tertiary)",
      flex: "0 0 auto"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "inherit",
      fontSize: "var(--text-md-size)",
      color: "var(--text-primary)",
      minWidth: 0
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex",
      color: "var(--text-tertiary)",
      flex: "0 0 auto"
    }
  }, trailingIcon)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: destructive ? "var(--error-600)" : "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** InDebted Radio — single-select control with optional label + supporting text. */
function Radio({
  checked = false,
  onChange,
  label,
  supportingText,
  disabled = false,
  name,
  value,
  id,
  ...rest
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: inputId,
    style: {
      display: "flex",
      gap: 10,
      alignItems: supportingText ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-family-primary)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(value),
    style: {
      width: 20,
      height: 20,
      flex: "0 0 auto",
      marginTop: supportingText ? 2 : 0,
      borderRadius: "50%",
      border: `1.5px solid ${checked ? "var(--warm-blue-900)" : "var(--gray-300)"}`,
      background: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color 120ms ease"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--warm-blue-900)"
    }
  })), (label || supportingText) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md-size)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-primary)"
    }
  }, label), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)"
    }
  }, supportingText)), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: () => onChange && onChange(value),
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InDebted SegmentedControl — pill button group for mutually exclusive choices
 * (e.g. payment frequency, instalment options on the customer portal).
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = "md",
  fullWidth = false,
  ...rest
}) {
  const h = size === "sm" ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      width: fullWidth ? "100%" : undefined,
      padding: 4,
      gap: 4,
      background: "var(--gray-50)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-family-primary)"
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const active = opt.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(opt.value),
      style: {
        flex: fullWidth ? 1 : undefined,
        height: h - 8,
        padding: "0 18px",
        border: "none",
        borderRadius: "var(--radius-full)",
        cursor: "pointer",
        background: active ? "var(--white)" : "transparent",
        color: active ? "var(--endless-galaxy-900)" : "var(--text-tertiary)",
        fontFamily: "inherit",
        fontSize: size === "sm" ? "var(--text-sm-size)" : "var(--text-md-size)",
        fontWeight: "var(--font-weight-semibold)",
        boxShadow: active ? "var(--shadow-xs)" : "none",
        transition: "background 140ms ease, color 140ms ease",
        whiteSpace: "nowrap"
      }
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** InDebted Select — labelled native dropdown styled to match Input. */
function Select({
  label,
  hint,
  value,
  onChange,
  options = [],
  placeholder = "Select…",
  disabled = false,
  destructive = false,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = destructive ? "var(--error-500)" : focus ? "var(--warm-blue-500)" : "var(--gray-300)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-family-primary)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm-size)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 44,
      background: disabled ? "var(--gray-50)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-8)",
      boxShadow: focus ? "0 0 0 4px var(--warm-blue-50)" : "none",
      transition: "border-color 140ms ease, box-shadow 140ms ease",
      opacity: disabled ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      flex: 1,
      height: "100%",
      padding: "0 40px 0 14px",
      fontFamily: "inherit",
      fontSize: "var(--text-md-size)",
      color: value ? "var(--text-primary)" : "var(--text-tertiary)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: destructive ? "var(--error-600)" : "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InDebted Slider — single-value range with Warm Blue fill and a draggable
 * handle. Used for instalment amount / duration selection.
 */
function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  format,
  ...rest
}) {
  const pct = (value - min) / (max - min) * 100;
  const display = format ? format(value) : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "var(--font-family-primary)"
    }
  }, rest), (label || format) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lg-size)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--warm-blue-900)"
    }
  }, display)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: "var(--gray-200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: "var(--warm-blue-900)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 11px)`,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "var(--white)",
      border: "2px solid var(--warm-blue-900)",
      boxShadow: "var(--shadow-sm)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      width: "100%",
      margin: 0,
      opacity: 0,
      height: 24,
      cursor: "pointer"
    }
  })));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** InDebted Accordion — chevron disclosure. Pass an array of {title, content}. */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  ...rest
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-family-primary)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 4px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-lg-size)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--text-primary)"
      }
    }, it.title), /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        flex: "0 0 auto",
        color: "var(--warm-blue-900)",
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform 200ms ease"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 220ms ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 4px 20px",
        fontSize: "var(--text-md-size)",
        lineHeight: "var(--text-md-line)",
        color: "var(--text-secondary)"
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InDebted Card — surface container. Elevated (website shadow) or outlined.
 */
function Card({
  children,
  variant = "elevated",
  padding = 24,
  radius = 16,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    background: "var(--surface-card)",
    borderRadius: radius,
    padding,
    border: variant === "outlined" ? "1px solid var(--border-subtle)" : "1px solid transparent",
    boxShadow: variant === "elevated" ? hover && interactive ? "var(--shadow-website-lg)" : "var(--shadow-website-sm)" : "none",
    transition: "box-shadow 180ms ease, transform 180ms ease",
    transform: hover && interactive ? "translateY(-2px)" : "none",
    cursor: interactive ? "pointer" : "default",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}

/** Optional structured header for a Card. */
function CardHeader({
  title,
  subtitle,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 16,
      fontFamily: "var(--font-family-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--display-xs-size)",
      lineHeight: "var(--display-xs-line)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--text-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: "var(--text-secondary)"
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer-portal/portal.jsx
try { (() => {
/* InDebted Customer Portal — consumer-facing payment experience.
   A calm, plainspoken flow: land → choose a plan → review → done.
   Composes the design-system primitives from the compiled bundle. */

const DS = window.InDebtedDesignSystem_78ee3b;
const {
  Button,
  Badge,
  Card,
  SegmentedControl,
  Slider,
  Checkbox,
  Radio,
  Alert,
  ProgressIndicator,
  Accordion,
  Divider
} = DS;
const money = n => "$" + n.toLocaleString("en-AU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const ShieldIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12l2 2 4-4",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const CheckBig = () => /*#__PURE__*/React.createElement("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 7L10 17l-5-5",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const BALANCE = 1480.0;
function Shell({
  children,
  step
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--purple-illusion-100)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-family-primary)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      background: "var(--white)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/InDebted Logo Navy.svg",
    alt: "InDebted",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--success-600)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(ShieldIcon, null)), " Secure")), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      padding: "40px 20px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 460
    }
  }, step != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(ProgressIndicator, {
    step: step,
    total: 3
  })), children)));
}

/* ---------- Screen 1 — Landing ---------- */
function Landing({
  onStart,
  onPayFull
}) {
  return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-md-size)/var(--display-md-line) var(--font-family-primary)",
      letterSpacing: "-.02em",
      color: "var(--text-primary)",
      margin: "0 0 8px"
    }
  }, "Let's find a way forward"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-weight-regular) var(--text-lg-size)/var(--text-lg-line) var(--font-family-primary)",
      color: "var(--text-secondary)",
      margin: "0 0 24px"
    }
  }, "Hi Sam \u2014 you have an account with us. Choose the option that works best for you, at your own pace."), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)"
    }
  }, "Account balance"), /*#__PURE__*/React.createElement(Badge, {
    color: "warning",
    dot: true
  }, "Open")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-lg-size)/1 var(--font-family-primary)",
      letterSpacing: "-.02em",
      color: "var(--text-primary)"
    }
  }, money(BALANCE)), /*#__PURE__*/React.createElement(Divider, {
    spacing: 18
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Original creditor",
    value: "Brightside Energy"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Reference",
    value: "AC-4471-208"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "xl",
    fullWidth: true,
    iconTrailing: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onStart
  }, "Set up a payment plan"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "secondary",
    size: "xl",
    fullWidth: true,
    onClick: onPayFull
  }, "Pay in full")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)",
      textAlign: "center",
      marginTop: 20
    }
  }, "Nothing to pay today. You're only choosing what suits you."));
}
function Row({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md-size)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md-size)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--text-primary)"
    }
  }, value));
}

/* ---------- Screen 2 — Build the plan ---------- */
function PlanSetup({
  state,
  set,
  onBack,
  onContinue
}) {
  const perPeriod = state.amount;
  const periodsLabel = {
    Weekly: "week",
    Fortnightly: "fortnight",
    Monthly: "month"
  }[state.frequency];
  const count = Math.ceil(BALANCE / perPeriod);
  return /*#__PURE__*/React.createElement(Shell, {
    step: 1
  }, /*#__PURE__*/React.createElement(BackLink, {
    onClick: onBack
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-sm-size)/var(--display-sm-line) var(--font-family-primary)",
      color: "var(--text-primary)",
      margin: "8px 0 4px"
    }
  }, "Build a plan that fits"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md-size)",
      color: "var(--text-secondary)",
      margin: "0 0 24px"
    }
  }, "Pick how often you'd like to pay and how much. You can change this any time."), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-sm-size)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-primary)",
      display: "block",
      marginBottom: 10
    }
  }, "How often"), /*#__PURE__*/React.createElement(SegmentedControl, {
    fullWidth: true,
    options: ["Weekly", "Fortnightly", "Monthly"],
    value: state.frequency,
    onChange: v => set({
      frequency: v
    })
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: 20
  }), /*#__PURE__*/React.createElement(Slider, {
    label: `Amount per ${periodsLabel}`,
    min: 20,
    max: 250,
    step: 5,
    value: state.amount,
    onChange: v => set({
      amount: v
    }),
    format: v => money(v)
  })), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: `That's ${count} payments of ${money(perPeriod)}`
  }, "Your balance is cleared in about ", Math.round(count / (state.frequency === "Weekly" ? 4 : state.frequency === "Fortnightly" ? 2 : 1)), " months."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "xl",
    fullWidth: true,
    iconTrailing: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onContinue
  }, "Review plan")));
}

/* ---------- Screen 3 — Review & confirm ---------- */
function Review({
  state,
  onBack,
  onConfirm
}) {
  const [agree, setAgree] = React.useState(false);
  const periodsLabel = {
    Weekly: "week",
    Fortnightly: "fortnight",
    Monthly: "month"
  }[state.frequency];
  const count = Math.ceil(BALANCE / state.amount);
  return /*#__PURE__*/React.createElement(Shell, {
    step: 2
  }, /*#__PURE__*/React.createElement(BackLink, {
    onClick: onBack
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-sm-size)/var(--display-sm-line) var(--font-family-primary)",
      color: "var(--text-primary)",
      margin: "8px 0 4px"
    }
  }, "Review your plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md-size)",
      color: "var(--text-secondary)",
      margin: "0 0 24px"
    }
  }, "Here's what you've chosen. Happy with it? Confirm below."), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "You'll pay",
    value: `${money(state.amount)} / ${periodsLabel}`
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: 12
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Number of payments",
    value: `${count}`
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: 12
  }), /*#__PURE__*/React.createElement(Row, {
    label: "First payment",
    value: "Mon, 23 Jun 2026"
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: 12
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Total",
    value: money(BALANCE)
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 8,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "What if I miss a payment?",
      content: "Let us know and we'll adjust the plan. There are no fees for changing your schedule."
    }, {
      title: "Can I pay it off sooner?",
      content: "Yes — you can make extra payments or clear the balance any time from your portal."
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: setAgree,
    label: "I've read and agree to the payment plan terms"
  })), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "xl",
    fullWidth: true,
    disabled: !agree,
    onClick: onConfirm
  }, "Confirm plan"));
}

/* ---------- Screen 4 — Done ---------- */
function Done({
  state,
  onRestart
}) {
  const periodsLabel = {
    Weekly: "week",
    Fortnightly: "fortnight",
    Monthly: "month"
  }[state.frequency];
  return /*#__PURE__*/React.createElement(Shell, {
    step: 3
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "16px 8px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--success-50)",
      color: "var(--success-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(CheckBig, null)), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-sm-size)/var(--display-sm-line) var(--font-family-primary)",
      color: "var(--text-primary)",
      margin: "0 0 8px"
    }
  }, "You're all set, Sam"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md-size)",
      lineHeight: "var(--text-md-line)",
      color: "var(--text-secondary)",
      margin: "0 0 20px"
    }
  }, "Your plan of ", money(state.amount), " per ", periodsLabel, " is active. We've emailed a confirmation and your first payment is set for 23 June."), /*#__PURE__*/React.createElement(Badge, {
    color: "success",
    dot: true
  }, "Plan active"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "secondary",
    size: "lg",
    fullWidth: true
  }, "View my plan"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "link",
    onClick: onRestart
  }, "Start over")));
}
function BackLink({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "none",
      background: "transparent",
      color: "var(--text-secondary)",
      cursor: "pointer",
      fontFamily: "var(--font-family-primary)",
      fontSize: "var(--text-sm-size)",
      fontWeight: "var(--font-weight-medium)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M11 6l-6 6 6 6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Back");
}
function PortalApp() {
  const [screen, setScreen] = React.useState("landing");
  const [state, setState] = React.useState({
    frequency: "Fortnightly",
    amount: 75
  });
  const set = patch => setState(s => ({
    ...s,
    ...patch
  }));
  switch (screen) {
    case "plan":
      return /*#__PURE__*/React.createElement(PlanSetup, {
        state: state,
        set: set,
        onBack: () => setScreen("landing"),
        onContinue: () => setScreen("review")
      });
    case "review":
      return /*#__PURE__*/React.createElement(Review, {
        state: state,
        onBack: () => setScreen("plan"),
        onConfirm: () => setScreen("done")
      });
    case "done":
      return /*#__PURE__*/React.createElement(Done, {
        state: state,
        onRestart: () => setScreen("landing")
      });
    default:
      return /*#__PURE__*/React.createElement(Landing, {
        onStart: () => setScreen("plan"),
        onPayFull: () => setScreen("plan")
      });
  }
}
window.PortalApp = PortalApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer-portal/portal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/site.jsx
try { (() => {
/* InDebted.com — marketing homepage. B2B framing: outcomes, infrastructure,
   scale. Composes design-system primitives; brand gradients + website shadows. */

const DSM = window.InDebtedDesignSystem_78ee3b;
const {
  Button,
  Badge,
  Card
} = DSM;
const ArrowRight = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const NAV = ["Products", "Industries", "Customers", "Resources", "Company"];
const PRODUCTS = [{
  name: "Receive",
  color: "var(--blue-mana-500)",
  desc: "Pre-collections engagement that keeps customers on track before an account ever ages."
}, {
  name: "Collect",
  color: "var(--tiffany-blue-900)",
  desc: "AI-native collections that recover value while treating every customer with care."
}, {
  name: "Release",
  color: "var(--purple-illusion-500)",
  desc: "Digital settlement and closure that gives people a clear path to resolution."
}, {
  name: "Comply",
  color: "var(--warm-blue-300)",
  desc: "Compliance built into every interaction, audited and evidenced by default."
}];
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/InDebted Logo Navy.svg",
    alt: "InDebted",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: "var(--font-family-primary)",
      fontSize: "var(--text-md-size)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-secondary)",
      textDecoration: "none"
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "link"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "md"
  }, "Book a demo"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "80px 32px 64px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    color: "brand",
    dot: true
  }, "AI-native collections infrastructure"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-2xl-size)/var(--display-2xl-line) var(--font-family-primary)",
      letterSpacing: "-.02em",
      color: "var(--text-primary)",
      margin: "20px 0 0"
    }
  }, "Recover value, the right way"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-weight-regular) var(--text-xl-size)/var(--text-xl-line) var(--font-family-primary)",
      color: "var(--text-secondary)",
      margin: "20px 0 32px",
      maxWidth: 520
    }
  }, "InDebted helps the world's leading brands modernise collections \u2014 better outcomes for businesses, a better experience for customers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "xl",
    iconTrailing: /*#__PURE__*/React.createElement(ArrowRight, null)
  }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "secondary",
    size: "xl"
  }, "See how it works")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)",
      marginTop: 24
    }
  }, "Trusted by banks, fintechs and utilities in 12 markets")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 420,
      borderRadius: 24,
      background: "var(--gradient-brand-7)",
      boxShadow: "var(--shadow-website-lg)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/logomark-3d-teal.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      mixBlendMode: "luminosity",
      opacity: 0.35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 300,
      background: "var(--white)",
      borderRadius: 16,
      boxShadow: "var(--shadow-2xl)",
      padding: 20,
      fontFamily: "var(--font-family-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)"
    }
  }, "Recovery rate"), /*#__PURE__*/React.createElement(Badge, {
    color: "success",
    dot: true
  }, "+30%")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-weight-extrabold) 40px/1 var(--font-family-primary)",
      letterSpacing: "-.02em",
      color: "var(--text-primary)"
    }
  }, "31.4%"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      height: 8,
      borderRadius: 99,
      background: "var(--gray-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "72%",
      height: "100%",
      background: "var(--warm-blue-900)",
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: "var(--text-xs-size)",
      color: "var(--text-tertiary)"
    }
  }, "vs. 24% industry average"))));
}
function LogoStrip() {
  const names = ["Brightside", "Northwind", "Meridian", "Coastal", "Vantage", "Lumen"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "28px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 24
    }
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: "var(--font-family-primary)",
      fontSize: "var(--text-xl-size)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--heron-500)",
      letterSpacing: "-.01em"
    }
  }, n))));
}
function Products() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-lg-size)/var(--display-lg-line) var(--font-family-primary)",
      letterSpacing: "-.02em",
      color: "var(--text-primary)",
      margin: "0 0 16px"
    }
  }, "A system, not a suite"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-weight-regular) var(--text-lg-size)/var(--text-lg-line) var(--font-family-primary)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Four products designed to work together across the entire account lifecycle \u2014 each strong on its own, stronger as one platform.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 24
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    variant: "outlined",
    interactive: true,
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: p.color,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--font-weight-bold) var(--display-xs-size)/var(--display-xs-line) var(--font-family-primary)",
      color: "var(--text-primary)",
      margin: "0 0 8px"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md-size)",
      lineHeight: "var(--text-md-line)",
      color: "var(--text-secondary)",
      margin: "0 0 16px"
    }
  }, p.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-family-primary)",
      fontSize: "var(--text-md-size)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--warm-blue-900)"
    }
  }, "Explore ", p.name, " ", /*#__PURE__*/React.createElement(ArrowRight, null))))));
}
function Stats() {
  const stats = [["186k", "customers helped each quarter"], ["30%", "average uplift in recovery"], ["12", "markets, one platform"], ["94%", "positive customer sentiment"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--endless-galaxy-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "72px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-xl-size)/1 var(--font-family-primary)",
      letterSpacing: "-.02em",
      color: "var(--tiffany-blue-900)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-family-primary)",
      fontSize: "var(--text-md-size)",
      color: "rgba(255,255,255,0.75)"
    }
  }, l)))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 28,
      background: "var(--gradient-brand-7)",
      padding: "64px 56px",
      textAlign: "center",
      boxShadow: "var(--shadow-website-lg)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--font-weight-extrabold) var(--display-lg-size)/var(--display-lg-line) var(--font-family-primary)",
      letterSpacing: "-.02em",
      color: "var(--endless-galaxy-900)",
      margin: "0 0 16px"
    }
  }, "See what modern collections looks like"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xl-size)",
      color: "var(--endless-galaxy-700)",
      margin: "0 auto 28px",
      maxWidth: 520
    }
  }, "Book a 30-minute demo and we'll show you the platform with your own numbers."), /*#__PURE__*/React.createElement(Button, {
    hierarchy: "primary",
    size: "xl",
    iconTrailing: /*#__PURE__*/React.createElement(ArrowRight, null)
  }, "Book a demo")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/InDebted Logo Navy.svg",
    alt: "InDebted",
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-family-primary)",
      fontSize: "var(--text-sm-size)",
      color: "var(--text-tertiary)"
    }
  }, "\xA9 2026 InDebted. Changing the world of debt for good.")));
}
function MarketingSite() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      fontFamily: "var(--font-family-primary)"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(LogoStrip, null), /*#__PURE__*/React.createElement(Products, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.MarketingSite = MarketingSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.ProgressIndicator = __ds_scope.ProgressIndicator;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

})();
