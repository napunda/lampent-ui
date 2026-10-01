# Group

Layout flexível horizontal para agrupar elementos inline.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpGroup from "../demos/LpGroup.vue";
import LpButton from "../demos/LpButton.vue";
</script>

## Uso básico

<LpDemo>
  <LpGroup gap="md">
    <LpButton variant="filled" color="primary">Salvar</LpButton>
    <LpButton variant="outline" color="neutral">Cancelar</LpButton>
  </LpGroup>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `gap` | `'xs' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Espaçamento entre filhos |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alinhamento vertical |
| `justify` | `'start' \| 'center' \| 'end' \| 'between'` | `'start'` | Alinhamento horizontal |
| `wrap` | `boolean` | `false` | Permite quebra de linha |
| `class` | `string` | — | Classes adicionais |
