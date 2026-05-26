// sf-trigger-rebuild.js
// Triggers the GitHub Actions "Refresh Salesforce Data" workflow via repository_dispatch.
// Reads GITHUB_TOKEN from .env (or environment). Safe to call from any agent or script.
//
// Usage:  node sf-trigger-rebuild.js
//         GITHUB_TOKEN=ghp_xxx node sf-trigger-rebuild.js

const https = require("https");
const fs    = require("fs");
const path  = require("path");

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

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.GITHUB_OWNER || "yusufkhan2546";
const REPO  = process.env.GITHUB_REPO  || "yusufkhan2546.github.io";

if (!TOKEN) {
  console.error("❌  GITHUB_TOKEN not set. Add it to .env or pass as env var.");
  console.error("    Create a token at https://github.com/settings/tokens");
  console.error("    Required scope: workflow");
  process.exit(1);
}

const body = JSON.stringify({ event_type: "salesforce-data-changed" });

const options = {
  hostname: "api.github.com",
  path: `/repos/${OWNER}/${REPO}/dispatches`,
  method: "POST",
  headers: {
    "Authorization": `Bearer ${TOKEN}`,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
    "User-Agent": "portfolio-rebuild-trigger",
  },
};

console.log(`🚀  Triggering rebuild for ${OWNER}/${REPO}...`);

const req = https.request(options, res => {
  if (res.statusCode === 204) {
    console.log("✅  Dispatch accepted — GitHub Actions workflow will start shortly.");
    console.log(`    Watch progress at: https://github.com/${OWNER}/${REPO}/actions`);
  } else {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => {
      console.error(`❌  GitHub returned ${res.statusCode}: ${data}`);
      process.exit(1);
    });
  }
});

req.on("error", err => { console.error("❌  Request failed:", err.message); process.exit(1); });
req.write(body);
req.end();
