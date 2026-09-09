/* @ds-bundle: {"format":4,"namespace":"SUKhNhSNDesignSystem_962022","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"Highlight","sourcePath":"components/core/Highlight.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OptionGroup","sourcePath":"components/forms/OptionGroup.jsx"},{"name":"OrderForm","sourcePath":"components/forms/OrderForm.jsx"},{"name":"PainPointCard","sourcePath":"components/marketing/PainPointCard.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"ProductCard","sourcePath":"components/marketing/ProductCard.jsx"},{"name":"USPItem","sourcePath":"components/marketing/USPItem.jsx"},{"name":"WarrantyNotice","sourcePath":"components/marketing/WarrantyNotice.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"28b193e6b889","components/core/Button.jsx":"dffaa901ed0e","components/core/GlassCard.jsx":"d717a7cc730e","components/core/Highlight.jsx":"5b7172f88b78","components/core/Icon.jsx":"87526fa6d512","components/core/SectionHeading.jsx":"468911709f52","components/feedback/Accordion.jsx":"d269b217badc","components/feedback/Modal.jsx":"5bd038c47474","components/forms/Input.jsx":"53b4b83b5c2e","components/forms/OptionGroup.jsx":"dcb517b1c082","components/forms/OrderForm.jsx":"4b22dcbf6314","components/marketing/PainPointCard.jsx":"34edaad331e6","components/marketing/ProcessStep.jsx":"bfd236e4f6ba","components/marketing/ProductCard.jsx":"1f9ea13339b4","components/marketing/USPItem.jsx":"758bee6f7339","components/marketing/WarrantyNotice.jsx":"8d4685276605","ui_kits/landing/data.js":"ed81aa17978a","ui_kits/landing/screen-app.jsx":"793494c97e4c","ui_kits/landing/screen-catalog.jsx":"20cc53529b31","ui_kits/landing/screen-chrome.jsx":"88af25547b54","ui_kits/landing/screen-hero.jsx":"cdb3009d1b02","ui_kits/landing/screen-story.jsx":"3d5fd708050b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SUKhNhSNDesignSystem_962022 = window.SUKhNhSNDesignSystem_962022 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  gold: {
    bg: "rgba(243,156,18,.14)",
    fg: "var(--durian-gold-bright)",
    bd: "rgba(243,156,18,.45)"
  },
  green: {
    bg: "rgba(39,174,96,.14)",
    fg: "var(--garden-green-bright)",
    bd: "rgba(39,174,96,.45)"
  },
  frost: {
    bg: "rgba(240,248,255,.10)",
    fg: "var(--frost)",
    bd: "rgba(240,248,255,.30)"
  },
  solidGold: {
    bg: "var(--durian-gold)",
    fg: "var(--text-on-gold)",
    bd: "transparent"
  },
  solidGreen: {
    bg: "var(--garden-green)",
    fg: "var(--text-on-green)",
    bd: "transparent"
  }
};

/** Small pill label: "Khuyên dùng", "Best Seller", "100% Khánh Sơn". */
function Badge({
  children,
  tone = "gold",
  icon,
  uppercase = true,
  style
}) {
  const t = TONES[tone] || TONES.gold;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background: t.bg,
      color: t.fg,
      border: "1px solid " + t.bd,
      borderRadius: "var(--radius-pill)",
      padding: "5px 12px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-fine)",
      lineHeight: 1,
      letterSpacing: uppercase ? "var(--tracking-caps)" : "var(--tracking-normal)",
      textTransform: uppercase ? "uppercase" : "none",
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  big: {
    fontSize: "var(--text-cta)",
    padding: "18px 34px",
    borderRadius: "var(--radius-pill)"
  },
  md: {
    fontSize: "16px",
    padding: "13px 24px",
    borderRadius: "var(--radius-pill)"
  },
  sm: {
    fontSize: "14px",
    padding: "9px 16px",
    borderRadius: "var(--radius-pill)"
  }
};
const VARIANTS = {
  primary: {
    background: "linear-gradient(180deg,var(--durian-gold-bright) 0%,var(--durian-gold) 55%,var(--durian-gold-deep) 100%)",
    color: "var(--text-on-gold)",
    border: "1px solid rgba(255,255,255,.22)",
    boxShadow: "var(--glow-gold), var(--shadow-inset-top)"
  },
  secondary: {
    background: "transparent",
    color: "var(--garden-green-bright)",
    border: "1.5px solid var(--garden-green)",
    boxShadow: "none"
  },
  green: {
    background: "linear-gradient(180deg,var(--garden-green-bright) 0%,var(--garden-green) 60%,var(--garden-green-deep) 100%)",
    color: "var(--text-on-green)",
    border: "1px solid rgba(255,255,255,.18)",
    boxShadow: "var(--glow-green), var(--shadow-inset-top)"
  },
  ghost: {
    background: "rgba(255,255,255,.04)",
    color: "var(--text-body)",
    border: "1px solid var(--border-card)",
    boxShadow: "none"
  }
};

/** Gold "Big CTA" and its companions. Presses in 3D on :active, glows on hover. */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  pulse = false,
  disabled = false,
  iconLeft,
  iconRight,
  type = "button",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const boost = variant === "primary" ? "var(--glow-gold-strong), var(--shadow-inset-top)" : variant === "green" ? "var(--glow-green), var(--shadow-inset-top)" : v.boxShadow;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      ...v,
      ...s,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--leading-cta)",
      letterSpacing: "var(--tracking-tight)",
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      textAlign: "center",
      whiteSpace: "nowrap",
      transform: down ? "scale(var(--press-scale)) translateY(1px)" : hover && !disabled ? "translateY(-2px)" : "none",
      boxShadow: down ? "var(--shadow-press)" : hover && !disabled ? boost : v.boxShadow,
      filter: hover && !disabled && variant === "secondary" ? "brightness(1.25)" : "none",
      backgroundColor: hover && !disabled && variant === "secondary" ? "rgba(39,174,96,.12)" : undefined,
      transition: "all var(--dur-base) var(--ease-standard)",
      animation: pulse && !disabled ? "sks-pulse 2.4s var(--ease-standard) infinite" : "none"
    }
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
const EDGES = {
  neutral: "var(--border-card)",
  green: "var(--garden-green)",
  gold: "rgba(243,156,18,.55)",
  none: "transparent"
};

/** The Glassmorphism surface every content block sits on. */
function GlassCard({
  children,
  edge = "neutral",
  radius = "var(--radius-lg)",
  pad = "var(--space-6)",
  glow = false,
  hoverLift = false,
  frost = false,
  as = "div",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    onMouseEnter: hoverLift ? () => setHover(true) : undefined,
    onMouseLeave: hoverLift ? () => setHover(false) : undefined,
    style: {
      position: "relative",
      background: "var(--surface-card)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      border: "1px solid " + (hover ? "var(--border-card-hover)" : EDGES[edge]),
      borderRadius: radius,
      padding: pad,
      boxShadow: (glow ? edge === "green" ? "var(--glow-green), " : "var(--glow-gold), " : "") + (hover ? "var(--shadow-card-hover)" : "var(--shadow-card)") + ", var(--shadow-inset-top)",
      transform: hover ? "scale(var(--lift-hover))" : "none",
      transition: "all var(--dur-base) var(--ease-standard)",
      overflow: "hidden",
      ...style
    }
  }, frost && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--frost-veil)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Highlight.jsx
try { (() => {
/** Inline keyword emphasis — the brand's single typographic accent device. */
function Highlight({
  children,
  tone = "gold",
  underline = false,
  style
}) {
  const color = tone === "green" ? "var(--garden-green-bright)" : tone === "frost" ? "var(--frost)" : "var(--durian-gold)";
  return /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "normal",
      color,
      fontWeight: "var(--weight-extrabold)",
      backgroundImage: underline ? "linear-gradient(transparent 68%, rgba(243,156,18,.35) 68%)" : "none",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = "https://unpkg.com/lucide-static@0.446.0/icons/";

/**
 * Lucide glyph tinted with currentColor via CSS mask.
 * SUBSTITUTION: the source specs describe 3D rendered icons but ship no icon
 * assets, so Lucide (2px stroke, rounded caps) stands in. Swap CDN for a local
 * assets/icons path once real artwork exists.
 */
function Icon({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth,
  title,
  style
}) {
  const url = CDN + name + ".svg";
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": title || name,
    style: {
      display: "inline-block",
      flex: "0 0 auto",
      width: size + "px",
      height: size + "px",
      backgroundColor: color,
      WebkitMaskImage: "url(" + url + ")",
      maskImage: "url(" + url + ")",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      strokeWidth: strokeWidth,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Section eyebrow + 36px title + optional lead paragraph. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: align === "center" ? "760px" : "620px",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-fine)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--durian-gold)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-section)",
      lineHeight: "var(--leading-section)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      textWrap: "pretty"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/** FAQ accordion — raised forest surface, gold +/− marker, 300ms ease. */
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--surface-raised)",
        border: "1px solid " + (on ? "rgba(243,156,18,.4)" : "var(--border-card)"),
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        transition: "all var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(on ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        background: "transparent",
        border: "none",
        padding: "18px 20px",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--text-card-heading)",
        lineHeight: "var(--leading-card-heading)",
        color: "var(--text-heading)"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 auto",
        width: "28px",
        height: "28px",
        display: "grid",
        placeItems: "center",
        color: "var(--durian-gold)",
        fontSize: "26px",
        lineHeight: 1,
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-regular)",
        transform: on ? "rotate(180deg)" : "none",
        transition: "transform var(--dur-base) var(--ease-standard)"
      }
    }, on ? "−" : "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: on ? "320px" : "0px",
        opacity: on ? 1 : 0,
        transition: "all var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: "0 20px 20px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-size)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)",
        textWrap: "pretty"
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** Blurred-scrim glass modal, 24px radius. Order form lives inside. */
function Modal({
  open,
  title,
  subtitle,
  children,
  onClose,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 90,
      background: "var(--overlay-scrim)",
      backdropFilter: "var(--overlay-blur)",
      WebkitBackdropFilter: "var(--overlay-blur)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-5)",
      animation: "sks-fade var(--dur-base) var(--ease-out-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width + "px",
      maxHeight: "88vh",
      overflowY: "auto",
      background: "linear-gradient(180deg,rgba(22,39,30,.92) 0%,rgba(10,20,15,.95) 100%)",
      border: "1px solid var(--border-card-hover)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      boxShadow: "var(--shadow-modal), var(--shadow-inset-top)",
      animation: "sks-rise var(--dur-base) var(--ease-out-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-card-heading)",
      lineHeight: "var(--leading-card-heading)",
      color: "var(--text-heading)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u0110\xF3ng",
    style: {
      flex: "0 0 auto",
      width: "34px",
      height: "34px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,.06)",
      border: "1px solid var(--border-card)",
      color: "var(--warm-neutral)",
      fontSize: "18px",
      lineHeight: 1,
      cursor: "pointer",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, "\xD7")), children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Dark glass text field used in the order modal. */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
  multiline = false,
  rows = 3,
  readOnly = false,
  required = false,
  hint,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: "100%",
    boxSizing: "border-box",
    background: readOnly ? "rgba(243,156,18,.10)" : "rgba(255,255,255,.05)",
    border: "1px solid " + (focus ? "var(--durian-gold)" : "var(--border-card)"),
    borderRadius: "var(--radius-sm)",
    padding: "13px 14px",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-size)",
    lineHeight: "var(--leading-body)",
    color: readOnly ? "var(--durian-gold-bright)" : "var(--pure-white)",
    outline: "none",
    resize: multiline ? "vertical" : undefined,
    boxShadow: focus ? "0 0 0 3px rgba(243,156,18,.18)" : "none",
    transition: "all var(--dur-fast) var(--ease-standard)"
  };
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "14px",
      color: "var(--warm-neutral)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--durian-gold)"
    }
  }, " *")), /*#__PURE__*/React.createElement(Tag, {
    name: name,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    placeholder: placeholder,
    readOnly: readOnly,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-fine)",
      color: "rgba(224,224,224,.6)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionGroup.jsx
try { (() => {
/** Segmented pack-size selector: [ 500g ] [ 1kg (Khuyên dùng) ]. */
function OptionGroup({
  label,
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "14px",
      color: "var(--warm-neutral)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "radio",
      "aria-checked": on,
      type: "button",
      onClick: () => onChange && onChange(o.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: on ? "rgba(243,156,18,.16)" : "rgba(255,255,255,.04)",
        border: "1.5px solid " + (on ? "var(--durian-gold)" : "var(--border-card)"),
        color: on ? "var(--durian-gold-bright)" : "var(--text-body)",
        borderRadius: "var(--radius-pill)",
        padding: "11px 18px",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "15px",
        cursor: "pointer",
        boxShadow: on ? "var(--glow-gold)" : "none",
        transition: "all var(--dur-base) var(--ease-standard)"
      }
    }, o.label, o.flag && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: on ? "solidGold" : "gold",
      style: {
        fontSize: "11px",
        padding: "3px 8px"
      }
    }, o.flag));
  })));
}
Object.assign(__ds_scope, { OptionGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/OrderForm.jsx
try { (() => {
/** The "XÁC NHẬN ĐƠN HÀNG GIAO LẠNH TẬN TAY" form body. */
function OrderForm({
  product,
  onSubmit,
  submitLabel = "BẤM GỬI ĐƠN - SHOP GIAO NGAY",
  style
}) {
  const [f, setF] = React.useState({
    name: "",
    phone: "",
    address: "",
    note: ""
  });
  const set = k => e => setF({
    ...f,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit({
        ...f,
        product
      });
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "S\u1EA3n ph\u1EA9m ch\u1ECDn",
    value: product || "",
    readOnly: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "H\u1ECD v\xE0 t\xEAn",
    value: f.name,
    onChange: set("name"),
    placeholder: "Nguy\u1EC5n V\u0103n A",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i nh\u1EADn h\xE0ng",
    type: "tel",
    value: f.phone,
    onChange: set("phone"),
    placeholder: "09xx xxx xxx",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "\u0110\u1ECBa ch\u1EC9 giao h\xE0ng",
    value: f.address,
    onChange: set("address"),
    placeholder: "S\u1ED1 nh\xE0, \u0111\u01B0\u1EDDng, ph\u01B0\u1EDDng/x\xE3, t\u1EC9nh",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Ghi ch\xFA th\xEAm",
    multiline: true,
    rows: 3,
    value: f.note,
    onChange: set("note"),
    placeholder: "Giao gi\u1EDD h\xE0nh ch\xEDnh, g\u1ECDi tr\u01B0\u1EDBc khi t\u1EDBi\u2026"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    size: "big",
    block: true
  }, submitLabel));
}
Object.assign(__ds_scope, { OrderForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OrderForm.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PainPointCard.jsx
try { (() => {
/** Deliberately drab, hard-cornered card for the customer's pain. */
function PainPointCard({
  icon,
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      background: "var(--surface-negative)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-xs)",
      padding: "var(--space-5)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || "triangle-alert",
    size: 26,
    color: "var(--text-body)",
    style: {
      marginTop: "2px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "17px",
      lineHeight: "var(--leading-card-heading)",
      color: "var(--text-heading)"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, body)));
}
Object.assign(__ds_scope, { PainPointCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PainPointCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
/** One numbered step of the vườn → túi bóng process. */
function ProcessStep({
  index,
  icon,
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "62px",
      height: "62px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--radius-pill)",
      background: "radial-gradient(100% 100% at 30% 0%, rgba(243,156,18,.30) 0%, rgba(20,35,27,.9) 70%)",
      border: "1px solid rgba(243,156,18,.4)",
      boxShadow: "var(--glow-gold)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || "sparkles",
    size: 28,
    color: "var(--durian-gold-bright)"
  })), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "-6px",
      bottom: "-6px",
      width: "26px",
      height: "26px",
      borderRadius: "var(--radius-pill)",
      background: "var(--durian-gold)",
      color: "var(--text-on-gold)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-black)",
      fontSize: "13px"
    }
  }, index)), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "17px",
      lineHeight: "var(--leading-card-heading)",
      color: "var(--text-heading)"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, body));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProductCard.jsx
try { (() => {
/** Catalog card: image well, flavour spec list, pack-size selector, dual CTA. */
function ProductCard({
  name,
  tagline,
  badge,
  image,
  imageNote,
  specs = [],
  sizes = [],
  size,
  onSizeChange,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  edge = "neutral",
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    edge: edge,
    hoverLift: true,
    pad: "0",
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      background: image ? "center/cover no-repeat url(" + image + ")" : "radial-gradient(120% 100% at 50% 0%, rgba(243,156,18,.30) 0%, rgba(14,26,20,.9) 70%)",
      borderBottom: "1px solid var(--border-card)"
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-5)",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-fine)",
      lineHeight: "var(--leading-fine)",
      color: "rgba(240,248,255,.55)"
    }
  }, imageNote || "Ảnh sản phẩm 3D — chưa có asset"), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "14px",
      left: "14px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solidGold"
  }, badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--protection-gradient)",
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-card-heading)",
      lineHeight: "var(--leading-card-heading)",
      color: "var(--text-heading)",
      textWrap: "pretty"
    }
  }, name), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "14px",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--durian-gold)"
    }
  }, tagline)), specs.length > 0 && /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "grid",
      gap: "10px"
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "108px 1fr",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "14px",
      color: "rgba(240,248,255,.62)"
    }
  }, s.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, s.value)))), sizes.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.OptionGroup, {
    label: "Ch\u1ECDn quy c\xE1ch",
    options: sizes,
    value: size,
    onChange: onSizeChange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "var(--space-2)"
    }
  }, primaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "big",
    block: true,
    onClick: onPrimary
  }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    block: true,
    onClick: onSecondary
  }, secondaryLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/USPItem.jsx
try { (() => {
/** Green-lit benefit row — the attractive twin of PainPointCard. */
function USPItem({
  icon,
  title,
  body,
  tone = "green",
  style
}) {
  const color = tone === "gold" ? "var(--durian-gold-bright)" : tone === "frost" ? "var(--frost)" : "var(--garden-green-bright)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-sm)",
      display: "grid",
      placeItems: "center",
      background: "rgba(255,255,255,.05)",
      border: "1px solid var(--border-card)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || "check",
    size: 22,
    color: color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "17px",
      lineHeight: "var(--leading-card-heading)",
      color: "var(--text-heading)"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, body)));
}
Object.assign(__ds_scope, { USPItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/USPItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/WarrantyNotice.jsx
try { (() => {
/** The 1-đổi-1 guarantee frame — gold shield, 16px corners, green check list. */
function WarrantyNotice({
  badge,
  title,
  points = [],
  footnote,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "flex-start",
      flexWrap: "wrap",
      background: "linear-gradient(180deg,rgba(243,156,18,.10) 0%,rgba(20,35,27,.55) 100%)",
      border: "1px solid rgba(243,156,18,.42)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-6)",
      boxShadow: "var(--glow-gold), var(--shadow-inset-top)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "72px",
      height: "72px",
      borderRadius: "var(--radius-md)",
      display: "grid",
      placeItems: "center",
      background: "radial-gradient(100% 100% at 30% 0%, rgba(255,185,62,.35) 0%, rgba(20,35,27,.85) 75%)",
      border: "1px solid rgba(243,156,18,.55)",
      boxShadow: "var(--glow-gold)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield-check",
    size: 38,
    color: "var(--durian-gold-bright)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 300px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solidGold"
  }, badge), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-card-heading)",
      lineHeight: "var(--leading-card-heading)",
      color: "var(--text-heading)",
      textWrap: "pretty"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "grid",
      gap: "10px"
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 20,
    color: "var(--garden-green-bright)",
    style: {
      marginTop: "2px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, p)))), footnote && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-fine)",
      lineHeight: "var(--leading-fine)",
      color: "rgba(224,224,224,.62)"
    }
  }, footnote)));
}
Object.assign(__ds_scope, { WarrantyNotice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/WarrantyNotice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/data.js
try { (() => {
window.SKS_DATA = {
  products: [{
    id: "thai",
    name: "Sầu Riêng Thái Khánh Sơn (Monthong)",
    tagline: "NỮ HOÀNG DẺO SWEET",
    badge: "Khuyên dùng",
    edge: "neutral",
    imageNote: "Ảnh: múi sầu Thái vàng kem nhạt, cơm dày ráo dẻo, xếp gọn trong túi hút chân không. Chưa có asset thật.",
    specs: [{
      label: "Cơm sầu",
      value: "Vàng nhạt, dày dặn, ráo tay (không bết nhão)."
    }, {
      label: "Hương vị",
      value: "Ngọt thanh tự nhiên, béo vừa vặn, thơm dịu."
    }, {
      label: "Điểm cộng",
      value: "Hạt lép nhỏ, cấp đông ăn dẻo mịn như kem gelato."
    }, {
      label: "Gu hợp nhất",
      value: "Thích ngọt thanh, ăn nhiều không ngấy, mới tập ăn sầu."
    }],
    sizes: [{
      value: "500g",
      label: "Túi 500g"
    }, {
      value: "1kg",
      label: "Túi 1kg",
      flag: "Khuyên dùng"
    }],
    primaryLabel: "ĐẶT MUA SẦU THÁI NGAY",
    secondaryLabel: "ĐĂNG KÝ TRẢI NGHIỆM DÙNG THỬ"
  }, {
    id: "musang",
    name: "Sầu Riêng Musang King Khánh Sơn",
    tagline: "KING OF DURIAN — BÉO ĐỈNH CAO",
    badge: "Best Seller",
    edge: "gold",
    imageNote: "Ảnh: múi Musang King vàng rực, chất cơm mịn tan, giọt mật sầu chảy đọng. Chưa có asset thật.",
    specs: [{
      label: "Cơm sầu",
      value: "Vàng nghệ đậm đà, mịn màng như bơ."
    }, {
      label: "Hương vị",
      value: "Béo ngậy đậm đà, ngọt đậm, đắng nhẹ hậu vị đặc trưng."
    }, {
      label: "Điểm cộng",
      value: "Hạt siêu lép dẹp, thơm nồng nàn, ăn một múi là dính luôn."
    }, {
      label: "Gu hợp nhất",
      value: "Team mọt sầu chính hiệu, mê vị béo đậm thơm nồng."
    }],
    sizes: [{
      value: "500g",
      label: "Túi 500g"
    }, {
      value: "1kg",
      label: "Túi 1kg",
      flag: "Best Seller"
    }],
    primaryLabel: "ĐẶT MUA MUSANG KING NGAY",
    secondaryLabel: "ĐĂNG KÝ TRẢI NGHIỆM DÙNG THỬ"
  }],
  pains: [{
    icon: "dices",
    title: "Khui sầu như đánh bạc",
    body: "Mua nguyên quả về khui mồ hôi hột, mở ra đắng, sượng, cơm lép kẹp."
  }, {
    icon: "hand",
    title: "Sợ đứt tay, dính nhựa",
    body: "Khui xong tay dính đầy nhựa, gai đâm đau điếng."
  }, {
    icon: "truck",
    title: "Giao xa biến dạng",
    body: "Ship xa về tới nơi sầu bị nhão, lên men, mất vị ngon ban đầu."
  }],
  usps: [{
    icon: "snowflake",
    tone: "frost",
    title: "Cấp đông chuẩn đỉnh",
    body: "Tách múi tươi nóng từ vườn, ướp lạnh ngay lập tức. Ship từ Khánh Sơn tới tận tay vẫn nguyên vị ngọt béo, mát lạnh cực chill!"
  }, {
    icon: "search-check",
    tone: "green",
    title: "100% múi sầu được “audit”",
    body: "Tớ và cha mẹ tự tay chọn từng múi. Múi nào sượng, lỗi — LOẠI NGAY!"
  }, {
    icon: "shopping-bag",
    tone: "gold",
    title: "Túi bóng xịn xò, cực tiện lợi",
    body: "Mở bao ra là chén, không cần dao thớt rườm rà. Mang đi làm, đi học, đi picnic bao tiện!"
  }, {
    icon: "mountain",
    tone: "green",
    title: "Gốc đất Khánh Sơn",
    body: "Hương vị béo đậm đặc trưng mà không vùng đất nào nhái được."
  }],
  steps: [{
    icon: "trees",
    title: "Vườn Khánh Sơn",
    body: "Cha mẹ tớ gắn bó cả đời với từng gốc sầu riêng."
  }, {
    icon: "search-check",
    title: "Kiểm tra từng múi",
    body: "Sượng, đắng, lép — loại ngay tại vườn."
  }, {
    icon: "snowflake",
    title: "Cấp đông tươi lạnh",
    body: "Ướp lạnh nhanh, giữ trọn độ béo và độ dẻo."
  }, {
    icon: "shopping-bag",
    title: "Túi bóng xịn xò",
    body: "Hút chân không, mở túi ra là chén ngay."
  }],
  faq: [{
    q: "Sầu cấp đông ăn có bị mất vị không?",
    a: "Không nha! Công nghệ cấp đông nhanh giúp giữ trọn độ béo ngậy và độ dẻo của sầu Khánh Sơn. Ăn mát lạnh như kem sầu riêng luôn!"
  }, {
    q: "Ship xa có bị tan chảy hay hư hỏng không?",
    a: "Bên tớ đóng thùng xốp giữ nhiệt + đá khô chuyên dụng. Đảm bảo giao tới tận tay bạn vẫn giữ độ đông lạnh chuẩn xịn."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/data.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/screen-app.jsx
try { (() => {
const {
  Modal,
  OrderForm,
  Button,
  Icon
} = window.SUKhNhSNDesignSystem_962022;
function LandingApp() {
  const [order, setOrder] = React.useState(null);
  const [done, setDone] = React.useState(null);
  const onOrder = product => {
    setDone(null);
    setOrder(product);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    onOrder: onOrder
  }), /*#__PURE__*/React.createElement(Hero, {
    onOrder: onOrder
  }), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(PainSolution, null), /*#__PURE__*/React.createElement(Catalog, {
    onOrder: onOrder
  }), /*#__PURE__*/React.createElement(GuaranteeAndFaq, null), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(Modal, {
    open: !!order && !done,
    onClose: () => setOrder(null),
    title: "X\xC1C NH\u1EACN \u0110\u01A0N H\xC0NG GIAO L\u1EA0NH T\u1EACN TAY",
    subtitle: "T\u1EDB g\u1ECDi x\xE1c nh\u1EADn trong 15 ph\xFAt, \u0111\xF3ng th\xF9ng x\u1ED1p + \u0111\xE1 kh\xF4 r\u1ED3i giao ngay."
  }, /*#__PURE__*/React.createElement(OrderForm, {
    product: order || "",
    onSubmit: v => setDone(v)
  })), /*#__PURE__*/React.createElement(Modal, {
    open: !!done,
    onClose: () => {
      setDone(null);
      setOrder(null);
    },
    title: "\u0110\u01A0N \u0110\xC3 G\u1EECI \u2014 SHOP GIAO NGAY!",
    width: 460
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "party-popper",
    size: 40,
    color: "var(--durian-gold-bright)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, "C\u1EA3m \u01A1n ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-heading)"
    }
  }, done && done.name || "bạn"), " nhaa! T\u1EDB s\u1EBD g\u1ECDi s\u1ED1", " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--durian-gold)"
    }
  }, done && done.phone || "—"), " \u0111\u1EC3 x\xE1c nh\u1EADn", " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-heading)"
    }
  }, done && done.product), " r\u1ED3i c\u1EA5p \u0111\xF4ng giao li\u1EC1n."), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    onClick: () => {
      setDone(null);
      setOrder(null);
    }
  }, "XONG, V\u1EC0 TRANG CH\u1EE6"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(LandingApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/screen-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/screen-catalog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ProductCard,
  GlassCard,
  Button,
  Badge,
  Icon,
  Highlight,
  WarrantyNotice,
  Accordion
} = window.SUKhNhSNDesignSystem_962022;
function Catalog({
  onOrder
}) {
  const d = window.SKS_DATA;
  const [sizes, setSizes] = React.useState({
    thai: "1kg",
    musang: "1kg"
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "catalog",
    style: {
      background: "var(--bg-page-gradient)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m",
    title: "Ch\u1ECDn gu c\u1EE7a b\u1EA1n \u2014 Th\xE1i d\u1EBBo sweet hay Musang b\xE9o \u0111\u1EC9nh?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, d.products.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    size: sizes[p.id],
    onSizeChange: v => setSizes({
      ...sizes,
      [p.id]: v
    }),
    onPrimary: () => onOrder(p.name + " · Túi " + sizes[p.id]),
    onSecondary: () => onOrder("Dùng thử · " + p.name)
  })))), /*#__PURE__*/React.createElement(GlassCard, {
    edge: "gold",
    glow: true,
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "64px",
      height: "64px",
      borderRadius: "var(--radius-md)",
      display: "grid",
      placeItems: "center",
      background: "radial-gradient(100% 100% at 30% 0%, rgba(255,185,62,.35) 0%, rgba(20,35,27,.85) 75%)",
      border: "1px solid rgba(243,156,18,.55)",
      boxShadow: "var(--glow-gold)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 30,
    color: "var(--durian-gold-bright)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solidGold"
  }, "Best choice"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-card-heading)",
      lineHeight: "var(--leading-card-heading)",
      color: "var(--text-heading)"
    }
  }, "Combo tr\u1EA3i nghi\u1EC7m \u201CDuo Gen Z\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, "1 t\xFAi Th\xE1i + 1 t\xFAi Musang King \u2014 \u0103n th\u1EED tr\u1ECDn v\u1EB9n c\u1EA3 ", /*#__PURE__*/React.createElement(Highlight, null, "2 h\u01B0\u01A1ng v\u1ECB hot nh\u1EA5t"), ".")), /*#__PURE__*/React.createElement(Button, {
    size: "big",
    onClick: () => onOrder("Combo Duo Gen Z · 1 Thái + 1 Musang King")
  }, "\u0110\u1EB6T COMBO 2 LO\u1EA0I \u2014 MI\u1EC4N PH\xCD SHIP T\u1EACN NH\xC0")))));
}
function GuaranteeAndFaq() {
  const d = window.SKS_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: "var(--deep-forest-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "B\u1EA3o h\xE0nh & ch\xEDnh s\xE1ch",
    title: "Mua h\xE0ng Gen Z \u2014 Uy t\xEDn chu\u1EA9n 100%!"
  }), /*#__PURE__*/React.createElement(WarrantyNotice, {
    badge: "Ch\xEDnh s\xE1ch 1-\u0111\u1ED5i-1 ho\u1EB7c ho\xE0n ti\u1EC1n",
    title: "Nh\u1EADn h\xE0ng kh\xF4ng \u0111\xFAng m\xF4 t\u1EA3? M\xFAi b\u1ECB s\u01B0\u1EE3ng, \u0111\u1EAFng hay ch\u1EA5t l\u01B0\u1EE3ng k\xE9m?",
    points: ["Cực kỳ đơn giản: bạn chỉ cần QUAY VIDEO KHI BÓC HÀNG, gửi ngay cho tớ.", "Tớ hoàn tiền 100% hoặc gửi túi mới ngay lập tức mà không câu nệ!"],
    footnote: "\xC1p d\u1EE5ng cho m\u1ECDi \u0111\u01A1n giao l\u1EA1nh t\u1EEB Kh\xE1nh S\u01A1n, to\xE0n qu\u1ED1c."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,320px) minmax(0,1fr)",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "FAQ",
    title: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
    lead: "C\xF2n th\u1EAFc m\u1EAFc g\xEC c\u1EE9 nh\u1EAFn t\u1EDB nha!",
    style: {
      maxWidth: "none"
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: d.faq
  }))));
}
Object.assign(window, {
  Catalog,
  GuaranteeAndFaq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/screen-catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/screen-chrome.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon
} = window.SUKhNhSNDesignSystem_962022;
function Wordmark({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: size + "px",
      letterSpacing: "-.02em",
      color: "var(--durian-gold)"
    }
  }, "S\u1EA6U KH\xC1NH S\u01A0N"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size * .42 + "px",
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "var(--garden-green-bright)"
    }
  }, "c\u1EA5p \u0111\xF4ng \xB7 gen z"));
}
function SiteHeader({
  onOrder
}) {
  const links = [["story", "Câu chuyện"], ["solution", "Giải pháp"], ["catalog", "Sản phẩm"], ["faq", "FAQ"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(14,26,20,.78)",
      backdropFilter: "var(--glass-blur)",
      borderBottom: "1px solid var(--border-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "14px var(--space-5)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      marginLeft: "auto"
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "15px",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onOrder("Combo Duo Gen Z · 1 Thái + 1 Musang King")
  }, "\u0110\u1EB6T MUA")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-card)",
      background: "var(--deep-forest-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-7) var(--space-5)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 260px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 18
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "14px",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      maxWidth: "42ch"
    }
  }, "S\u1EA7u ri\xEAng Kh\xE1nh S\u01A1n ch\xEDnh hi\u1EC7u \u2014 kh\xF4ng s\u01B0\u1EE3ng, kh\xF4ng cay \u0111\u1EAFng, ch\u1EC9 c\xF3 B\xC9O NG\u1EACY & CHIU CHIU!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "100% Kh\xE1nh S\u01A1n"), /*#__PURE__*/React.createElement(Badge, {
    tone: "frost"
  }, "Giao l\u1EA1nh to\xE0n qu\u1ED1c"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 1 200px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--durian-gold)"
    }
  }, "Li\xEAn h\u1EC7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--garden-green-bright)"
  }), "Ch\u01B0a c\xF3 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i th\u1EADt"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--garden-green-bright)"
  }), "Kh\xE1nh S\u01A1n, Kh\xE1nh Ho\xE0")), /*#__PURE__*/React.createElement("p", {
    style: {
      flex: "1 1 100%",
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "rgba(240,248,255,.4)"
    }
  }, "Recreation from the supplied landing-page & design specs. Photography, 3D renders, mascot artwork and real contact details were not provided.")));
}
Object.assign(window, {
  Wordmark,
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/screen-chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/screen-hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon,
  Highlight
} = window.SUKhNhSNDesignSystem_962022;
function Hero({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--bg-page-gradient)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(90% 70% at 78% 8%, rgba(243,156,18,.28) 0%, rgba(14,26,20,0) 62%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-5)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.05fr) minmax(0,.95fr)",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Gen Z kh\u1EDFi nghi\u1EC7p"), /*#__PURE__*/React.createElement(Badge, {
    tone: "frost"
  }, "C\u1EA5p \u0111\xF4ng chu\u1EA9n x\u1ECBn")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "var(--text-hero)",
      lineHeight: "var(--leading-hero)",
      letterSpacing: "-.02em",
      color: "var(--text-heading)",
      textWrap: "pretty"
    }
  }, "S\u1EA6U KH\xC1NH S\u01A0N B\u1EAET TREND \u2014 ", /*#__PURE__*/React.createElement(Highlight, null, "NGON QU\xCAN L\u1ED0I V\u1EC0"), ", KH\xD4NG C\u1EA6N C\u1EF0C C\xD4NG KHUI!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "52ch",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, "M\xFAi b\xE9o ng\u1EADy, c\u1EA5p \u0111\xF4ng chu\u1EA9n x\u1ECBn, m\u1EDF t\xFAi ra l\xE0 ch\xE9n ngay \u2014 chu\u1EA9n gu Gen Z chill \u0111\u1EC9nh khao kh\xE1t!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "big",
    pulse: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "snowflake",
      size: 20
    }),
    onClick: () => onOrder("Combo Duo Gen Z · 1 Thái + 1 Musang King")
  }, "\u0110\u1EB6T MUA L\u1EA0NH T\u1EACN TAY"), /*#__PURE__*/React.createElement(Button, {
    size: "big",
    variant: "secondary",
    onClick: () => onOrder("Đăng ký trải nghiệm dùng thử")
  }, "\u0110\u0102NG K\xDD TR\u1EA2I NGHI\u1EC6M"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      minWidth: 0,
      borderRadius: "var(--radius-xl)",
      background: "radial-gradient(100% 100% at 50% 0%, rgba(243,156,18,.22) 0%, rgba(20,35,27,.7) 68%)",
      border: "1px solid var(--border-card)",
      boxShadow: "var(--shadow-card), var(--shadow-inset-top)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)",
      textAlign: "center",
      animation: "sks-float 7s var(--ease-standard) infinite"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--radius-xl)",
      background: "var(--frost-veil)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "snowflake",
    size: 44,
    color: "var(--frost)",
    style: {
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "17px",
      color: "var(--text-heading)"
    }
  }, "Interactive 3D canvas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11.5px",
      lineHeight: 1.6,
      color: "rgba(240,248,255,.55)",
      maxWidth: "34ch"
    }
  }, "Spec calls for a durian splitting mid-air with 3D ice crystals and parallax. No 3D asset, render or mascot artwork was supplied \u2014 slot left empty on purpose.")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/screen-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/screen-story.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  GlassCard,
  ProcessStep,
  Highlight,
  PainPointCard,
  USPItem,
  Badge
} = window.SUKhNhSNDesignSystem_962022;
function Story() {
  const d = window.SKS_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "story",
    style: {
      background: "var(--bg-page-gradient)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "C\xE2u chuy\u1EC7n kh\u1EDFi nghi\u1EC7p",
    title: "\u201CCha m\u1EB9 l\xE0m v\u01B0\u1EDDn x\u1ECBn, Gen Z \u0111\u01B0a S\u1EA7u Kh\xE1nh S\u01A1n v\u01B0\u01A1n xa!\u201D",
    lead: "Th\u1EA5y s\u1EA7u ngon \u0111\u1EC9nh khao kh\xE1t nh\u01B0ng m\u1ED7i l\u1EA7n mua v\u1EC1 \u0103n l\u1EA1i v\u1EA5t v\u1EA3 khui \u2014 t\u1EDB quy\u1EBFt \u0111\u1ECBnh \u201Cs\u1EC9n\u201D c\xF9ng cha m\u1EB9."
  }), /*#__PURE__*/React.createElement(GlassCard, {
    glow: false,
    frost: true,
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-6)"
    }
  }, d.steps.map((s, i) => /*#__PURE__*/React.createElement(ProcessStep, _extends({
    key: i,
    index: i + 1
  }, s)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-6) 0 0",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, /*#__PURE__*/React.createElement(Highlight, null, "C\u1EF1c t\u1EEB trong m\xE1u:"), " cha m\u1EB9 t\u1EDB g\u1EAFn b\xF3 c\u1EA3 \u0111\u1EDDi v\u1EDBi t\u1EEBng g\u1ED1c s\u1EA7u ri\xEAng \u1EDF d\u1EA3i \u0111\u1EA5t Kh\xE1nh S\u01A1n \u2014 n\u01A1i th\u1ED5 nh\u01B0\u1EE1ng \u201C\u0111\u1EBB\u201D ra nh\u1EEFng qu\u1EA3 s\u1EA7u c\u01A1m v\xE0ng h\u1EA1t l\xE9p ng\u1ECDt l\u1ECBm. S\u1EA7u ri\xEAng Kh\xE1nh S\u01A1n ch\xEDnh hi\u1EC7u \u2014 kh\xF4ng s\u01B0\u1EE3ng, kh\xF4ng cay \u0111\u1EAFng, ch\u1EC9 c\xF3 ", /*#__PURE__*/React.createElement(Highlight, null, "B\xC9O NG\u1EACY & CHIU CHIU"), "!"))));
}
function PainSolution() {
  const d = window.SKS_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "solution",
    style: {
      background: "var(--deep-forest-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "N\u1ED7i \u0111au vs gi\u1EA3i ph\xE1p",
    title: "B\u1EA1n c\xF3 \u0111ang ng\xE1n ng\u1EA9m v\xEC nh\u1EEFng pha \u201Ccheck-in\u201D s\u1EA7u ri\xEAng b\u1EA5t l\u1EF1c?",
    lead: "B\xEAn tr\xE1i l\xE0 chuy\u1EC7n c\u0169. B\xEAn ph\u1EA3i l\xE0 S\u1EA7u Kh\xE1nh S\u01A1n c\u1EA5p \u0111\xF4ng."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(224,224,224,.6)"
    }
  }, "N\u1ED7i \u0111au kh\xE1ch h\xE0ng"), d.pains.map((p, i) => /*#__PURE__*/React.createElement(PainPointCard, _extends({
    key: i
  }, p)))), /*#__PURE__*/React.createElement(GlassCard, {
    edge: "green",
    glow: true,
    frost: true,
    pad: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Gi\u1EA3i ph\xE1p & USP"), d.usps.map((u, i) => /*#__PURE__*/React.createElement(USPItem, _extends({
    key: i
  }, u))))))));
}
Object.assign(window, {
  Story,
  PainSolution
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/screen-story.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.OptionGroup = __ds_scope.OptionGroup;

__ds_ns.OrderForm = __ds_scope.OrderForm;

__ds_ns.PainPointCard = __ds_scope.PainPointCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.USPItem = __ds_scope.USPItem;

__ds_ns.WarrantyNotice = __ds_scope.WarrantyNotice;

})();
