# Divider

Separador horizontal ou vertical com label opcional.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpDivider from "../demos/LpDivider.vue";
</script>

## Uso básico

<LpDemo>
  <LpDivider />
  <LpDivider label="ou" />
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direção do separador |
| `label` | `string` | — | Texto central (horizontal) |
| `class` | `string` | — | Classes adicionais |
