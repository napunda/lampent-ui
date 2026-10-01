# Badge

Etiqueta compacta para status, contadores e labels.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpBadge from "../demos/LpBadge.vue";
import LpGroup from "../demos/LpGroup.vue";
import { semanticColors } from "../demos/tokens";
</script>

## Uso básico

<LpDemo>
  <LpGroup gap="md">
    <LpBadge v-for="color in semanticColors" :key="color" variant="filled" :color="color">
      {{ color }}
    </LpBadge>
  </LpGroup>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | Variante | `'filled'` | Estilo visual |
| `color` | Cor semântica | `'primary'` | Cor |
| `size` | Tamanho | `'md'` | Tamanho |
| `radius` | Radius | `'md'` | Border radius |
| `class` | `string` | — | Classes adicionais |
