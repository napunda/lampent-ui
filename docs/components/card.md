# Card

Container com slots para header, conteúdo e footer.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpCard from "../demos/LpCard.vue";
import LpText from "../demos/LpText.vue";
import LpButton from "../demos/LpButton.vue";
</script>

## Uso básico

<LpDemo>
  <LpCard padding="md">
    <template #header>
      <LpText fw="semibold">Título do card</LpText>
    </template>
    Conteúdo principal do card.
    <template #footer>
      <LpButton variant="filled" color="primary" size="xs">Ação</LpButton>
    </template>
  </LpCard>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `padding` | Tamanho | `'md'` | Padding interno |
| `radius` | Radius | `'md'` | Border radius |
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Sombra |
| `class` | `string` | — | Classes adicionais |

### Slots

| Nome | Descrição |
|------|-----------|
| `header` | Cabeçalho |
| `default` | Conteúdo |
| `footer` | Rodapé |
