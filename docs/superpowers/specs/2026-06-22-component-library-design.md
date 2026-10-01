# Lampent UI — Component Library Design Spec

**Date:** 2026-06-22  
**Status:** Approved

## Goal

Expand Lampent UI from 2 to 21 components with Mantine-inspired APIs, native HTML type extension for full Vue/TS autocomplete, and consistent design tokens.

## Typing Strategy

Use `NativeProps<TCustom, TNative, TConflict>` utility in `src/lib/types/dom.ts`:

- Merge custom props with Vue `*HTMLAttributes`
- Omit conflicts: `class` (merged via `cn`), `color` (SemanticColor vs HTML color), `size` (ComponentSize vs HTML input size number)
- Export public prop types from `{Component}.types.ts`

Shared composable `useForwardedAttrs` handles `inheritAttrs: false` + class merging.

## Components

### Existing (refactor)
- Button, TextInput

### Layout
- Stack, Group, Paper, Divider

### Typography
- Text, Title

### Form
- Textarea, Checkbox, Switch, Radio

### Feedback
- Alert, Badge, Loader

### Actions
- ActionIcon

### Data
- Card, Avatar

### Overlay / Navigation
- Tabs (compound: TabsList, TabsTab, TabsPanel)
- Modal (`<dialog>` + Teleport)
- Tooltip (`@floating-ui/vue` peer dependency)

## Tabs API

```vue
<Tabs v-model="tab">
  <TabsList>
    <TabsTab value="1">Tab 1</TabsTab>
  </TabsList>
  <TabsPanel value="1">Content</TabsPanel>
</Tabs>
```

State via provide/inject.

## Implementation Order

1. Infra + refactor Button/TextInput
2. Layout + Typography
3. Feedback + ActionIcon
4. Form components
5. Card + Avatar
6. Tabs compound
7. Modal + Tooltip
8. Exports, plugin, docs

## Success Criteria

- TS autocomplete for native HTML attrs on all components
- Public prop types exported
- `pnpm run build` passes
- VitePress docs for each component
