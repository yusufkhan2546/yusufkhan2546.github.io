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
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:290px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(3,7,18,0.88);color:#F3F8FF;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:1px solid color-mix(in oklab, var(--accent, #00F0FF) 35%, transparent);border-radius:16px;
    box-shadow:0 1px 0 rgba(255,255,255,.1) inset,0 12px 40px rgba(0,0,0,.6);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none;border-bottom:1px solid rgba(255,255,255,0.08)}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.02em;color:var(--accent, #00F0FF)}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(243,248,255,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(255,255,255,.1);color:#fff}
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
function CoverLetterForm({ onSubmit }) {
  const [jobDescription, setJobDescription] = useState("");
  const [highlightingPoints, setHighlightingPoints] = useState("");
  const [tone, setTone] = useState("Results-oriented");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sponsorshipNeeded, setSponsorshipNeeded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const availableSkills = ["Apex", "LWC", "Integrations", "OmniStudio", "Agentforce", "Data Cloud", "Flow"];
  const toggleSkill = (skill) => {
    setSelectedSkills(
      (prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobDescription.trim()) return;
    setSubmitted(true);
    onSubmit({
      jobDescription,
      highlightingPoints,
      tone,
      highlightSkills: selectedSkills.join(", "),
      sponsorshipNeeded
    });
  };
  if (submitted) {
    return /* @__PURE__ */ React.createElement("div", { style: { padding: 10, textAlign: "center", color: "rgba(255,255,255,0.7)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", gap: 4, margin: "10px auto" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, background: "rgba(255,255,255,0.5)", borderRadius: "50%", animation: "typing 1.4s infinite both" } }), /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, background: "rgba(255,255,255,0.5)", borderRadius: "50%", animation: "typing 1.4s infinite both", animationDelay: "0.2s" } }), /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, background: "rgba(255,255,255,0.5)", borderRadius: "50%", animation: "typing 1.4s infinite both", animationDelay: "0.4s" } })), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "11px", margin: 0 } }, "Submitting preferences to Agentforce..."));
  }
  return /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, style: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: "8px 4px",
    fontSize: "12px",
    color: "white",
    width: "100%",
    textAlign: "left"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "bold", borderBottom: "1px solid rgba(180,210,255,0.15)", paddingBottom: 4, color: "#00A1E0", fontSize: "12.5px" } }, "Configure Cover Letter"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } }, /* @__PURE__ */ React.createElement("label", { style: { fontWeight: 600, color: "rgba(255,255,255,0.85)" } }, "Job Description *"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      required: true,
      rows: 3,
      placeholder: "Paste job description here...",
      value: jobDescription,
      onChange: (e) => setJobDescription(e.target.value),
      style: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(180,210,255,0.2)",
        borderRadius: 6,
        padding: 6,
        color: "white",
        fontSize: "11px",
        resize: "vertical",
        outline: "none",
        fontFamily: "inherit"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } }, /* @__PURE__ */ React.createElement("label", { style: { fontWeight: 600, color: "rgba(255,255,255,0.85)" } }, "Highlighting Points"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "e.g. Lead 3 FSC setups, 90% CSAT...",
      value: highlightingPoints,
      onChange: (e) => setHighlightingPoints(e.target.value),
      style: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(180,210,255,0.2)",
        borderRadius: 6,
        padding: 6,
        color: "white",
        fontSize: "11px",
        outline: "none",
        fontFamily: "inherit"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } }, /* @__PURE__ */ React.createElement("label", { style: { fontWeight: 600, color: "rgba(255,255,255,0.85)" } }, "Tone"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: tone,
      onChange: (e) => setTone(e.target.value),
      style: {
        background: "rgba(10,20,50,0.95)",
        border: "1px solid rgba(180,210,255,0.2)",
        borderRadius: 6,
        padding: 6,
        color: "white",
        fontSize: "11px",
        outline: "none",
        fontFamily: "inherit"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "Results-oriented" }, "Results-oriented (Outcomes & Metrics)"),
    /* @__PURE__ */ React.createElement("option", { value: "Achievement-oriented" }, "Achievement-oriented (Projects & Awards)")
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("label", { style: { fontWeight: 600, color: "rgba(255,255,255,0.85)" } }, "Highlight Skills"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } }, availableSkills.map((skill) => {
    const isSelected = selectedSkills.includes(skill);
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: skill,
        type: "button",
        onClick: () => toggleSkill(skill),
        style: {
          background: isSelected ? "var(--accent)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${isSelected ? "var(--accent)" : "rgba(180,210,255,0.15)"}`,
          borderRadius: 999,
          padding: "2px 8px",
          color: "white",
          fontSize: "10px",
          cursor: "pointer",
          transition: "all 0.1s ease"
        }
      },
      skill
    );
  }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, margin: "2px 0" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      id: "sponsorship",
      checked: sponsorshipNeeded,
      onChange: (e) => setSponsorshipNeeded(e.target.checked),
      style: { cursor: "pointer", width: 12, height: 12 }
    }
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "sponsorship", style: { cursor: "pointer", userSelect: "none", color: "rgba(255,255,255,0.85)", fontSize: "11px" } }, "Visa Sponsorship Required")), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn primary", style: {
    marginTop: 4,
    padding: "8px 12px",
    fontSize: "11.5px",
    justifyContent: "center",
    border: "none",
    width: "100%"
  } }, "Generate Letter"));
}
function CoverLetterDownload({ base64Pdf }) {
  const handleDownload = () => {
    try {
      const byteCharacters = atob(base64Pdf);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Yusuf_Khan_Cover_Letter.pdf";
      link.click();
    } catch (e) {
      console.error("Error creating download blob:", e);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    padding: "10px 8px",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(180, 210, 255, 0.15)",
    borderRadius: 12,
    marginTop: 4,
    width: "100%",
    textAlign: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20 } }, "\u{1F4C4}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "bold", fontSize: "12px", color: "white" } }, "Yusuf_Khan_Cover_Letter.pdf"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)", marginTop: 2 } }, "Ready for download")), /* @__PURE__ */ React.createElement("button", { onClick: handleDownload, className: "btn primary", style: {
    padding: "6px 12px",
    fontSize: "11px",
    border: "none",
    gap: 4,
    width: "100%",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style: { marginTop: -1 } }, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "7 10 12 15 17 10" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" })), "Download Cover Letter"));
}
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
  const [messages, setMessages] = useState([]);
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
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed) console.log("[Mascot] SSE line:", trimmed.slice(0, 120));
          if (trimmed.startsWith("data:")) {
            const jsonStr = trimmed.slice(5).trim();
            try {
              const eventData = JSON.parse(jsonStr);
              const entry = eventData.conversationEntry || eventData;
              const entryType = (entry.entryType || entry.type || "").toLowerCase();
              console.log("[Mascot] parsed event \u2014 entryType:", entry.entryType, "| role:", entry.sender?.role, "| payload:", entry.entryPayload?.slice(0, 200));
              if (entry && entryType === "message") {
                let payload = {};
                try {
                  payload = JSON.parse(entry.entryPayload || "{}");
                } catch (e) {
                  console.error("[Mascot] entryPayload parse error", e);
                }
                const abstractMsg = payload.abstractMessage || entry.abstractMessage || {};
                const sender = entry.sender || {};
                const text = abstractMsg.staticContent && abstractMsg.staticContent.text || abstractMsg.messageText || entry.messageText;
                const entryId = entry.identifier || entry.id || eventData.id || "agent-" + Date.now();
                const role = (sender.role || entry.actorType || "").toLowerCase();
                console.log("[Mascot] message event \u2014 role:", role, "| text:", text);
                if (role !== "enduser") {
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
      const sendBody = await response.text();
      console.log("[Mascot] send response", response.status, sendBody);
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
  const submitCoverLetterForm = async (data) => {
    if (sending) return;
    const userMsgId = "user-" + Date.now();
    setMessages((prev) => [...prev, {
      id: userMsgId,
      text: "Submitted cover letter preferences.",
      sender: "user"
    }]);
    setSending(true);
    setPose("thinking");
    try {
      const token = accessTokenRef.current;
      const convId = conversationIdRef.current;
      const messageId = generateUUID();
      const payloadText = `Job Description: ${data.jobDescription}
Highlighting Points: ${data.highlightingPoints || "None"}
Tone: ${data.tone || "Results-oriented"}
Highlight Skills: ${data.highlightSkills || "None"}
Sponsorship Needed: ${data.sponsorshipNeeded ? "True" : "False"}`;
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
              text: payloadText
            }
          },
          esDeveloperName: SF_CONFIG.esDeveloperName,
          isNewMessagingSession: false,
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
        text: "Failed to submit form. Please try again.",
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
  } })), chatOpen && /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-window", style: { pointerEvents: "auto" } }, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-header" }, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-header-info" }, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-avatar" }, "\u{1F916}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-title" }, "Agentforce Representative"), /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-status" }, /* @__PURE__ */ React.createElement("span", { className: `cosmic-chat-status-dot ${connecting ? "connecting" : ""}` }), /* @__PURE__ */ React.createElement("span", null, connecting ? "Connecting..." : "Online")))), /* @__PURE__ */ React.createElement("button", { className: "cosmic-chat-close", onClick: () => setChatOpen(false), title: "Close chat" }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-messages", ref: chatMessagesRef }, messages.map((msg) => {
    const hasForm = msg.text && msg.text.includes("[SHOW_COVER_LETTER_FORM]");
    const hasDownload = msg.text && msg.text.includes("[DOWNLOAD_PDF:");
    let downloadBase64 = "";
    if (hasDownload) {
      const startIdx = msg.text.indexOf("[DOWNLOAD_PDF:") + "[DOWNLOAD_PDF:".length;
      const endIdx = msg.text.indexOf("]", startIdx);
      if (endIdx !== -1) {
        downloadBase64 = msg.text.substring(startIdx, endIdx).trim();
      }
    }
    return /* @__PURE__ */ React.createElement("div", { key: msg.id, className: `cosmic-chat-message ${msg.sender}`, style: {
      width: hasForm || hasDownload ? "90%" : void 0,
      maxWidth: hasForm || hasDownload ? "90%" : void 0,
      padding: hasForm || hasDownload ? "6px 8px" : void 0,
      background: hasForm ? "rgba(10,20,50,0.4)" : hasDownload ? "rgba(255,255,255,0.03)" : void 0,
      border: hasForm || hasDownload ? "1px solid rgba(180, 210, 255, 0.15)" : void 0
    } }, hasForm ? /* @__PURE__ */ React.createElement(CoverLetterForm, { onSubmit: submitCoverLetterForm }) : hasDownload ? /* @__PURE__ */ React.createElement(CoverLetterDownload, { base64Pdf: downloadBase64 }) : msg.text);
  }), (sending || connecting) && /* @__PURE__ */ React.createElement("div", { className: "cosmic-chat-typing" }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null))), /* @__PURE__ */ React.createElement("form", { className: "cosmic-chat-input-area", onSubmit: (e) => {
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
function AgentforceAssistantWidget({ go }) {
  const [activePrompt, setActivePrompt] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const presets = useMemo(() => [
    {
      q: "\u2728 FSC & Banking Architecture",
      a: "Yusuf Khan is a Salesforce Technical SME & Certified FSC Consultant who has architected Tier-1 banking & lending platforms handling over $4.2B+ in loan transactions. His implementations leverage OmniStudio, custom LWC engines, and MuleSoft integrations to reduce loan origination time from days to under 14 minutes."
    },
    {
      q: "\u{1F393} 12\xD7 Certifications & Credentials",
      a: "Yusuf holds 12\xD7 Salesforce Certifications including Platform Developer II, Agentforce Specialist, Data Cloud Consultant, Financial Services Cloud Consultant, OmniStudio Developer, JavaScript Developer I, and Deployment Architect. He maintains a 99.9% verification record with 506+ Trailhead badges."
    },
    {
      q: "\u26A1 OmniStudio & LWC Frameworks",
      a: "Yusuf builds modular, governor-limit safe LWC & OmniStudio FlexCards/OmniScripts designed for high concurrency. He enforces strict separation of concerns, Apex enterprise trigger frameworks (Selectors, Domain, Service layers), and async Queueables/Platform Events to achieve 99.98% processing accuracy."
    },
    {
      q: "\u{1F916} Agentforce AI & Data Cloud",
      a: "As a Certified Agentforce Specialist and AI Associate, Yusuf designs autonomous Salesforce AI Agents, Prompt Templates, and Data Cloud retrieval pipelines that automate customer service inquiries, loan risk profiling, and real-time carrier provisioning."
    }
  ], []);
  const handleSelect = (idx) => {
    setActivePrompt(idx);
    triggerResponse(presets[idx].a);
  };
  const triggerResponse = (text) => {
    setIsTyping(true);
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 5));
        i += 5;
      } else {
        setDisplayedText(text);
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 15);
  };
  useEffect(() => {
    handleSelect(0);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "cyber-card hoverable", style: { padding: "24px 28px", marginTop: 32, textAlign: "left", width: "100%", maxWidth: 840, margin: "32px auto 0", pointerEvents: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, borderBottom: "1px solid var(--line)", paddingBottom: 10, flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { className: "hud-badge" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-dot" }), " AGENTFORCE AI ASSISTANT"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--ink-2)", fontFamily: "var(--font-mono)" } }, "\u25CF LIVE DEMO")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, color: "var(--accent)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" } }, "SALESFORCE DATA CLOUD CONNECTED")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 } }, presets.map((p, idx) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: idx,
      className: `btn ghost hoverable ${activePrompt === idx ? "active" : ""}`,
      onClick: () => handleSelect(idx),
      style: {
        padding: "6px 12px",
        fontSize: 12,
        borderRadius: 999,
        borderColor: activePrompt === idx ? "var(--accent)" : "var(--line)",
        background: activePrompt === idx ? "color-mix(in oklab, var(--accent) 18%, transparent)" : "rgba(255,255,255,0.03)",
        color: activePrompt === idx ? "#FFFFFF" : "var(--ink-2)",
        transition: "all 0.2s ease"
      }
    },
    p.q
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "rgba(3, 7, 18, 0.8)",
    border: "1px solid var(--line)",
    borderRadius: 12,
    padding: "16px 20px",
    minHeight: 90,
    fontFamily: "var(--font-body)",
    fontSize: 13.5,
    lineHeight: 1.6,
    color: "var(--ink)",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--accent)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "bolt", size: 13, color: "var(--accent)" }), /* @__PURE__ */ React.createElement("span", null, "AGENTFORCE AI RESPONSE"), isTyping && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", color: "var(--sf-pink)" } }, "GENERATING...")), /* @__PURE__ */ React.createElement("p", { style: { margin: 0 } }, displayedText, isTyping && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 7, height: 14, background: "var(--accent)", marginLeft: 4, verticalAlign: "middle" } }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14, flexWrap: "wrap", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)" } }, "\u{1F4A1} Click presets above to test Agentforce AI responses"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { className: "btn primary hoverable", onClick: () => go("projects"), style: { padding: "6px 14px", fontSize: 12, border: "none" } }, "Explore Case Studies ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 13 })), /* @__PURE__ */ React.createElement("button", { className: "btn ghost hoverable", onClick: () => go("contact"), style: { padding: "6px 14px", fontSize: 12 } }, "Contact SME"))));
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
    background: "linear-gradient(90deg, var(--accent), var(--accent-deep))",
    boxShadow: "0 18px 40px -12px color-mix(in oklab, var(--accent) 60%, transparent)",
    padding: "14px 24px",
    fontSize: 14,
    border: "none"
  } }, "See case studies ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 16 })), /* @__PURE__ */ React.createElement("button", { className: "btn ghost hoverable", onClick: () => go("certs"), style: {
    background: "rgba(255,255,255,.06)",
    color: "white",
    borderColor: "var(--line)",
    padding: "14px 24px",
    fontSize: 14
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "badge", size: 16 }), " 12 certifications")), /* @__PURE__ */ React.createElement("div", { className: "hero-stats", style: {
    marginTop: 36,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    maxWidth: 760,
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid var(--line)",
    borderRadius: 16,
    background: "rgba(3, 7, 18, 0.65)",
    backdropFilter: "blur(14px)",
    boxShadow: "var(--shadow-2)",
    animation: "letterIn .8s ease .75s both",
    pointerEvents: "auto",
    overflow: "hidden"
  } }, (function() {
    const sfData = window.__SF_DATA__ || {};
    const certCount = (sfData.certifications || []).length || "\u2014";
    const tb = sfData.trailblazerStats || {};
    const pointsDisp = tb.pointsK ? tb.pointsK + "K+" : "\u2014";
    return [
      [String(certCount), "Salesforce Certs", "100% Verified"],
      ["6+", "Years Exp.", "Lead SME"],
      ["8+", "Enterprise Apps", "Banking & Retail"],
      [pointsDisp, "Trailhead Pts", "506 Badges"]
    ];
  })().map(([n, l, sub], i) => /* @__PURE__ */ React.createElement("div", { key: l, style: {
    padding: "16px 12px",
    borderLeft: i > 0 ? "1px solid var(--line)" : "none",
    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "h-display", style: { fontSize: 28, fontWeight: 800, color: "var(--accent)" } }, n), /* @__PURE__ */ React.createElement("div", { style: { color: "white", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginTop: 2 } }, l), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-2)", fontSize: 10, fontFamily: "var(--font-mono)", marginTop: 2 } }, sub)))), /* @__PURE__ */ React.createElement(AgentforceAssistantWidget, { go })), /* @__PURE__ */ React.createElement("div", { style: {
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
function PageContact({ go, mapplsToken }) {
  const [commType, setCommType] = React.useState("Architecture Review");
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [captchaError, setCaptchaError] = React.useState(false);
  const formRef = React.useRef(null);
  const widgetIdRef = React.useRef(null);
  const [locationPromptVisible, setLocationPromptVisible] = React.useState(false);
  const [locationStatus, setLocationStatus] = React.useState("idle");
  const [locationMessage, setLocationMessage] = React.useState("");
  const hasPromptedRef = React.useRef(false);
  const handleFormInteraction = () => {
    if (hasPromptedRef.current) return;
    hasPromptedRef.current = true;
    setLocationPromptVisible(true);
  };
  const fillAddressFields = (address) => {
    const fields = {
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: address.country
    };
    Object.entries(fields).forEach(([name, val]) => {
      const el = document.getElementById("sf-" + name);
      if (el) {
        el.value = val;
      }
    });
  };
  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("error");
      setLocationMessage("Geolocation is not supported by your browser.");
      return;
    }
    setLocationStatus("locating");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocationStatus("geocoding");
        try {
          if (mapplsToken) {
            const response = await fetch(
              `https://search.mappls.com/search/address/rev-geocode?lat=${latitude}&lng=${longitude}&access_token=${mapplsToken}`
            );
            if (!response.ok) {
              throw new Error(`Reverse geocoding failed: ${response.statusText}`);
            }
            const data = await response.json();
            if (data.responseCode !== 200 || !data.results) {
              throw new Error(data.message || "Invalid response from Mappls API");
            }
            const result = Array.isArray(data.results) ? data.results[0] : data.results;
            fillAddressFields({
              street: result.street || result.locality || result.subLocality || "",
              city: result.city || result.district || "",
              state: result.state || "",
              zip: result.pincode || "",
              country: result.country || "India"
            });
            setLocationStatus("success");
            setTimeout(() => setLocationPromptVisible(false), 3e3);
          } else {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            if (!response.ok) {
              throw new Error("Reverse geocoding failed");
            }
            const data = await response.json();
            const addr = data.address || {};
            fillAddressFields({
              street: addr.road || addr.suburb || addr.neighbourhood || "",
              city: addr.city || addr.town || addr.village || "",
              state: addr.state || "",
              zip: addr.postcode || "",
              country: addr.country || ""
            });
            setLocationStatus("success");
            setTimeout(() => setLocationPromptVisible(false), 3e3);
          }
        } catch (err) {
          console.error("Reverse geocoding error:", err);
          setLocationStatus("error");
          setLocationMessage("Failed to resolve address. Please type manually.");
          setTimeout(() => setLocationStatus("idle"), 4e3);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocationStatus("error");
        let msg = "Location access denied or unavailable.";
        if (error.code === error.PERMISSION_DENIED) {
          msg = "Location access denied by user.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg = "Location position unavailable.";
        } else if (error.code === error.TIMEOUT) {
          msg = "Location request timed out.";
        }
        setLocationMessage(msg);
        setTimeout(() => setLocationStatus("idle"), 4e3);
      },
      { enableHighAccuracy: true, timeout: 1e4 }
    );
  };
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
      onFocus: handleFormInteraction,
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
    /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, marginBottom: 24, borderTop: "1px solid var(--line-2)", paddingTop: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: labelStyle }, "Address Details")), locationPromptVisible && /* @__PURE__ */ React.createElement("div", { className: "location-banner", style: {
      background: "rgba(0, 161, 224, 0.06)",
      border: "1px solid rgba(0, 161, 224, 0.2)",
      borderRadius: 12,
      padding: "14px 18px",
      marginBottom: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      animation: "slideDown .25s ease-out"
    } }, /* @__PURE__ */ React.createElement("style", null, `
                      @keyframes slideDown {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                      }
                    `), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--ink)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, display: "inline-block", animation: locationStatus === "locating" || locationStatus === "geocoding" ? "readyBlink 1.2s infinite" : "none" } }, locationStatus === "success" ? "\u2705" : locationStatus === "error" ? "\u26A0\uFE0F" : "\u{1F4CD}"), /* @__PURE__ */ React.createElement("div", null, locationStatus === "idle" && /* @__PURE__ */ React.createElement("strong", null, "Auto-populate address using your location?"), locationStatus === "locating" && /* @__PURE__ */ React.createElement("span", null, "Detecting GPS coordinates..."), locationStatus === "geocoding" && /* @__PURE__ */ React.createElement("span", null, "Resolving address via Mappls API..."), locationStatus === "success" && /* @__PURE__ */ React.createElement("strong", { style: { color: "var(--sf-success)" } }, "Address fields auto-populated!"), locationStatus === "error" && /* @__PURE__ */ React.createElement("span", { style: { color: "#EF4444" } }, locationMessage || "Unable to retrieve location."))), locationStatus === "idle" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: handleRequestLocation,
        style: {
          background: "var(--accent)",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          transition: "background .15s"
        },
        className: "hoverable"
      },
      "Use Location"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setLocationPromptVisible(false),
        style: {
          background: "transparent",
          color: "var(--ink-2)",
          border: "1px solid var(--line)",
          padding: "6px 12px",
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          transition: "all .15s"
        },
        className: "hoverable"
      },
      "Fill Manually"
    ))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement(SFField, { label: "Street Address", name: "street", placeholder: "123 Trailblazer Way" })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 } }, /* @__PURE__ */ React.createElement(SFField, { label: "City", name: "city", placeholder: "Hyderabad" }), /* @__PURE__ */ React.createElement(SFField, { label: "State / Province", name: "state", placeholder: "Telangana" })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, /* @__PURE__ */ React.createElement(SFField, { label: "Zip / Postal Code", name: "zip", placeholder: "500001" }), /* @__PURE__ */ React.createElement(SFField, { label: "Country", name: "country", placeholder: "India" }))),
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
  ].map(({ label, value }) => /* @__PURE__ */ React.createElement("div", { key: label }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: ".14em", fontFamily: "var(--font-mono)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-mono)", marginTop: 2 } }, value))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: ".14em", fontFamily: "var(--font-mono)" } }, "STATUS"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#4ADE80", fontFamily: "var(--font-mono)", marginTop: 2, animation: "readyBlink 2.2s ease-in-out infinite" } }, "\u25CF READY")))), /* @__PURE__ */ React.createElement(ContactMap, { token: mapplsToken }), /* @__PURE__ */ React.createElement(ContactCard, { icon: "mail", label: "Email", value: "yusufkhantrailblazer@gmail.com", cta: "Compose", href: "mailto:yusufkhantrailblazer@gmail.com" }), /* @__PURE__ */ React.createElement(ContactCard, { icon: "linkedin", label: "LinkedIn", value: "/in/yusufkhan2546", cta: "Connect", href: "https://www.linkedin.com/in/yusufkhan2546" }), /* @__PURE__ */ React.createElement(ContactCard, { icon: "trail", label: "Trailblazer profile", value: "yusufkhan2546", cta: "View badges", href: "https://www.salesforce.com/trailblazer/yusufkhan2546" }), /* @__PURE__ */ React.createElement(ContactCard, { icon: "whatsapp", label: "WhatsApp", value: "+91 9100652546", cta: "Chat", href: "https://wa.me/919100652546" }), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "linear-gradient(135deg, var(--sf-navy), #0A1B3C)", color: "white" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 } }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 18, color: "var(--sf-blue)" }), /* @__PURE__ */ React.createElement("strong", { style: { fontFamily: "var(--font-display)", fontSize: 18 } }, "Resume \u2014 2026")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13.5, color: "rgba(255,255,255,.7)", marginBottom: 16 } }, "One-page summary, certifications appendix, two reference case studies."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("a", { href: "assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf", download: "Yusuf_Khan_Salesforce_Developer_Resume.pdf", className: "btn primary hoverable", style: { background: "var(--sf-blue)", textDecoration: "none" } }, "Download PDF ", /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 14 })))))), /* @__PURE__ */ React.createElement("div", { className: "card availability-strip", style: { marginTop: 40, padding: 28, borderRadius: 22, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 14, height: 14, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 14, height: 14, borderRadius: 99, background: "var(--sf-success)", animation: "bleep 1.8s ease-in-out infinite" } }), /* @__PURE__ */ React.createElement("style", null, `@keyframes bleep { 0%,100%{opacity:1; box-shadow:0 0 6px var(--sf-success);} 50%{opacity:0.4; box-shadow:0 0 14px var(--sf-success);} }`)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", { style: { fontFamily: "var(--font-display)", fontSize: 20 } }, "Available for new engagements"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-2)", fontSize: 14, marginTop: 2 } }, "Best fit: lead developer, architect-in-residence, or Salesforce AI strategy engagements.")), /* @__PURE__ */ React.createElement("button", { className: "btn dark hoverable avail-btn", onClick: () => go("home") }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 14 }), " Back to top")))));
}
function ContactCard({ icon, label, value, cta, href }) {
  const isExternal = href && href.startsWith("http");
  return /* @__PURE__ */ React.createElement("a", { href: href || "#", target: isExternal ? "_blank" : void 0, rel: isExternal ? "noopener noreferrer" : void 0, onClick: (e) => !href && e.preventDefault(), className: "card hoverable", style: { padding: 18, borderRadius: 16, display: "flex", alignItems: "center", gap: 14, color: "var(--ink)", textDecoration: "none" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 40, borderRadius: 12, background: "var(--accent)", display: "grid", placeItems: "center", color: "var(--accent-deep)" } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-2)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14.5, fontWeight: 600, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, value)), cta && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "var(--accent)" } }, cta, " \u2192"));
}
const loadResource = (url, type, callback) => {
  const selector = type === "css" ? `link[href="${url}"]` : `script[src="${url}"]`;
  if (document.querySelector(selector)) {
    if (callback) callback();
    return;
  }
  const el = document.createElement(type === "css" ? "link" : "script");
  if (type === "css") {
    el.rel = "stylesheet";
    el.href = url;
  } else {
    el.src = url;
    el.async = true;
  }
  el.onload = () => callback && callback();
  el.onerror = () => console.error(`Error loading resource: ${url}`);
  document.head.appendChild(el);
};
function ContactMap({ token }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapType, setMapType] = useState("loading");
  useEffect(() => {
    let active = true;
    const initMap = () => {
      if (!mapContainerRef.current) return;
      if (mapInstanceRef.current) {
        try {
          if (typeof mapInstanceRef.current.remove === "function") {
            mapInstanceRef.current.remove();
          } else if (typeof mapInstanceRef.current.destroy === "function") {
            mapInstanceRef.current.destroy();
          }
        } catch (e) {
          console.warn("Error cleaning up map instance:", e);
        }
        mapInstanceRef.current = null;
      }
      const lat = 17.385;
      const lng = 78.4867;
      if (token) {
        setMapType("loading");
        loadResource("https://sdk.mappls.com/map/sdk/web?v=3.0&access_token=" + token, "js", () => {
          if (!active) return;
          if (window.mappls && window.mappls.Map) {
            try {
              const map = new window.mappls.Map(mapContainerRef.current, {
                center: [lat, lng],
                zoom: 11,
                zoomControl: true,
                hybrid: false
              });
              mapInstanceRef.current = map;
              new window.mappls.Marker({
                map,
                position: { lat, lng },
                popupHtml: '<div style="color:#111;padding:5px;font-family:sans-serif;font-size:12px;"><strong>Hyderabad Base</strong><br/>Salesforce Operations</div>'
              });
              setMapType("mappls");
            } catch (err) {
              console.error("MapmyIndia Map Init Error:", err);
              loadLeafletFallback();
            }
          } else {
            loadLeafletFallback();
          }
        });
      } else {
        loadLeafletFallback();
      }
    };
    const loadLeafletFallback = () => {
      setMapType("loading");
      loadResource("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", "css", () => {
        loadResource("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", "js", () => {
          if (!active) return;
          if (window.L) {
            try {
              const map = window.L.map(mapContainerRef.current, {
                center: [17.385, 78.4867],
                zoom: 11,
                zoomControl: false
              });
              mapInstanceRef.current = map;
              window.L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CartoDB</a>',
                subdomains: "abcd",
                maxZoom: 20
              }).addTo(map);
              const pulseIcon = window.L.divIcon({
                className: "custom-map-marker",
                html: '<div class="marker-pulse-wrapper"><div class="marker-pin"></div><div class="marker-pulse"></div></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
              });
              const marker = window.L.marker([17.385, 78.4867], { icon: pulseIcon }).addTo(map);
              marker.bindPopup('<div style="color:var(--bg);font-family:var(--font-body);font-size:12px;font-weight:600;min-width:110px;">\u{1F4CD} Operations Base<br/>Hyderabad, India</div>');
              setMapType("leaflet");
            } catch (err) {
              console.error("Leaflet Init Error:", err);
              setMapType("error");
            }
          } else {
            setMapType("error");
          }
        });
      });
    };
    initMap();
    return () => {
      active = false;
      if (mapInstanceRef.current) {
        try {
          if (typeof mapInstanceRef.current.remove === "function") {
            mapInstanceRef.current.remove();
          } else if (typeof mapInstanceRef.current.destroy === "function") {
            mapInstanceRef.current.destroy();
          }
        } catch (e) {
          console.warn("Cleanup error:", e);
        }
      }
    };
  }, [token]);
  return /* @__PURE__ */ React.createElement("div", { className: "card", style: {
    overflow: "hidden",
    border: "1px solid var(--line)",
    borderRadius: 16,
    background: "var(--card)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "14px 18px",
    borderBottom: "1px solid var(--line-2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: mapType === "error" ? "#EF4444" : "var(--sf-blue)",
    boxShadow: mapType === "error" ? "0 0 8px #EF4444" : "0 0 8px var(--sf-blue)",
    display: "inline-block"
  } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 13, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--ink)" } }, "Operations Base")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)" } }, "17.3850\xB0 N, 78.4867\xB0 E")), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 200, background: "#060b22" } }, /* @__PURE__ */ React.createElement("div", { ref: mapContainerRef, style: { width: "100%", height: "100%" } }), mapType === "loading" && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "rgba(6,11,34,0.8)",
    display: "grid",
    placeItems: "center",
    color: "var(--ink-2)",
    fontSize: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "spinner-loader" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, "Synchronizing Map Coordinates..."))), mapType === "error" && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "rgba(6,11,34,0.95)",
    display: "grid",
    placeItems: "center",
    color: "#EF4444",
    fontSize: 12,
    padding: 20,
    textAlign: "center"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, marginBottom: 6 } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("strong", null, "Failed to initialize map client."), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-3)", marginTop: 4 } }, "Check your network connection or console logs.")))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "8px 16px",
    background: "rgba(255,255,255,0.02)",
    borderTop: "1px solid var(--line-2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 11
  } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-2)" } }, mapType === "mappls" ? "\u{1F4E1} MapmyIndia Web SDK (Live)" : "\u{1F4E1} CartoDB Dark (Leaflet Fallback)"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--sf-success)", fontWeight: 600 } }, "\u25CF SECURE")), /* @__PURE__ */ React.createElement("style", null, `
        .spinner-loader {
          width: 20px; height: 20px;
          border: 2px solid rgba(255,255,255,0.1);
          border-top-color: var(--sf-blue);
          border-radius: 50%;
          animation: spinMap 1s linear infinite;
          margin: 0 auto;
        }
        @keyframes spinMap { to { transform: rotate(360deg); } }

        .marker-pulse-wrapper {
          position: relative; width: 20px; height: 20px;
        }
        .marker-pin {
          width: 10px; height: 10px;
          border-radius: 50%; background: var(--sf-blue);
          border: 2px solid white;
          box-shadow: 0 0 4px rgba(0,0,0,0.5);
          position: absolute; top: 5px; left: 5px;
          z-index: 10;
        }
        .marker-pulse {
          width: 20px; height: 20px;
          border-radius: 50%; background: rgba(0,161,224,0.4);
          position: absolute; top: 0; left: 0;
          animation: mapPulse 1.8s ease-out infinite;
          z-index: 5;
        }
        @keyframes mapPulse {
          0% { transform: scale(0.4); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .leaflet-popup-content-wrapper {
          background: rgba(10,20,50,0.92) !important;
          backdrop-filter: blur(8px);
          border: 1px solid var(--line) !important;
          border-radius: 8px !important;
          box-shadow: var(--shadow-2) !important;
        }
        .leaflet-popup-content {
          margin: 10px 14px !important;
        }
        .leaflet-popup-tip {
          background: rgba(10,20,50,0.92) !important;
          border: 1px solid var(--line) !important;
          border-top: none; border-left: none;
        }
      `));
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
function ProjectEstimator({ onInquire }) {
  const [service, setService] = useState("agentforce");
  const [scale, setScale] = useState("medium");
  const [duration, setDuration] = useState(2);
  const calcEstimate = useMemo(() => {
    let rate = 150;
    if (service === "agentforce") rate = 170;
    if (service === "vlocity") rate = 160;
    if (service === "lowcode") rate = 120;
    if (service === "apex_lwc") rate = 130;
    let multiplier = scale === "small" ? 0.75 : scale === "medium" ? 1 : 1.6;
    let days = Math.round(duration * 5 * multiplier);
    let total = days * rate;
    return { rate, days, total };
  }, [service, scale, duration]);
  return /* @__PURE__ */ React.createElement("div", { className: "cyber-card", style: { padding: "32px 36px", marginBottom: 60 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "hud-badge" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-dot" }), " INTERACTIVE PROJECT SCOPE ESTIMATOR"), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 22, color: "white", margin: "10px 0 4px" } }, "Estimate Your Project Timeline & Investment")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", background: "rgba(3, 7, 18, 0.8)", padding: "10px 18px", borderRadius: 12, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-2)", textTransform: "uppercase", fontFamily: "var(--font-mono)" } }, "Estimated Investment"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 26, fontWeight: 800, color: "var(--accent)" } }, "$", calcEstimate.total.toLocaleString(), " ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--ink-3)", fontWeight: 500 } }, "(", calcEstimate.days, " dev days)")))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, fontWeight: 700, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".06em", display: "block", marginBottom: 8 } }, "Primary Technical Domain"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: service,
      onChange: (e) => setService(e.target.value),
      style: {
        width: "100%",
        padding: "10px 14px",
        borderRadius: 10,
        background: "rgba(3, 7, 18, 0.9)",
        border: "1px solid var(--line)",
        color: "white",
        fontFamily: "inherit",
        fontSize: 13.5
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "agentforce" }, "\u{1F916} Agentforce AI & Data Cloud ($170/day)"),
    /* @__PURE__ */ React.createElement("option", { value: "vlocity" }, "\u{1F52E} OmniStudio & FSC ($160/day)"),
    /* @__PURE__ */ React.createElement("option", { value: "integration" }, "\u{1F50C} Third-Party REST/SOAP Integrations ($150/day)"),
    /* @__PURE__ */ React.createElement("option", { value: "apex_lwc" }, "\u26A1 Apex & LWC Custom Dev ($130/day)"),
    /* @__PURE__ */ React.createElement("option", { value: "lowcode" }, "\u2699\uFE0F Low-Code Flows & Admin ($120/day)")
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, fontWeight: 700, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".06em", display: "block", marginBottom: 8 } }, "Architecture Scale"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, [["small", "Sprint / Quick MVP"], ["medium", "Standard Build"], ["enterprise", "Enterprise Core"]].map(([k, label]) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: k,
      className: `btn ghost ${scale === k ? "active" : ""}`,
      onClick: () => setScale(k),
      style: {
        flex: 1,
        padding: "8px 6px",
        fontSize: 11.5,
        textTransform: "capitalize",
        borderColor: scale === k ? "var(--accent)" : "var(--line)",
        background: scale === k ? "color-mix(in oklab, var(--accent) 20%, transparent)" : "rgba(255,255,255,0.03)"
      }
    },
    label
  )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 12, fontWeight: 700, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".06em", display: "block", marginBottom: 8 } }, "Estimated Duration: ", duration, " ", duration === 1 ? "Week" : "Weeks"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: 1,
      max: 12,
      value: duration,
      onChange: (e) => setDuration(Number(e.target.value)),
      style: { width: "100%", accentColor: "var(--accent)", margin: "10px 0" }
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: "1px solid var(--line)", paddingTop: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "var(--ink-2)" } }, "\u2714\uFE0F Includes full technical design doc, governor-limit safe code, unit test coverage & post-launch hypercare."), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn primary hoverable",
      onClick: () => onInquire(`Estimated Project: ${service.toUpperCase()} (${calcEstimate.days} days ~ $${calcEstimate.total.toLocaleString()})`),
      style: { padding: "10px 22px", border: "none" }
    },
    "Book Consultation With Estimate ",
    /* @__PURE__ */ React.createElement(Icon, { name: "arrow", size: 15 })
  )));
}
function PageGigs({ go }) {
  const handleSelectGig = (title) => {
    window.__GIG_SELECTION__ = title;
    go("contact");
  };
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { maxWidth: 1200 } }, /* @__PURE__ */ React.createElement("div", { className: "page-head", style: { marginBottom: 48 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), " Services & Gigs"), /* @__PURE__ */ React.createElement("h1", { className: "h-display", style: { fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" } }, "Technical Offerings"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { maxWidth: 640 } }, "High-quality, specialized consulting and implementation packages for your Salesforce platform, billed on a simple day-rate model.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { className: "btn primary hoverable", onClick: () => go("contact"), style: { padding: "14px 28px" } }, "Discuss Custom Project ", /* @__PURE__ */ React.createElement(Icon, { name: "mail", size: 15 })))), /* @__PURE__ */ React.createElement(ProjectEstimator, { onInquire: handleSelectGig }), /* @__PURE__ */ React.createElement("div", { style: {
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


/* ── trailhead/page-lwc-recipes.jsx ── */
/* hooks from shim */
const RECIPE_CODES = {
  charRestrict: {
    html: `<template>
    <lightning-card title="Character Restriction Input" icon-name="custom:custom14">
        <div class="slds-var-m-around_medium">
            <lightning-input 
                type="text" 
                label={label} 
                placeholder={placeholder}
                value={value}
                onkeypress={handleKeyPress}
                oninput={handleInput}>
            </lightning-input>
            <p class="slds-var-m-top_x-small slds-text-color_weak">
                Allowed Profile: {allowedType}
            </p>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, api, track } from 'lwc';

export default class CharRestrictInput extends LightningElement {
    @api label = 'Allowed Character Input';
    @api placeholder = 'Try typing...';
    @api allowedType = 'digits'; // 'digits' | 'alphabetic' | 'alphanumeric' | 'custom'
    @api customRegex = ''; // E.g., '^[a-zA-Z\\\\s]*$'

    @track value = '';

    get regexPattern() {
        if (this.allowedType === 'digits') return /[0-9]/;
        if (this.allowedType === 'alphabetic') return /[a-zA-Z]/;
        if (this.allowedType === 'alphanumeric') return /[a-zA-Z0-9]/;
        if (this.allowedType === 'custom' && this.customRegex) {
            return new RegExp(this.customRegex);
        }
        return null;
    }

    handleKeyPress(event) {
        const pattern = this.regexPattern;
        if (!pattern) return;

        const char = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        // Intercept keypress and block if not matching
        if (!pattern.test(char)) {
            event.preventDefault();
        }
    }

    handleInput(event) {
        const pattern = this.regexPattern;
        if (!pattern) {
            this.value = event.target.value;
            return;
        }

        // Fallback for copy-paste sanitize
        const rawValue = event.target.value;
        let sanitizedValue = '';
        for (let i = 0; i < rawValue.length; i++) {
            if (pattern.test(rawValue[i])) {
                sanitizedValue += rawValue[i];
            }
        }
        this.value = sanitizedValue;
        event.target.value = sanitizedValue; // Force sync back to input element
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Character Restrict Input</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage,lightning__AppPage,lightning__HomePage">
            <property name="label" type="String" default="Allowed Character Input"/>
            <property name="placeholder" type="String" default="Try typing..."/>
            <property name="allowedType" type="String" datasource="digits,alphabetic,alphanumeric,custom" default="digits"/>
            <property name="customRegex" type="String" description="Custom Regex pattern. E.g. ^[a-zA-Z\\s]*$"/>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>`
  },
  intlPhone: {
    html: `<template>
    <lightning-card title="International Phone Input" icon-name="standard:contact">
        <div class="slds-var-m-around_medium">
            <div class="slds-grid slds-gutters">
                <div class="slds-col slds-size_4-of-12">
                    <lightning-combobox
                        name="countryCode"
                        label="Country Code"
                        value={selectedCountry}
                        options={countryOptions}
                        onchange={handleCountryChange}>
                    </lightning-combobox>
                </div>
                <div class="slds-col slds-size_8-of-12">
                    <lightning-input
                        type="tel"
                        name="phone"
                        label={phoneLabel}
                        placeholder={placeholder}
                        value={phoneNumber}
                        pattern={pattern}
                        message-when-pattern-mismatch={errorMessage}
                        oninput={handlePhoneInput}
                        required>
                    </lightning-input>
                </div>
            </div>
            <p class="slds-var-m-top_small">
                Combined Phone Number: <strong>{fullPhoneNumber}</strong>
            </p>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class IntPhoneInput extends LightningElement {
    @track selectedCountry = '+1';
    @track phoneNumber = '';

    countryConfigs = {
        '+1': { placeholder: '(555) 555-5555', format: 'us', label: 'US Phone Number', pattern: '^\\\\(\\\\d{3}\\\\)\\\\s\\\\d{3}-\\\\d{4}$', error: 'Format: (555) 555-5555' },
        '+91': { placeholder: '98765-43210', format: 'in', label: 'IN Phone Number', pattern: '^\\\\d{5}-\\\\d{5}$', error: 'Format: 98765-43210' },
        '+44': { placeholder: '7911 123456', format: 'uk', label: 'UK Mobile Number', pattern: '^\\\\d{4}\\\\s\\\\d{6}$', error: 'Format: 7911 123456' },
        '+61': { placeholder: '412 345 678', format: 'au', label: 'AU Mobile Number', pattern: '^\\\\d{3}\\\\s\\\\d{3}\\\\s\\\\d{3}$', error: 'Format: 412 345 678' }
    };

    get countryOptions() {
        return [
            { label: '\u{1F1FA}\u{1F1F8} United States (+1)', value: '+1' },
            { label: '\u{1F1EE}\u{1F1F3} India (+91)', value: '+91' },
            { label: '\u{1F1EC}\u{1F1E7} United Kingdom (+44)', value: '+44' },
            { label: '\u{1F1E6}\u{1F1FA} Australia (+61)', value: '+61' }
        ];
    }

    get activeConfig() {
        return this.countryConfigs[this.selectedCountry];
    }

    get phoneLabel() { return this.activeConfig.label; }
    get placeholder() { return this.activeConfig.placeholder; }
    get pattern() { return this.activeConfig.pattern; }
    get errorMessage() { return this.activeConfig.error; }

    get fullPhoneNumber() {
        if (!this.phoneNumber) return '';
        return \`\${this.selectedCountry} \${this.phoneNumber}\`;
    }

    handleCountryChange(event) {
        this.selectedCountry = event.detail.value;
        this.phoneNumber = ''; // Reset on country switch
    }

    handlePhoneInput(event) {
        let value = event.target.value.replace(/\\D/g, ''); // strip non-digits
        const format = this.activeConfig.format;

        // Apply masking formatting on inputs dynamically
        if (format === 'us') {
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length > 6) {
                value = \`(\${value.slice(0,3)}) \${value.slice(3,6)}-\${value.slice(6)}\`;
            } else if (value.length > 3) {
                value = \`(\${value.slice(0,3)}) \${value.slice(3)}\`;
            } else if (value.length > 0) {
                value = \`(\${value}\`;
            }
        } else if (format === 'in') {
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length > 5) {
                value = \`\${value.slice(0,5)}-\${value.slice(5)}\`;
            }
        } else if (format === 'uk') {
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length > 4) {
                value = \`\${value.slice(0,4)} \${value.slice(4)}\`;
            }
        } else if (format === 'au') {
            if (value.length > 9) value = value.slice(0, 9);
            if (value.length > 6) {
                value = \`\${value.slice(0,3)} \${value.slice(3,6)} \${value.slice(6)}\`;
            } else if (value.length > 3) {
                value = \`\${value.slice(0,3)} \${value.slice(3)}\`;
            }
        }
        this.phoneNumber = value;
        event.target.value = value;
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>International Phone Input</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__FlowScreen</target>
    </targets>
</LightningComponentBundle>`
  },
  combobox: {
    html: `<template>
    <div class="slds-form-element">
        <label class="slds-form-element__label">{label}</label>
        <div class="slds-form-element__control">
            <div class="slds-combobox_container">
                <div class={comboboxClass} aria-expanded={isDropdownOpen} role="combobox">
                    
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right">
                        <input
                            type="text"
                            class="slds-input slds-combobox__input"
                            placeholder={placeholder}
                            value={searchTerm}
                            disabled={hasSelection}
                            oninput={handleSearchInput}
                            onfocus={handleFocus}
                            onblur={handleBlur}
                        />
                        
                        <span class="slds-icon_container slds-input__icon slds-input__icon_right">
                            <template if:true={hasSelection}>
                                <button class="slds-button slds-button_icon" onclick={handleClearSelection}>
                                    \u2715
                                </button>
                            </template>
                            <template if:false={hasSelection}>
                                \u{1F50D}
                            </template>
                        </span>
                    </div>

                    <!-- Dropdown Panel -->
                    <template if:true={isDropdownOpen}>
                        <div class="slds-dropdown slds-dropdown_fluid" role="listbox">
                            <ul class="slds-listbox slds-listbox_vertical">
                                <template for:each={filteredOptions} var="opt">
                                    <li key={opt.value} class="slds-listbox__item" onmousedown={handleOptionSelect} data-value={opt.value} data-label={opt.label}>
                                        <div class="slds-media slds-listbox__option slds-media_center">
                                            <span class="slds-media__body">
                                                <span class="slds-listbox__option-text">{opt.label}</span>
                                            </span>
                                        </div>
                                    </li>
                                </template>
                                <template if:false={filteredOptions.length}>
                                    <li class="slds-align_absolute-center slds-p-around_small slds-text-color_weak">
                                        No matches found.
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>`,
    js: `import { LightningElement, api, track } from 'lwc';

export default class SearchableCombobox extends LightningElement {
    @api label = 'Search Accounts';
    @api placeholder = 'Search here...';
    @api options = [
        { label: 'Acme Corp', value: 'acme' },
        { label: 'Salesforce Inc', value: 'salesforce' },
        { label: 'Google LLC', value: 'google' },
        { label: 'Apple Inc', value: 'apple' },
        { label: 'Amazon.com', value: 'amazon' }
    ];

    @track searchTerm = '';
    @track selectedValue = '';
    @track isDropdownOpen = false;

    get hasSelection() {
        return !!this.selectedValue;
    }

    get comboboxClass() {
        return \`slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click \${this.isDropdownOpen ? 'slds-is-open' : ''}\`;
    }

    get filteredOptions() {
        if (!this.searchTerm) return this.options;
        const searchKey = this.searchTerm.toLowerCase();
        return this.options.filter(opt => opt.label.toLowerCase().includes(searchKey));
    }

    handleSearchInput(event) {
        this.searchTerm = event.target.value;
    }

    handleFocus() {
        if (!this.hasSelection) {
            this.isDropdownOpen = true;
        }
    }

    handleBlur() {
        // Delay close slightly so mousedown selection has time to execute
        setTimeout(() => {
            this.isDropdownOpen = false;
        }, 200);
    }

    handleOptionSelect(event) {
        const targetValue = event.currentTarget.dataset.value;
        const targetLabel = event.currentTarget.dataset.label;
        this.selectedValue = targetValue;
        this.searchTerm = targetLabel;
        this.isDropdownOpen = false;

        this.dispatchEvent(new CustomEvent('select', { 
            detail: { value: targetValue, label: targetLabel } 
        }));
    }

    handleClearSelection(event) {
        event.stopPropagation();
        this.selectedValue = '';
        this.searchTerm = '';
        this.isDropdownOpen = false;
        
        this.dispatchEvent(new CustomEvent('select', { 
            detail: { value: '', label: '' } 
        }));
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Searchable Combobox</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
    </targets>
</LightningComponentBundle>`
  },
  addressCascade: {
    html: `<template>
    <lightning-card title="Address Form" icon-name="standard:address">
        <div class="slds-var-p-around_medium">
            <div class="slds-grid slds-wrap slds-gutters">
                <div class="slds-col slds-size_1-of-1 slds-var-m-bottom_small">
                    <lightning-combobox
                        name="country"
                        label="Country"
                        value={address.country}
                        options={countryOptions}
                        onchange={handleCountryChange}
                        required>
                    </lightning-combobox>
                </div>
                <div class="slds-col slds-size_1-of-1 slds-var-m-bottom_small">
                    <lightning-input
                        name="street1"
                        label="Street Address Line 1"
                        value={address.street1}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_1-of-1 slds-var-m-bottom_small">
                    <lightning-input
                        name="street2"
                        label="Street Address Line 2"
                        value={address.street2}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_6-of-12 slds-var-m-bottom_small">
                    <lightning-input
                        name="city"
                        label="City"
                        value={address.city}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_3-of-12 slds-var-m-bottom_small">
                    <lightning-input
                        name="state"
                        label="State"
                        value={address.state}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
                <div class="slds-col slds-size_3-of-12 slds-var-m-bottom_small">
                    <lightning-input
                        name="zip"
                        label="ZIP Code"
                        value={address.zip}
                        onchange={handleInputChange}
                        disabled={isFormDisabled}>
                    </lightning-input>
                </div>
            </div>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class CascadingAddress extends LightningElement {
    @track address = {
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    };

    get countryOptions() {
        return [
            { label: 'United States', value: 'US' },
            { label: 'India', value: 'IN' },
            { label: 'Canada', value: 'CA' },
            { label: 'United Kingdom', value: 'UK' }
        ];
    }

    get isFormDisabled() {
        return !this.address.country;
    }

    handleCountryChange(event) {
        const nextCountry = event.detail.value;
        const prevCountry = this.address.country;

        // Reset address parameters if country updates
        if (nextCountry !== prevCountry) {
            this.address = {
                street1: '',
                street2: '',
                city: '',
                state: '',
                zip: '',
                country: nextCountry
            };
        }
    }

    handleInputChange(event) {
        const fieldName = event.target.name;
        this.address[fieldName] = event.target.value;
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Cascading Address Form</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>`
  },
  patternInput: {
    html: `<template>
    <lightning-card title="Dynamic Validation Field" icon-name="standard:reward">
        <div class="slds-var-m-around_medium">
            <lightning-combobox
                label="Verification Document"
                value={selectedDocType}
                options={docOptions}
                onchange={handleDocTypeChange}
                class="slds-var-m-bottom_medium">
            </lightning-combobox>

            <lightning-input
                name="documentInput"
                label={activeConfig.label}
                placeholder={activeConfig.placeholder}
                value={inputValue}
                pattern={activeConfig.pattern}
                message-when-pattern-mismatch={activeConfig.errorMessage}
                oninput={handleInput}
                field-level-help={activeConfig.guidance}
                required>
            </lightning-input>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class DynamicPatternInput extends LightningElement {
    @track selectedDocType = 'aadhar';
    @track inputValue = '';

    docConfigs = {
        aadhar: {
            label: 'Aadhar Card Number',
            placeholder: '1234-5678-9012',
            pattern: '^\\\\d{4}-\\\\d{4}-\\\\d{4}$',
            guidance: '12 digits divided by hyphens (-) after every 4 digits.',
            errorMessage: 'Format must be: XXXX-XXXX-XXXX (12 digits total)',
            format: 'aadhar'
        },
        passport: {
            label: 'Passport Code',
            placeholder: 'A1234567',
            pattern: '^[A-Z][0-9]{7}$',
            guidance: '1 capital letter followed by exactly 7 digits.',
            errorMessage: 'Format must start with 1 letter and follow with 7 numbers',
            format: 'passport'
        },
        ssn: {
            label: 'US SSN',
            placeholder: 'XXX-XX-XXXX',
            pattern: '^\\\\d{3}-\\\\d{2}-\\\\d{4}$',
            guidance: '9 digits divided as XXX-XX-XXXX with hyphens.',
            errorMessage: 'SSN format must be: XXX-XX-XXXX',
            format: 'ssn'
        }
    };

    get docOptions() {
        return [
            { label: 'Aadhar Card (India)', value: 'aadhar' },
            { label: 'Passport (Global)', value: 'passport' },
            { label: 'SSN (United States)', value: 'ssn' }
        ];
    }

    get activeConfig() {
        return this.docConfigs[this.selectedDocType];
    }

    handleDocTypeChange(event) {
        this.selectedDocType = event.detail.value;
        this.inputValue = ''; // Clear input on switch
    }

    handleInput(event) {
        let value = event.target.value;
        const format = this.activeConfig.format;

        // Perform formatting on the fly
        if (format === 'aadhar') {
            value = value.replace(/\\D/g, '');
            if (value.length > 12) value = value.slice(0, 12);
            if (value.length > 8) {
                value = \`\${value.slice(0, 4)}-\${value.slice(4, 8)}-\\d\${value.slice(8)}\`;
            } else if (value.length > 4) {
                value = \`\${value.slice(0, 4)}-\${value.slice(4)}\`;
            }
        } else if (format === 'ssn') {
            value = value.replace(/\\D/g, '');
            if (value.length > 9) value = value.slice(0, 9);
            if (value.length > 5) {
                value = \`\${value.slice(0, 3)}-\${value.slice(3, 5)}-\${value.slice(5)}\`;
            } else if (value.length > 3) {
                value = \`\${value.slice(0, 3)}-\\d\${value.slice(3)}\`;
            }
        } else if (format === 'passport') {
            let clean = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
            if (clean.length > 8) clean = clean.slice(0, 8);
            let formatted = '';
            if (clean.length > 0) {
                const first = clean[0];
                if (/[A-Z]/.test(first)) {
                    formatted = first + clean.slice(1).replace(/\\D/g, '');
                }
            }
            value = formatted;
        }

        this.inputValue = value;
        event.target.value = value;
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Dynamic Pattern Input</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>`
  },
  sameAsCheckbox: {
    html: `<template>
    <lightning-card title="Fields Sync Control" icon-name="standard:checkbox">
        <div class="slds-var-m-around_medium">
            <lightning-input
                name="primary"
                label="Primary Nationality"
                value={primaryValue}
                oninput={handlePrimaryChange}>
            </lightning-input>

            <lightning-input
                type="checkbox"
                label="Secondary Nationality is Same as Primary"
                checked={isSame}
                onchange={handleCheckboxChange}
                disabled={isCheckboxDisabled}
                class="slds-var-m-vertical_small">
            </lightning-input>

            <lightning-input
                name="secondary"
                label="Secondary Nationality"
                value={secondaryValue}
                oninput={handleSecondaryChange}>
            </lightning-input>
        </div>
    </lightning-card>
</template>`,
    js: `import { LightningElement, track } from 'lwc';

export default class AddressCopySync extends LightningElement {
    @track primaryValue = '';
    @track secondaryValue = '';
    @track isSame = false;

    get isCheckboxDisabled() {
        return !this.primaryValue;
    }

    handlePrimaryChange(event) {
        this.primaryValue = event.target.value;
        
        // Sync values if checkbox is active
        if (this.isSame) {
            this.secondaryValue = this.primaryValue;
            if (!this.primaryValue) {
                this.isSame = false;
            }
        }
    }

    handleCheckboxChange(event) {
        this.isSame = event.target.checked;
        if (this.isSame) {
            this.secondaryValue = this.primaryValue;
        }
    }

    handleSecondaryChange(event) {
        this.secondaryValue = event.target.value;
        
        // Break sync if target field is edited manually
        if (this.isSame && this.secondaryValue !== this.primaryValue) {
            this.isSame = false;
        }
    }
}`,
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>60.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>Fields Sync Control</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>`
  }
};
function PageLwcRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("charRestrict");
  const [activeTab, setActiveTab] = useState("html");
  const [copied, setCopied] = useState(false);
  const [restrictProfile, setRestrictProfile] = useState("digits");
  const [customRegex, setCustomRegex] = useState("^[a-zA-Z\\s]*$");
  const [sandbox1Val, setSandbox1Val] = useState("");
  const [sandbox1Logs, setSandbox1Logs] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("+1");
  const [phoneVal, setPhoneVal] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedObject, setSelectedObject] = useState("");
  const comboboxOptions = [
    { label: "Account", value: "Account", desc: "Standard customer or business record" },
    { label: "Contact", value: "Contact", desc: "Person associated with an account" },
    { label: "Opportunity", value: "Opportunity", desc: "Sales deal or tracking item" },
    { label: "Lead", value: "Lead", desc: "Prospect before qualification" },
    { label: "Case", value: "Case", desc: "Customer support ticket" },
    { label: "Campaign", value: "Campaign", desc: "Marketing initiative" },
    { label: "User", value: "User", desc: "System user profile" },
    { label: "Asset", value: "Asset", desc: "Purchased items track" }
  ];
  const [address, setAddress] = useState({
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });
  const [addressLogs, setAddressLogs] = useState([]);
  const [docType, setDocType] = useState("aadhar");
  const [docVal, setDocVal] = useState("");
  const [docError, setDocError] = useState("");
  const [primaryNat, setPrimaryNat] = useState("");
  const [secondaryNat, setSecondaryNat] = useState("");
  const [isSameNat, setIsSameNat] = useState(false);
  const [syncLogs, setSyncLogs] = useState([]);
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);
  const copyCode = () => {
    const codeText = RECIPE_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  const getRegex = () => {
    if (restrictProfile === "digits") return /[0-9]/;
    if (restrictProfile === "alphabetic") return /[a-zA-Z]/;
    if (restrictProfile === "alphanumeric") return /[a-zA-Z0-9]/;
    if (restrictProfile === "custom") {
      try {
        return new RegExp(customRegex);
      } catch (e) {
        return null;
      }
    }
    return null;
  };
  const handleSandbox1KeyPress = (e) => {
    const rx = getRegex();
    if (!rx) return;
    const char = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!rx.test(char)) {
      e.preventDefault();
      addLog(`\u{1F6AB} Blocked keypress: "${char}" (Fails to match pattern)`);
    } else {
      addLog(`\u2705 Allowed keypress: "${char}"`);
    }
  };
  const handleSandbox1Input = (e) => {
    const rx = getRegex();
    if (!rx) {
      setSandbox1Val(e.target.value);
      return;
    }
    const rawVal = e.target.value;
    let clean = "";
    let blockedCount = 0;
    for (let char of rawVal) {
      if (rx.test(char)) {
        clean += char;
      } else {
        blockedCount++;
      }
    }
    if (blockedCount > 0) {
      addLog(`\u2702\uFE0F Sanitized input: Filtered out ${blockedCount} invalid characters.`);
    }
    setSandbox1Val(clean);
  };
  const addLog = (msg) => {
    setSandbox1Logs((prev) => [msg, ...prev.slice(0, 7)]);
  };
  const countryConfigs = {
    "+1": { placeholder: "(555) 555-5555", format: "us", label: "US Phone Number", pattern: /^\(\d{3}\)\s\d{3}-\d{4}$/, error: "Format must be (555) 555-5555" },
    "+91": { placeholder: "98765-43210", format: "in", label: "IN Phone Number", pattern: /^\d{5}-\d{5}$/, error: "Format must be 5 digits, hyphen, 5 digits (98765-43210)" },
    "+44": { placeholder: "7911 123456", format: "uk", label: "UK Mobile Number", pattern: /^\d{4}\s\d{6}$/, error: "Format must be 4 digits, space, 6 digits (7911 123456)" },
    "+61": { placeholder: "412 345 678", format: "au", label: "AU Mobile Number", pattern: /^\d{3}\s\d{3}\s\d{3}$/, error: "Format must be 3 digits, space, 3 digits, space, 3 digits (412 345 678)" }
  };
  const activePhoneConfig = countryConfigs[selectedCountry];
  const handleCountryChange = (val) => {
    setSelectedCountry(val);
    setPhoneVal("");
    setPhoneError("");
  };
  const handlePhoneValChange = (e) => {
    let raw = e.target.value.replace(/\D/g, "");
    const format = activePhoneConfig.format;
    let formatted = raw;
    if (format === "us") {
      if (raw.length > 10) raw = raw.slice(0, 10);
      if (raw.length > 6) {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`;
      } else if (raw.length > 3) {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
      } else if (raw.length > 0) {
        formatted = `(${raw}`;
      }
    } else if (format === "in") {
      if (raw.length > 10) raw = raw.slice(0, 10);
      if (raw.length > 5) {
        formatted = `${raw.slice(0, 5)}-${raw.slice(5)}`;
      }
    } else if (format === "uk") {
      if (raw.length > 10) raw = raw.slice(0, 10);
      if (raw.length > 4) {
        formatted = `${raw.slice(0, 4)} ${raw.slice(4)}`;
      }
    } else if (format === "au") {
      if (raw.length > 9) raw = raw.slice(0, 9);
      if (raw.length > 6) {
        formatted = `${raw.slice(0, 3)} ${raw.slice(3, 6)} ${raw.slice(6)}`;
      } else if (raw.length > 3) {
        formatted = `${raw.slice(0, 3)} ${raw.slice(3)}`;
      }
    }
    setPhoneVal(formatted);
    if (formatted && !activePhoneConfig.pattern.test(formatted)) {
      setPhoneError(activePhoneConfig.error);
    } else {
      setPhoneError("");
    }
  };
  const filteredComboboxOptions = comboboxOptions.filter(
    (opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSelectObject = (opt) => {
    setSelectedObject(opt.label);
    setSearchTerm(opt.label);
    setSearchOpen(false);
  };
  const handleClearObject = () => {
    setSelectedObject("");
    setSearchTerm("");
    setSearchOpen(false);
  };
  const handleCountryAddressChange = (e) => {
    const nextCountry = e.target.value;
    const prevCountry = address.country;
    if (nextCountry !== prevCountry) {
      setAddress({
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        country: nextCountry
      });
      setAddressLogs((prev) => [
        `\u26A0\uFE0F Country changed from "${prevCountry || "None"}" to "${nextCountry}". Cascade reset: Clearing all fields to null!`,
        ...prev
      ]);
    }
  };
  const handleAddressFieldChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };
  const docConfigs = {
    aadhar: {
      label: "Aadhar Number",
      placeholder: "1234-5678-9012",
      pattern: /^\d{4}-\d{4}-\d{4}$/,
      guidance: "Must be a 12-digit number separated by hyphens after every 4 digits.",
      errorMessage: "Format must be XXXX-XXXX-XXXX (12 digits total)",
      format: "aadhar"
    },
    passport: {
      label: "Passport Number",
      placeholder: "A1234567",
      pattern: /^[A-Z][0-9]{7}$/,
      guidance: "Starts with 1 uppercase alphabet letter followed by exactly 7 numbers.",
      errorMessage: "Must start with a capital letter followed by 7 digits (e.g., K9876543)",
      format: "passport"
    },
    ssn: {
      label: "Social Security Number (SSN)",
      placeholder: "XXX-XX-XXXX",
      pattern: /^\d{3}-\d{2}-\d{4}$/,
      guidance: "Must be a 9-digit US SSN formatted with hyphens.",
      errorMessage: "Format must be XXX-XX-XXXX",
      format: "ssn"
    }
  };
  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
    setDocVal("");
    setDocError("");
  };
  const handleDocValChange = (e) => {
    let value = e.target.value;
    const cfg = docConfigs[docType];
    if (cfg.format === "aadhar") {
      value = value.replace(/\D/g, "");
      if (value.length > 12) value = value.slice(0, 12);
      if (value.length > 8) {
        value = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(8)}`;
      } else if (value.length > 4) {
        value = `${value.slice(0, 4)}-${value.slice(4)}`;
      }
    } else if (cfg.format === "ssn") {
      value = value.replace(/\D/g, "");
      if (value.length > 9) value = value.slice(0, 9);
      if (value.length > 5) {
        value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
      } else if (value.length > 3) {
        value = `${value.slice(0, 3)}-${value.slice(3)}`;
      }
    } else if (cfg.format === "passport") {
      let clean = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (clean.length > 8) clean = clean.slice(0, 8);
      let formatted = "";
      if (clean.length > 0) {
        const first = clean[0];
        if (/[A-Z]/.test(first)) {
          formatted = first + clean.slice(1).replace(/\D/g, "");
        }
      }
      value = formatted;
    }
    setDocVal(value);
    if (value && !cfg.pattern.test(value)) {
      setDocError(cfg.errorMessage);
    } else {
      setDocError("");
    }
  };
  const handlePrimaryNatChange = (e) => {
    const val = e.target.value;
    setPrimaryNat(val);
    setSyncLogs((prev) => [`\u{1F4DD} Updated Primary Nationality to: "${val}"`, ...prev]);
    if (isSameNat) {
      setSecondaryNat(val);
      if (!val) {
        setIsSameNat(false);
        setSyncLogs((prev) => [`\u26A0\uFE0F Primary Nationality is empty. Checking 'Same As' has been auto-disabled.`, ...prev]);
      } else {
        setSyncLogs((prev) => [`\u{1F504} Checkbox active: Automatically synced Secondary to "${val}"`, ...prev]);
      }
    }
  };
  const handleSameCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsSameNat(checked);
    setSyncLogs((prev) => [`Toggle checkbox: Same as Primary is now: ${checked ? "CHECKED" : "UNCHECKED"}`, ...prev]);
    if (checked) {
      setSecondaryNat(primaryNat);
    }
  };
  const handleSecondaryNatChange = (e) => {
    const val = e.target.value;
    setSecondaryNat(val);
    setSyncLogs((prev) => [`\u{1F4DD} Manual edit on Secondary Nationality: "${val}"`, ...prev]);
    if (isSameNat && val !== primaryNat) {
      setIsSameNat(false);
      setSyncLogs((prev) => [`\u{1F6A8} Auto-uncheck: Secondary input edited manually. Sync broken!`, ...prev]);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 } }, "LWC Recipes Directory"), [
    { id: "charRestrict", name: "1. Character Limit Input", desc: "Real-time character keystroke blocker" },
    { id: "intlPhone", name: "2. International Phone", desc: "Linked dropdown country code formatting" },
    { id: "combobox", name: "3. Searchable Combobox", desc: "Interactive filtering object combobox" },
    { id: "addressCascade", name: "4. Address Field Reset", desc: "Country-driven cascading form reset" },
    { id: "patternInput", name: "5. Dynamic Guidance Input", desc: "Verification formats with regex mask" },
    { id: "sameAsCheckbox", name: "6. Address Copy Sync", desc: "Auto-uncheck two-way clone sync" }
  ].map((rec) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: rec.id,
      onClick: () => setSelectedRecipe(rec.id),
      className: "hoverable",
      style: {
        textAlign: "left",
        padding: "14px 18px",
        background: selectedRecipe === rec.id ? "rgba(0,161,224,0.08)" : "rgba(255,255,255,0.02)",
        border: "1px solid " + (selectedRecipe === rec.id ? "var(--accent)" : "var(--line)"),
        borderRadius: 14,
        color: selectedRecipe === rec.id ? "white" : "var(--ink-2)",
        cursor: "pointer",
        transition: "all 0.2s"
      }
    },
    /* @__PURE__ */ React.createElement("strong", { style: { display: "block", fontSize: 13.5, marginBottom: 4 } }, rec.name),
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: selectedRecipe === rec.id ? "var(--accent-deep)" : "var(--ink-3)" } }, rec.desc)
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(10,18,48,0.25)", border: "1px solid var(--line)", padding: 24, borderRadius: 18 } }, selectedRecipe === "charRestrict" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Character Filter Input"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Blocks invalid keystrokes dynamically on ", /* @__PURE__ */ React.createElement("code", null, "keypress"), " or ", /* @__PURE__ */ React.createElement("code", null, "input"), " before they can even be entered in the HTML DOM. Prevents incorrect formats (e.g. typing letters in a numeric-only field or typing special characters in a name field) and handles paste sanitization.")), selectedRecipe === "intlPhone" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "International Phone Input"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Pairs a country dialing code dropdown selector directly with a telephone text input. Changing the dialing code dynamically alters the input's placeholder, pattern validation expression, and label, while custom Javascript dynamically formats the phone number format (e.g., auto-wrapping US numbers in parentheses or placing hyphens on Indian numbers).")), selectedRecipe === "combobox" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Searchable Combobox"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Builds a fully functional custom combobox dropdown with live filtering capabilities. Includes support for mouse clicks, clearing selections, search result overlays, and empty-state placeholders. Perfect for large dropdown selection menus.")), selectedRecipe === "addressCascade" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Address Form Cascade Reset"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "A complex form validation design: Address fields remain locked until a Country is chosen. If a user has entered address details (City, State, Zip) and subsequently changes the Country value, the entire address fields are reset to null. This prevents conflicting locations in database records.")), selectedRecipe === "patternInput" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Dynamic Pattern & Validation"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Loads structural properties (Labels, Regex Patterns, Guidance help text, Custom validations) dynamically into a single input field. Based on document selector value (Aadhar Card, US SSN, Global Passport), the input dynamically checks input pattern validation and executes dynamic input masks like auto-hyphenation.")), selectedRecipe === "sameAsCheckbox" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Address Copy Sync Checkbox"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Implements a checkbox that replicates value bindings (e.g., Shipping Address same as Billing, or Secondary Nationality same as Primary). If the checkbox is clicked, it clones values. If the user later edits either the source or the target field, the sync is broken, and the checkbox automatically unchecks itself."))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" } }, "\u26A1 INTERACTIVE SANDBOX"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 } }, "LWC SIMULATOR")), selectedRecipe === "charRestrict" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Allowed Profile Configuration"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: restrictProfile,
      onChange: (e) => {
        setRestrictProfile(e.target.value);
        setSandbox1Val("");
      },
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "digits" }, "Digits Only ([0-9])"),
    /* @__PURE__ */ React.createElement("option", { value: "alphabetic" }, "Alphabetic Only ([a-zA-Z])"),
    /* @__PURE__ */ React.createElement("option", { value: "alphanumeric" }, "Alphanumeric ([a-zA-Z0-9])"),
    /* @__PURE__ */ React.createElement("option", { value: "custom" }, "Custom Regex Pattern (Advanced)")
  )), restrictProfile === "custom" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Custom JS Regex Character Set"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: customRegex,
      onChange: (e) => {
        setCustomRegex(e.target.value);
        setSandbox1Val("");
      },
      placeholder: "e.g. ^[a-zA-Z\\s]*$",
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        fontFamily: "var(--font-mono)",
        outline: "none"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 16 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13.5, fontWeight: 600, color: "white", marginBottom: 6 } }, "Restrictive Input Box"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: sandbox1Val,
      onKeyPress: handleSandbox1KeyPress,
      onInput: handleSandbox1Input,
      placeholder: "Try typing inside...",
      style: {
        width: "100%",
        padding: "12px 16px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--line)",
        borderRadius: 10,
        color: "white",
        fontSize: 15,
        outline: "none"
      }
    }
  ), /* @__PURE__ */ React.createElement("small", { style: { display: "block", marginTop: 6, color: "var(--ink-3)", fontSize: 11 } }, "Active Regex: ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", color: "var(--accent)" } }, getRegex() ? getRegex().toString() : "None"))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    padding: 12,
    fontFamily: "var(--font-mono)",
    height: 120,
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 } }, "SIMULATOR CONSOLE LOG"), sandbox1Logs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "rgba(244,248,255,0.25)" } }, "Keystrokes telemetry will show up here.") : sandbox1Logs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { fontSize: 11, color: log.includes("Blocked") ? "#e74c3c" : "#2ecc71", marginBottom: 4 } }, log)))), selectedRecipe === "intlPhone" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Country Code"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: selectedCountry,
      onChange: (e) => handleCountryChange(e.target.value),
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "+1" }, "\u{1F1FA}\u{1F1F8} US (+1)"),
    /* @__PURE__ */ React.createElement("option", { value: "+91" }, "\u{1F1EE}\u{1F1F3} IN (+91)"),
    /* @__PURE__ */ React.createElement("option", { value: "+44" }, "\u{1F1EC}\u{1F1E7} UK (+44)"),
    /* @__PURE__ */ React.createElement("option", { value: "+61" }, "\u{1F1E6}\u{1F1FA} AU (+61)")
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, activePhoneConfig.label), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: phoneVal,
      onChange: handlePhoneValChange,
      placeholder: activePhoneConfig.placeholder,
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid " + (phoneError ? "#e74c3c" : "var(--line)"),
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    }
  ))), phoneError && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "#e74c3c", display: "flex", alignItems: "center", gap: 6 } }, "\u26A0\uFE0F ", phoneError), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 14, fontSize: 13.5 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-3)" } }, "LWC Combined Output:"), " ", /* @__PURE__ */ React.createElement("strong", { style: { color: "white", fontFamily: "var(--font-mono)" } }, phoneVal ? `${selectedCountry} ${phoneVal}` : "(empty)"))), selectedRecipe === "combobox" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Select Salesforce Object"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: searchTerm,
      placeholder: "Type to search objects...",
      disabled: !!selectedObject,
      onFocus: () => setSearchOpen(true),
      onBlur: () => setTimeout(() => setSearchOpen(false), 200),
      onChange: (e) => setSearchTerm(e.target.value),
      style: {
        width: "100%",
        padding: "11px 40px 11px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    }
  ), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: 14, display: "flex", alignItems: "center" } }, selectedObject ? /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleClearObject,
      style: {
        background: "transparent",
        border: "none",
        color: "var(--ink-3)",
        cursor: "pointer",
        fontSize: 14
      }
    },
    "\u2715"
  ) : /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.4, fontSize: 14 } }, "\u{1F50D}"))), searchOpen && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 10,
    background: "var(--card-solid)",
    border: "1px solid var(--line)",
    borderRadius: 8,
    marginTop: 4,
    maxHeight: 180,
    overflowY: "auto",
    boxShadow: "var(--shadow-3)"
  } }, filteredComboboxOptions.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 14px", color: "var(--ink-3)", fontSize: 12.5 } }, "No objects match.") : filteredComboboxOptions.map((opt) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: opt.value,
      onMouseDown: () => handleSelectObject(opt),
      style: {
        padding: "10px 14px",
        cursor: "pointer",
        borderBottom: "1px solid var(--line-2)",
        transition: "background 0.15s"
      },
      className: "hover-bg-line"
    },
    /* @__PURE__ */ React.createElement("div", { style: { color: "white", fontSize: 13.5, fontWeight: 600 } }, opt.label),
    /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-3)", fontSize: 11, marginTop: 2 } }, opt.desc)
  )))), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(0,161,224,0.04)", border: "1px solid rgba(0,161,224,0.1)", borderRadius: 10, padding: 14, fontSize: 13 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-3)" } }, "LWC Selection State:"), " ", /* @__PURE__ */ React.createElement("strong", { style: { color: "var(--accent-deep)", fontFamily: "var(--font-mono)" } }, selectedObject ? selectedObject : "null"))), selectedRecipe === "addressCascade" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Country (Master dropdown)"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: address.country,
      onChange: handleCountryAddressChange,
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "-- Choose Country --"),
    /* @__PURE__ */ React.createElement("option", { value: "US" }, "\u{1F1FA}\u{1F1F8} United States"),
    /* @__PURE__ */ React.createElement("option", { value: "IN" }, "\u{1F1EE}\u{1F1F3} India"),
    /* @__PURE__ */ React.createElement("option", { value: "CA" }, "\u{1F1E8}\u{1F1E6} Canada"),
    /* @__PURE__ */ React.createElement("option", { value: "UK" }, "\u{1F1EC}\u{1F1E7} United Kingdom")
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "span 2" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 4 } }, "Address Line 1"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "street1",
      value: address.street1,
      disabled: !address.country,
      onChange: handleAddressFieldChange,
      placeholder: !address.country ? "Select country first" : "123 Main St",
      style: {
        width: "100%",
        padding: "8px 12px",
        background: address.country ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.01)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none",
        opacity: address.country ? 1 : 0.4
      }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 4 } }, "City"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "city",
      value: address.city,
      disabled: !address.country,
      onChange: handleAddressFieldChange,
      style: {
        width: "100%",
        padding: "8px 12px",
        background: address.country ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.01)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none",
        opacity: address.country ? 1 : 0.4
      }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 4 } }, "State"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "state",
      value: address.state,
      disabled: !address.country,
      onChange: handleAddressFieldChange,
      style: {
        width: "100%",
        padding: "8px 12px",
        background: address.country ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.01)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none",
        opacity: address.country ? 1 : 0.4
      }
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    padding: 10,
    fontFamily: "var(--font-mono)",
    height: 100,
    overflowY: "auto",
    fontSize: 11
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 4 } }, "STATE LOG"), addressLogs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,0.15)" } }, "Change the country to see cascade reset in action.") : addressLogs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { color: "#f1c40f", marginBottom: 3 } }, log)))), selectedRecipe === "patternInput" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Select Verification Document"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: docType,
      onChange: handleDocTypeChange,
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "aadhar" }, "Aadhar Card (India)"),
    /* @__PURE__ */ React.createElement("option", { value: "passport" }, "Passport (Global)"),
    /* @__PURE__ */ React.createElement("option", { value: "ssn" }, "SSN (US)")
  )), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 16 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13.5, color: "white", marginBottom: 6 } }, docConfigs[docType].label), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: docVal,
      onChange: handleDocValChange,
      placeholder: docConfigs[docType].placeholder,
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid " + (docError ? "#e74c3c" : "var(--line)"),
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    }
  ), /* @__PURE__ */ React.createElement("small", { style: { display: "block", marginTop: 8, color: "var(--ink-2)", fontSize: 11.5 } }, "\u{1F4A1} ", /* @__PURE__ */ React.createElement("strong", { style: { color: "var(--accent-deep)" } }, "Guidance:"), " ", docConfigs[docType].guidance)), docError && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "#e74c3c", display: "flex", alignItems: "center", gap: 6 } }, "\u26A0\uFE0F ", docError)), selectedRecipe === "sameAsCheckbox" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Primary Nationality"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: primaryNat,
      onChange: handlePrimaryNatChange,
      placeholder: "e.g. Indian, American",
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, margin: "6px 0" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      id: "same-checkbox",
      checked: isSameNat,
      disabled: !primaryNat,
      onChange: handleSameCheckboxChange,
      style: {
        width: 17,
        height: 17,
        cursor: primaryNat ? "pointer" : "not-allowed"
      }
    }
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "same-checkbox", style: { fontSize: 13, color: primaryNat ? "white" : "var(--ink-3)", cursor: primaryNat ? "pointer" : "not-allowed" } }, "Secondary Nationality is Same as Primary")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Secondary Nationality"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: secondaryNat,
      onChange: handleSecondaryNatChange,
      placeholder: "Enter secondary nationality",
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        color: "white",
        outline: "none"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    padding: 10,
    fontFamily: "var(--font-mono)",
    height: 100,
    overflowY: "auto",
    fontSize: 11
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 4 } }, "TELEMETRY SYNCLOG"), syncLogs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(255,255,255,0.15)" } }, "Inputs and checkbox telemetry will log here.") : syncLogs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { color: log.includes("Auto-uncheck") || log.includes("broken") ? "#e74c3c" : "rgba(244,248,255,0.65)", marginBottom: 3 } }, log))))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, border: "1px solid var(--line)", background: "rgba(3,6,18,0.7)" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--line)",
    padding: "10px 16px",
    background: "rgba(255,255,255,0.02)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, [
    { id: "html", label: ".html" },
    { id: "js", label: ".js" },
    { id: "xml", label: "-meta.xml" }
  ].map((tab) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      style: {
        background: activeTab === tab.id ? "rgba(0,161,224,0.12)" : "transparent",
        border: "none",
        color: activeTab === tab.id ? "white" : "var(--ink-3)",
        fontSize: 12.5,
        fontWeight: 600,
        padding: "6px 12px",
        borderRadius: 6,
        cursor: "pointer"
      }
    },
    tab.label
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn ghost hoverable",
      onClick: copyCode,
      style: {
        padding: "6px 14px",
        fontSize: 11,
        border: "1px solid var(--line-2)",
        borderRadius: 6,
        height: "auto",
        margin: 0
      }
    },
    copied ? "\u2713 Copied!" : "\u{1F4CB} Copy Code"
  )), /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: 20,
    overflowX: "auto",
    fontSize: 12.5,
    lineHeight: 1.5,
    fontFamily: "var(--font-mono)",
    color: "rgba(244,248,255,0.85)",
    background: "rgba(0,0,0,0.2)",
    height: 340,
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement("code", null, RECIPE_CODES[selectedRecipe][activeTab]))))), /* @__PURE__ */ React.createElement("style", null, `
        .hover-bg-line:hover {
          background: rgba(0, 161, 224, 0.08) !important;
        }
      `));
}
Object.assign(window, { PageLwcRecipes });


/* ── trailhead/page-apex-recipes.jsx ── */
/* hooks from shim */
const APEX_CODES = {
  triggerBypass: {
    cls: `public class AccountTriggerHandler extends TriggerHandler {
    private List<Account> newAccounts;
    private Map<Id, Account> oldAccountMap;

    public AccountTriggerHandler() {
        this.newAccounts = (List<Account>) Trigger.new;
        this.oldAccountMap = (Map<Id, Account>) Trigger.oldMap;
    }

    public override void beforeInsert() {
        // Check global trigger bypass state
        if (TriggerBypass.isBypassed('AccountTriggerHandler')) {
            System.debug('AccountTriggerHandler is bypassed. Skipping execution.');
            return;
        }

        for (Account acc : newAccounts) {
            if (acc.BillingCountry == null) {
                acc.addError('Billing Country is required on creation.');
            }
        }
    }

    public override void afterUpdate() {
        if (TriggerBypass.isBypassed('AccountTriggerHandler')) return;

        // Prevent recursive trigger execution
        if (!TriggerHandler.isFirstRun()) return;

        Set<Id> accIdsToProcess = new Set<Id>();
        for (Account acc : newAccounts) {
            Account old = oldAccountMap.get(acc.Id);
            if (acc.BillingCountry != old.BillingCountry) {
                accIdsToProcess.add(acc.Id);
            }
        }
        
        if (!accIdsToProcess.isEmpty()) {
            // Execute bulk actions or enqueue queueable
            System.enqueueJob(new AccountUpdateQueueable(accIdsToProcess));
        }
    }
}`,
    test: `@isTest
private class AccountTriggerHandlerTest {
    @isTest
    static void testBeforeInsertSuccess() {
        Account acc = new Account(Name = 'Test Corp', BillingCountry = 'USA');
        
        Test.startTest();
        insert acc;
        Test.stopTest();
        
        Account insertedAcc = [SELECT BillingCountry FROM Account WHERE Id = :acc.Id];
        System.assertEquals('USA', insertedAcc.BillingCountry, 'Billing country should be saved');
    }

    @isTest
    static void testTriggerBypass() {
        // Enable trigger bypass
        TriggerBypass.bypass('AccountTriggerHandler');
        
        // This record would fail validation normally because BillingCountry is missing
        Account acc = new Account(Name = 'Bypassed Corp'); 
        
        Test.startTest();
        Database.SaveResult sr = Database.insert(acc, false);
        Test.stopTest();
        
        System.assert(sr.isSuccess(), 'Insert should succeed because trigger was bypassed');
    }
}`
  },
  queueable: {
    cls: `public class AccountUpdateQueueable implements Queueable, Database.AllowsCallouts {
    private Set<Id> accountIds;

    public AccountUpdateQueueable(Set<Id> ids) {
        this.accountIds = ids;
    }

    public void execute(QueueableContext context) {
        List<Account> accounts = [SELECT Id, Name, BillingCountry, Integration_Status__c 
                                  FROM Account WHERE Id IN :accountIds];
        
        // 1. Process API Callout
        for (Account acc : accounts) {
            String payload = '{ "accountName": "' + acc.Name + '" }';
            HttpResponse res = HttpCalloutService.sendRequest('https://api.external.com/sync', 'POST', payload);
            
            if (res.getStatusCode() == 200) {
                acc.Integration_Status__c = 'Synced';
            } else {
                acc.Integration_Status__c = 'Failed';
            }
        }
        
        update accounts;

        // 2. Dynamic Queueable Chaining: Chain follow-up job to sync related contacts
        if (!Test.isRunningTest()) {
            System.enqueueJob(new ContactSyncQueueable(accountIds));
        }
    }
}`,
    test: `@isTest
private class AsyncQueueableTest {
    @testSetup
    static void setup() {
        Account acc = new Account(Name = 'Sync Test Corp', BillingCountry = 'Canada');
        insert acc;
    }

    @isTest
    static void testQueueableExecution() {
        Account acc = [SELECT Id FROM Account LIMIT 1];
        
        // Set mock callout response
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator(200, 'Synced'));
        
        Test.startTest();
        System.enqueueJob(new AccountUpdateQueueable(new Set<Id>{ acc.Id }));
        Test.stopTest();
        
        Account updatedAcc = [SELECT Integration_Status__c FROM Account WHERE Id = :acc.Id];
        System.assertEquals('Synced', updatedAcc.Integration_Status__c, 'Account status should be Synced');
    }
}`
  },
  mockCallout: {
    cls: `public class MockHttpResponseGenerator implements HttpCalloutMock {
    private Map<String, HttpResponse> endpointMocks = new Map<String, HttpResponse>();

    public void addMock(String endpoint, Integer statusCode, String body) {
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody(body);
        res.setStatusCode(statusCode);
        endpointMocks.put(endpoint, res);
    }

    public HttpResponse respond(HttpRequest req) {
        String endpoint = req.getEndpoint();
        
        // Match mock by partial or exact endpoint url
        for (String urlPattern : endpointMocks.keySet()) {
            if (endpoint.contains(urlPattern)) {
                return endpointMocks.get(urlPattern);
            }
        }

        // Return default fallback mock
        HttpResponse fallback = new HttpResponse();
        fallback.setStatusCode(404);
        fallback.setBody('{"error": "Mock not found for endpoint: ' + endpoint + '"}');
        return fallback;
    }
}`,
    test: `@isTest
private class HttpCalloutServiceTest {
    @isTest
    static void testMultiEndpointCallout() {
        // Instantiate the dynamic multi-mock generator
        MockHttpResponseGenerator mockGen = new MockHttpResponseGenerator();
        
        mockGen.addMock('api.github.com', 200, '{"status": "ok"}');
        mockGen.addMock('api.salesforce.com', 500, '{"error": "Internal Error"}');

        Test.setMock(HttpCalloutMock.class, mockGen);

        Test.startTest();
        // Invoke callouts
        HttpResponse resGithub = HttpCalloutService.sendRequest('https://api.github.com/users', 'GET', null);
        HttpResponse resSalesforce = HttpCalloutService.sendRequest('https://api.salesforce.com/services', 'POST', '{}');
        Test.stopTest();

        System.assertEquals(200, resGithub.getStatusCode(), 'Github mock status mismatch');
        System.assertEquals(500, resSalesforce.getStatusCode(), 'Salesforce mock status mismatch');
    }
}`
  }
};
function PageApexRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("triggerBypass");
  const [activeTab, setActiveTab] = useState("cls");
  const [copied, setCopied] = useState(false);
  const [bypassAccount, setBypassAccount] = useState(false);
  const [triggerVal, setTriggerVal] = useState("");
  const [triggerCountry, setTriggerCountry] = useState("USA");
  const [triggerLogs, setTriggerLogs] = useState([]);
  const [triggerLimits, setTriggerLimits] = useState({ soql: 0, dml: 0 });
  const [queueJobs, setQueueJobs] = useState([]);
  const [queueLogs, setQueueLogs] = useState([]);
  const [isQueueRunning, setIsQueueRunning] = useState(false);
  const [mocks, setMocks] = useState({
    "api.github.com": { status: 200, body: '{"status": "ok", "service": "GitHub"}' },
    "api.salesforce.com": { status: 500, body: '{"error": "Internal Server Error", "service": "SFDC"}' }
  });
  const [testEndpoint, setTestEndpoint] = useState("api.github.com");
  const [calloutLogs, setCalloutLogs] = useState([]);
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);
  const copyCode = () => {
    const codeText = APEX_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  const runTriggerSim = (mode) => {
    let logs = [`\u{1F680} Transaction Started: Mode = DML ${mode}`];
    let soql = 0;
    let dml = 0;
    logs.push("\u2699\uFE0F Loading Trigger settings...");
    if (bypassAccount) {
      logs.push("\u{1F7E1} TRIGGER BYPASSED: 'AccountTriggerHandler' is marked as bypassed. Skipping logic.");
    } else {
      logs.push("\u{1F535} Executing BEFORE INSERT handler on Account...");
      if (!triggerVal) {
        logs.push("\u274C System.DmlException: Insert failed. Billing Country is required on creation.");
        setTriggerLogs(logs);
        return;
      }
      soql += 1;
      logs.push(`\u{1F50D} [SOQL Query] SELECT Id, Name FROM Account WHERE Name = '${triggerVal}' LIMIT 1`);
      logs.push("\u{1F535} Executing AFTER INSERT handler on Account...");
      dml += 1;
      logs.push(`\u{1F4BE} [DML Insert] Account record saved: Id = 001${Math.random().toString().slice(2, 17)}`);
      if (mode === "UPDATE") {
        logs.push("\u{1F535} Executing AFTER UPDATE handler on Account...");
        if (triggerCountry !== "USA") {
          logs.push("\u{1F517} Chaining Asynchronous Sync: Enqueuing AccountUpdateQueueable job.");
          logs.push("\u{1F4E6} Job successfully added to FlexQueue.");
        } else {
          logs.push("\u{1F7E2} Country unchanged/USA. No async updates queued.");
        }
      }
    }
    logs.push("\u2705 Transaction Completed successfully.");
    setTriggerLogs(logs);
    setTriggerLimits({ soql, dml });
  };
  const runQueueableSim = () => {
    if (isQueueRunning) return;
    setIsQueueRunning(true);
    setQueueJobs([]);
    setQueueLogs(["\u{1F680} Enqueuing Job chain..."]);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const process = async () => {
      setQueueJobs((prev) => [...prev, { id: "Job-A1", name: "AccountUpdateQueueable", status: "Queued" }]);
      await delay(1200);
      setQueueJobs([{ id: "Job-A1", name: "AccountUpdateQueueable", status: "Processing" }]);
      setQueueLogs((prev) => [...prev, "\u26A1 Job-A1: AccountUpdateQueueable started. Fetching accounts...", "\u{1F4DE} Job-A1: Invoking callout mock to https://api.external.com/sync"]);
      await delay(1500);
      setQueueJobs([{ id: "Job-A1", name: "AccountUpdateQueueable", status: "Completed" }]);
      setQueueLogs((prev) => [...prev, "\u2705 Job-A1: Accounts updated status to 'Synced'.", "\u{1F517} Job-A1: Chaining related contacts synchronizer..."]);
      await delay(1e3);
      setQueueJobs((prev) => [
        ...prev,
        { id: "Job-C2", name: "ContactSyncQueueable", status: "Queued" }
      ]);
      await delay(1200);
      setQueueJobs((prev) => [
        prev[0],
        { id: "Job-C2", name: "ContactSyncQueueable", status: "Processing" }
      ]);
      setQueueLogs((prev) => [...prev, "\u26A1 Job-C2: ContactSyncQueueable started. Fetching associated Contacts...", "\u{1F4BE} Job-C2: Executing bulk DML updates on 45 Contacts."]);
      await delay(1500);
      setQueueJobs((prev) => [
        prev[0],
        { id: "Job-C2", name: "ContactSyncQueueable", status: "Completed" }
      ]);
      setQueueLogs((prev) => [...prev, "\u2705 Job-C2: Contacts updated successfully.", "\u{1F389} Queueable Chaining pipeline empty. Chain execution complete."]);
      setIsQueueRunning(false);
    };
    process();
  };
  const runCalloutSim = () => {
    const activeMock = mocks[testEndpoint];
    let logs = [
      `\u{1F680} Initializing Dynamic Callout request...`,
      `\u{1F4E1} Request URL: https://${testEndpoint}/v1/resources`,
      `\u2699\uFE0F Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator()) triggered.`
    ];
    logs.push(`\u{1F50D} MockHttpResponseGenerator: Inspecting endpoint...`);
    if (activeMock) {
      logs.push(`\u{1F3AF} Match found for pattern: "${testEndpoint}"`);
      logs.push(`\u{1F4E6} Loading Mocked Payload...`);
      logs.push(`\u{1F4E5} HttpResponse returned: Status Code = ${activeMock.status}`);
      logs.push(`\u{1F4C4} Response Body: ${activeMock.body}`);
    } else {
      logs.push(`\u26A0\uFE0F No mock mapping found for: "${testEndpoint}". Returning default fallback.`);
      logs.push(`\u{1F4E5} HttpResponse returned: Status Code = 404 (Not Found)`);
    }
    setCalloutLogs(logs);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 } }, "Apex Recipes Directory"), [
    { id: "triggerBypass", name: "1. Trigger Bypass Framework", desc: "Re-entrancy & bypass controls" },
    { id: "queueable", name: "2. Queueable Chain Sync", desc: "Async job pipeline chaining" },
    { id: "mockCallout", name: "3. Callout Multi-Mock", desc: "Multi-endpoint unit test mocks" }
  ].map((rec) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: rec.id,
      onClick: () => setSelectedRecipe(rec.id),
      className: "hoverable",
      style: {
        textAlign: "left",
        padding: "14px 18px",
        background: selectedRecipe === rec.id ? "rgba(0,161,224,0.08)" : "rgba(255,255,255,0.02)",
        border: "1px solid " + (selectedRecipe === rec.id ? "var(--accent)" : "var(--line)"),
        borderRadius: 14,
        color: selectedRecipe === rec.id ? "white" : "var(--ink-2)",
        cursor: "pointer",
        transition: "all 0.2s"
      }
    },
    /* @__PURE__ */ React.createElement("strong", { style: { display: "block", fontSize: 13.5, marginBottom: 4 } }, rec.name),
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: selectedRecipe === rec.id ? "var(--accent-deep)" : "var(--ink-3)" } }, rec.desc)
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(10,18,48,0.25)", border: "1px solid var(--line)", padding: 24, borderRadius: 18 } }, selectedRecipe === "triggerBypass" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Apex Trigger Handler & Bypass Console"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Illustrates a clean Apex Trigger Handler framework supporting dynamic runtime bypass configurations. In large Salesforce instances, bypassing triggers programmatically during heavy data loads, migrations, or tests is essential for speed and preventing execution limit violations.")), selectedRecipe === "queueable" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Queueable Chaining & Asynchronous Pipeline"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Demonstrates how to chain Queueable jobs sequentially in Salesforce. This structure enables developers to execute long-running processes (like REST callouts followed by child updates) while staying compliant with Apex governor limits.")), selectedRecipe === "mockCallout" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Multi-Mock HTTP Callout Framework"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "A robust unit testing mock generator. When a transaction makes callouts to different endpoints (e.g. GitHub and Salesforce APIs), a standard mock generator fails. This registry-based multi-mock captures endpoint requests and maps mock payloads dynamically."))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" } }, "\u26A1 INTERACTIVE SANDBOX"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 } }, "APEX SIMULATOR")), selectedRecipe === "triggerBypass" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      id: "trigger-bypass-chk",
      checked: bypassAccount,
      onChange: (e) => setBypassAccount(e.target.checked),
      style: { width: 16, height: 16, cursor: "pointer" }
    }
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "trigger-bypass-chk", style: { fontSize: 13, cursor: "pointer" } }, "Bypass 'AccountTriggerHandler' logic")), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 4 } }, "Account Name"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: triggerVal,
      onChange: (e) => setTriggerVal(e.target.value),
      placeholder: "Enter Account name...",
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 4 } }, "Billing Country"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: triggerCountry,
      onChange: (e) => setTriggerCountry(e.target.value),
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "USA" }, "USA"),
    /* @__PURE__ */ React.createElement("option", { value: "Canada" }, "Canada"),
    /* @__PURE__ */ React.createElement("option", { value: "India" }, "India"),
    /* @__PURE__ */ React.createElement("option", { value: "" }, "(Blank/Null)")
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => runTriggerSim("INSERT"), className: "btn primary hoverable", style: { padding: "8px 16px", fontSize: 12.5, flex: 1, justifyContent: "center" } }, "Simulate INSERT"), /* @__PURE__ */ React.createElement("button", { onClick: () => runTriggerSim("UPDATE"), className: "btn ghost hoverable", style: { padding: "8px 16px", fontSize: 12.5, flex: 1, justifyContent: "center" } }, "Simulate UPDATE")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    padding: 12,
    fontFamily: "var(--font-mono)",
    height: 120,
    overflowY: "auto",
    fontSize: 11
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", null, "SIMULATOR Apex Debug Logs"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent-deep)" } }, "SOQL: ", triggerLimits.soql, "/100 | DML: ", triggerLimits.dml, "/150")), triggerLogs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(244,248,255,0.25)" } }, "Simulate a DML transaction to output logs.") : triggerLogs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    color: log.includes("\u274C") ? "#e74c3c" : log.includes("\u{1F7E1}") ? "#f1c40f" : "rgba(244,248,255,0.65)",
    marginBottom: 4
  } }, log)))), selectedRecipe === "queueable" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: runQueueableSim,
      disabled: isQueueRunning,
      className: "btn primary hoverable",
      style: { width: "100%", justifyContent: "center", padding: "10px" }
    },
    isQueueRunning ? "\u23F3 Running Job Pipeline..." : "\u25B6\uFE0F Dispatch Queueable Chain"
  ), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 8 } }, "Asynchronous FlexQueue Status"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, queueJobs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: 12, background: "rgba(255,255,255,0.01)", border: "1px dashed var(--line-2)", borderRadius: 8, fontSize: 12, color: "var(--ink-3)", textAlign: "center" } }, "Queue empty.") : queueJobs.map((job) => /* @__PURE__ */ React.createElement("div", { key: job.id, style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 14px",
    background: "rgba(0,0,0,0.25)",
    border: "1px solid " + (job.status === "Completed" ? "rgba(46,204,113,0.3)" : job.status === "Processing" ? "var(--accent)" : "rgba(255,255,255,0.08)"),
    borderRadius: 8
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, color: "white" } }, job.name), /* @__PURE__ */ React.createElement("small", { style: { color: "var(--ink-3)", fontSize: 10.5 } }, "Job ID: ", job.id)), /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 10,
    fontWeight: 700,
    padding: "3px 6px",
    borderRadius: 4,
    background: job.status === "Completed" ? "rgba(46,204,113,0.15)" : job.status === "Processing" ? "rgba(0,161,224,0.15)" : "rgba(255,255,255,0.05)",
    color: job.status === "Completed" ? "#2ecc71" : job.status === "Processing" ? "var(--accent)" : "var(--ink-2)"
  } }, job.status))))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    padding: 12,
    fontFamily: "var(--font-mono)",
    height: 100,
    overflowY: "auto",
    fontSize: 11
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 } }, "QUEUE ENGINE DEBUG LOGS"), queueLogs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(244,248,255,0.25)" } }, "Pipeline execution telemetry.") : queueLogs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { color: log.startsWith("\u2705") ? "#2ecc71" : "rgba(244,248,255,0.65)", marginBottom: 4 } }, log)))), selectedRecipe === "mockCallout" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "1. Select Target Endpoint"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: testEndpoint,
      onChange: (e) => setTestEndpoint(e.target.value),
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "api.github.com" }, "GitHub API (mapped to status 200)"),
    /* @__PURE__ */ React.createElement("option", { value: "api.salesforce.com" }, "Salesforce Tooling API (mapped to status 500)"),
    /* @__PURE__ */ React.createElement("option", { value: "api.unknown-service.com" }, "Unknown Service API (unmapped)")
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: runCalloutSim, className: "btn primary hoverable", style: { width: "100%", justifyContent: "center", padding: "10px" } }, "\u{1F4E1} Execute HTTP Callout Test")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    padding: 12,
    fontFamily: "var(--font-mono)",
    height: 120,
    overflowY: "auto",
    fontSize: 11
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 } }, "TEST MOCK TELEMETRY"), calloutLogs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(244,248,255,0.25)" } }, "Results will show here.") : calloutLogs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    color: log.includes("200") || log.includes("Match found") ? "#2ecc71" : log.includes("500") || log.includes("404") || log.includes("\u26A0\uFE0F") ? "#e74c3c" : "rgba(244,248,255,0.65)",
    marginBottom: 4
  } }, log))))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, border: "1px solid var(--line)", background: "rgba(3,6,18,0.7)" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--line)",
    padding: "10px 16px",
    background: "rgba(255,255,255,0.02)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, [
    { id: "cls", label: "Controller (.cls)" },
    { id: "test", label: "Apex Test (.cls)" }
  ].map((tab) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      style: {
        background: activeTab === tab.id ? "rgba(0,161,224,0.12)" : "transparent",
        border: "none",
        color: activeTab === tab.id ? "white" : "var(--ink-3)",
        fontSize: 12.5,
        fontWeight: 600,
        padding: "6px 12px",
        borderRadius: 6,
        cursor: "pointer"
      }
    },
    tab.label
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn ghost hoverable",
      onClick: copyCode,
      style: {
        padding: "6px 14px",
        fontSize: 11,
        border: "1px solid var(--line-2)",
        borderRadius: 6,
        height: "auto",
        margin: 0
      }
    },
    copied ? "\u2713 Copied!" : "\u{1F4CB} Copy Code"
  )), /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: 20,
    overflowX: "auto",
    fontSize: 12.5,
    lineHeight: 1.5,
    fontFamily: "var(--font-mono)",
    color: "rgba(244,248,255,0.85)",
    background: "rgba(0,0,0,0.2)",
    height: 340,
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement("code", null, APEX_CODES[selectedRecipe][activeTab]))))));
}
Object.assign(window, { PageApexRecipes });


/* ── trailhead/page-agent-recipes.jsx ── */
/* hooks from shim */
const AGENT_CODES = {
  invocableAction: {
    cls: `public class AgentGetCaseSummaryAction {
    
    public class ActionInput {
        @InvocableVariable(required=true description='The case number to look up')
        public String caseNumber;
        
        @InvocableVariable(required=false description='Include audit history logs')
        public Boolean includeLogs;
    }

    public class ActionOutput {
        @InvocableVariable(description='The natural language summary of the case')
        public String summary;
        
        @InvocableVariable(description='Success status of the execution')
        public Boolean isSuccess;
    }

    @InvocableMethod(
        label='Get Case Summary for Agent'
        description='Fetches the subject, description, priority and status of a case and returns a natural language summary'
        category='Agentforce'
    )
    public static List<ActionOutput> getCaseSummary(List<ActionInput> inputs) {
        List<ActionOutput> outputs = new List<ActionOutput>();
        
        for (ActionInput input : inputs) {
            ActionOutput output = new ActionOutput();
            try {
                Case c = [SELECT CaseNumber, Subject, Description, Status, Priority, 
                                 (SELECT CommentBody FROM CaseComments ORDER BY CreatedDate DESC LIMIT 2)
                          FROM Case WHERE CaseNumber = :input.caseNumber LIMIT 1];
                
                String summaryStr = 'Case #' + c.CaseNumber + ': "' + c.Subject + '" is currently ' + c.Status + '. ' +
                                    'Priority is ' + c.Priority + '. Description: ' + c.Description;
                
                if (c.CaseComments.size() > 0) {
                    summaryStr += ' Latest comments: ';
                    for (CaseComment cc : c.CaseComments) {
                        summaryStr += '"' + cc.CommentBody + '"; ';
                    }
                }
                
                output.summary = summaryStr;
                output.isSuccess = true;
            } catch (Exception e) {
                output.summary = 'Error retrieving case summary: Case number ' + input.caseNumber + ' not found.';
                output.isSuccess = false;
            }
            outputs.add(output);
        }
        return outputs;
    }
}`,
    json: `{
  "apiVersion": "60.0",
  "agentAction": {
    "masterLabel": "Get Case Summary for Agent",
    "description": "Fetches subject, description, priority and comments for a case number to summarize case logs",
    "invocationTarget": "apex-AgentGetCaseSummaryAction",
    "inputs": [
      {
        "name": "caseNumber",
        "type": "String",
        "isRequired": true,
        "description": "The case number to look up"
      },
      {
        "name": "includeLogs",
        "type": "Boolean",
        "isRequired": false,
        "description": "Include audit history logs"
      }
    ],
    "outputs": [
      {
        "name": "summary",
        "type": "String",
        "description": "The natural language summary of the case"
      },
      {
        "name": "isSuccess",
        "type": "Boolean",
        "description": "Success status of the execution"
      }
    ]
  }
}`
  },
  promptResolver: {
    cls: `public class AccountRiskPromptResolver extends Process.PromptTemplateResolver {
    
    public override Double getRiskMultiplier() {
        return 1.5;
    }

    public override Process.PromptTemplateResponse execute(Process.PromptTemplateContext context) {
        Process.PromptTemplateResponse response = new Process.PromptTemplateResponse();
        
        // Retrieve target input record
        Account acc = (Account) context.getTargetRecord();
        
        // Custom business logic for calculating dynamic prompt tokens
        Decimal score = 0;
        if (acc.AnnualRevenue != null && acc.AnnualRevenue > 10000000) score += 30; // Large Enterprise
        if (acc.BillingCountry != 'USA') score += 20; // Cross-border compliance check
        
        List<Case> openCases = [SELECT Id FROM Case WHERE AccountId = :acc.Id AND IsClosed = false];
        score += (openCases.size() * 15); // Add risk points for active support cases

        String riskRating = 'Low';
        if (score >= 60) riskRating = 'Critical';
        else if (score >= 40) riskRating = 'High';
        else if (score >= 25) riskRating = 'Medium';

        // Add dynamic tokens back into the template context
        response.addTokenResponse('_riskRating', riskRating);
        response.addTokenResponse('_calculatedScore', String.valueOf(score));
        
        return response;
    }
}`,
    json: `{
  "apiVersion": "60.0",
  "promptTemplate": {
    "masterLabel": "Account Risk Evaluation Template",
    "type": "EinsteinPromptTemplate",
    "targetObject": "Account",
    "templateText": "You are a Salesforce Service Agent. Summarize account information for {!Input:Account.Name}. Accounts Country: {!Input:Account.BillingCountry}. Revenue: {!Input:Account.AnnualRevenue}. Custom Calculated Risk Rating is: {!AccountRiskPromptResolver._riskRating} (Score: {!AccountRiskPromptResolver._calculatedScore}). Please draft a high-touch outreach message based on this risk level.",
    "resolverClass": "AccountRiskPromptResolver"
  }
}`
  },
  topicRouter: {
    cls: `public class AgentTopicRouter {
    
    public class TopicClassification {
        public String matchedTopic;
        public Double confidenceScore;
        public Map<String, Object> slots;
    }

    public static TopicClassification classifyIntent(String userUtterance) {
        TopicClassification result = new TopicClassification();
        result.slots = new Map<String, Object>();
        
        String cleanUtterance = userUtterance.toLowerCase();

        // 1. Classification Logic
        if (cleanUtterance.contains('billing') || cleanUtterance.contains('invoice') || cleanUtterance.contains('pay')) {
            result.matchedTopic = 'Billing_Support';
            result.confidenceScore = 0.94;
            
            // Extract invoice numbers if present
            Pattern invPattern = Pattern.compile('inv-\\\\d{4}');
            Matcher m = invPattern.matcher(cleanUtterance);
            if (m.find()) {
                result.slots.put('invoiceNumber', m.group(0).toUpperCase());
            }
        } 
        else if (cleanUtterance.contains('apply') || cleanUtterance.contains('loan') || cleanUtterance.contains('mortgage')) {
            result.matchedTopic = 'Loan_Application';
            result.confidenceScore = 0.89;
            
            if (cleanUtterance.contains('mortgage') || cleanUtterance.contains('home')) {
                result.slots.put('loanType', 'Mortgage');
            } else if (cleanUtterance.contains('auto') || cleanUtterance.contains('car')) {
                result.slots.put('loanType', 'Auto');
            }
        } 
        else {
            result.matchedTopic = 'General_Queries';
            result.confidenceScore = 0.72;
        }

        return result;
    }
}`,
    json: `{
  "agentTopics": [
    {
      "name": "Billing_Support",
      "description": "Handles billing inquiries, invoice downloads, and processing payments.",
      "classificationPhrases": [
        "check billing status",
        "where is my invoice",
        "how to pay my bill",
        "dispute a charge"
      ],
      "requiredSlots": [
        {
          "name": "invoiceNumber",
          "type": "String",
          "prompt": "Could you please provide the invoice number (e.g. INV-1024)?"
        }
      ]
    },
    {
      "name": "Loan_Application",
      "description": "Collects details and starts applications for Mortgage, Auto, or Personal loans.",
      "classificationPhrases": [
        "apply for a loan",
        "want to start home mortgage",
        "car finance rate",
        "need cash personal loan"
      ],
      "requiredSlots": [
        {
          "name": "loanType",
          "type": "String",
          "prompt": "What type of loan are you applying for? (Mortgage, Auto, or Personal)?"
        }
      ]
    }
  ]
}`
  }
};
function PageAgentRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("invocableAction");
  const [activeTab, setActiveTab] = useState("cls");
  const [copied, setCopied] = useState(false);
  const [caseNo, setCaseNo] = useState("1024");
  const [actionLogs, setActionLogs] = useState([]);
  const mockCases = {
    "1024": { subject: "Invoice mismatch", desc: "Charged $450 instead of $400 on billing statement.", status: "Escalated", priority: "High", comment: "Verified billing ledger, discount code was missing." },
    "1045": { subject: "API Integration Timeout", desc: "Unable to retrieve token from endpoints.", status: "Closed", priority: "Critical", comment: "IP address was successfully whitelisted." }
  };
  const [selectedAccount, setSelectedAccount] = useState("Acme");
  const [numCases, setNumCases] = useState(2);
  const [resolvedPrompt, setResolvedPrompt] = useState("");
  const accountsData = {
    "Acme": { name: "Acme Corp", country: "USA", revenue: "$12,000,000" },
    "Globex": { name: "Globex International", country: "India", revenue: "$8,500,000" },
    "Initech": { name: "Initech LLC", country: "UK", revenue: "$4,200,000" }
  };
  const [chatHistory, setChatHistory] = useState([
    { sender: "agent", text: "Hello! I am your Agentforce assistant. Ask me about your invoices or applying for a loan." }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [slotFillingState, setSlotFillingState] = useState(null);
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);
  const copyCode = () => {
    const codeText = AGENT_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  const runInvocableSim = () => {
    let logs = [
      `\u{1F916} Agentforce: Analyzing prompt request...`,
      `\u{1F3AF} Matched Action Intent: "Get Case Summary for Agent"`,
      `\u2699\uFE0F Binding inputs: caseNumber = "${caseNo}"`,
      `\u{1F535} Calling Apex \`@InvocableMethod\` (AgentGetCaseSummaryAction.getCaseSummary)...`
    ];
    const match = mockCases[caseNo];
    if (match) {
      logs.push(`\u{1F50D} [SOQL SELECT] Querying Subject, Status, comments where CaseNumber = '${caseNo}'`);
      logs.push(`\u2705 Apex returning Output Parameter:`);
      logs.push(`   - summary: "Case #${caseNo}: '${match.subject}' is currently ${match.status}. Priority: ${match.priority}. Latest comment: '${match.comment}'"`);
      logs.push(`   - isSuccess: true`);
      logs.push(`\u{1F916} Agentforce: Merging data into conversational context successfully.`);
    } else {
      logs.push(`\u{1F50D} [SOQL SELECT] Querying CaseNumber = '${caseNo}'`);
      logs.push(`\u274C System.QueryException: No rows returned for query.`);
      logs.push(`\u2705 Apex returning Output Parameter:`);
      logs.push(`   - summary: "Error retrieving case summary: Case number ${caseNo} not found."`);
      logs.push(`   - isSuccess: false`);
      logs.push(`\u{1F916} Agentforce: Fallback response matched for prompt failure.`);
    }
    setActionLogs(logs);
  };
  const runPromptSim = () => {
    const acc = accountsData[selectedAccount];
    let score = 0;
    if (acc.name === "Acme Corp") score += 30;
    if (acc.country !== "USA") score += 20;
    score += numCases * 15;
    let riskRating = "Low";
    if (score >= 60) riskRating = "Critical";
    else if (score >= 40) riskRating = "High";
    else if (score >= 25) riskRating = "Medium";
    const templateText = `You are a Salesforce Service Agent. Summarize account information for ${acc.name}. Accounts Country: ${acc.country}. Revenue: ${acc.revenue}. Custom Calculated Risk Rating is: ${riskRating} (Score: ${score}). Please draft a high-touch outreach message based on this risk level.`;
    setResolvedPrompt(templateText);
  };
  const runChatClassifier = () => {
    if (!chatInput.trim()) return;
    const text = chatInput.trim();
    const cleanText = text.toLowerCase();
    setChatHistory((prev) => [...prev, { sender: "user", text }]);
    setChatInput("");
    if (slotFillingState) {
      const topic = slotFillingState.topic;
      const collectedSlots = { ...slotFillingState.slots };
      if (topic === "Billing_Support" && slotFillingState.missingSlot === "invoiceNumber") {
        collectedSlots.invoiceNumber = text.toUpperCase();
        setChatHistory((prev) => [
          ...prev,
          { sender: "agent", text: `Got it. Checking billing ledger for Invoice ${text.toUpperCase()}...` },
          { sender: "classifier", text: `\u{1F3AF} Topic Classified: Billing_Support (Slot invoiceNumber = ${text.toUpperCase()} filled)` },
          { sender: "agent", text: `Invoice ${text.toUpperCase()} has been processed and is currently fully PAID. You can download the PDF statement.` }
        ]);
        setSlotFillingState(null);
      } else if (topic === "Loan_Application" && slotFillingState.missingSlot === "loanType") {
        collectedSlots.loanType = text;
        setChatHistory((prev) => [
          ...prev,
          { sender: "agent", text: `Thank you. Starting a ${text} loan application worksheet.` },
          { sender: "classifier", text: `\u{1F3AF} Topic Classified: Loan_Application (Slot loanType = ${text} filled)` },
          { sender: "agent", text: `I have opened application #L-${Math.floor(1e3 + Math.random() * 9e3)}. Please submit your tax and identity documents.` }
        ]);
        setSlotFillingState(null);
      }
      return;
    }
    if (cleanText.includes("billing") || cleanText.includes("invoice") || cleanText.includes("pay")) {
      const invMatch = text.toUpperCase().match(/INV-\d{4}/);
      if (invMatch) {
        setChatHistory((prev) => [
          ...prev,
          { sender: "classifier", text: `\u{1F3AF} Topic Classified: Billing_Support (Confidence: 0.94, slots matched = ${invMatch[0]})` },
          { sender: "agent", text: `Looking up Invoice ${invMatch[0]}. It is currently PAID. Let me know if you need to dispute any item.` }
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          { sender: "classifier", text: `\u{1F3AF} Topic Classified: Billing_Support (Confidence: 0.82, missing slots: invoiceNumber)` },
          { sender: "agent", text: `I can help you check billing details. Could you please provide the invoice number (e.g. INV-1024)?` }
        ]);
        setSlotFillingState({ topic: "Billing_Support", slots: {}, missingSlot: "invoiceNumber" });
      }
    } else if (cleanText.includes("apply") || cleanText.includes("loan") || cleanText.includes("mortgage")) {
      let type = "";
      if (cleanText.includes("mortgage") || cleanText.includes("home")) type = "Mortgage";
      else if (cleanText.includes("car") || cleanText.includes("auto")) type = "Auto";
      if (type) {
        setChatHistory((prev) => [
          ...prev,
          { sender: "classifier", text: `\u{1F3AF} Topic Classified: Loan_Application (Confidence: 0.91, slots matched = ${type})` },
          { sender: "agent", text: `Opening a new ${type} loan application pipeline. Would you like to proceed with calculating rates?` }
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          { sender: "classifier", text: `\u{1F3AF} Topic Classified: Loan_Application (Confidence: 0.88, missing slots: loanType)` },
          { sender: "agent", text: `I can help you start a loan application. What type of loan are you applying for? (Mortgage, Auto, or Personal)?` }
        ]);
        setSlotFillingState({ topic: "Loan_Application", slots: {}, missingSlot: "loanType" });
      }
    } else {
      setChatHistory((prev) => [
        ...prev,
        { sender: "classifier", text: `\u{1F3AF} Topic Classified: General_Queries (Confidence: 0.76)` },
        { sender: "agent", text: `I'm matching that to General Queries. Could you rephrase your question with 'billing' or 'loan application' keywords to test Slot-filling routing?` }
      ]);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 } }, "Agentforce Recipes"), [
    { id: "invocableAction", name: "1. Agent Invocable Action", desc: "Apex Action prompt parameters" },
    { id: "promptResolver", name: "2. Prompt Grounding Template", desc: "Dynamic Prompt Builder resolver" },
    { id: "topicRouter", name: "3. Conversational Topic Classifier", desc: "NLP Topic classification and slots" }
  ].map((rec) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: rec.id,
      onClick: () => setSelectedRecipe(rec.id),
      className: "hoverable",
      style: {
        textAlign: "left",
        padding: "14px 18px",
        background: selectedRecipe === rec.id ? "rgba(0,161,224,0.08)" : "rgba(255,255,255,0.02)",
        border: "1px solid " + (selectedRecipe === rec.id ? "var(--accent)" : "var(--line)"),
        borderRadius: 14,
        color: selectedRecipe === rec.id ? "white" : "var(--ink-2)",
        cursor: "pointer",
        transition: "all 0.2s"
      }
    },
    /* @__PURE__ */ React.createElement("strong", { style: { display: "block", fontSize: 13.5, marginBottom: 4 } }, rec.name),
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: selectedRecipe === rec.id ? "var(--accent-deep)" : "var(--ink-3)" } }, rec.desc)
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(10,18,48,0.25)", border: "1px solid var(--line)", padding: 24, borderRadius: 18 } }, selectedRecipe === "invocableAction" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Agentforce Action (Invocable Apex Method)"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Shows how to implement an Apex `@InvocableMethod` exposed to Agentforce Agents. Agents leverage natural language processing to extract parameters from user chats, dynamically bind them to custom wrapper inputs, and execute the Apex context.")), selectedRecipe === "promptResolver" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Prompt Builder Grounding Template Resolver"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Illustrates how to ground LLM Prompts dynamically with Salesforce record fields and calculate complex tokens in Apex by extending `Process.PromptTemplateResolver`. Grounding ensures prompts are anchored with accurate corporate database parameters.")), selectedRecipe === "topicRouter" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Agentforce Topic Classifier & Slot-Filler"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "A simulation of Topic classification in Agentforce. Incoming messages are analyzed. If matched to a specific Topic, the Agent verifies if all required slot-filling parameters are present; if not, it prompts the user to provide them."))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" } }, "\u26A1 INTERACTIVE SANDBOX"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 } }, "AI AGENT SIMULATOR")), selectedRecipe === "invocableAction" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "1. Simulated LLM Input (Case Number)"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: caseNo,
      onChange: (e) => setCaseNo(e.target.value),
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "1024" }, "Case 1024 (Invoice discrepancy - High priority)"),
    /* @__PURE__ */ React.createElement("option", { value: "1045" }, "Case 1045 (API Timeout - Critical priority)"),
    /* @__PURE__ */ React.createElement("option", { value: "9999" }, "Case 9999 (Invalid/Non-existent)")
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: runInvocableSim, className: "btn primary hoverable", style: { width: "100%", justifyContent: "center", padding: "10px" } }, "Invoke Agent Apex Method")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "#030612",
    border: "1px solid var(--line-2)",
    borderRadius: 10,
    padding: 12,
    fontFamily: "var(--font-mono)",
    height: 120,
    overflowY: "auto",
    fontSize: 11
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 } }, "AGENTFORCE SYSTEM LOGS"), actionLogs.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "rgba(244,248,255,0.25)" } }, "Invoke action to show LLM/Apex telemetry trace.") : actionLogs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    color: log.includes("\u274C") ? "#e74c3c" : log.includes("\u2705") ? "#2ecc71" : "rgba(244,248,255,0.65)",
    marginBottom: 4
  } }, log)))), selectedRecipe === "promptResolver" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Grounding Record"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: selectedAccount,
      onChange: (e) => setSelectedAccount(e.target.value),
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "Acme" }, "Acme Corp (USA - $12M revenue)"),
    /* @__PURE__ */ React.createElement("option", { value: "Globex" }, "Globex Inc (India - $8.5M revenue)"),
    /* @__PURE__ */ React.createElement("option", { value: "Initech" }, "Initech LLC (UK - $4.2M revenue)")
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "Open Cases (Score)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      value: numCases,
      onChange: (e) => setNumCases(parseInt(e.target.value) || 0),
      min: "0",
      max: "10",
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    }
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: runPromptSim, className: "btn primary hoverable", style: { width: "100%", justifyContent: "center", padding: "10px" } }, "\u2699\uFE0F Resolve Prompt Template")), resolvedPrompt && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 11, color: "var(--ink-3)", marginBottom: 4 } }, "RESOLVED GROUNDED PROMPT TEXT"), /* @__PURE__ */ React.createElement("div", { style: {
    padding: 12,
    background: "rgba(0,0,0,0.2)",
    border: "1px solid var(--line-2)",
    borderRadius: 8,
    fontSize: 12,
    lineHeight: 1.4,
    color: "white"
  } }, resolvedPrompt))), selectedRecipe === "topicRouter" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 180,
    overflowY: "auto",
    border: "1px solid var(--line)",
    borderRadius: 10,
    background: "rgba(0,0,0,0.3)",
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 10
  } }, chatHistory.map((chat, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      style: {
        alignSelf: chat.sender === "user" ? "flex-end" : "flex-start",
        maxWidth: "85%",
        padding: chat.sender === "classifier" ? "4px 8px" : "8px 12px",
        borderRadius: 10,
        fontSize: chat.sender === "classifier" ? 10.5 : 12.5,
        fontFamily: chat.sender === "classifier" ? "var(--font-mono)" : "inherit",
        background: chat.sender === "user" ? "var(--accent)" : chat.sender === "classifier" ? "rgba(255,220,140,0.1)" : "rgba(255,255,255,0.06)",
        border: chat.sender === "classifier" ? "1px solid rgba(255,220,140,0.2)" : "none",
        color: chat.sender === "classifier" ? "#ffd479" : "white"
      }
    },
    chat.text
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: chatInput,
      onChange: (e) => setChatInput(e.target.value),
      onKeyDown: (e) => {
        if (e.key === "Enter") runChatClassifier();
      },
      placeholder: "Type: 'billing INV-2021' or 'apply loan'...",
      style: {
        flex: 1,
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: runChatClassifier, className: "btn primary hoverable", style: { padding: "8px 16px", fontSize: 13 } }, "Send")))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, border: "1px solid var(--line)", background: "rgba(3,6,18,0.7)" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--line)",
    padding: "10px 16px",
    background: "rgba(255,255,255,0.02)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, [
    { id: "cls", label: "Apex Class (.cls)" },
    { id: "json", label: "Agent Config (.json / .prompt)" }
  ].map((tab) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      style: {
        background: activeTab === tab.id ? "rgba(0,161,224,0.12)" : "transparent",
        border: "none",
        color: activeTab === tab.id ? "white" : "var(--ink-3)",
        fontSize: 12.5,
        fontWeight: 600,
        padding: "6px 12px",
        borderRadius: 6,
        cursor: "pointer"
      }
    },
    tab.label
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn ghost hoverable",
      onClick: copyCode,
      style: {
        padding: "6px 14px",
        fontSize: 11,
        border: "1px solid var(--line-2)",
        borderRadius: 6,
        height: "auto",
        margin: 0
      }
    },
    copied ? "\u2713 Copied!" : "\u{1F4CB} Copy Code"
  )), /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: 20,
    overflowX: "auto",
    fontSize: 12.5,
    lineHeight: 1.5,
    fontFamily: "var(--font-mono)",
    color: "rgba(244,248,255,0.85)",
    background: "rgba(0,0,0,0.2)",
    height: 340,
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement("code", null, AGENT_CODES[selectedRecipe][activeTab]))))));
}
Object.assign(window, { PageAgentRecipes });


/* ── trailhead/page-soql-recipes.jsx ── */
/* hooks from shim */
const SOQL_CODES = {
  relationship: {
    soql: `// 1. Parent-to-Child Subquery (Retrieves Accounts and their sub-list of Contacts)
SELECT Name, Industry, AnnualRevenue, 
       (SELECT FirstName, LastName, Email, Title FROM Contacts) 
FROM Account 
WHERE Industry = 'Finance' LIMIT 5

// 2. Child-to-Parent Query (Retrieves Contacts and references parent Account fields)
SELECT FirstName, LastName, Email, Title,
       Account.Name, Account.Industry, Account.AnnualRevenue
FROM Contact
WHERE Account.Industry = 'Finance' LIMIT 10`,
    cls: `public class RelationshipQueryController {
    
    public static void printAccountContacts() {
        // Execute Parent-to-Child query
        List<Account> accounts = [SELECT Name, Industry, 
                                         (SELECT FirstName, LastName, Email FROM Contacts) 
                                  FROM Account 
                                  WHERE Industry = 'Finance' LIMIT 5];
        
        for (Account acc : accounts) {
            System.debug('Account Name: ' + acc.Name);
            // Loop through child record sub-list
            for (Contact con : acc.Contacts) {
                System.debug(' -> Contact: ' + con.FirstName + ' ' + con.LastName + ' (' + con.Email + ')');
            }
        }
    }

    public static void printContactParents() {
        // Execute Child-to-Parent query
        List<Contact> contacts = [SELECT FirstName, LastName, Account.Name, Account.Industry 
                                  FROM Contact 
                                  WHERE Account.Industry = 'Finance' LIMIT 10];
        
        for (Contact con : contacts) {
            System.debug('Contact Name: ' + con.FirstName + ' ' + con.LastName + 
                         ' works at Account: ' + con.Account.Name);
        }
    }
}`
  },
  aggregates: {
    soql: `// Aggregate opportunities by Stage with filter and total rollup
SELECT StageName, 
       COUNT(Id) totalOpportunities, 
       SUM(Amount) totalAmount, 
       AVG(Amount) averageAmount
FROM Opportunity
GROUP BY ROLLUP(StageName)
HAVING SUM(Amount) > :minAmountThreshold`,
    cls: `public class OpportunityAggregateController {
    
    public class AggregateRow {
        public String stage;
        public Integer count;
        public Decimal sumAmount;
        public Decimal avgAmount;
    }

    public static List<AggregateRow> getOpportunityAggregates(Decimal minAmountThreshold) {
        List<AggregateRow> results = new List<AggregateRow>();
        
        // Execute aggregate query and load AggregateResult list
        List<AggregateResult> groupedResults = [
            SELECT StageName, 
                   COUNT(Id) opCount, 
                   SUM(Amount) opSum, 
                   AVG(Amount) opAvg
            FROM Opportunity
            GROUP BY ROLLUP(StageName)
            HAVING SUM(Amount) > :minAmountThreshold
        ];
        
        for (AggregateResult ar : groupedResults) {
            AggregateRow row = new AggregateRow();
            // Cast aggregated values (using aliases)
            row.stage = (String) ar.get('StageName');
            row.count = (Integer) ar.get('opCount');
            row.sumAmount = (Decimal) ar.get('opSum');
            row.avgAmount = (Decimal) ar.get('opAvg');
            results.add(row);
        }
        return results;
    }
}`
  },
  injection: {
    soql: `// 1. VULNERABLE DYNAMIC SOQL (Vulnerable to SOQL Injection)
String query = 'SELECT Id, Name, Rating FROM Account WHERE Name = \\'' + userInput + '\\'';
List<Account> accounts = Database.query(query);

// 2. SECURED DYNAMIC SOQL (Safe - Using Bind Variables)
String query = 'SELECT Id, Name, Rating FROM Account WHERE Name = :userInput';
List<Account> accounts = Database.query(query);

// 3. SECURED DYNAMIC SOQL (Safe - Using String Sanitization)
String sanitizedInput = String.escapeSingleQuotes(userInput);
String query = 'SELECT Id, Name, Rating FROM Account WHERE Name = \\'' + sanitizedInput + '\\'';
List<Account> accounts = Database.query(query);`,
    cls: `public class AccountSearchController {
    
    // \u274C VULNERABLE METHOD
    public static List<Account> searchVulnerable(String searchString) {
        // Direct string concatenation allows attackers to append clauses
        String query = 'SELECT Id, Name, Rating, Active__c FROM Account WHERE Name = \\'' + searchString + '\\'';
        return Database.query(query);
    }

    // \u2705 SECURED METHOD (BIND VARIABLE METHOD)
    public static List<Account> searchSecuredBind(String searchString) {
        // Database engine treats bind value strictly as data - SQL injection proof
        String query = 'SELECT Id, Name, Rating, Active__c FROM Account WHERE Name = :searchString';
        return Database.query(query);
    }

    // \u2705 SECURED METHOD (STRING ESCAPE METHOD)
    public static List<Account> searchSecuredEscape(String searchString) {
        // escapeSingleQuotes prevents closed quotes from modifying query structure
        String safeString = String.escapeSingleQuotes(searchString);
        String query = 'SELECT Id, Name, Rating, Active__c FROM Account WHERE Name = \\'' + safeString + '\\'';
        return Database.query(query);
    }
}`
  }
};
function PageSoqlRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("relationship");
  const [activeTab, setActiveTab] = useState("soql");
  const [copied, setCopied] = useState(false);
  const [queryType, setQueryType] = useState("parentToChild");
  const [queryResultJson, setQueryResultJson] = useState("");
  const [amountThreshold, setAmountThreshold] = useState(5e4);
  const [aggregateData, setAggregateData] = useState([]);
  const [injectionPayload, setInjectionPayload] = useState("Acme' OR Rating = 'Hot");
  const [injectionLogs, setInjectionLogs] = useState(null);
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);
  const copyCode = () => {
    const codeText = SOQL_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  const runRelationshipQuery = () => {
    if (queryType === "parentToChild") {
      const mockResult = [
        {
          Id: "0018W00002SpXqyQAF",
          Name: "Apex Finance Group",
          Industry: "Finance",
          AnnualRevenue: 52e5,
          Contacts: {
            totalSize: 2,
            done: true,
            records: [
              { Id: "0038W00002YtTzXQAF", FirstName: "David", LastName: "Miller", Email: "d.miller@apexfin.com", Title: "Managing Director" },
              { Id: "0038W00002YtTzYQAF", FirstName: "Sarah", LastName: "Conner", Email: "s.conner@apexfin.com", Title: "Lead Controller" }
            ]
          }
        },
        {
          Id: "0018W00002SpXqzQAF",
          Name: "Capital Venture Corp",
          Industry: "Finance",
          AnnualRevenue: 124e5,
          Contacts: {
            totalSize: 1,
            done: true,
            records: [
              { Id: "0038W00002YtTzZQAF", FirstName: "Robert", LastName: "Chen", Email: "r.chen@capventure.com", Title: "VP of Assets" }
            ]
          }
        }
      ];
      setQueryResultJson(JSON.stringify(mockResult, null, 2));
    } else {
      const mockResult = [
        {
          Id: "0038W00002YtTzXQAF",
          FirstName: "David",
          LastName: "Miller",
          Email: "d.miller@apexfin.com",
          Title: "Managing Director",
          Account: {
            Name: "Apex Finance Group",
            Industry: "Finance",
            AnnualRevenue: 52e5
          }
        },
        {
          Id: "0038W00002YtTzYQAF",
          FirstName: "Sarah",
          LastName: "Conner",
          Email: "s.conner@apexfin.com",
          Title: "Lead Controller",
          Account: {
            Name: "Apex Finance Group",
            Industry: "Finance",
            AnnualRevenue: 52e5
          }
        },
        {
          Id: "0038W00002YtTzZQAF",
          FirstName: "Robert",
          LastName: "Chen",
          Email: "r.chen@capventure.com",
          Title: "VP of Assets",
          Account: {
            Name: "Capital Venture Corp",
            Industry: "Finance",
            AnnualRevenue: 124e5
          }
        }
      ];
      setQueryResultJson(JSON.stringify(mockResult, null, 2));
    }
  };
  const calculateAggregates = () => {
    const stages = [
      { stage: "Prospecting", count: 12, sum: 45e3, avg: 3750 },
      { stage: "Qualification", count: 8, sum: 72e3, avg: 9e3 },
      { stage: "Proposal/Price Quote", count: 15, sum: 18e4, avg: 12e3 },
      { stage: "Negotiation/Review", count: 6, sum: 11e4, avg: 18333 },
      { stage: "Closed Won", count: 24, sum: 48e4, avg: 2e4 }
    ];
    let filtered = stages.filter((s) => s.sum > amountThreshold);
    let totalCount = filtered.reduce((a, b) => a + b.count, 0);
    let totalSum = filtered.reduce((a, b) => a + b.sum, 0);
    let avgAmount = totalCount > 0 ? Math.round(totalSum / totalCount) : 0;
    filtered.push({
      stage: "ROLLUP (Total Summary Row)",
      count: totalCount,
      sum: totalSum,
      avg: avgAmount,
      isRollup: true
    });
    setAggregateData(filtered);
  };
  const analyzeInjection = () => {
    let vulnerableQuery = `SELECT Id, Name, Rating FROM Account WHERE Name = '${injectionPayload}'`;
    let vulnerableStatus = "";
    let vulnerableRecords = [];
    if (injectionPayload.includes("' OR") || injectionPayload.includes("' AND")) {
      vulnerableStatus = "\u{1F6A8} INJECTION EXPLOIT SUCCESSFUL!";
      vulnerableRecords = [
        { Name: "Acme Corp", Rating: "Hot" },
        { Name: "Globex International", Rating: "Hot" },
        { Name: "Initech LLC", Rating: "Cold" },
        { Name: "Capital Venture", Rating: "Hot" }
      ];
    } else {
      vulnerableStatus = "\u{1F7E2} Single record lookup resolved.";
      vulnerableRecords = [
        { Name: injectionPayload, Rating: "Warm" }
      ];
    }
    const escapedInput = injectionPayload.replace(/'/g, "\\'");
    let securedQuery = `SELECT Id, Name, Rating FROM Account WHERE Name = '${escapedInput}'`;
    let securedStatus = "\u{1F6E1}\uFE0F INJECTION DEFENDED: Closed quotes successfully escaped.";
    let securedRecords = [];
    setInjectionLogs({
      vulnerableQuery,
      vulnerableStatus,
      vulnerableRecords,
      securedQuery,
      securedStatus,
      securedRecords
    });
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 } }, "SOQL Recipes Directory"), [
    { id: "relationship", name: "1. Relationship Queries", desc: "Parent-to-child subqueries & joins" },
    { id: "aggregates", name: "2. Aggregation & Rollups", desc: "GROUP BY, HAVING and ROLLUP totals" },
    { id: "injection", name: "3. Injection Defense", desc: "Dynamic SOQL sanitizing & binding" }
  ].map((rec) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: rec.id,
      onClick: () => setSelectedRecipe(rec.id),
      className: "hoverable",
      style: {
        textAlign: "left",
        padding: "14px 18px",
        background: selectedRecipe === rec.id ? "rgba(0,161,224,0.08)" : "rgba(255,255,255,0.02)",
        border: "1px solid " + (selectedRecipe === rec.id ? "var(--accent)" : "var(--line)"),
        borderRadius: 14,
        color: selectedRecipe === rec.id ? "white" : "var(--ink-2)",
        cursor: "pointer",
        transition: "all 0.2s"
      }
    },
    /* @__PURE__ */ React.createElement("strong", { style: { display: "block", fontSize: 13.5, marginBottom: 4 } }, rec.name),
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: selectedRecipe === rec.id ? "var(--accent-deep)" : "var(--ink-3)" } }, rec.desc)
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(10,18,48,0.25)", border: "1px solid var(--line)", padding: 24, borderRadius: 18 } }, selectedRecipe === "relationship" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Relationship queries (Inner Joins & Subqueries)"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Examines parent-to-child and child-to-parent join queries. Salesforce handles relationships natively: subqueries query children within the parent selection scope, while lookup dot-notation queries parent lookup attributes dynamically in one single SQL execution.")), selectedRecipe === "aggregates" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Aggregations, HAVING, and GROUP BY ROLLUP"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Demonstrates how to run heavy database calculations (counting records, summing amounts, extracting averages) directly inside the database index engine using GROUP BY, filter aggregate scopes with HAVING, and dynamically append total sum summaries with GROUP BY ROLLUP.")), selectedRecipe === "injection" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 20, fontWeight: 700, margin: "0 0 8px" } }, "Dynamic SOQL & SQL Injection Defenses"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 } }, "Provides code guidelines to secure dynamic database queries in Salesforce. Direct string concatenation can open vulnerabilities allowing attackers to bypass object filters. Securing requires bind variables or string escaping."))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" } }, "\u26A1 INTERACTIVE SANDBOX"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 } }, "DATABASE SIMULATOR")), selectedRecipe === "relationship" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "1. Select Query Schema Type"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "radio",
      name: "qtype",
      checked: queryType === "parentToChild",
      onChange: () => {
        setQueryType("parentToChild");
        setQueryResultJson("");
      },
      style: { cursor: "pointer" }
    }
  ), "Parent-to-Child (Subquery)"), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "radio",
      name: "qtype",
      checked: queryType === "childToParent",
      onChange: () => {
        setQueryType("childToParent");
        setQueryResultJson("");
      },
      style: { cursor: "pointer" }
    }
  ), "Child-to-Parent (Lookup Joins)"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: runRelationshipQuery, className: "btn primary hoverable", style: { width: "100%", justifyContent: "center", padding: "10px" } }, "\u{1F50D} Execute SOQL Query")), queryResultJson && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 11, color: "var(--ink-3)", marginBottom: 4 } }, "RETRIEVED DATA TREE (JSON ARRAY)"), /* @__PURE__ */ React.createElement("pre", { style: {
    padding: 12,
    background: "rgba(0,0,0,0.25)",
    border: "1px solid var(--line-2)",
    borderRadius: 8,
    fontSize: 11.5,
    color: "#2ecc71",
    maxHeight: 180,
    overflowY: "auto",
    fontFamily: "var(--font-mono)",
    margin: 0
  } }, queryResultJson))), selectedRecipe === "aggregates" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("label", null, "HAVING SUM(Amount) Threshold"), /* @__PURE__ */ React.createElement("strong", { style: { color: "var(--accent-deep)" } }, "$", amountThreshold.toLocaleString())), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "10000",
      max: "200000",
      step: "10000",
      value: amountThreshold,
      onChange: (e) => setAmountThreshold(parseInt(e.target.value)),
      style: { width: "100%", cursor: "pointer" }
    }
  ), /* @__PURE__ */ React.createElement("small", { style: { color: "var(--ink-3)", fontSize: 10.5 } }, "Filters out groups with combined amount below this limit.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: calculateAggregates, className: "btn primary hoverable", style: { width: "100%", justifyContent: "center", padding: "10px" } }, "\u{1F4CA} Calculate Aggregate Totals")), aggregateData.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--line-2)", paddingTop: 14, overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 12.5, textAlign: "left" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid var(--line)", color: "var(--ink-3)" } }, /* @__PURE__ */ React.createElement("th", { style: { padding: "6px 4px" } }, "StageName"), /* @__PURE__ */ React.createElement("th", { style: { padding: "6px 4px" } }, "Count"), /* @__PURE__ */ React.createElement("th", { style: { padding: "6px 4px" } }, "Sum(Amount)"), /* @__PURE__ */ React.createElement("th", { style: { padding: "6px 4px" } }, "Avg(Amount)"))), /* @__PURE__ */ React.createElement("tbody", null, aggregateData.map((row, i) => /* @__PURE__ */ React.createElement(
    "tr",
    {
      key: i,
      style: {
        borderBottom: "1px solid var(--line-2)",
        background: row.isRollup ? "rgba(0,161,224,0.08)" : "transparent",
        fontWeight: row.isRollup ? 700 : "normal",
        color: row.isRollup ? "var(--accent-deep)" : "white"
      }
    },
    /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px" } }, row.stage || "(null)"),
    /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px" } }, row.count),
    /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px" } }, "$", row.sum.toLocaleString()),
    /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px" } }, "$", row.avg.toLocaleString())
  )))))), selectedRecipe === "injection" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 } }, "1. Select/Type Database Exploit Payload"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: injectionPayload,
      onChange: (e) => setInjectionPayload(e.target.value),
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none",
        marginBottom: 8
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "Acme' OR Rating = 'Hot" }, "Vulnerable: Acme' OR Rating = 'Hot (Expose hot accounts)"),
    /* @__PURE__ */ React.createElement("option", { value: "Acme' AND AnnualRevenue > 5000000" }, "Vulnerable: Acme' AND AnnualRevenue > $5M"),
    /* @__PURE__ */ React.createElement("option", { value: "Acme Corp" }, "Safe Name: Acme Corp (Standard lookup)")
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: injectionPayload,
      onChange: (e) => setInjectionPayload(e.target.value),
      placeholder: "Or type custom injection payload...",
      style: {
        width: "100%",
        padding: "8px 12px",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        color: "white",
        outline: "none"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: analyzeInjection, className: "btn primary hoverable", style: { width: "100%", justifyContent: "center", padding: "10px" } }, "\u{1F6E1}\uFE0F Analyze Security Performance")), injectionLogs && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid var(--line-2)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, fontWeight: 700, color: "var(--ink-3)" } }, "1. VULNERABLE DYNAMIC QUERY CODE"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, background: "rgba(231,76,60,0.15)", color: "#e74c3c", padding: "2px 6px", borderRadius: 4, fontWeight: 700 } }, "EXPOSED")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: 10,
    background: "rgba(231,76,60,0.04)",
    border: "1px solid rgba(231,76,60,0.2)",
    borderRadius: 8,
    fontSize: 11,
    lineHeight: 1.4,
    fontFamily: "var(--font-mono)",
    color: "#f1c40f",
    marginTop: 4
  } }, injectionLogs.vulnerableQuery), /* @__PURE__ */ React.createElement("small", { style: { color: "#e74c3c", display: "block", marginTop: 4, fontSize: 11 } }, injectionLogs.vulnerableStatus, " Matches found: ", injectionLogs.vulnerableRecords.length, " records returned.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, fontWeight: 700, color: "var(--ink-3)" } }, "2. SECURED QUERY CODE"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, background: "rgba(46,204,113,0.15)", color: "#2ecc71", padding: "2px 6px", borderRadius: 4, fontWeight: 700 } }, "SECURE")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: 10,
    background: "rgba(46,204,113,0.04)",
    border: "1px solid rgba(46,204,113,0.2)",
    borderRadius: 8,
    fontSize: 11,
    lineHeight: 1.4,
    fontFamily: "var(--font-mono)",
    color: "var(--accent-deep)",
    marginTop: 4
  } }, injectionLogs.securedQuery), /* @__PURE__ */ React.createElement("small", { style: { color: "#2ecc71", display: "block", marginTop: 4, fontSize: 11 } }, injectionLogs.securedStatus, " Matches found: 0 records returned."))))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, border: "1px solid var(--line)", background: "rgba(3,6,18,0.7)" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--line)",
    padding: "10px 16px",
    background: "rgba(255,255,255,0.02)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, [
    { id: "soql", label: "SOQL Statement (.soql)" },
    { id: "cls", label: "Controller (.cls)" }
  ].map((tab) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      style: {
        background: activeTab === tab.id ? "rgba(0,161,224,0.12)" : "transparent",
        border: "none",
        color: activeTab === tab.id ? "white" : "var(--ink-3)",
        fontSize: 12.5,
        fontWeight: 600,
        padding: "6px 12px",
        borderRadius: 6,
        cursor: "pointer"
      }
    },
    tab.label
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn ghost hoverable",
      onClick: copyCode,
      style: {
        padding: "6px 14px",
        fontSize: 11,
        border: "1px solid var(--line-2)",
        borderRadius: 6,
        height: "auto",
        margin: 0
      }
    },
    copied ? "\u2713 Copied!" : "\u{1F4CB} Copy Code"
  )), /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: 20,
    overflowX: "auto",
    fontSize: 12.5,
    lineHeight: 1.5,
    fontFamily: "var(--font-mono)",
    color: "rgba(244,248,255,0.85)",
    background: "rgba(0,0,0,0.2)",
    height: 340,
    overflowY: "auto"
  } }, /* @__PURE__ */ React.createElement("code", null, SOQL_CODES[selectedRecipe][activeTab]))))));
}
Object.assign(window, { PageSoqlRecipes });


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
    flexWrap: "wrap",
    rowGap: 8,
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
    "Apex Race Sim"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("lwc"),
      className: "hoverable",
      style: {
        background: "transparent",
        border: "none",
        fontSize: 16,
        fontWeight: 700,
        color: activeTab === "lwc" ? "white" : "var(--ink-3)",
        borderBottom: activeTab === "lwc" ? "3px solid var(--accent)" : "3px solid transparent",
        padding: "8px 16px 12px",
        transition: "all 0.2s"
      }
    },
    "LWC Recipes"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("apex"),
      className: "hoverable",
      style: {
        background: "transparent",
        border: "none",
        fontSize: 16,
        fontWeight: 700,
        color: activeTab === "apex" ? "white" : "var(--ink-3)",
        borderBottom: activeTab === "apex" ? "3px solid var(--accent)" : "3px solid transparent",
        padding: "8px 16px 12px",
        transition: "all 0.2s"
      }
    },
    "Apex Recipes"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("agent"),
      className: "hoverable",
      style: {
        background: "transparent",
        border: "none",
        fontSize: 16,
        fontWeight: 700,
        color: activeTab === "agent" ? "white" : "var(--ink-3)",
        borderBottom: activeTab === "agent" ? "3px solid var(--accent)" : "3px solid transparent",
        padding: "8px 16px 12px",
        transition: "all 0.2s"
      }
    },
    "Agentforce Recipes"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("soql"),
      className: "hoverable",
      style: {
        background: "transparent",
        border: "none",
        fontSize: 16,
        fontWeight: 700,
        color: activeTab === "soql" ? "white" : "var(--ink-3)",
        borderBottom: activeTab === "soql" ? "3px solid var(--accent)" : "3px solid transparent",
        padding: "8px 16px 12px",
        transition: "all 0.2s"
      }
    },
    "SOQL Recipes"
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
  } }, l))))), activeTab === "lwc" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 30 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 28, margin: "0 0 10px" } }, "Lightning Web Component Recipes"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { fontSize: 15, maxWidth: 800 } }, "A collection of production-grade, highly-configurable Lightning Web Component recipes with interactive sandboxes and code sheets.")), /* @__PURE__ */ React.createElement(PageLwcRecipes, null)), activeTab === "apex" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 30 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 28, margin: "0 0 10px" } }, "Apex Recipes"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { fontSize: 15, maxWidth: 800 } }, "Robust Apex Backend patterns covering trigger bypass frameworks, queueable chaining pipelines, and dynamically generated HTTP mock utilities.")), /* @__PURE__ */ React.createElement(PageApexRecipes, null)), activeTab === "agent" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 30 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 28, margin: "0 0 10px" } }, "Agentforce Recipes"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { fontSize: 15, maxWidth: 800 } }, "Advanced Salesforce AI recipes: Invocable method Actions, Prompt Template resolvers, and conversational natural language classifier routers.")), /* @__PURE__ */ React.createElement(PageAgentRecipes, null)), activeTab === "soql" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 30 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 28, margin: "0 0 10px" } }, "SOQL Recipes"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { fontSize: 15, maxWidth: 800 } }, "Database query practices for complex child-parent joins, aggregate rollups, and robust defenses against dynamic query injections.")), /* @__PURE__ */ React.createElement(PageSoqlRecipes, null)), activeTab === "articles" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 36 } }, /* @__PURE__ */ React.createElement("h2", { className: "h-section", style: { fontSize: 28, margin: "0 0 10px" } }, "Published Knowledge Base"), /* @__PURE__ */ React.createElement("p", { className: "body-lg", style: { fontSize: 15, maxWidth: 800 } }, "Technical briefs and guides published directly from the standard Salesforce Knowledge base object (", /* @__PURE__ */ React.createElement("code", null, "Knowledge__kav"), ").")), ARTICLES.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 48, textPosition: "center", textAlign: "center", color: "var(--ink-3)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "cloud", size: 32, style: { marginBottom: 12, opacity: 0.3 } }), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 16 } }, "No Salesforce Knowledge articles published yet in this org.")) : /* @__PURE__ */ React.createElement("div", { style: {
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
const THEMES = [
  { id: "cyber-matrix", label: "Matrix", color: "#00F0FF" },
  { id: "hyperion", label: "Hyperion", color: "#F59E0B" },
  { id: "nebula", label: "Nebula", color: "#A855F7" },
  { id: "apex", label: "Apex", color: "#10B981" }
];
function ThemeSwitcher({ theme, setTheme }) {
  return /* @__PURE__ */ React.createElement("div", { className: "theme-selector", style: { margin: "0 6px" } }, THEMES.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t.id,
      className: "theme-btn hoverable" + (theme === t.id ? " active" : ""),
      onClick: () => setTheme(t.id),
      title: `Switch to ${t.label} theme`
    },
    /* @__PURE__ */ React.createElement("span", { className: "theme-dot-icon", style: { background: t.color, boxShadow: `0 0 6px ${t.color}` } }),
    /* @__PURE__ */ React.createElement("span", null, t.label)
  )));
}
function Nav({ route, go }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem("sf_theme") || "cyber-matrix";
  });
  const changeTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem("sf_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
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
  } }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark", style: { overflow: "hidden", border: "1px solid color-mix(in oklab, var(--accent) 40%, transparent)" } }, /* @__PURE__ */ React.createElement("img", { src: "uploads/YK.png", alt: "YK", style: { width: "100%", height: "100%", objectFit: "contain" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { lineHeight: 1.1, fontWeight: 700 } }, "Yusuf Khan"), /* @__PURE__ */ React.createElement("span", { className: "hud-badge", style: { padding: "2px 6px", fontSize: 9 } }, "\u25CF ONLINE")), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, color: "var(--ink-2)", fontSize: 11, fontFamily: "var(--font-body)", lineHeight: 1.1 } }, "Salesforce Lead Architect & SME"))), /* @__PURE__ */ React.createElement("div", { className: "nav-links" }, ROUTES.map((r) => /* @__PURE__ */ React.createElement(
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
  ))), /* @__PURE__ */ React.createElement("div", { className: "nav-cta-group", style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(ThemeSwitcher, { theme, setTheme: changeTheme }), /* @__PURE__ */ React.createElement("a", { className: "btn ghost hoverable", href: "#contact", onClick: (e) => {
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
  ))), drawerOpen && /* @__PURE__ */ React.createElement("div", { className: "mobile-drawer", role: "dialog", "aria-label": "Navigation menu" }, /* @__PURE__ */ React.createElement("button", { className: "drawer-close", "aria-label": "Close menu", onClick: () => setDrawerOpen(false) }, "\u2715"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 12, textTransform: "uppercase", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-3)", fontFamily: "var(--font-mono)" } }, "Select Futuristic Theme"), /* @__PURE__ */ React.createElement(ThemeSwitcher, { theme, setTheme: changeTheme }), /* @__PURE__ */ React.createElement("div", { style: { height: 16 } }), ROUTES.map((r) => /* @__PURE__ */ React.createElement(
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
  else if (route === "contact") Page = /* @__PURE__ */ React.createElement(PageContact, { go, mapplsToken: t.mapplsToken });
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
  )), /* @__PURE__ */ React.createElement(TweakSection, { title: "Effects" }, /* @__PURE__ */ React.createElement(TweakToggle, { label: "Lightning bolt cursor trail", value: t.boltTrail, onChange: (v) => setTweak("boltTrail", v) }), /* @__PURE__ */ React.createElement(TweakToggle, { label: "Custom cursor dot", value: t.showCursor, onChange: (v) => setTweak("showCursor", v) }), /* @__PURE__ */ React.createElement(TweakToggle, { label: "Trail companion mascot", value: t.mascot, onChange: (v) => setTweak("mascot", v) })), /* @__PURE__ */ React.createElement(TweakSection, { title: "Integrations" }, /* @__PURE__ */ React.createElement(
    TweakText,
    {
      label: "Mappls Access Token",
      value: t.mapplsToken || "",
      placeholder: "MapmyIndia SDK Token",
      onChange: (v) => setTweak("mapplsToken", v)
    }
  ))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
