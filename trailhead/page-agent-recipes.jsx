// PageAgentRecipes - Interactive Salesforce Agentforce Recipes Sandbox & Code Library
const { useState, useEffect } = React;

const AGENT_CODES = {
  invocableAction: {
    cls: `public class AgentGetCaseSummaryAction {
    
    public class ActionInput {
        @InvocableVariable(required=true description='The case number to look up')
        public String caseNumber;
        
        @InvocableVariable(required=false description='Include audit history logs')
        public Boolean includeLogs;
    }

    public class ActionOutput {
        @InvocableVariable(description='The natural language summary of the case')
        public String summary;
        
        @InvocableVariable(description='Success status of the execution')
        public Boolean isSuccess;
    }

    @InvocableMethod(
        label='Get Case Summary for Agent'
        description='Fetches the subject, description, priority and status of a case and returns a natural language summary'
        category='Agentforce'
    )
    public static List<ActionOutput> getCaseSummary(List<ActionInput> inputs) {
        List<ActionOutput> outputs = new List<ActionOutput>();
        
        for (ActionInput input : inputs) {
            ActionOutput output = new ActionOutput();
            try {
                Case c = [SELECT CaseNumber, Subject, Description, Status, Priority, 
                                 (SELECT CommentBody FROM CaseComments ORDER BY CreatedDate DESC LIMIT 2)
                          FROM Case WHERE CaseNumber = :input.caseNumber LIMIT 1];
                
                String summaryStr = 'Case #' + c.CaseNumber + ': "' + c.Subject + '" is currently ' + c.Status + '. ' +
                                    'Priority is ' + c.Priority + '. Description: ' + c.Description;
                
                if (c.CaseComments.size() > 0) {
                    summaryStr += ' Latest comments: ';
                    for (CaseComment cc : c.CaseComments) {
                        summaryStr += '"' + cc.CommentBody + '"; ';
                    }
                }
                
                output.summary = summaryStr;
                output.isSuccess = true;
            } catch (Exception e) {
                output.summary = 'Error retrieving case summary: Case number ' + input.caseNumber + ' not found.';
                output.isSuccess = false;
            }
            outputs.add(output);
        }
        return outputs;
    }
}`,
    json: `{
  "apiVersion": "60.0",
  "agentAction": {
    "masterLabel": "Get Case Summary for Agent",
    "description": "Fetches subject, description, priority and comments for a case number to summarize case logs",
    "invocationTarget": "apex-AgentGetCaseSummaryAction",
    "inputs": [
      {
        "name": "caseNumber",
        "type": "String",
        "isRequired": true,
        "description": "The case number to look up"
      },
      {
        "name": "includeLogs",
        "type": "Boolean",
        "isRequired": false,
        "description": "Include audit history logs"
      }
    ],
    "outputs": [
      {
        "name": "summary",
        "type": "String",
        "description": "The natural language summary of the case"
      },
      {
        "name": "isSuccess",
        "type": "Boolean",
        "description": "Success status of the execution"
      }
    ]
  }
}`
  },
  promptResolver: {
    cls: `public class AccountRiskPromptResolver extends Process.PromptTemplateResolver {
    
    public override Double getRiskMultiplier() {
        return 1.5;
    }

    public override Process.PromptTemplateResponse execute(Process.PromptTemplateContext context) {
        Process.PromptTemplateResponse response = new Process.PromptTemplateResponse();
        
        // Retrieve target input record
        Account acc = (Account) context.getTargetRecord();
        
        // Custom business logic for calculating dynamic prompt tokens
        Decimal score = 0;
        if (acc.AnnualRevenue != null && acc.AnnualRevenue > 10000000) score += 30; // Large Enterprise
        if (acc.BillingCountry != 'USA') score += 20; // Cross-border compliance check
        
        List<Case> openCases = [SELECT Id FROM Case WHERE AccountId = :acc.Id AND IsClosed = false];
        score += (openCases.size() * 15); // Add risk points for active support cases

        String riskRating = 'Low';
        if (score >= 60) riskRating = 'Critical';
        else if (score >= 40) riskRating = 'High';
        else if (score >= 25) riskRating = 'Medium';

        // Add dynamic tokens back into the template context
        response.addTokenResponse('_riskRating', riskRating);
        response.addTokenResponse('_calculatedScore', String.valueOf(score));
        
        return response;
    }
}`,
    json: `{
  "apiVersion": "60.0",
  "promptTemplate": {
    "masterLabel": "Account Risk Evaluation Template",
    "type": "EinsteinPromptTemplate",
    "targetObject": "Account",
    "templateText": "You are a Salesforce Service Agent. Summarize account information for {!Input:Account.Name}. Accounts Country: {!Input:Account.BillingCountry}. Revenue: {!Input:Account.AnnualRevenue}. Custom Calculated Risk Rating is: {!AccountRiskPromptResolver._riskRating} (Score: {!AccountRiskPromptResolver._calculatedScore}). Please draft a high-touch outreach message based on this risk level.",
    "resolverClass": "AccountRiskPromptResolver"
  }
}`
  },
  topicRouter: {
    cls: `public class AgentTopicRouter {
    
    public class TopicClassification {
        public String matchedTopic;
        public Double confidenceScore;
        public Map<String, Object> slots;
    }

    public static TopicClassification classifyIntent(String userUtterance) {
        TopicClassification result = new TopicClassification();
        result.slots = new Map<String, Object>();
        
        String cleanUtterance = userUtterance.toLowerCase();

        // 1. Classification Logic
        if (cleanUtterance.contains('billing') || cleanUtterance.contains('invoice') || cleanUtterance.contains('pay')) {
            result.matchedTopic = 'Billing_Support';
            result.confidenceScore = 0.94;
            
            // Extract invoice numbers if present
            Pattern invPattern = Pattern.compile('inv-\\\\d{4}');
            Matcher m = invPattern.matcher(cleanUtterance);
            if (m.find()) {
                result.slots.put('invoiceNumber', m.group(0).toUpperCase());
            }
        } 
        else if (cleanUtterance.contains('apply') || cleanUtterance.contains('loan') || cleanUtterance.contains('mortgage')) {
            result.matchedTopic = 'Loan_Application';
            result.confidenceScore = 0.89;
            
            if (cleanUtterance.contains('mortgage') || cleanUtterance.contains('home')) {
                result.slots.put('loanType', 'Mortgage');
            } else if (cleanUtterance.contains('auto') || cleanUtterance.contains('car')) {
                result.slots.put('loanType', 'Auto');
            }
        } 
        else {
            result.matchedTopic = 'General_Queries';
            result.confidenceScore = 0.72;
        }

        return result;
    }
}`,
    json: `{
  "agentTopics": [
    {
      "name": "Billing_Support",
      "description": "Handles billing inquiries, invoice downloads, and processing payments.",
      "classificationPhrases": [
        "check billing status",
        "where is my invoice",
        "how to pay my bill",
        "dispute a charge"
      ],
      "requiredSlots": [
        {
          "name": "invoiceNumber",
          "type": "String",
          "prompt": "Could you please provide the invoice number (e.g. INV-1024)?"
        }
      ]
    },
    {
      "name": "Loan_Application",
      "description": "Collects details and starts applications for Mortgage, Auto, or Personal loans.",
      "classificationPhrases": [
        "apply for a loan",
        "want to start home mortgage",
        "car finance rate",
        "need cash personal loan"
      ],
      "requiredSlots": [
        {
          "name": "loanType",
          "type": "String",
          "prompt": "What type of loan are you applying for? (Mortgage, Auto, or Personal)?"
        }
      ]
    }
  ]
}`
  }
};

function PageAgentRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState("invocableAction");
  const [activeTab, setActiveTab] = useState("cls"); // "cls" or "json"
  const [copied, setCopied] = useState(false);

  // States for Sandbox 1: Invocable Action
  const [caseNo, setCaseNo] = useState("1024");
  const [actionLogs, setActionLogs] = useState([]);
  const mockCases = {
    "1024": { subject: "Invoice mismatch", desc: "Charged $450 instead of $400 on billing statement.", status: "Escalated", priority: "High", comment: "Verified billing ledger, discount code was missing." },
    "1045": { subject: "API Integration Timeout", desc: "Unable to retrieve token from endpoints.", status: "Closed", priority: "Critical", comment: "IP address was successfully whitelisted." }
  };

  // States for Sandbox 2: Prompt Builder Context Grounding
  const [selectedAccount, setSelectedAccount] = useState("Acme");
  const [numCases, setNumCases] = useState(2);
  const [resolvedPrompt, setResolvedPrompt] = useState("");
  const accountsData = {
    "Acme": { name: "Acme Corp", country: "USA", revenue: "$12,000,000" },
    "Globex": { name: "Globex International", country: "India", revenue: "$8,500,000" },
    "Initech": { name: "Initech LLC", country: "UK", revenue: "$4,200,000" }
  };

  // States for Sandbox 3: Conversational Classifier
  const [chatHistory, setChatHistory] = useState([
    { sender: "agent", text: "Hello! I am your Agentforce assistant. Ask me about your invoices or applying for a loan." }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [slotFillingState, setSlotFillingState] = useState(null); // { topic: string, slots: {}, missingSlot: string }

  // Reset copied flag on switch
  useEffect(() => {
    setCopied(false);
  }, [selectedRecipe, activeTab]);

  const copyCode = () => {
    const codeText = AGENT_CODES[selectedRecipe][activeTab];
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // --- Sandbox Actions ---

  // Sandbox 1: Invocable Action Runner
  const runInvocableSim = () => {
    let logs = [
      `🤖 Agentforce: Analyzing prompt request...`,
      `🎯 Matched Action Intent: "Get Case Summary for Agent"`,
      `⚙️ Binding inputs: caseNumber = "${caseNo}"`,
      `🔵 Calling Apex \`@InvocableMethod\` (AgentGetCaseSummaryAction.getCaseSummary)...`
    ];

    const match = mockCases[caseNo];
    if (match) {
      logs.push(`🔍 [SOQL SELECT] Querying Subject, Status, comments where CaseNumber = '${caseNo}'`);
      logs.push(`✅ Apex returning Output Parameter:`);
      logs.push(`   - summary: "Case #${caseNo}: '${match.subject}' is currently ${match.status}. Priority: ${match.priority}. Latest comment: '${match.comment}'"`);
      logs.push(`   - isSuccess: true`);
      logs.push(`🤖 Agentforce: Merging data into conversational context successfully.`);
    } else {
      logs.push(`🔍 [SOQL SELECT] Querying CaseNumber = '${caseNo}'`);
      logs.push(`❌ System.QueryException: No rows returned for query.`);
      logs.push(`✅ Apex returning Output Parameter:`);
      logs.push(`   - summary: "Error retrieving case summary: Case number ${caseNo} not found."`);
      logs.push(`   - isSuccess: false`);
      logs.push(`🤖 Agentforce: Fallback response matched for prompt failure.`);
    }

    setActionLogs(logs);
  };

  // Sandbox 2: Prompt Builder Template
  const runPromptSim = () => {
    const acc = accountsData[selectedAccount];
    
    // Calculate risk
    let score = 0;
    if (acc.name === "Acme Corp") score += 30; // large enterprise
    if (acc.country !== "USA") score += 20; // cross-border
    score += (numCases * 15);

    let riskRating = "Low";
    if (score >= 60) riskRating = "Critical";
    else if (score >= 40) riskRating = "High";
    else if (score >= 25) riskRating = "Medium";

    const templateText = `You are a Salesforce Service Agent. Summarize account information for ${acc.name}. Accounts Country: ${acc.country}. Revenue: ${acc.revenue}. Custom Calculated Risk Rating is: ${riskRating} (Score: ${score}). Please draft a high-touch outreach message based on this risk level.`;
    
    setResolvedPrompt(templateText);
  };

  // Sandbox 3: Conversational Classifier & Router
  const runChatClassifier = () => {
    if (!chatInput.trim()) return;
    const text = chatInput.trim();
    const cleanText = text.toLowerCase();
    
    setChatHistory(prev => [...prev, { sender: "user", text }]);
    setChatInput("");

    // Slot-filling step check
    if (slotFillingState) {
      const topic = slotFillingState.topic;
      const collectedSlots = { ...slotFillingState.slots };
      
      if (topic === "Billing_Support" && slotFillingState.missingSlot === "invoiceNumber") {
        collectedSlots.invoiceNumber = text.toUpperCase();
        setChatHistory(prev => [
          ...prev,
          { sender: "agent", text: `Got it. Checking billing ledger for Invoice ${text.toUpperCase()}...` },
          { sender: "classifier", text: `🎯 Topic Classified: Billing_Support (Slot invoiceNumber = ${text.toUpperCase()} filled)` },
          { sender: "agent", text: `Invoice ${text.toUpperCase()} has been processed and is currently fully PAID. You can download the PDF statement.` }
        ]);
        setSlotFillingState(null);
      } 
      else if (topic === "Loan_Application" && slotFillingState.missingSlot === "loanType") {
        collectedSlots.loanType = text;
        setChatHistory(prev => [
          ...prev,
          { sender: "agent", text: `Thank you. Starting a ${text} loan application worksheet.` },
          { sender: "classifier", text: `🎯 Topic Classified: Loan_Application (Slot loanType = ${text} filled)` },
          { sender: "agent", text: `I have opened application #L-${Math.floor(1000 + Math.random()*9000)}. Please submit your tax and identity documents.` }
        ]);
        setSlotFillingState(null);
      }
      return;
    }

    // Determine Topic Intent
    if (cleanText.includes("billing") || cleanText.includes("invoice") || cleanText.includes("pay")) {
      // Look for slots
      const invMatch = text.toUpperCase().match(/INV-\d{4}/);
      if (invMatch) {
        setChatHistory(prev => [
          ...prev,
          { sender: "classifier", text: `🎯 Topic Classified: Billing_Support (Confidence: 0.94, slots matched = ${invMatch[0]})` },
          { sender: "agent", text: `Looking up Invoice ${invMatch[0]}. It is currently PAID. Let me know if you need to dispute any item.` }
        ]);
      } else {
        setChatHistory(prev => [
          ...prev,
          { sender: "classifier", text: `🎯 Topic Classified: Billing_Support (Confidence: 0.82, missing slots: invoiceNumber)` },
          { sender: "agent", text: `I can help you check billing details. Could you please provide the invoice number (e.g. INV-1024)?` }
        ]);
        setSlotFillingState({ topic: "Billing_Support", slots: {}, missingSlot: "invoiceNumber" });
      }
    } 
    else if (cleanText.includes("apply") || cleanText.includes("loan") || cleanText.includes("mortgage")) {
      let type = "";
      if (cleanText.includes("mortgage") || cleanText.includes("home")) type = "Mortgage";
      else if (cleanText.includes("car") || cleanText.includes("auto")) type = "Auto";

      if (type) {
        setChatHistory(prev => [
          ...prev,
          { sender: "classifier", text: `🎯 Topic Classified: Loan_Application (Confidence: 0.91, slots matched = ${type})` },
          { sender: "agent", text: `Opening a new ${type} loan application pipeline. Would you like to proceed with calculating rates?` }
        ]);
      } else {
        setChatHistory(prev => [
          ...prev,
          { sender: "classifier", text: `🎯 Topic Classified: Loan_Application (Confidence: 0.88, missing slots: loanType)` },
          { sender: "agent", text: `I can help you start a loan application. What type of loan are you applying for? (Mortgage, Auto, or Personal)?` }
        ]);
        setSlotFillingState({ topic: "Loan_Application", slots: {}, missingSlot: "loanType" });
      }
    } 
    else {
      setChatHistory(prev => [
        ...prev,
        { sender: "classifier", text: `🎯 Topic Classified: General_Queries (Confidence: 0.76)` },
        { sender: "agent", text: `I'm matching that to General Queries. Could you rephrase your question with 'billing' or 'loan application' keywords to test Slot-filling routing?` }
      ]);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 }}>
      {/* Sidebar Selector */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-3)", marginBottom: 8, paddingLeft: 8 }}>
          Agentforce Recipes
        </div>
        {[
          { id: "invocableAction", name: "1. Agent Invocable Action", desc: "Apex Action prompt parameters" },
          { id: "promptResolver", name: "2. Prompt Grounding Template", desc: "Dynamic Prompt Builder resolver" },
          { id: "topicRouter", name: "3. Conversational Topic Classifier", desc: "NLP Topic classification and slots" }
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
          {selectedRecipe === "invocableAction" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Agentforce Action (Invocable Apex Method)</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Shows how to implement an Apex `@InvocableMethod` exposed to Agentforce Agents. Agents leverage natural language processing to extract parameters from user chats, dynamically bind them to custom wrapper inputs, and execute the Apex context.
              </p>
            </>
          )}
          {selectedRecipe === "promptResolver" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Prompt Builder Grounding Template Resolver</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                Illustrates how to ground LLM Prompts dynamically with Salesforce record fields and calculate complex tokens in Apex by extending `Process.PromptTemplateResolver`. Grounding ensures prompts are anchored with accurate corporate database parameters.
              </p>
            </>
          )}
          {selectedRecipe === "topicRouter" && (
            <>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Agentforce Topic Classifier &amp; Slot-Filler</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                A simulation of Topic classification in Agentforce. Incoming messages are analyzed. If matched to a specific Topic, the Agent verifies if all required slot-filling parameters are present; if not, it prompts the user to provide them.
              </p>
            </>
          )}
        </div>

        {/* Sandbox & Code Tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
          
          {/* Sandbox Wrapper */}
          <div className="card" style={{ padding: 24, borderRadius: 18, background: "rgba(10,18,48,0.45)", border: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 20 }}>
              <strong style={{ fontSize: 12, color: "var(--accent-deep)", textTransform: "uppercase", letterSpacing: ".05em" }}>⚡ INTERACTIVE SANDBOX</strong>
              <span style={{ fontSize: 11, background: "rgba(0,161,224,0.1)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4, fontWeight: 700 }}>AI AGENT SIMULATOR</span>
            </div>

            {/* SANDBOX 1: Invocable Action */}
            {selectedRecipe === "invocableAction" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>1. Simulated LLM Input (Case Number)</label>
                  <select
                    value={caseNo}
                    onChange={e => setCaseNo(e.target.value)}
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
                    <option value="1024">Case 1024 (Invoice discrepancy - High priority)</option>
                    <option value="1045">Case 1045 (API Timeout - Critical priority)</option>
                    <option value="9999">Case 9999 (Invalid/Non-existent)</option>
                  </select>
                </div>

                <div>
                  <button onClick={runInvocableSim} className="btn primary hoverable" style={{ width: "100%", justifyContent: "center", padding: "10px" }}>
                    Invoke Agent Apex Method
                  </button>
                </div>

                {/* Console debug log trace */}
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
                  <div style={{ fontSize: 10, color: "var(--ink-3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 4, marginBottom: 6 }}>AGENTFORCE SYSTEM LOGS</div>
                  {actionLogs.length === 0 ? (
                    <div style={{ color: "rgba(244,248,255,0.25)" }}>Invoke action to show LLM/Apex telemetry trace.</div>
                  ) : (
                    actionLogs.map((log, i) => (
                      <div key={i} style={{ 
                        color: log.includes("❌") ? "#e74c3c" : (log.includes("✅") ? "#2ecc71" : "rgba(244,248,255,0.65)"),
                        marginBottom: 4 
                      }}>{log}</div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SANDBOX 2: Prompt Grounding */}
            {selectedRecipe === "promptResolver" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Grounding Record</label>
                    <select
                      value={selectedAccount}
                      onChange={e => setSelectedAccount(e.target.value)}
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
                      <option value="Acme">Acme Corp (USA - $12M revenue)</option>
                      <option value="Globex">Globex Inc (India - $8.5M revenue)</option>
                      <option value="Initech">Initech LLC (UK - $4.2M revenue)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginBottom: 6 }}>Open Cases (Score)</label>
                    <input
                      type="number"
                      value={numCases}
                      onChange={e => setNumCases(parseInt(e.target.value) || 0)}
                      min="0"
                      max="10"
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
                </div>

                <div>
                  <button onClick={runPromptSim} className="btn primary hoverable" style={{ width: "100%", justifyContent: "center", padding: "10px" }}>
                    ⚙️ Resolve Prompt Template
                  </button>
                </div>

                {resolvedPrompt && (
                  <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14 }}>
                    <label style={{ display: "block", fontSize: 11, color: "var(--ink-3)", marginBottom: 4 }}>RESOLVED GROUNDED PROMPT TEXT</label>
                    <div style={{
                      padding: 12,
                      background: "rgba(0,0,0,0.2)",
                      border: "1px solid var(--line-2)",
                      borderRadius: 8,
                      fontSize: 12,
                      lineHeight: 1.4,
                      color: "white"
                    }}>{resolvedPrompt}</div>
                  </div>
                )}
              </div>
            )}

            {/* SANDBOX 3: Topic Classifier */}
            {selectedRecipe === "topicRouter" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Chat window */}
                <div style={{
                  height: 180,
                  overflowY: "auto",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.3)",
                  padding: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10
                }}>
                  {chatHistory.map((chat, i) => (
                    <div
                      key={i}
                      style={{
                        alignSelf: chat.sender === "user" ? "flex-end" : "flex-start",
                        maxWidth: "85%",
                        padding: chat.sender === "classifier" ? "4px 8px" : "8px 12px",
                        borderRadius: 10,
                        fontSize: chat.sender === "classifier" ? 10.5 : 12.5,
                        fontFamily: chat.sender === "classifier" ? "var(--font-mono)" : "inherit",
                        background: chat.sender === "user" ? "var(--accent)" : (chat.sender === "classifier" ? "rgba(255,220,140,0.1)" : "rgba(255,255,255,0.06)"),
                        border: chat.sender === "classifier" ? "1px solid rgba(255,220,140,0.2)" : "none",
                        color: chat.sender === "classifier" ? "#ffd479" : "white"
                      }}
                    >
                      {chat.text}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    type="text"
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter") runChatClassifier(); }}
                    placeholder="Type: 'billing INV-2021' or 'apply loan'..."
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      color: "white",
                      outline: "none"
                    }}
                  />
                  <button onClick={runChatClassifier} className="btn primary hoverable" style={{ padding: "8px 16px", fontSize: 13 }}>
                    Send
                  </button>
                </div>
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
                  { id: "cls", label: "Apex Class (.cls)" },
                  { id: "json", label: "Agent Config (.json / .prompt)" }
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

            {/* Code pre */}
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
                {AGENT_CODES[selectedRecipe][activeTab]}
              </code>
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
}

Object.assign(window, { PageAgentRecipes });
