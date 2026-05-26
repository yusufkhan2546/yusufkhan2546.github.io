// sf-set-secrets.js — one-shot: pushes local .env vars as GitHub Actions secrets
// Run once: node sf-set-secrets.js
// Uses GITHUB_TOKEN from .env with scope: secrets / workflow

const https    = require("https");
const fs       = require("fs");
const path     = require("path");
const sodium   = require("libsodium-wrappers");

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

const GITHUB_TOKEN   = process.env.GITHUB_TOKEN;
const OWNER          = "yusufkhan2546";
const REPO           = "yusufkhan2546.github.io";

const SECRETS = {
  SF_CLIENT_ID:     process.env.SF_CLIENT_ID,
  SF_CLIENT_SECRET: process.env.SF_CLIENT_SECRET,
  SF_INSTANCE_URL:  process.env.SF_INSTANCE_URL,
};

if (!GITHUB_TOKEN) { console.error("❌  GITHUB_TOKEN not set in .env"); process.exit(1); }
for (const [k, v] of Object.entries(SECRETS)) {
  if (!v) { console.error(`❌  ${k} not set in .env`); process.exit(1); }
}

function apiGet(path) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: "api.github.com", path,
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "portfolio-secrets-setter",
      },
    }, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
    });
    req.on("error", reject);
    req.end();
  });
}

function apiPut(path, body) {
  const payload = JSON.stringify(body);
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: "api.github.com", path, method: "PUT",
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
        "User-Agent": "portfolio-secrets-setter",
      },
    }, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => resolve({ status: res.statusCode, body: data }));
    });
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  await sodium.ready;

  console.log(`🔑  Fetching repo public key for ${OWNER}/${REPO}...`);
  const { body: keyInfo } = await apiGet(`/repos/${OWNER}/${REPO}/actions/secrets/public-key`);
  if (!keyInfo.key) {
    console.error("❌  Could not fetch public key:", JSON.stringify(keyInfo));
    process.exit(1);
  }

  const pubKey = sodium.from_base64(keyInfo.key, sodium.base64_variants.ORIGINAL);

  for (const [name, value] of Object.entries(SECRETS)) {
    const msgBytes       = sodium.from_string(value);
    const encryptedBytes = sodium.crypto_box_seal(msgBytes, pubKey);
    const encrypted      = sodium.to_base64(encryptedBytes, sodium.base64_variants.ORIGINAL);

    const res = await apiPut(
      `/repos/${OWNER}/${REPO}/actions/secrets/${name}`,
      { encrypted_value: encrypted, key_id: keyInfo.key_id }
    );
    if (res.status === 201 || res.status === 204) {
      console.log(`✅  ${name} set`);
    } else {
      console.error(`❌  ${name} failed (${res.status}): ${res.body}`);
    }
  }

  console.log("\n🎉  All secrets pushed. GitHub Actions is ready.");
}

main().catch(e => { console.error("❌ ", e.message); process.exit(1); });
