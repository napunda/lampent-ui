# Textarea

Área de texto multilinha com v-model e variantes visuais.

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpTextarea from "../demos/LpTextarea.vue";

const text = ref("Olá, Lampent UI!");
</script>

## Uso básico

<LpDemo>
  <LpTextarea v-model="text" placeholder="Digite aqui..." rows="3" />
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | `''` | Valor (v-model) |
| `variant` | Variante | `'outline'` | Estilo visual |
| `color` | Cor semântica | `'neutral'` | Cor do campo |
| `size` | Tamanho | `'md'` | Tamanho |
| `radius` | Radius | `'md'` | Border radius |
| `autosize` | `boolean` | `false` | Ajusta altura ao conteúdo |
| `rows` | `number` | `3` | Linhas visíveis |
| `disabled` | `boolean` | `false` | Desabilita o campo |

### Emits

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:modelValue` | `string` | Emitido ao digitar |

Repassa atributos nativos de `<textarea>` (`name`, `aria-*`, etc.).
