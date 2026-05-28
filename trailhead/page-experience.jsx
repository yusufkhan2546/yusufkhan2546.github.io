// Experience page — timeline + tech stack matrix + Trailblazer stats

const TIMELINE = (window.__SF_DATA__ && window.__SF_DATA__.experience)  || [];
const TECH     = (window.__SF_DATA__ && window.__SF_DATA__.techGroups)   || [];

function TimelineCard({ item, idx, total }) {
  return (
    <div className="hoverable timeline-card" style={{
      position: "relative",
      paddingLeft: 48,
      paddingBottom: idx === total - 1 ? 0 : 40,
    }}>
      {/* vertical axis */}
      <div className="timeline-axis" style={{ position: "absolute", left: 18, top: 30, bottom: 0, width: 2, background: idx === total - 1 ? "transparent" : "linear-gradient(180deg, var(--accent), transparent)" }} />

      {/* dot + company name pill */}
      <div className="timeline-dot" style={{ position: "absolute", left: 7, top: 6, display: "flex", alignItems: "center" }}>
        <div style={{ width: 22, height: 22, borderRadius: 99, background: "white", border: "2px solid var(--accent)", display: "grid", placeItems: "center", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--accent)" }} />
        </div>
        <span style={{
          marginLeft: -10, paddingLeft: 14, paddingRight: 10, paddingTop: 3, paddingBottom: 3,
          background: "color-mix(in oklab, var(--accent) 14%, transparent)",
          border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
          borderLeft: "none", borderRadius: "0 99px 99px 0",
          fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
          color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".1em",
          whiteSpace: "nowrap", zIndex: 1, lineHeight: 1.6,
        }}>
          {item.company}
        </span>
      </div>

      {/* period + tag */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, paddingTop: 32 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-2)", letterSpacing: ".06em", fontWeight: 600 }}>{item.period}</span>
        <span style={{ display: "inline-block", fontSize: 10, padding: "3px 8px", background: "var(--sf-sky)", color: "#FFFFFF", fontWeight: 700, borderRadius: 4, letterSpacing: ".1em", textTransform: "uppercase" }}>{item.tag}</span>
      </div>

      {/* card */}
      <div className="card" style={{ padding: 24, borderRadius: 16 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 4px" }}>{item.role}</h3>
        <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 600, marginBottom: 14 }}>
          {item.company} <span style={{ color: "var(--line)" }}>·</span> {item.location}
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
          {item.bullets.map((b, i) => (
            <li key={i} style={{ paddingLeft: 22, position: "relative", fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" }}>
              <span style={{ position: "absolute", left: 0, top: 4 }}><Icon name="check" size={14} color="var(--accent)" /></span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TechMatrix() {
  return (
    <div className="card" style={{ padding: 32, borderRadius: 22 }}>
      <div className="tech-main" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {TECH.map(g => (
          <div key={g.group}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>{g.group}</div>
            <div style={{ display: "grid", gap: 10 }}>
              {g.items.map(([name, pct]) => (
                <div key={name} className="hoverable" data-cursor="hover">
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>{name}</span>
                    <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-2)" }}>{pct}</span>
                  </div>
                  <div style={{ height: 6, background: "var(--sf-cloud)", borderRadius: 99, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", width: pct + "%",
                      background: "linear-gradient(90deg, var(--sf-blue), var(--accent-deep))",
                      borderRadius: 99,
                      animation: "barFill 1.2s ease both",
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes barFill { from { width: 0% } }`}</style>
    </div>
  );
}

function TrailblazerStats() {
  const tb = (window.__SF_DATA__ && window.__SF_DATA__.trailblazerStats) || {};
  const stats = [
    { metric: tb.badges     || 0, label: "Badges Earned",    suffix: "" },
    { metric: tb.pointsK    || 0, label: "Points (k)",       suffix: "k" },
    { metric: tb.trails     || 0, label: "Trails Completed", suffix: "" },
    { metric: tb.superbadges|| 0, label: "Superbadges",      suffix: "" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Agentblazer Legend Banner */}
      <div className="card hoverable" style={{
        borderRadius: 18, overflow: "hidden", padding: 0, position: "relative",
        border: "1px solid rgba(180,100,255,0.35)",
        boxShadow: "0 8px 32px -8px rgba(127,0,255,0.4)",
      }}>
        <img
          src="assets/agentblazer-legend.png"
          alt="Agentblazer Legend '26"
          style={{ width: "100%", display: "block", borderRadius: 18 }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback if image missing */}
        <div style={{
          display: "none", alignItems: "center", justifyContent: "center", gap: 12,
          padding: "20px 24px",
          background: "linear-gradient(135deg, #7F00FF, #B57BFF)",
          borderRadius: 18,
        }}>
          <span style={{ fontSize: 28 }}>🤖</span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "white" }}>Agentblazer</div>
            <div style={{ color: "rgba(255,255,255,.8)", fontSize: 14, fontWeight: 600 }}>Legend '26</div>
          </div>
        </div>
      </div>

      {/* Five Star Ranger + Stats */}
      <div className="card" style={{ padding: 28, borderRadius: 22, background: "linear-gradient(135deg, var(--sf-navy), #0A1B3C)", color: "white", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .4, backgroundImage: "radial-gradient(circle at 80% 20%, var(--sf-blue), transparent 40%)" }}></div>
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", background: "rgba(255,255,255,.08)", borderRadius: 99, fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--sf-trail)", boxShadow: "0 0 8px var(--sf-trail)" }}></span> Trailblazer profile
              </div>
              <h3 className="h-display" style={{ fontSize: 22, marginTop: 10, marginBottom: 0 }}>Always learning.</h3>
            </div>
            {/* Five Star Ranger Badge */}
            <img
              src="assets/five-star-ranger.png"
              alt="Five Star Ranger"
              style={{ width: 72, height: 72, objectFit: "contain", flexShrink: 0 }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 16 }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "14px 16px" }}>
                <div className="h-display" style={{ fontSize: 36, lineHeight: 1, color: "white" }}>
                  <Counter to={s.metric} />{s.suffix}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.65)", marginTop: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href={tb.profileUrl || "https://trailhead.salesforce.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hoverable"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "var(--sf-trail)", background: "rgba(255,183,77,0.1)", border: "1px solid rgba(255,183,77,0.3)", borderRadius: 99, padding: "6px 14px", textDecoration: "none" }}
          >
            <Icon name="trail" size={14} color="var(--sf-trail)" /> View Trailblazer Profile →
          </a>
        </div>
      </div>
    </div>
  );
}

function PageExperience({ go }) {
  return (
    <main>
      <section className="page">
        <div className="container">
          <div className="page-head">
            <div>
              <span className="eyebrow"><span className="dot"></span> Experience · Tech · Trail</span>
              <h1 className="h-display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" }}>
                6 years.<br />Shipped clouds.
              </h1>
              <p className="body-lg" style={{ maxWidth: 540 }}>
                Trailblazing since 2019 — from telecom-focused solutions at Prodapt to enterprise financial services integrations at K Square Group, each step deeper into the Salesforce ecosystem.
              </p>
            </div>
          </div>

          <div className="tech-matrix" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40 }}>
            <div>
              <div style={{ marginBottom: 20, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)" }}>Career trail</div>
              {TIMELINE.map((t, i) => <TimelineCard key={i} item={t} idx={i} total={TIMELINE.length} />)}
            </div>

            <aside className="tech-sidebar" style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100, alignSelf: "start" }}>
              <TrailblazerStats />
              <div className="card" style={{ padding: 24, borderRadius: 18 }}>
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 }}>Currently exploring</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Agentforce", "Data Cloud", "MCP", "Einstein Studio", "Copado DevOps"].map(t => (
                    <span key={t} style={{ padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, background: "var(--sf-sky)", color: "#FFFFFF", border: "1px solid color-mix(in oklab, var(--accent) 22%, transparent)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div style={{ marginTop: 64 }}>
            <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 22 }}>
              <h2 className="h-section" style={{ fontSize: 40, margin: 0 }}>Tech stack — by depth.</h2>
              <p style={{ color: "var(--ink-2)", maxWidth: 360 }}>Self-reported, calibrated against the work I do day-to-day.</p>
            </div>
            <TechMatrix />
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { PageExperience });
