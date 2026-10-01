# Componentes

Explore os componentes disponíveis na Lampent UI. Cada página inclui exemplos interativos e referência de API.

## Layout

<div class="components-grid">
  <ComponentCard title="Stack" description="Layout flexível vertical com gap configurável." href="/components/stack" />
  <ComponentCard title="Group" description="Layout flexível horizontal para agrupar elementos." href="/components/group" />
  <ComponentCard title="Paper" description="Superfície com padding, sombra e variantes." href="/components/paper" />
  <ComponentCard title="Divider" description="Separador horizontal ou vertical com label opcional." href="/components/divider" />
</div>

## Tipografia

<div class="components-grid">
  <ComponentCard title="Text" description="Texto com tamanho, peso e cor semântica." href="/components/text" />
  <ComponentCard title="Title" description="Títulos h1–h6 com estilos configuráveis." href="/components/title" />
</div>

## Formulário

<div class="components-grid">
  <ComponentCard title="Button" description="Botão com variantes, tamanhos, cores e radius." href="/components/button" />
  <ComponentCard title="TextInput" description="Campo de texto com v-model e variantes visuais." href="/components/text-input" />
  <ComponentCard title="Textarea" description="Área de texto multilinha com autosize opcional." href="/components/textarea" />
  <ComponentCard title="Checkbox" description="Caixa de seleção com label e estado indeterminado." href="/components/checkbox" />
  <ComponentCard title="Switch" description="Toggle on/off estilizado." href="/components/switch" />
  <ComponentCard title="Radio" description="Botão de opção única em grupo." href="/components/radio" />
</div>

## Feedback

<div class="components-grid">
  <ComponentCard title="Alert" description="Mensagem de alerta com variantes e cores." href="/components/alert" />
  <ComponentCard title="Badge" description="Etiqueta compacta para status e contadores." href="/components/badge" />
  <ComponentCard title="Loader" description="Indicador de carregamento oval ou dots." href="/components/loader" />
  <ComponentCard title="ActionIcon" description="Botão compacto para ícones com estado loading." href="/components/action-icon" />
</div>

## Dados

<div class="components-grid">
  <ComponentCard title="Card" description="Container com slots header e footer." href="/components/card" />
  <ComponentCard title="Avatar" description="Imagem de perfil com fallback de iniciais." href="/components/avatar" />
</div>

## Overlay e navegação

<div class="components-grid">
  <ComponentCard title="Tabs" description="Navegação por abas com compound components." href="/components/tabs" />
  <ComponentCard title="Modal" description="Diálogo modal nativo com Teleport." href="/components/modal" />
  <ComponentCard title="Tooltip" description="Dica flutuante posicionada com Floating UI." href="/components/tooltip" />
</div>

## Uso com plugin

Com `createLampentUI()`, os componentes ficam disponíveis globalmente com prefixo `L`:

```vue
<LButton variant="filled" color="primary">Salvar</LButton>
<LStack gap="md">
  <LTextInput v-model="email" placeholder="E-mail" />
</LStack>
```

## Importação direta

```vue
<script setup lang="ts">
import { Button, Stack, TextInput } from "lampent-ui";
</script>
```
