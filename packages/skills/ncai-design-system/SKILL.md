---
name: ncai-design-system
description: Builds, reviews, and styles React UI using NC AI design-system.md and Base UI primitives. Use when creating or refactoring UI, choosing components, applying NC AI visual language, installing the NC AI design system, or using MCP/CLI design-system guidance.
---

# NC AI Design System

## Core Workflow

1. Read the current NC AI design system first. Prefer MCP tools if available: `get_design_system_overview`, `search_design_system`, then `get_design_system_section`.
2. Use Base UI primitives before creating custom interactive components. Install/import from `@base-ui/react`, for example `@base-ui/react/popover`.
3. Check the latest Base UI API through MCP when needed: `search_base_ui_docs`, `get_base_ui_component_doc`, or `get_base_ui_doc`.
4. Apply the design decisions from `design-system.md` in the consuming app at implementation time. Do not assume pre-styled NC AI components exist.
5. Preserve Base UI accessibility structure and state attributes while changing class names, CSS Modules, Tailwind classes, or local styles.
6. Validate the result with MCP `validate_ui_code` or `npx @ncai/design-system-cli validate --file <path>`.

## Component Selection

- For dialogs, popovers, menus, selects, checkboxes, switches, tabs, accordions, tooltips, and similar UI, start from the matching Base UI component.
- For static layout such as hero tiles, cards, navigation shells, and marketing sections, use semantic React/HTML and apply `design-system.md` layout, typography, spacing, radius, and color guidance.
- Do not create a custom primitive when a Base UI primitive exists unless the user explicitly asks or Base UI cannot express the behavior.

## Styling Rules

- Treat `resources/design-system.md` as the source of truth. It may describe tokens as markdown references like `{colors.primary}` rather than shipped CSS variables.
- Convert markdown token guidance into the consumer project's existing styling system: CSS Modules, Tailwind, plain CSS, CSS-in-JS, or local component styles.
- Keep generated style values traceable to the design-system section used. If a value is unclear, search the design-system document before inventing a new one.
- Avoid arbitrary decorative gradients, shadows, borders, or animations unless the design-system document explicitly calls for them.

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
5. `compose_base_ui_recipe` for a starter implementation plan.
6. `validate_ui_code` after code is written.

## If MCP Is Unavailable

- Read `resources/design-system.md` or the installed package export `@ncai/design-system/design-system.md`.
- Use the same workflow manually: choose Base UI primitive, preserve accessibility, then apply design-system markdown guidance.
- Ask the user before adding a brand-new component API, token system, or styling package.
