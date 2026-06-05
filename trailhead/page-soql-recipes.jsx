// PageSoqlRecipes - Interactive Salesforce SOQL Recipes Sandbox & Code Library
const { useState, useEffect } = React;

const SOQL_CODES = {
  relationship: {
    soql: `// 1. Parent-to-Child Subquery (Retrieves Accounts and their sub-list of Contacts)
SELECT Name, Industry, AnnualRevenue, 
       (SELECT FirstName, LastName, Email, Title FROM Contacts) 
FROM Account 
WHERE Industry = 'Finance' LIMIT 5

// 2. Child-to-Parent Query (Retrieves Contacts and references parent Account fields)
SELECT FirstName, LastName, Email, Title,
       Account.Name, Account.Industry, Account.AnnualRevenue
FROM Contact
WHERE Account.Industry = 'Finance' LIMIT 10`,
    cls: `public class RelationshipQueryController {
    
    public static void printAccountContacts() {
        // Execute Parent-to-Child query
        List<Account> accounts = [SELECT Name, Industry, 
                                         (SELECT FirstName, LastName, Email FROM Contacts) 
                                  FROM Account 
                                  WHERE Industry = 'Finance' LIMIT 5];
        
        for (Account acc : accounts) {
            System.debug('Account Name: ' + acc.Name);
            // Loop through child record sub-list
            for (Contact con : acc.Contacts) {
                System.debug(' -> Contact: ' + con.FirstName + ' ' + con.LastName + ' (' + con.Email + ')');
            }
        }
    }

    public static void printContactParents() {
        // Execute Child-to-Parent query
        List<Contact> contacts = [SELECT FirstName, LastName, Account.Name, Account.Industry 
                                  FROM Contact 
                                  WHERE Account.Industry = 'Finance' LIMIT 10];
        
        for (Contact con : contacts) {
            System.debug('Contact Name: ' + con.FirstName + ' ' + con.LastName + 
                         ' works at Account: ' + con.Account.Name);
        }
    }
}`
  },
  aggregates: {
    soql: `// Aggregate opportunities by Stage with filter and total rollup
SELECT StageName, 
       COUNT(Id) totalOpportunities, 
       SUM(Amount) totalAmount, 
       AVG(Amount) averageAmount
FROM Opportunity
GROUP BY ROLLUP(StageName)
HAVING SUM(Amount) > :minAmountThreshold`,
    cls: `public class OpportunityAggregateController {
    
    public class AggregateRow {
        public String stage;
        public Integer count;
        public Decimal sumAmount;
        public Decimal avgAmount;
    }

    public static List<AggregateRow> getOpportunityAggregates(Decimal minAmountThreshold) {
        List<AggregateRow> results = new List<AggregateRow>();
        
        // Execute aggregate query and load AggregateResult list
        List<AggregateResult> groupedResults = [
            SELECT StageName, 
                   COUNT(Id) opCount, 
                   SUM(Amount) opSum, 
                   AVG(Amount) opAvg
            FROM Opportunity
            GROUP BY ROLLUP(StageName)
            HAVING SUM(Amount) > :minAmountThreshold
        ];
        
        for (AggregateResult ar : groupedResults) {
            AggregateRow row = new AggregateRow();
            // Cast aggregated values (using aliases)
            row.stage = (String) ar.get('StageName');
            row.count = (Integer) ar.get('opCount');
            row.sumAmount = (Decimal) ar.get('opSum');
            row.avgAmount = (Decimal) ar.get('opAvg');
            results.add(row);
        }
        return results;
    }
}`
  },
  injection: {
    soql: `// 1. VULNERABLE DYNAMIC SOQL (Vulnerable to SOQL Injection)
String query = 'SELECT Id, Name, Rating FROM Account WHERE Name = \\'' + userInput + '\\'';
List<Account> accounts = Database.query(query);

// 2. SECURED DYNAMIC SOQL (Safe - Using Bind Variables)
String query = 'SELECT Id, Name, Rating FROM Account WHERE Name = :userInput';
List<Account> accounts = Database.query(query);

// 3. SECURED DYNAMIC SOQL (Safe - Using String Sanitization)
String sanitizedInput = String.escapeSingleQuotes(userInput);
String query = 'SELECT Id, Name, Rating FROM Account WHERE Name = \\'' + sanitizedInput + '\\'';
List<Account> accounts = Database.query(query);`,
    cls: `public class AccountSearchController {
    
    // ❌ VULNERABLE METHOD
    public static List<Account> searchVulnerable(String searchString) {
        // Direct string concatenation allows attackers to append clauses
        String query = 'SELECT Id, Name, Rating, Active__c FROM Account WHERE Name = \\'' + searchString + '\\'';
        return Database.query(query);
    }

    // ✅ SECURED METHOD (BIND VARIABLE METHOD)
    public static List<Account> searchSecuredBind(String searchString) {
        // Database engine treats bind value strictly as data - SQL injection proof
        String query = 'SELECT Id, Name, Rating, Active__c FROM Account WHERE Name = :searchString';
        return Database.query(query);
    }

    // ✅ SECURED METHOD (STRING ESCAPE METHOD)
    public static List<Account> searchSecuredEscape(String searchString) {
        // escapeSingleQuotes prevents closed quotes from modifying query structure
        String safeString = String.escapeSingleQuotes(searchString);
        String query = 'SELECT Id, Name, Rating, Active__c FROM Account WHERE Name = \\'' + safeString + '\\'';
        return Database.query(query);
    }
}`
  }
};

function PageSoqlRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("relationship");
  const [activeTab, setActiveTab] = useState("soql"); // "soql" or "cls"
  const [copied, setCopied] = useState(false);

  // States for Sandbox 1: Relationship Queries
  const [queryType, setQueryType] = useState("parentToChild");
  const [queryResultJson, setQueryResultJson] = useState("");

  // States for Sandbox 2: Aggregate Queries
  const [amountThreshold, setAmountThreshold] = useState(50000);
  const [aggregateData, setAggregateData] = useState([]);

  // States for Sandbox 3: SQL Injection
  const [injectionPayload, setInjectionPayload] = useState("Acme' OR Rating = 'Hot");
  const [injectionLogs, setInjectionLogs] = useState(null);

  // Reset copied flag on switch
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);

  const copyCode = () => {
    const codeText = SOQL_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // --- Sandbox Actions ---

  // Sandbox 1: Relationship Tree
  const runRelationshipQuery = () => {
    if (queryType === "parentToChild") {
      const mockResult = [
        {
          Id: "0018W00002SpXqyQAF",
          Name: "Apex Finance Group",
          Industry: "Finance",
          AnnualRevenue: 5200000,
          Contacts: {
            totalSize: 2,
            done: true,
            records: [
              { Id: "0038W00002YtTzXQAF", FirstName: "David", LastName: "Miller", Email: "d.miller@apexfin.com", Title: "Managing Director" },
              { Id: "0038W00002YtTzYQAF", FirstName: "Sarah", LastName: "Conner", Email: "s.conner@apexfin.com", Title: "Lead Controller" }
            ]
          }
        },
        {
          Id: "0018W00002SpXqzQAF",
          Name: "Capital Venture Corp",
          Industry: "Finance",
          AnnualRevenue: 12400000,
          Contacts: {
            totalSize: 1,
            done: true,
            records: [
              { Id: "0038W00002YtTzZQAF", FirstName: "Robert", LastName: "Chen", Email: "r.chen@capventure.com", Title: "VP of Assets" }
            ]
          }
        }
      ];
      setQueryResultJson(JSON.stringify(mockResult, null, 2));
    } else {
      const mockResult = [
        {
          Id: "0038W00002YtTzXQAF",
          FirstName: "David",
          LastName: "Miller",
          Email: "d.miller@apexfin.com",
          Title: "Managing Director",
          Account: {
            Name: "Apex Finance Group",
            Industry: "Finance",
            AnnualRevenue: 5200000
          }
        },
        {
          Id: "0038W00002YtTzYQAF",
          FirstName: "Sarah",
          LastName: "Conner",
          Email: "s.conner@apexfin.com",
          Title: "Lead Controller",
          Account: {
            Name: "Apex Finance Group",
            Industry: "Finance",
            AnnualRevenue: 5200000
          }
        },
        {
          Id: "0038W00002YtTzZQAF",
          FirstName: "Robert",
          LastName: "Chen",
          Email: "r.chen@capventure.com",
          Title: "VP of Assets",
          Account: {
            Name: "Capital Venture Corp",
            Industry: "Finance",
            AnnualRevenue: 12400000
          }
        }
      ];
      setQueryResultJson(JSON.stringify(mockResult, null, 2));
    }
  };

  // Sandbox 2: Aggregates Calculator
  const calculateAggregates = () => {
    const stages = [
      { stage: "Prospecting", count: 12, sum: 45000, avg: 3750 },
      { stage: "Qualification", count: 8, sum: 72000, avg: 9000 },
      { stage: "Proposal/Price Quote", count: 15, sum: 180000, avg: 12000 },
      { stage: "Negotiation/Review", count: 6, sum: 110000, avg: 18333 },
      { stage: "Closed Won", count: 24, sum: 480000, avg: 20000 }
    ];

    // Filter by HAVING sumAmount > threshold
    let filtered = stages.filter(s => s.sum > amountThreshold);
    
    // Calculate Rollup Totals
    let totalCount = filtered.reduce((a, b) => a + b.count, 0);
    let totalSum = filtered.reduce((a, b) => a + b.sum, 0);
    let avgAmount = totalCount > 0 ? Math.round(totalSum / totalCount) : 0;

    filtered.push({
      stage: "ROLLUP (Total Summary Row)",
      count: totalCount,
      sum: totalSum,
      avg: avgAmount,
      isRollup: true
    });

    setAggregateData(filtered);
  };

  // Sandbox 3: SQL Injection auditor
  const analyzeInjection = () => {
    // 1. Vulnerable execution
    let vulnerableQuery = `SELECT Id, Name, Rating FROM Account WHERE Name = '${injectionPayload}'`;
    let vulnerableStatus = "";
    let vulnerableRecords = [];
    
    if (injectionPayload.includes("' OR") || injectionPayload.includes("' AND")) {
      vulnerableStatus = "🚨 INJECTION EXPLOIT SUCCESSFUL!";
      vulnerableRecords = [
        { Name: "Acme Corp", Rating: "Hot" },
        { Name: "Globex International", Rating: "Hot" },
        { Name: "Initech LLC", Rating: "Cold" },
        { Name: "Capital Venture", Rating: "Hot" }
      ];
    } else {
      vulnerableStatus = "🟢 Single record lookup resolved.";
      vulnerableRecords = [
        { Name: injectionPayload, Rating: "Warm" }
      ];
    }

    // 2. Secured query
    const escapedInput = injectionPayload.replace(/'/g, "\\'");
    let securedQuery = `SELECT Id, Name, Rating FROM Account WHERE Name = '${escapedInput}'`;
    let securedStatus = "🛡️ INJECTION DEFENDED: Closed quotes successfully escaped.";
    let securedRecords = []; // No records match the literal name payload containing SQL operators

    setInjectionLogs({
      vulnerableQuery,
      vulnerableStatus,
      vulnerableRecords,
      securedQuery,
      securedStatus,
      securedRecords
    });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 }}>
      {/* Sidebar Selector */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 }}>
          SOQL Recipes Directory
        </div>
        {[
          { id: "relationship", name: "1. Relationship Queries", desc: "Parent-to-child subqueries & joins" },
          { id: "aggregates", name: "2. Aggregation & Rollups", desc: "GROUP BY, HAVING and ROLLUP totals" },
          { id: "injection", name: "3. Injection Defense", desc: "Dynamic SOQL sanitizing & binding" }
        ].map(rec => (
          <button
            key={rec.id}
            onClick={() => setSelectedRecipe(rec.id)}
            className="hoverable"
            style={{
              textAlign: "left",
              padding: "14px 18px",
              background: selectedRecipe === rec.id ? "rgba(0,161,224,0.08)" : "rgba(255,255,255,0.02)",
              border: "1px solid " + (selectedRecipe === rec.id ? "var(--accent)" : "var(--line)"),
              borderRadius: 14,
              color: selectedRecipe === rec.id ? "white" : "var(--ink-2)",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <strong style={{ display: "block", fontSize: 13.5, marginBottom: 4 }}>{rec.name}</strong>
            <span style={{ fontSize: 11.5, color: selectedRecipe === rec.id ? "var(--accent-deep)" : "var(--ink-3)" }}>{rec.desc}</span>
          </button>
        ))}
      </div>

      {/* Main Panel */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Info Box */}
        <div style={{ background: "rgba(10,18,48,0.25)", border: "1px solid var(--line)", padding: 24, borderRadius: 18 }}>
          {selectedRecipe === "relationship" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Relationship queries (Inner Joins &amp; Subqueries)</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Examines parent-to-child and child-to-parent join queries. Salesforce handles relationships natively: subqueries query children within the parent selection scope, while lookup dot-notation queries parent lookup attributes dynamically in one single SQL execution.
              </p>
            </>
          )}
          {selectedRecipe === "aggregates" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Aggregations, HAVING, and GROUP BY ROLLUP</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Demonstrates how to run heavy database calculations (counting records, summing amounts, extracting averages) directly inside the database index engine using GROUP BY, filter aggregate scopes with HAVING, and dynamically append total sum summaries with GROUP BY ROLLUP.
              </p>
            </>
          )}
          {selectedRecipe === "injection" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Dynamic SOQL &amp; SQL Injection Defenses</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Provides code guidelines to secure dynamic database queries in Salesforce. Direct string concatenation can open vulnerabilities allowing attackers to bypass object filters. Securing requires bind variables or string escaping.
              </p>
            </>
          )}
        </div>

        {/* Two Columns: Sandbox & Code */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
          
          {/* Sandbox Wrapper */}
          <div className="card" style={{ padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 }}>
              <strong style={{ fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" }}>⚡ INTERACTIVE SANDBOX</strong>
              <span style={{ fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 }}>DATABASE SIMULATOR</span>
            </div>

            {/* SANDBOX 1: Relationships */}
            {selectedRecipe === "relationship" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>1. Select Query Schema Type</label>
                  <div style={{ display: "flex", gap: 12 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="qtype"
                        checked={queryType === "parentToChild"}
                        onChange={() => { setQueryType("parentToChild"); setQueryResultJson(""); }}
                        style={{ cursor: "pointer" }}
                      />
                      Parent-to-Child (Subquery)
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="qtype"
                        checked={queryType === "childToParent"}
                        onChange={() => { setQueryType("childToParent"); setQueryResultJson(""); }}
                        style={{ cursor: "pointer" }}
                      />
                      Child-to-Parent (Lookup Joins)
                    </label>
                  </div>
                </div>

                <div>
                  <button onClick={runRelationshipQuery} className="btn primary hoverable" style={{ width: "100%", justifyContent: "center", padding: "10px" }}>
                    🔍 Execute SOQL Query
                  </button>
                </div>

                {queryResultJson && (
                  <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14 }}>
                    <label style={{ display: "block", fontSize: 11, color: "var(--ink-3)", marginBottom: 4 }}>RETRIEVED DATA TREE (JSON ARRAY)</label>
                    <pre style={{
                      padding: 12,
                      background: "rgba(0,0,0,0.25)",
                      border: "1px solid var(--line-2)",
                      borderRadius: 8,
                      fontSize: 11.5,
                      color: "#2ecc71",
                      maxHeight: 180,
                      overflowY: "auto",
                      fontFamily: "var(--font-mono)",
                      margin: 0
                    }}>{queryResultJson}</pre>
                  </div>
                )}
              </div>
            )}

            {/* SANDBOX 2: Aggregation Rollups */}
            {selectedRecipe === "aggregates" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>
                    <label>HAVING SUM(Amount) Threshold</label>
                    <strong style={{ color: "var(--accent-deep)" }}>${amountThreshold.toLocaleString()}</strong>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="10000"
                    value={amountThreshold}
                    onChange={e => setAmountThreshold(parseInt(e.target.value))}
                    style={{ width: "100%", cursor: "pointer" }}
                  />
                  <small style={{ color: "var(--ink-3)", fontSize: 10.5 }}>Filters out groups with combined amount below this limit.</small>
                </div>

                <div>
                  <button onClick={calculateAggregates} className="btn primary hoverable" style={{ width: "100%", justifyContent: "center", padding: "10px" }}>
                    📊 Calculate Aggregate Totals
                  </button>
                </div>

                {aggregateData.length > 0 && (
                  <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14, overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, textAlign: "left" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid var(--line)", color: "var(--ink-3)" }}>
                          <th style={{ padding: "6px 4px" }}>StageName</th>
                          <th style={{ padding: "6px 4px" }}>Count</th>
                          <th style={{ padding: "6px 4px" }}>Sum(Amount)</th>
                          <th style={{ padding: "6px 4px" }}>Avg(Amount)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {aggregateData.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              borderBottom: "1px solid var(--line-2)",
                              background: row.isRollup ? "rgba(0,161,224,0.08)" : "transparent",
                              fontWeight: row.isRollup ? 700 : "normal",
                              color: row.isRollup ? "var(--accent-deep)" : "white"
                            }}
                          >
                            <td style={{ padding: "8px 4px" }}>{row.stage || "(null)"}</td>
                            <td style={{ padding: "8px 4px" }}>{row.count}</td>
                            <td style={{ padding: "8px 4px" }}>${row.sum.toLocaleString()}</td>
                            <td style={{ padding: "8px 4px" }}>${row.avg.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* SANDBOX 3: SQL/SOQL Injection Defense */}
            {selectedRecipe === "injection" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>1. Select/Type Database Exploit Payload</label>
                  <select
                    value={injectionPayload}
                    onChange={e => setInjectionPayload(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      color: "white",
                      outline: "none",
                      marginBottom: 8
                    }}
                  >
                    <option value="Acme' OR Rating = 'Hot">Vulnerable: Acme' OR Rating = 'Hot (Expose hot accounts)</option>
                    <option value="Acme' AND AnnualRevenue > 5000000">Vulnerable: Acme' AND AnnualRevenue &gt; $5M</option>
                    <option value="Acme Corp">Safe Name: Acme Corp (Standard lookup)</option>
                  </select>

                  <input
                    type="text"
                    value={injectionPayload}
                    onChange={e => setInjectionPayload(e.target.value)}
                    placeholder="Or type custom injection payload..."
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      color: "white",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <button onClick={analyzeInjection} className="btn primary hoverable" style={{ width: "100%", justifyContent: "center", padding: "10px" }}>
                    🛡️ Analyze Security Performance
                  </button>
                </div>

                {injectionLogs && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid var(--line-2)", paddingTop: 14 }}>
                    
                    {/* Vulnerable Result */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--ink-3)" }}>1. VULNERABLE DYNAMIC QUERY CODE</span>
                        <span style={{ fontSize: 10, background: "rgba(231,76,60,0.15)", color: "#e74c3c", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>EXPOSED</span>
                      </div>
                      <div style={{
                        padding: 10,
                        background: "rgba(231,76,60,0.04)",
                        border: "1px solid rgba(231,76,60,0.2)",
                        borderRadius: 8,
                        fontSize: 11,
                        lineHeight: 1.4,
                        fontFamily: "var(--font-mono)",
                        color: "#f1c40f",
                        marginTop: 4
                      }}>{injectionLogs.vulnerableQuery}</div>
                      <small style={{ color: "#e74c3c", display: "block", marginTop: 4, fontSize: 11 }}>
                        {injectionLogs.vulnerableStatus} Matches found: {injectionLogs.vulnerableRecords.length} records returned.
                      </small>
                    </div>

                    {/* Secured Result */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--ink-3)" }}>2. SECURED QUERY CODE</span>
                        <span style={{ fontSize: 10, background: "rgba(46,204,113,0.15)", color: "#2ecc71", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>SECURE</span>
                      </div>
                      <div style={{
                        padding: 10,
                        background: "rgba(46,204,113,0.04)",
                        border: "1px solid rgba(46,204,113,0.2)",
                        borderRadius: 8,
                        fontSize: 11,
                        lineHeight: 1.4,
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-deep)",
                        marginTop: 4
                      }}>{injectionLogs.securedQuery}</div>
                      <small style={{ color: "#2ecc71", display: "block", marginTop: 4, fontSize: 11 }}>
                        {injectionLogs.securedStatus} Matches found: 0 records returned.
                      </small>
                    </div>

                  </div>
                )}
              </div>
            )}

          </div>

          {/* Code Viewer Panel */}
          <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, border: "1px solid var(--line)", background: "rgba(3,6,18,0.7)" }}>
            
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              borderBottom: "1px solid var(--line)", 
              padding: "10px 16px",
              background: "rgba(255,255,255,0.02)"
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {[
                  { id: "soql", label: "SOQL Statement (.soql)" },
                  { id: "cls", label: "Controller (.cls)" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      background: activeTab === tab.id ? "rgba(0,161,224,0.12)" : "transparent",
                      border: "none",
                      color: activeTab === tab.id ? "white" : "var(--ink-3)",
                      fontSize: 12.5,
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer"
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Copy Button */}
              <button 
                className="btn ghost hoverable"
                onClick={copyCode}
                style={{
                  padding: "6px 14px",
                  fontSize: 11,
                  border: "1px solid var(--line-2)",
                  borderRadius: 6,
                  height: "auto",
                  margin: 0
                }}
              >
                {copied ? "✓ Copied!" : "📋 Copy Code"}
              </button>
            </div>

            {/* Pre code */}
            <pre style={{
              margin: 0,
              padding: 20,
              overflowX: "auto",
              fontSize: 12.5,
              lineHeight: 1.5,
              fontFamily: "var(--font-mono)",
              color: "rgba(244,248,255,0.85)",
              background: "rgba(0,0,0,0.2)",
              height: 340,
              overflowY: "auto"
            }}>
              <code>
                {SOQL_CODES[selectedRecipe][activeTab]}
              </code>
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
}

Object.assign(window, { PageSoqlRecipes });
