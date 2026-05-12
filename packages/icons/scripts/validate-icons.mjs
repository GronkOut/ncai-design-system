import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const iconsDir = resolve('icons');
const readme = readFileSync(join(iconsDir, 'README.md'), 'utf8');
const svgFiles = readdirSync(iconsDir).filter((file) => file.endsWith('.svg')).sort();
const errors = [];

for (const file of svgFiles) {
  const svg = readFileSync(join(iconsDir, file), 'utf8');

  if (!new RegExp(`<svg width="[^"]+" height="[^"]+" viewBox="[^"]+" fill="none" xmlns="http://www.w3.org/2000/svg">`).test(svg)) {
    errors.push(`${file}: svg root attributes are not normalized`);
  }

  if (/fill="#|fill="black"|fill="white"|stroke="#|stroke="black"|stroke="white"|style=|class=|opacity=/.test(svg)) {
    errors.push(`${file}: fixed color or presentation attributes found`);
  }

  if (!readme.includes(`\`${file}\``)) {
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
