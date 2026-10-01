# Title

Títulos semânticos h1–h6 com estilos configuráveis.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpTitle from "../demos/LpTitle.vue";
</script>

## Uso básico

<LpDemo>
  <LpTitle :order="1">Título principal</LpTitle>
  <LpTitle :order="3" c="primary">Subtítulo</LpTitle>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `order` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Nível do heading (h1–h6) |
| `fw` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'bold'` | Peso da fonte |
| `c` | Cor semântica | `'neutral'` | Cor do texto |
| `class` | `string` | — | Classes adicionais |
