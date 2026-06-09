# @ncai/design-system-cli

NC AI Design System을 소비자 프로젝트에 설정하는 `npx` CLI입니다.

```bash
npx @ncai/design-system-cli setup --agent <agent>
```

주요 명령:

- `setup`: 선택한 에이전트의 지침 파일과 MCP 설정을 함께 생성합니다.
- `show`: 패키지에 포함된 `design-system.md`를 조회하거나 검색합니다.
- `doctor`: 의존성, 에이전트 지침 파일, MCP 설정 파일 또는 스니펫을 진단합니다. `--agent <agent>`를 주면 해당 에이전트만 확인합니다.
- `validate`: 생성된 UI 코드의 기본 가드레일을 점검합니다.

Cursor 대상 setup은 `.cursor/skills/ncai-design-system/SKILL.md`, `.cursor/rules/ncai-design-system.mdc`, `.cursor/mcp.json`을 생성합니다. Rule은 UI 작업 전에 Skill을 읽도록 항상 적용되는 짧은 지침입니다.

필수 런타임 의존성은 보통 다음 세 패키지입니다.

```bash
npm i @ncai/design-system @ncai/design-system-icons @base-ui/react
```

Windows PowerShell에서 `npm.ps1` 실행 정책 문제가 있으면 `npm.cmd`를 사용하세요.
