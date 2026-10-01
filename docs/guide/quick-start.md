# Início rápido

## Plugin global (recomendado)

Registra `LButton` e `LTextInput` e aplica o tema padrão:

```ts
// main.ts
import { createApp } from "vue";
import { createLampentUI } from "lampent-ui";
import "lampent-ui/style.css";
import App from "./App.vue";

createApp(App)
  .use(createLampentUI())
  .mount("#app");
```

```vue
<!-- App.vue -->
<template>
  <LButton variant="filled" color="primary">Salvar</LButton>
  <LTextInput v-model="email" placeholder="E-mail" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
</script>
```

## Importação individual

Útil para tree-shaking ou registro manual:

```vue
<script setup lang="ts">
import { Button, TextInput } from "lampent-ui";
import "lampent-ui/style.css";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <Button variant="outline" color="success">Confirmar</Button>
  <TextInput v-model="value" placeholder="Digite algo..." />
</template>
```

## Demo ao vivo

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpButton from "../demos/LpButton.vue";
import LpTextInput from "../demos/LpTextInput.vue";

const demoValue = ref("");
</script>

<LpDemo layout="stack">
  <LpButton variant="filled" color="primary">Botão primário</LpButton>
  <LpTextInput v-model="demoValue" placeholder="Teste o TextInput aqui" />
</LpDemo>

## Próximo passo

- [Temas](/guide/theming) — personalize cores e fontes
- [Componentes](/components/) — explore a API completa
