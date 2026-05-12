import { searchDesignSystem } from '@ncai/design-system';
import { searchIcons } from '@ncai/design-system-icons';

const baseUiComponents = [
  'accordion',
  'alert-dialog',
  'checkbox',
  'combobox',
  'dialog',
  'menu',
  'popover',
  'select',
  'switch',
  'tabs',
  'toast',
  'tooltip'
] as const;

const aliases: Record<string, string[]> = {
  'alert-dialog': ['alert', 'confirm', 'confirmation', 'destructive', '확인', '삭제'],
  checkbox: ['check', '체크', '선택'],
  combobox: ['autocomplete', 'search select', '검색', '자동완성'],
  dialog: ['modal', '모달', 'dialog', '다이얼로그'],
  menu: ['dropdown', '드롭다운', '메뉴'],
  popover: ['flyout', 'popup', '팝오버', '알림'],
  select: ['selectbox', '셀렉트', '선택상자'],
  switch: ['toggle', '토글', '스위치'],
  tabs: ['tab', '탭'],
  tooltip: ['hint', '도움말', '툴팁']
};

export function composeBaseUiRecipe(query: string) {
  const normalizedQuery = query.toLowerCase();
  const components = baseUiComponents.filter((component) => {
    const words = [component, ...(aliases[component] ?? [])];
    return words.some((word) => normalizedQuery.includes(word.toLowerCase()));
  });
  const designSections = searchDesignSystem(query, 5);
  const iconMatches = searchIcons(query, 8);

  return {
    query,
    baseUiPackage: '@base-ui/react',
    components,
    baseUiDocs: components.map((component) => ({
      component,
      url: `https://base-ui.com/react/components/${component}.md`,
      tool: 'get_base_ui_component_doc'
    })),
    designSections: designSections.map((section) => ({
      title: section.title,
      slug: section.slug,
      excerpt: section.content.slice(0, 700)
    })),
    icons: iconMatches.map((icon) => ({
      title: icon.title,
      fileName: icon.fileName,
      exportPath: icon.exportPath
    })),
    steps: [
      'Base UI에서 가장 가까운 primitive를 고른다.',
      '필요한 경우 get_base_ui_component_doc 또는 search_base_ui_docs로 최신 Base UI API 문서를 확인한다.',
      'Base UI의 Root/Trigger/Portal/Positioner/Popup 같은 접근성 구조를 유지한다.',
      'design-system.md의 관련 섹션에서 색상, typography, spacing, radius, elevation 근거를 찾는다.',
      '아이콘이 필요하면 search_icons 또는 @ncai/design-system-icons 메타데이터에서 기존 SVG를 먼저 찾는다.',
      '소비자 프로젝트의 기존 스타일 방식으로 해당 근거를 className/CSS에 반영한다.',
      '완성 후 validate_ui_code로 이전 패키지명, 근거 없는 색상, inline style 사용 여부를 점검한다.'
    ]
  };
}
