<script setup lang="ts">
import { computed } from "vue";
import type { StackProps } from "./Stack.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { gapClasses } from "@/styles/gap";
import { alignClasses, justifyClasses } from "@/styles/layout";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<StackProps>(), {
  gap: "md",
  align: "stretch",
  justify: "start",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    cn(
      "flex flex-col",
      gapClasses[props.gap],
      alignClasses[props.align],
      justifyClasses[props.justify],
    ),
    props.class,
  ),
);
</script>

<template>
  <div :class="classes" v-bind="restAttrs">
    <slot></slot>
  </div>
</template>
