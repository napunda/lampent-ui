<script setup lang="ts">
import { computed } from "vue";
import type { TextProps } from "./Text.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import {
  fontWeightClasses,
  textColorClasses,
  textSizeClasses,
} from "@/styles/typography";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<TextProps>(), {
  size: "md",
  fw: "normal",
  c: "neutral",
  component: "p",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    cn(textSizeClasses[props.size], fontWeightClasses[props.fw], textColorClasses[props.c]),
    props.class,
  ),
);
</script>

<template>
  <component :is="component" :class="classes" v-bind="restAttrs">
    <slot></slot>
  </component>
</template>
