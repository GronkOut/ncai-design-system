---
name: ncai-design-system
description: Builds, reviews, and styles React UI using NC AI design-system.md and Base UI primitives. Use when creating or refactoring UI, choosing components, applying NC AI visual language, installing the NC AI design system, or using MCP/CLI design-system guidance.
---

# NC AI Design System

## Core Workflow

1. Read the current NC AI design system first. Prefer MCP tools if available: `get_design_system_overview`, `search_design_system`, then `get_design_system_section`.
2. Use Base UI primitives before creating custom interactive components. Install/import from `@base-ui/react`, for example `@base-ui/react/popover`.
3. Check the latest Base UI API through MCP when needed: `search_base_ui_docs`, `get_base_ui_component_doc`, or `get_base_ui_doc`.
4. Reuse NC AI SVG icons from `@ncai/design-system-icons` before drawing new icon paths. Prefer MCP tools `search_icons`, `list_icons`, and `get_icon` when available.
5. Apply the design decisions from `design-system.md` in the consuming app at implementation time. Do not assume pre-styled NC AI components exist.
6. Preserve Base UI accessibility structure and state attributes while changing class names, CSS Modules, Tailwind classes, or local styles.
7. Validate the result with MCP `validate_ui_code` or `npx @ncai/design-system-cli validate --file <path>`.

## Component Selection

- For dialogs (modal/alert), popovers, tooltips, menus (incl. context/navigation menu), selects/combobox/autocomplete, checkboxes, radios, switches, toggles & toggle groups, tabs, accordions, collapsibles, sliders, progress, meter, scroll areas, preview cards, toolbars, separators, avatars, toasts, number fields, OTP fields, and field/fieldset/form primitives, start from the matching Base UI component.
- For static layout such as hero tiles, cards, navigation shells, sidebars, bottom sheets, drawers, lists, and marketing sections, use semantic React/HTML and apply `design-system.md` layout, typography, spacing, radius, and color guidance. (BottomSheet, Drawer, and Sidebar are NC AI compositions — typically built on top of Base UI Dialog/Popover where applicable.)
- For label-less square actions (e.g. card-header more/close, table-row delete), use the NC AI `icon-btn` family (`icon-btn--sm/md/lg` × `secondary/ghost`, plus `--danger` / `--danger-ghost` for destructive variants) from the `Icon Button` section of `design-system.md`. Always provide an `aria-label`. Use a regular `button-*` whenever a text label is present.
- For text inputs with an inline clear (x) chip, follow the `Clearable Input` rule in `design-system.md` — apply only to `text-input` / `Field.Control`; do not add to Number Field, OTP Field, or Combobox.
- If a complete component does not exist in Base UI, build it as a composition of the closest Base UI primitives instead of introducing an unrelated component library. Example: Date Picker should compose `Field`, `Popover`, `Button`, `Select`, NC AI calendar icon, and local calendar-grid logic while following the `Date Picker` section in `design-system.md`.
- Do not create a custom primitive when a Base UI primitive exists unless the user explicitly asks or Base UI cannot express the behavior.

## Styling Rules

- Treat `resources/design-system.md` as the source of truth. It may describe tokens as markdown references like `{colors.primary}` rather than shipped CSS variables.
- Token axes you must respect: **colors** (`canvas`, `surface-soft`, `surface-inset`, `surface-elevated`, `surface-elevated-hover`, `hairline`, `control-track`, `ink`, `body-muted`, `on-primary`, `on-ink-muted`, `disabled`, `primary`, `primary-hover`, `semantic-success`, `semantic-info`, `semantic-warning`, `semantic-error`, `semantic-neutral`, `semantic-error-hover`, `semantic-{success|info|warning|error|neutral}-bg`, `semantic-{success|warning|error}-text`; the five base `semantic-*` tokens are **solid fill** for bars/solid badges/`button-danger` and must not be used as colored text on white or tint surfaces — use the `-text` variants there, while info/neutral text reuse their base token; `avatar-{name}-{bg|text}`), **typography** (Pretendard + Geist Mono; each role is a single **text-style class** named `{role}-{px}{weight}` that bundles 5 properties — `font-family` + `font-weight` + `font-size` + `line-height` + `letter-spacing`. Weight is **fixed per role** via the suffix `r`=400 / `m`=500 / `sb`=600, resolving to base tokens `--fw-{regular|medium|semibold}`; family is `--font-text` except `mono-13r` which is `--font-mono`. The 20 classes: `display-80sb/56sb/40sb/28sb`, `title-24sb/22sb/20sb/18sb/16sb`, `body-18r/16r/15r/14r`, `label-18m/16m/15m/14m`, `caption-13r`, `eyebrow-13m`, `mono-13r`. Apply by putting the class on the element, or by merging a component selector into the role rule (group selector) — there is no `--type-{role}` 4-property group and no `.type-*` utility anymore. Vertical rhythm uses `text-stack-{hero|section|card|inline}` parent classes), **spacing** (8px base, numeric scale `{spacing.4|8|12|16|20|24|32|40|120|240}` — 120 = section rhythm, 240 = footer anchor = 120×2), **radius** (numeric `{radius.6|10|12|16|20}` plus `none|pill|full`), **elevation**, and **motion/easing** (`{motion.instant|fast|normal|expand|slow}` + `{ease.standard|out-quad|out-expo|in-out}`).
- The Avatar palette (`avatar-*` tokens / `.avatar-*` utilities) is for the Avatar component only. Do not use it for buttons, cards, badges, tags, hover tints, category mapping, or chart series.
- Convert markdown token guidance into the consumer project's existing styling system: CSS Modules, Tailwind, plain CSS, CSS-in-JS, or local component styles.
- Keep generated style values traceable to the design-system section used. If a value is unclear, search the design-system document before inventing a new one. Do not use magic numbers for duration/easing — pick from the motion/ease tokens above.
- Avoid arbitrary decorative gradients, shadows, borders, or animations unless the design-system document explicitly calls for them.

## Icon Rules

- Install icons with `npm i @ncai/design-system-icons` or as part of the recommended setup command.
- Use package export paths such as `@ncai/design-system-icons/icons/user.svg` for SVG assets.
- Use `search_icons` before creating or importing a new icon. Match by semantic title first, then by file name.
- Icons are normalized for `currentColor`; set color in the consuming UI with CSS rather than editing SVG fills.

## Base UI Setup Notes

- Use `npm i @base-ui/react` or the user's package manager equivalent.
- Base UI popups use portals. Add an app root stacking context when needed:

```css
.root {
  isolation: isolate;
}
```

- For iOS Safari visual viewport behavior, Base UI recommends:

```css
body {
  position: relative;
}
```

## MCP Tool Order

1. `get_base_ui_guidance` for package/import rules.
2. `search_base_ui_docs` or `get_base_ui_component_doc` for the latest Base UI API when the component structure is unclear.
3. `search_design_system` for relevant NC AI visual guidance.
4. `get_design_system_section` for exact sections.
5. `search_icons`, `list_icons`, or `get_icon` when an icon is needed.
6. `compose_base_ui_recipe` for a starter implementation plan.
7. `validate_ui_code` after code is written.

## If MCP Is Unavailable

- Read `resources/design-system.md` or the installed package export `@ncai/design-system/design-system.md`.
- Read the installed icon package metadata from `@ncai/design-system-icons`, or browse `@ncai/design-system-icons/README.md`.
- Use the same workflow manually: choose Base UI primitive, preserve accessibility, then apply design-system markdown guidance.
- Ask the user before adding a brand-new component API, token system, or styling package.
