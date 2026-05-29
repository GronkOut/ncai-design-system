import { searchDesignSystem } from '@ncai/design-system';
import { searchIcons } from '@ncai/design-system-icons';

const baseUiComponents = [
  'accordion',
  'alert-dialog',
  'avatar',
  'checkbox',
  'checkbox-group',
  'collapsible',
  'combobox',
  'context-menu',
  'dialog',
  'field',
  'fieldset',
  'form',
  'menu',
  'meter',
  'navigation-menu',
  'number-field',
  'otp-field',
  'popover',
  'preview-card',
  'progress',
  'radio',
  'scroll-area',
  'select',
  'separator',
  'slider',
  'switch',
  'tabs',
  'toast',
  'toggle',
  'toggle-group',
  'toolbar',
  'tooltip'
] as const;

const aliases: Record<string, string[]> = {
  'alert-dialog': ['alert', 'confirm', 'confirmation', 'destructive', '확인', '삭제'],
  avatar: ['profile image', '아바타', '프로필'],
  checkbox: ['check', '체크', '선택'],
  'checkbox-group': ['checkbox list', '체크박스 그룹'],
  collapsible: ['disclosure', '접기', '펼치기'],
  combobox: ['autocomplete', 'search select', '검색', '자동완성'],
  'context-menu': ['right click', 'context', '컨텍스트', '우클릭'],
  dialog: ['modal', '모달', '다이얼로그'],
  field: ['form field', 'label', 'text input', 'clearable input', 'search input', '필드', '라벨', '입력', '입력 필드'],
  fieldset: ['field group', '필드셋'],
  form: ['폼'],
  menu: ['dropdown', '드롭다운', '메뉴'],
  meter: ['gauge', '게이지', '미터'],
  'navigation-menu': ['nav menu', 'mega menu', '내비게이션 메뉴', '네비게이션'],
  'number-field': ['number input', 'stepper', '숫자 입력', '스테퍼'],
  'otp-field': ['otp', 'one time password', '인증번호', '인증 코드'],
  popover: ['flyout', 'popup', '팝오버', '알림'],
  'preview-card': ['hover card', 'link preview', '미리보기'],
  progress: ['progress bar', '진행률', '진행 바'],
  radio: ['radio button', 'radio group', '라디오'],
  'scroll-area': ['custom scrollbar', '스크롤'],
  select: ['selectbox', '셀렉트', '선택상자'],
  separator: ['divider', '구분선', '디바이더'],
  slider: ['range', 'range slider', '슬라이더', '범위'],
  switch: ['스위치', '토글 스위치'],
  tabs: ['tab', '탭'],
  toast: ['snackbar', '토스트', '스낵바'],
  toggle: ['toggle button', '토글'],
  'toggle-group': ['segmented', 'segment control', '세그먼트', '토글 그룹'],
  toolbar: ['action bar', '툴바'],
  tooltip: ['hint', '도움말', '툴팁']
};

type BaseUiComponent = (typeof baseUiComponents)[number];
type CompositionRecipe = {
  id: string;
  matches: string[];
  components: BaseUiComponent[];
  icons: string[];
  summary: string;
  steps: string[];
};

const compositionRecipes: CompositionRecipe[] = [
  {
    id: 'date-picker',
    matches: ['date picker', 'datepicker', 'date range', 'calendar picker', 'calendar', '날짜', '달력', '기간', '구간'],
    components: ['field', 'popover', 'select'],
    icons: ['calendar.svg'],
    summary:
      'Base UI에는 완성형 Date Picker primitive가 없으므로 Field + Popover + Button + Select를 조합하고 calendar grid/date math만 로컬 로직으로 구현합니다.',
    steps: [
      'Trigger는 button-secondary 형태로 만들고 calendar icon과 선택값/placeholder를 표시한다.',
      'Popover 안에는 이전/다음 44px 버튼과 Base UI Select 기반 연도 -> 월 드롭다운을 둔다.',
      '날짜 grid는 필요한 주(row)만 렌더링하고, 오늘/선택일/구간 내부 상태를 각각 분리해 표시한다.',
      '단일 날짜는 선택 전 placeholder를 유지하고, 구간 선택은 첫 클릭 시작일/두 번째 클릭 종료일로 처리하며 역순 선택은 정렬한다.',
      'Date Picker, Popover, Field, Select 섹션의 typography, radius, focus, floating surface 규칙을 적용한다.'
    ]
  }
];

export function composeBaseUiRecipe(query: string) {
  const normalizedQuery = query.toLowerCase();
  const matchedCompositions = compositionRecipes.filter((recipe) =>
    recipe.matches.some((word) => normalizedQuery.includes(word.toLowerCase()))
  );
  const compositionComponents = matchedCompositions.flatMap((recipe) => recipe.components);
  const components = baseUiComponents.filter((component) => {
    const words = [component, ...(aliases[component] ?? [])];
    return words.some((word) => normalizedQuery.includes(word.toLowerCase())) || compositionComponents.includes(component);
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
    compositions: matchedCompositions.map((recipe) => ({
      id: recipe.id,
      summary: recipe.summary,
      baseUiPrimitives: recipe.components,
      recommendedIcons: recipe.icons,
      steps: recipe.steps
    })),
    steps: [
      'Base UI에서 가장 가까운 primitive를 고른다.',
      'Base UI에 완성형 컴포넌트가 없으면 가장 가까운 primitive들을 조합하고, 누락된 상태/계산 로직만 소비자 프로젝트에서 직접 구현한다.',
      '필요한 경우 get_base_ui_component_doc 또는 search_base_ui_docs로 최신 Base UI API 문서를 확인한다.',
      'Base UI의 Root/Trigger/Portal/Positioner/Popup 같은 접근성 구조를 유지한다.',
      'design-system.md의 관련 섹션에서 색상, typography, spacing, radius, elevation 근거를 찾는다.',
      '아이콘이 필요하면 search_icons 또는 @ncai/design-system-icons 메타데이터에서 기존 SVG를 먼저 찾는다.',
      '소비자 프로젝트의 기존 스타일 방식으로 해당 근거를 className/CSS에 반영한다.',
      '완성 후 validate_ui_code로 이전 패키지명, 근거 없는 색상, inline style 사용 여부를 점검한다.'
    ]
  };
}
