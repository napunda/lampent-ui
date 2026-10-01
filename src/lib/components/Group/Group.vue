<script setup lang="ts">
import { computed } from "vue";
import type { GroupProps } from "./Group.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { gapClasses } from "@/styles/gap";
import { alignClasses, justifyClasses } from "@/styles/layout";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<GroupProps>(), {
  gap: "md",
  align: "center",
  justify: "start",
  wrap: false,
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    cn(
      "flex flex-row",
      gapClasses[props.gap],
      alignClasses[props.align],
      justifyClasses[props.justify],
      props.wrap && "flex-wrap",
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
