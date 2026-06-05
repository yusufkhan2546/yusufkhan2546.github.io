// Demos & Articles page — Apex Governor Limits Race Game + Dynamic articles from Salesforce Knowledge
const { useState, useEffect, useRef } = React;

const ARTICLES = (window.__SF_DATA__ && window.__SF_DATA__.articles) || [];

function PageDemos({ go }) {
  const [activeTab, setActiveTab] = useState("demos"); // "demos", "lwc", or "articles"
  
  // Apex Race States
  const [raceRunning, setRaceRunning] = useState(false);
  const [raceComplete, setRaceComplete] = useState(false);
  const [nonBulkLogs, setNonBulkLogs] = useState([]);
  const [bulkLogs, setBulkLogs] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Run the Governor Limit Race Simulation
  const runRace = () => {
    if (raceRunning) return;
    setRaceRunning(true);
    setRaceComplete(false);
    setNonBulkLogs(["🚀 Initializing Transaction...", "📦 Fetching 150 Contacts..."]);
    setBulkLogs(["🚀 Initializing Transaction...", "📦 Fetching 150 Contacts..."]);

    let nonBulkCounter = 0;
    let bulkCounter = 0;
    const maxSteps = 105;

    // Simulate Non-bulkified thread (slow, query inside loop)
    const nonBulkInterval = setInterval(() => {
      nonBulkCounter++;
      if (nonBulkCounter <= 100) {
        setNonBulkLogs(prev => [
          ...prev, 
          `🔍 [SOQL ${nonBulkCounter}/100] SELECT Id, Name FROM Account WHERE Id = '${"001" + Math.random().toString(36).substr(2, 15)}' LIMIT 1`
        ]);
      } else if (nonBulkCounter === 101) {
        setNonBulkLogs(prev => [
          ...prev, 
          "❌ FATAL ERROR: System.LimitException: Too many SOQL queries: 101",
          "⚠️ Transaction Rollback initiated. 0 Accounts updated."
        ]);
        clearInterval(nonBulkInterval);
      }
    }, 40);

    // Simulate Bulkified thread (fast, query outside loop)
    const bulkInterval = setInterval(() => {
      bulkCounter++;
      if (bulkCounter === 1) {
        setBulkLogs(prev => [
          ...prev,
          "🔍 [SOQL 1/100] SELECT Id, Name FROM Account WHERE Id IN :accountIdsSet",
          "⚡ Map mapping initialized: Map<Id, Account>",
          "⚙️ Processing Contact list bulk update..."
        ]);
      } else if (bulkCounter === 2) {
        setBulkLogs(prev => [
          ...prev,
          "✅ Successfully bulk processed 150 records.",
          "📊 [LIMITS] CPU Time: 12ms / 10000ms",
          "📊 [LIMITS] SOQL Queries: 1 / 100",
          "📊 [LIMITS] DML Statements: 1 / 150",
          "🎉 Transaction Completed successfully."
        ]);
        setRaceComplete(true);
        setRaceRunning(false);
        clearInterval(bulkInterval);
      }
    }, 1200);
  };

  return (
    <main>
      <section className="page">
        <div className="container" style={{ maxWidth: 1200 }}>
          
          {/* Header */}
          <div className="page-head" style={{ marginBottom: 40 }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Research &amp; Sandbox</span>
              <h1 className="h-display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "16px 0 12px" }}>
                Demos &amp; Articles
              </h1>
              <p className="body-lg" style={{ maxWidth: 640 }}>
                Explore live interactive Salesforce simulations and technical articles synced directly from standard Salesforce Knowledge.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ 
            display: "flex", 
            gap: 16, 
            borderBottom: "1px solid rgba(255,255,255,0.06)", 
            marginBottom: 36,
            paddingBottom: 2
          }}>
            <button 
              onClick={() => setActiveTab("demos")}
              className="hoverable"
              style={{
                background: "transparent",
                border: "none",
                fontSize: 16,
                fontWeight: 700,
                color: activeTab === "demos" ? "white" : "var(--ink-3)",
                borderBottom: activeTab === "demos" ? "3px solid var(--accent)" : "3px solid transparent",
                padding: "8px 16px 12px",
                transition: "all 0.2s"
              }}
            >
              Apex Race Sim
            </button>
            <button 
              onClick={() => setActiveTab("lwc")}
              className="hoverable"
              style={{
                background: "transparent",
                border: "none",
                fontSize: 16,
                fontWeight: 700,
                color: activeTab === "lwc" ? "white" : "var(--ink-3)",
                borderBottom: activeTab === "lwc" ? "3px solid var(--accent)" : "3px solid transparent",
                padding: "8px 16px 12px",
                transition: "all 0.2s"
              }}
            >
              LWC Recipes
            </button>
            <button 
              onClick={() => setActiveTab("articles")}
              className="hoverable"
              style={{
                background: "transparent",
                border: "none",
                fontSize: 16,
                fontWeight: 700,
                color: activeTab === "articles" ? "white" : "var(--ink-3)",
                borderBottom: activeTab === "articles" ? "3px solid var(--accent)" : "3px solid transparent",
                padding: "8px 16px 12px",
                transition: "all 0.2s"
              }}
            >
              Salesforce Knowledge Articles
            </button>
          </div>

          {/* Demos Tab Content */}
          {activeTab === "demos" && (
            <div>
              <div style={{ marginBottom: 30 }}>
                <h2 className="h-section" style={{ fontSize: 28, margin: "0 0 10px" }}>Apex Governor Limit Race</h2>
                <p className="body-lg" style={{ fontSize: 15, maxWidth: 800 }}>
                  A visual simulation of how Salesforce handles transactions. Run the race to compare a poorly written trigger (SOQL query inside a loop) against a bulkified trigger (SOQL query outside, mapped to ID).
                </p>
              </div>

              {/* Code comparison boards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 20, marginBottom: 32 }}>
                
                {/* Bad Code Board */}
                <div className="card" style={{ padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid rgba(231,76,60,0.2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <strong style={{ color: "#e74c3c", fontSize: 14, fontFamily: "var(--font-mono)" }}>⚠️ BAD PRACTICE (SOQL IN LOOP)</strong>
                    <span style={{ fontSize: 11, background: "rgba(231,76,60,0.1)", color: "#e74c3c", padding: "4px 8px", borderRadius: 4, fontWeight: 700 }}>CRASHES ORG</span>
                  </div>
                  <pre style={{ 
                    margin: 0, 
                    padding: 16, 
                    borderRadius: 10, 
                    background: "rgba(0,0,0,0.3)", 
                    color: "rgba(244,248,255,0.85)", 
                    fontFamily: "var(--font-mono)", 
                    fontSize: 12.5,
                    lineHeight: 1.5,
                    overflowX: "auto"
                  }}>
{`trigger ContactTrigger on Contact (before insert) {
  // ❌ BAD: Querying database inside a loop
  for (Contact c : Trigger.new) {
    Account acc = [SELECT Name FROM Account 
                   WHERE Id = :c.AccountId LIMIT 1];
    c.Description = 'Employer: ' + acc.Name;
  }
}`}
                  </pre>
                </div>

                {/* Good Code Board */}
                <div className="card" style={{ padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid rgba(46,204,113,0.2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <strong style={{ color: "#2ecc71", fontSize: 14, fontFamily: "var(--font-mono)" }}>✅ BULKIFIED HANDLER (MAP PATTERN)</strong>
                    <span style={{ fontSize: 11, background: "rgba(46,204,113,0.1)", color: "#2ecc71", padding: "4px 8px", borderRadius: 4, fontWeight: 700 }}>BULK SAFE</span>
                  </div>
                  <pre style={{ 
                    margin: 0, 
                    padding: 16, 
                    borderRadius: 10, 
                    background: "rgba(0,0,0,0.3)", 
                    color: "rgba(244,248,255,0.85)", 
                    fontFamily: "var(--font-mono)", 
                    fontSize: 12.5,
                    lineHeight: 1.5,
                    overflowX: "auto"
                  }}>
{`trigger ContactTrigger on Contact (before insert) {
  Set<Id> accountIds = new Set<Id>();
  for (Contact c : Trigger.new) accountIds.add(c.AccountId);
  
  // ✅ BULK: Query once outside, map to map
  Map<Id, Account> accMap = new Map<Id, Account>(
    [SELECT Name FROM Account WHERE Id IN :accountIds]
  );
  for (Contact c : Trigger.new) {
    if (accMap.containsKey(c.AccountId)) {
      c.Description = 'Employer: ' + accMap.get(c.AccountId).Name;
    }
  }
}`}
                  </pre>
                </div>

              </div>

              {/* Control Panel */}
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <button 
                  className="btn primary hoverable" 
                  onClick={runRace} 
                  disabled={raceRunning}
                  style={{ 
                    padding: "16px 40px", 
                    fontSize: 16,
                    background: raceRunning ? "rgba(255,255,255,0.06)" : "linear-gradient(90deg, var(--sf-blue), var(--sf-purple))",
                    border: "none",
                    boxShadow: raceRunning ? "none" : "0 10px 28px -10px rgba(0, 161, 224, 0.6)"
                  }}
                >
                  {raceRunning ? "⏳ Compiling and Executing..." : "🏎️ Start Governor Limit Race"}
                </button>
              </div>

              {/* Console logs */}
              {(nonBulkLogs.length > 0 || bulkLogs.length > 0) && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 20 }}>
                  
                  {/* Non-bulk log console */}
                  <div style={{ 
                    background: "#030612", 
                    border: "1px solid var(--line)", 
                    borderRadius: 14, 
                    padding: 20, 
                    fontFamily: "var(--font-mono)", 
                    height: 300, 
                    overflowY: "auto",
                    boxShadow: "inset 0 4px 20px rgba(0,0,0,0.8)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 8, marginBottom: 12 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-3)" }}>EXECUTION LOG: Thread_1 (Non-Bulk)</span>
                      <span style={{ 
                        width: 10, 
                        height: 10, 
                        borderRadius: "50%", 
                        background: raceRunning ? "#f1c40f" : (nonBulkLogs.some(l => l.includes("LimitException")) ? "#e74c3c" : "#2ecc71")
                      }}></span>
                    </div>
                    {nonBulkLogs.map((l, i) => (
                      <div key={i} style={{ 
                        fontSize: 11.5, 
                        color: l.startsWith("❌") ? "#e74c3c" : (l.startsWith("⚠️") ? "#f1c40f" : "rgba(244,248,255,0.65)"),
                        marginBottom: 6,
                        lineHeight: 1.4
                      }}>{l}</div>
                    ))}
                  </div>

                  {/* Bulk log console */}
                  <div style={{ 
                    background: "#030612", 
                    border: "1px solid var(--line)", 
                    borderRadius: 14, 
                    padding: 20, 
                    fontFamily: "var(--font-mono)", 
                    height: 300, 
                    overflowY: "auto",
                    boxShadow: "inset 0 4px 20px rgba(0,0,0,0.8)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 8, marginBottom: 12 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-3)" }}>EXECUTION LOG: Thread_2 (Bulkified)</span>
                      <span style={{ 
                        width: 10, 
                        height: 10, 
                        borderRadius: "50%", 
                        background: raceRunning ? "#f1c40f" : (raceComplete ? "#2ecc71" : "transparent")
                      }}></span>
                    </div>
                    {bulkLogs.map((l, i) => (
                      <div key={i} style={{ 
                        fontSize: 11.5, 
                        color: l.startsWith("✅") || l.includes("Completed") ? "#2ecc71" : (l.includes("LIMITS") ? "var(--accent)" : "rgba(244,248,255,0.65)"),
                        marginBottom: 6,
                        lineHeight: 1.4
                      }}>{l}</div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          )}

          {/* LWC Recipes Tab Content */}
          {activeTab === "lwc" && (
            <div>
              <div style={{ marginBottom: 30 }}>
                <h2 className="h-section" style={{ fontSize: 28, margin: "0 0 10px" }}>Lightning Web Component Recipes</h2>
                <p className="body-lg" style={{ fontSize: 15, maxWidth: 800 }}>
                  A collection of production-grade, highly-configurable Lightning Web Component recipes with interactive sandboxes and code sheets.
                </p>
              </div>

              <PageLwcRecipes />
            </div>
          )}

          {/* Articles Tab Content */}
          {activeTab === "articles" && (
            <div>
              <div style={{ marginBottom: 36 }}>
                <h2 className="h-section" style={{ fontSize: 28, margin: "0 0 10px" }}>Published Knowledge Base</h2>
                <p className="body-lg" style={{ fontSize: 15, maxWidth: 800 }}>
                  Technical briefs and guides published directly from the standard Salesforce Knowledge base object (<code>Knowledge__kav</code>).
                </p>
              </div>

              {ARTICLES.length === 0 ? (
                <div className="card" style={{ padding: 48, textPosition: "center", textAlign: "center", color: "var(--ink-3)" }}>
                  <Icon name="cloud" size={32} style={{ marginBottom: 12, opacity: 0.3 }} />
                  <p style={{ margin: 0, fontSize: 16 }}>No Salesforce Knowledge articles published yet in this org.</p>
                </div>
              ) : (
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", 
                  gap: 20 
                }}>
                  {ARTICLES.map((a, i) => (
                    <div key={i} className="card hoverable" style={{ 
                      padding: 24, 
                      borderRadius: 18, 
                      background: "rgba(10,18,48,0.45)", 
                      border: "1px solid rgba(180,210,255,0.14)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      transition: "all 0.25s"
                    }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                          <span style={{ 
                            fontSize: 10, 
                            background: "var(--sf-sky)", 
                            color: "var(--accent)", 
                            padding: "4px 8px", 
                            borderRadius: 4, 
                            fontWeight: 700,
                            fontFamily: "var(--font-mono)" 
                          }}>
                            {a.articleNumber || `KAV-${i+101}`}
                          </span>
                          <span style={{ fontSize: 12, color: "var(--ink-3)" }}>
                            {a.publishedDate || "Recently"}
                          </span>
                        </div>

                        <h3 style={{ 
                          fontFamily: "var(--font-display)", 
                          fontSize: 18, 
                          fontWeight: 700, 
                          color: "white", 
                          margin: "0 0 10px" 
                        }}>
                          {a.title}
                        </h3>

                        <p style={{ 
                          fontSize: 13.5, 
                          color: "var(--ink-2)", 
                          lineHeight: 1.5, 
                          marginBottom: 20 
                        }}>
                          {a.summary}
                        </p>
                      </div>

                      <button 
                        className="btn ghost hoverable"
                        onClick={() => setSelectedArticle(a)}
                        style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "10px" }}
                      >
                        Read Article <Icon name="arrow" size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Article Modal Viewer */}
          {selectedArticle && (
            <div style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(5, 8, 24, 0.85)",
              backdropFilter: "blur(12px)",
              display: "grid",
              placeItems: "center",
              padding: 20
            }}>
              <div className="card" style={{
                maxWidth: 700,
                width: "100%",
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 32,
                boxShadow: "var(--shadow-3)",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto"
              }}>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--line-2)",
                    color: "white",
                    cursor: "pointer"
                  }}
                >✕</button>

                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ 
                    fontSize: 10, 
                    background: "var(--sf-sky)", 
                    color: "var(--accent)", 
                    padding: "4px 8px", 
                    borderRadius: 4, 
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)" 
                  }}>
                    {selectedArticle.articleNumber}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--ink-3)" }}>
                    Published: {selectedArticle.publishedDate}
                  </span>
                </div>

                <h2 className="h-display" style={{ fontSize: 26, color: "white", marginBottom: 16, lineHeight: 1.2 }}>
                  {selectedArticle.title}
                </h2>

                <div style={{ 
                  color: "var(--ink-2)", 
                  fontSize: 14.5, 
                  lineHeight: 1.6, 
                  borderTop: "1px solid var(--line-2)",
                  paddingTop: 16,
                  marginBottom: 24 
                }}>
                  <p>{selectedArticle.summary}</p>
                  
                  <div style={{ 
                    background: "rgba(0,161,224,0.05)", 
                    border: "1px solid rgba(0,161,224,0.15)", 
                    borderRadius: 12, 
                    padding: 18, 
                    marginTop: 20 
                  }}>
                    <strong style={{ color: "white", display: "block", marginBottom: 6 }}>💡 Article Scope</strong>
                    This article is published directly inside the host Salesforce Org Knowledge base. For the complete step-by-step implementation guide, code snippets, and configuration worksheets, please reach out to request PDF attachments or schedule a walkthrough call.
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button 
                    className="btn primary hoverable"
                    onClick={() => { setSelectedArticle(null); go("contact"); }}
                  >
                    Request Full PDF <Icon name="mail" size={13} />
                  </button>
                  <button 
                    className="btn ghost hoverable"
                    onClick={() => setSelectedArticle(null)}
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          )}

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

Object.assign(window, { PageDemos });
