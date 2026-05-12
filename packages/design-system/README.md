# @ncai/design-system

NC AI Design System의 마크다운 원문과 검색 헬퍼를 제공하는 패키지입니다.

```bash
npm i @ncai/design-system @ncai/design-system-icons @base-ui/react
```

주요 용도:

- `design-system.md` 원문을 패키지로 배포합니다.
- 섹션 파싱, 섹션 조회, 검색 헬퍼를 제공합니다.
- AI 에이전트가 Base UI primitive에 NC AI 디자인 기준을 적용할 때 참고할 수 있는 구조화된 데이터를 제공합니다.

아이콘이 필요한 UI는 `@ncai/design-system-icons`를 함께 설치해 `@ncai/design-system-icons/icons/<file>.svg` export 경로 또는 `searchIcons` 헬퍼를 사용하세요.

CLI, MCP, 에이전트 지침까지 함께 설정하려면 다음 명령을 사용합니다.

```bash
npx @ncai/design-system-cli setup --agent <agent>
```

Windows PowerShell에서 `npm.ps1` 실행 정책 문제가 있으면 `npm.cmd`를 사용하세요.
