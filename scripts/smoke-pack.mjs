import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const packages = ['design-system', 'icons', 'skills', 'mcp', 'cli'];
const tempDir = await mkdtemp(join(tmpdir(), 'ncai-design-system-pack-'));

try {
  for (const name of packages) {
    const result = spawnSync('pnpm', ['--filter', `@ncai/design-system${name === 'design-system' ? '' : `-${name}`}`, 'pack', '--pack-destination', tempDir], {
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });

    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  }

  console.log(`Package smoke test completed: ${tempDir}`);
} finally {
  await rm(tempDir, { recursive: true, force: true });
}
