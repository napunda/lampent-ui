<script setup lang="ts">
import { computed, inject } from "vue";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { tabsContextKey } from "./tabsContext";
import { cn } from "@/utils/cn";

interface TabsTabProps {
  value: string;
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<TabsTabProps>(), {
  disabled: false,
});

defineOptions({ inheritAttrs: false });

const context = inject(tabsContextKey)!;

const { restAttrs, mergeClasses } = useForwardedAttrs();

const isActive = computed(() => context.activeTab.value === props.value);

const classes = computed(() =>
  mergeClasses(
    cn(
      "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px",
      isActive.value
        ? "border-primary-500 text-primary-600"
        : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300",
      props.disabled && "opacity-50 pointer-events-none",
    ),
    props.class,
  ),
);

function activate() {
  if (!props.disabled) {
    context.setActiveTab(props.value);
  }
}
</script>

<template>
  <button
    type="button"
    role="tab"
    :aria-selected="isActive"
    :disabled="disabled"
    :class="classes"
    v-bind="restAttrs"
    @click="activate"
  >
    <slot></slot>
  </button>
</template>
