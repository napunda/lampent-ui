# Tabs

Navegação por abas com compound components.

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpTabs from "../demos/LpTabs.vue";
import LpTabsList from "../demos/LpTabsList.vue";
import LpTabsTab from "../demos/LpTabsTab.vue";
import LpTabsPanel from "../demos/LpTabsPanel.vue";

const tab = ref("1");
</script>

## Uso básico

<LpDemo>
  <LpTabs v-model="tab">
    <LpTabsList>
      <LpTabsTab value="1">Geral</LpTabsTab>
      <LpTabsTab value="2">Configurações</LpTabsTab>
    </LpTabsList>
    <LpTabsPanel value="1">Conteúdo da aba Geral.</LpTabsPanel>
    <LpTabsPanel value="2">Conteúdo da aba Configurações.</LpTabsPanel>
  </LpTabs>
</LpDemo>

## API

### Tabs

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | — | Aba ativa (v-model) |
| `defaultValue` | `string` | — | Aba inicial |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientação |

### TabsTab

| Prop | Tipo | Descrição |
|------|------|-----------|
| `value` | `string` | Identificador da aba (obrigatório) |
| `disabled` | `boolean` | Desabilita a aba |

### TabsPanel

| Prop | Tipo | Descrição |
|------|------|-----------|
| `value` | `string` | Identificador correspondente à aba |
