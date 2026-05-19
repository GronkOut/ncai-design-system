import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const iconsDir = resolve('icons');
const readme = readFileSync(join(iconsDir, 'README.md'), 'utf8');
const files = readdirSync(iconsDir).sort();
const svgFiles = files.filter((file) => file.endsWith('.svg'));
const svgFileSet = new Set(svgFiles);
const errors = [];
const readmeFiles = [];

for (const file of files) {
  if (file !== 'README.md' && !file.endsWith('.svg')) {
    errors.push(`${file}: unexpected file in icons directory`);
  }
}

for (const line of readme.split(/\r?\n/)) {
  const match = /^\|\s*(.+?)\s*\|\s*`(.+?\.svg)`\s*\|/.exec(line);
  if (match) {
    readmeFiles.push(match[2]);
  }
}

const readmeFileSet = new Set(readmeFiles);

if (readmeFiles.length !== readmeFileSet.size) {
  errors.push('README contains duplicate icon rows');
}

for (const file of readmeFiles) {
  if (!svgFileSet.has(file)) {
    errors.push(`${file}: README row points to a missing icon file`);
  }
}

for (const file of svgFiles) {
  const svg = readFileSync(join(iconsDir, file), 'utf8');

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.svg$/.test(file)) {
    errors.push(`${file}: file name must be lowercase kebab-case`);
  }

  if (!new RegExp(`<svg width="[^"]+" height="[^"]+" viewBox="[^"]+" fill="none" xmlns="http://www.w3.org/2000/svg">`).test(svg)) {
    errors.push(`${file}: svg root attributes are not normalized`);
  }

  if (/fill="#|fill="black"|fill="white"|stroke="#|stroke="black"|stroke="white"|style=|class=|opacity=/.test(svg)) {
    errors.push(`${file}: fixed color or presentation attributes found`);
  }

  if (!readmeFileSet.has(file)) {
    errors.push(`${file}: missing README row`);
  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(error);
  }
  process.exit(1);
}

console.log(`Validated ${svgFiles.length} icons.`);
