# @ncai/design-system-icons

NC AI Design System SVG 아이콘과 검색 가능한 메타데이터를 제공하는 패키지입니다.

```bash
npm i @ncai/design-system-icons
```

SVG 파일은 패키지 export 경로로 직접 사용할 수 있습니다.

```ts
import accountInfoUrl from '@ncai/design-system-icons/icons/ic_account_info.svg';
```

아이콘 목록과 검색 헬퍼도 함께 제공합니다.

```ts
import { getIcon, icons, searchIcons } from '@ncai/design-system-icons';

const icon = getIcon('ic_account_info.svg');
const matches = searchIcons('account');
```

전체 미리보기와 파일명 목록은 [`icons/README.md`](./icons/README.md)를 참고하세요.
