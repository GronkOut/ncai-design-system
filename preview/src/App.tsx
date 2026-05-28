import * as React from 'react';
import { Accordion } from '@base-ui/react/accordion';
import { AlertDialog } from '@base-ui/react/alert-dialog';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { Avatar } from '@base-ui/react/avatar';
import { Button } from '@base-ui/react/button';
import { Checkbox } from '@base-ui/react/checkbox';
import { CheckboxGroup } from '@base-ui/react/checkbox-group';
import { Collapsible } from '@base-ui/react/collapsible';
import { Combobox } from '@base-ui/react/combobox';
import { ContextMenu } from '@base-ui/react/context-menu';
import { Dialog } from '@base-ui/react/dialog';
import { Drawer } from '@base-ui/react/drawer';
import { Field } from '@base-ui/react/field';
import { Fieldset } from '@base-ui/react/fieldset';
import { Form } from '@base-ui/react/form';
import { Input } from '@base-ui/react/input';
import { Menu } from '@base-ui/react/menu';
import { Meter } from '@base-ui/react/meter';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { NumberField } from '@base-ui/react/number-field';
import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import { Popover } from '@base-ui/react/popover';
import { PreviewCard } from '@base-ui/react/preview-card';
import { Progress } from '@base-ui/react/progress';
import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { Select } from '@base-ui/react/select';
import { Separator } from '@base-ui/react/separator';
import { Slider } from '@base-ui/react/slider';
import { Switch } from '@base-ui/react/switch';
import { Tabs } from '@base-ui/react/tabs';
import { Toast } from '@base-ui/react/toast';
import { Toggle } from '@base-ui/react/toggle';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toolbar } from '@base-ui/react/toolbar';
import { Tooltip } from '@base-ui/react/tooltip';
import { icons as iconMetadata } from '@ncai/design-system-icons';
import checkIcon from '@ncai/design-system-icons/icons/check.svg';
import chevronDownIcon from '@ncai/design-system-icons/icons/chevron-down.svg?raw';
import infoIcon from '@ncai/design-system-icons/icons/info.svg?raw';
import searchIcon from '@ncai/design-system-icons/icons/search.svg?raw';
import starIcon from '@ncai/design-system-icons/icons/star.svg?raw';
import homeIcon from '@ncai/design-system-icons/icons/house.svg?raw';
import settingsIcon from '@ncai/design-system-icons/icons/settings.svg?raw';
import bellIcon from '@ncai/design-system-icons/icons/bell.svg?raw';
import downloadIcon from '@ncai/design-system-icons/icons/download.svg?raw';
import plusIcon from '@ncai/design-system-icons/icons/plus.svg?raw';
import minusIcon from '@ncai/design-system-icons/icons/minus.svg?raw';
import xIcon from '@ncai/design-system-icons/icons/x.svg?raw';
import arrowRightIcon from '@ncai/design-system-icons/icons/arrow-right.svg?raw';
import shareIcon from '@ncai/design-system-icons/icons/share-2.svg?raw';
import eyeIcon from '@ncai/design-system-icons/icons/eye.svg?raw';
import trashIcon from '@ncai/design-system-icons/icons/trash-2.svg?raw';
import pencilIcon from '@ncai/design-system-icons/icons/pencil.svg?raw';
import userIcon from '@ncai/design-system-icons/icons/user.svg?raw';
import copyIcon from '@ncai/design-system-icons/icons/copy.svg?raw';
import moonIcon from '@ncai/design-system-icons/icons/moon.svg?raw';
import sunIcon from '@ncai/design-system-icons/icons/sun.svg?raw';
import mailIcon from '@ncai/design-system-icons/icons/mail.svg?raw';
import lockIcon from '@ncai/design-system-icons/icons/lock.svg?raw';
import calendarIcon from '@ncai/design-system-icons/icons/calendar.svg?raw';
import layersIcon from '@ncai/design-system-icons/icons/layers.svg?raw';
import codeIcon from '@ncai/design-system-icons/icons/code.svg?raw';
import chevronRightIcon from '@ncai/design-system-icons/icons/chevron-right.svg?raw';
import menuIcon from '@ncai/design-system-icons/icons/menu.svg?raw';
import boldIcon from '@ncai/design-system-icons/icons/bold.svg?raw';
import italicIcon from '@ncai/design-system-icons/icons/italic.svg?raw';
import underlineIcon from '@ncai/design-system-icons/icons/underline.svg?raw';
import strikethroughIcon from '@ncai/design-system-icons/icons/strikethrough.svg?raw';
import alignLeftIcon from '@ncai/design-system-icons/icons/align-left.svg?raw';
import alignCenterIcon from '@ncai/design-system-icons/icons/align-center.svg?raw';
import alignRightIcon from '@ncai/design-system-icons/icons/align-right.svg?raw';
import linkIcon from '@ncai/design-system-icons/icons/link.svg?raw';
import listIcon from '@ncai/design-system-icons/icons/list.svg?raw';
import listOrderedIcon from '@ncai/design-system-icons/icons/list-ordered.svg?raw';
import undoIcon from '@ncai/design-system-icons/icons/undo-2.svg?raw';
import redoIcon from '@ncai/design-system-icons/icons/redo-2.svg?raw';

// === Floating element spacing tokens (styles.css의 --floating-* 와 동일 값) ===
// Tooltip / Popover / Menu / Dropdown 등 anchored UI의 trigger 간격 / viewport 여백 강제.
const FLOATING_OFFSET = 8;          // 기본
const FLOATING_OFFSET_LOOSE = 10;   // Popover, PreviewCard
const VIEWPORT_PADDING = 16;

// Popover / Tooltip 화살표 SVG — base-ui Arrow wrapper의 children으로 전달.
// viewBox를 SVG 픽셀 크기와 1:1 매핑(24×12)해 좌표 1단위 = 1px이 되도록 함 → stroke가
// 카드 hairline border(1px)와 정확히 같은 두께 유지. fill triangle은 closed path로 면을 채우고,
// stroke는 baseline을 제외한 양 변만 open path로 그려, baseline 영역에서 fill canvas가
// popover-card 보더 hairline을 자연스럽게 마스킹.
function PopupArrowGlyph() {
  return (
    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" aria-hidden>
      {/* fill: triangle + 1px 높이 baseline rectangle. baseline rect가 popover-card의
          top hairline border(1px)를 정확히 mask해 꼬리와 몸통이 같은 fill 영역으로 연결됨. */}
      <path d="M0 8 L8 0 L16 8 L16 9 L0 9 Z" className="arrow-fill" />
      {/* stroke: 두 변만 (open path). baseline에는 stroke 안 그림 — popover top edge가
          stroke 양 끝점과 정확히 만나는 지점에서 hairline border와 자연스럽게 연결. */}
      <path d="M0 8 L8 0 L16 8" className="arrow-stroke" />
    </svg>
  );
}

const allIconModules = import.meta.glob('../../packages/icons/icons/*.svg', {
  eager: true,
  import: 'default',
  query: '?raw'
}) as Record<string, string>;

const allIconSvgByFileName = Object.fromEntries(
  Object.entries(allIconModules).map(([path, svg]) => [path.split('/').pop() ?? path, svg])
) as Record<string, string>;

const allPreviewIcons = iconMetadata.map((icon) => ({
  ...icon,
  svg: allIconSvgByFileName[icon.fileName]
}));

const products = ['AI 어시스턴트', '디자인 시스템', '아이콘 패키지', '컴포넌트 라이브러리', '디자인 토큰'];

// Clear(x) 칩이 우측에 붙는 텍스트 입력 래퍼.
// Autocomplete.Clear와 동일 스펙(48×48 hit area, 16×16 chip, 10px x icon, body-muted mix 55%→75%).
function ClearableInput({
  as: BaseInput = Input,
  defaultValue,
  className,
  onChange,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  as?: React.ElementType;
}) {
  const [value, setValue] = React.useState(defaultValue != null ? String(defaultValue) : '');
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <div className="clearable-input-wrap">
      <BaseInput
        ref={inputRef}
        {...rest}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
          onChange?.(event);
        }}
        className={['text-input clearable-text-input', className].filter(Boolean).join(' ')}
      />
      {value.length > 0 && (
        <button
          type="button"
          className="icon-button input-clear-button"
          aria-label="입력 지우기"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => {
            setValue('');
            inputRef.current?.focus();
          }}
        >
          <span className="clear-chip">
            <Icon svg={xIcon} size={10} />
          </span>
        </button>
      )}
    </div>
  );
}
const teams = ['서울 본사', '부산 지사', '대전 R&D', '광주 크리에이티브', '인천 물류'];
const sections = [
  'Typography',
  'Accordion',
  'Alert Dialog',
  'Modal',
  'Bottom Sheet',
  'Autocomplete',
  'Avatar',
  'Badge',
  'Button',
  'Checkbox',
  'Checkbox Group',
  'Collapsible',
  'Combobox',
  'Context Menu',
  'Date Picker',
  'Drawer',
  'Field',
  'Fieldset',
  'Form',
  'Input',
  'Menu',
  'Meter',
  'Navigation Menu',
  'Number Field',
  'OTP Field',
  'Popover',
  'Preview Card',
  'Progress',
  'Radio',
  'Scroll Area',
  'Select',
  'Separator',
  'Sidebar',
  'Slider',
  'Switch',
  'Table',
  'Tabs',
  'Toast',
  'Toggle',
  'Toggle Group',
  'Toolbar',
  'Tooltip'
];

export function App() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Toast.Provider>
      <Tooltip.Provider delay={100} closeDelay={0}>
        <div className="app-shell">
          <header className="global-nav" aria-label="Preview navigation">
            <span className="brand-mark">NCAI Design</span>
            <nav>
              <a href="#gallery">Components</a>
              <a href="#tokens">Design Tokens</a>
              <a href="#handoff">Handoff</a>
            </nav>
            <button
              className="nav-action theme-toggle"
              onClick={() => setIsDark((d) => !d)}
              aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {isDark ? '☀ Light' : '☾ Dark'}
            </button>
          </header>

          <main>
            <section className="hero-tile text-stack-hero">
              <p className="eyebrow">Base UI + design-system.md</p>
              <h1>NCAI Design System Preview</h1>
              <p className="hero-copy">
                Base UI 프리미티브에 NCAI 디자인 시스템의 시각 언어를 적용한 미리보기 페이지입니다. 디자인 시스템이
                변경되면 이 페이지에서 모든 컴포넌트의 변화를 빠르게 확인할 수 있습니다.
              </p>
              <div className="hero-actions">
                <a className="button-primary button-display" href="#gallery">
                  컴포넌트 보기
                </a>
                <a className="button-secondary button-display" href="#tokens">
                  토큰 확인하기
                </a>
              </div>
            </section>

            <section className="sub-nav" id="tokens">
              <strong>Preview</strong>
              <span>Base UI components + patterns</span>
              <span>single accent #006EFF</span>
              <span>bold whitespace · 8px grid</span>
            </section>

            <section className="gallery-intro text-stack-section" id="gallery">
              <h2>All Base UI components</h2>
              <p>
                모든 카드는 Base UI 접근성 구조를 유지하면서 재사용 가능한 CSS 클래스를 통해 NCAI 시각 언어를
                적용합니다.
              </p>
            </section>

            <div className="component-grid">
              <PreviewSection title="Typography" description="Linear Display/Text/Mono — 16개 타이포그래피 토큰." wide>
                <div className="type-scale">
                  {[
                    { token: 'display-xl', size: '80 / 600', sample: '최상위 히어로 제목' },
                    { token: 'display-lg', size: '56 / 600', sample: '주요 페이지 섹션 제목' },
                    { token: 'display-md', size: '40 / 600', sample: '서브 섹션 제목' },
                    { token: 'headline',   size: '28 / 600', sample: '패널과 카드 그룹 제목' },
                    { token: 'title-md',   size: '22 / 500', sample: '카드·모달·드로어·시트 컨테이너 타이틀' },
                    { token: 'title-sm',   size: '20 / 600', sample: '모달·드로어·시트 타이틀' },
                    { token: 'body-lg',    size: '18 / 400', sample: '도입부 문단과 강조 본문' },
                    { token: 'body-md',    size: '16 / 400', sample: '기본 본문 — 가독성 확보.' },
                    { token: 'body-sm',    size: '14 / 400', sample: '보조 텍스트와 메타 정보' },
                    { token: 'caption',    size: '12 / 400', sample: '작은 캡션과 부가 정보' },
                    { token: 'label-xl',   size: '18 / 500', sample: 'Display 라벨 (히어로 CTA)' },
                    { token: 'label-lg',   size: '16 / 500', sample: '기본 라벨 (버튼·메뉴·탭)' },
                    { token: 'label-md',   size: '15 / 500', sample: '중간 라벨 (40px 컨테이너)' },
                    { token: 'label-sm',   size: '14 / 500', sample: '보조 라벨 (칩·작은 버튼)' },
                    { token: 'eyebrow',    size: '13 / 500', sample: 'SECTION LABEL' },
                    { token: 'mono',       size: '13 / 400', sample: 'v1.0.0 · build-20260101' },
                  ].map(({ token, size, sample }) => (
                    <div key={token} className="type-row">
                      <span className="type-token">{token}</span>
                      <span className={`type-${token}`}>{sample}</span>
                      <span className="type-meta">{size}</span>
                    </div>
                  ))}
                </div>
              </PreviewSection>

              <PreviewSection title="Accordion" description="접을 수 있는 정보 패널 컴포넌트.">
                <Accordion.Root defaultValue={['tokens']} className="accordion">
                  <Accordion.Item value="tokens" className="accordion-item">
                    <Accordion.Header>
                      <Accordion.Trigger className="accordion-trigger">
                        <span>디자인 토큰</span>
                        <svg
                          className="accordion-chevron"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="4 6 8 10 12 6" />
                        </svg>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel keepMounted className="accordion-panel">
                      색상, 간격, 반경, 그림자를 CSS 변수로 정의하여 다크 모드 전환 및 브랜드 교체를 단일 파일에서
                      처리합니다.
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="grid" className="accordion-item">
                    <Accordion.Header>
                      <Accordion.Trigger className="accordion-trigger">
                        <span>8px 그리드 시스템</span>
                        <svg
                          className="accordion-chevron"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="4 6 8 10 12 6" />
                        </svg>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel keepMounted className="accordion-panel">
                      xs(4px) · sm(8px) · md(16px) · lg(24px) · xl(32px) · xxl(40px) · xxxl(48px) — 모든 여백은 이
                      체계를 따릅니다.
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion.Root>
              </PreviewSection>

              <PreviewSection title="Alert Dialog" description="중앙 정렬 텍스트와 풀-너비 액션 풋터로 구성된 확인 다이얼로그. Default(Primary) · Negative(Danger) · 단일 Action 세 가지 변형을 지원합니다.">
                <div className="inline-actions">
                  <AlertDialog.Root>
                    <AlertDialog.Trigger className="button-primary">변경 저장 (기본)</AlertDialog.Trigger>
                    <AlertDialog.Portal>
                      <AlertDialog.Backdrop className="overlay-backdrop" />
                      <AlertDialog.Popup className="modal-card alert-dialog-card">
                        <div className="alert-dialog-content">
                          <AlertDialog.Title className="alert-dialog-title">변경 사항을 저장할까요?</AlertDialog.Title>
                          <AlertDialog.Description className="modal-copy alert-dialog-copy">
                            저장하지 않은 변경 사항이 있습니다.
                            <br />
                            지금 저장하면 모든 편집 내용이 반영됩니다.
                          </AlertDialog.Description>
                        </div>
                        <div className="alert-dialog-actions">
                          <AlertDialog.Close className="button-secondary">취소</AlertDialog.Close>
                          <AlertDialog.Close className="button-primary">저장</AlertDialog.Close>
                        </div>
                      </AlertDialog.Popup>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger className="button-danger">계정 삭제 (부정)</AlertDialog.Trigger>
                    <AlertDialog.Portal>
                      <AlertDialog.Backdrop className="overlay-backdrop" />
                      <AlertDialog.Popup className="modal-card alert-dialog-card">
                        <div className="alert-dialog-content">
                          <AlertDialog.Title className="alert-dialog-title">계정을 삭제할까요?</AlertDialog.Title>
                          <AlertDialog.Description className="modal-copy alert-dialog-copy">
                            이 작업은 되돌릴 수 없습니다.
                            <br />
                            모든 데이터가 영구적으로 삭제됩니다.
                          </AlertDialog.Description>
                        </div>
                        <div className="alert-dialog-actions">
                          <AlertDialog.Close className="button-secondary">취소</AlertDialog.Close>
                          <AlertDialog.Close className="button-danger">삭제</AlertDialog.Close>
                        </div>
                      </AlertDialog.Popup>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger className="button-primary">알림 확인 (단일)</AlertDialog.Trigger>
                    <AlertDialog.Portal>
                      <AlertDialog.Backdrop className="overlay-backdrop" />
                      <AlertDialog.Popup className="modal-card alert-dialog-card">
                        <div className="alert-dialog-content">
                          <AlertDialog.Title className="alert-dialog-title">업데이트가 완료되었습니다</AlertDialog.Title>
                          <AlertDialog.Description className="modal-copy alert-dialog-copy">
                            새로운 버전이 적용되었습니다.
                            <br />
                            변경 사항은 다음 세션부터 반영됩니다.
                          </AlertDialog.Description>
                        </div>
                        <div className="alert-dialog-actions">
                          <AlertDialog.Close className="button-primary">확인</AlertDialog.Close>
                        </div>
                      </AlertDialog.Popup>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                </div>
              </PreviewSection>

              <PreviewSection title="Modal" description="3가지 Variant — Form(우측 정착 풋터) / Picker(per-row 액션 리스트, 풋터 없음) / Browse(상단 보조 액션 + 스크롤 리스트). 폭 스케일은 md(480, 기본) / lg(640) / xl(880). sm(400)은 Alert Dialog 전용.">
                <div className="inline-actions">
                  <Dialog.Root>
                    <Dialog.Trigger className="button-primary">Form · md (기본)</Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Backdrop className="overlay-backdrop" />
                      <Dialog.Popup className="modal-card">
                        <div className="modal-body">
                          <div className="modal-header">
                            <Dialog.Title className="modal-title">새 프로젝트 만들기</Dialog.Title>
                            <Dialog.Description className="modal-copy">
                              프로젝트 정보를 입력하세요. 멤버는 생성 후 초대할 수 있습니다.
                            </Dialog.Description>
                          </div>
                          <div className="modal-form">
                            <div className="modal-form-fields">
                              <Field.Root name="project-name" className="field-root">
                                <Field.Label className="field-label">프로젝트 이름</Field.Label>
                                <ClearableInput as={Field.Control} placeholder="예: 디자인 시스템 v2" />
                              </Field.Root>
                              <Field.Root name="project-team" className="field-root">
                                <Field.Label className="field-label">소속 팀</Field.Label>
                                <ClearableInput as={Field.Control} placeholder="팀 선택" />
                              </Field.Root>
                            </div>
                            <label className="check-row modal-form-supplementary">
                              <Checkbox.Root defaultChecked className="checkbox">
                                <Checkbox.Indicator className="check-indicator">
                                  <img src={checkIcon} alt="" className="check-icon" />
                                </Checkbox.Indicator>
                              </Checkbox.Root>
                              생성 후 바로 멤버 초대 패널 열기
                            </label>
                          </div>
                        </div>
                        <div className="inline-actions">
                          <Dialog.Close className="button-secondary">취소</Dialog.Close>
                          <Dialog.Close className="button-primary">프로젝트 만들기</Dialog.Close>
                        </div>
                      </Dialog.Popup>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <Dialog.Root>
                    <Dialog.Trigger className="button-secondary">Form · lg</Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Backdrop className="overlay-backdrop" />
                      <Dialog.Popup className="modal-card modal-lg">
                        <div className="modal-body">
                          <div className="modal-header">
                            <Dialog.Title className="modal-title">멤버 초대 설정</Dialog.Title>
                            <Dialog.Description className="modal-copy">
                              여러 명을 한 번에 초대하고 역할·권한을 지정하세요.
                            </Dialog.Description>
                          </div>
                          <div className="modal-form">
                            <div className="modal-form-grid">
                              <Field.Root name="invitee-name" className="field-root">
                                <Field.Label className="field-label">이름</Field.Label>
                                <ClearableInput as={Field.Control} placeholder="홍길동" />
                              </Field.Root>
                              <Field.Root name="invitee-email" className="field-root">
                                <Field.Label className="field-label">이메일</Field.Label>
                                <ClearableInput as={Field.Control} type="email" placeholder="name@ncai.io" />
                              </Field.Root>
                              <Field.Root name="invitee-role" className="field-root">
                                <Field.Label className="field-label">역할</Field.Label>
                                <ClearableInput as={Field.Control} placeholder="Editor" />
                              </Field.Root>
                              <Field.Root name="invitee-team" className="field-root">
                                <Field.Label className="field-label">소속 팀</Field.Label>
                                <ClearableInput as={Field.Control} placeholder="디자인" />
                              </Field.Root>
                              <Field.Root name="invitee-message" className="field-root field-root-span-2">
                                <Field.Label className="field-label">초대 메시지 (선택)</Field.Label>
                                <ClearableInput as={Field.Control} placeholder="환영합니다. 함께 작업하게 되어 기뻐요." />
                              </Field.Root>
                            </div>
                          </div>
                        </div>
                        <div className="inline-actions">
                          <Dialog.Close className="button-secondary">취소</Dialog.Close>
                          <Dialog.Close className="button-primary">초대 보내기</Dialog.Close>
                        </div>
                      </Dialog.Popup>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <Dialog.Root>
                    <Dialog.Trigger className="button-secondary">Form · xl</Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Backdrop className="overlay-backdrop" />
                      <Dialog.Popup className="modal-card modal-xl">
                        <div className="modal-body">
                          <div className="modal-header">
                            <Dialog.Title className="modal-title">미디어 라이브러리</Dialog.Title>
                            <Dialog.Description className="modal-copy">
                              업로드된 이미지를 둘러보고 선택하세요. 항목을 클릭하면 상세 미리보기가 열립니다.
                            </Dialog.Description>
                          </div>
                          <div className="modal-gallery-grid">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <div key={i} className="modal-gallery-item">
                                <span className="modal-gallery-thumb" aria-hidden />
                                <span className="modal-gallery-label">asset-{String(i + 1).padStart(2, '0')}.png</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="inline-actions">
                          <Dialog.Close className="button-secondary">취소</Dialog.Close>
                          <Dialog.Close className="button-primary">선택 완료</Dialog.Close>
                        </div>
                      </Dialog.Popup>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <Dialog.Root>
                    <Dialog.Trigger className="button-secondary">Picker (보이스 선택)</Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Backdrop className="overlay-backdrop" />
                      <Dialog.Popup className="modal-card modal-picker modal-lg">
                        <div className="modal-toolbar">
                          <Dialog.Title className="modal-title">보이스 라운지</Dialog.Title>
                          <div className="modal-toolbar-actions">
                            <Dialog.Close className="icon-btn icon-btn--md icon-btn--ghost" aria-label="닫기">
                              <Icon svg={xIcon} size={16} />
                            </Dialog.Close>
                          </div>
                        </div>
                        <div className="modal-list">
                          {[
                            { name: '상냥한 보이스', meta: '예의바른, 아나운서 언어' },
                            { name: '다정한 화자', meta: '상냥한, 예의바른' },
                            { name: '예쁜 목소리', meta: '상냥한, 아나운서 언어' },
                            { name: '발랄한 소녀', meta: '상냥한, 귀여운' },
                            { name: '차분한 내레이션', meta: '낮은 톤, 다큐멘터리' },
                            { name: '활기찬 진행자', meta: '밝은, 라이브' },
                            { name: '신뢰감 있는 보이스', meta: '중후한, 비즈니스' },
                          ].map((item) => (
                            <div key={item.name} className="modal-list-item">
                              <div className="modal-list-item-main">
                                <span className="modal-list-item-title">{item.name}</span>
                                <span className="modal-list-item-meta">{item.meta}</span>
                              </div>
                              <div className="modal-list-item-actions">
                                <Button className="button-secondary button-md">
                                  <Icon svg={plusIcon} size={16} />
                                  캐스팅
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Dialog.Popup>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <Dialog.Root>
                    <Dialog.Trigger className="button-secondary">Browse (스크롤 + 상단 액션)</Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Backdrop className="overlay-backdrop" />
                      <Dialog.Popup className="modal-card modal-browse modal-lg">
                        <div className="modal-toolbar">
                          <Dialog.Title className="modal-title">월별 사용량 데이터 조회</Dialog.Title>
                          <div className="modal-toolbar-actions">
                            <Button className="button-secondary button-md">
                              <Icon svg={downloadIcon} size={16} />
                              전체 다운로드
                            </Button>
                            <Dialog.Close className="icon-btn icon-btn--md icon-btn--ghost" aria-label="닫기">
                              <Icon svg={xIcon} size={16} />
                            </Dialog.Close>
                          </div>
                        </div>
                        <div className="modal-list">
                          {Array.from({ length: 14 }).map((_, i) => (
                            <div key={i} className="modal-list-item">
                              <div className="modal-list-item-main">
                                <span className="modal-list-item-title">월별 사용량 데이터_2025-{String((i % 12) + 1).padStart(2, '0')}.xlsx</span>
                              </div>
                              <div className="modal-list-item-actions">
                                <button type="button" className="icon-btn icon-btn--sm icon-btn--ghost" aria-label="다운로드">
                                  <Icon svg={downloadIcon} size={16} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Dialog.Popup>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </PreviewSection>

              <PreviewSection title="Bottom Sheet" description="반응형 시트 패턴 — 모바일(≤768px)은 하단 슬라이드업 + 드래그 핸들, 데스크톱은 중앙 Modal로 전환됩니다. 뷰포트를 줄여서 차이를 확인하세요.">
                <Dialog.Root>
                  <Dialog.Trigger className="button-primary">시트 열기</Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Backdrop className="overlay-backdrop" />
                    <Dialog.Popup className="responsive-sheet">
                      <span className="bottom-sheet-handle" aria-hidden="true" />
                      <Dialog.Title className="modal-title">공유</Dialog.Title>
                      <Dialog.Description className="modal-copy">
                        공유 방법을 선택하세요. 링크는 24시간 동안 유효합니다.
                      </Dialog.Description>
                      <ul className="bottom-sheet-list">
                        <li>
                          <Dialog.Close className="bottom-sheet-option">
                            <Icon svg={copyIcon} className="icon-inline icon-ink" size={16} />
                            <span>링크 복사</span>
                          </Dialog.Close>
                        </li>
                        <li>
                          <Dialog.Close className="bottom-sheet-option">
                            <Icon svg={mailIcon} className="icon-inline icon-ink" size={16} />
                            <span>이메일로 보내기</span>
                          </Dialog.Close>
                        </li>
                        <li>
                          <Dialog.Close className="bottom-sheet-option">
                            <Icon svg={userIcon} className="icon-inline icon-ink" size={16} />
                            <span>팀 멤버에게 공유</span>
                          </Dialog.Close>
                        </li>
                        <li>
                          <Dialog.Close className="bottom-sheet-option">
                            <Icon svg={downloadIcon} className="icon-inline icon-ink" size={16} />
                            <span>PDF로 내보내기</span>
                          </Dialog.Close>
                        </li>
                      </ul>
                      <Dialog.Close className="button-secondary bottom-sheet-cancel">취소</Dialog.Close>
                    </Dialog.Popup>
                  </Dialog.Portal>
                </Dialog.Root>
              </PreviewSection>

              <PreviewSection title="Autocomplete" description="검색어 기반 자동 완성 입력 컴포넌트.">
                <Autocomplete.Root items={products}>
                  <Autocomplete.InputGroup className="combo-root combo-input-group autocomplete-input-group">
                    <span className="input-leading-icon" aria-hidden="true">
                      <Icon svg={searchIcon} className="trigger-icon" size={16} />
                    </span>
                    <Autocomplete.Input placeholder="기능 검색" className="text-input" />
                    <Autocomplete.Clear className="icon-button input-clear-button" aria-label="검색어 지우기">
                      <span className="clear-chip">
                        <Icon svg={xIcon} size={10} />
                      </span>
                    </Autocomplete.Clear>
                  </Autocomplete.InputGroup>
                  <Autocomplete.Portal>
                    <Autocomplete.Positioner
                      className="autocomplete-positioner"
                      sideOffset={FLOATING_OFFSET}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <Autocomplete.Popup className="autocomplete-popup">
                        <Autocomplete.Empty className="empty-state">검색 결과가 없습니다.</Autocomplete.Empty>
                        <Autocomplete.List className="autocomplete-list">
                          {(item: string) => (
                            <Autocomplete.Item key={item} value={item} className="autocomplete-item">
                              {item}
                            </Autocomplete.Item>
                          )}
                        </Autocomplete.List>
                      </Autocomplete.Popup>
                    </Autocomplete.Positioner>
                  </Autocomplete.Portal>
                </Autocomplete.Root>
              </PreviewSection>

              <PreviewSection title="Avatar" description="5가지 Subtle Tint 팔레트 — 장식적 용도. 사이즈는 기본 40 / lg 64 두 단계.">
                <div className="avatar-palette-row">
                  {[
                    { cls: 'avatar-indigo', initials: 'IN', label: 'Indigo' },
                    { cls: 'avatar-sage', initials: 'SG', label: 'Sage' },
                    { cls: 'avatar-sand', initials: 'SA', label: 'Sand' },
                    { cls: 'avatar-plum', initials: 'PL', label: 'Plum' },
                    { cls: 'avatar-azure', initials: 'AZ', label: 'Azure' }
                  ].map(({ cls, initials, label }) => (
                    <div key={cls} className="avatar-palette-item">
                      <Avatar.Root className={`avatar ${cls}`}>
                        <Avatar.Fallback>{initials}</Avatar.Fallback>
                      </Avatar.Root>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="avatar-row">
                  <Avatar.Root className="avatar avatar-lg avatar-azure">
                    <Avatar.Fallback>AZ</Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <strong>Profile Header</strong>
                    <p>이니셜 전용 · 64 (.avatar-lg)</p>
                  </div>
                </div>
              </PreviewSection>

              <PreviewSection title="Badge" description="Semantic Status Palette — 기능적 상태 표시.">
                <div className="badge-demo">
                  <div className="badge-row">
                    <span className="badge badge-success">활성</span>
                    <span className="badge badge-warning">대기</span>
                    <span className="badge badge-error">중단</span>
                    <span className="badge badge-ink">신규</span>
                  </div>
                  <div className="badge-row">
                    <span className="badge badge-success">● 온라인</span>
                    <span className="badge badge-warning">● 검토 중</span>
                    <span className="badge badge-error">● 오류</span>
                  </div>
                </div>
              </PreviewSection>

              <PreviewSection title="Button" description="Primary · Secondary · Ghost — 3단계 위계 구조. 아이콘은 라벨 좌측(의미 보강) 또는 우측(흐름·이동)에 배치합니다.">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="inline-actions">
                    <Button className="button-primary">시작하기</Button>
                    <Button className="button-secondary">더 알아보기</Button>
                    <Button className="button-ghost">취소</Button>
                  </div>
                  <div className="inline-actions" style={{ alignItems: 'center' }}>
                    <Button className="button-primary">
                      <Icon svg={plusIcon} size={18} />
                      새로 만들기
                    </Button>
                    <Button className="button-secondary">
                      <Icon svg={downloadIcon} size={18} />
                      다운로드
                    </Button>
                    <Button className="button-ghost">
                      <Icon svg={trashIcon} size={18} />
                      삭제
                    </Button>
                    <span style={{ color: 'var(--color-body-muted)', fontSize: 13 }}>Leading icon — 액션의 의미를 보강</span>
                  </div>
                  <div className="inline-actions" style={{ alignItems: 'center' }}>
                    <Button className="button-primary">
                      계속하기
                      <Icon svg={arrowRightIcon} size={18} />
                    </Button>
                    <Button className="button-secondary">
                      자세히 보기
                      <Icon svg={chevronRightIcon} size={18} />
                    </Button>
                    <span style={{ color: 'var(--color-body-muted)', fontSize: 13 }}>Trailing icon — 다음 단계·이동 암시</span>
                  </div>
                  <div className="inline-actions" style={{ alignItems: 'center' }}>
                    <Button className="button-primary button-md">
                      <Icon svg={plusIcon} size={16} />
                      추가
                    </Button>
                    <Button className="button-secondary button-sm">
                      <Icon svg={pencilIcon} size={14} />
                      수정
                    </Button>
                    <span style={{ color: 'var(--color-body-muted)', fontSize: 13 }}>Size별 아이콘 — md 16 / sm 14</span>
                  </div>
                </div>
              </PreviewSection>

              <PreviewSection title="Icon Button" description="라벨 없는 정사각 액션 — sm 32 / md 40 / lg 48 (Button 높이와 동일). 변형은 Ghost(기본) · Secondary · Primary · Danger. 라벨이 가려져 있으므로 aria-label과 Tooltip이 필수입니다 — 아래 버튼에 hover/focus 시 라벨·단축키가 노출됩니다.">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="inline-actions" style={{ alignItems: 'center' }}>
                    <IconTooltipButton label="공유" svg={shareIcon} size={16} className="icon-btn icon-btn--sm icon-btn--ghost" />
                    <IconTooltipButton label="공유" svg={shareIcon} size={16} className="icon-btn icon-btn--md icon-btn--ghost" />
                    <IconTooltipButton label="공유" svg={shareIcon} size={22} className="icon-btn icon-btn--lg icon-btn--ghost" />
                    <span style={{ color: 'var(--color-body-muted)', fontSize: 13 }}>Ghost — 기본 (sm / md / lg)</span>
                  </div>
                  <div className="inline-actions" style={{ alignItems: 'center' }}>
                    <IconTooltipButton label="수정" shortcut={['⌘', 'E']} svg={pencilIcon} size={16} className="icon-btn icon-btn--md icon-btn--secondary" />
                    <IconTooltipButton label="추가" shortcut={['⌘', 'N']} svg={plusIcon} size={16} className="icon-btn icon-btn--md icon-btn--primary" />
                    <IconTooltipButton label="삭제" shortcut={['⌘', '⌫']} svg={trashIcon} size={16} className="icon-btn icon-btn--md icon-btn--danger" />
                    <IconTooltipButton label="알림" svg={bellIcon} size={16} className="icon-btn icon-btn--md icon-btn--ghost" disabled />
                    <span style={{ color: 'var(--color-body-muted)', fontSize: 13 }}>Secondary · Primary · Danger · Disabled (단축키 hint 포함)</span>
                  </div>
                  <div className="inline-actions" style={{ alignItems: 'center' }}>
                    <IconTooltipButton label="새로 만들기" svg={plusIcon} size={22} className="icon-btn icon-btn--lg icon-btn--primary icon-btn--circle" />
                    <IconTooltipButton label="프로필" svg={userIcon} size={16} className="icon-btn icon-btn--md icon-btn--secondary icon-btn--circle" />
                    <span style={{ color: 'var(--color-body-muted)', fontSize: 13 }}>Circle — 프로필 / 플로팅 액션</span>
                  </div>
                </div>
              </PreviewSection>

              <PreviewSection title="Checkbox" description="단일 선택 컨트롤.">
                <label className="check-row">
                  <Checkbox.Root defaultChecked className="checkbox">
                    <Checkbox.Indicator className="check-indicator">
                      <img src={checkIcon} alt="" className="check-icon" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  디자인 시스템 변경 사항 알림 받기
                </label>
              </PreviewSection>

              <PreviewSection title="Checkbox Group" description="다중 선택 그룹 컨트롤.">
                <CheckboxGroup className="choice-stack" defaultValue={['tokens']}>
                  {[
                    ['tokens', '디자인 토큰 감사'],
                    ['spacing', '스페이싱 리듬 검토'],
                    ['copy', '컴포넌트 명세 확인']
                  ].map(([value, label]) => (
                    <label className="check-row" key={value}>
                      <Checkbox.Root value={value} className="checkbox">
                        <Checkbox.Indicator className="check-indicator">
                          <img src={checkIcon} alt="" className="check-icon" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      {label}
                    </label>
                  ))}
                </CheckboxGroup>
              </PreviewSection>

              <PreviewSection title="Collapsible" description="간결한 상세 내용을 위한 접기/펼치기 패널.">
                <Collapsible.Root className="collapsible">
                  <Collapsible.Trigger className="collapsible-trigger">
                    <Icon svg={chevronRightIcon} className="collapsible-chevron" size={16} />
                    디자인 원칙 보기
                  </Collapsible.Trigger>
                  <Collapsible.Panel keepMounted className="collapsible-panel">
                    절제를 통한 위계의 완성 — 불필요한 장식을 걷어내고, 정교하게 계산된 여백과 타이포그래피로 가장
                    직관적인 사용자 경험을 전달합니다.
                  </Collapsible.Panel>
                </Collapsible.Root>
              </PreviewSection>

              <PreviewSection title="Combobox" description="입력과 사전 정의된 선택지를 결합한 컴포넌트.">
                <Combobox.Root items={teams}>
                  <Combobox.InputGroup className="combo-root combo-input-group">
                    <Combobox.Input placeholder="팀 선택" className="text-input" />
                    <Combobox.Trigger className="icon-button" aria-label="팀 목록 열기">
                      <Icon svg={chevronDownIcon} className="trigger-icon" size={16} />
                    </Combobox.Trigger>
                  </Combobox.InputGroup>
                  <Combobox.Portal>
                    <Combobox.Positioner
                      className="autocomplete-positioner"
                      sideOffset={FLOATING_OFFSET}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <Combobox.Popup className="autocomplete-popup">
                        <Combobox.Empty className="empty-state">검색 결과가 없습니다.</Combobox.Empty>
                        <Combobox.List className="autocomplete-list">
                          {(item: string) => (
                            <Combobox.Item key={item} value={item} className="autocomplete-item">
                              {item}
                            </Combobox.Item>
                          )}
                        </Combobox.List>
                      </Combobox.Popup>
                    </Combobox.Positioner>
                  </Combobox.Portal>
                </Combobox.Root>
              </PreviewSection>

              <PreviewSection
                title="Context Menu"
                description="타일 영역을 우클릭해 보세요. 아이콘 항목과 2-depth 서브메뉴를 포함합니다."
              >
                <ContextMenu.Root>
                  <ContextMenu.Trigger className="context-target">
                    우클릭 또는 길게 눌러 컨텍스트 메뉴를 열어보세요.
                  </ContextMenu.Trigger>
                  <ContextMenu.Portal>
                    <ContextMenu.Positioner
                      className="positioner"
                      sideOffset={FLOATING_OFFSET}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <ContextMenu.Popup className="menu-popup">
                        <ContextMenu.Item className="menu-item">
                          <Icon svg={eyeIcon} className="menu-item-icon icon-muted" size={16} />
                          <span className="menu-item-label">항목 열기</span>
                          <span className="menu-item-shortcut">⏎</span>
                        </ContextMenu.Item>
                        <ContextMenu.Item className="menu-item">
                          <Icon svg={copyIcon} className="menu-item-icon icon-muted" size={16} />
                          <span className="menu-item-label">복제</span>
                          <span className="menu-item-shortcut">⌘ D</span>
                        </ContextMenu.Item>
                        <ContextMenu.Item className="menu-item">
                          <Icon svg={pencilIcon} className="menu-item-icon icon-muted" size={16} />
                          <span className="menu-item-label">이름 변경</span>
                        </ContextMenu.Item>
                        <ContextMenu.Separator className="menu-separator" />
                        <ContextMenu.SubmenuRoot>
                          <ContextMenu.SubmenuTrigger className="menu-item">
                            <Icon svg={shareIcon} className="menu-item-icon icon-muted" size={16} />
                            <span className="menu-item-label">공유</span>
                            <Icon
                              svg={chevronRightIcon}
                              className="menu-item-submenu-indicator icon-muted"
                              size={14}
                            />
                          </ContextMenu.SubmenuTrigger>
                          <ContextMenu.Portal>
                            <ContextMenu.Positioner
                              className="positioner"
                              sideOffset={FLOATING_OFFSET}
                              alignOffset={-4}
                              collisionPadding={VIEWPORT_PADDING}
                            >
                              <ContextMenu.Popup className="menu-popup">
                                <ContextMenu.Item className="menu-item">
                                  <Icon svg={copyIcon} className="menu-item-icon icon-muted" size={16} />
                                  <span className="menu-item-label">링크 복사</span>
                                </ContextMenu.Item>
                                <ContextMenu.Item className="menu-item">
                                  <Icon svg={mailIcon} className="menu-item-icon icon-muted" size={16} />
                                  <span className="menu-item-label">이메일로 보내기</span>
                                </ContextMenu.Item>
                                <ContextMenu.Item className="menu-item">
                                  <Icon svg={userIcon} className="menu-item-icon icon-muted" size={16} />
                                  <span className="menu-item-label">팀원에게 공유</span>
                                </ContextMenu.Item>
                              </ContextMenu.Popup>
                            </ContextMenu.Positioner>
                          </ContextMenu.Portal>
                        </ContextMenu.SubmenuRoot>
                        <ContextMenu.Separator className="menu-separator" />
                        <ContextMenu.Item className="menu-item menu-item-destructive">
                          <Icon svg={trashIcon} className="menu-item-icon" size={16} />
                          <span className="menu-item-label">삭제</span>
                          <span className="menu-item-shortcut">⌫</span>
                        </ContextMenu.Item>
                      </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                  </ContextMenu.Portal>
                </ContextMenu.Root>
              </PreviewSection>

              <PreviewSection
                title="Date Picker"
                description="Calendar와 Popover를 조합한 날짜 선택 패턴. 선택값은 버튼에 요약되고 팝오버 안에서 월 단위로 탐색합니다."
              >
                <DatePickerDemo />
              </PreviewSection>

              <PreviewSection title="Drawer" description="우측에서 슬라이드되는 풀-하이트 사이드 패널. 메인 컨텍스트를 유지한 채 상세/설정을 노출합니다.">
                <Drawer.Root>
                  <Drawer.Trigger className="button-primary">설정 패널 열기</Drawer.Trigger>
                  <Drawer.Portal>
                    <Drawer.Backdrop className="overlay-backdrop" />
                    <Drawer.Viewport>
                    <Drawer.Popup className="drawer-card">
                      <header className="drawer-header">
                        <div className="drawer-header-text">
                          <Drawer.Title className="modal-title">알림 설정</Drawer.Title>
                          <Drawer.Description className="modal-copy">
                            수신 방식과 빈도를 선택합니다.
                          </Drawer.Description>
                        </div>
                        <Drawer.Close className="drawer-close" aria-label="닫기">
                          <Icon svg={xIcon} className="icon-inline icon-muted" size={18} />
                        </Drawer.Close>
                      </header>
                      <div className="drawer-body">
                        <div className="drawer-field-group">
                          <span className="drawer-field-group-label">수신 채널</span>
                          <label className="check-row">
                            <Checkbox.Root defaultChecked className="checkbox">
                              <Checkbox.Indicator className="check-indicator">
                                <img src={checkIcon} alt="" className="check-icon" />
                              </Checkbox.Indicator>
                            </Checkbox.Root>
                            이메일
                          </label>
                          <label className="check-row">
                            <Checkbox.Root className="checkbox">
                              <Checkbox.Indicator className="check-indicator">
                                <img src={checkIcon} alt="" className="check-icon" />
                              </Checkbox.Indicator>
                            </Checkbox.Root>
                            푸시 알림
                          </label>
                          <label className="check-row">
                            <Checkbox.Root defaultChecked className="checkbox">
                              <Checkbox.Indicator className="check-indicator">
                                <img src={checkIcon} alt="" className="check-icon" />
                              </Checkbox.Indicator>
                            </Checkbox.Root>
                            인앱 메시지
                          </label>
                        </div>
                        <div className="drawer-field-group">
                          <span className="drawer-field-group-label">빈도</span>
                          <RadioGroup name="drawer-frequency" defaultValue="daily" className="choice-stack">
                            <label className="check-row">
                              <Radio.Root value="realtime" className="radio">
                                <Radio.Indicator className="radio-indicator" />
                              </Radio.Root>
                              실시간
                            </label>
                            <label className="check-row">
                              <Radio.Root value="daily" className="radio">
                                <Radio.Indicator className="radio-indicator" />
                              </Radio.Root>
                              일간 요약
                            </label>
                            <label className="check-row">
                              <Radio.Root value="weekly" className="radio">
                                <Radio.Indicator className="radio-indicator" />
                              </Radio.Root>
                              주간 요약
                            </label>
                          </RadioGroup>
                        </div>
                      </div>
                      <footer className="drawer-footer">
                        <Drawer.Close className="button-secondary">취소</Drawer.Close>
                        <Drawer.Close className="button-primary">저장</Drawer.Close>
                      </footer>
                    </Drawer.Popup>
                    </Drawer.Viewport>
                  </Drawer.Portal>
                </Drawer.Root>
              </PreviewSection>

              <PreviewSection title="Field" description="레이블, 입력, 유효성 힌트가 결합된 필드.">
                <Field.Root name="email" className="field-root">
                  <Field.Label className="field-label">이메일</Field.Label>
                  <ClearableInput as={Field.Control} required type="email" placeholder="you@ncai.io" />
                  <Field.Description className="field-help">알림 수신에 사용됩니다.</Field.Description>
                  <Field.Error className="field-error">올바른 이메일 주소를 입력하세요.</Field.Error>
                </Field.Root>
              </PreviewSection>

              <PreviewSection title="Fieldset" description="관련 입력 요소를 묶는 그룹 컨테이너.">
                <Fieldset.Root className="fieldset">
                  <Fieldset.Legend className="fieldset-legend">알림 수신 방법</Fieldset.Legend>
                  <RadioGroup name="notification" defaultValue="email" className="choice-stack">
                    <label className="check-row">
                      <Radio.Root value="email" className="radio">
                        <Radio.Indicator className="radio-indicator" />
                      </Radio.Root>
                      이메일 알림
                    </label>
                    <label className="check-row">
                      <Radio.Root value="push" className="radio">
                        <Radio.Indicator className="radio-indicator" />
                      </Radio.Root>
                      푸시 알림
                    </label>
                  </RadioGroup>
                </Fieldset.Root>
              </PreviewSection>

              <PreviewSection title="Form" description="Base UI 제출 처리가 포함된 폼 컴포넌트.">
                <Form className="form-card" onSubmit={(event) => event.preventDefault()}>
                  <Field.Root name="name" className="field-root">
                    <Field.Label className="field-label">이름</Field.Label>
                    <ClearableInput as={Field.Control} required placeholder="홍길동" />
                  </Field.Root>
                  <Button type="submit" className="button-primary">
                    제출
                  </Button>
                </Form>
              </PreviewSection>

              <PreviewSection title="Input" description="독립형 텍스트 입력 필드.">
                <ClearableInput className="search-input" placeholder="컴포넌트 검색" />
              </PreviewSection>

              <PreviewSection
                title="Menu"
                description="버튼 트리거로 여는 드롭다운 메뉴. 카드/행의 더보기 액션 등 짧은 옵션 모음에 사용합니다."
              >
                <Menu.Root>
                  <Menu.Trigger className="button-secondary">
                    메뉴 열기
                    <Icon svg={chevronDownIcon} className="trigger-icon" size={14} />
                  </Menu.Trigger>
                  <Menu.Portal>
                    <Menu.Positioner
                      className="positioner"
                      sideOffset={FLOATING_OFFSET}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <Menu.Popup className="menu-popup">
                        <Menu.Item className="menu-item">
                          <Icon svg={starIcon} className="menu-item-icon icon-muted" size={16} />
                          <span className="menu-item-label">즐겨찾기 추가</span>
                        </Menu.Item>
                        <Menu.Item className="menu-item">
                          <Icon svg={bellIcon} className="menu-item-icon icon-muted" size={16} />
                          <span className="menu-item-label">나중에 보기</span>
                        </Menu.Item>
                      </Menu.Popup>
                    </Menu.Positioner>
                  </Menu.Portal>
                </Menu.Root>
              </PreviewSection>

              <PreviewSection title="Meter" description="경계가 있는 측정 인디케이터.">
                <Meter.Root value={72} min={0} max={100} className="meter-root">
                  <div className="meter-meta">
                    <Meter.Label className="meter-label">리소스 사용량</Meter.Label>
                    <Meter.Value className="meter-value" />
                  </div>
                  <Meter.Track className="meter-track">
                    <Meter.Indicator className="meter-indicator" />
                  </Meter.Track>
                </Meter.Root>
              </PreviewSection>

              <PreviewSection title="Navigation Menu" description="미리보기 콘텐츠가 포함된 사이트 내비게이션.">
                <NavigationMenu.Root className="nav-menu-root">
                  <NavigationMenu.List className="nav-menu-list">
                    <NavigationMenu.Item value="solutions">
                      <NavigationMenu.Trigger className="nav-menu-trigger">
                        솔루션
                        <Icon svg={chevronDownIcon} className="nav-menu-icon" size={14} />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content">
                        <NavigationMenu.Link className="nav-menu-feature" href="#gallery">
                          <span className="nav-menu-title">AI 어시스턴트</span>
                          <span className="nav-menu-desc">자연어 기반 인터페이스의 시각 컴포넌트를 미리 확인하세요.</span>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span className="nav-menu-title">디자인 시스템</span>
                          <span className="nav-menu-desc">토큰 기반 컴포넌트 라이브러리와 CSS 아키텍처.</span>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span className="nav-menu-title">아이콘 패키지</span>
                          <span className="nav-menu-desc">1,509개 SVG 아이콘, currentColor 정규화 완료.</span>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item value="design">
                      <NavigationMenu.Trigger className="nav-menu-trigger" data-active>
                        디자인
                        <Icon svg={chevronDownIcon} className="nav-menu-icon" size={14} />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content nav-menu-content-compact">
                        <NavigationMenu.Link className="nav-menu-link" data-active href="#tokens">
                          <span className="nav-menu-title">토큰</span>
                          <span className="nav-menu-desc">색상, 반경, 간격, 그림자 변수.</span>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span className="nav-menu-title">컴포넌트</span>
                          <span className="nav-menu-desc">NCAI 스타일이 적용된 Base UI 프리미티브.</span>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span className="nav-menu-title">패턴</span>
                          <span className="nav-menu-desc">재사용 가능한 인터랙션 및 레이아웃 예제.</span>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item value="resources">
                      <NavigationMenu.Trigger className="nav-menu-trigger">
                        리소스
                        <Icon svg={chevronDownIcon} className="nav-menu-icon" size={14} />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content nav-menu-content-compact">
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span className="nav-menu-title">미리보기 가이드</span>
                          <span className="nav-menu-desc">이 페이지로 디자인 변경을 감사하세요.</span>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span className="nav-menu-title">아이콘 패키지</span>
                          <span className="nav-menu-desc">프로덕트용 설치 가능한 SVG 에셋.</span>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                  <NavigationMenu.Portal>
                    <NavigationMenu.Positioner
                      className="nav-menu-positioner"
                      align="start"
                      sideOffset={FLOATING_OFFSET}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <NavigationMenu.Popup className="nav-menu-popup">
                        <NavigationMenu.Viewport className="nav-menu-viewport" />
                      </NavigationMenu.Popup>
                    </NavigationMenu.Positioner>
                  </NavigationMenu.Portal>
                </NavigationMenu.Root>
              </PreviewSection>

              <PreviewSection title="Number Field" description="증감 및 숫자 입력 필드.">
                <NumberField.Root defaultValue={1} min={1} max={9} className="number-field">
                  <NumberField.Group className="number-group">
                    <NumberField.Decrement className="icon-btn icon-btn--ghost icon-btn--md" aria-label="값 감소">
                      <Icon svg={minusIcon} size={16} />
                    </NumberField.Decrement>
                    <NumberField.Input className="number-input" />
                    <NumberField.Increment className="icon-btn icon-btn--ghost icon-btn--md" aria-label="값 증가">
                      <Icon svg={plusIcon} size={16} />
                    </NumberField.Increment>
                  </NumberField.Group>
                </NumberField.Root>
              </PreviewSection>

              <PreviewSection title="OTP Field" description="일회용 인증 코드 입력 필드.">
                <div className="otp-field">
                  <label className="field-label" htmlFor="preview-verification-code">
                    인증 코드
                  </label>
                  <OTPField.Root id="preview-verification-code" className="otp-root" length={6}>
                    {Array.from({ length: 6 }, (_, index) => (
                      <OTPField.Input
                        key={index}
                        className="otp-input"
                        aria-label={index === 0 ? undefined : `인증 코드 ${index + 1}번째 자리`}
                      />
                    ))}
                  </OTPField.Root>
                </div>
              </PreviewSection>

              <PreviewSection title="Popover" description="앵커된 보조 정보 팝오버. info 아이콘 옆에 부가 설명을 띄우는 가장 보편적인 패턴.">
                <Popover.Root>
                  <Popover.Trigger
                    className="icon-btn icon-btn--ghost icon-btn--sm"
                    aria-label="설치 안내"
                  >
                    <Icon svg={infoIcon} size={16} />
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Positioner
                      className="popover-positioner"
                      align="center"
                      sideOffset={FLOATING_OFFSET_LOOSE}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <Popover.Popup className="popover-card">
                        <Popover.Arrow className="popup-arrow">
                          <PopupArrowGlyph />
                        </Popover.Arrow>
                        <Popover.Title className="popover-title">바로 사용 가능</Popover.Title>
                        <Popover.Description className="popover-copy">
                          지금 바로 NCAI 디자인 시스템을 프로젝트에 설치하고 사용할 수 있습니다.
                        </Popover.Description>
                      </Popover.Popup>
                    </Popover.Positioner>
                  </Popover.Portal>
                </Popover.Root>
              </PreviewSection>

              <PreviewSection title="Preview Card" description="링크에 풍부한 미리보기를 제공하는 호버 카드.">
                <PreviewCard.Root>
                  <p className="preview-card-demo-prose">
                    본 시스템의{' '}
                    <PreviewCard.Trigger className="text-link" href="#tokens">
                      Surface Soft 토큰
                    </PreviewCard.Trigger>
                    을 적용한 카드 — 링크를 호버하면 미리보기가 나타납니다.
                  </p>
                  <PreviewCard.Portal>
                    <PreviewCard.Positioner
                      className="positioner"
                      sideOffset={FLOATING_OFFSET_LOOSE}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <PreviewCard.Popup className="preview-card">
                        <div className="mini-product" />
                        <div className="preview-card-text">
                          <p className="popover-title">Preview Card</p>
                          <p className="popover-copy">위키 문서로 가는 인라인 링크, 사용자 프로필 호버, 토큰·컴포넌트 이름 참조 — 본문 흐름을 끊지 않고 링크 너머를 미리 들여다보게 하고 싶을 때 사용합니다.</p>
                        </div>
                      </PreviewCard.Popup>
                    </PreviewCard.Positioner>
                  </PreviewCard.Portal>
                </PreviewCard.Root>
              </PreviewSection>

              <PreviewSection title="Progress" description="작업 진행률 시각화 컴포넌트.">
                <Progress.Root value={64} className="progress-root">
                  <Progress.Track className="progress-track">
                    <Progress.Indicator className="progress-indicator" />
                  </Progress.Track>
                </Progress.Root>
              </PreviewSection>

              <PreviewSection title="Radio" description="그룹 내 단일 선택 컨트롤.">
                <RadioGroup className="choice-stack" name="theme" defaultValue="light" aria-label="테마">
                  {[
                    ['light', '라이트 테마'],
                    ['dark', '다크 테마'],
                    ['system', '시스템 기본값']
                  ].map(([value, label]) => (
                    <label className="check-row" key={value}>
                      <Radio.Root value={value} className="radio">
                        <Radio.Indicator className="radio-indicator" />
                      </Radio.Root>
                      {label}
                    </label>
                  ))}
                </RadioGroup>
              </PreviewSection>

              <PreviewSection title="Scroll Area" description="밀도 높은 콘텐츠를 위한 커스텀 스크롤 영역.">
                <ScrollArea.Root className="scroll-root">
                  <ScrollArea.Viewport className="scroll-viewport">
                    {sections.map((section) => (
                      <p key={section}>{section} 컴포넌트가 이 미리보기에 포함되어 있습니다.</p>
                    ))}
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar className="scrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="scroll-thumb" />
                  </ScrollArea.Scrollbar>
                </ScrollArea.Root>
              </PreviewSection>

              <PreviewSection title="Select" description="항목 인디케이터가 있는 드롭다운 선택.">
                <Select.Root defaultValue="tokens">
                  <Select.Trigger className="select-trigger" aria-label="카테고리 선택">
                    <Select.Value />
                    <Select.Icon className="select-icon">
                      <Icon svg={chevronDownIcon} className="trigger-icon" size={16} />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Positioner
                      className="autocomplete-positioner"
                      align="start"
                      alignItemWithTrigger={false}
                      sideOffset={FLOATING_OFFSET}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <Select.Popup className="autocomplete-popup autocomplete-list">
                        {[
                          ['tokens', '디자인 토큰'],
                          ['components', '컴포넌트'],
                          ['icons', '아이콘']
                        ].map(([value, label]) => (
                          <Select.Item key={value} value={value} className="autocomplete-item select-item">
                            <Select.ItemIndicator className="select-item-indicator">
                              <svg
                                className="select-check-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  d="M19.2929 5.29289C19.6834 4.90237 20.3164 4.90237 20.707 5.29289C21.0975 5.68341 21.0975 6.31643 20.707 6.70695L9.70696 17.7069C9.31643 18.0975 8.68342 18.0975 8.29289 17.7069L3.29289 12.7069C2.90237 12.3164 2.90237 11.6834 3.29289 11.2929C3.68342 10.9023 4.31643 10.9023 4.70696 11.2929L8.99992 15.5858L19.2929 5.29289Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Select.ItemIndicator>
                            <Select.ItemText>{label}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Popup>
                    </Select.Positioner>
                  </Select.Portal>
                </Select.Root>
              </PreviewSection>

              <PreviewSection title="Separator" description="접근 가능한 시각적 구분선.">
                <div className="separator-demo">
                  <span>개요</span>
                  <Separator className="separator" />
                  <span>명세</span>
                </div>
              </PreviewSection>

              <PreviewSection title="Sidebar" description="아이콘과 2뎁스 메뉴를 지원하는 좌측 내비게이션. 모바일에서는 햄버거 트리거로 Drawer(left) 변형으로 전환합니다.">
                <SidebarDemo />
                <div className="mobile-sidebar-demo">
                  <div className="mobile-sidebar-demo-label">모바일 뷰 (≤768px)</div>
                  <Drawer.Root>
                    <Drawer.Trigger
                      className="hamburger-button"
                      aria-label="메뉴 열기"
                    >
                      <Icon svg={menuIcon} className="icon-inline icon-ink" size={16} />
                    </Drawer.Trigger>
                    <Drawer.Portal>
                      <Drawer.Backdrop className="overlay-backdrop" />
                      <Drawer.Viewport>
                      <Drawer.Popup className="drawer-card drawer-card--left">
                        <header className="drawer-header">
                          <div className="drawer-header-text">
                            <Drawer.Title className="modal-title">NCAI Design</Drawer.Title>
                          </div>
                          <Drawer.Close className="drawer-close" aria-label="닫기">
                            <Icon svg={xIcon} className="icon-inline icon-muted" size={18} />
                          </Drawer.Close>
                        </header>
                        <div className="drawer-body" style={{ padding: 0 }}>
                          <SidebarDemo />
                        </div>
                      </Drawer.Popup>
                      </Drawer.Viewport>
                    </Drawer.Portal>
                  </Drawer.Root>
                </div>
              </PreviewSection>

              <PreviewSection title="Slider" description="Primary 액센트 컬러 인디케이터를 가진 범위 입력.">
                <Slider.Root defaultValue={40} className="slider-root">
                  <Slider.Control className="slider-control">
                    <Slider.Track className="slider-track">
                      <Slider.Indicator className="slider-indicator" />
                      <Slider.Thumb className="slider-thumb" />
                    </Slider.Track>
                  </Slider.Control>
                </Slider.Root>
              </PreviewSection>

              <PreviewSection title="Switch" description="온/오프 설정 토글 컨트롤. sm / md / lg 3가지 사이즈.">
                <label className="switch-row">
                  <Switch.Root className="switch switch--sm">
                    <Switch.Thumb className="switch-thumb" />
                  </Switch.Root>
                  Small (32×20)
                </label>
                <label className="switch-row">
                  <Switch.Root defaultChecked className="switch">
                    <Switch.Thumb className="switch-thumb" />
                  </Switch.Root>
                  Medium (42×24) — 기본
                </label>
                <label className="switch-row">
                  <Switch.Root defaultChecked className="switch switch--lg">
                    <Switch.Thumb className="switch-thumb" />
                  </Switch.Root>
                  Large (56×32)
                </label>
              </PreviewSection>

              <PreviewSection title="Table" description="헤더·행 대비, 12px 반경, Hairline 경계선.">
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>이름</th>
                        <th>역할</th>
                        <th>상태</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>김설아</td>
                        <td>디자이너</td>
                        <td><span className="badge badge-success">활성</span></td>
                      </tr>
                      <tr>
                        <td>이준혁</td>
                        <td>개발자</td>
                        <td><span className="badge badge-warning">대기</span></td>
                      </tr>
                      <tr>
                        <td>박소연</td>
                        <td>PM</td>
                        <td><span className="badge badge-error">중단</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </PreviewSection>

              <PreviewSection title="Tabs" description="단일 카드 안에서 관련 패널을 전환하는 탭.">
                <Tabs.Root defaultValue="overview" className="tabs-root">
                  <Tabs.List className="tabs-list">
                    <Tabs.Tab value="overview" className="tab">
                      개요
                    </Tabs.Tab>
                    <Tabs.Tab value="tech" className="tab">
                      기술 명세
                    </Tabs.Tab>
                  </Tabs.List>
                  <Tabs.Panel value="overview" className="tab-panel">
                    절제된 UI, 대담한 여백의 미학, 단 하나의 Primary 액센트 컬러(#006EFF).
                  </Tabs.Panel>
                  <Tabs.Panel value="tech" className="tab-panel">
                    Linear Text 폰트 · 16px body · 8px 베이스 스페이싱 시스템.
                  </Tabs.Panel>
                </Tabs.Root>
              </PreviewSection>

              <PreviewSection title="Toast" description="일시적인 알림 컴포넌트.">
                <ToastDemo />
              </PreviewSection>

              <PreviewSection title="Toggle" description="두 가지 상태를 가진 토글 버튼.">
                <Toggle className="toggle-button" defaultPressed>
                  고대비 모드
                </Toggle>
              </PreviewSection>

              <PreviewSection title="Toggle Group" description="공유 상태를 가진 세그먼트 컨트롤.">
                <ToggleGroupDemo />
              </PreviewSection>

              <PreviewSection
                title="Toolbar"
                description="에디터 액션 바: 즉시 실행(Undo/Redo/Link) + 지속 토글(B/I/U/S) + 단일선택(정렬) + 주요 액션(공유)."
              >
                <Toolbar.Root className="toolbar">
                  {/* 즉시 실행 — 클릭 시 1회 실행, 상태 유지 없음 */}
                  <Toolbar.Group className="toolbar-group">
                    <Toolbar.Button className="toolbar-button toolbar-icon-button" aria-label="실행 취소">
                      <Icon svg={undoIcon} size={18} />
                    </Toolbar.Button>
                    <Toolbar.Button className="toolbar-button toolbar-icon-button" aria-label="다시 실행">
                      <Icon svg={redoIcon} size={18} />
                    </Toolbar.Button>
                  </Toolbar.Group>

                  <Toolbar.Separator className="toolbar-separator" />

                  {/* 지속 토글 — 눌린 상태가 유지됨 (텍스트 서식) */}
                  <Toolbar.Group className="toolbar-group">
                    <Toolbar.Button
                      render={<Toggle defaultPressed />}
                      className="toolbar-button toolbar-icon-button"
                      aria-label="굵게"
                    >
                      <Icon svg={boldIcon} size={18} />
                    </Toolbar.Button>
                    <Toolbar.Button
                      render={<Toggle />}
                      className="toolbar-button toolbar-icon-button"
                      aria-label="기울임"
                    >
                      <Icon svg={italicIcon} size={18} />
                    </Toolbar.Button>
                    <Toolbar.Button
                      render={<Toggle />}
                      className="toolbar-button toolbar-icon-button"
                      aria-label="밑줄"
                    >
                      <Icon svg={underlineIcon} size={18} />
                    </Toolbar.Button>
                    <Toolbar.Button
                      render={<Toggle />}
                      className="toolbar-button toolbar-icon-button"
                      aria-label="취소선"
                    >
                      <Icon svg={strikethroughIcon} size={18} />
                    </Toolbar.Button>
                  </Toolbar.Group>

                  <Toolbar.Separator className="toolbar-separator" />

                  {/* 단일 선택 — 셋 중 하나만 활성 (정렬). 활성 항목 재클릭으로 deselect되지 않음. */}
                  <ToolbarAlignmentSegment />

                  <Toolbar.Separator className="toolbar-separator" />

                  {/* 즉시 실행 — 다이얼로그/리스트 삽입 */}
                  <Toolbar.Group className="toolbar-group">
                    <Toolbar.Button className="toolbar-button toolbar-icon-button" aria-label="링크 삽입">
                      <Icon svg={linkIcon} size={18} />
                    </Toolbar.Button>
                    <Toolbar.Button className="toolbar-button toolbar-icon-button" aria-label="글머리 기호">
                      <Icon svg={listIcon} size={18} />
                    </Toolbar.Button>
                    <Toolbar.Button className="toolbar-button toolbar-icon-button" aria-label="번호 매기기">
                      <Icon svg={listOrderedIcon} size={18} />
                    </Toolbar.Button>
                  </Toolbar.Group>

                  <div className="toolbar-spacer" />

                  {/* 주요 액션 */}
                  <Toolbar.Button className="toolbar-button primary">공유</Toolbar.Button>
                </Toolbar.Root>
              </PreviewSection>

              <PreviewSection title="Tooltip" description="호버 또는 포커스 시 표시되는 힌트. 단축키 hint를 함께 노출할 수 있습니다.">
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Tooltip.Root>
                    <Tooltip.Trigger className="button-secondary">툴팁 보기</Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Positioner
                        className="positioner"
                        sideOffset={FLOATING_OFFSET}
                        collisionPadding={VIEWPORT_PADDING}
                      >
                        <Tooltip.Popup className="tooltip-popup">
                          <Tooltip.Arrow className="popup-arrow" />
                          NCAI 디자인 원칙: 절제를 통한 위계의 완성.
                        </Tooltip.Popup>
                      </Tooltip.Positioner>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <Tooltip.Root>
                    <Tooltip.Trigger className="button-secondary">툴팁 + 단축키 보기</Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Positioner
                        className="positioner"
                        sideOffset={FLOATING_OFFSET}
                        collisionPadding={VIEWPORT_PADDING}
                      >
                        <Tooltip.Popup className="tooltip-popup">
                          <Tooltip.Arrow className="popup-arrow" />
                          <span>저장</span>
                          <span className="tooltip-kbd-group">
                            <kbd>⌘</kbd>
                            <kbd>S</kbd>
                          </span>
                        </Tooltip.Popup>
                      </Tooltip.Positioner>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
              </PreviewSection>
            </div>

            <section className="handoff-tile text-stack-section" id="handoff">
              <h2>스타일 레이어에서 디자인 언어를 교체하세요</h2>
              <p>
                Base UI 구조와 컴포넌트 커버리지는 그대로 유지하고, CSS 토큰과 클래스 처리를 새로운 design-system.md에
                맞춰 업데이트하는 것만으로 전체 디자인 시스템을 전환할 수 있습니다.
              </p>
            </section>

            <AllIconsSection />
          </main>
        </div>
      </Tooltip.Provider>
    </Toast.Provider>
  );
}

function AllIconsSection() {
  return (
    <section className="all-icons-section text-stack-section" id="all-icons">
      <h2>All icons</h2>
      <p>
        {iconMetadata.length} SVG icons from <code>packages/icons/icons</code>, rendered at 24px.
      </p>
      <div className="all-icons-grid" aria-label="All design-system icons">
        {allPreviewIcons.map((icon) => (
          <div className="all-icon-cell" key={icon.fileName} title={`${icon.title} (${icon.fileName})`}>
            {icon.svg ? <Icon svg={icon.svg} size={24} /> : <span className="all-icon-missing" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function PreviewSection({
  title,
  description,
  children,
  wide
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={`component-card${wide ? ' card-full' : ''}`} aria-labelledby={`${slug(title)}-title`}>
      <div className="component-copy">
        <span className="component-index">{title}</span>
        <h3 id={`${slug(title)}-title`}>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="component-demo">{children}</div>
    </section>
  );
}

function ToolbarAlignmentSegment() {
  const [value, setValue] = React.useState<string[]>(['left']);
  return (
    <ToggleGroup
      value={value}
      onValueChange={(next) => {
        if (next.length === 0) return;
        setValue(next);
      }}
      className="toolbar-group toolbar-segment"
    >
      <Toggle value="left" className="toolbar-button toolbar-icon-button" aria-label="왼쪽 정렬">
        <Icon svg={alignLeftIcon} size={18} />
      </Toggle>
      <Toggle value="center" className="toolbar-button toolbar-icon-button" aria-label="가운데 정렬">
        <Icon svg={alignCenterIcon} size={18} />
      </Toggle>
      <Toggle value="right" className="toolbar-button toolbar-icon-button" aria-label="오른쪽 정렬">
        <Icon svg={alignRightIcon} size={18} />
      </Toggle>
    </ToggleGroup>
  );
}

function ToggleGroupDemo() {
  const [value, setValue] = React.useState<string[]>(['compact']);
  const groupRef = React.useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0, visible: false });

  React.useLayoutEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    const pressed = group.querySelector<HTMLElement>('.toggle-item[data-pressed]');
    if (!pressed) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    setIndicator({
      left: pressed.offsetLeft,
      width: pressed.offsetWidth,
      visible: true,
    });
  }, [value]);

  return (
    <ToggleGroup
      ref={groupRef}
      className="toggle-group"
      value={value}
      onValueChange={(next) => {
        if (next.length === 0) return;
        setValue(next);
      }}
      aria-label="레이아웃 밀도"
    >
      <span
        className="toggle-indicator"
        aria-hidden
        style={{
          transform: `translateX(${indicator.left}px)`,
          width: indicator.width,
          opacity: indicator.visible ? 1 : 0,
        }}
      />
      <Toggle value="compact" className="toggle-item">
        컴팩트
      </Toggle>
      <Toggle value="comfortable" className="toggle-item">
        편안함
      </Toggle>
    </ToggleGroup>
  );
}

function ToastDemo() {
  const toastManager = Toast.useToastManager();

  return (
    <>
      <div className="inline-actions">
        <Button
          className="button-primary"
          onClick={() => {
            toastManager.add({
              title: '저장 완료',
              description: 'NCAI 디자인 토큰이 갤러리 전체에 반영되었습니다.'
            });
          }}
        >
          Positive
        </Button>
        <Button
          className="button-secondary"
          onClick={() => {
            toastManager.add({
              title: '저장 실패',
              description: '토큰 저장 중 문제가 발생했습니다. 변경 사항을 다시 확인하세요.'
            });
          }}
        >
          Negative
        </Button>
      </div>
      <Toast.Portal>
        <Toast.Viewport className="toast-viewport">
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => {
    const isNegative = toast.title === '저장 실패';
    const statusClass = isNegative ? 'toast-card--negative' : 'toast-card--positive';
    const dotClass = isNegative ? 'toast-dot-negative' : 'toast-dot-positive';

    return (
      <Toast.Root key={toast.id} toast={toast} className={`toast-card ${statusClass}`.trim()}>
        <span className={`toast-dot ${dotClass}`} aria-hidden="true" />
        <Toast.Content className="toast-content">
          <Toast.Title className="toast-title" />
          <Toast.Description className="toast-description" />
        </Toast.Content>
        <Toast.Close className="toast-close" aria-label="닫기">×</Toast.Close>
      </Toast.Root>
    );
  });
}

const dayLabels = ['일', '월', '화', '수', '목', '금', '토'];
const monthFormatter = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long' });
const dateFormatter = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
const today = startOfDay(new Date());
const monthOptions = Array.from({ length: 12 }, (_, index) => index);
const yearOptions = Array.from({ length: 201 }, (_, index) => 1900 + index);
type DateRange = { from?: Date; to?: Date };

function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const [visibleMonth, setVisibleMonth] = React.useState(() => startOfMonth(today));
  const [selectedRange, setSelectedRange] = React.useState<DateRange>({});
  const [rangeVisibleMonth, setRangeVisibleMonth] = React.useState(() => startOfMonth(today));
  const selectedLabel = selectedDate ? dateFormatter.format(selectedDate) : '날짜 선택';
  const rangeLabel =
    selectedRange.from && selectedRange.to
      ? `${formatShortDate(selectedRange.from)} - ${formatShortDate(selectedRange.to)}`
      : selectedRange.from
        ? `${formatShortDate(selectedRange.from)} - 종료일 선택`
        : '날짜 구간 선택';
  const days = React.useMemo(() => getCalendarDays(visibleMonth), [visibleMonth]);
  const rangeDays = React.useMemo(() => getCalendarDays(rangeVisibleMonth), [rangeVisibleMonth]);

  const handleRangeSelect = (day: Date) => {
    if (!selectedRange.from || selectedRange.to) {
      setSelectedRange({ from: day });
      setRangeVisibleMonth(startOfMonth(day));
      return;
    }

    const [from, to] = sortDates(selectedRange.from, day);
    setSelectedRange({ from, to });
    setRangeVisibleMonth(startOfMonth(day));
  };

  return (
    <div className="date-picker-stack">
      <Field.Root name="preview-date" className="date-picker-field">
        <Field.Label className="field-label">날짜 선택</Field.Label>
        <Popover.Root>
          <Popover.Trigger
            render={<Button className="date-picker-trigger button-secondary" />}
            aria-label={selectedDate ? `선택된 날짜: ${selectedLabel}` : '날짜 선택'}
          >
            <Icon svg={calendarIcon} size={18} />
            <span>{selectedLabel}</span>
          </Popover.Trigger>
          <DatePickerPopover visibleMonth={visibleMonth} onVisibleMonthChange={setVisibleMonth}>
            <CalendarGrid
              days={days}
              visibleMonth={visibleMonth}
              isSelected={(day) => Boolean(selectedDate && isSameDay(day, selectedDate))}
              onSelect={(day) => {
                setSelectedDate(day);
                setVisibleMonth(startOfMonth(day));
              }}
            />
          </DatePickerPopover>
        </Popover.Root>
      </Field.Root>

      <Field.Root name="preview-date-range" className="date-picker-field">
        <Field.Label className="field-label">날짜 구간 선택</Field.Label>
        <Popover.Root>
          <Popover.Trigger
            render={<Button className="date-picker-trigger button-secondary" />}
            aria-label={`선택된 날짜 구간: ${rangeLabel}`}
          >
            <Icon svg={calendarIcon} size={18} />
            <span>{rangeLabel}</span>
          </Popover.Trigger>
          <DatePickerPopover visibleMonth={rangeVisibleMonth} onVisibleMonthChange={setRangeVisibleMonth}>
            <CalendarGrid
              days={rangeDays}
              visibleMonth={rangeVisibleMonth}
              isSelected={(day) =>
                Boolean(
                  (selectedRange.from && isSameDay(day, selectedRange.from)) ||
                    (selectedRange.to && isSameDay(day, selectedRange.to))
                )
              }
              isInRange={(day) => Boolean(selectedRange.from && selectedRange.to && isDateBetween(day, selectedRange.from, selectedRange.to))}
              onSelect={handleRangeSelect}
            />
          </DatePickerPopover>
        </Popover.Root>
      </Field.Root>
    </div>
  );
}

function DatePickerPopover({
  visibleMonth,
  onVisibleMonthChange,
  children
}: {
  visibleMonth: Date;
  onVisibleMonthChange: React.Dispatch<React.SetStateAction<Date>>;
  children: React.ReactNode;
}) {
  return (
    <Popover.Portal>
      <Popover.Positioner
        className="popover-positioner"
        align="start"
        sideOffset={FLOATING_OFFSET_LOOSE}
        collisionPadding={VIEWPORT_PADDING}
      >
        <Popover.Popup className="date-picker-popover">
          <Popover.Arrow className="popup-arrow">
            <PopupArrowGlyph />
          </Popover.Arrow>
          <Popover.Title className="date-picker-caption">
            <button
              type="button"
              className="date-picker-nav-button"
              aria-label="이전 달"
              onClick={() => onVisibleMonthChange((month) => addMonths(month, -1))}
            >
              <Icon svg={chevronRightIcon} size={16} />
            </button>
            <div className="date-picker-selects" aria-live="polite">
              <CalendarSelect
                ariaLabel="연도 선택"
                options={yearOptions.map((year) => ({ label: `${year}년`, value: String(year) }))}
                value={String(visibleMonth.getFullYear())}
                onValueChange={(value) => onVisibleMonthChange((month) => setYearPart(month, Number(value)))}
              />
              <CalendarSelect
                ariaLabel="월 선택"
                options={monthOptions.map((month) => ({ label: `${month + 1}월`, value: String(month) }))}
                value={String(visibleMonth.getMonth())}
                onValueChange={(value) => onVisibleMonthChange((month) => setMonthPart(month, Number(value)))}
              />
            </div>
            <button
              type="button"
              className="date-picker-nav-button"
              aria-label="다음 달"
              onClick={() => onVisibleMonthChange((month) => addMonths(month, 1))}
            >
              <Icon svg={chevronRightIcon} size={16} />
            </button>
          </Popover.Title>
          {children}
        </Popover.Popup>
      </Popover.Positioner>
    </Popover.Portal>
  );
}

function CalendarSelect({
  ariaLabel,
  options,
  value,
  onValueChange
}: {
  ariaLabel: string;
  options: Array<{ label: string; value: string }>;
  value: string;
  onValueChange: (value: string) => void;
}) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select.Root
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue) onValueChange(nextValue);
      }}
    >
      <Select.Trigger className="date-picker-select-trigger" aria-label={ariaLabel}>
        <Select.Value>{selectedOption?.label}</Select.Value>
        <Select.Icon className="select-icon">
          <Icon svg={chevronDownIcon} className="trigger-icon" size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className="autocomplete-positioner"
          align="start"
          alignItemWithTrigger={false}
          sideOffset={FLOATING_OFFSET}
          collisionPadding={VIEWPORT_PADDING}
        >
          <Select.Popup className="autocomplete-popup autocomplete-list date-picker-select-popup">
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value} className="autocomplete-item select-item">
                <Select.ItemIndicator className="select-item-indicator">
                  <svg
                    className="select-check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M19.2929 5.29289C19.6834 4.90237 20.3164 4.90237 20.707 5.29289C21.0975 5.68341 21.0975 6.31643 20.707 6.70695L9.70696 17.7069C9.31643 18.0975 8.68342 18.0975 8.29289 17.7069L3.29289 12.7069C2.90237 12.3164 2.90237 11.6834 3.29289 11.2929C3.68342 10.9023 4.31643 10.9023 4.70696 11.2929L8.99992 15.5858L19.2929 5.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                </Select.ItemIndicator>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

function CalendarGrid({
  days,
  visibleMonth,
  isSelected,
  isInRange,
  onSelect
}: {
  days: Date[];
  visibleMonth: Date;
  isSelected: (day: Date) => boolean;
  isInRange?: (day: Date) => boolean;
  onSelect: (day: Date) => void;
}) {
  return (
    <div className="date-picker-grid" role="grid" aria-label={`${monthFormatter.format(visibleMonth)} 달력`}>
      {dayLabels.map((day) => (
        <span key={day} className="date-picker-weekday" role="columnheader">
          {day}
        </span>
      ))}
      {days.map((day) => {
        const selected = isSelected(day);
        const inRange = isInRange?.(day) ?? false;
        const isCurrentMonth = day.getMonth() === visibleMonth.getMonth();
        const isToday = isSameDay(day, today);

        return (
          <button
            key={day.toISOString()}
            type="button"
            className="date-picker-day"
            data-outside-month={!isCurrentMonth || undefined}
            data-selected={selected || undefined}
            data-in-range={inRange || undefined}
            data-today={isToday || undefined}
            aria-label={dateFormatter.format(day)}
            aria-pressed={selected}
            onClick={() => onSelect(day)}
          >
            {day.getDate()}
          </button>
        );
      })}
    </div>
  );
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addDays(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function setMonthPart(date: Date, month: number) {
  return new Date(date.getFullYear(), month, 1);
}

function setYearPart(date: Date, year: number) {
  return new Date(year, date.getMonth(), 1);
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function sortDates(a: Date, b: Date): [Date, Date] {
  return a.getTime() <= b.getTime() ? [a, b] : [b, a];
}

function isDateBetween(date: Date, from: Date, to: Date) {
  return date.getTime() > from.getTime() && date.getTime() < to.getTime();
}

function formatShortDate(date: Date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function getCalendarDays(month: Date) {
  const start = startOfMonth(month);
  const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const gridStart = addDays(start, -start.getDay());
  const gridEnd = addDays(end, 6 - end.getDay());
  const days = Math.round((gridEnd.getTime() - gridStart.getTime()) / 86400000) + 1;

  return Array.from({ length: days }, (_, index) => addDays(gridStart, index));
}

function SidebarDemo() {
  const [active, setActive] = React.useState('home');
  const designChildren = ['tokens', 'components', 'templates'];
  const devChildren = ['build', 'test', 'deploy'];
  const designHasActive = designChildren.includes(active);
  const devHasActive = devChildren.includes(active);

  const item = (key: string, label: string, icon: string, badge?: string) => (
    <a
      className={`sidebar-item${active === key ? ' is-active' : ''}`}
      href={`#sidebar-${key}`}
      onClick={(e) => {
        e.preventDefault();
        setActive(key);
      }}
    >
      <Icon svg={icon} className="sidebar-item-icon" size={18} />
      <span className="sidebar-item-label">{label}</span>
      {badge ? <span className="sidebar-item-badge">{badge}</span> : null}
    </a>
  );

  const sub = (key: string, label: string) => (
    <a
      className={`sidebar-subitem${active === key ? ' is-active' : ''}`}
      href={`#sidebar-${key}`}
      onClick={(e) => {
        e.preventDefault();
        setActive(key);
      }}
    >
      {label}
    </a>
  );

  return (
    <nav className="sidebar" aria-label="사이드바">
      <div className="sidebar-section-label">메인</div>
      {item('home', '대시보드', homeIcon)}
      {item('mail', '메시지', mailIcon, '3')}
      {item('calendar', '일정', calendarIcon)}

      <div className="sidebar-section-label">작업공간</div>
      <Collapsible.Root defaultOpen className="sidebar-group">
        <Collapsible.Trigger
          className={`sidebar-item sidebar-group-trigger${designHasActive ? ' has-active-child' : ''}`}
        >
          <Icon svg={layersIcon} className="sidebar-item-icon" size={18} />
          <span className="sidebar-item-label">디자인</span>
          <Icon svg={chevronRightIcon} className="sidebar-item-chevron" size={14} />
        </Collapsible.Trigger>
        <Collapsible.Panel keepMounted className="sidebar-subitems">
          {sub('tokens', '토큰')}
          {sub('components', '컴포넌트')}
          {sub('templates', '템플릿')}
        </Collapsible.Panel>
      </Collapsible.Root>
      <Collapsible.Root className="sidebar-group">
        <Collapsible.Trigger
          className={`sidebar-item sidebar-group-trigger${devHasActive ? ' has-active-child' : ''}`}
        >
          <Icon svg={codeIcon} className="sidebar-item-icon" size={18} />
          <span className="sidebar-item-label">개발</span>
          <Icon svg={chevronRightIcon} className="sidebar-item-chevron" size={14} />
        </Collapsible.Trigger>
        <Collapsible.Panel keepMounted className="sidebar-subitems">
          {sub('build', '빌드')}
          {sub('test', '테스트')}
          {sub('deploy', '배포')}
        </Collapsible.Panel>
      </Collapsible.Root>

      <div className="sidebar-section-label">계정</div>
      {item('user', '프로필', userIcon)}
      {item('settings', '설정', settingsIcon)}
    </nav>
  );
}

function IconTooltipButton({
  label,
  shortcut,
  svg,
  size,
  className,
  disabled
}: {
  label: string;
  shortcut?: string[];
  svg: string;
  size: number;
  className: string;
  disabled?: boolean;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger className={className} aria-label={label} disabled={disabled}>
        <Icon svg={svg} size={size} />
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner
          className="positioner"
          sideOffset={FLOATING_OFFSET}
          collisionPadding={VIEWPORT_PADDING}
        >
          <Tooltip.Popup className="tooltip-popup">
            <Tooltip.Arrow className="popup-arrow" />
            <span>{label}</span>
            {shortcut && (
              <span className="tooltip-kbd-group">
                {shortcut.map((k) => (
                  <kbd key={k}>{k}</kbd>
                ))}
              </span>
            )}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

function Icon({ svg, className, size = 24 }: { svg: string; className?: string; size?: number }) {
  return (
    <span
      className={`icon-inline${className ? ` ${className}` : ''}`}
      style={{ width: size, height: size } as React.CSSProperties}
      // SVG 출처: @ncai/design-system-icons (내부 패키지, 신뢰된 소스)
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden="true"
    />
  );
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
