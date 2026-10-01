# Modal

Diálogo modal nativo (`<dialog>`) com Teleport e backdrop.

<script setup>
import { ref } from "vue";
import LpDemo from "../demos/LpDemo.vue";
import LpModal from "../demos/LpModal.vue";
import LpButton from "../demos/LpButton.vue";

const opened = ref(false);
</script>

## Uso básico

<LpDemo>
  <LpButton variant="filled" color="primary" @click="opened = true">
    Abrir modal
  </LpButton>
  <LpModal v-model:opened="opened" title="Confirmar ação">
    Deseja continuar com esta operação?
    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: flex-end">
      <LpButton variant="outline" color="neutral" @click="opened = false">Cancelar</LpButton>
      <LpButton variant="filled" color="primary" @click="opened = false">Confirmar</LpButton>
    </div>
  </LpModal>
</LpDemo>

## API

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `opened` | `boolean` | `false` | Controla visibilidade (v-model:opened) |
| `title` | `string` | — | Título do modal |
| `size` | Tamanho | `'md'` | Largura máxima |
| `class` | `string` | — | Classes adicionais |

### Emits

| Evento | Descrição |
|--------|-----------|
| `close` | Emitido ao fechar |
| `update:opened` | Emitido ao alterar visibilidade |

Fecha com Escape ou clique no backdrop.
