# Instalação

## Requisitos

- Vue `^3.5.0`
- Node.js 18+

## npm

::: code-group

```bash [npm]
npm install lampent-ui
```

```bash [pnpm]
pnpm add lampent-ui
```

```bash [yarn]
yarn add lampent-ui
```

:::

## Estilos

Importe o CSS da biblioteca **uma vez** no entry point da aplicação:

```ts
// main.ts
import "lampent-ui/style.css";
```

Sem esse import, os componentes renderizam sem os estilos Tailwind da lib.

## Verificação

Após instalar, confirme que o pacote está disponível:

```ts
import { Button, TextInput, createLampentUI } from "lampent-ui";
```

Se o TypeScript não resolver os tipos, reinicie o servidor de linguagem do editor.

## Próximo passo

[Início rápido](/guide/quick-start) — configure o plugin e use seu primeiro componente.
