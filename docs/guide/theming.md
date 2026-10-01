# Temas

O plugin `createLampentUI` aplica variáveis CSS em runtime via `applyTheme`, permitindo customizar fonte e cores sem recompilar.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpButton from "../demos/LpButton.vue";
import { semanticColors, componentVariants } from "../demos/tokens";
</script>

## Configuração básica

```ts
import { createLampentUI } from "lampent-ui";

createApp(App).use(
  createLampentUI({
    fontFamily: '"Roboto", sans-serif',
    colors: {
      primary: "#6366f1",
      success: "#22c55e",
    },
  }),
);
```

## Paleta padrão

| Token | Cor | Uso |
| ----- | --- | --- |
| `primary` | `#665d99` | Ações principais, roxo Lampent |
| `success` | `#75a6d4` | Confirmações, azul chama |
| `warning` | `#edd045` | Alertas, amarelo chama |
| `danger` | `#c9482a` | Erros e ações destrutivas |
| `neutral` | `#1e2b30` | Textos e superfícies neutras |

## Cores semânticas nos componentes

Todos os componentes aceitam a prop `color` com os valores: `primary`, `success`, `warning`, `danger`, `neutral`.

<LpDemo layout="grid">
  <LpButton
    v-for="color in semanticColors"
    :key="color"
    variant="filled"
    :color="color"
  >
    {{ color }}
  </LpButton>
</LpDemo>

## Variantes

<LpDemo layout="grid">
  <LpButton
    v-for="variant in componentVariants"
    :key="variant"
    :variant="variant"
    color="primary"
  >
    {{ variant }}
  </LpButton>
</LpDemo>

## applyTheme isolado

Se preferir não usar o plugin, importe `applyTheme` diretamente:

```ts
import { applyTheme } from "lampent-ui";

applyTheme({
  colors: { primary: "#665d99" },
});
```

Chame antes de montar a aplicação para que as variáveis CSS estejam disponíveis.
