import { describe, expect, it, vi } from 'vitest';
import { getBaseUiComponentDoc, listBaseUiDocs, searchBaseUiDocs } from './base-ui-docs';

const llms = `# Base UI

## Components

- [Accordion](https://base-ui.com/react/components/accordion.md): A high-quality, unstyled React accordion component.
- [Popover](https://base-ui.com/react/components/popover.md): A high-quality, unstyled React popover component.

## Handbook

- [Styling](https://base-ui.com/react/handbook/styling.md): Learn how to style Base UI components.
`;

describe('base-ui-docs', () => {
  it('lists docs from llms.txt', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(llms))
    );

    const docs = await listBaseUiDocs();

    expect(docs.map((doc) => doc.slug)).toContain('accordion');
    expect(docs.find((doc) => doc.slug === 'styling')?.category).toBe('handbook');
  });

  it('searches the Base UI docs index', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(llms))
    );

    const docs = await searchBaseUiDocs('popover');

    expect(docs[0]?.title).toBe('Popover');
  });

  it('fetches a component markdown document', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string | URL) => {
        const url = String(input);
        if (url.endsWith('/llms.txt')) return new Response(llms);
        return new Response('# Accordion\n\nAPI docs');
      })
    );

    const doc = await getBaseUiComponentDoc('accordion');

    expect(doc.url).toBe('https://base-ui.com/react/components/accordion.md');
    expect(doc.markdown).toContain('API docs');
  });
});
