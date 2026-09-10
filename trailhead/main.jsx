// Root app — routing, nav, tweaks
const { useState, useEffect, useRef, useMemo } = React;

const ROUTES = [
  { id: "home", label: "Home" },
  { id: "certs", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "gigs", label: "Services" },
  { id: "demos", label: "Demos" },
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

const THEMES = [
  { id: "cyber-matrix", label: "Matrix", color: "#00F0FF" },
  { id: "hyperion", label: "Hyperion", color: "#F59E0B" },
  { id: "nebula", label: "Nebula", color: "#A855F7" },
  { id: "apex", label: "Apex", color: "#10B981" }
];

function ThemeSwitcher({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const current = THEMES.find(t => t.id === theme) || THEMES[0];
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        className="btn ghost hoverable"
        onClick={() => setOpen(!open)}
        style={{
          padding: "7px 12px",
          fontSize: 12,
          borderRadius: 999,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          borderColor: "var(--line)",
          background: "rgba(255,255,255,0.04)"
        }}
        title="Switch Theme"
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: current.color, boxShadow: `0 0 8px ${current.color}` }}></span>
        <span>{current.label}</span>
        <span style={{ fontSize: 9, opacity: 0.6 }}>▼</span>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0,
          background: "rgba(6, 12, 28, 0.95)", backdropFilter: "blur(18px)",
          border: "1px solid var(--line)", borderRadius: 14, padding: 6,
          display: "flex", flexDirection: "column", gap: 4, zIndex: 1000,
          boxShadow: "0 14px 40px rgba(0,0,0,0.7), 0 0 20px color-mix(in oklab, var(--accent) 20%, transparent)",
          minWidth: 135
        }}>
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
                borderRadius: 8, border: "none",
                background: theme === t.id ? "color-mix(in oklab, var(--accent) 22%, transparent)" : "transparent",
                color: theme === t.id ? "#FFFFFF" : "var(--ink-2)", fontSize: 12.5, fontWeight: 600,
                cursor: "pointer", textAlign: "left", transition: "all 0.15s ease"
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.color, boxShadow: `0 0 6px ${t.color}` }}></span>
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
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
            <span className="brand-mark" style={{ overflow: "hidden", border: "1px solid color-mix(in oklab, var(--accent) 40%, transparent)" }}>
              <img src="uploads/YK.png" alt="YK" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ lineHeight: 1.1, fontWeight: 700 }}>Yusuf Khan</span>
                <span className="hud-badge" style={{ padding: "2px 6px", fontSize: 9 }}>● ONLINE</span>
              </div>
              <span style={{ fontWeight: 600, color: "var(--ink-2)", fontSize: 11, fontFamily: "var(--font-body)", lineHeight: 1.1 }}>Salesforce Lead Architect & SME</span>
            </div>
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

          {/* Theme switcher + CTA buttons */}
          <div className="nav-cta-group" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ThemeSwitcher theme={theme} setTheme={changeTheme} />
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

          <div style={{ marginBottom: 12, textTransform: "uppercase", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>
            Select Futuristic Theme
          </div>
          <ThemeSwitcher theme={theme} setTheme={changeTheme} />

          <div style={{ height: 16 }}></div>

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

  // Update document title and meta description on route changes for SEO
  useEffect(() => {
    const titles = {
      home: "Yusuf Khan — Salesforce Lead Developer & Architect",
      certs: "Salesforce Certifications — Yusuf Khan",
      projects: "Enterprise Projects — Yusuf Khan",
      experience: "Professional Experience — Yusuf Khan",
      gigs: "Salesforce Consulting Services & Gigs — Yusuf Khan",
      demos: "Demos & Tech Articles — Yusuf Khan",
      contact: "Contact & Availability — Yusuf Khan"
    };
    document.title = titles[route] || "Yusuf Khan — Salesforce Lead Developer & Architect";

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
  if (route === "home") Page = <PageHome go={go} />;
  else if (route === "certs") Page = <PageCerts go={go} />;
  else if (route === "projects") Page = <PageProjects go={go} />;
  else if (route === "experience") Page = <PageExperience go={go} />;
  else if (route === "gigs") Page = <PageGigs go={go} />;
  else if (route === "demos") Page = <PageDemos go={go} />;
  else if (route === "contact") Page = <PageContact go={go} mapplsToken={t.mapplsToken} />;
  else Page = <PageHome go={go} />;

  const labels = { home: "01 Home", certs: "02 Certifications", projects: "03 Projects", experience: "04 Experience", gigs: "05 Services", demos: "06 Demos & Articles", contact: "07 Contact" };

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
        <TweakSection title="Integrations">
          <TweakText label="Mappls Access Token" value={t.mapplsToken || ""} placeholder="MapmyIndia SDK Token"
            onChange={v=>setTweak("mapplsToken", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
