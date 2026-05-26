// sf-fetch.js — Build-time Salesforce data fetcher
// Run automatically by build.js. Reads credentials from .env then writes sf-data.js.

const https = require("https");
const fs    = require("fs");
const path  = require("path");

// Load .env without requiring the dotenv package
(function loadDotEnv() {
  const envFile = path.join(__dirname, ".env");
  if (!fs.existsSync(envFile)) return;
  fs.readFileSync(envFile, "utf8")
    .split(/\r?\n/)
    .forEach(line => {
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
  console.warn("⚠️  SF_CLIENT_ID / SF_CLIENT_SECRET / SF_INSTANCE_URL not set — skipping Salesforce fetch.");
  process.exit(0);
}

function httpsPost(urlStr, body, headers) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const opts = {
      hostname: url.hostname,
      path:     url.pathname + url.search,
      method:   "POST",
      headers:  { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": Buffer.byteLength(body), ...headers },
    };
    const req = https.request(opts, res => {
      let data = "";
      res.on("data", d => data += d);
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error("Non-JSON response: " + data)); }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function httpsGet(urlStr, token) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const opts = {
      hostname: url.hostname,
      path:     url.pathname + url.search,
      method:   "GET",
      headers:  { Authorization: `Bearer ${token}`, Accept: "application/json" },
    };
    const req = https.request(opts, res => {
      let data = "";
      res.on("data", d => data += d);
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error("Non-JSON response: " + data)); }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

let _instanceUrl = INSTANCE_URL;

async function getToken() {
  const body = new URLSearchParams({
    grant_type:    "client_credentials",
    client_id:     CLIENT_ID,
    client_secret: CLIENT_SECRET,
  }).toString();
  const result = await httpsPost(`${INSTANCE_URL}/services/oauth2/token`, body);
  if (!result.access_token) throw new Error("Auth failed: " + JSON.stringify(result));
  // Always use instance_url from the token response — avoids INVALID_SESSION_ID on some orgs
  if (result.instance_url) _instanceUrl = result.instance_url.replace(/\/$/, "");
  console.log(`  ✅ Salesforce token acquired  (instance: ${_instanceUrl})`);
  return result.access_token;
}

async function soql(token, query) {
  const encoded = encodeURIComponent(query);
  const url = `${_instanceUrl}/services/data/${API_VERSION}/query?q=${encoded}`;
  const result = await httpsGet(url, token);
  // Salesforce returns errors as either an array [{errorCode,message}] or an object {errorCode,message}
  if (Array.isArray(result)) throw new Error(`SOQL error [${result[0]?.errorCode}]: ${result[0]?.message}\nQuery: ${query}`);
  if (result.errorCode) throw new Error(`SOQL error [${result.errorCode}]: ${result.message}\nQuery: ${query}`);
  return result.records || [];
}

// ── Data transform functions ─────────────────────────────────────────────────

function transformCerts(records) {
  return records.map(r => ({
    name:      r.Name,
    year:      r.Year__c,
    family:    r.Family__c,
    hue:       r.Hue__c,
    kind:      r.Kind__c,
    sub:       r.Sub_Label__c,
    color:     r.Accent_Color__c,
    credId:    r.Credential_ID__c,
    verifyUrl: r.Verify_URL__c,
    img:       r.Badge_Image_Path__c,
  }));
}

function transformProjects(records) {
  return records.map(r => ({
    id:        r.Project_Slug__c,
    title:     r.Name,
    role:      r.Role__c,
    client:    r.Client__c,
    stack:     (r.Tech_Stack__r?.records    || []).map(t => t.Name),
    duration:  r.Duration__c,
    team:      String(r.Team_Size__c),
    impact:    (r.Impact_Metrics__r?.records  || []).map(i => ({
      metric: i.Metric__c,
      label:  i.Impact_Label__c,
    })),
    challenge: r.Challenge__c,
    solution:  r.Solution__c,
  }));
}

function transformExperience(records) {
  return records.map(r => ({
    period:   r.Period__c,
    role:     r.Name,
    company:  r.Company__c,
    location: r.Location__c,
    tag:      r.Tag__c,
    bullets:  (r.Achievements__r?.records || []).map(b => b.Bullet_Text__c),
  }));
}

function transformTechGroups(records) {
  return records.map(r => ({
    group: r.Name,
    items: (r.Tech_Items__r?.records || []).map(i => [i.Name, i.Proficiency__c]),
  }));
}

function transformTestimonials(records) {
  return records.map(r => ({
    q:        r.Quote__c,
    who:      r.Name,
    title:    r.Job_Title__c,
    initials: r.Initials__c,
  }));
}

function transformTrailblazerStats(record) {
  if (!record) return null;
  return {
    badges:     record.Badges_Earned__c,
    pointsK:    record.Points_K__c,
    trails:     record.Trails_Completed__c,
    superbadges: record.Superbadges__c,
    profileUrl: record.Profile_URL__c,
  };
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔄  Fetching portfolio data from Salesforce...");

  const token = await getToken();

  const [certs, projects, experience, techGroups, testimonials, tbStats] = await Promise.all([
    soql(token,
      `SELECT Name, Year__c, Family__c, Kind__c, Sub_Label__c, Accent_Color__c, Hue__c,
              Credential_ID__c, Verify_URL__c, Badge_Image_Path__c
       FROM Portfolio_Certification__c
       WHERE Is_Active__c = true
       ORDER BY Sort_Order__c ASC NULLS LAST`
    ),
    soql(token,
      `SELECT Name, Project_Slug__c, Role__c, Client__c, Duration__c, Team_Size__c,
              Challenge__c, Solution__c,
              (SELECT Name FROM Tech_Stack__r    ORDER BY Sort_Order__c ASC NULLS LAST),
              (SELECT Metric__c, Impact_Label__c FROM Impact_Metrics__r ORDER BY Sort_Order__c ASC NULLS LAST)
       FROM Portfolio_Project__c
       WHERE Is_Active__c = true
       ORDER BY Sort_Order__c ASC NULLS LAST`
    ),
    soql(token,
      `SELECT Name, Period__c, Company__c, Location__c, Tag__c,
              (SELECT Bullet_Text__c FROM Achievements__r ORDER BY Sort_Order__c ASC NULLS LAST)
       FROM Portfolio_Experience__c
       WHERE Is_Active__c = true
       ORDER BY Sort_Order__c ASC NULLS LAST`
    ),
    soql(token,
      `SELECT Name,
              (SELECT Name, Proficiency__c FROM Tech_Items__r ORDER BY Sort_Order__c ASC NULLS LAST)
       FROM Portfolio_Tech_Group__c
       ORDER BY Sort_Order__c ASC NULLS LAST`
    ),
    soql(token,
      `SELECT Name, Quote__c, Job_Title__c, Initials__c
       FROM Portfolio_Testimonial__c
       WHERE Is_Active__c = true
       ORDER BY Sort_Order__c ASC NULLS LAST`
    ),
    soql(token,
      `SELECT Badges_Earned__c, Points_K__c, Trails_Completed__c, Superbadges__c, Profile_URL__c
       FROM Portfolio_Trailblazer_Stats__c
       LIMIT 1`
    ),
  ]);

  const data = {
    certifications:   transformCerts(certs),
    projects:         transformProjects(projects),
    experience:       transformExperience(experience),
    techGroups:       transformTechGroups(techGroups),
    testimonials:     transformTestimonials(testimonials),
    trailblazerStats: transformTrailblazerStats(tbStats[0] || null),
  };

  const js = `// Auto-generated by sf-fetch.js — do not edit manually\nwindow.__SF_DATA__ = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, "sf-data.js"), js);

  console.log(`✅  sf-data.js written`);
  console.log(`    certifications : ${data.certifications.length}`);
  console.log(`    projects       : ${data.projects.length}`);
  console.log(`    experience     : ${data.experience.length}`);
  console.log(`    techGroups     : ${data.techGroups.length}`);
  console.log(`    testimonials   : ${data.testimonials.length}`);
  console.log(`    trailblazerStats: ${data.trailblazerStats ? "loaded" : "not found"}`);
}

main().catch(err => {
  console.error("❌  Salesforce fetch failed:", err.message);
  process.exit(1);
});
