import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export type DesignSystemSection = {
  level: number;
  title: string;
  slug: string;
  content: string;
};

export type DesignSystemDocument = {
  name: string;
  version: string;
  source: string;
  markdown: string;
  sections: DesignSystemSection[];
};

const designSystemMarkdown = readDesignSystemMarkdown();

export const designSystem: DesignSystemDocument = {
  name: 'NC AI Design System',
  version: '0.9.0',
  source: 'resources/design-system.md',
  markdown: designSystemMarkdown,
  sections: parseDesignSystemMarkdown(designSystemMarkdown)
};

export function parseDesignSystemMarkdown(markdown: string): DesignSystemSection[] {
  const lines = markdown.split(/\r?\n/);
  const sections: DesignSystemSection[] = [];
  let current: DesignSystemSection | undefined;

  for (const line of lines) {
    const heading = /^(#{2,4})\s+(.+?)\s*$/.exec(line);
    if (heading) {
      if (current) {
        current.content = current.content.trim();
        sections.push(current);
      }

      current = {
        level: heading[1].length,
        title: heading[2],
        slug: slugify(heading[2]),
        content: ''
      };
      continue;
    }

    if (current) {
      current.content += `${line}\n`;
    }
  }

  if (current) {
    current.content = current.content.trim();
    sections.push(current);
  }

  return sections;
}

export function getDesignSystemSection(slugOrTitle: string) {
  const normalized = slugify(slugOrTitle);
  return designSystem.sections.find((section) => section.slug === normalized || slugify(section.title) === normalized);
}

export function searchDesignSystem(query: string, limit = 8) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return designSystem.sections.slice(0, limit);
  }

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  return designSystem.sections
    .map((section) => {
      const haystack = `${section.title}\n${section.content}`.toLowerCase();
      const score = terms.reduce((total, term) => total + countOccurrences(haystack, term), 0);
      return { section, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.section.title.localeCompare(b.section.title))
    .slice(0, limit)
    .map((item) => item.section);
}

export const baseUiGuidance = {
  packageName: '@base-ui/react',
  install: {
    npm: 'npm i @base-ui/react',
    pnpm: 'pnpm add @base-ui/react',
    yarn: 'yarn add @base-ui/react',
    bun: 'bun add @base-ui/react'
  },
  rules: [
    'Use Base UI primitives before inventing custom interactive components.',
    'Import component primitives from their Base UI subpath, for example @base-ui/react/popover.',
    'Apply NC AI design-system.md decisions in the consuming app at implementation time.',
    'Keep Base UI accessibility structure intact while changing visual classes or CSS.'
  ]
} as const;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/`|\{|\}/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '');
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

function readDesignSystemMarkdown() {
  const candidates = [
    new URL('./design-system.md', import.meta.url),
    resolve(process.cwd(), 'resources/design-system.md'),
    resolve(process.cwd(), '../../resources/design-system.md')
  ];

  for (const candidate of candidates) {
    if (candidate instanceof URL) {
      try {
        return readFileSync(candidate, 'utf8');
      } catch {
        continue;
      }
    }

    if (existsSync(candidate)) {
      return readFileSync(candidate, 'utf8');
    }
  }

  throw new Error('NC AI design-system.md를 찾을 수 없습니다.');
}
