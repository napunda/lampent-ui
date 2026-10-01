# Radio

Botão de opção única para seleção em grupo.

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpRadio from "../demos/LpRadio.vue";
import LpStack from "../demos/LpStack.vue";

const plan = ref("pro");
</script>

## Uso básico

<LpDemo>
  <LpStack gap="xs">
    <LpRadio v-model="plan" value="free" name="plan" label="Grátis" />
    <LpRadio v-model="plan" value="pro" name="plan" label="Pro" />
    <LpRadio v-model="plan" value="team" name="plan" label="Team" />
  </LpStack>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string \| number` | — | Valor selecionado (v-model) |
| `value` | `string \| number` | — | Valor desta opção (obrigatório) |
| `name` | `string` | — | Nome do grupo |
| `label` | `string` | — | Texto do label |
| `disabled` | `boolean` | `false` | Desabilita |

### Emits

| Evento | Payload |
|--------|---------|
| `update:modelValue` | `string \| number` |
