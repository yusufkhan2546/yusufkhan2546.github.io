// PageApexRecipes - Interactive Salesforce Apex Recipes Sandbox & Code Library
const { useState, useEffect } = React;

const APEX_CODES = {
  triggerBypass: {
    cls: `public class AccountTriggerHandler extends TriggerHandler {
    private List<Account> newAccounts;
    private Map<Id, Account> oldAccountMap;

    public AccountTriggerHandler() {
        this.newAccounts = (List<Account>) Trigger.new;
        this.oldAccountMap = (Map<Id, Account>) Trigger.oldMap;
    }

    public override void beforeInsert() {
        // Check global trigger bypass state
        if (TriggerBypass.isBypassed('AccountTriggerHandler')) {
            System.debug('AccountTriggerHandler is bypassed. Skipping execution.');
            return;
        }

        for (Account acc : newAccounts) {
            if (acc.BillingCountry == null) {
                acc.addError('Billing Country is required on creation.');
            }
        }
    }

    public override void afterUpdate() {
        if (TriggerBypass.isBypassed('AccountTriggerHandler')) return;

        // Prevent recursive trigger execution
        if (!TriggerHandler.isFirstRun()) return;

        Set<Id> accIdsToProcess = new Set<Id>();
        for (Account acc : newAccounts) {
            Account old = oldAccountMap.get(acc.Id);
            if (acc.BillingCountry != old.BillingCountry) {
                accIdsToProcess.add(acc.Id);
            }
        }
        
        if (!accIdsToProcess.isEmpty()) {
            // Execute bulk actions or enqueue queueable
            System.enqueueJob(new AccountUpdateQueueable(accIdsToProcess));
        }
    }
}`,
    test: `@isTest
private class AccountTriggerHandlerTest {
    @isTest
    static void testBeforeInsertSuccess() {
        Account acc = new Account(Name = 'Test Corp', BillingCountry = 'USA');
        
        Test.startTest();
        insert acc;
        Test.stopTest();
        
        Account insertedAcc = [SELECT BillingCountry FROM Account WHERE Id = :acc.Id];
        System.assertEquals('USA', insertedAcc.BillingCountry, 'Billing country should be saved');
    }

    @isTest
    static void testTriggerBypass() {
        // Enable trigger bypass
        TriggerBypass.bypass('AccountTriggerHandler');
        
        // This record would fail validation normally because BillingCountry is missing
        Account acc = new Account(Name = 'Bypassed Corp'); 
        
        Test.startTest();
        Database.SaveResult sr = Database.insert(acc, false);
        Test.stopTest();
        
        System.assert(sr.isSuccess(), 'Insert should succeed because trigger was bypassed');
    }
}`
  },
  queueable: {
    cls: `public class AccountUpdateQueueable implements Queueable, Database.AllowsCallouts {
    private Set<Id> accountIds;

    public AccountUpdateQueueable(Set<Id> ids) {
        this.accountIds = ids;
    }

    public void execute(QueueableContext context) {
        List<Account> accounts = [SELECT Id, Name, BillingCountry, Integration_Status__c 
                                  FROM Account WHERE Id IN :accountIds];
        
        // 1. Process API Callout
        for (Account acc : accounts) {
            String payload = '{ "accountName": "' + acc.Name + '" }';
            HttpResponse res = HttpCalloutService.sendRequest('https://api.external.com/sync', 'POST', payload);
            
            if (res.getStatusCode() == 200) {
                acc.Integration_Status__c = 'Synced';
            } else {
                acc.Integration_Status__c = 'Failed';
            }
        }
        
        update accounts;

        // 2. Dynamic Queueable Chaining: Chain follow-up job to sync related contacts
        if (!Test.isRunningTest()) {
            System.enqueueJob(new ContactSyncQueueable(accountIds));
        }
    }
}`,
    test: `@isTest
private class AsyncQueueableTest {
    @testSetup
    static void setup() {
        Account acc = new Account(Name = 'Sync Test Corp', BillingCountry = 'Canada');
        insert acc;
    }

    @isTest
    static void testQueueableExecution() {
        Account acc = [SELECT Id FROM Account LIMIT 1];
        
        // Set mock callout response
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator(200, 'Synced'));
        
        Test.startTest();
        System.enqueueJob(new AccountUpdateQueueable(new Set<Id>{ acc.Id }));
        Test.stopTest();
        
        Account updatedAcc = [SELECT Integration_Status__c FROM Account WHERE Id = :acc.Id];
        System.assertEquals('Synced', updatedAcc.Integration_Status__c, 'Account status should be Synced');
    }
}`
  },
  mockCallout: {
    cls: `public class MockHttpResponseGenerator implements HttpCalloutMock {
    private Map<String, HttpResponse> endpointMocks = new Map<String, HttpResponse>();

    public void addMock(String endpoint, Integer statusCode, String body) {
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody(body);
        res.setStatusCode(statusCode);
        endpointMocks.put(endpoint, res);
    }

    public HttpResponse respond(HttpRequest req) {
        String endpoint = req.getEndpoint();
        
        // Match mock by partial or exact endpoint url
        for (String urlPattern : endpointMocks.keySet()) {
            if (endpoint.contains(urlPattern)) {
                return endpointMocks.get(urlPattern);
            }
        }

        // Return default fallback mock
        HttpResponse fallback = new HttpResponse();
        fallback.setStatusCode(404);
        fallback.setBody('{"error": "Mock not found for endpoint: ' + endpoint + '"}');
        return fallback;
    }
}`,
    test: `@isTest
private class HttpCalloutServiceTest {
    @isTest
    static void testMultiEndpointCallout() {
        // Instantiate the dynamic multi-mock generator
        MockHttpResponseGenerator mockGen = new MockHttpResponseGenerator();
        
        mockGen.addMock('api.github.com', 200, '{"status": "ok"}');
        mockGen.addMock('api.salesforce.com', 500, '{"error": "Internal Error"}');

        Test.setMock(HttpCalloutMock.class, mockGen);

        Test.startTest();
        // Invoke callouts
        HttpResponse resGithub = HttpCalloutService.sendRequest('https://api.github.com/users', 'GET', null);
        HttpResponse resSalesforce = HttpCalloutService.sendRequest('https://api.salesforce.com/services', 'POST', '{}');
        Test.stopTest();

        System.assertEquals(200, resGithub.getStatusCode(), 'Github mock status mismatch');
        System.assertEquals(500, resSalesforce.getStatusCode(), 'Salesforce mock status mismatch');
    }
}`
  }
};

function PageApexRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("triggerBypass");
  const [activeTab, setActiveTab] = useState("cls"); // "cls" or "test"
  const [copied, setCopied] = useState(false);

  // States for Sandbox 1: Trigger Handler Bypass
  const [bypassAccount, setBypassAccount] = useState(false);
  const [triggerVal, setTriggerVal] = useState("");
  const [triggerCountry, setTriggerCountry] = useState("USA");
  const [triggerLogs, setTriggerLogs] = useState([]);
  const [triggerLimits, setTriggerLimits] = useState({ soql: 0, dml: 0 });

  // States for Sandbox 2: Queueable Chain
  const [queueJobs, setQueueJobs] = useState([]);
  const [queueLogs, setQueueLogs] = useState([]);
  const [isQueueRunning, setIsQueueRunning] = useState(false);

  // States for Sandbox 3: Dynamic Multi-Mock
  const [mocks, setMocks] = useState({
    "api.github.com": { status: 200, body: '{"status": "ok", "service": "GitHub"}' },
    "api.salesforce.com": { status: 500, body: '{"error": "Internal Server Error", "service": "SFDC"}' }
  });
  const [testEndpoint, setTestEndpoint] = useState("api.github.com");
  const [calloutLogs, setCalloutLogs] = useState([]);

  // Reset copied flag on switch
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);

  const copyCode = () => {
    const codeText = APEX_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // --- Sandbox Action Handlers ---

  // Sandbox 1: Trigger Bypass Simulator
  const runTriggerSim = (mode) => {
    let logs = [`🚀 Transaction Started: Mode = DML ${mode}`];
    let soql = 0;
    let dml = 0;

    logs.push("⚙️ Loading Trigger settings...");
    if (bypassAccount) {
      logs.push("🟡 TRIGGER BYPASSED: 'AccountTriggerHandler' is marked as bypassed. Skipping logic.");
    } else {
      logs.push("🔵 Executing BEFORE INSERT handler on Account...");
      if (!triggerVal) {
        logs.push("❌ System.DmlException: Insert failed. Billing Country is required on creation.");
        setTriggerLogs(logs);
        return;
      }
      soql += 1;
      logs.push(`🔍 [SOQL Query] SELECT Id, Name FROM Account WHERE Name = '${triggerVal}' LIMIT 1`);
      
      logs.push("🔵 Executing AFTER INSERT handler on Account...");
      dml += 1;
      logs.push(`💾 [DML Insert] Account record saved: Id = 001${Math.random().toString().slice(2,17)}`);
      
      if (mode === "UPDATE") {
        logs.push("🔵 Executing AFTER UPDATE handler on Account...");
        if (triggerCountry !== "USA") {
          logs.push("🔗 Chaining Asynchronous Sync: Enqueuing AccountUpdateQueueable job.");
          logs.push("📦 Job successfully added to FlexQueue.");
        } else {
          logs.push("🟢 Country unchanged/USA. No async updates queued.");
        }
      }
    }

    logs.push("✅ Transaction Completed successfully.");
    setTriggerLogs(logs);
    setTriggerLimits({ soql, dml });
  };

  // Sandbox 2: Queueable Chain Scheduler
  const runQueueableSim = () => {
    if (isQueueRunning) return;
    setIsQueueRunning(true);
    setQueueJobs([]);
    setQueueLogs(["🚀 Enqueuing Job chain..."]);

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    const process = async () => {
      // Step 1: Queue job 1
      setQueueJobs(prev => [...prev, { id: "Job-A1", name: "AccountUpdateQueueable", status: "Queued" }]);
      await delay(1200);

      setQueueJobs([{ id: "Job-A1", name: "AccountUpdateQueueable", status: "Processing" }]);
      setQueueLogs(prev => [...prev, "⚡ Job-A1: AccountUpdateQueueable started. Fetching accounts...", "📞 Job-A1: Invoking callout mock to https://api.external.com/sync"]);
      await delay(1500);

      setQueueJobs([{ id: "Job-A1", name: "AccountUpdateQueueable", status: "Completed" }]);
      setQueueLogs(prev => [...prev, "✅ Job-A1: Accounts updated status to 'Synced'.", "🔗 Job-A1: Chaining related contacts synchronizer..."]);
      await delay(1000);

      // Step 2: Queue job 2
      setQueueJobs(prev => [
        ...prev,
        { id: "Job-C2", name: "ContactSyncQueueable", status: "Queued" }
      ]);
      await delay(1200);

      setQueueJobs(prev => [
        prev[0],
        { id: "Job-C2", name: "ContactSyncQueueable", status: "Processing" }
      ]);
      setQueueLogs(prev => [...prev, "⚡ Job-C2: ContactSyncQueueable started. Fetching associated Contacts...", "💾 Job-C2: Executing bulk DML updates on 45 Contacts."]);
      await delay(1500);

      setQueueJobs(prev => [
        prev[0],
        { id: "Job-C2", name: "ContactSyncQueueable", status: "Completed" }
      ]);
      setQueueLogs(prev => [...prev, "✅ Job-C2: Contacts updated successfully.", "🎉 Queueable Chaining pipeline empty. Chain execution complete."]);
      setIsQueueRunning(false);
    };

    process();
  };

  // Sandbox 3: Callout Mocks Handler
  const runCalloutSim = () => {
    const activeMock = mocks[testEndpoint];
    let logs = [
      `🚀 Initializing Dynamic Callout request...`,
      `📡 Request URL: https://${testEndpoint}/v1/resources`,
      `⚙️ Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator()) triggered.`
    ];

    logs.push(`🔍 MockHttpResponseGenerator: Inspecting endpoint...`);
    if (activeMock) {
      logs.push(`🎯 Match found for pattern: "${testEndpoint}"`);
      logs.push(`📦 Loading Mocked Payload...`);
      logs.push(`📥 HttpResponse returned: Status Code = ${activeMock.status}`);
      logs.push(`📄 Response Body: ${activeMock.body}`);
    } else {
      logs.push(`⚠️ No mock mapping found for: "${testEndpoint}". Returning default fallback.`);
      logs.push(`📥 HttpResponse returned: Status Code = 404 (Not Found)`);
    }

    setCalloutLogs(logs);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 }}>
      {/* Sidebar Selector */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 }}>
          Apex Recipes Directory
        </div>
        {[
          { id: "triggerBypass", name: "1. Trigger Bypass Framework", desc: "Re-entrancy & bypass controls" },
          { id: "queueable", name: "2. Queueable Chain Sync", desc: "Async job pipeline chaining" },
          { id: "mockCallout", name: "3. Callout Multi-Mock", desc: "Multi-endpoint unit test mocks" }
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

      {/* Main Container */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Header summary */}
        <div style={{ background: "rgba(10,18,48,0.25)", border: "1px solid var(--line)", padding: 24, borderRadius: 18 }}>
          {selectedRecipe === "triggerBypass" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Apex Trigger Handler &amp; Bypass Console</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Illustrates a clean Apex Trigger Handler framework supporting dynamic runtime bypass configurations. In large Salesforce instances, bypassing triggers programmatically during heavy data loads, migrations, or tests is essential for speed and preventing execution limit violations.
              </p>
            </>
          )}
          {selectedRecipe === "queueable" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Queueable Chaining &amp; Asynchronous Pipeline</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Demonstrates how to chain Queueable jobs sequentially in Salesforce. This structure enables developers to execute long-running processes (like REST callouts followed by child updates) while staying compliant with Apex governor limits.
              </p>
            </>
          )}
          {selectedRecipe === "mockCallout" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Multi-Mock HTTP Callout Framework</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                A robust unit testing mock generator. When a transaction makes callouts to different endpoints (e.g. GitHub and Salesforce APIs), a standard mock generator fails. This registry-based multi-mock captures endpoint requests and maps mock payloads dynamically.
              </p>
            </>
          )}
        </div>

        {/* Two Columns: Sandbox & Code */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
          
          {/* Sandbox Panel */}
          <div className="card" style={{ padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 }}>
              <strong style={{ fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" }}>⚡ INTERACTIVE SANDBOX</strong>
              <span style={{ fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 }}>APEX SIMULATOR</span>
            </div>

            {/* Sandbox Renderers */}

            {/* SANDBOX 1: Trigger Bypass */}
            {selectedRecipe === "triggerBypass" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    type="checkbox"
                    id="trigger-bypass-chk"
                    checked={bypassAccount}
                    onChange={e => setBypassAccount(e.target.checked)}
                    style={{ width: 16, height: 16, cursor: "pointer" }}
                  />
                  <label htmlFor="trigger-bypass-chk" style={{ fontSize: 13, cursor: "pointer" }}>
                    Bypass 'AccountTriggerHandler' logic
                  </label>
                </div>

                <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14 }}>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 4 }}>Account Name</label>
                  <input
                    type="text"
                    value={triggerVal}
                    onChange={e => setTriggerVal(e.target.value)}
                    placeholder="Enter Account name..."
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
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 4 }}>Billing Country</label>
                  <select
                    value={triggerCountry}
                    onChange={e => setTriggerCountry(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      color: "white",
                      outline: "none"
                    }}
                  >
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                    <option value="">(Blank/Null)</option>
                  </select>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => runTriggerSim("INSERT")} className="btn primary hoverable" style={{ padding: "8px 16px", fontSize: 12.5, flex: 1, justifyContent: "center" }}>
                    Simulate INSERT
                  </button>
                  <button onClick={() => runTriggerSim("UPDATE")} className="btn ghost hoverable" style={{ padding: "8px 16px", fontSize: 12.5, flex: 1, justifyContent: "center" }}>
                    Simulate UPDATE
                  </button>
                </div>

                {/* Console Log display */}
                <div style={{
                  background: "#030612",
                  border: "1px solid var(--line-2)",
                  borderRadius: 10,
                  padding: 12,
                  fontFamily: "var(--font-mono)",
                  height: 120,
                  overflowY: "auto",
                  fontSize: 11
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 }}>
                    <span>SIMULATOR Apex Debug Logs</span>
                    <span style={{ color: "var(--accent-deep)" }}>SOQL: {triggerLimits.soql}/100 | DML: {triggerLimits.dml}/150</span>
                  </div>
                  {triggerLogs.length === 0 ? (
                    <div style={{ color: "rgba(244,248,255,0.25)" }}>Simulate a DML transaction to output logs.</div>
                  ) : (
                    triggerLogs.map((log, i) => (
                      <div key={i} style={{ 
                        color: log.includes("❌") ? "#e74c3c" : (log.includes("🟡") ? "#f1c40f" : "rgba(244,248,255,0.65)"),
                        marginBottom: 4 
                      }}>{log}</div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SANDBOX 2: Queueable Chain */}
            {selectedRecipe === "queueable" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <button
                  onClick={runQueueableSim}
                  disabled={isQueueRunning}
                  className="btn primary hoverable"
                  style={{ width: "100%", justifyContent: "center", padding: "10px" }}
                >
                  {isQueueRunning ? "⏳ Running Job Pipeline..." : "▶️ Dispatch Queueable Chain"}
                </button>

                {/* Queue status visually */}
                <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14 }}>
                  <label style={{ display: "block", fontSize: 12, color: "var(--ink-3)", marginBottom: 8 }}>Asynchronous FlexQueue Status</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {queueJobs.length === 0 ? (
                      <div style={{ padding: 12, background: "rgba(255,255,255,0.01)", border: "1px dashed var(--line-2)", borderRadius: 8, fontSize: 12, color: "var(--ink-3)", textAlign: "center" }}>
                        Queue empty.
                      </div>
                    ) : (
                      queueJobs.map(job => (
                        <div key={job.id} style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 14px",
                          background: "rgba(0,0,0,0.25)",
                          border: "1px solid " + (job.status === "Completed" ? "rgba(46,204,113,0.3)" : (job.status === "Processing" ? "var(--accent)" : "rgba(255,255,255,0.08)")),
                          borderRadius: 8
                        }}>
                          <div>
                            <div style={{ fontSize: 12.5, fontWeight: 700, color: "white" }}>{job.name}</div>
                            <small style={{ color: "var(--ink-3)", fontSize: 10.5 }}>Job ID: {job.id}</small>
                          </div>
                          <span style={{
                            fontSize: 10,
                            fontWeight: 700,
                            padding: "3px 6px",
                            borderRadius: 4,
                            background: job.status === "Completed" ? "rgba(46,204,113,0.15)" : (job.status === "Processing" ? "rgba(0,161,224,0.15)" : "rgba(255,255,255,0.05)"),
                            color: job.status === "Completed" ? "#2ecc71" : (job.status === "Processing" ? "var(--accent)" : "var(--ink-2)")
                          }}>{job.status}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Queueable logs console */}
                <div style={{
                  background: "#030612",
                  border: "1px solid var(--line-2)",
                  borderRadius: 10,
                  padding: 12,
                  fontFamily: "var(--font-mono)",
                  height: 100,
                  overflowY: "auto",
                  fontSize: 11
                }}>
                  <div style={{ fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 }}>QUEUE ENGINE DEBUG LOGS</div>
                  {queueLogs.length === 0 ? (
                    <div style={{ color: "rgba(244,248,255,0.25)" }}>Pipeline execution telemetry.</div>
                  ) : (
                    queueLogs.map((log, i) => (
                      <div key={i} style={{ color: log.startsWith("✅") ? "#2ecc71" : "rgba(244,248,255,0.65)", marginBottom: 4 }}>{log}</div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SANDBOX 3: Mock Callout */}
            {selectedRecipe === "mockCallout" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>1. Select Target Endpoint</label>
                  <select
                    value={testEndpoint}
                    onChange={e => setTestEndpoint(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      color: "white",
                      outline: "none"
                    }}
                  >
                    <option value="api.github.com">GitHub API (mapped to status 200)</option>
                    <option value="api.salesforce.com">Salesforce Tooling API (mapped to status 500)</option>
                    <option value="api.unknown-service.com">Unknown Service API (unmapped)</option>
                  </select>
                </div>

                <div>
                  <button onClick={runCalloutSim} className="btn primary hoverable" style={{ width: "100%", justifyContent: "center", padding: "10px" }}>
                    📡 Execute HTTP Callout Test
                  </button>
                </div>

                {/* Mock Response visual box */}
                <div style={{
                  background: "#030612",
                  border: "1px solid var(--line-2)",
                  borderRadius: 10,
                  padding: 12,
                  fontFamily: "var(--font-mono)",
                  height: 120,
                  overflowY: "auto",
                  fontSize: 11
                }}>
                  <div style={{ fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 }}>TEST MOCK TELEMETRY</div>
                  {calloutLogs.length === 0 ? (
                    <div style={{ color: "rgba(244,248,255,0.25)" }}>Results will show here.</div>
                  ) : (
                    calloutLogs.map((log, i) => (
                      <div key={i} style={{ 
                        color: log.includes("200") || log.includes("Match found") ? "#2ecc71" : (log.includes("500") || log.includes("404") || log.includes("⚠️") ? "#e74c3c" : "rgba(244,248,255,0.65)"),
                        marginBottom: 4 
                      }}>{log}</div>
                    ))
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Code Viewer Panel */}
          <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, border: "1px solid var(--line)", background: "rgba(3,6,18,0.7)" }}>
            
            {/* Action headers tab bar */}
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
                  { id: "cls", label: "Controller (.cls)" },
                  { id: "test", label: "Apex Test (.cls)" }
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
                {APEX_CODES[selectedRecipe][activeTab]}
              </code>
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
}

Object.assign(window, { PageApexRecipes });
