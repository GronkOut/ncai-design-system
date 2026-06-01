## Overview

NCAI Design System은 기술적 정밀함과 감성적 절제가 조화를 이루는 **미니멀리즘**을 지향합니다.
중성 다크 모드, 여백의 미학, 그리고 인지 공학적 시맨틱 컬러 체계를 통해 전문성과 신뢰를 구축합니다.
핵심 원칙은 **"절제를 통한 위계의 완성"**입니다.
불필요한 장식과 색상을 걷어내고, 정교하게 계산된 여백과 타이포그래피의 밀도, 그리고 기술적으로 견고한 CSS 아키텍처를 통해 가장 직관적이고 세련된 사용자 경험을 선사합니다.





**Key Characteristics:**
- **하나의 강력한 Primary 액센트 컬러**: 브랜드의 정체성과 주요 클릭 유도를 담당하는 색상(현재 `#006EFF` 적용)을 명확히 정의합니다.
- **8px 베이스의 Spacing System**: 가장 범용적인 8px 기반 격자 체계를 사용하여 컴포넌트 내부 및 외부 여백을 설정합니다.
- **체계적인 텍스트 계층 구조 (Typography Hierarchy)**: Display(xl/lg/md), Headline, Title(md/sm), Body(lg/md/sm), Label(xl/lg/md/sm), Caption, Eyebrow, Mono 총 16개 토큰의 명확한 용도와 굵기(`--fw-regular`/`--fw-label`/`--fw-heading`), 줄간격 규칙을 정합니다.
- **상태를 표현하는 Elevation과 컴포넌트 형태**: 플랫(Flat)함을 기본으로 하되, 그림자(Shadow)와 테두리 라운딩(Border Radius)을 사용하여 UI의 명확한 위계를 구현합니다.
특히 중요한 상태 표시는 가장 정갈한 **솔리드 잉크(Solid Ink)** 스타일을 사용하여 절제미와 전문성을 전달합니다.




## Colors

NCAI Design System의 컬러 토큰은 **Surface / Text / Semantic / Avatar**의 4개 역할 축으로 구성되며,
각 토큰은 **라이트·다크 모드**에서 서로 다른 값을 갖습니다. 정보 상태(Status)는 Semantic 팔레트에 통합되어 있으며, 장식적 컬러(아바타)와 기능적 컬러(상태 뱃지)는 엄격히 분리됩니다.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): 페이지의 기본 배경색 (순백색). 가장 많은 면적을 차지합니다.
- **Surface Soft** (`{colors.surface-soft}` — `#F9FAFB`): 기본 흰색 캔버스 위에서 섹션을 구분짓거나, 강조 카드의 배경, 상단 네비게이션/푸터 배경 등에 쓰이는 가장 연한 쿨 그레이입니다. 흰색 Canvas와 부드러운 대비를 만듭니다.
- **Surface Inset** (`{colors.surface-inset}` — `#EEF1F5`): 카드 위에 살짝 가라앉은 인셋(inset) 표면. **Segmented control(Toggle Group)의 트랙 배경**, BottomSheet Cancel의 회색 fill, 갤러리 썸네일 그라데이션 등 "다른 표면 위에 움푹 들어간" 영역 전용입니다. Surface Soft(`#F9FAFB`)보다 한 단계 더 짙어, 트랙 안의 선택된 칩(Surface Elevated)이 떠 보이도록 3겹 스택을 형성합니다. 이름은 GitHub Primer의 `canvas.inset` 컨벤션을 따르며, `surface-elevated`와 in/out 의미 짝을 이룹니다.
- **Surface Elevated** (`{colors.surface-elevated}` — `#FFFFFF`): 카드 위에 떠 있는 인터랙티브 표면(`button-secondary`, `nav-action`, `accordion-item`, segmented 트랙 안의 선택된 칩). 라이트 모드에서는 `canvas`와 동일하므로 보더로 분리하고, 다크 모드에서는 한 단계 밝게 분기됩니다.
- **Hairline** (`{colors.hairline}` — `#E5E7EB`): 1px 테두리(Border), 입력 폼 외곽선, 디바이더에 사용되는 기본 선 색상.
- **Control Track** (`{colors.control-track}` — `#E5E7EB`): **Switch off 트랙 전용**의 컨트롤 표면 토큰. 라이트 모드에서는 `hairline`과 동일한 값을 갖지만, 다크 모드에서 별도로 한 단계 밝게(`#3E3E41`) 분기되어 카드(`Surface Soft`)·Elevated 어느 레이어 위에서도 트랙이 시인됩니다. 단순한 분리선이 아닌 "값을 담는 트랙" 의미를 분리하기 위해 별도 토큰으로 운영합니다.


### Text
- **Ink** (`{colors.ink}` — `#13151A`): 디스플레이, 헤드라인, 기본 본문(Body) 등에 쓰이는 기본 텍스트 색상 및 어두운 배경색. 푸른빛이 살짝만 감도는 깊고 무게감 있는 다크 컬러.
- **Body Muted** (`{colors.body-muted}` — `#6B7280`): 부가적인 설명, 메타 데이터, 비활성화 텍스트에 사용되는 보조 텍스트 색상.
- **On Primary** (`{colors.on-primary}` — `#FFFFFF`): Primary 색상 배경 위에 쓰이는 텍스트 색상 (보통 흰색).


### Semantic

정보 상태(뱃지)와 폼 검증·파괴적 액션에 공통으로 쓰는 단일 시맨틱 팔레트입니다. **Success만 두 변형**(Green / Primary Blue brand)을 제공합니다 — 의미에 따라 선택합니다.

| 역할 | Light (text / bg) | Dark (text / bg) | 용도 |
|---|---|---|---|
| **Success — Status** (`{colors.semantic-success}` / `{colors.semantic-success-bg}`) | `#00D954` / `#ECFEEA` | `#34D399` / `rgba(5,150,105,0.15)` | "활성·정상" 뱃지, 일반 성공 알림 — 전통 색상 매핑 |
| **Success — Brand** (`{colors.semantic-success-brand}`) | `#006EFF` (= Primary) | `#1C82FF` (= dark Primary) | 폼 유효 입력 표시, 브랜드 일관성이 중요한 확정 액션 — Primary 별칭 |
| **Info** (`{colors.semantic-info}` / `{colors.semantic-info-bg}`) | `#006EFF` (= Primary) / `#EFF6FF` | `#1C82FF` (= dark Primary) / `rgba(0,110,255,0.15)` | 진행 중·정보 뱃지 — Primary alias로 브랜드와 자동 동기화 |
| **Warning** (`{colors.semantic-warning}` / `{colors.semantic-warning-bg}`) | `#FFAE00` / `#FFF9E3` | `#FE9F19` / `rgba(254,159,25,0.15)` | 대기·주의·보안 경고 |
| **Error** (`{colors.semantic-error}` / `{colors.semantic-error-bg}`) | `#F33942` / `#FFF5F7` | `#F74B53` / `rgba(247,75,83,0.15)` | 실패·중단 뱃지, 잘못된 입력, Negative(파괴적) 버튼 |
| **Neutral** (`{colors.semantic-neutral}` / `{colors.semantic-neutral-bg}`) | `#6B7280` (= Body Muted) / `#F3F4F6` | `#C7C9CB` / `rgba(149,151,153,0.15)` | 백로그·초안·대기열처럼 상태 신호가 약한 passive 정보 |

> [!NOTE]
> **채움(fill) vs 글씨(`-text`) 토큰 분리**: 위 표의 Light 값은 **솔리드/채움**(Meter·Progress 바, solid 뱃지 배경, `button-danger`)에 쓰는 선명한 색입니다 — 흰 배경 텍스트로는 대비가 매우 낮아(≈2:1 이하) 글씨에 쓰지 않습니다. 흰·틴트 배경 위 **컬러 글씨**(틴트 뱃지 텍스트 등)는 전용 토큰을 사용합니다 — `{colors.semantic-success-text}` `#00AE1A`, `{colors.semantic-warning-text}` `#EB8E02`, `{colors.semantic-error-text}` `#F33942`. Success/Warning은 브랜드 색감(vivid)을 우선해 디자이너가 직접 지정한 값이고, **Error는 표준 브랜드 레드(`#F33942`, base와 동일)로 원복**했습니다. 틴트 배경 대비는 Success 2.8:1 / Warning 2.4:1 / Error 3.5:1로 모두 **WCAG AA(4.5:1)에 미달**합니다 — 색감을 우선한 의도된 트레이드오프이며, 가독성이 중요한 맥락에서는 더 어두운 톤이 필요할 수 있습니다. 다크 모드는 base(밝은 색)가 어두운 틴트 위에서 이미 또렷하므로 `-text`를 base로 별칭합니다.

> [!NOTE]
> **Success 선택 가이드**: Status(녹)는 "이미 일어난/유지되는 상태"(뱃지·로그·알림 등), Brand(파랑)는 "검증을 통과시켜 다음으로 넘어가는 액션"(폼 valid 표시, "동의했음" 같은 확정)에 사용합니다. 한 화면에 둘이 동시에 등장하지 않도록 컨텍스트별로 일관되게 사용하세요.

> [!IMPORTANT]
> **Minimalist Validation & Focus Policy** (전역 원칙 — 모든 인터랙티브 컴포넌트에 적용)
>
> 상태(유효성)와 포커스는 **테두리 컬러 변화와 헬퍼 텍스트**로만 전달합니다. 컬러 글로우/틴트가 만드는 시각적 잡음을 제거해 테마(라이트/다크)와 관계없이 가장 정갈하고 일관된 피드백을 유지합니다.
>
> **금지 (모든 컴포넌트 공통)**
> - 포커스 시 외부 광채(Focus Ring / Halo / box-shadow glow)
> - 유효성 상태의 배경 틴트(Background Tint)
> - 컬러 그라데이션, 글로스 오버레이, 외곽 발광
>
> **허용 (상태 신호)**
> - 보더 컬러 변화: 기본 `{colors.hairline}` → 포커스/활성 `{colors.primary}` (1.5~2px), 에러 `{colors.semantic-error}`.
> - 헬퍼 텍스트: `Field Description` / `Field Error`로 상태를 글자로 전달.
> - 키보드 접근성을 위한 dotted 1px outline은 허용 (시각적 광채와 구분됨).
>
> 본 정책은 각 컴포넌트 스펙(Checkbox, OTP Field, Menu, Slider, Tabs 등)에서 별도로 반복하지 않습니다. 컴포넌트 섹션은 정책의 **예외**나 컴포넌트 고유 디테일(예: dotted outline 1px)만 명시합니다.



### Avatar (Decorative Palette)
- **Avatar Palette**: 배경색과 텍스트색의 톤온톤(Tone-on-tone) 대비를 활용한 **은은한 틴트(Subtle Tint)** 스타일을 사용합니다. 각 팔레트는 `{colors.avatar-{name}-bg}` / `{colors.avatar-{name}-text}` 토큰 쌍으로 정의되며, 유틸리티 클래스 `.avatar-{name}`으로 적용합니다.
  - **Indigo (Cool)** — `.avatar-indigo` (`{colors.avatar-indigo-bg}` `#EEF5FF` / `{colors.avatar-indigo-text}` `#1C4BA4`): 지적이고 세련된 액센트.
  - **Sage (Natural)** — `.avatar-sage` (`{colors.avatar-sage-bg}` `#F0F4F2` / `{colors.avatar-sage-text}` `#3E5C54`): 차분한 자연의 녹색이 가미된 그레이.
  - **Sand (Warm)** — `.avatar-sand` (`{colors.avatar-sand-bg}` `#F6F2EC` / `{colors.avatar-sand-text}` `#7C6042`): 따뜻하고 고급스러운 베이지 톤.
  - **Plum (Berry)** — `.avatar-plum` (`{colors.avatar-plum-bg}` `#FDF5FA` / `{colors.avatar-plum-text}` `#8D567B`): 잘 익은 자두를 닮은 차분한 자주. 핑크빛이 살짝 도는 보라로, 팔레트에 부드러운 활기를 더합니다.
  - **Azure (System)** — `.avatar-azure` (`{colors.avatar-azure-bg}` `#F0F7FF` / `{colors.avatar-azure-text}` `#0070F3`): 시스템 정체성을 보여주는 맑은 블루.

> [!IMPORTANT]
> **Avatar 팔레트는 Avatar 컴포넌트 전용입니다 — 일반 UI에 절대 가져다 쓰지 마세요.**
>
> `avatar-*` 토큰(`{colors.avatar-indigo-bg}` 등)과 `.avatar-*` 유틸리티 클래스는 **Avatar 컴포넌트(`Avatar.Root` 내부의 원형 마크)** 안에서만 등장합니다. Avatar 외부에 이 컬러가 보이면 그것은 **버그**입니다.
>
> **금지 사례 (자주 일어나는 오용)**
> - 버튼·카드·아코디언·배지·태그·칩의 배경/보더/텍스트
> - 섹션 강조 배경, 띠(banner), 하이라이트 박스, "포인트 컬러"
> - hover/focus/selected 틴트, 아이콘 배경 박스
> - 차트의 데이터 시리즈 컬러(별도 데이터 비주얼 팔레트가 필요할 때까지 차트는 `{colors.primary}` 단일 톤)
> - 상태/피드백(성공·경고·에러) — 반드시 `{colors.semantic-*}` 사용
> - 카테고리·태그 색상 매핑(N개 카테고리에 N개 avatar 컬러 자동 배정 같은 패턴)
>
> **올바른 대체 토큰**
> - 일반 배경/표면: `{colors.canvas}` · `{colors.surface-soft}` · `{colors.surface-inset}` · `{colors.surface-elevated}`
> - 텍스트: `{colors.ink}` · `{colors.body-muted}` · `{colors.on-primary}`
> - 강조/액션: `{colors.primary}` · `{colors.primary-hover}`
> - 상태: `{colors.semantic-success}` · `{colors.semantic-warning}` · `{colors.semantic-error}`
>
> **이유**: 이 5색은 "여러 사용자·팀을 시각적으로 구분"하는 **식별 신호(identity signal)**입니다. Avatar 밖에 같은 색이 등장하는 순간 사용자의 "indigo = 그 사람의 색" 같은 무의식적 매핑이 깨지고, 팔레트는 의미 없는 장식 컬러로 전락합니다. 또한 `bg` 값(`#EEF5FF` 등)은 의도적으로 **채도가 낮은 틴트**라 일반 UI 면적에 깔면 흐릿하고 탁한 인상을 줍니다 — surface 토큰이 아닙니다.
>
> **AI/도구 사용 시 체크리스트**: 새 컴포넌트를 만들 때 색을 고르는 자리에서 `avatar-`로 시작하는 토큰/클래스가 후보로 떠오르면 **즉시 기각**하고 위 "올바른 대체 토큰"에서 다시 고르세요. design-system.md에서 색을 검색할 때는 Avatar 섹션을 **참조 대상에서 제외**해야 합니다.



> [!NOTE]
> **Palette Distinction Policy**: **Semantic** 팔레트는 정보의 피드백을 위한 **기능적(Functional)** 용도(뱃지·검증·파괴적 액션), **Avatar** 팔레트는 시각적 깊이를 위한 **장식적(Decorative)** 용도입니다. 두 팔레트의 색상이 비슷하게 보이더라도 의미가 다르므로 교차 사용을 피합니다.

> [!TIP]
> **Dark Mode Badge & Tag Principle (다크모드 뱃지 가독성 원칙)**
> 다크 모드에서 라이트 모드용 배경색을 그대로 쓰면 눈부심(Glare) 현상이 발생합니다. 다크 모드의 뱃지/태그는 다음 규칙을 따릅니다:
> 1. **Background**: 원색에 **투명도 15~20%**를 적용하여 어두운 배경과 자연스럽게 블렌딩합니다.
> 2. **Text**: 원색보다 **더 밝고 채도가 높은(Vibrant)** 색상을 사용하여 가독성을 확보합니다.
> 3. **Border (선택)**: 배경색이 너무 어두울 경우, 배경과 동일한 색상의 1px 테두리를 0.2 opacity로 추가하여 형태를 강조합니다.



### Dark Mode Color Tokens

> [!IMPORTANT]
> **다크모드 배경 철학: 중성(Neutral) 다크를 유지**
> 다크 배경에 블루/쿨 그레이 색조를 과도하게 넣으면 화면이 차갑고 인위적으로 보입니다. Apple macOS/iOS Dark Mode처럼 **블루 언더톤을 배제한 중성(Near-Black) 배경**을 기반으로 하고, 레이어 간 위계는 채도 대신 **명도 차이(`#111212` → `#18191B` → `#27282D`)**로만 구분합니다.


| Token | Light Mode | Dark Mode | 비고 |
|---|---|---|---|
| `{colors.canvas}` | `#FFFFFF` | `#111212` | 블루 틴트 0% 순수 중립 다크 |
| `{colors.surface-soft}` | `#F9FAFB` | `#18191B` | Pure Neutral Grey 레이어 |
| `{colors.surface-inset}` | `#EEF1F5` | `#232326` | Segmented 트랙·인셋 표면. 다크에서는 `surface-soft(#18191B)`와 `surface-elevated(#27282D)` **사이**에 자리잡아 3-레이어 스택(카드 → 트랙 → 선택 칩)을 형성 |
| `{colors.surface-elevated}` | `#FFFFFF` | `#27282D` | 카드 위에 떠 있는 표면(버튼/아코디언/세그먼트 selected). 라이트 모드는 `canvas`와 동일하므로 보더로 분리 |
| `{colors.surface-elevated-hover}` | `{colors.surface-soft}` | `color-mix(in oklab, surface-elevated 93%, body-muted 7%)` ≈ `#2E2F34` | elevated 표면 위 hover/highlighted 상태 전용. 라이트는 Surface Soft로 통합, 다크는 oklab 색공간에서 elevated에 `body-muted`를 7% 섞어 perceptually uniform lightness lift(+7). **반드시 oklab으로 mix** — sRGB mix는 brightness 변화에 비해 hue가 흔들려 warm/cool 사이를 오가지만, oklab은 hue를 보존하며 brightness만 끌어올림. 베이스 elevated가 바뀌어도 자동 추종 |
| `{colors.hairline}` | `#E5E7EB` | `#25272B` | 중성 그레이 구분선 |
| `{colors.control-track}` | `#E5E7EB` | `#3E3E41` | Switch off 트랙. 라이트는 hairline과 동일하나, 다크에서는 `hairline(#25272B)`·`surface-elevated(#27282D)`보다 한 단계 밝게 분기되어 카드 위에서도 트랙 형태가 시인 |
| `{colors.ink}` | `#13151A` | `#F2F2F2` | 채도 없는 순수 오프화이트 |
| `{colors.body-muted}` | `#6B7280` | `#959799` | 중립 미드 그레이 |
| `{colors.primary}` | `#006EFF` | `#1C82FF` | 원본 색상 기반, 밝기만 미세 조정 |
| `{colors.primary-hover}` | `#005BED` | `#3791FF` | 다크 배경 호버 피드백 |
| `{colors.on-primary}` | `#FFFFFF` | `#FFFFFF` | **항상 흰색 고정**. Primary 채움 위 텍스트/아이콘/노브용 |


> [!IMPORTANT]
> **"항상 흰색이어야 하는 것"에는 `canvas`가 아닌 `on-primary`를 사용합니다.**
>
> Primary 색 위에 얹히거나(버튼 라벨, 체크 아이콘) Primary 트랙 위에서 움직이는 컨트롤 부품(슬라이더 thumb, 스위치 knob, 라디오 내부 점)은 모드와 무관하게 흰색을 유지해야 시각 정체성이 보존됩니다. `canvas`는 다크 모드에서 `#111212`로 반전되므로 이런 용도에 절대 쓰지 마세요.
>
> 적용 대상: `button-primary` 텍스트, 체크박스 체크 아이콘, **`radio[data-checked]` 내부 점**, **`slider-thumb`** (흰 thumb 본체), **`switch-thumb`** knob.

**다크모드 카드(Card) 동작 원칙**:
라이트 모드에서는 순백색 `Canvas` 위에 `hairline` 테두리로 카드를 구분합니다.
다크 모드에서는 테두리 대신 **배경색의 계층(레이어)**으로 깊이를 표현합니다.

| 컴포넌트 | 라이트 모드 | 다크 모드 |
|---|---|---|
| `card-standard` | `Canvas(#FFF)` 배경 + `hairline` 테두리 | `Surface Soft(#18191B)` 배경, **테두리 없음** |
| `card-featured` | `Canvas(#FFF)` 배경 + `Level 2` 그림자 | `Surface Soft(#18191B)` 배경 + `Level 3` 그림자 |
| `modal-card` (backdrop 있음) | `Canvas(#FFF)` 배경 + `Level 3` 그림자, **테두리 없음** | `Surface Soft(#18191B)` 배경 + `Level 3` 그림자, **테두리 없음** |
| `popover-card` / `preview-card` (backdrop 없음) | `Canvas(#FFF)` 배경 + `hairline` 테두리 + `Level 3` 그림자 | `Surface Soft(#18191B)` 배경 + **`rgba(255,255,255,.10)` 테두리** + `Level 3` 그림자 |
| 섹션 배경 (`Surface Soft` 섹션) | `Surface Soft(#F9FAFB)` | **`Canvas(#111212)`** 로 반전하여 카드와 계층 확보 |



> [!IMPORTANT]
> **Dark Separator Policy (밝은 레이어 위 구분선)**
>
> `{colors.hairline}` (다크 `#25272B`)는 `Canvas(#111212)` 레이어 위에서만 정상 동작합니다. 더 밝은 레이어(`Surface Soft #18191B`, `Surface Elevated #27282D`) 위에서는 luminance 차이가 부족해 선이 사라집니다. 이 경우 **translucent white overlay**를 사용해 아래 레이어 밝기와 무관하게 일정 대비를 확보합니다. (Apple iOS Dark Mode separator 원칙과 동일)
>
> - `Surface Elevated(#27282D)` 위 구분선 (예: 열린 Accordion trigger ↔ panel divider): `rgba(255, 255, 255, 0.08)`
> - 떠 있는 카드 보더 (Popover/PreviewCard): `rgba(255, 255, 255, 0.10)`
> - Modal은 backdrop이 톤 대비를 만들므로 보더 자체를 사용하지 않습니다.


> [!WARNING]
> **`Surface Elevated(#27282D)`는 인터랙티브 표면 전용입니다.**
>
> `button-secondary` / `nav-action` / `accordion-item` / `toggle-item[selected]`이 모두 `Surface Elevated`를 차지하기 때문에, 모달·팝오버·카드 본체 배경을 `Surface Elevated`로 올리면 내부에 들어간 secondary 버튼이 배경에 묻혀 사라집니다. 떠 있는 카드 본체는 반드시 `Surface Soft(#18191B)`를 유지하고, 깊이는 보더 또는 그림자로 표현하세요.

> [!WARNING]
> **카드는 어떤 모드에서도 섹션 배경과 반드시 다른 색이어야 합니다.**
>
> 다크 모드에서는 `canvas`와 `surface-soft` 두 가지 레벨만 존재합니다. 섹션과 카드가 같은 레벨을 쓰면 카드가 배경에 녹아들어 보이지 않습니다.
>
> **규칙**: 섹션 배경이 `Canvas(#111212)` → 카드는 `Surface Soft(#18191B)` / 섹션 배경이 `Surface Soft` → 다크 모드에서 섹션을 `Canvas`로 반전시킵니다.
>
> ✅ **올바른 예**: `Canvas` 섹션 위에 `Surface Soft` 카드
> ❌ **잘못된 예**: `Surface Soft` 섹션 위에 `Surface Soft` 카드 (카드가 사라짐)










## Typography

### Font Family

NCAI는 **Pretendard(디스플레이·본문 공용) + Geist Mono(코드)** 2종 체계로 운영합니다.

- **Pretendard**: **`Pretendard Variable`** — 디스플레이 제목부터 본문·버튼·라벨까지 모든 일반 텍스트에 사용합니다.
  - `font-family: "Pretendard Variable", "Pretendard", system-ui, -apple-system, sans-serif`
- **Monospace**: **`Geist Mono`** — 코드, 버전, 기술 값 표기에 사용합니다.
  - `font-family: "Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Monaco, monospace`

### Hierarchy

| Token | Font Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `display-xl` | Pretendard Variable | 80px | 600 | 1.05 | -3.0px | 최상위 히어로 제목 |
| `display-lg` | Pretendard Variable | 56px | 600 | 1.10 | -1.8px | 주요 페이지/섹션 제목 |
| `display-md` | Pretendard Variable | 40px | 600 | 1.15 | -1.0px | 서브 섹션 제목 |
| `headline` | Pretendard Variable | 28px | 600 | 1.20 | -0.6px | 패널, 모달, 카드 그룹 제목 |
| `title-md` | Pretendard Variable | 22px | 500 | 1.25 | -0.4px | 카드·모달·드로어·시트 등 컨테이너 타이틀 공용 |
| `title-sm` | Pretendard Variable | 20px | 600 | 1.30 | -0.2px | 컴팩트 컨테이너 타이틀 (Modal·Drawer·Sheet, Picker/Browse toolbar, 인포 박스 등). 22px(title-md)보다 작은 사이즈를 600 weight로 보강 |
| `body-lg` | Pretendard Variable | 18px | 400 | 1.50 | -0.1px | 도입부 문단, 강조 본문 |
| `body-md` | Pretendard Variable | 16px | 400 | 1.50 | -0.05px | 기본 본문 |
| `body-sm` | Pretendard Variable | 14px | 400 | 1.50 | 0 | 보조 텍스트, 메타 정보 |
| `caption` | Pretendard Variable | 12px | 400 | 1.40 | 0 | 캡션, 작은 보조 정보 |
| `label-xl` | Pretendard Variable | 18px | 500 | 1.2 | -0.16px | Display 사이즈 라벨 (60px 히어로 CTA) |
| `label-lg` | Pretendard Variable | 16px | 500 | 1.2 | -0.16px | 기본 라벨 — 버튼·탭·메뉴·트리거·값 표시 필드(input·select·date, 48px) |
| `label-md` | Pretendard Variable | 15px | 500 | 1.2 | -0.16px | 중간 라벨 — 40px 컨테이너 비례용 중간값 |
| `label-sm` | Pretendard Variable | 14px | 500 | 1.2 | -0.16px | 보조 라벨 — 칩·작은 버튼 (32px) |
| `eyebrow` | Pretendard Variable | 13px | 500 | 1.30 | 0.4px | 섹션 라벨, 카테고리 |
| `mono` | Geist Mono | 13px | 400 | 1.50 | 0 | 코드, 버전, 기술 값 표기 |

> [!NOTE]
> **타이포 적용 방식 — `@include type-*` mixin**: 각 타이포 역할(title-md, label-lg, body-md 등)은 font-size·font-weight·line-height·letter-spacing 네 속성을 한 묶음으로 캡슐화한 SCSS `@mixin`으로 노출됩니다. 컴포넌트는 네 변수를 하나씩 참조하는 대신 `@include type-title-md;` 한 줄로 적용합니다. 원본 값은 `:root`의 `--type-*` / `--fw-*` / `--lh-*` / `--ls-*` 토큰이 단일 소스로 유지하며, mixin은 그 토큰들을 역할별로 묶어 노출하는 어휘 계층입니다. (HTML 직접 작성 시엔 `.type-*` 유틸리티 클래스로 대체 가능)
> **Label 토큰**: 인터랙티브 라벨(버튼·탭·메뉴·칩·트리거·입력 필드) 전용 타이포 군. weight 500 + lh 1.2 + tracking -0.16px이 한 군으로 정의되며, 컴포넌트는 `@include type-label-lg;`처럼 사이즈 단위 mixin 한 줄로 적용합니다.
> **트리거·필드 타이포**: 인터랙티브 컨트롤의 트리거/입력 텍스트는 label **사이즈 스케일**을 컨테이너 높이에 비례해 씁니다 — 48px → `label-lg`, 40px → `label-md`, 32px → `label-sm`. 단 **값/입력 텍스트(text-input·select·combobox·autocomplete·date field)는 weight만 `--fw-regular`(400)로 한 단계 내립니다** — 선택값/placeholder는 읽는 콘텐츠라 라벨 굵기로 강조하지 않습니다(`menu-item`의 label-size + regular-weight 하이브리드와 동일 의도). 동작 라벨(button·tab·menu)은 `--fw-label`(500) 그대로. 필드 위/옆에 붙는 Field Label은 이와 별개의 슬롯이며, 드롭다운 *목록 행*은 `list-item`/`menu-item` 규칙을 따릅니다.
> **Font-weight 정책**: `--fw-regular(400)` / `--fw-label(500)` / `--fw-heading(600)` 세 토큰으로 통합. 컴포넌트는 `font-weight: 500` 같은 매직 넘버를 직접 쓰지 않으며, 역할 기본값에서 벗어날 때만 mixin 다음 줄에 `font-weight: var(--fw-...)` 한 줄로 override합니다.




### Principles
- **Display 계열**은 Pretendard Variable를 사용하고, 크기가 클수록 더 강한 음수 자간을 적용하여 시각적 응집력을 높입니다.
- **Text 계열**은 Pretendard Variable를 사용하여 본문과 인터페이스 라벨의 반복 가독성을 유지합니다.
- **Line Height**는 토큰마다 비율(ratio)로 정의하여 폰트 크기 변경 시에도 계층의 호흡이 자연스럽게 유지되도록 합니다.
- 위계 표현은 폰트 크기 변경보다 우선적으로 **폰트 패밀리(Display/Text/Mono), 굵기(Weight), 색상 농도(Ink vs Muted)**를 활용합니다.




### Line Breaking — 한국어 줄바꿈 제어

한국어는 라틴 문자와 달리 글자 단위로 줄바꿈이 발생하기 때문에 별도 규칙 없이는 어절 중간에서 끊기는 현상이 생깁니다. NCAI는 전역 기준선(baseline)을 두고, 텍스트 역할에 따라 줄바꿈 전략을 구분합니다.

| 속성 | 값 | 적용 대상 | 효과 |
|---|---|---|---|
| `word-break` | `keep-all` | `body` (전역) | 어절(띄어쓰기) 단위로만 줄바꿈 — "있습니 / 다." 같은 어절 분리 방지 |
| `text-wrap` | `pretty` | `body` (전역) | 마지막 줄에 홀로 남는 단어/어절(orphan) 방지 |
| `text-wrap` | `balance` | `h2, h3` | 여러 줄 제목의 줄 길이를 균등하게 배분 — Section/Card 수준 제목에 적용 |

**운영 원칙**
- `word-break: keep-all` + `text-wrap: pretty` 조합을 `body`에 전역 선언하여 모든 한국어 텍스트의 기본 품질을 보장합니다.
- `h2`, `h3`에는 `text-wrap: balance`를 추가해 줄 길이를 균등하게 배분합니다. **`h1` (Display-XL 히어로 타이틀)에는 적용하지 않습니다** — `justify-items: center` 그리드 안에서 balance가 인위적으로 1줄짜리 제목을 2줄로 쪼개는 역효과가 발생합니다.
- 본문 `<p>` 너비는 고정 px보다 `max-width: min(640px, 100%)` 형태의 반응형 상한을 사용합니다. 너비가 너무 좁으면 `balance`나 `pretty`가 과도하게 줄을 쪼개므로, **가이드라인: 화면 너비의 60–70% 또는 540–680px** 사이에서 조정합니다.
- `text-wrap: balance`는 최대 6줄까지만 효과적입니다. 그보다 긴 텍스트 블록은 `pretty`를 사용하세요.











## Layout

### Spacing System
- **Base unit**: 8px (미세 조정이 필요할 때는 4px 사용)
- **Tokens**: 
  - `{spacing.xxs}`: 4px
  - `{spacing.xs}`: 8px
  - `{spacing.sm}`: 12px (menu-item·trigger 등 컴팩트 컴포넌트 padding/gap)
  - `{spacing.md}`: 16px (컴포넌트 내 기본 여백)
  - `{spacing.lg}`: 20px (button-lg padding 등 height 절반보다 좁힌 sub-md 슬롯)
  - `{spacing.xl}`: 24px
  - `{spacing.xxl}`: 32px (요소 간 여백)
  - `{spacing.xxxl}`: 40px
  - `{spacing.section}`: **120px** (섹션 간의 표준 세로 여백. 하이엔드 테크 감성을 위한 최소 수치)
  - `{spacing.footer-anchor}`: **240px** (`{spacing.section}` × 2 — 페이지의 가장 마지막 섹션에 부여하는 종결 여백)

### Section Layout Principles
NCAI는 사용자가 정보에 압도당하지 않도록 넉넉한 여백을 사용하여 '여유'와 '위계'를 전달합니다.
1. **Section Padding**: 모든 주요 섹션은 상하 **`{spacing.section}` (120px)** 이상의 여백을 확보하여 각 섹션의 독립성을 유지합니다.
2. **Footer Anchoring**: 페이지의 가장 마지막 섹션(푸터 바로 위)은 하단에 **`{spacing.footer-anchor}` (240px)** 의 극적인 여백을 부여합니다. `{spacing.section}`의 2배로 정의되어 섹션 리듬을 변경하면 자동으로 따라갑니다. 이는 페이지의 끝을 알리는 강력한 시각적 신호입니다.



### Heading–Body Type Pairing

Display 크기 헤딩과 본문 사이의 점프가 지나치게 크면 시각적 위계가 무너집니다. 헤딩 사이즈에 따라 아래 기준으로 바디 타입을 선택합니다.

| 헤딩 토큰 | 헤딩 크기 | 짝이 되는 바디 | 바디 크기 | 비율 | 비고 |
|---|---|---|---|---|---|
| `display-xl` | 80px | `body-lg` | 18px | ≈ 4.4:1 | 히어로 섹션 전용 |
| `display-lg` | 56px | `body-lg` | 18px | ≈ 3.1:1 | 주요 섹션 인트로 |
| `display-md` | 40px | `body-md` | 16px | 2.5:1 | 서브 섹션 인트로 |
| `headline` | 28px | `body-md` | 16px | 1.75:1 | 패널·카드 그룹 |
| `title-md` | 22px | `body-sm` | 14px | ≈ 1.6:1 | 카드·아코디언 헤더 |
| `title-sm` | 20px | `body-sm` | 14px | ≈ 1.4:1 | 모달·드로어·시트 타이틀 (`.modal-title` 표준) |

**원칙**
- 헤딩이 40px 이상이면 바디는 반드시 `body-lg`(18px) 이상을 씁니다. 40px 미만은 `body-md`(16px)로 충분합니다.
- 비율이 **4:1을 초과**하면 헤딩과 바디가 서로 다른 층위로 분리된 느낌을 주므로, 바디 크기를 올리거나 헤딩 크기를 낮춥니다.
- 바디 컬러는 항상 `{colors.body-muted}`를 사용해 헤딩과 시각적 층위를 구분합니다.

### Vertical Stack Rhythm (Eyebrow → Title → Body)
같은 "Eyebrow → Title → Body" 패턴이라도 컨텍스트의 폰트 스케일이 다르면 간격도 비례해서 달라져야 합니다. 단일 수치 대신 **4-tier 시스템**으로 묶어 일관성을 유지합니다.

| Tier | 용도 | Eyebrow → Title | Title → Body | 헤딩 타이포 | 바디 타이포 |
|---|---|---|---|---|---|
| `stack-hero` | 페이지/섹션 히어로 | **12px** (`{spacing.sm}`) | **32px** (`{spacing.xxl}`) | `display-xl` / `display-lg` | `body-lg` (18px) |
| `stack-section` | 갤러리·핸드오프 인트로 | **8px** (`{spacing.xs}`) | **24px** (`{spacing.xl}`) | `display-lg` / `display-md` | `body-lg` (18px) |
| `stack-card` | 카드·모달·시트 타이틀 | **8px** (`{spacing.xs}`) | **8px** (`{spacing.xs}`) | `title-md` (22px) | `body-md` (16px) |
| `stack-inline` | 본문 내 미니 라벨/필드 | **4px** (`{spacing.xxs}`) | **8px** (`{spacing.xs}`) | `body-md` (16px, `h3` 또는 `.text-strong`로 강조) | `body-sm` (14px) |

**원칙**
- **eyebrow → title 간격은 항상 title → body 간격보다 작아야 합니다.** Eyebrow는 title의 레이블이므로 시각적으로 title에 붙어 있어야 하고, body는 title이 끝난 뒤 별도의 호흡을 줘야 합니다.
- 타이포 사이즈가 1단 줄면 간격도 1단 줄어듭니다 (8px 그리드 위에서 비례).
- 새 컨텍스트가 생기면 가까운 티어를 재사용합니다. 5번째 티어 추가는 신중하게 결정하세요.
- 토큰: `--stack-{tier}-eyebrow-gap`, `--stack-{tier}-title-gap`
- 유틸리티 클래스: `.text-stack-hero` / `.text-stack-section` / `.text-stack-card` / `.text-stack-inline` — 부모에 부여하면 자식 `.eyebrow` / `h1`–`h3`의 하단 간격이 자동 적용됩니다.

### Grid & Container
- **Max Content Width**: 1200px ~ 1440px 내외로 콘텐츠 영역을 제한하여 초고해상도에서도 가독성을 유지합니다.
- **Column Grid**: 12컬럼 시스템을 기본으로 하되, 주로 1-up, 2-up, 3-up, 4-up 형태의 카드 그리드로 사용합니다.

> [!WARNING]
> **컨테이너 중첩 및 모서리(Radius) 유실 주의 가이드**
> 1. **좌우 너비(Width) 정렬 오류 방지**: `.container` 클래스와 개별 컴포넌트 클래스(예: `.form-container`, `.card-standard`)를 **동일한 `<div>`에 병합하여 사용하지 마세요.** 컴포넌트 자체의 padding이 더해져 다른 레이아웃과 좌우 너비가 어긋납니다. 반드시 `.container`로 감싼 내부 자식 태그로 컴포넌트를 분리해야 합니다.
> 2. **모서리 둥글기(Radius) 클리핑**: 표(Table)나 헤더에 배경색(Surface Soft 등)이 들어가는 경우, 내부 배경이 바깥쪽 카드의 `border-radius` 모서리를 직각으로 덮어버리는(먹히는) 현상이 발생합니다. 이를 방지하려면 감싸는 컨테이너에 반드시 `overflow: hidden;`을 주거나, `<th>`의 `first-child`, `last-child`에 명시적으로 `border-radius`를 부여해야 합니다.
> 3. **Clean CSS Architecture**: `!important`는 스타일 상속 구조를 파괴하므로 극도로 제한해야 합니다. 스타일 충돌 시에는 선택자 결합(예: `.card.card-hover`)을 통해 우선순위(Specificity)를 높이는 방식을 권장합니다. 특히 리빌 애니메이션 등 긴 트랜지션이 적용된 요소는 호버 시 별도의 트랜지션 정의를 통해 사용자 반응성을 보장해야 합니다.









## Elevation & Depth

NCAI 시스템은 플랫(Flat)한 디자인을 기본으로 하되, 그림자를 사용하여 위계를 형성합니다. 라이트 모드에서는 푸른기 있는 그레이(Cool Grey, `rgba(15, 23, 42)`) 기반으로 맑은 인상과 깊이감을 동시에 유지하고, 다크 모드에서는 쿨 그레이가 어두운 배경에서 효과가 없으므로 순수 블랙(`rgba(0, 0, 0)`)으로 분기하되 불투명도를 끌어올려 동일한 위계감을 확보합니다. 아래 표의 Light / Dark 컬럼 값은 `box-shadow` 속성에 그대로 적용합니다.

| Level | Light Mode | Dark Mode | Use |
|---|---|---|---|
| Flat (Level 0) | 그림자 없음, `{colors.hairline}` 1px 테두리 | 그림자 없음, `{colors.hairline}` 1px 테두리 | 캔버스에 놓이는 일반적인 카드, 콘텐츠 영역 |
| Hover / Soft (Level 1) | `0 4px 12px rgba(15, 23, 42, 0.08)` | `0 4px 12px rgba(0, 0, 0, 0.30)` | 호버 시 살짝 떠오르는 효과를 주는 카드 |
| Floating (Level 2) | `0 8px 24px rgba(15, 23, 42, 0.12)` | `0 8px 24px rgba(0, 0, 0, 0.45)` | 상단 고정 네비게이션 바, 드롭다운 메뉴 |
| Modal (Level 3) | `0 16px 48px rgba(15, 23, 42, 0.18)` | `0 16px 48px rgba(0, 0, 0, 0.60)` | 화면 중앙에 뜨는 모달창, 다이얼로그 |

> [!TIP]
> **Shadow Color Policy (모드별 분기)**:
> - **Light**: 순수 무채색(#000000) 그림자 대신 미세한 청색광을 머금은 슬레이트 그레이(`rgba(15, 23, 42)`)를 사용해 화면이 파랗게 뜨지 않으면서도 정교하고 지적인 분위기를 연출합니다.
> - **Dark**: 쿨 그레이 그림자는 어두운 배경 위에서 시각적 효과가 사라지므로, 순수 블랙(`rgba(0, 0, 0)`) 기반으로 불투명도를 `0.30 / 0.45 / 0.60`까지 끌어올려 동일한 깊이감을 확보합니다.








## Shapes

### Border Radius Scale
컴포넌트의 성격에 따라 둥근 정도(Radius)를 통일성 있게 부여합니다.

| Token | Value | Use |
|---|---|---|
| `{radius.none}` | 0px | 전체 화면을 덮는 섹션 배경, 풀블리드 이미지 |
| `{radius.sm}` | 6px | 체크박스, 작은 라벨, 뱃지 |
| `{radius.md}` | 10px | 모든 버튼 및 입력 폼(Input) |
| `{radius.lg}` | 16px | 일반적인 카드(Card), 이미지 프레임. 풍부하고 부드러운 인상을 줍니다. |
| `{radius.xl}` | 20px | 모달(Modal), 바텀시트(BottomSheet) 등 화면 위에 떠 있는 컨테이너. 카드보다 한 단계 더 부드러운 가장자리로 떠 있는 느낌을 강조합니다. |
| `{radius.table}` | 12px | 데이터 테이블(Table) 전용. 정보의 밀도가 높은 테이블에 적합한 정갈하고 샤프한 라운딩입니다. |
| `{radius.pill}` | 9999px | 상태 표시 뱃지, 알약 형태의 특수 탭 메뉴 |
| `{radius.full}` | 50% | 아바타 이미지, 원형 아이콘 버튼 |




## Motion

인터랙션의 페이스(Duration)와 가속도 곡선(Easing)을 토큰화한 스케일입니다.
디자이너와 개발자가 "fast", "normal", "expand" 같은 동일한 언어로 모션을 호출할 수 있게 하고, 글로벌 튜닝(예: 인터랙션이 살짝 느림 → `{motion.fast}` 한 곳만 조정)을 가능하게 합니다.

### Duration

| Token | Value | Use |
|---|---|---|
| `{motion.instant}` | 80ms | 매우 빠른 micro feedback (드물게 사용) |
| `{motion.fast}` | 120ms | **기본** — hover, color, border, transform. 대부분의 인터랙티브 전환. |
| `{motion.normal}` | 200ms | chevron 회전, Slider/Switch thumb, Segmented item color·opacity |
| `{motion.expand}` | 240ms | Panel(Accordion·Collapsible) · Sheet · Drawer · Toast Enter 공용 표준 |
| `{motion.slow}` | 320ms | 큰 슬라이드 — Segmented indicator transform·width |

> **새 duration을 도입하기 전에** 위 다섯 단 중 하나로 의도를 표현할 수 있는지 먼저 확인하세요. 일관성이 모션 품질의 핵심입니다.

### Easing

| Token | Curve | Use |
|---|---|---|
| `{ease.standard}` | `ease` | 기본 — 대부분의 hover/color 전환 |
| `{ease.out-quad}` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Panel height — 부드럽게 안착 |
| `{ease.out-expo}` | `cubic-bezier(0.22, 1, 0.36, 1)` | Sheet · Drawer · 큰 슬라이드 — 극적 감속 |
| `{ease.in-out}` | `cubic-bezier(0.4, 0, 0.2, 1)` | Slider/Switch thumb — 대칭 컨트롤 |

`ease-out` 같은 CSS 표준 키워드는 토큰화하지 않습니다 — 일회성·짧은 사용(예: Popover 진입 페이드)은 키워드를 직접 사용합니다.









## Components

### Buttons

> [!IMPORTANT]
> **Primary 버튼 남용 금지 원칙**
> 파란색(`Primary`) 버튼이 화면에 너무 많으면 사용자의 시선이 분산되어 오히려 핵심 CTA(Call To Action)의 전환율이 떨어집니다. 한 화면에 Primary 버튼은 **단 1개(최대 2개)**로 제한하고, 나머지 액션은 모두 `Secondary`나 `Ghost` 버튼으로 강등(Downgrade)하여 시각적 위계를 확실히 잡아야 합니다.

모든 클릭 가능한 인터랙티브 요소는 위계가 있어야 합니다.
- **`button-primary`**: 배경색 `{colors.primary}`, 텍스트색 `{colors.on-primary}`, **border `1px solid transparent`** (bg와 같은 색의 border는 redundant이고 fill 정체성을 시각·시멘틱 모두에서 명시). 모서리는 `{radius.md}`(10px)로 둥글기를 살짝 조절하여 입력 폼과 통일감을 줍니다. 화면의 최종 목표이자 가장 중요한 단 하나의 액션(예: "가입하기", "결제하기")에만 제한적으로 사용합니다.
- **`button-secondary`**: 배경은 투명 또는 흰색 `{colors.canvas}`, 텍스트는 `{colors.ink}`. 테두리 1px `{colors.hairline}`. 화면 내 대부분의 일반적인 조작(예: "더 알아보기", "필터", "새 사용자 추가" 등 서브 액션)에 사용되는 **실질적인 기본 버튼**입니다.
- **`button-ghost`**: 배경과 테두리가 모두 없는 텍스트 전용 버튼. 취소나 단순 링크 이동 등 가장 덜 중요한 액션에 사용합니다. 호버 시 옅은 회색이 깔립니다.
- **`button-danger`**: 배경색 `{colors.semantic-error}` (Light `#F33942` / Dark `#F74B53`), 텍스트색 `{colors.on-primary}` (흰색), **border `1px solid transparent`** (`button-primary`와 동일 — fill 정체성 명시). 모서리는 `{radius.md}`(10px). **되돌릴 수 없는 파괴적 액션**(예: "삭제", "영구 차단", "계정 폐쇄")에만 사용합니다. Alert Dialog의 부정(Negative) 변형 액션 버튼이 대표 적용처입니다. 한 화면 1개 원칙은 `button-primary`와 동일하게 적용되며, **`button-primary`와 동시에 사용하지 않습니다**(같은 화면에서 둘 다 등장하면 위계가 충돌합니다).
- **`button-danger-ghost`**: 배경·테두리 없음, 텍스트만 `{colors.semantic-error}`. 데이터 테이블 행의 "제거", 리스트 행의 "보관" 등 **dense 영역의 약한 파괴 액션** 전용. ghost 위계라 시각 잉크가 가벼워 행마다 다수 배치 가능(`button-danger`의 "한 화면 1개" 예외 — 행 단위 반복 허용). Hover 배경은 `{colors.semantic-error-bg}` — **`badge-error` 배경과 동일 토큰**을 재사용해 semantic 빨간 톤(라이트 `#fef1f1` 피치 / 다크 `rgba(247, 75, 83, 0.15)`)의 일관성을 유지합니다. solid `button-danger`(채움)와 강도 차이가 명확해 위계 충돌 없이 파괴 신호를 한 번 더 환기하고, 일반 `button-ghost`의 중립 회색 hover와도 시각적으로 구별됩니다. **금지**: 단독 confirm/CTA 자리(거기는 채움형 `button-danger`), Form 옆 "초기화"·"되돌리기"(파괴 메시지 아님 — 일반 `button-ghost` 사용).

**Button Sizing & Gaps (버튼 크기 및 간격 규칙):**
- **Height (높이):** 8px 배수 시스템을 기준으로 용도에 따라 나눕니다.
  - **Display (60px):** 랜딩/히어로 영역 전용 초대형 CTA. `display-xl`(80px) 헤드라인과 짝을 이루어 시각적 무게를 맞춥니다. **한 페이지 1회**만 사용합니다(Primary 남용 금지 원칙의 연장). 라벨 `{type.label-xl}` (18px), 좌우 패딩 32px(`{spacing.xxl}`).
  - **Large (48px, 기본):** 일반 마케팅 페이지 메인 CTA, 폼(Input) 옆 등 표준 강조 액션. 좌우 패딩 20px(`{spacing.lg}`), 라벨 `{type.label-lg}` (16px).
  - **Medium (40px):** 대시보드 내부 기본 버튼 및 폼(Input) 요소 옆. 좌우 패딩 16px(`{spacing.md}`), 라벨 `{type.label-md}` (15px).
  - **Small (32px):** 데이터 테이블 내부, 툴바 등 밀도가 높고 공간이 좁은 곳. 좌우 패딩 12px, 라벨 `{type.label-sm}` (14px), 아이콘 동반 gap **4px** (`{spacing.xxs}`) — 아래 "Button with Icon" 항목의 gap 분기 규칙 참조.
  - *좌우 패딩은 height의 절반(24px)보다 의도적으로 좁힌 값입니다 — 아이콘이 동반될 때(아이콘 + gap 8px) 시각적으로 부풀어 보이는 현상을 방지하면서, 텍스트-only CTA에서도 단단한 비례를 유지합니다.*
  - *라벨 폰트 크기는 **height의 30~44% 비례**에 맞춰 사이즈별로 4단계 `label-*` 토큰을 사용합니다(`label-xl/lg/md/sm` = 18/16/15/14). 같은 16px을 모든 높이에 쓰면 md/sm에서 라벨이 과중해져 "키만 줄어든 lg"처럼 보이는 문제를 방지합니다. weight·line-height·letter-spacing은 `label-*` 토큰 군에 번들되어 있어 컴포넌트 CSS에서 따로 명시할 필요가 없습니다.*
- **Gap (간격):** 게슈탈트 근접성의 원리(Proximity)를 따릅니다.
  - **8px (`{spacing.xs}`):** 검색창-검색버튼 등 논리적으로 완전히 하나의 묶음일 때.
  - **12px**: **버튼 그룹 표준 간격**. 취소-확인 등 두 액션이 연관되어 있으면서도 명확히 구분되어야 할 때 가장 이상적인 간격입니다.
  - **16px (`{spacing.md}`):** 서로 다른 기능을 수행하는 독립적인 요소들 사이의 기본 여백. **Display 사이즈 히어로 액션 버튼**은 버튼 자체가 크므로 이 간격을 사용합니다.

**Button with Icon (라벨 + 아이콘):**
텍스트가 동반되는 일반 Button(`button-primary` / `button-secondary` / `button-ghost` / `button-danger` / `button-danger-ghost`)은 내부에 `<Icon>` 자식을 직접 넣어 라벨과 함께 사용합니다. 별도 변형 토큰은 만들지 않습니다 — 베이스 Button이 이미 `display: inline-flex` + `gap: 8px`(`{spacing.xs}`)로 아이콘 동반을 전제하고 있습니다. (라벨 없는 정사각 액션은 별도 `icon-btn` 사용 — 아래 항목 참조.)

- **아이콘 ↔ 라벨 gap (사이즈별):**
  - **Display / Large / Medium:** `gap: 8px` (`{spacing.xs}`) — 기본값.
  - **Small (32px):** `gap: 4px` (`{spacing.xxs}`) — sm 한정 오버라이드.
  - *근거: gap은 절대값으로 두면 작은 버튼에서 아이콘 대비 비율이 커져 헐거워 보입니다(lg 8/18 ≈ 44% vs sm 8/14 ≈ 57%). 14px 아이콘 옆 4px gap이면 아이콘 대비 비율(≈29%)이 lg와 더 가까워져 사이즈 간 일관된 밀착감을 유지합니다. sm은 데이터 테이블·툴바 등 dense 영역 전용이므로 더 타이트한 결합이 컨텍스트에도 부합합니다.*

- **위치 — 의미로 결정합니다:**
  - **Leading(좌측):** 액션의 **의미를 보강**하는 아이콘. 라벨이 가리키는 동작의 시각 단서 — `+ 새로 만들기`, `↓ 다운로드`, `🗑 삭제`.
  - **Trailing(우측):** **다음 단계·이동·외부 흐름**을 암시하는 아이콘 — `계속하기 →`, `자세히 보기 ›`, `새 탭에서 열기 ↗`.
  - **양쪽 동시 배치는 금지합니다.** 좌·우 시각 무게가 두 배가 되면서 라벨 위계가 떨어지고, "좌=의미 보강 / 우=다음 단계"라는 역할이 충돌합니다. 보안 신호 같은 예외도 보조 텍스트(`SSL 보호됨`)로 분리하세요.
- **아이콘 크기 (Button 높이별):**
  - **Large (48px):** 아이콘 **18px**.
  - **Medium (40px):** 아이콘 **16px**.
  - **Small (32px):** 아이콘 **14px**.
  - *`icon-btn`(라벨 없는 정사각)보다 한 단계 작게 — 라벨이 주(主), 아이콘은 보조 신호이기 때문에 라벨 폰트 크기(14~18px)와 균형을 맞춥니다.*
- **금지:** 양쪽 동시 아이콘, 라벨 폰트보다 큰 아이콘(시각 위계 역전), 아이콘만으로 의미를 전달하려는 시도(그 경우 `icon-btn` 사용 + `aria-label`).

**Hover 전환 원칙 (모든 채움형 버튼 공통):**
- 채움형 버튼(`button-primary` / `button-danger`)의 hover는 `*-hover` 토큰(`{colors.primary-hover}` / `{colors.semantic-error-hover}`)으로 **배경과 보더만 교체**합니다. **`filter: brightness()` 같은 element-wide 어두워짐 효과는 금지** — 요소 전체가 어두워지면 흰색 텍스트(`{colors.on-primary}`)까지 함께 dim 처리되어 가독성이 떨어지고, 토큰 시스템 밖의 변형이라 라이트/다크 모드 분기도 별도 제어가 안 됩니다.
- **Transition**: 색 전환(`background` / `border-color`)은 `{motion.normal}` (200ms) + `{ease.in-out}` (대칭 곡선) — hover가 instant로 끊기지 않고 의도적으로 부드럽게 안착. `transform`(:active scale)은 `{motion.fast}` (120ms) + `{ease.standard}` 유지하여 클릭 피드백은 즉각적. Hover에서 형태 변화(lift/scale)는 사용하지 않습니다 — dense 영역(테이블 행 등)에서 시각 노이즈가 되고, button group에서 옆 버튼이 밀려보이는 인상이 생깁니다.

**다크모드 버튼 배경 처리 원칙:**
`button-secondary`의 배경은 라이트 모드에서 `Canvas(흰색)`이지만, 다크 모드에서 `Canvas = #111212`로 전환되어 카드 배경(`Surface Soft = #18191B`)보다 **오히려 더 어두워지는 역전 현상**이 발생합니다. 이를 방지하기 위해 다크 모드의 버튼은 카드 배경보다 반드시 밝은 레이어를 사용합니다.

| 버튼 | 라이트 모드 배경 | 다크 모드 배경 |
|---|---|---|
| `button-secondary` | `Canvas(#FFF)` + `hairline` 테두리 | `{colors.surface-elevated}` (테두리 없음, 배경색만으로 구분) |
| `button-secondary:hover` | `Surface Soft(#F9FAFB)` | `{colors.surface-elevated-hover}` (≈ `#2E2F34`) |
| `button-ghost:hover` | `Surface Soft(#F9FAFB)` | `{colors.surface-elevated}` |

**Disabled (Text Button — Icon Button과 공통 룰):**
Text Button(`button-*` 5변형)과 Icon Button은 동일한 disabled 시각 룰을 공유합니다 — 정의는 아래 [Icon Button 섹션](#icon-button)의 "Disabled (Icon Button · Text Button 공통)" 항목에 통합 명시되어 있습니다. 요약:
- **Fill (`button-primary`, `button-danger`):** `background: {colors.surface-inset}` + `border-color: transparent` + `color: {colors.disabled}` — fill 형태 유지 + 색만 mute(Danger의 빨강도 제거).
- **Outlined (`button-secondary`):** base 시각(canvas/surface-elevated + hairline) 그대로 + `color: {colors.disabled}` mute.
- **Ghost (`button-ghost`, `button-danger-ghost`):** base 시각(투명) 그대로 + `color: {colors.disabled}` mute.
- **공통:** `cursor: not-allowed` + native `<button disabled>` 속성(브라우저가 자동으로 click·hover·focus 차단).

**Icon Button (`icon-btn`) — 라벨 없는 정사각 액션:**
라벨이 가려진 단독 아이콘 버튼은 일반 Button과 별도 토큰(`icon-btn`)으로 분리합니다. 문자 폭이 일정하지 않은 라벨을 그대로 쓰면 폭 불균형이 생기므로 **정사각 고정**입니다. 텍스트가 동반되는 경우에는 일반 `button-*`를 쓰세요.

- **사이즈 (Button 높이 시스템과 일치, 정사각 고정):**
  - **`icon-btn--sm` (32×32):** 데이터 테이블 행 안, 칩 내부 등 밀도가 높은 영역. 아이콘 16px.
  - **`icon-btn--md` (40×40, 기본):** 대시보드/카드 헤더, 폼 옆 보조 액션. 아이콘 20px.
  - **`icon-btn--lg` (48×48):** 마케팅 페이지나 입력 그룹과 짝을 이루는 단독 액션. 아이콘 22px.
  - *Toolbar 내부 아이콘 버튼은 별도의 `toolbar-icon-button` (36×36 / 아이콘 18px)을 사용합니다 — Toolbar 안에서는 폭이 다른 텍스트 버튼과 시각 무게를 맞추기 위해 36이 기준입니다.*
- **변형 (Button의 위계와 동일):**
  - **`icon-btn--secondary` (기본):** hairline 테두리 + `{colors.canvas}` 배경. 단독 액션, 인풋 그룹 옆, 폼 옆 보조 액션 등 일반 케이스 — 화면 대부분의 아이콘 버튼이 이 변형입니다. *기본 변형 선정 근거: 라벨 없는 정사각 버튼이 화면에 단독으로 떠 있을 때 가장 안전한 시각 — 테두리가 클릭 affordance를 명시적으로 전달하고, 흰 면 위 ink 아이콘이 가독성과 시인성 모두 가장 안정적입니다. ghost는 더 가벼운 위계 전용 변형으로 분리합니다.*
  - **`icon-btn--ghost`:** 배경·테두리 없음. 시각 무게를 가장 가볍게 두어야 할 때(카드 헤더의 더보기/닫기, 툴바 안 아이콘, 표 행 안 보조 액션 등 dense 영역) 사용.
  - **`icon-btn--primary`:** Primary 채움. 화면 1개 원칙은 일반 Button과 동일하게 적용 — 페이지 핵심 CTA(예: 새 글 작성 FAB)에만 제한적으로 사용.
  - **`icon-btn--danger`:** `secondary` 정렬(hairline 테두리 + `{colors.canvas}` 배경) 위에 `{colors.semantic-error}` 아이콘. hover 시 `{colors.semantic-error-bg}`(피치 톤) 채움(테두리는 hairline 그대로). **단독 destructive 액션 전용**(예: 카드 헤더의 삭제 트리거, 폼 옆 영구 삭제). 한 화면 1개 원칙. *근거: 라벨이 없는 정사각 버튼을 `semantic-error`로 풀 채움하면 액션 아닌 "현재 위험 상태"로 오인되고, 옆에 놓인 `primary` 채움과 시각 무게가 동일해져 위계가 무너집니다. hover에서도 bg(peach)와 border(red) 두 신호를 동시에 강하게 바꾸지 않습니다 — bg 변화만으로 충분히 destructive 신호가 전달되고, `button-danger-ghost`(border 없이 bg만 peach)와 transition 곡선이 동일해 시스템 내부 일관성을 유지합니다.*
  - **`icon-btn--danger-ghost`:** `ghost` 정렬(bg·border 없음) 위에 `{colors.semantic-error}` 아이콘. hover 시 `{colors.semantic-error-bg}`(피치 톤) 채움. **표 행·툴바 등 반복 가능한 약한 파괴 액션**(예: 데이터 테이블 행마다 등장하는 삭제 아이콘). 라벨 있는 `button-danger-ghost`와 동일한 정렬·hover 토큰을 공유합니다. *근거: secondary 정렬(`icon-btn--danger`)은 hairline이 행마다 반복되면 시각 노이즈가 되므로, 반복 컨텍스트에서는 ghost 정렬이 정답입니다.*
- **모양 변형:**
  - 기본은 `{radius.md}` (10px) — 텍스트 버튼·인풋과 곡률 통일.
  - `icon-btn--circle` — 플로팅 액션 버튼(FAB) 등 원형이 의미를 갖는 경우에만 적용 (`{radius.full}`). 프로필 트리거는 `icon-btn--circle`이 아니라 **Avatar 컴포넌트**를 사용하세요 — 이미지 폴백·이니셜·상태 dot 등 프로필 전용 책임이 Avatar에 있어 역할이 겹칩니다.
- **Disabled (Icon Button · Text Button 공통):** 각 variant의 **시각 모드(fill / outlined / ghost)를 유지**한 채 색만 회색 톤으로 매핑합니다. opacity dim 방식은 폐기.
  - **Fill (`primary`):** `background: {colors.surface-inset}` (라이트 `#EEF1F5` / 다크 `#2B2C30`) + 동일 border + `color: {colors.disabled}` (라이트 `#C4C9CB` / 다크 `#424347`) — Primary의 fill 형태(채워진 박스)는 유지하되 색을 mute. 흰 아이콘 대신 회색 아이콘으로 contrast를 낮춰 "약한 fill" 인상을 강화합니다. *토큰 선택: `surface-inset`은 Segmented-control 트랙 등 "함몰·비활성 컨테이너 면" 의미로 이미 쓰여 disabled fill의 의미와 부합합니다. `hairline`(outlined border 전용 토큰)을 bg로 차용하지 않습니다 — 같은 값이라도 토큰 시멘틱이 깨지면 다른 컴포넌트에서 hairline 값을 조정할 때 disabled fill이 의도 없이 따라가는 변경 전파 위험이 있습니다.*
  - **Outlined (`secondary`, `danger`):** base의 enabled 시각(bg `{colors.canvas}` 라이트 / `{colors.surface-elevated}` 다크 + border `{colors.hairline}`)을 그대로 유지하고 `color: {colors.disabled}`만 mute. Danger는 자기 base(secondary)의 시각을 따르고 빨간 신호만 제거.
  - **Ghost (`ghost`, `danger-ghost`):** base의 enabled 시각(`background: transparent` + `border: transparent`) 유지 + `color: {colors.disabled}` mute. Danger Ghost도 자기 base(ghost)로 흡수.
  - *Primary fill만 bg를 회색(`surface-inset`)으로 덮는 이유: Primary의 정체성은 "강조 fill"이라 disabled에서 색 신호를 죽이지 않으면 모순. Secondary·Ghost는 색 정체성이 약해(neutral surface 위 ink) bg를 mute할 필요가 없고, 오히려 base 시각을 유지해야 outlined/ghost의 형태 정체성이 disabled에서도 유지됩니다.*
  - **공통:** `cursor: not-allowed`. **클릭·hover·focus 인터랙션 차단은 native `<button disabled>` 속성에 의존합니다** — 브라우저가 자동으로 모든 마우스/키보드 이벤트를 차단하고 cursor도 자연스럽게 표시됩니다. *`pointer-events: none`은 cursor 표시까지 막아 "비활성"의 시각 신호가 사라지므로 사용하지 않습니다.*
  - **Disabled 시 Tooltip 처리 (필수 가이드):** Base UI `Tooltip.Trigger`처럼 `disabled` prop을 `data-trigger-disabled` 속성으로만 변환하는 컴포넌트는 native `disabled`를 부여하지 않아 클릭이 살아남습니다. 이 경우 **컴포넌트 래퍼에서 `disabled` 상태일 때 Tooltip 구조를 우회하고 native `<button disabled>`만 렌더하는 패턴**을 권장합니다 — 예: `if (disabled) return <button disabled>...</button>;` 후 enabled 케이스에서만 `Tooltip.Root + Trigger` 트리. *근거: ① disabled trigger에 tooltip을 띄울 수 있게 하는 Base UI의 의도("왜 비활성인지" 안내)는 매력적이지만, hover 시 tooltip이 떴다 사라지는 동안 사용자가 "버튼이 작동한다고" 오해할 여지가 있습니다. ② disabled 안내가 정말 필요한 케이스(예: 권한 부족, 입력 미충족)는 폼 helper text·인라인 에러·sidebar callout 등 **항상 보이는 텍스트**로 표시하는 게 명시적이고 접근성에도 유리합니다. ③ 컴포넌트 래퍼에서 Tooltip 우회 시 native disabled가 자동 적용되어 클릭·hover·focus가 일관되게 차단됩니다.*

  *토큰 근거: 단일 `{colors.disabled}` 토큰 하나로 fill bg와 outlined/ghost icon에 동일 적용합니다. `body-muted`(본문 보조 텍스트 톤)는 disabled용으로 그대로 쓰면 본문 보조와 시각 위계가 헷갈리고, `hairline`(outlined 테두리 톤)은 너무 흐려 fill 정체성을 깨뜨립니다. 둘 사이 mid grey 한 단계만 disabled 전용으로 추가 — 다른 상태에 차용하지 마세요.*

  *근거: ① 모든 variant를 같은 회색 박스로 통일하면 fill 정체성을 가진 Primary 버튼이 disabled시 갑자기 outlined로 바뀌는 위계 충돌이 생깁니다. "기본 enabled 상태를 회색으로 그대로 변환"하면 disabled 상태에서도 시각 모드의 강조 정도가 보존되어, disabled CTA가 여전히 강조 액션임을 인식할 수 있습니다. ② opacity 0.4 방식은 `primary` 파란 박스·`danger` 빨간 아이콘이 흐려진 채 남아 "비활성"과 "위험·강조" 신호가 모순적으로 겹칩니다. 명시적 회색 토큰으로 색 신호만 제거합니다. ③ Danger 두 변형은 자기 base(secondary/ghost)의 disabled 시각과 같아져 별도 disabled 표현을 그리지 않아도 됩니다 — 색 신호가 제거되면 secondary disabled와 danger disabled의 차이는 없어집니다. ④ Icon Button과 Text Button이 동일 룰을 공유해 디자인 시스템 전체에서 disabled 시각이 하나의 패턴으로 인식됩니다.* Base UI 컴포넌트(`Tooltip.Trigger` 등)가 `disabled` prop을 `data-trigger-disabled` 속성으로 변환하는 경우에도 같은 셀렉터로 적용됩니다.
- **접근성:** 라벨이 가려져 있으므로 `aria-label` **필수**. 의미를 명확히 전달해야 하는 경우 **Tooltip을 함께 노출**해 단축키/액션명을 안내합니다(Tooltip 규칙 참조).
- **금지:** 아이콘 뒤 컬러 박스 별도 부여(아이콘 자체로 신호 — `icon-btn--danger`도 `semantic-error` 풀 채움이 아니라 hairline + 빨간 아이콘으로 두는 이유), 라벨 텍스트를 같이 넣어 정사각형을 깨뜨리는 사용, 한 화면에 `icon-btn--primary`·`icon-btn--danger` 다수 배치(위계 충돌 — 반복 destructive는 `icon-btn--danger-ghost`로).



### Cards
- **`card-standard`**: 배경색 `{colors.canvas}`, 테두리 1px `{colors.hairline}`, 모서리 `{radius.lg}`. 가장 널리 쓰이는 기본 컨테이너입니다. 불필요한 그림자는 지양하고 정갈한 테두리로만 표현합니다.
- **`card-featured`**: 요금제의 Pro 플랜처럼 시각적으로 띄우고 싶은 카드는 배경을 `{colors.canvas}`로 하고 깊은 그림자(`Level 2`)를 항상 적용합니다.
- **비율 정책 (Proportions)**: 카드가 어느 한쪽으로 치우쳐 보이지 않도록 **상하좌우 균형 있는 패딩(권장 40px)**을 확보합니다. 가로가 너무 좁거나 세로가 너무 길어 보이지 않는 안정적인 밸런스를 유지하는 것이 중요합니다.

**Typography (타이틀 토큰 — 필수 매핑):**
- **Card Title (Standard)**: `{typography.title-md}` (22px / 500). `card-standard`, `card-featured`의 기본 제목. Modal/Drawer/BottomSheet의 좁은 변형과 공유하는 컨테이너 타이틀 토큰입니다.
- **Card Title (Compact / 좁은 카드)**: `{typography.title-sm}` (20px / 600). 카드 폭이 360px 이하인 경우 적용 — title-md(22)보다 한 단계 작은 컴팩트 컨테이너 타이틀.
- **Card Title (Micro / 인포 박스)**: `{typography.body-md}` weight 600 (16px). 알림 카드, 상태 카드 등 한 줄 정보 전달용.
- **Description**: `{typography.body-md}` (16px) 또는 좁은 카드에서는 `{typography.body-sm}` (14px).
- **금지**: 카드 내부에 `display-*`(40px↑) 또는 `headline`(28px) 토큰을 사용하지 마세요. 카드 타이틀이 모달 타이틀보다 커 보이면 위계가 무너집니다.

### Accordion
접을 수 있는 정보 패널. 카드 안에 중첩되는 경우가 많아 **레이어 위계**가 가장 까다로운 컴포넌트입니다.

- **Shape**: `{radius.lg}` (16px). 카드와 동일한 곡률로 통일감을 유지합니다.
- **Border**: 라이트 모드 1px `{colors.hairline}`. 다크 모드는 보더 없이 배경 톤 대비로만 경계를 표현합니다.
- **Trigger**: 높이 약 52px, 상하 패딩 `{spacing.md}` (16px) / 좌우 20px, 폰트 `{typography.label-lg}` (16px / weight 500 / lh 1.2 / ls -0.16px — Collapsible과 동일 disclosure 라벨 스케일). Chevron 아이콘 16px, `{colors.body-muted}`.
- **Trigger Hover**: `{colors.surface-elevated-hover}` (라이트 `Surface Soft(#F9FAFB)`, 다크 `color-mix(in oklab, elevated 93%, body-muted 7%)` ≈ `#2E2F34`).
- **Open Divider**: 트리거가 열렸을 때 본문과의 구분을 위해 1px 인셋 디바이더를 그립니다. 추가 보더를 쓰지 않아 라운드 모서리 잘림을 방지합니다.
  - 라이트: `box-shadow: inset 0 -1px 0 {colors.hairline}` (#E5E7EB on #FFF).
  - **다크: `box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.08)`**. `accordion-item` 배경이 `Surface Elevated(#27282D)`로 올라가 있어 `hairline(#25272B)`과의 luminance 차이가 부족하므로 translucent white overlay를 사용합니다 (Dark Separator Policy).
- **Panel**: 상 16px / 하 20px / 좌우 20px 패딩. 본문 텍스트는 `{typography.body-sm}` (14px), 색상 `{colors.body-muted}`.
- **Overflow**: `.accordion-item`은 `overflow: hidden`으로 부모 라운드가 트리거 hover 배경을 클리핑하도록 합니다.
- **Panel Expand/Collapse 모션 (공용 표준)**: 모든 collapsible 류 패널(Accordion, Sidebar Collapsible 등)은 동일한 모션 토큰을 공유합니다.
  - `:root`에 `interpolate-size: allow-keywords`를 선언해 `height: 0 ↔ auto` 트랜지션을 활성화.
  - 패널에 `keepMounted` 적용 후, 기본 상태 `height: auto`, 닫힘 상태(`[data-starting-style]`, `[data-ending-style]`, `[data-closed]`)에서 `height: 0` + `padding-top/bottom: 0`.
  - Duration `{motion.expand}`, easing `{ease.out-quad}`. `height`와 `padding`을 같은 곡선·시간으로 함께 트랜지션해 콘텐츠가 "위로 말려 올라가는/펼쳐지는" 자연스러운 모션을 만듭니다.

**다크모드 레이어 역전 방지 (필수):**
`accordion-item`의 기본 배경은 `Canvas`이지만, 다크 모드에서 `Canvas = #111212`로 전환되어 부모 카드(`Surface Soft = #18191B`)보다 **오히려 더 어두워지는 역전 현상**이 발생합니다. 이때 아코디언이 페이지에서 **함몰된 인풋 필드처럼** 보여 클릭 가능한 패널로 인식되지 않습니다. 다크 모드에서는 카드 배경보다 반드시 한 단계 밝은 레이어로 올려 "떠 있는 패널"의 인상을 유지합니다. (`button-secondary` 다크모드 처리와 동일 원칙.)

| 영역 | 라이트 모드 배경 | 다크 모드 배경 |
|---|---|---|
| `accordion-item` | `Canvas(#FFF)` + `hairline` 테두리 | `{colors.surface-elevated}` (테두리 없음) |
| `accordion-trigger:hover` | `Surface Soft(#F9FAFB)` | `{colors.surface-elevated-hover}` (≈ `#2E2F34`) |
| Open divider | `hairline` inset shadow | `hairline` inset shadow |

**금지**: 아코디언 배경을 `Surface Inset`(#EEF1F5 / #232326)으로 두지 마세요. "선택된 입력 필드"처럼 보여 클릭 가능한 패널이 아닌 폼 요소로 오인됩니다. 또한 패널이 열렸을 때 본문에 별도 배경색을 깔지 않습니다 — 트리거와 본문은 동일한 배경 + 헤어라인 디바이더 한 줄로 위계를 표현합니다.

### Switch
온/오프 상태를 즉시 전환하는 토글. 체크박스가 "제출 시 반영"이라면 스위치는 "즉시 반영"이라는 mental model을 가집니다.

- **Knob**: 흰색 고정(`{colors.on-primary}`), 매우 옅은 single shadow(`0 1px 2px rgba(0,0,0,0.15)`)로만 부동감 표현. 강한 그림자는 미니멀 원칙에 어긋납니다.
- **Track Color**: Off — `{colors.hairline}`, On — `{colors.primary}`.
- **Transition**: `{ease.in-out}` easing, `{motion.normal}` 단일 슬라이드. 부가 애니메이션 없음 — 미니멀 원칙에 따라 transform 하나로 깔끔하게.

**Sizes (3단계):**

| 사이즈 | 트랙 | Knob | translate | 사용처 |
|---|---|---|---|---|
| `switch--sm` | 32×20 | 16 | 12px | 폼 내부 inline, 테이블 셀, 밀도 높은 설정 |
| `switch` (md, 기본) | 42×24 | 20 | 18px | 일반적인 설정 토글 (기본값) |
| `switch--lg` | 56×32 | 28 | 24px | 모바일 친화 또는 두드러진 메인 토글 |

모든 사이즈는 **4px 그리드**에 정렬되며, lg는 iOS HIG / Material 3의 표준 스위치 치수에 맞춥니다.

**금지**: 스위치를 "저장 후 반영" 폼 컨트롤로 쓰지 마세요(체크박스를 쓰세요). knob에 색을 채우거나 라벨 텍스트(On/Off)를 트랙 안에 넣지 않습니다 — 미니멀 원칙.

### Inputs
- **`text-input`**: 텍스트 필드. 배경색 `{colors.canvas}`, 테두리 1px `{colors.hairline}`. 높이는 약 48px로 타겟 크기를 확보합니다. 포커스 시 보더 컬러만 `{colors.primary}` (1.5px)로 변경합니다 — Minimalist Validation & Focus Policy를 따릅니다.

- **Clearable Input (선택 적용)**: `text-input`과 `Field.Control`은 우측에 Clear(x) 버튼을 덧붙일 수 있습니다. 스펙은 Autocomplete Clear와 동일 — 48×48 hit area, 16×16 칩, 10px x 아이콘, `color-mix({colors.body-muted} 55%/75%, {colors.canvas})`. 값이 비어 있을 때 칩은 unmount합니다. 구현은 `position: absolute`로 입력 위에 얹고 입력 우측 패딩만 48px 확보 — `.combo-input-group`처럼 chassis를 별도로 두지 않아 기존 `text-input` 보더/포커스 토큰을 그대로 유지합니다. *Number Field·OTP·Combobox(우측 chevron 충돌)에는 적용하지 않습니다.*

**인풋 + 버튼 조합 정책 (Input Group Policy):**
인풋 필드와 버튼이 가로로 나열될 때, 시각적인 답답함을 해소하고 명확한 조작 영역을 확보하기 위해 다음 규칙을 준수합니다.
1. **간격 (Gap)**: 8px(`{spacing.xs}`)은 너무 좁아 보이므로, **12px**를 권장합니다. (8px와 16px 사이의 균형)
2. **높이 일치 (Height Alignment)**: 인풋과 버튼의 높이는 반드시 동일하게(기본 48px) 맞춰야 합니다.
3. **내부 여백 (Padding)**: 인풋 내부 텍스트가 테두리에 너무 붙지 않도록 최소 16px 이상의 좌우 여백을 확보합니다.


### Lists

행을 hairline 구분선으로 나열하는 패턴(모달 리스트, 데이터 테이블, 타이포 데모 등) 공통 규칙입니다.

> **List Separator Rule** — `border-bottom` hairline으로 행을 구분하는 모든 리스트(`.modal-list`, `.data-table tbody`, `.type-row` 등)는 **`:last-child`에서 hairline을 제거**합니다. 컨테이너 경계(카드 테두리·패딩, 모달 toolbar 분리선)가 이미 끝을 표시하므로 마지막 hairline은 시각적 중복이며, 행과 컨테이너 사이에 이중선 효과를 만들어 답답해 보입니다. 신규 리스트 패턴을 만들 때도 동일하게 적용합니다.


### Modal
사용자의 집중이 필요한 중요한 정보를 제공하거나 입력을 유도할 때 사용합니다.

#### Variants — 풋터 유무로 갈리는 3가지 모달 패턴

모달은 콘텐츠 성격에 따라 세 가지 변형으로 분리됩니다. **분기 기준은 "사용자가 모달을 닫을 때 commit해야 하는가"** — 스크롤 발생 여부는 결과적 신호일 뿐 결정 요소가 아닙니다.

| Variant | 클래스 | Header | Body | Footer | 사용 케이스 |
|---|---|---|---|---|---|
| **Form** (기본) | `.modal-card` | Title + Description | 입력 필드, 폼 | **우측 정착 액션 풋터** (취소 + 주요 액션) | 프로젝트 생성, 멤버 초대, 설정 저장 — 사용자가 상태를 입력·축적하고 마지막에 **하나의 결정(submit)**으로 닫음 |
| **Picker** | `.modal-card.modal-picker` | **Toolbar 72px** — Title(`title-sm` 20/600, `.modal-title`) + 닫기(X) | **per-row 액션이 있는 리스트** (선택/캐스팅/삭제 등) | 없음 | 보이스 선택, 멤버 선택 — 행을 클릭하는 순간이 곧 commit. 모달 자체는 "닫기"로만 종료 |
| **Browse** | `.modal-card.modal-browse` | **Toolbar 72px** — Title(`title-sm`) + **상단 보조 액션**(button-md) + 닫기(X) | **스크롤 가능한 긴 리스트** | 없음 | 사용량 데이터 조회, 파일 목록 — Picker와 동일 구조에 "전체 다운로드" 같은 **글로벌 보조 유틸리티**가 필요한 경우 |

**왜 Browse는 상단에 보조 액션을 두는가**:
- 리스트가 길어 스크롤이 생기면 하단 풋터는 도달하기 위한 비용이 발생합니다.
- 하단에 두면 per-row 액션과 시각적으로 경쟁합니다(둘 다 우측 위치).
- 상단 헤더에 두면 "이 모달의 범위(Title)에 적용되는 액션"이라는 의미가 자연스럽게 전달됩니다.

**선택 가이드 (의사결정 트리)**:
1. 폼/입력이 주된 콘텐츠인가? → **Form**
2. 리스트인데 글로벌 보조 액션이 있는가? → **Browse**
3. 리스트인데 per-row 액션만 있는가? → **Picker**
4. 단순 안내·컨펌 1~2줄인가? → **AlertDialog** (Modal 아님)

**금지**:
- Picker/Browse에 "확인" 같은 하단 commit 버튼을 두지 않습니다 — 사용자가 "내가 뭘 확인하는 거지?" 혼란.
- Form에 상단 보조 액션을 두지 않습니다 — 결정의 흐름(입력 → 우하단 submit)을 방해.

#### 공통 규칙

- **Title**: `{typography.title-sm}` (20px / 600, `.modal-title` 표준). Modal·Drawer·BottomSheet가 공유하는 컨테이너 타이틀 토큰으로, 폭(md/lg/xl)과 무관하게 동일 위계를 유지합니다. `headline`(28px) 이상은 사용하지 않습니다 — 모달은 페이지 히어로가 아닙니다.
- **Description / Body Text**: `{typography.body-md}` (16px). 좁은 모달에서도 동일하게 유지합니다. 모달 본문에 `body-sm`(14px) 같은 보조 텍스트 토큰을 사용해 가독성을 떨어뜨리지 마세요.
- **Close Button**: Picker/Browse toolbar 우측의 닫기(X)는 `icon-btn icon-btn--md icon-btn--ghost` (40×40 터치 영역, `x` 아이콘 **16px**) — Drawer 닫기와 동일한 `icon-btn` 시스템을 공유합니다. Form 변형은 별도 X 없이 풋터 취소 버튼 + 스크림/Esc로 닫습니다.
- **Width Scale**: Modal과 Alert Dialog가 공유하는 4단 스케일. 공통 공식은 `min(<size>, calc(100vw - 32px))`로, 모바일에서 좌우 16px 여백이 자동 확보됩니다.

  | 토큰 | Width | 8px 배수 | 소유 컴포넌트 | 사용처 |
  |---|---|---|---|---|
  | `--modal-width-sm` | **400px** | 50 × 8 | **Alert Dialog 전용** | 컴팩트 컨펌 — 본문 1~2줄 + 1~2개 액션 |
  | `--modal-width-md` | **480px** | 60 × 8 | Modal (기본) | 1~3개 필드, 일반 폼·안내 |
  | `--modal-width-lg` | **640px** | 80 × 8 | Modal | 4개↑ 필드, 2-column 그리드, 긴 설명 |
  | `--modal-width-xl` | **880px** | 110 × 8 | Modal | 갤러리·미리보기, 테이블, 다단계 위저드 |

  *컴포넌트 분리*: sm은 **Alert Dialog가 단독 소비**합니다. Modal이 노출하는 모디파이어는 `.modal-lg` / `.modal-xl` 두 개뿐이며, **`.modal-sm` 모디파이어는 존재하지 않습니다** — "작은 모달"이 필요한 상황은 정의상 Alert Dialog이기 때문입니다. 둘은 같은 폭 스케일을 공유하지만 컴포넌트 경계는 분명히 분리합니다(Alert Dialog는 center 정렬·풀-너비 액션 풋터·간소화된 정보 위계라는 별도 정체성을 가짐).

  *그리드 정합성*: 네 단 모두 8px 그리드 배수. 단 간격은 **80 / 160 / 240**으로 모듈러 스케일(약 1.2 → 1.33 → 1.37배)을 형성합니다 — sm/md는 일반 폼의 인접한 미세 조정 쌍, lg는 레이아웃이 바뀌는 점프(단일 컬럼 → 2-column), xl은 화면 절반을 차지하는 대형 작업창으로 **각 단이 역할 기준으로 분리**됩니다.

  *사이즈 승격 기준*:
  - md → lg: 필드가 4개 이상이거나 2-column 레이아웃이 필요할 때
  - lg → xl: 갤러리·테이블·다단계 위저드처럼 본문이 **레이아웃 컨테이너**가 될 때 (단순한 폼 확장으로 xl을 쓰지 말 것)

  *상한 정책*: **xl(880)을 넘는 콘텐츠는 더 이상 모달이 아닙니다.** scrim 위의 "떠 있는 카드" 모티프가 무너지고 사용자의 컨텍스트 분리감이 약해집니다. 그 이상은 **풀스크린 다이얼로그 또는 페이지 라우팅**으로 전환합니다. 또한 xl(880)은 iPad 세로(≤834px) 뷰포트에서 공통 공식의 `calc(100vw - 32px)`에 의해 자동으로 축소되므로, 모바일·태블릿 세로에서 화면을 넘치지 않습니다.
- **Height**: 별도 `min-height`를 지정하지 않습니다. 모든 사이즈에서 **콘텐츠 기준**으로 높이가 결정되며, 균일 패딩(`{spacing.xxl}` 32px)과 섹션 gap(`{spacing.xxl}`·`{spacing.xxxl}`)이 시각적 하한을 만들어 줍니다. 납작해 보이는 카드는 콘텐츠 양 자체를 다시 점검하세요(높이 < 220px이면 정보가 부족하다는 신호).
- **Footer Anchoring**: 주요 액션 버튼(확인/닫기 등) 또는 버튼 묶음은 카드 **하단 우측**에 정착시킵니다(`align-self: flex-end`). 버튼이 카드 전체 폭으로 stretch되어 좌측까지 늘어지지 않도록 자연 너비를 유지합니다. 카드는 콘텐츠 기준 높이이므로 footer는 자연스럽게 마지막 행에 놓이며 별도 `margin-top: auto` 트릭은 사용하지 않습니다. 복수 버튼(Cancel + Confirm)은 12px 간격으로 묶어 우측 정렬합니다. Header / Body / Footer 위계를 시각적으로 명확히 합니다.
- **Internal Rhythm (위계 간격)**: Modal 내부는 세 영역(Header / Body / Footer)으로 위계가 나뉘며, **간격은 두 단으로만** 운용합니다 — 모든 자식에 같은 gap을 주면 위계가 사라집니다.
  - **Section gap (Header ↔ Body)**: **32px**(`{spacing.xxl}`). `.modal-body`의 `gap`으로 적용 — Header(`.modal-header`)와 본문 콘텐츠(`.modal-form` 등)를 같은 정보 묶음으로 결합합니다.
  - **Body ↔ Footer gap**: **40px**(`{spacing.xxxl}`). 결정 행위(액션)는 본문에서 한 단계 더 분리되어야 하므로 Section gap(32)보다 한 티어 위로 둡니다. `.modal-card`의 `gap`으로 적용 — `.modal-body` 묶음과 풋터(`.inline-actions`) 사이를 분리합니다.
  - **Header inner gap**: **8px**(`{spacing.xs}`). Title과 Description은 한 묶음으로 읽혀야 하므로 타이트하게 붙입니다. 별도 컨테이너(`.modal-header`)로 감싸 두 텍스트를 그룹화합니다.
  - **금지**: Title/Description/Form/Footer를 카드 직속으로 평행 배치하여 16px 균일 gap을 주는 패턴 — Title이 Description과 분리되어 보이고 정보 위계가 평탄해집니다.
- **Form Body 내부 그루핑 (Form 변형 전용)**: Modal Form의 Body는 **단일 폼이 아니라 성격이 다른 컨트롤 묶음의 합**인 경우가 잦습니다(필수 입력 필드 묶음 + 보조 옵션 토글/체크박스 등). **모든 컨트롤을 한 컨테이너로 묶어 동일 gap·동일 패딩으로 평행 배치하지 마세요** — Fieldset(예: 프로젝트 이름·소속 팀 등 입력 묶음)과 보조 옵션(예: "생성 후 바로 멤버 초대 패널 열기" 같은 단일 체크박스)이 같은 위계로 읽히면 사용자가 "이 체크박스가 어느 필드에 종속되는지" 판단하지 못합니다.
  - **Group gap**: 입력 묶음 ↔ 보조 옵션 묶음 사이는 **32px**(`{spacing.xxl}`) 이상. Fieldset 내부 필드 간격(24px)보다 한 티어 위로 두어 "다른 묶음"임을 spacing만으로 분리합니다. divider(hairline)는 사용하지 않습니다 — 모달 내부에 가로선이 들어가면 카드가 두 영역으로 쪼개져 보입니다.
  - **묶음 식별**: 필수 입력은 `Fieldset`(또는 묵시적 필드 그룹), 보조 옵션 체크박스/스위치는 별도 컨테이너로 분리합니다. 의미가 다른 컨트롤은 시각적으로도 분리되어야 합니다.
  - **금지**: Fieldset과 체크박스를 같은 부모 `<div>`에 묶고 단일 패딩·단일 gap(8/12/16px 균일)으로 평행 배치하는 패턴. "한 덩어리"로 보여 위계가 무너집니다.
- **Padding (여백)**:
  - **Flat 컴팩트 모달**(섹션 구분 없이 단일 카드로 구성될 때, 기본 권장): 상하좌우 **32px**(`{spacing.xxl}`) **균일 패딩**. 네 변의 여백을 동일하게 맞춰 떠 있는 카드의 시각적 균형을 잡습니다.
  - **Sectioned 모달**(Header / Body / Footer가 명시적 영역으로 분리될 때):
    - Header & Footer: 상하 **16px**, 좌우 **24px**.
    - Body: 상하좌우 모두 **24px**(`{spacing.xl}`).
  - **Picker / Browse 변형**(toolbar + 리스트 구조, 카드 자체 패딩은 0):
    - Toolbar: 고정 높이 **72px**, 좌 **24px**(`{spacing.xl}`) / 우 **16px**(`{spacing.md}`) 비대칭. 좌측은 타이틀 호흡용으로 넓게, 우측은 액션 클러스터가 시각적 무게를 이미 가지므로 좁게.
    - 리스트(`.modal-list`) 콘텐츠 영역: 상 **8px**(`{spacing.xs}`) / 하 **16px**(`{spacing.md}`) / 좌 **24px**(`{spacing.xl}`) / 우 **16px**(`{spacing.md}`). 상단은 toolbar hairline 바로 아래라 컴팩트하게 한 단(8px) 좁혀 toolbar와 첫 행이 과하게 떨어져 보이지 않게 합니다. 좌우 인셋은 toolbar와 동일 축으로 맞춰 row 타이틀이 toolbar 타이틀과 수직 정렬됩니다.
- **Shape**: `{radius.xl}` (20px)을 사용합니다. 카드(`radius.lg` 16px)보다 한 단계 더 부드럽게 처리해 떠 있는 컨테이너 특유의 정서를 강조합니다.
- **Border**: **없음**. 모달은 `{shadow.level-3}`만으로 충분히 떠 있는 느낌을 형성하므로 hairline 보더를 사용하지 않습니다. 보더가 있으면 그림자와 이중 경계가 만들어져 가장자리가 답답해집니다. 다크 모드에서도 동일하게 보더를 제거하고 `Surface Soft` 배경 톤 대비로만 경계를 표현합니다.
- **Elevation**: `{shadow.level-3}`와 어두운 배경(Scrim)을 조합하여 강력한 수직 계층을 형성합니다.
- **금지**: 모달 내부에 `display-*` 토큰(40px↑) 사용 금지. 모달은 페이지 히어로가 아닙니다. 콘텐츠 양에 맞춰 카드를 납작하게(높이 < 220px) 만들지 마세요. 본문에 `body-sm`(14px) 같은 보조 텍스트 토큰도 사용하지 않습니다.

### Alert Dialog
되돌릴 수 없는 액션을 확인하거나 단순 정보를 알릴 때 사용하는 컴팩트 다이얼로그. Modal의 컨펌 변형으로, 정보 위계가 단순할 때 시선을 중앙에 집중시키고 컨테이너 자체를 한 단계 작게 처리합니다.
- **Text Alignment**: 타이틀과 본문 모두 **center** 정렬. 정보가 짧고 단일 결정에 초점이 맞춰지는 컨펌 UI 특성을 반영합니다.
- **Title**: `{typography.body-md}` (16px) **weight 500** (medium). 컴팩트 컨펌 UI는 본문보다 한 단계만 위에 두어 위계를 절제합니다 — semibold(600)는 본문 대비 시각적 무게가 과해 medium으로 한 단계 가볍게 둡니다.
- **Description**: `{typography.body-sm}` (14px) regular. Modal 본문(16px)에서 한 단계 다운.
- **Width**: **400px**(`min(400px, calc(100vw - 32px))`). Modal 기본(md 480px)보다 한 단계 좁힌 컴팩트 폭.
- **Padding**: 상 **40px** / 좌우 **24px**(`{spacing.xl}`) / 하 **24px**. 상단을 두텁게 잡아 타이틀을 시각적 중앙으로 띄웁니다.
- **Vertical Rhythm**: Title ↔ Description **12px**, Description ↔ Actions **40px**. 본문과 액션 사이를 넉넉히 띄워 컨펌 결정에 호흡을 줍니다.
- **Footer (Actions)**: 카드 **하단 풀-너비 행**으로 배치하고, 버튼은 `flex: 1`로 **균등 분할**합니다. Modal의 우측 정착(footer-right-anchor)을 **적용하지 않습니다**.
  - **Default(기본) 듀얼**: `button-secondary` (취소) + `button-primary` (확인/저장/계속). 일반 컨펌 액션.
  - **Negative(부정) 듀얼**: `button-secondary` (취소) + `button-danger` (삭제/차단/폐쇄). **되돌릴 수 없는 파괴적 액션** 전용. `button-primary`와 `button-danger`를 같은 다이얼로그에서 동시에 사용하지 않습니다.
  - **단일 버튼**: `button-primary` 하나만 풀-너비로 배치. 단순 알림 확인용.
  - 공통: 기본 사이즈(**48px Large**), 두 버튼 사이 간격 **12px**(`{spacing.sm}`).
- **Shape / Elevation**: Modal과 동일(`radius.xl` 20px, `shadow.level-3`, 보더 없음).
- **버튼 토큰**: 반드시 design-system.md에 정의된 `button-primary` / `button-secondary`만 사용. 신규 버튼 변형(soft, tinted 등) 생성 금지.
- **금지**: 우측 정렬 풋터(우측 정착), 자동 너비 버튼, `title-md` 이상의 타이틀, 신규 버튼 토큰(반드시 `button-primary` / `button-secondary`만 사용).

### BottomSheet
모바일/태블릿에서 하단에서 올라오는 임시 컨테이너. 모달의 가로형 변형으로 취급하며 타이틀 위계는 동일하게 적용합니다.
- **Title**: `{typography.title-sm}` (20px / 600, `.modal-title` 표준). Modal·Drawer와 동일한 컨테이너 타이틀 토큰을 공유합니다 — `headline`(28px) 이상은 사용하지 않습니다.
- **Description**: `{typography.body-md}` (16px). 한 줄 안내가 길면 두 줄까지 허용하며, 그 이상은 Body 콘텐츠로 분리합니다.
- **Padding**: 단일 카드 컴팩트 구성은 상하좌우 **32px**(`{spacing.xxl}`) 균일 패딩(기본 권장). 섹션이 분리된 큰 시트는 Header 상 **20px** / 하 **12px**, 좌우 **24px**. Body 상하좌우 **24px**.
- **Shape**: `{radius.xl}` (20px). 모달과 동일하게 카드보다 한 단계 부드러운 가장자리로 떠 있는 느낌을 강조합니다.
- **Border**: **없음**. 모달과 동일한 원칙. `{shadow.level-3}` + Surface 톤 대비로만 경계를 표현합니다.
- **Drag Handle**: 시트 상단 중앙에 **36x4px** rounded bar (`rgba(0,0,0,0.16)` light / `rgba(255,255,255,0.24)` dark). 핸들과 타이틀 사이 간격 **12px**.
- **Elevation**: `{shadow.level-3}` + Scrim. **Surface는 `{colors.canvas}` 사용** — Modal과 동일 배경을 유지하여 반응형 시트 페어(데스크톱 Modal ↔ 모바일 BottomSheet)의 시각 정체성을 통일합니다. 시트 내부 hover/active 신호는 `{colors.surface-soft}`로 표현되므로, 컨테이너 자체를 surface-soft로 두면 호버가 사라집니다.
- **금지**: `display-*` 토큰, 카드보다 큰 타이틀, 강한 컬러 배경, hairline 보더.

**Footer Cancel Button** (시트 풋터의 취소 버튼)

BottomSheet 풋터의 취소는 iOS Action Sheet 패턴을 따라 **회색 fill** 외형을 사용합니다. 전역 `button-neutral` 같은 신규 변형을 만들지 않고, **`button-secondary` 베이스 + 시트 스코프 한정 클래스(`bottom-sheet-cancel`)로 오버라이드**하여 전역 Button 위계(Primary/Secondary/Ghost/Danger)를 침범하지 않습니다.

- **베이스**: `button-secondary` (높이·radius·타이포·`button-md` 정렬 토큰을 그대로 상속, weight **500** 유지 — `button-md` 규격을 깨지 않음).
- **Surface 오버라이드**: background `{colors.surface-inset}` (라이트 `#EEF1F5` / 다크 토큰 동일 매핑), border 같은 색으로 통일. 시트 본체(`{colors.canvas}`)보다 한 단계 가라앉은 톤으로 "취소는 한 단계 뒤로 빠진 액션"임을 시각적으로 전달합니다.
- **Hover**: background `{colors.hairline}`로 한 단계만 어둡게 — Secondary의 hover(`surface-soft`)와 달리, fill이 이미 잡혀 있으므로 채움 톤만 강화합니다.
- **Text**: `{colors.ink}`. 별도 weight 조정 없음.
- **사용 범위**: BottomSheet 풋터 전용. Modal/Drawer/AlertDialog의 취소는 기존 규칙(`button-secondary` / `button-ghost`)을 그대로 따릅니다 — fill 취소 패턴을 다른 컨테이너로 확산시키지 않습니다.
- **금지**: 전역 `button-neutral` / `button-soft` / `button-tinted` 신규 토큰 도입, 다른 컴포넌트로의 fill 취소 패턴 확산, font-weight 600 같은 타이포 토큰 위반.

**Sheet Action Item** (시트 내부 액션 리스트 항목)

BottomSheet 본문에 세로로 쌓이는 풀-너비 액션 행. iOS Action Sheet / Material List Item의 NCAI 변형으로, **시트 내부 전용 리스트 버튼**입니다. Menu Item이 좁은 popup 안의 dense 리스트(높이 32~36px)라면, Sheet Action은 시트 폭 전체를 차지하는 호흡 있는 터치 타겟(높이 48~52px)입니다. 단독 `<button>`이 아니라 시트 컨텍스트 안에서만 사용합니다.

- **Container**: `<ul>` → `<li>` → `<button>` 또는 `<a>`. 시트 Title/Description 아래 `{spacing.xs}` (8px) 간격, 액션 풋터(취소 버튼 등) 위 `{spacing.xs}` 간격으로 분리.
- **Contained alignment**: 리스트는 시트 본체의 좌우 패딩(`{spacing.xxl}` = 32px) **내부에 정착**합니다. 풋터의 취소 버튼이 같은 좌우 여백 안에 있으므로 액션 리스트도 동일한 여백을 공유해야 시트 전체의 인너 컨테이너 정렬이 일관됩니다. *액션 항목의 호버 배경을 시트 가장자리까지 늘이지 마세요 — 풋터 버튼(여백 있음) ↔ 액션 항목(edge-to-edge) 간 시각 충돌이 발생합니다.*
- **Size**: 높이 **48px** (기본) / **52px** (아이콘 + 보조 텍스트 2줄 구성). 패딩 `12px {spacing.md}` (16px — 항목 내부 좌측 여백).
- **Radius — 풋터 버튼과 동일 토큰 사용 (`{radius.md}` = 10px)**: 같은 시트 안에서 함께 보이는 인터랙티브 요소는 라운딩 토큰을 통일합니다. 액션 항목만 `{radius.sm}` (8px), 풋터 취소/확인 버튼은 `{radius.md}` (10px)처럼 1~2px 차이가 나면 정렬은 같지만 모서리 곡률만 미묘하게 달라 "잘못 정렬된 느낌"이 발생합니다. **규칙**: *시트·다이얼로그·드로어 같은 컨테이너 안에 풀-너비 인터랙티브 요소(버튼, 액션 항목, 입력)가 함께 놓일 때, 라운딩은 그 컨테이너에서 가장 큰 요소(보통 풋터 버튼) 기준으로 통일합니다.* 호버 배경은 이 통일된 라운딩 안에 contained pill로 표시됩니다.
- **Typography**: `{typography.body-md}` (16px) / weight 400 / `{colors.ink}`. Menu Item(14px)보다 한 단계 큰 본문 위계 — 시트가 화면 하단을 차지하는 큰 컨테이너이기 때문에 라벨도 또렷하게 읽힙니다.
- **Layout**: `display: flex; align-items: center; gap: {spacing.md}` (16px). 좌측 정렬, 텍스트 + 선택적 아이콘/보조 라벨.
- **Default**: background `transparent`, color `{colors.ink}`.
- **Hover**: 라이트 `{colors.surface-soft}` / 다크 `{colors.surface-elevated}` — **Button Ghost와 동일한 모드별 분기**를 따릅니다. 다크 모드에서 시트 배경 자체가 `surface-soft(#18191B)`로 떨어지므로 hover도 같은 토큰이면 신호가 사라집니다. Button Ghost의 다크 hover(`surface-elevated #27282D`)를 재사용하여 시트 위 인터랙티브 액션 항목과 일관된 위계를 유지합니다. *임의의 `rgba(0,0,0,0.04)` 오버레이는 디자인 시스템 컬러 토큰을 벗어나므로 사용하지 않습니다.*
- **Destructive Action**: 텍스트와 아이콘 모두 `{colors.semantic-error}`. 시트 안에서 시각적으로 분리하기 위해 **리스트 최하단에 배치**하고, 위 항목과 `{spacing.xs}` 간격을 둡니다. *주의: 같은 시트에 destructive 항목이 2개 이상이면 시트가 아닌 Alert Dialog로 분리하세요.*
- **금지**: 아이콘 뒤 컬러 배경 박스, 우측 chevron(시트는 navigation이 아닌 액션 셀렉터), 항목 간 hairline divider(여백으로 충분), Primary 컬러 채움 행.

**Sheet Action Item — 아이콘 처리** (Sidebar와 동일 패턴)

시트 액션은 아이콘 + 라벨 조합이 가장 흔합니다. 라벨 텍스트와 아이콘 컬러를 **분리해서 표현**하여 라벨이 시선을 먼저 받고 아이콘이 부가 단서로 따라가도록 합니다. Sidebar Item과 정확히 같은 규칙을 따릅니다.

- **Icon Size**: **20px** (Sidebar 18px보다 한 단계 큼 — 시트의 큰 행 높이에 맞춤). Stroke-based, `currentColor`.
- **Icon Color (Default)**: 부모 텍스트 컬러(`{colors.ink}`)를 상속하되 **`opacity 0.75`** 적용. 텍스트보다 한 단계 톤 다운하여 라벨이 우위에 서도록 합니다.
- **Icon Color (Hover/Active)**: `opacity 1`로 복귀. 인터랙션 시점에 아이콘과 라벨이 동등한 무게로 정렬됩니다.
- **Destructive Action 아이콘**: 텍스트와 동일하게 `{colors.semantic-error}` 솔리드, opacity 적용하지 않습니다. 위급도 신호는 톤 다운하지 않습니다.
- **Transition**: `opacity {motion.fast} {ease.standard}, background {motion.fast} {ease.standard}`. Sidebar와 동일 토큰.
- **금지**: 아이콘 컬러를 라벨과 무관하게 `{colors.primary}` 등으로 별도 지정 (시트는 정보 전달이지 강조가 아님), 멀티컬러 아이콘, 아이콘 박스 배경, 아이콘만 opacity 1로 두고 텍스트는 muted 처리하는 역위계.

### Drawer
화면 가장자리에서 슬라이드되어 등장하는 풀-하이트 사이드 패널. **메인 컨텍스트를 유지한 채** 상세 정보, 설정, 보조 작업을 노출할 때 사용합니다. Modal(중앙 집중) / BottomSheet(모바일 하단) / Sidebar(영구 고정 네비)와 역할을 분명히 분리합니다.

**언제 쓰는가**
- 리스트–상세 흐름에서 메인 화면을 유지한 채 상세 패널을 띄울 때 (Linear 이슈, Notion 페이지 정보 패턴).
- 다단계/긴 설정·필터 패널이지만 페이지 이동은 흐름을 끊는 경우.
- 모바일에서 Sidebar의 1차 네비게이션을 햄버거 → 좌측 슬라이드로 대체할 때 (`left` 변형).

**언제 쓰지 않는가**
- 단순 확인/경고 → **Alert Dialog**.
- 짧은 단일 입력 → **Popover** 또는 inline edit.
- 모바일에서 1~2개 액션 정도의 단순 시트 → **BottomSheet**.
- 데스크톱의 영구 1차 네비게이션 → **Sidebar** (Drawer는 오버레이, Sidebar는 정착).

**Variants**
- **`drawer-right`** (기본): 데스크톱 웹앱의 상세/설정 패널. 우측 가장자리에 정렬.
- **`drawer-left`**: 모바일/태블릿 뷰의 글로벌 네비게이션 (Sidebar 모바일 변형). 좌측 가장자리에 정렬.
- top/bottom 변형은 정의하지 않습니다 — BottomSheet와 역할 중복.

**Container**
- **Position**: 화면 가장자리에 풀-하이트로 정착(`top: 0; bottom: 0`).
- **Width**:
  - `right`: 데스크톱 **440px** 기본 / `560px` 와이드 / `min(440px, 92vw)` 모바일.
  - `left`: **`min(280px, calc(100vw - 56px))`** 모바일 네비게이션 폭 (Sidebar 264px와 유사한 폭을 유지하되 최소 56px 스크림 보장. 단순 비율 `85vw`는 좁은 화면에서 Modal과 구분이 사라져 사용하지 않음 — [Mobile Navigation](#)의 Left Variant 규칙과 동일).
- **Background**: `{colors.canvas}`. BottomSheet처럼 `Surface Soft`를 쓰지 않습니다 — Drawer는 본문과 동등한 작업 표면을 제공.
- **Border**: **없음**. 가장자리에 붙으므로 보더 대신 `{shadow.level-3}` + Scrim으로 분리.
- **Border Radius**: **0**. 화면 edge에 정렬되는 변은 라운딩하지 않습니다. Modal/BottomSheet의 `radius.xl`과 달리 Drawer는 직선으로 마감하여 "정착한 패널"의 인상을 줍니다.
- **Elevation**: `{shadow.level-3}` + 반투명 Scrim (Modal/BottomSheet와 동일).
- **Motion**: `transform {motion.expand} {ease.out-expo}`. `right` 변형은 `translateX(100%) → 0`, `left`는 `translateX(-100%) → 0`.

**Structure (Header / Body / Footer)**
Drawer는 BottomSheet의 단일 컨테이너와 달리 **3구역 위계**를 명시합니다.

- **Header**: 상하 `{spacing.xl}` (24px) / 좌우 `{spacing.xxl}` (32px). 하단 `1px solid {colors.hairline}`로 Body와 분리. 우측에 `icon-btn icon-btn--md icon-btn--ghost` (40×40) 닫기 버튼 정렬.
  - **Title**: `{typography.title-sm}` (20px / 600, `.modal-title` 표준). Modal·Sheet와 동일한 컨테이너 타이틀 위계 — `headline`(28px) 이상은 금지.
  - **Description** (선택): `{typography.body-md}` (16px), `{colors.body-muted}`. 1~2줄로 제한.
- **Body**: 상하 `{spacing.xl}` / 좌우 `{spacing.xxl}`. `overflow-y: auto`로 긴 컨텐츠 스크롤 허용. 섹션 간 `gap: {spacing.xl}` (24px).
  - 섹션 라벨은 `{typography.body-sm}` weight 500 / `{colors.body-muted}` (Sidebar section label과 동일 톤).
- **Footer**: 상 `{spacing.md}` (16px) / 하 `{spacing.md}` / 좌우 `{spacing.xxl}`. 상단 `1px solid {colors.hairline}`. 액션은 **우측 정착**(Modal과 동일), `gap: {spacing.sm}` (12px — Modal 액션 풋터와 동일한 버튼 그룹 표준 간격). 풀-너비 균등 분할은 적용하지 않습니다 — 그건 Alert Dialog/BottomSheet 컴팩트의 역할.

**Close Affordance**
- 헤더 우측 상단에 `icon-btn icon-btn--md icon-btn--ghost` (40×40, `x` 아이콘 16px). ghost 변형이므로 평상시 `{colors.body}`, hover 시 `{colors.surface-soft}` 배경 + `{colors.ink}`. Modal/Dialog 닫기와 동일한 `icon-btn` 시스템을 공유합니다.
- Scrim 클릭 / `Esc` 키로도 닫힘 (Base UI Drawer 기본 동작).
- BottomSheet의 drag handle은 사용하지 않습니다 — Drawer는 모바일 제스처 시트가 아닌 명시적 패널.

**Accessibility**
- `<Drawer.Root>` + `<Drawer.Title>` + `<Drawer.Description>`로 ARIA 자동 연결.
- Focus trap 자동 활성. 열림 시 첫 인터랙티브 요소로 포커스 이동.
- 닫기 버튼에 `aria-label="닫기"` 명시.

**금지**
- 가장자리 변 라운딩 (`border-radius` 적용 금지). 화면 edge와 어긋나면 정착감이 깨집니다.
- Drawer 안에 또 다른 Modal/Drawer를 띄우는 중첩 오버레이.
- 데스크톱에서 `left` Drawer를 1차 네비게이션 용도로 사용 (그건 Sidebar의 영역).
- `display-*` 토큰, `headline`(28px) 이상의 타이틀.
- 풀-너비 균등 분할 풋터 액션 (Alert Dialog와 시각 충돌).
- BottomSheet의 drag handle.

**Drawer vs 다른 오버레이 — 결정 매트릭스**

| 상황 | 컴포넌트 |
|---|---|
| 중앙 집중, 짧은 컨펌/정보 | Alert Dialog |
| 중앙 집중, 일반 다이얼로그 | Modal |
| 모바일/태블릿 하단 임시 시트 | BottomSheet |
| 데스크톱 상세/설정 패널 (컨텍스트 유지) | **Drawer (right)** |
| 모바일 1차 네비게이션 | **Drawer (left)** |
| 데스크톱 영구 1차 네비게이션 | Sidebar |
| 좁은 보조 정보 | Popover / Tooltip |

### Popover / Tooltip
좁고 짧은 보조 컨테이너. 타이틀이 들어가더라도 본문 텍스트 위계를 넘지 않습니다.
- **Title**: `{typography.body-md}` weight 600 (16px). 단일 라인 권장.
- **Description**: `{typography.body-sm}` (14px).
- **금지**: `headline`(28px) 이상의 토큰, 멀티 라인 디스플레이 타이틀.

#### Tooltip 전용 규칙
좁고 일시적인 힌트. 즉각적인 반응성과 라이트/다크 반전이 핵심입니다.

- **반응 속도**: hover open delay **100ms 이하**, close delay **0ms**. Base UI 기본값(600ms)은 너무 느리므로 `Tooltip.Provider`에서 `delay={100} closeDelay={0}`로 강제합니다. *근거: 보조 힌트는 사용자가 의도적으로 머무른 직후 즉시 떠야 인지 비용이 낮습니다.*
- **애니메이션**: `opacity 0→1` + `transform scale(0.96→1)`, `{motion.fast}` `ease-out`. `data-starting-style` / `data-ending-style`로 진입·퇴장 모두 같은 곡선을 사용합니다. 슬라이드/바운스 금지 — 떠 있는 컨테이너는 정적인 등장이 원칙입니다.
- **컬러 (반전 패턴)**: Tooltip은 Popover와 달리 **모드 간 명도를 반전**시켜 본문과의 대비를 극대화합니다.
  - **라이트 모드**: 배경 `{colors.ink}` + 글자 `{colors.on-primary}` (어두운 surface, 밝은 텍스트).
  - **다크 모드**: 배경 `#FFFFFF` + 글자 `#000000` + arrow `fill: #FFFFFF` (밝은 surface, 어두운 텍스트). `surface-soft`로 동기화하지 않습니다 — 다크 본문 위에서 다시 어두운 surface를 쓰면 시인성이 떨어집니다.
- **사이즈·타이포**: padding `8px 12px`, radius **`{radius.md}` (10px)**, **body-sm(14px)**, `line-height 1.5`. *타이포 근거: caption(12px)은 Toast description처럼 독립 카드의 보조 라인에 쓰이는 최소 위계라 IconButton·Toolbar 옆 hover 힌트에서는 가독성이 부족합니다. Tooltip은 trigger 동작에 대한 1차 설명이므로 body-sm(14px)으로 한 단계 위계를 올려 trigger 라벨(Button body-sm)과 동일한 읽기 곡선을 유지합니다.* *radius 근거: Tooltip은 좁지만 인터랙티브 컨텍스트(버튼·아이콘 버튼) 옆에 떠 있는 경우가 많아, 같은 화면에 공존하는 Button(`radius.md` 10px)·Input(`radius.md` 10px)과 곡률을 맞춰야 floating 요소가 따로 노는 인상을 피할 수 있습니다. `radius.sm`(6px)은 뱃지·체크박스처럼 인라인 마이크로 요소 전용이며, Tooltip에 적용하면 옆 트리거와의 곡률 불일치로 어색해집니다.*
- **최소·최대 치수**:
  - `min-width: 56px` — 짧은 라벨(예: "저장") 단독으로 떠도 어색한 좁은 버블이 되지 않도록 하한선을 둡니다.
  - `max-width: 260px` — 한 화면 안에서 본문 컬럼을 침범하지 않는 폭. 이보다 길어질 콘텐츠는 Popover로 승격합니다.
  - `max-height: 120px` + `overflow: hidden` — 멀티라인이 폭발하지 않도록 상한. body-sm(14×1.5≈21px) 기준 두 줄(약 42px)을 권장하고 3줄 이상은 Popover.
  - `min-height`은 별도 지정하지 않습니다. content-driven으로 두되 padding이 시각적 하한을 만들어 줍니다.
- **그림자**: `{shadow.level-2}` (라이트). 다크 모드에서는 `1px solid {colors.hairline}`로 surface 분리.

#### Tooltip 안에 키보드 단축키(kbd) 노출
Tooltip은 단축키 hint를 함께 보여주는 가장 적절한 위치입니다(Menu/Toolbar의 보조 표시).

- **노출 케이스**:
  - Toolbar / IconButton의 액션 라벨 (예: "저장 ⌘S", "검색 ⌘K").
  - 라벨이 가려진 아이콘 전용 버튼 — 라벨 + 단축키를 한 번에 안내.
  - 키보드 네비게이션이 핵심인 캔버스/에디터의 hover affordance.
- **비노출 케이스**:
  - 단축키가 없는 일반 hover 힌트 (단축키 자리만 비워두지 않습니다).
  - Menu Item 내부 — Menu는 우측 정렬 `menu-item-shortcut`을 사용합니다(중복 노출 금지).
  - 모바일/터치 전용 화면 — 단축키가 실행 불가능한 환경에서는 표시하지 않습니다.
- **레이아웃**: `<라벨> <kbd-group>` 순서, gap `8px`. 단축키는 항상 우측에 그룹화합니다. 라벨 없이 단축키만 표시하지 않습니다(맥락 손실).
- **kbd 토큰** — *테두리·배경 없이 글리프(타이포)만으로 표현합니다. Tooltip 자체가 이미 surface 위계를 갖고 있어 그 안에 다시 박스를 두면 위계가 중복되고 노이즈가 됩니다.*
  - 사이즈: `height 18px`, padding **0**, min-width 없음. 박스/보더/배경 모두 **0**. *글리프만 표시하므로 padding이나 min-width를 두면 단축키 글자 사이가 비정상적으로 벌어집니다 — 예: "⌘S"가 "⌘  S"처럼 보입니다.*
  - 타이포: **`{typography.caption}` (12px)** / **weight regular (400, inherit)**. *본문이 body-sm(14px)이므로 한 단계 작은 caption(12px)으로 위계 차이를 만듭니다. weight는 본문과 동일한 regular — kbd는 'dim한 보조 정보'가 컨셉이라 굵게 처리하면 의도와 모순됩니다 (굵기는 강조, dim은 약화). 사이즈와 컬러만으로 위계를 만들고 weight는 일관 유지.*
  - 폰트 패밀리: **`{font.text}` (Pretendard)**. *브라우저 user-agent 기본 스타일이 `kbd { font-family: monospace }`라 명시적 override가 필요합니다 — `inherit`로 우회하지 않고 디자인 토큰을 직접 참조해 의도를 코드 표면에 드러냅니다. mono(`{font.mono}` Geist Mono)는 적용하지 않습니다. 좁은 tooltip 안에서 본문↔kbd 폰트 패밀리가 다르면 x-height·baseline 차이로 라벨과 kbd가 미세하게 어긋나 보입니다. macOS 심볼(⌘ ⇧ ⌥ ⌃)은 어떤 폰트에서도 동일한 유니코드 글리프로 렌더되므로 sans-serif에서도 가독성 손실이 없습니다. mono는 단축키만 모아 보여주는 Cheatsheet/Help Modal 같이 단축키 자체가 콘텐츠일 때만 사용합니다.*
  - 컬러 (라이트): **`{colors.on-ink-muted}` (rgba(255,255,255,0.64))** — Tooltip 본문(`on-primary` 흰색)보다 한 톤 dim하여 라벨이 우선시되고 단축키는 보조 정보로 읽히게 합니다.
  - 컬러 (다크): `rgba(0, 0, 0, 0.55)` — 같은 원리로 본문(`#000`)보다 dim. *다크 모드 tooltip은 흰 surface 위 검정 텍스트라 'ink 위 muted' 토큰(`on-ink-muted`)과 의미가 반대 — 현재 'canvas 위 muted' 토큰은 정의되어 있지 않아 하드 rgba를 유지합니다. 향후 `{colors.on-canvas-muted}` 추가 시 토큰화 후보.*
  - 다중 키: 각 키를 개별 `<kbd>`로 분리하고 **gap `1px`** (거의 붙여서)로 나열합니다 (예: `⌘S`). 박스가 없는 글리프 표현에서 gap을 4px 이상 두면 한 단축키 조합이 아닌 별개의 키 두 개로 읽힙니다. `+` 기호로도 잇지 않습니다 — 시각적 노이즈.
  - 심볼: macOS는 `⌘ ⇧ ⌥ ⌃`, Windows/Linux는 `Ctrl Shift Alt`. 플랫폼을 런타임에 감지하여 일관되게 표시.
  - **금지**: kbd 박스 테두리, 배경 fill, radius, 그림자. Tooltip 안의 kbd는 **타이포 전용 토큰**입니다.
- **금지**: 단축키만 단독 노출, `+` 기호로 키 연결, 3키 초과 조합(인지 부담 — Menu/Cheatsheet로 이전).

#### Tooltip 금지 사항
- 멀티라인 설명(2줄 이상이면 Popover로 승격).
- 액션 버튼/링크/인터랙티브 콘텐츠.
- `max-width` 260px 또는 `max-height` 120px 초과 콘텐츠.

#### Popover 전용 규칙
명시적 클릭으로 여는 인터랙티브 보조 패널. 멀티라인 본문을 담는 미니 카드. Tooltip(다크 라벨)과 달리 라이트 surface 위에 위계 있는 콘텐츠(제목 + 본문)를 둡니다.

- **트리거 위계**: 시각 비중이 가벼운 트리거가 원칙. **`icon-btn icon-btn--ghost icon-btn--sm`** (32×32 ghost icon button + `info` / `circle-help` 등 아이콘)이 가장 보편적인 패턴 — GitHub/Linear/Vercel 표준. *근거: Popover는 보조 정보 제공이지 main 액션이 아님. 트리거가 콘텐츠를 압도하면 modal 의도와 충돌합니다.*
- **사이즈·타이포** (`.popover-card`):
  - `width: 260px`, `max-width: min(280px, var(--available-width))`.
  - `padding: 16px 18px` — Tooltip(`8px 12px`)과 명확히 차별화되는 카드 톤 여유.
  - `gap: 8px` — 제목과 본문 사이 spacing.
  - `border-radius: {radius.md}` (10px) — 정보 카드(`{radius.lg}` 16px)보다 한 단계 컴팩트한 떠 있는 패널 톤. *card-standard 그룹(`.accordion-item`, `.form-card`, `.fieldset`, `.preview-card`, `.modal-card`)에서 `.popover-card`를 분리해 독립 정의.*
- **본문 텍스트** (`.popover-copy`): font-size **14px** (body-sm) + line-height 1.5 + color `{colors.body-muted}`. *근거: `modal-copy`(16px body-md)를 그대로 쓰면 좁은 보조 패널 위계를 침범합니다. popover-title(16px body-md weight 600)과의 강도 위계도 명확해집니다.*
- **그림자**: **`{shadow.level-2}`** (`0 8px 24px rgba(15,23,42,0.12)`). *근거: Modal급 `{shadow.level-3}`은 main surface 위계로, 보조 패널인 Popover가 쓰면 무게가 어울리지 않습니다. border + level-2의 이중 광학 대비로 floating 표현은 충분.*
- **컬러 (모드별)**:
  - **라이트**: 배경 `{colors.canvas}` + border `1px solid {colors.hairline}`.
  - **다크**: 배경 `{colors.surface-soft}` + border `rgba(255,255,255,0.10)` (translucent white overlay). Tooltip의 라이트/다크 **반전 패턴**과 달리 Popover는 surface 위계 톤을 유지합니다 — 인터랙티브 카드라 본문 가독성이 우선.
- **Enter / Exit animation**: **fade-only** (`opacity 0→1`, `{motion.fast}` `ease-out`). **`scale(0.98)` 진입 transform 금지** — popup-arrow가 popup-card의 자식이라 scale에 따라 transform-origin 기준으로 1px 시각적으로 움직이는 부작용이 발생합니다. arrow를 가진 Popover 계열(`.popover-card` 등)이 이 규칙을 공유합니다. *근거: Tooltip은 자식 콘텐츠가 단일 텍스트뿐이라 scale이 자연스러운 인지 신호지만, Popover는 Arrow + 멀티라인 콘텐츠를 담은 카드라 scale이 alignment 정밀도를 깹니다.* `.date-picker-popover`는 arrow가 없어 이 제약에서 빠지고 방향 인식 세로 슬라이드를 씁니다 — 단, 트리거의 `:active` press scale을 꺼야 팝업이 끌려 좌우로 밀려 보이지 않습니다(Date Picker 섹션 참조).

##### Popover 금지 사항
- 큰 솔리드 버튼 트리거(`button-primary`/`button-secondary` height 48) — modal/drawer 의도와 충돌.
- `chevron-down` 트리거 — select/dropdown 메타포와 충돌(Popover는 옵션 선택이 아니라 보조 패널 열기).
- `{shadow.level-3}` (modal급 무게).
- `transform: scale()` enter/exit animation (popup-arrow 1px shift).
- `modal-copy`(16px) 본문 — 좁은 패널 위계 침범.
- 시스템 외 임시 트리거 클래스 정의(`button-ghost button-sm` / `text-link` 등 시스템 클래스로 표현).

#### Popup Arrow (꼬리)
Popover와 Tooltip이 공통으로 쓰는 base-ui `<Popover.Arrow>` / `<Tooltip.Arrow>` wrapper의 SVG 사양. base-ui는 wrapper의 자동 position(left/right 가운데 정렬)만 처리하고 SVG children은 직접 제공해야 합니다. wrapper에 SVG가 없으면 빈 0×0 div로 렌더되어 화살표가 표시되지 않습니다.

- **SVG 구조** (2-layer fill + stroke):
  - **viewBox**: `0 0 16 9` — SVG element의 `width`/`height` attribute와 **1:1 매핑** (좌표 1단위 = 1px). *근거: viewBox와 element 크기가 다르면 path 좌표계가 비례 확대되어 stroke 두께도 같이 확대됨 → popover-card의 hairline border(1px)와 톤 불일치. 1:1 매핑이 stroke 두께 통제의 핵심.*
  - **fill path** (closed, `.arrow-fill`): `M0 8 L8 0 L16 8 L16 9 L0 9 Z` — triangle + **1px 높이 baseline rectangle**. *baseline rect가 popover-card의 top hairline border(1px)를 정확히 같은 두께로 mask해 꼬리와 몸통이 같은 fill 영역으로 연결되는 시각 효과. 이게 빠지면 popover top hairline이 꼬리 base를 가로질러 두 개의 분리된 도형으로 보임.*
  - **stroke path** (open, `.arrow-stroke`): `M0 8 L8 0 L16 8` — 두 변만(Z 없음, baseline 제외). *popover top edge가 stroke 양 끝점과 정확히 만나는 지점에서 hairline border와 자연스럽게 join. baseline에 stroke를 그리면 popover top hairline과 중복되어 어색해집니다.*
- **CSS** (`.popup-arrow`):
  - **`display: block` on inner svg** — SVG는 기본 `inline` 요소라 wrapper의 텍스트 baseline에 정렬됨 → 의도한 좌상단에서 line-box ascender만큼 밀림. 명시적 `block`으로 이 함정을 회피해야 wrapper top 좌표와 SVG 박스가 1:1 일치.
  - **stroke**: `stroke-width: 1`, `stroke-linejoin: round` (꼭짓점 부드럽게), **`stroke-linecap`은 default `butt`** — `round`로 두면 stroke 양 끝(baseline 양 끝점)이 0.5px씩 반원으로 빠져나가 popover 보더와 만나는 지점이 미세하게 어긋남.
  - **stroke color**: 라이트 `{colors.hairline}` / 다크 `rgba(255,255,255,0.10)` — popover-card border와 동일 톤.
  - **fill color**: 라이트 `{colors.canvas}` / 다크 `{colors.surface-soft}` — popover-card 배경과 동일 톤.
- **Position offset** (data-side 기준 — base-ui Floating UI 컨벤션: "popup이 trigger의 어느 쪽에 위치하는지"):

| `data-side` | popup 위치 | 화살표 방향 | offset |
|---|---|---|---|
| `top`    | trigger 위    | ▽ popup 아래 | `bottom: -8px; rotate: 180deg` |
| `bottom` | trigger 아래  | ▲ popup 위   | `top: -8px` (회전 없음) |
| `left`   | trigger 왼쪽  | ▶ popup 오른쪽 | `right: -12px; rotate: 90deg` |
| `right`  | trigger 오른쪽 | ◀ popup 왼쪽   | `left: -12px; rotate: -90deg` |

  - *offset 값 계산: SVG height(9) + base-ui Arrow wrapper의 자체 ~1px padding 보정 + stroke-width/2 보정. 결과적으로 stroke 양 끝점이 popover-card top edge 위에 정확히 align.*
  - **꼭짓점 prominence**: popover edge에서 약 **8px 위**로 튀어나옴 — 꼬리 끝이 trigger를 명확히 가리키는 인상.

##### Popup Arrow 금지 사항
- viewBox와 SVG element 크기 불일치 (stroke 두께 비례 확대 → hairline border와 톤 불일치).
- base-ui 표준의 fill-based stroke 표현 (`arrow-outer-stroke` / `arrow-inner-stroke` 분리된 fill path). viewBox 변경 시 stroke 두께 통제 불가 — 항상 **진짜 stroke 속성** 사용.
- baseline에 stroke 그리기 (popover top edge와의 join에서 hairline 중복).
- baseline rectangle 없이 triangle만 fill 처리 (꼬리·몸통 분리 인상).
- `stroke-linecap: round` (양 끝점 0.5px 반원 → alignment 어긋남).
- SVG에 `display` 명시 안 함 (inline baseline 정렬로 위치 1px 밀림).
- `data-side` 회전 매핑 반전 (꼬리가 거꾸로 그려짐) — SVG 기본형 ▲(꼭짓점 위쪽) 기준으로 `bottom` 배치는 회전 없음, `top` 배치는 180도 회전.

### Navigation
- **`top-nav`**: 화면 상단 고정. 스크롤을 내리면 Apple처럼 배경이 흐려지는 블러(Blur) 처리나, 옅은 Level 2 그림자가 생겨 본문과 층을 분리함. 높이는 64px 내외. **다크 모드에서는 블루 틴트가 없는 중성적인 다크 컬러(`rgba(17, 17, 17, 0.85)`)를 사용하여 배경과 완벽하게 조화되도록 합니다.**
- **`footer`**: 화면 최하단. 배경은 블랙에 가까운 어두운 컬러(예: `{colors.ink}`)를 사용하여 페이지의 끝을 명확히 닫아주는 느낌(Anchor)을 줍니다. **다크 모드에서는 블루 틴트를 완전히 제거한 중성 딥 블랙(`#0D0D0D`)을 사용하여 정갈함을 극대화합니다.**


### Sidebar
좌측 고정 내비게이션. 아이콘과 2뎁스 메뉴를 지원하는 절제된 list-style 컴포넌트로, Linear / Vercel / Raycast 계열의 **중립 톤 액티브 패턴**을 따릅니다. Top-nav가 페이지 위 정체성을 잡는다면, Sidebar는 페이지 내 작업 공간의 뼈대를 잡습니다.

**Design Philosophy**
- **Active는 컬러가 아닌 톤으로**: 활성 상태에 Primary 액센트를 쓰지 않습니다. `{colors.surface-soft}` 배경 + `{colors.ink}` 텍스트로 표현하여 **Navigation(인터랙션) 컬러와 Status(상태) 컬러의 역할을 분리**합니다. weight는 default와 동일하게 유지합니다 — 배경 톤이 이미 충분한 신호이므로 글자 굵기 변화는 시각적 리듬을 깨뜨립니다.
- **들여쓰기만으로 위계**: 2뎁스 sub-item은 좌측 들여쓰기만으로 자식 관계를 표현합니다. 가이드 라인(tree line)이나 좌측 액센트 바를 추가하지 않습니다. 절제가 위계를 만듭니다.
- **카드가 아닌 컨테이너**: 1px hairline 보더 + canvas 배경으로 본문과 살짝 분리하되, 그림자/elevation을 사용하지 않습니다.

**Container**
- **Width**: 데스크톱 기본 **264px**. 컴팩트 변형은 240px.
- **Padding**: `12px 10px`.
- **Border**: `1px solid {colors.hairline}`.
- **Border Radius**: `{radius.md}` (10px).
- **Background**: `{colors.canvas}`.

**Section Label**
- 11.5px / weight 500 / `{colors.body-muted}`. **대문자·letter-spacing 적용 금지** (자연스러운 sentence case를 유지하여 조용한 인상을 줍니다).
- Margin: top `16px`, bottom `6px`. 첫 라벨은 top `4px`.
- Padding: `0 10px`.

**Item (Top-level)**
- **Size**: 높이 `36px`, padding `0 10px`, gap `10px`, radius `7px`.
- **Typography**: `{typography.body-sm}` (14px) / weight 500.
- **Icon**: 18px, `opacity 0.75` (default). Hover/Active 시 `opacity 1`.
- **Default**: color `{colors.body}`, background transparent.
- **Hover**: background `{colors.surface-soft}`, color `{colors.ink}`.
- **Active**: background `{colors.surface-soft}`, color `{colors.ink}`. weight는 default(500) 유지. *Primary 텍스트 컬러·좌측 액센트 바·트리 라인 사용 금지.*
- **Transition**: `background {motion.fast} {ease.standard}, color {motion.fast} {ease.standard}`.

**Sub-item (2뎁스)**
- **들여쓰기**: padding-left `28px` (부모 아이콘 18px + gap 10px 정렬). 자식 그룹 좌측에 **vertical guide line** (`::before` pseudo, 1px width, `{colors.hairline}`, 부모 아이콘 중앙 x-좌표에 정렬)을 그어 tree 구조를 명시.
- **Size**: 높이 `32px`, padding `0 10px`, radius `7px`. 부모(36px)보다 살짝 컴팩트하게.
- **Typography**: `{typography.body-sm}` (14px / weight 400) / `{colors.body-muted}`. 부모(1뎁스)는 `{typography.button-sm}` (14px / weight 500)이므로 같은 크기 안에서 weight로만 위계를 표현합니다.
- **Hover**: background `{colors.surface-soft}`, color `{colors.ink}`.
- **Active**: background `{colors.surface-soft}`, color `{colors.ink}`, weight `400` → `500`. *자식 active를 강한 신호로 두고 부모는 별도 강조 없이 펼쳐진 상태로만 그룹 위치를 전달합니다.*

**Expand/Collapse 애니메이션**: Accordion 섹션의 *Panel Expand/Collapse 모션 (공용 표준)*과 동일한 토큰을 사용합니다.

**Parent with active child**
- 자식(2뎁스)이 active일 때 부모 1뎁스 항목은 **별도 강조 없음**. *Notion/Vercel 패턴: chevron이 펼쳐져 자식이 보이는 시점에서 이미 그룹 위치가 시각적으로 전달되므로, 부모에 별도 pill/trail을 주면 자식 active와 시각 무게가 충돌합니다. 자식의 surface-soft pill이 "현재 위치"의 유일한 강한 신호가 됩니다.*

**Chevron (Disclosure Indicator)**
- 14px, `currentColor`, `opacity 0.5`. 부모 항목 색을 그대로 상속.
- Collapsed = 0deg (오른쪽), Expanded = 90deg (아래). `transform {motion.fast} {ease.standard}`로 부드럽게 회전.

**Badge (알림 카운트)**
- Min-width `18px` / height `18px` / radius `9px`. Font 11px / weight 600.
- **Status 시그널**이므로 `Semantic 팔레트`의 Error를 사용합니다.
  - Light: `#F33942` BG / `#FFFFFF` Text (Error solid — active 상태의 surface-soft 배경 위에서도 또렷하게 대비되도록 틴트 대신 솔리드 채움 사용)
  - Dark: `#F74B53` BG / `#FFFFFF` Text
- Navigation/Active와 컬러가 충돌하지 않도록 **Primary 컬러는 배지에 사용하지 않습니다**.

**Accessibility**
- 컨테이너: `<nav>` + `aria-label`.
- 항목: `<a>` (라우팅) 또는 `<button>` (액션). 활성 항목엔 `aria-current="page"` 권장.
- 2뎁스 그룹: Base UI `Collapsible` 사용. `[data-panel-open]` 속성을 chevron 회전 트리거로 활용.
- 키보드: 항목 간 Tab 이동, Enter/Space로 그룹 펼치기/접기.

**금지**
- Active 상태에 Primary 블루 텍스트 적용 금지.
- 좌측 컬러 액센트 바(vertical accent rail) 금지.
- 2뎁스에 트리 라인 / 회색 세로 가이드라인 금지.
- 그림자, 그라데이션, 글로스 오버레이 금지.
- 알림 배지에 Primary 컬러 사용 금지 (Navigation과 Status 역할 충돌).

**Mobile Variant — Hamburger → Drawer (Left)**

데스크톱의 영구 고정 Sidebar는 모바일/태블릿 뷰에서 화면 폭을 너무 많이 점유합니다. 좁은 뷰포트에서는 Sidebar를 숨기고 **상단 햄버거 트리거 → 좌측 Drawer로 슬라이드 인**하는 패턴으로 전환합니다.

**Breakpoint 전환 규칙**
- **≥ 1024px (desktop)**: Sidebar 영구 정착. 햄버거 버튼은 숨김.
- **768px ~ 1023px (tablet)**: 프로젝트 성격에 따라 선택. 컨텐츠 중심이면 Drawer, 작업 공간 중심이면 컴팩트 Sidebar(240px) 유지.
- **≤ 767px (mobile)**: Sidebar 숨김 + 햄버거 버튼 노출 → Drawer-left 트리거.

**Hamburger Trigger**
- **Size**: 40×40 (터치 타겟 최소치 충족). `top-nav`의 좌측 끝에 정착.
- **Style**: `1px solid {colors.hairline}` 보더 + `{colors.canvas}` 배경 + `{radius.md}` (10px). 아이콘 20px, `{colors.ink}`.
- **Hover**: 배경 `{colors.surface-soft}`.
- **Icon**: `menu` 아이콘(3줄 햄버거). x 아이콘으로의 전환 모핑은 사용하지 않습니다 — 닫기는 Drawer 내부의 닫기 버튼/스크림/Esc로 처리.
- **aria-label**: `"메뉴 열기"` (혹은 i18n 키). `aria-expanded`는 Base UI Drawer가 자동 관리.

**Drawer 컨테이너 (Left Variant)**
- Drawer 컴포넌트의 `drawer-card--left` 변형을 사용합니다. (상세 토큰은 [Drawer](#drawer) 섹션 참조.)
- **Width**: **`min(280px, calc(100vw - 56px))`**. 데스크톱 Sidebar(264px)와 유사한 폭을 유지하되, 모바일에서는 **최소 56px의 스크림**을 항상 노출하여 "Drawer는 본문 위에 떠 있는 보조 패널"이라는 정체성을 시각적으로 유지합니다. `85vw` 같은 단순 비율은 좁은 화면에서 화면을 거의 덮어 Modal과 구분이 사라지므로 사용하지 않습니다.
- **Border / Radius**: 화면 edge에 붙으므로 **0**. 데스크톱 Sidebar의 카드형 hairline 보더와 `{radius.md}`는 **모두 해제**합니다.
- **Background**: `{colors.canvas}`. Sidebar 내부 컨테이너는 `transparent`로 두고 Drawer 배경이 표면을 담당.
- **Padding**: Drawer 내부에서 sidebar 컨테이너 패딩을 `{spacing.md}` (16px 전방향)로 다운그레이드. 데스크톱의 `12px 10px`보다 살짝 여유를 두어 모바일 터치 리듬에 맞춤.

**Header (모바일 한정)**
- 브랜드 마크(또는 페이지 타이틀) + 우측 `icon-btn icon-btn--md icon-btn--ghost` (40×40) 닫기(`x`) 버튼. Drawer 표준 헤더와 동일.
- `top-nav`가 Drawer 위에 그대로 노출되지 않으므로, Drawer 내부 헤더가 브랜드 정체성을 잠시 대신합니다.

**Item / Sub-item 스펙**
- 데스크톱과 **동일**. 높이 36px (top-level) / 32px (sub-item), 들여쓰기 28px, surface-soft active. 모바일에서 별도로 폰트를 키우거나 padding을 부풀리지 않습니다 — 디자인 언어 일관성이 더 중요합니다.
- 단, 터치 타겟이 부족하다고 판단되면 아이템 높이만 **40px**까지 상향 가능 (디자인 토큰화하여 일괄 관리).

**인터랙션**
- 트리거 클릭 → Drawer 슬라이드 인 (`{motion.expand}` `{ease.out-expo}`).
- 아이템 선택 시 **자동으로 Drawer를 닫습니다** (라우팅 직후 패널 닫힘). 사용자가 메뉴를 다시 열 필요 없는 자연스러운 흐름.
- 스크림 클릭 / Esc / 닫기 버튼 모두 닫힘 트리거.

**금지 (모바일 변형 한정)**
- 데스크톱 Sidebar의 카드형 hairline 보더를 그대로 유지 — 화면 edge와 어긋나 정착감이 깨집니다.
- 햄버거 아이콘 ↔ X 아이콘 모핑 애니메이션 — 절제 원칙 위배, 닫기는 Drawer 내부 X 버튼이 담당.
- Drawer가 열린 상태에서 본문 스크롤 허용 (Base UI가 자동 잠금하지만 커스텀 시 누락 주의).
- 데스크톱에서 햄버거 버튼 노출 — Sidebar 영구 정착과 시각 충돌.


### Table
- **Header & Row Contrast**: 테이블의 헤더(`th`)는 `Surface Soft` 배경을 사용하고, 본문 행(`tr`)은 `Canvas` 배경을 사용하여 시각적 층위(Elevation)를 형성합니다. 이를 통해 데이터의 위계를 명확히 하고 대량의 정보를 정갈하게 구조화합니다.
- **Corner Harmony**: 테이블 컨테이너에 `border-radius`를 적용할 경우, 내부 헤더(`.thead tr:first-child th`)의 모서리 역시 컨테이너의 곡률과 일치하도록 설정하여 배경색이 삐져나오지 않게 정밀하게 마감합니다.
- **Minimalist Border**: 행 사이에는 `Hairline` 두께의 얇은 테두리만 사용하며, 가장 마지막 행의 테두리는 제거하여 전체 컨테이너와 자연스럽게 어우러지도록 합니다.

### Toast
화면 모서리에 잠시 떠올라 작업 결과나 가벼운 안내를 전달하는 임시 알림 컴포넌트입니다. **잉크 컬러를 베이스로 하는 모노톤 카드**로 정의하여, 페이지가 어떤 배경이든 일관된 톤으로 떠 있도록 합니다. Linear / Vercel / Sonner 계열의 미니멀한 정서를 추구하며, 알림은 컴포넌트가 아니라 텍스트 한 줄이 주인공입니다.

**Design Philosophy**
- **Flat & Elevated Surface**: 그림자에 의존하지 않고, **페이지 배경보다 한 단계 밝은 surface 톤**으로 떠 있는 느낌을 만듭니다. 다크 캔버스에서 카드가 묻히지 않도록 라이트/다크 각각의 elevated surface 색을 별도로 정의합니다.
- **Status as a Whisper**: 상태(Positive/Negative/Warning)는 **타이틀 좌측 8px 점 인디케이터** 한 점으로만 표시합니다. 좌측 컬러 레일/액센트 바, 솔리드 아이콘 박스, 카드 전체를 채우는 컬러 배경은 사용하지 않습니다. 단, 다크 모드의 Negative만 surface 톤에 옅은 red tint를 적용해 위급도를 보강합니다.
- **Typography-first, Flat-first**: 토스트의 시선은 글자에 있습니다. 깊이감은 그림자 대신 **surface 톤 + hairline 보더**의 평면적 대비로만 표현하며, 그라데이션·글로스·드롭 섀도우는 사용하지 않습니다.

**Typography**
- **Title**: `{typography.body-md-strong}` (16px / 500 / 24px line-height / 0 letter-spacing).
  - Light: `#FFFFFF` (잉크 배경 위 흰 텍스트)
  - Dark: `#FFFFFF` (동일)
- **Description**: `{typography.body-sm}` (14px / 400 / 20px line-height / -0.28px letter-spacing).
  - Light: `rgba(255, 255, 255, 0.64)`
  - Dark: `rgba(255, 255, 255, 0.60)`
- 한 줄 안내로 끝나는 토스트는 Description을 생략할 수 있습니다. 이 때 카드는 자동으로 56px 높이로 컴팩트화됩니다.

**Surface & Elevation**
- **Background (Light)**: `#13151A` (잉크) 단색. 라이트 캔버스 위에서는 잉크 자체가 충분한 대비를 만듭니다.
- **Background (Dark)**: `#1F2128` — 다크 캔버스(`#0B0C10` 계열)보다 한 단계 밝은 elevated surface. 단색으로 적용하며 그라데이션·글로스 오버레이는 사용하지 않습니다.
- **Background (Negative, Dark only)**: `#2A1D22` — 잉크 surface에 매우 옅은 red tint(약 6%)를 섞어 부정 상태의 위급도를 surface 톤으로도 전달합니다. Light 모드에서는 잉크 단색을 그대로 유지합니다.
- **Border**: `rgba(255, 255, 255, 0.06)` hairline. surface 톤 자체가 캔버스보다 한 단계 밝아 카드 경계가 이미 분리되므로, 보더는 거의 보이지 않을 정도로 옅게 깔아 시선을 방해하지 않습니다.
- **Shadow**: **없음**. 플랫 디자인을 유지하기 위해 모든 드롭 섀도우와 inset 하이라이트를 제거합니다. 깊이감은 surface 톤과 hairline 보더로만 표현합니다.
- **금지**: 흰색/파스텔 배경, 카드 전체를 채우는 짙은 상태색, 강한 컬러 테두리, 박스 그림자, 그라데이션, 글로스 오버레이.

**Status Indicator**
- 타이틀 좌측에 **8px 원형 점**(dot)을 배치합니다. dot과 타이틀 사이 간격은 10px.
- **Positive**: `#34D399`
- **Negative**: `#FB7185`
- **Warning**: `#FBBF24`
- **Info / Default**: 점을 표시하지 않습니다. 중립 토스트는 어떠한 상태 컬러도 노출하지 않습니다.
- dot의 halo(box-shadow)는 사용하지 않습니다. 플랫 디자인 원칙에 따라 컬러 신호는 점의 단색 면적만으로 전달합니다.

**Layout**
- **Padding**: 상하 **14px**, 좌측 **18px**, 우측 **48px** (닫기 버튼 영역 확보).
- **Title/Description Gap**: **2px**. 짧은 호흡으로 한 덩어리처럼 읽히게 합니다.
- **Description 생략 시**: 카드는 단일 라인으로 정렬되고 상하 패딩은 **16px**로 약간 늘어납니다.
- **Width**: 데스크톱 **360px** 고정, 모바일 `min(360px, calc(100vw - 32px))`. 좁은 화면에서도 양옆 16px 여백을 유지합니다.
- **Position**: 화면 우하단 고정(`bottom: 24px`, `right: 24px`). 다중 토스트는 8px 간격으로 세로 스택되며, 가장 오래된 토스트는 뒤로 살짝 밀려 4px scale-down(0.96) + opacity 0.7 처리됩니다 (스택 깊이감).

**Close Button**
- **24x24px** 원형 버튼, 우측 상단(`top: 12px`, `right: 12px`).
- 기본: 투명 배경 + `rgba(255, 255, 255, 0.48)` 아이콘 (12px X-mark)
- 호버: `rgba(255, 255, 255, 0.08)` 배경 + `rgba(255, 255, 255, 0.88)` 아이콘
- 보더 없음. 닫기 버튼은 알림 자체보다 작고 조용해야 합니다.

**Shape**
- **Border Radius**: `{radius.md}` (10px). 카드(`{radius.lg}` 16px)보다 한 단계 작게 잡아 토스트의 가벼움을 강조합니다.

**Motion**
- **Enter**: 우측에서 16px 슬라이드 + 페이드 인. `{ease.out-expo}`, `{motion.expand}`.
- **Exit**: 우측으로 8px 슬라이드 + 페이드 아웃. `ease-in`, `{motion.normal}`.
- **Auto-dismiss**: 기본 **5초**. 호버 시 타이머 일시 정지, 포커스 시에도 동일.
- **스택 재정렬**: 새 토스트 추가 시 기존 토스트는 `{motion.normal}` `ease-out`으로 자연스럽게 아래로 밀려납니다.

**Accessibility**
- ARIA: `role="status"` (Positive/Info) 또는 `role="alert"` (Negative/Warning).
- `aria-live`: 중립은 `polite`, 부정/경고는 `assertive`.
- 닫기 버튼은 키보드 포커스 시 2px Primary 컬러 outline을 표시합니다.








### Icons
인터페이스 전반에 사용되는 SVG 아이콘. `currentColor`로 정규화하여 어떤 텍스트 컬러에도 자연스럽게 동조합니다.

- **Sizing**: 14px(보조) / 16px(인라인 본문) / 18px(Sidebar 항목, 닫기 버튼) / 20px(버튼 옆) / 24px(기본). 항상 짝수 px만 사용.
- **Color**: SVG `stroke`/`fill`은 `currentColor`로 두고, 부모의 텍스트 컬러를 상속받습니다. 별도 색을 지정할 때는 `{colors.ink}` / `{colors.primary}` / `{colors.body-muted}` / `{colors.semantic-*}` 중 하나만 사용. **드롭다운 트리거의 Chevron/Caret은 `{colors.body-muted}`(닫힘) → `{colors.ink}`(열림)** — Primary 컬러를 쓰지 않습니다(트리거 자체가 강조 대상이 아님).
- **Rendering**: 인라인 SVG로 렌더링(`?raw` import + `dangerouslySetInnerHTML`). `<img src="*.svg">`는 `currentColor` 상속이 끊겨 다크 모드에서 사라지므로 금지. 단, 흰색 고정이 필요한 경우(Primary 배경 위 체크 등)에만 `filter: brightness(0) invert(1)` + `<img>` 허용.
- **Stroke Width**: 1.5px(16~20px) / 1.75px(24px). 미세한 굵기 차이로 시각 무게를 일정하게 유지합니다.
- **Decorative vs Meaningful**: 라벨이 함께 있는 아이콘은 `aria-hidden="true"`, 아이콘 단독 버튼은 `aria-label` 필수.
- **금지**: 아이콘 뒤에 배경색 박스 두르기(Don'ts 항목 참조), 컬러 그라데이션, 멀티컬러 아이콘. 모든 아이콘은 단색.

### Avatar
사용자/팀 식별을 위한 작은 원형 마크. Colors > Avatar 팔레트(`Indigo`/`Sage`/`Sand`/`Plum`/`Azure`)의 **장식적 틴트**를 그대로 사용합니다.

- **Shape**: `{radius.full}` (50%). 정사각 컨테이너에 이미지/이니셜 중앙 정렬.
- **Sizes**: `.avatar` 40px(기본) / `.avatar-lg` 64px. 두 단계 체제 — 일반 식별 마크는 기본 40, 프로필 헤더·강조 영역은 64.
- **Typography**: 이니셜은 컨테이너 폭의 **40%** 크기 / weight 600 / Avatar 팔레트의 Text 컬러. (40 → 16px, 64 → 26px)
- **Image Fallback**: 이미지가 없거나 로드 실패 시 이니셜로 자동 폴백 (Base UI `Avatar.Fallback`). 이미지는 기본 40 사이즈에서 주로 사용하고, `.avatar-lg`(64)는 현재 이니셜 전용으로 운영합니다.
- **금지**: Semantic 팔레트(Success/Warning/Error) 컬러를 아바타에 사용 금지 — 상태 정보로 오인됨. 그림자, 외곽 링도 사용하지 않습니다. 또한 `avatar-*` 토큰/클래스를 Avatar 외부에 사용하는 것도 금지 — 위 Colors > Avatar 섹션의 IMPORTANT 블록 참조.

### Badge
정보의 상태나 카테고리를 알리는 작은 라벨. Colors > Semantic 팔레트를 따릅니다.

- **Shape**: `{radius.pill}` (9999px).
- **Size**: 높이 24px, 좌우 패딩 `{spacing.xs}` (8px), gap `{spacing.xxs}` (4px).
- **Typography**: `{typography.caption}` (12px) weight 500.
- **Variants** (BG는 L ~96 유지 + 채도만 가볍게 down으로 시각 무게 균일화):
  - `badge-success` (완료/정상): BG `{colors.semantic-success-bg}` (`#ECFEEA`) / Text `{colors.semantic-success-text}` (`#00AE1A`)
  - `badge-info` (진행 중/정보): BG `{colors.semantic-info-bg}` (`#EFF6FF`) / Text `{colors.semantic-info}` (`{colors.primary}`) — Primary alias로 브랜드 자동 동기화.
  - `badge-warning` (대기): BG `{colors.semantic-warning-bg}` (`#FFF9E3`) / Text `{colors.semantic-warning-text}` (`#EB8E02`)
  - `badge-error` (중단/실패): BG `{colors.semantic-error-bg}` (`#FFF5F7`) / Text `{colors.semantic-error-text}` (`#F33942`)
  - `badge-neutral` (백로그/초안/대기열): BG `{colors.semantic-neutral-bg}` (`#F3F4F6`) / Text `{colors.semantic-neutral}` (`{colors.body-muted}`) — 무상태(passive) 표시.
  - `badge-ink` (신규/강조): BG `{colors.ink}` / Text `{colors.on-primary}` — Solid Ink Style.
- **Dot Variant**: 텍스트 앞에 6px 원형 점(`.badge-dot`)을 두어 라이브 상태(실행 중·일시정지·중지됨 등 프로세스 신호)를 강조할 수 있습니다. dot은 `currentColor`로 텍스트 톤과 자동 동기화.
- **Dark Mode**: Dark Mode Badge & Tag Principle을 따라 BG는 원색에 투명도 15~20%, Text는 더 밝고 채도 높은 색으로 전환.
- **금지**: 그림자, 그라데이션, 보더(`badge-ink` 제외).

### Checkbox / Radio
선택 컨트롤. **Checkbox는 "제출 시 반영"**, **Switch는 "즉시 반영"**, **Radio는 "그룹 내 단일 선택"**으로 mental model을 분리합니다.

- **Checkbox**
  - **Box**: 20×20, `{radius.sm}` (6px), 1.5px `{colors.hairline}` 보더, 배경 `{colors.canvas}`.
  - **Checked**: 배경 `{colors.primary}`, 체크 아이콘 16px `{colors.on-primary}` (Primary 위 흰색 고정).
  - **Indeterminate**: 배경 `{colors.primary}` + 흰색 가로 막대(`{colors.on-primary}`).
  - **Focus**: 보더 컬러 `{colors.primary}`로 변경 (전역 정책).
- **Radio**
  - **Outer**: 20×20, `{radius.full}`, 1.5px `{colors.hairline}` 보더, 배경 `{colors.canvas}`.
  - **Checked**: 보더 `{colors.primary}` **5px**로 두껍게 채우고 배경 `{colors.on-primary}`(흰색 고정). 두꺼워진 primary 보더가 외곽 링을, on-primary 배경이 중앙 점을 동시에 만드는 단일-도형 구조 — `background-clip`/내부 점 엘리먼트 분리 없이 1개 box로 표현. (다크 모드에서도 배경은 `{colors.on-primary}` 고정.)
- **Label**: 우측에 `{spacing.xs}` (8px) 간격, `{typography.body-md}` (16px) / `{colors.ink}`. 라벨 전체가 클릭 영역.
- **Group Spacing**: 세로 그룹은 `{spacing.xs}` (8px) 행 간격, 가로 그룹은 `{spacing.xl}` (24px) 간격.
- **금지**: 라운드 모서리를 풀(`pill`)로 만들기, 체크 아이콘에 Primary 외 컬러 사용, 라디오 내부 점에 `canvas`/그 외 컬러 사용.

### Field / Fieldset / Form
폼 구조 요소. 의미 있는 그루핑과 라벨링을 통해 접근성과 시각 위계를 동시에 만듭니다.

- **Field (단일 필드 묶음: Label + Control + Description/Error)**
  - **Layout**: 세로 스택, gap `{spacing.xxs}` (4px). *Label과 Control을 한 덩어리로 강하게 본딩하는 타이트 간격입니다. `{spacing.xs}` (8px)은 라벨이 컨트롤과 분리되어 보이고, `12px` 이상은 별도 묶음으로 읽힙니다.*
  - **Label**: `{typography.body-sm}` weight 500 / `{colors.ink}`. Control 위 **4px** 간격.
  - **Description (Help)**: `{typography.caption}` (12px) / `{colors.body-muted}`. Control 아래 **4px**.
  - **Error**: `{typography.caption}` / `{colors.semantic-error}`. Description과 동일 위치(둘 다 있으면 Error가 Description 대체). Control 보더는 `{colors.semantic-error}` (전역 정책).
- **Fieldset (관련 필드 그룹 컨테이너)**
  - **Legend**: `{typography.body-md}` weight 600 / `{colors.ink}`. 아래쪽 `{spacing.md}` (16px) 간격.
  - **Border**: 없음. 시각적 그룹화는 spacing과 legend 위계로만.
  - **Field Gap**: 내부 필드 간 `{spacing.xl}` (24px).
- **Form**
  - **Layout**: 세로 스택, 필드 간 `{spacing.xl}` (24px). 섹션(Fieldset) 간 `{spacing.xxl}` (32px).
  - **Submit**: 우측 정렬 또는 풀-너비. 폼 마지막에서 `{spacing.xl}` (24px) 상단 간격.
  - **Submission Error Summary**: 폼 상단에 `badge-error` 또는 `field-error` 톤의 한 줄 메시지로 노출.

### Inputs — Specialized

> **공통 원칙**: 모든 입력 변형은 기본 `text-input`의 토큰(높이 48px, `{radius.md}` 10px, 1px `{colors.hairline}`, 좌우 패딩 16px)을 상속합니다. 변형별 특수 규칙만 아래에 명시합니다.

#### Autocomplete / Combobox / Select
드롭다운 리스트와 결합된 입력 컨트롤. **Autocomplete**는 자유 입력 + 추천(검색 메타포), **Combobox**는 입력 + 사전 정의 목록(선택 메타포), **Select**는 입력 없이 목록 선택만.

- **Trigger 좌/우 어포던스 — 변형별 차이**
  - **Autocomplete**: 좌측 16px `search` 아이콘(`{colors.body-muted}`, decorative)으로 검색임을 명시. **우측 chevron 없음.** 값이 있을 때만 우측에 clear(x) 버튼 노출. Popup은 포커스/타이핑 시 자동 오픈. *근거: GitHub/Linear/Notion/Algolia 등 검색형 입력 컨트롤의 공통 패턴. chevron은 "닫힌 목록을 펼친다"는 신호라 자유 입력이 1차 행동인 Autocomplete와 맞지 않음.*
  - **Combobox / Select**: 우측 끝에 48×48 hit area 안의 16px `chevron-down` 아이콘 버튼(`{colors.body-muted}` 닫힘 → `{colors.ink}` 열림 + 회전, Disclosure Indicator 규칙과 일치). 클릭 시 popup 토글. 좌측 아이콘 없음. *근거: 48px 입력 그룹 안에서 24px chevron은 입력 텍스트와 시각 무게가 경쟁함. 16px가 보조 어포던스 위계에 맞고, hit area는 그룹 높이(48px) 정사각으로 충분히 확보.*
- **Autocomplete Clear 버튼 (Pill 스타일)**
  - **버튼 hit area**: 48×48(입력 그룹 높이와 동일), 우측 padding `{spacing.xs}` (8px)로 칩이 가장자리에 붙지 않게 여백 확보.
  - **Chip**: 16×16 원형(`{radius.full}`). 내부에 10px `x` 아이콘 중앙 배치. *48×48 hit area 안에서 칩은 시각 보조 신호이므로 한 단계 가볍게 — 너무 크면 입력값 옆에서 무게가 경쟁함.*
  - **Default**: 배경 `color-mix({colors.body-muted} 55%, {colors.canvas})` (약 #b3b7be), 아이콘 `{colors.on-primary}` (#FFFFFF). *기본 상태에서도 채워진 색을 유지해 "지우기 가능" 액션을 즉시 인지하게 함.*
  - **Hover**: 배경 `color-mix({colors.body-muted} 75%, {colors.canvas})` (약 #95989f). 같은 mix 축에서 한 단계만 진해지는 톤(풀톤 `body-muted`까지 가지 않음 — 점프 폭이 너무 커 칩이 갑자기 무거워 보임).
  - **Empty 시 자동 숨김**: Base UI `Autocomplete.Clear`가 값이 비어있으면 자동으로 unmount.
  - *예외 메모*: List/Menu Item의 hover는 `surface-soft`지만, Clear chip은 이미 채워진 컨트롤이라 `surface-soft`로 hover하면 오히려 옅어져서 신호가 약해짐. 채워진 컨트롤은 "같은 축에서 한 단계 진하게" 규칙을 별도로 적용.
- **Input 수직 정렬**: Autocomplete 입력은 좌/우 어댑터(아이콘 슬롯·clear 버튼)와 정렬을 맞추기 위해 `line-height: 48px`(입력 그룹 높이와 동일)을 지정. placeholder가 위쪽으로 치우치는 현상 방지.
- **Base UI 합성 구조 (필수)**: `Trigger` 직속 자식이 아니라 **`Select.Portal` → `Select.Positioner` → `Select.Popup`** 3중 구조로 감싸야 floating overlay로 동작합니다. Portal/Positioner를 누락하면 popup이 폼 흐름 안에 인라인으로 렌더링되어 다음 필드와 겹치고, Popup 카드 토큰(배경/보더/그림자)도 시각적으로 무효화됩니다. Menu / Popover / Tooltip / Dialog도 동일.
- **Popup (Listbox)** — 세 변형 공통
  - **Background**: `{colors.canvas}`, 1px `{colors.hairline}`, `{radius.md}` (10px), `{shadow.level-2}`.
  - **Width**: 트리거와 동일 폭(min-width = trigger width). max-height 320px, 초과 시 스크롤.
  - **Offset**: 트리거 아래 `8px` 간격(`--floating-offset`), 뷰포트 가장자리 `16px` collision padding.
- **List Item**
  - **Height**: `min-height: 40px`, 좌우 패딩 12px(`{spacing.sm}`) · 상하 패딩 8px(`{spacing.xs}`), `{typography.body-sm}` (14px) / `{colors.ink}`. *Menu Item과 동일한 40px baseline을 공유해 같은 화면에 두 컴포넌트가 섞여도 행 높이가 어긋나지 않음.*
  - **Hover**: `{colors.surface-soft}`.
  - **Selected (Select.ItemIndicator)**: **우측 끝**에 18px check 아이콘(`{colors.primary}`) — `order: 1` + `margin-left: auto`로 행 오른쪽에 배치하고 라벨은 항상 flush-left. 선택 텍스트는 `{colors.primary}` + `{fw.label}`(500)로 보조 강조. *근거: Base UI는 선택 항목에만 ItemIndicator를 렌더하므로(미선택 항목엔 요소 자체가 없음) 체크를 좌측에 두면 선택 항목만 라벨이 ~27px 밀려 ragged left edge가 생긴다 — 특히 달력의 짧은 "N월" 라벨에서 두드러짐. 좌측 체크를 쓰려면 모든 행에 체크 칸을 확보해야 하는데, 컴팩트한 목록(달력)에선 빈 들여쓰기가 휑해 보여 우측 배치로 통일. 색은 접근성상 단독 신호로 쓰지 않고 체크가 1차 신호, primary 텍스트는 보조 강조.*
  - **Highlighted (키보드 탐색)**: `{colors.surface-soft}` (hover와 동일).
- **Empty State**
  - `{typography.body-sm}` (14px) / `{colors.body-muted}`. "검색 결과가 없습니다." 같은 한 줄 안내.
  - **Height**: `min-height: 48px`로 입력 그룹 높이와 일치(좌우 패딩 12px, flex `align-items: center`). *기본 padding만으로는 약 45px이 되어 위쪽 입력(48px)과 미세하게 어긋나므로 명시적으로 맞춤.*
  - **빈 List 숨김**: 결과가 0건일 때 Autocomplete List 컨테이너가 8px 패딩만큼 잡고 있어 Empty State 아래에 불필요한 여백이 생김 → `:empty` 시 `display: none`.
- **Select-specific**: 입력란이 아니라 trigger 자체가 선택값을 표시. trigger 텍스트는 `{typography.body-md}` (16px) / `{colors.ink}`, placeholder는 `{colors.body-muted}`.
- **금지**
  - Autocomplete 트리거 우측 chevron(검색 메타포와 충돌).
  - Combobox/Select에 좌측 `search` 아이콘 적용(변형 구분이 사라짐).
  - Popup에 그라데이션 배경, Primary 채움 행(highlight는 `surface-soft`로 통일).
  - Clear chip hover에서 풀톤 `{colors.body-muted}`/`{colors.ink}` 사용(채워진 컨트롤은 같은 mix 축에서 한 단계만 이동).
  - `[data-popup-open]` 회전 규칙을 Clear 버튼에 그대로 적용(Clear는 트리거가 아니라 액션 버튼이므로 회전 대상 아님 — `:not(.input-clear-button)`로 회전 규칙 범위 제한).

#### Date Picker
날짜 선택은 독립 패키지 컴포넌트가 아니라 **Base UI primitive 조합 패턴**입니다. Base UI에 완성형 Calendar/DatePicker primitive가 없으면 `Field` + `Popover` + `Button` + `Select`를 조합하고, 달력 grid와 날짜 계산만 소비자 프로젝트 로직으로 구현합니다.

- **Single Date**
  - Trigger: `button-secondary` 형태(보더·48px 높이·hover). 단, 좌우 padding은 `{spacing.md}`(16px) — `button-secondary` 기본 `{spacing.lg}`(20px) 대신 `text-input`·`select-trigger` 등 입력 트리거 계열과 동일하게 맞춥니다. 표시 텍스트(선택값/placeholder)는 트리거·필드 타이포 규칙에 따라 `label-lg` 사이즈에 weight만 `--fw-regular`(400)로 적용합니다 — `text-input`·`select-trigger`와 동일. 좌측 18px calendar icon(`{colors.body-muted}`), 우측 선택 날짜 또는 placeholder.
  - Placeholder: `"날짜 선택"`. 날짜를 선택하기 전에는 선택 상태를 표시하지 않으며, **placeholder 텍스트는 `{colors.body-muted}`**(선택값은 `{colors.ink}`) — text-input·select 등 입력 트리거 placeholder 컨벤션과 동일. 구현은 미선택일 때 라벨 span에 `data-placeholder`를 부여해 muted 처리(Range는 시작일도 안 고른 상태에서만 placeholder).
  - Selected value: 한국어 서비스에서는 `YYYY년 M월 D일` 형식을 권장합니다.
- **Date Range**
  - Trigger label: `"날짜 구간 선택"`.
  - 첫 클릭은 시작일, 두 번째 클릭은 종료일입니다. 종료일이 시작일보다 앞이면 내부 로직에서 자동 정렬합니다.
  - 시작/종료일은 `{colors.primary}` 원형(circle) + `{colors.on-primary}` 텍스트. 사이 구간은 Primary를 옅게 tint한 **연속 배경 바**로 이어집니다 — 셀 사이 흰 여백 없이 붙도록 grid `column-gap: 0`을 쓰고, 시작/종료 셀은 원형 쪽으로 바를 절반만 깔아 자연스럽게 연결합니다. 주(week) 경계에서 줄바꿈으로 끊기는 바 끝(첫 칸 좌측·마지막 칸 우측)은 원형 인디케이터와 같은 18px 곡률로 라운딩해 단면이 각지게 잘려 보이지 않게 합니다. 단 ⑴ 행 내부에서 이웃 셀로 이어지는 쪽, ⑵ 시작/종료일 반쪽 바가 **원형과 닿는 안쪽(center) 끝**은 각지게 둡니다 — 후자를 라운딩하면 원형과 바 사이에 틈이 생기기 때문(시작일은 좌측, 종료일은 우측을 row-edge 라운딩 대상에서 제외). 과한 pill/gradient는 만들지 않습니다.
- **Popover**
  - Date Picker popup은 Popover 계열 표면을 사용합니다: Light `Canvas + hairline + shadow.level-3`, Dark `Surface Soft + rgba(255,255,255,.10) border + shadow.level-3`.
  - `sideOffset`은 Popover와 동일하게 8~10px, viewport collision padding은 16px를 사용합니다.
  - **Arrow(tail) 없음**: Popover와 달리 Date Picker popup은 arrow를 두지 않습니다 — 달력은 넓은 카드라 anchor를 가리키는 tail이 시각적 노이즈일 뿐 정렬 정보를 더하지 않습니다.
  - **트리거 press scale 끄기 (선행 조건)**: Trigger는 `button-secondary`라 기본적으로 `:active`에서 `scale(0.97)` press 모션을 갖는데, 팝업이 이 트리거에 앵커돼 있어 트리거가 줄었다 펴지면 **팝업이 따라 움직여 옆으로 미끄러지는 잔상**이 생깁니다. 그래서 `.date-picker-trigger:active`는 `transform: none`으로 press scale을 끕니다(팝업이 열리는 것 자체가 피드백). 이게 안 꺼져 있으면 팝업에 어떤 진입 모션을 줘도 좌우로 밀려 보입니다.
  - **진입 애니메이션**: 위 press scale을 끈 뒤, 팝업은 `data-side` 기준 **방향 인식 세로 슬라이드 + fade**로 등장합니다 — 아래로 열리면 `translateY(-8px)`→0(위→아래), collision으로 위로 뒤집히면(`data-side=top`) `translateY(8px)`→0(아래→위). transform `{motion.normal}`(200ms·`ease-out-quad`), opacity `{motion.fast}`. arrow가 없어 fade-only 제약(arrow 흔들림)에서 자유롭습니다.
- **Calendar Header**
  - 좌우 40×40 이전/다음 버튼을 두고(시스템 `icon-btn--md`와 동일 사이즈), 중앙에는 Base UI `Select`로 **연도 → 월** 순서의 드롭다운을 배치합니다.
  - Select trigger는 `{radius.md}`(10px), 1px `{colors.hairline}` 보더를 따릅니다. 40px 높이이므로 트리거 텍스트는 `label-md` 사이즈 + weight `--fw-regular`(400). 값 텍스트는 좌측, chevron은 우측 끝(`justify-content: space-between` — 시스템 `.select-trigger`와 동일). Focus/Open 상태는 보더만 `{colors.primary}`로 변경합니다.
  - 월 표시는 `5월`, 연도 표시는 `2026년`처럼 단위를 포함합니다. 내부 index 값(예: 4)을 직접 노출하지 않습니다.
- **Calendar Grid**
  - 요일 헤더는 `{typography.caption}` / `{colors.body-muted}`.
  - 날짜 셀은 최소 44×44 터치 영역, `{typography.body-sm}`. 단, 선택/hover/today/focus 표시는 셀 전체를 채우지 않고 **중앙 36px 원형**으로만 그립니다 — 셀 전체를 칠하면 시각 무게가 과해 부담스럽기 때문(터치 영역 44는 유지, 시각 인디케이터만 축소).
  - 현재 달이 아닌 날짜는 `{colors.body-muted}` + 낮은 opacity로 표시합니다.
  - 오늘 날짜는 1px `{colors.primary}` inset border 원형으로만 표시하고, 선택 상태와 구분합니다.
  - 해당 달에 필요한 주(row)만 렌더링합니다. 모든 달을 고정 6주로 채워 불필요한 다음 달 전체 행을 노출하지 않습니다.
- **금지**
  - Base UI `Select` 대신 네이티브 `<select>`를 사용해 스타일/접근성 패턴을 분리하는 것.
  - Popup이나 range highlight에 그라데이션, 강한 그림자, Primary solid fill을 과도하게 사용하는 것.
  - 날짜 선택 전 임의 날짜를 기본 선택값으로 박아두는 것. 기본값이 필요하면 사용자/도메인 요구가 명확할 때만 사용합니다.

#### Number Field
숫자 증감 입력. 좌우 증감 버튼 + 중앙 숫자 입력의 grouped 컨트롤.

- **Group**: 1px `{colors.hairline}` 보더, `{radius.md}` (10px), `height: 48px` (공유 룰 — `.combo-input-group`과 동일 outer로 모든 인풋 컨트롤 baseline 통일), `padding: 0 4px`, `gap: 4px`. 세로 여백은 별도 padding으로 두지 않고 `align-items: center`로 40px 자식(버튼·입력)을 자동 3px씩 띄움. `overflow: hidden`을 유지해 hover fill 모서리가 그룹 곡률을 넘지 않게 합니다.

> **그룹 컨테이너 공통 정책**: `.combo-input-group`(Autocomplete/Combobox)과 `.number-group`은 같은 chassis 룰을 공유하며 `height: 48px`로 고정됩니다. 단독 `.text-input`(48px outer)과 동일 라인에 정렬되도록 한 것. 내부 자식이 48px이면 border-box 1+46+1 안에서 위아래 1px씩 `overflow: hidden`으로 클립되는데, 자식이 transparent 배경 + borderless 입력이라 시각적으로 무손실. 자식을 굳이 46/40px로 줄이지 마세요(`.number-group`처럼 padding 어포던스가 필요할 때만 자식 사이즈를 축소).
- **Stepper Button — `icon-btn--ghost` + `icon-btn--md` 재사용**
  - **별도 `stepper-button` 토큰을 만들지 마세요.** 라벨 없는 정사각 보조 액션이라는 정의가 Icon Button과 동일하므로, 같은 클래스 조합(`icon-btn icon-btn--ghost icon-btn--md`)을 그대로 적용합니다. hover(`{colors.surface-soft}` 채움) · `[data-disabled]` (Icon Button ghost variant 의 disabled 시각 — 투명 + `{colors.body-muted}` 회색 아이콘 + `not-allowed`) · focus 동작이 Icon Button 토큰에서 자동 상속됩니다.
  - **크기**: 40×40 (`icon-btn--md`).
  - **아이콘**: `Minus` / `Plus`, **16px** (Icon Button 표준 20px에서 한 단계 작은 예외). *근거: Plus/Minus는 직선 1~2개로 구성된 단순 도형이라 같은 nominal 사이즈에서 Search/Settings 같은 디테일 있는 아이콘보다 시각 무게가 무겁게 인지됨. 입력값 옆 보조 컨트롤이라는 위계에 맞추기 위해 한 단계 줄임.* 텍스트 문자(`−` / `+`)를 직접 넣지 마세요 — 폰트 weight/정렬에 의존하면 시각 무게가 들쭉날쭉하고, `currentColor`를 받아 색 토큰 시스템을 따르지 못합니다.
  - **컬러**: ghost 기본 동작(`{colors.body}` → hover `{colors.ink}`). **`{colors.primary}` 채움 금지** — 스테퍼는 입력값을 보조하는 컨트롤이지 강조 액션이 아닙니다. 파란 채움/텍스트는 입력값과 시각적으로 경쟁합니다.
- **Input**: 중앙 정렬(`text-align: center`), 보더 없음(그룹이 보더 담당), `min-height: 40px` — 스테퍼 버튼 높이와 같은 라인에 정렬되도록 텍스트 입력 기본값(48px)을 줄입니다. 좌우 패딩은 0(스테퍼와 4px gap이 시각적 여백을 담당).
- **Disabled (min/max 도달)**: Base UI `NumberField`가 한계값에서 자동으로 `data-disabled` + `disabled`를 부여하므로 별도 처리 불필요 — `.icon-btn[data-disabled]` 규칙에서 ghost variant disabled 시각(투명 + `{colors.body-muted}` 회색 아이콘 + `not-allowed`)이 적용됩니다.
- **접근성**: 두 스테퍼 모두 `aria-label` 필수 (`"값 감소"` / `"값 증가"`). 키보드 ↑/↓는 Base UI `NumberField.Input`이 처리합니다.
- **금지**
  - 별도 `.stepper-button` 클래스나 토큰 신설(Icon Button 재사용으로 충분 — 두 곳에 분기된 hover/disabled/focus 규칙을 유지하지 않습니다).
  - `−` / `+` 텍스트 문자 사용(폰트 의존 + currentColor 미지원).
  - Primary 컬러 채움이나 텍스트 컬러 강조(보조 컨트롤 위계 위반).
  - `overflow: hidden`을 이용해 버튼을 그룹 모서리까지 붙이는 edge-to-edge 패턴 — 내부 4px padding으로 분리된 ghost 버튼이 hover 어포던스를 훨씬 명확히 전달합니다.

#### OTP Field
일회용 인증 코드 입력. n자리(보통 4/6자리) 개별 셀.

- **Cell**: 48×56(살짝 세로로 긴 비율), `{radius.md}` (10px), 1px `{colors.hairline}`, 배경 `{colors.canvas}`, 중앙 정렬.
- **Cell Typography**: `{font.mono}` (Geist Mono) / 24px / weight 500 (`{fw.label}`). *근거: headline 28px(weight 600)은 셀 폭(48px) 대비 비중이 과해 한 자리만 채워졌을 때 시각 무게가 흔들리고, 20px는 셀 높이(56px) 대비 가벼워 입력값이 셀 안에서 둥둥 떠 보임. 24px가 셀 비례에 균형 잡힌 비중. mono 패밀리는 모든 숫자 폭이 동일해 1·4·7 같이 글자폭이 다른 숫자가 섞여도 정렬이 또렷하게 유지되고, 일회용 코드 입력이라는 맥락(영문이 아닌 숫자 위주)에 부합. weight 500은 mono 굵기에 600을 더하면 디지털 시계처럼 무거워지는 인상을 피하기 위한 의도적 다운그레이드.*
- **Cell Gap**: `{spacing.xs}` (8px). 셀이 6개를 넘어가면 3개 단위로 그룹 사이를 `{spacing.md}` (16px)로 벌려도 됨.
- **Focus**: 보더 `{colors.primary}` 1.5px (전역 정책).
- **Filled**: 텍스트 `{colors.ink}`. 자동 다음 셀로 포커스 이동(Base UI `OTPField` 기본 동작).
- **Accessibility**: `<label>` (또는 `Field.Label`)을 OTP 그룹에 연결하면 Base UI가 첫 셀에 `aria-labelledby`를 자동 부여합니다 — 첫 셀의 `aria-label`은 Base UI `OTPField.Input`이 의도적으로 무시(dev 환경 경고)하므로 전달하지 않습니다. 2번째 셀부터는 `aria-label="인증 코드 N번째 자리"`로 분리.

### Menu / Context Menu
키보드 탐색이 가능한 드롭다운 메뉴. **Menu**는 명시적 트리거 버튼, **Context Menu**는 우클릭/길게 누름으로 호출. 두 변형은 동일한 Popup/Item 토큰을 공유하므로, 동일 화면에 둘 다 등장해도 시각 언어가 유지됩니다.

- **Popup**: Autocomplete Popup과 동일 토큰 (`{colors.canvas}` / 1px `{colors.hairline}` / `{radius.lg}` (16px) / `{shadow.level-2}`). 패딩 `{spacing.xs}` (8px), min-width 200px.
- **Menu Item — 기본**
  - 높이 **36px**(min-height), 좌우 패딩 `{spacing.sm}` (12px), gap `{spacing.sm}` (12px). 라벨은 **`{typography.label-md}` (15px) / weight regular (400) / `{colors.ink}`**, line-height·letter-spacing은 `{typography.body-sm}` 패밀리 유지. *근거: dense context menu는 Apple/Linear 톤(28~32px) 근처로 응축해야 액션 리스트로 읽힙니다. 40px은 Navigation Menu·Toolbar처럼 한 화면에 1차 진입점을 강조하는 컴포넌트의 톤이고, 4~9개 액션을 응집해서 보여주는 Menu에는 1단 낮춘 36px이 dense 그리드(4px·8px) 안에서 균형을 잡습니다. 폰트 사이즈는 **label-md(15px)** — body-sm(14)은 36px 행 안에서 시각 무게가 살짝 미달, label-lg(16)는 nav menu 톤으로 넘어가버려 dense 액션 리스트 위계를 깨뜨립니다. weight는 regular 유지 — 메뉴는 다수 항목을 dense하게 보여주는 컨텍스트라 label군 기본 weight(500)를 그대로 쓰면 라인업 전체가 굵어져 가독성 부담. lh·ls는 body-sm 패밀리를 그대로 둬 한국어 본문 흐름과 시각적 베이스라인을 공유합니다.*
  - **Hover/Highlighted**: 배경 `{colors.surface-soft}`, `{radius.md}` (10px). 키보드 포커스도 동일 토큰을 공유합니다.
  - **Disabled**: 텍스트/아이콘 opacity 0.4, cursor not-allowed. 단축키 hint도 동일하게 dim 처리.
- **Menu Item — 아이콘 포함 타입**
  - 좌측 16px 아이콘(`{colors.body-muted}`) → 라벨(`flex: 1`) → 우측 단축키 hint 순. 아이콘 영역은 `flex: 0 0 auto`로 정렬 흔들림 방지.
  - 단축키 hint는 우측 정렬, 좌측 margin `{spacing.md}` (16px) 이상 확보. **Tooltip kbd와 동일하게 박스 없는 글리프(타이포 전용)로 표현**합니다 — 각 키를 개별 `<kbd>`로 분리하고 gap `1px`로 묶어 한 단축키 조합으로 읽히게 합니다.
    - 타이포: **13px** (의도적 하드값, caption 12px ↔ body-sm 14px 사이의 보조 단축키 슬롯) / weight regular (400) / `{font.text}` (Pretendard). 컬러 `{colors.body-muted}`. *Tooltip의 caption(12px)을 그대로 가져오지 않고 13px로 한 칸 올린 이유: 메뉴 라벨이 body-sm(14px)이라 12px은 너무 위축되어 단축키 가독성이 떨어지지만, 14px까지 올리면 라벨과 사이즈가 동일해져 위계가 평탄해집니다. 13px이 "라벨 한 단 아래"로 읽히되 dim한 보조 정보로 인지되는 균형점입니다. 라벨과의 위계는 사이즈(14↔13) + 컬러(ink ↔ body-muted) 두 축으로 만듭니다.*
    - 박스 금지: 보더·배경 fill·radius·그림자 모두 사용하지 않습니다. **kbd는 chevron(submenu indicator) 아이콘과 시각 언어를 분리하기 위해 텍스트 전용 토큰을 유지**합니다 — chevron은 SVG 아이콘(16px), shortcut은 kbd 글리프(13px text)로 구별되어야 사용자가 "이건 키 입력 hint, 저건 서브메뉴 진입 인디케이터"라는 의미를 즉시 분리해 읽을 수 있습니다. 박스를 두면 chevron과 같은 "추가 아이콘 슬롯"으로 오인됩니다.
    - UA 기본 `kbd { font-family: monospace }`는 명시적으로 `{font.text}`로 override합니다 — tooltip kbd와 동일 정책.
  - 아이콘만 있고 단축키가 없는 라인과 섞일 때도 라벨 시작점이 어긋나지 않도록 동일 컬럼에 16px 아이콘 슬롯을 유지합니다(아이콘이 없으면 빈 슬롯 또는 16px placeholder).
- **Menu Item — Destructive**
  - 텍스트·아이콘 모두 `{colors.semantic-error}`. **Highlighted 배경은 `{colors.semantic-error-bg}` (피치 톤)**으로 채웁니다 — `button-danger-ghost` · `icon-btn--danger-ghost` hover와 동일 토큰을 공유해 시스템 내 약한 danger surface 언어를 일관되게 유지합니다. *근거: `surface-soft`를 쓰면 위험 신호가 약해지고, 별도 `color-mix` 알파값을 두면 다른 danger 컴포넌트와 톤이 어긋나 같은 화면에 공존할 때 위계가 흩어집니다. `semantic-error-bg`는 라이트(`#fef1f1` 피치)·다크(`rgba(247,75,83,0.15)`) 모두 토큰화되어 모드 전환에도 일관됨.*
  - Destructive 항목은 메뉴 하단(또는 별도 그룹) 1개로 제한하고, 위에 separator를 1줄 둡니다.
- **Separator**: 1px `{colors.hairline}`, 상하 margin `{spacing.xs}` (8px). 의미 그룹의 경계에서만 사용 — 시각적 호흡 목적이라면 spacing을 키우는 쪽을 선호합니다.

#### 2-depth Submenu
하위 액션이 3~6개 정도의 짧은 묶음일 때 사용합니다. 더 깊은 계층(3-depth 이상)은 메뉴 대신 모달/패널로 분기.

- **Submenu Trigger**: 일반 Menu Item과 동일한 layout. 우측에 **16px** `chevron-right` indicator를 두고, 단축키 hint와 동시 노출하지 않습니다(우측 영역 충돌).
  - **컬러 상태 정책 (Apple/Linear 패턴)**: 기본 **`{colors.body-muted}`** → hover/`data-highlighted`·submenu open(`data-popup-open`)에서 **`{colors.ink}`**로 전환. *근거: 정적 상태에서 chevron을 ink로 두면 라벨과 동급 잉크 무게가 되어 dense 액션 리스트가 busy해집니다. muted로 fade-in시켜 두면 행을 스캔할 때 라벨이 먼저 읽히고, 사용자의 포인터·키보드가 항목 위에 올라온 순간 chevron이 ink로 올라오며 "여기 들어가면 자식 메뉴가 있다"는 affordance가 결정적으로 보입니다 — Apple Menu·Linear command palette·Notion sub-menu 모두 동일한 muted→ink 전환을 사용합니다. 전환은 `{motion.instant}` `{ease.standard}`로 background hover 전환과 같은 타이밍에 묶어 한 덩어리로 반응하게 합니다.*
  - **사이즈 16px** 근거: 좌측 라벨 아이콘 슬롯(16px)과 동일 사이즈로 맞춰 우측 indicator의 시각 무게가 좌측 아이콘과 균형을 잡습니다. 14px(작음)은 단축키 hint(13px kbd)와 사이즈 차가 좁아 두 글리프가 같은 종류로 오인됩니다 — 16/13의 차이가 "아이콘 affordance ↔ 텍스트 hint" 위계 분리에 필요합니다.
- **열림 트리거**: hover(포인터) 또는 `→` / `Enter` (키보드). 닫힘은 `←` / `Esc` / outside-pointer.
- **Open 상태**: Submenu가 열려 있는 동안 트리거는 `data-popup-open`으로 highlighted와 동일 배경(`{colors.surface-soft}`)을 유지해 부모-자식 관계를 명시.
- **Sub Popup**: 부모 Popup과 동일 토큰. 위치는 부모 기준 우측(side='right'), `--floating-offset` (8px) gap, 정렬은 `alignOffset: -4` (부모 패딩 보정으로 항목 첫 줄이 부모 항목과 baseline 정렬).
- **Collision**: 우측 공간이 부족하면 자동으로 좌측(side='left')으로 flip — Base UI Positioner 기본 동작을 그대로 둡니다.
- **금지**: 3-depth 이상 중첩, submenu 안에 destructive와 일반 항목을 섞기(맥락 분리가 약함), 트리거 우측에 단축키와 chevron을 동시에 배치.

#### 공통 규칙
- **Offset**: 트리거에서 `8px` 간격(`--floating-offset`). Context Menu도 동일하게 적용해 viewport 가장자리에서 잘리지 않도록 `collisionPadding`(16px) 확보.
- **항목 수**: 단일 메뉴 7~9개 권장, 그 이상이면 Group + GroupLabel로 분할하거나 Submenu로 위임.
- **금지**: 메뉴 항목 좌측에 컬러 액센트 바, Primary 채움 hover, 항목 내부 멀티라인 본문(설명이 필요하면 Tooltip 또는 Navigation Menu Feature Link 패턴 사용).

### Navigation Menu
사이트 1차 내비게이션(주로 데스크톱 헤더). 트리거 hover 시 mega-menu/dropdown content를 노출하는 패턴. Vercel/Linear/Stripe 계열의 텍스트-전용 트리거 + neutral surface 패턴을 따릅니다.

- **Trigger**: `{typography.label-lg}` (16px / weight 500) / `{colors.ink}`. 높이 40px, 좌우 패딩 `{spacing.sm}` (12px), gap 6px, 우측 14px `chevron-down`. *주: 일반 40px 컴포넌트는 `button-sm` (14px)을 쓰지만, nav menu는 사이트 1차 내비게이션이라 가독성을 더 중시하여 label-lg(16px) 사용.*
- **Trigger Hover · Open**: 배경 `{colors.surface-soft}`, `{radius.md}` (10px). **hover와 open 동일 배경** — 열린 상태의 시각 단서는 chevron의 180° 회전이 담당 (Vercel/Linear 패턴).
- **Direct Link (드롭다운 없는 1차 항목)**: 하위 콘텐츠가 없는 1차 내비게이션 항목은 `Trigger`+`Content` 대신 `NavigationMenu.Link`를 `List`에 직접 둡니다. Trigger와 동일한 높이·타이포·hover 토큰(40px / `{typography.label-lg}` / hover `{colors.surface-soft}`)을 공유하되 **chevron을 두지 않습니다** — 펼칠 콘텐츠가 없는데 chevron을 붙이면 "여기 누르면 메뉴가 열린다"는 거짓 affordance가 됩니다. (드롭다운 항목과 단일 링크가 한 줄에 섞여도 chevron 유무가 둘을 구분해 줍니다.)
- **Content (Popup)**: `{colors.canvas}` / 1px `{colors.hairline}` / `{radius.lg}` (16px) / `{shadow.level-2}`. 폭 `min(560px, available-width)`, 패딩 `{spacing.sm}` (12px).
- **Popup Grid**: 2-column `1fr 1fr`. 카드 간 gap `{spacing.sm}` (12px). Feature가 있는 popup은 feature가 col 1 / row 1~끝 spanning, 일반 link 2개가 col 2에 세로 스택. Feature 없는 compact 변형은 모든 link가 같은 1fr 셀에 auto-flow. **모든 카드(feature·link)는 같은 너비** — Feature 위계는 너비가 아니라 height·gradient·weight로 표현.
- **Feature Link (강조 항목)**: 첫 줄 `{typography.label-lg}` (16px) / weight 600 (`{fw.heading}`) / `{colors.ink}`, 보조 줄 `{typography.body-sm}` (14px) / `{colors.body-muted}` / line-height `{lh.caption}` (1.4 — body 기본 1.5보다 타이트하게 카드 내 수직 점유 절약). min-height 168px, 패딩 `{spacing.md}` (16px), 콘텐츠 하단 정렬(`justify-content: flex-end`). 배경은 `radial-gradient(circle at 74% 24%, color-mix(in srgb, {color.primary} 8%, transparent), transparent 45%)` 위에 `{colors.canvas}` — **primary 8% glow는 장식이며 hover에도 고정**. hover 시 base만 canvas → `{colors.surface-soft}`로 톤 업.
- **Link (일반)**: 첫 줄 `{typography.label-lg}` / weight 500 (`{fw.label}`) / `{colors.ink}`, 보조 줄은 Feature와 동일 (body-sm / muted / lh-caption). 패딩 `{spacing.sm}` (12px) all-sides. hover 시 배경 `{colors.surface-soft}`. *Feature와 link의 시각 차이는 weight(600 vs 500) · height(168 vs auto) · gradient bg·bottom-align.*
- **Description Typography 정책**: nav menu 카드의 보조 텍스트는 본문 보조 정보이므로 `body-sm` 시멘틱이 기본. 단, popup 다층 행 사이에서 body 기본 `lh 1.5`는 수직 점유가 과해 보이므로 **`lh-caption` (1.4)을 차용**. weight·size·letter-spacing은 body-sm 그대로 유지.
- **Active 상태 (현재 위치 표시)**: **surface-inset 영구 배경**. Trigger·Link 모두 active 시 `{colors.surface-soft}`를 **영구 배경**으로 깔고 텍스트는 `{colors.ink}` 유지 — hover/open과 동일한 중립 surface를 상시 노출해 "지금 이 섹션/페이지"를 표시합니다. Trigger의 chevron은 active일 때 opacity 1로 고정(default 0.7). 다크모드는 hover와 동일하게 `{colors.surface-elevated}`. *근거: Sidebar active(L2661)·Menu highlighted와 같은 토큰·패턴을 그대로 재사용해(Linear/Vercel 중립 톤) 새 시각 언어를 만들지 않습니다. 후보였던 (a) 좌측 2px accent bar는 가로 트리거에 부적합하고 Menu의 "좌측 컬러 액센트 바 금지"와 충돌, (b) trailing 인디케이터는 새 글리프 슬롯이 필요해 제외. hover는 일시적(포인터 위)·active는 영구라 정지 상태에서 active 항목만 surface가 깔려 구분됩니다.*
- **Hover/Active 컬러 정책**: primary 컬러를 surface 틴트로 사용하지 않음 — Sidebar의 *"컬러 강조 대신 중립 톤 배경 + ink 텍스트 (Linear/Vercel 패턴)"* 원칙(L2661 sidebar 주석) 준수.
- **Motion**: open/close 딜레이는 Base UI NavigationMenu 기본값 **50ms**를 사용합니다(`delay`/`closeDelay` 미지정). 짧은 버퍼로 스침 호버를 흡수하되, 별도 튜닝 없이 프리미티브 기본 동작을 따릅니다.
- **Mobile**: 1023px 이하에서는 햄버거 → Drawer-left로 전환(Sidebar 모바일 변형과 동일 패턴).

### Toolbar
편집기/문서 상단의 그룹화된 **액션 바(action bar)**. Toggle Group(세그먼트 컨트롤)과는 역할이 다릅니다 — 토글 그룹은 "상호배타 옵션 한 줄"이지만 툴바는 "다양한 종류의 액션을 그룹화한 컨테이너"이므로 **트랙(Track) 배경을 두지 않습니다**.

- **Container**: 배경 **투명** (`transparent`), 보더 없음, 패딩 없음. `flex` 가로 정렬, 그룹 간 gap 8px, 줄넘침 시 `flex-wrap: wrap` 허용. 캔버스/카드 위에 직접 얹힙니다.
- **Group**: 관련 액션 묶음. 내부 버튼 간 gap 2px (시각적으로 한 덩어리), 그룹 사이는 Separator로 분리.
- **Button (공통)**: 높이 36px, `{radius.md}` (10px) — 시스템 표준 버튼 radius와 일치. 보더 없음, 배경 투명.
  - **Hover**: 배경 `{colors.surface-soft}`. 다크 모드는 `{colors.surface-elevated}`.
  - **Focus**: 전역 Minimalist Focus 정책에 따라 보더 컬러 변화만(글로우 금지).
  - **금지**: 그림자, 컬러 채움 hover, 보더.

#### 버튼의 3가지 의미 분류 (사용 시 반드시 일관성 유지)

| 분류 | 컴포넌트 | aria | 사용 예 |
|---|---|---|---|
| **즉시 실행(Instant Action)** | `Toolbar.Button` | `aria-pressed` 없음 | Undo, Redo, Link 삽입, 리스트 삽입, 공유 |
| **지속 토글(Persistent Multi)** | `Toolbar.Button render={<Toggle/>}` | `aria-pressed: true/false`, 서로 독립 | Bold, Italic, Underline, Strikethrough |
| **지속 단일선택(Persistent Single-select)** | `<ToggleGroup>` + `<Toggle value="…">` | `aria-pressed`, 셋 중 하나만 true | 정렬(좌/중/우), 표시 모드 등 상호배타 옵션 |

> 의미 분류를 시각적으로 섞지 마세요. "한 번 클릭 후 사라져야 할 액션"에 토글을 쓰면 사용자가 "지금 그 상태가 활성된 건가?" 혼동합니다. 반대로 "다음 입력에 적용되는 서식"에 plain 버튼을 쓰면 활성 여부가 보이지 않습니다.

#### 아이콘 전용 버튼

- **사이즈**: **36×36 정사각 고정** (`width: 36px; min-width: 36px; padding: 0; justify-content: center`). 문자 폭이 다른 라벨(B / I 등)을 그대로 쓰면 폭 불균형이 생기므로 아이콘 전용 버튼은 반드시 정사각.
- **아이콘 크기**: 18px (텍스트 라벨 14px과 시각 무게 균형).
- 텍스트 라벨 사용 시: 좌우 패딩 14px, `{typography.body-sm}` (14px / weight 500), `aria-label` 필수가 아니어도 의미 명확.

#### Primary Action (강조 액션)
- 배경 `{colors.primary}` / 텍스트 `{colors.on-primary}` (라이트·다크 모두 `#FFFFFF` 고정) / `{radius.md}` (10px).
- **텍스트 전용 — 아이콘 동반 금지.** 좌측 아이콘 버튼 줄과 시각적으로 섞이지 않도록 라벨만 사용해 위계를 분리합니다.
- 한 toolbar에 **1개로 제한**. 보통 우측 끝에 배치 (`flex: 1` 스페이서 또는 `margin-left: auto`).

#### Separator
- 1px `{colors.hairline}`, 세로 높이 24px, 좌우 margin 4px. 의미 그룹 간 경계.

#### 다크 모드
- **Container 배경은 라이트와 동일하게 투명을 유지합니다.** Toggle Group처럼 Surface Inset 트랙을 깔지 않습니다 — 툴바는 트랙이 아니라 카드/캔버스 위의 액션 행이기 때문.
- 비활성 버튼 텍스트: `#c7c7cc` (Apple 다크 segmented control tertiary와 동일 톤). hover/pressed 시 `#ffffff`.
- Primary 버튼은 이 규칙에서 제외 — 항상 `{colors.on-primary}` (흰색) 유지. CSS에서 `.toolbar-button:not(.primary)`로 분리해 specificity 충돌을 막을 것.

### Tabs
한 컨테이너 안에서 관련 패널을 전환하는 컴포넌트. **Underline 변형**을 기본으로 합니다.

- **List**: 하단 1px `{colors.hairline}` 디바이더. flex로 좌측 정렬, gap `{spacing.xl}` (24px).
- **Tab**
  - 높이(min-height) 40px, 좌우 패딩 16px, `{typography.label-sm}` (14px / weight 500 / lh 1.2 / tracking -0.16px) / `{colors.body-muted}`. *인터랙티브 라벨이므로 body-sm이 아닌 label-sm 토큰을 사용 — 동일 14/500 사이즈에서 line-height·letter-spacing이 label 군으로 묶여 다른 버튼·메뉴 라벨과 시각 무게가 일치합니다.*
  - **Hover**: 텍스트 `{colors.ink}`.
  - **Active**: 텍스트 `{colors.ink}`, 하단 2px `{colors.primary}` underline(`box-shadow: inset 0 -2px 0 {colors.primary}`). weight 500 유지.
  - **Focus**: underline 색만 유지. 키보드 접근성은 dotted outline 1px (전역 정책의 예외 — Tabs는 underline 자체가 신호이므로 보더 변화 대신 outline 사용).
- **Panel**: 상단 `{spacing.xl}` (24px) 간격. `{typography.body-md}` (16px) / `{colors.ink}`.
- **Pill Variant (선택)**: 카드 내부 좁은 영역에서는 underline 대신 `{colors.surface-soft}` 배경 + `{radius.pill}` 활성 칩 사용 가능. 단 한 화면에 두 변형을 섞지 않습니다.
- **금지**: Active 텍스트를 Primary 컬러로 변경(언더라인이 신호), 굵기 변화로 위계 표현(레이아웃 점프 발생).

### Toggle / Toggle Group
**Toggle**은 단일 on/off 상태 버튼, **Toggle Group**은 공유 상태를 갖는 세그먼트 컨트롤(단일/다중 선택).

- **Toggle (단일)**
  - 높이 36px, 좌우 패딩 12px, `{radius.md}` (10px), 1px `{colors.hairline}` 보더.
  - **Default**: 배경 `{colors.canvas}` / 텍스트 `{colors.ink}` / `{typography.button-sm}` (14px / weight 500).
  - **Pressed (on)**: 배경 `{colors.surface-soft}` / 텍스트 `{colors.ink}` / 보더 `{colors.hairline}` 유지.
  - **Hover**: 배경 `{colors.surface-soft}`.
- **Toggle Group (세그먼트)**
  - **사이즈**: 단일 사이즈만 제공. 같은 pill 패턴(Tabs/Toolbar)과 시각적 일관성을 유지하고 API를 단순하게 유지하기 위해 size variation을 두지 않는다.
  - **Track**: `{colors.surface-inset}` 배경, `{radius.md}` (10px), padding 4px, 보더 없음(투명). `position: relative` (인디케이터 absolute 기준).
  - **Item**: 트랙 안의 칩. 높이 36px, 좌우 패딩 14px, `{radius.sm}` (6px), `{typography.body-sm}` (14px / weight 500). 배경은 항상 투명(시각적 칩은 인디케이터가 전담).
    - **Default**: 텍스트 `{colors.body-muted}` (#6b7280).
    - **Hover (enabled, not selected)**: 텍스트만 `{colors.ink}`로 부드럽게 전환 — **배경 채움 금지**.
    - **Selected**: 텍스트 `{colors.ink}`. 자체 배경/그림자 없음.
  - **Sliding Indicator**: Track 내부에 `position: absolute`로 배치되는 단일 엘리먼트. 선택된 Item의 위치/너비로 `transform: translateX()` + `width`를 갱신하여 좌우로 슬라이드. 배경 `{colors.canvas}`, `{radius.sm}`, `{shadow.level-1}` (떠오른 칩 인상).
  - **선택 항상 1개 보장(단일 선택)**: 세그먼트(단일 선택) 모드에서는 **활성 항목을 한 번 더 눌러도 선택이 해제되지 않습니다.** Base UI `ToggleGroup`은 기본적으로 동일 항목 재클릭 시 deselect되어 "0개 선택" 상태가 가능하지만, 세그먼트 컨트롤은 라디오 그룹과 동일하게 항상 정확히 한 항목이 선택되어 있어야 합니다(인디케이터가 사라지면 현재 모드를 알 수 없고, 다음 클릭의 의미도 모호해집니다). 컨트롤드 패턴으로 `onValueChange`에서 `next.length === 0`이면 업데이트를 무시하세요.
    ```tsx
    const [value, setValue] = React.useState<string[]>(['left']);
    <ToggleGroup
      value={value}
      onValueChange={(next) => {
        if (next.length === 0) return; // 선택 해제 금지 — 항상 1개 유지
        setValue(next);
      }}
    >
    ```
    이 규칙은 Toolbar 내부의 단일 선택 세그먼트(`Toolbar.Group` + `ToggleGroup`, 예: 정렬 좌/중/우)에도 동일하게 적용합니다. 반대로 Toolbar의 **지속 토글(Persistent Multi)** — Bold/Italic/Underline처럼 서로 독립인 토글 — 은 각각이 단일 on/off 상태이므로 이 규칙을 적용하지 않습니다(꺼진 상태가 정상 상태). 다중 선택(`multiple`) ToggleGroup도 0개 선택이 의미를 가질 수 있다면 이 가드를 두지 마세요.
  - **모션**: indicator의 `transform` / `width`는 `{motion.slow}` `{ease.out-expo}`, Item 텍스트 컬러 전환은 `{motion.normal}` 동일 이징. 페이드는 `{motion.normal}` `{ease.standard}`.
  - 다크 모드:
    - **Track**은 반드시 `{colors.surface-inset}` (`#232326`)을 유지합니다. 카드 배경(Surface Soft `#18191B`)과 같은 톤으로 덮으면 컨테이너가 카드에 묻혀 보이지 않게 되므로 `Surface Soft`로 오버라이드하지 마세요.
    - **Indicator**는 `#3E3E41`을 사용합니다. 다크 surface 스케일(`#11` → `#18` → `#23` → `#27`, 평균 +7 간격)을 두 칸 더 연장한 위치(`#3E ≈ #27 + 0x17`)로, Track(`#232326`)과 동일한 cool neutral 톤(B채널 +3)을 유지해 패밀리가 어긋나지 않습니다. `Surface Elevated (#27282D)`는 인터랙티브 표면 전용 토큰이라 의미가 충돌하고, Track과의 RGB 차이도 ~5에 불과해 인디케이터 시인성이 떨어집니다. `#48484A` 같은 mid-grey는 따뜻한 톤으로 떠 보여 트랙과 어울리지 않습니다. 추가로 inset 상단 하이라이트(`inset 0 1px 0 rgba(255,255,255,0.06)`) + 하단 그림자(`0 1px 2px rgba(0,0,0,0.45)`)로 떠오른 느낌을 강화합니다.
    - **텍스트 톤 위계 (필수)**: 라이트 모드의 `body-muted (#6B7280)`를 다크 Track(`#232326`) 위에 그대로 두면 enabled 상태가 disabled처럼 흐릿하게 보입니다. 다음 4단계 톤으로 enabled / hover / selected / disabled를 시각적으로 분리하세요.
      | 상태 | 텍스트 컬러 | 이유 |
      | --- | --- | --- |
      | Enabled (unselected) | `#C7C7CC` | Apple 다크 tertiary label 톤. 충분히 밝아 enabled로 인식되되 selected와는 분리. |
      | Hover (unselected) | `#FFFFFF` | 순백으로 인터랙션 신호. |
      | Selected (pressed) | `#FFFFFF` | 인디케이터(`#3E3E41`) 위에서 가장 또렷한 활성 신호. |
      | Disabled | `#5A5A5E` | 인디케이터보다 어두운 무채색. enabled와 명확히 구분되어야 함. |
    - 레이어 위계: Card (Soft `#1A`) → Track (Inset `#23`) → Indicator (`#3E`). 세 배경 레이어와 4단계 텍스트 톤이 함께 작동해야 다크 모드 segmented control이 disabled처럼 보이지 않습니다.
- **금지**: Selected 상태에 Primary 컬러 채움(Sidebar Navigation 원칙과 동일 — 상태 컬러와 분리), Hover 시 배경 채움(글씨색 변화로만 신호), Item 자체에 그림자/배경 부여(인디케이터와 이중 표현), 아이콘에 별도 강조 컬러.

### Slider
범위 입력 컨트롤.

- **Track**: 6px 높이, `{colors.hairline}` 배경, `{radius.pill}` (Meter·Progress와 동일 높이로 통일).
- **Indicator (Filled)**: `{colors.primary}` 배경. 시작점부터 thumb까지.
- **Thumb**: 20×20 원형, `{colors.on-primary}` 배경(흰색 고정) — 파란 보더 thumb이 아닌 Apple Music/Linear 풍 미니멀 thumb. 라이트 모드는 1px `{colors.hairline}` 보더 + 옅은 그림자 `0 1px 2px rgba(0,0,0,0.12)`, 다크 모드는 보더 제거(transparent) + `0 1px 3px rgba(0,0,0,0.4)`. **다크 모드에서도 흰 본체 유지** (Primary 위 컨트롤 부품 원칙).
- **Press (active)**: 드래그 중 thumb scale 1.15 — 직접 조작 피드백.
- **Focus**: thumb 보더를 `{colors.primary}` 1.5px로 (전역 focus 정책 — 보더 변화로만 신호).
- **Touch Target**: thumb 자체는 20px이지만 hit area 44×44 확보.
- **Range Slider (양쪽 thumb)**: 두 thumb 사이 구간만 Indicator로 채움.

### Progress
작업 진행률 시각화 (determinate).

- **Track**: 6px 높이, `{colors.hairline}` 배경, `{radius.pill}` (Slider·Meter와 동일 높이로 통일).
- **Indicator**: `{colors.primary}` 배경, `{radius.pill}`. width는 value 비율.
- **Variant — Slim**: 4px 높이 (페이지 상단 로딩 바 등).
- **Indeterminate**: Indicator를 30% 폭으로 두고 좌→우 1.2s 무한 슬라이드(`{ease.in-out}`).
- **Label (선택)**: Progress 위에 `{typography.body-sm}` weight 500 / `{colors.ink}`, 우측에 % 텍스트 `{colors.body-muted}`.
- **금지**: 그라데이션 채움, 줄무늬 패턴, 펄스 글로우.

### Meter
경계가 있는 측정값 인디케이터 (예: 디스크 사용량, 비밀번호 강도). Progress와 달리 **고정된 min/max 범위 내의 현재 값**을 표시.

- **Track / Indicator**: Progress와 동일 토큰(6px 높이, `{radius.pill}`).
- **Color by Range (헬스 게이지)**: 사용량·강도처럼 **'낮을수록 양호'**한 측정값은 구간별로 색이 자동 전환된다 — 양호 `{colors.semantic-success}`(초록) → 80%↑ `{colors.semantic-warning}`(주황) → 95%↑ `{colors.semantic-error}`(빨강). 점수·평점처럼 '낮을수록 좋다'가 성립하지 않는 Meter는 `{colors.primary}` 단색을 유지한다(헬스 게이지 의미 오용 금지). 초록은 시맨틱 success 상태색이지 두 번째 브랜드 액센트가 아니다 — 단일 액센트(Primary) 정체성과 충돌하지 않음.
- **Label**: 상단에 `{typography.body-sm}` weight 500 (좌측 라벨) + 현재값/최대값 (우측, `{colors.body-muted}` `{typography.caption}`).
- **금지**: Progress와 시각적으로 구분이 안 되는 경우 라벨로 의미를 명확히 표기.

### Separator
시각적 구분선.

- **Horizontal**: 1px 높이, `{colors.hairline}` 배경, full width.
- **Vertical**: 1px 폭, `{colors.hairline}`, height는 부모 따라.
- **With Label (decorative)**: 가운데 텍스트가 있는 구분선. 좌우 hairline + 중앙 `{typography.caption}` / `{colors.body-muted}`, 좌우 `{spacing.md}` 간격.
- **Margin**: 섹션 구분 시 상하 `{spacing.xl}` (24px) ~ `{spacing.xxl}` (32px).
- **금지**: 점선/이중선 변형, 그라데이션 페이드, 컬러 강조.

### Scroll Area
밀도 높은 콘텐츠를 위한 커스텀 스크롤 영역. OS 기본 스크롤바보다 절제된 형태를 제공합니다.

- **Viewport**: 부모 컨테이너에 `overflow: hidden` + 내부 스크롤. `{radius.md}` 이상 컨테이너 안에 둘 때 모서리 클리핑 자동 처리.
- **Scrollbar**
  - **Width**: 세로 6px / 가로 6px. hover/active 시 10px로 확대(`transition: width {motion.fast} {ease.standard}`).
  - **Track**: 투명. hover 시에만 `{colors.hairline}` 0.4 opacity 노출.
- **Thumb**: `{radius.pill}`, `{colors.body-muted}` 0.4 opacity. hover 시 0.6, active 시 0.8.
- **Auto-hide**: 마우스가 영역을 벗어나면 600ms 후 thumb fade-out(opacity 0).
- **금지**: 트랙에 강한 배경색, thumb에 Primary 컬러, 그림자.

### Preview Card
본문 안의 링크 너머 내용을 페이지 이동 없이 미리 보여주는 inline hover card. 위키피디아의 문서 호버 미리보기, X의 사용자 프로필 카드, 디자인 시스템 내 토큰·컴포넌트 이름 참조처럼 본문 흐름을 끊지 않고 링크 너머의 맥락을 확인시키는 상황에 사용합니다.

#### Trigger
- **형태**: 본문 prose 안에 섞인 inline `<a>` (`text-link` — `{colors.primary}` + underline). PreviewCard.Trigger는 base-ui가 anchor로 렌더링하므로 inline 흐름에 자연스럽게 임베드됩니다.
- **금지**: 단독으로 떠 있는 버튼·블록형 트리거. *근거: PreviewCard는 위키피디아/X/노션 계열의 "본문 흐름 안 inline 링크 미리보기" 패턴이며, 스탠드얼론으로 두면 CTA 버튼으로 오인되어 패턴 의미가 깨집니다.* 액션을 유발하는 트리거가 필요하면 Popover/Drawer로 승격.

#### Popup
- **표면**: `{colors.canvas}` / 1px `{colors.hairline}` / `{radius.lg}` (16px) / `{shadow.level-2}`.
- **폭**: `min(280px, var(--available-width))` — floating panel 표준 단일 선언 패턴(popover-card·date-picker-popover·nav-menu-popup과 동일). 좁은 viewport에서는 `--available-width`로 자동 클램프.
- **패딩**: `{spacing.md}` (16px) — popover-card와 동일 위계.
- **Offset**: `--floating-offset-loose` (10px) — 큰 카드 계열(popover와 공유).

#### Content Structure (2단 gap)
미디어 + 텍스트(타이틀+본문) 구조에서 두 단계 위계를 만들기 위해 root grid와 inner stack에 서로 다른 gap을 적용합니다.

- **Root grid gap**: `{spacing.md}` (16px) — 미디어 ↔ 텍스트 묶음 분리.
- **Inner text stack gap** (`.preview-card-text`): `{spacing.xs}` (8px) — 타이틀 ↔ 본문 묶음. `--stack-card-title-gap` 컨벤션과 동일.
- *근거: 16/8 = 2× 위계 대비로 미디어와 텍스트 그룹이 또렷이 구분되어 시각 탐색 비용이 낮습니다.*

#### Media Slot (`.mini-product`)
- **비율**: `aspect-ratio: 16 / 9` — 웹 표준 링크 프리뷰 비율(OpenGraph 카드, 동영상 썸네일 계열). 임의 픽셀 높이 대신 비율로 선언해 카드 폭 변화에 자동 대응.
- **형태**: `{radius.md}`. **자체 shadow 없음** — 부모 카드의 floating shadow에 위계 양보 (카드 내부 미디어 슬롯은 자체 그림자를 두지 않는다).
- **배경(Light)**: `radial-gradient(circle at 74% 24%, primary 12%, transparent 50%)` 오버레이 + `{colors.surface-soft}` 베이스. nav-menu-feature와 동일한 primary glow 패턴 공유 → 디자인 시스템 내 "암시적 미디어 영역" 시각 언어 일관성.
- **배경(Dark)**: 동일 radial(primary 14%) + `{colors.surface-elevated}` 베이스. *근거: 다크 모드 카드 bg는 `surface-soft`(#18191b)이므로, 미디어 슬롯은 한 단계 밝은 `surface-elevated`(#27282d)를 베이스로 깔아 "들어 올려진 타일"로 읽히도록 반전.*

#### Typography
- **Title** (`.popover-title` 공유): `{typography.body}` (16px) + `{font-weight.heading}` (600) + `{lh.title-sm}` (1.30) + `{ls.body}`. `margin: 0` — grid gap이 행간을 담당하므로 UA margin이 누적되지 않도록 리셋.
- **Body** (`.popover-copy` 공유): `{typography.body-sm}` 4속성(size·weight·lh·ls) 일괄 적용 + `{colors.body-muted}`. `margin: 0`.
- **Demo prose** (`.preview-card-demo-prose`): 트리거를 둘러싸는 본문 — `{typography.body}` 4속성 + `{colors.ink}`, `max-width: 56ch`(가독성 line-length), `text-align: center`.

#### Motion
- **Transition**: `transform/opacity` `{motion-fast}` (120ms) `{ease-standard}`.
- **Fade-only enter/exit**: `[data-starting-style]`, `[data-ending-style]`에서 `opacity: 0`. *근거: scale transition은 transform-origin 기준으로 내부 미디어(mini-product) 위치가 시각적으로 흔들려 보이는 부작용이 있어 popover-card와 동일하게 opacity-only로 통일.*
- **Open/Close delay**: base-ui PreviewCard 기본값 사용.

#### Dark Mode
- **Popup bg**: `{colors.surface-soft}` + 1px `rgba(255, 255, 255, 0.10)` translucent overlay 보더(iOS Dark separator 원칙) — popover-card·date-picker-popover와 동일 처리.
- **Media slot bg**: Media Slot 절 참조.

#### 금지
- **멀티 액션 버튼**: Preview Card는 정보 노출 전용 — 액션이 필요하면 Popover/Drawer 사용.
- **스탠드얼론 trigger**: 본문에서 분리된 단독 링크/버튼. 반드시 prose 안의 inline anchor로 사용.
- **미디어 슬롯 shadow**: 카드 내부 미디어는 자체 그림자 없음.
- **자체 width 토큰 신설**: floating panel은 각자 raw px(280·260·348·560)를 `min(value, available-width)` 안에 두는 관행 — 신규 width 토큰 스케일 도입 금지.




### Collapsible
단일 트리거로 콘텐츠 블록을 펼치고 접는 가장 기본적인 disclosure 컴포넌트. 
Accordion이 "여러 항목의 묶음"이라면 Collapsible은 "독립된 한 블록"으로, 본문 흐름에 자연스럽게 삽입되는 **인라인 텍스트 링크** 형태가 기본형입니다.



**구조**: `Collapsible.Root` → `Collapsible.Trigger`(좌측 chevron + 라벨) + `Collapsible.Panel`(들여쓰기된 본문). `aria-expanded`는 Base UI가 자동 부여합니다.

#### Trigger

- **형태**: chevron-right 아이콘(16px)이 **왼쪽**에 위치한 inline-flex 텍스트 링크. native `<details>/<summary>` 및 Notion toggle 컨벤션을 따릅니다. 풀-너비 행 트리거(우측 chevron)가 필요하면 Accordion 사용.
- **Chevron**: closed `›`, open 시 90deg 회전(`▼`). 회전·색 트랜지션 모두 `{motion.fast}` `{ease.standard}`.
- **Typography**: `{typography.label-lg}` (16px, weight 500, line-height 1.2, letter-spacing -0.16px). 본문이 아닌 **인터랙티브 라벨 역할**이라 label 스케일.
- **Spacing**: padding `{spacing.xxs}` × `{spacing.xs}` (4 × 8). `margin-left`는 padding만큼 음의 오프셋(`calc(-1 * {spacing.xs})`)을 주어 시각적으로 컨테이너 가장자리에 정렬. 아이콘-텍스트 gap `{spacing.xs}` (8). Border radius `{radius.sm}` (6px).
- **States**:


| 상태 | 텍스트 | Chevron | 추가 표시 |
|---|---|---|---|
| Default | `{colors.ink}` | `{colors.body-muted}` | — |
| Hover | `{colors.primary}` | `{colors.primary}` | — |
| Focus (키보드) | `{colors.primary}` | `{colors.primary}` | `text-decoration: underline`, `text-underline-offset: 3px` |
| Open (`[data-panel-open]`) | (Default와 동일) | 90deg 회전 | — |

**디폴트가 `{colors.ink}`인 이유** (Primary 아님): Disclosure는 "조용히 있다가 펼치는" 패턴. 디폴트가 Primary면 페이지의 실제 CTA와 시각적으로 경합합니다. 같은 disclosure 계열인 Accordion 트리거도 `{colors.ink}`라 일관성 유지. 어포던스는 chevron + hover 컬러 트랜지션이 담당.

**키보드 포커스에 outline ring이 아닌 underline인 이유**: 텍스트 링크 컨벤션(`<a>`)을 따름. solid outline은 박스형 버튼에 적합하지만 인라인 텍스트 트리거에는 시각적으로 무겁고 어색함. underline은 hover와 살짝 구별되면서도 가장 안 티남.


#### Panel

- **컨테이너**: **별도 보더/배경/그림자 없음**. 본문 흐름에 자연스럽게 삽입.
- **Typography**: `{typography.body-sm}` (14px), line-height 1.5, 색상 `{colors.body-muted}`. 패널은 보조 정보 — body 스케일.
- **Spacing**: `margin-top: {spacing.xs}` (8px) — 트리거와 8px 호흡. `padding-left: {spacing.xl}` (24px) — 트리거 텍스트와 패널 본문이 **수직 정렬**되도록(chevron 16 + gap 8 = 24).
- **(옵션) 좌측 가이드 라인**: 패널 본문이 길거나 본문 흐름 한가운데 삽입되어 주변 텍스트와 그룹핑이 약할 때만 `border-left: 2px solid {colors.hairline}` 추가. 짧은 본문이나 카드 내 isolated 사용 시엔 인용문 인상을 주므로 **제외**.

#### Motion (Accordion 공용 표준)

`:root`에 `interpolate-size: allow-keywords` 선언 전제.

- **Duration**: `{motion.expand}`
- **Easing**: `{ease.out-quad}`
- **Transitions**: `height` (auto ↔ 0), `margin-top` (`{spacing.xs}` ↔ 0) 동일 곡선·시간으로 함께 트랜지션
- **Closed selectors**: `[data-starting-style]`, `[data-ending-style]`, `[data-closed]` — Base UI가 mount/unmount 시 자동 부여
- **`keepMounted`** 권장 (접근성·SEO 측면 panel 항상 DOM 유지)

Sidebar 2뎁스 그룹·Accordion이 동일 토큰을 공유합니다. (Accordion 섹션의 *Panel Expand/Collapse 모션 공용 표준* 참조.)

#### Collapsible vs Accordion 결정 기준

| 컨텍스트 | 컴포넌트 |
|---|---|
| 본문 안 "더보기" / "상세 보기" 단일 토글 | **Collapsible** |
| FAQ Q1, Q2, Q3처럼 같은 패턴 다항목 | **Accordion** |
| 사이드바 메뉴 그룹 펼침 | Sidebar 자체 패턴(Collapsible primitive 재사용) |

#### 금지

- **별도 카드/배경/그림자**: 독립 블록이지 컨테이너가 아닙니다. `{radius.lg}` border나 box-shadow 적용 시 Accordion과 위계가 겹쳐 무너집니다.
- **풀-너비 행 트리거(우측 chevron)**: Accordion 영역.
- **Primary 텍스트 디폴트**: 페이지 실제 CTA와 경합. Primary는 hover/focus에만 부여.
- **Solid outline focus ring**: 인라인 텍스트 트리거에 부적합. text-link 컨벤션(underline) 사용.








## Do's and Don'ts

### Do
- 액션을 유도하는 클릭 가능한 요소는 반드시 `{colors.primary}` (#006EFF) 컬러를 활용하여 사용자가 명확히 인식하도록 하세요.
- 계층 구조를 나타낼 때는 폰트 사이즈를 키우기보다는 폰트 두께(Weight)나 색상의 대비(Ink vs Muted)를 먼저 활용해 보세요.
- 섹션 간의 여백(Spacing)은 여유롭게(최소 80px 이상) 두어 각 내용이 서로 간섭하지 않게 띄워주세요.

### Don't
- Primary 컬러 이외의 화려한 색상을 여러 개 섞어 쓰지 마세요. 브랜드가 전달하고자 하는 메시지가 흐려집니다.
- 하나의 화면 내에서 둥근 정도(Border Radius) 체계를 섞어 쓰지 마세요. (예: 어떤 버튼은 각지고 어떤 버튼은 둥글면 안 됩니다.)
- 카드를 표현할 때 짙고 무거운 드롭 섀도우를 사용하지 마세요. 대신 부드럽고 옅은 그림자나 단순히 1px 테두리를 사용해 세련됨을 유지하세요.
- **아이콘에 불필요한 장식적 박스를 쓰지 마세요**: 카드 내부 아이콘에 배경색이 있는 박스를 두르면 시각적으로 복잡해 보이고 정보의 핵심인 텍스트보다 강조되어 보일 수 있습니다. 아이콘은 텍스트와 자연스럽게 어우러지도록 배경 없이 간결하게 표현하세요.






## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1280px | Card grid 3-up maintained |
| Tablet | 1024px | Card grid 3-up → 2-up |
| Mobile-Lg | 768px | Pricing comparison becomes accordion; nav hamburger |
| Mobile | 480px | Single-column; display-xl scales 80px → ~36px |

### Touch Targets
- 모바일 및 태블릿 환경을 고려하여 모든 버튼과 링크의 터치 영역은 **최소 44x44px** 크기를 확보해야 합니다. 시각적 크기가 작더라도 투명한 패딩을 활용하여 탭 하기 쉬운 터치 영역을 보장하세요.

