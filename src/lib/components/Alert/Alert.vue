<script setup lang="ts">
import { computed } from "vue";
import type { AlertCustomProps } from "./Alert.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { getAlertClasses } from "./alertClasses";

const props = withDefaults(defineProps<AlertCustomProps>(), {
  variant: "light",
  color: "primary",
  radius: "md",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    getAlertClasses(props.variant, props.color, props.radius),
    props.class,
  ),
);
</script>

<template>
  <div role="alert" :class="classes" v-bind="restAttrs">
    <p v-if="title" class="font-semibold mb-1">{{ title }}</p>
    <slot></slot>
  </div>
</template>
