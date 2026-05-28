// SVG icon set — pure inline, no deps. Stroke-based, sized via fontSize/em.
const Icon = ({ name, size = 18, color = "currentColor", style, className }) => {
  const S = (p) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>{p}</svg>;
  switch (name) {
    case "bolt": return S(<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill={color} stroke="none" />);
    case "cloud": return S(<path d="M7 18a4 4 0 010-8 6 6 0 0111-1 4 4 0 011 8H7z" />);
    case "code": return S(<><path d="M8 8l-4 4 4 4" /><path d="M16 8l4 4-4 4" /><path d="M14 4l-4 16" /></>);
    case "trail": return S(<><path d="M5 19c4 0 4-6 8-6s4-6 8-6" /><circle cx="5" cy="19" r="1.5" fill={color} /><circle cx="21" cy="7" r="1.5" fill={color} /></>);
    case "badge": return S(<><circle cx="12" cy="9" r="6" /><path d="M8 13l-2 8 6-3 6 3-2-8" /></>);
    case "spark": return S(<><path d="M12 3v4" /><path d="M12 17v4" /><path d="M3 12h4" /><path d="M17 12h4" /><path d="M5.6 5.6l2.8 2.8" /><path d="M15.6 15.6l2.8 2.8" /><path d="M5.6 18.4l2.8-2.8" /><path d="M15.6 8.4l2.8-2.8" /></>);
    case "arrow": return S(<><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>);
    case "arrow-up-right": return S(<><path d="M7 17L17 7" /><path d="M8 7h9v9" /></>);
    case "download": return S(<><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 21h16" /></>);
    case "mail": return S(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></>);
    case "linkedin": return S(<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7" /><path d="M8 7v.01" /><path d="M12 17v-4a2 2 0 014 0v4" /><path d="M12 10v7" /></>);
    case "github": return S(<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />);
    case "play": return S(<path d="M6 4l14 8-14 8V4z" fill={color} stroke="none" />);
    case "pause": return S(<><rect x="6" y="4" width="4" height="16" fill={color} stroke="none"/><rect x="14" y="4" width="4" height="16" fill={color} stroke="none"/></>);
    case "check": return S(<path d="M4 12l5 5 11-12" />);
    case "menu": return S(<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>);
    case "x": return S(<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>);
    case "star": return S(<path d="M12 3l2.6 6.3 6.4.5-5 4.3 1.7 6.4L12 17l-5.7 3.5 1.7-6.4-5-4.3 6.4-.5L12 3z" />);
    case "user": return S(<><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 5-6 8-6s7 2 8 6" /></>);
    case "globe": return S(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 010 18" /><path d="M12 3a14 14 0 000 18" /></>);
    case "shield": return S(<path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />);
    case "chart": return S(<><path d="M4 20V8" /><path d="M10 20V4" /><path d="M16 20v-9" /><path d="M22 20H2" /></>);
    case "diamond": return S(<path d="M6 3h12l4 6-10 12L2 9l4-6z" />);
    case "circle": return S(<circle cx="12" cy="12" r="9" />);
    case "play-fill": return S(<polygon points="6 4 20 12 6 20" fill={color} stroke="none" />);
    case "git": return S(<><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="12" r="2" /><path d="M6 8v8" /><path d="M16 12H8" /></>);
    case "database": return S(<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>);
    case "flow": return S(<><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><path d="M9 6h6" /><path d="M6 9v3a3 3 0 003 3" /><path d="M18 9v3a3 3 0 01-3 3" /></>);
    case "phone": return S(<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.8a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.5 2.8.6a2 2 0 011.8 2z" />);
    case "whatsapp": return S(<path fill={color} stroke="none" d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.27-.14-1.16-.43-2.22-1.37-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47-.16 0-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.57.66.21 1.25.18 1.72.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.1-.25-.16-.53-.3zM12 2a10 10 0 00-8.66 14.99L2 22l5.12-1.33A10 10 0 1012 2z" />);
    case "pin": return S(<><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></>);
    case "cmd": return S(<path d="M8 5a3 3 0 100 6h8a3 3 0 100-6 3 3 0 00-3 3v8a3 3 0 11-3 3 3 3 0 013-3h6a3 3 0 11-3 3" />);
    default: return null;
  }
};

// 3D-ish Salesforce-style cert badge — hexagon with center mark.
// Pure SVG, parameterized for size and theme.
function CertBadge({ title, sub, hue = 200, size = 200, spinning = false, kind = "admin", img }) {
  if (img) {
    return (
      <div style={{ width: size, height: size, perspective: 900 }}>
        <div className={spinning ? "badge-spin" : ""} style={{ width: "100%", height: "100%", transformStyle: "preserve-3d" }}>
          <img src={img} alt={title || "Salesforce Certification"} style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 12px 20px rgba(8,30,69,.5))" }} />
        </div>
        <style>{`
          .badge-spin { animation: badgeSpin 14s linear infinite; }
          @keyframes badgeSpin {
            0% { transform: rotateY(0deg) rotateX(8deg); }
            100% { transform: rotateY(360deg) rotateX(8deg); }
          }
        `}</style>
      </div>
    );
  }

  // hue gives subtle color variety per cert family
  const fillA = `hsl(${hue} 90% 60%)`;
  const fillB = `hsl(${hue + 18} 70% 35%)`;
  const fillC = `hsl(${hue - 10} 100% 80%)`;
  const ring = `hsl(${hue} 30% 96%)`;
  const ribbon = `hsl(${hue} 95% 28%)`;

  const KindGlyph = () => {
    const c = "#FFFFFF";
    const k = kind;
    if (k === "admin") return <g fill={c}><circle cx="100" cy="90" r="14"/><path d="M70 130c4-14 16-22 30-22s26 8 30 22z"/></g>;
    if (k === "platform") return <g fill={c} stroke={c} strokeWidth="3"><path d="M85 95l15 15 15-15" fill="none"/><rect x="85" y="80" width="30" height="6"/></g>;
    if (k === "service") return <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round"><path d="M80 100a20 20 0 0140 0v8a8 8 0 01-8 8h-3"/><rect x="78" y="100" width="10" height="14" rx="2" fill={c} stroke="none"/><rect x="113" y="100" width="10" height="14" rx="2" fill={c} stroke="none"/></g>;
    if (k === "omnistudio") return <g fill="none" stroke={c} strokeWidth="3"><circle cx="100" cy="100" r="22"/><circle cx="100" cy="100" r="12"/><path d="M100 78v44M78 100h44"/></g>;
    if (k === "agentforce") return <g fill={c}><circle cx="100" cy="100" r="20"/><circle cx="93" cy="96" r="3" fill={fillB}/><circle cx="107" cy="96" r="3" fill={fillB}/><rect x="92" y="105" width="16" height="4" rx="2" fill={fillB}/><rect x="98" y="76" width="4" height="6" fill={c}/></g>;
    if (k === "datacloud") return <g fill={c} stroke={c} strokeWidth="2"><ellipse cx="100" cy="86" rx="20" ry="6" fill={c}/><path d="M80 86v22c0 4 9 7 20 7s20-3 20-7V86" fill="none"/><path d="M80 100c0 4 9 7 20 7s20-3 20-7" fill="none"/></g>;
    if (k === "ai") return <g fill={c}><path d="M100 78l6 14 14 2-10 10 3 14-13-7-13 7 3-14-10-10 14-2z"/></g>;
    if (k === "associate") return <g fill="none" stroke={c} strokeWidth="4" strokeLinecap="round"><path d="M82 102l12 12 24-26"/></g>;
    if (k === "fsc") return <g fill={c}><rect x="82" y="92" width="36" height="22" rx="2"/><rect x="86" y="85" width="28" height="6" fill={fillB}/><circle cx="100" cy="103" r="4" fill={fillB}/></g>;
    if (k === "js") return <g fill={c}><rect x="78" y="78" width="44" height="44" rx="6"/><text x="100" y="110" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="800" fontSize="18" fill={fillB}>JS</text></g>;
    return null;
  };

  return (
    <div style={{ width: size, height: size, perspective: 900 }}>
      <div className={spinning ? "badge-spin" : ""} style={{ width: "100%", height: "100%", transformStyle: "preserve-3d" }}>
        <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ filter: "drop-shadow(0 18px 30px rgba(8,30,69,.25))" }}>
          <defs>
            <linearGradient id={`g-${hue}-a`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor={fillA}/>
              <stop offset="100%" stopColor={fillB}/>
            </linearGradient>
            <linearGradient id={`g-${hue}-shine`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,.65)"/>
              <stop offset="50%" stopColor="rgba(255,255,255,0)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,.18)"/>
            </linearGradient>
          </defs>
          {/* outer hex */}
          <polygon points="100,6 178,50 178,150 100,194 22,150 22,50" fill={ring} stroke="rgba(8,30,69,.08)" />
          {/* inner hex */}
          <polygon points="100,22 162,57 162,143 100,178 38,143 38,57" fill={`url(#g-${hue}-a)`} />
          {/* shine overlay */}
          <polygon points="100,22 162,57 162,143 100,178 38,143 38,57" fill={`url(#g-${hue}-shine)`} />
          {/* center glyph */}
          <KindGlyph />
          {/* ribbon bottom */}
          <g>
            <path d="M58 168 L100 178 L142 168 L142 196 L100 184 L58 196 Z" fill={ribbon}/>
          </g>
          {/* sub label band */}
          <rect x="44" y="120" width="112" height="30" rx="4" fill="rgba(255,255,255,.92)"/>
          <text x="100" y="140" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="12" fill={ribbon} letterSpacing="1.2">{sub}</text>
        </svg>
      </div>
      <style>{`
        .badge-spin { animation: badgeSpin 14s linear infinite; }
        @keyframes badgeSpin {
          0% { transform: rotateY(0deg) rotateX(8deg); }
          100% { transform: rotateY(360deg) rotateX(8deg); }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { Icon, CertBadge });
