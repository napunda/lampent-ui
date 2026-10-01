<script setup lang="ts">
import { computed, inject } from "vue";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { tabsContextKey } from "./tabsContext";
import { cn } from "@/utils/cn";

interface TabsListProps {
  class?: string;
}

const props = defineProps<TabsListProps>();

defineOptions({ inheritAttrs: false });

const context = inject(tabsContextKey)!;

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    cn(
      "flex gap-1",
      context.orientation.value === "vertical"
        ? "flex-col border-r border-neutral-200 dark:border-neutral-700 pr-4"
        : "flex-row border-b border-neutral-200 dark:border-neutral-700",
    ),
    props.class,
  ),
);
</script>

<template>
  <div role="tablist" :class="classes" v-bind="restAttrs">
    <slot></slot>
  </div>
</template>
