// Home — Hero (Apex typewriter), About + dashboard, Trailhead-style skills trail, Testimonials, CTA.

function ApexTypewriter() {
  const lines = useMemo(() => ([
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
    { t: "}", c: "kw" },
  ]), []);

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
        // pause shorter on short lines
        const delay = target.length === 0 ? 60 : (target[j - 1] === " " ? 8 : 12);
        raf = setTimeout(tick, delay);
      } else {
        i++; j = 0;
        raf = setTimeout(tick, 40);
      }
    };
    raf = setTimeout(tick, 600);
    const bl = setInterval(() => setCursor(c => !c), 530);
    return () => { clearTimeout(raf); clearInterval(bl); };
  }, []);

  const colorFor = (c) => {
    if (c === "comment") return "color: #6E89B2";
    if (c === "kw") return "color: #FF6F00";
    if (c === "anno") return "color: #B14AED";
    if (c === "soql") return "color: #00A1E0";
    return "color: #E6EEF8";
  };

  return (
    <div style={{
      background: "linear-gradient(180deg, #0A1B3C, #061331)",
      borderRadius: 18, overflow: "hidden",
      border: "1px solid rgba(255,255,255,.08)",
      boxShadow: "0 30px 60px -20px rgba(0,30,80,.6), inset 0 1px 0 rgba(255,255,255,.06)",
      width: "100%", maxWidth: 560, color: "white"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.02)" }}>
        <span style={{ width: 10, height: 10, borderRadius: 99, background: "#FF5F57" }}></span>
        <span style={{ width: 10, height: 10, borderRadius: 99, background: "#FEBC2E" }}></span>
        <span style={{ width: 10, height: 10, borderRadius: 99, background: "#28C840" }}></span>
        <span style={{ marginLeft: 10, fontSize: 12, color: "rgba(255,255,255,.55)", fontFamily: "var(--font-mono)" }}>TrailblazerPortfolio.cls — Developer Console</span>
        <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--sf-blue)", fontFamily: "var(--font-mono)", letterSpacing: ".1em" }}>● LIVE</span>
      </div>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 13.5, lineHeight: 1.65, padding: "20px 22px",
        whiteSpace: "pre", overflow: "hidden", minHeight: 380
      }}>
        {shown.map((s, idx) => (
          <div key={idx} style={{ display: "flex", gap: 14 }}>
            <span style={{ color: "rgba(255,255,255,.22)", width: 22, textAlign: "right", flexShrink: 0 }}>{idx + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: colorize(s, lines[idx].c) }}></span>
            {idx === shown.length - 1 && cursor && <span style={{ background: "var(--sf-blue)", width: 8, height: 16, display: "inline-block", marginTop: 4, boxShadow: "0 0 10px var(--sf-blue)" }}></span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function colorize(s, c) {
  if (!s) return "&nbsp;";
  const esc = (x) => x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if (c === "comment") return `<span style="color:#6E89B2">${esc(s)}</span>`;
  if (c === "soql") return `<span style="color:#7BD3FF">${esc(s).replace(/(SELECT|FROM|WHERE|AND|ORDER BY|LIMIT|IN)/g, '<b style="color:#FFA85C;font-weight:700">$1</b>')}</span>`;
  if (c === "anno") return `<span style="color:#B14AED">${esc(s)}</span>`;
  // generic
  return esc(s)
    .replace(/(public|private|static|final|class|implements|inherited|sharing|return|void|List|Map|Set|Integer|String|Boolean|Opportunity)/g, '<span style="color:#FFA85C;font-weight:700">$1</span>')
    .replace(/(true|false)/g, '<span style="color:#FF7B72;font-weight:700">$1</span>')
    .replace(/('[^']*')/g, '<span style="color:#9DECC0">$1</span>')
    .replace(/(\d+)/g, '<span style="color:#FFD479">$1</span>')
    .replace(/(@\w+)/g, '<span style="color:#B14AED">$1</span>')
    .replace(/(\/\/[^\n]*)/g, '<span style="color:#6E89B2;font-style:italic">$1</span>');
}

function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const t = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  return (
    <span className="mono" style={{ fontVariantNumeric: "tabular-nums" }}>{t}</span>
  );
}

function StardustOnName({ targetRef }) {
  React.useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    let cancelled = false;

    function trigger() {
      if (cancelled || !target) return;

      // Pick a random point inside the name for the sparkle dot
      const tr = target.getBoundingClientRect();
      const localX = tr.width * (0.15 + Math.random() * 0.7);
      const localY = tr.height * (0.3 + Math.random() * 0.5);

      const dot = document.createElement("span");
      dot.className = "name-sparkle-dot";
      dot.style.left = localX + "px";
      dot.style.top = localY + "px";
      target.appendChild(dot);
      setTimeout(() => { try { target.removeChild(dot); } catch (e) { } }, 1000);

      target.classList.add("name-spark");
      setTimeout(() => target.classList.remove("name-spark"), 1400);
    }

    // first trigger after a short delay so it doesn't fire instantly
    let next = setTimeout(loop, 2200);
    function loop() {
      trigger();
      next = setTimeout(loop, 4500 + Math.random() * 3500);
    }

    return () => { cancelled = true; clearTimeout(next); };
  }, [targetRef]);

  return null;
}

function HeroMarquee() {
  const items = [
    "ADMINISTRATOR", "PLATFORM DEV I", "PLATFORM DEV II", "JS DEVELOPER I",
    "SERVICE CLOUD", "OMNISTUDIO DEV", "FSC CONSULTANT", "AGENTFORCE",
    "DATA CLOUD", "AI ASSOCIATE", "AI SPECIALIST", "SF ASSOCIATE",
  ];
  // duplicate for seamless loop
  const row = [...items, ...items];
  return (
    <div style={{
      position: "fixed", left: 0, right: 0, bottom: 0,
      borderTop: "1px solid rgba(255,255,255,.10)",
      borderBottom: "1px solid rgba(255,255,255,.10)",
      background: "rgba(6,11,34,.4)", backdropFilter: "blur(10px)",
      overflow: "hidden", zIndex: 100,
      maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
    }}>
      <div style={{
        display: "flex", gap: 0, padding: "16px 0",
        whiteSpace: "nowrap",
        animation: "marquee 40s linear infinite",
        width: "max-content",
      }}>
        {row.map((it, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 20,
            color: "rgba(255,255,255,.7)",
            fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600,
            letterSpacing: ".14em", padding: "0 24px",
          }}>
            {it}
            <Icon name="bolt" size={14} color="rgba(255,180,90,.85)" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function HeroSection({ go }) {
  const nameRef = React.useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const on = (e) => {
      setParallax({
        x: (e.clientX / window.innerWidth - .5) * 30,
        y: (e.clientY / window.innerHeight - .5) * 20,
      });
    };
    window.addEventListener("pointermove", on);
    return () => window.removeEventListener("pointermove", on);
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: "min(900px, 100vh)",
      height: "calc(100vh - 65px)",
      minWidth: 0,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(120% 100% at 50% 0%, #0a1b3c 0%, #060B22 45%, transparent 100%)",
      color: "white",
      marginTop: -56, // pull up under page-shell padding-top
      paddingTop: 56,
    }}>
      {/* starfield + nebula */}
      <StarField />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        <div style={{
          position: "absolute", width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,161,224,.35), transparent 65%)",
          top: "-15%", left: "-10%", filter: "blur(50px)", animation: "blob1 22s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute", width: 900, height: 900, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(127,0,255,.34), transparent 65%)",
          bottom: "-25%", right: "-15%", filter: "blur(60px)", animation: "blob2 28s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,119,176,.20), transparent 70%)",
          top: "30%", left: "55%", filter: "blur(60px)", animation: "blob3 32s ease-in-out infinite"
        }} />
        <style>{`
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
        `}</style>
      </div>

      {/* 3D orb behind type */}
      <div style={{
        position: "absolute",
        top: "-55%",
        right: 0,
        zIndex: 2,
        pointerEvents: "auto",
        transform: `translate(${parallax.x * .4}px, ${parallax.y * .4}px)`,
      }}>
        <div style={{
          width: "min(920px, 92vw)",
          height: "min(920px, 92vw)",
          opacity: .9,
        }}>
          <ThreeOrb height={920} bare={true} />
        </div>
      </div>

      {/* Foreground content */}
      <div className="container" style={{
        position: "relative", zIndex: 3, textAlign: "center",
        transform: `translate(${parallax.x * -.2}px, ${parallax.y * -.2}px)`,
        pointerEvents: "none",
      }}>
        {/* top bar */}
        {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute", top: 16, left: 0, right: 0, pointerEvents: "auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 14px", borderRadius: 999,
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.12)",
            backdropFilter: "blur(10px)",
            fontSize: 11.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase",
            color: "rgba(255,255,255,.92)",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: 99, background: "#2E844A", animation: "pulseDot 2s infinite" }}></span>
            Available · Q3 2026
          </div>
          <div className="mono" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 14px", borderRadius: 999,
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.10)",
            backdropFilter: "blur(10px)",
            fontSize: 11.5, fontWeight: 600, letterSpacing: ".1em",
            color: "rgba(255,255,255,.7)",
          }}>
            <LiveClock /> IST · 16 MAY 26
          </div>
        </div> */}

        {/* small eyebrow */}
        {/* <div style={{ marginBottom: 18 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 14px", borderRadius: 99,
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(180,230,255,.20)",
            fontFamily: "var(--font-mono)",
            fontSize: 10.5, letterSpacing: ".22em", textTransform: "uppercase",
            color: "rgba(180,230,255,.92)", fontWeight: 700,
            animation: "letterIn .7s ease both",
          }}>
            <Icon name="bolt" size={11} color="#FFB75D" /> Salesforce · Lead Developer · 12× certified
          </span>
        </div> */}

        {/* HELLO I AM YUSUF KHAN Wordmark - exact replication of spiderman-intro style, font, and placement */}
        <h1 className="wordmark anim-word" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          fontFamily: "'Anton', system-ui, sans-serif",
          fontSize: "clamp(80px, 13vw, 220px)",
          letterSpacing: ".005em",
          lineHeight: .85,
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
          marginTop: "20px",
        }}>
          <span style={{
            fontSize: "0.33em",
            lineHeight: 1,
            marginBottom: "-8px",
            paddingLeft: "6px",
            fontFamily: "'Anton', sans-serif"
          }}>
            HELLO I AM
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <span className="split" style={{ display: "inline-block", fontFamily: "'Anton', sans-serif" }}>YUSUF</span>
            <span className="accent" style={{ display: "inline-block", fontFamily: "'Anton', sans-serif", color: "#FFFFFF" }}>KHAN</span>
          </div>
        </h1>

        <p style={{
          fontSize: "clamp(15px, 1.4vw, 19px)",
          lineHeight: 1.5,
          maxWidth: 640,
          margin: "0 auto 40px",
          color: "rgba(255,255,255,.78)",
          fontWeight: 500,
          animation: "letterIn .8s ease .45s both",
          textAlign: "center",
        }}>
          I architect &amp; ship enterprise <strong style={{ color: "white" }}>Salesforce</strong> platforms across
          <strong style={{ color: "#6BB7FF" }}> banking</strong>,
          <strong style={{ color: "#FF9F66" }}> retail</strong> and
          <strong style={{ color: "#B57BFF" }}> lending</strong> —
          clean Apex, fast LWCs, automations that scale.
        </p>

        {/* CTAs */}
        <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center", pointerEvents: "auto", animation: "letterIn .8s ease .6s both" }}>
          <button className="btn primary hoverable" onClick={() => go("projects")} style={{
            background: "linear-gradient(90deg, #00A1E0, #7F00FF)",
            boxShadow: "0 18px 40px -12px rgba(127,0,255,.6)",
            padding: "14px 24px", fontSize: 14,
          }}>
            See case studies <Icon name="arrow" size={16} />
          </button>
          <button className="btn ghost hoverable" onClick={() => go("certs")} style={{
            background: "rgba(255,255,255,.06)", color: "white", borderColor: "rgba(255,255,255,.18)",
            padding: "14px 24px", fontSize: 14,
          }}>
            <Icon name="badge" size={16} /> 12 certifications
          </button>
        </div>

        {/* Stats strip */}
        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          maxWidth: 720,
          marginLeft: "auto", marginRight: "auto",
          borderTop: "1px solid rgba(255,255,255,.10)",
          borderBottom: "1px solid rgba(255,255,255,.10)",
          background: "rgba(255,255,255,.025)",
          backdropFilter: "blur(8px)",
          animation: "letterIn .8s ease .75s both",
          pointerEvents: "auto",
        }}>
          {[
            ["12", "Certs"],
            ["6+", "Years"],
            ["8+", "Projects"],
            ["294K+", "Trailhead Points"],
          ].map(([n, l], i) => (
            <div key={l} style={{
              padding: "16px 12px",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,.10)" : "none",
            }}>
              <div className="h-display" style={{ fontSize: 30, fontWeight: 800, color: "white" }}>{n}</div>
              <div style={{ color: "rgba(255,255,255,.55)", fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".14em", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Drag hint */}
      <div style={{
        position: "absolute", left: 24, bottom: 80, zIndex: 4, pointerEvents: "none",
        fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255,255,255,.55)",
        letterSpacing: ".14em", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 3v8M10 11l-3-3M10 11l3-3M5 14v3M10 14v3M15 14v3" />
        </svg>
        {/* Drag the orbit */}
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", right: 24, bottom: 80, zIndex: 4, pointerEvents: "none",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255,255,255,.55)",
        letterSpacing: ".14em", textTransform: "uppercase",
      }}>
        {/* <span>Scroll</span> */}
        <div style={{ width: 18, height: 28, borderRadius: 12, border: "1px solid rgba(255,255,255,.4)", position: "relative", overflow: "hidden" }}>
          <span style={{
            position: "absolute", top: 5, left: "50%", marginLeft: -2,
            width: 4, height: 7, borderRadius: 2, background: "rgba(255,255,255,.85)",
            animation: "scrollCue 1.8s infinite",
          }}></span>
        </div>
      </div>

      {/* Bottom marquee */}
      <HeroMarquee />
    </section>
  );
}

// Apex typewriter, now in its own showcase strip below the cinematic hero
function ApexShowcase() {
  return (
    <section style={{ padding: "0px 0 60px", borderTop: "none" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
        <div>
          <span className="eyebrow"><span className="dot"></span> Live Apex · this very page</span>
          <h2 className="h-section" style={{ margin: "16px 0 18px" }}>The hiring code, written in Apex.</h2>
          <p className="body-lg" style={{ marginBottom: 22 }}>
            A live developer console rendering a class that defines me — public, sealed,
            and fully governor-limit aware. Watch it type itself.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div className="card hoverable" style={{ padding: 18 }}>
              <Icon name="code" size={20} color="var(--accent)" />
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginTop: 8, fontSize: 16 }}>Clean Apex</div>
              <div style={{ color: "var(--ink-2)", fontSize: 13, marginTop: 4 }}>91% test coverage · 0 P1s</div>
            </div>
            <div className="card hoverable" style={{ padding: 18 }}>
              <Icon name="database" size={20} color="var(--accent)" />
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginTop: 8, fontSize: 16 }}>SOQL discipline</div>
              <div style={{ color: "var(--ink-2)", fontSize: 13, marginTop: 4 }}>Selective queries · bulk-safe</div>
            </div>
          </div>
        </div>
        <ApexTypewriter />
      </div>
    </section>
  );
}

function FloatingChip({ children, top, right, bottom, left, delay = 0 }) {
  return (
    <div className="hoverable" style={{
      position: "absolute", top, right, bottom, left, zIndex: 2,
      background: "white", border: "1px solid var(--line-2)", borderRadius: 999,
      padding: "8px 14px", fontSize: 13, fontWeight: 600,
      display: "flex", alignItems: "center", gap: 8,
      boxShadow: "var(--shadow-2)",
      animation: `chipFloat 6s ease-in-out infinite ${delay}s, chipIn .8s ease ${delay}s both`,
    }}>
      {children}
      <style>{`
        @keyframes chipFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes chipIn { 0%{opacity:0; transform: translateY(20px) scale(.9)} 100%{opacity:1; transform: none} }
      `}</style>
    </div>
  );
}

// Animated counter
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
    }, { threshold: .3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

function OrgHealthDashboard() {
  // Live-ish counters animation for the dashboard
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick(t => t + 1), 1500);
    return () => clearInterval(i);
  }, []);
  const cpu = 38 + (tick * 7) % 22;
  const apiPct = 12 + (tick * 3) % 8;
  const latency = 142 + ((tick * 11) % 60);

  return (
    <div className="card" style={{ padding: 24, borderRadius: 22, background: "linear-gradient(180deg, #0A1B3C, #061331)", border: "1px solid rgba(255,255,255,.08)", color: "white", overflow: "hidden", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--sf-success)", boxShadow: "0 0 12px var(--sf-success)" }}></span>
          <strong style={{ fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>org_health.live</strong>
        </div>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,.45)", fontFamily: "var(--font-mono)" }}>refreshing every 1.5s</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 18 }}>
        <DashCard label="Apex CPU" value={cpu} unit="%" max={100} hue={200} />
        <DashCard label="API usage" value={apiPct} unit="%" max={100} hue={150} />
        <DashCard label="P95 latency" value={latency} unit="ms" max={400} hue={30} />
      </div>

      <div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,.5)", fontFamily: "var(--font-mono)", marginBottom: 8, letterSpacing: ".08em", textTransform: "uppercase" }}>Recent transactions</div>
        <Sparkline />
      </div>

      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 90% 10%, rgba(0,161,224,.25), transparent 50%)", pointerEvents: "none" }}></div>
    </div>
  );
}

function DashCard({ label, value, unit, max, hue }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, padding: 14 }}>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700 }}>
        {value}<span style={{ fontSize: 14, color: "rgba(255,255,255,.5)", marginLeft: 2 }}>{unit}</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,.08)", borderRadius: 99, marginTop: 10, overflow: "hidden" }}>
        <div style={{ height: "100%", width: pct + "%", background: `linear-gradient(90deg, hsl(${hue} 80% 55%), hsl(${hue + 30} 90% 65%))`, transition: "width .8s ease" }}></div>
      </div>
    </div>
  );
}

function Sparkline() {
  const [points, setPoints] = useState(() => Array.from({ length: 40 }, () => Math.random() * .6 + .2));
  useEffect(() => {
    const i = setInterval(() => {
      setPoints(p => [...p.slice(1), Math.random() * .8 + .15]);
    }, 600);
    return () => clearInterval(i);
  }, []);
  const w = 100, h = 28;
  const path = points.map((y, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * w} ${h - y * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: 56 }}>
      <defs>
        <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--sf-blue)" stopOpacity=".4" />
          <stop offset="100%" stopColor="var(--sf-blue)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#spark-fill)" />
      <path d={path} stroke="var(--sf-blue)" strokeWidth=".7" fill="none" />
    </svg>
  );
}

function AboutSection() {
  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <span className="eyebrow"><span className="dot"></span> About</span>
          <h2 className="h-section" style={{ margin: "16px 0 18px" }}>Engineering the customer 360, one trail at a time.</h2>
          <p className="body-lg">
            Over the last eight years, I've led teams shipping Salesforce platforms for retail banks, lenders and omni-channel commerce — from greenfield org design to migrating legacy systems onto Data Cloud and Agentforce. I'm happiest when I'm bridging architecture, business outcomes and clean code.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 28 }}>
            {[
              ["Architect mindset", "Multi-cloud design, governance, scale"],
              ["Hands-on dev", "Apex, LWC, OmniStudio, Flows"],
              ["AI-forward", "Agentforce, Einstein, Data Cloud"],
              ["Vertical depth", "Banking, FSC, Retail, Lending"],
            ].map(([t, d]) => (
              <div key={t} className="card" style={{ padding: 16 }}>
                <strong style={{ fontSize: 14, fontFamily: "var(--font-display)" }}>{t}</strong>
                <div style={{ color: "var(--ink-2)", fontSize: 13, marginTop: 4 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
        <OrgHealthDashboard />
      </div>
    </section>
  );
}

function SkillsTrail() {
  const stages = [
    { name: "Apex & Triggers & Flow", level: "Master", x: .07 },
    { name: "LWC & AUra", level: "Master", x: .2 },
    { name: "OmniStudio", level: "Master", x: .33 },
    { name: "Service & Sales Cloud", level: "Expert", x: .47 },
    { name: "FSC & Experience Cloud", level: "Expert", x: .6 },
    { name: "Agentforce & Data Cloud", level: "Expert", x: .73 },
    { name: "Architecture & DevOps", level: "Senior", x: .87 }
  ];

  // Build winding path through points
  const pathPoints = stages.map((s, i) => {
    const y = .5 + Math.sin(i * 1.1) * .35;
    return { x: s.x * 1100 + 50, y: y * 240 + 30 };
  });

  const d = pathPoints.reduce((acc, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[i - 1];
    const cx1 = (prev.x + p.x) / 2;
    return `${acc} C ${cx1} ${prev.y}, ${cx1} ${p.y}, ${p.x} ${p.y}`;
  }, "");

  return (
    <section style={{ padding: "50px 0", background: "linear-gradient(180deg, var(--sf-cloud), var(--bg))" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40 }}>
          <div>
            <span className="eyebrow"><span className="dot"></span> The Trail</span>
            <h2 className="h-section" style={{ margin: "16px 0 0" }}>Skills, mapped as a trail.</h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--ink-2)" }}>Every stop is a domain I've shipped production work in — hover the markers to inspect.</p>
        </div>

        <div style={{ padding: 32, borderRadius: 24, position: "relative", overflow: "hidden" }}>
          <div className="dot-bg" style={{ position: "absolute", inset: 0, opacity: .35 }}></div>
          <svg viewBox="0 0 1200 300" style={{ width: "100%", height: 300, position: "relative" }}>
            <defs>
              <linearGradient id="trail-stroke" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--sf-blue)" />
                <stop offset="100%" stopColor="var(--sf-trail)" />
              </linearGradient>
              <linearGradient id="liquid-flow" x1="0" x2="1">
                <stop offset="0%" stopColor="#00A1E0" stopOpacity="0">
                  <animate attributeName="offset" values="-1; 0.7" dur="3.6s" repeatCount="indefinite" />
                </stop>
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1">
                  <animate attributeName="offset" values="-0.9; 0.8" dur="3.6s" repeatCount="indefinite" />
                </stop>
                <stop offset="0%" stopColor="#FFB75D" stopOpacity="0">
                  <animate attributeName="offset" values="-0.7; 1" dur="3.6s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              <filter id="trail-glow"><feGaussianBlur stdDeviation="6" /></filter>
              {/* Liquid filter — turbulence + displacement that morphs over time */}
              <filter id="liquid" x="-20%" y="-50%" width="140%" height="200%">
                <feTurbulence type="fractalNoise" baseFrequency="0.025 0.06" numOctaves="2" seed="3" result="noise">
                  <animate attributeName="baseFrequency" values="0.025 0.06; 0.04 0.08; 0.025 0.06" dur="6s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                <feGaussianBlur stdDeviation="0.6" />
              </filter>
              {/* Goo filter for blobby head */}
              <filter id="goo" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>

            {/* dashed bg path */}
            <path d={d} stroke="rgba(8,30,69,.16)" strokeWidth="3" fill="none" strokeDasharray="2 8" strokeLinecap="round" />

            {/* WIDE liquid halo — turbulence-distorted, gently breathing */}
            <g filter="url(#liquid)" opacity=".55">
              <path d={d} stroke="url(#trail-stroke)" strokeWidth="22" fill="none" strokeLinecap="round" filter="url(#trail-glow)">
                <animate attributeName="stroke-width" values="18; 28; 18" dur="4.5s" repeatCount="indefinite" />
              </path>
            </g>

            {/* Liquid body — main flowing stroke with traveling dash pattern (the "current") */}
            <path id="liquid-trail" d={d} stroke="url(#trail-stroke)" strokeWidth="6" fill="none" strokeLinecap="round"
              filter="url(#liquid)" opacity=".95" />

            {/* Flowing highlight — dashed pattern moving along path simulates fluid in motion */}
            <path d={d} stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round"
              strokeDasharray="6 28" opacity=".85">
              <animate attributeName="stroke-dashoffset" from="0" to="-340" dur="3.2s" repeatCount="indefinite" />
            </path>
            <path d={d} stroke="#B6E6FF" strokeWidth="1.4" fill="none" strokeLinecap="round"
              strokeDasharray="2 38" opacity=".7">
              <animate attributeName="stroke-dashoffset" from="0" to="-400" dur="2.6s" repeatCount="indefinite" />
            </path>

            {/* Inner thin crisp line so the path is always readable */}
            <path d={d} stroke="url(#trail-stroke)" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".85" />

            {/* Traveling droplet head — gooey blob sliding along the path */}
            <g filter="url(#goo)">
              <circle r="8" fill="#FFB75D">
                <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#liquid-trail" />
                </animateMotion>
                <animate attributeName="r" values="6; 10; 6" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <circle r="5" fill="#FFFFFF">
                <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="-.08s">
                  <mpath href="#liquid-trail" />
                </animateMotion>
              </circle>
              {/* trailing droplets break off behind */}
              <circle r="3" fill="#00A1E0" opacity=".9">
                <animateMotion dur="6s" repeatCount="indefinite" begin="-.25s">
                  <mpath href="#liquid-trail" />
                </animateMotion>
              </circle>
              <circle r="2" fill="#00A1E0" opacity=".7">
                <animateMotion dur="6s" repeatCount="indefinite" begin="-.45s">
                  <mpath href="#liquid-trail" />
                </animateMotion>
              </circle>
            </g>

            {pathPoints.map((p, i) => (
              <g key={i} className="hoverable" data-cursor="hover">
                {/* ripple ring at each station — staggered */}
                <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity=".5">
                  <animate attributeName="r" values="14;26;14" dur="2.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".6;0;.6" dur="2.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={p.x} cy={p.y} r="14" fill="white" stroke="var(--accent)" strokeWidth="2" />
                <circle cx={p.x} cy={p.y} r="6" fill="var(--accent)">
                  <animate attributeName="r" values="6;7.5;6" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                </circle>
                <g transform={`translate(${p.x}, ${p.y + (i % 2 === 0 ? -40 : 36)})`}>
                  <rect x="-72" y="-14" width="144" height="28" rx="14" fill="white" stroke="var(--line-2)" />
                  <text textAnchor="middle" y="-1" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="11.5" fill="black">{stages[i].name}</text>
                  <text textAnchor="middle" y="10" fontFamily="JetBrains Mono, monospace" fontWeight="600" fontSize="9" fill="var(--accent)" letterSpacing="1">{stages[i].level.toUpperCase()}</text>
                </g>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Over the time we've worked together, Yusuf has consistently demonstrated a deep understanding of Salesforce and a remarkable ability to turn complex requirements into efficient, scalable solutions. Yusuf excels in coding, technical design, and translating business needs into practical Salesforce applications. His proactive approach to problem-solving, attention to detail, and ability to stay up-to-date with Salesforce’s latest features make him an invaluable asset to any team.",
      who: "Suresh Kaliamoorthi",
      title: "Salesforce Architect",
      initials: "SK",
    },
    {
      q: "Having worked closely with Yusuf at Prodapt for more than a year, I have seen firsthand the exceptional qualities that make him a valuable asset to any team. Yusuf is a highly skilled professional with a deep knowledge of OmniStudio and Communications cloud. He consistently demonstrated excellent problem-solving abilities, technical expertise, initiative and strong work ethic in our time working together. He has always been a reliable and proactive member of the team.",
      who: "Milena Garro",
      title: "Salesforce & Vlocity Developer",
      initials: "MG",
    },
    {
      q: "I had the pleasure of working with Yusuf on a crucial, highly complex project with a tight deadline. His exceptional organizational skills, quick problem-solving abilities, eagerness to embrace new technologies, and strong leadership qualities were truly impressive.",
      who: "Nikunj Vadi",
      title: "Salesforce Technical Lead/Architect",
      initials: "NV",
    },
    {
      q: "Yusuf always wears a techy cap for solutioning problems. Very innovative in suggesting solutions. A good technical expert in the making. All the very best Yusuf for all your endeavours.",
      who: "Muthu Kumar Sundaram",
      title: "Solution Architect",
      initials: "MS",
    },
  ];
  return (
    <section style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="eyebrow"><span className="dot"></span> Kind words</span>
          <h2 className="h-section" style={{ margin: "16px auto 0", maxWidth: 740 }}>Feedback from those I've built clouds with</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {items.map((t, i) => (
            <blockquote key={i} className="card hoverable" style={{ padding: 24, margin: 0, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "rgba(10, 20, 50, 0.45)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}>
              <div>
                <Icon name="star" size={16} color="var(--sf-trail)" />
                <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: "14px 0 22px", color: "rgba(255, 255, 255, 0.8)", fontStyle: "italic", fontWeight: 400 }}>"{t.q}"</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 99, background: "linear-gradient(135deg, #00A1E0, #7F00FF)", color: "white", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 13, color: "white", fontWeight: 700 }}>{t.who}</div>
                  <div style={{ fontSize: 11, color: "rgba(255, 255, 255, 0.5)", marginTop: 2, fontWeight: 500 }}>{t.title}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
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
      w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    // build stars
    stars = Array.from({ length: 180 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.4 + .25,
      a: Math.random() * .6 + .3,
      tw: Math.random() * 2 * Math.PI,
      sp: .5 + Math.random() * 1.5,
      hue: 200 + Math.random() * 80,
    }));
    let t = 0, lastShoot = 0;
    const tick = () => {
      t += .016;
      ctx.clearRect(0, 0, w, h);
      // soft nebula blobs
      const g1 = ctx.createRadialGradient(w * .2, h * .3, 0, w * .2, h * .3, w * .5);
      g1.addColorStop(0, "rgba(127,0,255,.28)");
      g1.addColorStop(1, "rgba(127,0,255,0)");
      ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h);
      const g2 = ctx.createRadialGradient(w * .85, h * .75, 0, w * .85, h * .75, w * .55);
      g2.addColorStop(0, "rgba(0,161,224,.30)");
      g2.addColorStop(1, "rgba(0,161,224,0)");
      ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
      const g3 = ctx.createRadialGradient(w * .55, h * .15, 0, w * .55, h * .15, w * .4);
      g3.addColorStop(0, "rgba(255,99,180,.18)");
      g3.addColorStop(1, "rgba(255,99,180,0)");
      ctx.fillStyle = g3; ctx.fillRect(0, 0, w, h);

      // stars
      for (const s of stars) {
        const tw = .55 + Math.sin(t * s.sp + s.tw) * .45;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 95%, 80%, ${s.a * tw})`;
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      // occasional shooting star
      if (t - lastShoot > 3.4 + Math.random() * 2.4) {
        lastShoot = t;
        shooters.push({
          x: Math.random() * w * .6, y: Math.random() * h * .4,
          vx: 4 + Math.random() * 4, vy: 1.5 + Math.random() * 1.4,
          life: 0,
        });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.life++;
        sh.x += sh.vx; sh.y += sh.vy;
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
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}></canvas>;
}

function CTAStrip({ go }) {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="card hoverable" style={{
          borderRadius: 28, padding: "72px 56px",
          background: "radial-gradient(ellipse at 30% 20%, #1A0A3C 0%, #0A1B3C 40%, #060B22 100%)",
          color: "white", overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,.10)",
          boxShadow: "0 40px 80px -30px rgba(20,5,60,.6), inset 0 1px 0 rgba(255,255,255,.07)"
        }}>
          <StarField />

          {/* AI orbit ring */}
          <div aria-hidden="true" style={{
            position: "absolute", top: "50%", right: -120, width: 520, height: 520,
            transform: "translateY(-50%)", borderRadius: "50%",
            border: "1px dashed rgba(180,230,255,.18)",
            animation: "ringSpin 30s linear infinite",
          }}></div>
          <div aria-hidden="true" style={{
            position: "absolute", top: "50%", right: -180, width: 640, height: 640,
            transform: "translateY(-50%)", borderRadius: "50%",
            border: "1px dashed rgba(180,230,255,.10)",
            animation: "ringSpin 50s linear infinite reverse",
          }}></div>

          <style>{`
            @keyframes ringSpin { to { transform: translateY(-50%) rotate(360deg); } }
            @keyframes aiShimmer {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
          `}</style>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap", zIndex: 2 }}>
            <div style={{ maxWidth: 620 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 12px", borderRadius: 99,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(180,230,255,.18)",
                fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase",
                color: "rgba(255,255,255,.85)", marginBottom: 18,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: "#B57BFF", boxShadow: "0 0 10px #B57BFF" }}></span>
                Agentforce · Einstein · Data Cloud
              </span>
              <h3 className="h-display" style={{ fontSize: 52, lineHeight: 1.0, marginBottom: 16, fontWeight: 800 }}>
                Got a hard <span style={{
                  backgroundImage: "linear-gradient(90deg, #B57BFF, #00D4FF, #FF77B0, #B57BFF)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text", color: "transparent",
                  animation: "aiShimmer 6s linear infinite",
                }}>AI × Salesforce</span> problem?<br />
                <span style={{ color: "rgba(255,255,255,.92)" }}>Let's build it together.</span>
              </h3>
              <p className="body-lg" style={{ color: "rgba(255,255,255,.7)", maxWidth: 560 }}>Open to lead developer engagements, architecture reviews, and Agentforce / AI roadmaps. The galaxy is wide — let's pick a star.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
                <button className="btn primary hoverable" onClick={() => go("contact")} style={{ background: "linear-gradient(90deg, #00A1E0, #7F00FF)", boxShadow: "0 16px 40px -10px rgba(127,0,255,.5)" }}>
                  Start a project <Icon name="arrow" size={16} />
                </button>
                <button className="btn ghost hoverable" onClick={() => go("contact")} style={{ background: "rgba(255,255,255,.06)", color: "white", borderColor: "rgba(255,255,255,.18)" }}>
                  <Icon name="download" size={16} /> Resume
                </button>
              </div>
            </div>

            {/* AI core glyph — central orb with orbiting electrons */}
            <div style={{ position: "relative", width: 220, height: 220, flexShrink: 0 }}>
              <div style={{
                position: "absolute", inset: "50% auto auto 50%", transform: "translate(-50%,-50%)",
                width: 110, height: 110, borderRadius: "50%",
                background: "radial-gradient(circle at 35% 30%, #FFFFFF 0%, #B57BFF 25%, #7F00FF 60%, #1A0A3C 100%)",
                boxShadow: "0 0 80px 10px rgba(127,0,255,.45), inset 0 0 20px rgba(255,255,255,.4)",
                animation: "aiCorePulse 4s ease-in-out infinite",
              }}></div>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(180,230,255,.35)", animation: "ringSpin 12s linear infinite" }}>
                <span style={{ position: "absolute", top: -6, left: "50%", marginLeft: -6, width: 12, height: 12, borderRadius: 99, background: "#00D4FF", boxShadow: "0 0 18px #00D4FF" }}></span>
              </div>
              <div style={{ position: "absolute", inset: 18, borderRadius: "50%", border: "1px dashed rgba(255,119,176,.4)", animation: "ringSpin 8s linear infinite reverse" }}>
                <span style={{ position: "absolute", bottom: -5, left: "50%", marginLeft: -5, width: 10, height: 10, borderRadius: 99, background: "#FF77B0", boxShadow: "0 0 14px #FF77B0" }}></span>
              </div>
              <div style={{ position: "absolute", inset: 40, borderRadius: "50%", border: "1px dotted rgba(181,123,255,.45)", animation: "ringSpin 16s linear infinite" }}>
                <span style={{ position: "absolute", top: "50%", right: -5, marginTop: -5, width: 10, height: 10, borderRadius: 99, background: "#B57BFF", boxShadow: "0 0 14px #B57BFF" }}></span>
              </div>
              <style>{`
                @keyframes aiCorePulse { 0%,100% { transform: translate(-50%,-50%) scale(1); filter: brightness(1); } 50% { transform: translate(-50%,-50%) scale(1.06); filter: brightness(1.2); } }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeOrbSection() {
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid var(--line-2)", background: "linear-gradient(180deg, var(--bg), #F0F4FB)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span className="eyebrow"><span className="dot"></span> Customer 360 · live orbit</span>
            <h2 className="h-section" style={{ margin: "16px 0 18px" }}>Every cloud connects.</h2>
            <p className="body-lg">
              Sales, Service, Experience, Data Cloud, Agentforce, FSC, Industries — the clouds I orchestrate every day. Drag the orbit, hover any node, watch the lightning route between them. This is the platform, in 3D.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 }}>
              {[
                ["Sales Cloud", "#00A1E0"], ["Service Cloud", "#FF6F00"], ["Experience", "#7F00FF"],
                ["Data Cloud", "#2E844A"], ["Agentforce", "#B14AED"], ["FSC", "#0070D2"], ["Industries (Vlocity)", "#FFB75D"],
              ].map(([n, c]) => (
                <div key={n} className="hoverable" data-cursor="hover" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 99, background: c, boxShadow: `0 0 10px ${c}` }}></span> {n}
                </div>
              ))}
            </div>
          </div>
          <ThreeOrb height={500} />
        </div>
      </div>
    </section>
  );
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

  return (
    <section style={{ padding: "0px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="eyebrow"><span className="dot"></span> Community</span>
          <h2 className="h-section" style={{ margin: "16px auto 0", maxWidth: 740 }}>Off the clock, on the trail.</h2>
          <div style={{
            maxWidth: 680, margin: "24px auto 0", padding: "24px",
            borderRadius: 16, background: "rgba(255,255,255,0.03)",
            border: "1px dashed rgba(255,255,255,0.1)",
            display: "inline-block"
          }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ink-1)", fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
              "Next time you see me at a meetup, come and say hello! I speak fluent English, Apex, and occasionally SOQL when I'm frustrated. Coffee is on me." ☕
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto" }}>
          {events.map((e, i) => (
            <a key={i} href={e.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="card hoverable" style={{ padding: 32, display: "flex", gap: 24, alignItems: "flex-start", borderRadius: 24, height: "100%", background: "rgba(10, 20, 50, 0.45)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)", transition: "transform 0.3s ease, border-color 0.3s ease" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(0,161,224,0.1)", color: "var(--sf-blue)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon name={e.icon} size={28} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 8, color: "white" }}>{e.title}</h3>
                    <div style={{ fontSize: 12, color: "var(--sf-blue)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12 }}>{e.role}</div>
                    <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
                  </div>
                  <div style={{ 
                    marginTop: 20, 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: 8, 
                    color: "#00A1E0", 
                    fontSize: 12, 
                    fontWeight: 700, 
                    textTransform: "uppercase", 
                    letterSpacing: ".08em"
                  }}>
                    Explore Event Drive ➔
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpidermanIntro({ onComplete }) {
  const [phase, setPhase] = React.useState('spidey'); // 'spidey' | 'shake' | 'debug'
  const [isFadingOut, setIsFadingOut] = React.useState(false);
  const [debugLines, setDebugLines] = React.useState([]);

  const discRef = React.useRef(null);
  const figRef = React.useRef(null);
  const wordRef = React.useRef(null);

  const handleSkip = React.useCallback(() => {
    localStorage.setItem('spidermanIntroPlayed', 'true');
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  }, [onComplete]);

  // Hide the navigation menu while the intro plays
  React.useLayoutEffect(() => {
    const nav = document.querySelector('.nav');
    if (nav) nav.style.display = 'none';
    return () => {
      if (nav) nav.style.display = '';
    };
  }, []);

  // Parallax Effect Hook
  React.useEffect(() => {
    if (phase === 'debug') return;

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
      if (Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001) {
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
    // Check if we already played across visits (Enabled for production deployment)
    if (localStorage.getItem('spidermanIntroPlayed') === 'true') {
      onComplete();
      return;
    }

    const handleKey = (e) => { if (e.key === 'Escape') handleSkip(); };
    window.addEventListener('keydown', handleKey);

    // 1. Spidey -> Shake (Hold Spidey: 3s)
    const timer1 = setTimeout(() => setPhase('shake'), 3000);

    // 2. Shake -> Debug (Shake for exactly 2.0s total!)
    const timer2 = setTimeout(() => {
      setPhase('debug');
      setDebugLines(["> Warning: Identity Mismatch detected."]);
    }, 5000);

    // 3. Debug lines sequence (Shifted to align perfectly with the 2.0s total shake duration)
    const t3 = setTimeout(() => setDebugLines(p => [...p, "> Wait, you aren't Peter Parker..."]), 6800);
    const t4 = setTimeout(() => setDebugLines(p => [...p, "> Refining Multiverse data into Salesforce Data Cloud..."]), 8800);
    const t5 = setTimeout(() => setDebugLines(p => [...p, "> Analyzing temporal anomalies across timelines..."]), 10800);
    const t6 = setTimeout(() => setDebugLines(p => [...p, "> Running Identity Resolution RuleSet..."]), 13300);
    const t7 = setTimeout(() => setDebugLines(p => [...p, "> Match found. Accessing variant registry..."]), 15300);
    const t8 = setTimeout(() => setDebugLines(p => [...p, "> Found Yusuf Khan in Earth Planet X00YT787 — Lead Salesforce Developer."]), 17300);
    const t9 = setTimeout(() => setDebugLines(p => [...p, "> Opening portal, preparing environment..."]), 19800);

    // 4. Complete
    const t10 = setTimeout(() => {
      handleSkip();
    }, 21800);

    return () => {
      window.removeEventListener('keydown', handleKey);
      clearTimeout(timer1); clearTimeout(timer2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5); clearTimeout(t6);
      clearTimeout(t7); clearTimeout(t8); clearTimeout(t9); clearTimeout(t10);
    };
  }, [onComplete, handleSkip]);

  // Render seamless emblems for marquee track (duplicate for continuous loop)
  const emblems = React.useMemo(() => {
    return Array.from({ length: 26 }).map((_, i) => (
      <div key={i} className="mask-icon">
        <img
          src="uploads/Spider-Man-Emblem-700x394.png"
          alt="Emblem"
          style={{ width: '80%', height: '80%', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
        />
      </div>
    ));
  }, []);


  return (
    <div
      className={`spider-scope ${phase === 'debug' ? 'debug-theme' : 'spidey-theme'}`}
      style={{
        animation: phase === 'shake' ? 'spideyShake 0.4s ease-in-out infinite' : 'none',
        fontFamily: phase === 'debug' ? 'var(--font-mono)' : 'inherit',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      <style>{`
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
          font-family: var(--font-mono); font-weight: 600; cursor: none; z-index: 10000;
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
      `}</style>

      {/* Skip Button */}
      <button onClick={handleSkip} className="hoverable skip-btn">
        Skip Intro (Esc)
      </button>

      {/* Glitch Warning Screen during SHAKE phase */}
      {phase === 'shake' && (
        <div className="glitch-overlay">
          <div className="glitch-grid"></div>
          <div className="glitch-line"></div>
          <div className="glitch-banner">
            <div className="warning-icon">⚠️</div>
            <h2 className="warning-text-large">SYSTEM ERROR</h2>
            <div className="warning-text-sub">IDENTITY MISMATCH DETECTED</div>
          </div>
        </div>
      )}

      {phase !== 'debug' && (
        <main className={`stage ${isFadingOut ? 'sucked-in' : ''}`}>
          <div className="hero">
            {/* web line drop */}
            <div className="web-line"></div>

            {/* red disc + overlays */}
            <div ref={discRef} className="disc anim-zoom-in"></div>
            <div className="disc-web"></div>
            <div className="disc-rings"></div>

            {/* big wordmark behind figure */}
            <h1 ref={wordRef} className="wordmark anim-word" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.35em', lineHeight: 1, marginBottom: -5, paddingLeft: 5 }}>HELLO I AM</span>
              <div><span className="split">SPIDER</span><span className="accent">MAN</span></div>
            </h1>

            {/* hero figure: user-supplied artwork */}
            <div ref={figRef} className="hero-figure anim-fig">
              <img
                src="uploads/spider1.png"
                alt="Spider-Man"
                style={{
                  width: '100%', height: '100%', objectFit: 'contain',
                  position: 'relative', zIndex: 5, display: 'block'
                }}
              />
            </div>

            {/* horizontal marquee of custom emblems */}
            <div className="marquee-wrap anim-marquee">
              <div className="marquee-track">
                {emblems}
                {emblems}
              </div>
            </div>
          </div>
        </main>
      )}

      {phase === 'debug' && (
        <div className={isFadingOut ? 'sucked-in' : ''} style={{
          width: '90%', maxWidth: 740, padding: 30, background: 'rgba(10, 2, 3, 0.95)',
          border: '1px solid rgba(255, 38, 56, 0.3)', borderRadius: 12,
          boxShadow: '0 0 50px rgba(255, 38, 56, 0.25), inset 0 0 20px rgba(255, 38, 56, 0.1)',
          textAlign: 'left',
          animation: 'scaleUp 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.15) both',
          zIndex: 1000,
          position: 'relative',
          backdropFilter: 'blur(10px)',
          transformOrigin: 'center center'
        }}>
          {/* Cyberpunk Ticks */}
          <div style={{ position: 'absolute', top: -2, left: -2, width: 14, height: 14, borderTop: '2px solid rgba(255, 38, 56, 0.75)', borderLeft: '2px solid rgba(255, 38, 56, 0.75)' }}></div>
          <div style={{ position: 'absolute', top: -2, right: -2, width: 14, height: 14, borderTop: '2px solid rgba(255, 38, 56, 0.75)', borderRight: '2px solid rgba(255, 38, 56, 0.75)' }}></div>
          <div style={{ position: 'absolute', bottom: -2, left: -2, width: 14, height: 14, borderBottom: '2px solid rgba(255, 38, 56, 0.75)', borderLeft: '2px solid rgba(255, 38, 56, 0.75)' }}></div>
          <div style={{ position: 'absolute', bottom: -2, right: -2, width: 14, height: 14, borderBottom: '2px solid rgba(255, 38, 56, 0.75)', borderRight: '2px solid rgba(255, 38, 56, 0.75)' }}></div>

          {/* Terminal Window Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ff5f56' }}></div>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ffbd2e' }}></div>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: '#27c93f' }}></div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '0.12em', fontWeight: 600 }}>
              ANOMALY_DETECTOR.EXE
            </div>
          </div>

          <div className="hud-header">
            <span className="hud-pulse">●</span> SECURE COGNITIVE SHIELD RESOLVER · Earth Planet X00YT787
          </div>

          {debugLines.map((line, i) => {
            // Highlight specific lines with colors and cybernetic glowing text shadows
            let color = 'rgba(255,255,255,0.85)';
            let textShadow = 'none';

            if (line.includes('Mismatch') || line.includes('Parker') || line.includes('Failed')) {
              color = '#FF4D62';
              textShadow = '0 0 10px rgba(255, 77, 98, 0.5)';
            } else if (line.includes('Data Cloud') || line.includes('anomalies')) {
              color = '#4DAFFF';
              textShadow = '0 0 10px rgba(77, 175, 255, 0.5)';
            } else if (line.includes('Resolution') || line.includes('variant')) {
              color = '#FFA834';
              textShadow = '0 0 10px rgba(255, 168, 52, 0.5)';
            } else if (line.includes('Yusuf Khan')) {
              color = '#34FFA1';
              textShadow = '0 0 15px rgba(52, 255, 161, 0.75)';
            } else if (i === debugLines.length - 1) {
              color = '#4DAFFF';
            }

            return (
              <div key={i} style={{
                marginBottom: 14, fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.6,
                color: color,
                textShadow: textShadow,
                animation: 'letterIn 0.25s ease both',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600
              }}>
                {line}
              </div>
            );
          })}
          <div style={{ display: 'inline-block', width: 10, height: 20, background: '#4DAFFF', animation: 'cursorBlink 1s infinite', marginLeft: 8, verticalAlign: 'middle', marginTop: -4 }}></div>
        </div>
      )}

      {/* Black Hole Portal Singularity */}
      {isFadingOut && (
        <div className="blackhole-portal">
          <div className="gravitational-lens"></div>
          <div className="accretion-disk"></div>
          <div className="cosmic-sparks"></div>
          <div className="singularity-core"></div>
        </div>
      )}
    </div>
  );
}

function PageHome({ go }) {
  const [introDone, setIntroDone] = React.useState(() => {
    return localStorage.getItem('spidermanIntroPlayed') === 'true';
  });

  const handleIntroComplete = () => {
    localStorage.setItem('spidermanIntroPlayed', 'true');
    setIntroDone(true);
  };

  if (!introDone) {
    return <SpidermanIntro onComplete={handleIntroComplete} />;
  }

  return (
    <main style={{ animation: "letterIn 2s ease both" }}>
      <HeroSection go={go} />
      {/* <ApexShowcase /> */}
      {/* <AboutSection /> */}
      <SkillsTrail />
      <CommunityEvents />
      <Testimonials />
      <CTAStrip go={go} />
    </main>
  );
}

Object.assign(window, { PageHome });
