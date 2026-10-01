# Tooltip

Dica flutuante posicionada com Floating UI.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpTooltip from "../demos/LpTooltip.vue";
import LpButton from "../demos/LpButton.vue";
</script>

## Uso básico

<LpDemo layout="grid">
  <LpTooltip label="Salvar documento">
    <LpButton variant="filled" color="primary">Hover me</LpButton>
  </LpTooltip>
  <LpTooltip label="Posição à direita" position="right">
    <LpButton variant="outline" color="neutral">Direita</LpButton>
  </LpTooltip>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | — | Texto do tooltip |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right' \| ...` | `'top'` | Posição |
| `openDelay` | `number` | `200` | Delay em ms |
| `disabled` | `boolean` | `false` | Desabilita |
| `class` | `string` | — | Classes adicionais |

### Slots

| Nome | Descrição |
|------|-----------|
| `default` | Elemento trigger |
| `label` | Conteúdo customizado do tooltip |

::: info Dependência
Requer `@floating-ui/vue` como peer dependency.
:::
