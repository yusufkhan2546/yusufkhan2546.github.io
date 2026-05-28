// Projects page — case studies, each with a completely unique, custom-designed interactive technical diagram
const { useState, useEffect, useRef } = React;

const PROJECTS = (window.__SF_DATA__ && window.__SF_DATA__.projects) || [];

// --- DIAGRAM 1: Banking Public Portal (Bespoke Horizontal Pipeline Grid with Glowing Integrations) ---
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
    { label: "Portal Approval", sub: "Final State", desc: "Intake successfully logged; application ready." },
  ];

  return (
    <div style={{ padding: "30px 20px", background: "rgba(4, 10, 30, 0.75)", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      {/* Top dashboard preview header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#42F2D1", boxShadow: "0 0 10px #42F2D1" }}></span>
          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255, 255, 255, 0.6)", letterSpacing: ".1em", textTransform: "uppercase" }}>
            Real-time Integration Pipeline (OAuth 2.0 secured)
          </span>
        </div>
        <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--sf-blue)", background: "rgba(0, 161, 224, 0.15)", padding: "3px 8px", borderRadius: 4 }}>
          SYSTEM ACTIVE
        </span>
      </div>

      {/* Connection pipeline layout */}
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <div className="pipeline-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, position: "relative" }}>


          {steps.map((s, i) => {
            const active = i === activeNode;
            return (
              <div key={i} style={{
                background: active ? "rgba(0, 161, 224, 0.18)" : "rgba(255, 255, 255, 0.02)",
                border: active ? "1.5px solid #42F2D1" : "1.5px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 12,
                padding: "16px 10px",
                textAlign: "center",
                position: "relative",
                zIndex: 2,
                transition: "all 0.4s ease",
                boxShadow: active ? "0 0 25px rgba(66, 242, 209, 0.25)" : "none",
                transform: active ? "translateY(-4px)" : "none",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: active ? "#42F2D1" : "rgba(255,255,255,0.06)",
                  display: "grid", placeItems: "center",
                  margin: "0 auto 10px",
                  color: active ? "black" : "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  boxShadow: active ? "0 0 15px #42F2D1" : "none",
                  transition: "all 0.4s ease"
                }}>
                  {i + 1}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontSize: 9.5, fontFamily: "var(--font-mono)", color: active ? "#42F2D1" : "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: ".06em" }}>{s.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Detailed node drawer */}
        <div style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          borderRadius: 10,
          padding: "14px 20px",
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#42F2D1", animation: "pulseDot 2s infinite" }}></div>
          <div>
            <strong style={{ color: "white", fontSize: 14 }}>Active Process Phase: {steps[activeNode].label}</strong>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, margin: "4px 0 0" }}>{steps[activeNode].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- DIAGRAM 2: Loan Origination Systems (Bespoke Security Validation Ladder & FSC Decision Tree) ---
function LoanOriginationFlow() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse(p => !p);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "30px 20px", background: "rgba(4, 10, 30, 0.75)", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      {/* Top dashboard preview header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7F00FF", boxShadow: "0 0 10px #7F00FF" }}></span>
          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255, 255, 255, 0.6)", letterSpacing: ".1em", textTransform: "uppercase" }}>
            FSC Security Audits & validation architecture
          </span>
        </div>
        <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "#7F00FF", background: "rgba(127, 0, 255, 0.15)", padding: "3px 8px", borderRadius: 4 }}>
          SHIELD SECURITY ENABLED
        </span>
      </div>

      <div className="diagram-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 20 }}>
        {/* Left Side: System Inputs & FSC Risk Profiler */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 15 }}>
            <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "#00A1E0" }}>SYSTEM ENTRY</span>
            <h4 style={{ color: "white", margin: "4px 0 6px", fontSize: 14 }}>Applicant Data Ingest</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <span style={{ fontSize: 10, background: "rgba(255,255,255,0.06)", color: "white", padding: "3px 8px", borderRadius: 4 }}>Income Validate</span>
              <span style={{ fontSize: 10, background: "rgba(255,255,255,0.06)", color: "white", padding: "3px 8px", borderRadius: 4 }}>Identity Match</span>
              <span style={{ fontSize: 10, background: "rgba(255,255,255,0.06)", color: "white", padding: "3px 8px", borderRadius: 4 }}>Debt-to-Income</span>
            </div>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 15 }}>
            <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "#FF6F00" }}>UNDERWRITING STAGE</span>
            <h4 style={{ color: "white", margin: "4px 0 6px", fontSize: 14 }}>Automated FSC Risk Model</h4>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: pulse ? "rgba(127, 0, 255, 0.25)" : "rgba(255,255,255,0.05)",
                border: "1px solid #7F00FF",
                display: "grid", placeItems: "center",
                color: "#7F00FF", fontWeight: "bold",
                transition: "all 0.5s"
              }}>
                🛡️
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: "88%", height: "100%", background: "#7F00FF" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
                  <span>Risk Quotient Score</span>
                  <span style={{ color: "#7F00FF" }}>88/100 SECURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Security Validation Shield Ladder */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{
            background: "rgba(46, 132, 74, 0.12)",
            border: "1.5px solid #2E844A",
            borderRadius: 8,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: pulse ? "0 0 15px rgba(46, 132, 74, 0.15)" : "none"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#2E844A", fontWeight: "bold" }}>✓</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Identity & Credit Bureau Check</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Verification pulled via secure MuleSoft API gateway</div>
              </div>
            </div>
            <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", background: "#2E844A", color: "white", padding: "2px 6px", borderRadius: 3 }}>SUCCESS</span>
          </div>

          <div style={{
            background: "rgba(46, 132, 74, 0.12)",
            border: "1.5px solid #2E844A",
            borderRadius: 8,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#2E844A", fontWeight: "bold" }}>✓</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Validation Filters & Rules Assessment</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>FSC rules audited against system thresholds</div>
              </div>
            </div>
            <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", background: "#2E844A", color: "white", padding: "2px 6px", borderRadius: 3 }}>PASSED</span>
          </div>

          <div style={{
            background: "rgba(127, 0, 255, 0.12)",
            border: "1.5px solid #7F00FF",
            borderRadius: 8,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#7F00FF", fontWeight: "bold" }}>✦</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>DocuSign Electronic Close</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Electronic document packets built & routed</div>
              </div>
            </div>
            <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", background: "#7F00FF", color: "white", padding: "2px 6px", borderRadius: 3 }}>GENERATING</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- DIAGRAM 3: Retail Store Application (Bespoke 360 Omnichannel Hub / Telecom Connection Wheel) ---
function RetailStoreFlow() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const frame = setInterval(() => {
      setRotation(r => (r + 1) % 360);
    }, 40);
    return () => clearInterval(frame);
  }, []);

  const satellites = [
    { name: "Digital 360 Profile", desc: "Aggregates billing history and segments.", color: "#42F2D1", x: 260, y: 70 },
    { name: "SIM Provisioning", desc: "Builds real-time mobile card allocation.", color: "#00A1E0", x: 420, y: 150 },
    { name: "Network Activation", desc: "Updates legacy telecommunication carrier.", color: "#7F00FF", x: 380, y: 310 },
    { name: "Communications Cloud", desc: "Synchronizes orders & records.", color: "#FF6F00", x: 140, y: 310 },
    { name: "Payment Gateway", desc: "Process immediate in-store billing.", color: "#FFB75D", x: 100, y: 150 },
  ];

  return (
    <div style={{ padding: "30px 20px", background: "rgba(4, 10, 30, 0.75)", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      {/* Top dashboard preview header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#42F2D1", boxShadow: "0 0 10px #42F2D1" }}></span>
          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(255, 255, 255, 0.6)", letterSpacing: ".1em", textTransform: "uppercase" }}>
            Omnichannel Telecommunication Network Wheel
          </span>
        </div>
        <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "#42F2D1", background: "rgba(66, 242, 209, 0.15)", padding: "3px 8px", borderRadius: 4 }}>
          DIGITAL 360 ACTIVE
        </span>
      </div>

      <div className="diagram-2col" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20, alignItems: "center" }}>
        {/* Left Side: Interlocking Circular Vector Diagram */}
        <div style={{ position: "relative", width: "100%", height: 360, display: "grid", placeItems: "center" }}>
          <svg viewBox="0 0 520 360" style={{ width: "100%", height: "100%", overflow: "visible" }}>
            {/* Pulsing rings */}
            <circle cx="260" cy="190" r="110" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="3" />
            <circle cx="260" cy="190" r="60" fill="none" stroke="rgba(0, 161, 224, 0.12)" strokeWidth="2" />

            {/* Orbit paths */}
            {satellites.map((s, idx) => (
              <line key={idx} x1="260" y1="190" x2={s.x} y2={s.y} stroke={s.color} strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6" />
            ))}

            {/* Central Master Hub Node */}
            <g transform="translate(225, 155)">
              <circle cx="35" cy="35" r="35" fill="url(#hub-grad)" stroke="#42F2D1" strokeWidth="2" style={{ filter: "drop-shadow(0 0 20px rgba(66, 242, 209, 0.3))" }} />
              <text x="35" y="32" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="10" fill="white">DIGITAL</text>
              <text x="35" y="44" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="10" fill="#42F2D1">360 HUB</text>
              <defs>
                <linearGradient id="hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#081E45" />
                  <stop offset="100%" stopColor="#040A1E" />
                </linearGradient>
              </defs>
            </g>

            {/* Orbiting Satellite Nodes */}
            {satellites.map((s, idx) => (
              <g key={idx} transform={`translate(${s.x - 20}, ${s.y - 20})`}>
                <circle cx="20" cy="20" r="20" fill="rgba(8, 30, 69, 0.85)" stroke={s.color} strokeWidth="1.5" style={{ filter: `drop-shadow(0 0 10px ${s.color}44)` }} />
                <text x="20" y="24" textAnchor="middle" fontSize="14" fill="white">{["👤", "📱", "📡", "☁️", "💳"][idx]}</text>
              </g>
            ))}
          </svg>
        </div>

        {/* Right Side: Quick info lists of elements */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {satellites.slice(0, 4).map((s, idx) => (
            <div key={idx} style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${s.color}33`,
              borderRadius: 8,
              padding: 10,
              display: "flex",
              alignItems: "center",
              gap: 12
            }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${s.color}15`, border: `1px solid ${s.color}`, display: "grid", placeItems: "center", color: s.color, fontWeight: "bold", fontSize: 11 }}>
                {idx + 1}
              </div>
              <div>
                <strong style={{ color: "white", fontSize: 13 }}>{s.name}</strong>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 11.5, margin: "2px 0 0" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudy({ p, idx, open, onToggle }) {
  /* Stats strip — shared between mobile (always shown) and desktop (inside expand) */
  const StatsStrip = () => (
    <div className="impact-strip" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
      {p.impact.map(m => (
        <div key={m.label} style={{
          padding: 18,
          background: "linear-gradient(135deg, rgba(0,161,224,0.12), rgba(127,0,255,0.04))",
          borderRadius: 14,
          border: "1px solid rgba(0,161,224,0.18)",
          textAlign: "center",
        }}>
          <div className="h-display" style={{
            fontSize: 34,
            background: "linear-gradient(135deg, #42F2D1, #47C7FF)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>{m.metric}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.03em" }}>{m.label}</div>
        </div>
      ))}
    </div>
  );

  return (
    <article className="card hoverable" style={{
      padding: 0, overflow: "hidden", borderRadius: 22,
      background: "rgba(10,20,50,0.45)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "box-shadow 0.3s ease",
      boxShadow: open ? "0 20px 45px -15px rgba(0,0,0,0.8)" : "0 10px 30px -15px rgba(0,0,0,0.5)",
    }}>

      {/* ── Header — always visible ─────────────────────── */}
      <div className="project-card-header project-card-pad"
        style={{ padding: 28, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 20, alignItems: "center", cursor: "pointer" }}
        onClick={onToggle}>

        <div style={{
          width: 56, height: 56, borderRadius: 14, flexShrink: 0,
          background: `linear-gradient(135deg, hsl(${200 + idx * 55} 90% 55%), hsl(${240 + idx * 55} 80% 35%))`,
          display: "grid", placeItems: "center", overflow: "hidden",
        }}>
          <img src={["assets/Payments.png", "assets/Security.png", "assets/E-commerce.png"][idx]}
               alt="" style={{ width: 36, height: 36, objectFit: "contain" }} />
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>
              0{idx+1} · {p.client}
            </span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{p.duration} · Team of {p.team}</span>
          </div>
          <h3 className="h-display" style={{ fontSize: "clamp(20px, 3vw, 30px)", lineHeight: 1.1, margin: "0 0 10px", color: "white" }}>{p.title}</h3>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {p.stack.map(s => (
              <span key={s} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 99, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Desktop-only expand button */}
        <button className="btn ghost hoverable desktop-only-btn" style={{ flexShrink: 0, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", display: "flex", alignItems: "center", gap: 6 }}>
          {open ? "Collapse" : "Walk the flow"} <Icon name={open ? "x" : "arrow"} size={14}/>
        </button>
      </div>

      {/* ── Stats — always visible on mobile, inside expand on desktop ── */}
      <div className="mobile-stats-strip" style={{ padding: "0 20px 20px" }}>
        <StatsStrip />
      </div>

      {/* ── Expandable detail — desktop only ──────────────── */}
      <div className="desktop-expand-section" style={{ maxHeight: open ? 2200 : 0, transition: "max-height .6s cubic-bezier(.2,.7,.2,1)", overflow: "hidden" }}>
        <div style={{ padding: "0 28px 28px" }}>
          <div style={{ marginBottom: 24, height: 1, background: "rgba(255,255,255,0.08)" }}></div>

          <div className="challenge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--sf-blue)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Challenge</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.78)" }}>{p.challenge}</p>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--sf-blue)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Solution</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.78)" }}>{p.solution}</p>
            </div>
          </div>

          {/* Flow Visualization */}
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(4,10,30,0.6)", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Icon name="flow" size={14} color="var(--sf-blue)"/>
                <strong style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>{p.id}.flow_builder</strong>
              </div>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>Interactive Visualization</span>
            </div>
            {open && p.id === "banking-portal"  && <BankingPortalFlow />}
            {open && p.id === "loan-origination" && <LoanOriginationFlow />}
            {open && p.id === "retail-store"     && <RetailStoreFlow />}
          </div>

          {/* Stats inside expand (desktop only — CSS hides on mobile) */}
          <StatsStrip />
        </div>
      </div>
    </article>
  );
}

function PageProjects({ go }) {
  const [openId, setOpenId] = useState("banking-portal");

  return (
    <main>
      <section className="page">
        <div className="container">
          <div className="page-head" style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, marginBottom: 48 }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Case studies · 3 deep-dives</span>
              <h1 className="h-display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px", color: "white" }}>
                Real orgs.<br/>Real numbers.
              </h1>
              <p className="body-lg" style={{ maxWidth: 540, color: "rgba(255,255,255,0.7)" }}>
                Each engagement features a uniquely modeled automated pipeline. Click any case study to walk the integration flow.
              </p>
            </div>
            <div className="page-head-actions" style={{ display: "flex", gap: 10 }}>
              <button className="btn ghost hoverable desktop-only-btn" onClick={() => setOpenId(null)} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}>Collapse all</button>
              <button className="btn primary hoverable" onClick={() => go("contact")} style={{ background: "linear-gradient(90deg, #00A1E0, #7F00FF)" }}>Discuss yours <Icon name="arrow" size={14}/></button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {PROJECTS.map((p, i) => (
              <CaseStudy key={p.id} p={p} idx={i}
                open={openId === p.id}
                onToggle={() => setOpenId(o => o === p.id ? null : p.id)} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { PageProjects });
