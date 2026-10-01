<script setup lang="ts">
import { computed } from "vue";
import type { BadgeProps } from "./Badge.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { getBadgeClasses } from "./badgeClasses";

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "filled",
  color: "primary",
  size: "md",
  radius: "md",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    getBadgeClasses(props.variant, props.color, props.size, props.radius),
    props.class,
  ),
);
</script>

<template>
  <span :class="classes" v-bind="restAttrs">
    <slot></slot>
  </span>
</template>
