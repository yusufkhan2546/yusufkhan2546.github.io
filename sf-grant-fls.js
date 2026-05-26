// sf-grant-fls.js — Creates a "Portfolio_API_Access" permission set, grants CRUD on all
// portfolio objects + FLS on all custom fields, then assigns it to the running user.
// Safe to re-run — skips anything already granted.

const https = require("https");
const fs    = require("fs");
const path  = require("path");

(function loadDotEnv() {
  const f = path.join(__dirname, ".env");
  if (!fs.existsSync(f)) return;
  fs.readFileSync(f, "utf8").split(/\r?\n/).forEach(l => {
    const t = l.trim(); if (!t || t[0] === "#") return;
    const eq = t.indexOf("="); if (eq < 0) return;
    const k = t.slice(0, eq).trim(), v = t.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (k && !(k in process.env)) process.env[k] = v;
  });
})();

const CLIENT_ID     = process.env.SF_CLIENT_ID;
const CLIENT_SECRET = process.env.SF_CLIENT_SECRET;
const INSTANCE_URL  = (process.env.SF_INSTANCE_URL || "").replace(/\/$/, "");
const API_VERSION   = process.env.SF_API_VERSION || "v62.0";

// ── HTTP helpers ─────────────────────────────────────────────────────────────

function apiReq(method, urlStr, token, body) {
  return new Promise((resolve, reject) => {
    const url  = new URL(urlStr);
    const data = body ? JSON.stringify(body) : null;
    const req  = https.request({
      hostname: url.hostname,
      path:     url.pathname + url.search,
      method,
      headers: {
        Authorization:  `Bearer ${token}`,
        Accept:         "application/json",
        "Content-Type": "application/json",
        ...(data ? { "Content-Length": Buffer.byteLength(data) } : {}),
      },
    }, res => {
      let raw = ""; res.on("data", d => raw += d);
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

async function soql(token, iurl, query, tooling = false) {
  const base = tooling ? `${iurl}/services/data/${API_VERSION}/tooling` : `${iurl}/services/data/${API_VERSION}`;
  const { status, body } = await apiReq("GET", `${base}/query?q=${encodeURIComponent(query)}`, token);
  if (status !== 200) throw new Error(`SOQL(${tooling ? "tooling" : "data"}) ${status}: ${JSON.stringify(body).slice(0, 200)}`);
  return body.records || [];
}

async function create(token, iurl, objectType, record, tooling = false) {
  const base = tooling ? `${iurl}/services/data/${API_VERSION}/tooling` : `${iurl}/services/data/${API_VERSION}`;
  const { status, body } = await apiReq("POST", `${base}/sobjects/${objectType}`, token, record);
  if (status === 201) return body.id;
  const msg = Array.isArray(body) ? body[0]?.message : (body?.message || JSON.stringify(body));
  if (msg && (msg.toLowerCase().includes("duplicate") || msg.toLowerCase().includes("already exists"))) return null;
  throw new Error(`create(${objectType}) ${status}: ${JSON.stringify(body).slice(0, 200)}`);
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
      let raw = ""; res.on("data", d => raw += d);
      res.on("end", () => {
        const j = JSON.parse(raw);
        if (!j.access_token) return reject(new Error("Auth: " + raw));
        resolve({ token: j.access_token, instanceUrl: (j.instance_url || INSTANCE_URL).replace(/\/$/, "") });
      });
    });
    req.on("error", reject); req.write(body); req.end();
  });
}

async function introspect(token, iurl) {
  const body = new URLSearchParams({ token, token_type_hint: "access_token", client_id: CLIENT_ID, client_secret: CLIENT_SECRET }).toString();
  const url  = new URL(`${iurl}/services/oauth2/introspect`);
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: url.hostname, path: url.pathname, method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": Buffer.byteLength(body) },
    }, res => {
      let raw = ""; res.on("data", d => raw += d);
      res.on("end", () => resolve(JSON.parse(raw)));
    });
    req.on("error", reject); req.write(body); req.end();
  });
}

// ── Portfolio objects & fields ────────────────────────────────────────────────

const OBJECTS = [
  "Portfolio_Certification__c",
  "Portfolio_Project__c",
  "Portfolio_Project_Tech__c",
  "Portfolio_Project_Impact__c",
  "Portfolio_Experience__c",
  "Portfolio_Experience_Bullet__c",
  "Portfolio_Tech_Group__c",
  "Portfolio_Tech_Item__c",
  "Portfolio_Testimonial__c",
  "Portfolio_Trailblazer_Stats__c",
];

const FIELDS = [
  "Portfolio_Certification__c.Year__c",
  "Portfolio_Certification__c.Family__c",
  "Portfolio_Certification__c.Kind__c",
  "Portfolio_Certification__c.Sub_Label__c",
  "Portfolio_Certification__c.Accent_Color__c",
  "Portfolio_Certification__c.Hue__c",
  "Portfolio_Certification__c.Credential_ID__c",
  "Portfolio_Certification__c.Verify_URL__c",
  "Portfolio_Certification__c.Badge_Image_Path__c",
  "Portfolio_Certification__c.Is_Active__c",
  "Portfolio_Certification__c.Sort_Order__c",
  "Portfolio_Project__c.Project_Slug__c",
  "Portfolio_Project__c.Role__c",
  "Portfolio_Project__c.Client__c",
  "Portfolio_Project__c.Duration__c",
  "Portfolio_Project__c.Team_Size__c",
  "Portfolio_Project__c.Challenge__c",
  "Portfolio_Project__c.Solution__c",
  "Portfolio_Project__c.Is_Active__c",
  "Portfolio_Project__c.Sort_Order__c",
  "Portfolio_Project_Tech__c.Sort_Order__c",
  "Portfolio_Project_Impact__c.Metric__c",
  "Portfolio_Project_Impact__c.Impact_Label__c",
  "Portfolio_Project_Impact__c.Sort_Order__c",
  "Portfolio_Experience__c.Period__c",
  "Portfolio_Experience__c.Company__c",
  "Portfolio_Experience__c.Location__c",
  "Portfolio_Experience__c.Tag__c",
  "Portfolio_Experience__c.Is_Active__c",
  "Portfolio_Experience__c.Sort_Order__c",
  "Portfolio_Experience_Bullet__c.Bullet_Text__c",
  "Portfolio_Experience_Bullet__c.Sort_Order__c",
  "Portfolio_Tech_Group__c.Sort_Order__c",
  "Portfolio_Tech_Item__c.Proficiency__c",
  "Portfolio_Tech_Item__c.Sort_Order__c",
  "Portfolio_Testimonial__c.Quote__c",
  "Portfolio_Testimonial__c.Job_Title__c",
  "Portfolio_Testimonial__c.Initials__c",
  "Portfolio_Testimonial__c.Is_Active__c",
  "Portfolio_Testimonial__c.Sort_Order__c",
  "Portfolio_Trailblazer_Stats__c.Badges_Earned__c",
  "Portfolio_Trailblazer_Stats__c.Points_K__c",
  "Portfolio_Trailblazer_Stats__c.Trails_Completed__c",
  "Portfolio_Trailblazer_Stats__c.Superbadges__c",
  "Portfolio_Trailblazer_Stats__c.Profile_URL__c",
];

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔑  Setting up portfolio permissions...\n");
  const { token, instanceUrl } = await getToken();

  // 1. Find the running user
  const who = await introspect(token, instanceUrl);
  console.log(`  Running as: ${who.username}`);
  const users = await soql(token, instanceUrl, `SELECT Id, ProfileId FROM User WHERE Username = '${who.username}' LIMIT 1`);
  if (!users.length) throw new Error(`User ${who.username} not found`);
  const userId = users[0].Id;
  console.log(`  User ID: ${userId}\n`);

  // 2. Find or create a dedicated Permission Set
  const PS_NAME  = "Portfolio_API_Access";
  const PS_LABEL = "Portfolio API Access";
  let psId;
  const existing = await soql(token, instanceUrl, `SELECT Id FROM PermissionSet WHERE Name = '${PS_NAME}' AND IsOwnedByProfile = false LIMIT 1`);
  if (existing.length) {
    psId = existing[0].Id;
    console.log(`  PermissionSet '${PS_NAME}' already exists: ${psId}`);
  } else {
    psId = await create(token, instanceUrl, "PermissionSet", { Name: PS_NAME, Label: PS_LABEL });
    console.log(`  PermissionSet '${PS_NAME}' created: ${psId}`);
  }

  // 3. Assign PS to user (if not already)
  const assigned = await soql(token, instanceUrl, `SELECT Id FROM PermissionSetAssignment WHERE PermissionSetId = '${psId}' AND AssigneeId = '${userId}' LIMIT 1`);
  if (!assigned.length) {
    await create(token, instanceUrl, "PermissionSetAssignment", { PermissionSetId: psId, AssigneeId: userId });
    console.log(`  Assigned '${PS_NAME}' to ${who.username}`);
  } else {
    console.log(`  '${PS_NAME}' already assigned to ${who.username}`);
  }
  console.log();

  // 4. Grant object-level CRUD on all portfolio objects
  console.log("  Object permissions:");
  for (const obj of OBJECTS) {
    process.stdout.write(`    ${obj.padEnd(42)} `);
    const existingObjPerm = await soql(token, instanceUrl,
      `SELECT Id FROM ObjectPermissions WHERE SobjectType = '${obj}' AND ParentId = '${psId}' LIMIT 1`
    );
    if (existingObjPerm.length) { console.log("⏭  exists"); continue; }
    const id = await create(token, instanceUrl, "ObjectPermissions", {
      ParentId:               psId,
      SobjectType:            obj,
      PermissionsRead:        true,
      PermissionsCreate:      true,
      PermissionsEdit:        true,
      PermissionsDelete:      true,
      PermissionsViewAllRecords: true,
      PermissionsModifyAllRecords: true,
    });
    console.log(id ? "✅ granted" : "⏭  already");
  }
  console.log();

  // 5. Grant field-level read+edit on all custom fields
  console.log("  Field permissions:");
  for (const field of FIELDS) {
    process.stdout.write(`    ${field.padEnd(58)} `);
    const [sobject] = field.split(".");
    const existingFP = await soql(token, instanceUrl,
      `SELECT Id FROM FieldPermissions WHERE SobjectType = '${sobject}' AND Field = '${field}' AND ParentId = '${psId}' LIMIT 1`
    );
    if (existingFP.length) { console.log("⏭  exists"); continue; }
    try {
      const id = await create(token, instanceUrl, "FieldPermissions", {
        ParentId:        psId,
        SobjectType:     sobject,
        Field:           field,
        PermissionsRead: true,
        PermissionsEdit: true,
      });
      console.log(id ? "✅ granted" : "⏭  already");
    } catch (err) {
      // External ID / formula fields sometimes can't be set via FieldPermissions — skip them
      if (err.message.includes("INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST") || err.message.includes("restricted picklist")) {
        console.log("⏭  skipped (system-managed FLS)");
      } else {
        throw err;
      }
    }
  }

  console.log("\n✅  Permissions complete. Run: node sf-seed.js\n");
}

main().catch(err => {
  console.error("\n❌ Failed:", err.message);
  process.exit(1);
});
