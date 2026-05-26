// sf-deploy-schema.js — Creates all custom fields on portfolio objects via Tooling API
// Run ONCE before sf-seed.js: node sf-deploy-schema.js
// Safe to re-run — skips fields that already exist.

const https = require("https");
const fs    = require("fs");
const path  = require("path");

(function loadDotEnv() {
  const envFile = path.join(__dirname, ".env");
  if (!fs.existsSync(envFile)) return;
  fs.readFileSync(envFile, "utf8").split(/\r?\n/).forEach(line => {
    const t = line.trim();
    if (!t || t.startsWith("#")) return;
    const eq = t.indexOf("=");
    if (eq === -1) return;
    const k = t.slice(0, eq).trim(), v = t.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (k && !(k in process.env)) process.env[k] = v;
  });
})();

const CLIENT_ID     = process.env.SF_CLIENT_ID;
const CLIENT_SECRET = process.env.SF_CLIENT_SECRET;
const INSTANCE_URL  = (process.env.SF_INSTANCE_URL || "").replace(/\/$/, "");
const API_VERSION   = process.env.SF_API_VERSION || "v62.0";

if (!CLIENT_ID || !CLIENT_SECRET || !INSTANCE_URL) {
  console.error("❌  SF_CLIENT_ID / SF_CLIENT_SECRET / SF_INSTANCE_URL not set");
  process.exit(1);
}

function httpsReq(method, urlStr, token, body) {
  return new Promise((resolve, reject) => {
    const url  = new URL(urlStr);
    const data = body ? JSON.stringify(body) : null;
    const req  = https.request({
      hostname: url.hostname,
      path:     url.pathname + url.search,
      method,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        Accept:         "application/json",
        "Content-Type": "application/json",
        ...(data ? { "Content-Length": Buffer.byteLength(data) } : {}),
      },
    }, res => {
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

async function getToken() {
  const body = new URLSearchParams({
    grant_type: "client_credentials", client_id: CLIENT_ID, client_secret: CLIENT_SECRET,
  }).toString();
  const url = new URL(`${INSTANCE_URL}/services/oauth2/token`);
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: url.hostname, path: url.pathname, method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": Buffer.byteLength(body) },
    }, res => {
      let raw = "";
      res.on("data", d => raw += d);
      res.on("end", () => {
        try {
          const j = JSON.parse(raw);
          if (!j.access_token) return reject(new Error("Auth failed: " + raw));
          resolve({ token: j.access_token, instanceUrl: (j.instance_url || INSTANCE_URL).replace(/\/$/, "") });
        } catch (e) { reject(e); }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// Create a single custom field via Tooling API.
// Returns true if created, false if already exists, throws on other errors.
async function createField(token, instanceUrl, objectApiName, fieldDef) {
  const fullName = `${objectApiName}.${fieldDef.fullName}`;
  const payload  = { FullName: fullName, Metadata: fieldDef.metadata };
  const { status, body } = await httpsReq(
    "POST",
    `${instanceUrl}/services/data/${API_VERSION}/tooling/sobjects/CustomField`,
    token,
    payload
  );
  if (status === 201) return true;
  // Already exists
  if (status === 400 && Array.isArray(body) && body[0]?.errorCode === "DUPLICATE_DEVELOPER_NAME") return false;
  if (status === 400 && Array.isArray(body) && body[0]?.errorCode === "FIELD_INTEGRITY_EXCEPTION") return false;
  // Some orgs return 500 with duplicate name error
  const msg = Array.isArray(body) ? body[0]?.message : JSON.stringify(body);
  if (msg && (msg.includes("duplicate") || msg.includes("already exists"))) return false;
  throw new Error(`createField(${fullName}) HTTP ${status}: ${JSON.stringify(body)}`);
}

// ── Field definitions ────────────────────────────────────────────────────────

const SCHEMA = [
  // ── Portfolio_Certification__c ──────────────────────────────────────────
  {
    object: "Portfolio_Certification__c",
    fields: [
      { fullName: "Year__c",             metadata: { label: "Year",              type: "Text",     length: 4    } },
      { fullName: "Family__c",           metadata: { label: "Family",            type: "Picklist", valueSet: { valueSetDefinition: { value: [
        { fullName: "Foundational" }, { fullName: "Developer" }, { fullName: "Consultant" },
        { fullName: "Industries"   }, { fullName: "Data & AI"  }, { fullName: "AI"         }, { fullName: "Architect" },
      ] } } } },
      { fullName: "Kind__c",             metadata: { label: "Kind",              type: "Text",     length: 40   } },
      { fullName: "Sub_Label__c",        metadata: { label: "Sub Label",         type: "Text",     length: 10   } },
      { fullName: "Accent_Color__c",     metadata: { label: "Accent Color",      type: "Text",     length: 10   } },
      { fullName: "Hue__c",              metadata: { label: "Hue",               type: "Number",   precision: 5, scale: 0 } },
      { fullName: "Credential_ID__c",    metadata: { label: "Credential ID",     type: "Text",     length: 40   } },
      { fullName: "Verify_URL__c",       metadata: { label: "Verify URL",        type: "Url"                    } },
      { fullName: "Badge_Image_Path__c", metadata: { label: "Badge Image Path",  type: "Text",     length: 255  } },
      { fullName: "Is_Active__c",        metadata: { label: "Is Active",         type: "Checkbox", defaultValue: true } },
      { fullName: "Sort_Order__c",       metadata: { label: "Sort Order",        type: "Number",   precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Project__c ────────────────────────────────────────────────
  {
    object: "Portfolio_Project__c",
    fields: [
      { fullName: "Project_Slug__c",  metadata: { label: "Project Slug",  type: "Text",     length: 100, unique: true, externalId: true } },
      { fullName: "Role__c",          metadata: { label: "Role",          type: "Text",     length: 150  } },
      { fullName: "Client__c",        metadata: { label: "Client",        type: "Text",     length: 150  } },
      { fullName: "Duration__c",      metadata: { label: "Duration",      type: "Text",     length: 40   } },
      { fullName: "Team_Size__c",     metadata: { label: "Team Size",     type: "Number",   precision: 5, scale: 0 } },
      { fullName: "Challenge__c",     metadata: { label: "Challenge",     type: "LongTextArea", length: 32768, visibleLines: 5 } },
      { fullName: "Solution__c",      metadata: { label: "Solution",      type: "LongTextArea", length: 32768, visibleLines: 5 } },
      { fullName: "Is_Active__c",     metadata: { label: "Is Active",     type: "Checkbox", defaultValue: true } },
      { fullName: "Sort_Order__c",    metadata: { label: "Sort Order",    type: "Number",   precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Project_Tech__c ───────────────────────────────────────────
  {
    object: "Portfolio_Project_Tech__c",
    fields: [
      { fullName: "Sort_Order__c", metadata: { label: "Sort Order", type: "Number", precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Project_Impact__c ─────────────────────────────────────────
  {
    object: "Portfolio_Project_Impact__c",
    fields: [
      { fullName: "Metric__c",       metadata: { label: "Metric",       type: "Text",     length: 50   } },
      { fullName: "Impact_Label__c", metadata: { label: "Impact Label", type: "Text",     length: 150  } },
      { fullName: "Sort_Order__c",   metadata: { label: "Sort Order",   type: "Number",   precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Experience__c ─────────────────────────────────────────────
  {
    object: "Portfolio_Experience__c",
    fields: [
      { fullName: "Period__c",       metadata: { label: "Period",       type: "Text",     length: 60   } },
      { fullName: "Company__c",      metadata: { label: "Company",      type: "Text",     length: 100  } },
      { fullName: "Location__c",     metadata: { label: "Location",     type: "Text",     length: 100  } },
      { fullName: "Tag__c",          metadata: { label: "Tag",          type: "Text",     length: 40   } },
      { fullName: "Is_Active__c",    metadata: { label: "Is Active",    type: "Checkbox", defaultValue: true } },
      { fullName: "Sort_Order__c",   metadata: { label: "Sort Order",   type: "Number",   precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Experience_Bullet__c ──────────────────────────────────────
  {
    object: "Portfolio_Experience_Bullet__c",
    fields: [
      { fullName: "Bullet_Text__c",  metadata: { label: "Bullet Text",  type: "LongTextArea", length: 32768, visibleLines: 3 } },
      { fullName: "Sort_Order__c",   metadata: { label: "Sort Order",   type: "Number",   precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Tech_Group__c ─────────────────────────────────────────────
  {
    object: "Portfolio_Tech_Group__c",
    fields: [
      { fullName: "Sort_Order__c", metadata: { label: "Sort Order", type: "Number", precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Tech_Item__c ──────────────────────────────────────────────
  {
    object: "Portfolio_Tech_Item__c",
    fields: [
      { fullName: "Proficiency__c", metadata: { label: "Proficiency", type: "Number", precision: 5, scale: 0 } },
      { fullName: "Sort_Order__c",  metadata: { label: "Sort Order",  type: "Number", precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Testimonial__c ────────────────────────────────────────────
  {
    object: "Portfolio_Testimonial__c",
    fields: [
      { fullName: "Quote__c",       metadata: { label: "Quote",       type: "LongTextArea", length: 32768, visibleLines: 5 } },
      { fullName: "Job_Title__c",   metadata: { label: "Job Title",   type: "Text",     length: 100  } },
      { fullName: "Initials__c",    metadata: { label: "Initials",    type: "Text",     length: 2    } },
      { fullName: "Is_Active__c",   metadata: { label: "Is Active",   type: "Checkbox", defaultValue: true } },
      { fullName: "Sort_Order__c",  metadata: { label: "Sort Order",  type: "Number",   precision: 5, scale: 0 } },
    ],
  },
  // ── Portfolio_Trailblazer_Stats__c ──────────────────────────────────────
  {
    object: "Portfolio_Trailblazer_Stats__c",
    fields: [
      { fullName: "Badges_Earned__c",    metadata: { label: "Badges Earned",    type: "Number", precision: 5, scale: 0 } },
      { fullName: "Points_K__c",         metadata: { label: "Points K",         type: "Number", precision: 5, scale: 0 } },
      { fullName: "Trails_Completed__c", metadata: { label: "Trails Completed", type: "Number", precision: 5, scale: 0 } },
      { fullName: "Superbadges__c",      metadata: { label: "Superbadges",      type: "Number", precision: 5, scale: 0 } },
      { fullName: "Profile_URL__c",      metadata: { label: "Profile URL",      type: "Url"                    } },
    ],
  },
];

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🏗️   Deploying portfolio schema to Salesforce...\n");
  const { token, instanceUrl } = await getToken();
  console.log(`  ✅ Token acquired  (instance: ${instanceUrl})\n`);

  let created = 0, skipped = 0;

  for (const { object, fields } of SCHEMA) {
    process.stdout.write(`  ${object}\n`);
    for (const field of fields) {
      process.stdout.write(`    ${field.fullName.padEnd(28)} `);
      try {
        const wasCreated = await createField(token, instanceUrl, object, field);
        if (wasCreated) { console.log("✅ created");  created++; }
        else            { console.log("⏭  exists");   skipped++; }
      } catch (err) {
        console.log("❌ FAILED:", err.message);
        throw err;
      }
    }
  }

  console.log(`\n✅  Schema deploy complete — ${created} fields created, ${skipped} already existed.`);
  console.log("    Now run: node sf-seed.js\n");
}

main().catch(err => {
  console.error("\n❌  Schema deploy failed:", err.message);
  process.exit(1);
});
