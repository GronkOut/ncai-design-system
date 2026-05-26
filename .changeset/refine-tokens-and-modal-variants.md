---
"@ncai/design-system": minor
"@ncai/design-system-icons": minor
"@ncai/design-system-cli": minor
"@ncai/design-system-mcp": minor
"@ncai/design-system-skills": minor
---

Refine design-system.md tokens, color values, and component patterns.

- **Typography**: Rename `card-title` → `title-md`, `subhead` → `title-sm`. Add `label-xl/lg/md/sm` 4-step button label tokens and `title-sm` for compact container titles (Modal/Drawer/Sheet).
- **Colors**: Add `surface-inset` (segmented track / inset surfaces), `surface-elevated` (interactive floating surfaces), `control-track` (Switch off track), `semantic-success-brand` (Primary-aligned Success variant) tokens. Adjust dark mode values (`#121315` → canvas, `#1A1B1E` → surface-soft, `#2A2B30` → surface-elevated, etc.) for cleaner neutral hierarchy. Consolidate `Pop` palette into `Avatar (Decorative Palette)` and merge `Semantic (Validation)` + `Semantic Status Palette` into a single `Semantic` table with light/dark variants. Refresh badge/error solid fills to match new Semantic palette.
- **Components**: Document Modal Variants (Form / Picker / Browse) split by commit-on-close behavior. Add Icon Button (`icon-btn`) variant family separate from text Buttons. Add Lists section with List Separator Rule (`:last-child` hairline removal). Add Button-with-Icon position rules (Leading = meaning, Trailing = next-step).
- **Layout**: Add Modal Width Scale (sm 400 / md 480 / lg 640 / xl 880) shared with Alert Dialog, modal internal rhythm (Section gap 32 / Body↔Footer 48 / Header inner 8), and Form Body grouping rules.
- **Elevation**: Split shadow color policy by mode (Cool Grey for light, pure black with elevated opacity for dark).
- **Cleanup**: Replace stale internal references (`Semantic Status Palette`, `Sunken`, old hex values) across the document for consistency.
