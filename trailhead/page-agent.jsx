// PageAgent — Autonomous AI Agent interactive page featuring full-screen cosmic Soft Aurora backdrop
const { useState, useEffect, useRef } = React;

function PageAgent({ go }) {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [stage, setStage] = useState(0);
  const [output, setOutput] = useState(null);
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const outputRef = useRef(null);
  const timerRef = useRef(null);

  const samplePrompts = [
    { label: "⚡ Apex Bulkification", prompt: "Explain best patterns to bulkify Apex triggers for 50,000+ DML volume without hitting governor limits." },
    { label: "🏛️ FSC Architecture", prompt: "How does Yusuf architect Financial Services Cloud (FSC) Person Accounts and Household rollups?" },
    { label: "🤖 Agentforce Actions", prompt: "How do custom Apex Invocable Actions and Prompt Resolvers integrate with Agentforce?" },
    { label: "🏆 12× Certifications", prompt: "Summarize Yusuf Khan's 12 Salesforce certifications and architectural focus areas." },
    { label: "⚡ OmniStudio Tuning", prompt: "How to tune OmniStudio Integration Procedures and FlexCards to achieve sub-second response times?" }
  ];

  // Intelligent Agentforce Knowledge Base Generator
  const generateAgentResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes("apex") || q.includes("bulk") || q.includes("trigger") || q.includes("limit")) {
      return {
        title: "Enterprise Apex Bulkification & Governor Limit Mitigation",
        badge: "APEX DESIGN PATTERN // ARCHITECTURE",
        confidence: "99.4%",
        executionTime: "1.24s",
        tokens: "482 tokens",
        sections: [
          {
            heading: "1. Core Trigger Framework Architecture",
            text: "All triggers are delegated through a strictly singleton-managed Trigger Handler pattern (e.g. fflib or custom interface-based dispatcher). Triggers contain 0 lines of business logic."
          },
          {
            heading: "2. Bulkification Rules of Engagement",
            code: `// Pattern: Bulkified In-Memory Maps & Set Indexing
public void onBeforeInsert(List<Account> newAccounts) {
    Set<String> taxIdentifiers = new Set<String>();
    for (Account acc : newAccounts) {
        if (acc.Tax_ID__c != null) {
            taxIdentifiers.add(acc.Tax_ID__c);
        }
    }

    // 1 SOQL query for 200+ records in transaction
    Map<String, Account> existingMap = new Map<String, Account>();
    for (Account existing : [SELECT Id, Tax_ID__c FROM Account 
                             WHERE Tax_ID__c IN :taxIdentifiers 
                             WITH SECURITY_ENFORCED LIMIT 10000]) {
        existingMap.put(existing.Tax_ID__c, existing);
    }

    for (Account acc : newAccounts) {
        if (existingMap.containsKey(acc.Tax_ID__c)) {
            acc.addError('Duplicate Tax Identifier already registered.');
        }
    }
}`
          },
          {
            heading: "3. Asynchronous Chaining for High Volumes",
            text: "For operations exceeding synchronous 10,000 DML or 100 SOQL limits, tasks are fanned out using Queueable Apex with Database.AllowsCallouts and transaction finalizers (`System.Finalizer`) to guarantee rollback recovery and state audit."
          }
        ]
      };
    } else if (q.includes("fsc") || q.includes("financial") || q.includes("bank") || q.includes("lending") || q.includes("household")) {
      return {
        title: "Financial Services Cloud (FSC) Architecture & Data Modeling",
        badge: "FSC INDUSTRY CLOUD // SME SPECIFICATION",
        confidence: "98.9%",
        executionTime: "1.18s",
        tokens: "512 tokens",
        sections: [
          {
            heading: "1. Individual & Household Data Modeling",
            text: "Engineered using FSC Person Account architecture mapped to Household Groups via Account-Contact Relationship (ACR) and Contact-Contact Relationship (CCR) tables. Financial Accounts (Savings, Checking, Wealth, Commercial Credit) roll up dynamically using Financial Services Cloud Rollup-by-Lookup (RBL) rules and Data Cloud streaming."
          },
          {
            heading: "2. OmniStudio Process Automation",
            text: "Integrated OmniScripts with Omnistudio Integration Procedures (IPs) for seamless customer onboarding, KYC document verification, and real-time core banking API calls via Salesforce Named Credentials (OAuth 2.0 Mutual TLS)."
          },
          {
            heading: "3. Security & Compliance",
            text: "Full compliance with GLBA and RBI data security mandates: Salesforce Shield Platform Encryption on PII fields (Tax ID, SSN, Account Numbers), Field Audit Trail (FAT), and Transaction Security Policies on bulk report exports."
          }
        ]
      };
    } else if (q.includes("agent") || q.includes("prompt") || q.includes("copilot") || q.includes("invocable") || q.includes("action")) {
      return {
        title: "Agentforce Copilot: Dynamic Prompts & Custom Invocable Actions",
        badge: "AGENTFORCE AI // LLM ORCHESTRATION",
        confidence: "99.8%",
        executionTime: "1.05s",
        tokens: "440 tokens",
        sections: [
          {
            heading: "1. Agentforce Architecture Stack",
            text: "Agentforce operates as an autonomous reasoning engine on the Salesforce platform, orchestrating LLM prompt templates, Grounding via Data Cloud, and deterministic execution through Apex Invocable Methods."
          },
          {
            heading: "2. Sample Custom Invocable Action for Agentforce",
            code: `public class AgentGetAccountRiskAction {
    public class Request {
        @InvocableVariable(required=true description='Salesforce Account record Id')
        public Id accountId;
    }
    public class Response {
        @InvocableVariable(description='Calculated risk score based on transactions')
        public Decimal riskScore;
        @InvocableVariable(description='Natural language summary for Agentforce Copilot')
        public String agentInsight;
    }

    @InvocableMethod(label='Calculate Account Risk' 
                     description='Evaluates financial balance and past due invoices' 
                     category='Agentforce')
    public static List<Response> evaluateRisk(List<Request> requests) {
        List<Response> outputs = new List<Response>();
        for (Request req : requests) {
            Response res = new Response();
            // Calculation logic with Data Cloud grounding...
            res.riskScore = 0.15;
            res.agentInsight = 'Account has clean payment history. Low default probability.';
            outputs.add(res);
        }
        return outputs;
    }
}`
          },
          {
            heading: "3. Grounding & Guardrails",
            text: "Grounds agent decisions against verified CRM data. Zero data leakage to public models; all interactions stay strictly inside the Salesforce Einstein Trust Layer with toxicity masking and audit logging."
          }
        ]
      };
    } else if (q.includes("cert") || q.includes("qualification") || q.includes("credential") || q.includes("yusuf")) {
      return {
        title: "Yusuf Khan: 12× Salesforce Certified Architect Profile",
        badge: "CREDENTIAL VERIFICATION // LIVE METRICS",
        confidence: "100%",
        executionTime: "0.92s",
        tokens: "390 tokens",
        sections: [
          {
            heading: "1. Core Developer & Architecture Track",
            text: "• Platform Developer II (PD2) — Master level Apex, asynchronous frameworks, performance.\n• Platform Developer I (PD1) — Declarative + programmatic solutions.\n• JavaScript Developer I — Modern ECMAScript, LWC lifecycle, event propagation.\n• Lifecycle & Deployment Architect — CI/CD pipelines, SFDX, branching strategies, scratch orgs."
          },
          {
            heading: "2. Industry & AI Track",
            text: "• Agentforce Specialist — Designing autonomous agent topics, guardrails, actions.\n• Data Cloud Consultant — Unified Customer 360 profiles, calculated insights, streaming ingestion.\n• OmniStudio Developer — FlexCards, Integration Procedures, DataRaptors, OmniScripts.\n• Financial Services Cloud (FSC) — Commercial/Retail banking architectures."
          },
          {
            heading: "3. Enterprise Production Scale",
            text: "6+ years enterprise delivery across K Square Group and Prodapt Solutions. Managed $4.2B+ volume transaction systems with 99.98% uptime."
          }
        ]
      };
    } else {
      // General synthesis
      return {
        title: `Agentforce Analysis: "${query.slice(0, 48)}..."`,
        badge: "AGENTFORCE SYNTHESIS // ONLINE",
        confidence: "98.5%",
        executionTime: "1.32s",
        tokens: "410 tokens",
        sections: [
          {
            heading: "1. Architectural Assessment",
            text: `Agentforce has analyzed the prompt "${query}". In enterprise Salesforce implementations, this requirement is addressed through a combination of modular Lightning Web Components (LWCs), robust asynchronous Apex frameworks, and deterministic business rules.`
          },
          {
            heading: "2. Strategic Recommendation",
            text: "• Clean separation of concerns (SOC): Keep UI, Domain logic, Selector layers, and Service layers distinct.\n• Enforce object and field-level security using WITH USER_MODE and stripInaccessible.\n• Utilize platform cache for read-heavy operations to avoid hitting SOQL limit bottlenecks."
          },
          {
            heading: "3. Direct Consultation",
            text: "Yusuf Khan specializes in architecting end-to-end solutions for enterprise orgs. Connect directly via the Contact page or LinkedIn to discuss specific project deliverables."
          }
        ]
      };
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const currentQuery = input.trim();
    setIsProcessing(true);
    setOutput(null);
    setStage(1);

    // Staged reasoning visualization
    timerRef.current = setTimeout(() => {
      setStage(2);
      setTimeout(() => {
        setStage(3);
        setTimeout(() => {
          setStage(4);
          setTimeout(() => {
            const resp = generateAgentResponse(currentQuery);
            setOutput(resp);
            setHistory(prev => [{ query: currentQuery, response: resp }, ...prev]);
            setIsProcessing(false);
            setStage(0);
            setTimeout(() => {
              if (outputRef.current) {
                outputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 100);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  };

  const handlePromptClick = (p) => {
    setInput(p);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#02040A",
      color: "#FFFFFF",
      overflow: "hidden",
      padding: "110px 20px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {/* ── Soft Aurora Full Cosmic Background ── */}
      <div style={{
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "85vh",
        maxWidth: 1400,
        pointerEvents: "none",
        zIndex: 1,
        opacity: isProcessing ? 1.0 : 0.65,
        filter: isProcessing ? "blur(4px)" : "blur(18px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        <SoftAurora
          active={true}
          speed={isProcessing ? 1.85 : 0.75}
          idleIntensity={0.35}
          activeIntensity={1.0}
        />
      </div>

      {/* Cosmic space starfield overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(circle at 50% 35%, rgba(0, 161, 224, 0.08), transparent 70%), radial-gradient(circle at 80% 80%, rgba(177, 74, 237, 0.05), transparent 50%)",
        pointerEvents: "none",
        zIndex: 2
      }}></div>

      {/* ── Foreground Portal Content ── */}
      <div className="container" style={{
        position: "relative",
        zIndex: 5,
        width: "100%",
        maxWidth: 960,
        textAlign: "center"
      }}>

        {/* Header HUD Pill */}
        <div style={{ marginBottom: 16 }}>
          <span className="hud-badge" style={{
            padding: "8px 18px",
            fontSize: 12,
            background: "rgba(0, 112, 210, 0.15)",
            border: "1px solid rgba(110, 195, 255, 0.35)",
            boxShadow: "0 0 20px rgba(0, 161, 224, 0.25)"
          }}>
            <span className={`hud-badge-dot ${isProcessing ? 'connecting' : ''}`} style={isProcessing ? { background: "#00E5FF", boxShadow: "0 0 10px #00E5FF" } : {}}></span>
            <span>{isProcessing ? "AGENTFORCE REASONING RUNTIME // ACTIVE" : "AUTONOMOUS AI AGENT PORTAL // ONLINE"}</span>
          </span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontFamily: "'Anton', system-ui, sans-serif",
          fontSize: "clamp(42px, 6vw, 76px)",
          letterSpacing: ".02em",
          lineHeight: 1.05,
          textTransform: "uppercase",
          margin: "0 0 16px",
          color: "#FFFFFF",
          textShadow: "0 0 40px rgba(0, 161, 224, 0.5), 0 0 80px rgba(110, 195, 255, 0.2)"
        }}>
          AGENTFORCE <span style={{ color: "var(--accent, #00A1E0)" }}>AI RUNTIME</span>
        </h1>

        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.75)",
          maxWidth: 680,
          margin: "0 auto 36px",
          fontWeight: 500
        }}>
          Direct natural language reasoning grounded in Yusuf Khan's 12× Salesforce Certifications, Apex frameworks, and Financial Services Cloud patterns.
        </p>

        {/* ── BIG FULL-WIDTH INPUT CONSOLE ── */}
        <form onSubmit={handleSubmit} style={{
          position: "relative",
          width: "100%",
          background: "rgba(8, 18, 44, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: isProcessing
            ? "1.5px solid rgba(0, 229, 255, 0.8)"
            : "1px solid rgba(110, 195, 255, 0.28)",
          borderRadius: 22,
          padding: "18px 20px",
          boxShadow: isProcessing
            ? "0 20px 60px rgba(0, 161, 224, 0.35), 0 0 35px rgba(0, 229, 255, 0.3)"
            : "0 24px 60px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 112, 210, 0.15)",
          transition: "all 0.4s ease",
          marginBottom: 20
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(0, 161, 224, 0.2), rgba(177, 74, 237, 0.3))",
              border: "1px solid rgba(110, 195, 255, 0.4)",
              display: "grid",
              placeItems: "center",
              fontSize: 18,
              flexShrink: 0,
              marginTop: 4
            }}>
              🤖
            </div>

            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Ask the AI Agent anything... (e.g. 'How do you optimize high-volume Apex batch jobs?' or 'Summarize Yusuf's FSC architecture experience')"
              rows={3}
              disabled={isProcessing}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                fontSize: "17px",
                lineHeight: 1.55,
                fontFamily: "var(--font-body, system-ui, sans-serif)",
                resize: "none",
                fontWeight: 500
              }}
            />
          </div>

          {/* Action Row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 14,
            paddingTop: 12,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            flexWrap: "wrap",
            gap: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255, 255, 255, 0.5)", fontSize: 12, fontFamily: "var(--font-mono, monospace)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00E5FF", boxShadow: "0 0 8px #00E5FF" }}></span>
              <span>ENGINE: AGENTFORCE LLM // PRESS ENTER TO SUBMIT</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing || !input.trim()}
              className="hoverable"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                borderRadius: 999,
                border: "none",
                background: isProcessing
                  ? "rgba(0, 161, 224, 0.35)"
                  : "linear-gradient(90deg, #00A1E0, #0070D2)",
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: 700,
                cursor: isProcessing || !input.trim() ? "not-allowed" : "pointer",
                boxShadow: isProcessing
                  ? "none"
                  : "0 10px 25px -5px rgba(0, 161, 224, 0.6), 0 0 15px rgba(0, 161, 224, 0.3)",
                transition: "all 0.25s ease"
              }}
            >
              {isProcessing ? (
                <>
                  <span style={{ width: 14, height: 14, border: "2px solid #FFFFFF", borderTopColor: "transparent", borderRadius: "50%", animation: "typing 0.8s infinite linear" }}></span>
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <span>Run Agent</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Suggestion Prompt Chips */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 36
        }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginRight: 4, fontFamily: "var(--font-mono, monospace)" }}>
            TRY PROMPTS:
          </span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(p.prompt)}
              className="hoverable"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(180, 210, 255, 0.15)",
                borderRadius: 999,
                padding: "6px 14px",
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent, #00A1E0)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.background = "rgba(0, 161, 224, 0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(180, 210, 255, 0.15)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* ── STAGED REASONING TELEMETRY (WHILE AGENT RETURNS RESPONSE) ── */}
        {isProcessing && (
          <div style={{
            position: "relative",
            width: "100%",
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(0, 229, 255, 0.5)",
            background: "rgba(4, 14, 38, 0.9)",
            padding: "24px 28px",
            boxShadow: "0 20px 50px rgba(0, 161, 224, 0.35)",
            marginBottom: 30,
            textAlign: "left",
            animation: "auroraCardIn 0.35s ease both"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 12, height: 12, borderRadius: "50%", background: "#00E5FF",
                boxShadow: "0 0 16px #00E5FF, 0 0 30px #0070D2",
                animation: "auroraPulse 1.2s infinite ease-in-out"
              }}></div>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, fontWeight: 700, color: "#B6E6FF", letterSpacing: "0.08em" }}>
                AGENTFORCE REASONING IN PROGRESS...
              </span>
            </div>

            {/* Stages visualization */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13.5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: stage >= 1 ? "#00E5FF" : "rgba(255,255,255,0.4)" }}>
                <span>{stage >= 1 ? "✓" : "○"}</span>
                <span>[STAGE 1] Semantic Intent Tokenization &amp; Guardrail Validation</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: stage >= 2 ? "#00E5FF" : "rgba(255,255,255,0.4)" }}>
                <span>{stage >= 2 ? "✓" : "○"}</span>
                <span>[STAGE 2] Querying 12× Salesforce Certifications &amp; Architecture Repository</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: stage >= 3 ? "#00E5FF" : "rgba(255,255,255,0.4)" }}>
                <span>{stage >= 3 ? "✓" : "○"}</span>
                <span>[STAGE 3] Executing Invocable Action / Prompt Template Grounding</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: stage >= 4 ? "#00E5FF" : "rgba(255,255,255,0.4)" }}>
                <span>{stage >= 4 ? "✓" : "○"}</span>
                <span>[STAGE 4] Synthesizing Production Architecture Response...</span>
              </div>
            </div>

            {/* Glowing progress bar */}
            <div style={{ width: "100%", height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 99, marginTop: 18, overflow: "hidden" }}>
              <div style={{
                width: `${(stage / 4) * 100}%`,
                height: "100%",
                background: "linear-gradient(90deg, #00A1E0, #00E5FF)",
                boxShadow: "0 0 10px #00E5FF",
                transition: "width 0.4s ease"
              }}></div>
            </div>
          </div>
        )}

        {/* ── AGENT OUTPUT DISPLAY ── */}
        {output && (
          <div ref={outputRef} style={{
            position: "relative",
            width: "100%",
            borderRadius: 22,
            border: "1px solid rgba(110, 195, 255, 0.35)",
            background: "rgba(6, 16, 42, 0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "32px",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 161, 224, 0.2)",
            textAlign: "left",
            animation: "auroraCardIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both"
          }}>
            {/* Output Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 18,
              borderBottom: "1px solid rgba(180, 210, 255, 0.15)",
              flexWrap: "wrap",
              gap: 12
            }}>
              <div>
                <span className="hud-badge" style={{ fontSize: 10.5, padding: "4px 10px", background: "rgba(0, 161, 224, 0.15)" }}>
                  {output.badge}
                </span>
                <h3 style={{ fontSize: 22, margin: "8px 0 0", color: "#FFFFFF", fontWeight: 700 }}>
                  {output.title}
                </h3>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 11.5, fontFamily: "var(--font-mono, monospace)", color: "rgba(255,255,255,0.5)" }}>
                  LATENCY: {output.executionTime} // {output.confidence}
                </span>

                <button
                  onClick={() => copyToClipboard(output.sections.map(s => s.heading + "\n" + (s.text || s.code)).join("\n\n"))}
                  className="hoverable"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    background: copied ? "rgba(0, 229, 255, 0.25)" : "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(180, 210, 255, 0.2)",
                    color: copied ? "#00E5FF" : "#FFFFFF",
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {copied ? "✓ Copied" : "Copy Output"}
                </button>
              </div>
            </div>

            {/* Output Sections */}
            <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 20 }}>
              {output.sections.map((sec, idx) => (
                <div key={idx} style={{
                  padding: "16px 20px",
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.025)",
                  border: "1px solid rgba(255, 255, 255, 0.05)"
                }}>
                  <h4 style={{
                    fontSize: 15,
                    color: "var(--accent, #00A1E0)",
                    margin: "0 0 10px",
                    fontWeight: 700,
                    letterSpacing: "0.01em"
                  }}>
                    {sec.heading}
                  </h4>

                  {sec.text && (
                    <p style={{
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: "rgba(255, 255, 255, 0.9)",
                      margin: 0,
                      whiteSpace: "pre-line"
                    }}>
                      {sec.text}
                    </p>
                  )}

                  {sec.code && (
                    <pre style={{
                      margin: "12px 0 0",
                      padding: 16,
                      borderRadius: 10,
                      background: "#010714",
                      border: "1px solid rgba(110, 195, 255, 0.15)",
                      color: "#A5E9FF",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: 12.5,
                      lineHeight: 1.55,
                      overflowX: "auto"
                    }}>
                      <code>{sec.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>

            {/* Follow-up CTA Strip */}
            <div style={{
              marginTop: 26,
              paddingTop: 18,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12
            }}>
              <span style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.65)" }}>
                Want to build enterprise Agentforce solutions together?
              </span>

              <button
                onClick={() => go("contact")}
                className="btn primary hoverable"
                style={{ padding: "8px 18px", fontSize: 13 }}
              >
                Schedule Technical Discussion →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

Object.assign(window, { PageAgent });
