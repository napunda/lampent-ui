# Loader

Indicador de carregamento com variantes oval e dots.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpLoader from "../demos/LpLoader.vue";
import LpGroup from "../demos/LpGroup.vue";
</script>

## Uso básico

<LpDemo layout="grid">
  <LpLoader type="oval" color="primary" />
  <LpLoader type="dots" color="primary" />
</LpDemo>

## Tamanhos

<LpDemo layout="grid">
  <LpLoader size="xs" />
  <LpLoader size="md" />
  <LpLoader size="lg" />
  <LpLoader size="xl" />
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `size` | Tamanho | `'md'` | Tamanho |
| `color` | Cor semântica | `'primary'` | Cor |
| `type` | `'oval' \| 'dots'` | `'oval'` | Estilo da animação |
| `class` | `string` | — | Classes adicionais |
