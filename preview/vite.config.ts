import react from '@vitejs/plugin-react';
import { readdirSync, readFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const virtualIconsId = 'virtual:ncai-design-system-icons';
const resolvedVirtualIconsId = `\0${virtualIconsId}`;
const packageRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const iconsPackageRoot = join(packageRoot, 'packages', 'icons');
const iconsDir = join(iconsPackageRoot, 'icons');
const iconsReadmePath = join(iconsDir, 'README.md');

export default defineConfig({
  plugins: [previewIconsPlugin(), react()],
  build: {
    chunkSizeWarningLimit: 3500
  },
  server: {
    port: 4173,
    strictPort: false
  }
});

function previewIconsPlugin(): Plugin {
  return {
    name: 'preview-icons-from-source',
    enforce: 'pre',
    resolveId(id) {
      if (id === '@ncai/design-system-icons') {
        return resolvedVirtualIconsId;
      }
    },
    load(id) {
      if (id !== resolvedVirtualIconsId) {
        return;
      }

      this.addWatchFile(iconsReadmePath);

      const icons = loadIconMetadata();

      for (const icon of icons) {
        this.addWatchFile(join(iconsDir, icon.fileName));
      }

      return renderIconsModule(icons);
    },
    configureServer(server) {
      server.watcher.add(iconsDir);
    },
    handleHotUpdate(ctx) {
      if (!ctx.file.startsWith(iconsDir)) {
        return;
      }

      const virtualModule = ctx.server.moduleGraph.getModuleById(resolvedVirtualIconsId);

      if (virtualModule) {
        ctx.server.moduleGraph.invalidateModule(virtualModule);
        return [virtualModule];
      }
    }
  };
}

type IconMetadata = {
  title: string;
  fileName: string;
  exportPath: string;
  width: number;
  height: number;
  viewBox: string;
};

function loadIconMetadata() {
  const titleByFileName = new Map<string, string>();

  for (const line of readFileSync(iconsReadmePath, 'utf8').split(/\r?\n/)) {
    const match = /^\|\s*(.+?)\s*\|\s*`(.+?\.svg)`\s*\|/.exec(line);

    if (match) {
      titleByFileName.set(match[2], match[1]);
    }
  }

  return readdirSync(iconsDir)
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
}

function renderIconsModule(icons: IconMetadata[]) {
  return `export const icons = ${JSON.stringify(icons, null, 2)};

export function getIcon(fileName) {
  return icons.find((icon) => icon.fileName === fileName);
}

export function searchIcons(query, limit = 20) {
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

function countOccurrences(value, term) {
  let count = 0;
  let index = value.indexOf(term);

  while (index >= 0) {
    count += 1;
    index = value.indexOf(term, index + term.length);
  }

  return count;
}
`;
}

function readAttribute(svg: string, name: string) {
  return new RegExp(`${name}="([^"]+)"`).exec(svg)?.[1];
}

function titleFromFileName(fileName: string) {
  return basename(fileName, '.svg')
    .replace(/^ic_/, '')
    .split(/[_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
