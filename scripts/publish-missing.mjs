import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const isDryRun = process.argv.includes('--dry-run');
const packageManager = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';

const packages = [
  'packages/design-system',
  'packages/skills',
  'packages/mcp',
  'packages/cli',
];

async function isPublished(packageName, version) {
  const response = await fetch(
    `https://registry.npmjs.org/${encodeURIComponent(packageName)}`,
  );

  if (response.status === 404) {
    return false;
  }

  if (!response.ok) {
    throw new Error(
      `Unable to check ${packageName}: ${response.status} ${response.statusText}`,
    );
  }

  const metadata = await response.json();
  return Boolean(metadata.versions?.[version]);
}

for (const packageDir of packages) {
  const packageJsonPath = join(packageDir, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  const spec = `${packageJson.name}@${packageJson.version}`;

  if (await isPublished(packageJson.name, packageJson.version)) {
    console.log(`Skipping ${spec}; already published.`);
    continue;
  }

  if (isDryRun) {
    console.log(`Would publish ${spec}.`);
    continue;
  }

  console.log(`Publishing ${spec}...`);
  execFileSync(
    packageManager,
    [
      '--filter',
      packageJson.name,
      'publish',
      '--access',
      'public',
      '--no-git-checks',
    ],
    { shell: process.platform === 'win32', stdio: 'inherit' },
  );
}
