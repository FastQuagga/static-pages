import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

const groups = [
  ["topbar", "Topbar"],
  ["pre-match", "Pre-Match"],
  ["live", "Live"],
  ["post-match", "Post-Match"],
  ["bottom-status", "Bottom Status"],
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function titleFromFolder(folder) {
  return folder
    .replace(/^\d+-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function imageSize(file) {
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8",
  });
  const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]);
  const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]);
  if (!width || !height) throw new Error(`Cannot read image size: ${file}`);
  return { width, height };
}

function readMetric(blockDir) {
  const reportFile = path.join(blockDir, "rendered", "diff-report.md");
  if (!fs.existsSync(reportFile)) return null;
  const text = fs.readFileSync(reportFile, "utf8");
  const finalLine = text
    .split("\n")
    .find((line) => {
      if (!line.includes("|")) return false;
      const cells = line
        .split("|")
        .map((cell) => cell.trim().replaceAll("`", ""))
        .filter(Boolean);
      return cells[0] === "layout-final" || cells[0] === "layout-final.png";
    });
  if (!finalLine) return null;
  const cells = finalLine
    .split("|")
    .map((cell) => cell.trim())
    .filter(Boolean);
  const numbers = cells
    .map((cell) => cell.match(/^\d+(?:\.\d+)?$/)?.[0])
    .filter(Boolean);
  if (numbers.length < 3) return null;
  return {
    avgRgbDelta: numbers[0],
    changedPixelsOver24: numbers[1],
    changedRatio: numbers[2],
    maxRgbTripletDelta: numbers[3] ?? null,
  };
}

const rows = [];

for (const [group, groupTitle] of groups) {
  const groupDir = path.join(root, group);
  if (!fs.existsSync(groupDir)) continue;
  const blockDirs = fs
    .readdirSync(groupDir, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
    .sort();

  for (const folder of blockDirs) {
    const blockDir = path.join(groupDir, folder);
    const ref = path.join(blockDir, "reference", "original.png");
    const layout = path.join(blockDir, "layout.html");
    const exact = path.join(blockDir, "layout-exact.html");
    const spec = path.join(blockDir, "spec.md");
    const index = path.join(blockDir, "index.html");
    if (!fs.existsSync(ref) || !fs.existsSync(layout)) {
      throw new Error(`Block is incomplete: ${group}/${folder}`);
    }
    const { width, height } = imageSize(ref);
    rows.push({
      group,
      groupTitle,
      folder,
      title: titleFromFolder(folder),
      width,
      height,
      metric: readMetric(blockDir),
      relLayout: `./${group}/${folder}/layout.html`,
      relRef: `./${group}/${folder}/reference/original.png`,
      relExact: fs.existsSync(exact) ? `./${group}/${folder}/layout-exact.html` : null,
      relIndex: fs.existsSync(index) ? `./${group}/${folder}/index.html` : null,
      relSpec: fs.existsSync(spec) ? `./${group}/${folder}/spec.md` : null,
    });
  }
}

const htmlRows = rows
  .map((row, index) => {
    const specLink = row.relSpec ? `<a href="${row.relSpec}">spec</a>` : "";
    const singleLink = row.relIndex ? `<a href="${row.relIndex}">single</a>` : "";
    const exactLink = row.relExact ? `<a href="${row.relExact}">exact</a>` : "";
    const metric = row.metric
      ? `<span class="metric">avg ${esc(row.metric.avgRgbDelta)} / changed ${esc(row.metric.changedRatio)}</span>`
      : `<span class="metric muted">no diff yet</span>`;
    return `
      <section class="block-row" id="${esc(row.group)}-${esc(row.folder)}" style="--w:${row.width}px; --h:${row.height}px">
        <header class="block-header">
          <div>
            <span class="index">${String(index + 1).padStart(2, "0")}</span>
            <h2>${esc(row.groupTitle)} / ${esc(row.title)}</h2>
          </div>
          <nav>
            <code>${row.width} x ${row.height}</code>
            ${metric}
            ${singleLink}
            ${exactLink}
            ${specLink}
          </nav>
        </header>
        <div class="compare-pair">
          <div class="pane">
            <h3>Live DOM Layout</h3>
            <iframe src="${row.relLayout}" width="${row.width}" height="${row.height}" title="${esc(row.title)} HTML layout"></iframe>
          </div>
          <div class="pane">
            <h3>Original Crop</h3>
            <img src="${row.relRef}" width="${row.width}" height="${row.height}" alt="${esc(row.title)} original crop" />
          </div>
        </div>
      </section>`;
  })
  .join("\n");

fs.writeFileSync(
  path.join(root, "compare-all.css"),
  `:root {
  --bg: #03070b;
  --panel: rgba(7, 19, 25, 0.72);
  --line: rgba(103, 149, 164, 0.3);
  --text: #edf4f1;
  --muted: #98a6aa;
  --cyan: #17d6ff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 980px;
  color: var(--text);
  background:
    radial-gradient(900px 420px at 20% 0%, rgba(23, 214, 255, 0.08), transparent 70%),
    linear-gradient(180deg, #061017, var(--bg));
  font-family: "Segoe UI", Arial, sans-serif;
}

.page {
  padding: 24px 30px 52px;
}

.page-header {
  max-width: 1180px;
  margin-bottom: 24px;
}

.page-header h1 {
  margin: 0;
  font-size: 25px;
  line-height: 1.15;
}

.page-header p {
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.45;
}

.block-row {
  margin: 0 0 34px;
  padding: 16px;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.28);
}

.block-header {
  min-width: max-content;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 12px;
}

.block-header > div {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.index {
  color: var(--cyan);
  font-size: 13px;
  font-weight: 800;
}

.block-header h2 {
  margin: 0;
  font-size: 17px;
}

.block-header nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.block-header code,
.metric {
  color: var(--cyan);
}

.metric {
  font-size: 12px;
}

.muted {
  color: var(--muted);
}

a {
  color: #8ee8ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.compare-pair {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 28px;
  align-items: start;
  min-width: calc(var(--w) * 2 + 28px);
}

.pane h3 {
  margin: 0 0 10px;
  color: #c7d3d5;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .8px;
}

iframe,
img {
  display: block;
  width: var(--w);
  height: var(--h);
  border: 0;
  box-shadow: 0 0 0 1px var(--line), 0 18px 36px rgba(0, 0, 0, 0.38);
}
`
);

fs.writeFileSync(
  path.join(root, "compare-all.html"),
  `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Detail Blocks Live DOM v4 - HTML vs Original</title>
    <link rel="stylesheet" href="./compare-all.css" />
  </head>
  <body>
    <main class="page">
      <header class="page-header">
        <h1>Detail Blocks Live DOM v4: верстка vs оригинальный crop</h1>
        <p>
          Сравнения идут вертикально. В каждой строке слева live-DOM HTML/CSS-реконструкция,
          справа оригинальный PNG-crop. Raster допускается только для иконок, гербов,
          портретов и сложных декоративных элементов.
        </p>
      </header>
${htmlRows}
    </main>
  </body>
</html>
`
);

console.log(`Generated compare-all for ${rows.length} blocks.`);
