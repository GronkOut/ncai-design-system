# @ncai/design-system-mcp

NC AI Design System과 Base UI 문서를 AI 에이전트가 조회할 수 있게 해주는 MCP 서버입니다.

```json
{
  "mcpServers": {
    "ncai-design-system": {
      "command": "npx",
      "args": ["-y", "@ncai/design-system-mcp"]
    }
  }
}
```

제공 도구:

- NC AI `design-system.md` 개요, 섹션 조회, 검색
- NC AI SVG 아이콘 목록, 검색, 개별 메타데이터 조회
- Base UI `llms.txt` 기반 문서 목록과 컴포넌트 API 문서 조회
- Base UI 우선 구현 레시피 생성
- 생성된 UI 코드의 기본 가드레일 검증

일반 사용자는 직접 설정하기보다 다음 CLI 명령을 사용하는 것을 권장합니다.

```bash
npx @ncai/design-system-cli setup --agent <agent>
```
