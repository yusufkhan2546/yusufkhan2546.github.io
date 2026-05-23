// Contact page — Salesforce Web-to-Lead form + ways to reach + resume download

const inputStyle = {
  width: "100%", padding: "12px 14px", border: "1px solid var(--line)",
  borderRadius: 12, fontSize: 14, fontFamily: "inherit", color: "var(--ink)",
  background: "var(--bg)", outline: "none", boxSizing: "border-box",
  transition: "border-color .15s, box-shadow .15s",
};

const labelStyle = {
  fontSize: 12, fontWeight: 700, color: "var(--ink-2)",
  letterSpacing: ".06em", textTransform: "uppercase",
  display: "block", marginBottom: 6,
};

const reqStar = { color: "var(--accent)", marginLeft: 2 };

function SFField({ label, name, type = "text", placeholder, required = false, maxLength }) {
  const id = "sf-" + name;
  const [focused, setFocused] = React.useState(false);
  return (
    <label htmlFor={id} style={{ display: "block" }}>
      <span style={labelStyle}>{label}{required && <span style={reqStar}>*</span>}</span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        style={{
          ...inputStyle,
          borderColor: focused ? "var(--accent)" : "var(--line)",
          boxShadow: focused ? "0 0 0 4px color-mix(in oklab, var(--accent) 18%, transparent)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </label>
  );
}

function SFTextarea({ label, name, placeholder, required = false }) {
  const id = "sf-" + name;
  const [focused, setFocused] = React.useState(false);
  return (
    <label htmlFor={id} style={{ display: "block" }}>
      <span style={labelStyle}>{label}{required && <span style={reqStar}>*</span>}</span>
      <textarea
        id={id}
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        style={{
          ...inputStyle,
          resize: "vertical",
          borderColor: focused ? "var(--accent)" : "var(--line)",
          boxShadow: focused ? "0 0 0 4px color-mix(in oklab, var(--accent) 18%, transparent)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </label>
  );
}

function PageContact({ go }) {
  const [commType, setCommType] = React.useState("Engagement");
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [captchaError, setCaptchaError] = React.useState(false);
  const formRef = React.useRef(null);
  const widgetIdRef = React.useRef(null);

  const commTypes = ["Engagement", "Architecture Review", "Hiring", "Just Curious"];

  // Render reCAPTCHA — uses global queue so timing doesn't matter
  React.useEffect(() => {
    function doRender() {
      const el = document.getElementById("rc-contact");
      if (!el || el.childElementCount > 0) return;
      widgetIdRef.current = window.grecaptcha.enterprise.render(el, {
        sitekey: "6Lf__vgsAAAAAH5xBnfx3uMrQ-MhXuV4PXcnl1Nj",
        action: "CONTACT",
      });
    }
    if (window._rcReady) {
      doRender();
    } else {
      window._rcQueue = window._rcQueue || [];
      window._rcQueue.push(doRender);
    }
  }, []);

  const handleSubmit = (e) => {
    // Validate reCAPTCHA first
    const token = (window.grecaptcha && widgetIdRef.current != null)
      ? window.grecaptcha.enterprise.getResponse(widgetIdRef.current)
      : "";
    if (!token) {
      e.preventDefault();
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);

    // Salesforce Lead requires Company — auto-fill if left blank
    const companyInput = e.target.querySelector('[name="company"]');
    if (companyInput && !companyInput.value.trim()) {
      companyInput.value = "Individual";
    }
    setSubmitting(true);

    // Form submits into hidden iframe — after a short delay show success & reset
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setCommType("Engagement");
      if (formRef.current) formRef.current.reset();
      // Reset reCAPTCHA so it can be used again
      if (window.grecaptcha && widgetIdRef.current != null) {
        window.grecaptcha.enterprise.reset(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    }, 1800);
  };

  if (submitted) {
    return (
      <main>
        <section className="page">
          <div className="container">
            <div className="success-card" style={{
              maxWidth: 560, margin: "80px auto", textAlign: "center",
              padding: "60px 40px", borderRadius: 28,
              background: "rgba(0,161,224,0.05)",
              border: "1px solid rgba(0,161,224,0.2)",
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--sf-success), #00A1E0)",
                display: "grid", placeItems: "center",
                margin: "0 auto 24px",
                boxShadow: "0 0 40px rgba(0,200,100,0.3)",
              }}>
                <Icon name="check" size={32} color="white" />
              </div>
              <h2 className="h-display" style={{ fontSize: 40, marginBottom: 12 }}>Response recorded!</h2>
              <p className="body-lg" style={{ color: "var(--ink-2)", marginBottom: 32 }}>
                Your message has landed in my Salesforce CRM. I'll read it personally and get back to you within 24 hours.
              </p>
              <button
                className="btn primary hoverable"
                onClick={() => setSubmitted(false)}
              >
                Send another message <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hidden iframe — Salesforce response loads here, not on the main page */}
      <iframe name="sf-submit-target" title="sf-submit" style={{ display: "none" }} />

      <section className="page">
        <div className="container">
          <div className="page-head" style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, marginBottom: 48 }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Contact · Let's build</span>
              <h1 className="h-display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" }}>
                Got a hard<br />Salesforce problem?
              </h1>
              <p className="body-lg" style={{ maxWidth: 540 }}>
                I read every message myself. Tell me what you're building — even a paragraph helps me come back with the right starting point.
              </p>
            </div>
          </div>

          <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 }}>

            {/* Salesforce Web-to-Lead Form — submits into hidden iframe */}
            <form
              ref={formRef}
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgK00000AXqoT"
              method="POST"
              target="sf-submit-target"
              onSubmit={handleSubmit}
              className="card form-card" style={{ padding: 36, borderRadius: 22 }}
            >
              {/* Hidden Salesforce fields */}
              <input type="hidden" name="oid" value="00DgK00000AXqoT" />
              <input type="hidden" name="retURL" value="about:blank" />
              <input type="hidden" name="00NgK000041ZJI5" value={commType} />
              <input type="hidden" name="lead_source" value="Web" />

              {/* Communication Type Pills */}
              <div style={{ marginBottom: 24 }}>
                <span style={labelStyle}>What's this about?</span>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 2 }}>
                  {commTypes.map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setCommType(t)}
                      className="hoverable"
                      style={{
                        padding: "8px 16px", borderRadius: 999, fontSize: 12.5, fontWeight: 600,
                        border: "1px solid " + (commType === t ? "var(--accent)" : "var(--line)"),
                        background: commType === t ? "var(--accent)" : "transparent",
                        color: commType === t ? "white" : "var(--ink)", cursor: "none",
                        transition: "all .15s",
                      }}
                    >{t}</button>
                  ))}
                </div>
              </div>

              {/* First + Last Name */}
              <div className="name-fields" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <SFField label="First Name" name="first_name" placeholder="Jane" required maxLength={40} />
                <SFField label="Last Name" name="last_name" placeholder="Trailblazer" required maxLength={80} />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 16 }}>
                <SFField label="Email" name="email" type="email" placeholder="jane@company.com" required maxLength={80} />
              </div>

              {/* Company (auto-fills "Individual" if blank) */}
              <div style={{ marginBottom: 16 }}>
                <SFField label="Company" name="company" placeholder="ACME Corp (leave blank if individual)" maxLength={40} />
              </div>

              {/* Description / Message */}
              <div style={{ marginBottom: 22 }}>
                <SFTextarea
                  label="Tell me what you're building"
                  name="description"
                  placeholder="We're moving off a 4-year-old Vlocity org and need help untangling our OmniScripts before migration to OmniStudio…"
                  required
                />
              </div>

              {/* reCAPTCHA widget */}
              <div style={{ marginBottom: 20 }}>
                <div id="rc-contact"></div>
                {captchaError && (
                  <div style={{ color: "#e74c3c", fontSize: 12, marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon name="shield" size={13} color="#e74c3c" /> Please complete the reCAPTCHA verification before sending.
                  </div>
                )}
              </div>

              <div className="form-footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 12, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon name="shield" size={14} color="var(--sf-success)" /> Replies within 24h. Goes directly to my Salesforce CRM.
                </div>
                <button
                  type="submit"
                  className="btn primary hoverable submit-btn"
                  disabled={submitting}
                  style={{ minWidth: 160, justifyContent: "center" }}
                >
                  {submitting
                    ? <><span style={{ marginRight: 8 }}>⏳</span> Sending…</>
                    : <>Send message <Icon name="arrow" size={14} /></>
                  }
                </button>
              </div>
            </form>

            {/* Sidebar — on mobile, display:contents flattens it into the parent column */}
            <aside className="contact-aside" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="hoverable" style={{
                borderRadius: 16, overflow: "hidden", position: "relative",
                background: "linear-gradient(135deg, #0a1b3c 0%, #1a2d5c 60%, #0d1f4a 100%)",
                border: "1px solid rgba(0,161,224,0.35)",
                boxShadow: "0 8px 32px -8px rgba(0,100,200,0.35)",
              }}>
                <style>{`
                  @keyframes bpPulse { 0%,100%{opacity:.5;} 50%{opacity:1;} }
                  @keyframes dashScroll { to { stroke-dashoffset: -32; } }
                  @keyframes readyBlink { 0%,100%{opacity:1;} 45%,55%{opacity:0.2;} }
                `}</style>

                {/* Top section */}
                <div style={{ padding: "14px 18px 10px" }}>
                  <div style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(0,161,224,0.75)", letterSpacing: ".22em", textTransform: "uppercase", marginBottom: 4 }}>
                    ◆ BOARDING PASS ◆
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "white", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10, opacity: 0.9 }}>
                    Open For Global Relocation 🌍
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    {/* Origin */}
                    <div>
                      <div style={{ fontSize: 26, fontWeight: 900, color: "white", fontFamily: "var(--font-display)", lineHeight: 1 }}>HYD</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: ".12em", marginTop: 2 }}>INDIA</div>
                    </div>

                    {/* Lottie airplane animation */}
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <dotlottie-wc
                        src="https://lottie.host/0796e03f-686f-4f4e-adb9-8be54e298467/tanoAIt2Ph.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: 110 }}
                      ></dotlottie-wc>
                    </div>

                    {/* Destination */}
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 26, fontWeight: 900, color: "white", fontFamily: "var(--font-display)", lineHeight: 1 }}>WLD</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: ".12em", marginTop: 2 }}>ANYWHERE</div>
                    </div>
                  </div>
                </div>

                {/* Perforated tear line */}
                <div style={{ position: "relative", margin: "0 0", height: 1 }}>
                  <div style={{ borderTop: "1.5px dashed rgba(255,255,255,0.12)", margin: "0 14px" }} />
                  <div style={{ position: "absolute", left: -8, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, borderRadius: "50%", background: "var(--card)" }} />
                  <div style={{ position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, borderRadius: "50%", background: "var(--card)" }} />
                </div>

                {/* Bottom details strip */}
                <div style={{ padding: "10px 18px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {[
                    { label: "PASSENGER", value: "YUSUF KHAN" },
                    { label: "CLASS", value: "LEAD DEV" },
                    { label: "GATE", value: "JUL '26" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: ".14em", fontFamily: "var(--font-mono)" }}>{label}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-mono)", marginTop: 2 }}>{value}</div>
                    </div>
                  ))}
                  <div>
                    <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: ".14em", fontFamily: "var(--font-mono)" }}>STATUS</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4ADE80", fontFamily: "var(--font-mono)", marginTop: 2, animation: "readyBlink 2.2s ease-in-out infinite" }}>● READY</div>
                  </div>
                </div>
              </div>
              <ContactCard icon="mail" label="Email" value="yusufkhantrailblazer@gmail.com" cta="Compose" href="mailto:yusufkhantrailblazer@gmail.com" />
              <ContactCard icon="linkedin" label="LinkedIn" value="/in/yusufkhan2546" cta="Connect" href="https://www.linkedin.com/in/yusufkhan2546" />
              <ContactCard icon="trail" label="Trailblazer profile" value="yusufkhan2546" cta="View badges" href="https://www.salesforce.com/trailblazer/yusufkhan2546" />
              <ContactCard icon="pin" label="Mobile" value="+91 9100652546" cta="Call" href="tel:+919100652546" />
              {/* Creative Boarding Pass Card */}


              <div className="card" style={{ padding: 24, borderRadius: 18, background: "linear-gradient(135deg, var(--sf-navy), #0A1B3C)", color: "white" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <Icon name="download" size={18} color="var(--sf-blue)" />
                  <strong style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>Resume — 2026</strong>
                </div>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.7)", marginBottom: 16 }}>One-page summary, certifications appendix, two reference case studies.</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href="assets/Yusuf_Khan_Salesforce_Developer_Resume.pdf" download="Yusuf_Khan_Salesforce_Developer_Resume.pdf" className="btn primary hoverable" style={{ background: "var(--sf-blue)", textDecoration: "none" }}>
                    Download PDF <Icon name="download" size={14} />
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Availability strip */}
          <div className="card availability-strip" style={{ marginTop: 40, padding: 28, borderRadius: 22, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center" }}>
            <div style={{ position: "relative", width: 14, height: 14, flexShrink: 0 }}>
              <div style={{ width: 14, height: 14, borderRadius: 99, background: "var(--sf-success)", animation: "bleep 1.8s ease-in-out infinite" }}></div>
              <style>{`@keyframes bleep { 0%,100%{opacity:1; box-shadow:0 0 6px var(--sf-success);} 50%{opacity:0.4; box-shadow:0 0 14px var(--sf-success);} }`}</style>
            </div>
            <div>
              <strong style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>Available for new engagements</strong>
              <div style={{ color: "var(--ink-2)", fontSize: 14, marginTop: 2 }}>
                Best fit: lead developer, architect-in-residence, or Salesforce AI strategy engagements.
              </div>
            </div>
            <button className="btn dark hoverable avail-btn" onClick={() => go("home")}>
              <Icon name="arrow" size={14} /> Back to top
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({ icon, label, value, cta, href }) {
  const isExternal = href && href.startsWith("http");
  return (
    <a href={href || "#"} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} onClick={e => !href && e.preventDefault()} className="card hoverable" style={{ padding: 18, borderRadius: 16, display: "flex", alignItems: "center", gap: 14, color: "var(--ink)", textDecoration: "none" }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--accent)", display: "grid", placeItems: "center", color: "var(--accent-deep)" }}>
        <Icon name={icon} size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-2)" }}>{label}</div>
        <div style={{ fontSize: 14.5, fontWeight: 600, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</div>
      </div>
      {cta && <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)" }}>{cta} →</span>}
    </a>
  );
}

Object.assign(window, { PageContact });
