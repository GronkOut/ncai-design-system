declare module '@ncai/design-system-icons' {
  export type IconMetadata = {
    title: string;
    fileName: string;
    exportPath: string;
    width: number;
    height: number;
    viewBox: string;
  };

  export type IconFileName = IconMetadata['fileName'];

  export const icons: readonly IconMetadata[];

  export function getIcon(fileName: string): IconMetadata | undefined;

  export function searchIcons(query: string, limit?: number): readonly IconMetadata[];
}
