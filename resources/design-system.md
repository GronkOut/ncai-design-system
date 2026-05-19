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
- **Error** (`{colors.semantic-error}`): 잘못된 입력(에러) 상태.
  - Light: `#DC2626` / Dark: **`#FF453A`** (Ruby Red)
- **Warning** (`{colors.semantic-warning}`): 주의가 필요한 상태나 취약한 보안 알림.
  - Light: `#F59E0B` (Amber) / Dark: **`#FF9F0A`** (Premium Orange)

> **Minimalist Validation Policy**: NCAI 시스템은 벨리데이션 상태 표시 시 배경 틴트(Background Tint)를 사용하지 않는 것을 원칙으로 합니다. 오직 테두리 컬러와 헬퍼 텍스트만으로 상태를 전달하며, **포커스 시 나타나는 외부 광채(Focus Ring) 또한 해당 상태의 시맨틱 컬러와 동기화**하여 테마(라이트/다크)와 관계없이 가장 정갈하고 일관된 피드백을 유지합니다.



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
| `{colors.hairline}` | `#E5E7EB` | `#2A2A2A` | 중성 그레이 구분선 |
| `{colors.ink}` | `#13151A` | `#F2F2F2` | 채도 없는 순수 오프화이트 |
| `{colors.body-muted}` | `#6B7280` | `#999999` | 중립 미드 그레이 |
| `{colors.primary}` | `#006EFF` | `#1A78FF` | 원본 색상 기반, 밝기만 미세 조정 |
| `{colors.primary-hover}` | `#0059CC` | `#3D8EFF` | 다크 배경 호버 피드백 |

**다크모드 그림자 (Elevation)**: 쿨 블루 기반 그림자는 다크 배경에서 효과가 없으므로, 순수 블랙 기반으로 불투명도를 높여 사용합니다.
- Level 1: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.30)`
- Level 2: `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45)`
- Level 3: `box-shadow: 0 16px 48px rgba(0, 0, 0, 0.60)`

**다크모드 카드(Card) 동작 원칙**:
라이트 모드에서는 순백색 `Canvas` 위에 `hairline` 테두리로 카드를 구분합니다. 다크 모드에서는 테두리 대신 **배경색의 계층(레이어)**으로 깊이를 표현합니다.

| 컴포넌트 | 라이트 모드 | 다크 모드 |
|---|---|---|
| `card-standard` | `Canvas(#FFF)` 배경 + `hairline` 테두리 | `Surface Soft(#1C1C1E)` 배경, **테두리 없음** |
| `card-featured` | `Canvas(#FFF)` 배경 + `Level 2` 그림자 | `Surface Soft(#1C1C1E)` 배경 + `Level 3` 그림자 |
| 섹션 배경 (`Surface Soft` 섹션) | `Surface Soft(#F8FAFC)` | **`Canvas(#111112)`** 로 반전하여 카드와 계층 확보 |

> [!WARNING]
> **카드는 어떤 모드에서도 섹션 배경과 반드시 다른 색이어야 합니다.**
>
> 다크 모드에서는 `canvas`와 `surface-soft` 두 가지 레벨만 존재합니다. 섹션과 카드가 같은 레벨을 쓰면 카드가 배경에 녹아들어 보이지 않습니다.
>
> **규칙**: 섹션 배경이 `Canvas(#111112)` → 카드는 `Surface Soft(#1C1C1E)` / 섹션 배경이 `Surface Soft` → 다크 모드에서 섹션을 `Canvas`로 반전시킵니다.
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


### Principles
- **Display 계열**은 Pretendard Variable를 사용하고, 크기가 클수록 더 강한 음수 자간을 적용하여 시각적 응집력을 높입니다.
- **Text 계열**은 Pretendard Variable를 사용하여 본문과 인터페이스 라벨의 반복 가독성을 유지합니다.
- **Line Height**는 토큰마다 비율(ratio)로 정의하여 폰트 크기 변경 시에도 계층의 호흡이 자연스럽게 유지되도록 합니다.
- 위계 표현은 폰트 크기 변경보다 우선적으로 **폰트 패밀리(Display/Text/Mono), 굵기(Weight), 색상 농도(Ink vs Muted)**를 활용합니다.











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

### Vertical Stack Rhythm (Eyebrow → Title → Body)
같은 "Eyebrow → Title → Body" 패턴이라도 컨텍스트의 폰트 스케일이 다르면 간격도 비례해서 달라져야 합니다. 단일 수치 대신 **4-tier 시스템**으로 묶어 일관성을 유지합니다.

| Tier | 용도 | Eyebrow → Title | Title → Body | 짝이 되는 타이포 |
|---|---|---|---|---|
| `stack-hero` | 페이지/섹션 히어로 | **24px** (`{spacing.lg}`) | **24px** (`{spacing.lg}`) | `display-xl` / `display-lg` |
| `stack-section` | 갤러리·핸드오프 인트로 | **16px** (`{spacing.md}`) | **16px** (`{spacing.md}`) | `display-md` |
| `stack-card` | 카드·모달·시트 타이틀 | **8px** (`{spacing.sm}`) | **12px** | `card-title` (22px) |
| `stack-inline` | 본문 내 미니 라벨/필드 | **4px** (`{spacing.xs}`) | **8px** (`{spacing.sm}`) | `body-md-strong` (16px) |

**원칙**
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
| `{rounded.none}` | 0px | 전체 화면을 덮는 섹션 배경, 풀블리드 이미지 |
| `{rounded.sm}` | 6px | 체크박스, 작은 라벨, 뱃지 |
| `{rounded.md}` | 10px | 모든 버튼 및 입력 폼(Input) |
| `{rounded.lg}` | 16px | 일반적인 카드(Card), 이미지 프레임. 풍부하고 부드러운 인상을 줍니다. |
| `{rounded.xl}` | 20px | 모달(Modal), 바텀시트(BottomSheet) 등 화면 위에 떠 있는 컨테이너. 카드보다 한 단계 더 부드러운 가장자리로 떠 있는 느낌을 강조합니다. |
| `{rounded.table}` | 12px | 데이터 테이블(Table) 전용. 정보의 밀도가 높은 테이블에 적합한 정갈하고 샤프한 라운딩입니다. |
| `{rounded.pill}` | 9999px | 상태 표시 뱃지, 알약 형태의 특수 탭 메뉴 |
| `{rounded.full}` | 50% | 아바타 이미지, 원형 아이콘 버튼 |









## Components

### Buttons

> [!IMPORTANT]
> **Primary 버튼 남용 금지 원칙**
> 파란색(`Primary`) 버튼이 화면에 너무 많으면 사용자의 시선이 분산되어 오히려 핵심 CTA(Call To Action)의 전환율이 떨어집니다. 한 화면에 Primary 버튼은 **단 1개(최대 2개)**로 제한하고, 나머지 액션은 모두 `Secondary`나 `Ghost` 버튼으로 강등(Downgrade)하여 시각적 위계를 확실히 잡아야 합니다.

모든 클릭 가능한 인터랙티브 요소는 위계가 있어야 합니다.
- **`button-primary`**: 배경색 `{colors.primary}`, 텍스트색 `{colors.on-primary}`. 모서리는 `{rounded.md}`(10px)로 둥글기를 살짝 조절하여 입력 폼과 통일감을 줍니다. 화면의 최종 목표이자 가장 중요한 단 하나의 액션(예: "가입하기", "결제하기")에만 제한적으로 사용합니다.
- **`button-secondary`**: 배경은 투명 또는 흰색 `{colors.canvas}`, 텍스트는 `{colors.ink}`. 테두리 1px `{colors.hairline}`. 화면 내 대부분의 일반적인 조작(예: "더 알아보기", "필터", "새 사용자 추가" 등 서브 액션)에 사용되는 **실질적인 기본 버튼**입니다.
- **`button-ghost`**: 배경과 테두리가 모두 없는 텍스트 전용 버튼. 취소나 단순 링크 이동 등 가장 덜 중요한 액션에 사용합니다. 호버 시 옅은 회색이 깔립니다.

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
`button-secondary`의 배경은 라이트 모드에서 `Canvas(흰색)`이지만, 다크 모드에서 `Canvas = #111112`로 전환되어 카드 배경(`Surface Soft = #1C1C1E`)보다 **오히려 더 어두워지는 역전 현상**이 발생합니다. 이를 방지하기 위해 다크 모드의 버튼은 카드 배경보다 반드시 밝은 레이어를 사용합니다.

| 버튼 | 라이트 모드 배경 | 다크 모드 배경 |
|---|---|---|
| `button-secondary` | `Canvas(#FFF)` + `hairline` 테두리 | `#2C2C2E` (테두리 없음, 배경색만으로 구분) |
| `button-secondary:hover` | `Surface Soft(#F8FAFC)` | `#3A3A3C` |
| `button-ghost:hover` | `Surface Soft(#F8FAFC)` | `#2C2C2E` |




### Cards
- **`card-standard`**: 배경색 `{colors.canvas}`, 테두리 1px `{colors.hairline}`, 모서리 `{rounded.lg}`. 가장 널리 쓰이는 기본 컨테이너입니다. 불필요한 그림자는 지양하고 정갈한 테두리로만 표현합니다.
- **`card-featured`**: 요금제의 Pro 플랜처럼 시각적으로 띄우고 싶은 카드는 배경을 `{colors.canvas}`로 하고 깊은 그림자(`Level 2`)를 항상 적용합니다.
- **비율 정책 (Proportions)**: 카드가 어느 한쪽으로 치우쳐 보이지 않도록 **상하좌우 균형 있는 패딩(권장 40px)**을 확보합니다. 가로가 너무 좁거나 세로가 너무 길어 보이지 않는 안정적인 밸런스를 유지하는 것이 중요합니다.

**Typography (타이틀 토큰 — 필수 매핑):**
- **Card Title (Standard)**: `{typography.card-title}` (22px / 500). `card-standard`, `card-featured`의 기본 제목.
- **Card Title (Compact / 좁은 카드)**: `{typography.subhead}` (20px / 400) 또는 굵게 강조 시 `{typography.body-lg}` weight 600. 카드 폭이 360px 이하인 경우 적용.
- **Card Title (Micro / 인포 박스)**: `{typography.body-md}` weight 600 (16px). 알림 카드, 상태 카드 등 한 줄 정보 전달용.
- **Description**: `{typography.body-md}` (16px) 또는 좁은 카드에서는 `{typography.body-sm}` (14px).
- **금지**: 카드 내부에 `display-*`(40px↑) 또는 `headline`(28px) 토큰을 사용하지 마세요. 카드 타이틀이 모달 타이틀보다 커 보이면 위계가 무너집니다.

### Inputs
- **`text-input`**: 텍스트 필드. 배경색 `{colors.canvas}`, 테두리 1px `{colors.hairline}`. 높이는 약 48px로 타겟 크기를 확보합니다. 포커스 시 `{colors.primary}` 색상의 테두리(또는 링)를 표시하여 현재 상태를 명확히 합니다.

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
- **Shape**: `{rounded.xl}` (20px)을 사용합니다. 카드(`rounded.lg` 16px)보다 한 단계 더 부드럽게 처리해 떠 있는 컨테이너 특유의 정서를 강조합니다.
- **Border**: **없음**. 모달은 `{shadow.level-3}`만으로 충분히 떠 있는 느낌을 형성하므로 hairline 보더를 사용하지 않습니다. 보더가 있으면 그림자와 이중 경계가 만들어져 가장자리가 답답해집니다. 다크 모드에서도 동일하게 보더를 제거하고 `Surface Soft` 배경 톤 대비로만 경계를 표현합니다.
- **Elevation**: `{shadow.level-3}`와 어두운 배경(Scrim)을 조합하여 강력한 수직 계층을 형성합니다.
- **금지**: 모달 내부에 `display-*` 토큰(40px↑) 사용 금지. 모달은 페이지 히어로가 아닙니다. 콘텐츠 양에 맞춰 카드를 납작하게(높이 < 220px) 만들지 마세요. 본문에 `body-sm`(14px) 같은 보조 텍스트 토큰도 사용하지 않습니다.

### BottomSheet
모바일/태블릿에서 하단에서 올라오는 임시 컨테이너. 모달의 가로형 변형으로 취급하며 타이틀 위계는 동일하게 적용합니다.
- **Title**: `{typography.headline}` (28px). 시트 폭이 480px 이하이거나 콘텐츠가 1~2개 액션 정도로 단순한 경우 `{typography.card-title}` (22px)로 다운그레이드합니다.
- **Description**: `{typography.body-md}` (16px). 한 줄 안내가 길면 두 줄까지 허용하며, 그 이상은 Body 콘텐츠로 분리합니다.
- **Padding**: 단일 카드 컴팩트 구성은 상하좌우 **32px**(`{spacing.xl}`) 균일 패딩(기본 권장). 섹션이 분리된 큰 시트는 Header 상 **20px** / 하 **12px**, 좌우 **24px**. Body 상하좌우 **24px**.
- **Shape**: `{rounded.xl}` (20px). 모달과 동일하게 카드보다 한 단계 부드러운 가장자리로 떠 있는 느낌을 강조합니다.
- **Border**: **없음**. 모달과 동일한 원칙. `{shadow.level-3}` + Surface 톤 대비로만 경계를 표현합니다.
- **Drag Handle**: 시트 상단 중앙에 **36x4px** rounded bar (`rgba(0,0,0,0.16)` light / `rgba(255,255,255,0.24)` dark). 핸들과 타이틀 사이 간격 **12px**.
- **Elevation**: `{shadow.level-3}` + Scrim. Surface는 `Surface Soft` 사용.
- **금지**: `display-*` 토큰, 카드보다 큰 타이틀, 강한 컬러 배경, hairline 보더.

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
- **Active는 컬러가 아닌 톤으로**: 활성 상태에 Primary 액센트를 쓰지 않습니다. `{colors.surface-soft}` 배경 + `{colors.ink}` 텍스트 + weight 600으로 표현하여 **Navigation(인터랙션) 컬러와 Status(상태) 컬러의 역할을 분리**합니다.
- **들여쓰기만으로 위계**: 2뎁스 sub-item은 좌측 들여쓰기만으로 자식 관계를 표현합니다. 가이드 라인(tree line)이나 좌측 액센트 바를 추가하지 않습니다. 절제가 위계를 만듭니다.
- **카드가 아닌 컨테이너**: 1px hairline 보더 + canvas 배경으로 본문과 살짝 분리하되, 그림자/elevation을 사용하지 않습니다.

**Container**
- **Width**: 데스크톱 기본 **264px**. 컴팩트 변형은 240px.
- **Padding**: `12px 10px`.
- **Border**: `1px solid {colors.hairline}`.
- **Border Radius**: `{radius.md}`.
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
- **Active**: background `{colors.surface-soft}`, color `{colors.ink}`, **weight 600**. *Primary 텍스트 컬러·좌측 액센트 바·트리 라인 사용 금지.*
- **Transition**: `background 100ms ease, color 100ms ease`.

**Sub-item (2뎁스)**
- **들여쓰기**: padding-left `28px` (부모 아이콘 18px + gap 10px 정렬).
- **Size**: 높이 `32px`, padding `0 10px`, radius `7px`.
- **Typography**: 13.5px / weight 500 / `{colors.body-muted}`.
- **Hover**: background `{colors.surface-soft}`, color `{colors.ink}`.
- **Active**: background `{colors.surface-soft}`, color `{colors.ink}`, weight 600.
- Sub-item에는 **아이콘을 두지 않습니다**. 자식 관계는 들여쓰기와 텍스트 위계로만 전달합니다.

**Chevron (Disclosure Indicator)**
- 14px, `currentColor`, `opacity 0.5`. 부모 항목 색을 그대로 상속.
- Collapsed = 0deg (오른쪽), Expanded = 90deg (아래). `transform 160ms ease`로 부드럽게 회전.

**Badge (알림 카운트)**
- Min-width `20px` / height `20px` / radius `10px`. Font 11.5px / weight 600.
- **Status 시그널**이므로 `Semantic Status Palette`를 사용합니다.
  - Light: `#FEF2F2` BG / `#DC2626` Text (Error 틴트)
  - Dark: `rgba(255, 69, 58, 0.18)` BG / `#FF453A` Text (Dark Mode Badge & Tag Principle 준수)
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
- **Border Radius**: `12px` (`{radius.md}`). 모달의 16px보다 한 단계 작게 잡아 토스트의 가벼움을 강조합니다.

**Motion**
- **Enter**: 우측에서 16px 슬라이드 + 페이드 인. `cubic-bezier(0.22, 1, 0.36, 1)`, **280ms**.
- **Exit**: 우측으로 8px 슬라이드 + 페이드 아웃. `cubic-bezier(0.4, 0, 1, 1)`, **180ms**.
- **Auto-dismiss**: 기본 **5초**. 호버 시 타이머 일시 정지, 포커스 시에도 동일.
- **스택 재정렬**: 새 토스트 추가 시 기존 토스트는 200ms ease-out으로 자연스럽게 아래로 밀려납니다.

**Accessibility**
- ARIA: `role="status"` (Positive/Info) 또는 `role="alert"` (Negative/Warning).
- `aria-live`: 중립은 `polite`, 부정/경고는 `assertive`.
- 닫기 버튼은 키보드 포커스 시 2px Primary 컬러 outline을 표시합니다.








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
