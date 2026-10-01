# Switch

Toggle on/off estilizado com role switch.

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpSwitch from "../demos/LpSwitch.vue";

const enabled = ref(false);
</script>

## Uso básico

<LpDemo>
  <LpSwitch v-model="enabled" label="Notificações" />
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `boolean` | `false` | Valor (v-model) |
| `label` | `string` | — | Texto do label |
| `disabled` | `boolean` | `false` | Desabilita |
| `size` | Tamanho | `'md'` | Tamanho do track |

### Emits

| Evento | Payload |
|--------|---------|
| `update:modelValue` | `boolean` |
