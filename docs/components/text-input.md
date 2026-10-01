# TextInput

Campo de texto com suporte a `v-model`, variantes visuais e cores semânticas.

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpTextInput from "../demos/LpTextInput.vue";
import { componentVariants, semanticColors, componentSizes } from "../demos/tokens";

const email = ref("");
const search = ref("");
</script>

## Uso básico

<LpDemo layout="stack">
  <LpTextInput v-model="email" placeholder="E-mail" variant="outline" color="primary" />
  <LpTextInput v-model="search" placeholder="Buscar..." variant="filled" color="neutral" />
</LpDemo>

```vue
<script setup lang="ts">
import { ref } from "vue";
import { TextInput } from "lampent-ui";

const email = ref("");
</script>

<template>
  <TextInput v-model="email" placeholder="E-mail" variant="outline" color="primary" />
</template>
```

## Variantes

<div v-for="variant in componentVariants" :key="variant">
  <p class="vp-demo__title">{{ variant }}</p>
  <LpDemo layout="stack">
    <LpTextInput
      v-for="color in semanticColors"
      :key="`${variant}-${color}`"
      :variant="variant"
      :color="color"
      :placeholder="`${variant} / ${color}`"
    />
  </LpDemo>
</div>

## Tamanhos

<LpDemo layout="stack">
  <LpTextInput
    v-for="size in componentSizes"
    :key="size"
    :size="size"
    variant="outline"
    color="primary"
    :placeholder="`Tamanho ${size}`"
  />
</LpDemo>

## Desabilitado

<LpDemo layout="stack">
  <LpTextInput placeholder="Campo desabilitado" disabled variant="filled" color="neutral" />
</LpDemo>

## API

### Props

| Prop | Tipo | Padrão | Descrição |
| ---- | ---- | ------ | --------- |
| `modelValue` | `string` | `''` | Valor controlado (`v-model`) |
| `variant` | `'default' \| 'filled' \| 'outline' \| 'light'` | `'outline'` | Estilo visual |
| `color` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'neutral'` | `'neutral'` | Cor semântica |
| `size` | `'xs' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamanho do input |
| `radius` | `'xs' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Arredondamento |
| `placeholder` | `string` | — | Texto placeholder |
| `disabled` | `boolean` | `false` | Desabilita o campo |
| `class` | `string` | — | Classes Tailwind adicionais |

### Eventos

| Evento | Payload | Descrição |
| ------ | ------- | --------- |
| `update:modelValue` | `string` | Emitido quando o valor muda |

### Atributos nativos

Atributos HTML são repassados ao `<input>` (exceto `class`). Exemplos: `name`, `autocomplete`, `readonly`.

### Registro global

Com o plugin: `<LTextInput v-model="value" />`.
