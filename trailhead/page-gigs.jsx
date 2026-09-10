// Services & Gigs page — Custom daily-rate packages + FAQ Accordion
const { useState } = React;

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
  return (
    <div className="card hoverable" 
         style={{ 
           padding: "18px 24px", 
           borderRadius: 16, 
           background: "rgba(255,255,255,0.02)", 
           border: "1px solid rgba(180,210,255,0.12)", 
           marginBottom: 12, 
           cursor: "pointer" 
         }}
         onClick={() => setOpen(!open)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <strong style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "white" }}>{q}</strong>
        <span style={{ fontSize: 18, color: "var(--accent)", transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none" }}>＋</span>
      </div>
      <div style={{ 
        maxHeight: open ? "200px" : "0", 
        overflow: "hidden", 
        transition: "max-height 0.25s ease-out, margin 0.25s", 
        marginTop: open ? 12 : 0,
        color: "var(--ink-2)",
        fontSize: 14.5,
        lineHeight: 1.5
      }}>
        {a}
      </div>
    </div>
  );
}

function ProjectEstimator({ onInquire }) {
  const [service, setService] = useState("agentforce");
  const [scale, setScale] = useState("medium");
  const [duration, setDuration] = useState(2); // weeks

  const calcEstimate = useMemo(() => {
    let rate = 150;
    if (service === "agentforce") rate = 170;
    if (service === "vlocity") rate = 160;
    if (service === "lowcode") rate = 120;
    if (service === "apex_lwc") rate = 130;

    let multiplier = scale === "small" ? 0.75 : scale === "medium" ? 1.0 : 1.6;
    let days = Math.round(duration * 5 * multiplier);
    let total = days * rate;

    return { rate, days, total };
  }, [service, scale, duration]);

  return (
    <div className="cyber-card" style={{ padding: "32px 36px", marginBottom: 60 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
        <div>
          <div className="hud-badge">
            <span className="pulse-dot"></span> INTERACTIVE PROJECT SCOPE ESTIMATOR
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "white", margin: "10px 0 4px" }}>
            Estimate Your Project Timeline &amp; Investment
          </h3>
        </div>
        <div style={{ textAlign: "right", background: "rgba(3, 7, 18, 0.8)", padding: "10px 18px", borderRadius: 12, border: "1px solid var(--line)" }}>
          <div style={{ fontSize: 11, color: "var(--ink-2)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>Estimated Investment</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "var(--accent)" }}>
            ${calcEstimate.total.toLocaleString()} <span style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 500 }}>({calcEstimate.days} dev days)</span>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 24 }}>
        {/* Service Type */}
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".06em", display: "block", marginBottom: 8 }}>
            Primary Technical Domain
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{
              width: "100%", padding: "10px 14px", borderRadius: 10, background: "rgba(3, 7, 18, 0.9)",
              border: "1px solid var(--line)", color: "white", fontFamily: "inherit", fontSize: 13.5
            }}
          >
            <option value="agentforce">🤖 Agentforce AI &amp; Data Cloud ($170/day)</option>
            <option value="vlocity">🔮 OmniStudio &amp; FSC ($160/day)</option>
            <option value="integration">🔌 Third-Party REST/SOAP Integrations ($150/day)</option>
            <option value="apex_lwc">⚡ Apex &amp; LWC Custom Dev ($130/day)</option>
            <option value="lowcode">⚙️ Low-Code Flows &amp; Admin ($120/day)</option>
          </select>
        </div>

        {/* Project Scale */}
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".06em", display: "block", marginBottom: 8 }}>
            Architecture Scale
          </label>
          <div style={{ display: "flex", gap: 6 }}>
            {[["small", "Sprint / Quick MVP"], ["medium", "Standard Build"], ["enterprise", "Enterprise Core"]].map(([k, label]) => (
              <button
                key={k}
                className={`btn ghost ${scale === k ? "active" : ""}`}
                onClick={() => setScale(k)}
                style={{
                  flex: 1, padding: "8px 6px", fontSize: 11.5, textTransform: "capitalize",
                  borderColor: scale === k ? "var(--accent)" : "var(--line)",
                  background: scale === k ? "color-mix(in oklab, var(--accent) 20%, transparent)" : "rgba(255,255,255,0.03)"
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".06em", display: "block", marginBottom: 8 }}>
            Estimated Duration: {duration} {duration === 1 ? "Week" : "Weeks"}
          </label>
          <input
            type="range"
            min={1}
            max={12}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--accent)", margin: "10px 0" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: "1px solid var(--line)", paddingTop: 18 }}>
        <div style={{ fontSize: 12.5, color: "var(--ink-2)" }}>
          ✔️ Includes full technical design doc, governor-limit safe code, unit test coverage &amp; post-launch hypercare.
        </div>
        <button
          className="btn primary hoverable"
          onClick={() => onInquire(`Estimated Project: ${service.toUpperCase()} (${calcEstimate.days} days ~ $${calcEstimate.total.toLocaleString()})`)}
          style={{ padding: "10px 22px", border: "none" }}
        >
          Book Consultation With Estimate <Icon name="arrow" size={15} />
        </button>
      </div>
    </div>
  );
}

function PageGigs({ go }) {
  const handleSelectGig = (title) => {
    window.__GIG_SELECTION__ = title;
    go("contact");
  };

  return (
    <main>
      <section className="page">
        <div className="container" style={{ maxWidth: 1200 }}>
          
          {/* Header */}
          <div className="page-head" style={{ marginBottom: 48 }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Services &amp; Gigs</span>
              <h1 className="h-display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" }}>
                Technical Offerings
              </h1>
              <p className="body-lg" style={{ maxWidth: 640 }}>
                High-quality, specialized consulting and implementation packages for your Salesforce platform, billed on a simple day-rate model.
              </p>
            </div>
            <div>
              <button className="btn primary hoverable" onClick={() => go("contact")} style={{ padding: "14px 28px" }}>
                Discuss Custom Project <Icon name="mail" size={15}/>
              </button>
            </div>
          </div>

          {/* Interactive Project Estimator */}
          <ProjectEstimator onInquire={handleSelectGig} />

          {/* Grid Layout */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", 
            gap: 20, 
            marginBottom: 60 
          }}>
            {GIGS.map(g => (
              <div key={g.id} className="card hoverable" style={{ 
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
              }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div style={{ 
                      width: 44, 
                      height: 44, 
                      borderRadius: 12, 
                      background: "var(--sf-sky)", 
                      border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
                      display: "grid", 
                      placeItems: "center", 
                      color: "var(--accent)"
                    }}>
                      <Icon name={g.icon} size={22} />
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: 24, fontWeight: 800, color: "white" }}>{g.rate}</span>
                      <span style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 600 }}> / day</span>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, margin: "0 0 10px", color: "white" }}>
                    {g.title}
                  </h3>
                  
                  <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5, marginBottom: 20, minHeight: 60 }}>
                    {g.description}
                  </p>

                  <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 16, marginBottom: 24 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", display: "block", marginBottom: 10 }}>
                      What's Included:
                    </span>
                    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                      {g.bullets.map((b, i) => (
                        <li key={i} style={{ 
                          fontSize: 13, 
                          color: "var(--ink-2)", 
                          display: "flex", 
                          alignItems: "flex-start", 
                          gap: 8, 
                          marginBottom: 8 
                        }}>
                          <span style={{ color: "var(--accent)", fontSize: 14 }}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  className="btn primary hoverable" 
                  onClick={() => handleSelectGig(g.title)}
                  style={{ width: "100%", justifyContent: "center", padding: "12px" }}
                >
                  Inquire For Package <Icon name="arrow" size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <span className="eyebrow"><span className="dot"></span> FAQ</span>
              <h2 className="h-section" style={{ fontSize: 36, marginTop: 12 }}>Engagement FAQs</h2>
            </div>
            <div>
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .card.hoverable:hover {
          transform: translateY(-4px);
          border-color: rgba(180,210,255,0.3) !important;
          box-shadow: 0 12px 30px -10px rgba(0, 160, 255, 0.15) !important;
        }
      `}</style>
    </main>
  );
}

Object.assign(window, { PageGigs });
