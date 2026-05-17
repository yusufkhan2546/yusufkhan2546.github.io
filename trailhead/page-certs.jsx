// Certifications page — Sleek Horizontal Ledger & Bento Box Redesign + 3D Cabinet

const CERTS = [
  { name: "Administrator", year: "2022", family: "Foundational", hue: 200, kind: "admin", sub: "ADMIN", color: "#00A1E0", credId: "SF-298374", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2025-03_Platform-Admin_500x490.png" },
  { name: "Platform Developer I", year: "2022", family: "Developer", hue: 220, kind: "platform", sub: "PD1", color: "#0070D2", credId: "SF-837462", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev_500x490px.png" },
  { name: "Platform Developer II", year: "2023", family: "Developer", hue: 215, kind: "platform", sub: "PD2", color: "#0070D2", credId: "SF-948573", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2021-03_Badge_SF-Certified_Platform-Developer-II_500x490px.png" },
  { name: "JavaScript Developer I", year: "2023", family: "Developer", hue: 45, kind: "js", sub: "JS-D1", color: "#FFB400", credId: "SF-102938", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2025-03_JavaScript-Dev_500x490.png" },
  { name: "Service Cloud Consultant", year: "2023", family: "Consultant", hue: 175, kind: "service", sub: "SVC", color: "#FF6F00", credId: "SF-564738", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2021-03_Badge_SF-Certified_Service-Cloud-Consultant_500x490px.png" },
  { name: "OmniStudio Developer", year: "2024", family: "Industries", hue: 280, kind: "omnistudio", sub: "OMNI", color: "#7F00FF", credId: "SF-746352", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/omnistudio-developer.png" },
  { name: "Financial Services Cloud", year: "2024", family: "Industries", hue: 145, kind: "fsc", sub: "FSC", color: "#2E844A", credId: "SF-293847", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/fsc.png" },
  { name: "Agentforce Specialist", year: "2025", family: "AI", hue: 305, kind: "agentforce", sub: "AGENT", color: "#B14AED", credId: "SF-847562", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/agentforce-specialist.png" },
  { name: "Data Cloud Consultant", year: "2025", family: "Data & AI", hue: 195, kind: "datacloud", sub: "DATA", color: "#00B0FF", credId: "SF-384756", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/data-cloud.png" },
  { name: "AI Associate", year: "2024", family: "AI", hue: 320, kind: "ai", sub: "AI", color: "#FF77B0", credId: "SF-928374", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2026-01_Badge_SF-Certified_AI-Associate_500x490px_RETIRED.png" },
  { name: "Lifecycle & Deployment Architect", year: "2025", family: "Architect", hue: 330, kind: "ai", sub: "ARCH", color: "#FF77B0", credId: "SF-475869", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev-LC-Dep-Arch_500x490px.png" },
  { name: "Salesforce Associate", year: "2022", family: "Foundational", hue: 205, kind: "associate", sub: "ASSOC", color: "#00A1E0", credId: "SF-192837", verifyUrl: "https://trailhead.salesforce.com/credentials/verification", img: "assets/badges/2025-03_Badge_SF-Certified_Platform-Foundations_500x490px.png" },
];

const FAMILIES = ["All", "Foundational", "Developer", "Consultant", "Industries", "Data & AI", "AI", "Architect"];

function ProgressRing({ label, pct, hue, size = 100 }) {
  const strokeWidth = size * 0.08;
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - pct/100);
  return (
    <div style={{ textAlign: "center" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,0.05)" strokeWidth={strokeWidth} fill="none"/>
        <circle cx={size/2} cy={size/2} r={r} stroke={`hsl(${hue} 90% 50%)`} strokeWidth={strokeWidth} fill="none"
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`} style={{ transition: "stroke-dashoffset 1s ease" }} />
        <text x={size/2} y={size/2 + (size*0.07)} textAnchor="middle" fontFamily="var(--font-display)" fontSize={size*0.25} fontWeight="700" fill="white">{pct}%</text>
      </svg>
      {label && <div style={{ fontSize: 10, color: "var(--ink-2)", fontWeight: 600, marginTop: 4 }}>{label}</div>}
    </div>
  );
}

function BentoSummary() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 40 }}>
      <div className="card" style={{ padding: 24, borderRadius: 20, background: "rgba(10,18,48,0.5)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700 }}>Total Active</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 800, color: "white", marginTop: 8 }}>12</div>
        <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4 }}>Salesforce Credentials</div>
      </div>
      
      <div className="card" style={{ padding: 24, borderRadius: 20, background: "rgba(10,18,48,0.5)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700 }}>Latest Achievement</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16 }}>
          <CertBadge title="Lifecycle & Deployment" img="assets/badges/2025-04_Badge_SF-Certified_Plat-Dev-LC-Dep-Arch_500x490px.png" size={56} spinning={false} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "white" }}>Lifecycle & Deployment Architect</div>
            <div style={{ fontSize: 12, color: "var(--sf-success)", fontWeight: 600, marginTop: 2 }}>Achieved 2025</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 24, borderRadius: 20, background: "rgba(10,18,48,0.5)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700 }}>Next Milestones</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginTop: 12 }}>Application Architect</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginTop: 8 }}>System Architect</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
           <ProgressRing label="App" pct={62} hue={210} size={50} />
           <ProgressRing label="Sys" pct={28} hue={280} size={50} />
        </div>
      </div>
    </div>
  );
}

function CertRow({ c }) {
  return (
    <div className="card hoverable ledger-row" data-cursor="hover"
      style={{
        padding: "16px 24px", borderRadius: 16,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderLeft: `3px solid ${c.color}`,
        transition: "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        marginBottom: 12,
        cursor: "none",
        position: "relative",
        overflow: "hidden"
      }}>
      
      <div style={{ display: "flex", alignItems: "center", gap: 24, zIndex: 1 }}>
        <div style={{ width: 64, height: 64, flexShrink: 0 }}>
          <CertBadge title={c.name} sub={c.sub} hue={c.hue} kind={c.kind} size={64} spinning={false} img={c.img} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "white" }}>{c.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
            <span style={{ fontSize: 12, color: "var(--ink-2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.family}</span>
            <span style={{ width: 4, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)" }}></span>
            <span style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 500 }}>{c.year}</span>
          </div>
        </div>
      </div>


      
      {/* Subtle hover glow tied to the cert color */}
      <div className="cert-row-glow" style={{
        position: "absolute", top: "50%", left: 40, transform: "translateY(-50%)",
        width: 100, height: 100, background: c.color, filter: "blur(50px)", opacity: 0,
        pointerEvents: "none", transition: "opacity 0.3s ease"
      }} />
    </div>
  );
}

function PageCerts({ go }) {
  const [filter, setFilter] = useState("All");

  const filtered = CERTS.filter(c => filter === "All" || c.family === filter);

  return (
    <main>
      <section className="page">
        <div className="container" style={{ maxWidth: 1060 }}>
          <div className="page-head" style={{ marginBottom: 40, alignItems: "center" }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Verified Credentials</span>
              <h1 className="h-display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 12px" }}>
                Salesforce Certifications
              </h1>
              <p className="body-lg" style={{ maxWidth: 600, color: "var(--ink-2)" }}>
                A complete ledger of my technical credentials across the Salesforce ecosystem, verified via Trailhead.
              </p>
            </div>
            <div>
              <button className="btn dark hoverable" onClick={() => go("projects")} style={{ padding: "14px 24px", fontSize: 15 }}>
                View Projects <Icon name="arrow" size={14}/>
              </button>
            </div>
          </div>

          <BentoSummary />

          <div className="card" style={{ padding: 32, borderRadius: 24, background: "rgba(10,18,48,0.4)", border: "1px solid rgba(255,255,255,0.03)" }}>
            <div style={{ display: "flex", gap: 24, borderBottom: "1px solid rgba(255,255,255,0.05)", marginBottom: 24, overflowX: "auto", paddingBottom: 16 }}>
              {FAMILIES.map(f => {
                const count = f === "All" ? CERTS.length : CERTS.filter(c => c.family === f).length;
                const active = filter === f;
                return (
                  <button key={f} onClick={() => setFilter(f)}
                    className="hoverable"
                    style={{
                      padding: "0 0 8px 0", fontSize: 14, fontWeight: 600,
                      background: "transparent", border: "none",
                      borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                      color: active ? "white" : "var(--ink-3)",
                      display: "inline-flex", alignItems: "center", gap: 8, cursor: "none",
                      transition: "all 0.2s ease", whiteSpace: "nowrap"
                    }}>
                    {f}
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 6,
                      background: active ? "var(--accent)" : "rgba(255,255,255,0.05)",
                      color: "white",
                    }}>{count}</span>
                  </button>
                );
              })}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {filtered.map((c, i) => (
                <CertRow key={c.name} c={c} />
              ))}
              {filtered.length === 0 && (
                <div style={{ padding: 40, textAlign: "center", color: "var(--ink-3)", fontWeight: 500 }}>No certifications found for this track.</div>
              )}
            </div>
          </div>

        </div>
      </section>
      
      <style>{`
        .cert-row-glow { opacity: 0 !important; }
        .ledger-row:hover .cert-row-glow { opacity: 0.20 !important; }
        .ledger-row:hover { background: rgba(255,255,255,0.04) !important; transform: translateX(6px); box-shadow: 0 12px 30px -10px rgba(0,0,0,0.5); }
      `}</style>
    </main>
  );
}

Object.assign(window, { PageCerts });
