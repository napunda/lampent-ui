<script setup lang="ts">
import { computed } from "vue";
import type { CardProps } from "./Card.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { radiusClasses } from "@/styles/radius";
import { paddingClasses } from "@/styles/padding";
import { shadowClasses } from "@/styles/shadow";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<CardProps>(), {
  padding: "md",
  radius: "md",
  shadow: "sm",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    cn(
      "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
      paddingClasses[props.padding],
      radiusClasses[props.radius],
      shadowClasses[props.shadow],
    ),
    props.class,
  ),
);
</script>

<template>
  <div :class="classes" v-bind="restAttrs">
    <div v-if="$slots.header" class="mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-700">
      <slot name="header"></slot>
    </div>
    <slot></slot>
    <div v-if="$slots.footer" class="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-700">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
