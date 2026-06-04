/* React hooks shim */
var useState      = React.useState;
var useEffect     = React.useEffect;
var useRef        = React.useRef;
var useMemo       = React.useMemo;
var useCallback   = React.useCallback;
var useReducer    = React.useReducer;
var useContext    = React.useContext;
var useLayoutEffect = React.useLayoutEffect;

/* ── trailhead/icons.jsx ── */
const Icon = ({ name, size = 18, color = "currentColor", style, className }) => {
  const S = (p) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", style, className }, p);
  switch (name) {
    case "bolt":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M13 2L4 14h6l-1 8 9-12h-6l1-8z", fill: color, stroke: "none" }));
    case "cloud":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M7 18a4 4 0 010-8 6 6 0 0111-1 4 4 0 011 8H7z" }));
    case "code":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M8 8l-4 4 4 4" }), /* @__PURE__ */ React.createElement("path", { d: "M16 8l4 4-4 4" }), /* @__PURE__ */ React.createElement("path", { d: "M14 4l-4 16" })));
    case "trail":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M5 19c4 0 4-6 8-6s4-6 8-6" }), /* @__PURE__ */ React.createElement("circle", { cx: "5", cy: "19", r: "1.5", fill: color }), /* @__PURE__ */ React.createElement("circle", { cx: "21", cy: "7", r: "1.5", fill: color })));
    case "badge":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "9", r: "6" }), /* @__PURE__ */ React.createElement("path", { d: "M8 13l-2 8 6-3 6 3-2-8" })));
    case "spark":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 3v4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17v4" }), /* @__PURE__ */ React.createElement("path", { d: "M3 12h4" }), /* @__PURE__ */ React.createElement("path", { d: "M17 12h4" }), /* @__PURE__ */ React.createElement("path", { d: "M5.6 5.6l2.8 2.8" }), /* @__PURE__ */ React.createElement("path", { d: "M15.6 15.6l2.8 2.8" }), /* @__PURE__ */ React.createElement("path", { d: "M5.6 18.4l2.8-2.8" }), /* @__PURE__ */ React.createElement("path", { d: "M15.6 8.4l2.8-2.8" })));
    case "arrow":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "M13 6l6 6-6 6" })));
    case "arrow-up-right":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M7 17L17 7" }), /* @__PURE__ */ React.createElement("path", { d: "M8 7h9v9" })));
    case "download":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 3v12" }), /* @__PURE__ */ React.createElement("path", { d: "M7 10l5 5 5-5" }), /* @__PURE__ */ React.createElement("path", { d: "M4 21h16" })));
    case "mail":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 7l9 7 9-7" })));
    case "linkedin":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M8 10v7" }), /* @__PURE__ */ React.createElement("path", { d: "M8 7v.01" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17v-4a2 2 0 014 0v4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 10v7" })));
    case "github":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" }));
    case "play":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M6 4l14 8-14 8V4z", fill: color, stroke: "none" }));
    case "pause":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "6", y: "4", width: "4", height: "16", fill: color, stroke: "none" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "4", width: "4", height: "16", fill: color, stroke: "none" })));
    case "check":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M4 12l5 5 11-12" }));
    case "menu":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M4 7h16" }), /* @__PURE__ */ React.createElement("path", { d: "M4 12h16" }), /* @__PURE__ */ React.createElement("path", { d: "M4 17h16" })));
    case "x":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12" }), /* @__PURE__ */ React.createElement("path", { d: "M18 6L6 18" })));
    case "star":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M12 3l2.6 6.3 6.4.5-5 4.3 1.7 6.4L12 17l-5.7 3.5 1.7-6.4-5-4.3 6.4-.5L12 3z" }));
    case "user":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 21c1-4 5-6 8-6s7 2 8 6" })));
    case "globe":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M3 12h18" }), /* @__PURE__ */ React.createElement("path", { d: "M12 3a14 14 0 010 18" }), /* @__PURE__ */ React.createElement("path", { d: "M12 3a14 14 0 000 18" })));
    case "shield":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" }));
    case "chart":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M4 20V8" }), /* @__PURE__ */ React.createElement("path", { d: "M10 20V4" }), /* @__PURE__ */ React.createElement("path", { d: "M16 20v-9" }), /* @__PURE__ */ React.createElement("path", { d: "M22 20H2" })));
    case "diamond":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M6 3h12l4 6-10 12L2 9l4-6z" }));
    case "circle":
      return S(/* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }));
    case "play-fill":
      return S(/* @__PURE__ */ React.createElement("polygon", { points: "6 4 20 12 6 20", fill: color, stroke: "none" }));
    case "git":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "6", r: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "18", r: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "12", r: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M6 8v8" }), /* @__PURE__ */ React.createElement("path", { d: "M16 12H8" })));
    case "database":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ellipse", { cx: "12", cy: "6", rx: "8", ry: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" }), /* @__PURE__ */ React.createElement("path", { d: "M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" })));
    case "flow":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "6", height: "6", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "15", y: "3", width: "6", height: "6", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "9", y: "15", width: "6", height: "6", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M9 6h6" }), /* @__PURE__ */ React.createElement("path", { d: "M6 9v3a3 3 0 003 3" }), /* @__PURE__ */ React.createElement("path", { d: "M18 9v3a3 3 0 01-3 3" })));
    case "phone":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.8a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.5 2.8.6a2 2 0 011.8 2z" }));
    case "whatsapp":
      return S(/* @__PURE__ */ React.createElement("path", { fill: color, stroke: "none", d: "M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.27-.14-1.16-.43-2.22-1.37-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47-.16 0-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.57.66.21 1.25.18 1.72.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.1-.25-.16-.53-.3zM12 2a10 10 0 00-8.66 14.99L2 22l5.12-1.33A10 10 0 1012 2z" }));
    case "pin":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "9", r: "2.5" })));
    case "cmd":
      return S(/* @__PURE__ */ React.createElement("path", { d: "M8 5a3 3 0 100 6h8a3 3 0 100-6 3 3 0 00-3 3v8a3 3 0 11-3 3 3 3 0 013-3h6a3 3 0 11-3 3" }));
    case "api":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }), /* @__PURE__ */ React.createElement("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })));
    case "robot":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "11", width: "18", height: "10", rx: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "5", r: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7v4" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "16", x2: "8", y2: "16", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "16", y1: "16", x2: "16", y2: "16", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M2 14h1" }), /* @__PURE__ */ React.createElement("path", { d: "M21 14h1" })));
    case "industries":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M22 21H2M19 21V10l-4-3v4l-4-3v4L7 8v13" })));
    case "deployment":
      return S(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M16 16l-4-4-4 4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 12v9" }), /* @__PURE__ */ React.createElement("path", { d: "M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" })));
    default:
      return null;
  }
};
function CertBadge({ title, sub, hue = 200, size = 200, spinning = false, kind = "admin", img }) {
  if (img) {
    return /* @__PURE__ */ React.createElement("div", { style: { width: size, height: size, perspective: 900 } }, /* @__PURE__ */ React.createElement("div", { className: spinning ? "badge-spin" : "", style: { width: "100%", height: "100%", transformStyle: "preserve-3d" } }, /* @__PURE__ */ React.createElement("img", { src: img, alt: title || "Salesforce Certification", style: { width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 12px 20px rgba(8,30,69,.5))" } })), /* @__PURE__ */ React.createElement("style", null, `
          .badge-spin { animation: badgeSpin 14s linear infinite; }
          @keyframes badgeSpin {
            0% { transform: rotateY(0deg) rotateX(8deg); }
            100% { transform: rotateY(360deg) rotateX(8deg); }
          }
        `));
  }
  const fillA = `hsl(${hue} 90% 60%)`;
  const fillB = `hsl(${hue + 18} 70% 35%)`;
  const fillC = `hsl(${hue - 10} 100% 80%)`;
  const ring = `hsl(${hue} 30% 96%)`;
  const ribbon = `hsl(${hue} 95% 28%)`;
  const KindGlyph = () => {
    const c = "#FFFFFF";
    const k = kind;
    if (k === "admin") return /* @__PURE__ */ React.createElement("g", { fill: c }, /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "90", r: "14" }), /* @__PURE__ */ React.createElement("path", { d: "M70 130c4-14 16-22 30-22s26 8 30 22z" }));
    if (k === "platform") return /* @__PURE__ */ React.createElement("g", { fill: c, stroke: c, strokeWidth: "3" }, /* @__PURE__ */ React.createElement("path", { d: "M85 95l15 15 15-15", fill: "none" }), /* @__PURE__ */ React.createElement("rect", { x: "85", y: "80", width: "30", height: "6" }));
    if (k === "service") return /* @__PURE__ */ React.createElement("g", { fill: "none", stroke: c, strokeWidth: "4", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M80 100a20 20 0 0140 0v8a8 8 0 01-8 8h-3" }), /* @__PURE__ */ React.createElement("rect", { x: "78", y: "100", width: "10", height: "14", rx: "2", fill: c, stroke: "none" }), /* @__PURE__ */ React.createElement("rect", { x: "113", y: "100", width: "10", height: "14", rx: "2", fill: c, stroke: "none" }));
    if (k === "omnistudio") return /* @__PURE__ */ React.createElement("g", { fill: "none", stroke: c, strokeWidth: "3" }, /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "100", r: "22" }), /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "100", r: "12" }), /* @__PURE__ */ React.createElement("path", { d: "M100 78v44M78 100h44" }));
    if (k === "agentforce") return /* @__PURE__ */ React.createElement("g", { fill: c }, /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "100", r: "20" }), /* @__PURE__ */ React.createElement("circle", { cx: "93", cy: "96", r: "3", fill: fillB }), /* @__PURE__ */ React.createElement("circle", { cx: "107", cy: "96", r: "3", fill: fillB }), /* @__PURE__ */ React.createElement("rect", { x: "92", y: "105", width: "16", height: "4", rx: "2", fill: fillB }), /* @__PURE__ */ React.createElement("rect", { x: "98", y: "76", width: "4", height: "6", fill: c }));
    if (k === "datacloud") return /* @__PURE__ */ React.createElement("g", { fill: c, stroke: c, strokeWidth: "2" }, /* @__PURE__ */ React.createElement("ellipse", { cx: "100", cy: "86", rx: "20", ry: "6", fill: c }), /* @__PURE__ */ React.createElement("path", { d: "M80 86v22c0 4 9 7 20 7s20-3 20-7V86", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M80 100c0 4 9 7 20 7s20-3 20-7", fill: "none" }));
    if (k === "ai") return /* @__PURE__ */ React.createElement("g", { fill: c }, /* @__PURE__ */ React.createElement("path", { d: "M100 78l6 14 14 2-10 10 3 14-13-7-13 7 3-14-10-10 14-2z" }));
    if (k === "associate") return /* @__PURE__ */ React.createElement("g", { fill: "none", stroke: c, strokeWidth: "4", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M82 102l12 12 24-26" }));
    if (k === "fsc") return /* @__PURE__ */ React.createElement("g", { fill: c }, /* @__PURE__ */ React.createElement("rect", { x: "82", y: "92", width: "36", height: "22", rx: "2" }), /* @__PURE__ */ React.createElement("rect", { x: "86", y: "85", width: "28", height: "6", fill: fillB }), /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "103", r: "4", fill: fillB }));
    if (k === "js") return /* @__PURE__ */ React.createElement("g", { fill: c }, /* @__PURE__ */ React.createElement("rect", { x: "78", y: "78", width: "44", height: "44", rx: "6" }), /* @__PURE__ */ React.createElement("text", { x: "100", y: "110", textAnchor: "middle", fontFamily: "JetBrains Mono, monospace", fontWeight: "800", fontSize: "18", fill: fillB }, "JS"));
    return null;
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: size, height: size, perspective: 900 } }, /* @__PURE__ */ React.createElement("div", { className: spinning ? "badge-spin" : "", style: { width: "100%", height: "100%", transformStyle: "preserve-3d" } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", width: "100%", height: "100%", style: { filter: "drop-shadow(0 18px 30px rgba(8,30,69,.25))" } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: `g-${hue}-a`, x1: "0", x2: "1", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: fillA }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: fillB })), /* @__PURE__ */ React.createElement("linearGradient", { id: `g-${hue}-shine`, x1: "0", x2: "1", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "rgba(255,255,255,.65)" }), /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: "rgba(255,255,255,0)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "rgba(255,255,255,.18)" }))), /* @__PURE__ */ React.createElement("polygon", { points: "100,6 178,50 178,150 100,194 22,150 22,50", fill: ring, stroke: "rgba(8,30,69,.08)" }), /* @__PURE__ */ React.createElement("polygon", { points: "100,22 162,57 162,143 100,178 38,143 38,57", fill: `url(#g-${hue}-a)` }), /* @__PURE__ */ React.createElement("polygon", { points: "100,22 162,57 162,143 100,178 38,143 38,57", fill: `url(#g-${hue}-shine)` }), /* @__PURE__ */ React.createElement(KindGlyph, null), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M58 168 L100 178 L142 168 L142 196 L100 184 L58 196 Z", fill: ribbon })), /* @__PURE__ */ React.createElement("rect", { x: "44", y: "120", width: "112", height: "30", rx: "4", fill: "rgba(255,255,255,.92)" }), /* @__PURE__ */ React.createElement("text", { x: "100", y: "140", textAnchor: "middle", fontFamily: "Manrope, sans-serif", fontWeight: "800", fontSize: "12", fill: ribbon, letterSpacing: "1.2" }, sub))), /* @__PURE__ */ React.createElement("style", null, `
        .badge-spin { animation: badgeSpin 14s linear infinite; }
        @keyframes badgeSpin {
          0% { transform: rotateY(0deg) rotateX(8deg); }
          100% { transform: rotateY(360deg) rotateX(8deg); }
        }
      `));
}
Object.assign(window, { Icon, CertBadge });


/* ── trailhead/bolt-trail.jsx ── */
function BoltTrail({ enabled = true, showCursor = true }) {
  const canvasRef = React.useRef(null);
  const dotRef = React.useRef(null);
  const stateRef = React.useRef({
    mouse: { x: -200, y: -200 },
    bolts: [],
    particles: [],
    raf: 0,
    lastSpawn: 0,
    running: false
  });
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const N = 18;
    for (let i = 0; i < N; i++) {
      stateRef.current.particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.04 - Math.random() * 0.12,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.4 + 0.15,
        hue: 200 + Math.random() * 30
      });
    }
    const boltPath = new Path2D("M3 -8 L-3 1 L0 1 L-2 8 L4 -1 L1 -1 Z");
    const tick = () => {
      const s = stateRef.current;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const p of s.particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = innerHeight + 10;
          p.x = Math.random() * innerWidth;
        }
        if (p.x < -10) p.x = innerWidth + 10;
        if (p.x > innerWidth + 10) p.x = -10;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue},90%,60%,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = s.bolts.length - 1; i >= 0; i--) {
        const b = s.bolts[i];
        b.life++;
        const t = b.life / b.ttl;
        if (t >= 1) {
          s.bolts.splice(i, 1);
          continue;
        }
        const alpha = 1 - t;
        ctx.save();
        ctx.translate(b.x, b.y + t * 16);
        ctx.rotate(b.rot);
        ctx.scale(b.size / 8 * (1 - t * 0.3), b.size / 8 * (1 - t * 0.3));
        ctx.shadowBlur = 14 * alpha;
        ctx.shadowColor = `rgba(0,161,224,${alpha})`;
        ctx.fillStyle = `rgba(0,161,224,${alpha * 0.95})`;
        ctx.fill(boltPath);
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.8})`;
        ctx.scale(0.5, 0.5);
        ctx.fill(boltPath);
        ctx.restore();
      }
      if (s.bolts.length > 0) {
        s.raf = requestAnimationFrame(tick);
      } else {
        s.running = false;
        s.raf = 0;
        ctx.clearRect(0, 0, innerWidth, innerHeight);
      }
    };
    const particleTick = () => {
      const s = stateRef.current;
      if (s.running) return;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const p of s.particles) {
        p.x += p.vx * 2;
        p.y += p.vy * 2;
        if (p.y < -10) {
          p.y = innerHeight + 10;
          p.x = Math.random() * innerWidth;
        }
        if (p.x < -10) p.x = innerWidth + 10;
        if (p.x > innerWidth + 10) p.x = -10;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue},90%,60%,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    const slowTimer = setInterval(particleTick, 66);
    const onMove = (e) => {
      const s = stateRef.current;
      s.mouse.x = e.clientX;
      s.mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
        const isInteractive = e.target?.closest("a,button,.hoverable,input,textarea,[data-cursor='hover']");
        dotRef.current.classList.toggle("hover", !!isInteractive);
      }
      if (!enabled) return;
      const now = performance.now();
      if (now - s.lastSpawn < 30) return;
      s.lastSpawn = now;
      s.bolts.push({
        x: e.clientX + (Math.random() - 0.5) * 8,
        y: e.clientY + (Math.random() - 0.5) * 8,
        life: 0,
        ttl: 32 + Math.random() * 18,
        size: 7 + Math.random() * 5,
        rot: (Math.random() - 0.5) * 0.6
      });
      if (s.bolts.length > 60) s.bolts.shift();
      if (!s.running) {
        s.running = true;
        s.raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      clearInterval(slowTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [enabled]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", { id: "bolt-canvas", ref: canvasRef }), showCursor && /* @__PURE__ */ React.createElement("div", { className: "cursor-trail-badge", ref: dotRef }, /* @__PURE__ */ React.createElement("img", { src: "assets/Cursor.svg", alt: "", style: { width: "100%", height: "100%", display: "block", pointerEvents: "none" } })));
}
Object.assign(window, { BoltTrail });


/* ── trailhead/three-orb.jsx ── */
function ThreeOrb({ height = 440, bare = false }) {
  const wrapRef = React.useRef(null);
  const stateRef = React.useRef({});
  React.useEffect(() => {
    if (window.__IS_MOBILE) return;
    if (!window.THREE) return;
    const THREE = window.THREE;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const width = wrap.clientWidth;
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0, 0);
    wrap.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 15);
    const amb = new THREE.AmbientLight(16777215, 0.55);
    scene.add(amb);
    const key = new THREE.DirectionalLight(16777215, 0.9);
    key.position.set(5, 6, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(7259135, 1);
    rim.position.set(-6, -4, -6);
    scene.add(rim);
    const pt = new THREE.PointLight(41440, 1.6, 12);
    pt.position.set(0, 0, 0);
    scene.add(pt);
    const root = new THREE.Group();
    scene.add(root);
    const coreGeo = new THREE.IcosahedronGeometry(1, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 41440,
      emissive: 17011,
      emissiveIntensity: 0.9,
      metalness: 0.35,
      roughness: 0.25,
      transparent: true,
      opacity: 0.35
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    root.add(core);
    const wireGeo = new THREE.IcosahedronGeometry(1.55, 2);
    const wireMat = new THREE.MeshBasicMaterial({ color: 11986687, wireframe: true, transparent: true, opacity: 0.35 });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    root.add(wire);
    const badgeCanvas = document.createElement("canvas");
    badgeCanvas.width = 1024;
    badgeCanvas.height = 1024;
    const bctx = badgeCanvas.getContext("2d");
    (function drawBadge() {
      const cx2 = 512, cy2 = 512;
      bctx.save();
      bctx.shadowColor = "rgba(0,160,255,.55)";
      bctx.shadowBlur = 60;
      const R = 380;
      bctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = Math.PI / 3 * i - Math.PI / 2;
        const x = cx2 + Math.cos(a) * R;
        const y = cy2 + Math.sin(a) * R;
        if (i === 0) bctx.moveTo(x, y);
        else bctx.lineTo(x, y);
      }
      bctx.closePath();
      const grad = bctx.createLinearGradient(cx2 - R, cy2 - R, cx2 + R, cy2 + R);
      grad.addColorStop(0, "#0A1B3C");
      grad.addColorStop(1, "#1A2D5C");
      bctx.fillStyle = grad;
      bctx.fill();
      bctx.restore();
      bctx.lineWidth = 5;
      bctx.strokeStyle = "rgba(180,230,255,.9)";
      bctx.beginPath();
      const R2 = R - 22;
      for (let i = 0; i < 6; i++) {
        const a = Math.PI / 3 * i - Math.PI / 2;
        const x = cx2 + Math.cos(a) * R2;
        const y = cy2 + Math.sin(a) * R2;
        if (i === 0) bctx.moveTo(x, y);
        else bctx.lineTo(x, y);
      }
      bctx.closePath();
      bctx.stroke();
      bctx.lineWidth = 2;
      bctx.strokeStyle = "rgba(255,255,255,.18)";
      bctx.setLineDash([4, 8]);
      bctx.beginPath();
      const R3 = R - 50;
      for (let i = 0; i < 6; i++) {
        const a = Math.PI / 3 * i - Math.PI / 2;
        const x = cx2 + Math.cos(a) * R3;
        const y = cy2 + Math.sin(a) * R3;
        if (i === 0) bctx.moveTo(x, y);
        else bctx.lineTo(x, y);
      }
      bctx.closePath();
      bctx.stroke();
      bctx.setLineDash([]);
      bctx.save();
      bctx.translate(cx2, cy2);
      bctx.fillStyle = "rgba(180,230,255,.85)";
      bctx.font = "700 38px 'JetBrains Mono', monospace";
      bctx.textAlign = "center";
      bctx.textBaseline = "middle";
      const text = "\u2605  12 \xD7 CERTIFIED  \u2605  SALESFORCE LEAD DEV  \u2605  ";
      const radius = 305;
      const total = text.length;
      const start = -Math.PI / 2 - 0.9;
      for (let i = 0; i < total; i++) {
        const a = start + 1.8 * i / (total - 1);
        bctx.save();
        bctx.rotate(a);
        bctx.translate(0, -radius);
        bctx.fillText(text[i], 0, 0);
        bctx.restore();
      }
      bctx.restore();
      bctx.fillStyle = "white";
      bctx.font = "800 280px 'Bricolage Grotesque', system-ui, sans-serif";
      bctx.textAlign = "center";
      bctx.textBaseline = "middle";
      bctx.fillText("YK", cx2, cy2 - 6);
      const bgrad = bctx.createLinearGradient(cx2 + 120, cy2 + 40, cx2 + 200, cy2 + 120);
      bgrad.addColorStop(0, "#FFD479");
      bgrad.addColorStop(1, "#FF6F00");
      bctx.fillStyle = bgrad;
      bctx.beginPath();
      const bx = cx2 + 175, by = cy2 + 70;
      bctx.moveTo(bx, by - 35);
      bctx.lineTo(bx - 18, by);
      bctx.lineTo(bx - 5, by);
      bctx.lineTo(bx - 12, by + 30);
      bctx.lineTo(bx + 18, by - 6);
      bctx.lineTo(bx + 4, by - 6);
      bctx.lineTo(bx + 12, by - 35);
      bctx.closePath();
      bctx.shadowColor = "rgba(255,140,40,.8)";
      bctx.shadowBlur = 30;
      bctx.fill();
      bctx.shadowBlur = 0;
      bctx.strokeStyle = "rgba(255,255,255,.45)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.moveTo(cx2 - 80, cy2 + 188);
      bctx.lineTo(cx2 + 80, cy2 + 188);
      bctx.stroke();
      bctx.fillStyle = "rgba(180,230,255,.95)";
      bctx.font = "700 30px 'JetBrains Mono', monospace";
      bctx.fillText("/ TRAILBLAZING SINCE 2018 /", cx2, cy2 + 215);
      bctx.fillStyle = "rgba(255,183,93,.95)";
      bctx.font = "600 22px 'JetBrains Mono', monospace";
      bctx.fillText("est. India \xB7 global", cx2, cy2 + 252);
    })();
    const badgeTex = new THREE.CanvasTexture(badgeCanvas);
    badgeTex.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1;
    const badgeMat = new THREE.SpriteMaterial({ map: badgeTex, transparent: true, depthWrite: false });
    const badge = new THREE.Sprite(badgeMat);
    badge.scale.set(2.6, 2.6, 1);
    badge.position.z = 0;
    scene.add(badge);
    const haloDisc = new THREE.Mesh(
      new THREE.CircleGeometry(1.7, 64),
      new THREE.MeshBasicMaterial({
        color: 41440,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending
      })
    );
    haloDisc.position.z = -0.05;
    scene.add(haloDisc);
    const haloGeo = new THREE.RingGeometry(1.85, 1.88, 96);
    const haloMat = new THREE.MeshBasicMaterial({ color: 41440, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI / 2.2;
    root.add(halo);
    const halo2 = halo.clone();
    halo2.scale.set(1.3, 1.3, 1.3);
    halo2.material = halo.material.clone();
    halo2.material.opacity = 0.14;
    root.add(halo2);
    const NODES = [
      { name: "Administrator", img: "assets/badges/2025-03_Platform-Admin_500x490.png", tilt: 0.1 },
      { name: "Platform Developer I", img: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev_500x490px.png", tilt: -0.1 },
      { name: "Platform Developer II", img: "assets/badges/2021-03_Badge_SF-Certified_Platform-Developer-II_500x490px.png", tilt: 0.2 },
      { name: "JavaScript Developer I", img: "assets/badges/2025-03_JavaScript-Dev_500x490.png", tilt: -0.2 },
      { name: "Service Cloud Consultant", img: "assets/badges/2021-03_Badge_SF-Certified_Service-Cloud-Consultant_500x490px.png", tilt: 0.1 },
      { name: "OmniStudio Developer", img: "assets/badges/omnistudio-developer.png", tilt: -0.1 },
      { name: "Financial Services Cloud", img: "assets/badges/fsc.png", tilt: 0.2 },
      { name: "Agentforce Specialist", img: "assets/badges/agentforce-specialist.png", tilt: -0.2 },
      { name: "Data Cloud Consultant", img: "assets/badges/data-cloud.png", tilt: 0.1 },
      { name: "AI Associate", img: "assets/badges/2026-01_Badge_SF-Certified_AI-Associate_500x490px_RETIRED.png", tilt: -0.1 },
      { name: "Lifecycle & Deployment", img: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev-LC-Dep-Arch_500x490px.png", tilt: 0.2 },
      { name: "Salesforce Associate", img: "assets/badges/2025-03_Badge_SF-Certified_Platform-Foundations_500x490px.png", tilt: -0.2 }
    ];
    NODES.forEach((n, i) => {
      n.ang = Math.PI * 2 * i / NODES.length;
      n.r = i % 2 === 0 ? 4.2 : 5.2;
    });
    const texLoader = new THREE.TextureLoader();
    const nodes = [];
    NODES.forEach((n, i) => {
      const g = new THREE.Group();
      const glowGeo = new THREE.CircleGeometry(0.6, 48);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 41440,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.position.z = -0.05;
      g.add(glow);
      const tex = texLoader.load(n.img, (t2) => {
        t2.colorSpace = THREE.SRGBColorSpace || THREE.sRGBEncoding;
        t2.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 1;
      });
      const spriteMat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(1, 1, 1);
      g.add(sprite);
      g.userData = { sprite, glow };
      const base = new THREE.Group();
      base.rotation.z = n.tilt;
      const px = Math.cos(n.ang) * n.r;
      const pz = Math.sin(n.ang) * n.r;
      g.position.set(px, 0, pz);
      base.add(g);
      root.add(base);
      nodes.push({ group: g, base, data: n, idx: i, sprite });
    });
    const orbitGeo = new THREE.RingGeometry(4.18, 4.22, 128);
    const orbitMat = new THREE.MeshBasicMaterial({ color: 16777215, transparent: true, opacity: 0.08, side: THREE.DoubleSide });
    const orbit1 = new THREE.Mesh(orbitGeo, orbitMat);
    orbit1.rotation.x = Math.PI / 2;
    root.add(orbit1);
    const bolts = [];
    function spawnBolt() {
      const a = nodes[Math.floor(Math.random() * nodes.length)].group;
      const target = Math.random() < 0.5 ? new THREE.Vector3(0, 0, 0) : nodes[Math.floor(Math.random() * nodes.length)].group.position.clone();
      const start = new THREE.Vector3();
      a.getWorldPosition(start);
      const startLocal = root.worldToLocal(start.clone());
      const endLocal = target instanceof THREE.Vector3 ? target : root.worldToLocal(a.getWorldPosition(new THREE.Vector3()));
      const points = [];
      const steps = 8;
      for (let i = 0; i <= steps; i++) {
        const t2 = i / steps;
        const x = startLocal.x + (endLocal.x - startLocal.x) * t2 + (Math.random() - 0.5) * 0.25 * (1 - Math.abs(t2 - 0.5) * 2);
        const y = startLocal.y + (endLocal.y - startLocal.y) * t2 + (Math.random() - 0.5) * 0.25 * (1 - Math.abs(t2 - 0.5) * 2);
        const z = startLocal.z + (endLocal.z - startLocal.z) * t2 + (Math.random() - 0.5) * 0.25 * (1 - Math.abs(t2 - 0.5) * 2);
        points.push(new THREE.Vector3(x, y, z));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: 11986687, transparent: true, opacity: 1 });
      const line = new THREE.Line(geo, mat);
      root.add(line);
      bolts.push({ line, life: 0, ttl: 22 });
    }
    const starGeo = new THREE.BufferGeometry();
    const starCount = 220;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 12 + Math.random() * 8;
      const t2 = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(p) * Math.cos(t2);
      positions[i * 3 + 1] = r * Math.cos(p) * 0.5;
      positions[i * 3 + 2] = r * Math.sin(p) * Math.sin(t2);
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 10209264, size: 0.035, transparent: true, opacity: 0.75 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let rotVx = 0, rotVy = 0;
    let targetRotY = 0, targetRotX = 0.15;
    const onDown = (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      renderer.domElement.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      targetRotY += dx * 5e-3;
      targetRotX = Math.max(-1, Math.min(1, targetRotX + dy * 5e-3));
      rotVx = dy * 2e-3;
      rotVy = dx * 2e-3;
    };
    const onUp = () => {
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
    };
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    const ray = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-2, -2);
    const onMouseMove = (e) => {
      const r = renderer.domElement.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    };
    renderer.domElement.addEventListener("pointermove", onMouseMove);
    let activeLabel = null;
    const labelEl = document.createElement("div");
    labelEl.style.cssText = `
      position: absolute; top: 0; left: 0; pointer-events: none;
      padding: 6px 12px; background: white; border: 1px solid var(--line-2);
      border-radius: 999px; font-size: 12px; font-weight: 700;
      color: black; box-shadow: var(--shadow-2);
      transform: translate(-50%, -130%); opacity: 0; transition: opacity .15s;
      font-family: var(--font-body);
      white-space: nowrap;
    `;
    wrap.style.position = "relative";
    wrap.appendChild(labelEl);
    const onResize = () => {
      const w = wrap.clientWidth;
      renderer.setSize(w, height);
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    let raf = 0;
    let t = 0;
    let lastSpawn = 0;
    const animate = () => {
      t += 0.016;
      if (!isDragging) {
        targetRotY += 3e-3;
      }
      root.rotation.y += (targetRotY - root.rotation.y) * 0.06;
      root.rotation.x += (targetRotX - root.rotation.x) * 0.06;
      const s = 1 + Math.sin(t * 1.6) * 0.04;
      core.scale.set(s, s, s);
      wire.rotation.y += 4e-3;
      wire.rotation.x += 2e-3;
      const bs = 2.6 + Math.sin(t * 1.4) * 0.05;
      badge.scale.set(bs, bs, 1);
      const hs = 1.7 + Math.sin(t * 1.4) * 0.06;
      haloDisc.scale.set(hs / 1.7, hs / 1.7, 1);
      haloDisc.material.opacity = 0.22 + Math.sin(t * 1.4) * 0.08;
      nodes.forEach((n, i) => {
        n.group.position.y = Math.sin(t * 1.2 + i) * 0.15;
        if (n.group.userData.glow) {
          const op = 0.1 + Math.sin(t * 1.6 + i) * 0.05;
          n.group.userData.glow.material.opacity = op;
        }
      });
      halo.rotation.z = t * 0.1;
      halo2.rotation.z = -t * 0.07;
      stars.rotation.y = t * 0.02;
      if (t - lastSpawn > 1.8) {
        spawnBolt();
        lastSpawn = t;
      }
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life++;
        b.line.material.opacity = Math.max(0, 1 - b.life / b.ttl);
        if (b.life >= b.ttl) {
          root.remove(b.line);
          b.line.geometry.dispose();
          b.line.material.dispose();
          bolts.splice(i, 1);
        }
      }
      ray.setFromCamera(mouse, camera);
      const sprites = nodes.map((n) => n.sprite);
      const hits = ray.intersectObjects(sprites, false);
      if (hits.length) {
        const targetMesh = hits[0].object;
        const owner = nodes.find((n) => n.sprite === targetMesh);
        if (owner) {
          if (activeLabel !== owner.idx) {
            activeLabel = owner.idx;
            labelEl.textContent = owner.data.name;
          }
          owner.sprite.scale.x = owner.sprite.scale.y = 1 + Math.sin(t * 6) * 0.05 + 0.25;
          const v = new THREE.Vector3();
          owner.group.getWorldPosition(v);
          v.project(camera);
          const r2 = renderer.domElement.getBoundingClientRect();
          const x = (v.x * 0.5 + 0.5) * r2.width;
          const y = (-v.y * 0.5 + 0.5) * r2.height;
          labelEl.style.left = x + "px";
          labelEl.style.top = y + "px";
          labelEl.style.opacity = "1";
        }
      } else {
        nodes.forEach((n) => {
          n.sprite.scale.x = n.sprite.scale.y = 1;
        });
        activeLabel = null;
        labelEl.style.opacity = "0";
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!raf) raf = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }, { threshold: 0.05 });
    io.observe(wrap);
    stateRef.current = { renderer, scene };
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointermove", onMouseMove);
      renderer.dispose();
      wrap.removeChild(renderer.domElement);
      try {
        wrap.removeChild(labelEl);
      } catch (e) {
      }
    };
  }, [height]);
  const bareStyle = { width: "100%", height, position: "relative" };
  const fullStyle = { ...bareStyle, borderRadius: 18, overflow: "hidden", background: "linear-gradient(180deg, #061331, #0A1B3C 60%, #112858)", border: "1px solid rgba(255,255,255,.08)", boxShadow: "0 30px 60px -20px rgba(0,30,80,.45)" };
  return /* @__PURE__ */ React.createElement("div", { ref: wrapRef, style: bare ? bareStyle : fullStyle }, !bare && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 14, left: 14, display: "flex", alignItems: "center", gap: 10, zIndex: 2, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 99, background: "var(--sf-blue)", boxShadow: "0 0 10px var(--sf-blue)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", fontWeight: 700 } }, "Customer 360 \xB7 live orbit")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 14, right: 14, color: "rgba(255,255,255,.4)", fontSize: 10.5, fontFamily: "var(--font-mono)", letterSpacing: ".08em", pointerEvents: "none" } }, "drag to rotate \xB7 hover for label")));
}
Object.assign(window, { ThreeOrb });


/* ── trailhead/three-cert-cabinet.jsx ── */
function ThreeCertCabinet({ certs, height = 460 }) {
  const wrapRef = React.useRef(null);
  React.useEffect(() => {
    if (!window.THREE) return;
    const THREE = window.THREE;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const width = wrap.clientWidth;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0, 0);
    wrap.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.6, 14);
    scene.add(new THREE.AmbientLight(16777215, 1.2));
    const key = new THREE.DirectionalLight(16777215, 1.2);
    key.position.set(4, 8, 6);
    scene.add(key);
    const fill = new THREE.DirectionalLight(16777215, 1);
    fill.position.set(-5, 2, 4);
    scene.add(fill);
    const textureLoader = new THREE.TextureLoader();
    function makeImageTile(cert) {
      const group = new THREE.Group();
      const geo = new THREE.PlaneGeometry(1.9, 1.9);
      const mat = new THREE.MeshPhysicalMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        roughness: 0.1,
        metalness: 0.1,
        alphaTest: 0.05
      });
      if (cert.img) {
        textureLoader.load(cert.img, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          mat.map = tex;
          mat.needsUpdate = true;
        });
      }
      const tile = new THREE.Mesh(geo, mat);
      group.add(tile);
      return { group, tile };
    }
    const cols = 4, rows = 3;
    const dx = 2.6, dy = 2.5;
    const startX = -(cols - 1) * dx / 2;
    const startY = (rows - 1) * dy / 2;
    const tiles = [];
    const safeCerts = certs && certs.length ? certs : [];
    for (let i = 0; i < 12; i++) {
      const c = safeCerts[i % safeCerts.length] || {};
      const t2 = makeImageTile(c);
      const col = i % cols, row = Math.floor(i / cols);
      const x = startX + col * dx + (row % 2 === 1 ? dx * 0.5 : 0);
      const y = startY - row * dy;
      t2.group.position.set(x, y, 0);
      t2.group.rotation.x = -0.18;
      t2.baseY = y;
      t2.col = col;
      t2.row = row;
      t2.idx = i;
      t2.phase = Math.random() * Math.PI * 2;
      scene.add(t2.group);
      tiles.push(t2);
    }
    let isDragging = false, lastX = 0, lastY = 0;
    let targetRotY = 0, targetRotX = 0;
    let groupRotY = 0, groupRotX = 0;
    const onDown = (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      renderer.domElement.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      if (!isDragging) return;
      const dx2 = e.clientX - lastX;
      const dy2 = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      targetRotY += dx2 * 5e-3;
      targetRotX = Math.max(-0.5, Math.min(0.5, targetRotX + dy2 * 3e-3));
    };
    const onUp = () => {
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
    };
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    const ray = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-2, -2);
    const onMouseMove = (e) => {
      const r = renderer.domElement.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    };
    renderer.domElement.addEventListener("pointermove", onMouseMove);
    const onResize = () => {
      const w = wrap.clientWidth;
      renderer.setSize(w, height);
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    let t = 0, raf = 0;
    const tickFn = () => {
      t += 0.016;
      if (!isDragging) targetRotY += 2e-3;
      groupRotY += (targetRotY - groupRotY) * 0.07;
      groupRotX += (targetRotX - groupRotX) * 0.07;
      ray.setFromCamera(mouse, camera);
      const hits = ray.intersectObjects(tiles.map((x) => x.tile), false);
      const hoverIdx = hits.length ? tiles.findIndex((x) => x.tile === hits[0].object) : -1;
      tiles.forEach((t2, i) => {
        const baseRot = t * 0.9 + t2.phase * 0.2;
        t2.group.rotation.y = baseRot + groupRotY;
        t2.group.rotation.x = -0.18 + Math.sin(t * 0.8 + t2.phase) * 0.08 + groupRotX;
        t2.group.position.y = t2.baseY + Math.sin(t * 1.1 + t2.phase) * 0.12;
        const isHover = i === hoverIdx;
        const targetScale = isHover ? 1.4 : 1;
        t2.group.scale.x += (targetScale - t2.group.scale.x) * 0.15;
        t2.group.scale.y += (targetScale - t2.group.scale.y) * 0.15;
        t2.group.scale.z += (targetScale - t2.group.scale.z) * 0.15;
      });
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tickFn);
    };
    tickFn();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointermove", onMouseMove);
      renderer.dispose();
      wrap.removeChild(renderer.domElement);
    };
  }, [certs, height]);
  return /* @__PURE__ */ React.createElement("div", { ref: wrapRef, style: {
    position: "relative",
    width: "100%",
    height,
    borderRadius: 22,
    overflow: "hidden",
    background: "radial-gradient(ellipse at 30% 20%, #1A0A3C 0%, #0A1B3C 50%, #060B22 100%)",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 40px 80px -30px rgba(20,5,60,.6), inset 0 1px 0 rgba(255,255,255,.07)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 14, left: 14, display: "flex", alignItems: "center", gap: 10, zIndex: 2, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 99, background: "#00D4FF", boxShadow: "0 0 10px #00D4FF" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", fontWeight: 700 } }, "cabinet \xB7 12 medallions \xB7 3D")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 14, right: 14, color: "rgba(255,255,255,.4)", fontSize: 10.5, fontFamily: "var(--font-mono)", letterSpacing: ".08em", pointerEvents: "none" } }, "drag to rotate \xB7 hover to spin"));
}
Object.assign(window, { ThreeCertCabinet });


/* ── tweaks-panel.jsx ── */
const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === "object" && keyOrEdits !== null ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
    window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel({ title = "Tweaks", noDeckControls = false, children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const hasDeckStage = React.useMemo(
    () => typeof document !== "undefined" && !!document.querySelector("deck-stage"),
    []
  );
  const [railEnabled, setRailEnabled] = React.useState(
    () => hasDeckStage && !!document.querySelector("deck-stage")?._railEnabled
  );
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return void 0;
    const onMsg = (e) => {
      if (e.data && e.data.type === "__omelette_rail_enabled") setRailEnabled(true);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem("deck-stage.railVisible") !== "0";
    } catch (e) {
      return true;
    }
  });
  const toggleRail = (on) => {
    setRailVisible(on);
    window.postMessage({ type: "__deck_rail_visible", on }, "*");
  };
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + "px";
    panel.style.bottom = offsetRef.current.y + "px";
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", clampToViewport);
      return () => window.removeEventListener("resize", clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === "__activate_edit_mode") setOpen(true);
      else if (t === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
  };
  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };
  if (!open) return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, __TWEAKS_STYLE), /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: dragRef,
      className: "twk-panel",
      "data-noncommentable": "",
      style: { right: offsetRef.current.x, bottom: offsetRef.current.y }
    },
    /* @__PURE__ */ React.createElement("div", { className: "twk-hd", onMouseDown: onDragStart }, /* @__PURE__ */ React.createElement("b", null, title), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "twk-x",
        "aria-label": "Close tweaks",
        onMouseDown: (e) => e.stopPropagation(),
        onClick: dismiss
      },
      "\u2715"
    )),
    /* @__PURE__ */ React.createElement("div", { className: "twk-body" }, children, hasDeckStage && railEnabled && !noDeckControls && /* @__PURE__ */ React.createElement(TweakSection, { label: "Deck" }, /* @__PURE__ */ React.createElement(TweakToggle, { label: "Thumbnail rail", value: railVisible, onChange: toggleRail })))
  ));
}
function TweakSection({ label, children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "twk-sect" }, label), children);
}
function TweakRow({ label, value, children, inline = false }) {
  return /* @__PURE__ */ React.createElement("div", { className: inline ? "twk-row twk-row-h" : "twk-row" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label), value != null && /* @__PURE__ */ React.createElement("span", { className: "twk-val" }, value)), children);
}
function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = "", onChange }) {
  return /* @__PURE__ */ React.createElement(TweakRow, { label, value: `${value}${unit}` }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      className: "twk-slider",
      min,
      max,
      step,
      value,
      onChange: (e) => onChange(Number(e.target.value))
    }
  ));
}
function TweakToggle({ label, value, onChange }) {
  return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "twk-toggle",
      "data-on": value ? "1" : "0",
      role: "switch",
      "aria-checked": !!value,
      onClick: () => onChange(!value)
    },
    /* @__PURE__ */ React.createElement("i", null)
  ));
}
function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const labelLen = (o) => String(typeof o === "object" ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === "object" ? o.value : o) === s);
      return m === void 0 ? s : typeof m === "object" ? m.value : m;
    };
    return /* @__PURE__ */ React.createElement(
      TweakSelect,
      {
        label,
        value,
        options,
        onChange: (s) => onChange(resolve(s))
      }
    );
  }
  const opts = options.map((o) => typeof o === "object" ? o : { value: o, label: o });
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;
  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: trackRef,
      role: "radiogroup",
      onPointerDown,
      className: dragging ? "twk-seg dragging" : "twk-seg"
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "twk-seg-thumb",
        style: {
          left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
          width: `calc((100% - 4px) / ${n})`
        }
      }
    ),
    opts.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.value, type: "button", role: "radio", "aria-checked": o.value === value }, o.label))
  ));
}
function TweakSelect({ label, value, options, onChange }) {
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("select", { className: "twk-field", value, onChange: (e) => onChange(e.target.value) }, options.map((o) => {
    const v = typeof o === "object" ? o.value : o;
    const l = typeof o === "object" ? o.label : o;
    return /* @__PURE__ */ React.createElement("option", { key: v, value: v }, l);
  })));
}
function TweakText({ label, value, placeholder, onChange }) {
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "twk-field",
      type: "text",
      value,
      placeholder,
      onChange: (e) => onChange(e.target.value)
    }
  ));
}
function TweakNumber({ label, value, min, max, step = 1, unit = "", onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split(".")[1] || "").length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "twk-num" }, /* @__PURE__ */ React.createElement("span", { className: "twk-num-lbl", onPointerDown: onScrubStart }, label), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      value,
      min,
      max,
      step,
      onChange: (e) => onChange(clamp(Number(e.target.value)))
    }
  ), unit && /* @__PURE__ */ React.createElement("span", { className: "twk-num-unit" }, unit));
}
function __twkIsLight(hex) {
  const h = String(hex).replace("#", "");
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, "0");
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148e3;
}
const __TwkCheck = ({ light }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 14 14", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
  "path",
  {
    d: "M3 7.2 5.8 10 11 4.2",
    fill: "none",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: light ? "rgba(0,0,0,.78)" : "#fff"
  }
));
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "color",
        className: "twk-swatch",
        value,
        onChange: (e) => onChange(e.target.value)
      }
    ));
  }
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("div", { className: "twk-chips", role: "radiogroup" }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        type: "button",
        className: "twk-chip",
        role: "radio",
        "aria-checked": on,
        "data-on": on ? "1" : "0",
        "aria-label": colors.join(", "),
        title: colors.join(" \xB7 "),
        style: { background: hero },
        onClick: () => onChange(o)
      },
      sup.length > 0 && /* @__PURE__ */ React.createElement("span", null, sup.map((c, j) => /* @__PURE__ */ React.createElement("i", { key: j, style: { background: c } }))),
      on && /* @__PURE__ */ React.createElement(__TwkCheck, { light: __twkIsLight(hero) })
    );
  })));
}
function TweakButton({ label, onClick, secondary = false }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: secondary ? "twk-btn secondary" : "twk-btn",
      onClick
    },
    label
  );
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});


/* ── trailhead/mascot.jsx ── */
function Mascot({ route, setTweak, enabled = true }) {
  const [pose, setPose] = useState("idle");
  const [bubble, setBubble] = useState(null);
  const [eyes, setEyes] = useState({ x: 0, y: 0 });
  const [exited, setExited] = useState(!enabled);
  const wrapRef = useRef(null);
  const generateUUID = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  };
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      text: "Hello! Welcome to Yusuf Khan's portfolio. I'm his AI representative. How can I help you today?",
      sender: "agent"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [sending, setSending] = useState(false);
  const [isNewSession, setIsNewSession] = useState(true);
  const [sessionActive, setSessionActive] = useState(false);
  const accessTokenRef = useRef(null);
  const conversationIdRef = useRef(null);
  const sseReaderRef = useRef(null);
  const chatMessagesRef = useRef(null);
  const SF_CONFIG = {
    orgId: "00DgK00000AXqoT",
    esDeveloperName: "POrtfolio_Agent_ESD",
    url: "https://orgfarm-47cedb95ea-dev-ed.develop.my.salesforce-scrt.com"
  };
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, sending]);
  useEffect(() => {
    return () => {
      if (sseReaderRef.current) {
        try {
          sseReaderRef.current.cancel();
        } catch (e) {
        }
      }
    };
  }, []);
  useEffect(() => {
    if (!enabled) return;
    const tipsByRoute = {
      home: "Hai....",
      certs: "Hover any badge to read it. Hit 'Spin all' for the full cabinet show.",
      projects: "Click 'Walk the flow' \u2014 each project animates its automation diagram.",
      experience: "Scroll the Trailblazer stats \u2014 those counters are live.",
      gigs: "Pick a service package and let's discuss details.",
      demos: "Check out my interactive Apex limits simulator!",
      contact: "Pick an engagement type and tell me what you're building."
    };
    const tip = tipsByRoute[route];
    if (tip && !chatOpen) {
      setBubble(tip);
      setPose("wave");
      const t1 = setTimeout(() => setPose("idle"), 1400);
      const t2 = setTimeout(() => setBubble(null), 6500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [route, enabled, chatOpen]);
  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.hypot(dx, dy) || 1;
      const max = 3;
      setEyes({ x: dx / d * max, y: dy / d * max });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);
  useEffect(() => {
    if (!enabled) return;
    const i = setInterval(() => {
      if (!chatOpen) {
        setPose("wave");
        setTimeout(() => setPose("idle"), 1200);
      }
    }, 12e3);
    return () => clearInterval(i);
  }, [enabled, chatOpen]);
  const startSSEStream = async (token, convId) => {
    try {
      if (sseReaderRef.current) {
        try {
          sseReaderRef.current.cancel();
        } catch (e) {
        }
      }
      const sseUrl = `${SF_CONFIG.url}/eventrouter/v1/sse`;
      const response = await fetch(sseUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "X-Org-Id": SF_CONFIG.orgId,
          "Accept": "text/event-stream"
        }
      });
      if (!response.ok) throw new Error("SSE connection failed: " + response.statusText);
      const reader = response.body.getReader();
      sseReaderRef.current = reader;
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        console.log("[Mascot] raw SSE chunk:", JSON.stringify(chunk));
        buffer += chunk;
        const lines = buffer.split("\n");
        buffer = lines.pop();
        for (const line of lines) {
          const trimmed = line.trim();
          console.log("[Mascot] SSE line:", JSON.stringify(trimmed));
          if (trimmed.startsWith("data:")) {
            const jsonStr = trimmed.slice(5).trim();
            try {
              const eventData = JSON.parse(jsonStr);
              const entry = eventData.conversationEntry || eventData;
              console.log("[Mascot] raw event:", JSON.stringify(eventData, null, 2));
              console.log("[Mascot] entryType:", entry.entryType || entry.type, "| actorType:", entry.actorType, "| sender.role:", entry.sender?.role, "| abstractMessage:", entry.abstractMessage);
              const entryType = (entry.entryType || entry.type || "").toLowerCase();
              if (entry && entryType === "message") {
                const abstractMsg = entry.abstractMessage || entry.message || {};
                const sender = entry.sender || {};
                const text = abstractMsg.messageText || abstractMsg.staticContent && abstractMsg.staticContent.text || entry.messageText;
                const entryId = entry.id || eventData.id || "agent-" + Date.now();
                const role = (sender.role || entry.actorType || "").toLowerCase();
                console.log("[Mascot] entryType matched. role:", role, "| text:", text);
                if (role === "agent" || role === "chatbot" || role === "bot" || role === "system") {
                  if (text) {
                    setMessages((prev) => {
                      if (prev.some((m) => m.id === entryId)) return prev;
                      return [...prev, {
                        id: entryId,
                        text,
                        sender: "agent"
                      }];
                    });
                    setPose("wave");
                    setTimeout(() => setPose("idle"), 1200);
                  }
                }
              }
            } catch (e) {
              console.error("Error parsing event JSON:", e, jsonStr);
            }
          }
        }
      }
    } catch (err) {
      console.error("SSE stream ended:", err);
      if (chatOpen && sessionActive) {
        console.log("Attempting SSE reconnect in 5 seconds...");
        setTimeout(() => {
          if (chatOpen && accessTokenRef.current && conversationIdRef.current) {
            startSSEStream(accessTokenRef.current, conversationIdRef.current);
          }
        }, 5e3);
      }
    }
  };
  const startSession = async () => {
    setConnecting(true);
    try {
      const tokenRes = await fetch(`${SF_CONFIG.url}/iamessage/api/v2/authorization/unauthenticated/access-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orgId: SF_CONFIG.orgId,
          esDeveloperName: SF_CONFIG.esDeveloperName,
          capabilitiesVersion: "1",
          platform: "Web"
        })
      });
      if (!tokenRes.ok) throw new Error("Failed token fetch: " + tokenRes.statusText);
      const tokenData = await tokenRes.json();
      const token = tokenData.accessToken;
      accessTokenRef.current = token;
      const convId = generateUUID();
      conversationIdRef.current = convId;
      const convRes = await fetch(`${SF_CONFIG.url}/iamessage/api/v2/conversation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          conversationId: convId,
          esDeveloperName: SF_CONFIG.esDeveloperName
        })
      });
      if (!convRes.ok) throw new Error("Failed conversation create: " + convRes.statusText);
      startSSEStream(token, convId);
      setSessionActive(true);
      setConnecting(false);
    } catch (err) {
      console.error("Session start failed:", err);
      setConnecting(false);
      setMessages((prev) => [...prev, {
        id: "err-" + Date.now(),
        text: "Sorry, I couldn't connect to Salesforce. Please check your browser console for details.",
        sender: "agent"
      }]);
    }
  };
  const sendMessage = async (text) => {
    if (!text.trim() || sending) return;
    const userMsgId = "user-" + Date.now();
    setMessages((prev) => [...prev, {
      id: userMsgId,
      text,
      sender: "user"
    }]);
    setInputText("");
    setSending(true);
    setPose("thinking");
    try {
      const token = accessTokenRef.current;
      const convId = conversationIdRef.current;
      const messageId = generateUUID();
      const isFirst = isNewSession;
      if (isFirst) {
        setIsNewSession(false);
      }
      const response = await fetch(`${SF_CONFIG.url}/iamessage/api/v2/conversation/${convId}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            id: messageId,
            messageType: "StaticContentMessage",
            staticContent: {
              formatType: "Text",
              text
            }
          },
          esDeveloperName: SF_CONFIG.esDeveloperName,
          isNewMessagingSession: isFirst,
          language: "en"
        })
      });
      if (!response.ok) throw new Error("Send failed: " + response.statusText);
      setSending(false);
      setPose("idle");
    } catch (err) {
      console.error("Message send error:", err);
      setSending(false);
      setPose("idle");
      setMessages((prev) => [...prev, {
        id: "err-" + Date.now(),
        text: "Failed to send message. Please try again.",
        sender: "agent"
      }]);
    }
  };
  if (!enabled) return null;
  return /* @__PURE__ */ React.createElement("div", { ref: wrapRef, style: {
    position: "fixed",
    bottom: 24,
    right: 24,
    zIndex: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
    pointerEvents: "none"
  } }, bubble && !chatOpen && /* @__PURE__ */ React.createElement("div", { className: "mascot-bubble", style: {
    background: "rgba(255, 255, 255, 0.88)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.45)",
    borderRadius: 16,
    padding: "10px 14px",
    maxWidth: 240,
    fontSize: 12.5,
    lineHeight: 1.45,
    color: "black",
    boxShadow: "var(--shadow-2), 0 4px 20px rgba(255, 255, 255, 0.05)",
    position: "relative",
    marginRight: 12,
    fontWeight: 500,
    pointerEvents: "auto",
    fontFamily: "var(--font-body)",
    animation: "bubblePop .4s cubic-bezier(.2,1.4,.4,1) both"
  } }, bubble, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setBubble(null),
      className: "hoverable",
      style: { position: "absolute", top: 4, right: 6, background: "transparent", border: "none", color: "rgba(0, 0, 0, 0.45)", fontSize: 14, padding: 0, width: 18, height: 18 }
    },
    "\xD7"
  ), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    bottom: -7,
    right: 28,
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "8px solid rgba(255, 255, 255, 0.88)",
    filter: "drop-shadow(0 1px 0 rgba(255, 255, 255, 0.2))"
  } })), chatOpen && /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-window", style: { pointerEvents: "auto" } }, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-header" }, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-header-info" }, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-avatar" }, "\u{1F916}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-title" }, "Agentforce Representative"), /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-status" }, /* @__PURE__ */ React.createElement("span", { className: `cosmic-chat-status-dot ${connecting ? "connecting" : ""}` }), /* @__PURE__ */ React.createElement("span", null, connecting ? "Connecting..." : "Online")))), /* @__PURE__ */ React.createElement("button", { className: "cosmic-chat-close", onClick: () => setChatOpen(false), title: "Close chat" }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-messages", ref: chatMessagesRef }, messages.map((msg) => /* @__PURE__ */ React.createElement("div", { key: msg.id, className: `cosmic-chat-message ${msg.sender}` }, msg.text)), (sending || connecting) && /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-typing" }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null))), /* @__PURE__ */ React.createElement("form", { className: "cosmic-chat-input-area", onSubmit: (e) => {
    e.preventDefault();
    sendMessage(inputText);
  } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "cosmic-chat-input",
      placeholder: connecting ? "Connecting..." : "Ask me anything...",
      value: inputText,
      onChange: (e) => setInputText(e.target.value),
      disabled: connecting
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "cosmic-chat-send",
      disabled: connecting || !inputText.trim() || sending,
      title: "Send message"
    },
    /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "22", y1: "2", x2: "11", y2: "13" }), /* @__PURE__ */ React.createElement("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }))
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "hoverable",
      "data-cursor": "hover",
      onClick: () => {
        setPose("bounce");
        const nextState = !chatOpen;
        setChatOpen(nextState);
        if (nextState && !sessionActive && !connecting) {
          startSession();
        }
        setTimeout(() => setPose("idle"), 700);
      },
      title: "Agentforce Assistant \xB7 click me",
      style: {
        width: 84,
        height: 92,
        padding: 0,
        border: "none",
        background: "transparent",
        pointerEvents: "auto",
        filter: "drop-shadow(0 14px 22px rgba(8,30,69,.28))",
        transformOrigin: "50% 90%",
        animation: pose === "bounce" ? "mascotBounce .55s cubic-bezier(.3,1.5,.4,1)" : "mascotFloat 4.5s ease-in-out infinite"
      }
    },
    /* @__PURE__ */ React.createElement(MascotSVG, { pose, eyes })
  ), /* @__PURE__ */ React.createElement("style", null, `
        @keyframes bubblePop { 0% { opacity: 0; transform: translateY(8px) scale(.9); } 100% { opacity: 1; transform: none; } }
        @keyframes mascotFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes mascotBounce { 0% { transform: scale(1); } 40% { transform: scale(1.15, .9) translateY(-6px); } 100% { transform: scale(1); } }
        @keyframes wave { 0%,100% { transform: rotate(0deg); } 30% { transform: rotate(-22deg); } 60% { transform: rotate(18deg); } }
      `));
}
function MascotSVG({ pose, eyes }) {
  const waving = pose === "wave";
  return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 120 130", width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "m-body", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#FFFFFF" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#D6EAFB" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "m-bolt", x1: "0", x2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#FFD479" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#FF8A4C" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "m-cheek", cx: ".5", cy: ".5", r: ".5" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#FFB3D1" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#FFB3D1", stopOpacity: "0" })), /* @__PURE__ */ React.createElement("filter", { id: "m-shadow", x: "-20%", y: "-20%", width: "140%", height: "140%" }, /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: "2" }))), /* @__PURE__ */ React.createElement("ellipse", { cx: "60", cy: "120", rx: "28", ry: "4", fill: "rgba(8,30,69,.18)" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "48", cy: "112", rx: "10", ry: "6", fill: "var(--accent-deep)" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "72", cy: "112", rx: "10", ry: "6", fill: "var(--accent-deep)" }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M30 70 Q18 70 18 56 Q18 44 32 42 Q34 26 52 26 Q60 18 72 22 Q90 22 92 40 Q104 42 104 56 Q104 70 92 72 L92 100 Q92 110 80 110 L40 110 Q28 110 28 100 Z",
      fill: "url(#m-body)",
      stroke: "var(--accent-deep)",
      strokeWidth: "2.5",
      strokeLinejoin: "round"
    }
  ), /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "86", r: "13", fill: "var(--accent)", opacity: ".15" }), /* @__PURE__ */ React.createElement("path", { d: "M62 78 L54 90 L60 90 L58 96 L66 84 L60 84 Z", fill: "url(#m-bolt)", stroke: "var(--accent-deep)", strokeWidth: "1.5", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("circle", { cx: "42", cy: "62", r: "6", fill: "url(#m-cheek)" }), /* @__PURE__ */ React.createElement("circle", { cx: "78", cy: "62", r: "6", fill: "url(#m-cheek)" }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("ellipse", { cx: "48", cy: "54", rx: "6", ry: "7", fill: "white", stroke: "var(--accent-deep)", strokeWidth: "1.6" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "72", cy: "54", rx: "6", ry: "7", fill: "white", stroke: "var(--accent-deep)", strokeWidth: "1.6" }), /* @__PURE__ */ React.createElement("circle", { cx: 48 + eyes.x, cy: 54 + eyes.y, r: "2.4", fill: "var(--accent-deep)" }), /* @__PURE__ */ React.createElement("circle", { cx: 72 + eyes.x, cy: 54 + eyes.y, r: "2.4", fill: "var(--accent-deep)" }), /* @__PURE__ */ React.createElement("circle", { cx: 48 + eyes.x + 1, cy: 54 + eyes.y - 1, r: ".8", fill: "white" }), /* @__PURE__ */ React.createElement("circle", { cx: 72 + eyes.x + 1, cy: 54 + eyes.y - 1, r: ".8", fill: "white" })), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: pose === "thinking" ? "M54 68 Q60 70 66 68" : "M54 66 Q60 73 66 66",
      stroke: "var(--accent-deep)",
      strokeWidth: "1.8",
      fill: "none",
      strokeLinecap: "round"
    }
  ), /* @__PURE__ */ React.createElement("g", { style: { transformOrigin: "26px 70px", animation: waving ? "wave 1.2s ease infinite" : "none" } }, /* @__PURE__ */ React.createElement("path", { d: "M28 70 Q14 64 14 50", stroke: "var(--accent-deep)", strokeWidth: "3", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "48", r: "5.5", fill: "white", stroke: "var(--accent-deep)", strokeWidth: "2" })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M92 70 Q104 76 100 92", stroke: "var(--accent-deep)", strokeWidth: "3", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("circle", { cx: "102", cy: "94", r: "5.5", fill: "white", stroke: "var(--accent-deep)", strokeWidth: "2" })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M60 26 L60 14", stroke: "var(--accent-deep)", strokeWidth: "2.2", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M58 6 L54 12 L58 12 L56 18 L62 10 L58 10 Z", fill: "url(#m-bolt)", stroke: "var(--accent-deep)", strokeWidth: "1.3", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("animateTransform", { attributeName: "transform", type: "rotate", values: "0 60 12; 5 60 12; -5 60 12; 0 60 12", dur: "2.4s", repeatCount: "indefinite" }))));
}
Object.assign(window, { Mascot });


/* ── trailhead/page-home.jsx ── */
function ApexTypewriter() {
  const lines = useMemo(() => [
    { t: "// Bulk-safe enterprise trigger handler with recursion prevention", c: "comment" },
    { t: "public inherited sharing class OpportunityTriggerHandler {", c: "kw" },
    { t: "    private static Boolean isFirstRun = true;", c: "" },
    { t: "    ", c: "" },
    { t: "    public static void handleAfterUpdate(", c: "kw" },
    { t: "        List<Opportunity> newOpps, ", c: "" },
    { t: "        Map<Id, Opportunity> oldMap", c: "" },
    { t: "    ) {", c: "" },
    { t: "        if (!isFirstRun) return;", c: "kw" },
    { t: "        isFirstRun = false;", c: "" },
    { t: "        ", c: "" },
    { t: "        Set<Id> qualifyingIds = new Set<Id>();", c: "" },
    { t: "        for (Opportunity opp : newOpps) {", c: "kw" },
    { t: "            Opportunity old = oldMap.get(opp.Id);", c: "" },
    { t: "            if (opp.StageName == 'Closed Won' && old.StageName != 'Closed Won') {", c: "" },
    { t: "                qualifyingIds.add(opp.Id);", c: "" },
    { t: "            }", c: "" },
    { t: "        }", c: "" },
    { t: "        if (!qualifyingIds.isEmpty()) {", c: "kw" },
    { t: "            ProvisioningService.activate(qualifyingIds);", c: "" },
    { t: "        }", c: "" },
    { t: "    }", c: "" },
    { t: "}", c: "kw" }
  ], []);
  const [shown, setShown] = useState([]);
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    let i = 0, j = 0, raf;
    const acc = lines.map(() => "");
    const tick = () => {
      if (i >= lines.length) return;
      const target = lines[i].t;
      if (j <= target.length) {
        acc[i] = target.slice(0, j);
        setShown([...acc]);
        j++;
        const delay = target.length === 0 ? 60 : target[j - 1] === " " ? 8 : 12;
        raf = setTimeout(tick, delay);
      } else {
        i++;
        j = 0;
        raf = setTimeout(tick, 40);
      }
    };
    raf = setTimeout(tick, 600);
    const bl = setInterval(() => setCursor((c) => !c), 530);
    return () => {
      clearTimeout(raf);
      clearInterval(bl);
    };
  }, []);
  const colorFor = (c) => {
    if (c === "comment") return "color: #6E89B2";
    if (c === "kw") return "color: #FF6F00";
    if (c === "anno") return "color: #B14AED";
    if (c === "soql") return "color: #00A1E0";
    return "color: #E6EEF8";
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: "linear-gradient(180deg, #0A1B3C, #061331)",
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.08)",
    boxShadow: "0 30px 60px -20px rgba(0,30,80,.6), inset 0 1px 0 rgba(255,255,255,.06)",
    width: "100%",
    maxWidth: 560,
    color: "white"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.02)" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: 99, background: "#FF5F57" } }), /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: 99, background: "#FEBC2E" } }), /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: 99, background: "#28C840" } }), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: 10, fontSize: 12, color: "rgba(255,255,255,.55)", fontFamily: "var(--font-mono)" } }, "TrailblazerPortfolio.cls \u2014 Developer Console"), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontSize: 11, color: "var(--sf-blue)", fontFamily: "var(--font-mono)", letterSpacing: ".1em" } }, "\u25CF LIVE")), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--font-mono)",
    fontSize: 13.5,
    lineHeight: 1.65,
    padding: "20px 22px",
    whiteSpace: "pre",
    overflow: "hidden",
    minHeight: 380
  } }, shown.map((s, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, style: { display: "flex", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "rgba(255,255,255,.22)", width: 22, textAlign: "right", flexShrink: 0 } }, idx + 1), /* @__PURE__ */ React.createElement("span", { dangerouslySetInnerHTML: { __html: colorize(s, lines[idx].c) } }), idx === shown.length - 1 && cursor && /* @__PURE__ */ React.createElement("span", { style: { background: "var(--sf-blue)", width: 8, height: 16, display: "inline-block", marginTop: 4, boxShadow: "0 0 10px var(--sf-blue)" } })))));
}
function colorize(s, c) {
  if (!s) return "&nbsp;";
  const esc = (x) => x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if (c === "comment") return `<span style="color:#6E89B2">${esc(s)}</span>`;
  if (c === "soql") return `<span style="color:#7BD3FF">${esc(s).replace(/(SELECT|FROM|WHERE|AND|ORDER BY|LIMIT|IN)/g, '<b style="color:#FFA85C;font-weight:700">$1</b>')}</span>`;
  if (c === "anno") return `<span style="color:#B14AED">${esc(s)}</span>`;
  return esc(s).replace(/(public|private|static|final|class|implements|inherited|sharing|return|void|List|Map|Set|Integer|String|Boolean|Opportunity)/g, '<span style="color:#FFA85C;font-weight:700">$1</span>').replace(/(true|false)/g, '<span style="color:#FF7B72;font-weight:700">$1</span>').replace(/('[^']*')/g, '<span style="color:#9DECC0">$1</span>').replace(/(\d+)/g, '<span style="color:#FFD479">$1</span>').replace(/(@\w+)/g, '<span style="color:#B14AED">$1</span>').replace(/(\/\/[^\n]*)/g, '<span style="color:#6E89B2;font-style:italic">$1</span>');
}
function LiveClock() {
  const [now, setNow] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(i);
  }, []);
  const t = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  return /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontVariantNumeric: "tabular-nums" } }, t);
}
function StardustOnName({ targetRef }) {
  React.useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    let cancelled = false;
    function trigger() {
      if (cancelled || !target) return;
      const tr = target.getBoundingClientRect();
      const localX = tr.width * (0.15 + Math.random() * 0.7);
      const localY = tr.height * (0.3 + Math.random() * 0.5);
      const dot = document.createElement("span");
      dot.className = "name-sparkle-dot";
      dot.style.left = localX + "px";
      dot.style.top = localY + "px";
      target.appendChild(dot);
      setTimeout(() => {
        try {
          target.removeChild(dot);
        } catch (e) {
        }
      }, 1e3);
      target.classList.add("name-spark");
      setTimeout(() => target.classList.remove("name-spark"), 1400);
    }
    let next = setTimeout(loop, 2200);
    function loop() {
      trigger();
      next = setTimeout(loop, 4500 + Math.random() * 3500);
    }
    return () => {
      cancelled = true;
      clearTimeout(next);
    };
  }, [targetRef]);
  return null;
}
function HeroMarquee() {
  const items = [
    "ADMINISTRATOR",
    "PLATFORM DEV I",
    "PLATFORM DEV II",
    "JS DEVELOPER I",
    "SERVICE CLOUD",
    "OMNISTUDIO DEV",
    "FSC CONSULTANT",
    "AGENTFORCE",
    "DATA CLOUD",
    "AI ASSOCIATE",
    "AI SPECIALIST",
    "SF ASSOCIATE"
  ];
  const row = [...items, ...items];
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    borderTop: "1px solid rgba(255,255,255,.10)",
    borderBottom: "1px solid rgba(255,255,255,.10)",
    background: "rgba(6,11,34,.4)",
    backdropFilter: "blur(10px)",
    overflow: "hidden",
    zIndex: 100,
    maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 0,
    padding: "16px 0",
    whiteSpace: "nowrap",
    animation: "marquee 40s linear infinite",
    width: "max-content"
  } }, row.map((it, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 20,
    color: "rgba(255,255,255,.7)",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: ".14em",
    padding: "0 24px"
  } }, it, /* @__PURE__ */ React.createElement(Icon, { name: "bolt", size: 14, color: "rgba(255,180,90,.85)" })))), /* @__PURE__ */ React.createElement("style", null, `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `));
}
function HeroSection({ go }) {
  const nameRef = React.useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const on = (e) => {
      setParallax({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("pointermove", on);
    return () => window.removeEventListener("pointermove", on);
  }, []);
  return /* @__PURE__ */ React.createElement("section", { style: {
    position: "relative",
    minHeight: "min(900px, 100vh)",
    height: "calc(100vh - 65px)",
    minWidth: 0,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    /* Atmospheric overlay — sits on top of the page-shell gradient */
    background: "radial-gradient(120% 90% at 50% 0%, rgba(10,27,60,0.85) 0%, rgba(6,11,34,0.6) 40%, transparent 100%)",
    color: "white",
    marginTop: -56,
    paddingTop: 56
  } }, /* @__PURE__ */ React.createElement(StarField, null), /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    width: 800,
    height: 800,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,161,224,.3), transparent 65%)",
    top: "-15%",
    left: "-10%",
    filter: "blur(50px)",
    animation: "blob1 22s ease-in-out infinite"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    width: 900,
    height: 900,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(127,0,255,.28), transparent 65%)",
    bottom: "-25%",
    right: "-15%",
    filter: "blur(60px)",
    animation: "blob2 28s ease-in-out infinite"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,119,176,.16), transparent 70%)",
    top: "30%",
    left: "55%",
    filter: "blur(60px)",
    animation: "blob3 32s ease-in-out infinite"
  } }), /* @__PURE__ */ React.createElement("style", null, `
          @keyframes blob1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(80px, 60px) scale(1.12); } }
          @keyframes blob2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-100px, -50px) scale(1.18); } }
          @keyframes blob3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-60px, 70px) scale(1.1); } }
          @keyframes scrollCue {
            0% { transform: translateY(0); opacity: .9; }
            70% { transform: translateY(16px); opacity: 0; }
            100% { transform: translateY(0); opacity: 0; }
          }
          @keyframes letterIn {
            0% { opacity: 0; transform: translateY(40px); filter: blur(8px); }
            100% { opacity: 1; transform: none; filter: none; }
          }
          @keyframes pulseDot {
            0%,100% { box-shadow: 0 0 0 0 rgba(46,132,74,.55), 0 0 12px rgba(46,132,74,1); }
            70% { box-shadow: 0 0 0 12px rgba(46,132,74,0), 0 0 12px rgba(46,132,74,1); }
          }
        `)), /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    zIndex: 5,
    pointerEvents: "none",
    background: "linear-gradient(to bottom, transparent 0%, rgba(5,8,24,0.6) 50%, #050818 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "-55%",
    right: 0,
    zIndex: 2,
    pointerEvents: "auto",
    transform: `translate(${parallax.x * 0.4}px, ${parallax.y * 0.4}px)`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: "min(920px, 85vw)",
    height: "min(920px, 85vw)",
    opacity: 0.65
  } }, /* @__PURE__ */ React.createElement(ThreeOrb, { height: 920, bare: true }))), /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    position: "relative",
    zIndex: 3,
    textAlign: "center",
    transform: `translate(${parallax.x * -0.2}px, ${parallax.y * -0.2}px)`,
    pointerEvents: "none"
  } }, /* @__PURE__ */ React.createElement("h1", { className: "wordmark anim-word hero-wordmark", style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontFamily: "'Anton', system-ui, sans-serif",
    fontSize: "clamp(80px, 13vw, 220px)",
    letterSpacing: ".005em",
    lineHeight: 0.85,
    color: "#FFFFFF",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    zIndex: 3,
    textShadow: "0 6px 30px rgba(0, 0, 0, .75), 0 0 40px rgba(0, 161, 224, .25), 0 0 15px rgba(127, 0, 255, .20)",
    userSelect: "none",
    margin: "0 auto 30px",
    width: "fit-content",
    animation: "letterIn 1.2s ease both",
    pointerEvents: "auto",
    marginTop: "20px"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: "0.33em",
    lineHeight: 1,
    marginBottom: "-8px",
    paddingLeft: "6px",
    fontFamily: "'Anton', sans-serif"
  } }, "HELLO I AM"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "16px" } }, /* @__PURE__ */ React.createElement("span", { className: "split", style: { display: "inline-block", fontFamily: "'Anton', sans-serif" } }, "YUSUF"), /* @__PURE__ */ React.createElement("span", { className: "accent", style: { display: "inline-block", fontFamily: "'Anton', sans-serif", color: "#FFFFFF" } }, "KHAN"))), /* @__PURE__ */ React.createElement("p", { style: {
    fontSize: "clamp(15px, 1.4vw, 19px)",
    lineHeight: 1.5,
    maxWidth: 640,
    margin: "0 auto 40px",
    color: "rgba(255,255,255,.78)",
    fontWeight: 500,
    animation: "letterIn .8s ease .45s both",
    textAlign: "center"
  } }, "I architect & ship enterprise ", /* @__PURE__ */ React.createElement("strong", { style: { color: "white" } }, "Salesforce"), " platforms across", /* @__PURE__ */ React.createElement("strong", { style: { color: "#6BB7FF" } }, " banking"), ",", /* @__PURE__ */ React.createElement("strong", { style: { color: "#FF9F66" } }, " retail"), " and", /* @__PURE__ */ React.createElement("strong", { style: { color: "#B57BFF" } }, " lending"), " \u2014 clean Apex, fast LWCs, automations that scale."), /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center", pointerEvents: "auto", animation: "letterIn .8s ease .6s both" } }, /* @__PURE__ */ React.createElement("button", { className: "btn primary hoverable", onClick: () => go("projects"), style: {
    background: "linear-gradient(90deg, #00A1E0, #7F00FF)",
    boxShadow: "0 18px 40px -12px rgba(127,0,255,.6)",
    padding: "14px 24px",
    fontSize: 14
  } }, "See case studies ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 })), /* @__PURE__ */ React.createElement("button", { className: "btn ghost hoverable", onClick: () => go("certs"), style: {
    background: "rgba(255,255,255,.06)",
    color: "white",
    borderColor: "rgba(255,255,255,.18)",
    padding: "14px 24px",
    fontSize: 14
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "badge", size: 16 }), " 12 certifications")), /* @__PURE__ */ React.createElement("div", { className: "hero-stats", style: {
    marginTop: 48,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    maxWidth: 720,
    marginLeft: "auto",
    marginRight: "auto",
    borderTop: "1px solid rgba(255,255,255,.10)",
    borderBottom: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.025)",
    backdropFilter: "blur(8px)",
    animation: "letterIn .8s ease .75s both",
    pointerEvents: "auto"
  } }, (function() {
    const sfData = window.__SF_DATA__ || {};
    const certCount = (sfData.certifications || []).length || "\u2014";
    const tb = sfData.trailblazerStats || {};
    const pointsDisp = tb.pointsK ? tb.pointsK + "K+" : "\u2014";
    return [
      [String(certCount), "Certs"],
      ["6+", "Years"],
      ["8+", "Projects"],
      [pointsDisp, "Trailhead Points"]
    ];
  })().map(([n, l], i) => /* @__PURE__ */ React.createElement("div", { key: l, style: {
    padding: "16px 12px",
    borderLeft: i > 0 ? "1px solid rgba(255,255,255,.10)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { className: "h-display", style: { fontSize: 30, fontWeight: 800, color: "white" } }, n), /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,.55)", fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".14em", marginTop: 2 } }, l))))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 24,
    bottom: 80,
    zIndex: 4,
    pointerEvents: "none",
    fontFamily: "var(--font-mono)",
    fontSize: 10.5,
    color: "rgba(255,255,255,.55)",
    letterSpacing: ".14em",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: 8
  } }, /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("path", { d: "M10 3v8M10 11l-3-3M10 11l3-3M5 14v3M10 14v3M15 14v3" }))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    right: 24,
    bottom: 80,
    zIndex: 4,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 10.5,
    color: "rgba(255,255,255,.55)",
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 18, height: 28, borderRadius: 12, border: "1px solid rgba(255,255,255,.4)", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: 5,
    left: "50%",
    marginLeft: -2,
    width: 4,
    height: 7,
    borderRadius: 2,
    background: "rgba(255,255,255,.85)",
    animation: "scrollCue 1.8s infinite"
  } }))), /* @__PURE__ */ React.createElement(HeroMarquee, null));
}
function ApexShowcase() {
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "0px 0 60px", borderTop: "none" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Live Apex \xB7 this very page"), /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { margin: "16px 0 18px" } }, "The hiring code, written in Apex."), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { marginBottom: 22 } }, "A live developer console rendering a class that defines me \u2014 public, sealed, and fully governor-limit aware. Watch it type itself."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { className: "card hoverable", style: { padding: 18 } }, /* @__PURE__ */ React.createElement(Icon, { name: "code", size: 20, color: "var(--accent)" }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 700, marginTop: 8, fontSize: 16 } }, "Clean Apex"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-2)", fontSize: 13, marginTop: 4 } }, "91% test coverage \xB7 0 P1s")), /* @__PURE__ */ React.createElement("div", { className: "card hoverable", style: { padding: 18 } }, /* @__PURE__ */ React.createElement(Icon, { name: "database", size: 20, color: "var(--accent)" }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 700, marginTop: 8, fontSize: 16 } }, "SOQL discipline"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-2)", fontSize: 13, marginTop: 4 } }, "Selective queries \xB7 bulk-safe")))), /* @__PURE__ */ React.createElement(ApexTypewriter, null)));
}
function FloatingChip({ children, top, right, bottom, left, delay = 0 }) {
  return /* @__PURE__ */ React.createElement("div", { className: "hoverable", style: {
    position: "absolute",
    top,
    right,
    bottom,
    left,
    zIndex: 2,
    background: "white",
    border: "1px solid var(--line-2)",
    borderRadius: 999,
    padding: "8px 14px",
    fontSize: 13,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "var(--shadow-2)",
    animation: `chipFloat 6s ease-in-out infinite ${delay}s, chipIn .8s ease ${delay}s both`
  } }, children, /* @__PURE__ */ React.createElement("style", null, `
        @keyframes chipFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes chipIn { 0%{opacity:0; transform: translateY(20px) scale(.9)} 100%{opacity:1; transform: none} }
      `));
}
function Counter({ to, suffix = "", duration = 1600 }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const t0 = performance.now();
      const animate = () => {
        const t = Math.min(1, (performance.now() - t0) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setV(Math.round(to * eased));
        if (t < 1) requestAnimationFrame(animate);
      };
      animate();
      io.disconnect();
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return /* @__PURE__ */ React.createElement("span", { ref }, v.toLocaleString(), suffix);
}
function OrgHealthDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 3e3);
    return () => clearInterval(i);
  }, []);
  const cpu = 38 + tick * 7 % 22;
  const apiPct = 12 + tick * 3 % 8;
  const latency = 142 + tick * 11 % 60;
  return /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 22, background: "linear-gradient(180deg, #0A1B3C, #061331)", border: "1px solid rgba(255,255,255,.08)", color: "white", overflow: "hidden", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 99, background: "var(--sf-success)", boxShadow: "0 0 12px var(--sf-success)" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" } }, "org_health.live")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "rgba(255,255,255,.45)", fontFamily: "var(--font-mono)" } }, "refreshing every 1.5s")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 18 } }, /* @__PURE__ */ React.createElement(DashCard, { label: "Apex CPU", value: cpu, unit: "%", max: 100, hue: 200 }), /* @__PURE__ */ React.createElement(DashCard, { label: "API usage", value: apiPct, unit: "%", max: 100, hue: 150 }), /* @__PURE__ */ React.createElement(DashCard, { label: "P95 latency", value: latency, unit: "ms", max: 400, hue: 30 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "rgba(255,255,255,.5)", fontFamily: "var(--font-mono)", marginBottom: 8, letterSpacing: ".08em", textTransform: "uppercase" } }, "Recent transactions"), /* @__PURE__ */ React.createElement(Sparkline, null)), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "radial-gradient(circle at 90% 10%, rgba(0,161,224,.25), transparent 50%)", pointerEvents: "none" } }));
}
function DashCard({ label, value, unit, max, hue }) {
  const pct = Math.min(100, value / max * 100);
  return /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, padding: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "rgba(255,255,255,.55)", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700 } }, value, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: "rgba(255,255,255,.5)", marginLeft: 2 } }, unit)), /* @__PURE__ */ React.createElement("div", { style: { height: 4, background: "rgba(255,255,255,.08)", borderRadius: 99, marginTop: 10, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: pct + "%", background: `linear-gradient(90deg, hsl(${hue} 80% 55%), hsl(${hue + 30} 90% 65%))`, transition: "width .8s ease" } })));
}
function Sparkline() {
  const [points, setPoints] = useState(() => Array.from({ length: 40 }, () => Math.random() * 0.6 + 0.2));
  useEffect(() => {
    const i = setInterval(() => {
      setPoints((p) => [...p.slice(1), Math.random() * 0.8 + 0.15]);
    }, 1200);
    return () => clearInterval(i);
  }, []);
  const w = 100, h = 28;
  const path = points.map((y, i) => `${i === 0 ? "M" : "L"} ${i / (points.length - 1) * w} ${h - y * h}`).join(" ");
  return /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${w} ${h}`, preserveAspectRatio: "none", style: { width: "100%", height: 56 } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "spark-fill", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "var(--sf-blue)", stopOpacity: ".4" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "var(--sf-blue)", stopOpacity: "0" }))), /* @__PURE__ */ React.createElement("path", { d: `${path} L ${w} ${h} L 0 ${h} Z`, fill: "url(#spark-fill)" }), /* @__PURE__ */ React.createElement("path", { d: path, stroke: "var(--sf-blue)", strokeWidth: ".7", fill: "none" }));
}
function AboutSection() {
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "40px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " About"), /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { margin: "16px 0 18px" } }, "Engineering the customer 360, one trail at a time."), /* @__PURE__ */ React.createElement("p", { className: "body-lg" }, "Over the last eight years, I've led teams shipping Salesforce platforms for retail banks, lenders and omni-channel commerce \u2014 from greenfield org design to migrating legacy systems onto Data Cloud and Agentforce. I'm happiest when I'm bridging architecture, business outcomes and clean code."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 28 } }, [
    ["Architect mindset", "Multi-cloud design, governance, scale"],
    ["Hands-on dev", "Apex, LWC, OmniStudio, Flows"],
    ["AI-forward", "Agentforce, Einstein, Data Cloud"],
    ["Vertical depth", "Banking, FSC, Retail, Lending"]
  ].map(([t, d]) => /* @__PURE__ */ React.createElement("div", { key: t, className: "card", style: { padding: 16 } }, /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 14, fontFamily: "var(--font-display)" } }, t), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-2)", fontSize: 13, marginTop: 4 } }, d))))), /* @__PURE__ */ React.createElement(OrgHealthDashboard, null)));
}
function SkillsTrail() {
  const stages = [
    { name: "Apex & Triggers & Flow", level: "Master", x: 0.07 },
    { name: "LWC & Aura", level: "Master", x: 0.2 },
    { name: "OmniStudio", level: "Master", x: 0.33 },
    { name: "Service & Sales Cloud", level: "Expert", x: 0.47 },
    { name: "FSC & Experience Cloud", level: "Expert", x: 0.6 },
    { name: "Agentforce & Data Cloud", level: "Expert", x: 0.73 },
    { name: "Architecture & DevOps", level: "Senior", x: 0.87 }
  ];
  const isMobile = window.__IS_MOBILE;
  const pathPoints = stages.map((s, i) => {
    if (isMobile) {
      const t = i / (stages.length - 1);
      const x = 40 + t * 440;
      const y2 = 220 - t * 180;
      return { x, y: y2 };
    }
    const y = 0.5 + Math.sin(i * 1.1) * 0.35;
    return { x: s.x * 1100 + 50, y: y * 240 + 30 };
  });
  const vbW = isMobile ? 520 : 1200;
  const vbH = isMobile ? 260 : 300;
  const svgH = isMobile ? 260 : 300;
  const labelW = isMobile ? 120 : 144;
  const labelFontMain = isMobile ? 10 : 11.5;
  const labelFontSub = isMobile ? 7.5 : 9;
  const d = pathPoints.reduce((acc, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[i - 1];
    const cx1 = (prev.x + p.x) / 2;
    return `${acc} C ${cx1} ${prev.y}, ${cx1} ${p.y}, ${p.x} ${p.y}`;
  }, "");
  return /* @__PURE__ */ React.createElement("section", { style: {
    padding: isMobile ? "24px 0 16px" : "50px 0",
    background: "linear-gradient(180deg, rgba(10,27,60,0.18) 0%, transparent 60%)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: isMobile ? 20 : 40, flexWrap: "wrap", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " The Trail"), /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { margin: "12px 0 0" } }, "Skills, mapped as a trail.")), !isMobile && /* @__PURE__ */ React.createElement("p", { style: { maxWidth: 360, color: "var(--ink-2)" } }, "Every stop is a domain I've shipped production work in \u2014 hover the markers to inspect.")), /* @__PURE__ */ React.createElement("div", { className: "skills-svg-wrap", style: { padding: isMobile ? "8px 4px" : 32, borderRadius: 18, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "dot-bg", style: { position: "absolute", inset: 0, opacity: 0.25 } }), /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${vbW} ${vbH}`, style: { width: "100%", height: svgH, position: "relative", display: "block" } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "trail-stroke", x1: "0", x2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "var(--sf-blue)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "var(--sf-trail)" })), /* @__PURE__ */ React.createElement("filter", { id: "trail-glow" }, /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: "5" })), /* @__PURE__ */ React.createElement("filter", { id: "liquid", x: "-20%", y: "-50%", width: "140%", height: "200%" }, /* @__PURE__ */ React.createElement("feTurbulence", { type: "fractalNoise", baseFrequency: "0.025 0.06", numOctaves: "2", seed: "3", result: "noise" }, /* @__PURE__ */ React.createElement("animate", { attributeName: "baseFrequency", values: "0.025 0.06; 0.04 0.08; 0.025 0.06", dur: "6s", repeatCount: "indefinite" })), /* @__PURE__ */ React.createElement("feDisplacementMap", { in: "SourceGraphic", in2: "noise", scale: "6" }), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: "0.6" })), /* @__PURE__ */ React.createElement("filter", { id: "goo", x: "-30%", y: "-30%", width: "160%", height: "160%" }, /* @__PURE__ */ React.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "4", result: "blur" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", result: "goo" }), /* @__PURE__ */ React.createElement("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" }))), /* @__PURE__ */ React.createElement("path", { d, stroke: "rgba(8,30,69,.16)", strokeWidth: "3", fill: "none", strokeDasharray: "2 8", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("g", { filter: "url(#liquid)", opacity: ".5" }, /* @__PURE__ */ React.createElement("path", { d, stroke: "url(#trail-stroke)", strokeWidth: isMobile ? 16 : 22, fill: "none", strokeLinecap: "round", filter: "url(#trail-glow)" })), /* @__PURE__ */ React.createElement("path", { id: "liquid-trail", d, stroke: "url(#trail-stroke)", strokeWidth: isMobile ? 4 : 6, fill: "none", strokeLinecap: "round", filter: "url(#liquid)", opacity: ".95" }), /* @__PURE__ */ React.createElement("path", { d, stroke: "#FFFFFF", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeDasharray: "6 28", opacity: ".8" }, /* @__PURE__ */ React.createElement("animate", { attributeName: "stroke-dashoffset", from: "0", to: "-340", dur: "3.2s", repeatCount: "indefinite" })), /* @__PURE__ */ React.createElement("path", { d, stroke: "url(#trail-stroke)", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", opacity: ".85" }), /* @__PURE__ */ React.createElement("g", { filter: "url(#goo)" }, /* @__PURE__ */ React.createElement("circle", { r: isMobile ? 6 : 8, fill: "#FFB75D" }, /* @__PURE__ */ React.createElement("animateMotion", { dur: "6s", repeatCount: "indefinite", rotate: "auto" }, /* @__PURE__ */ React.createElement("mpath", { href: "#liquid-trail" }))), /* @__PURE__ */ React.createElement("circle", { r: isMobile ? 4 : 5, fill: "#FFFFFF" }, /* @__PURE__ */ React.createElement("animateMotion", { dur: "6s", repeatCount: "indefinite", rotate: "auto", begin: "-.08s" }, /* @__PURE__ */ React.createElement("mpath", { href: "#liquid-trail" }))), /* @__PURE__ */ React.createElement("circle", { r: "3", fill: "#00A1E0", opacity: ".9" }, /* @__PURE__ */ React.createElement("animateMotion", { dur: "6s", repeatCount: "indefinite", begin: "-.25s" }, /* @__PURE__ */ React.createElement("mpath", { href: "#liquid-trail" })))), pathPoints.map((p, i) => {
    const above = isMobile ? true : i % 2 === 0;
    const labelY = p.y + (above ? -(isMobile ? 32 : 40) : isMobile ? 32 : 36);
    const halfW = labelW / 2;
    const rawLX = p.x;
    const clampedLX = Math.max(halfW + 4, Math.min(vbW - halfW - 4, rawLX));
    return /* @__PURE__ */ React.createElement("g", { key: i, className: "hoverable" }, /* @__PURE__ */ React.createElement("circle", { cx: p.x, cy: p.y, r: "12", fill: "none", stroke: "var(--accent)", strokeWidth: "1.5", opacity: ".5" }, /* @__PURE__ */ React.createElement("animate", { attributeName: "r", values: "12;22;12", dur: "2.6s", begin: `${i * 0.25}s`, repeatCount: "indefinite" }), /* @__PURE__ */ React.createElement("animate", { attributeName: "opacity", values: ".6;0;.6", dur: "2.6s", begin: `${i * 0.25}s`, repeatCount: "indefinite" })), /* @__PURE__ */ React.createElement("circle", { cx: p.x, cy: p.y, r: "12", fill: "white", stroke: "var(--accent)", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: p.x, cy: p.y, r: "5", fill: "var(--accent)" }), /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: p.x,
        y1: p.y + (above ? -12 : 12),
        x2: clampedLX,
        y2: labelY + (above ? 14 : -14),
        stroke: "rgba(255,255,255,0.2)",
        strokeWidth: "1"
      }
    ), /* @__PURE__ */ React.createElement("g", { transform: `translate(${clampedLX}, ${labelY})` }, /* @__PURE__ */ React.createElement("rect", { x: -halfW, y: "-13", width: labelW, height: "26", rx: "13", fill: "white", stroke: "rgba(0,0,0,0.08)" }), /* @__PURE__ */ React.createElement("text", { textAnchor: "middle", y: "-1", fontFamily: "Manrope, sans-serif", fontWeight: "700", fontSize: labelFontMain, fill: "#0F172A" }, stages[i].name), /* @__PURE__ */ React.createElement("text", { textAnchor: "middle", y: "10", fontFamily: "JetBrains Mono, monospace", fontWeight: "600", fontSize: labelFontSub, fill: "var(--accent)", letterSpacing: "1" }, stages[i].level.toUpperCase())));
  })))));
}
function Testimonials() {
  const items = window.__SF_DATA__ && window.__SF_DATA__.testimonials || [];
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "50px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 48 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Kind words"), /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { margin: "16px auto 0", maxWidth: 740 } }, "Feedback from those I've built clouds with")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 } }, items.map((t, i) => /* @__PURE__ */ React.createElement("blockquote", { key: i, className: "card hoverable", style: { padding: 24, margin: 0, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "rgba(10, 20, 50, 0.45)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Icon, { name: "star", size: 16, color: "var(--sf-trail)" }), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13.5, lineHeight: 1.55, margin: "14px 0 22px", color: "rgba(255, 255, 255, 0.8)", fontStyle: "italic", fontWeight: 400 } }, '"', t.q, '"')), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: 99, background: "linear-gradient(135deg, #00A1E0, #7F00FF)", color: "white", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 } }, t.initials), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "white", fontWeight: 700 } }, t.who), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "rgba(255, 255, 255, 0.5)", marginTop: 2, fontWeight: 500 } }, t.title))))))));
}
function StarField() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, stars = [], shooters = [], raf;
    const resize = () => {
      const r = c.getBoundingClientRect();
      w = r.width;
      h = r.height;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    const starCount = window.__IS_MOBILE ? 80 : 180;
    stars = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.25,
      a: Math.random() * 0.6 + 0.3,
      tw: Math.random() * 2 * Math.PI,
      sp: 0.5 + Math.random() * 1.5,
      hue: 200 + Math.random() * 80
    }));
    let t = 0, lastShoot = 0;
    const tick = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      const g1 = ctx.createRadialGradient(w * 0.2, h * 0.3, 0, w * 0.2, h * 0.3, w * 0.5);
      g1.addColorStop(0, "rgba(127,0,255,.28)");
      g1.addColorStop(1, "rgba(127,0,255,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);
      const g2 = ctx.createRadialGradient(w * 0.85, h * 0.75, 0, w * 0.85, h * 0.75, w * 0.55);
      g2.addColorStop(0, "rgba(0,161,224,.30)");
      g2.addColorStop(1, "rgba(0,161,224,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);
      const g3 = ctx.createRadialGradient(w * 0.55, h * 0.15, 0, w * 0.55, h * 0.15, w * 0.4);
      g3.addColorStop(0, "rgba(255,99,180,.18)");
      g3.addColorStop(1, "rgba(255,99,180,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);
      for (const s of stars) {
        const tw = 0.55 + Math.sin(t * s.sp + s.tw) * 0.45;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 95%, 80%, ${s.a * tw})`;
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (t - lastShoot > 3.4 + Math.random() * 2.4) {
        lastShoot = t;
        shooters.push({
          x: Math.random() * w * 0.6,
          y: Math.random() * h * 0.4,
          vx: 4 + Math.random() * 4,
          vy: 1.5 + Math.random() * 1.4,
          life: 0
        });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.life++;
        sh.x += sh.vx;
        sh.y += sh.vy;
        const trail = 50;
        const grad = ctx.createLinearGradient(sh.x - sh.vx * 6, sh.y - sh.vy * 6, sh.x, sh.y);
        grad.addColorStop(0, "rgba(180,230,255,0)");
        grad.addColorStop(1, "rgba(255,255,255,.95)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sh.x - sh.vx * 6, sh.y - sh.vy * 6);
        ctx.lineTo(sh.x, sh.y);
        ctx.stroke();
        if (sh.life > trail || sh.x > w + 80 || sh.y > h + 80) shooters.splice(i, 1);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!raf) raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }, { threshold: 0.01 });
    io.observe(c);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);
  return /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, style: { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" } });
}
function CTAStrip({ go }) {
  return /* @__PURE__ */ React.createElement("section", { style: {
    padding: "80px 0",
    background: "linear-gradient(180deg, transparent 0%, rgba(26,10,60,0.15) 40%, rgba(10,27,60,0.12) 100%)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "card hoverable cta-card", style: {
    borderRadius: 28,
    padding: "72px 56px",
    background: "radial-gradient(ellipse at 30% 20%, #1A0A3C 0%, #0A1B3C 40%, #060B22 100%)",
    color: "white",
    overflow: "hidden",
    position: "relative",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 40px 80px -30px rgba(20,5,60,.6), inset 0 1px 0 rgba(255,255,255,.07)"
  } }, /* @__PURE__ */ React.createElement(StarField, null), /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: {
    position: "absolute",
    top: "50%",
    right: -120,
    width: 520,
    height: 520,
    transform: "translateY(-50%)",
    borderRadius: "50%",
    border: "1px dashed rgba(180,230,255,.18)",
    animation: "ringSpin 30s linear infinite"
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: {
    position: "absolute",
    top: "50%",
    right: -180,
    width: 640,
    height: 640,
    transform: "translateY(-50%)",
    borderRadius: "50%",
    border: "1px dashed rgba(180,230,255,.10)",
    animation: "ringSpin 50s linear infinite reverse"
  } }), /* @__PURE__ */ React.createElement("style", null, `
            @keyframes ringSpin { to { transform: translateY(-50%) rotate(360deg); } }
            @keyframes aiShimmer {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
          `), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap", zIndex: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 620 } }, /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "5px 12px",
    borderRadius: 99,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(180,230,255,.18)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,.85)",
    marginBottom: 18
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 99, background: "#B57BFF", boxShadow: "0 0 10px #B57BFF" } }), "Agentforce \xB7 Einstein \xB7 Data Cloud"), /* @__PURE__ */ React.createElement("h3", { className: "h-display cta-heading", style: { fontSize: 52, lineHeight: 1, marginBottom: 16, fontWeight: 800 } }, "Got a hard ", /* @__PURE__ */ React.createElement("span", { style: {
    backgroundImage: "linear-gradient(90deg, #B57BFF, #00D4FF, #FF77B0, #B57BFF)",
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: "aiShimmer 6s linear infinite"
  } }, "AI \xD7 Salesforce"), " problem?", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "rgba(255,255,255,.92)" } }, "Let's build it together.")), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { color: "rgba(255,255,255,.7)", maxWidth: 560 } }, "Open to lead developer engagements, architecture reviews, and Agentforce / AI roadmaps. The galaxy is wide \u2014 let's pick a star."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { className: "btn primary hoverable", onClick: () => go("contact"), style: { background: "linear-gradient(90deg, #00A1E0, #7F00FF)", boxShadow: "0 16px 40px -10px rgba(127,0,255,.5)" } }, "Start a project ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 })), /* @__PURE__ */ React.createElement("button", { className: "btn ghost hoverable", onClick: () => go("contact"), style: { background: "rgba(255,255,255,.06)", color: "white", borderColor: "rgba(255,255,255,.18)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 16 }), " Resume"))), /* @__PURE__ */ React.createElement("div", { className: "cta-glyph", style: { position: "relative", width: 220, height: 220, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: "50% auto auto 50%",
    transform: "translate(-50%,-50%)",
    width: 110,
    height: 110,
    borderRadius: "50%",
    background: "radial-gradient(circle at 35% 30%, #FFFFFF 0%, #B57BFF 25%, #7F00FF 60%, #1A0A3C 100%)",
    boxShadow: "0 0 80px 10px rgba(127,0,255,.45), inset 0 0 20px rgba(255,255,255,.4)",
    animation: "aiCorePulse 4s ease-in-out infinite"
  } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(180,230,255,.35)", animation: "ringSpin 12s linear infinite" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: -6, left: "50%", marginLeft: -6, width: 12, height: 12, borderRadius: 99, background: "#00D4FF", boxShadow: "0 0 18px #00D4FF" } })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 18, borderRadius: "50%", border: "1px dashed rgba(255,119,176,.4)", animation: "ringSpin 8s linear infinite reverse" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", bottom: -5, left: "50%", marginLeft: -5, width: 10, height: 10, borderRadius: 99, background: "#FF77B0", boxShadow: "0 0 14px #FF77B0" } })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 40, borderRadius: "50%", border: "1px dotted rgba(181,123,255,.45)", animation: "ringSpin 16s linear infinite" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: "50%", right: -5, marginTop: -5, width: 10, height: 10, borderRadius: 99, background: "#B57BFF", boxShadow: "0 0 14px #B57BFF" } })), /* @__PURE__ */ React.createElement("style", null, `
                @keyframes aiCorePulse { 0%,100% { transform: translate(-50%,-50%) scale(1); filter: brightness(1); } 50% { transform: translate(-50%,-50%) scale(1.06); filter: brightness(1.2); } }
              `))))));
}
function ThreeOrbSection() {
  return /* @__PURE__ */ React.createElement("section", { style: { padding: "100px 0", borderTop: "1px solid var(--line-2)", background: "linear-gradient(180deg, var(--bg), #F0F4FB)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 56, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Customer 360 \xB7 live orbit"), /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { margin: "16px 0 18px" } }, "Every cloud connects."), /* @__PURE__ */ React.createElement("p", { className: "body-lg" }, "Sales, Service, Experience, Data Cloud, Agentforce, FSC, Industries \u2014 the clouds I orchestrate every day. Drag the orbit, hover any node, watch the lightning route between them. This is the platform, in 3D."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 } }, [
    ["Sales Cloud", "#00A1E0"],
    ["Service Cloud", "#FF6F00"],
    ["Experience", "#7F00FF"],
    ["Data Cloud", "#2E844A"],
    ["Agentforce", "#B14AED"],
    ["FSC", "#0070D2"],
    ["Industries (Vlocity)", "#FFB75D"]
  ].map(([n, c]) => /* @__PURE__ */ React.createElement("div", { key: n, className: "hoverable", "data-cursor": "hover", style: { display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: 99, background: c, boxShadow: `0 0 10px ${c}` } }), " ", n)))), /* @__PURE__ */ React.createElement(ThreeOrb, { height: 500 }))));
}
function CommunityEvents() {
  const events = [
    {
      title: "TrailblazerDX (TDX)",
      role: "Attendee & Learner",
      desc: "Connecting with the global developer community, exploring the latest in AI, Data Cloud, and architecting for scale.",
      icon: "cloud",
      link: "https://drive.google.com/drive/folders/1Y_VKpJonaDDSwMBj8KyJJtjFQQwu-o6o?usp=sharing"
    },
    {
      title: "Community Meetups",
      role: "Active Member",
      desc: "Regularly participating in local Salesforce chapters to share knowledge, solve hard platform problems, and network with fellow Trailblazers.",
      icon: "user",
      link: "https://drive.google.com/drive/folders/1Y2T-MGjFyblqV6VXxIvv7o5fjszCbEzj?usp=sharing"
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: {
    padding: "0px 0",
    background: "linear-gradient(180deg, transparent 0%, rgba(7,16,31,0.25) 50%, transparent 100%)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 56 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Community"), /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { margin: "16px auto 0", maxWidth: 740 } }, "Off the clock, on the trail."), /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 680,
    margin: "24px auto 0",
    padding: "24px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.03)",
    border: "1px dashed rgba(255,255,255,0.1)",
    display: "inline-block"
  } }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ink-1)", fontStyle: "italic", lineHeight: 1.5, margin: 0 } }, `"Next time you see me at a meetup, come and say hello! I speak fluent English, Apex, and occasionally SOQL when I'm frustrated. Coffee is on me." \u2615`))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto" } }, events.map((e, i) => /* @__PURE__ */ React.createElement("a", { key: i, href: e.link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none", color: "inherit", display: "block" } }, /* @__PURE__ */ React.createElement("div", { className: "card hoverable", style: { padding: 32, display: "flex", gap: 24, alignItems: "flex-start", borderRadius: 24, height: "100%", background: "rgba(10, 20, 50, 0.45)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)", transition: "transform 0.3s ease, border-color 0.3s ease" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 56, height: 56, borderRadius: 16, background: "rgba(0,161,224,0.1)", color: "var(--sf-blue)", display: "grid", placeItems: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Icon, { name: e.icon, size: 28 })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 8, color: "white" } }, e.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--sf-blue)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12 } }, e.role), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6, margin: 0 } }, e.desc)), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 20,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "#00A1E0",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: ".08em"
  } }, "Explore Event Drive \u2794"))))))));
}
function SpidermanIntro({ onComplete }) {
  const [phase, setPhase] = React.useState("spidey");
  const [isFadingOut, setIsFadingOut] = React.useState(false);
  const [debugLines, setDebugLines] = React.useState([]);
  const discRef = React.useRef(null);
  const figRef = React.useRef(null);
  const wordRef = React.useRef(null);
  const handleSkip = React.useCallback(() => {
    localStorage.setItem("spidermanIntroPlayed", "true");
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  }, [onComplete]);
  React.useLayoutEffect(() => {
    const nav = document.querySelector(".nav");
    if (nav) nav.style.display = "none";
    return () => {
      if (nav) nav.style.display = "";
    };
  }, []);
  React.useEffect(() => {
    if (phase === "debug") return;
    let raf = 0;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      target.x = (e.clientX - cx) / cx;
      target.y = (e.clientY - cy) / cy;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (discRef.current) {
        discRef.current.style.transform = `translate(calc(-50% + ${current.x * 12}px), calc(-52% + ${current.y * 10}px))`;
      }
      if (figRef.current) {
        figRef.current.style.transform = `translate(${current.x * -18}px, ${current.y * -10}px)`;
      }
      if (wordRef.current) {
        wordRef.current.style.transform = `translate(calc(-50% + ${current.x * 6}px), calc(-120% + ${current.y * 4}px))`;
      }
      if (Math.abs(target.x - current.x) > 1e-3 || Math.abs(target.y - current.y) > 1e-3) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [phase]);
  React.useEffect(() => {
    if (localStorage.getItem("spidermanIntroPlayed") === "true") {
      onComplete();
      return;
    }
    const handleKey = (e) => {
      if (e.key === "Escape") handleSkip();
    };
    window.addEventListener("keydown", handleKey);
    const timer1 = setTimeout(() => setPhase("shake"), 3e3);
    const timer2 = setTimeout(() => {
      setPhase("debug");
      setDebugLines(["> Warning: Identity Mismatch detected."]);
    }, 5e3);
    const t3 = setTimeout(() => setDebugLines((p) => [...p, "> Wait, you aren't Peter Parker..."]), 6800);
    const t4 = setTimeout(() => setDebugLines((p) => [...p, "> Refining Multiverse data into Salesforce Data Cloud..."]), 8800);
    const t5 = setTimeout(() => setDebugLines((p) => [...p, "> Analyzing temporal anomalies across timelines..."]), 10800);
    const t6 = setTimeout(() => setDebugLines((p) => [...p, "> Running Identity Resolution RuleSet..."]), 13300);
    const t7 = setTimeout(() => setDebugLines((p) => [...p, "> Match found. Accessing variant registry..."]), 15300);
    const t8 = setTimeout(() => setDebugLines((p) => [...p, "> Found Yusuf Khan in Earth Planet X00YT787 \u2014 Lead Salesforce Developer."]), 17300);
    const t9 = setTimeout(() => setDebugLines((p) => [...p, "> Opening portal, preparing environment..."]), 19800);
    const t10 = setTimeout(() => {
      handleSkip();
    }, 21800);
    return () => {
      window.removeEventListener("keydown", handleKey);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      clearTimeout(t9);
      clearTimeout(t10);
    };
  }, [onComplete, handleSkip]);
  const emblems = React.useMemo(() => {
    return Array.from({ length: 26 }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "mask-icon" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "uploads/Spider-Man-Emblem-700x394.png",
        alt: "Emblem",
        style: { width: "80%", height: "80%", objectFit: "contain", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }
      }
    )));
  }, []);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `spider-scope ${phase === "debug" ? "debug-theme" : "spidey-theme"}`,
      style: {
        animation: phase === "shake" ? "spideyShake 0.4s ease-in-out infinite" : "none",
        fontFamily: phase === "debug" ? "var(--font-mono)" : "inherit",
        pointerEvents: isFadingOut ? "none" : "auto"
      }
    },
    /* @__PURE__ */ React.createElement("style", null, `
        .spider-scope {
          --red: #E10A1C;
          --red-deep: #9A0010;
          --red-blood: #C8071A;
          --red-glow: #FF2638;
          --ink: #F2EEEA;
          --ink-2: rgba(242, 238, 234, .65);
          --ink-3: rgba(242, 238, 234, .4);
          --bg: #050203;
          --bg-2: #0B0405;
          --line: rgba(255, 255, 255, .08);
          --font-display: 'Anton', 'Bebas Neue', system-ui, sans-serif;
          --font-body: 'Manrope', system-ui, sans-serif;
          --font-mono: 'JetBrains Mono', ui-monospace, monospace;
          
          position: fixed; inset: 0;
          z-index: 2147483647;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          font-family: var(--font-body);
          color: var(--ink);
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .spider-scope .skip-btn {
          position: absolute; top: 24px; right: 24px; padding: 8px 20px;
          background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255,255,255,0.15);
          border-radius: 99px; color: rgba(255,255,255,0.85); font-size: 11.5px;
          font-family: var(--font-mono); font-weight: 600; cursor: pointer; z-index: 10000;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 0 0 rgba(225, 10, 28, 0);
          letter-spacing: 0.05em;
        }
        .spider-scope .skip-btn:hover {
          background: rgba(225, 10, 28, 0.15);
          border-color: rgba(225, 10, 28, 0.5);
          color: #FFF;
          box-shadow: 0 0 20px rgba(225, 10, 28, 0.45), inset 0 0 10px rgba(225, 10, 28, 0.2);
          transform: scale(1.06);
          text-shadow: 0 0 4px rgba(255,255,255,0.5);
        }
        
        .spider-scope.spidey-theme {
          background:
            radial-gradient(ellipse 70% 50% at 50% 35%, rgba(225, 10, 28, .10), transparent 65%),
            radial-gradient(circle at 20% 0%, rgba(180, 0, 18, .08), transparent 55%),
            radial-gradient(circle at 80% 100%, rgba(120, 0, 12, .10), transparent 55%),
            linear-gradient(180deg, #050203 0%, #0A0405 60%, #02010100 100%),
            var(--bg);
        }

        .spider-scope.spidey-theme::before {
          content: ""; position: absolute; inset: 0; z-index: 100; pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 0.95  0 0 0 0 0.92  0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>");
          opacity: .45; mix-blend-mode: overlay;
        }

        .spider-scope.spidey-theme::after {
          content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 35% 80% at 0% 50%, rgba(255, 255, 255, .04), transparent 60%),
            radial-gradient(ellipse 35% 80% at 100% 50%, rgba(255, 255, 255, .03), transparent 60%);
        }

        .spider-scope.debug-theme {
          background:
            radial-gradient(circle at 50% 45%, rgba(225, 38, 56, 0.08) 0%, transparent 65%),
            linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%),
            #050203;
          background-size: 100% 100%, 100% 4px, 100% 100%;
        }

        .spider-scope * { box-sizing: border-box; }

        .spider-scope .stage {
          position: relative; z-index: 1;
          width: 100%; height: 100%;
          display: grid;
          grid-template-rows: 1fr auto;
          overflow: hidden;
          transform-origin: center center;
        }

        .spider-scope .hero {
          position: relative;
          flex: 1;
          display: grid;
          place-items: center;
          padding: 20px 0 0;
          height: 100%;
        }

        .spider-scope .disc {
          position: absolute;
          top: 50%; left: 50%;
          width: clamp(420px, 56vmin, 720px);
          height: clamp(420px, 56vmin, 720px);
          border-radius: 50%;
          background:
            radial-gradient(circle at 35% 32%, #FF3144 0%, #E10A1C 38%, #B40012 70%, #6A0009 100%);
          transform: translate(-50%, -52%);
          box-shadow:
            0 0 120px 30px rgba(225, 10, 28, .28),
            0 0 240px 80px rgba(225, 10, 28, .15),
            inset -20px -40px 80px rgba(0, 0, 0, .4),
            inset 12px 18px 60px rgba(255, 80, 90, .25);
          z-index: 1;
          animation: spideyDiscPulse 6s ease-in-out infinite alternate;
        }

        .spider-scope .disc::after {
          content: ""; position: absolute; inset: 0; border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, .35) 100%);
        }

        .spider-scope .disc-web {
          position: absolute;
          top: 50%; left: 50%;
          width: clamp(420px, 56vmin, 720px);
          height: clamp(420px, 56vmin, 720px);
          border-radius: 50%;
          transform: translate(-50%, -52%);
          background-image:
            conic-gradient(from 0deg,
              rgba(0, 0, 0, .18) 0deg, transparent 1deg, transparent 29deg,
              rgba(0, 0, 0, .18) 30deg, transparent 31deg, transparent 59deg,
              rgba(0, 0, 0, .18) 60deg, transparent 61deg, transparent 89deg,
              rgba(0, 0, 0, .18) 90deg, transparent 91deg, transparent 119deg,
              rgba(0, 0, 0, .18) 120deg, transparent 121deg, transparent 149deg,
              rgba(0, 0, 0, .18) 150deg, transparent 151deg, transparent 179deg,
              rgba(0, 0, 0, .18) 180deg, transparent 181deg, transparent 209deg,
              rgba(0, 0, 0, .18) 210deg, transparent 211deg, transparent 239deg,
              rgba(0, 0, 0, .18) 240deg, transparent 241deg, transparent 269deg,
              rgba(0, 0, 0, .18) 270deg, transparent 271deg, transparent 299deg,
              rgba(0, 0, 0, .18) 300deg, transparent 301deg, transparent 329deg,
              rgba(0, 0, 0, .18) 330deg, transparent 331deg, transparent 359deg);
          pointer-events: none;
          z-index: 2;
          mask: radial-gradient(circle, black 0%, black 80%, transparent 100%);
          -webkit-mask: radial-gradient(circle, black 0%, black 80%, transparent 100%);
          opacity: .9;
          animation: spideyDiscPulse 6s ease-in-out infinite alternate;
        }

        .spider-scope .disc-rings {
          position: absolute;
          top: 50%; left: 50%;
          width: clamp(420px, 56vmin, 720px);
          height: clamp(420px, 56vmin, 720px);
          transform: translate(-50%, -52%);
          z-index: 2;
          pointer-events: none;
          mask: radial-gradient(circle, black 0%, black 78%, transparent 100%);
          -webkit-mask: radial-gradient(circle, black 0%, black 78%, transparent 100%);
          animation: spideyDiscPulse 6s ease-in-out infinite alternate;
        }

        .spider-scope .disc-rings::before,
        .spider-scope .disc-rings::after {
          content: ""; position: absolute; border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, .22);
        }
        .spider-scope .disc-rings::before { inset: 22%; }
        .spider-scope .disc-rings::after  { inset: 44%; }

        .spider-scope .wordmark {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -120%);
          font-family: var(--font-display);
          font-size: clamp(80px, 13vw, 220px);
          letter-spacing: .005em;
          line-height: .85;
          color: #FFFFFF;
          text-transform: uppercase;
          white-space: nowrap;
          z-index: 3;
          text-shadow:
            0 6px 30px rgba(0, 0, 0, .7),
            0 0 30px rgba(225, 10, 28, .15);
          user-select: none;
        }

        .spider-scope .wordmark .split { display: inline-block; }
        .spider-scope .wordmark .accent { color: #FFFFFF; }

        .spider-scope .hero-figure {
          position: relative;
          z-index: 4;
          width: clamp(280px, 32vmin, 420px);
          height: clamp(420px, 60vmin, 700px);
          margin-top: clamp(20px, 4vmin, 60px);
          filter: drop-shadow(0 30px 60px rgba(0, 0, 0, .7)) drop-shadow(0 0 60px rgba(225, 10, 28, .25));
          pointer-events: auto;
        }

        .spider-scope .marquee-wrap {
          position: absolute;
          left: -8%; right: -8%;
          top: 68%;
          height: 84px;
          z-index: 5;
          background: linear-gradient(180deg, #0A0203 0%, #110305 50%, #0A0203 100%);
          border-top: 1px solid rgba(225, 10, 28, .25);
          border-bottom: 1px solid rgba(225, 10, 28, .25);
          transform: rotate(-3deg);
          box-shadow:
            0 8px 30px -10px rgba(0, 0, 0, .7),
            inset 0 0 40px rgba(225, 10, 28, .1);
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .spider-scope .marquee-wrap::before,
        .spider-scope .marquee-wrap::after {
          content: ""; position: absolute; top: 0; bottom: 0; width: 80px; z-index: 3; pointer-events: none;
        }
        .spider-scope .marquee-wrap::before { left: 0; background: linear-gradient(90deg, #0A0203, transparent); }
        .spider-scope .marquee-wrap::after  { right: 0; background: linear-gradient(-90deg, #0A0203, transparent); }

        .spider-scope .marquee-track {
          display: flex; gap: 28px; align-items: center;
          animation: spideyMarquee 28s linear infinite;
          padding: 0 20px;
          flex: 0 0 auto;
        }

        .spider-scope .mask-icon {
          width: 44px; height: 44px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #E10A1C 0%, #9A0010 100%);
          box-shadow: 0 4px 10px rgba(0, 0, 0, .5), inset 0 0 12px rgba(0, 0, 0, .35);
          position: relative;
          display: grid; place-items: center;
        }

        .spider-scope .mask-icon img {
          width: 80%; height: 80%;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .spider-scope .web-line {
          position: absolute; top: 0; left: 50%;
          width: 1px; height: 140px;
          background: linear-gradient(180deg, rgba(255, 255, 255, .6), transparent);
          z-index: 6; pointer-events: none;
          transform-origin: top;
          animation: spideyLineDrop .8s cubic-bezier(.4, .6, .2, 1) both;
        }

        /* Glitch & Red Alert System */
        .spider-scope .glitch-overlay {
          position: absolute; inset: 0;
          background: rgba(225, 10, 28, 0.18);
          z-index: 999;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: redAlertFlash 0.2s infinite alternate;
        }
        .spider-scope .glitch-banner {
          background: rgba(10, 2, 3, 0.95);
          border: 2px solid #FF2638;
          padding: 28px 56px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 0 50px rgba(255, 38, 56, 0.75), inset 0 0 25px rgba(255, 38, 56, 0.35);
          animation: scaleUp 0.18s cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
          position: relative;
          z-index: 1000;
        }
        .spider-scope .warning-icon {
          font-size: 56px;
          margin-bottom: 12px;
          animation: pulseIcon 0.4s infinite alternate;
        }
        .spider-scope .warning-text-large {
          font-family: var(--font-display);
          font-size: clamp(36px, 6vw, 56px);
          color: #FF2638;
          letter-spacing: 0.08em;
          text-shadow: 0 0 15px rgba(255, 38, 56, 0.9);
          margin: 0;
        }
        .spider-scope .warning-text-sub {
          font-family: var(--font-mono);
          font-size: 13px;
          color: #FFFFFF;
          margin-top: 10px;
          letter-spacing: 0.2em;
          opacity: 0.95;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          font-weight: 700;
        }
        .spider-scope .glitch-line {
          position: absolute;
          left: 0; right: 0; height: 3px;
          background: rgba(255, 38, 56, 0.95);
          box-shadow: 0 0 20px #FF2638;
          animation: glitchScan 1s linear infinite;
          z-index: 1001;
        }
        .spider-scope .glitch-grid {
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(255, 38, 56, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 38, 56, 0.06) 1px, transparent 1px);
          background-size: 24px 24px;
          z-index: 998;
        }

        /* Cyberpunk HUD Interface */
        .spider-scope .hud-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.45);
          border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
          padding-bottom: 12px;
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .spider-scope .hud-pulse {
          color: #FF2638;
          animation: hudPulse 0.6s ease-in-out infinite alternate;
          font-size: 14px;
        }

        /* Black Hole Transition Styles */
        .spider-scope .sucked-in {
          transform: scale(0) rotate(-1080deg) !important;
          opacity: 0 !important;
          filter: blur(15px) brightness(0) !important;
          transition: transform 0.9s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.9s ease, filter 0.9s ease !important;
          transform-origin: center center !important;
        }

        .spider-scope .blackhole-portal {
          position: absolute;
          top: 50%; left: 50%;
          width: 300px; height: 300px;
          transform: translate(-50%, -50%) scale(0);
          z-index: 99999;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: portalOpen 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .spider-scope .singularity-core {
          position: absolute;
          width: 60px; height: 60px;
          border-radius: 50%;
          background: #000000;
          box-shadow: 
            0 0 40px 10px #000, 
            0 0 80px 20px #FF2638, 
            0 0 150px 30px #4DAFFF;
          z-index: 10;
        }

        .spider-scope .accretion-disk {
          position: absolute;
          width: 240px; height: 240px;
          border-radius: 50%;
          border: 4px double transparent;
          background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), conic-gradient(from 0deg, #FF2638, #FFA834, #4DAFFF, #FF2638);
          background-origin: border-box;
          background-clip: content-box, border-box;
          box-shadow: 
            0 0 60px rgba(255, 38, 56, 0.6),
            inset 0 0 40px rgba(77, 175, 255, 0.4);
          animation: accretionSpin 0.5s linear infinite;
          opacity: 0.9;
        }

        .spider-scope .gravitational-lens {
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, transparent 40%, rgba(255, 255, 255, 0.08) 60%, transparent 70%);
          box-shadow: 
            inset 0 0 50px rgba(255, 255, 255, 0.1),
            0 0 100px rgba(77, 175, 255, 0.3);
          animation: lensPulse 1.2s ease-in-out infinite alternate;
        }

        .spider-scope .cosmic-sparks {
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          border: 2px dashed rgba(255, 168, 52, 0.4);
          animation: accretionSpin 1s linear infinite reverse;
        }

        /* Entrance Animations */
        .spider-scope .anim-zoom-in { opacity: 0; transform: translate(-50%, -52%) scale(.6); animation: spideyZoomIn 1.1s cubic-bezier(.2, 1.1, .3, 1) forwards; }
        .spider-scope .anim-word { opacity: 0; transform: translate(-50%, -120%) scale(1.15); filter: blur(8px); animation: spideyWordIn .9s cubic-bezier(.2, 1, .3, 1) .25s forwards; }
        .spider-scope .anim-fig { opacity: 0; transform: translateY(40px); animation: spideyFadeUp 1s cubic-bezier(.2, .8, .2, 1) .55s forwards; }
        .spider-scope .anim-marquee { opacity: 0; transform: translateX(-100px) rotate(-3deg); animation: spideyMarqueeIn .9s cubic-bezier(.2, .8, .2, 1) .85s forwards; }

        @keyframes spideyFadeUp {
          to { opacity: 1; transform: none; }
        }
        @keyframes spideyZoomIn {
          to { opacity: 1; transform: translate(-50%, -52%) scale(1); }
        }
        @keyframes spideyWordIn {
          to { opacity: 1; transform: translate(-50%, -120%) scale(1); filter: blur(0); }
        }
        @keyframes spideyMarqueeIn {
          to { opacity: 1; transform: translateX(0) rotate(-3deg); }
        }
        @keyframes spideyLineDrop {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }
        @keyframes spideyDiscPulse {
          from { filter: brightness(1) saturate(1); }
          to   { filter: brightness(1.08) saturate(1.08); }
        }
        @keyframes spideyMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes spideyShake {
          0%, 100% { transform: translateX(0) translateY(0); }
          10% { transform: translateX(-12px) translateY(-4px) rotate(-1deg) skewX(-2deg); }
          30% { transform: translateX(12px) translateY(4px) rotate(1deg) skewX(2deg); }
          50% { transform: translateX(-15px) translateY(2px) rotate(-1.5deg); }
          70% { transform: translateX(15px) translateY(-3px) rotate(1.5deg); }
          90% { transform: translateX(-8px) translateY(-2px) rotate(-0.5deg); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes redAlertFlash {
          0% { background: rgba(225, 10, 28, 0.12); }
          100% { background: rgba(225, 10, 28, 0.38); }
        }
        @keyframes pulseIcon {
          0% { transform: scale(0.9); filter: drop-shadow(0 0 2px #FF2638); }
          100% { transform: scale(1.15); filter: drop-shadow(0 0 15px #FF2638); }
        }
        @keyframes scaleUp {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes glitchScan {
          0% { top: -5%; }
          100% { top: 105%; }
        }
        @keyframes hudPulse {
          from { opacity: 0.2; text-shadow: 0 0 0 transparent; }
          to { opacity: 1; text-shadow: 0 0 8px #FF2638; }
        }
        @keyframes portalOpen {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          15% { transform: translate(-50%, -50%) scale(0.6); opacity: 1; filter: brightness(2); }
          75% { transform: translate(-50%, -50%) scale(1.8); opacity: 0.95; }
          100% { transform: translate(-50%, -50%) scale(5.5); opacity: 0; filter: blur(30px); }
        }
        @keyframes accretionSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes lensPulse {
          from { transform: scale(0.9); opacity: 0.7; }
          to { transform: scale(1.15); opacity: 1; }
        }
      `),
    /* @__PURE__ */ React.createElement("button", { onClick: handleSkip, className: "hoverable skip-btn" }, "Skip Intro (Esc)"),
    phase === "shake" && /* @__PURE__ */ React.createElement("div", { className: "glitch-overlay" }, /* @__PURE__ */ React.createElement("div", { className: "glitch-grid" }), /* @__PURE__ */ React.createElement("div", { className: "glitch-line" }), /* @__PURE__ */ React.createElement("div", { className: "glitch-banner" }, /* @__PURE__ */ React.createElement("div", { className: "warning-icon" }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("h2", { className: "warning-text-large" }, "SYSTEM ERROR"), /* @__PURE__ */ React.createElement("div", { className: "warning-text-sub" }, "IDENTITY MISMATCH DETECTED"))),
    phase !== "debug" && /* @__PURE__ */ React.createElement("main", { className: `stage ${isFadingOut ? "sucked-in" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "hero" }, /* @__PURE__ */ React.createElement("div", { className: "web-line" }), /* @__PURE__ */ React.createElement("div", { ref: discRef, className: "disc anim-zoom-in" }), /* @__PURE__ */ React.createElement("div", { className: "disc-web" }), /* @__PURE__ */ React.createElement("div", { className: "disc-rings" }), /* @__PURE__ */ React.createElement("h1", { ref: wordRef, className: "wordmark anim-word", style: { display: "flex", flexDirection: "column", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.35em", lineHeight: 1, marginBottom: -5, paddingLeft: 5 } }, "HELLO I AM"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "split" }, "SPIDER"), /* @__PURE__ */ React.createElement("span", { className: "accent" }, "MAN"))), /* @__PURE__ */ React.createElement("div", { ref: figRef, className: "hero-figure anim-fig" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "uploads/spider1.png",
        alt: "Spider-Man",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "relative",
          zIndex: 5,
          display: "block"
        }
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "marquee-wrap anim-marquee" }, /* @__PURE__ */ React.createElement("div", { className: "marquee-track" }, emblems, emblems)))),
    phase === "debug" && /* @__PURE__ */ React.createElement("div", { className: isFadingOut ? "sucked-in" : "", style: {
      width: "90%",
      maxWidth: 740,
      padding: 30,
      background: "rgba(10, 2, 3, 0.95)",
      border: "1px solid rgba(255, 38, 56, 0.3)",
      borderRadius: 12,
      boxShadow: "0 0 50px rgba(255, 38, 56, 0.25), inset 0 0 20px rgba(255, 38, 56, 0.1)",
      textAlign: "left",
      animation: "scaleUp 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.15) both",
      zIndex: 1e3,
      position: "relative",
      backdropFilter: "blur(10px)",
      transformOrigin: "center center"
    } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -2, left: -2, width: 14, height: 14, borderTop: "2px solid rgba(255, 38, 56, 0.75)", borderLeft: "2px solid rgba(255, 38, 56, 0.75)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -2, right: -2, width: 14, height: 14, borderTop: "2px solid rgba(255, 38, 56, 0.75)", borderRight: "2px solid rgba(255, 38, 56, 0.75)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: -2, left: -2, width: 14, height: 14, borderBottom: "2px solid rgba(255, 38, 56, 0.75)", borderLeft: "2px solid rgba(255, 38, 56, 0.75)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: -2, right: -2, width: 14, height: 14, borderBottom: "2px solid rgba(255, 38, 56, 0.75)", borderRight: "2px solid rgba(255, 38, 56, 0.75)" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 10, height: 10, borderRadius: 5, background: "#ff5f56" } }), /* @__PURE__ */ React.createElement("div", { style: { width: 10, height: 10, borderRadius: 5, background: "#ffbd2e" } }), /* @__PURE__ */ React.createElement("div", { style: { width: 10, height: 10, borderRadius: 5, background: "#27c93f" } })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255, 255, 255, 0.35)", letterSpacing: "0.12em", fontWeight: 600 } }, "ANOMALY_DETECTOR.EXE")), /* @__PURE__ */ React.createElement("div", { className: "hud-header" }, /* @__PURE__ */ React.createElement("span", { className: "hud-pulse" }, "\u25CF"), " SECURE COGNITIVE SHIELD RESOLVER \xB7 Earth Planet X00YT787"), debugLines.map((line, i) => {
      let color = "rgba(255,255,255,0.85)";
      let textShadow = "none";
      if (line.includes("Mismatch") || line.includes("Parker") || line.includes("Failed")) {
        color = "#FF4D62";
        textShadow = "0 0 10px rgba(255, 77, 98, 0.5)";
      } else if (line.includes("Data Cloud") || line.includes("anomalies")) {
        color = "#4DAFFF";
        textShadow = "0 0 10px rgba(77, 175, 255, 0.5)";
      } else if (line.includes("Resolution") || line.includes("variant")) {
        color = "#FFA834";
        textShadow = "0 0 10px rgba(255, 168, 52, 0.5)";
      } else if (line.includes("Yusuf Khan")) {
        color = "#34FFA1";
        textShadow = "0 0 15px rgba(52, 255, 161, 0.75)";
      } else if (i === debugLines.length - 1) {
        color = "#4DAFFF";
      }
      return /* @__PURE__ */ React.createElement("div", { key: i, style: {
        marginBottom: 14,
        fontSize: "clamp(14px, 1.8vw, 16px)",
        lineHeight: 1.6,
        color,
        textShadow,
        animation: "letterIn 0.25s ease both",
        fontFamily: "var(--font-mono)",
        fontWeight: 600
      } }, line);
    }), /* @__PURE__ */ React.createElement("div", { style: { display: "inline-block", width: 10, height: 20, background: "#4DAFFF", animation: "cursorBlink 1s infinite", marginLeft: 8, verticalAlign: "middle", marginTop: -4 } })),
    isFadingOut && /* @__PURE__ */ React.createElement("div", { className: "blackhole-portal" }, /* @__PURE__ */ React.createElement("div", { className: "gravitational-lens" }), /* @__PURE__ */ React.createElement("div", { className: "accretion-disk" }), /* @__PURE__ */ React.createElement("div", { className: "cosmic-sparks" }), /* @__PURE__ */ React.createElement("div", { className: "singularity-core" }))
  );
}
function PageHome({ go }) {
  return /* @__PURE__ */ React.createElement("main", { style: { animation: "letterIn 2s ease both" } }, /* @__PURE__ */ React.createElement(HeroSection, { go }), /* @__PURE__ */ React.createElement(SkillsTrail, null), /* @__PURE__ */ React.createElement(CommunityEvents, null), /* @__PURE__ */ React.createElement(Testimonials, null), /* @__PURE__ */ React.createElement(CTAStrip, { go }));
}
Object.assign(window, { PageHome });


/* ── trailhead/page-certs.jsx ── */
const CERTS = window.__SF_DATA__ && window.__SF_DATA__.certifications || [];
const FAMILIES = ["All", "Foundational", "Developer", "Consultant", "Industries", "Data & AI", "AI", "Architect"];
function ProgressRing({ label, pct, hue, size = 100 }) {
  const strokeWidth = size * 0.08;
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - pct / 100);
  return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}` }, /* @__PURE__ */ React.createElement("circle", { cx: size / 2, cy: size / 2, r, stroke: "rgba(255,255,255,0.05)", strokeWidth, fill: "none" }), /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx: size / 2,
      cy: size / 2,
      r,
      stroke: `hsl(${hue} 90% 50%)`,
      strokeWidth,
      fill: "none",
      strokeDasharray: c,
      strokeDashoffset: off,
      strokeLinecap: "round",
      transform: `rotate(-90 ${size / 2} ${size / 2})`,
      style: { transition: "stroke-dashoffset 1s ease" }
    }
  ), /* @__PURE__ */ React.createElement("text", { x: size / 2, y: size / 2 + size * 0.07, textAnchor: "middle", fontFamily: "var(--font-display)", fontSize: size * 0.25, fontWeight: "700", fill: "white" }, pct, "%")), label && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-2)", fontWeight: 600, marginTop: 4 } }, label));
}
function BentoSummary() {
  const latest = CERTS[CERTS.length - 1] || null;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 40 } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 20, background: "rgba(10,18,48,0.5)", border: "1px solid rgba(255,255,255,0.05)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700 } }, "Total Active"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 800, color: "white", marginTop: 8 } }, CERTS.length), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--ink-2)", marginTop: 4 } }, "Salesforce Credentials")), latest && /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 20, background: "rgba(10,18,48,0.5)", border: "1px solid rgba(255,255,255,0.05)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700 } }, "Latest Achievement"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16, marginTop: 16 } }, /* @__PURE__ */ React.createElement(CertBadge, { title: latest.name, img: latest.img, kind: latest.kind, sub: latest.sub, hue: latest.hue, size: 56, spinning: false }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, fontSize: 14, color: "white" } }, latest.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--sf-success)", fontWeight: 600, marginTop: 2 } }, "Achieved ", latest.year)))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 20, background: "rgba(10,18,48,0.5)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700 } }, "Next Milestones"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, color: "white", marginTop: 12 } }, "Application Architect"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, color: "white", marginTop: 8 } }, "System Architect")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement(ProgressRing, { label: "App", pct: 62, hue: 210, size: 50 }), /* @__PURE__ */ React.createElement(ProgressRing, { label: "Sys", pct: 28, hue: 280, size: 50 }))));
}
function CertRow({ c }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "card hoverable ledger-row",
      "data-cursor": "hover",
      style: {
        padding: "16px 24px",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderLeft: `3px solid ${c.color}`,
        transition: "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        marginBottom: 12,
        position: "relative",
        overflow: "hidden"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 24, zIndex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 64, height: 64, flexShrink: 0 } }, /* @__PURE__ */ React.createElement(CertBadge, { title: c.name, sub: c.sub, hue: c.hue, kind: c.kind, size: 64, spinning: false, img: c.img })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "white" } }, c.name), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" } }, c.family), /* @__PURE__ */ React.createElement("span", { style: { width: 4, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-3)", fontWeight: 500 } }, c.year)))),
    /* @__PURE__ */ React.createElement("div", { className: "cert-row-glow", style: {
      position: "absolute",
      top: "50%",
      left: 40,
      transform: "translateY(-50%)",
      width: 100,
      height: 100,
      background: c.color,
      filter: "blur(50px)",
      opacity: 0,
      pointerEvents: "none",
      transition: "opacity 0.3s ease"
    } })
  );
}
function PageCerts({ go }) {
  const [filter, setFilter] = useState("All");
  const filtered = CERTS.filter((c) => filter === "All" || c.family === filter);
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { maxWidth: 1060 } }, /* @__PURE__ */ React.createElement("div", { className: "page-head", style: { marginBottom: 40, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Verified Credentials"), /* @__PURE__ */ React.createElement("h1", { className: "h-display", style: { fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 12px" } }, "Salesforce Certifications"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { maxWidth: 600, color: "var(--ink-2)" } }, "A complete ledger of my technical credentials across the Salesforce ecosystem, verified via Trailhead.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { className: "btn dark hoverable", onClick: () => go("projects"), style: { padding: "14px 24px", fontSize: 15 } }, "View Projects ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })))), /* @__PURE__ */ React.createElement(BentoSummary, null), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 32, borderRadius: 24, background: "rgba(10,18,48,0.4)", border: "1px solid rgba(255,255,255,0.03)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24, borderBottom: "1px solid rgba(255,255,255,0.05)", marginBottom: 24, overflowX: "auto", paddingBottom: 16 } }, FAMILIES.map((f) => {
    const count = f === "All" ? CERTS.length : CERTS.filter((c) => c.family === f).length;
    const active = filter === f;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: f,
        onClick: () => setFilter(f),
        className: "hoverable",
        style: {
          padding: "0 0 8px 0",
          fontSize: 14,
          fontWeight: 600,
          background: "transparent",
          border: "none",
          borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
          color: active ? "white" : "var(--ink-3)",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "all 0.2s ease",
          whiteSpace: "nowrap"
        }
      },
      f,
      /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 10,
        fontWeight: 700,
        padding: "2px 6px",
        borderRadius: 6,
        background: active ? "var(--accent)" : "rgba(255,255,255,0.05)",
        color: "white"
      } }, count)
    );
  })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, filtered.map((c, i) => /* @__PURE__ */ React.createElement(CertRow, { key: c.name, c })), filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: 40, textAlign: "center", color: "var(--ink-3)", fontWeight: 500 } }, "No certifications found for this track."))))), /* @__PURE__ */ React.createElement("style", null, `
        .cert-row-glow { opacity: 0 !important; }
        .ledger-row:hover .cert-row-glow { opacity: 0.20 !important; }
        .ledger-row:hover { background: rgba(255,255,255,0.04) !important; transform: translateX(6px); box-shadow: 0 12px 30px -10px rgba(0,0,0,0.5); }
      `));
}
Object.assign(window, { PageCerts });


/* ── trailhead/page-projects.jsx ── */
/* hooks from shim */
const PROJECTS = window.__SF_DATA__ && window.__SF_DATA__.projects || [];
function BankingPortalFlow() {
  const [activeNode, setActiveNode] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  const steps = [
    { label: "Customer Intake", sub: "Experience Cloud", desc: "User logs secure application data via OmniScripts." },
    { label: "MuleSoft Router", sub: "API Gateway", desc: "Routes payload securely with OAuth 2.0 authorization." },
    { label: "3rd-Party Bureaus", sub: "Credit Verification", desc: "Performs real-time background and credit checks." },
    { label: "FSC 360 Engine", sub: "Data Cloud Link", desc: "Aggregates and compiles comprehensive customer profile." },
    { label: "Verification Gate", sub: "Risk Analyzer", desc: "Validates verification score against bank protocols." },
    { label: "Portal Approval", sub: "Final State", desc: "Intake successfully logged; application ready." }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 20px", background: "rgba(4, 10, 30, 0.75)", borderTop: "1px solid rgba(255, 255, 255, 0.08)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#42F2D1", boxShadow: "0 0 10px #42F2D1" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255, 255, 255, 0.6)", letterSpacing: ".1em", textTransform: "uppercase" } }, "Real-time Integration Pipeline (OAuth 2.0 secured)")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--sf-blue)", background: "rgba(0, 161, 224, 0.15)", padding: "3px 8px", borderRadius: 4 } }, "SYSTEM ACTIVE")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 15 } }, /* @__PURE__ */ React.createElement("div", { className: "pipeline-grid", style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, position: "relative" } }, steps.map((s, i) => {
    const active = i === activeNode;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      background: active ? "rgba(0, 161, 224, 0.18)" : "rgba(255, 255, 255, 0.02)",
      border: active ? "1.5px solid #42F2D1" : "1.5px solid rgba(255, 255, 255, 0.08)",
      borderRadius: 12,
      padding: "16px 10px",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
      transition: "all 0.4s ease",
      boxShadow: active ? "0 0 25px rgba(66, 242, 209, 0.25)" : "none",
      transform: active ? "translateY(-4px)" : "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: active ? "#42F2D1" : "rgba(255,255,255,0.06)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 10px",
      color: active ? "black" : "white",
      fontWeight: "bold",
      fontSize: 12,
      boxShadow: active ? "0 0 15px #42F2D1" : "none",
      transition: "all 0.4s ease"
    } }, i + 1), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "white", marginBottom: 3 } }, s.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontFamily: "var(--font-mono)", color: active ? "#42F2D1" : "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: ".06em" } }, s.sub));
  })), /* @__PURE__ */ React.createElement("div", { style: {
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: 10,
    padding: "14px 20px",
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    gap: 15
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 10, height: 10, borderRadius: "50%", background: "#42F2D1", animation: "pulseDot 2s infinite" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", { style: { color: "white", fontSize: 14 } }, "Active Process Phase: ", steps[activeNode].label), /* @__PURE__ */ React.createElement("p", { style: { color: "rgba(255,255,255,0.65)", fontSize: 12.5, margin: "4px 0 0" } }, steps[activeNode].desc)))));
}
function LoanOriginationFlow() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => !p);
    }, 1800);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 20px", background: "rgba(4, 10, 30, 0.75)", borderTop: "1px solid rgba(255, 255, 255, 0.08)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#7F00FF", boxShadow: "0 0 10px #7F00FF" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255, 255, 255, 0.6)", letterSpacing: ".1em", textTransform: "uppercase" } }, "FSC Security Audits & validation architecture")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontFamily: "var(--font-mono)", color: "#7F00FF", background: "rgba(127, 0, 255, 0.15)", padding: "3px 8px", borderRadius: 4 } }, "SHIELD SECURITY ENABLED")), /* @__PURE__ */ React.createElement("div", { className: "diagram-2col", style: { display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 15 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontFamily: "var(--font-mono)", color: "#00A1E0" } }, "SYSTEM ENTRY"), /* @__PURE__ */ React.createElement("h4", { style: { color: "white", margin: "4px 0 6px", fontSize: 14 } }, "Applicant Data Ingest"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, background: "rgba(255,255,255,0.06)", color: "white", padding: "3px 8px", borderRadius: 4 } }, "Income Validate"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, background: "rgba(255,255,255,0.06)", color: "white", padding: "3px 8px", borderRadius: 4 } }, "Identity Match"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, background: "rgba(255,255,255,0.06)", color: "white", padding: "3px 8px", borderRadius: 4 } }, "Debt-to-Income"))), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 15 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontFamily: "var(--font-mono)", color: "#FF6F00" } }, "UNDERWRITING STAGE"), /* @__PURE__ */ React.createElement("h4", { style: { color: "white", margin: "4px 0 6px", fontSize: 14 } }, "Automated FSC Risk Model"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: pulse ? "rgba(127, 0, 255, 0.25)" : "rgba(255,255,255,0.05)",
    border: "1px solid #7F00FF",
    display: "grid",
    placeItems: "center",
    color: "#7F00FF",
    fontWeight: "bold",
    transition: "all 0.5s"
  } }, "\u{1F6E1}\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "88%", height: "100%", background: "#7F00FF" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "rgba(255,255,255,0.4)" } }, /* @__PURE__ */ React.createElement("span", null, "Risk Quotient Score"), /* @__PURE__ */ React.createElement("span", { style: { color: "#7F00FF" } }, "88/100 SECURE")))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "rgba(46, 132, 74, 0.12)",
    border: "1.5px solid #2E844A",
    borderRadius: 8,
    padding: "10px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: pulse ? "0 0 15px rgba(46, 132, 74, 0.15)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#2E844A", fontWeight: "bold" } }, "\u2713"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "white" } }, "Identity & Credit Bureau Check"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "rgba(255,255,255,0.5)" } }, "Verification pulled via secure MuleSoft API gateway"))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, fontFamily: "var(--font-mono)", background: "#2E844A", color: "white", padding: "2px 6px", borderRadius: 3 } }, "SUCCESS")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "rgba(46, 132, 74, 0.12)",
    border: "1.5px solid #2E844A",
    borderRadius: 8,
    padding: "10px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#2E844A", fontWeight: "bold" } }, "\u2713"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "white" } }, "Validation Filters & Rules Assessment"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "rgba(255,255,255,0.5)" } }, "FSC rules audited against system thresholds"))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, fontFamily: "var(--font-mono)", background: "#2E844A", color: "white", padding: "2px 6px", borderRadius: 3 } }, "PASSED")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "rgba(127, 0, 255, 0.12)",
    border: "1.5px solid #7F00FF",
    borderRadius: 8,
    padding: "10px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#7F00FF", fontWeight: "bold" } }, "\u2726"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "white" } }, "DocuSign Electronic Close"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "rgba(255,255,255,0.5)" } }, "Electronic document packets built & routed"))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, fontFamily: "var(--font-mono)", background: "#7F00FF", color: "white", padding: "2px 6px", borderRadius: 3 } }, "GENERATING")))));
}
function RetailStoreFlow() {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const frame = setInterval(() => {
      setRotation((r) => (r + 1) % 360);
    }, 40);
    return () => clearInterval(frame);
  }, []);
  const satellites = [
    { name: "Digital 360 Profile", desc: "Aggregates billing history and segments.", color: "#42F2D1", x: 260, y: 70 },
    { name: "SIM Provisioning", desc: "Builds real-time mobile card allocation.", color: "#00A1E0", x: 420, y: 150 },
    { name: "Network Activation", desc: "Updates legacy telecommunication carrier.", color: "#7F00FF", x: 380, y: 310 },
    { name: "Communications Cloud", desc: "Synchronizes orders & records.", color: "#FF6F00", x: 140, y: 310 },
    { name: "Payment Gateway", desc: "Process immediate in-store billing.", color: "#FFB75D", x: 100, y: 150 }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 20px", background: "rgba(4, 10, 30, 0.75)", borderTop: "1px solid rgba(255, 255, 255, 0.08)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#42F2D1", boxShadow: "0 0 10px #42F2D1" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255, 255, 255, 0.6)", letterSpacing: ".1em", textTransform: "uppercase" } }, "Omnichannel Telecommunication Network Wheel")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontFamily: "var(--font-mono)", color: "#42F2D1", background: "rgba(66, 242, 209, 0.15)", padding: "3px 8px", borderRadius: 4 } }, "DIGITAL 360 ACTIVE")), /* @__PURE__ */ React.createElement("div", { className: "diagram-2col", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: "100%", height: 360, display: "grid", placeItems: "center" } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 520 360", style: { width: "100%", height: "100%", overflow: "visible" } }, /* @__PURE__ */ React.createElement("circle", { cx: "260", cy: "190", r: "110", fill: "none", stroke: "rgba(255, 255, 255, 0.04)", strokeWidth: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "260", cy: "190", r: "60", fill: "none", stroke: "rgba(0, 161, 224, 0.12)", strokeWidth: "2" }), satellites.map((s, idx) => /* @__PURE__ */ React.createElement("line", { key: idx, x1: "260", y1: "190", x2: s.x, y2: s.y, stroke: s.color, strokeWidth: "1.5", strokeDasharray: "5,5", opacity: "0.6" })), /* @__PURE__ */ React.createElement("g", { transform: "translate(225, 155)" }, /* @__PURE__ */ React.createElement("circle", { cx: "35", cy: "35", r: "35", fill: "url(#hub-grad)", stroke: "#42F2D1", strokeWidth: "2", style: { filter: "drop-shadow(0 0 20px rgba(66, 242, 209, 0.3))" } }), /* @__PURE__ */ React.createElement("text", { x: "35", y: "32", textAnchor: "middle", fontFamily: "Manrope, sans-serif", fontWeight: "800", fontSize: "10", fill: "white" }, "DIGITAL"), /* @__PURE__ */ React.createElement("text", { x: "35", y: "44", textAnchor: "middle", fontFamily: "Manrope, sans-serif", fontWeight: "800", fontSize: "10", fill: "#42F2D1" }, "360 HUB"), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "hub-grad", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#081E45" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#040A1E" })))), satellites.map((s, idx) => /* @__PURE__ */ React.createElement("g", { key: idx, transform: `translate(${s.x - 20}, ${s.y - 20})` }, /* @__PURE__ */ React.createElement("circle", { cx: "20", cy: "20", r: "20", fill: "rgba(8, 30, 69, 0.85)", stroke: s.color, strokeWidth: "1.5", style: { filter: `drop-shadow(0 0 10px ${s.color}44)` } }), /* @__PURE__ */ React.createElement("text", { x: "20", y: "24", textAnchor: "middle", fontSize: "14", fill: "white" }, ["\u{1F464}", "\u{1F4F1}", "\u{1F4E1}", "\u2601\uFE0F", "\u{1F4B3}"][idx]))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, satellites.slice(0, 4).map((s, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, style: {
    background: "rgba(255,255,255,0.02)",
    border: `1px solid ${s.color}33`,
    borderRadius: 8,
    padding: 10,
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 24, height: 24, borderRadius: "50%", background: `${s.color}15`, border: `1px solid ${s.color}`, display: "grid", placeItems: "center", color: s.color, fontWeight: "bold", fontSize: 11 } }, idx + 1), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", { style: { color: "white", fontSize: 13 } }, s.name), /* @__PURE__ */ React.createElement("p", { style: { color: "rgba(255,255,255,0.55)", fontSize: 11.5, margin: "2px 0 0" } }, s.desc)))))));
}
function CaseStudy({ p, idx, open, onToggle }) {
  const StatsStrip = () => /* @__PURE__ */ React.createElement("div", { className: "impact-strip", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 } }, p.impact.map((m) => /* @__PURE__ */ React.createElement("div", { key: m.label, style: {
    padding: 18,
    background: "linear-gradient(135deg, rgba(0,161,224,0.12), rgba(127,0,255,0.04))",
    borderRadius: 14,
    border: "1px solid rgba(0,161,224,0.18)",
    textAlign: "center"
  } }, /* @__PURE__ */ React.createElement("div", { className: "h-display", style: {
    fontSize: 34,
    background: "linear-gradient(135deg, #42F2D1, #47C7FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  } }, m.metric), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.03em" } }, m.label))));
  return /* @__PURE__ */ React.createElement("article", { className: "card hoverable", style: {
    padding: 0,
    overflow: "hidden",
    borderRadius: 22,
    background: "rgba(10,20,50,0.45)",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "box-shadow 0.3s ease",
    boxShadow: open ? "0 20px 45px -15px rgba(0,0,0,0.8)" : "0 10px 30px -15px rgba(0,0,0,0.5)"
  } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "project-card-header project-card-pad",
      style: { padding: 28, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 20, alignItems: "center", cursor: "pointer" },
      onClick: onToggle
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      flexShrink: 0,
      background: `linear-gradient(135deg, hsl(${200 + idx * 55} 90% 55%), hsl(${240 + idx * 55} 80% 35%))`,
      display: "grid",
      placeItems: "center",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: ["assets/Payments.png", "assets/Security.png", "assets/E-commerce.png"][idx],
        alt: "",
        style: { width: 36, height: 36, objectFit: "contain" }
      }
    )),
    /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 5, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 700 } }, "0", idx + 1, " \xB7 ", p.client), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "rgba(255,255,255,0.4)" } }, p.duration, " \xB7 Team of ", p.team)), /* @__PURE__ */ React.createElement("h3", { className: "h-display", style: { fontSize: "clamp(20px, 3vw, 30px)", lineHeight: 1.1, margin: "0 0 10px", color: "white" } }, p.title), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, p.stack.map((s) => /* @__PURE__ */ React.createElement("span", { key: s, style: { fontSize: 11, padding: "3px 9px", borderRadius: 99, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontWeight: 600 } }, s)))),
    /* @__PURE__ */ React.createElement("button", { className: "btn ghost hoverable desktop-only-btn", style: { flexShrink: 0, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", display: "flex", alignItems: "center", gap: 6 } }, open ? "Collapse" : "Walk the flow", " ", /* @__PURE__ */ React.createElement(Icon, { name: open ? "x" : "arrow", size: 14 }))
  ), /* @__PURE__ */ React.createElement("div", { className: "mobile-stats-strip", style: { padding: "0 20px 20px" } }, /* @__PURE__ */ React.createElement(StatsStrip, null)), /* @__PURE__ */ React.createElement("div", { className: "desktop-expand-section", style: { maxHeight: open ? 2200 : 0, transition: "max-height .6s cubic-bezier(.2,.7,.2,1)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "0 28px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24, height: 1, background: "rgba(255,255,255,0.08)" } }), /* @__PURE__ */ React.createElement("div", { className: "challenge-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--sf-blue)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 } }, "Challenge"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.78)" } }, p.challenge)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--sf-blue)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 } }, "Solution"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.78)" } }, p.solution))), /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(4,10,30,0.6)", marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Icon, { name: "flow", size: 14, color: "var(--sf-blue)" }), /* @__PURE__ */ React.createElement("strong", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" } }, p.id, ".flow_builder")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" } }, "Interactive Visualization")), open && p.id === "banking-portal" && /* @__PURE__ */ React.createElement(BankingPortalFlow, null), open && p.id === "loan-origination" && /* @__PURE__ */ React.createElement(LoanOriginationFlow, null), open && p.id === "retail-store" && /* @__PURE__ */ React.createElement(RetailStoreFlow, null)), /* @__PURE__ */ React.createElement(StatsStrip, null))));
}
function PageProjects({ go }) {
  const [openId, setOpenId] = useState("banking-portal");
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-head", style: { display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, marginBottom: 48 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Case studies \xB7 3 deep-dives"), /* @__PURE__ */ React.createElement("h1", { className: "h-display", style: { fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px", color: "white" } }, "Real orgs.", /* @__PURE__ */ React.createElement("br", null), "Real numbers."), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { maxWidth: 540, color: "rgba(255,255,255,0.7)" } }, "Each engagement features a uniquely modeled automated pipeline. Click any case study to walk the integration flow.")), /* @__PURE__ */ React.createElement("div", { className: "page-head-actions", style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { className: "btn ghost hoverable desktop-only-btn", onClick: () => setOpenId(null), style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" } }, "Collapse all"), /* @__PURE__ */ React.createElement("button", { className: "btn primary hoverable", onClick: () => go("contact"), style: { background: "linear-gradient(90deg, #00A1E0, #7F00FF)" } }, "Discuss yours ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 18 } }, PROJECTS.map((p, i) => /* @__PURE__ */ React.createElement(
    CaseStudy,
    {
      key: p.id,
      p,
      idx: i,
      open: openId === p.id,
      onToggle: () => setOpenId((o) => o === p.id ? null : p.id)
    }
  ))))));
}
Object.assign(window, { PageProjects });


/* ── trailhead/page-experience.jsx ── */
const TIMELINE = window.__SF_DATA__ && window.__SF_DATA__.experience || [];
const TECH = window.__SF_DATA__ && window.__SF_DATA__.techGroups || [];
function TimelineCard({ item, idx, total }) {
  return /* @__PURE__ */ React.createElement("div", { className: "hoverable timeline-card", style: {
    position: "relative",
    paddingLeft: 48,
    paddingBottom: idx === total - 1 ? 0 : 40
  } }, /* @__PURE__ */ React.createElement("div", { className: "timeline-axis", style: { position: "absolute", left: 18, top: 30, bottom: 0, width: 2, background: idx === total - 1 ? "transparent" : "linear-gradient(180deg, var(--accent), transparent)" } }), /* @__PURE__ */ React.createElement("div", { className: "timeline-dot", style: { position: "absolute", left: 7, top: 6, display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 22, height: 22, borderRadius: 99, background: "white", border: "2px solid var(--accent)", display: "grid", placeItems: "center", flexShrink: 0, position: "relative", zIndex: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 99, background: "var(--accent)" } })), /* @__PURE__ */ React.createElement("span", { style: {
    marginLeft: -10,
    paddingLeft: 14,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    background: "color-mix(in oklab, var(--accent) 14%, transparent)",
    border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
    borderLeft: "none",
    borderRadius: "0 99px 99px 0",
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    fontWeight: 700,
    color: "var(--accent)",
    textTransform: "uppercase",
    letterSpacing: ".1em",
    whiteSpace: "nowrap",
    zIndex: 1,
    lineHeight: 1.6
  } }, item.company)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10, paddingTop: 32 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-2)", letterSpacing: ".06em", fontWeight: 600 } }, item.period), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", fontSize: 10, padding: "3px 8px", background: "var(--sf-sky)", color: "#FFFFFF", fontWeight: 700, borderRadius: 4, letterSpacing: ".1em", textTransform: "uppercase" } }, item.tag)), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 16 } }, /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 4px" } }, item.role), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "var(--ink-2)", fontWeight: 600, marginBottom: 14 } }, item.company, " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--line)" } }, "\xB7"), " ", item.location), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 } }, item.bullets.map((b, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { paddingLeft: 22, position: "relative", fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 0, top: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 14, color: "var(--accent)" })), b)))));
}
function TechMatrix() {
  return /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 32, borderRadius: 22 } }, /* @__PURE__ */ React.createElement("div", { className: "tech-main", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 } }, TECH.map((g) => /* @__PURE__ */ React.createElement("div", { key: g.group }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent)", fontWeight: 700, marginBottom: 14 } }, g.group), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 10 } }, g.items.map(([name, pct]) => /* @__PURE__ */ React.createElement("div", { key: name, className: "hoverable", "data-cursor": "hover" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13.5, fontWeight: 600 } }, name), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-2)" } }, pct)), /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: "var(--sf-cloud)", borderRadius: 99, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: "100%",
    width: pct + "%",
    background: "linear-gradient(90deg, var(--sf-blue), var(--accent-deep))",
    borderRadius: 99,
    animation: "barFill 1.2s ease both"
  } })))))))), /* @__PURE__ */ React.createElement("style", null, `@keyframes barFill { from { width: 0% } }`));
}
function TrailblazerStats() {
  const tb = window.__SF_DATA__ && window.__SF_DATA__.trailblazerStats || {};
  const stats = [
    { metric: tb.badges || 0, label: "Badges Earned", suffix: "" },
    { metric: tb.pointsK || 0, label: "Points (k)", suffix: "k" },
    { metric: tb.trails || 0, label: "Trails Completed", suffix: "" },
    { metric: tb.superbadges || 0, label: "Superbadges", suffix: "" }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "card hoverable", style: {
    borderRadius: 18,
    overflow: "hidden",
    padding: 0,
    position: "relative",
    border: "1px solid rgba(180,100,255,0.35)",
    boxShadow: "0 8px 32px -8px rgba(127,0,255,0.4)"
  } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/agentblazer-legend.png",
      alt: "Agentblazer Legend '26",
      style: { width: "100%", display: "block", borderRadius: 18 },
      onError: (e) => {
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "flex";
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: "20px 24px",
    background: "linear-gradient(135deg, #7F00FF, #B57BFF)",
    borderRadius: 18
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 28 } }, "\u{1F916}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "white" } }, "Agentblazer"), /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,.8)", fontSize: 14, fontWeight: 600 } }, "Legend '26")))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 28, borderRadius: 22, background: "linear-gradient(135deg, var(--sf-navy), #0A1B3C)", color: "white", overflow: "hidden", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, opacity: 0.4, backgroundImage: "radial-gradient(circle at 80% 20%, var(--sf-blue), transparent 40%)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", background: "rgba(255,255,255,.08)", borderRadius: 99, fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 99, background: "var(--sf-trail)", boxShadow: "0 0 8px var(--sf-trail)" } }), " Trailblazer profile"), /* @__PURE__ */ React.createElement("h3", { className: "h-display", style: { fontSize: 22, marginTop: 10, marginBottom: 0 } }, "Always learning.")), /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/five-star-ranger.png",
      alt: "Five Star Ranger",
      style: { width: 72, height: 72, objectFit: "contain", flexShrink: 0 },
      onError: (e) => {
        e.target.style.display = "none";
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 16 } }, stats.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, style: { background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "14px 16px" } }, /* @__PURE__ */ React.createElement("div", { className: "h-display", style: { fontSize: 36, lineHeight: 1, color: "white" } }, /* @__PURE__ */ React.createElement(Counter, { to: s.metric }), s.suffix), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "rgba(255,255,255,.65)", marginTop: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em" } }, s.label)))), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: tb.profileUrl || "https://trailhead.salesforce.com",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "btn hoverable",
      style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "var(--sf-trail)", background: "rgba(255,183,77,0.1)", border: "1px solid rgba(255,183,77,0.3)", borderRadius: 99, padding: "6px 14px", textDecoration: "none" }
    },
    /* @__PURE__ */ React.createElement(Icon, { name: "trail", size: 14, color: "var(--sf-trail)" }),
    " View Trailblazer Profile \u2192"
  ))));
}
function PageExperience({ go }) {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Experience \xB7 Tech \xB7 Trail"), /* @__PURE__ */ React.createElement("h1", { className: "h-display", style: { fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" } }, "6 years.", /* @__PURE__ */ React.createElement("br", null), "Shipped clouds."), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { maxWidth: 540 } }, "Trailblazing since 2019 \u2014 from telecom-focused solutions at Prodapt to enterprise financial services integrations at K Square Group, each step deeper into the Salesforce ecosystem."))), /* @__PURE__ */ React.createElement("div", { className: "tech-matrix", style: { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)" } }, "Career trail"), TIMELINE.map((t, i) => /* @__PURE__ */ React.createElement(TimelineCard, { key: i, item: t, idx: i, total: TIMELINE.length }))), /* @__PURE__ */ React.createElement("aside", { className: "tech-sidebar", style: { display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100, alignSelf: "start" } }, /* @__PURE__ */ React.createElement(TrailblazerStats, null), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 } }, "Currently exploring"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, ["Agentforce", "Data Cloud", "MCP", "Einstein Studio", "Copado DevOps"].map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: { padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, background: "var(--sf-sky)", color: "#FFFFFF", border: "1px solid color-mix(in oklab, var(--accent) 22%, transparent)" } }, t)))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 64 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 22 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 40, margin: 0 } }, "Tech stack \u2014 by depth."), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", maxWidth: 360 } }, "Self-reported, calibrated against the work I do day-to-day.")), /* @__PURE__ */ React.createElement(TechMatrix, null)))));
}
Object.assign(window, { PageExperience });


/* ── trailhead/page-contact.jsx ── */
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid var(--line)",
  borderRadius: 12,
  fontSize: 14,
  fontFamily: "inherit",
  color: "var(--ink)",
  background: "var(--bg)",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color .15s, box-shadow .15s"
};
const labelStyle = {
  fontSize: 12,
  fontWeight: 700,
  color: "var(--ink-2)",
  letterSpacing: ".06em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: 6
};
const reqStar = { color: "var(--accent)", marginLeft: 2 };
function SFField({ label, name, type = "text", placeholder, required = false, maxLength }) {
  const id = "sf-" + name;
  const [focused, setFocused] = React.useState(false);
  return /* @__PURE__ */ React.createElement("label", { htmlFor: id, style: { display: "block" } }, /* @__PURE__ */ React.createElement("span", { style: labelStyle }, label, required && /* @__PURE__ */ React.createElement("span", { style: reqStar }, "*")), /* @__PURE__ */ React.createElement(
    "input",
    {
      id,
      name,
      type,
      placeholder,
      required,
      maxLength,
      style: {
        ...inputStyle,
        borderColor: focused ? "var(--accent)" : "var(--line)",
        boxShadow: focused ? "0 0 0 4px color-mix(in oklab, var(--accent) 18%, transparent)" : "none"
      },
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }
  ));
}
function SFTextarea({ label, name, placeholder, required = false }) {
  const id = "sf-" + name;
  const [focused, setFocused] = React.useState(false);
  return /* @__PURE__ */ React.createElement("label", { htmlFor: id, style: { display: "block" } }, /* @__PURE__ */ React.createElement("span", { style: labelStyle }, label, required && /* @__PURE__ */ React.createElement("span", { style: reqStar }, "*")), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      id,
      name,
      rows: 5,
      placeholder,
      required,
      style: {
        ...inputStyle,
        resize: "vertical",
        borderColor: focused ? "var(--accent)" : "var(--line)",
        boxShadow: focused ? "0 0 0 4px color-mix(in oklab, var(--accent) 18%, transparent)" : "none"
      },
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }
  ));
}
function PageContact({ go }) {
  const [commType, setCommType] = React.useState("Architecture Review");
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [captchaError, setCaptchaError] = React.useState(false);
  const formRef = React.useRef(null);
  const widgetIdRef = React.useRef(null);
  const commTypes = ["Architecture Review", "Hiring", "Networking & Community", "Collaboration"];
  React.useEffect(() => {
    function doRender() {
      const el = document.getElementById("rc-contact");
      if (!el || el.childElementCount > 0) return;
      widgetIdRef.current = window.grecaptcha.enterprise.render(el, {
        sitekey: "6Lf__vgsAAAAAH5xBnfx3uMrQ-MhXuV4PXcnl1Nj",
        action: "CONTACT"
      });
    }
    if (window._rcReady) {
      doRender();
    } else {
      window._rcQueue = window._rcQueue || [];
      window._rcQueue.push(doRender);
    }
  }, []);
  React.useEffect(() => {
    if (window.__GIG_SELECTION__) {
      setCommType("Collaboration");
      const descInput = document.querySelector('textarea[name="description"]');
      if (descInput) {
        descInput.value = `Hi Yusuf,

I'm reaching out because I'm interested in your service: "${window.__GIG_SELECTION__}".

Here are some details about our project and what we'd like to build together:

`;
        descInput.focus();
        descInput.setSelectionRange(descInput.value.length, descInput.value.length);
      }
      window.__GIG_SELECTION__ = null;
    }
  }, []);
  const handleSubmit = (e) => {
    const token = window.grecaptcha && widgetIdRef.current != null ? window.grecaptcha.enterprise.getResponse(widgetIdRef.current) : "";
    if (!token) {
      e.preventDefault();
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    const companyInput = e.target.querySelector('[name="company"]');
    if (companyInput && !companyInput.value.trim()) {
      companyInput.value = "Individual";
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setCommType("Architecture Review");
      if (formRef.current) formRef.current.reset();
      if (window.grecaptcha && widgetIdRef.current != null) {
        window.grecaptcha.enterprise.reset(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    }, 1800);
  };
  if (submitted) {
    return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "success-card", style: {
      maxWidth: 560,
      margin: "80px auto",
      textAlign: "center",
      padding: "60px 40px",
      borderRadius: 28,
      background: "rgba(0,161,224,0.05)",
      border: "1px solid rgba(0,161,224,0.2)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      background: "linear-gradient(135deg, var(--sf-success), #00A1E0)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 24px",
      boxShadow: "0 0 40px rgba(0,200,100,0.3)"
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 32, color: "white" })), /* @__PURE__ */ React.createElement("h2", { className: "h-display", style: { fontSize: 40, marginBottom: 12 } }, "Response recorded!"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { color: "var(--ink-2)", marginBottom: 32 } }, "Your message has landed in my Salesforce CRM. I'll read it personally and get back to you within 24 hours."), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "btn primary hoverable",
        onClick: () => setSubmitted(false)
      },
      "Send another message ",
      /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })
    )))));
  }
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("iframe", { name: "sf-submit-target", title: "sf-submit", style: { display: "none" } }), /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-head", style: { display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, marginBottom: 48 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Contact \xB7 Let's build"), /* @__PURE__ */ React.createElement("h1", { className: "h-display", style: { fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" } }, "Got a hard", /* @__PURE__ */ React.createElement("br", null), "Salesforce problem?"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { maxWidth: 540 } }, "I read every message myself. Tell me what you're building \u2014 even a paragraph helps me come back with the right starting point."))), /* @__PURE__ */ React.createElement("div", { className: "contact-layout", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 } }, /* @__PURE__ */ React.createElement(
    "form",
    {
      ref: formRef,
      action: "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgK00000AXqoT",
      method: "POST",
      target: "sf-submit-target",
      onSubmit: handleSubmit,
      className: "card form-card",
      style: { padding: 36, borderRadius: 22 }
    },
    /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "oid", value: "00DgK00000AXqoT" }),
    /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "retURL", value: "about:blank" }),
    /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "00NgK000041ZJI5", value: commType }),
    /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "lead_source", value: "Web" }),
    /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("span", { style: labelStyle }, "What's this about?"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 2 } }, commTypes.map((t) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t,
        type: "button",
        onClick: () => setCommType(t),
        className: "hoverable",
        style: {
          padding: "8px 16px",
          borderRadius: 999,
          fontSize: 12.5,
          fontWeight: 600,
          border: "1px solid " + (commType === t ? "var(--accent)" : "var(--line)"),
          background: commType === t ? "var(--accent)" : "transparent",
          color: commType === t ? "white" : "var(--ink)",
          transition: "all .15s"
        }
      },
      t
    )))),
    /* @__PURE__ */ React.createElement("div", { className: "name-fields", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 } }, /* @__PURE__ */ React.createElement(SFField, { label: "First Name", name: "first_name", placeholder: "Jane", required: true, maxLength: 40 }), /* @__PURE__ */ React.createElement(SFField, { label: "Last Name", name: "last_name", placeholder: "Trailblazer", required: true, maxLength: 80 })),
    /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement(SFField, { label: "Email", name: "email", type: "email", placeholder: "jane@company.com", required: true, maxLength: 80 })),
    /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement(SFField, { label: "Company", name: "company", placeholder: "ACME Corp (leave blank if individual)", maxLength: 40 })),
    /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 22 } }, /* @__PURE__ */ React.createElement(
      SFTextarea,
      {
        label: "Tell me what you're building",
        name: "description",
        placeholder: "We're moving off a 4-year-old Vlocity org and need help untangling our OmniScripts before migration to OmniStudio\u2026",
        required: true
      }
    )),
    /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { id: "rc-contact" }), captchaError && /* @__PURE__ */ React.createElement("div", { style: { color: "#e74c3c", fontSize: 12, marginTop: 8, display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 13, color: "#e74c3c" }), " Please complete the reCAPTCHA verification before sending.")),
    /* @__PURE__ */ React.createElement("div", { className: "form-footer", style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 14, color: "var(--sf-success)" }), " Replies within 24h. Goes directly to my Salesforce CRM."), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "btn primary hoverable submit-btn",
        disabled: submitting,
        style: { minWidth: 160, justifyContent: "center" }
      },
      submitting ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { marginRight: 8 } }, "\u23F3"), " Sending\u2026") : /* @__PURE__ */ React.createElement(React.Fragment, null, "Send message ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 }))
    ))
  ), /* @__PURE__ */ React.createElement("aside", { className: "contact-aside", style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "hoverable", style: {
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    background: "linear-gradient(135deg, #0a1b3c 0%, #1a2d5c 60%, #0d1f4a 100%)",
    border: "1px solid rgba(0,161,224,0.35)",
    boxShadow: "0 8px 32px -8px rgba(0,100,200,0.35)"
  } }, /* @__PURE__ */ React.createElement("style", null, `
                  @keyframes bpPulse { 0%,100%{opacity:.5;} 50%{opacity:1;} }
                  @keyframes dashScroll { to { stroke-dashoffset: -32; } }
                  @keyframes readyBlink { 0%,100%{opacity:1;} 45%,55%{opacity:0.2;} }
                `), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(0,161,224,0.75)", letterSpacing: ".22em", textTransform: "uppercase", marginBottom: 4 } }, "\u25C6 BOARDING PASS \u25C6"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "white", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10, opacity: 0.9 } }, "Open For Global Relocation \u{1F30D}"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 26, fontWeight: 900, color: "white", fontFamily: "var(--font-display)", lineHeight: 1 } }, "HYD"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: ".12em", marginTop: 2 } }, "INDIA")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ React.createElement(
    "dotlottie-wc",
    {
      src: "https://lottie.host/0796e03f-686f-4f4e-adb9-8be54e298467/tanoAIt2Ph.lottie",
      loop: true,
      autoplay: true,
      style: { width: "100%", height: 110 }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 26, fontWeight: 900, color: "white", fontFamily: "var(--font-display)", lineHeight: 1 } }, "WLD"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: ".12em", marginTop: 2 } }, "ANYWHERE")))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", margin: "0 0", height: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1.5px dashed rgba(255,255,255,0.12)", margin: "0 14px" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: -8, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, borderRadius: "50%", background: "var(--card)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, borderRadius: "50%", background: "var(--card)" } })), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 18px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" } }, [
    { label: "PASSENGER", value: "YUSUF KHAN" },
    { label: "CLASS", value: "LEAD DEV" },
    { label: "GATE", value: "JUL '26" }
  ].map(({ label, value }) => /* @__PURE__ */ React.createElement("div", { key: label }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: ".14em", fontFamily: "var(--font-mono)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-mono)", marginTop: 2 } }, value))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: ".14em", fontFamily: "var(--font-mono)" } }, "STATUS"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#4ADE80", fontFamily: "var(--font-mono)", marginTop: 2, animation: "readyBlink 2.2s ease-in-out infinite" } }, "\u25CF READY")))), /* @__PURE__ */ React.createElement(ContactCard, { icon: "mail", label: "Email", value: "yusufkhantrailblazer@gmail.com", cta: "Compose", href: "mailto:yusufkhantrailblazer@gmail.com" }), /* @__PURE__ */ React.createElement(ContactCard, { icon: "linkedin", label: "LinkedIn", value: "/in/yusufkhan2546", cta: "Connect", href: "https://www.linkedin.com/in/yusufkhan2546" }), /* @__PURE__ */ React.createElement(ContactCard, { icon: "trail", label: "Trailblazer profile", value: "yusufkhan2546", cta: "View badges", href: "https://www.salesforce.com/trailblazer/yusufkhan2546" }), /* @__PURE__ */ React.createElement(ContactCard, { icon: "whatsapp", label: "WhatsApp", value: "+91 9100652546", cta: "Chat", href: "https://wa.me/919100652546" }), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "linear-gradient(135deg, var(--sf-navy), #0A1B3C)", color: "white" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 } }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 18, color: "var(--sf-blue)" }), /* @__PURE__ */ React.createElement("strong", { style: { fontFamily: "var(--font-display)", fontSize: 18 } }, "Resume \u2014 2026")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13.5, color: "rgba(255,255,255,.7)", marginBottom: 16 } }, "One-page summary, certifications appendix, two reference case studies."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("a", { href: "assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf", download: "Yusuf_Khan_Salesforce_Developer_Resume.pdf", className: "btn primary hoverable", style: { background: "var(--sf-blue)", textDecoration: "none" } }, "Download PDF ", /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 14 })))))), /* @__PURE__ */ React.createElement("div", { className: "card availability-strip", style: { marginTop: 40, padding: 28, borderRadius: 22, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 14, height: 14, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 14, height: 14, borderRadius: 99, background: "var(--sf-success)", animation: "bleep 1.8s ease-in-out infinite" } }), /* @__PURE__ */ React.createElement("style", null, `@keyframes bleep { 0%,100%{opacity:1; box-shadow:0 0 6px var(--sf-success);} 50%{opacity:0.4; box-shadow:0 0 14px var(--sf-success);} }`)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", { style: { fontFamily: "var(--font-display)", fontSize: 20 } }, "Available for new engagements"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-2)", fontSize: 14, marginTop: 2 } }, "Best fit: lead developer, architect-in-residence, or Salesforce AI strategy engagements.")), /* @__PURE__ */ React.createElement("button", { className: "btn dark hoverable avail-btn", onClick: () => go("home") }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 }), " Back to top")))));
}
function ContactCard({ icon, label, value, cta, href }) {
  const isExternal = href && href.startsWith("http");
  return /* @__PURE__ */ React.createElement("a", { href: href || "#", target: isExternal ? "_blank" : void 0, rel: isExternal ? "noopener noreferrer" : void 0, onClick: (e) => !href && e.preventDefault(), className: "card hoverable", style: { padding: 18, borderRadius: 16, display: "flex", alignItems: "center", gap: 14, color: "var(--ink)", textDecoration: "none" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 40, borderRadius: 12, background: "var(--accent)", display: "grid", placeItems: "center", color: "var(--accent-deep)" } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-2)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14.5, fontWeight: 600, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, value)), cta && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "var(--accent)" } }, cta, " \u2192"));
}
Object.assign(window, { PageContact });


/* ── trailhead/page-gigs.jsx ── */
/* hooks from shim */
const GIGS = [
  {
    id: "integration",
    title: "Third-Party Integrations",
    rate: "$150",
    icon: "api",
    description: "Connect Salesforce with external ERPs, legacy systems, payment gateways, or custom databases securely.",
    bullets: [
      "REST / SOAP API client & service build-outs",
      "OAuth 2.0, API keys, and certificate authentication",
      "MuleSoft integration orchestration",
      "Apex Callouts, Named Credentials, and Platform Events"
    ]
  },
  {
    id: "lowcode",
    title: "Admin & Low-Code Development",
    rate: "$120",
    icon: "flow",
    description: "Scale your org with native declarative tools, reducing custom code footprint while maintaining agility.",
    bullets: [
      "Complex Salesforce Flows & Orchestrations",
      "Advanced validation rules, formulas, and roll-ups",
      "Dynamic Forms, page layouts, and Lightning App Builder pages",
      "Profile-to-Permission Set migrations and security models"
    ]
  },
  {
    id: "apex_lwc",
    title: "Apex & LWC Custom Development",
    rate: "$130",
    icon: "code",
    description: "Build custom UI modules and transactional backend code that handles large volumes with low CPU usage.",
    bullets: [
      "Pixel-perfect custom Lightning Web Components (LWCs)",
      "Bulkified Apex triggers and helper frameworks",
      "Asynchronous Apex (Queueable, Batch, Scheduleable)",
      "High unit test coverage (>90% target) & mock generation"
    ]
  },
  {
    id: "agentforce",
    title: "Agentforce AI Development",
    rate: "$170",
    icon: "robot",
    description: "Harness generative AI inside Salesforce using Prompt templates, Agentforce Copilot, and intelligent orchestration.",
    bullets: [
      "Custom Copilot Topic and Agent Action development",
      "Prompt Builder template engineering and testing",
      "Apex actions and flow adapters for Agentforce",
      "Einstein Generative AI audit and configuration"
    ]
  },
  {
    id: "vlocity",
    title: "Vlocity / Industries Org Development",
    rate: "$160",
    icon: "industries",
    description: "Optimize and customize Vlocity / Salesforce Industries (FSC, Communications, Energy) applications.",
    bullets: [
      "Bespoke OmniScripts & interactive FlexCards",
      "Optimized Integration Procedures & DataRaptors",
      "FSC custom objects, lending modules, and relationship maps",
      "OmniStudio migration and legacy refactoring"
    ]
  },
  {
    id: "customer360",
    title: "Customer 360 Ecosystem Builds",
    rate: "$140",
    icon: "user",
    description: "Unify consumer data points across Sales, Service, Commerce, and Data Cloud for a single source of truth.",
    bullets: [
      "Data Cloud ingestion streams & identity resolution",
      "Experience Cloud public portals & partner networks",
      "Cross-cloud integrations (Sales, Service, Industries)",
      "Unified customer console views and dashboard metrics"
    ]
  },
  {
    id: "devops",
    title: "Data Migration & DevOps Deployments",
    rate: "$140",
    icon: "deployment",
    description: "Automate delivery pipelines, maintain source control hygiene, and migrate production data sets safely.",
    bullets: [
      "Salesforce DX (SFDX) configuration & GitHub pipelines",
      "Deployment automation via Copado / Flosum / Gearset",
      "Data loader mapping & large-volume record migrations",
      "Sandbox strategy planning & package architecture"
    ]
  }
];
const FAQS = [
  {
    q: "How do we collaborate and track hours?",
    a: "We can align via Slack, Microsoft Teams, or Jira. Hours are tracked transparently using industry-standard tools like Toggl or Clockify, with weekly reports delivered directly to your inbox."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Absolutely. I sign standard NDAs before discussing any proprietary architecture or accessing your Salesforce sandboxes."
  },
  {
    q: "What deployment pipelines and toolsets do you support?",
    a: "I work with standard CI/CD frameworks: GitHub Actions, Copado, Gearset, Flosum, or standard Salesforce CLI (SFDX) command scripts, matching your existing team standards."
  },
  {
    q: "How do we handle sandbox access?",
    a: "Access can be granted via standard Salesforce user creation in your Sandbox/Developer environments, or through secure VPNs if your enterprise policy requires it. I never ask for production credentials directly."
  },
  {
    q: "What is your timezone availability?",
    a: "I am based in Hyderabad, India (GMT+5:30) but regularly work overlapping schedules with clients in the US, Europe, and Australia to facilitate daily stand-ups and sprint handoffs."
  }
];
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "card hoverable",
      style: {
        padding: "18px 24px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(180,210,255,0.12)",
        marginBottom: 12,
        cursor: "pointer"
      },
      onClick: () => setOpen(!open)
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement("strong", { style: { fontFamily: "var(--font-display)", fontSize: 16, color: "white" } }, q), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, color: "var(--accent)", transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none" } }, "\uFF0B")),
    /* @__PURE__ */ React.createElement("div", { style: {
      maxHeight: open ? "200px" : "0",
      overflow: "hidden",
      transition: "max-height 0.25s ease-out, margin 0.25s",
      marginTop: open ? 12 : 0,
      color: "var(--ink-2)",
      fontSize: 14.5,
      lineHeight: 1.5
    } }, a)
  );
}
function PageGigs({ go }) {
  const handleSelectGig = (title) => {
    window.__GIG_SELECTION__ = title;
    go("contact");
  };
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { maxWidth: 1200 } }, /* @__PURE__ */ React.createElement("div", { className: "page-head", style: { marginBottom: 48 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Services & Gigs"), /* @__PURE__ */ React.createElement("h1", { className: "h-display", style: { fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" } }, "Technical Offerings"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { maxWidth: 640 } }, "High-quality, specialized consulting and implementation packages for your Salesforce platform, billed on a simple day-rate model.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { className: "btn primary hoverable", onClick: () => go("contact"), style: { padding: "14px 28px" } }, "Discuss Custom Project ", /* @__PURE__ */ React.createElement(Icon, { name: "mail", size: 15 })))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: 20,
    marginBottom: 60
  } }, GIGS.map((g) => /* @__PURE__ */ React.createElement("div", { key: g.id, className: "card hoverable", style: {
    padding: 28,
    borderRadius: 22,
    background: "rgba(10,18,48,0.45)",
    border: "1px solid rgba(180,210,255,0.14)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxShadow: "var(--shadow-1)",
    transition: "all 0.2s ease"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "var(--sf-sky)",
    border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
    display: "grid",
    placeItems: "center",
    color: "var(--accent)"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: g.icon, size: 22 })), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 24, fontWeight: 800, color: "white" } }, g.rate), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-3)", fontWeight: 600 } }, " / day"))), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, margin: "0 0 10px", color: "white" } }, g.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5, marginBottom: 20, minHeight: 60 } }, g.description), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 16, marginBottom: 24 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", display: "block", marginBottom: 10 } }, "What's Included:"), /* @__PURE__ */ React.createElement("ul", { style: { padding: 0, margin: 0, listStyle: "none" } }, g.bullets.map((b, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: {
    fontSize: 13,
    color: "var(--ink-2)",
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 8
  } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent)", fontSize: 14 } }, "\u2713"), /* @__PURE__ */ React.createElement("span", null, b)))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn primary hoverable",
      onClick: () => handleSelectGig(g.title),
      style: { width: "100%", justifyContent: "center", padding: "12px" }
    },
    "Inquire For Package ",
    /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 })
  )))), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 800, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 36 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " FAQ"), /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 36, marginTop: 12 } }, "Engagement FAQs")), /* @__PURE__ */ React.createElement("div", null, FAQS.map((faq, i) => /* @__PURE__ */ React.createElement(FAQItem, { key: i, q: faq.q, a: faq.a })))))), /* @__PURE__ */ React.createElement("style", null, `
        .card.hoverable:hover {
          transform: translateY(-4px);
          border-color: rgba(180,210,255,0.3) !important;
          box-shadow: 0 12px 30px -10px rgba(0, 160, 255, 0.15) !important;
        }
      `));
}
Object.assign(window, { PageGigs });


/* ── trailhead/page-demos.jsx ── */
/* hooks from shim */
const ARTICLES = window.__SF_DATA__ && window.__SF_DATA__.articles || [];
function PageDemos({ go }) {
  const [activeTab, setActiveTab] = useState("demos");
  const [raceRunning, setRaceRunning] = useState(false);
  const [raceComplete, setRaceComplete] = useState(false);
  const [nonBulkLogs, setNonBulkLogs] = useState([]);
  const [bulkLogs, setBulkLogs] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const runRace = () => {
    if (raceRunning) return;
    setRaceRunning(true);
    setRaceComplete(false);
    setNonBulkLogs(["\u{1F680} Initializing Transaction...", "\u{1F4E6} Fetching 150 Contacts..."]);
    setBulkLogs(["\u{1F680} Initializing Transaction...", "\u{1F4E6} Fetching 150 Contacts..."]);
    let nonBulkCounter = 0;
    let bulkCounter = 0;
    const maxSteps = 105;
    const nonBulkInterval = setInterval(() => {
      nonBulkCounter++;
      if (nonBulkCounter <= 100) {
        setNonBulkLogs((prev) => [
          ...prev,
          `\u{1F50D} [SOQL ${nonBulkCounter}/100] SELECT Id, Name FROM Account WHERE Id = '${"001" + Math.random().toString(36).substr(2, 15)}' LIMIT 1`
        ]);
      } else if (nonBulkCounter === 101) {
        setNonBulkLogs((prev) => [
          ...prev,
          "\u274C FATAL ERROR: System.LimitException: Too many SOQL queries: 101",
          "\u26A0\uFE0F Transaction Rollback initiated. 0 Accounts updated."
        ]);
        clearInterval(nonBulkInterval);
      }
    }, 40);
    const bulkInterval = setInterval(() => {
      bulkCounter++;
      if (bulkCounter === 1) {
        setBulkLogs((prev) => [
          ...prev,
          "\u{1F50D} [SOQL 1/100] SELECT Id, Name FROM Account WHERE Id IN :accountIdsSet",
          "\u26A1 Map mapping initialized: Map<Id, Account>",
          "\u2699\uFE0F Processing Contact list bulk update..."
        ]);
      } else if (bulkCounter === 2) {
        setBulkLogs((prev) => [
          ...prev,
          "\u2705 Successfully bulk processed 150 records.",
          "\u{1F4CA} [LIMITS] CPU Time: 12ms / 10000ms",
          "\u{1F4CA} [LIMITS] SOQL Queries: 1 / 100",
          "\u{1F4CA} [LIMITS] DML Statements: 1 / 150",
          "\u{1F389} Transaction Completed successfully."
        ]);
        setRaceComplete(true);
        setRaceRunning(false);
        clearInterval(bulkInterval);
      }
    }, 1200);
  };
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { maxWidth: 1200 } }, /* @__PURE__ */ React.createElement("div", { className: "page-head", style: { marginBottom: 40 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Research & Sandbox"), /* @__PURE__ */ React.createElement("h1", { className: "h-display", style: { fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" } }, "Demos & Articles"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { maxWidth: 640 } }, "Explore live interactive Salesforce simulations and technical articles synced directly from standard Salesforce Knowledge."))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 16,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    marginBottom: 36,
    paddingBottom: 2
  } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("demos"),
      className: "hoverable",
      style: {
        background: "transparent",
        border: "none",
        fontSize: 16,
        fontWeight: 700,
        color: activeTab === "demos" ? "white" : "var(--ink-3)",
        borderBottom: activeTab === "demos" ? "3px solid var(--accent)" : "3px solid transparent",
        padding: "8px 16px 12px",
        transition: "all 0.2s"
      }
    },
    "Interactive Demos"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("articles"),
      className: "hoverable",
      style: {
        background: "transparent",
        border: "none",
        fontSize: 16,
        fontWeight: 700,
        color: activeTab === "articles" ? "white" : "var(--ink-3)",
        borderBottom: activeTab === "articles" ? "3px solid var(--accent)" : "3px solid transparent",
        padding: "8px 16px 12px",
        transition: "all 0.2s"
      }
    },
    "Salesforce Knowledge Articles"
  )), activeTab === "demos" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 30 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 28, margin: "0 0 10px" } }, "Apex Governor Limit Race"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { fontSize: 15, maxWidth: 800 } }, "A visual simulation of how Salesforce handles transactions. Run the race to compare a poorly written trigger (SOQL query inside a loop) against a bulkified trigger (SOQL query outside, mapped to ID).")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 20, marginBottom: 32 } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid rgba(231,76,60,0.2)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("strong", { style: { color: "#e74c3c", fontSize: 14, fontFamily: "var(--font-mono)" } }, "\u26A0\uFE0F BAD PRACTICE (SOQL IN LOOP)"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, background: "rgba(231,76,60,0.1)", color: "#e74c3c", padding: "4px 8px", borderRadius: 4, fontWeight: 700 } }, "CRASHES ORG")), /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: 16,
    borderRadius: 10,
    background: "rgba(0,0,0,0.3)",
    color: "rgba(244,248,255,0.85)",
    fontFamily: "var(--font-mono)",
    fontSize: 12.5,
    lineHeight: 1.5,
    overflowX: "auto"
  } }, `trigger ContactTrigger on Contact (before insert) {
  // \u274C BAD: Querying database inside a loop
  for (Contact c : Trigger.new) {
    Account acc = [SELECT Name FROM Account 
                   WHERE Id = :c.AccountId LIMIT 1];
    c.Description = 'Employer: ' + acc.Name;
  }
}`)), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid rgba(46,204,113,0.2)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("strong", { style: { color: "#2ecc71", fontSize: 14, fontFamily: "var(--font-mono)" } }, "\u2705 BULKIFIED HANDLER (MAP PATTERN)"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, background: "rgba(46,204,113,0.1)", color: "#2ecc71", padding: "4px 8px", borderRadius: 4, fontWeight: 700 } }, "BULK SAFE")), /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: 16,
    borderRadius: 10,
    background: "rgba(0,0,0,0.3)",
    color: "rgba(244,248,255,0.85)",
    fontFamily: "var(--font-mono)",
    fontSize: 12.5,
    lineHeight: 1.5,
    overflowX: "auto"
  } }, `trigger ContactTrigger on Contact (before insert) {
  Set<Id> accountIds = new Set<Id>();
  for (Contact c : Trigger.new) accountIds.add(c.AccountId);
  
  // \u2705 BULK: Query once outside, map to map
  Map<Id, Account> accMap = new Map<Id, Account>(
    [SELECT Name FROM Account WHERE Id IN :accountIds]
  );
  for (Contact c : Trigger.new) {
    if (accMap.containsKey(c.AccountId)) {
      c.Description = 'Employer: ' + accMap.get(c.AccountId).Name;
    }
  }
}`))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 40 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn primary hoverable",
      onClick: runRace,
      disabled: raceRunning,
      style: {
        padding: "16px 40px",
        fontSize: 16,
        background: raceRunning ? "rgba(255,255,255,0.06)" : "linear-gradient(90deg, var(--sf-blue), var(--sf-purple))",
        border: "none",
        boxShadow: raceRunning ? "none" : "0 10px 28px -10px rgba(0, 161, 224, 0.6)"
      }
    },
    raceRunning ? "\u23F3 Compiling and Executing..." : "\u{1F3CE}\uFE0F Start Governor Limit Race"
  )), (nonBulkLogs.length > 0 || bulkLogs.length > 0) && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 20 } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line)",
    borderRadius: 14,
    padding: 20,
    fontFamily: "var(--font-mono)",
    height: 300,
    overflowY: "auto",
    boxShadow: "inset 0 4px 20px rgba(0,0,0,0.8)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 8, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "var(--ink-3)" } }, "EXECUTION LOG: Thread_1 (Non-Bulk)"), /* @__PURE__ */ React.createElement("span", { style: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: raceRunning ? "#f1c40f" : nonBulkLogs.some((l) => l.includes("LimitException")) ? "#e74c3c" : "#2ecc71"
  } })), nonBulkLogs.map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    fontSize: 11.5,
    color: l.startsWith("\u274C") ? "#e74c3c" : l.startsWith("\u26A0\uFE0F") ? "#f1c40f" : "rgba(244,248,255,0.65)",
    marginBottom: 6,
    lineHeight: 1.4
  } }, l))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line)",
    borderRadius: 14,
    padding: 20,
    fontFamily: "var(--font-mono)",
    height: 300,
    overflowY: "auto",
    boxShadow: "inset 0 4px 20px rgba(0,0,0,0.8)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 8, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "var(--ink-3)" } }, "EXECUTION LOG: Thread_2 (Bulkified)"), /* @__PURE__ */ React.createElement("span", { style: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: raceRunning ? "#f1c40f" : raceComplete ? "#2ecc71" : "transparent"
  } })), bulkLogs.map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    fontSize: 11.5,
    color: l.startsWith("\u2705") || l.includes("Completed") ? "#2ecc71" : l.includes("LIMITS") ? "var(--accent)" : "rgba(244,248,255,0.65)",
    marginBottom: 6,
    lineHeight: 1.4
  } }, l))))), activeTab === "articles" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 36 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 28, margin: "0 0 10px" } }, "Published Knowledge Base"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { fontSize: 15, maxWidth: 800 } }, "Technical briefs and guides published directly from the standard Salesforce Knowledge base object (", /* @__PURE__ */ React.createElement("code", null, "Knowledge__kav"), ").")), ARTICLES.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 48, textPosition: "center", textAlign: "center", color: "var(--ink-3)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "cloud", size: 32, style: { marginBottom: 12, opacity: 0.3 } }), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 16 } }, "No Salesforce Knowledge articles published yet in this org.")) : /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: 20
  } }, ARTICLES.map((a, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "card hoverable", style: {
    padding: 24,
    borderRadius: 18,
    background: "rgba(10,18,48,0.45)",
    border: "1px solid rgba(180,210,255,0.14)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    transition: "all 0.25s"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 10,
    background: "var(--sf-sky)",
    color: "var(--accent)",
    padding: "4px 8px",
    borderRadius: 4,
    fontWeight: 700,
    fontFamily: "var(--font-mono)"
  } }, a.articleNumber || `KAV-${i + 101}`), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-3)" } }, a.publishedDate || "Recently")), /* @__PURE__ */ React.createElement("h3", { style: {
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 700,
    color: "white",
    margin: "0 0 10px"
  } }, a.title), /* @__PURE__ */ React.createElement("p", { style: {
    fontSize: 13.5,
    color: "var(--ink-2)",
    lineHeight: 1.5,
    marginBottom: 20
  } }, a.summary)), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn ghost hoverable",
      onClick: () => setSelectedArticle(a),
      style: { width: "100%", justifyContent: "center", fontSize: 13, padding: "10px" }
    },
    "Read Article ",
    /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 12 })
  ))))), selectedArticle && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    background: "rgba(5, 8, 24, 0.85)",
    backdropFilter: "blur(12px)",
    display: "grid",
    placeItems: "center",
    padding: 20
  } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: {
    maxWidth: 700,
    width: "100%",
    background: "var(--bg-2)",
    border: "1px solid var(--line)",
    borderRadius: 22,
    padding: 32,
    boxShadow: "var(--shadow-3)",
    position: "relative",
    maxHeight: "90vh",
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setSelectedArticle(null),
      style: {
        position: "absolute",
        top: 20,
        right: 20,
        width: 32,
        height: 32,
        borderRadius: 8,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid var(--line-2)",
        color: "white",
        cursor: "pointer"
      }
    },
    "\u2715"
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 10,
    background: "var(--sf-sky)",
    color: "var(--accent)",
    padding: "4px 8px",
    borderRadius: 4,
    fontWeight: 700,
    fontFamily: "var(--font-mono)"
  } }, selectedArticle.articleNumber), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--ink-3)" } }, "Published: ", selectedArticle.publishedDate)), /* @__PURE__ */ React.createElement("h2", { className: "h-display", style: { fontSize: 26, color: "white", marginBottom: 16, lineHeight: 1.2 } }, selectedArticle.title), /* @__PURE__ */ React.createElement("div", { style: {
    color: "var(--ink-2)",
    fontSize: 14.5,
    lineHeight: 1.6,
    borderTop: "1px solid var(--line-2)",
    paddingTop: 16,
    marginBottom: 24
  } }, /* @__PURE__ */ React.createElement("p", null, selectedArticle.summary), /* @__PURE__ */ React.createElement("div", { style: {
    background: "rgba(0,161,224,0.05)",
    border: "1px solid rgba(0,161,224,0.15)",
    borderRadius: 12,
    padding: 18,
    marginTop: 20
  } }, /* @__PURE__ */ React.createElement("strong", { style: { color: "white", display: "block", marginBottom: 6 } }, "\u{1F4A1} Article Scope"), "This article is published directly inside the host Salesforce Org Knowledge base. For the complete step-by-step implementation guide, code snippets, and configuration worksheets, please reach out to request PDF attachments or schedule a walkthrough call.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn primary hoverable",
      onClick: () => {
        setSelectedArticle(null);
        go("contact");
      }
    },
    "Request Full PDF ",
    /* @__PURE__ */ React.createElement(Icon, { name: "mail", size: 13 })
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn ghost hoverable",
      onClick: () => setSelectedArticle(null)
    },
    "Close"
  )))))), /* @__PURE__ */ React.createElement("style", null, `
        .card.hoverable:hover {
          transform: translateY(-4px);
          border-color: rgba(180,210,255,0.3) !important;
          box-shadow: 0 12px 30px -10px rgba(0, 160, 255, 0.15) !important;
        }
      `));
}
Object.assign(window, { PageDemos });


/* ── trailhead/main.jsx ── */
/* hooks from shim */
const ROUTES = [
  { id: "home", label: "Home" },
  { id: "certs", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "gigs", label: "Services" },
  { id: "demos", label: "Demos & Articles" },
  { id: "contact", label: "Contact" }
];
function useHashRoute() {
  const [route, setRoute] = useState(() => location.hash.replace("#", "") || "home");
  useEffect(() => {
    const on = () => setRoute(location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return [route, (r) => {
    location.hash = r;
    window.scrollTo({ top: 0, behavior: "instant" });
  }];
}
const TWEAK_DEFAULTS = window.TWEAK_DEFAULTS;
function Nav({ route, go }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = (id) => {
    setDrawerOpen(false);
    go(id);
  };
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", { className: "nav" }, /* @__PURE__ */ React.createElement("div", { className: "nav-inner" }, /* @__PURE__ */ React.createElement("a", { className: "brand hoverable", href: "#home", onClick: (e) => {
    e.preventDefault();
    navigate("home");
  } }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark", style: { overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: "uploads/YK.png", alt: "YK", style: { width: "100%", height: "100%", objectFit: "contain" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { lineHeight: 1.1 } }, "Yusuf Khan"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 500, color: "var(--ink-2)", fontSize: 11.5, fontFamily: "var(--font-body)", lineHeight: 1.1 } }, "Salesforce Lead Dev"))), /* @__PURE__ */ React.createElement("div", { className: "nav-links" }, ROUTES.map((r) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: r.id,
      href: `#${r.id}`,
      onClick: (e) => {
        e.preventDefault();
        navigate(r.id);
      },
      className: "nav-link hoverable " + (route === r.id ? "active" : "")
    },
    r.label
  ))), /* @__PURE__ */ React.createElement("div", { className: "nav-cta-group", style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("a", { className: "btn ghost hoverable", href: "#contact", onClick: (e) => {
    e.preventDefault();
    navigate("contact");
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "mail", size: 15 }), " Get in touch"), /* @__PURE__ */ React.createElement("a", { className: "btn primary hoverable", href: "assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 15 }), " Resume")), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "nav-hamburger",
      "aria-label": "Open menu",
      "aria-expanded": drawerOpen,
      onClick: () => setDrawerOpen(true)
    },
    "\u2630"
  ))), drawerOpen && /* @__PURE__ */ React.createElement("div", { className: "mobile-drawer", role: "dialog", "aria-label": "Navigation menu" }, /* @__PURE__ */ React.createElement("button", { className: "drawer-close", "aria-label": "Close menu", onClick: () => setDrawerOpen(false) }, "\u2715"), ROUTES.map((r) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: r.id,
      href: `#${r.id}`,
      className: "drawer-link" + (route === r.id ? " active" : ""),
      onClick: (e) => {
        e.preventDefault();
        navigate(r.id);
      }
    },
    r.label
  )), /* @__PURE__ */ React.createElement("div", { className: "drawer-ctas" }, /* @__PURE__ */ React.createElement("a", { className: "btn ghost", href: "#contact", onClick: (e) => {
    e.preventDefault();
    navigate("contact");
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "mail", size: 15 }), " Get in touch"), /* @__PURE__ */ React.createElement("a", { className: "btn primary", href: "assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 15 }), " Resume"))));
}
function Footer({ go }) {
  return /* @__PURE__ */ React.createElement("footer", { style: { borderTop: "1px solid var(--line-2)", padding: "48px 0", background: "var(--card)" } }, /* @__PURE__ */ React.createElement("div", { className: "container footer-grid", style: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 } }, /* @__PURE__ */ React.createElement("div", { className: "footer-brand" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark", style: { width: 36, height: 36, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: "uploads/YK.png", alt: "YK", style: { width: "100%", height: "100%", objectFit: "contain" } })), /* @__PURE__ */ React.createElement("strong", { style: { fontFamily: "var(--font-display)", fontSize: 20 } }, "Yusuf Khan")), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { marginTop: 14, maxWidth: 340 } }, "Salesforce Lead Developer building enterprise-grade experiences across Banking, Retail and Financial Services."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("a", { className: "btn ghost hoverable", href: "https://www.linkedin.com/in/yusufkhan2546", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Icon, { name: "linkedin", size: 16 }), " LinkedIn"), /* @__PURE__ */ React.createElement("a", { className: "btn ghost hoverable", href: "https://www.salesforce.com/trailblazer/yusufkhan2546", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Icon, { name: "trail", size: 16 }), " Trailblazer"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 } }, "Sitemap"), ROUTES.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.id, style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "hoverable",
      href: `#${r.id}`,
      onClick: (e) => {
        e.preventDefault();
        go(r.id);
      },
      style: { color: "var(--ink-2)", fontSize: 14, fontWeight: 500 }
    },
    r.label
  )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 } }, "Domains"), ["Banking & FSC", "Retail / Commerce", "Lending & Loan Origination", "Experience Cloud", "Agentforce & AI"].map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: { marginBottom: 8, color: "var(--ink-2)", fontSize: 14, fontWeight: 500 } }, s))), /* @__PURE__ */ React.createElement("div", { className: "footer-currently" }, /* @__PURE__ */ React.createElement("div", { style: { textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 } }, "Currently"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 99, background: "var(--sf-success)", boxShadow: "0 0 8px var(--sf-success)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 600 } }, "Available for new engagements")), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-2)", fontSize: 14 } }, "Replies within 24h"))), /* @__PURE__ */ React.createElement("div", { className: "container footer-bottom", style: { marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--line-2)", display: "flex", justifyContent: "space-between", color: "var(--ink-2)", fontSize: 13 } }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026 Yusuf Khan. Built with curiosity and a lot of Apex."), /* @__PURE__ */ React.createElement("span", { className: "mono" }, "v1.0 \xB7 Trailhead-inspired")));
}
function App() {
  const [route, go] = useHashRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-deep", t.accentDeep);
  }, [t.accent, t.accentDeep]);
  useEffect(() => {
    document.body.classList.toggle("custom-cursor", !!t.showCursor);
  }, [t.showCursor]);
  useEffect(() => {
    const titles = {
      home: "Yusuf Khan \u2014 Salesforce Lead Developer & Architect",
      certs: "Salesforce Certifications \u2014 Yusuf Khan",
      projects: "Enterprise Projects \u2014 Yusuf Khan",
      experience: "Professional Experience \u2014 Yusuf Khan",
      gigs: "Salesforce Consulting Services & Gigs \u2014 Yusuf Khan",
      demos: "Demos & Tech Articles \u2014 Yusuf Khan",
      contact: "Contact & Availability \u2014 Yusuf Khan"
    };
    document.title = titles[route] || "Yusuf Khan \u2014 Salesforce Lead Developer & Architect";
    const descriptions = {
      home: "Portfolio of Yusuf Khan, a Salesforce Lead Developer & Technical SME building enterprise-grade Cloud experiences across Banking, Retail, and Financial Services.",
      certs: "Explore Salesforce certifications earned by Yusuf Khan, including Platform Developer II, Agentforce Specialist, OmniStudio Developer, and Data Cloud Consultant.",
      projects: "View real-world enterprise Salesforce projects delivered by Yusuf Khan, including Experience Cloud portals and Loan Origination systems.",
      experience: "Read about Yusuf Khan's professional experience as a Salesforce Technical SME and Software Engineer leading complex integrations.",
      gigs: "Specialized Salesforce development & consulting packages: Integrations, LWC, Admin/Flows, Agentforce AI, Vlocity, and Data migrations.",
      demos: "Interactive Salesforce code simulations and technical articles synced directly from Salesforce Knowledge.",
      contact: "Get in touch with Yusuf Khan. Check availability for Salesforce development, consulting, and architecture roles."
    };
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", descriptions[route] || descriptions.home);
    }
  }, [route]);
  let Page = null;
  if (route === "home") Page = /* @__PURE__ */ React.createElement(PageHome, { go });
  else if (route === "certs") Page = /* @__PURE__ */ React.createElement(PageCerts, { go });
  else if (route === "projects") Page = /* @__PURE__ */ React.createElement(PageProjects, { go });
  else if (route === "experience") Page = /* @__PURE__ */ React.createElement(PageExperience, { go });
  else if (route === "gigs") Page = /* @__PURE__ */ React.createElement(PageGigs, { go });
  else if (route === "demos") Page = /* @__PURE__ */ React.createElement(PageDemos, { go });
  else if (route === "contact") Page = /* @__PURE__ */ React.createElement(PageContact, { go });
  else Page = /* @__PURE__ */ React.createElement(PageHome, { go });
  const labels = { home: "01 Home", certs: "02 Certifications", projects: "03 Projects", experience: "04 Experience", gigs: "05 Services", demos: "06 Demos & Articles", contact: "07 Contact" };
  return /* @__PURE__ */ React.createElement("div", { "data-screen-label": labels[route] || route }, /* @__PURE__ */ React.createElement(BoltTrail, { enabled: t.boltTrail, showCursor: t.showCursor }), /* @__PURE__ */ React.createElement(Mascot, { route, setTweak, enabled: t.mascot }), /* @__PURE__ */ React.createElement(Nav, { route, go }), /* @__PURE__ */ React.createElement("div", { key: route, className: "page-shell page-enter", style: route === "home" ? { paddingTop: 0 } : void 0 }, Page), /* @__PURE__ */ React.createElement(Footer, { go }), /* @__PURE__ */ React.createElement(TweaksPanel, { title: "Tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { title: "Theme" }, /* @__PURE__ */ React.createElement(
    TweakColor,
    {
      label: "Accent",
      value: t.accent,
      options: ["#00A1E0", "#0070D2", "#7F00FF", "#FF6F00", "#16A34A"],
      onChange: (v) => setTweak("accent", v)
    }
  ), /* @__PURE__ */ React.createElement(
    TweakColor,
    {
      label: "Deep accent",
      value: t.accentDeep,
      options: ["#032D60", "#16325C", "#1A1A2E", "#3C0F66", "#1F2937"],
      onChange: (v) => setTweak("accentDeep", v)
    }
  )), /* @__PURE__ */ React.createElement(TweakSection, { title: "Effects" }, /* @__PURE__ */ React.createElement(TweakToggle, { label: "Lightning bolt cursor trail", value: t.boltTrail, onChange: (v) => setTweak("boltTrail", v) }), /* @__PURE__ */ React.createElement(TweakToggle, { label: "Custom cursor dot", value: t.showCursor, onChange: (v) => setTweak("showCursor", v) }), /* @__PURE__ */ React.createElement(TweakToggle, { label: "Trail companion mascot", value: t.mascot, onChange: (v) => setTweak("mascot", v) }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
