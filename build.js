// Build script: fetch Salesforce data → transpile all JSX → bundle.js
const { execSync } = require("child_process");
const fs   = require("fs");
const path = require("path");

const root    = __dirname;
const esbuild = path.join(root, "node_modules/.bin/esbuild");

// Step 1: Fetch live data from Salesforce (no-op if env vars not set)
console.log("── Step 1/2  Salesforce data fetch ──────────────────────────");
try {
  execSync(`node "${path.join(root, "sf-fetch.js")}"`, { stdio: "inherit", cwd: root });
} catch (e) {
  console.error("sf-fetch.js exited with an error — aborting build.");
  process.exit(1);
}
console.log("── Step 2/2  esbuild bundle ─────────────────────────────────");

// Files in dependency order
const files = [
  "trailhead/icons.jsx",
  "trailhead/bolt-trail.jsx",
  "trailhead/three-orb.jsx",
  "trailhead/three-cert-cabinet.jsx",
  "tweaks-panel.jsx",
  "trailhead/mascot.jsx",
  "trailhead/page-home.jsx",
  "trailhead/page-certs.jsx",
  "trailhead/page-projects.jsx",
  "trailhead/page-experience.jsx",
  "trailhead/page-contact.jsx",
  "trailhead/page-gigs.jsx",
  "trailhead/page-demos.jsx",
  "trailhead/main.jsx",
];

// Single React hooks shim — injected ONCE at the top of the bundle.
// Using var so it's always global and can never conflict.
const SHIM = `/* React hooks shim */
var useState      = React.useState;
var useEffect     = React.useEffect;
var useRef        = React.useRef;
var useMemo       = React.useMemo;
var useCallback   = React.useCallback;
var useReducer    = React.useReducer;
var useContext    = React.useContext;
var useLayoutEffect = React.useLayoutEffect;
`;

// Pattern that matches any const/let/var destructuring of React hooks
// e.g. "const { useState, useEffect, useRef, useMemo } = React;"
const HOOK_DECL = /^(const|let|var)\s*\{[^}]*\}\s*=\s*React\s*;?/gm;

const parts = files.map(f => {
  const abs = path.join(root, f);
  let code = execSync(
    `"${esbuild}" "${abs}" --bundle=false --jsx=transform --jsx-factory=React.createElement --jsx-fragment=React.Fragment`,
    { encoding: "utf8", cwd: root }
  );
  // Remove duplicate hook destructuring — the shim covers all of them
  code = code.replace(HOOK_DECL, "/* hooks from shim */");
  return `/* ── ${f} ── */\n${code}`;
});

const bundle = SHIM + "\n" + parts.join("\n\n");
fs.writeFileSync(path.join(root, "bundle.js"), bundle);
console.log(`✅  bundle.js  ${(bundle.length / 1024).toFixed(1)} KB  (${files.length} files)`);
