<script setup lang="ts">
import { computed } from "vue";
import type { PaperProps } from "./Paper.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { getPaperClasses } from "./paperClasses";

const props = withDefaults(defineProps<PaperProps>(), {
  variant: "default",
  padding: "md",
  radius: "md",
  shadow: "sm",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    getPaperClasses(props.variant, props.padding, props.radius, props.shadow),
    props.class,
  ),
);
</script>

<template>
  <div :class="classes" v-bind="restAttrs">
    <slot></slot>
  </div>
</template>
