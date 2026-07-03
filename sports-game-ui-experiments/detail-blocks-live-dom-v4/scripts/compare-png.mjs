import fs from "node:fs";
import zlib from "node:zlib";

function readPng(file) {
  const buf = fs.readFileSync(file);
  if (buf.toString("hex", 0, 8) !== "89504e470d0a1a0a") {
    throw new Error(`Not a PNG: ${file}`);
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let colorType = 0;
  const idat = [];

  while (offset < buf.length) {
    const length = buf.readUInt32BE(offset);
    const type = buf.toString("ascii", offset + 4, offset + 8);
    const data = buf.subarray(offset + 8, offset + 8 + length);
    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      const bitDepth = data[8];
      colorType = data[9];
      if (bitDepth !== 8 || ![2, 6].includes(colorType)) {
        throw new Error(`Unsupported PNG format in ${file}: bitDepth=${bitDepth}, colorType=${colorType}`);
      }
    } else if (type === "IDAT") {
      idat.push(data);
    } else if (type === "IEND") {
      break;
    }
    offset += 12 + length;
  }

  const channels = colorType === 6 ? 4 : 3;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const out = Buffer.alloc(width * height * 4);
  let rawOffset = 0;
  let prev = Buffer.alloc(stride);

  for (let y = 0; y < height; y++) {
    const filter = raw[rawOffset++];
    const row = Buffer.from(raw.subarray(rawOffset, rawOffset + stride));
    rawOffset += stride;
    for (let x = 0; x < stride; x++) {
      const left = x >= channels ? row[x - channels] : 0;
      const up = prev[x] || 0;
      const upLeft = x >= channels ? prev[x - channels] || 0 : 0;
      let value = row[x];
      if (filter === 1) value = (value + left) & 255;
      else if (filter === 2) value = (value + up) & 255;
      else if (filter === 3) value = (value + Math.floor((left + up) / 2)) & 255;
      else if (filter === 4) {
        const p = left + up - upLeft;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - upLeft);
        value = (value + (pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft)) & 255;
      } else if (filter !== 0) {
        throw new Error(`Unsupported PNG filter ${filter} in ${file}`);
      }
      row[x] = value;
    }
    for (let x = 0; x < width; x++) {
      const src = x * channels;
      const dst = (y * width + x) * 4;
      out[dst] = row[src];
      out[dst + 1] = row[src + 1];
      out[dst + 2] = row[src + 2];
      out[dst + 3] = channels === 4 ? row[src + 3] : 255;
    }
    prev = row;
  }
  return { width, height, data: out };
}

const [actualFile, expectedFile] = process.argv.slice(2);
if (!actualFile || !expectedFile) {
  console.error("Usage: node compare-png.mjs actual.png expected.png");
  process.exit(2);
}

const actual = readPng(actualFile);
const expected = readPng(expectedFile);
if (actual.width !== expected.width || actual.height !== expected.height) {
  throw new Error(`Size mismatch: actual ${actual.width}x${actual.height}, expected ${expected.width}x${expected.height}`);
}

let sum = 0;
let max = 0;
let changed = 0;
const pixels = actual.width * actual.height;
for (let i = 0; i < pixels; i++) {
  const idx = i * 4;
  const d =
    Math.abs(actual.data[idx] - expected.data[idx]) +
    Math.abs(actual.data[idx + 1] - expected.data[idx + 1]) +
    Math.abs(actual.data[idx + 2] - expected.data[idx + 2]);
  sum += d;
  if (d > max) max = d;
  if (d > 24) changed++;
}

console.log(JSON.stringify({
  width: actual.width,
  height: actual.height,
  pixels,
  avgRgbDelta: Number((sum / pixels / 3).toFixed(3)),
  changedPixelsOver24: changed,
  changedRatio: Number((changed / pixels).toFixed(4)),
  maxRgbTripletDelta: max
}, null, 2));
