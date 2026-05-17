// Root app — routing, nav, tweaks
const { useState, useEffect, useRef, useMemo } = React;

const ROUTES = [
  { id: "home", label: "Home" },
  { id: "certs", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function useHashRoute() {
  const [route, setRoute] = useState(() => (location.hash.replace("#", "") || "home"));
  useEffect(() => {
    const on = () => setRoute(location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return [route, (r) => { location.hash = r; window.scrollTo({ top: 0, behavior: "instant" }); }];
}

const TWEAK_DEFAULTS = window.TWEAK_DEFAULTS;

function Nav({ route, go }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand hoverable" href="#home" onClick={(e)=>{e.preventDefault(); go("home");}}>
          <span className="brand-mark" style={{ overflow: 'hidden' }}>
            <img src="uploads/YK.png" alt="YK" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </span>
          <span>Yusuf Khan</span>
          <span style={{ fontWeight: 500, color: "var(--ink-2)", fontSize: 13, fontFamily: "var(--font-body)" }}>· Salesforce Lead Dev</span>
        </a>
        <div className="nav-links">
          {ROUTES.map(r => (
            <a key={r.id}
               href={`#${r.id}`}
               onClick={(e)=>{ e.preventDefault(); go(r.id); }}
               className={"nav-link hoverable " + (route===r.id ? "active":"")}>
              {r.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a className="btn ghost hoverable" href="#contact" onClick={(e)=>{e.preventDefault(); go("contact");}}>
            <Icon name="mail" size={15}/> Get in touch
          </a>
          <a className="btn primary hoverable" href="assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Icon name="download" size={15}/> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ borderTop: "1px solid var(--line-2)", padding: "48px 0", background: "var(--card)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="brand-mark" style={{ width: 36, height: 36, overflow: 'hidden' }}>
              <img src="uploads/YK.png" alt="YK" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </span>
            <strong style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>Yusuf Khan</strong>
          </div>
          <p className="body-lg" style={{ marginTop: 14, maxWidth: 340 }}>
            Salesforce Lead Developer building enterprise-grade experiences across Banking, Retail and Financial Services.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <a className="btn ghost hoverable" href="https://www.linkedin.com/in/yusufkhan2546" target="_blank" rel="noopener noreferrer" data-cursor="hover"><Icon name="linkedin" size={16}/> LinkedIn</a>
            <a className="btn ghost hoverable" href="https://www.salesforce.com/trailblazer/yusufkhan2546" target="_blank" rel="noopener noreferrer" data-cursor="hover"><Icon name="trail" size={16}/> Trailblazer</a>
          </div>
        </div>
        <div>
          <div style={{ textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 }}>Sitemap</div>
          {ROUTES.map(r => (
            <div key={r.id} style={{ marginBottom: 8 }}>
              <a className="hoverable" href={`#${r.id}`} onClick={(e)=>{e.preventDefault(); go(r.id);}}
                 style={{ color: "var(--ink-2)", fontSize: 14, fontWeight: 500 }}>{r.label}</a>
            </div>
          ))}
        </div>
        <div>
          <div style={{ textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 }}>Domains</div>
          {["Banking & FSC", "Retail / Commerce", "Lending & Loan Origination", "Experience Cloud", "Agentforce & AI"].map(s => (
            <div key={s} style={{ marginBottom: 8, color: "var(--ink-2)", fontSize: 14, fontWeight: 500 }}>{s}</div>
          ))}
        </div>
        <div>
          <div style={{ textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 }}>Currently</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--sf-success)", boxShadow: "0 0 8px var(--sf-success)" }}></span>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Available for new engagements</span>
          </div>
          <div style={{ color: "var(--ink-2)", fontSize: 14 }}>Replies within 24h</div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--line-2)", display: "flex", justifyContent: "space-between", color: "var(--ink-2)", fontSize: 13 }}>
        <span>© 2026 Yusuf Khan. Built with curiosity and a lot of Apex.</span>
        <span className="mono">v1.0 · Trailhead-inspired</span>
      </div>
    </footer>
  );
}

function App() {
  const [route, go] = useHashRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent CSS vars
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-deep", t.accentDeep);
  }, [t.accent, t.accentDeep]);

  // density
  useEffect(() => {
    document.body.style.cursor = t.showCursor ? "none" : "auto";
  }, [t.showCursor]);

  let Page = null;
  if (route === "home") Page = <PageHome go={go} />;
  else if (route === "certs") Page = <PageCerts go={go} />;
  else if (route === "projects") Page = <PageProjects go={go} />;
  else if (route === "experience") Page = <PageExperience go={go} />;
  else if (route === "contact") Page = <PageContact go={go} />;
  else Page = <PageHome go={go} />;

  const labels = { home: "01 Home", certs: "02 Certifications", projects: "03 Projects", experience: "04 Experience", contact: "05 Contact" };

  return (
    <div data-screen-label={labels[route] || route}>
      <BoltTrail enabled={t.boltTrail} showCursor={t.showCursor} />
      <Mascot route={route} setTweak={setTweak} enabled={t.mascot} />
      <Nav route={route} go={go} />
      <div key={route} className="page-shell page-enter" style={route === "home" ? { paddingTop: 0 } : undefined}>
        {Page}
      </div>
      <Footer go={go} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakColor label="Accent" value={t.accent} options={["#00A1E0","#0070D2","#7F00FF","#FF6F00","#16A34A"]}
            onChange={v=>setTweak("accent", v)} />
          <TweakColor label="Deep accent" value={t.accentDeep} options={["#032D60","#16325C","#1A1A2E","#3C0F66","#1F2937"]}
            onChange={v=>setTweak("accentDeep", v)} />
        </TweakSection>
        <TweakSection title="Effects">
          <TweakToggle label="Lightning bolt cursor trail" value={t.boltTrail} onChange={v=>setTweak("boltTrail", v)} />
          <TweakToggle label="Custom cursor dot" value={t.showCursor} onChange={v=>setTweak("showCursor", v)} />
          <TweakToggle label="Trail companion mascot" value={t.mascot} onChange={v=>setTweak("mascot", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
