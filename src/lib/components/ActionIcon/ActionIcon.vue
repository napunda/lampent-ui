<script setup lang="ts">
import { computed } from "vue";
import type { ActionIconProps } from "./ActionIcon.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { getButtonClasses } from "@/components/Button/buttonClasses";
import { actionIconSizeClasses } from "@/styles/layout";
import Loader from "@/components/Loader";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<ActionIconProps>(), {
  variant: "default",
  color: "neutral",
  size: "md",
  radius: "md",
  loading: false,
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    cn(
      getButtonClasses(props.variant, props.color, props.size, props.radius),
      actionIconSizeClasses[props.size],
      "p-0 shrink-0",
    ),
    props.class,
  ),
);
</script>

<template>
  <button
    :class="classes"
    :disabled="loading || disabled"
    v-bind="restAttrs"
  >
    <Loader v-if="loading" size="md" :color="color" />
    <slot v-else></slot>
  </button>
</template>
