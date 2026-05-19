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
import chevronDownIcon from '@ncai/design-system-icons/icons/chevron-down.svg';
import searchIcon from '@ncai/design-system-icons/icons/search.svg?raw';
import starIcon from '@ncai/design-system-icons/icons/star.svg?raw';
import heartIcon from '@ncai/design-system-icons/icons/heart.svg?raw';
import homeIcon from '@ncai/design-system-icons/icons/house.svg?raw';
import settingsIcon from '@ncai/design-system-icons/icons/settings.svg?raw';
import bellIcon from '@ncai/design-system-icons/icons/bell.svg?raw';
import downloadIcon from '@ncai/design-system-icons/icons/download.svg?raw';
import plusIcon from '@ncai/design-system-icons/icons/plus.svg?raw';
import xIcon from '@ncai/design-system-icons/icons/x.svg?raw';
import arrowRightIcon from '@ncai/design-system-icons/icons/arrow-right.svg?raw';
import eyeIcon from '@ncai/design-system-icons/icons/eye.svg?raw';
import trashIcon from '@ncai/design-system-icons/icons/trash.svg?raw';
import pencilIcon from '@ncai/design-system-icons/icons/pencil.svg?raw';
import userIcon from '@ncai/design-system-icons/icons/user.svg?raw';
import zapIcon from '@ncai/design-system-icons/icons/zap.svg?raw';
import copyIcon from '@ncai/design-system-icons/icons/copy.svg?raw';
import moonIcon from '@ncai/design-system-icons/icons/moon.svg?raw';
import sunIcon from '@ncai/design-system-icons/icons/sun.svg?raw';
import mailIcon from '@ncai/design-system-icons/icons/mail.svg?raw';
import lockIcon from '@ncai/design-system-icons/icons/lock.svg?raw';
import calendarIcon from '@ncai/design-system-icons/icons/calendar.svg?raw';
import layersIcon from '@ncai/design-system-icons/icons/layers.svg?raw';
import codeIcon from '@ncai/design-system-icons/icons/code.svg?raw';
import chevronRightIcon from '@ncai/design-system-icons/icons/chevron-right.svg?raw';

// === Floating element spacing tokens (styles.css의 --floating-* 와 동일 값) ===
// Tooltip / Popover / Menu / Dropdown 등 anchored UI의 trigger 간격 / viewport 여백 강제.
const FLOATING_OFFSET = 8;          // 기본
const FLOATING_OFFSET_LOOSE = 10;   // Popover, PreviewCard
const VIEWPORT_PADDING = 16;

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
const teams = ['서울 본사', '부산 지사', '대전 R&D', '광주 크리에이티브', '인천 물류'];
const sections = [
  'Typography',
  'Accordion',
  'Alert Dialog',
  'Autocomplete',
  'Avatar',
  'Badge',
  'Button',
  'Icons',
  'Checkbox',
  'Checkbox Group',
  'Collapsible',
  'Combobox',
  'Context Menu',
  'Dialog',
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
      <Tooltip.Provider>
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
              <span>39 Base UI components</span>
              <span>single accent #006EFF</span>
              <span>bold whitespace · 8px grid</span>
            </section>

            <section className="gallery-intro text-stack-section" id="gallery">
              <p className="eyebrow">One scrollable page</p>
              <h2>All Base UI components</h2>
              <p>
                모든 카드는 Base UI 접근성 구조를 유지하면서 재사용 가능한 CSS 클래스를 통해 NCAI 시각 언어를
                적용합니다.
              </p>
            </section>

            <div className="component-grid">
              <PreviewSection title="Typography" description="Linear Display/Text/Mono — 13개 타이포그래피 토큰." wide>
                <div className="type-scale">
                  {[
                    { token: 'display-xl', size: '80 / 600', sample: '최상위 히어로 제목' },
                    { token: 'display-lg', size: '56 / 600', sample: '주요 페이지 섹션 제목' },
                    { token: 'display-md', size: '40 / 600', sample: '서브 섹션 제목' },
                    { token: 'headline',   size: '28 / 600', sample: '패널과 카드 그룹 제목' },
                    { token: 'card-title', size: '22 / 500', sample: '카드 제목' },
                    { token: 'subhead',    size: '20 / 400', sample: '보조 제목과 도입 문장' },
                    { token: 'body-lg',    size: '18 / 400', sample: '도입부 문단과 강조 본문' },
                    { token: 'body',       size: '16 / 400', sample: '기본 본문 — 가독성 확보.' },
                    { token: 'body-sm',    size: '14 / 400', sample: '보조 텍스트와 메타 정보' },
                    { token: 'caption',    size: '12 / 400', sample: '작은 캡션과 부가 정보' },
                    { token: 'button',     size: '14 / 500', sample: '버튼 라벨' },
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
                    <Accordion.Panel className="accordion-panel">
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
                    <Accordion.Panel className="accordion-panel">
                      xs(4px) · sm(8px) · md(16px) · lg(24px) · xl(32px) · xxl(48px) — 모든 여백은 이 체계를
                      따릅니다.
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion.Root>
              </PreviewSection>

              <PreviewSection title="Alert Dialog" description="되돌릴 수 없는 액션에 사용하는 확인 다이얼로그.">
                <AlertDialog.Root>
                  <AlertDialog.Trigger className="button-primary">계정 삭제</AlertDialog.Trigger>
                  <AlertDialog.Portal>
                    <AlertDialog.Backdrop className="overlay-backdrop" />
                    <AlertDialog.Popup className="modal-card">
                      <AlertDialog.Title className="modal-title">계정을 삭제할까요?</AlertDialog.Title>
                      <AlertDialog.Description className="modal-copy">
                        이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.
                      </AlertDialog.Description>
                      <div className="inline-actions">
                        <AlertDialog.Close className="button-secondary">취소</AlertDialog.Close>
                        <AlertDialog.Close className="button-primary">삭제</AlertDialog.Close>
                      </div>
                    </AlertDialog.Popup>
                  </AlertDialog.Portal>
                </AlertDialog.Root>
              </PreviewSection>

              <PreviewSection title="Autocomplete" description="검색어 기반 자동 완성 입력 컴포넌트.">
                <Autocomplete.Root items={products}>
                  <Autocomplete.InputGroup className="combo-root combo-input-group">
                    <Autocomplete.Input placeholder="기능 검색" className="text-input" />
                    <Autocomplete.Trigger className="icon-button" aria-label="목록 열기">
                      <img src={chevronDownIcon} alt="" className="trigger-icon" />
                    </Autocomplete.Trigger>
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

              <PreviewSection title="Avatar" description="5가지 Subtle Tint 팔레트 — 장식적 용도.">
                <div className="avatar-palette-row">
                  {[
                    { cls: 'avatar-indigo', initials: 'IN', label: 'Indigo' },
                    { cls: 'avatar-sage', initials: 'SG', label: 'Sage' },
                    { cls: 'avatar-sand', initials: 'SA', label: 'Sand' },
                    { cls: 'avatar-mauve', initials: 'MV', label: 'Mauve' },
                    { cls: 'avatar-azure', initials: 'AZ', label: 'Azure' }
                  ].map(({ cls, initials, label }) => (
                    <div key={cls} className="avatar-palette-item">
                      <Avatar.Root className={`avatar avatar-sm ${cls}`}>
                        <Avatar.Fallback>{initials}</Avatar.Fallback>
                      </Avatar.Root>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="avatar-row">
                  <Avatar.Root className="avatar avatar-indigo">
                    <Avatar.Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop" />
                    <Avatar.Fallback>NC</Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <strong>NCAI Preview</strong>
                    <p>Design review specialist</p>
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

              <PreviewSection title="Button" description="Primary · Secondary · Ghost — 3단계 위계 구조.">
                <div className="inline-actions">
                  <Button className="button-primary">시작하기</Button>
                  <Button className="button-secondary">더 알아보기</Button>
                  <Button className="button-ghost">취소</Button>
                </div>
              </PreviewSection>

              <PreviewSection title="Icons" description="currentColor 정규화 — 인라인 SVG로 어떤 색상에도 대응.">
                <div className="icon-color-row">
                  {[
                    { label: 'Ink', cls: 'icon-ink' },
                    { label: 'Primary', cls: 'icon-primary' },
                    { label: 'Muted', cls: 'icon-muted' },
                    { label: 'Success', cls: 'icon-success' },
                    { label: 'Warning', cls: 'icon-warning' },
                    { label: 'Error', cls: 'icon-error' }
                  ].map(({ label, cls }) => (
                    <div key={cls} className="icon-color-item">
                      <Icon svg={starIcon} className={`icon-inline ${cls}`} size={24} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="icon-grid">
                  {[
                    [searchIcon, 'search'],
                    [heartIcon, 'heart'],
                    [homeIcon, 'home'],
                    [bellIcon, 'bell'],
                    [mailIcon, 'mail'],
                    [userIcon, 'user'],
                    [settingsIcon, 'settings'],
                    [downloadIcon, 'download'],
                    [plusIcon, 'plus'],
                    [xIcon, 'x'],
                    [arrowRightIcon, 'arrow-right'],
                    [eyeIcon, 'eye'],
                    [trashIcon, 'trash'],
                    [pencilIcon, 'pencil'],
                    [zapIcon, 'zap'],
                    [copyIcon, 'copy'],
                    [moonIcon, 'moon'],
                    [sunIcon, 'sun'],
                    [lockIcon, 'lock'],
                    [calendarIcon, 'calendar'],
                    [layersIcon, 'layers'],
                    [codeIcon, 'code']
                  ].map(([svg, name]) => (
                    <div key={name as string} className="icon-grid-item">
                      <Icon svg={svg as string} className="icon-inline icon-ink" size={20} />
                      <span>{name as string}</span>
                    </div>
                  ))}
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
                  <Collapsible.Trigger className="button-secondary">디자인 원칙 보기</Collapsible.Trigger>
                  <Collapsible.Panel className="soft-panel">
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
                      <img src={chevronDownIcon} alt="" className="trigger-icon" />
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

              <PreviewSection title="Context Menu" description="타일 영역을 우클릭해 보세요.">
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
                        <ContextMenu.Item className="menu-item">항목 열기</ContextMenu.Item>
                        <ContextMenu.Item className="menu-item">복제</ContextMenu.Item>
                        <ContextMenu.Separator className="menu-separator" />
                        <ContextMenu.Item className="menu-item">공유</ContextMenu.Item>
                      </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                  </ContextMenu.Portal>
                </ContextMenu.Root>
              </PreviewSection>

              <PreviewSection title="Dialog" description="표준 모달 다이얼로그.">
                <Dialog.Root>
                  <Dialog.Trigger className="button-primary">상세 보기</Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Backdrop className="overlay-backdrop" />
                    <Dialog.Popup className="modal-card">
                      <Dialog.Title className="modal-title">컴포넌트 상세</Dialog.Title>
                      <Dialog.Description className="modal-copy">
                        Canvas 배경, radius-lg 카드 스타일, Level-3 그림자를 적용한 표준 모달입니다. Header·Body·Footer
                        여백은 각각 design-system.md 명세를 따릅니다.
                      </Dialog.Description>
                      <Dialog.Close className="button-primary">확인</Dialog.Close>
                    </Dialog.Popup>
                  </Dialog.Portal>
                </Dialog.Root>
              </PreviewSection>

              <PreviewSection title="Drawer" description="집중 작업을 위한 하단 시트.">
                <Drawer.Root>
                  <Drawer.Trigger className="button-primary">설정 열기</Drawer.Trigger>
                  <Drawer.Portal>
                    <Drawer.Backdrop className="overlay-backdrop" />
                    <Drawer.Popup className="drawer-card">
                      <Drawer.Title className="modal-title">테마 선택</Drawer.Title>
                      <Drawer.Description className="modal-copy">
                        스와이프로 닫을 수 있는 하단 시트 컴포넌트입니다. Surface Soft 배경에 Level-3 그림자를
                        적용합니다.
                      </Drawer.Description>
                      <div className="chip-row">
                        <button className="option-chip selected">라이트 모드</button>
                        <button className="option-chip">다크 모드</button>
                        <button className="option-chip">시스템 설정</button>
                      </div>
                      <Drawer.Close className="button-primary">적용</Drawer.Close>
                    </Drawer.Popup>
                  </Drawer.Portal>
                </Drawer.Root>
              </PreviewSection>

              <PreviewSection title="Field" description="레이블, 입력, 유효성 힌트가 결합된 필드.">
                <Field.Root name="email" className="field-root">
                  <Field.Label className="field-label">이메일</Field.Label>
                  <Field.Control className="text-input" required type="email" placeholder="you@ncai.io" />
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
                    <Field.Control className="text-input" required placeholder="홍길동" />
                  </Field.Root>
                  <Button type="submit" className="button-primary">
                    제출
                  </Button>
                </Form>
              </PreviewSection>

              <PreviewSection title="Input" description="독립형 텍스트 입력 필드.">
                <Input className="text-input search-input" placeholder="컴포넌트 검색" />
              </PreviewSection>

              <PreviewSection title="Menu" description="키보드 탐색을 지원하는 드롭다운 메뉴.">
                <Menu.Root>
                  <Menu.Trigger className="button-secondary">메뉴 열기</Menu.Trigger>
                  <Menu.Portal>
                    <Menu.Positioner
                      className="positioner"
                      sideOffset={FLOATING_OFFSET}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <Menu.Popup className="menu-popup">
                        <Menu.Item className="menu-item">즐겨찾기 추가</Menu.Item>
                        <Menu.Item className="menu-item">나중에 보기</Menu.Item>
                        <Menu.Separator className="menu-separator" />
                        <Menu.CheckboxItem className="menu-item">자동 저장</Menu.CheckboxItem>
                      </Menu.Popup>
                    </Menu.Positioner>
                  </Menu.Portal>
                </Menu.Root>
              </PreviewSection>

              <PreviewSection title="Meter" description="경계가 있는 측정 인디케이터.">
                <Meter.Root value={72} min={0} max={100} className="meter-root">
                  <div className="meter-meta">
                    <Meter.Label>리소스 사용량</Meter.Label>
                    <Meter.Value />
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
                        <img src={chevronDownIcon} alt="" className="nav-menu-icon" />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content">
                        <NavigationMenu.Link className="nav-menu-feature" href="#gallery">
                          <span>AI 어시스턴트</span>
                          <small>자연어 기반 인터페이스의 시각 컴포넌트를 미리 확인하세요.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>디자인 시스템</span>
                          <small>토큰 기반 컴포넌트 라이브러리와 CSS 아키텍처.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>아이콘 패키지</span>
                          <small>1,509개 SVG 아이콘, currentColor 정규화 완료.</small>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item value="design">
                      <NavigationMenu.Trigger className="nav-menu-trigger">
                        디자인
                        <img src={chevronDownIcon} alt="" className="nav-menu-icon" />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content nav-menu-content-compact">
                        <NavigationMenu.Link className="nav-menu-link" href="#tokens">
                          <span>토큰</span>
                          <small>색상, 반경, 간격, 그림자 변수.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>컴포넌트</span>
                          <small>NCAI 스타일이 적용된 Base UI 프리미티브.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>패턴</span>
                          <small>재사용 가능한 인터랙션 및 레이아웃 예제.</small>
                        </NavigationMenu.Link>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item value="resources">
                      <NavigationMenu.Trigger className="nav-menu-trigger">
                        리소스
                        <img src={chevronDownIcon} alt="" className="nav-menu-icon" />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="nav-menu-content nav-menu-content-compact">
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>미리보기 가이드</span>
                          <small>이 페이지로 디자인 변경을 감사하세요.</small>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link className="nav-menu-link" href="#gallery">
                          <span>아이콘 패키지</span>
                          <small>프로덕트용 설치 가능한 SVG 에셋.</small>
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
                    <NumberField.Decrement className="stepper-button">−</NumberField.Decrement>
                    <NumberField.Input className="number-input" />
                    <NumberField.Increment className="stepper-button">+</NumberField.Increment>
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

              <PreviewSection title="Popover" description="앵커된 보조 정보 팝오버.">
                <Popover.Root>
                  <Popover.Trigger className="button-secondary">상세 정보</Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Positioner
                      className="popover-positioner"
                      align="start"
                      sideOffset={FLOATING_OFFSET_LOOSE}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <Popover.Popup className="popover-card">
                        <Popover.Arrow className="popup-arrow" />
                        <Popover.Title className="popover-title">바로 사용 가능</Popover.Title>
                        <Popover.Description className="modal-copy">
                          지금 바로 NCAI 디자인 시스템을 프로젝트에 설치하고 사용할 수 있습니다.
                        </Popover.Description>
                      </Popover.Popup>
                    </Popover.Positioner>
                  </Popover.Portal>
                </Popover.Root>
              </PreviewSection>

              <PreviewSection title="Preview Card" description="링크에 풍부한 미리보기를 제공하는 호버 카드.">
                <PreviewCard.Root>
                  <PreviewCard.Trigger className="text-link" href="#gallery">
                    컴포넌트 미리보기 카드 열기
                  </PreviewCard.Trigger>
                  <PreviewCard.Portal>
                    <PreviewCard.Positioner
                      className="positioner"
                      sideOffset={FLOATING_OFFSET_LOOSE}
                      collisionPadding={VIEWPORT_PADDING}
                    >
                      <PreviewCard.Popup className="preview-card">
                        <div className="mini-product" />
                        <strong>Surface Soft 프리뷰</strong>
                        <p>콘텐츠는 물러나고 핵심 시각 요소가 인터랙션을 이끕니다.</p>
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
                      <img src={chevronDownIcon} alt="" className="trigger-icon" />
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

              <PreviewSection title="Sidebar" description="아이콘과 2뎁스 메뉴를 지원하는 좌측 내비게이션.">
                <nav className="sidebar" aria-label="사이드바">
                  <div className="sidebar-section-label">메인</div>
                  <a className="sidebar-item is-active" href="#sidebar-home">
                    <Icon svg={homeIcon} className="sidebar-item-icon" size={18} />
                    <span className="sidebar-item-label">대시보드</span>
                  </a>
                  <a className="sidebar-item" href="#sidebar-mail">
                    <Icon svg={mailIcon} className="sidebar-item-icon" size={18} />
                    <span className="sidebar-item-label">메시지</span>
                    <span className="sidebar-item-badge">3</span>
                  </a>
                  <a className="sidebar-item" href="#sidebar-calendar">
                    <Icon svg={calendarIcon} className="sidebar-item-icon" size={18} />
                    <span className="sidebar-item-label">일정</span>
                  </a>

                  <div className="sidebar-section-label">작업공간</div>
                  <Collapsible.Root defaultOpen className="sidebar-group">
                    <Collapsible.Trigger className="sidebar-item sidebar-group-trigger">
                      <Icon svg={layersIcon} className="sidebar-item-icon" size={18} />
                      <span className="sidebar-item-label">디자인</span>
                      <Icon svg={chevronRightIcon} className="sidebar-item-chevron" size={14} />
                    </Collapsible.Trigger>
                    <Collapsible.Panel className="sidebar-subitems">
                      <a className="sidebar-subitem is-active" href="#sidebar-tokens">토큰</a>
                      <a className="sidebar-subitem" href="#sidebar-components">컴포넌트</a>
                      <a className="sidebar-subitem" href="#sidebar-templates">템플릿</a>
                    </Collapsible.Panel>
                  </Collapsible.Root>
                  <Collapsible.Root className="sidebar-group">
                    <Collapsible.Trigger className="sidebar-item sidebar-group-trigger">
                      <Icon svg={codeIcon} className="sidebar-item-icon" size={18} />
                      <span className="sidebar-item-label">개발</span>
                      <Icon svg={chevronRightIcon} className="sidebar-item-chevron" size={14} />
                    </Collapsible.Trigger>
                    <Collapsible.Panel className="sidebar-subitems">
                      <a className="sidebar-subitem" href="#sidebar-build">빌드</a>
                      <a className="sidebar-subitem" href="#sidebar-test">테스트</a>
                      <a className="sidebar-subitem" href="#sidebar-deploy">배포</a>
                    </Collapsible.Panel>
                  </Collapsible.Root>

                  <div className="sidebar-section-label">계정</div>
                  <a className="sidebar-item" href="#sidebar-user">
                    <Icon svg={userIcon} className="sidebar-item-icon" size={18} />
                    <span className="sidebar-item-label">프로필</span>
                  </a>
                  <a className="sidebar-item" href="#sidebar-settings">
                    <Icon svg={settingsIcon} className="sidebar-item-icon" size={18} />
                    <span className="sidebar-item-label">설정</span>
                  </a>
                </nav>
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

              <PreviewSection title="Switch" description="온/오프 설정 토글 컨트롤.">
                <label className="switch-row">
                  <Switch.Root defaultChecked className="switch">
                    <Switch.Thumb className="switch-thumb" />
                  </Switch.Root>
                  자동 업데이트
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
                <ToggleGroup className="toggle-group" defaultValue={['compact']} aria-label="레이아웃 밀도">
                  <Toggle value="compact" className="toggle-item">
                    컴팩트
                  </Toggle>
                  <Toggle value="comfortable" className="toggle-item">
                    편안함
                  </Toggle>
                </ToggleGroup>
              </PreviewSection>

              <PreviewSection title="Toolbar" description="그룹화된 컨트롤 및 액션 모음.">
                <Toolbar.Root className="toolbar">
                  <Toolbar.Group className="toolbar-group">
                    <Toolbar.Button className="toolbar-button">B</Toolbar.Button>
                    <Toolbar.Button className="toolbar-button">I</Toolbar.Button>
                  </Toolbar.Group>
                  <Toolbar.Separator className="toolbar-separator" />
                  <Toolbar.Button className="toolbar-button primary">공유</Toolbar.Button>
                </Toolbar.Root>
              </PreviewSection>

              <PreviewSection title="Tooltip" description="호버 또는 포커스 시 표시되는 힌트.">
                <Tooltip.Root>
                  <Tooltip.Trigger className="button-secondary">힌트 보기</Tooltip.Trigger>
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
              </PreviewSection>
            </div>

            <section className="handoff-tile text-stack-section" id="handoff">
              <p className="eyebrow">Handoff note</p>
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
      <p className="eyebrow">Icon library</p>
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
