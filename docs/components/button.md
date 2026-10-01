# Button

Botão estilizado com variantes visuais, cores semânticas, tamanhos e border-radius configuráveis.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpButton from "../demos/LpButton.vue";
import {
  componentVariants,
  semanticColors,
  componentSizes,
  componentRadius,
} from "../demos/tokens";
</script>

## Uso básico

<LpDemo layout="grid">
  <LpButton variant="filled" color="primary">Primary</LpButton>
  <LpButton variant="outline" color="success">Success</LpButton>
  <LpButton variant="light" color="warning">Warning</LpButton>
  <LpButton variant="default" color="danger">Danger</LpButton>
</LpDemo>

```vue
<Button variant="filled" color="primary">Primary</Button>
<Button variant="outline" color="success">Success</Button>
```

## Variantes

<div v-for="variant in componentVariants" :key="variant">
  <p class="vp-demo__title">{{ variant }}</p>
  <LpDemo layout="grid">
    <LpButton
      v-for="color in semanticColors"
      :key="`${variant}-${color}`"
      :variant="variant"
      :color="color"
    >
      {{ color }}
    </LpButton>
  </LpDemo>
</div>

## Tamanhos

<LpDemo layout="grid">
  <LpButton
    v-for="size in componentSizes"
    :key="size"
    variant="filled"
    color="primary"
    :size="size"
  >
    {{ size }}
  </LpButton>
</LpDemo>

## Radius

<LpDemo layout="grid">
  <LpButton
    v-for="radius in componentRadius"
    :key="radius"
    variant="filled"
    color="primary"
    :radius="radius"
  >
    {{ radius }}
  </LpButton>
</LpDemo>

## Desabilitado

<LpDemo layout="grid">
  <LpButton variant="filled" color="primary" disabled>Desabilitado</LpButton>
  <LpButton variant="outline" color="neutral" disabled>Desabilitado</LpButton>
</LpDemo>

## API

### Props

| Prop      | Tipo                                                           | Padrão      | Descrição                   |
| --------- | -------------------------------------------------------------- | ----------- | --------------------------- |
| `variant` | `'default' \| 'filled' \| 'outline' \| 'light'`                | `'default'` | Estilo visual do botão      |
| `color`   | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'neutral'` | `'primary'` | Cor semântica               |
| `size`    | `'xs' \| 'md' \| 'lg' \| 'xl'`                                 | `'md'`      | Tamanho do botão            |
| `radius`  | `'xs' \| 'md' \| 'lg' \| 'xl'`                                 | `'md'`      | Arredondamento das bordas   |
| `class`   | `string`                                                       | —           | Classes Tailwind adicionais |

### Slots

| Nome      | Descrição         |
| --------- | ----------------- |
| `default` | Conteúdo do botão |

### Atributos nativos

O componente repassa atributos HTML ao elemento `<button>` (exceto `class`, mesclada internamente). Exemplos: `type`, `disabled`, `aria-label`.

### Registro global

Com o plugin: `<LButton />` — equivalente a `<Button />` importado.

::: tip Uso na documentação
No VitePress, tags como `<Button>` e `<Demo>` viram elementos HTML nativos (`<button>`, `<demo>`). Importe explicitamente os wrappers `LpButton`, `LpDemo`, etc. de `docs/demos/` no `<script setup>` de cada página.
:::
