# @ncai/design-system-skills

AI 에이전트가 NC AI Design System과 Base UI를 함께 사용하는 방법을 이해할 수 있도록 지침 문서를 배포하는 패키지입니다.

포함 내용:

- `ncai-design-system/SKILL.md`
- Base UI primitive를 먼저 선택하는 작업 기준
- `@ncai/design-system/design-system.md`를 소비자 프로젝트의 스타일 방식에 맞게 적용하는 지침
- `@ncai/design-system-icons`와 MCP 아이콘 검색 도구를 먼저 사용하도록 안내하는 지침
- MCP 도구를 우선 활용하는 흐름

일반 사용자는 직접 파일을 복사하기보다 CLI를 사용하는 것을 권장합니다.

```bash
npx @ncai/design-system-cli setup --agent <agent>
```

Windows PowerShell에서 `npm.ps1` 실행 정책 문제가 있으면 `npm.cmd`를 사용하세요.
