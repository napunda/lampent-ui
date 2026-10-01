<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { ModalProps } from "./Modal.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<ModalProps>(), {
  opened: false,
  size: "md",
});

const emit = defineEmits<{
  close: [];
  "update:opened": [value: boolean];
}>();

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();
const dialogRef = ref<HTMLDialogElement | null>(null);

const sizeClasses = {
  xs: "max-w-xs",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

const dialogClasses = computed(() =>
  mergeClasses(
    cn(
      "w-full rounded-lg border border-neutral-200 dark:border-neutral-700",
      "bg-white dark:bg-neutral-900 p-0 shadow-xl backdrop:bg-black/50",
      sizeClasses[props.size],
    ),
    props.class,
  ),
);

function close() {
  emit("update:opened", false);
  emit("close");
}

function onCancel(event: Event) {
  event.preventDefault();
  close();
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === dialogRef.value) {
    close();
  }
}

watch(
  () => props.opened,
  (isOpen) => {
    const dialog = dialogRef.value;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();
  },
  { immediate: true },
);
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialogRef"
      :class="dialogClasses"
      v-bind="restAttrs"
      @cancel="onCancel"
      @close="close"
      @click="onBackdropClick"
    >
      <div class="p-6" @click.stop>
        <div v-if="title || $slots.title" class="mb-4 flex items-center justify-between">
          <h2 v-if="title" class="text-lg font-semibold">{{ title }}</h2>
          <slot name="title"></slot>
          <button
            type="button"
            class="ml-auto text-neutral-400 hover:text-neutral-600 text-xl leading-none"
            aria-label="Fechar"
            @click="close"
          >
            &times;
          </button>
        </div>
        <slot></slot>
      </div>
    </dialog>
  </Teleport>
</template>
