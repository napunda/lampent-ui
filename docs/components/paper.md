# Paper

Superfície com padding, sombra e variantes visuais.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpPaper from "../demos/LpPaper.vue";
import LpText from "../demos/LpText.vue";
</script>

## Uso básico

<LpDemo>
  <LpPaper padding="md" shadow="sm">
    <LpText>Conteúdo dentro de um Paper.</LpText>
  </LpPaper>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `'default' \| 'filled' \| 'outline' \| 'light'` | `'default'` | Estilo visual |
| `padding` | `'xs' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Padding interno |
| `radius` | `'xs' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Border radius |
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Sombra |
| `class` | `string` | — | Classes adicionais |
