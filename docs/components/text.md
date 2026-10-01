# Text

Componente de texto com tamanho, peso e cor semântica.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpText from "../demos/LpText.vue";
</script>

## Uso básico

<LpDemo layout="grid">
  <LpText size="md">Texto padrão</LpText>
  <LpText size="lg" fw="semibold" c="primary">Texto destacado</LpText>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `size` | `'xs' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamanho da fonte |
| `fw` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Peso da fonte |
| `c` | Cor semântica | `'neutral'` | Cor do texto |
| `component` | `'p' \| 'span' \| 'div'` | `'p'` | Elemento HTML raiz |
| `class` | `string` | — | Classes adicionais |
