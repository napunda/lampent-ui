# Checkbox

Caixa de seleção com label e suporte a estado indeterminado.

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpCheckbox from "../demos/LpCheckbox.vue";

const checked = ref(true);
</script>

## Uso básico

<LpDemo>
  <LpCheckbox v-model="checked" label="Aceito os termos" />
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `boolean` | `false` | Valor (v-model) |
| `label` | `string` | — | Texto do label |
| `indeterminate` | `boolean` | `false` | Estado indeterminado |
| `disabled` | `boolean` | `false` | Desabilita |
| `size` | Tamanho | `'md'` | Tamanho |
| `color` | Cor semântica | `'primary'` | Cor do checkbox |

### Emits

| Evento | Payload |
|--------|---------|
| `update:modelValue` | `boolean` |
