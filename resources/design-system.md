## Overview

NCAI Design System은 기술적 정밀함과 감성적 절제가 조화를 이루는 **미니멀리즘**을 지향합니다.
본 시스템은 Apple, Stripe, Linear와 같은 최정상급 서비스의 미학을 우리만의 철학으로 재해석하여,
완벽한 중성 다크 모드, 대담한 여백의 미학(Bold Whitespace), 그리고 인지 공학적 시맨틱 컬러 체계를 통해 압도적인 전문성과 신뢰를 구축합니다.
핵심 원칙은 **"절제를 통한 위계의 완성"**입니다.
불필요한 장식과 색상을 걷어내고, 정교하게 계산된 여백과 타이포그래피의 밀도, 그리고 기술적으로 견고한 CSS 아키텍처를 통해 가장 직관적이고 세련된 사용자 경험을 선사합니다.





**Key Characteristics:**
- **하나의 강력한 Primary 액센트 컬러**: 브랜드의 정체성과 주요 클릭 유도를 담당하는 색상(현재 `#006EFF` 적용)을 명확히 정의합니다.
- **8px 베이스의 Spacing System**: 가장 범용적인 8px 기반 격자 체계를 사용하여 컴포넌트 내부 및 외부 여백을 설정합니다.
- **체계적인 텍스트 계층 구조 (Typography Hierarchy)**: Display, Headline, Body, Caption 등의 명확한 용도와 굵기, 줄간격 규칙을 정합니다.
- **상태를 표현하는 Elevation과 컴포넌트 형태**: 플랫(Flat)함을 기본으로 하되, 그림자(Shadow)와 테두리 라운딩(Border Radius)을 사용하여 UI의 명확한 위계를 구현합니다. 특히 중요한 상태 표시는 가장 정갈한 **솔리드 잉크(Solid Ink)** 스타일을 사용하여 압도적인 절제미와 전문성을 전달합니다.
- **Solid Ink Style** (`#13151A`): 디자인 시스템의 핵심 무채색인 `Ink`를 그대로 활용한 뱃지 스타일입니다. 화려한 장식 없이도 텍스트의 가독성을 극대화하며, 어떤 배경 위에서도 가장 권위 있고 세련된 인상을 줍니다.



## Colors

NCAI Design System의 컬러 토큰은 **Surface / Text / Semantic / Pop / Status / Dark Mode**의 6개 축으로 구성됩니다. 모든 컬러는 라이트·다크 모드에서 명확한 의미와 역할을 갖도록 설계되었으며, 장식적 컬러(아바타)와 기능적 컬러(상태 뱃지)는 엄격히 분리됩니다.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): 페이지의 기본 배경색 (순백색). 가장 많은 면적을 차지합니다.
- **Surface Soft** (`{colors.surface-soft}` — `#F8FAFC`): 기본 흰색 캔버스 위에서 섹션을 구분짓거나, 강조 카드의 배경, 상단 네비게이션/푸터 배경 등에 쓰이는 가장 연한 쿨 그레이입니다. 흰색 Canvas와 부드러운 대비를 만듭니다.
- **Hairline** (`{colors.hairline}` — `#E5E7EB`): 1px 테두리(Border), 입력 폼 외곽선, 디바이더에 사용되는 기본 선 색상.



### Text
- **Ink** (`{colors.ink}` — `#13151A`): 디스플레이, 헤드라인, 기본 본문(Body) 등에 쓰이는 기본 텍스트 색상 및 어두운 배경색. 푸른빛이 살짝만 감도는 깊고 무게감 있는 다크 컬러로, 너무 파랗게 뜨지 않으면서도 세련된 느낌을 줍니다.
- **Body Muted** (`{colors.body-muted}` — `#6B7280`): 부가적인 설명, 메타 데이터, 비활성화 텍스트에 사용되는 보조 텍스트 색상.
- **On Primary** (`{colors.on-primary}` — `#FFFFFF`): Primary 색상 배경 위에 쓰이는 텍스트 색상 (보통 흰색).



### Semantic (Validation)
- **Success** (`{colors.semantic-success}`): 유효한 입력 상태. 브랜드의 핵심인 **Primary Blue**를 사용하여 브랜드 일관성을 극대화합니다.
  - Light: `#006EFF` / Dark: `#1A78FF`
- **Error** (`{colors.semantic-error}`): 잘못된 입력(에러) 상태이자 Negative(파괴적) 액션 버튼 컬러.
  - Light: `#F33942` / Dark: **`#FF5560`** (Ruby Red)
- **Warning** (`{colors.semantic-warning}`): 주의가 필요한 상태나 취약한 보안 알림.
  - Light: `#F59E0B` (Amber) / Dark: **`#FF9F0A`** (Premium Orange)

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



### Pop (Avatars & Data)
- **Avatar Palette**: 강렬한 그라데이션 대신, 배경색과 텍스트색의 톤온톤(Tone-on-tone) 대비를 활용한 **은은한 틴트(Subtle Tint)** 스타일을 사용합니다. 애플이나 스트라이프의 하이엔드 대시보드 감성을 전달합니다.
  - **Indigo (Cool)**: `#EEF5FF` (BG) / `#1C4BA4` (Text). 지적이고 세련된 액센트.
  - **Sage (Natural)**: `#F0F4F2` (BG) / `#3E5C54` (Text). 차분한 자연의 녹색이 가미된 그레이.
  - **Sand (Warm)**: `#F6F2EC` (BG) / `#7C6042` (Text). 따뜻하고 고급스러운 베이지 톤.
  - **Mauve (Elegant)**: `#F5F0F5` (BG) / `#6B4F6B` (Text). 은은한 보랏빛이 감도는 우아한 무채색.
  - **Azure (System)**: `#F0F7FF` (BG) / `#0070F3` (Text). 시스템 정체성을 보여주는 맑은 블루.



### Semantic Status Palette (명시적 상태 표시)
정보의 상태(활성, 대기 등)를 전달할 때는 직관적인 표준 시맨틱 컬러를 사용합니다.
- **Success (활성)**: `#ECFDF5` (BG) / `#059669` (Text)
- **Warning (대기)**: `#FFFBEB` (BG) / `#D97706` (Text)
- **Error (중단/실패)**: `#FEF2F2` (BG) / `#DC2626` (Text)

> [!NOTE]
> **Palette Distinction Policy**: 아바타용 팔레트는 디자인의 시각적 깊이를 위한 **장식적(Decorative)** 용도이며, 뱃지용 팔레트는 정보의 정확한 피드백을 위한 **기능적(Functional)** 용도입니다. 이 둘을 분리하여 사용함으로써 세련된 미학과 사용성을 동시에 만족시킵니다.

> [!TIP]
> **Dark Mode Badge & Tag Principle (다크모드 뱃지 가독성 원칙)**
> 다크 모드에서 라이트 모드용 배경색을 그대로 쓰면 눈부심(Glare) 현상이 발생합니다. 다크 모드의 뱃지/태그는 다음 규칙을 따릅니다:
> 1. **Background**: 원색에 **투명도 15~20%**를 적용하여 어두운 배경과 자연스럽게 블렌딩합니다.
> 2. **Text**: 원색보다 **더 밝고 채도가 높은(Vibrant)** 색상을 사용하여 가독성을 확보합니다.
> 3. **Border (선택)**: 배경색이 너무 어두울 경우, 배경과 동일한 색상의 1px 테두리를 0.2 opacity로 추가하여 형태를 강조합니다.



### Dark Mode Color Tokens

> [!IMPORTANT]
> **다크모드 배경 철학: 중성(Neutral) 다크를 유지하라**
> 다크 배경에 블루/쿨 그레이 색조를 과도하게 넣으면 화면이 차갑고 인위적으로 보입니다. Apple macOS/iOS Dark Mode처럼 **블루 언더톤을 배제한 중성(Near-Black) 배경**을 기반으로 하고, 색감은 텍스트와 액센트 컬러를 통해서만 표현합니다.

| Token | Light Mode | Dark Mode | 비고 |
|---|---|---|---|
| `{colors.canvas}` | `#FFFFFF` | `#111111` | 블루 틴트 0% 순수 중립 다크 |
| `{colors.surface-soft}` | `#F8FAFC` | `#1A1A1A` | Pure Neutral Grey 레이어 |
| `{colors.surface-elevated}` | `#FFFFFF` | `#2C2C2E` | 카드 위에 떠 있는 표면(버튼/아코디언/세그먼트 selected). 라이트 모드는 `canvas`와 동일하므로 보더로 분리 |
| `{colors.hairline}` | `#E5E7EB` | `#2A2A2A` | 중성 그레이 구분선 |
| `{colors.ink}` | `#13151A` | `#F2F2F2` | 채도 없는 순수 오프화이트 |
| `{colors.body-muted}` | `#6B7280` | `#999999` | 중립 미드 그레이 |
| `{colors.primary}` | `#006EFF` | `#1A78FF` | 원본 색상 기반, 밝기만 미세 조정 |
| `{colors.primary-hover}` | `#0059CC` | `#3D8EFF` | 다크 배경 호버 피드백 |
| `{colors.on-primary}` | `#FFFFFF` | `#FFFFFF` | **항상 흰색 고정**. Primary 채움 위 텍스트/아이콘/노브용 |

> [!IMPORTANT]
> **"항상 흰색이어야 하는 것"에는 `canvas`가 아닌 `on-primary`를 사용합니다.**
>
> Primary 색 위에 얹히거나(버튼 라벨, 체크 아이콘) Primary 트랙 위에서 움직이는 컨트롤 부품(슬라이더 thumb, 스위치 knob, 라디오 내부 점)은 모드와 무관하게 흰색을 유지해야 시각 정체성이 보존됩니다. `canvas`는 다크 모드에서 `#111`로 반전되므로 이런 용도에 절대 쓰지 마세요.
>
> 적용 대상: `button-primary` 텍스트, 체크박스 체크 아이콘, **`radio[data-checked]` 내부 점**, **`slider-thumb`** (흰 thumb 본체), **`switch-thumb`** knob.

**다크모드 그림자 (Elevation)**: 쿨 블루 기반 그림자는 다크 배경에서 효과가 없으므로, 순수 블랙 기반으로 불투명도를 높여 사용합니다.
- Level 1: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.30)`
- Level 2: `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45)`
- Level 3: `box-shadow: 0 16px 48px rgba(0, 0, 0, 0.60)`

**다크모드 카드(Card) 동작 원칙**:
라이트 모드에서는 순백색 `Canvas` 위에 `hairline` 테두리로 카드를 구분합니다. 다크 모드에서는 테두리 대신 **배경색의 계층(레이어)**으로 깊이를 표현합니다.

| 컴포넌트 | 라이트 모드 | 다크 모드 |
|---|---|---|
| `card-standard` | `Canvas(#FFF)` 배경 + `hairline` 테두리 | `Surface Soft(#1A1A1A)` 배경, **테두리 없음** |
| `card-featured` | `Canvas(#FFF)` 배경 + `Level 2` 그림자 | `Surface Soft(#1A1A1A)` 배경 + `Level 3` 그림자 |
| 섹션 배경 (`Surface Soft` 섹션) | `Surface Soft(#F8FAFC)` | **`Canvas(#111111)`** 로 반전하여 카드와 계층 확보 |

> [!WARNING]
> **카드는 어떤 모드에서도 섹션 배경과 반드시 다른 색이어야 합니다.**
>
> 다크 모드에서는 `canvas`와 `surface-soft` 두 가지 레벨만 존재합니다. 섹션과 카드가 같은 레벨을 쓰면 카드가 배경에 녹아들어 보이지 않습니다.
>
> **규칙**: 섹션 배경이 `Canvas(#111111)` → 카드는 `Surface Soft(#1A1A1A)` / 섹션 배경이 `Surface Soft` → 다크 모드에서 섹션을 `Canvas`로 반전시킵니다.
>
> ✅ **올바른 예**: `Canvas` 섹션 위에 `Surface Soft` 카드
> ❌ **잘못된 예**: `Surface Soft` 섹션 위에 `Surface Soft` 카드 (카드가 사라짐)










## Typography

### Font Family
- **Display**: **`Pretendard Variable`**
  - `font-family: "Pretendard Variable", "Pretendard", system-ui, -apple-system, sans-serif`
  - 큰 제목과 브랜드 톤을 만드는 디스플레이 계열에 사용합니다.
- **Text**: **`Pretendard Variable`**
  - `font-family: "Pretendard Variable", "Pretendard", system-ui, -apple-system, sans-serif`
  - 본문, 버튼, 라벨처럼 반복적으로 읽히는 UI 텍스트에 사용합니다.
- **Monospace**: **`Geist Mono`**
  - `font-family: "Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Monaco, monospace`
  - 코드, 버전, 기술 값 표기에 사용합니다.

### Hierarchy

| Token | Font Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `display-xl` | Pretendard Variable | 80px | 600 | 1.05 | -3.0px | 최상위 히어로 제목 |
| `display-lg` | Pretendard Variable | 56px | 600 | 1.10 | -1.8px | 주요 페이지/섹션 제목 |
| `display-md` | Pretendard Variable | 40px | 600 | 1.15 | -1.0px | 서브 섹션 제목 |
| `headline` | Pretendard Variable | 28px | 600 | 1.20 | -0.6px | 패널, 모달, 카드 그룹 제목 |
| `card-title` | Pretendard Variable | 22px | 500 | 1.25 | -0.4px | 카드 제목 |
| `subhead` | Pretendard Variable | 20px | 400 | 1.40 | -0.2px | 보조 제목, 도입 문장 |
| `body-lg` | Pretendard Variable | 18px | 400 | 1.50 | -0.1px | 도입부 문단, 강조 본문 |
| `body-md` | Pretendard Variable | 16px | 400 | 1.50 | -0.05px | 기본 본문 |
| `body-sm` | Pretendard Variable | 14px | 400 | 1.50 | 0 | 보조 텍스트, 메타 정보 |
| `caption` | Pretendard Variable | 12px | 400 | 1.40 | 0 | 캡션, 작은 보조 정보 |
| `button-lg` | Pretendard Variable | 18px | 500 | 1.50 | -0.18px | 주요 CTA 버튼, 강조 라벨 |
| `button-md` | Pretendard Variable | 16px | 500 | 1.60 | -0.16px | 기본 버튼 라벨 |
| `button-sm` | Pretendard Variable | 14px | 500 | 1.40 | 0 | 보조/유틸리티 버튼, 좁은 영역 |
| `eyebrow` | Pretendard Variable | 13px | 500 | 1.30 | 0.4px | 섹션 라벨, 카테고리 |
| `mono` | Geist Mono | 13px | 400 | 1.50 | 0 | 코드, 버전, 기술 값 표기 |

**Weight Variants (파생 토큰)**
일부 컴포넌트(Toast Title, 카드 마이크로 타이틀, stack-inline 헤딩 등)는 본문 토큰의 **굵기만 weight 600으로 올린 강조 변형**을 사용합니다. 별도 폰트 크기 토큰을 추가하는 대신, 본 토큰 이름에 `-strong` 접미사를 붙여 파생합니다.

- **`body-md-strong`**: `body-md` (16px / 1.50) + weight **500**. 좁은 카드/토스트 타이틀, stack-inline 헤딩에 사용.
- **`body-sm-strong`**: `body-sm` (14px / 1.50) + weight **500**. 인라인 라벨, 필드 강조.

파생 토큰은 항상 base 토큰과 line-height/letter-spacing을 공유하며, **size를 바꾸지 않습니다**. 새로운 사이즈가 필요하면 Hierarchy 테이블의 기존 토큰을 사용하세요.


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
  - `{spacing.xs}`: 4px
  - `{spacing.sm}`: 8px
  - `{spacing.md}`: 16px (컴포넌트 내 기본 여백)
  - `{spacing.lg}`: 24px
  - `{spacing.xl}`: 32px (요소 간 여백)
  - `{spacing.xxl}`: 48px
  - `{spacing.section}`: **120px** (섹션 간의 표준 세로 여백. 하이엔드 테크 감성을 위한 최소 수치)

### Section Layout Principles
NCAI는 사용자가 정보에 압도당하지 않도록 넉넉한 여백을 사용하여 '여유'와 '위계'를 전달합니다.
1. **Section Padding**: 모든 주요 섹션은 상하 **120px** 이상의 여백을 확보하여 각 섹션의 독립성을 유지합니다.
2. **Title Spacing**: 섹션 제목(Display/Headline)과 하위 콘텐츠 사이에는 **64px**의 간격을 두어 시각적 흐름을 명확히 제어합니다.
3. **Footer Anchoring**: 페이지의 가장 마지막 섹션(푸터 바로 위)은 하단에 **240px**의 극적인 여백을 부여합니다. 이는 페이지의 끝을 알리는 강력한 시각적 신호이며, 브랜드의 프리미엄 이미지를 완성하는 핵심 장치입니다.

### Heading–Body Type Pairing

Display 크기 헤딩과 본문 사이의 점프가 지나치게 크면 시각적 위계가 무너집니다. 헤딩 사이즈에 따라 아래 기준으로 바디 타입을 선택합니다.

| 헤딩 토큰 | 헤딩 크기 | 짝이 되는 바디 | 바디 크기 | 비율 | 비고 |
|---|---|---|---|---|---|
| `display-xl` | 80px | `body-lg` | 18px | ≈ 4.4:1 | 히어로 섹션 전용 |
| `display-lg` | 56px | `body-lg` | 18px | ≈ 3.1:1 | 주요 섹션 인트로 |
| `display-md` | 40px | `body-md` | 16px | 2.5:1 | 서브 섹션 인트로 |
| `headline` | 28px | `body-md` | 16px | 1.75:1 | 패널·카드 그룹 |
| `card-title` | 22px | `body-sm` | 14px | ≈ 1.6:1 | 카드 내부 |

**원칙**
- 헤딩이 40px 이상이면 바디는 반드시 `body-lg`(18px) 이상을 씁니다. 40px 미만은 `body-md`(16px)로 충분합니다.
- 비율이 **4:1을 초과**하면 헤딩과 바디가 서로 다른 층위로 분리된 느낌을 주므로, 바디 크기를 올리거나 헤딩 크기를 낮춥니다.
- 바디 컬러는 항상 `{colors.body-muted}`를 사용해 헤딩과 시각적 층위를 구분합니다.

### Vertical Stack Rhythm (Eyebrow → Title → Body)
같은 "Eyebrow → Title → Body" 패턴이라도 컨텍스트의 폰트 스케일이 다르면 간격도 비례해서 달라져야 합니다. 단일 수치 대신 **4-tier 시스템**으로 묶어 일관성을 유지합니다.

| Tier | 용도 | Eyebrow → Title | Title → Body | 헤딩 타이포 | 바디 타이포 |
|---|---|---|---|---|---|
| `stack-hero` | 페이지/섹션 히어로 | **12px** | **32px** (`{spacing.xl}`) | `display-xl` / `display-lg` | `body-lg` (18px) |
| `stack-section` | 갤러리·핸드오프 인트로 | **8px** (`{spacing.sm}`) | **24px** (`{spacing.lg}`) | `display-lg` / `display-md` | `body-lg` (18px) |
| `stack-card` | 카드·모달·시트 타이틀 | **8px** (`{spacing.sm}`) | **12px** | `card-title` (22px) | `body-md` (16px) |
| `stack-inline` | 본문 내 미니 라벨/필드 | **4px** (`{spacing.xs}`) | **8px** (`{spacing.sm}`) | `body-md-strong` (16px) | `body-sm` (14px) |

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

NCAI 시스템은 플랫(Flat)한 디자인을 기본으로 하되, 그림자를 사용하여 위계를 형성합니다. 그림자 컬러는 단순히 검정색이 아닌, **푸른기 있는 그레이(Cool Grey)**를 사용하여 디자인의 맑은 인상과 깊이감을 동시에 유지합니다.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | 그림자 없음, `{colors.hairline}` 1px 테두리 | 캔버스에 놓이는 일반적인 카드, 콘텐츠 영역 |
| Hover / Soft (Level 1) | `box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08)` | 호버 시 살짝 떠오르는 효과를 주는 카드 |
| Floating (Level 2) | `box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12)` | 상단 고정 네비게이션 바, 드롭다운 메뉴 |
| Modal (Level 3) | `box-shadow: 0 16px 48px rgba(15, 23, 42, 0.18)` | 화면 중앙에 뜨는 모달창, 다이얼로그 |

> [!TIP]
> **Cool Grey Shadow Policy**: NCAI는 순수 무채색(#000000) 그림자 대신 미세한 청색광을 머금은 슬레이트 그레이 계열(`rgba(15, 23, 42)`)의 그림자를 사용합니다. 이는 다크 모드와 라이트 모드 간의 시각적 연결성을 높이고, 화면이 파랗게 뜨지 않으면서도 정교하고 지적인 분위기를 연출하는 핵심 기법입니다.








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









## Components

### Buttons

> [!IMPORTANT]
> **Primary 버튼 남용 금지 원칙**
> 파란색(`Primary`) 버튼이 화면에 너무 많으면 사용자의 시선이 분산되어 오히려 핵심 CTA(Call To Action)의 전환율이 떨어집니다. 한 화면에 Primary 버튼은 **단 1개(최대 2개)**로 제한하고, 나머지 액션은 모두 `Secondary`나 `Ghost` 버튼으로 강등(Downgrade)하여 시각적 위계를 확실히 잡아야 합니다.

모든 클릭 가능한 인터랙티브 요소는 위계가 있어야 합니다.
- **`button-primary`**: 배경색 `{colors.primary}`, 텍스트색 `{colors.on-primary}`. 모서리는 `{radius.md}`(10px)로 둥글기를 살짝 조절하여 입력 폼과 통일감을 줍니다. 화면의 최종 목표이자 가장 중요한 단 하나의 액션(예: "가입하기", "결제하기")에만 제한적으로 사용합니다.
- **`button-secondary`**: 배경은 투명 또는 흰색 `{colors.canvas}`, 텍스트는 `{colors.ink}`. 테두리 1px `{colors.hairline}`. 화면 내 대부분의 일반적인 조작(예: "더 알아보기", "필터", "새 사용자 추가" 등 서브 액션)에 사용되는 **실질적인 기본 버튼**입니다.
- **`button-ghost`**: 배경과 테두리가 모두 없는 텍스트 전용 버튼. 취소나 단순 링크 이동 등 가장 덜 중요한 액션에 사용합니다. 호버 시 옅은 회색이 깔립니다.
- **`button-danger`**: 배경색 `{colors.semantic-error}` (Light `#F33942` / Dark `#FF5560`), 텍스트색 `{colors.on-primary}` (흰색). 모서리는 `{radius.md}`(10px). **되돌릴 수 없는 파괴적 액션**(예: "삭제", "영구 차단", "계정 폐쇄")에만 사용합니다. Alert Dialog의 부정(Negative) 변형 액션 버튼이 대표 적용처입니다. 한 화면 1개 원칙은 `button-primary`와 동일하게 적용되며, **`button-primary`와 동시에 사용하지 않습니다**(같은 화면에서 둘 다 등장하면 위계가 충돌합니다).

**Button Sizing & Gaps (버튼 크기 및 간격 규칙):**
- **Height (높이):** 8px 배수 시스템을 기준으로 용도에 따라 나눕니다.
  - **Display (60px):** 랜딩/히어로 영역 전용 초대형 CTA. `display-xl`(80px) 헤드라인과 짝을 이루어 시각적 무게를 맞춥니다. **한 페이지 1회**만 사용합니다(Primary 남용 금지 원칙의 연장). 폰트는 `button-lg`(18px), 좌우 패딩 32px(`{spacing.xl}`).
  - **Large (48px):** 일반 마케팅 페이지 메인 CTA, 폼(Input) 옆 등 표준 강조 액션.
  - **Medium (40px):** 대시보드 내부 기본 버튼 및 폼(Input) 요소 옆.
  - **Small (32px):** 데이터 테이블 내부, 툴바 등 밀도가 높고 공간이 좁은 곳.
- **Gap (간격):** 게슈탈트 근접성의 원리(Proximity)를 따릅니다.
  - **8px (`{spacing.sm}`):** 검색창-검색버튼 등 논리적으로 완전히 하나의 묶음일 때.
  - **12px**: **버튼 그룹 표준 간격**. 취소-확인 등 두 액션이 연관되어 있으면서도 명확히 구분되어야 할 때 가장 이상적인 간격입니다.
  - **16px (`{spacing.md}`):** 서로 다른 기능을 수행하는 독립적인 요소들 사이의 기본 여백. **Display 사이즈 히어로 액션 버튼**은 버튼 자체가 크므로 이 간격을 사용합니다.

**다크모드 버튼 배경 처리 원칙:**
`button-secondary`의 배경은 라이트 모드에서 `Canvas(흰색)`이지만, 다크 모드에서 `Canvas = #111111`로 전환되어 카드 배경(`Surface Soft = #1A1A1A`)보다 **오히려 더 어두워지는 역전 현상**이 발생합니다. 이를 방지하기 위해 다크 모드의 버튼은 카드 배경보다 반드시 밝은 레이어를 사용합니다.

| 버튼 | 라이트 모드 배경 | 다크 모드 배경 |
|---|---|---|
| `button-secondary` | `Canvas(#FFF)` + `hairline` 테두리 | `{colors.surface-elevated}` (테두리 없음, 배경색만으로 구분) |
| `button-secondary:hover` | `Surface Soft(#F8FAFC)` | `#3A3A3C` |
| `button-ghost:hover` | `Surface Soft(#F8FAFC)` | `{colors.surface-elevated}` |




### Cards
- **`card-standard`**: 배경색 `{colors.canvas}`, 테두리 1px `{colors.hairline}`, 모서리 `{radius.lg}`. 가장 널리 쓰이는 기본 컨테이너입니다. 불필요한 그림자는 지양하고 정갈한 테두리로만 표현합니다.
- **`card-featured`**: 요금제의 Pro 플랜처럼 시각적으로 띄우고 싶은 카드는 배경을 `{colors.canvas}`로 하고 깊은 그림자(`Level 2`)를 항상 적용합니다.
- **비율 정책 (Proportions)**: 카드가 어느 한쪽으로 치우쳐 보이지 않도록 **상하좌우 균형 있는 패딩(권장 40px)**을 확보합니다. 가로가 너무 좁거나 세로가 너무 길어 보이지 않는 안정적인 밸런스를 유지하는 것이 중요합니다.

**Typography (타이틀 토큰 — 필수 매핑):**
- **Card Title (Standard)**: `{typography.card-title}` (22px / 500). `card-standard`, `card-featured`의 기본 제목.
- **Card Title (Compact / 좁은 카드)**: `{typography.subhead}` (20px / 400) 또는 굵게 강조 시 `{typography.body-lg}` weight 600. 카드 폭이 360px 이하인 경우 적용.
- **Card Title (Micro / 인포 박스)**: `{typography.body-md}` weight 600 (16px). 알림 카드, 상태 카드 등 한 줄 정보 전달용.
- **Description**: `{typography.body-md}` (16px) 또는 좁은 카드에서는 `{typography.body-sm}` (14px).
- **금지**: 카드 내부에 `display-*`(40px↑) 또는 `headline`(28px) 토큰을 사용하지 마세요. 카드 타이틀이 모달 타이틀보다 커 보이면 위계가 무너집니다.

### Accordion
접을 수 있는 정보 패널. 카드 안에 중첩되는 경우가 많아 **레이어 위계**가 가장 까다로운 컴포넌트입니다.

- **Shape**: `{radius.lg}` (16px). 카드와 동일한 곡률로 통일감을 유지합니다.
- **Border**: 라이트 모드 1px `{colors.hairline}`. 다크 모드는 보더 없이 배경 톤 대비로만 경계를 표현합니다.
- **Trigger**: 높이 약 56px, 좌우 패딩 20px, 폰트 `{typography.body-md}` weight 500. Chevron 아이콘 16px, `{colors.body-muted}`.
- **Trigger Hover**: 라이트 `Surface Soft(#F8FAFC)`, 다크 `#3A3A3C`.
- **Open Divider**: 트리거가 열렸을 때 본문과의 구분을 위해 `box-shadow: inset 0 -1px 0 {colors.hairline}`로 1px 헤어라인 디바이더를 그립니다. 추가 보더를 쓰지 않아 라운드 모서리 잘림을 방지합니다.
- **Panel**: 상 16px / 하 20px / 좌우 20px 패딩. 본문 텍스트는 `{typography.body-sm}` (14px), 색상 `{colors.body-muted}`.
- **Overflow**: `.accordion-item`은 `overflow: hidden`으로 부모 라운드가 트리거 hover 배경을 클리핑하도록 합니다.
- **Panel Expand/Collapse 모션 (공용 표준)**: 모든 collapsible 류 패널(Accordion, Sidebar Collapsible 등)은 동일한 모션 토큰을 공유합니다.
  - `:root`에 `interpolate-size: allow-keywords`를 선언해 `height: 0 ↔ auto` 트랜지션을 활성화.
  - 패널에 `keepMounted` 적용 후, 기본 상태 `height: auto`, 닫힘 상태(`[data-starting-style]`, `[data-ending-style]`, `[data-closed]`)에서 `height: 0` + `padding-top/bottom: 0`.
  - Duration **240ms**, easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (out-quad 계열). `height`와 `padding`을 같은 곡선·시간으로 함께 트랜지션해 콘텐츠가 "위로 말려 올라가는/펼쳐지는" 자연스러운 모션을 만듭니다.

**다크모드 레이어 역전 방지 (필수):**
`accordion-item`의 기본 배경은 `Canvas`이지만, 다크 모드에서 `Canvas = #111111`로 전환되어 부모 카드(`Surface Soft = #1A1A1A`)보다 **오히려 더 어두워지는 역전 현상**이 발생합니다. 이때 아코디언이 페이지에서 **함몰된 인풋 필드처럼** 보여 클릭 가능한 패널로 인식되지 않습니다. 다크 모드에서는 카드 배경보다 반드시 한 단계 밝은 레이어로 올려 "떠 있는 패널"의 인상을 유지합니다. (`button-secondary` 다크모드 처리와 동일 원칙.)

| 영역 | 라이트 모드 배경 | 다크 모드 배경 |
|---|---|---|
| `accordion-item` | `Canvas(#FFF)` + `hairline` 테두리 | `{colors.surface-elevated}` (테두리 없음) |
| `accordion-trigger:hover` | `Surface Soft(#F8FAFC)` | `#3A3A3C` |
| Open divider | `hairline` inset shadow | `hairline` inset shadow |

**금지**: 아코디언 배경을 `Surface Sunken`(#EEF1F5 / #232326)으로 두지 마세요. "선택된 입력 필드"처럼 보여 클릭 가능한 패널이 아닌 폼 요소로 오인됩니다. 또한 패널이 열렸을 때 본문에 별도 배경색을 깔지 않습니다 — 트리거와 본문은 동일한 배경 + 헤어라인 디바이더 한 줄로 위계를 표현합니다.

### Switch
온/오프 상태를 즉시 전환하는 토글. 체크박스가 "제출 시 반영"이라면 스위치는 "즉시 반영"이라는 mental model을 가집니다.

- **Knob**: 흰색 고정(`{colors.on-primary}`), 매우 옅은 single shadow(`0 1px 2px rgba(0,0,0,0.15)`)로만 부동감 표현. 강한 그림자는 미니멀 원칙에 어긋납니다.
- **Track Color**: Off — `{colors.hairline}`, On — `{colors.primary}`.
- **Transition**: `cubic-bezier(0.4, 0, 0.2, 1)` easing, 200ms 단일 슬라이드. 부가 애니메이션 없음 — 미니멀 원칙에 따라 transform 하나로 깔끔하게.

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

**인풋 + 버튼 조합 정책 (Input Group Policy):**
인풋 필드와 버튼이 가로로 나열될 때, 시각적인 답답함을 해소하고 명확한 조작 영역을 확보하기 위해 다음 규칙을 준수합니다.
1. **간격 (Gap)**: 8px(`{spacing.sm}`)은 너무 좁아 보이므로, **12px**를 권장합니다. (8px와 16px 사이의 균형)
2. **높이 일치 (Height Alignment)**: 인풋과 버튼의 높이는 반드시 동일하게(기본 48px) 맞춰야 합니다.
3. **내부 여백 (Padding)**: 인풋 내부 텍스트가 테두리에 너무 붙지 않도록 최소 16px 이상의 좌우 여백을 확보합니다.


### Modal
사용자의 집중이 필요한 중요한 정보를 제공하거나 입력을 유도할 때 사용합니다.
- **Title**: `{typography.headline}` (28px)를 사용합니다. 너무 크지 않은 타이틀로 세련된 위계를 유지합니다. **모달 폭이 480px 이하인 경우** `{typography.card-title}` (22px)로 한 단계 낮춰 컨테이너 비율을 유지합니다.
- **Description / Body Text**: `{typography.body-md}` (16px). 좁은 모달에서도 동일하게 유지합니다. 모달 본문에 `body-sm`(14px) 같은 보조 텍스트 토큰을 사용해 가독성을 떨어뜨리지 마세요.
- **Close Button**: 닫기 버튼은 명확한 인지를 위해 아이콘 크기 **24px**, 전체 터치 영역 **40x40px**를 확보합니다.
- **Width**: 표준 모달은 **440px**(`min(440px, calc(100vw - 32px))`)를 권장합니다. 폼이 많은 경우에만 560px까지 허용합니다.
- **Min-Height**: **260px**. 폭 440px 기준 약 **1.7 : 1 가로형 비율**을 형성하여 납작함을 방지하면서도 과하게 길지 않게 균형을 잡습니다. 콘텐츠가 짧아도 이 최소 높이는 유지하며, 키 큰 모달이 필요할 땐 콘텐츠가 자연스럽게 늘어나도록 둡니다.
- **Footer Anchoring**: 주요 액션 버튼(확인/닫기 등) 또는 버튼 묶음은 카드 **하단 우측**에 정착시킵니다(`margin-top: auto; align-self: flex-end;`). 버튼이 카드 전체 폭으로 stretch되어 좌측까지 늘어지지 않도록 자연 너비를 유지하며, 본문이 짧을 때도 액션이 타이틀에 붙어 올라오지 않게 합니다. 복수 버튼(Cancel + Confirm)은 12px 간격으로 묶어 우측 정렬합니다. Header / Body / Footer 위계를 시각적으로 명확히 합니다.
- **Padding (여백)**:
  - **Flat 컴팩트 모달**(섹션 구분 없이 단일 카드로 구성될 때, 기본 권장): 상하좌우 **32px**(`{spacing.xl}`) **균일 패딩**. 네 변의 여백을 동일하게 맞춰 떠 있는 카드의 시각적 균형을 잡습니다.
  - **Sectioned 모달**(Header / Body / Footer가 명시적 영역으로 분리될 때):
    - Header & Footer: 상하 **16px**, 좌우 **24px**.
    - Body: 상하좌우 모두 **24px**(`{spacing.lg}`).
- **Shape**: `{radius.xl}` (20px)을 사용합니다. 카드(`radius.lg` 16px)보다 한 단계 더 부드럽게 처리해 떠 있는 컨테이너 특유의 정서를 강조합니다.
- **Border**: **없음**. 모달은 `{shadow.level-3}`만으로 충분히 떠 있는 느낌을 형성하므로 hairline 보더를 사용하지 않습니다. 보더가 있으면 그림자와 이중 경계가 만들어져 가장자리가 답답해집니다. 다크 모드에서도 동일하게 보더를 제거하고 `Surface Soft` 배경 톤 대비로만 경계를 표현합니다.
- **Elevation**: `{shadow.level-3}`와 어두운 배경(Scrim)을 조합하여 강력한 수직 계층을 형성합니다.
- **금지**: 모달 내부에 `display-*` 토큰(40px↑) 사용 금지. 모달은 페이지 히어로가 아닙니다. 콘텐츠 양에 맞춰 카드를 납작하게(높이 < 220px) 만들지 마세요. 본문에 `body-sm`(14px) 같은 보조 텍스트 토큰도 사용하지 않습니다.

### Alert Dialog
되돌릴 수 없는 액션을 확인하거나 단순 정보를 알릴 때 사용하는 컴팩트 다이얼로그. Modal의 컨펌 변형으로, 정보 위계가 단순할 때 시선을 중앙에 집중시키고 컨테이너 자체를 한 단계 작게 처리합니다.
- **Text Alignment**: 타이틀과 본문 모두 **center** 정렬. 정보가 짧고 단일 결정에 초점이 맞춰지는 컨펌 UI 특성을 반영합니다.
- **Title**: `{typography.body-md}` (16px) **weight 600** (semibold). 컴팩트 컨펌 UI는 본문보다 한 단계만 위에 두어 위계를 절제합니다.
- **Description**: `{typography.body-sm}` (14px) regular. Modal 본문(16px)에서 한 단계 다운.
- **Width**: **400px**(`min(400px, calc(100vw - 32px))`). Modal 440px보다 한 단계 좁힌 컴팩트 폭.
- **Padding**: 상 **40px** / 좌우 **24px**(`{spacing.lg}`) / 하 **24px**. 상단을 두텁게 잡아 타이틀을 시각적 중앙으로 띄웁니다.
- **Vertical Rhythm**: Title ↔ Description **12px**, Description ↔ Actions **40px**. 본문과 액션 사이를 넉넉히 띄워 컨펌 결정에 호흡을 줍니다.
- **Footer (Actions)**: 카드 **하단 풀-너비 행**으로 배치하고, 버튼은 `flex: 1`로 **균등 분할**합니다. Modal의 우측 정착(footer-right-anchor)을 **적용하지 않습니다**.
  - **Default(기본) 듀얼**: `button-secondary` (취소) + `button-primary` (확인/저장/계속). 일반 컨펌 액션.
  - **Negative(부정) 듀얼**: `button-secondary` (취소) + `button-danger` (삭제/차단/폐쇄). **되돌릴 수 없는 파괴적 액션** 전용. `button-primary`와 `button-danger`를 같은 다이얼로그에서 동시에 사용하지 않습니다.
  - **단일 버튼**: `button-primary` 하나만 풀-너비로 배치. 단순 알림 확인용.
  - 공통: 기본 사이즈(**48px Large**), 두 버튼 사이 간격 **10px**.
- **Min-Height**: Modal의 260px 최소 높이 규칙을 **해제**합니다. Alert Dialog는 콘텐츠에 맞춰 자연스럽게 컴팩트해지는 것이 정상입니다.
- **Shape / Elevation**: Modal과 동일(`radius.xl` 20px, `shadow.level-3`, 보더 없음).
- **버튼 토큰**: 반드시 design-system.md에 정의된 `button-primary` / `button-secondary`만 사용. 신규 버튼 변형(soft, tinted 등) 생성 금지.
- **금지**: 우측 정렬 풋터(우측 정착), 자동 너비 버튼, `card-title` 이상의 타이틀, 신규 버튼 토큰(반드시 `button-primary` / `button-secondary`만 사용).

### BottomSheet
모바일/태블릿에서 하단에서 올라오는 임시 컨테이너. 모달의 가로형 변형으로 취급하며 타이틀 위계는 동일하게 적용합니다.
- **Title**: `{typography.headline}` (28px). 시트 폭이 480px 이하이거나 콘텐츠가 1~2개 액션 정도로 단순한 경우 `{typography.card-title}` (22px)로 다운그레이드합니다.
- **Description**: `{typography.body-md}` (16px). 한 줄 안내가 길면 두 줄까지 허용하며, 그 이상은 Body 콘텐츠로 분리합니다.
- **Padding**: 단일 카드 컴팩트 구성은 상하좌우 **32px**(`{spacing.xl}`) 균일 패딩(기본 권장). 섹션이 분리된 큰 시트는 Header 상 **20px** / 하 **12px**, 좌우 **24px**. Body 상하좌우 **24px**.
- **Shape**: `{radius.xl}` (20px). 모달과 동일하게 카드보다 한 단계 부드러운 가장자리로 떠 있는 느낌을 강조합니다.
- **Border**: **없음**. 모달과 동일한 원칙. `{shadow.level-3}` + Surface 톤 대비로만 경계를 표현합니다.
- **Drag Handle**: 시트 상단 중앙에 **36x4px** rounded bar (`rgba(0,0,0,0.16)` light / `rgba(255,255,255,0.24)` dark). 핸들과 타이틀 사이 간격 **12px**.
- **Elevation**: `{shadow.level-3}` + Scrim. **Surface는 `{colors.canvas}` 사용** — Modal과 동일 배경을 유지하여 반응형 시트 페어(데스크톱 Modal ↔ 모바일 BottomSheet)의 시각 정체성을 통일합니다. 시트 내부 hover/active 신호는 `{colors.surface-soft}`로 표현되므로, 컨테이너 자체를 surface-soft로 두면 호버가 사라집니다.
- **금지**: `display-*` 토큰, 카드보다 큰 타이틀, 강한 컬러 배경, hairline 보더.

**Sheet Action Item** (시트 내부 액션 리스트 항목)

BottomSheet 본문에 세로로 쌓이는 풀-너비 액션 행. iOS Action Sheet / Material List Item의 NCAI 변형으로, **시트 내부 전용 리스트 버튼**입니다. Menu Item이 좁은 popup 안의 dense 리스트(높이 32~36px)라면, Sheet Action은 시트 폭 전체를 차지하는 호흡 있는 터치 타겟(높이 48~52px)입니다. 단독 `<button>`이 아니라 시트 컨텍스트 안에서만 사용합니다.

- **Container**: `<ul>` → `<li>` → `<button>` 또는 `<a>`. 시트 Title/Description 아래 `{spacing.sm}` (8px) 간격, 액션 풋터(취소 버튼 등) 위 `{spacing.sm}` 간격으로 분리.
- **Contained alignment**: 리스트는 시트 본체의 좌우 패딩(`{spacing.xl}` = 32px) **내부에 정착**합니다. 풋터의 취소 버튼이 같은 좌우 여백 안에 있으므로 액션 리스트도 동일한 여백을 공유해야 시트 전체의 인너 컨테이너 정렬이 일관됩니다. *액션 항목의 호버 배경을 시트 가장자리까지 늘이지 마세요 — 풋터 버튼(여백 있음) ↔ 액션 항목(edge-to-edge) 간 시각 충돌이 발생합니다.*
- **Size**: 높이 **48px** (기본) / **52px** (아이콘 + 보조 텍스트 2줄 구성). 패딩 `12px {spacing.md}` (16px — 항목 내부 좌측 여백).
- **Radius — 풋터 버튼과 동일 토큰 사용 (`{radius.md}` = 10px)**: 같은 시트 안에서 함께 보이는 인터랙티브 요소는 라운딩 토큰을 통일합니다. 액션 항목만 `{radius.sm}` (8px), 풋터 취소/확인 버튼은 `{radius.md}` (10px)처럼 1~2px 차이가 나면 정렬은 같지만 모서리 곡률만 미묘하게 달라 "잘못 정렬된 느낌"이 발생합니다. **규칙**: *시트·다이얼로그·드로어 같은 컨테이너 안에 풀-너비 인터랙티브 요소(버튼, 액션 항목, 입력)가 함께 놓일 때, 라운딩은 그 컨테이너에서 가장 큰 요소(보통 풋터 버튼) 기준으로 통일합니다.* 호버 배경은 이 통일된 라운딩 안에 contained pill로 표시됩니다.
- **Typography**: `{typography.body-md}` (16px) / weight 400 / `{colors.ink}`. Menu Item(14px)보다 한 단계 큰 본문 위계 — 시트가 화면 하단을 차지하는 큰 컨테이너이기 때문에 라벨도 또렷하게 읽힙니다.
- **Layout**: `display: flex; align-items: center; gap: {spacing.md}` (16px). 좌측 정렬, 텍스트 + 선택적 아이콘/보조 라벨.
- **Default**: background `transparent`, color `{colors.ink}`.
- **Hover**: background `{colors.surface-soft}` — Sidebar Item / Menu Item과 동일 토큰. 반응형 시트는 데스크톱(Modal)과 모바일(BottomSheet) 모두 **`{colors.canvas}` 배경으로 통일**되므로, 호버 토큰도 단일 `surface-soft`로 통일하여 두 변형의 인터랙션 신호가 정확히 일치합니다. *임의의 `rgba(0,0,0,0.04)` 오버레이는 디자인 시스템 컬러 토큰을 벗어나므로 사용하지 않습니다.*
- **Destructive Action**: 텍스트와 아이콘 모두 `{colors.semantic-error}`. 시트 안에서 시각적으로 분리하기 위해 **리스트 최하단에 배치**하고, 위 항목과 `{spacing.sm}` 간격을 둡니다. *주의: 같은 시트에 destructive 항목이 2개 이상이면 시트가 아닌 Alert Dialog로 분리하세요.*
- **금지**: 아이콘 뒤 컬러 배경 박스, 우측 chevron(시트는 navigation이 아닌 액션 셀렉터), 항목 간 hairline divider(여백으로 충분), Primary 컬러 채움 행.

**Sheet Action Item — 아이콘 처리** (Sidebar와 동일 패턴)

시트 액션은 아이콘 + 라벨 조합이 가장 흔합니다. 라벨 텍스트와 아이콘 컬러를 **분리해서 표현**하여 라벨이 시선을 먼저 받고 아이콘이 부가 단서로 따라가도록 합니다. Sidebar Item과 정확히 같은 규칙을 따릅니다.

- **Icon Size**: **20px** (Sidebar 18px보다 한 단계 큼 — 시트의 큰 행 높이에 맞춤). Stroke-based, `currentColor`.
- **Icon Color (Default)**: 부모 텍스트 컬러(`{colors.ink}`)를 상속하되 **`opacity 0.75`** 적용. 텍스트보다 한 단계 톤 다운하여 라벨이 우위에 서도록 합니다.
- **Icon Color (Hover/Active)**: `opacity 1`로 복귀. 인터랙션 시점에 아이콘과 라벨이 동등한 무게로 정렬됩니다.
- **Destructive Action 아이콘**: 텍스트와 동일하게 `{colors.semantic-error}` 솔리드, opacity 적용하지 않습니다. 위급도 신호는 톤 다운하지 않습니다.
- **Transition**: `opacity 100ms ease, background 100ms ease`. Sidebar와 동일 토큰.
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
  - `left`: **`min(320px, 85vw)`** 모바일 네비게이션 폭.
- **Background**: `{colors.canvas}`. BottomSheet처럼 `Surface Soft`를 쓰지 않습니다 — Drawer는 본문과 동등한 작업 표면을 제공.
- **Border**: **없음**. 가장자리에 붙으므로 보더 대신 `{shadow.level-3}` + Scrim으로 분리.
- **Border Radius**: **0**. 화면 edge에 정렬되는 변은 라운딩하지 않습니다. Modal/BottomSheet의 `radius.xl`과 달리 Drawer는 직선으로 마감하여 "정착한 패널"의 인상을 줍니다.
- **Elevation**: `{shadow.level-3}` + 반투명 Scrim (Modal/BottomSheet와 동일).
- **Motion**: `transform 240ms cubic-bezier(0.22, 1, 0.36, 1)`. `right` 변형은 `translateX(100%) → 0`, `left`는 `translateX(-100%) → 0`.

**Structure (Header / Body / Footer)**
Drawer는 BottomSheet의 단일 컨테이너와 달리 **3구역 위계**를 명시합니다.

- **Header**: 상하 `{spacing.lg}` (24px) / 좌우 `{spacing.xl}` (32px). 하단 `1px solid {colors.hairline}`로 Body와 분리. 우측에 32×32 닫기 버튼(`drawer-close`) 정렬.
  - **Title**: `{typography.card-title}` (22px). Modal과 동일 위계 — `headline`(28px) 이상은 금지.
  - **Description** (선택): `{typography.body-md}` (16px), `{colors.body-muted}`. 1~2줄로 제한.
- **Body**: 상하 `{spacing.lg}` / 좌우 `{spacing.xl}`. `overflow-y: auto`로 긴 컨텐츠 스크롤 허용. 섹션 간 `gap: {spacing.lg}` (24px).
  - 섹션 라벨은 `{typography.body-sm}` weight 500 / `{colors.body-muted}` (Sidebar section label과 동일 톤).
- **Footer**: 상 `{spacing.md}` (16px) / 하 `{spacing.md}` / 좌우 `{spacing.xl}`. 상단 `1px solid {colors.hairline}`. 액션은 **우측 정착**(Modal과 동일), `gap: {spacing.sm}` (8px). 풀-너비 균등 분할은 적용하지 않습니다 — 그건 Alert Dialog/BottomSheet 컴팩트의 역할.

**Close Affordance**
- 헤더 우측 상단에 32×32 ghost 버튼 (`x` 아이콘 18px, `{colors.body-muted}`). hover 시 `{colors.surface-soft}` 배경.
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
- **Transition**: `background 100ms ease, color 100ms ease`.

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
- Collapsed = 0deg (오른쪽), Expanded = 90deg (아래). `transform 160ms ease`로 부드럽게 회전.

**Badge (알림 카운트)**
- Min-width `18px` / height `18px` / radius `9px`. Font 11px / weight 600.
- **Status 시그널**이므로 `Semantic Status Palette`를 사용합니다.
  - Light: `#DC2626` BG / `#FFFFFF` Text (Error solid — active 상태의 surface-soft 배경 위에서도 또렷하게 대비되도록 틴트 대신 솔리드 채움 사용)
  - Dark: `#FF5560` BG / `#FFFFFF` Text
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
- **Padding**: Drawer 내부에서 sidebar 컨테이너 패딩을 `{spacing.md} {spacing.sm}`로 다운그레이드. 데스크톱의 `12px 10px`보다 살짝 여유를 두어 모바일 터치 리듬에 맞춤.

**Header (모바일 한정)**
- 브랜드 마크(또는 페이지 타이틀) + 우측 32×32 닫기(`x`) 버튼. Drawer 표준 헤더와 동일.
- `top-nav`가 Drawer 위에 그대로 노출되지 않으므로, Drawer 내부 헤더가 브랜드 정체성을 잠시 대신합니다.

**Item / Sub-item 스펙**
- 데스크톱과 **동일**. 높이 36px (top-level) / 32px (sub-item), 들여쓰기 28px, surface-soft active. 모바일에서 별도로 폰트를 키우거나 padding을 부풀리지 않습니다 — 디자인 언어 일관성이 더 중요합니다.
- 단, 터치 타겟이 부족하다고 판단되면 아이템 높이만 **40px**까지 상향 가능 (디자인 토큰화하여 일괄 관리).

**인터랙션**
- 트리거 클릭 → Drawer 슬라이드 인 (240ms ease-out).
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
- **Enter**: 우측에서 16px 슬라이드 + 페이드 인. `cubic-bezier(0.22, 1, 0.36, 1)`, **280ms**.
- **Exit**: 우측으로 8px 슬라이드 + 페이드 아웃. `cubic-bezier(0.4, 0, 1, 1)`, **180ms**.
- **Auto-dismiss**: 기본 **5초**. 호버 시 타이머 일시 정지, 포커스 시에도 동일.
- **스택 재정렬**: 새 토스트 추가 시 기존 토스트는 200ms ease-out으로 자연스럽게 아래로 밀려납니다.

**Accessibility**
- ARIA: `role="status"` (Positive/Info) 또는 `role="alert"` (Negative/Warning).
- `aria-live`: 중립은 `polite`, 부정/경고는 `assertive`.
- 닫기 버튼은 키보드 포커스 시 2px Primary 컬러 outline을 표시합니다.








### Icons
인터페이스 전반에 사용되는 SVG 아이콘. `currentColor`로 정규화하여 어떤 텍스트 컬러에도 자연스럽게 동조합니다.

- **Sizing**: 14px(보조) / 16px(인라인 본문) / 18px(Sidebar 항목, 닫기 버튼) / 20px(버튼 옆) / 24px(기본). 항상 짝수 px만 사용.
- **Color**: SVG `stroke`/`fill`은 `currentColor`로 두고, 부모의 텍스트 컬러를 상속받습니다. 별도 색을 지정할 때는 `{colors.ink}` / `{colors.primary}` / `{colors.body-muted}` / `{colors.semantic-*}` 중 하나만 사용.
- **Stroke Width**: 1.5px(16~20px) / 1.75px(24px). 미세한 굵기 차이로 시각 무게를 일정하게 유지합니다.
- **Decorative vs Meaningful**: 라벨이 함께 있는 아이콘은 `aria-hidden="true"`, 아이콘 단독 버튼은 `aria-label` 필수.
- **금지**: 아이콘 뒤에 배경색 박스 두르기(Don'ts 항목 참조), 컬러 그라데이션, 멀티컬러 아이콘. 모든 아이콘은 단색.

### Avatar
사용자/팀 식별을 위한 작은 원형 마크. Colors > Pop 팔레트(`Indigo`/`Sage`/`Sand`/`Mauve`/`Azure`)의 **장식적 틴트**를 그대로 사용합니다.

- **Shape**: `{radius.full}` (50%). 정사각 컨테이너에 이미지/이니셜 중앙 정렬.
- **Sizes**: `avatar-sm` 24px / `avatar` 32px(기본) / `avatar-lg` 40px / `avatar-xl` 56px.
- **Typography**: 이니셜은 컨테이너 폭의 **40%** 크기 / weight 600 / Pop 팔레트의 Text 컬러.
- **Image Fallback**: 이미지가 없거나 로드 실패 시 이니셜로 자동 폴백 (Base UI `Avatar.Fallback`).
- **금지**: Semantic Status Palette(Success/Warning/Error) 컬러를 아바타에 사용 금지 — 상태 정보로 오인됨. 그림자, 외곽 링도 사용하지 않습니다.

### Badge
정보의 상태나 카테고리를 알리는 작은 라벨. Colors > Semantic Status Palette를 따릅니다.

- **Shape**: `{radius.pill}` (9999px).
- **Size**: 높이 22px, 좌우 패딩 10px, gap 4px.
- **Typography**: `{typography.caption}` (12px) weight 500.
- **Variants**:
  - `badge-success` (활성): BG `#ECFDF5` / Text `#059669`
  - `badge-warning` (대기): BG `#FFFBEB` / Text `#D97706`
  - `badge-error` (중단/실패): BG `#FEF2F2` / Text `#DC2626`
  - `badge-ink` (신규/중립): BG `{colors.ink}` / Text `{colors.on-primary}` — Solid Ink Style.
- **Dot Variant**: 텍스트 앞에 6px 원형 점(`●`)을 두어 라이브 상태(온라인/검토 중 등)를 강조할 수 있습니다.
- **Dark Mode**: Dark Mode Badge & Tag Principle을 따라 BG는 원색에 투명도 15~20%, Text는 더 밝고 채도 높은 색으로 전환.
- **금지**: 그림자, 그라데이션, 보더(`badge-ink` 제외).

### Checkbox / Radio
선택 컨트롤. **Checkbox는 "제출 시 반영"**, **Switch는 "즉시 반영"**, **Radio는 "그룹 내 단일 선택"**으로 mental model을 분리합니다.

- **Checkbox**
  - **Box**: 18×18, `{radius.sm}` (6px), 1px `{colors.hairline}` 보더, 배경 `{colors.canvas}`.
  - **Checked**: 배경 `{colors.primary}`, 체크 아이콘 14px `{colors.on-primary}` (Primary 위 흰색 고정).
  - **Indeterminate**: 배경 `{colors.primary}` + 14×2px 흰색 가로 막대(`{colors.on-primary}`).
  - **Focus**: 보더 컬러 `{colors.primary}`로 변경 (전역 정책).
- **Radio**
  - **Outer**: 18×18, `{radius.full}`, 1px `{colors.hairline}` 보더, 배경 `{colors.canvas}`.
  - **Checked**: 보더 `{colors.primary}` 1.5px, 내부 점 8px 원형 `{colors.on-primary}` 위 `{colors.primary}` 배경. (다크 모드에서도 내부 점은 `{colors.on-primary}` 고정.)
- **Label**: 우측에 `{spacing.sm}` (8px) 간격, `{typography.body-md}` (16px) / `{colors.ink}`. 라벨 전체가 클릭 영역.
- **Group Spacing**: 세로 그룹은 `{spacing.sm}` (8px) 행 간격, 가로 그룹은 `{spacing.lg}` (24px) 간격.
- **금지**: 라운드 모서리를 풀(`pill`)로 만들기, 체크 아이콘에 Primary 외 컬러 사용, 라디오 내부 점에 `canvas`/그 외 컬러 사용.

### Field / Fieldset / Form
폼 구조 요소. 의미 있는 그루핑과 라벨링을 통해 접근성과 시각 위계를 동시에 만듭니다.

- **Field (단일 필드 묶음: Label + Control + Description/Error)**
  - **Layout**: 세로 스택, gap `{spacing.xs}` (4px) — `stack-inline` 티어와 동일.
  - **Label**: `{typography.body-sm}` weight 500 / `{colors.ink}`. Control 위 4px 간격.
  - **Description (Help)**: `{typography.caption}` (12px) / `{colors.body-muted}`. Control 아래 4px.
  - **Error**: `{typography.caption}` / `{colors.semantic-error}`. Description과 동일 위치(둘 다 있으면 Error가 Description 대체). Control 보더는 `{colors.semantic-error}` (전역 정책).
- **Fieldset (관련 필드 그룹 컨테이너)**
  - **Legend**: `{typography.body-md}` weight 600 / `{colors.ink}`. 아래쪽 `{spacing.md}` (16px) 간격.
  - **Border**: 없음. 시각적 그룹화는 spacing과 legend 위계로만.
  - **Field Gap**: 내부 필드 간 `{spacing.md}` (16px).
- **Form**
  - **Layout**: 세로 스택, 필드 간 `{spacing.md}` (16px). 섹션(Fieldset) 간 `{spacing.xl}` (32px).
  - **Submit**: 우측 정렬 또는 풀-너비. 폼 마지막에서 `{spacing.lg}` (24px) 상단 간격.
  - **Submission Error Summary**: 폼 상단에 `badge-error` 또는 `field-error` 톤의 한 줄 메시지로 노출.

### Inputs — Specialized

> **공통 원칙**: 모든 입력 변형은 기본 `text-input`의 토큰(높이 48px, `{radius.md}` 10px, 1px `{colors.hairline}`, 좌우 패딩 16px)을 상속합니다. 변형별 특수 규칙만 아래에 명시합니다.

#### Autocomplete / Combobox / Select
드롭다운 리스트와 결합된 입력 컨트롤. **Autocomplete**는 자유 입력 + 추천, **Combobox**는 입력 + 사전 정의 목록, **Select**는 입력 없이 목록 선택만.

- **Trigger**: 우측 끝에 24×24 `chevron-down` 아이콘 버튼. 클릭 시 popup 토글.
- **Popup (Listbox)**
  - **Background**: `{colors.canvas}`, 1px `{colors.hairline}`, `{radius.md}` (10px), `{shadow.level-2}`.
  - **Width**: 트리거와 동일 폭(min-width = trigger width). max-height 280px, 초과 시 스크롤.
  - **Offset**: 트리거 아래 `8px` 간격(`--floating-offset`), 뷰포트 가장자리 `16px` collision padding.
- **List Item**
  - **Height**: 36px, 좌우 패딩 12px, gap 8px, `{typography.body-sm}` (14px) / `{colors.ink}`.
  - **Hover**: `{colors.surface-soft}`.
  - **Selected (Select.ItemIndicator)**: 좌측에 16px check 아이콘(`{colors.primary}`) 노출. weight는 default 유지.
  - **Highlighted (키보드 탐색)**: `{colors.surface-soft}` (hover와 동일).
- **Empty State**: `{typography.body-sm}` / `{colors.body-muted}`, padding 12px 16px. "검색 결과가 없습니다." 같은 한 줄 안내.
- **Select-specific**: 입력란이 아니라 trigger 자체가 선택값을 표시. trigger 텍스트는 `{typography.body-md}` (16px) / `{colors.ink}`, placeholder는 `{colors.body-muted}`.
- **금지**: Popup에 그라데이션 배경, Primary 채움 행(highlight는 `surface-soft`로 통일).

#### Number Field
숫자 증감 입력. 좌우 증감 버튼 + 중앙 숫자 입력의 grouped 컨트롤.

- **Group**: 1px `{colors.hairline}` 보더로 감싸고, `{radius.md}` (10px) + `overflow: hidden`으로 내부 버튼 경계 클리핑.
- **Stepper Button**: 40×48 (전체 그룹 높이 48px), 배경 `{colors.canvas}`, hover `{colors.surface-soft}`. 텍스트 `{typography.body-md}` weight 500.
- **Input**: 중앙 정렬(`text-align: center`), 보더 없음(그룹이 보더 담당), 폭 80px.
- **Disabled**: 버튼 opacity 0.4, cursor not-allowed.

#### OTP Field
일회용 인증 코드 입력. n자리(보통 4/6자리) 개별 셀.

- **Cell**: 48×56(살짝 세로로 긴 비율), `{radius.md}` (10px), 1px `{colors.hairline}`, 배경 `{colors.canvas}`, `{typography.headline}` (28px) weight 600 / 중앙 정렬.
- **Cell Gap**: `{spacing.sm}` (8px). 셀이 6개를 넘어가면 3개 단위로 그룹 사이를 `{spacing.md}` (16px)로 벌려도 됨.
- **Focus**: 보더 `{colors.primary}` 1.5px (전역 정책).
- **Filled**: 텍스트 `{colors.ink}`. 자동 다음 셀로 포커스 이동(Base UI `OTPField` 기본 동작).
- **Accessibility**: 첫 셀에만 `aria-label="인증 코드"`를 두고, 나머지 셀은 "인증 코드 N번째 자리" 라벨로 분리.

### Menu / Context Menu
키보드 탐색이 가능한 드롭다운 메뉴. **Menu**는 명시적 트리거 버튼, **Context Menu**는 우클릭/길게 누름으로 호출.

- **Popup**: Autocomplete Popup과 동일 토큰 (`{colors.canvas}` / 1px `{colors.hairline}` / `{radius.md}` / `{shadow.level-2}`). min-width 200px.
- **Menu Item**
  - 높이 36px, 좌우 패딩 12px, gap 10px, `{typography.body-sm}` (14px) / `{colors.ink}`.
  - 좌측 16px 아이콘(선택), 우측 단축키 hint(`{colors.body-muted}`, `{typography.caption}`).
  - **Hover/Highlighted**: `{colors.surface-soft}`.
  - **Destructive Item**: 텍스트 `{colors.semantic-error}`. 아이콘도 동일 색.
- **Checkbox/Radio Item**: 좌측 16px indicator 영역, 체크 시 16px check 아이콘 `{colors.primary}`.
- **Separator**: 1px `{colors.hairline}`, 상하 margin 4px.
- **Submenu**: 우측 화살표(`chevron-right`, 14px, `{colors.body-muted}`). hover 시 우측에 popup 펼침.
- **Offset**: 트리거에서 `8px` 간격(`--floating-offset`).
- **금지**: 메뉴 항목 좌측에 컬러 액센트 바, Primary 채움 hover.

### Navigation Menu
사이트 1차 내비게이션(주로 데스크톱 헤더). 트리거 hover 시 mega-menu/dropdown content를 노출하는 패턴.

- **Trigger**: `{typography.button-sm}` (14px / weight 500) / `{colors.ink}`. 높이 40px, 좌우 패딩 12px, gap 6px, 우측 12px `chevron-down`.
- **Trigger Hover**: 배경 `{colors.surface-soft}`, `{radius.md}` (10px).
- **Content (Popup)**: `{colors.canvas}` / 1px `{colors.hairline}` / `{radius.lg}` (16px) / `{shadow.level-2}`. 패딩 `{spacing.md}` (16px), 폭 360~480px.
- **Feature Link (강조 항목)**: 첫 줄 `{typography.body-md}` weight 600, 보조 줄 `{typography.body-sm}` / `{colors.body-muted}`. hover 시 배경 `{colors.surface-soft}`, `{radius.md}`.
- **Link (일반)**: Feature Link와 동일 구조, 첫 줄 weight 500.
- **Motion**: trigger hover 후 80ms 지연 후 popup open, popup leave 시 160ms 지연 후 close. (실수 호버 방지)
- **Mobile**: 1023px 이하에서는 햄버거 → Drawer-left로 전환(Sidebar 모바일 변형과 동일 패턴).

### Toolbar
편집기/문서 상단의 그룹화된 액션 모음.

- **Container**: 높이 44px, 좌우 패딩 8px, 배경 `{colors.canvas}`, 1px `{colors.hairline}`, `{radius.md}` (10px). flex로 정렬.
- **Group**: 관련 액션 묶음. 내부 버튼 간 gap 2px, 그룹 간 gap 8px.
- **Button**: 32×32 정사각 ghost 버튼. 아이콘 16px / 텍스트 14px weight 500.
  - **Hover**: `{colors.surface-soft}`, `{radius.sm}` (6px).
  - **Pressed/Active**: 배경 `{colors.surface-soft}` 유지 + 텍스트 `{colors.primary}`. Toggle 형태일 때 사용.
  - **Primary Action**: 배경 `{colors.primary}` / 텍스트 `{colors.on-primary}` / `{radius.sm}`. 한 toolbar 1개로 제한.
- **Separator**: 1px `{colors.hairline}`, 세로 높이 20px, 좌우 margin 4px.
- **금지**: 버튼 보더 사용, 그림자, 컬러 채움 hover.

### Tabs
한 컨테이너 안에서 관련 패널을 전환하는 컴포넌트. **Underline 변형**을 기본으로 합니다.

- **List**: 하단 1px `{colors.hairline}` 디바이더. flex로 좌측 정렬, gap `{spacing.lg}` (24px).
- **Tab**
  - 높이 44px, 패딩 좌우 4px, `{typography.body-sm}` (14px) weight 500 / `{colors.body-muted}`.
  - **Hover**: 텍스트 `{colors.ink}`.
  - **Active**: 텍스트 `{colors.ink}`, 하단 2px `{colors.primary}` underline(`box-shadow: inset 0 -2px 0 {colors.primary}`). weight 500 유지.
  - **Focus**: underline 색만 유지. 키보드 접근성은 dotted outline 1px (전역 정책의 예외 — Tabs는 underline 자체가 신호이므로 보더 변화 대신 outline 사용).
- **Panel**: 상단 `{spacing.lg}` (24px) 간격. `{typography.body-md}` (16px) / `{colors.ink}`.
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
  - **Track**: `{colors.surface-soft}` 배경, `{radius.md}` (10px), padding 4px, 1px `{colors.hairline}` 보더.
  - **Item**: 트랙 안의 칩. 높이 32px(트랙 - padding), `{radius.sm}` (6px), `{typography.body-sm}` (14px / weight 500).
    - **Default**: 배경 투명 / 텍스트 `{colors.body-muted}`.
    - **Selected**: 배경 `{colors.canvas}` / 텍스트 `{colors.ink}` / `{shadow.level-1}` (떠오른 칩 인상).
  - 다크 모드: Track은 `Surface Soft` 다크 톤, Selected는 카드보다 한 단계 밝은 surface(`{colors.surface-elevated}`).
- **금지**: Selected 상태에 Primary 컬러 채움(Sidebar Navigation 원칙과 동일 — 상태 컬러와 분리), 아이콘에 별도 강조 컬러.

### Slider
범위 입력 컨트롤.

- **Track**: 4px 높이, `{colors.hairline}` 배경, `{radius.pill}`.
- **Indicator (Filled)**: `{colors.primary}` 배경. 시작점부터 thumb까지.
- **Thumb**: 20×20 원형, `{colors.on-primary}` 배경(흰색 고정), 1.5px `{colors.primary}` 보더, `{shadow.level-1}`. **다크 모드에서도 흰색 유지** (Primary 위 컨트롤 부품 원칙).
- **Hover**: thumb scale 1.1.
- **Focus**: thumb 보더를 2px로 두껍게 (전역 정책 — 보더 변화로만 신호).
- **Touch Target**: thumb 자체는 20px이지만 hit area 44×44 확보.
- **Range Slider (양쪽 thumb)**: 두 thumb 사이 구간만 Indicator로 채움.

### Progress
작업 진행률 시각화 (determinate).

- **Track**: 8px 높이, `{colors.hairline}` 배경, `{radius.pill}`.
- **Indicator**: `{colors.primary}` 배경, `{radius.pill}`. width는 value 비율.
- **Variant — Slim**: 4px 높이 (페이지 상단 로딩 바 등).
- **Indeterminate**: Indicator를 30% 폭으로 두고 좌→우 1.2s 무한 슬라이드(`cubic-bezier(0.4, 0, 0.2, 1)`).
- **Label (선택)**: Progress 위에 `{typography.body-sm}` weight 500 / `{colors.ink}`, 우측에 % 텍스트 `{colors.body-muted}`.
- **금지**: 그라데이션 채움, 줄무늬 패턴, 펄스 글로우.

### Meter
경계가 있는 측정값 인디케이터 (예: 디스크 사용량, 비밀번호 강도). Progress와 달리 **고정된 min/max 범위 내의 현재 값**을 표시.

- **Track / Indicator**: Progress와 동일 토큰(8px 높이, `{radius.pill}`).
- **Color by Range (선택)**: 값이 임계치를 넘으면 `{colors.semantic-warning}` / `{colors.semantic-error}`로 자동 전환 가능(예: 80% 이상 warning, 95% 이상 error). 기본은 `{colors.primary}`.
- **Label**: 상단에 `{typography.body-sm}` weight 500 (좌측 라벨) + 현재값/최대값 (우측, `{colors.body-muted}` `{typography.caption}`).
- **금지**: Progress와 시각적으로 구분이 안 되는 경우 라벨로 의미를 명확히 표기.

### Separator
시각적 구분선.

- **Horizontal**: 1px 높이, `{colors.hairline}` 배경, full width.
- **Vertical**: 1px 폭, `{colors.hairline}`, height는 부모 따라.
- **With Label (decorative)**: 가운데 텍스트가 있는 구분선. 좌우 hairline + 중앙 `{typography.caption}` / `{colors.body-muted}`, 좌우 `{spacing.md}` 간격.
- **Margin**: 섹션 구분 시 상하 `{spacing.lg}` (24px) ~ `{spacing.xl}` (32px).
- **금지**: 점선/이중선 변형, 그라데이션 페이드, 컬러 강조.

### Scroll Area
밀도 높은 콘텐츠를 위한 커스텀 스크롤 영역. OS 기본 스크롤바보다 절제된 형태를 제공합니다.

- **Viewport**: 부모 컨테이너에 `overflow: hidden` + 내부 스크롤. `{radius.md}` 이상 컨테이너 안에 둘 때 모서리 클리핑 자동 처리.
- **Scrollbar**
  - **Width**: 세로 6px / 가로 6px. hover/active 시 10px로 확대(`transition: width 120ms ease`).
  - **Track**: 투명. hover 시에만 `{colors.hairline}` 0.4 opacity 노출.
- **Thumb**: `{radius.pill}`, `{colors.body-muted}` 0.4 opacity. hover 시 0.6, active 시 0.8.
- **Auto-hide**: 마우스가 영역을 벗어나면 600ms 후 thumb fade-out(opacity 0).
- **금지**: 트랙에 강한 배경색, thumb에 Primary 컬러, 그림자.

### Preview Card
링크에 hover 시 미리보기를 띄우는 hover card.

- **Popup**: `{colors.canvas}` / 1px `{colors.hairline}` / `{radius.lg}` (16px) / `{shadow.level-2}`. 폭 280~360px, 패딩 `{spacing.md}` (16px).
- **Offset**: 트리거에서 `10px`(`--floating-offset-loose`).
- **Content Structure**: 상단 시각(이미지/일러스트) → `{typography.body-md}` weight 600 제목 → `{typography.body-sm}` / `{colors.body-muted}` 설명. 세로 gap `{spacing.sm}` (8px).
- **Arrow**: 트리거 방향으로 8×8 화살표(Popup 컬러 + 보더 동일하게 연결).
- **Trigger**: 본문 인라인 텍스트 링크(`{colors.primary}` 또는 `{colors.ink}` + underline).
- **Motion**: hover 후 200ms 지연 open, leave 후 100ms 지연 close. 페이드+8px 슬라이드 인.
- **금지**: 멀티 액션 버튼(Preview Card는 정보 노출 전용 — 액션이 필요하면 Popover/Drawer 사용).

### Collapsible
단일 트리거로 콘텐츠 블록을 펼치고 접는 가장 기본적인 disclosure 컴포넌트. Accordion이 "여러 항목의 묶음"이라면 Collapsible은 "독립된 한 블록".

- **Trigger**: `button-secondary` 또는 텍스트 링크 형태 자유. 펼침 상태를 `aria-expanded`로 노출.
- **Panel**: 별도 보더/배경 없이 본문 흐름에 자연스럽게 삽입. 필요 시 좌측 2px `{colors.hairline}` 가이드(인용처럼).
- **Motion**: **Accordion의 *Panel Expand/Collapse 모션 (공용 표준)*과 동일 토큰** — `interpolate-size: allow-keywords`, height 0↔auto, 240ms `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Sidebar 2뎁스 그룹과 Accordion이 같은 모션을 공유합니다.
- **금지**: 별도 카드/배경/그림자(독립 블록이지 컨테이너가 아님).

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
