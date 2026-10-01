<script setup lang="ts">
import { computed } from "vue";
import type { ComponentStyleProps } from "@/types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { getButtonClasses } from "./buttonClasses";

const props = withDefaults(defineProps<ComponentStyleProps>(), {
  variant: "default",
  color: "primary",
  size: "md",
  radius: "md",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    getButtonClasses(props.variant, props.color, props.size, props.radius),
    props.class,
  ),
);
</script>

<template>
  <button :class="classes" v-bind="restAttrs">
    <slot></slot>
  </button>
</template>
