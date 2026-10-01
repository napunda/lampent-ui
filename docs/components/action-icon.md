# ActionIcon

Botão compacto para ícones, com suporte a loading.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpActionIcon from "../demos/LpActionIcon.vue";
</script>

## Uso básico

<LpDemo layout="grid">
  <LpActionIcon variant="light" color="primary" aria-label="Editar">
    ✎
  </LpActionIcon>
  <LpActionIcon variant="light" color="danger" aria-label="Excluir">
    ✕
  </LpActionIcon>
  <LpActionIcon variant="filled" color="primary" loading aria-label="Salvando" />
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | Variante | `'default'` | Estilo visual |
| `color` | Cor semântica | `'neutral'` | Cor |
| `size` | Tamanho | `'md'` | Tamanho |
| `radius` | Radius | `'md'` | Border radius |
| `loading` | `boolean` | `false` | Exibe loader |
| `disabled` | `boolean` | `false` | Desabilita |

Repassa atributos nativos de `<button>` (`aria-label`, `type`, etc.).
