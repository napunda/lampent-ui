<script setup lang="ts">
import { computed } from "vue";
import type { TitleProps } from "./Title.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import {
  fontWeightClasses,
  textColorClasses,
  titleSizeClasses,
} from "@/styles/typography";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<TitleProps>(), {
  order: 1,
  fw: "bold",
  c: "neutral",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const tag = computed(() => `h${props.order}` as const);

const classes = computed(() =>
  mergeClasses(
    cn(
      titleSizeClasses[props.order],
      fontWeightClasses[props.fw],
      textColorClasses[props.c],
    ),
    props.class,
  ),
);
</script>

<template>
  <component :is="tag" :class="classes" v-bind="restAttrs">
    <slot></slot>
  </component>
</template>
