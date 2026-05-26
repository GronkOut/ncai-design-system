# @ncai/design-system-mcp

## 0.5.0

### Minor Changes

- 7a204fc: Refine design-system.md tokens, color values, and component patterns.

  - **Typography**: Rename `card-title` → `title-md`, `subhead` → `title-sm`. Add `label-xl/lg/md/sm` 4-step button label tokens and `title-sm` for compact container titles (Modal/Drawer/Sheet).
  - **Colors**: Add `surface-inset` (segmented track / inset surfaces), `surface-elevated` (interactive floating surfaces), `control-track` (Switch off track), `semantic-success-brand` (Primary-aligned Success variant) tokens. Adjust dark mode values (`#121315` → canvas, `#1A1B1E` → surface-soft, `#2A2B30` → surface-elevated, etc.) for cleaner neutral hierarchy. Consolidate `Pop` palette into `Avatar (Decorative Palette)` and merge `Semantic (Validation)` + `Semantic Status Palette` into a single `Semantic` table with light/dark variants. Refresh badge/error solid fills to match new Semantic palette.
  - **Components**: Document Modal Variants (Form / Picker / Browse) split by commit-on-close behavior. Add Icon Button (`icon-btn`) variant family separate from text Buttons. Add Lists section with List Separator Rule (`:last-child` hairline removal). Add Button-with-Icon position rules (Leading = meaning, Trailing = next-step).
  - **Layout**: Add Modal Width Scale (sm 400 / md 480 / lg 640 / xl 880) shared with Alert Dialog, modal internal rhythm (Section gap 32 / Body↔Footer 48 / Header inner 8), and Form Body grouping rules.
  - **Elevation**: Split shadow color policy by mode (Cool Grey for light, pure black with elevated opacity for dark).
  - **Cleanup**: Replace stale internal references (`Semantic Status Palette`, `Sunken`, old hex values) across the document for consistency.

### Patch Changes

- Updated dependencies [7a204fc]
  - @ncai/design-system@0.5.0
  - @ncai/design-system-icons@0.5.0

## 0.4.1

### Patch Changes

- 78bd160: Clarify setup output so the selected agent is shown as the only configured target, omit Cursor Skill dev dependency hints for non-Cursor agents, and make `doctor --agent` check only the requested agent.

  Add Date Picker composition guidance for Base UI primitive combinations, update MCP recipes and Skill instructions to cover components that do not exist as complete Base UI primitives, and document consumer project update steps.

- Updated dependencies [78bd160]
  - @ncai/design-system@0.4.1
  - @ncai/design-system-icons@0.4.1

## 0.4.0

### Minor Changes

- Expand design-system.md with new component sections (Field/Fieldset/Form, Number Field, OTP Field, Toolbar, Toggle/Toggle Group, Slider, Progress, Meter, Separator, Scroll Area, Preview Card, Collapsible, Navigation Menu, Heading–Body Pairing, Line Breaking rules, on-primary token, button-danger, surface-elevated, body-md-strong/body-sm-strong). Rename `rounded.*` tokens to `radius.*`. Align MCP recipe component list, validation hints, and the ncai-design-system Skill to cover all newly documented Base UI primitives.

### Patch Changes

- Updated dependencies
  - @ncai/design-system@0.4.0
  - @ncai/design-system-icons@0.4.0
