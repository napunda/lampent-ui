# Avatar

Imagem de perfil com fallback de iniciais a partir do `alt`.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpAvatar from "../demos/LpAvatar.vue";
import LpGroup from "../demos/LpGroup.vue";
</script>

## Uso básico

<LpDemo layout="grid">
  <LpAvatar alt="Ana Silva" color="primary" />
  <LpAvatar alt="João" color="success" size="lg" />
  <LpAvatar src="https://i.pravatar.cc/80?u=1" alt="Foto" />
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `src` | `string` | — | URL da imagem |
| `alt` | `string` | `''` | Texto alternativo / iniciais |
| `size` | Tamanho | `'md'` | Tamanho |
| `radius` | Radius | `'xl'` | Border radius |
| `color` | Cor semântica | `'primary'` | Cor do fallback |
| `class` | `string` | — | Classes adicionais |
