const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const esbuild = path.join(root, "node_modules/.bin/esbuild");

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
  "trailhead/main.jsx",
];

const parts = files.map(f => {
  const abs = path.join(root, f);
  const result = execSync(
    `"${esbuild}" "${abs}" --bundle=false --jsx=transform --jsx-factory=React.createElement --jsx-fragment=React.Fragment`,
    { encoding: "utf8", cwd: root }
  );
  return `/* ── ${f} ── */\n${result}`;
});

const bundle = parts.join("\n\n");
fs.writeFileSync(path.join(root, "bundle.js"), bundle);
console.log(`✅  bundle.js  ${(bundle.length / 1024).toFixed(1)} KB  (${files.length} files)`);
