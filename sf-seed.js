// sf-seed.js — One-time data loader: inserts all portfolio sample data into Salesforce
// Usage: node sf-seed.js
// Reads credentials from .env (same vars as sf-fetch.js)

const https = require("https");
const fs    = require("fs");
const path  = require("path");

// Load .env
(function loadDotEnv() {
  const envFile = path.join(__dirname, ".env");
  if (!fs.existsSync(envFile)) return;
  fs.readFileSync(envFile, "utf8").split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eq = trimmed.indexOf("=");
    if (eq === -1) return;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !(key in process.env)) process.env[key] = val;
  });
})();

const CLIENT_ID     = process.env.SF_CLIENT_ID;
const CLIENT_SECRET = process.env.SF_CLIENT_SECRET;
const INSTANCE_URL  = (process.env.SF_INSTANCE_URL || "").replace(/\/$/, "");
const API_VERSION   = process.env.SF_API_VERSION || "v62.0";

if (!CLIENT_ID || !CLIENT_SECRET || !INSTANCE_URL) {
  console.error("❌  SF_CLIENT_ID / SF_CLIENT_SECRET / SF_INSTANCE_URL not set in .env");
  process.exit(1);
}

// ── HTTP helpers ─────────────────────────────────────────────────────────────

function request(method, urlStr, token, body, instanceUrl) {
  // Allow callers to pass a full URL or a path; prepend instanceUrl if it's a path
  if (urlStr.startsWith("/")) urlStr = (instanceUrl || INSTANCE_URL) + urlStr;
  return new Promise((resolve, reject) => {
    const url  = new URL(urlStr);
    const data = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: url.hostname,
      path:     url.pathname + url.search,
      method,
      headers: {
        Authorization:  `Bearer ${token}`,
        Accept:         "application/json",
        "Content-Type": "application/json",
        ...(data ? { "Content-Length": Buffer.byteLength(data) } : {}),
      },
    };
    const req = https.request(opts, res => {
      let raw = "";
      res.on("data", d => raw += d);
      res.on("end", () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(raw) }); }
        catch { resolve({ status: res.statusCode, body: raw }); }
      });
    });
    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
}

// Returns { token, instanceUrl } — always use instanceUrl (from token response) for API calls,
// not the env var, to avoid INVALID_SESSION_ID on orgs with internal routing.
async function getToken() {
  const body = new URLSearchParams({
    grant_type:    "client_credentials",
    client_id:     CLIENT_ID,
    client_secret: CLIENT_SECRET,
  }).toString();
  return new Promise((resolve, reject) => {
    const url  = new URL(`${INSTANCE_URL}/services/oauth2/token`);
    const opts = {
      hostname: url.hostname, path: url.pathname,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": Buffer.byteLength(body) },
    };
    const req = https.request(opts, res => {
      let raw = "";
      res.on("data", d => raw += d);
      res.on("end", () => {
        try {
          const json = JSON.parse(raw);
          if (!json.access_token) return reject(new Error("Auth failed: " + raw));
          resolve({ token: json.access_token, instanceUrl: (json.instance_url || INSTANCE_URL).replace(/\/$/, "") });
        } catch (e) { reject(new Error("Bad token response: " + raw)); }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// Insert up to 200 records at once using the SObject Collection API.
// Returns array of Salesforce IDs in the same order as input.
async function insertMany(token, instanceUrl, objectType, records) {
  if (!records.length) return [];
  const payload = {
    allOrNone: true,
    records: records.map(r => ({ attributes: { type: objectType }, ...r })),
  };
  const { status, body } = await request(
    "POST",
    `${instanceUrl}/services/data/${API_VERSION}/composite/sobjects`,
    token,
    payload
  );
  if (status !== 200 && status !== 201) {
    throw new Error(`insertMany(${objectType}) HTTP ${status}: ${JSON.stringify(body)}`);
  }
  const ids = [];
  for (let i = 0; i < body.length; i++) {
    const r = body[i];
    if (!r.success) {
      throw new Error(`Record ${i} of ${objectType} failed: ${JSON.stringify(r.errors)}`);
    }
    ids.push(r.id);
  }
  return ids;
}

// ── Seed data ────────────────────────────────────────────────────────────────

const CERTS = [
  { Name: "Administrator",                    Year__c: "2022", Family__c: "Foundational", Kind__c: "admin",       Sub_Label__c: "ADMIN",  Accent_Color__c: "#00A1E0", Hue__c: 200, Credential_ID__c: "SF-298374", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2025-03_Platform-Admin_500x490.png",                                    Is_Active__c: true, Sort_Order__c: 1  },
  { Name: "Platform Developer I",             Year__c: "2022", Family__c: "Developer",    Kind__c: "platform",    Sub_Label__c: "PD1",    Accent_Color__c: "#0070D2", Hue__c: 220, Credential_ID__c: "SF-837462", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev_500x490px.png",                     Is_Active__c: true, Sort_Order__c: 2  },
  { Name: "Platform Developer II",            Year__c: "2023", Family__c: "Developer",    Kind__c: "platform",    Sub_Label__c: "PD2",    Accent_Color__c: "#0070D2", Hue__c: 215, Credential_ID__c: "SF-948573", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2021-03_Badge_SF-Certified_Platform-Developer-II_500x490px.png",        Is_Active__c: true, Sort_Order__c: 3  },
  { Name: "JavaScript Developer I",           Year__c: "2023", Family__c: "Developer",    Kind__c: "js",          Sub_Label__c: "JS-D1",  Accent_Color__c: "#FFB400", Hue__c: 45,  Credential_ID__c: "SF-102938", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2025-03_JavaScript-Dev_500x490.png",                                    Is_Active__c: true, Sort_Order__c: 4  },
  { Name: "Service Cloud Consultant",         Year__c: "2023", Family__c: "Consultant",   Kind__c: "service",     Sub_Label__c: "SVC",    Accent_Color__c: "#FF6F00", Hue__c: 175, Credential_ID__c: "SF-564738", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2021-03_Badge_SF-Certified_Service-Cloud-Consultant_500x490px.png",       Is_Active__c: true, Sort_Order__c: 5  },
  { Name: "OmniStudio Developer",             Year__c: "2024", Family__c: "Industries",   Kind__c: "omnistudio",  Sub_Label__c: "OMNI",   Accent_Color__c: "#7F00FF", Hue__c: 280, Credential_ID__c: "SF-746352", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/omnistudio-developer.png",                                              Is_Active__c: true, Sort_Order__c: 6  },
  { Name: "Financial Services Cloud",         Year__c: "2024", Family__c: "Industries",   Kind__c: "fsc",         Sub_Label__c: "FSC",    Accent_Color__c: "#2E844A", Hue__c: 145, Credential_ID__c: "SF-293847", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/fsc.png",                                                               Is_Active__c: true, Sort_Order__c: 7  },
  { Name: "Agentforce Specialist",            Year__c: "2025", Family__c: "AI",           Kind__c: "agentforce",  Sub_Label__c: "AGENT",  Accent_Color__c: "#B14AED", Hue__c: 305, Credential_ID__c: "SF-847562", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/agentforce-specialist.png",                                             Is_Active__c: true, Sort_Order__c: 8  },
  { Name: "Data Cloud Consultant",            Year__c: "2025", Family__c: "Data & AI",    Kind__c: "datacloud",   Sub_Label__c: "DATA",   Accent_Color__c: "#00B0FF", Hue__c: 195, Credential_ID__c: "SF-384756", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/data-cloud.png",                                                        Is_Active__c: true, Sort_Order__c: 9  },
  { Name: "AI Associate",                     Year__c: "2024", Family__c: "AI",           Kind__c: "ai",          Sub_Label__c: "AI",     Accent_Color__c: "#FF77B0", Hue__c: 320, Credential_ID__c: "SF-928374", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2026-01_Badge_SF-Certified_AI-Associate_500x490px_RETIRED.png",          Is_Active__c: true, Sort_Order__c: 10 },
  { Name: "Lifecycle & Deployment Architect", Year__c: "2025", Family__c: "Architect",    Kind__c: "ai",          Sub_Label__c: "ARCH",   Accent_Color__c: "#FF77B0", Hue__c: 330, Credential_ID__c: "SF-475869", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2025-04_Badge_SF-Certified_Plat-Dev-LC-Dep-Arch_500x490px.png",         Is_Active__c: true, Sort_Order__c: 11 },
  { Name: "Salesforce Associate",             Year__c: "2022", Family__c: "Foundational", Kind__c: "associate",   Sub_Label__c: "ASSOC",  Accent_Color__c: "#00A1E0", Hue__c: 205, Credential_ID__c: "SF-192837", Verify_URL__c: "https://trailhead.salesforce.com/credentials/verification", Badge_Image_Path__c: "assets/badges/2025-03_Badge_SF-Certified_Platform-Foundations_500x490px.png",          Is_Active__c: true, Sort_Order__c: 12 },
];

const PROJECTS = [
  {
    Name: "Banking Public Portal",       Project_Slug__c: "banking-portal",   Role__c: "Lead Developer & Integration Architect",  Client__c: "Tier-1 Global Financial Institution",  Duration__c: "10 months", Team_Size__c: 14,
    Challenge__c: "Applicants suffered from disconnected loan application pathways, requiring manual verification across legacy databases and third-party credit bureaus.",
    Solution__c:  "Designed a custom, high-security Experience Cloud public portal utilizing OmniStudio and custom LWCs. Integrated MuleSoft to run real-time 3rd-party background checks, building a 360-degree customer verification engine that securely aggregates applicant data.",
    Is_Active__c: true, Sort_Order__c: 1,
  },
  {
    Name: "Loan Origination Systems",    Project_Slug__c: "loan-origination",  Role__c: "Salesforce Technical Architect",           Client__c: "Enterprise Lending Group",             Duration__c: "12 months", Team_Size__c: 18,
    Challenge__c: "High default loan ratios and slow approvals due to fragmented validation scripts, insecure legacy handoffs, and labor-intensive manual audit steps.",
    Solution__c:  "Built a secure, enterprise-grade Loan Origination System on FSC. Implemented deep data validations, automated risk-profiling calculations, and multi-tier approval routing using Apex trigger frameworks. This optimized loan success ratios while keeping risk to an absolute minimum.",
    Is_Active__c: true, Sort_Order__c: 2,
  },
  {
    Name: "Retail Store Application",    Project_Slug__c: "retail-store",      Role__c: "Lead Developer & Solutions Designer",      Client__c: "Global Telecommunications Provider",   Duration__c: "8 months",  Team_Size__c: 10,
    Challenge__c: "Retail associates lacked a cohesive digital 360 customer view, creating long wait times when ordering mobile lines, activating service, or updating legacy carrier contracts.",
    Solution__c:  "Delivered a tablet-native Communications Cloud retail application. The app aggregates customer history via Data Cloud, orchestrates immediate SIM and network provisioning via Order Management, and manages updates to legacy carrier network systems in seconds.",
    Is_Active__c: true, Sort_Order__c: 3,
  },
];

const PROJECT_TECH = {
  "banking-portal":  ["Experience Cloud", "LWC", "OmniStudio", "MuleSoft", "FSC", "OAuth 2.0"],
  "loan-origination":["Financial Services Cloud", "OmniStudio", "Apex Validation Engine", "DocuSign", "MuleSoft"],
  "retail-store":    ["Communications Cloud", "Service Cloud", "Data Cloud", "OM Order Management", "MuleSoft"],
};

const PROJECT_IMPACT = {
  "banking-portal": [
    { Metric__c: "99.98%",  Impact_Label__c: "automated verification accuracy",       Sort_Order__c: 1 },
    { Metric__c: "14 min",  Impact_Label__c: "avg application to decision time",       Sort_Order__c: 2 },
    { Metric__c: "60%",     Impact_Label__c: "reduction in operational backlog",        Sort_Order__c: 3 },
  ],
  "loan-origination": [
    { Metric__c: "78%",     Impact_Label__c: "faster time-to-decision & funding",      Sort_Order__c: 1 },
    { Metric__c: "0.05%",   Impact_Label__c: "minimized default loan risk",            Sort_Order__c: 2 },
    { Metric__c: "$4.2B+",  Impact_Label__c: "total loan volume processed safely",     Sort_Order__c: 3 },
  ],
  "retail-store": [
    { Metric__c: "3.2 sec", Impact_Label__c: "instant carrier provisioning",           Sort_Order__c: 1 },
    { Metric__c: "94%",     Impact_Label__c: "first-contact resolution rate",          Sort_Order__c: 2 },
    { Metric__c: "2M+",     Impact_Label__c: "legacy records migrated to prod",        Sort_Order__c: 3 },
  ],
};

const EXPERIENCE = [
  {
    Name: "Salesforce Developer & Technical SME", Period__c: "Sep 2024 — Present",     Company__c: "K Square Group",      Location__c: "Hyderabad, India", Tag__c: "SME",      Is_Active__c: true, Sort_Order__c: 1,
  },
  {
    Name: "Software Engineer (Salesforce)",       Period__c: "Oct 2021 — Sep 2024",    Company__c: "Prodapt Solutions",   Location__c: "Hyderabad, India", Tag__c: "Engineer", Is_Active__c: true, Sort_Order__c: 2,
  },
];

const EXPERIENCE_BULLETS = {
  "Salesforce Developer & Technical SME": [
    "Led delivery of three Salesforce implementations for financial services institutions, driving 100% user adoption, 60% revenue growth, and 90% CSAT.",
    "Architected and implemented custom workflows, flows, and enterprise integrations, ensuring secure data models, performance optimization, and platform scalability.",
    "Partnered with stakeholders to define solution designs, contribute to architecture decisions, and lead Agile/Scrum ceremonies from discovery to deployment.",
    "Guided junior developers through code reviews, best practices, and delivery standards to elevate overall team capability and solution quality.",
  ],
  "Software Engineer (Salesforce)": [
    "Collaborated closely with business stakeholders and cross-functional teams to deliver tailored, scalable solution designs aligned to objectives.",
    "Contributed to 60% of development, building complex workflows, Apex triggers, Visualforce, LWC, OmniStudio components, and Sales/Service Cloud features.",
    "Authored technical documentation, championing best practices, data quality, and maintainable architecture for complex business logic.",
    "Executed integrations, glass-box testing, and prepared detailed unit test cases to deliver projects smoothly following Agile/Scrum.",
  ],
};

const TECH_GROUPS = [
  { Name: "Core Platform",         Sort_Order__c: 1 },
  { Name: "Clouds & Architecture", Sort_Order__c: 2 },
  { Name: "Integrations & APIs",   Sort_Order__c: 3 },
  { Name: "DevOps & AI Tooling",   Sort_Order__c: 4 },
];

const TECH_ITEMS = {
  "Core Platform": [
    { Name: "Apex & Core Java",    Proficiency__c: 96, Sort_Order__c: 1 },
    { Name: "LWC & Aura",          Proficiency__c: 94, Sort_Order__c: 2 },
    { Name: "Salesforce Flows",    Proficiency__c: 95, Sort_Order__c: 3 },
    { Name: "OmniStudio",          Proficiency__c: 90, Sort_Order__c: 4 },
    { Name: "Visualforce & Flex",  Proficiency__c: 78, Sort_Order__c: 5 },
  ],
  "Clouds & Architecture": [
    { Name: "Financial Services Cloud (FSC)", Proficiency__c: 92, Sort_Order__c: 1 },
    { Name: "Sales & Service Cloud",          Proficiency__c: 95, Sort_Order__c: 2 },
    { Name: "Experience Cloud",               Proficiency__c: 88, Sort_Order__c: 3 },
    { Name: "Communications Cloud",           Proficiency__c: 85, Sort_Order__c: 4 },
    { Name: "Scalable Solution Design",       Proficiency__c: 90, Sort_Order__c: 5 },
  ],
  "Integrations & APIs": [
    { Name: "REST / SOAP APIs",         Proficiency__c: 94, Sort_Order__c: 1 },
    { Name: "Salesforce Integrations",  Proficiency__c: 92, Sort_Order__c: 2 },
    { Name: "Platform Events & CDC",    Proficiency__c: 88, Sort_Order__c: 3 },
  ],
  "DevOps & AI Tooling": [
    { Name: "DevOps & Copado CI/CD",      Proficiency__c: 86, Sort_Order__c: 1 },
    { Name: "Prompt Builder & AI Assist", Proficiency__c: 85, Sort_Order__c: 2 },
    { Name: "Salesforce DX & GitHub",     Proficiency__c: 90, Sort_Order__c: 3 },
    { Name: "Vibe Coding",                Proficiency__c: 95, Sort_Order__c: 4 },
  ],
};

const TESTIMONIALS = [
  {
    Name: "Suresh Kaliamoorthi", Job_Title__c: "Salesforce Architect",              Initials__c: "SK", Is_Active__c: true, Sort_Order__c: 1,
    Quote__c: "Over the time we've worked together, Yusuf has consistently demonstrated a deep understanding of Salesforce and a remarkable ability to turn complex requirements into efficient, scalable solutions. Yusuf excels in coding, technical design, and translating business needs into practical Salesforce applications. His proactive approach to problem-solving, attention to detail, and ability to stay up-to-date with Salesforce's latest features make him an invaluable asset to any team.",
  },
  {
    Name: "Milena Garro",        Job_Title__c: "Salesforce & Vlocity Developer",    Initials__c: "MG", Is_Active__c: true, Sort_Order__c: 2,
    Quote__c: "Having worked closely with Yusuf at Prodapt for more than a year, I have seen firsthand the exceptional qualities that make him a valuable asset to any team. Yusuf is a highly skilled professional with a deep knowledge of OmniStudio and Communications cloud. He consistently demonstrated excellent problem-solving abilities, technical expertise, initiative and strong work ethic in our time working together. He has always been a reliable and proactive member of the team.",
  },
  {
    Name: "Nikunj Vadi",         Job_Title__c: "Salesforce Technical Lead/Architect", Initials__c: "NV", Is_Active__c: true, Sort_Order__c: 3,
    Quote__c: "I had the pleasure of working with Yusuf on a crucial, highly complex project with a tight deadline. His exceptional organizational skills, quick problem-solving abilities, eagerness to embrace new technologies, and strong leadership qualities were truly impressive.",
  },
  {
    Name: "Muthu Kumar Sundaram", Job_Title__c: "Solution Architect",               Initials__c: "MS", Is_Active__c: true, Sort_Order__c: 4,
    Quote__c: "Yusuf always wears a techy cap for solutioning problems. Very innovative in suggesting solutions. A good technical expert in the making. All the very best Yusuf for all your endeavours.",
  },
];

const TRAILBLAZER_STATS = {
  Name:                "Yusuf Khan Stats",
  Badges_Earned__c:    506,
  Points_K__c:         294,
  Trails_Completed__c: 60,
  Superbadges__c:      14,
  Profile_URL__c:      "https://www.salesforce.com/trailblazer/yusufkhan2546",
};

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱  Seeding Salesforce portfolio data...\n");
  const { token, instanceUrl } = await getToken();
  console.log(`  ✅ Token acquired  (instance: ${instanceUrl})\n`);

  // 1. Certifications
  process.stdout.write("  ⬆  Portfolio_Certification__c  (12 records)... ");
  await insertMany(token, instanceUrl, "Portfolio_Certification__c", CERTS);
  console.log("done");

  // 2. Projects (parents first)
  process.stdout.write("  ⬆  Portfolio_Project__c         (3 records)... ");
  const projectIds = await insertMany(token, instanceUrl, "Portfolio_Project__c", PROJECTS);
  const projectIdMap = {};
  PROJECTS.forEach((p, i) => { projectIdMap[p.Project_Slug__c] = projectIds[i]; });
  console.log("done");

  // 3. Project Tech children
  const allTech = [];
  PROJECTS.forEach(p => {
    (PROJECT_TECH[p.Project_Slug__c] || []).forEach((name, idx) => {
      allTech.push({ Name: name, Project__c: projectIdMap[p.Project_Slug__c], Sort_Order__c: idx + 1 });
    });
  });
  process.stdout.write(`  ⬆  Portfolio_Project_Tech__c   (${allTech.length} records)... `);
  await insertMany(token, instanceUrl, "Portfolio_Project_Tech__c", allTech);
  console.log("done");

  // 4. Project Impact children
  const allImpact = [];
  PROJECTS.forEach(p => {
    (PROJECT_IMPACT[p.Project_Slug__c] || []).forEach(imp => {
      allImpact.push({ ...imp, Project__c: projectIdMap[p.Project_Slug__c] });
    });
  });
  process.stdout.write(`  ⬆  Portfolio_Project_Impact__c (${allImpact.length} records)... `);
  await insertMany(token, instanceUrl, "Portfolio_Project_Impact__c", allImpact);
  console.log("done");

  // 5. Experience (parents first)
  process.stdout.write("  ⬆  Portfolio_Experience__c      (2 records)... ");
  const expIds = await insertMany(token, instanceUrl, "Portfolio_Experience__c", EXPERIENCE);
  const expIdMap = {};
  EXPERIENCE.forEach((e, i) => { expIdMap[e.Name] = expIds[i]; });
  console.log("done");

  // 6. Experience Bullet children
  const allBullets = [];
  EXPERIENCE.forEach(e => {
    (EXPERIENCE_BULLETS[e.Name] || []).forEach((text, idx) => {
      allBullets.push({ Bullet_Text__c: text, Experience__c: expIdMap[e.Name], Sort_Order__c: idx + 1 });
    });
  });
  process.stdout.write(`  ⬆  Portfolio_Experience_Bullet__c (${allBullets.length} records)... `);
  await insertMany(token, instanceUrl, "Portfolio_Experience_Bullet__c", allBullets);
  console.log("done");

  // 7. Tech Groups (parents first)
  process.stdout.write("  ⬆  Portfolio_Tech_Group__c      (4 records)... ");
  const groupIds = await insertMany(token, instanceUrl, "Portfolio_Tech_Group__c", TECH_GROUPS);
  const groupIdMap = {};
  TECH_GROUPS.forEach((g, i) => { groupIdMap[g.Name] = groupIds[i]; });
  console.log("done");

  // 8. Tech Item children
  const allItems = [];
  TECH_GROUPS.forEach(g => {
    (TECH_ITEMS[g.Name] || []).forEach(item => {
      allItems.push({ ...item, Tech_Group__c: groupIdMap[g.Name] });
    });
  });
  process.stdout.write(`  ⬆  Portfolio_Tech_Item__c       (${allItems.length} records)... `);
  await insertMany(token, instanceUrl, "Portfolio_Tech_Item__c", allItems);
  console.log("done");

  // 9. Testimonials
  process.stdout.write("  ⬆  Portfolio_Testimonial__c     (4 records)... ");
  await insertMany(token, instanceUrl, "Portfolio_Testimonial__c", TESTIMONIALS);
  console.log("done");

  // 10. Trailblazer Stats (single record)
  process.stdout.write("  ⬆  Portfolio_Trailblazer_Stats__c (1 record)... ");
  const { status, body } = await request(
    "POST",
    `${instanceUrl}/services/data/${API_VERSION}/sobjects/Portfolio_Trailblazer_Stats__c`,
    token,
    TRAILBLAZER_STATS
  );
  if (status !== 201) throw new Error(`TrailblazerStats failed HTTP ${status}: ${JSON.stringify(body)}`);
  console.log("done");

  console.log("\n✅  All records seeded successfully!");
  console.log("    Now run: node build.js   to pull the data and rebuild the bundle.\n");
}

main().catch(err => {
  console.error("\n❌  Seed failed:", err.message);
  process.exit(1);
});
