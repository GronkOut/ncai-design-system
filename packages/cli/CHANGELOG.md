# @ncai/design-system-cli

## 0.6.0

### Minor Changes

- Refine component patterns post-0.5.0 and align MCP/Skill guidance with the new design-system surface.

  - **Preview foundation**: Rewrite preview styles to plain CSS and retune dark mode palette (neutral surface stack `#111212` → `#18191B` → `#27282D`, `surface-elevated-hover` via `color-mix(in oklab)`, `control-track` token for Switch off state).
  - **Avatar**: Replace the Mauve slot with Plum and namespace each palette pair as `{colors.avatar-{name}-{bg|text}}` / `.avatar-{name}` utility. Document that the Avatar palette is for the Avatar component only — explicit guardrail against using `avatar-*` tokens for buttons, cards, hover tints, category mapping, or chart series.
  - **Inputs**: Introduce the `Clearable Input` variant — `text-input` / `Field.Control` may render an inline 48×48 clear (x) chip with the same spec as Autocomplete Clear. Not applied to Number Field, OTP Field, or Combobox.
  - **Accordion**: Tighten trigger spacing/typography to the new label tokens.
  - **Badge**: Add `info` and `neutral` variants alongside the existing semantic palette, introduce a dot element, and re-tune the palette to the new `semantic-{role}-bg` pairs.
  - **Button**: Add the `button-danger-ghost` variant (text-only weak destructive action with `semantic-error-bg` hover, allowed in dense/row contexts as the explicit exception to the "one per screen" rule of `button-danger`). Tighten `sm` icon gap to 4px (`spacing.xxs`), retune fill-hover to swap `background`/`border-color` via `*-hover` tokens (no element-wide `filter: brightness`), and insert the 20px `spacing.lg` slot for `button-lg` left/right padding. Consolidate disabled rules across Text Button and Icon Button (fill → `surface-inset`, outline → base + `color: disabled`, ghost → transparent + `color: disabled`).
  - **Checkbox**: Align internal spacing to the new spacing tokens and document disabled / indeterminate / focus states.
  - **Combobox**: Nest item hover radius inside the listbox and sync the chevron spec to the preview.
  - **Context Menu**: Tighten row height/padding, restructure the shortcut + chevron columns, and sync danger row background to `semantic-error-bg` so it shares the same destructive surface token as `button-danger-ghost` / `icon-btn--danger(-ghost)` hover.
  - **MCP (`@ncai/design-system-mcp`)**: Clean up redundant self-referential aliases (`dialog: "dialog"`, `form: "form"`) and expand the `field` alias to cover `text input`, `clearable input`, `search input`, `입력`, `입력 필드` so the new Clearable Input pattern maps onto the Base UI `field` primitive.
  - **Skill (`@ncai/design-system-skills`)**: Add `icon-btn` family selection guidance (`--sm/md/lg` × `secondary/ghost` + `--danger` / `--danger-ghost`, `aria-label` required) and the Clearable Input applicability rule to Component Selection. Add `lists` to the static-layout list. In Styling Rules, enumerate the current token axes (colors with `surface-{soft|inset|elevated|elevated-hover}` + `control-track` + `semantic-{role}-bg` pairs + `avatar-*-{bg|text}`; typography with `display-{xl|lg|md}`, `headline`, `title-{md|sm}`, `body-{lg|md|sm}`, `label-{xl|lg|md|sm}`, `caption`, `eyebrow`, `mono` applied via `@include type-*` mixins; spacing with renamed `xxs/xs/sm/...` ladder + `xxxl` and `footer-anchor`; motion `{instant|fast|normal|expand|slow}` and ease `{standard|out-quad|out-expo|in-out}`). Forbid magic-number durations/easings.

### Patch Changes

- Updated dependencies
  - @ncai/design-system@0.6.0
  - @ncai/design-system-icons@0.6.0
  - @ncai/design-system-skills@0.6.0

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
  - @ncai/design-system-skills@0.5.0

## 0.4.1

### Patch Changes

- 78bd160: Clarify setup output so the selected agent is shown as the only configured target, omit Cursor Skill dev dependency hints for non-Cursor agents, and make `doctor --agent` check only the requested agent.

  Add Date Picker composition guidance for Base UI primitive combinations, update MCP recipes and Skill instructions to cover components that do not exist as complete Base UI primitives, and document consumer project update steps.

- Updated dependencies [78bd160]
  - @ncai/design-system@0.4.1
  - @ncai/design-system-icons@0.4.1
  - @ncai/design-system-skills@0.4.1

## 0.4.0

### Minor Changes

- Expand design-system.md with new component sections (Field/Fieldset/Form, Number Field, OTP Field, Toolbar, Toggle/Toggle Group, Slider, Progress, Meter, Separator, Scroll Area, Preview Card, Collapsible, Navigation Menu, Heading–Body Pairing, Line Breaking rules, on-primary token, button-danger, surface-elevated, body-md-strong/body-sm-strong). Rename `rounded.*` tokens to `radius.*`. Align MCP recipe component list, validation hints, and the ncai-design-system Skill to cover all newly documented Base UI primitives.

### Patch Changes

- Updated dependencies
  - @ncai/design-system@0.4.0
  - @ncai/design-system-icons@0.4.0
  - @ncai/design-system-skills@0.4.0
