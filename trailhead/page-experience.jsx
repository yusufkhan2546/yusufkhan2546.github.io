// Experience page — timeline + tech stack matrix + Trailblazer stats

const TIMELINE = [
  {
    period: "Sep 2024 — Present",
    role: "Salesforce Developer & Technical SME",
    company: "K Square Group",
    location: "Hyderabad, India",
    bullets: [
      "Led delivery of three Salesforce implementations for financial services institutions, driving 100% user adoption, 60% revenue growth, and 90% CSAT.",
      "Architected and implemented custom workflows, flows, and enterprise integrations, ensuring secure data models, performance optimization, and platform scalability.",
      "Partnered with stakeholders to define solution designs, contribute to architecture decisions, and lead Agile/Scrum ceremonies from discovery to deployment.",
      "Guided junior developers through code reviews, best practices, and delivery standards to elevate overall team capability and solution quality."
    ],
    tag: "SME",
  },
  {
    period: "Oct 2021 — Sep 2024",
    role: "Software Engineer (Salesforce)",
    company: "Prodapt Solutions",
    location: "Hyderabad, India",
    bullets: [
      "Collaborated closely with business stakeholders and cross-functional teams to deliver tailored, scalable solution designs aligned to objectives.",
      "Contributed to 60% of development, building complex workflows, Apex triggers, Visualforce, LWC, OmniStudio components, and Sales/Service Cloud features.",
      "Authored technical documentation, championing best practices, data quality, and maintainable architecture for complex business logic.",
      "Executed integrations, glass-box testing, and prepared detailed unit test cases to deliver projects smoothly following Agile/Scrum."
    ],
    tag: "Engineer",
  }
];

const TECH = [
  {
    group: "Core Platform", items: [
      ["Apex & Core Java", 96], ["LWC & Aura", 94], ["Salesforce Flows", 95], ["OmniStudio", 90], ["Visualforce & Flex", 78]
    ]
  },
  {
    group: "Clouds & Architecture", items: [
      ["Financial Services Cloud (FSC)", 92], ["Sales & Service Cloud", 95], ["Experience Cloud", 88], ["Communications Cloud", 85], ["Scalable Solution Design", 90]
    ]
  },
  {
    group: "Integrations & APIs", items: [
      ["REST / SOAP APIs", 94], ["Salesforce Integrations", 92], ["Platform Events & CDC", 88]
    ]
  },
  {
    group: "DevOps & AI Tooling", items: [
      ["DevOps & Copado CI/CD", 86], ["Prompt Builder & AI Assist", 85], ["Salesforce DX & GitHub", 90], ["Vibe Coding", 95]
    ]
  },
];

function TimelineCard({ item, idx, total }) {
  return (
    <div className="hoverable" style={{
      display: "grid", gridTemplateColumns: "180px 1fr", gap: 28, position: "relative",
      paddingLeft: 40, paddingBottom: idx === total - 1 ? 0 : 40,
    }}>
      {/* axis */}
      <div style={{ position: "absolute", left: 18, top: 8, bottom: 0, width: 2, background: idx === total - 1 ? "transparent" : "linear-gradient(180deg, var(--accent), transparent)" }}></div>
      <div style={{ position: "absolute", left: 8, top: 4, width: 22, height: 22, borderRadius: 99, background: "white", border: "2px solid var(--accent)", display: "grid", placeItems: "center" }}>
        <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--accent)" }}></span>
      </div>

      <div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-2)", letterSpacing: ".06em", fontWeight: 600 }}>{item.period}</span>
        <div style={{ marginTop: 6 }}>
          <span style={{ display: "inline-block", fontSize: 10, padding: "3px 8px", background: "var(--sf-sky)", color: "#FFFFFF", fontWeight: 700, borderRadius: 4, letterSpacing: ".1em", textTransform: "uppercase" }}>{item.tag}</span>
        </div>
      </div>
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
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
  const stats = [
    { metric: 506, label: "Badges Earned", suffix: "" },
    { metric: 294, label: "Points (k)", suffix: "k" },
    { metric: 60, label: "Trails Completed", suffix: "" },
    { metric: 14, label: "Superbadges", suffix: "" },
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
            href="https://www.salesforce.com/trailblazer/yusufkhan2546"
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

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40 }}>
            <div>
              <div style={{ marginBottom: 20, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)" }}>Career trail</div>
              {TIMELINE.map((t, i) => <TimelineCard key={i} item={t} idx={i} total={TIMELINE.length} />)}
            </div>

            <aside style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100, alignSelf: "start" }}>
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
