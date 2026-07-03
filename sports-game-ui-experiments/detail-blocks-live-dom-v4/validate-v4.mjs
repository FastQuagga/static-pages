import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

const expected = {
  topbar: [
    ["01-crest-tile", 78, 75],
    ["02-club-identity", 180, 70],
    ["03-league-tile", 190, 72],
    ["04-resource-cluster", 480, 72],
    ["05-speed-control", 255, 72],
    ["06-system-cluster", 176, 72],
  ],
  "pre-match": [
    ["01-pre-header", 425, 58],
    ["02-opponent-card", 318, 305],
    ["03-last-report-strip", 78, 305],
    ["04-win-chance-card", 405, 104],
    ["05-coach-recommendation-card", 405, 93],
    ["06-current-tactic-chip", 156, 67],
    ["07-start-match-button", 236, 67],
  ],
  live: [
    ["01-live-header", 445, 58],
    ["02-scoreboard-card", 421, 124],
    ["03-match-field-card", 421, 267],
    ["04-match-flow-card", 421, 102],
    ["05-speed-control-card", 421, 87],
  ],
  "post-match": [
    ["01-post-header", 430, 58],
    ["02-result-card", 406, 113],
    ["03-why-we-won-card", 406, 142],
    ["04-mvp-card", 154, 179],
    ["05-match-pnl-card", 248, 179],
    ["06-next-opponent-card", 406, 95],
    ["07-continue-button", 406, 50],
  ],
  "bottom-status": [
    ["01-date", 158, 65],
    ["02-time", 125, 65],
    ["03-news", 524, 65],
    ["04-status", 249, 65],
    ["05-next-match", 182, 65],
    ["06-continue-cta", 170, 47],
  ],
};

const errors = [];
const warnings = [];

function imageSize(file) {
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8",
  });
  return {
    width: Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]),
    height: Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]),
  };
}

function checkRefs(file) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(https?:|data:|#)/.test(ref)) continue;
    const resolved = path.resolve(path.dirname(file), ref);
    if (!fs.existsSync(resolved)) {
      errors.push(`missing ref in ${path.relative(root, file)}: ${ref}`);
    }
  }
}

function checkCss(file) {
  const css = fs.readFileSync(file, "utf8");
  const open = (css.match(/\{/g) || []).length;
  const close = (css.match(/\}/g) || []).length;
  if (open !== close) {
    errors.push(`css brace mismatch in ${path.relative(root, file)}: ${open}/${close}`);
  }
}

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, callback);
    else callback(full);
  }
}

walk(root, (file) => {
  if (path.basename(file) === ".DS_Store") errors.push(`unexpected .DS_Store: ${path.relative(root, file)}`);
});

let count = 0;
for (const [group, blocks] of Object.entries(expected)) {
  for (const [folder, width, height] of blocks) {
    count++;
    const blockDir = path.join(root, group, folder);
    const required = [
      "index.html",
      "layout.html",
      "layout-exact.html",
      "block.css",
      "spec.md",
      "reference/original.png",
      "rendered/layout-final.png",
      "rendered/diff-report.md",
    ];
    for (const rel of required) {
      const file = path.join(blockDir, rel);
      if (!fs.existsSync(file)) errors.push(`missing ${group}/${folder}/${rel}`);
    }

    const ref = path.join(blockDir, "reference", "original.png");
    if (fs.existsSync(ref)) {
      const size = imageSize(ref);
      if (size.width !== width || size.height !== height) {
        errors.push(`wrong reference size ${group}/${folder}: ${size.width}x${size.height}, expected ${width}x${height}`);
      }
    }

    for (const htmlName of ["index.html", "layout.html", "layout-exact.html"]) {
      const file = path.join(blockDir, htmlName);
      if (fs.existsSync(file)) checkRefs(file);
    }
    const css = path.join(blockDir, "block.css");
    if (fs.existsSync(css)) checkCss(css);

    const spec = path.join(blockDir, "spec.md");
    if (fs.existsSync(spec)) {
      const text = fs.readFileSync(spec, "utf8");
      if (!/live-DOM|DOM|data-/.test(text)) {
        warnings.push(`spec may not describe DOM contract: ${group}/${folder}`);
      }
    }
  }
}

if (!fs.existsSync(path.join(root, "compare-all.html"))) warnings.push("compare-all.html is not generated yet");
if (!fs.existsSync(path.join(root, "compare-all.css"))) warnings.push("compare-all.css is not generated yet");

console.log(JSON.stringify({ expectedBlocks: count, errors, warnings }, null, 2));
if (errors.length) process.exit(1);
