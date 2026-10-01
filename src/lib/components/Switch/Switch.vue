<script setup lang="ts">
import { computed } from "vue";
import type { SwitchCustomProps } from "./Switch.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<SwitchCustomProps>(), {
  modelValue: false,
  disabled: false,
  size: "md",
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const trackSizes = {
  xs: "w-7 h-4",
  md: "w-9 h-5",
  lg: "w-11 h-6",
  xl: "w-14 h-7",
};

const thumbSizes = {
  xs: "size-3",
  md: "size-4",
  lg: "size-5",
  xl: "size-6",
};

const thumbTranslate = {
  xs: "translate-x-3",
  md: "translate-x-4",
  lg: "translate-x-5",
  xl: "translate-x-7",
};

const wrapperClasses = computed(() =>
  mergeClasses(
    cn(
      "inline-flex items-center gap-2",
      props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    ),
    props.class,
  ),
);

const trackClasses = computed(() =>
  cn(
    "relative inline-flex shrink-0 rounded-full transition-colors duration-200",
    trackSizes[props.size],
    props.modelValue ? "bg-primary-500" : "bg-neutral-300 dark:bg-neutral-600",
    props.disabled && "pointer-events-none",
  ),
);

const thumbClasses = computed(() =>
  cn(
    "absolute top-0.5 left-0.5 rounded-full bg-white shadow transition-transform duration-200",
    thumbSizes[props.size],
    props.modelValue && thumbTranslate[props.size],
  ),
);

function toggle() {
  if (!props.disabled) {
    emit("update:modelValue", !props.modelValue);
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    toggle();
  }
}
</script>

<template>
  <label :class="wrapperClasses">
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      :class="trackClasses"
      v-bind="restAttrs"
      @click="toggle"
      @keydown="onKeydown"
    >
      <span :class="thumbClasses" />
    </button>
    <span v-if="label || $slots.default" class="text-sm select-none">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
