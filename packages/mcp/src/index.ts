#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { baseUiGuidance, designSystem, getDesignSystemSection, searchDesignSystem } from '@ncai/design-system';
import { getIcon, icons, searchIcons } from '@ncai/design-system-icons';
import { z } from 'zod';
import { getBaseUiComponentDoc, getBaseUiDoc, listBaseUiDocs, searchBaseUiDocs } from './base-ui-docs';
import { composeBaseUiRecipe } from './recipe';
import { validateUiCode } from './validation';

const server = new McpServer(
  {
    name: 'ncai-design-system',
    version: '0.5.0'
  },
  {
    instructions:
      'Use Base UI primitives from @base-ui/react first, then apply NC AI design-system.md guidance in the consuming app. Query this MCP server before generating or reviewing UI.'
  }
);

server.registerTool(
  'get_design_system_overview',
  {
    title: 'Get NC AI design system overview',
    description: 'Return the design-system.md metadata and top-level sections.'
  },
  async () => {
    const overview = {
      name: designSystem.name,
      version: designSystem.version,
      source: designSystem.source,
      sections: designSystem.sections.map(({ level, title, slug }) => ({ level, title, slug }))
    };

    return {
      content: [{ type: 'text', text: JSON.stringify(overview, null, 2) }],
      structuredContent: overview
    };
  }
);

server.registerTool(
  'search_design_system',
  {
    title: 'Search NC AI design-system.md',
    description: 'Search markdown design-system sections for visual guidance.',
    inputSchema: {
      query: z.string(),
      limit: z.number().int().positive().max(20).optional()
    }
  },
  async ({ query, limit }) => {
    const sections = searchDesignSystem(query, limit ?? 8);

    return {
      content: [{ type: 'text', text: JSON.stringify({ sections }, null, 2) }],
      structuredContent: { sections }
    };
  }
);

server.registerTool(
  'get_design_system_section',
  {
    title: 'Get NC AI design-system section',
    description: 'Return one section from design-system.md by slug or title.',
    inputSchema: {
      slugOrTitle: z.string()
    }
  },
  async ({ slugOrTitle }) => {
    const section = getDesignSystemSection(slugOrTitle);

    return {
      content: [{ type: 'text', text: JSON.stringify({ section }, null, 2) }],
      structuredContent: { section }
    };
  }
);

server.registerTool(
  'get_base_ui_guidance',
  {
    title: 'Get Base UI integration guidance',
    description: 'Return current Base UI package name, install commands, and NC AI usage rules.'
  },
  async () => ({
    content: [{ type: 'text', text: JSON.stringify(baseUiGuidance, null, 2) }],
    structuredContent: baseUiGuidance
  })
);

server.registerTool(
  'list_icons',
  {
    title: 'List NC AI SVG icons',
    description: 'Return available NC AI design-system icons with titles, file names, and package export paths.',
    inputSchema: {
      limit: z.number().int().positive().max(200).optional()
    }
  },
  async ({ limit }) => {
    const result = icons.slice(0, limit ?? 100);

    return {
      content: [{ type: 'text', text: JSON.stringify({ icons: result }, null, 2) }],
      structuredContent: { icons: result }
    };
  }
);

server.registerTool(
  'search_icons',
  {
    title: 'Search NC AI SVG icons',
    description: 'Search NC AI icon metadata by title or file name.',
    inputSchema: {
      query: z.string(),
      limit: z.number().int().positive().max(100).optional()
    }
  },
  async ({ query, limit }) => {
    const result = searchIcons(query, limit ?? 20);

    return {
      content: [{ type: 'text', text: JSON.stringify({ icons: result }, null, 2) }],
      structuredContent: { icons: result }
    };
  }
);

server.registerTool(
  'get_icon',
  {
    title: 'Get NC AI SVG icon metadata',
    description: 'Return one NC AI icon by SVG file name, for example user.svg.',
    inputSchema: {
      fileName: z.string()
    }
  },
  async ({ fileName }) => {
    const icon = getIcon(fileName);

    return {
      content: [{ type: 'text', text: JSON.stringify({ icon }, null, 2) }],
      structuredContent: { icon }
    };
  }
);

server.registerTool(
  'list_base_ui_docs',
  {
    title: 'List Base UI markdown docs',
    description: 'List Base UI docs from the official llms.txt index.'
  },
  async () => {
    const docs = await listBaseUiDocs();

    return {
      content: [{ type: 'text', text: JSON.stringify({ docs }, null, 2) }],
      structuredContent: { docs }
    };
  }
);

server.registerTool(
  'search_base_ui_docs',
  {
    title: 'Search Base UI docs',
    description: 'Search the official Base UI llms.txt index for relevant docs.',
    inputSchema: {
      query: z.string(),
      limit: z.number().int().positive().max(20).optional()
    }
  },
  async ({ query, limit }) => {
    const docs = await searchBaseUiDocs(query, limit ?? 8);

    return {
      content: [{ type: 'text', text: JSON.stringify({ docs }, null, 2) }],
      structuredContent: { docs }
    };
  }
);

server.registerTool(
  'get_base_ui_doc',
  {
    title: 'Get Base UI markdown doc',
    description: 'Fetch a Base UI markdown doc by slug, title, or base-ui.com URL.',
    inputSchema: {
      slugOrUrl: z.string()
    }
  },
  async ({ slugOrUrl }) => {
    const doc = await getBaseUiDoc(slugOrUrl);

    return {
      content: [{ type: 'text', text: doc.markdown }],
      structuredContent: doc
    };
  }
);

server.registerTool(
  'get_base_ui_component_doc',
  {
    title: 'Get Base UI component doc',
    description: 'Fetch a Base UI component markdown doc by component name, for example accordion or popover.',
    inputSchema: {
      component: z.string()
    }
  },
  async ({ component }) => {
    const doc = await getBaseUiComponentDoc(component);

    return {
      content: [{ type: 'text', text: doc.markdown }],
      structuredContent: doc
    };
  }
);

server.registerTool(
  'compose_base_ui_recipe',
  {
    title: 'Compose a Base UI implementation recipe',
    description: 'Return a Base UI-first implementation plan with relevant design-system.md sections.',
    inputSchema: {
      query: z.string()
    }
  },
  async ({ query }) => {
    const recipe = composeBaseUiRecipe(query);

    return {
      content: [{ type: 'text', text: JSON.stringify(recipe, null, 2) }],
      structuredContent: recipe
    };
  }
);

server.registerTool(
  'validate_ui_code',
  {
    title: 'Validate NC AI UI code',
    description: 'Detect outdated Base UI imports and design-system guardrail issues.',
    inputSchema: {
      code: z.string()
    }
  },
  async ({ code }) => {
    const result = validateUiCode(code);

    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      structuredContent: result
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
