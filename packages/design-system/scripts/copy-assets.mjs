import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const source = resolve('../../resources/design-system.md');
const target = resolve('dist/design-system.md');

await mkdir(dirname(target), { recursive: true });
await copyFile(source, target);
