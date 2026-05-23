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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = (id) => {
    setDrawerOpen(false);
    go(id);
  };

  // Close drawer on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setDrawerOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand hoverable" href="#home" onClick={(e)=>{e.preventDefault(); navigate("home");}}>
            <span className="brand-mark" style={{ overflow: "hidden" }}>
              <img src="uploads/YK.png" alt="YK" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </span>
            <span>Yusuf Khan</span>
            <span style={{ fontWeight: 500, color: "var(--ink-2)", fontSize: 13, fontFamily: "var(--font-body)" }}>· Salesforce Lead Dev</span>
          </a>

          {/* Desktop nav links */}
          <div className="nav-links">
            {ROUTES.map(r => (
              <a key={r.id}
                 href={`#${r.id}`}
                 onClick={(e)=>{ e.preventDefault(); navigate(r.id); }}
                 className={"nav-link hoverable " + (route===r.id ? "active":"")}>
                {r.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons — hidden on mobile via .nav-cta-group CSS class */}
          <div className="nav-cta-group" style={{ display: "flex", gap: 10 }}>
            <a className="btn ghost hoverable" href="#contact" onClick={(e)=>{e.preventDefault(); navigate("contact");}}>
              <Icon name="mail" size={15}/> Get in touch
            </a>
            <a className="btn primary hoverable" href="assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Icon name="download" size={15}/> Resume
            </a>
          </div>

          {/* Hamburger — visible on mobile/tablet via CSS */}
          <button
            className="nav-hamburger"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Navigation menu">
          <button className="drawer-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>✕</button>

          {ROUTES.map(r => (
            <a key={r.id}
               href={`#${r.id}`}
               className={"drawer-link" + (route===r.id ? " active" : "")}
               onClick={(e)=>{ e.preventDefault(); navigate(r.id); }}>
              {r.label}
            </a>
          ))}

          <div className="drawer-ctas">
            <a className="btn ghost" href="#contact" onClick={(e)=>{e.preventDefault(); navigate("contact");}}>
              <Icon name="mail" size={15}/> Get in touch
            </a>
            <a className="btn primary" href="assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Icon name="download" size={15}/> Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ borderTop: "1px solid var(--line-2)", padding: "48px 0", background: "var(--card)" }}>
      <div className="container footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}>
        <div className="footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="brand-mark" style={{ width: 36, height: 36, overflow: "hidden" }}>
              <img src="uploads/YK.png" alt="YK" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </span>
            <strong style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>Yusuf Khan</strong>
          </div>
          <p className="body-lg" style={{ marginTop: 14, maxWidth: 340 }}>
            Salesforce Lead Developer building enterprise-grade experiences across Banking, Retail and Financial Services.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            <a className="btn ghost hoverable" href="https://www.linkedin.com/in/yusufkhan2546" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={16}/> LinkedIn</a>
            <a className="btn ghost hoverable" href="https://www.salesforce.com/trailblazer/yusufkhan2546" target="_blank" rel="noopener noreferrer"><Icon name="trail" size={16}/> Trailblazer</a>
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
        <div className="footer-currently">
          <div style={{ textTransform: "uppercase", letterSpacing: ".14em", fontSize: 11, color: "var(--ink-2)", fontWeight: 700, marginBottom: 12 }}>Currently</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--sf-success)", boxShadow: "0 0 8px var(--sf-success)" }}></span>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Available for new engagements</span>
          </div>
          <div style={{ color: "var(--ink-2)", fontSize: 14 }}>Replies within 24h</div>
        </div>
      </div>
      <div className="container footer-bottom" style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--line-2)", display: "flex", justifyContent: "space-between", color: "var(--ink-2)", fontSize: 13 }}>
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

  // Toggle custom cursor — class controls cursor:none on all interactive elements
  useEffect(() => {
    document.body.classList.toggle("custom-cursor", !!t.showCursor);
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
