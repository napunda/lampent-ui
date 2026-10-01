# Lampent UI

Biblioteca de componentes Vue 3 com Tailwind CSS.

## Instalação

```bash
npm install lampent-ui
# ou
pnpm add lampent-ui
```

## Uso

### Plugin global (recomendado)

Registra os componentes `LButton` e `LTextInput` e aplica o tema:

```ts
// main.ts
import { createApp } from "vue";
import { createLampentUI } from "lampent-ui";
import "lampent-ui/style.css";
import App from "./App.vue";

createApp(App)
  .use(
    createLampentUI({
      // opcional: sobrescrever tema
      // colors: { primary: "#6366f1" },
    }),
  )
  .mount("#app");
```

```vue
<template>
  <LButton variant="filled" color="primary">Salvar</LButton>
  <LTextInput v-model="email" placeholder="E-mail" />
</template>
```

### Importação individual

```vue
<script setup lang="ts">
import { Button, TextInput } from "lampent-ui";
import "lampent-ui/style.css";
</script>

<template>
  <Button variant="outline" color="success">OK</Button>
  <TextInput v-model="value" />
</template>
```

## Publicação

```bash
pnpm run build
npm publish
```

O script `prepublishOnly` roda o build automaticamente antes de publicar.

## Desenvolvimento

```bash
pnpm dev
```

## Documentação

```bash
pnpm docs:dev    # servidor local em http://localhost:5173
pnpm docs:build  # build estático em docs/.vitepress/dist
pnpm docs:preview
```
