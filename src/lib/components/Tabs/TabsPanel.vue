<script setup lang="ts">
import { computed, inject } from "vue";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { tabsContextKey } from "./tabsContext";

interface TabsPanelProps {
  value: string;
  class?: string;
}

const props = defineProps<TabsPanelProps>();

defineOptions({ inheritAttrs: false });

const context = inject(tabsContextKey)!;

const { restAttrs, mergeClasses } = useForwardedAttrs();

const isActive = computed(() => context.activeTab.value === props.value);

const classes = computed(() => mergeClasses("pt-4", props.class));
</script>

<template>
  <div
    v-show="isActive"
    role="tabpanel"
    :class="classes"
    v-bind="restAttrs"
  >
    <slot></slot>
  </div>
</template>
