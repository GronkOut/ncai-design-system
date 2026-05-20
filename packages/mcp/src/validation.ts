import { baseUiGuidance } from '@ncai/design-system';

export type ValidationFinding = {
  severity: 'error' | 'warning';
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  findings: ValidationFinding[];
  disclaimer: string;
};

const rawBaseUiPackagePattern = /@base-ui-components\/react/;
const currentBaseUiPattern = /@base-ui\/react/;
const interactiveHintPattern =
  /\b(Dialog|AlertDialog|Popover|Menu|ContextMenu|NavigationMenu|Select|Combobox|Autocomplete|Checkbox|CheckboxGroup|Radio|RadioGroup|Switch|Tabs|Accordion|Tooltip|Toolbar|Toggle|ToggleGroup|Slider|Progress|Meter|ScrollArea|PreviewCard|Collapsible|NumberField|OtpField|Field|Fieldset|Form|Toast|Separator|Avatar)\b/;
const arbitraryColorPattern = /#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/;
const inlineStylePattern = /style=\{\{/;

export function validateUiCode(code: string): ValidationResult {
  const findings: ValidationFinding[] = [];

  if (rawBaseUiPackagePattern.test(code)) {
    findings.push({
      severity: 'error',
      message: `Base UI 패키지는 ${baseUiGuidance.packageName}을 사용하세요. 이전 패키지명 @base-ui-components/react를 쓰지 않습니다.`
    });
  }

  if (interactiveHintPattern.test(code) && !currentBaseUiPattern.test(code)) {
    findings.push({
      severity: 'warning',
      message: '인터랙티브 UI로 보입니다. 해당 동작을 Base UI primitive로 구현할 수 있는지 먼저 확인하세요.'
    });
  }

  if (arbitraryColorPattern.test(code)) {
    findings.push({
      severity: 'warning',
      message: '직접 색상값이 감지되었습니다. design-system.md의 Colors 섹션에서 근거를 확인하세요.'
    });
  }

  if (inlineStylePattern.test(code)) {
    findings.push({
      severity: 'warning',
      message: 'inline style이 감지되었습니다. 소비자 프로젝트의 CSS Modules, Tailwind, CSS 파일 등 기존 스타일 체계를 우선 사용하세요.'
    });
  }

  return {
    valid: findings.every((finding) => finding.severity !== 'error'),
    findings,
    disclaimer: '이 검증은 에이전트 가드레일입니다. 최종 판단은 최신 design-system.md와 Base UI 문서를 함께 확인하세요.'
  };
}
