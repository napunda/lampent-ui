<script setup lang="ts">
import { computed } from "vue";
import type { DividerProps } from "./Divider.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: "horizontal",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const isVertical = computed(() => props.orientation === "vertical");

const lineClasses = computed(() =>
  cn(
    "border-0 bg-neutral-200 dark:bg-neutral-700 shrink-0",
    isVertical.value ? "w-px self-stretch" : "h-px w-full",
  ),
);

const wrapperClasses = computed(() =>
  mergeClasses(
    cn(
      "flex items-center",
      isVertical.value ? "flex-col h-full" : "w-full",
      props.label && !isVertical.value && "gap-3",
    ),
    props.class,
  ),
);
</script>

<template>
  <div
    v-if="label && !isVertical"
    :class="wrapperClasses"
    role="separator"
    :aria-orientation="orientation"
    v-bind="restAttrs"
  >
    <hr :class="lineClasses" class="flex-1" />
    <span class="text-xs text-neutral-500 shrink-0">{{ label }}</span>
    <hr :class="lineClasses" class="flex-1" />
  </div>
  <hr
    v-else
    :class="mergeClasses(lineClasses, props.class)"
    role="separator"
    :aria-orientation="orientation"
    v-bind="restAttrs"
  />
</template>
