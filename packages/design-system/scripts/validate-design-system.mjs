import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const markdown = await readFile(resolve('../../resources/design-system.md'), 'utf8');
const requiredSections = ['Overview', 'Colors', 'Typography', 'Layout', 'Components', "Do's and Don'ts"];
const missing = requiredSections.filter((section) => !markdown.includes(`## ${section}`));

if (missing.length > 0) {
  console.error(`design-system.md 필수 섹션이 없습니다: ${missing.join(', ')}`);
  process.exit(1);
}

if (!/\{[a-z]+\.[^}]+\}/.test(markdown)) {
  console.error('design-system.md에서 {category.token} 형식의 디자인 토큰 참조를 찾지 못했습니다.');
  process.exit(1);
}

console.log('design-system.md 구조 검증을 통과했습니다.');
