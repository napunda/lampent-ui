# Alert

Mensagem de alerta com variantes e cores semânticas.

<script setup>
import LpDemo from "../demos/LpDemo.vue";
import LpAlert from "../demos/LpAlert.vue";
import LpStack from "../demos/LpStack.vue";
</script>

## Uso básico

<LpDemo>
  <LpStack gap="md">
    <LpAlert variant="light" color="primary" title="Informação">
      Sua conta foi atualizada com sucesso.
    </LpAlert>
    <LpAlert variant="light" color="danger" title="Erro">
      Não foi possível salvar as alterações.
    </LpAlert>
  </LpStack>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | Variante | `'light'` | Estilo visual |
| `color` | Cor semântica | `'primary'` | Cor do alerta |
| `radius` | Radius | `'md'` | Border radius |
| `title` | `string` | — | Título do alerta |
| `class` | `string` | — | Classes adicionais |

### Slots

| Nome | Descrição |
|------|-----------|
| `default` | Corpo da mensagem |
