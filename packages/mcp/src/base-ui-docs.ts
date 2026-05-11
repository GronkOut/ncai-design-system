const baseUiRoot = 'https://base-ui.com';
const llmsUrl = `${baseUiRoot}/llms.txt`;
const cache = new Map<string, string>();

export type BaseUiDocEntry = {
  title: string;
  url: string;
  description: string;
  category: 'overview' | 'handbook' | 'components' | 'utilities' | 'unknown';
  slug: string;
};

export type BaseUiDoc = BaseUiDocEntry & {
  markdown: string;
};

export async function listBaseUiDocs() {
  const llms = await fetchText(llmsUrl);
  return parseLlmsIndex(llms);
}

export async function searchBaseUiDocs(query: string, limit = 8) {
  const entries = await listBaseUiDocs();
  const terms = tokenize(query);

  if (terms.length === 0) {
    return entries.slice(0, limit);
  }

  return entries
    .map((entry) => {
      const haystack = `${entry.title} ${entry.description} ${entry.slug} ${entry.category}`.toLowerCase();
      const score = terms.reduce((total, term) => total + countOccurrences(haystack, term), 0);
      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((item) => item.entry);
}

export async function getBaseUiDoc(slugOrUrl: string): Promise<BaseUiDoc> {
  const entries = await listBaseUiDocs();
  const normalized = normalizeSlug(slugOrUrl);
  const entry =
    entries.find((item) => item.url === slugOrUrl) ??
    entries.find((item) => item.slug === normalized || normalizeSlug(item.title) === normalized);

  if (!entry) {
    const directUrl = toBaseUiMarkdownUrl(slugOrUrl);
    return {
      title: slugOrUrl,
      url: directUrl,
      description: 'Direct Base UI markdown document.',
      category: 'unknown',
      slug: normalized,
      markdown: await fetchText(directUrl)
    };
  }

  return {
    ...entry,
    markdown: await fetchText(entry.url)
  };
}

export async function getBaseUiComponentDoc(component: string) {
  const slug = normalizeSlug(component);
  return getBaseUiDoc(`${baseUiRoot}/react/components/${slug}.md`);
}

function parseLlmsIndex(markdown: string): BaseUiDocEntry[] {
  const entries: BaseUiDocEntry[] = [];
  let category: BaseUiDocEntry['category'] = 'unknown';

  for (const line of markdown.split(/\r?\n/)) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading) {
      category = normalizeCategory(heading[1]);
      continue;
    }

    const match = /^-\s+\[(.+?)\]\((https:\/\/base-ui\.com\/.+?\.md)\):?\s*(.*)$/.exec(line);
    if (!match) continue;

    entries.push({
      title: match[1],
      url: match[2],
      description: match[3] ?? '',
      category,
      slug: normalizeSlug(match[1])
    });
  }

  return entries;
}

function normalizeCategory(value: string): BaseUiDocEntry['category'] {
  const normalized = value.toLowerCase();
  if (normalized.includes('overview')) return 'overview';
  if (normalized.includes('handbook')) return 'handbook';
  if (normalized.includes('component')) return 'components';
  if (normalized.includes('utilit')) return 'utilities';
  return 'unknown';
}

function toBaseUiMarkdownUrl(value: string) {
  if (value.startsWith('https://base-ui.com/') && value.endsWith('.md')) return value;
  if (value.startsWith('https://base-ui.com/')) return `${value.replace(/\/$/, '')}.md`;

  const slug = normalizeSlug(value);
  return `${baseUiRoot}/react/components/${slug}.md`;
}

function normalizeSlug(value: string) {
  return value
    .replace(/^https:\/\/base-ui\.com\/react\/(?:components|overview|handbook|utils)\//, '')
    .replace(/\.md$/, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function tokenize(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9가-힣]+/)
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);
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

async function fetchText(url: string) {
  const cached = cache.get(url);
  if (cached) return cached;

  const response = await fetch(url, {
    headers: {
      accept: 'text/markdown,text/plain,*/*'
    }
  });

  if (!response.ok) {
    throw new Error(`Base UI 문서를 가져오지 못했습니다: ${url} (${response.status})`);
  }

  const text = await response.text();
  cache.set(url, text);
  return text;
}
