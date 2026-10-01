<script setup lang="ts">
import { computed, ref } from "vue";
import type { AvatarProps } from "./Avatar.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { avatarSizeClasses } from "@/styles/layout";
import { radiusClasses } from "@/styles/radius";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<AvatarProps>(), {
  size: "md",
  radius: "xl",
  color: "primary",
  alt: "",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();
const imageError = ref(false);

const bgColorClasses = {
  primary: "bg-primary-100 text-primary-700",
  success: "bg-success-100 text-success-700",
  warning: "bg-warning-100 text-warning-800",
  danger: "bg-danger-100 text-danger-700",
  neutral: "bg-neutral-200 text-neutral-700",
};

const classes = computed(() =>
  mergeClasses(
    cn(
      "inline-flex items-center justify-center overflow-hidden font-medium shrink-0",
      avatarSizeClasses[props.size],
      radiusClasses[props.radius],
      bgColorClasses[props.color],
    ),
    props.class,
  ),
);

const showImage = computed(() => props.src && !imageError.value);

const initials = computed(() => {
  if (!props.alt) return "?";
  return props.alt
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
});

function onError() {
  imageError.value = true;
}
</script>

<template>
  <div :class="classes" v-bind="restAttrs">
    <img
      v-if="showImage"
      :src="src"
      :alt="alt"
      class="size-full object-cover"
      @error="onError"
    />
    <slot v-else>{{ initials }}</slot>
  </div>
</template>
