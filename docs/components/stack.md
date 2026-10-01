# Stack

Layout flexível vertical para empilhar elementos com espaçamento configurável.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpStack from "../demos/LpStack.vue";
import LpButton from "../demos/LpButton.vue";
</script>

## Uso básico

<LpDemo>
  <LpStack gap="md">
    <LpButton variant="filled" color="primary">Primeiro</LpButton>
    <LpButton variant="outline" color="neutral">Segundo</LpButton>
  </LpStack>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `gap` | `'xs' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Espaçamento entre filhos |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Alinhamento cross-axis |
| `justify` | `'start' \| 'center' \| 'end' \| 'between'` | `'start'` | Alinhamento main-axis |
| `class` | `string` | — | Classes adicionais |

Repassa atributos HTML nativos ao `<div>` raiz.
