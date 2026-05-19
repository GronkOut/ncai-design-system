import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';

type IconMetadata = {
  title: string;
  fileName: string;
  exportPath: string;
  width: number;
  height: number;
  viewBox: string;
};

const packageRoot = resolve(import.meta.dirname, '..');
const iconsDir = join(packageRoot, 'icons');
const readmePath = join(iconsDir, 'README.md');
const outputPath = join(packageRoot, 'src', 'generated-icons.ts');
const checkOnly = process.argv.includes('--check');

const readme = readFileSync(readmePath, 'utf8');
const titleByFileName = new Map<string, string>();

for (const line of readme.split(/\r?\n/)) {
  const match = /^\|\s*(.+?)\s*\|\s*`(.+?\.svg)`\s*\|/.exec(line);
  if (match) {
    titleByFileName.set(match[2], match[1]);
  }
}

const icons: IconMetadata[] = readdirSync(iconsDir)
  .filter((fileName) => fileName.endsWith('.svg'))
  .sort((a, b) => a.localeCompare(b))
  .map((fileName) => {
    const svg = readFileSync(join(iconsDir, fileName), 'utf8');
    const width = Number(readAttribute(svg, 'width') ?? 24);
    const height = Number(readAttribute(svg, 'height') ?? 24);
    const viewBox = readAttribute(svg, 'viewBox') ?? `0 0 ${width} ${height}`;

    return {
      title: titleByFileName.get(fileName) ?? titleFromFileName(fileName),
      fileName,
      exportPath: `@ncai/design-system-icons/icons/${fileName}`,
      width,
      height,
      viewBox
    };
  });

const nextReadme = renderReadme(icons);

const source = `export type IconMetadata = {
  title: string;
  fileName: string;
  exportPath: string;
  width: number;
  height: number;
  viewBox: string;
};

export const icons = ${JSON.stringify(icons, null, 2)} as const satisfies readonly IconMetadata[];

export type IconFileName = (typeof icons)[number]['fileName'];

export function getIcon(fileName: string) {
  return icons.find((icon) => icon.fileName === fileName);
}

export function searchIcons(query: string, limit = 20) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return icons.slice(0, limit);
  }

  const terms = normalizedQuery.split(/\\s+/).filter(Boolean);
  return icons
    .map((icon) => {
      const haystack = \`\${icon.title}\\n\${icon.fileName}\`.toLowerCase();
      const score = terms.reduce((total, term) => total + countOccurrences(haystack, term), 0);
      return { icon, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.icon.title.localeCompare(b.icon.title))
    .slice(0, limit)
    .map((item) => item.icon);
}

function countOccurrences(value: string, term: string) {
  let count = 0;
  let index = value.indexOf(term);

  while (index >= 0) {
    count += 1;
    index = value.indexOf(term, index + term.length);
  }

  return count;
}
`;

if (checkOnly) {
  const mismatches = [];

  if (normalizeLineEndings(readFileSync(readmePath, 'utf8')) !== normalizeLineEndings(nextReadme)) {
    mismatches.push(basename(readmePath));
  }

  if (normalizeLineEndings(readFileSync(outputPath, 'utf8')) !== normalizeLineEndings(source)) {
    mismatches.push(basename(outputPath));
  }

  if (mismatches.length > 0) {
    console.error(`Icon generated files are out of date: ${mismatches.join(', ')}`);
    console.error('Run pnpm --filter @ncai/design-system-icons build to regenerate them.');
    process.exit(1);
  }

  console.log(`Checked ${icons.length} generated icons.`);
} else {
  writeFileSync(readmePath, nextReadme, 'utf8');
  writeFileSync(outputPath, source, 'utf8');
  console.log(`Generated ${basename(outputPath)} for ${icons.length} icons.`);
}

function readAttribute(svg: string, name: string) {
  return new RegExp(`${name}="([^"]+)"`).exec(svg)?.[1];
}

function titleFromFileName(fileName: string) {
  return fileName
    .replace(/\.svg$/, '')
    .replace(/^ic_/, '')
    .split(/[_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function renderReadme(icons: IconMetadata[]) {
  const rows = icons
    .map(
      (icon) =>
        `| ${icon.title} | \`${icon.fileName}\` | <img src="./${icon.fileName}" alt="${icon.title}" width="24" height="24" /> |`
    )
    .join('\n');

  return `# Icons

SVG icons normalized for \`currentColor\` usage.

| Title | File name | Preview |
| --- | --- | --- |
${rows}
`;
}

function normalizeLineEndings(value: string) {
  return value.replace(/\r\n/g, '\n');
}
