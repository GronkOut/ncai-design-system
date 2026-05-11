import { readFileSync, writeFileSync } from 'node:fs';

const rootPackagePath = 'package.json';
const packagePaths = [
  'packages/design-system/package.json',
  'packages/cli/package.json',
  'packages/mcp/package.json',
  'packages/skills/package.json'
];

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function replaceOnce(path, pattern, replacement) {
  const source = readFileSync(path, 'utf8');

  if (!pattern.test(source)) {
    throw new Error(`No version target matched in ${path}`);
  }

  const next = source.replace(pattern, replacement);
  writeFileSync(path, next);
}

const packages = packagePaths.map((path) => ({ path, json: readJson(path) }));
const versions = new Set(packages.map(({ json }) => json.version));

if (versions.size !== 1) {
  throw new Error(
    `Package versions are not aligned: ${packages
      .map(({ path, json }) => `${path}=${json.version}`)
      .join(', ')}`
  );
}

const [version] = versions;
const rootPackage = readJson(rootPackagePath);
rootPackage.version = version;
writeJson(rootPackagePath, rootPackage);

replaceOnce(
  'packages/design-system/src/index.ts',
  /version: '[^']+'/,
  `version: '${version}'`
);

replaceOnce(
  'packages/mcp/src/index.ts',
  /version: '[^']+'/,
  `version: '${version}'`
);

console.log(`Synced workspace runtime versions to ${version}.`);
